import type { Buffer } from "node:buffer";
import { Resend } from "resend";
import { env } from "../config/env";

type Attachment = {
  filename: string;
  content: Buffer;
};

type SendCertificateEmailInput = {
  to: string;
  subject: string;
  text: string;
  attachments?: Attachment[];
};

let resendClient: Resend | null = null;

function ensureResendClient() {
  if (resendClient) {
    return resendClient;
  }
  if (!env.RESEND_API_KEY) {
    return null;
  }
  resendClient = new Resend(env.RESEND_API_KEY);
  return resendClient;
}

export async function sendCertificateEmail(payload: SendCertificateEmailInput) {
  const client = ensureResendClient();
  if (!client || !env.RESEND_FROM) {
    console.info("[mail] Resend is not configured, skipping email send", {
      to: payload.to,
      subject: payload.subject,
    });
    return { skipped: true } as const;
  }

  await client.emails.send({
    from: env.RESEND_FROM,
    to: payload.to,
    subject: payload.subject,
    text: payload.text,
    attachments: payload.attachments?.map((attachment) => ({
      filename: attachment.filename,
      content: attachment.content.toString("base64"),
    })),
  });

  return { success: true } as const;
}
