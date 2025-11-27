import { z } from "zod";
import { query, withTransaction } from "../db/pool";
import { runOrderFulfillment, type FulfillmentPayload } from "./fulfillmentService";
import { env } from "../config/env";
import { AppError } from "../errors/AppError";
import { createDownloadToken } from "../utils/downloadToken";

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
  certificate_type: z.string(),
  certificate_price: z.coerce.number(),
  certificate_service: z.string().nullable(),
  certificate_altegio_operation_id: z.string().nullable(),
  certificate_altegio_transaction_id: z.string().nullable(),
  sender_name: z.string().nullable(),
  recipient_name: z.string().nullable(),
  recipient_email: z.string().nullable(),
  message: z.string().nullable(),
  start_date: z.coerce.date().nullable(),
  finish_date: z.coerce.date().nullable(),
  company_label: z.string().nullable(),
  company_address: z.string().nullable(),
  company_altegio_company_id: z.string().nullable(),
  company_storage_id: z.string().nullable(),
  client_first_name: z.string().nullable(),
  client_last_name: z.string().nullable(),
  client_email: z.string().nullable(),
  client_phone: z.string().nullable(),
  client_id: z.string().nullable(),
  client_altegio_client_id: z.string().nullable(),
  certificate_file_url: z.string().nullable(),
  template_id: z.string().nullable(),
  template_background_url: z.string().nullable(),
  template_layout_config: z.any().nullable(),
  certificate_template_background_url: z.string().nullable(),
  certificate_template_text_color: z.string().nullable(),
  company_wazzup_api_token: z.string().nullable(),
  company_wazzup_channel_id: z.string().nullable(),
  company_wazzup_number: z.string().nullable(),
});

export type PaymentConfirmationResult = {
  payment: ReturnType<typeof mapPayment>;
  downloadUrl: string | null;
  filePath: string;
};

async function safeRunOrderFulfillment(payload: FulfillmentPayload) {
  try {
    return await runOrderFulfillment(payload);
  } catch (error) {
    console.error("[fulfillment] Не удалось выполнить доставку сертификата:", error);
    return null;
  }
}

function parseServiceSelections(serviceData: string | null): unknown[] {
  if (!serviceData) {
    return [];
  }
  try {
    const parsed = JSON.parse(serviceData);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function resolveAltegioGoodId(fulfillment: z.infer<typeof fulfillmentRowSchema>) {
  const services = parseServiceSelections(fulfillment.certificate_service);
  for (const rawService of services) {
    const service = rawService as {
      id?: string;
      good_id?: string | number;
      altegio_good_id?: string | number;
      goodId?: string | number;
    };
    const directGoodId =
      service?.altegio_good_id ??
      service?.good_id ??
      service?.goodId ??
      (typeof service === "number" ? service : null);
    if (directGoodId) {
      return String(directGoodId);
    }
    if (service?.id) {
      const lookup = await query<{ altegio_good_id: string | null }>(
        `SELECT altegio_good_id FROM spa_procedures WHERE id = $1 LIMIT 1`,
        [service.id],
      );
      if (lookup.rows[0]?.altegio_good_id) {
        return lookup.rows[0].altegio_good_id;
      }
    }
  }

  const nominalLookup = await query<{ altegio_good_id: string | null }>(
    `SELECT altegio_good_id FROM certificate_nominal_options WHERE amount = $1 AND currency = 'KZT' LIMIT 1`,
    [fulfillment.total_amount],
  );
  const nominalGoodId = nominalLookup.rows[0]?.altegio_good_id ?? null;

  if (!nominalGoodId) {
    throw new AppError(400, `Не настроен товар Altegio для суммы ${fulfillment.total_amount}`);
  }

  return nominalGoodId;
}

async function ensureAltegioClientIdForCompany(
  fulfillment: z.infer<typeof fulfillmentRowSchema>,
  altegioCompanyId: string,
) {
  if (fulfillment.client_altegio_client_id) {
    return fulfillment.client_altegio_client_id;
  }

  const phone = fulfillment.client_phone ?? fulfillment.delivery_contact ?? null;
  if (!phone) {
    return null;
  }

  const displayName = [fulfillment.client_first_name, fulfillment.client_last_name]
    .filter(Boolean)
    .join(" ")
    .trim() || phone;

  const { searchClientByPhone, createClientInAltegio } = await import("./altegioService");
  const existing = await searchClientByPhone(phone, altegioCompanyId);
  const foundId = Array.isArray(existing) && existing[0]?.id ? String(existing[0].id) : null;

  let altegioClientId = foundId;

  if (!altegioClientId) {
    const created = await createClientInAltegio(altegioCompanyId, {
      name: displayName,
      phone,
      email: fulfillment.client_email ?? undefined,
    });
    altegioClientId = created?.id ? String(created.id) : null;
  }

  if (altegioClientId && fulfillment.client_id) {
    await query(
      `UPDATE client SET altegio_client_id = COALESCE(altegio_client_id, $1), updated_at = NOW() WHERE id = $2`,
      [altegioClientId, fulfillment.client_id],
    );
  }

  return altegioClientId;
}

async function syncAltegioSale(fulfillment: z.infer<typeof fulfillmentRowSchema>) {
  if (!env.ALTEGIO_USER_TOKEN) {
    return null;
  }

  if (!fulfillment.company_altegio_company_id) {
    return null;
  }

  if (fulfillment.certificate_altegio_transaction_id) {
    return {
      operationId: fulfillment.certificate_altegio_operation_id ?? null,
      transactionId: fulfillment.certificate_altegio_transaction_id,
      skipped: true,
    };
  }

  const storageId = fulfillment.company_storage_id;
  if (!storageId) {
    throw new AppError(400, "Не настроен storage_id для Altegio");
  }

  const goodId = await resolveAltegioGoodId(fulfillment);
  const altegioClientId = await ensureAltegioClientIdForCompany(fulfillment, fulfillment.company_altegio_company_id);

  const { createAltegioDocument, createGoodsTransaction } = await import("./altegioService");
  const documentResponse = await createAltegioDocument(fulfillment.company_altegio_company_id, storageId);
  const documentId = documentResponse?.id ? String(documentResponse.id) : null;

  if (!documentId) {
    throw new AppError(400, "Не удалось создать документ в Altegio");
  }

  const payload = {
    document_id: Number.isFinite(Number(documentId)) ? Number(documentId) : documentId,
    good_id: Number.isFinite(Number(goodId)) ? Number(goodId) : goodId,
    amount: 1,
    cost_per_unit: fulfillment.total_amount,
    discount: 0,
    cost: fulfillment.total_amount,
    operation_unit_type: 1,
    client_id: altegioClientId ? (Number.isFinite(Number(altegioClientId)) ? Number(altegioClientId) : altegioClientId) : 0,
    comment: `Order ${fulfillment.order_number}`,
  };

  const response = await createGoodsTransaction(fulfillment.company_altegio_company_id, payload);
  const transactionId = response?.id ? String(response.id) : null;
  const operationId = response?.document_id
    ? String(response.document_id)
    : documentId
      ? String(documentId)
      : null;

  await query(
    `UPDATE certificates
       SET altegio_operation_id = COALESCE(altegio_operation_id, $1),
           altegio_transaction_id = COALESCE(altegio_transaction_id, $2),
           updated_at = NOW()
     WHERE id = $3`,
    [operationId, transactionId, fulfillment.certificate_id],
  );

  return { operationId, transactionId };
}

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
         c.type_cert AS certificate_type,
         c.price_cert AS certificate_price,
         c.service_cert AS certificate_service,
         c.altegio_operation_id AS certificate_altegio_operation_id,
         c.altegio_transaction_id AS certificate_altegio_transaction_id,
         c.sender_name,
         c.recipient_name,
         c.recipient_email,
         c.message,
         c.start_date,
         c.finish_date,
         c.file_url AS certificate_file_url,
        c.template_id,
        c.template_background_url AS certificate_template_background_url,
        c.template_text_color AS certificate_template_text_color,
         t.background_url AS template_background_url,
         t.layout_config AS template_layout_config,
         comp.label AS company_label,
         comp.address AS company_address,
         comp.altegio_company_id AS company_altegio_company_id,
         comp.storage_id AS company_storage_id,
         comp.wazzup_api_token AS company_wazzup_api_token,
         comp.wazzup_channel_id AS company_wazzup_channel_id,
         comp.wazzup_number AS company_wazzup_number,
         cli.first_name AS client_first_name,
         cli.last_name AS client_last_name,
         cli.email AS client_email,
         cli.phone AS client_phone,
         cli.id AS client_id,
         cli.altegio_client_id AS client_altegio_client_id
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

  const clientName = [fulfillment.client_first_name, fulfillment.client_last_name]
    .filter((value) => Boolean(value))
    .join(" ") || null;

  const layoutConfig =
    fulfillment.template_layout_config && typeof fulfillment.template_layout_config === "object"
      ? (fulfillment.template_layout_config as Record<string, unknown>)
      : {};

  const templateSettings = {
    backgroundUrl:
      fulfillment.certificate_template_background_url ??
      fulfillment.template_background_url ??
      undefined,
    textColor:
      fulfillment.certificate_template_text_color ??
      (typeof layoutConfig.textColor === "string" ? layoutConfig.textColor : undefined),
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

  await syncAltegioSale(fulfillment);

  await query(
    `UPDATE payments SET status = 'paid', transaction_id = $2, paid_at = COALESCE(paid_at, NOW()), updated_at = NOW()
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

  const requiresFulfillment = !fulfillment.certificate_file_url;
  const fulfillmentResult = requiresFulfillment ? await safeRunOrderFulfillment(fulfillmentPayload) : null;

  const downloadUrl =
    fulfillmentResult?.downloadUrl ?? buildDownloadUrl(fulfillment.certificate_id, fulfillment.order_id);
  const filePath = fulfillmentResult?.relativePath ?? fulfillment.certificate_file_url ?? "";

  return {
    payment: updatedPayment,
    downloadUrl,
    filePath,
  };
}

function buildDownloadUrl(certificateId: string, orderId: string) {
  if (!env.APP_BASE_URL) return null;
  const token = createDownloadToken(certificateId, orderId);
  const base = env.APP_BASE_URL.replace(/\/$/, "");
  return `${base}/api/certificates/${certificateId}/download?token=${token}`;
}
