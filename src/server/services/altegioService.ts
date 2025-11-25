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

function ensureToken() {
  if (!env.ALTEGIO_USER_TOKEN) {
    throw new AppError(500, "ALTEGIO_USER_TOKEN не настроен");
  }
}

async function request<T>(path: string, options: RequestOptions = {}): Promise<T> {
  ensureToken();

  const url = `${env.ALTEGIO_API_URL}/${path.replace(/^\\/+/, "")}`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), env.ALTEGIO_TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      method: options.method ?? "GET",
      headers: {
        Authorization: `Bearer ${env.ALTEGIO_USER_TOKEN}`,
        "Content-Type": "application/json",
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

export async function searchClientByPhone(phone: string, companyId: string) {
  if (!phone) {
    throw new AppError(400, "Телефон обязателен для поиска клиента в Altegio");
  }
  return request<{ id: number }[]>(`company/${companyId}/clients/search`, {
    method: "POST",
    body: { phone },
  });
}

export async function createClientInAltegio(
  companyId: string,
  params: { name?: string; phone: string; email?: string },
) {
  if (!params.phone) {
    throw new AppError(400, "Телефон обязателен для создания клиента в Altegio");
  }
  return request<{ id: number }>(`clients/${companyId}`, {
    method: "POST",
    body: {
      name: params.name ?? params.phone,
      phone: params.phone,
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

export async function listGoods(companyId: string) {
  return request<AltegioGood[]>(`goods/${companyId}`);
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
