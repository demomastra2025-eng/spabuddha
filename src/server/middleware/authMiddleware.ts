import { RequestHandler } from "express";
import { AppError } from "../errors/AppError";
import { verifyAccessToken } from "../utils/jwt";

export const requireAuth: RequestHandler = (req, _res, next) => {
  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ")) {
    throw new AppError(401, "Требуется авторизация");
  }

  const token = header.slice("Bearer ".length);
  try {
    const payload = verifyAccessToken(token);
    req.user = payload;
    next();
  } catch (error) {
    throw new AppError(401, "Недействительный или просроченный токен", error);
  }
};

export const requireAdmin: RequestHandler = (req, res, next) => {
  requireAuth(req, res, (err?: unknown) => {
    if (err) {
      next(err);
      return;
    }

    if (!req.user || req.user.role !== "admin") {
      next(new AppError(403, "Недостаточно прав"));
      return;
    }

    next();
  });
};
