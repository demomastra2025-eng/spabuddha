import { RequestHandler } from "express";
import { AppError } from "../errors/AppError";
import { verifyAccessToken } from "../utils/jwt";

const adminRoles = new Set(["admin", "superadmin"]);
const managerAndAboveRoles = new Set(["manager", "admin", "superadmin"]);

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

    if (!req.user || !adminRoles.has(req.user.role)) {
      next(new AppError(403, "Недостаточно прав"));
      return;
    }

    next();
  });
};

export const requireManagerOrAdmin: RequestHandler = (req, res, next) => {
  requireAuth(req, res, (err?: unknown) => {
    if (err) {
      next(err);
      return;
    }

    if (!req.user || !managerAndAboveRoles.has(req.user.role)) {
      next(new AppError(403, "Недостаточно прав"));
      return;
    }

    if (req.user.role === "manager" && !req.user.companyId) {
      next(new AppError(400, "Менеджер не привязан к филиалу"));
      return;
    }

    next();
  });
};
