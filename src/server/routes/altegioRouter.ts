import { Router, type Request } from "express";
import { asyncHandler } from "../middleware/asyncHandler";
import { requireManagerOrAdmin } from "../middleware/authMiddleware";
import { getCompany, resolveCompanyId } from "../services/companyService";
import { listCertificateTypes, listGoods } from "../services/altegioService";
import { AppError } from "../errors/AppError";

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

    const goods = await listGoods(company.altegioCompanyId);
    res.json(goods);
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

    const types = await listCertificateTypes(company.altegioCompanyId);
    res.json(types);
  }),
);
