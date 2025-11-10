import { Router } from "express";
import { asyncHandler } from "../middleware/asyncHandler";
import {
  createSpaProcedure,
  getSpaProcedureById,
  listSpaProcedures,
  softDeleteSpaProcedure,
  spaProcedureInputSchema,
  updateSpaProcedure,
} from "../services/spaProcedureService";
import { requireManagerOrAdmin } from "../middleware/authMiddleware";
import { AppError } from "../errors/AppError";

export const spaProcedureRouter = Router();

spaProcedureRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const companyId = typeof req.query.companyId === "string" ? req.query.companyId : undefined;
    const includeInactive = req.query.includeInactive === "true";

    const procedures = await listSpaProcedures({ companyId, includeInactive });
    res.json(procedures);
  }),
);

spaProcedureRouter.post(
  "/",
  requireManagerOrAdmin,
  asyncHandler(async (req, res) => {
    const payload = spaProcedureInputSchema.parse(req.body);

    if (req.user?.role === "manager" && req.user.companyId && payload.companyId !== req.user.companyId) {
      throw new AppError(403, "Менеджер может управлять только услугами своего филиала");
    }

    const procedure = await createSpaProcedure(payload);
    res.status(201).json(procedure);
  }),
);

spaProcedureRouter.put(
  "/:id",
  requireManagerOrAdmin,
  asyncHandler(async (req, res) => {
    const payload = spaProcedureInputSchema.parse(req.body);

    if (req.user?.role === "manager" && req.user.companyId && payload.companyId !== req.user.companyId) {
      throw new AppError(403, "Менеджер может управлять только услугами своего филиала");
    }

    const procedure = await updateSpaProcedure(req.params.id, payload);
    if (!procedure) {
      res.status(404).json({ message: "Услуга не найдена" });
      return;
    }
    res.json(procedure);
  }),
);

spaProcedureRouter.delete(
  "/:id",
  requireManagerOrAdmin,
  asyncHandler(async (req, res) => {
    const procedure = await getSpaProcedureById(req.params.id);
    if (!procedure) {
      res.status(404).json({ message: "Услуга не найдена" });
      return;
    }

    if (req.user?.role === "manager" && req.user.companyId && procedure.companyId !== req.user.companyId) {
      throw new AppError(403, "Менеджер может управлять только услугами своего филиала");
    }

    await softDeleteSpaProcedure(req.params.id);
    res.status(204).end();
  }),
);
