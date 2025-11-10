import jwt from "jsonwebtoken";
import { env } from "../config/env";

interface TokenPayload {
  sub: string;
  email: string;
  role: string;
  name?: string | null;
  companyId?: string | null;
}

export function signAccessToken(payload: TokenPayload) {
  return jwt.sign(payload, env.JWT_SECRET, { expiresIn: "1h" });
}

export function verifyAccessToken(token: string): TokenPayload {
  return jwt.verify(token, env.JWT_SECRET) as TokenPayload;
}
