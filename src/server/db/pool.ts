import { Pool } from "pg";
import { env } from "../config/env";

const connectionString = env.DATABASE_URL;

export const pool = new Pool({
  connectionString,
  ssl: env.isProduction ? { rejectUnauthorized: false } : false,
});

export function query<T = unknown>(text: string, params?: unknown[]) {
  return pool.query<T>(text, params);
}

export async function withTransaction<T>(callback: (client: PoolClientLike) => Promise<T>): Promise<T> {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const result = await callback(client);
    await client.query("COMMIT");
    return result;
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
}

export interface PoolClientLike {
  query<T = unknown>(text: string, params?: unknown[]): Promise<{ rows: T[] }>;
}
