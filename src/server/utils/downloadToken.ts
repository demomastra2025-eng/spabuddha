import crypto from "node:crypto";
import { env } from "../config/env";

const TOKEN_VERSION = "v1";

function getSecret() {
  return env.JWT_SECRET;
}

function buildSignaturePayload(certificateId: string, orderId: string) {
  return `${TOKEN_VERSION}:${certificateId}:${orderId}`;
}

export function createDownloadToken(certificateId: string, orderId: string) {
  const secret = getSecret();
  return crypto.createHmac("sha256", secret).update(buildSignaturePayload(certificateId, orderId)).digest("hex");
}

export function verifyDownloadToken(token: string | undefined, certificateId: string, orderId: string) {
  if (!token) return false;
  try {
    const expected = createDownloadToken(certificateId, orderId);
    const provided = Buffer.from(token, "hex");
    const reference = Buffer.from(expected, "hex");
    if (provided.length !== reference.length) {
      return false;
    }
    return crypto.timingSafeEqual(provided, reference);
  } catch {
    return false;
  }
}
