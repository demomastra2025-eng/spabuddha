import type { Buffer } from "node:buffer";
import { env } from "../config/env";

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

function getAuthHeader() {
  if (!env.WAZZUP_API_TOKEN) {
    throw new Error("WAZZUP_API_TOKEN is not configured");
  }
  return `Bearer ${env.WAZZUP_API_TOKEN}`;
}

async function postToWazzup(body: unknown) {
  if (!env.WAZZUP_CHANNEL_ID) {
    throw new Error("WAZZUP_CHANNEL_ID is not configured");
  }

  const response = await fetch(`${BASE_URL}/message`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: getAuthHeader(),
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Wazzup API error: ${response.status} ${errorText}`);
  }

  return response.json().catch(() => ({}));
}

export async function sendWhatsAppMessage(payload: WhatsAppMessagePayload) {
  if (!env.WAZZUP_API_TOKEN || !env.WAZZUP_CHANNEL_ID) {
    console.info("[whatsapp] Missing API credentials, skipping message send", payload.chatId);
    return { skipped: true } as const;
  }

  return postToWazzup({
    channelId: env.WAZZUP_CHANNEL_ID,
    chatId: payload.chatId,
    chatType: "whatsapp",
    text: payload.text,
  });
}

export async function sendWhatsAppFile(payload: WhatsAppFilePayload) {
  if (!env.WAZZUP_API_TOKEN || !env.WAZZUP_CHANNEL_ID) {
    console.info("[whatsapp] Missing API credentials, skipping file send", payload.chatId);
    return { skipped: true } as const;
  }

  return postToWazzup({
    channelId: env.WAZZUP_CHANNEL_ID,
    chatId: payload.chatId,
    chatType: "whatsapp",
    type: "file",
    caption: payload.caption,
    file: {
      name: payload.fileName,
      contentType: payload.mimeType,
      data: payload.buffer.toString("base64"),
    },
  });
}
