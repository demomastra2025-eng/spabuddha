import type { Buffer } from "node:buffer";
import { env } from "../config/env";

export interface WhatsAppCredentials {
  token: string;
  channelId: string;
  number?: string | null;
}

type WhatsAppMessagePayload = {
  chatId: string;
  text: string;
};

type WhatsAppFilePayload = {
  chatId: string;
  fileName: string;
  buffer?: Buffer;
  mimeType: string;
  caption?: string;
  contentUri?: string | null;
};

const BASE_URL = env.WAZZUP_API_URL.replace(/\/$/, "");

function getAuthHeader(credentials?: WhatsAppCredentials) {
  const token = credentials?.token?.trim();
  if (!token) {
    throw new Error("Wazzup API token is not configured");
  }
  return `Bearer ${token}`;
}

async function postToWazzup(body: unknown, credentials?: WhatsAppCredentials) {
  const channelId = credentials?.channelId?.trim();
  if (!channelId) {
    throw new Error("Wazzup channel ID is not configured");
  }

  const response = await fetch(`${BASE_URL}/message`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: getAuthHeader(credentials),
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Wazzup API error: ${response.status} ${errorText}`);
  }

  return response.json().catch(() => ({}));
}

function extractMessageId(payload: unknown): string | null {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  if ("messageId" in payload && typeof (payload as Record<string, unknown>).messageId === "string") {
    return (payload as Record<string, string>).messageId;
  }

  if ("id" in payload && typeof (payload as Record<string, unknown>).id === "string") {
    return (payload as Record<string, string>).id;
  }

  if (Array.isArray(payload)) {
    for (const item of payload) {
      const result = extractMessageId(item);
      if (result) {
        return result;
      }
    }
  }

  if ("message" in payload) {
    const result = extractMessageId((payload as Record<string, unknown>).message);
    if (result) {
      return result;
    }
  }

  if ("messages" in payload && Array.isArray((payload as Record<string, unknown>).messages)) {
    for (const item of (payload as Record<string, unknown>).messages as unknown[]) {
      const result = extractMessageId(item);
      if (result) {
        return result;
      }
    }
  }

  return null;
}

async function patchWazzupMessage(messageId: string, body: unknown, credentials?: WhatsAppCredentials) {
  const response = await fetch(`${BASE_URL}/message/${messageId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: getAuthHeader(credentials),
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Wazzup API error: ${response.status} ${errorText}`);
  }

  return response.json().catch(() => ({}));
}

export async function sendWhatsAppMessage(payload: WhatsAppMessagePayload, credentials?: WhatsAppCredentials) {
  if (!credentials?.token || !credentials.channelId) {
    console.info("[whatsapp] Missing credentials, skipping message", { chatId: payload.chatId });
    return { skipped: true } as const;
  }

  return postToWazzup(
    {
      channelId: credentials.channelId,
      chatId: payload.chatId,
      chatType: "whatsapp",
      text: payload.text,
    },
    credentials,
  );
}

export async function sendWhatsAppFile(payload: WhatsAppFilePayload, credentials?: WhatsAppCredentials) {
  if (!credentials?.token || !credentials.channelId) {
    console.info("[whatsapp] Missing credentials, skipping file send", { chatId: payload.chatId });
    return { skipped: true } as const;
  }

  const useContentUri = Boolean(payload.contentUri);
  if (!useContentUri && !payload.buffer) {
    throw new Error("WhatsApp file payload requires buffer when contentUri is not provided");
  }

  const body: Record<string, unknown> = {
    channelId: credentials.channelId,
    chatId: payload.chatId,
    chatType: "whatsapp",
  };

  if (useContentUri) {
    // По требованиям Wazzup нельзя одновременно передавать text и contentUri.
    body.contentUri = payload.contentUri;
  } else {
    body.text = payload.caption ?? payload.fileName;
    body.type = "file";
    body.file = {
      name: payload.fileName,
      contentType: payload.mimeType,
      data: payload.buffer?.toString("base64"),
    };
  }

  const response = await postToWazzup(body, credentials);

  return response;
}
