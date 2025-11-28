import { Router, type Request } from "express";
import { asyncHandler } from "../middleware/asyncHandler";
import { requireManagerOrAdmin } from "../middleware/authMiddleware";
import { getCompany, resolveCompanyId } from "../services/companyService";
import { listCertificateTypes } from "../services/altegioService";
import { AppError } from "../errors/AppError";
import { getCachedGoods } from "../services/altegioGoodsCacheService";

export const altegioRouter = Router();

function ensureManagerAccess(req: Request, companyId: string) {
  if (req.user?.role === "manager" && req.user.companyId && req.user.companyId !== companyId) {
    throw new AppError(403, "Недостаточно прав для работы с этим филиалом");
  }
}

altegioRouter.get(
  "/goods/:companyId",
  requireManagerOrAdmin,
  asyncHandler(async (req, res) => {
    const normalizedId = await resolveCompanyId(req.params.companyId);
    const company = await getCompany(normalizedId);

    if (!company) {
      throw new AppError(404, "Филиал не найден");
    }

    ensureManagerAccess(req, company.id);

    if (!company.altegioCompanyId) {
      throw new AppError(400, "Для филиала не указан Altegio company_id");
    }

    const cachedGoods = await getCachedGoods(company.id);

    res.json(
      cachedGoods.map((good) => ({
        ...good.rawData,
        good_id: good.goodId,
        title: good.title,
        cost: good.cost,
        category: good.category,
        category_id: good.categoryId,
        salon_id: good.salonId,
        loyalty_certificate_type_id: good.loyaltyCertificateTypeId,
        last_synced_at: good.lastSyncedAt,
      })),
    );
  }),
);

altegioRouter.get(
  "/public/goods/:companyId",
  asyncHandler(async (req, res) => {
    const normalizedId = await resolveCompanyId(req.params.companyId);
    const company = await getCompany(normalizedId);

    if (!company) {
      throw new AppError(404, "Филиал не найден");
    }

    if (!company.altegioCompanyId) {
      throw new AppError(400, "Для филиала не указан Altegio company_id");
    }

    const cachedGoods = await getCachedGoods(company.id);

    const simplified = cachedGoods.map((good) => ({
      title: good.title,
      cost: good.cost,
      goodId: good.goodId,
      categoryId: good.categoryId,
      companyId: good.salonId,
    }));

    res.json(simplified);
  }),
);

altegioRouter.get(
  "/certificate-types/:companyId",
  requireManagerOrAdmin,
  asyncHandler(async (req, res) => {
    const normalizedId = await resolveCompanyId(req.params.companyId);
    const company = await getCompany(normalizedId);

    if (!company) {
      throw new AppError(404, "Филиал не найден");
    }

    ensureManagerAccess(req, company.id);

    if (!company.altegioCompanyId) {
      throw new AppError(400, "Для филиала не указан Altegio company_id");
    }

    const types = await listCertificateTypes(company.id, company.altegioCompanyId);
    res.json(types);
  }),
);
