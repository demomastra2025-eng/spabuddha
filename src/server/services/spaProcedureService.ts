import { z } from "zod";
import { query } from "../db/pool";
import { resolveCompanyId } from "./companyService";

const spaProcedureRow = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  category: z.string().nullable(),
  duration_minutes: z.number().nullable(),
  price: z.number(),
  discount_percent: z.number(),
  currency: z.string(),
  company_id: z.string(),
  is_active: z.boolean(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
});

export type SpaProcedureRow = z.infer<typeof spaProcedureRow>;

export interface SpaProcedureView {
  id: string;
  name: string;
  description: string | null;
  category: string | null;
  durationMinutes: number | null;
  price: number;
  discountPercent: number;
  currency: string;
  companyId: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export const spaProcedureInputSchema = z.object({
  name: z.string().min(2),
  description: z.string().optional(),
  category: z.string().optional(),
  durationMinutes: z.number().int().positive().optional(),
  price: z.number().positive(),
  discountPercent: z.number().min(0).max(100).default(0),
  currency: z.string().min(1).default("KZT"),
  companyId: z.string().min(1),
  isActive: z.boolean().default(true),
});

export type SpaProcedureInput = z.infer<typeof spaProcedureInputSchema>;

function mapSpaProcedure(row: SpaProcedureRow): SpaProcedureView {
  return {
    id: row.id,
    name: row.name,
    description: row.description,
    category: row.category,
    durationMinutes: row.duration_minutes,
    price: Number(row.price),
    discountPercent: Number(row.discount_percent),
    currency: row.currency,
    companyId: row.company_id,
    isActive: row.is_active,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export async function listSpaProcedures(filter?: { companyId?: string; includeInactive?: boolean }) {
  const params: unknown[] = [];
  const conditions: string[] = [];

  if (filter?.companyId) {
    const normalizedCompanyId = await resolveCompanyId(filter.companyId);
    params.push(normalizedCompanyId);
    conditions.push(`company_id = $${params.length}`);
  }

  if (!filter?.includeInactive) {
    conditions.push("is_active = TRUE");
  }

  const whereClause = conditions.length ? `WHERE ${conditions.join(" AND ")}` : "";

  const rows = await query<SpaProcedureRow>(
    `SELECT * FROM spa_procedures ${whereClause} ORDER BY name ASC`,
    params,
  );

  return rows.rows.map(mapSpaProcedure);
}

export async function getSpaProcedureById(id: string) {
  const result = await query<SpaProcedureRow>("SELECT * FROM spa_procedures WHERE id = $1 LIMIT 1", [id]);
  return result.rows[0] ? mapSpaProcedure(result.rows[0]) : null;
}

export async function createSpaProcedure(input: SpaProcedureInput) {
  const result = await query<SpaProcedureRow>(
    `INSERT INTO spa_procedures
      (name, description, category, duration_minutes, price, discount_percent, currency, company_id, is_active)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
     RETURNING *`,
    [
      input.name,
      input.description ?? null,
      input.category ?? null,
      input.durationMinutes ?? null,
      input.price,
      input.discountPercent ?? 0,
      input.currency ?? "KZT",
      input.companyId,
      input.isActive ?? true,
    ],
  );

  return mapSpaProcedure(result.rows[0]);
}

export async function updateSpaProcedure(id: string, input: SpaProcedureInput) {
  const result = await query<SpaProcedureRow>(
    `UPDATE spa_procedures SET
      name = $1,
      description = $2,
      category = $3,
      duration_minutes = $4,
      price = $5,
      discount_percent = $6,
      currency = $7,
      company_id = $8,
      is_active = $9,
      updated_at = NOW()
     WHERE id = $10
     RETURNING *`,
    [
      input.name,
      input.description ?? null,
      input.category ?? null,
      input.durationMinutes ?? null,
      input.price,
      input.discountPercent ?? 0,
      input.currency ?? "KZT",
      input.companyId,
      input.isActive ?? true,
      id,
    ],
  );

  return result.rows[0] ? mapSpaProcedure(result.rows[0]) : null;
}

export async function softDeleteSpaProcedure(id: string) {
  await query("UPDATE spa_procedures SET is_active = FALSE, updated_at = NOW() WHERE id = $1", [id]);
}
