import { Pool } from "pg";
import type { QueryResultRow } from "pg";
import { env } from "../config/env";

const connectionString = env.DATABASE_URL;
const ssl = env.DATABASE_SSL ? { rejectUnauthorized: false } : false;

export const pool = new Pool({
  connectionString,
  ssl,
});

export function query<T extends QueryResultRow = QueryResultRow>(text: string, params?: unknown[]) {
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
  query<T extends QueryResultRow = QueryResultRow>(text: string, params?: unknown[]): Promise<{ rows: T[] }>;
}
