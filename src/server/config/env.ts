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
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.coerce.number().default(587),
  SMTP_SECURE: z
    .string()
    .optional()
    .transform((value) => (value ? value === "true" : undefined)),
  SMTP_USER: z.string().optional(),
  SMTP_PASSWORD: z.string().optional(),
  SMTP_FROM: z.string().optional(),
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
  SMTP_SECURE: parsed.data.SMTP_SECURE ?? false,
};
