import { useEffect, useState } from "react";

export interface TemplateOption {
  id: string;
  name: string;
  description?: string | null;
  backgroundUrl?: string | null;
  previewUrl?: string | null;
  fontFamily?: string | null;
  textColor?: string | null;
}

let cachedTemplates: TemplateOption[] | null = null;

export function useTemplates() {
  const [templates, setTemplates] = useState<TemplateOption[]>(cachedTemplates ?? []);
  const [loading, setLoading] = useState(!cachedTemplates);
  const [error, setError] = useState<string | null>(null);
  const [refreshIndex, setRefreshIndex] = useState(0);

  useEffect(() => {
    if (cachedTemplates && refreshIndex === 0) {
      setTemplates(cachedTemplates);
      setLoading(false);
      return;
    }

    let cancelled = false;
    const controller = new AbortController();

    async function load() {
      try {
        setLoading(true);
        const response = await fetch("/api/templates", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Failed to load templates: ${response.status}`);
        }

        const payload = (await response.json()) as Array<{
          id: string;
          name: string;
          description?: string | null;
          backgroundUrl?: string | null;
          previewUrl?: string | null;
          layoutConfig?: Record<string, unknown> | null;
        }>;

        const mapped: TemplateOption[] = payload.map((template) => {
          const layout = (template.layoutConfig ?? {}) as Record<string, unknown>;
          const fontFamily = typeof layout.fontFamily === "string" ? layout.fontFamily : null;
          const textColor = typeof layout.textColor === "string" ? layout.textColor : null;

          return {
            id: template.id,
            name: template.name,
            description: template.description,
            backgroundUrl: template.backgroundUrl,
            previewUrl: template.previewUrl ?? template.backgroundUrl,
            fontFamily,
            textColor,
          };
        });

        if (!cancelled) {
          cachedTemplates = mapped;
          setTemplates(mapped);
          setError(null);
        }
      } catch (err) {
        if (cancelled || (err instanceof DOMException && err.name === "AbortError")) {
          return;
        }
        console.error(err);
        setError("Не удалось загрузить шаблоны");
        setTemplates([]);
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
  }, [refreshIndex]);

  const reload = () => {
    cachedTemplates = null;
    setRefreshIndex((index) => index + 1);
  };

  return { templates, loading, error, reload } as const;
}

export function resetTemplatesCache() {
  cachedTemplates = null;
}
