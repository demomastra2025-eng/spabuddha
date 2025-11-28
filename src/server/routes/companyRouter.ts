import { Request, Router } from "express";
import { asyncHandler } from "../middleware/asyncHandler";
import {
  createCompany,
  deleteCompany,
  getCompany,
  listCompanies,
  updateCompany,
  upsertCompanySchema,
} from "../services/companyService";
import { requireAdmin, requireManagerOrAdmin } from "../middleware/authMiddleware";
import { AppError } from "../errors/AppError";
import { refreshCompanyGoodsCache } from "../services/altegioGoodsCacheService";

export const companyRouter = Router();

companyRouter.get(
  "/",
  asyncHandler(async (_req, res) => {
    const companies = await listCompanies();
    res.json(companies.map(({ id, label, address, phone }) => ({ id, label, address, phone })));
  }),
);

function ensureManagerAccess(req: Request, companyId: string) {
  if (req.user?.role === "manager") {
    if (!req.user.companyId) {
      throw new AppError(400, "Менеджер не привязан к филиалу");
    }
    if (req.user.companyId !== companyId) {
      throw new AppError(403, "Недостаточно прав для управления этим филиалом");
    }
  }
}

function haveGoodIdsChanged(prev: string[] | null, next: string[] | null) {
  const normalize = (value: string[] | null) =>
    (value ?? [])
      .map((id) => id.trim())
      .filter(Boolean)
      .sort();
  const a = normalize(prev);
  const b = normalize(next);
  if (a.length !== b.length) return true;
  return a.some((id, index) => id !== b[index]);
}

companyRouter.get(
  "/:id",
  requireManagerOrAdmin,
  asyncHandler(async (req, res) => {
    const company = await getCompany(req.params.id);
    if (!company) {
      res.status(404).json({ message: "Компания не найдена" });
      return;
    }

    ensureManagerAccess(req, company.id);
    res.json(company);
  }),
);

companyRouter.post(
  "/",
  requireAdmin,
  asyncHandler(async (req, res) => {
    const payload = upsertCompanySchema.parse(req.body);
    const company = await createCompany(payload);
    res.status(201).json(company);
  }),
);

companyRouter.put(
  "/:id",
  requireManagerOrAdmin,
  asyncHandler(async (req, res) => {
    const payload = upsertCompanySchema.parse(req.body);
    const existing = await getCompany(req.params.id);
    if (!existing) {
      res.status(404).json({ message: "Компания не найдена" });
      return;
    }

    ensureManagerAccess(req, existing.id);

    const company = await updateCompany(req.params.id, payload);
    if (!company) {
      res.status(404).json({ message: "Компания не найдена" });
      return;
    }
    res.json(company);

    const shouldRefresh =
      haveGoodIdsChanged(existing.goodIds, company.goodIds) ||
      (existing.altegioCompanyId ?? "") !== (company.altegioCompanyId ?? "");

    if (shouldRefresh) {
      void refreshCompanyGoodsCache({
        id: company.id,
        label: company.label,
        altegioCompanyId: company.altegioCompanyId,
        goodIds: company.goodIds,
      }).catch((error) => {
        console.error("[altegio-goods] Не удалось обновить кэш товаров после изменения компании:", error);
      });
    }
  }),
);

companyRouter.delete(
  "/:id",
  requireAdmin,
  asyncHandler(async (req, res) => {
    await deleteCompany(req.params.id);
    res.status(204).end();
  }),
);
