import type { Buffer } from "node:buffer";
import nodemailer, { type Transporter } from "nodemailer";
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

let transporter: Transporter | null = null;

function ensureTransporter() {
  if (transporter) {
    return transporter;
  }

  if (!env.SMTP_HOST) {
    return null;
  }

  transporter = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: env.SMTP_PORT,
    secure: env.SMTP_SECURE,
    auth: env.SMTP_USER
      ? {
          user: env.SMTP_USER,
          pass: env.SMTP_PASSWORD,
        }
      : undefined,
  });

  return transporter;
}

export async function sendCertificateEmail(payload: SendCertificateEmailInput) {
  const transport = ensureTransporter();

  if (!transport) {
    console.info("[mail] SMTP credentials are not configured, skipping email send", {
      to: payload.to,
      subject: payload.subject,
    });
    return { skipped: true } as const;
  }

  await transport.sendMail({
    from: env.SMTP_FROM ?? "no-reply@buddhaspa.kz",
    to: payload.to,
    subject: payload.subject,
    text: payload.text,
    attachments: payload.attachments?.map((attachment) => ({
      filename: attachment.filename,
      content: attachment.content,
    })),
  });

  return { success: true } as const;
}
