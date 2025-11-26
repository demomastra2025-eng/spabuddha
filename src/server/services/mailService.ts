import type { Buffer } from "node:buffer";
import { Resend } from "resend";
import nodemailer from "nodemailer";
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
let smtpTransport: nodemailer.Transporter | null = null;

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

function ensureSmtpTransport() {
  if (smtpTransport) {
    return smtpTransport;
  }
  if (!env.SMTP_HOST || !env.SMTP_PORT || !env.SMTP_FROM) {
    return null;
  }

  smtpTransport = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: env.SMTP_PORT,
    secure: env.SMTP_SECURE,
    auth:
      env.SMTP_USER && env.SMTP_PASS
        ? {
            user: env.SMTP_USER,
            pass: env.SMTP_PASS,
          }
        : undefined,
  });

  return smtpTransport;
}

export async function sendCertificateEmail(payload: SendCertificateEmailInput) {
  if (env.MAIL_PROVIDER === "smtp") {
    const transport = ensureSmtpTransport();
    if (!transport || !env.SMTP_FROM) {
      console.info("[mail] SMTP is not configured, skipping email send", {
        to: payload.to,
        subject: payload.subject,
      });
      return { skipped: true } as const;
    }
    try {
      await transport.sendMail({
        from: env.SMTP_FROM,
        to: payload.to,
        subject: payload.subject,
        text: payload.text,
        attachments: payload.attachments?.map((attachment) => ({
          filename: attachment.filename,
          content: attachment.content,
          contentType: "application/pdf",
        })),
      });
      return { success: true } as const;
    } catch (error) {
      console.error("[mail] SMTP send failed", {
        to: payload.to,
        subject: payload.subject,
        error,
      });
      return { success: false, error } as const;
    }
  }

  // Default: Resend
  const client = ensureResendClient();
  if (!client || !env.RESEND_FROM) {
    console.info("[mail] Resend is not configured, skipping email send", {
      to: payload.to,
      subject: payload.subject,
    });
    return { skipped: true } as const;
  }

  try {
    await client.emails.send({
      from: env.RESEND_FROM,
      to: payload.to,
      subject: payload.subject,
      text: payload.text,
      attachments: payload.attachments?.map((attachment) => ({
        filename: attachment.filename,
        content: attachment.content.toString("base64"),
        contentType: "application/pdf",
      })),
    });
    return { success: true } as const;
  } catch (error) {
    console.error("[mail] Resend send failed", {
      to: payload.to,
      subject: payload.subject,
      error,
    });
    return { success: false, error } as const;
  }
}
