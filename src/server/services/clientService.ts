import { z } from "zod";
import { pool, query, type PoolClientLike } from "../db/pool";
import { AppError } from "../errors/AppError";
import { env } from "../config/env";

const clientRow = z.object({
  id: z.string(),
  first_name: z.string().nullable(),
  last_name: z.string().nullable(),
  email: z.string().nullable(),
  phone: z.string().nullable(),
  altegio_client_id: z.string().nullable(),
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
  altegioId: string | null;
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
    altegioId: row.altegio_client_id,
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

async function getAltegioCompanyId(companyId: string, executor: PoolClientLike) {
  const companyLookup = await executor.query<{ altegio_company_id: string | null }>(
    `SELECT altegio_company_id FROM company WHERE id = $1`,
    [companyId],
  );
  const altegioCompanyId = companyLookup.rows[0]?.altegio_company_id ?? null;
  if (!altegioCompanyId) {
    throw new AppError(400, "У филиала не настроен Altegio company_id");
  }
  return altegioCompanyId;
}

async function syncAltegioClientId(
  params: {
    clientId: string;
    phone: string | null;
    name: string | null;
    email: string | null;
    companyId?: string;
  },
  executor: PoolClientLike,
) {
  if (!params.companyId || !params.phone) {
    return null;
  }

  if (!env.ALTEGIO_USER_TOKEN) {
    return null;
  }

  const altegioCompanyId = await getAltegioCompanyId(params.companyId, executor);
  const displayName = params.name?.trim() || params.phone;

  const { searchClientByPhone, createClientInAltegio } = await import("./altegioService");
  const existing = await searchClientByPhone(params.phone, altegioCompanyId);
  const foundId = Array.isArray(existing) && existing[0]?.id ? String(existing[0].id) : null;

  let altegioClientId = foundId;

  if (!altegioClientId) {
    const created = await createClientInAltegio(altegioCompanyId, {
      name: displayName,
      phone: params.phone,
      email: params.email ?? undefined,
    });
    altegioClientId = created?.id ? String(created.id) : null;
  }

  if (altegioClientId) {
    await executor.query(`UPDATE client SET altegio_client_id = $1, updated_at = NOW() WHERE id = $2`, [
      altegioClientId,
      params.clientId,
    ]);
  }

  return altegioClientId;
}

export async function findOrCreateClient(
  input: ClientInput,
  client?: PoolClientLike,
  options?: { companyId?: string; syncWithAltegio?: boolean; contactName?: string },
) {
  if (!input.email && !input.phone) {
    throw new AppError(400, "Укажите email или телефон получателя");
  }

  const executor = client ?? pool;

  const existing = await executor.query<ClientRow>(
    `SELECT * FROM client WHERE email = $1 OR phone = $2 ORDER BY updated_at DESC LIMIT 1`,
    [input.email ?? null, input.phone ?? null],
  );

  const existingRow = existing.rows[0];

  if (existingRow) {
    if (
      options?.syncWithAltegio &&
      !existingRow.altegio_client_id &&
      input.phone &&
      options.companyId
    ) {
      try {
        await syncAltegioClientId(
          {
            clientId: existingRow.id,
            phone: existingRow.phone ?? input.phone ?? null,
            name: options.contactName ?? existingRow.first_name ?? null,
            email: existingRow.email ?? input.email ?? null,
            companyId: options.companyId,
          },
          executor,
        );
        const refreshed = await executor.query<ClientRow>("SELECT * FROM client WHERE id = $1", [existingRow.id]);
        return mapClient(refreshed.rows[0] ?? existingRow);
      } catch (error) {
        console.error("[altegio] Не удалось синхронизировать клиента:", error);
        throw error instanceof AppError ? error : new AppError(502, "Ошибка синхронизации клиента в Altegio");
      }
    }
    return mapClient(existingRow);
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

  const created = result.rows[0];

  if (options?.syncWithAltegio && created && input.phone && options.companyId) {
    try {
      await syncAltegioClientId(
        {
          clientId: created.id,
          phone: input.phone ?? null,
          name: options.contactName ?? input.firstName ?? null,
          email: input.email ?? null,
          companyId: options.companyId,
        },
        executor,
      );
      const refreshed = await executor.query<ClientRow>("SELECT * FROM client WHERE id = $1", [created.id]);
      return mapClient(refreshed.rows[0] ?? created);
    } catch (error) {
      console.error("[altegio] Не удалось синхронизировать клиента:", error);
      throw error instanceof AppError ? error : new AppError(502, "Ошибка синхронизации клиента в Altegio");
    }
  }

  return mapClient(created);
}
