const VISITOR_ID_KEY = "spa_utm_visitor_id";

interface UtmPayload {
  visitorId: string;
  utmSource?: string | null;
  utmMedium?: string | null;
  utmCampaign?: string | null;
  utmTerm?: string | null;
  utmContent?: string | null;
  landingPath?: string;
  visitedAt?: string;
}

function ensureVisitorId(): string {
  try {
    const existing = window.localStorage.getItem(VISITOR_ID_KEY);
    if (existing) {
      return existing;
    }
    const generated = typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    window.localStorage.setItem(VISITOR_ID_KEY, generated);
    return generated;
  } catch (error) {
    console.error("utmTracking: failed to access localStorage", error);
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }
}

function extractUtmParameters(search: string) {
  const params = new URLSearchParams(search);
  const utmSource = params.get("utm_source");
  const utmMedium = params.get("utm_medium");
  const utmCampaign = params.get("utm_campaign");
  const utmTerm = params.get("utm_term");
  const utmContent = params.get("utm_content");

  const hasAny = [utmSource, utmMedium, utmCampaign, utmTerm, utmContent].some((value) => value && value.trim());
  if (!hasAny) {
    return null;
  }

  return {
    utmSource: utmSource?.trim() || null,
    utmMedium: utmMedium?.trim() || null,
    utmCampaign: utmCampaign?.trim() || null,
    utmTerm: utmTerm?.trim() || null,
    utmContent: utmContent?.trim() || null,
  } satisfies Omit<UtmPayload, "visitorId">;
}

export function initializeUtmTracking() {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  const utmData = extractUtmParameters(window.location.search);
  if (!utmData) {
    return;
  }

  const visitorId = ensureVisitorId();
  const payload: UtmPayload = {
    visitorId,
    ...utmData,
    landingPath: `${window.location.pathname}${window.location.search}`.slice(0, 1024),
    visitedAt: new Date().toISOString(),
  };

  void fetch("/api/utm/visit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      visitorId: payload.visitorId,
      utmSource: payload.utmSource,
      utmMedium: payload.utmMedium,
      utmCampaign: payload.utmCampaign,
      utmTerm: payload.utmTerm,
      utmContent: payload.utmContent,
      landingPath: payload.landingPath,
      visitedAt: payload.visitedAt,
      referer: document.referrer || undefined,
    }),
  })
    .then(() => undefined)
    .catch((error) => {
      console.error("utmTracking: failed to report visit", error);
    });
}
