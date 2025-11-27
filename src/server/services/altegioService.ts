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

async function getAltegioCredentials(companyId: string) {
  if (!companyId) {
    throw new AppError(400, "Не указан филиал для Altegio");
  }

  const result = await query<{ altegio_provider_token: string | null; altegio_user_token: string | null }>(
    "SELECT altegio_provider_token, altegio_user_token FROM company WHERE id = $1 LIMIT 1",
    [companyId],
  );

  const row = result.rows[0];
  const providerToken = row?.altegio_provider_token?.trim();
  const userToken = row?.altegio_user_token?.trim();

  if (!providerToken || !userToken) {
    throw new AppError(500, "Altegio credentials not found for company");
  }

  const authorization = providerToken.startsWith("Bearer") ? providerToken : `Bearer ${providerToken}`;
  return `${authorization}, User ${userToken}`;
}

const shouldLogAltegio = !env.isProduction;

function logAltegio(event: "request" | "response" | "error", payload: Record<string, unknown>) {
  if (!shouldLogAltegio) return;
  const timestamp = new Date().toISOString();
  const safePayload = JSON.stringify(payload, (_key, value) => {
    if (typeof value === "string" && value.length > 500) {
      return `${value.slice(0, 500)}…`;
    }
    return value;
  });
  console.info(`[altegio:${event}] ${timestamp} ${safePayload}`);
}

async function request<T>(companyId: string, path: string, options: RequestOptions = {}): Promise<T> {
  const authHeader = await getAltegioCredentials(companyId);

  const url = `${env.ALTEGIO_API_URL}/${path.replace(/^\/+/, "")}`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), env.ALTEGIO_TIMEOUT_MS);

  const requestInfo = {
    companyId,
    path,
    method: options.method ?? "GET",
    hasBody: Boolean(options.body),
    body: options.body ?? null,
  };

  try {
    logAltegio("request", requestInfo);

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

    logAltegio("response", {
      ...requestInfo,
      status: response.status,
      ok: response.ok,
      success: payload?.success,
      hasData: Boolean(payload && "data" in payload),
    });

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
      logAltegio("error", { ...requestInfo, message: error.message, details: error.details ?? null });
      throw error;
    }
    logAltegio("error", {
      ...requestInfo,
      message: error instanceof Error ? error.message : String(error),
    });
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

export async function searchClientByPhone(phone: string, companyId: string, altegioCompanyId: string) {
  if (!phone) {
    throw new AppError(400, "Телефон обязателен для поиска клиента в Altegio");
  }

  const formattedPhone = formatPhone(phone);

  return request<{ id: number; name: string; phone: string }[]>(companyId, `company/${altegioCompanyId}/clients/search`, {
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
  altegioCompanyId: string,
  params: { name?: string; phone: string; email?: string },
) {
  if (!params.phone) {
    throw new AppError(400, "Телефон обязателен для создания клиента в Altegio");
  }

  const formattedPhone = formatPhone(params.phone);

  return request<{ id: number }>(companyId, `clients/${altegioCompanyId}`, {
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

export async function listGoods(
  companyId: string,
  altegioCompanyId: string,
  categoryId?: string | number,
  options?: { page?: number; count?: number },
) {
  const params = new URLSearchParams();
  if (categoryId) {
    params.set("category_id", String(categoryId));
  }
  params.set("page", String(options?.page ?? 1));
  params.set("count", String(options?.count ?? 20));

  const queryString = params.toString();
  return request<AltegioGood[]>(companyId, `goods/${altegioCompanyId}?${queryString}`);
}

export async function listCertificateTypes(companyId: string, altegioCompanyId: string) {
  return request<unknown[]>(companyId, `company/${altegioCompanyId}/loyalty/certificate_types/search`);
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
  good_special_number?: string;
}

export async function createGoodsTransaction(
  companyId: string,
  altegioCompanyId: string,
  payload: GoodsTransactionPayload,
) {
  return request<{ id?: number; document_id?: number }>(
    companyId,
    `storage_operations/goods_transactions/${altegioCompanyId}`,
    {
      method: "POST",
      body: payload as unknown as Record<string, unknown>,
    },
  );
}

function formatAltegioDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

export async function createAltegioDocument(
  companyId: string,
  altegioCompanyId: string,
  storageId: string | number,
) {
  const createDate = formatAltegioDate(new Date());
  return request<{ id?: number }>(companyId, `storage_operations/documents/${altegioCompanyId}`, {
    method: "POST",
    body: {
      type_id: 1,
      comment: "Document comment",
      storage_id: Number(storageId),
      create_date: createDate,
    },
  });
}
