import { Router } from "express";
import { z } from "zod";
import { asyncHandler } from "../middleware/asyncHandler";
import { sendCertificateEmail } from "../services/mailService";
import { getCompany } from "../services/companyService";
import { sendWhatsAppMessage } from "../services/whatsappService";

const currencyFormatter = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "KZT",
  maximumFractionDigits: 0,
});

const baseSchema = z.object({
  recipientName: z.string().min(1),
  senderName: z.string().min(1),
  amount: z.number().min(0),
  message: z.string().optional(),
});

const previewEmailSchema = baseSchema.extend({
  recipientEmail: z.string().email(),
});

const previewWhatsAppSchema = baseSchema.extend({
  phone: z.string().min(3),
  companyId: z.string().uuid().optional(),
});

export const previewRouter = Router();

previewRouter.post(
  "/email",
  asyncHandler(async (req, res) => {
    const payload = previewEmailSchema.parse(req.body);
    const summary = `Тестовый сертификат Buddha Spa для ${payload.recipientName} на сумму ${currencyFormatter.format(payload.amount)}.`;

    console.info("[preview/email] sending test email", {
      to: payload.recipientEmail,
      recipient: payload.recipientName,
      amount: payload.amount,
    });

    const result = await sendCertificateEmail({
      to: payload.recipientEmail,
      subject: "Тестовый сертификат Buddha Spa",
      text: `${summary}\nОтправитель: ${payload.senderName}${
        payload.message ? `\nСообщение: ${payload.message}` : ""
      }`,
    });

    console.info("[preview/email] result", result);

    res.json({ success: !("skipped" in result), skipped: "skipped" in result });
  }),
);

previewRouter.post(
  "/whatsapp",
  asyncHandler(async (req, res) => {
    const payload = previewWhatsAppSchema.parse(req.body);
    const summary = `Тестовый сертификат Buddha Spa для ${payload.recipientName} на сумму ${currencyFormatter.format(payload.amount)}.`;

    console.info("[preview/whatsapp] sending test message", {
      chatId: payload.phone,
      recipient: payload.recipientName,
      amount: payload.amount,
    });

    let credentials = null;
    if (payload.companyId) {
      const company = await getCompany(payload.companyId);
      if (!company) {
        return res.status(404).json({ message: "Филиал не найден" });
      }
      if (company.wazzupApiToken && company.wazzupChannelId) {
        credentials = {
          token: company.wazzupApiToken,
          channelId: company.wazzupChannelId,
          number: company.wazzupNumber,
        };
      }
    }

    if (!credentials) {
      return res.status(400).json({ message: "Для отправки укажите филиал с настроенным Wazzup" });
    }

    const result = await sendWhatsAppMessage(
      {
        chatId: payload.phone,
        text: `${summary}\nОтправитель: ${payload.senderName}${
          payload.message ? `\nСообщение: ${payload.message}` : ""
        }`,
      },
      credentials,
    );

    console.info("[preview/whatsapp] result", result);

    res.json({ success: !("skipped" in result), skipped: "skipped" in result });
  }),
);
