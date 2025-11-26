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
}

export function useAltegioGoods({ companyId, enabled = true }: UseAltegioGoodsOptions) {
  const [goods, setGoods] = useState<AltegioGoodOption[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [refreshIndex, setRefreshIndex] = useState(0);

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
        const response = await fetch(`/api/altegio/public/goods/${companyId}`, { signal: controller.signal });

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
  }, [companyId, enabled, refreshIndex]);

  const reload = () => setRefreshIndex((index) => index + 1);

  return { goods, loading, error, reload } as const;
}
