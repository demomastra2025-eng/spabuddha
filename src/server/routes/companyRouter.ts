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
    ensureManagerAccess(req, req.params.id);
    const company = await updateCompany(req.params.id, payload);
    if (!company) {
      res.status(404).json({ message: "Компания не найдена" });
      return;
    }
    res.json(company);
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
