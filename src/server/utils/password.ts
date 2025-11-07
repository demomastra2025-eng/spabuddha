import bcrypt from "bcryptjs";
import { env } from "../config/env";

export function hashPassword(password: string) {
  return bcrypt.hash(password, env.hashRounds);
}

export function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}
