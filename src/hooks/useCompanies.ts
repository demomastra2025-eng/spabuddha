import { useEffect, useState } from "react";
import { branches as fallbackBranches } from "@/data/branches";

export interface CompanyOption {
  id: string;
  label: string;
  address: string;
  phone?: string | null;
  nameCompany?: string | null;
}

let cachedCompanies: CompanyOption[] | null = null;

export function useCompanies() {
  const [companies, setCompanies] = useState<CompanyOption[]>(cachedCompanies ?? fallbackBranches);
  const [loading, setLoading] = useState(!cachedCompanies && fallbackBranches.length === 0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (cachedCompanies) {
      return;
    }

    let cancelled = false;

    const controller = new AbortController();

    async function load() {
      try {
        setLoading(true);
        const response = await fetch("/api/companies", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Не удалось загрузить филиалы: ${response.status}`);
        }

        const data = (await response.json()) as CompanyOption[];
        if (!cancelled) {
          cachedCompanies = data;
          setCompanies(data);
          setError(null);
        }
      } catch (err) {
        if (cancelled || (err instanceof DOMException && err.name === "AbortError")) {
          return;
        }
        console.error(err);
        setError("Не удалось загрузить список филиалов, используем дефолтный список");
        setCompanies(fallbackBranches);
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
  }, []);

  return { companies, loading, error } as const;
}
