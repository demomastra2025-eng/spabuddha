import { z } from "zod";
import { pool, query, type PoolClientLike } from "../db/pool";

const clientRow = z.object({
  id: z.string(),
  first_name: z.string().nullable(),
  last_name: z.string().nullable(),
  email: z.string().nullable(),
  phone: z.string().nullable(),
  preferred_language: z.string().nullable(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  notes: z.string().nullable(),
  consent_marketing: z.boolean().nullable(),
  birthday: z.string().nullable(),
});

export type ClientRow = z.infer<typeof clientRow>;

export interface ClientView {
  id: string;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phone: string | null;
  preferredLanguage: string | null;
  createdAt: Date;
  updatedAt: Date;
  notes: string | null;
  consentMarketing: boolean | null;
  birthday: string | null;
}

export const clientInputSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  preferredLanguage: z.string().optional(),
  notes: z.string().optional(),
  consentMarketing: z.boolean().optional(),
  birthday: z.string().optional(),
});

export type ClientInput = z.infer<typeof clientInputSchema>;

function mapClient(row: ClientRow): ClientView {
  return {
    id: row.id,
    firstName: row.first_name,
    lastName: row.last_name,
    email: row.email,
    phone: row.phone,
    preferredLanguage: row.preferred_language,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    notes: row.notes,
    consentMarketing: row.consent_marketing,
    birthday: row.birthday,
  };
}

export async function listClients() {
  const result = await query<ClientRow>("SELECT * FROM client ORDER BY created_at DESC");
  return result.rows.map(mapClient);
}

export async function findOrCreateClient(input: ClientInput, client?: PoolClientLike) {
  if (!input.email && !input.phone) {
    throw new Error("Client email or phone is required");
  }

  const executor = client ?? pool;

  const existing = await executor.query<ClientRow>(
    `SELECT * FROM client WHERE email = $1 OR phone = $2 ORDER BY updated_at DESC LIMIT 1`,
    [input.email ?? null, input.phone ?? null],
  );

  if (existing.rows[0]) {
    return mapClient(existing.rows[0]);
  }

  const result = await executor.query<ClientRow>(
    `INSERT INTO client (first_name, last_name, email, phone, preferred_language, notes, consent_marketing, birthday)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
     RETURNING *`,
    [
      input.firstName ?? null,
      input.lastName ?? null,
      input.email ?? null,
      input.phone ?? null,
      input.preferredLanguage ?? null,
      input.notes ?? null,
      input.consentMarketing ?? null,
      input.birthday ?? null,
    ],
  );

  return mapClient(result.rows[0]);
}
