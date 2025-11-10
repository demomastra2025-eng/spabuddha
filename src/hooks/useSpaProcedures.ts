import { useEffect, useState } from "react";
import { getFallbackServices } from "@/data/services";

export interface SpaProcedureOption {
  id: string;
  name: string;
  description?: string | null;
  category?: string | null;
  durationMinutes?: number | null;
  price: number;
  discountPercent?: number;
  currency?: string;
  companyId?: string;
  isActive?: boolean;
}

interface UseSpaProceduresOptions {
  companyId?: string | null;
  includeInactive?: boolean;
  fallbackToDefaults?: boolean;
  fallbackBranchId?: string | null;
  enabled?: boolean;
}

export function useSpaProcedures({
  companyId,
  includeInactive = false,
  fallbackToDefaults = false,
  fallbackBranchId,
  enabled = true,
}: UseSpaProceduresOptions) {
  const [services, setServices] = useState<SpaProcedureOption[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [refreshIndex, setRefreshIndex] = useState(0);

  useEffect(() => {
    if (!enabled) {
      setServices([]);
      setLoading(false);
      setError(null);
      return;
    }

    let cancelled = false;
    const controller = new AbortController();

    async function load() {
      try {
        setLoading(true);
        const params = new URLSearchParams();
        if (companyId && companyId !== "all") {
          params.set("companyId", companyId);
        }
        if (includeInactive) {
          params.set("includeInactive", "true");
        }

        const search = params.toString();
        const response = await fetch(`/api/spa-procedures${search ? `?${search}` : ""}`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Не удалось загрузить услуги: ${response.status}`);
        }

        const payload = (await response.json()) as SpaProcedureOption[];

        if (!cancelled) {
          setServices(payload);
          setError(null);
        }
      } catch (err) {
        if (cancelled || (err instanceof DOMException && err.name === "AbortError")) {
          return;
        }

        console.error(err);
        if (fallbackToDefaults) {
          const fallbackServices = getFallbackServices(fallbackBranchId ?? companyId ?? undefined).map(
            (service) => ({
              ...service,
              companyId: service.branchId,
            }),
          );
          setServices(fallbackServices);
        }
        setError("Не удалось загрузить услуги");
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
  }, [companyId, includeInactive, fallbackToDefaults, fallbackBranchId, enabled, refreshIndex]);

  const reload = () => setRefreshIndex((index) => index + 1);

  return { services, loading, error, reload } as const;
}
