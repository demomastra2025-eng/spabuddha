import cron from "node-cron";
import { env } from "../config/env";
import { query, withTransaction, type PoolClientLike } from "../db/pool";
import { getGoodById, type AltegioGood } from "./altegioService";

type CompanyForSync = {
  id: string;
  label?: string;
  altegioCompanyId: string;
  goodIds: string[];
};

type CompanyRow = {
  id: string;
  label: string;
  altegio_company_id: string | null;
  good_ids: (string | null)[] | null;
};

type CachedGoodRow = {
  good_id: string;
  title: string;
  cost: string;
  category: string | null;
  category_id: string | null;
  salon_id: string | null;
  loyalty_certificate_type_id: string | null;
  raw_data: Record<string, unknown> | null;
  last_synced_at: string | Date;
};

export type CachedAltegioGood = {
  goodId: string;
  title: string;
  cost: number;
  category: string | null;
  categoryId: string | null;
  salonId: string | null;
  loyaltyCertificateTypeId: string | null;
  rawData: Record<string, unknown> | null;
  lastSyncedAt: Date;
};

export type SyncResult = {
  companyId: string;
  synced: number;
  removed: number;
  failed: string[];
  skipped?: string;
};

let cronTask: cron.ScheduledTask | null = null;
let syncAllInProgress = false;

function normalizeGoodIds(ids: (string | number | null)[] | null | undefined): string[] {
  const unique = new Set<string>();
  if (!ids) return [];
  ids.forEach((value) => {
    if (value === null || value === undefined) return;
    const normalized = String(value).trim();
    if (normalized) {
      unique.add(normalized);
    }
  });
  return Array.from(unique);
}

function deriveTitle(good: AltegioGood) {
  if (typeof good.title === "string" && good.title.trim()) return good.title.trim();
  if (typeof good.label === "string" && good.label.trim()) return good.label.trim();
  if (typeof good.value === "string" && good.value.trim()) return good.value.trim();
  if (good.good_id !== undefined && good.good_id !== null) return String(good.good_id);
  return "Altegio good";
}

async function fetchCompaniesForSync(): Promise<CompanyForSync[]> {
  const result = await query<CompanyRow>(
    `SELECT id, label, altegio_company_id, good_ids
       FROM company
      WHERE altegio_company_id IS NOT NULL
        AND good_ids IS NOT NULL
        AND array_length(good_ids, 1) > 0`,
  );

  return result.rows
    .map((row) => ({
      id: row.id,
      label: row.label,
      altegioCompanyId: row.altegio_company_id ?? "",
      goodIds: normalizeGoodIds(row.good_ids),
    }))
    .filter((row) => row.altegioCompanyId.trim() && row.goodIds.length > 0);
}

async function upsertCachedGood(client: PoolClientLike, companyId: string, good: AltegioGood) {
  const title = deriveTitle(good);
  const cost = Number(good.cost ?? 0);
  const category = typeof good.category === "string" ? good.category : null;
  const categoryId =
    good.category_id === null || good.category_id === undefined ? null : String(good.category_id);
  const salonId = good.salon_id === null || good.salon_id === undefined ? null : String(good.salon_id);
  const loyaltyCertificateTypeId =
    good.loyalty_certificate_type_id === null || good.loyalty_certificate_type_id === undefined
      ? null
      : String(good.loyalty_certificate_type_id);
  const goodId = String(good.good_id ?? "");

  await client.query(
    `INSERT INTO altegio_goods_cache (company_id, good_id, title, cost, category, category_id, salon_id, loyalty_certificate_type_id, raw_data, last_synced_at, updated_at)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, NOW(), NOW())
     ON CONFLICT (company_id, good_id) DO UPDATE
       SET title = EXCLUDED.title,
           cost = EXCLUDED.cost,
           category = EXCLUDED.category,
           category_id = EXCLUDED.category_id,
           salon_id = EXCLUDED.salon_id,
           loyalty_certificate_type_id = EXCLUDED.loyalty_certificate_type_id,
           raw_data = EXCLUDED.raw_data,
           last_synced_at = NOW(),
           updated_at = NOW()`,
    [companyId, goodId, title, cost, category, categoryId, salonId, loyaltyCertificateTypeId, good],
  );
}

export async function clearCompanyGoodsCache(companyId: string): Promise<number> {
  const result = await query("DELETE FROM altegio_goods_cache WHERE company_id = $1", [companyId]);
  return result.rowCount ?? 0;
}

export async function getCachedGoods(companyId: string): Promise<CachedAltegioGood[]> {
  const result = await query<CachedGoodRow>(
    `SELECT good_id, title, cost, category, category_id, salon_id, loyalty_certificate_type_id, raw_data, last_synced_at
       FROM altegio_goods_cache
      WHERE company_id = $1
      ORDER BY title ASC`,
    [companyId],
  );

  return result.rows.map((row) => ({
    goodId: row.good_id,
    title: row.title,
    cost: Number(row.cost ?? 0),
    category: row.category,
    categoryId: row.category_id,
    salonId: row.salon_id,
    loyaltyCertificateTypeId: row.loyalty_certificate_type_id,
    rawData: row.raw_data,
    lastSyncedAt: row.last_synced_at instanceof Date ? row.last_synced_at : new Date(row.last_synced_at),
  }));
}

export async function syncCompanyGoods(company: CompanyForSync): Promise<SyncResult> {
  const normalizedGoodIds = normalizeGoodIds(company.goodIds);
  if (!normalizedGoodIds.length) {
    const removed = await clearCompanyGoodsCache(company.id);
    return { companyId: company.id, synced: 0, removed, failed: [], skipped: "no-good-ids" };
  }

  if (!company.altegioCompanyId.trim()) {
    return {
      companyId: company.id,
      synced: 0,
      removed: 0,
      failed: normalizedGoodIds,
      skipped: "missing-altegio-company-id",
    };
  }

  const successes: { goodId: string; payload: AltegioGood }[] = [];
  const failed: string[] = [];

  for (const goodId of normalizedGoodIds) {
    try {
      const payload = await getGoodById(company.id, company.altegioCompanyId, goodId);
      if (payload.good_id === undefined || payload.good_id === null) {
        failed.push(goodId);
        console.error(
          `[altegio-goods] Товар ${goodId} для ${company.label ?? company.id} получен без good_id, пропускаем`,
        );
        continue;
      }
      successes.push({ goodId, payload });
    } catch (error) {
      failed.push(goodId);
      console.error(
        `[altegio-goods] Не удалось получить товар ${goodId} для ${company.label ?? company.id}:`,
        error instanceof Error ? error.message : error,
      );
    }
  }

  const deleted = await withTransaction(async (client) => {
    const deleteResult = await client.query(
      "DELETE FROM altegio_goods_cache WHERE company_id = $1 AND NOT (good_id = ANY($2))",
      [company.id, normalizedGoodIds],
    );

    for (const item of successes) {
      await upsertCachedGood(client, company.id, item.payload);
    }

    return deleteResult.rowCount ?? 0;
  });

  console.info(
    `[altegio-goods] Синхронизация для ${company.label ?? company.id}: ok=${successes.length}/${
      normalizedGoodIds.length
    }, removed=${deleted}, failed=${failed.length}`,
  );

  return {
    companyId: company.id,
    synced: successes.length,
    removed: deleted,
    failed,
    skipped: undefined,
  };
}

export async function refreshCompanyGoodsCache(
  company: {
    id: string;
    label?: string;
    altegioCompanyId: string | null;
    goodIds: string[] | null;
  },
): Promise<SyncResult> {
  const normalizedGoodIds = normalizeGoodIds(company.goodIds);

  if (!normalizedGoodIds.length) {
    const removed = await clearCompanyGoodsCache(company.id);
    return { companyId: company.id, synced: 0, removed, failed: [], skipped: "no-good-ids" };
  }

  if (!company.altegioCompanyId || !company.altegioCompanyId.trim()) {
    const removed = await clearCompanyGoodsCache(company.id);
    return {
      companyId: company.id,
      synced: 0,
      removed,
      failed: normalizedGoodIds,
      skipped: "missing-altegio-company-id",
    };
  }

  return syncCompanyGoods({
    id: company.id,
    label: company.label,
    altegioCompanyId: company.altegioCompanyId,
    goodIds: normalizedGoodIds,
  });
}

export async function syncAllCompaniesGoods(): Promise<SyncResult[]> {
  if (syncAllInProgress) {
    console.warn("[altegio-goods] Синхронизация уже выполняется, пропускаем запуск");
    return [];
  }

  syncAllInProgress = true;
  try {
    const companies = await fetchCompaniesForSync();
    const results: SyncResult[] = [];

    for (const company of companies) {
      const result = await syncCompanyGoods(company);
      results.push(result);
    }

    return results;
  } finally {
    syncAllInProgress = false;
  }
}

export function startAltegioGoodsSyncCron() {
  if (!cron.validate(env.ALTEGIO_GOODS_SYNC_CRON)) {
    console.warn(
      `[altegio-goods] Некорректное выражение cron "${env.ALTEGIO_GOODS_SYNC_CRON}", задача синхронизации не запущена`,
    );
    return;
  }

  cronTask?.stop();
  cronTask = cron.schedule(env.ALTEGIO_GOODS_SYNC_CRON, () => {
    void syncAllCompaniesGoods().catch((error) => {
      console.error("[altegio-goods] Ошибка фоновой синхронизации:", error);
    });
  });

  console.info(`[altegio-goods] Запущен cron-обновитель товаров по расписанию "${env.ALTEGIO_GOODS_SYNC_CRON}"`);
}
