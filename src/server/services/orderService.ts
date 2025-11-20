import { z } from "zod";
import { withTransaction } from "../db/pool";
import { clientInputSchema, findOrCreateClient } from "./clientService";
import { createCertificate } from "./certificateService";
import { generateOrderNumber } from "../utils/order";
import { AppError } from "../errors/AppError";
import { resolveCompanyId } from "./companyService";

const deliverySchema = z.object({
  method: z.enum(["email", "whatsapp", "download"]),
  contact: z.string().nullable().optional(),
});

const serviceSelectionSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number().positive(),
  discountPercent: z.number().min(0).max(100).default(0),
  branchId: z.string().optional(),
  currency: z.string().default("KZT"),
});

const templateBackgroundSchema = z.preprocess((value) => {
  if (value === null || value === undefined) {
    return undefined;
  }
  if (typeof value !== "string") {
    return undefined;
  }
  const trimmed = value.trim();
  return trimmed.length ? trimmed : undefined;
}, z.string().refine((val) => /^https?:\/\//i.test(val) || /^\/?[-\w./]+$/i.test(val), {
  message: "Invalid template background",
}));

export const createOrderSchema = z.object({
  companyId: z.string().min(1),
  amount: z.number().positive().optional(),
  type: z.enum(["gift", "procedure"]),
  templateId: z.string().nullable().optional(),
  templateBackgroundUrl: templateBackgroundSchema.optional(),
  templateTextColor: z.string().nullable().optional(),
  senderName: z.string().optional(),
  recipientName: z.string().min(1),
  message: z.string().optional(),
  validUntil: z.string().datetime().nullable().optional(),
  delivery: deliverySchema,
  client: clientInputSchema.extend({
    name: z.string().optional(),
  }),
  services: z.array(serviceSelectionSchema).optional(),
  utmVisitorId: z.string().trim().optional(),
}).superRefine((data, ctx) => {
  const hasServices = Boolean(data.services?.length);
  if (data.type === "procedure" && !hasServices) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Для процедурного сертификата выберите хотя бы одну услугу",
      path: ["services"],
    });
  }
  if (!hasServices && (!data.amount || data.amount <= 0)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Укажите номинал сертификата",
      path: ["amount"],
    });
  }
  if (!data.client.email && !data.client.phone) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Укажите email или телефон получателя",
      path: ["client"],
    });
  }
});

export type CreateOrderInput = z.infer<typeof createOrderSchema>;

interface OrderRow {
  id: string;
  order_number: string;
  client_id: string;
  certificate_id: string;
  company_id: string;
  status: string;
  total_amount: number;
  currency: string;
  created_at: Date;
  updated_at: Date;
  payment_status: string;
  delivery_method: string;
  delivery_contact: string | null;
  notes: string | null;
  fulfilled_at: Date | null;
  recipient_name: string | null;
  sender_name: string | null;
  utm_tag_id: string | null;
  utm_visitor_id: string | null;
}

function mapOrder(row: OrderRow) {
  return {
    id: row.id,
    orderNumber: row.order_number,
    clientId: row.client_id,
    certificateId: row.certificate_id,
    companyId: row.company_id,
    status: row.status,
    totalAmount: row.total_amount,
    currency: row.currency,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    paymentStatus: row.payment_status,
    deliveryMethod: row.delivery_method,
    deliveryContact: row.delivery_contact,
    notes: row.notes,
    fulfilledAt: row.fulfilled_at,
    recipientName: row.recipient_name,
    senderName: row.sender_name,
    utmTagId: row.utm_tag_id,
    utmVisitorId: row.utm_visitor_id,
  };
}

function applyDiscount(price: number, discountPercent?: number) {
  if (!discountPercent) {
    return price;
  }
  return Math.round(price * (1 - discountPercent / 100));
}

export type OrderView = ReturnType<typeof mapOrder>;

export async function createOrder(input: CreateOrderInput, options?: { provider?: string }) {
  return withTransaction(async (client) => {
    const normalizedCompanyId = await resolveCompanyId(input.companyId);
    const contactName = input.client.name ?? input.recipientName;
    const hasServices = Boolean(input.services?.length);
    const normalizedAmount = hasServices
      ? input.services!.reduce(
          (sum, service) => sum + applyDiscount(service.price, service.discountPercent),
          0,
        )
      : input.amount ?? null;

    if (!normalizedAmount || normalizedAmount <= 0) {
      throw new AppError(400, "Некорректный номинал сертификата");
    }

    const serviceDetails = hasServices ? JSON.stringify(input.services) : undefined;

    let utmTagId: string | null = null;
    if (input.utmVisitorId) {
      const utmLookup = await client.query<{ utm_tag_id: string | null }>(
        `SELECT utm_tag_id
           FROM utm_visits
           WHERE visitor_id = $1
           ORDER BY first_visit_at DESC
           LIMIT 1`,
        [input.utmVisitorId],
      );
      utmTagId = utmLookup.rows[0]?.utm_tag_id ?? null;
    }

    const clientRecord = await findOrCreateClient(
      {
        firstName: contactName,
        email: input.client.email,
        phone: input.client.phone,
      },
      client,
    );

    const certificate = await createCertificate(
      {
        name: `${input.type === "gift" ? "Подарочный" : "Процедурный"} сертификат`,
        companyId: normalizedCompanyId,
        type: input.type,
        price: normalizedAmount,
        templateId: input.templateId ?? undefined,
        templateBackgroundUrl: input.templateBackgroundUrl ?? undefined,
        templateTextColor: input.templateTextColor ?? undefined,
        senderName: input.senderName,
        recipientName: input.recipientName,
        recipientEmail: input.client.email,
        message: input.message,
        startDate: new Date().toISOString(),
        finishDate: input.validUntil ?? undefined,
        currency: "KZT",
        service: serviceDetails,
      },
      client,
    );

    const orderNumber = generateOrderNumber();

    const orderResult = await client.query<OrderRow>(
      `INSERT INTO orders
        (order_number, client_id, certificate_id, company_id, status, total_amount, currency, payment_status,
         delivery_method, delivery_contact, utm_tag_id, utm_visitor_id)
       VALUES ($1,$2,$3,$4,'created',$5,'KZT','pending',$6,$7,$8,$9)
       RETURNING *`,
      [
        orderNumber,
        clientRecord.id,
        certificate.id,
        normalizedCompanyId,
        normalizedAmount,
        input.delivery.method,
        input.delivery.contact ?? null,
        utmTagId,
        input.utmVisitorId ?? null,
      ],
    );

    await client.query(
      `INSERT INTO certificate_events (certificate_id, event_type, metadata)
       VALUES ($1,'created', jsonb_build_object('orderId', $2::text, 'deliveryMethod', $3::text))`,
      [certificate.id, orderResult.rows[0].id, input.delivery.method],
    );

    await client.query(
      `INSERT INTO audit_logs (entity_type, entity_id, action, performed_by)
       VALUES ('order', $1, 'created', $2)`,
      [orderResult.rows[0].id, clientRecord.id],
    );

    const metadata = {
      deliveryMethod: input.delivery.method,
      deliveryContact: input.delivery.contact ?? null,
    };

    const paymentResult = await client.query<{ id: string }>(
      `INSERT INTO payments (order_id, amount, currency, status, provider, metadata)
       VALUES ($1,$2,'KZT','pending',$3,$4::jsonb)
       RETURNING id`,
      [orderResult.rows[0].id, normalizedAmount, options?.provider ?? "manual", JSON.stringify(metadata)],
    );

    const paymentId = paymentResult.rows[0]?.id ?? null;

    if (!paymentId) {
      throw new AppError(500, "Не удалось создать платёж для заказа");
    }

    return {
      order: mapOrder(orderResult.rows[0]),
      certificate,
      paymentId,
    };
  });
}

export async function listOrders(filter?: { companyId?: string }) {
  return withTransaction(async (client) => {
    const params: unknown[] = [];
    const conditions = ["o.status <> 'archived'"];

    if (filter?.companyId) {
      params.push(filter.companyId);
      conditions.push(`o.company_id = $${params.length}`);
    }

    const whereClause = conditions.length ? `WHERE ${conditions.join(" AND ")}` : "";

    const orders = await client.query<OrderRow>(
      `SELECT o.*, c.recipient_name, c.sender_name
       FROM orders o
       INNER JOIN certificates c ON c.id = o.certificate_id
       ${whereClause}
       ORDER BY o.created_at DESC
       LIMIT 100`,
      params,
    );
    return orders.rows.map(mapOrder);
  });
}
