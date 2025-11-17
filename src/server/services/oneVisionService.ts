import crypto from "node:crypto";
import { z } from "zod";
import type { CertificateView } from "./certificateService";
import type { CreateOrderInput, OrderView } from "./orderService";
import { AppError } from "../errors/AppError";
import { getCompany } from "./companyService";
import { env } from "../config/env";
import { query } from "../db/pool";
import { mapPayment, paymentRowSchema } from "./paymentService";
import type { PaymentRow } from "./paymentService";
import { markPaymentAsPaid } from "./paymentService";

const successStatuses = new Set(["withdraw", "clearing", "partial_clearing", "refill"]);
const failureStatuses = new Set(["canceled", "cancel", "error", "refunded", "partial_refund"]);
const DEFAULT_PAYER_EMAIL = "default@gmail.com";

type InitiatePaymentArgs = {
  order: OrderView;
  certificate: CertificateView;
  paymentId: string;
  input: CreateOrderInput;
  baseUrl: string;
};

type OneVisionCallbackBody = {
  data?: string;
  sign?: string;
  payment_id?: string | number;
};

const callbackDataSchema = z
  .object({
    payment_status: z.string().optional(),
    operation_type: z.string().optional(),
    operation_status: z.string().optional(),
    payment_id: z.union([z.string(), z.number()]).optional(),
    order_id: z.string(),
    amount: z.number().optional(),
    currency: z.string().optional(),
  })
  .passthrough();

function ensureBaseUrl(baseUrl: string) {
  if (!baseUrl) {
    throw new AppError(500, "Не задан базовый URL приложения (APP_BASE_URL)");
  }
  return baseUrl.replace(/\/+$/, "");
}

function encodeData(payload: Record<string, unknown>) {
  const json = JSON.stringify(payload);
  return Buffer.from(json, "utf8").toString("base64");
}

function decodeData(encoded?: string) {
  if (!encoded) {
    return {};
  }
  const json = Buffer.from(encoded, "base64").toString("utf8");
  return JSON.parse(json);
}

function signData(encodedData: string, secret: string) {
  return crypto.createHmac("sha512", secret).update(encodedData).digest("hex");
}

async function requestOneVision<T extends Record<string, unknown>>(path: string, options: {
  apiKey: string;
  secret: string;
  payload: Record<string, unknown>;
}): Promise<T & { data?: string; sign?: string; success: boolean }> {
  const encoded = encodeData(options.payload);
  const sign = signData(encoded, options.secret);
  const token = Buffer.from(options.apiKey, "utf8").toString("base64");
  const endpoint = `${env.ONEVISION_API_URL}/`.replace(/\/+$/, "");
  const url = `${endpoint}/${path.replace(/^\/+/, "")}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: encoded,
      sign,
    }),
  });

  const body = (await response.json().catch(() => ({}))) as { message?: string } & Record<string, unknown>;
  if (!response.ok) {
    const message = typeof body?.message === "string" ? body.message : "Ошибка интеграции OneVision";
    throw new AppError(response.status, message);
  }

  return body as T & { data?: string; sign?: string; success: boolean };
}

function buildReturnUrl(baseUrl: string, params: Record<string, string>) {
  const search = new URLSearchParams(params);
  return `${baseUrl}/payment/result?${search.toString()}`;
}

export async function initiateOneVisionPayment({ order, certificate, paymentId, input, baseUrl }: InitiatePaymentArgs) {
  const normalizedBaseUrl = ensureBaseUrl(baseUrl || env.APP_BASE_URL || "");
  const callbackUrl = `${normalizedBaseUrl}/api/payments/onevision/callback`;
  const successUrl = buildReturnUrl(normalizedBaseUrl, {
    status: "success",
    orderId: order.id,
    orderNumber: order.orderNumber,
    certificateId: certificate.id,
    deliveryMethod: input.delivery.method,
  });
  const failureUrl = buildReturnUrl(normalizedBaseUrl, {
    status: "failed",
    orderId: order.id,
    orderNumber: order.orderNumber,
    certificateId: certificate.id,
    deliveryMethod: input.delivery.method,
  });
  const merchantTermUrl = buildReturnUrl(normalizedBaseUrl, {
    status: "processing",
    orderId: order.id,
    orderNumber: order.orderNumber,
    certificateId: certificate.id,
    deliveryMethod: input.delivery.method,
  });

  const company = await getCompany(order.companyId);
  if (!company) {
    throw new AppError(400, "Филиал не найден");
  }
  if (!company.keyOneVision || !company.passOneVision) {
    throw new AppError(400, "Для выбранного филиала не заполнены OneVision ключ и пароль");
  }
  if (!company.companyOneVisionId) {
    throw new AppError(400, "Для выбранного филиала не указан OneVision Merchant ID");
  }
  const serviceId = company.companyNameOneVisionId ?? company.companyOneVisionId;
  if (!serviceId) {
    throw new AppError(400, "Для выбранного филиала не указан OneVision Service ID");
  }

  const payerEmail =
    input.client.email?.trim() || certificate.recipientEmail?.trim() || DEFAULT_PAYER_EMAIL;
  const payerPhone = input.client.phone?.trim() ?? null;

  const requestPayload = {
    amount: Number(order.totalAmount),
    currency: order.currency ?? "KZT",
    order_id: order.id,
    description: `Сертификат Buddha Spa №${certificate.code}`,
    payment_type: "pay",
    payment_method: "ecom",
    email: payerEmail,
    phone: payerPhone,
    user_id: payerEmail ?? payerPhone ?? order.orderNumber,
    success_url: successUrl,
    failure_url: failureUrl,
    callback_url: callbackUrl,
    merchant_term_url: merchantTermUrl,
    payment_lifetime: env.ONEVISION_PAYMENT_LIFETIME,
    lang: "ru",
    items: [
      {
        merchant_id: company.companyOneVisionId,
        service_id: serviceId,
        merchant_name: company.nameCompany ?? company.label ?? "Buddha Spa",
        name: certificate.name,
        quantity: 1,
        amount_one_pcs: Number(order.totalAmount),
        amount_sum: Number(order.totalAmount),
      },
    ],
    extra_params: {
      orderNumber: order.orderNumber,
      certificateId: certificate.id,
      deliveryMethod: input.delivery.method,
    },
  };

  const response = await requestOneVision<{
    payment_id?: string | number;
    payment_page_url?: string;
  }>("payment/create", {
    apiKey: company.keyOneVision,
    secret: company.passOneVision,
    payload: requestPayload,
  });

  if (!response.success) {
    throw new AppError(502, "OneVision вернул ошибку при создании платежа");
  }

  if (response.data && response.sign) {
    const expectedSign = signData(response.data, company.passOneVision);
    if (expectedSign !== response.sign) {
      throw new AppError(400, "Некорректная подпись ответа OneVision");
    }
  }

  const decoded = response.data ? decodeData(response.data) : {};
  const decodedSafe = z
    .object({
      payment_page_url: z.string().optional(),
      payment_status: z.string().optional(),
      payment_id: z.union([z.string(), z.number()]).optional(),
    })
    .passthrough()
    .safeParse(decoded);

  const paymentPageUrl =
    response.payment_page_url ??
    (decodedSafe.success ? decodedSafe.data.payment_page_url : undefined);

  if (!paymentPageUrl) {
    throw new AppError(500, "Платёж создан, но OneVision не вернул ссылку на оплату");
  }

  const providerPaymentId =
    (decodedSafe.success ? decodedSafe.data.payment_id : undefined) ??
    (typeof response.payment_id === "number" || typeof response.payment_id === "string"
      ? String(response.payment_id)
      : undefined);

  const paymentSelection = await query<PaymentRow>(`SELECT * FROM payments WHERE id = $1`, [paymentId]);
  const paymentRow = paymentSelection.rows[0];
  if (!paymentRow) {
    throw new AppError(404, "Платёж не найден");
  }

  const existingMetadata =
    paymentRow.metadata && typeof paymentRow.metadata === "object" ? (paymentRow.metadata as Record<string, unknown>) : {};

  const updatedMetadata = {
    ...existingMetadata,
    deliveryMethod: input.delivery.method,
    deliveryContact: input.delivery.contact ?? null,
    onevision: {
      ...(existingMetadata.onevision as Record<string, unknown> | undefined),
      request: requestPayload,
      paymentStatus: decodedSafe.success ? decodedSafe.data.payment_status ?? "created" : "created",
      paymentPageUrl,
      providerPaymentId: providerPaymentId ?? null,
    },
  };

  const updatedPayment = await query<PaymentRow>(
    `UPDATE payments
       SET metadata = $2,
           updated_at = NOW()
     WHERE id = $1
     RETURNING *`,
    [paymentId, JSON.stringify(updatedMetadata)],
  );

  const parsedPayment = paymentRowSchema.parse(updatedPayment.rows[0]);

  return {
    payment: mapPayment(parsedPayment),
    paymentPageUrl,
    providerPaymentId: providerPaymentId ?? null,
  };
}

function normalizePaymentRowMetadata(row: PaymentRow) {
  return row.metadata && typeof row.metadata === "object"
    ? (row.metadata as Record<string, unknown>)
    : {};
}

function resolveCallbackStatus({
  paymentStatus,
  operationType,
  operationStatus,
}: {
  paymentStatus?: string;
  operationType?: string;
  operationStatus?: string;
}) {
  const normalizedPaymentStatus = typeof paymentStatus === "string" ? paymentStatus.toLowerCase() : undefined;
  const normalizedOperationType = typeof operationType === "string" ? operationType.toLowerCase() : undefined;
  const normalizedOperationStatus = typeof operationStatus === "string" ? operationStatus.toLowerCase() : undefined;

  const statusCandidate = normalizedPaymentStatus ?? normalizedOperationType ?? null;

  const markAsPaid =
    (statusCandidate && successStatuses.has(statusCandidate)) ||
    (!statusCandidate && normalizedOperationStatus === "success");
  const markAsFailed =
    (statusCandidate && failureStatuses.has(statusCandidate)) || normalizedOperationStatus === "error";

  let normalizedStatus: string;
  if (markAsPaid) {
    normalizedStatus = "paid";
  } else if (markAsFailed) {
    normalizedStatus = "failed";
  } else {
    normalizedStatus = statusCandidate ?? normalizedOperationStatus ?? "processing";
  }

  return {
    normalizedStatus,
    markAsPaid,
    markAsFailed,
  };
}

export async function handleOneVisionCallback(body: OneVisionCallbackBody) {
  if (!body?.data || !body?.sign) {
    throw new AppError(400, "Некорректный callback OneVision");
  }

  const decoded = decodeData(body.data);
  const parsed = callbackDataSchema.parse(decoded);

  const paymentResult = await query<
    PaymentRow & { company_id: string }
  >(
    `SELECT p.*, o.company_id
     FROM payments p
     JOIN orders o ON o.id = p.order_id
     WHERE (p.metadata -> 'onevision' ->> 'providerPaymentId' = $1)
        OR o.id = $2
     ORDER BY p.created_at DESC
     LIMIT 1`,
    [parsed.payment_id ? String(parsed.payment_id) : null, parsed.order_id],
  );

  const paymentRow = paymentResult.rows[0];
  if (!paymentRow) {
    throw new AppError(404, "Платёж для callback не найден");
  }

  const company = await getCompany(paymentRow.company_id);
  if (!company?.passOneVision) {
    throw new AppError(400, "Не удалось определить секрет OneVision для филиала");
  }

  const expectedSign = signData(body.data, company.passOneVision);
  if (expectedSign !== body.sign) {
    throw new AppError(400, "Неверная подпись callback OneVision");
  }

  const metadata = normalizePaymentRowMetadata(paymentRow);
  const existingOneVision = (metadata.onevision as Record<string, unknown> | undefined) ?? {};

  const nextMetadata = {
    ...metadata,
    onevision: {
      ...existingOneVision,
      lastCallback: parsed,
      paymentStatus:
        parsed.payment_status ?? parsed.operation_type ?? parsed.operation_status ?? existingOneVision.paymentStatus ?? null,
      operationType: parsed.operation_type ?? existingOneVision.operationType ?? null,
      operationStatus: parsed.operation_status ?? existingOneVision.operationStatus ?? null,
      providerPaymentId: parsed.payment_id ?? existingOneVision.providerPaymentId ?? null,
    },
  };

  const statusResolution = resolveCallbackStatus({
    paymentStatus: parsed.payment_status,
    operationType: parsed.operation_type,
    operationStatus: parsed.operation_status,
  });

  await query(
    `UPDATE payments
       SET metadata = $2,
           status = CASE WHEN status = 'paid' THEN status ELSE $3 END,
           updated_at = NOW()
     WHERE id = $1`,
    [paymentRow.id, JSON.stringify(nextMetadata), statusResolution.normalizedStatus],
  );

  if (statusResolution.markAsPaid) {
    await markPaymentAsPaid(paymentRow.id, String(parsed.payment_id ?? parsed.order_id), {
      companyId: paymentRow.company_id,
    });
  } else if (statusResolution.markAsFailed) {
    await query(
      `UPDATE orders
         SET payment_status = 'failed',
             updated_at = NOW()
       WHERE id = $1`,
      [paymentRow.order_id],
    );
  }

  return { success: true };
}
