import type { Request } from "express";
import { env } from "../config/env";

export function resolveAppBaseUrl(req?: Request) {
  if (env.APP_BASE_URL) {
    return env.APP_BASE_URL.replace(/\/+$/, "");
  }
  if (!req) {
    return "";
  }
  const host = req.get("host");
  if (!host) {
    return "";
  }
  const protocol = req.protocol ?? "http";
  return `${protocol}://${host}`.replace(/\/+$/, "");
}

export function buildAbsoluteUrl(baseUrl: string, path: string) {
  if (!path) {
    return baseUrl;
  }
  if (/^https?:\/\//i.test(path)) {
    return path;
  }
  const normalizedBase = baseUrl.replace(/\/+$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}`;
}
