import { Router } from "express";
import { z } from "zod";
import { asyncHandler } from "../middleware/asyncHandler";
import { requireAdmin, requireManagerOrAdmin } from "../middleware/authMiddleware";
import { listPayments, markPaymentAsPaid } from "../services/paymentService";
import { handleOneVisionCallback } from "../services/oneVisionService";

const confirmSchema = z.object({
  transactionId: z.string().min(1),
});

export const paymentRouter = Router();

paymentRouter.post(
  "/onevision/callback",
  asyncHandler(async (req, res) => {
    await handleOneVisionCallback(req.body);
    res.json({ success: true });
  }),
);

paymentRouter.get(
  "/",
  requireManagerOrAdmin,
  asyncHandler(async (req, res) => {
    const filter =
      req.user?.role === "manager" && req.user.companyId ? { companyId: req.user.companyId } : undefined;
    const payments = await listPayments(filter);
    res.json(payments);
  }),
);

paymentRouter.post(
  "/:id/confirm",
  requireManagerOrAdmin,
  asyncHandler(async (req, res) => {
    const { transactionId } = confirmSchema.parse(req.body);
    const result = await markPaymentAsPaid(req.params.id, transactionId, {
      companyId: req.user?.role === "manager" ? req.user.companyId ?? undefined : undefined,
    });
    if (!result) {
      res.status(404).json({ message: "Платёж не найден" });
      return;
    }
    res.json(result);
  }),
);
