import path from "node:path";
import { z } from "zod";
import { query } from "../db/pool";
import { env } from "../config/env";
import { generateCertificatePdf } from "../utils/certificateRenderer";
import { sendCertificateEmail } from "./mailService";
import { sendWhatsAppFile, sendWhatsAppMessage, type WhatsAppCredentials } from "./whatsappService";

const fulfillmentPayloadSchema = z.object({
  orderId: z.string(),
  orderNumber: z.string(),
  deliveryMethod: z.enum(["email", "whatsapp", "download"]),
  deliveryContact: z.string().nullable(),
  totalAmount: z.number(),
  certificate: z.object({
    id: z.string(),
    code: z.string(),
    name: z.string(),
    senderName: z.string().nullable(),
    recipientName: z.string().nullable(),
    recipientEmail: z.string().nullable(),
    message: z.string().nullable(),
    startDate: z.date().nullable(),
    finishDate: z.date().nullable(),
  }),
  company: z.object({
    label: z.string().nullable(),
    address: z.string().nullable(),
    wazzupApiToken: z.string().nullable().optional(),
    wazzupChannelId: z.string().nullable().optional(),
    wazzupNumber: z.string().nullable().optional(),
  }),
  client: z.object({
    name: z.string().nullable(),
    email: z.string().nullable(),
    phone: z.string().nullable(),
  }),
  template: z
    .object({
      backgroundUrl: z.string().nullable().optional(),
      textColor: z.string().nullable().optional(),
    })
    .optional(),
});

export type FulfillmentPayload = z.infer<typeof fulfillmentPayloadSchema>;

const currencyFormatter = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "KZT",
  maximumFractionDigits: 0,
});

export async function runOrderFulfillment(payload: FulfillmentPayload) {
  const data = fulfillmentPayloadSchema.parse(payload);

  const pdf = await generateCertificatePdf({
    code: data.certificate.code,
    certificateName: data.certificate.name,
    amount: data.totalAmount,
    recipientName: data.certificate.recipientName ?? data.client.name ?? "Получатель",
    senderName: data.certificate.senderName ?? "Buddha Spa",
    companyLabel: data.company.label ?? "Buddha Spa",
    companyAddress: data.company.address ?? "",
    message: data.certificate.message ?? "",
    validUntil: data.certificate.finishDate ?? undefined,
    issuedAt: data.certificate.startDate ?? new Date(),
    backgroundImageUrl: data.template?.backgroundUrl ?? undefined,
    textColor: data.template?.textColor ?? undefined,
  });
  const downloadUrl = env.APP_BASE_URL
    ? `${env.APP_BASE_URL.replace(/\/$/, "")}/api/certificates/${data.certificate.id}/download`
    : null;

  await query(
    `UPDATE certificates SET file_url = $2, updated_at = NOW() WHERE id = $1`,
    [data.certificate.id, pdf.relativePath],
  );

  await query(
    `UPDATE orders SET status = 'fulfilled', fulfilled_at = NOW(), updated_at = NOW() WHERE id = $1`,
    [data.orderId],
  );

  const summaryText = `Вам подарен сертификат ${data.certificate.code} на сумму ${currencyFormatter.format(
    data.totalAmount,
  )} от ${data.certificate.senderName ?? "Buddha Spa"}.`;

  const whatsappChatId = data.deliveryMethod === "whatsapp" ? data.deliveryContact ?? data.client.phone : null;
  const whatsappMessage = `${summaryText} Срок действия до ${
    data.certificate.finishDate ? data.certificate.finishDate.toLocaleDateString("ru-RU") : "не ограничен"
  }.`;
  const whatsappCredentials: WhatsAppCredentials | null =
    data.company.wazzupApiToken && data.company.wazzupChannelId
      ? {
          token: data.company.wazzupApiToken,
          channelId: data.company.wazzupChannelId,
          number: data.company.wazzupNumber,
        }
      : null;

  if (data.deliveryMethod === "whatsapp" && whatsappChatId) {
    if (!whatsappCredentials) {
      console.info("[fulfillment] WhatsApp credentials missing for company, skipping send", {
        company: data.company.label,
      });
    } else {
      try {
        await sendWhatsAppMessage(
          {
            chatId: whatsappChatId,
            text: whatsappMessage,
          },
          whatsappCredentials,
        );
      } catch (error) {
        console.error("[fulfillment] Не удалось отправить WhatsApp сообщение:", error);
      }

      try {
        await sendWhatsAppFile(
          {
            chatId: whatsappChatId,
            fileName: pdf.fileName,
            buffer: pdf.buffer,
            contentUri: downloadUrl ?? undefined,
            caption: summaryText,
            mimeType: "application/pdf",
          },
          whatsappCredentials,
        );
      } catch (error) {
        console.error("[fulfillment] Не удалось отправить файл в WhatsApp:", error);
      }
    }
  }

  const emailRecipient =
    data.deliveryMethod === "email"
      ? data.deliveryContact
      : data.certificate.recipientEmail ?? data.client.email ?? undefined;

  if (emailRecipient) {
    const downloadText = downloadUrl ?? "доступно после оплаты";
    try {
      await sendCertificateEmail({
        to: emailRecipient,
        subject: `Ваш сертификат Buddha Spa №${data.certificate.code}`,
        text: `${summaryText}\n\nСкачать сертификат: ${downloadText}.`,
        attachments: [
          {
            filename: pdf.fileName,
            content: pdf.buffer,
          },
        ],
      });
    } catch (error) {
      console.error("[fulfillment] Не удалось отправить email с сертификатом:", error);
    }
  }

  return {
    filePath: path.isAbsolute(pdf.relativePath) ? pdf.relativePath : path.join(process.cwd(), pdf.relativePath),
    relativePath: pdf.relativePath,
    downloadUrl,
  };
}
