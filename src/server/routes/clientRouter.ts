import { Router } from "express";
import { asyncHandler } from "../middleware/asyncHandler";
import { requireAdmin } from "../middleware/authMiddleware";
import { listClients } from "../services/clientService";

export const clientRouter = Router();

clientRouter.get(
  "/",
  requireAdmin,
  asyncHandler(async (_req, res) => {
    const clients = await listClients();
    res.json(clients);
  }),
);
