import { useEffect, useState } from "react";

export interface AltegioGoodOption {
  goodId: string | number;
  title: string;
  cost: number;
  categoryId: number | string | null;
  companyId: number | string | null;
}

interface UseAltegioGoodsOptions {
  companyId?: string;
  enabled?: boolean;
  pageSize?: number;
}

export function useAltegioGoods({ companyId, enabled = true, pageSize = 20 }: UseAltegioGoodsOptions) {
  const [goods, setGoods] = useState<AltegioGoodOption[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [refreshIndex, setRefreshIndex] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [companyId]);

  useEffect(() => {
    if (!enabled || !companyId) {
      setGoods([]);
      setLoading(false);
      setError(null);
      return;
    }

    let cancelled = false;
    const controller = new AbortController();

    async function load() {
      try {
        setLoading(true);
        const params = new URLSearchParams({
          page: String(page),
          count: String(pageSize),
        });
        const response = await fetch(`/api/altegio/public/goods/${companyId}?${params.toString()}`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Не удалось загрузить сертификаты: ${response.status}`);
        }

        const payload = (await response.json()) as AltegioGoodOption[];
        if (!cancelled) {
          setGoods(payload);
          setError(null);
        }
      } catch (err) {
        if (cancelled || (err instanceof DOMException && err.name === "AbortError")) {
          return;
        }
        console.error(err);
        setError("Не удалось загрузить типы сертификатов");
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [companyId, enabled, refreshIndex, page, pageSize]);

  const reload = () => setRefreshIndex((index) => index + 1);
  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => (prev > 1 ? prev - 1 : 1));

  return { goods, loading, error, reload, page, pageSize, setPage, nextPage, prevPage } as const;
}
