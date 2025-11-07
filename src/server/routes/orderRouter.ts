import { Router } from "express";
import { asyncHandler } from "../middleware/asyncHandler";
import { requireAdmin } from "../middleware/authMiddleware";
import { createOrder, createOrderSchema, listOrders } from "../services/orderService";

export const orderRouter = Router();

orderRouter.get(
  "/",
  requireAdmin,
  asyncHandler(async (_req, res) => {
    const orders = await listOrders();
    res.json(orders);
  }),
);

orderRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const payload = createOrderSchema.parse(req.body);
    const result = await createOrder(payload);
    res.status(201).json(result);
  }),
);
