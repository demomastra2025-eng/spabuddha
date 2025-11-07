import { Router } from "express";
import { z } from "zod";
import { asyncHandler } from "../middleware/asyncHandler";
import { requireAdmin } from "../middleware/authMiddleware";
import { listPayments, markPaymentAsPaid } from "../services/paymentService";

const confirmSchema = z.object({
  transactionId: z.string().min(1),
});

export const paymentRouter = Router();

paymentRouter.get(
  "/",
  requireAdmin,
  asyncHandler(async (_req, res) => {
    const payments = await listPayments();
    res.json(payments);
  }),
);

paymentRouter.post(
  "/:id/confirm",
  requireAdmin,
  asyncHandler(async (req, res) => {
    const { transactionId } = confirmSchema.parse(req.body);
    const result = await markPaymentAsPaid(req.params.id, transactionId);
    if (!result) {
      res.status(404).json({ message: "Платёж не найден" });
      return;
    }
    res.json(result);
  }),
);
