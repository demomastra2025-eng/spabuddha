import { z } from "zod";
import { pool, query, type PoolClientLike } from "../db/pool";
import { generateCertificateCode } from "../utils/certificate";

const certificateRow = z.object({
  id: z.string(),
  name_cert: z.string(),
  start_date: z.coerce.date().nullable(),
  finish_date: z.coerce.date().nullable(),
  company_id: z.string(),
  type_cert: z.string(),
  price_cert: z.number(),
  service_cert: z.string().nullable(),
  template_id: z.string().nullable(),
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
  };
}

export async function listCertificates() {
  const result = await query<CertificateRow>("SELECT * FROM certificates ORDER BY created_at DESC");
  return result.rows.map(mapCertificate);
}

export async function createCertificate(input: CertificateInput, client?: PoolClientLike) {
  const code = generateCertificateCode();
  const executor = client ?? pool;
  const result = await executor.query<CertificateRow>(
    `INSERT INTO certificates
      (name_cert, start_date, finish_date, company_id, type_cert, price_cert, service_cert,
       template_id, code, status, sender_name, recipient_name, recipient_email, message, currency, created_by)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,'active',$10,$11,$12,$13,$14,$15)
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
