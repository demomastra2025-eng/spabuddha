import { env } from "../config/env";
import { AppError } from "../errors/AppError";

interface AltegioResponse<T> {
  success?: boolean;
  data?: T;
  meta?: unknown;
  [key: string]: unknown;
}

interface RequestOptions {
  method?: string;
  body?: Record<string, unknown>;
}

import { query } from "../db/pool";

async function getAltegioCredentials() {
  const result = await query<{ key: string; value: string }>(
    "SELECT key, value FROM system_settings WHERE key IN ('altegio_auth_token', 'altegio_user_id')",
  );

  const settings = result.rows.reduce(
    (acc, row) => {
      acc[row.key] = row.value;
      return acc;
    },
    {} as Record<string, string>,
  );

  if (!settings.altegio_auth_token || !settings.altegio_user_id) {
    throw new AppError(500, "Altegio credentials not found in system_settings");
  }

  // Format: Bearer <token>, User <user_id>
  // Note: altegio_auth_token in DB already includes "Bearer " prefix if inserted as per migration
  // If it doesn't, we might need to adjust. Assuming it does based on user input.
  return `${settings.altegio_auth_token}, User ${settings.altegio_user_id}`;
}

async function request<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const authHeader = await getAltegioCredentials();

  const url = `${env.ALTEGIO_API_URL}/${path.replace(/^\/+/, "")}`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), env.ALTEGIO_TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      method: options.method ?? "GET",
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/json",
        Accept: "application/vnd.api.v2+json",
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
      signal: controller.signal,
    });

    let payload: AltegioResponse<T> | null = null;
    try {
      payload = (await response.json()) as AltegioResponse<T>;
    } catch {
      payload = null;
    }

    if (!response.ok || payload?.success === false) {
      const details = payload ?? {};
      throw new AppError(
        response.status || 502,
        "Ошибка Altegio API",
        details && Object.keys(details).length ? details : undefined,
      );
    }

    if (payload && "data" in payload) {
      return payload.data as T;
    }

    return (payload as unknown as T) ?? ({} as T);
  } catch (error) {
    if (error instanceof AppError) {
      throw error;
    }
    throw new AppError(502, "Не удалось выполнить запрос к Altegio", {
      message: error instanceof Error ? error.message : String(error),
    });
  } finally {
    clearTimeout(timeout);
  }
}

function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\s+/g, "");
  return cleaned.startsWith("+") ? cleaned : `+${cleaned}`;
}

export async function searchClientByPhone(phone: string, companyId: string) {
  if (!phone) {
    throw new AppError(400, "Телефон обязателен для поиска клиента в Altegio");
  }

  const formattedPhone = formatPhone(phone);

  return request<{ id: number; name: string; phone: string }[]>(`company/${companyId}/clients/search`, {
    method: "POST",
    body: {
      page: 1,
      page_size: 1,
      fields: ["id", "name", "phone"],
      order_by: "name",
      order_by_direction: "desc",
      operation: "AND",
      filters: [
        {
          type: "quick_search",
          state: {
            value: formattedPhone,
          },
        },
      ],
    },
  });
}

export async function createClientInAltegio(
  companyId: string,
  params: { name?: string; phone: string; email?: string },
) {
  if (!params.phone) {
    throw new AppError(400, "Телефон обязателен для создания клиента в Altegio");
  }

  const formattedPhone = formatPhone(params.phone);

  return request<{ id: number }>(`clients/${companyId}`, {
    method: "POST",
    body: {
      name: params.name ?? formattedPhone,
      phone: formattedPhone,
      email: params.email ?? "",
    },
  });
}

export interface AltegioGood {
  title: string;
  value: string;
  label: string;
  category: string;
  category_id: number | null;
  salon_id: number | null;
  good_id: number;
  cost: number;
  loyalty_certificate_type_id: number | null;
  [key: string]: unknown;
}

export async function listGoods(companyId: string, categoryId?: string | number) {
  const queryParams = categoryId ? `?category_id=${categoryId}` : "";
  return request<AltegioGood[]>(`goods/${companyId}${queryParams}`);
}

export async function listCertificateTypes(companyId: string) {
  return request<unknown[]>(`company/${companyId}/loyalty/certificate_types/search`);
}

export interface GoodsTransactionPayload {
  document_id: number | string;
  good_id: number | string;
  amount: number;
  cost_per_unit: number;
  discount: number;
  cost: number;
  operation_unit_type: number;
  client_id: number | string | null;
  comment?: string;
}

export async function createGoodsTransaction(companyId: string, payload: GoodsTransactionPayload) {
  return request<{ id?: number; document_id?: number }>(`storage_operations/goods_transactions/${companyId}`, {
    method: "POST",
    body: payload as unknown as Record<string, unknown>,
  });
}
