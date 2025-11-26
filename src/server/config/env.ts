import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z
    .string()
    .regex(/^\d+$/)
    .transform((value) => Number(value))
    .default("3000"),
  DATABASE_URL: z.string().min(1, "DATABASE_URL is required"),
  JWT_SECRET: z.string().min(16, "JWT_SECRET must be at least 16 characters").default("change-me-in-prod"),
  BCRYPT_ROUNDS: z
    .string()
    .optional()
    .transform((value) => (value ? Number(value) : undefined))
    .refine((value) => (value ? Number.isInteger(value) && value > 3 : true), "BCRYPT_ROUNDS must be an integer > 3"),
  APP_BASE_URL: z.string().url().optional(),
  WAZZUP_API_URL: z.string().default("https://api.wazzup24.com/v3"),
  RESEND_API_KEY: z.string().optional(),
  RESEND_FROM: z.string().email().optional(),
  MAIL_PROVIDER: z.enum(["resend", "smtp"]).default("resend"),
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z
    .string()
    .optional()
    .transform((value) => (value ? Number(value) : undefined))
    .refine((value) => (value === undefined || (Number.isInteger(value) && value > 0)), "SMTP_PORT must be a positive integer"),
  SMTP_USER: z.string().optional(),
  SMTP_PASS: z.string().optional(),
  SMTP_SECURE: z
    .string()
    .optional()
    .transform((value) => (value ? value === "true" : undefined)),
  SMTP_FROM: z.string().email().optional(),
  ONEVISION_API_URL: z.string().url().default("https://api.onevisionpay.com/"),
  ONEVISION_PAYMENT_LIFETIME: z
    .string()
    .optional()
    .transform((value) => (value ? Number(value) : undefined))
    .refine(
      (value) => (value === undefined || (Number.isFinite(value) && value > 0)),
      "ONEVISION_PAYMENT_LIFETIME must be a positive number",
    ),
  ALTEGIO_API_URL: z.string().url().default("https://api.alteg.io/api/v1"),
  ALTEGIO_USER_TOKEN: z.string().optional(),
  ALTEGIO_TIMEOUT_MS: z
    .string()
    .optional()
    .transform((value) => (value ? Number(value) : undefined))
    .refine(
      (value) => (value === undefined || (Number.isFinite(value) && value > 0)),
      "ALTEGIO_TIMEOUT_MS must be a positive number",
    ),
  ALTEGIO_DEFAULT_DOCUMENT_ID: z.string().optional(),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error("❌ Invalid environment variables", parsed.error.flatten().fieldErrors);
  throw new Error("Invalid environment configuration");
}

export const env = {
  ...parsed.data,
  isProduction: parsed.data.NODE_ENV === "production",
  hashRounds: parsed.data.BCRYPT_ROUNDS ?? 10,
  ONEVISION_API_URL: parsed.data.ONEVISION_API_URL.replace(/\/+$/, ""),
  ONEVISION_PAYMENT_LIFETIME: parsed.data.ONEVISION_PAYMENT_LIFETIME ?? 900,
  ALTEGIO_API_URL: parsed.data.ALTEGIO_API_URL.replace(/\/+$/, ""),
  ALTEGIO_TIMEOUT_MS: parsed.data.ALTEGIO_TIMEOUT_MS ?? 10000,
  ALTEGIO_DEFAULT_DOCUMENT_ID: parsed.data.ALTEGIO_DEFAULT_DOCUMENT_ID,
  MAIL_PROVIDER: parsed.data.MAIL_PROVIDER,
  SMTP_HOST: parsed.data.SMTP_HOST,
  SMTP_PORT: parsed.data.SMTP_PORT,
  SMTP_USER: parsed.data.SMTP_USER,
  SMTP_PASS: parsed.data.SMTP_PASS,
  SMTP_SECURE: parsed.data.SMTP_SECURE ?? false,
  SMTP_FROM: parsed.data.SMTP_FROM,
};
