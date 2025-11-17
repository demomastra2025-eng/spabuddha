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
  buffer: Buffer;
  mimeType: string;
  caption?: string;
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

  return postToWazzup(
    {
      channelId: credentials.channelId,
      chatId: payload.chatId,
      chatType: "whatsapp",
      type: "file",
      caption: payload.caption,
      file: {
        name: payload.fileName,
        contentType: payload.mimeType,
        data: payload.buffer.toString("base64"),
      },
    },
    credentials,
  );
}
