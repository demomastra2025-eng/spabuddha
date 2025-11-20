import { z } from "zod";
import { pool, query, type PoolClientLike } from "../db/pool";
import { generateCertificateCode } from "../utils/certificate";

const templateBackgroundSchema = z.preprocess((value) => {
  if (typeof value !== "string") {
    return undefined;
  }
  const trimmed = value.trim();
  return trimmed.length ? trimmed : undefined;
}, z.string().refine((val) => /^https?:\/\//i.test(val) || /^\/?[-\w./]+$/i.test(val), {
  message: "Invalid template background",
}));

const certificateRow = z.object({
  id: z.string(),
  name_cert: z.string(),
  start_date: z.coerce.date().nullable(),
  finish_date: z.coerce.date().nullable(),
  company_id: z.string(),
  type_cert: z.string(),
  price_cert: z.coerce.number(),
  service_cert: z.string().nullable(),
  template_id: z.string().nullable(),
  template_background_url: z.string().nullable().optional(),
  template_text_color: z.string().nullable().optional(),
  code: z.string(),
  status: z.string(),
  sender_name: z.string().nullable(),
  recipient_name: z.string().nullable(),
  recipient_email: z.string().nullable(),
  message: z.string().nullable(),
  currency: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  created_by: z.string().nullable(),
  file_url: z.string().nullable(),
});

const certificateListRow = certificateRow.extend({
  order_number: z.string().nullable(),
  payment_status: z.string().nullable(),
  delivery_contact: z.string().nullable(),
  client_phone: z.string().nullable(),
  client_email: z.string().nullable(),
  utm_tag_id: z.string().nullable(),
  utm_tag_name: z.string().nullable(),
  utm_tag_source: z.string().nullable(),
  utm_tag_campaign: z.string().nullable(),
  utm_tag_medium: z.string().nullable(),
});

export type CertificateRow = z.infer<typeof certificateRow>;

export interface CertificateView {
  id: string;
  name: string;
  startDate: Date | null;
  finishDate: Date | null;
  companyId: string;
  type: string;
  price: number;
  service: string | null;
  templateId: string | null;
  code: string;
  status: string;
  senderName: string | null;
  recipientName: string | null;
  recipientEmail: string | null;
  message: string | null;
  currency: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string | null;
  fileUrl: string | null;
  templateBackgroundUrl: string | null;
  templateTextColor: string | null;
}

export interface CertificateListItem extends CertificateView {
  orderNumber: string | null;
  paymentStatus: string | null;
  buyerPhone: string | null;
  buyerEmail: string | null;
  utmTag: {
    id: string;
    name: string | null;
    utmSource: string | null;
    utmCampaign: string | null;
    utmMedium: string | null;
  } | null;
}

export const certificateInputSchema = z.object({
  name: z.string().min(1),
  startDate: z.string().datetime().nullable().optional(),
  finishDate: z.string().datetime().nullable().optional(),
  companyId: z.string().min(1),
  type: z.enum(["gift", "procedure", "other"]).default("gift"),
  price: z.number().nonnegative(),
  service: z.string().optional(),
  templateId: z.string().optional(),
  templateBackgroundUrl: templateBackgroundSchema.optional(),
  templateTextColor: z.string().optional(),
  senderName: z.string().optional(),
  recipientName: z.string().optional(),
  recipientEmail: z.string().email().optional(),
  message: z.string().optional(),
  currency: z.string().default("KZT"),
  createdBy: z.string().optional(),
});

export type CertificateInput = z.infer<typeof certificateInputSchema>;

function mapCertificate(row: CertificateRow): CertificateView {
  return {
    id: row.id,
    name: row.name_cert,
    startDate: row.start_date,
    finishDate: row.finish_date,
    companyId: row.company_id,
    type: row.type_cert,
    price: row.price_cert,
    service: row.service_cert,
    templateId: row.template_id,
    code: row.code,
    status: row.status,
    senderName: row.sender_name,
    recipientName: row.recipient_name,
    recipientEmail: row.recipient_email,
    message: row.message,
    currency: row.currency,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    createdBy: row.created_by,
    fileUrl: row.file_url,
    templateBackgroundUrl: row.template_background_url,
    templateTextColor: row.template_text_color,
  };
}

export async function listCertificates(filter?: { companyId?: string }): Promise<CertificateListItem[]> {
  const params: unknown[] = [];
  const conditions = ["o.payment_status = 'paid'"];
  if (filter?.companyId) {
    params.push(filter.companyId);
    conditions.push(`c.company_id = $${params.length}`);
  }
  const whereClause = conditions.length ? `WHERE ${conditions.join(" AND ")}` : "";

  const result = await query<z.infer<typeof certificateListRow>>(
    `SELECT
        c.*,
        o.order_number,
        o.payment_status,
        o.delivery_contact,
        cli.phone AS client_phone,
        cli.email AS client_email,
        o.utm_tag_id,
        t.name AS utm_tag_name,
        t.utm_source AS utm_tag_source,
        t.utm_campaign AS utm_tag_campaign,
        t.utm_medium AS utm_tag_medium
      FROM certificates c
      LEFT JOIN orders o ON o.certificate_id = c.id AND o.status <> 'archived'
      LEFT JOIN client cli ON cli.id = o.client_id
      LEFT JOIN utm_tags t ON t.id = o.utm_tag_id
      ${whereClause}
      ORDER BY c.created_at DESC
      LIMIT 200`,
    params,
  );

  return result.rows.map((row) => {
    const certificate = mapCertificate(certificateRow.parse(row));
    const buyerPhone = row.client_phone ?? row.delivery_contact ?? null;
    return {
      ...certificate,
      orderNumber: row.order_number ?? null,
      paymentStatus: row.payment_status ?? null,
      buyerPhone,
      buyerEmail: row.client_email ?? null,
      utmTag: row.utm_tag_id
        ? {
            id: row.utm_tag_id,
            name: row.utm_tag_name ?? null,
            utmSource: row.utm_tag_source ?? null,
            utmCampaign: row.utm_tag_campaign ?? null,
            utmMedium: row.utm_tag_medium ?? null,
          }
        : null,
    };
  });
}

export async function createCertificate(input: CertificateInput, client?: PoolClientLike) {
  const code = generateCertificateCode();
  const executor = client ?? pool;
  const result = await executor.query<CertificateRow>(
    `INSERT INTO certificates
      (name_cert, start_date, finish_date, company_id, type_cert, price_cert, service_cert,
       template_id, template_background_url, template_text_color, code, status, sender_name,
       recipient_name, recipient_email, message, currency, created_by)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,'active',$12,$13,$14,$15,$16,$17)
     RETURNING *`,
    [
      input.name,
      input.startDate ? new Date(input.startDate) : null,
      input.finishDate ? new Date(input.finishDate) : null,
      input.companyId,
      input.type,
      input.price,
      input.service ?? null,
      input.templateId ?? null,
      input.templateBackgroundUrl ?? null,
      input.templateTextColor ?? null,
      code,
      input.senderName ?? null,
      input.recipientName ?? null,
      input.recipientEmail ?? null,
      input.message ?? null,
      input.currency ?? "KZT",
      input.createdBy ?? null,
    ],
  );
  return mapCertificate(result.rows[0]);
}

export async function getCertificateById(id: string) {
  const result = await query<CertificateRow>("SELECT * FROM certificates WHERE id = $1", [id]);
  if (!result.rows[0]) {
    return null;
  }
  return mapCertificate(result.rows[0]);
}

export async function markCertificateUsed(id: string, userId?: string) {
  const result = await query<CertificateRow>(
    `UPDATE certificates
        SET status = 'used',
            updated_at = NOW(),
            message = message
      WHERE id = $1
      RETURNING *`,
    [id],
  );

  const row = result.rows[0];
  if (!row) {
    return null;
  }

  await query(
    `INSERT INTO certificate_events (certificate_id, event_type, metadata)
     VALUES ($1,'used', jsonb_build_object('performedBy', $2::text))`,
    [id, userId ?? null],
  );

  return mapCertificate(row);
}
