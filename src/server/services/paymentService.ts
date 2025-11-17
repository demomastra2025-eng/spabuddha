import { z } from "zod";
import { query, withTransaction } from "../db/pool";
import { runOrderFulfillment, type FulfillmentPayload } from "./fulfillmentService";
import { env } from "../config/env";
import { AppError } from "../errors/AppError";

export const paymentRowSchema = z.object({
  id: z.string(),
  order_id: z.string(),
  amount: z.coerce.number(),
  currency: z.string(),
  status: z.string(),
  provider: z.string().nullable(),
  transaction_id: z.string().nullable(),
  paid_at: z.coerce.date().nullable(),
  refunded_at: z.coerce.date().nullable(),
  metadata: z.any().nullable(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  receipt_url: z.string().nullable(),
});

export type PaymentRow = z.infer<typeof paymentRowSchema>;

export function mapPayment(row: PaymentRow) {
  return {
    id: row.id,
    orderId: row.order_id,
    amount: row.amount,
    currency: row.currency,
    status: row.status,
    provider: row.provider,
    transactionId: row.transaction_id,
    paidAt: row.paid_at,
    refundedAt: row.refunded_at,
    metadata: row.metadata,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    receiptUrl: row.receipt_url,
  };
}

export async function listPayments(filter?: { companyId?: string }) {
  const params: unknown[] = [];
  let whereClause = "";

  if (filter?.companyId) {
    params.push(filter.companyId);
    whereClause = `WHERE o.company_id = $${params.length}`;
  }

  const result = await query<PaymentRow>(
    `SELECT p.* FROM payments p
     JOIN orders o ON o.id = p.order_id
     ${whereClause}
     ORDER BY p.created_at DESC`,
    params,
  );
  return result.rows.map(mapPayment);
}

const fulfillmentRowSchema = z.object({
  order_id: z.string(),
  order_number: z.string(),
  delivery_method: z.enum(["email", "whatsapp", "download"]),
  delivery_contact: z.string().nullable(),
  total_amount: z.coerce.number(),
  company_id: z.string(),
  certificate_id: z.string(),
  certificate_code: z.string(),
  certificate_name: z.string(),
  sender_name: z.string().nullable(),
  recipient_name: z.string().nullable(),
  recipient_email: z.string().nullable(),
  message: z.string().nullable(),
  start_date: z.coerce.date().nullable(),
  finish_date: z.coerce.date().nullable(),
  company_label: z.string().nullable(),
  company_address: z.string().nullable(),
  client_first_name: z.string().nullable(),
  client_last_name: z.string().nullable(),
  client_email: z.string().nullable(),
  client_phone: z.string().nullable(),
  certificate_file_url: z.string().nullable(),
  template_id: z.string().nullable(),
  template_background_url: z.string().nullable(),
  template_layout_config: z.any().nullable(),
  company_wazzup_api_token: z.string().nullable(),
  company_wazzup_channel_id: z.string().nullable(),
  company_wazzup_number: z.string().nullable(),
});

export type PaymentConfirmationResult = {
  payment: ReturnType<typeof mapPayment>;
  downloadUrl: string | null;
  filePath: string;
};

export async function markPaymentAsPaid(
  id: string,
  transactionId: string,
  options?: { companyId?: string },
): Promise<PaymentConfirmationResult | null> {
  const context = await withTransaction(async (client) => {
    const paymentSelection = await client.query<PaymentRow>(
      `SELECT * FROM payments WHERE id = $1 FOR UPDATE`,
      [id],
    );

    const paymentRow = paymentSelection.rows[0];
    if (!paymentRow) {
      return null;
    }

    const fulfillmentResult = await client.query(
      `SELECT
         o.id AS order_id,
         o.order_number,
       o.delivery_method,
         o.delivery_contact,
         o.total_amount,
         o.company_id,
         c.id AS certificate_id,
         c.code AS certificate_code,
         c.name_cert AS certificate_name,
         c.sender_name,
         c.recipient_name,
         c.recipient_email,
         c.message,
         c.start_date,
         c.finish_date,
         c.file_url AS certificate_file_url,
         c.template_id,
         t.background_url AS template_background_url,
         t.layout_config AS template_layout_config,
         comp.label AS company_label,
         comp.address AS company_address,
         comp.wazzup_api_token AS company_wazzup_api_token,
         comp.wazzup_channel_id AS company_wazzup_channel_id,
         comp.wazzup_number AS company_wazzup_number,
         cli.first_name AS client_first_name,
         cli.last_name AS client_last_name,
         cli.email AS client_email,
         cli.phone AS client_phone
       FROM orders o
       JOIN certificates c ON c.id = o.certificate_id
       LEFT JOIN template t ON t.id = c.template_id
       LEFT JOIN company comp ON comp.id = o.company_id
       LEFT JOIN client cli ON cli.id = o.client_id
       WHERE o.id = $1`,
      [paymentRow.order_id],
    );

    const fulfillmentRow = fulfillmentResult.rows[0];

    if (!fulfillmentRow) {
      throw new Error("Не удалось найти данные заказа для завершения платежа");
    }

    return {
      paymentRow,
      fulfillmentRow,
    };
  });

  if (!context) {
    return null;
  }

  const payment = mapPayment(paymentRowSchema.parse(context.paymentRow));
  const fulfillment = fulfillmentRowSchema.parse(context.fulfillmentRow);

  if (options?.companyId && fulfillment.company_id !== options.companyId) {
    throw new AppError(403, "Недостаточно прав для подтверждения платежа этого филиала");
  }

  if (payment.status === "paid") {
    return {
      payment,
      downloadUrl: buildDownloadUrl(fulfillment.certificate_id),
      filePath: fulfillment.certificate_file_url ?? "",
    };
  }

  const clientName = [fulfillment.client_first_name, fulfillment.client_last_name]
    .filter((value) => Boolean(value))
    .join(" ") || null;

  const layoutConfig =
    fulfillment.template_layout_config && typeof fulfillment.template_layout_config === "object"
      ? (fulfillment.template_layout_config as Record<string, unknown>)
      : {};

  const templateSettings = {
    backgroundUrl: fulfillment.template_background_url ?? undefined,
    fontFamily: typeof layoutConfig.fontFamily === "string" ? layoutConfig.fontFamily : undefined,
    textColor: typeof layoutConfig.textColor === "string" ? layoutConfig.textColor : undefined,
  };

  const fulfillmentPayload: FulfillmentPayload = {
    orderId: fulfillment.order_id,
    orderNumber: fulfillment.order_number,
    deliveryMethod: fulfillment.delivery_method,
    deliveryContact: fulfillment.delivery_contact,
    totalAmount: fulfillment.total_amount,
    certificate: {
      id: fulfillment.certificate_id,
      code: fulfillment.certificate_code,
      name: fulfillment.certificate_name,
      senderName: fulfillment.sender_name,
      recipientName: fulfillment.recipient_name,
      recipientEmail: fulfillment.recipient_email,
      message: fulfillment.message,
      startDate: fulfillment.start_date ?? null,
      finishDate: fulfillment.finish_date ?? null,
    },
    company: {
      label: fulfillment.company_label,
      address: fulfillment.company_address,
      wazzupApiToken: fulfillment.company_wazzup_api_token,
      wazzupChannelId: fulfillment.company_wazzup_channel_id,
      wazzupNumber: fulfillment.company_wazzup_number,
    },
    client: {
      name: clientName,
      email: fulfillment.client_email,
      phone: fulfillment.client_phone,
    },
    template: templateSettings,
  };

  const fulfillmentResult = await runOrderFulfillment(fulfillmentPayload);

  await query(
    `UPDATE payments SET status = 'paid', transaction_id = $2, paid_at = NOW(), updated_at = NOW()
     WHERE id = $1`,
    [id, transactionId],
  );

  await query(
    `UPDATE orders SET payment_status = 'paid', updated_at = NOW() WHERE id = $1`,
    [payment.orderId],
  );

  const latestPaymentResult = await query<PaymentRow>(`SELECT * FROM payments WHERE id = $1`, [id]);
  const updatedPaymentRow = latestPaymentResult.rows[0];
  const updatedPayment = updatedPaymentRow ? mapPayment(paymentRowSchema.parse(updatedPaymentRow)) : payment;

  return {
    payment: updatedPayment,
    downloadUrl: fulfillmentResult.downloadUrl,
    filePath: fulfillmentResult.relativePath,
  };
}

function buildDownloadUrl(certificateId: string) {
  return env.APP_BASE_URL ? `${env.APP_BASE_URL.replace(/\/$/, "")}/api/certificates/${certificateId}/download` : null;
}
