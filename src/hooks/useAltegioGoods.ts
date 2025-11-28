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

export function useAltegioGoods({ companyId, enabled = true, pageSize = 15 }: UseAltegioGoodsOptions) {
  const [allGoods, setAllGoods] = useState<AltegioGoodOption[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [refreshIndex, setRefreshIndex] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [companyId]);

  useEffect(() => {
    if (!enabled || !companyId) {
      setAllGoods([]);
      setLoading(false);
      setError(null);
      return;
    }

    let cancelled = false;
    const controller = new AbortController();

    async function load() {
      try {
        setLoading(true);
        // Backend now returns all filtered goods, we don't need to pass page/count
        const response = await fetch(`/api/altegio/public/goods/${companyId}`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Не удалось загрузить сертификаты: ${response.status}`);
        }

        const payload = (await response.json()) as AltegioGoodOption[];
        if (!cancelled) {
          setAllGoods(payload);
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
  }, [companyId, enabled, refreshIndex]);

  const reload = () => setRefreshIndex((index) => index + 1);
  const nextPage = () => setPage((prev) => (prev * pageSize < allGoods.length ? prev + 1 : prev));
  const prevPage = () => setPage((prev) => (prev > 1 ? prev - 1 : 1));

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const goods = allGoods.slice(startIndex, endIndex);
  const totalPages = Math.ceil(allGoods.length / pageSize);

  return { goods, loading, error, reload, page, pageSize, setPage, nextPage, prevPage, totalPages, totalCount: allGoods.length } as const;
}
