import { Router } from "express";
import { asyncHandler } from "../middleware/asyncHandler";
import { requireAdmin } from "../middleware/authMiddleware";
import { createTemplate, listTemplates, templateInputSchema, updateTemplate } from "../services/templateService";

export const templateRouter = Router();

templateRouter.get(
  "/",
  asyncHandler(async (_req, res) => {
    const templates = await listTemplates();
    res.json(templates);
  }),
);

templateRouter.post(
  "/",
  requireAdmin,
  asyncHandler(async (req, res) => {
    const payload = templateInputSchema.parse(req.body);
    const template = await createTemplate(payload);
    res.status(201).json(template);
  }),
);

templateRouter.put(
  "/:id",
  requireAdmin,
  asyncHandler(async (req, res) => {
    const payload = templateInputSchema.parse(req.body);
    const template = await updateTemplate(req.params.id, payload);
    if (!template) {
      res.status(404).json({ message: "Шаблон не найден" });
      return;
    }
    res.json(template);
  }),
);
