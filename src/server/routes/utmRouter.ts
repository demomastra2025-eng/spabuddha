import { Router } from "express";
import { z } from "zod";
import { asyncHandler } from "../middleware/asyncHandler";
import { requireAdmin } from "../middleware/authMiddleware";
import {
  createUtmTag,
  getUtmTag,
  listUtmTags,
  recordUtmVisit,
  recordUtmVisitSchema,
  upsertUtmTagSchema,
} from "../services/utmService";

export const utmRouter = Router();

utmRouter.post(
  "/visit",
  asyncHandler(async (req, res) => {
    const payload = recordUtmVisitSchema.parse({
      ...req.body,
      userAgent: typeof req.headers["user-agent"] === "string" ? req.headers["user-agent"] : undefined,
      referer: typeof req.headers.referer === "string" ? req.headers.referer : req.body?.referer,
    });
    const result = await recordUtmVisit(payload);
    res.status(result.created ? 201 : 200).json(result);
  }),
);

utmRouter.use(requireAdmin);

utmRouter.get(
  "/tags",
  asyncHandler(async (_req, res) => {
    const tags = await listUtmTags();
    res.json(tags);
  }),
);

utmRouter.post(
  "/tags",
  asyncHandler(async (req, res) => {
    const payload = upsertUtmTagSchema.parse(req.body);
    const tag = await createUtmTag(payload);
    res.status(201).json(tag);
  }),
);

utmRouter.get(
  "/tags/:id",
  asyncHandler(async (req, res) => {
    const { id } = z.object({ id: z.string().uuid("Некорректный идентификатор") }).parse(req.params);
    const tag = await getUtmTag(id);
    res.json(tag);
  }),
);
