const VISITOR_ID_KEY = "spa_utm_visitor_id";
const LAST_VISIT_KEY = "spa_utm_last_visit";

interface StoredVisitInfo {
  signature: string;
  reportedAt: number;
}

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

function buildSignature(payload: UtmPayload): string {
  return [
    payload.visitorId,
    payload.utmSource ?? "",
    payload.utmMedium ?? "",
    payload.utmCampaign ?? "",
    payload.utmTerm ?? "",
    payload.utmContent ?? "",
  ].join("|");
}

function shouldReport(signature: string): boolean {
  try {
    const storedRaw = window.localStorage.getItem(LAST_VISIT_KEY);
    if (!storedRaw) {
      return true;
    }
    const stored = JSON.parse(storedRaw) as StoredVisitInfo | null;
    if (!stored || typeof stored.signature !== "string") {
      return true;
    }
    return stored.signature !== signature;
  } catch (error) {
    console.error("utmTracking: failed to read localStorage", error);
    return true;
  }
}

function markReported(signature: string) {
  try {
    const info: StoredVisitInfo = { signature, reportedAt: Date.now() };
    window.localStorage.setItem(LAST_VISIT_KEY, JSON.stringify(info));
  } catch (error) {
    console.error("utmTracking: failed to persist visit info", error);
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

  const signature = buildSignature(payload);
  if (!shouldReport(signature)) {
    return;
  }

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
    .then((response) => {
      if (response.ok) {
        markReported(signature);
      }
    })
    .catch((error) => {
      console.error("utmTracking: failed to report visit", error);
    });
}
