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
  WAZZUP_API_TOKEN: z.string().optional(),
  WAZZUP_CHANNEL_ID: z.string().optional(),
  RESEND_API_KEY: z.string().optional(),
  RESEND_FROM: z.string().email().optional(),
  ONEVISION_API_URL: z.string().url().default("https://api.onevisionpay.com/"),
  ONEVISION_PAYMENT_LIFETIME: z
    .string()
    .optional()
    .transform((value) => (value ? Number(value) : undefined))
    .refine(
      (value) => (value === undefined || (Number.isFinite(value) && value > 0)),
      "ONEVISION_PAYMENT_LIFETIME must be a positive number",
    ),
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
};
