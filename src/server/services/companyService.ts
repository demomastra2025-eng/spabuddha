import { z } from "zod";
import { query } from "../db/pool";

const companyRow = z.object({
  id: z.string(),
  label: z.string(),
  address: z.string(),
  phone: z.string().nullable(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  name_company: z.string().nullable(),
  bin_company: z.string().nullable(),
  bik_company: z.string().nullable(),
  official_address: z.string().nullable(),
  company_one_vision_id: z.string().nullable(),
  pass_one_vision: z.string().nullable(),
  key_one_vision: z.string().nullable(),
  company_name_one_vision_id: z.string().nullable(),
  email: z.string().nullable(),
  status: z.string(),
  manager_name: z.string().nullable(),
  timezone: z.string().nullable(),
});

export type Company = z.infer<typeof companyRow>;

export interface CompanyView {
  id: string;
  label: string;
  address: string;
  phone: string | null;
  createdAt: Date;
  updatedAt: Date;
  nameCompany: string | null;
  binCompany: string | null;
  bikCompany: string | null;
  officialAddress: string | null;
  companyOneVisionId: string | null;
  passOneVision: string | null;
  keyOneVision: string | null;
  companyNameOneVisionId: string | null;
  email: string | null;
  status: string;
  managerName: string | null;
  timezone: string | null;
}

export const upsertCompanySchema = z.object({
  label: z.string().min(1),
  address: z.string().min(1),
  phone: z.string().optional(),
  nameCompany: z.string().optional(),
  binCompany: z.string().optional(),
  bikCompany: z.string().optional(),
  officialAddress: z.string().optional(),
  companyOneVisionId: z.string().optional(),
  passOneVision: z.string().optional(),
  keyOneVision: z.string().optional(),
  companyNameOneVisionId: z.string().optional(),
  email: z.string().email().optional(),
  status: z.enum(["active", "inactive"]).default("active"),
  managerName: z.string().optional(),
  timezone: z.string().optional(),
});

function mapCompany(row: Company): CompanyView {
  return {
    id: row.id,
    label: row.label,
    address: row.address,
    phone: row.phone,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    nameCompany: row.name_company,
    binCompany: row.bin_company,
    bikCompany: row.bik_company,
    officialAddress: row.official_address,
    companyOneVisionId: row.company_one_vision_id,
    passOneVision: row.pass_one_vision,
    keyOneVision: row.key_one_vision,
    companyNameOneVisionId: row.company_name_one_vision_id,
    email: row.email,
    status: row.status,
    managerName: row.manager_name,
    timezone: row.timezone,
  };
}

export async function listCompanies() {
  const result = await query<Company>("SELECT * FROM company ORDER BY label ASC");
  return result.rows.map(mapCompany);
}

export async function getCompany(id: string) {
  const result = await query<Company>("SELECT * FROM company WHERE id = $1 LIMIT 1", [id]);
  const row = result.rows[0];
  return row ? mapCompany(row) : null;
}

export async function createCompany(input: z.infer<typeof upsertCompanySchema>) {
  const result = await query<Company>(
    `INSERT INTO company
      (label, address, phone, name_company, bin_company, bik_company, official_address,
       company_one_vision_id, pass_one_vision, key_one_vision, company_name_one_vision_id,
       email, status, manager_name, timezone)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)
     RETURNING *`,
    [
      input.label,
      input.address,
      input.phone ?? null,
      input.nameCompany ?? null,
      input.binCompany ?? null,
      input.bikCompany ?? null,
      input.officialAddress ?? null,
      input.companyOneVisionId ?? null,
      input.passOneVision ?? null,
      input.keyOneVision ?? null,
      input.companyNameOneVisionId ?? null,
      input.email ?? null,
      input.status,
      input.managerName ?? null,
      input.timezone ?? null,
    ],
  );
  return mapCompany(result.rows[0]);
}

export async function updateCompany(id: string, input: z.infer<typeof upsertCompanySchema>) {
  const result = await query<Company>(
    `UPDATE company SET
      label = $1,
      address = $2,
      phone = $3,
      name_company = $4,
      bin_company = $5,
      bik_company = $6,
      official_address = $7,
      company_one_vision_id = $8,
      pass_one_vision = $9,
      key_one_vision = $10,
      company_name_one_vision_id = $11,
      email = $12,
      status = $13,
      manager_name = $14,
      timezone = $15,
      updated_at = NOW()
     WHERE id = $16
     RETURNING *`,
    [
      input.label,
      input.address,
      input.phone ?? null,
      input.nameCompany ?? null,
      input.binCompany ?? null,
      input.bikCompany ?? null,
      input.officialAddress ?? null,
      input.companyOneVisionId ?? null,
      input.passOneVision ?? null,
      input.keyOneVision ?? null,
      input.companyNameOneVisionId ?? null,
      input.email ?? null,
      input.status,
      input.managerName ?? null,
      input.timezone ?? null,
      id,
    ],
  );
  const row = result.rows[0];
  return row ? mapCompany(row) : null;
}

export async function deleteCompany(id: string) {
  await query("DELETE FROM company WHERE id = $1", [id]);
}
