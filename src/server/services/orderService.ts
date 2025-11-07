import { z } from "zod";
import { withTransaction } from "../db/pool";
import { clientInputSchema, findOrCreateClient } from "./clientService";
import { createCertificate } from "./certificateService";
import { generateOrderNumber } from "../utils/order";

const deliverySchema = z.object({
  method: z.enum(["email", "whatsapp", "download"]),
  contact: z.string().nullable().optional(),
});

export const createOrderSchema = z.object({
  companyId: z.string().min(1),
  amount: z.number().positive(),
  type: z.enum(["gift", "procedure"]),
  templateId: z.string().nullable().optional(),
  senderName: z.string().optional(),
  recipientName: z.string().min(1),
  message: z.string().optional(),
  validUntil: z.string().datetime().nullable().optional(),
  delivery: deliverySchema,
  client: clientInputSchema.extend({
    name: z.string().optional(),
  }),
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
  };
}

export async function createOrder(input: CreateOrderInput) {
  return withTransaction(async (client) => {
    const contactName = input.client.name ?? input.recipientName;

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
        companyId: input.companyId,
        type: input.type,
        price: input.amount,
        templateId: input.templateId ?? undefined,
        senderName: input.senderName,
        recipientName: input.recipientName,
        recipientEmail: input.client.email,
        message: input.message,
        startDate: new Date().toISOString(),
        finishDate: input.validUntil ?? undefined,
        currency: "KZT",
      },
      client,
    );

    const orderNumber = generateOrderNumber();

    const orderResult = await client.query<OrderRow>(
      `INSERT INTO orders
        (order_number, client_id, certificate_id, company_id, status, total_amount, currency, payment_status,
         delivery_method, delivery_contact)
       VALUES ($1,$2,$3,$4,'created',$5,'KZT','pending',$6,$7)
       RETURNING *`,
      [
        orderNumber,
        clientRecord.id,
        certificate.id,
        input.companyId,
        input.amount,
        input.delivery.method,
        input.delivery.contact ?? null,
      ],
    );

    await client.query(
      `INSERT INTO certificate_events (certificate_id, event_type, metadata)
       VALUES ($1,'created', jsonb_build_object('orderId', $2, 'deliveryMethod', $3))`,
      [certificate.id, orderResult.rows[0].id, input.delivery.method],
    );

    await client.query(
      `INSERT INTO audit_logs (entity_type, entity_id, action, performed_by)
       VALUES ('order', $1, 'created', $2)`,
      [orderResult.rows[0].id, clientRecord.id],
    );

    await client.query(
      `INSERT INTO payments (order_id, amount, currency, status, provider, metadata)
       VALUES ($1,$2,'KZT','pending','manual', jsonb_build_object('deliveryMethod', $3))`,
      [orderResult.rows[0].id, input.amount, input.delivery.method],
    );

    return {
      order: mapOrder(orderResult.rows[0]),
      certificate,
    };
  });
}

export async function listOrders() {
  const result = await withTransaction(async (client) => {
    const orders = await client.query<OrderRow>(
      `SELECT * FROM orders ORDER BY created_at DESC LIMIT 100`,
    );
    return orders.rows.map(mapOrder);
  });

  return result;
}
