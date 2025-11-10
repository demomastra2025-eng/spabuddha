import { Router } from "express";
import { asyncHandler } from "../middleware/asyncHandler";
import { requireAdmin, requireManagerOrAdmin } from "../middleware/authMiddleware";
import { createOrder, createOrderSchema, listOrders } from "../services/orderService";
import { AppError } from "../errors/AppError";
import { markPaymentAsPaid } from "../services/paymentService";
import { initiateOneVisionPayment } from "../services/oneVisionService";
import { resolveAppBaseUrl } from "../utils/url";

export const orderRouter = Router();

orderRouter.get(
  "/",
  requireManagerOrAdmin,
  asyncHandler(async (req, res) => {
    const filter =
      req.user?.role === "manager" && req.user.companyId ? { companyId: req.user.companyId } : undefined;
    const orders = await listOrders(filter);
    res.json(orders);
  }),
);

function buildMockTransactionId() {
  return `MOCK-${Date.now().toString(36).toUpperCase()}`;
}

async function autoConfirmPayment(paymentId: string, options?: { companyId?: string }) {
  const result = await markPaymentAsPaid(paymentId, buildMockTransactionId(), options);
  if (!result) {
    throw new AppError(500, "Не удалось подтвердить оплату");
  }
  return result;
}

orderRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const payload = createOrderSchema.parse(req.body);
    const result = await createOrder(payload, { provider: "onevision" });
    const baseUrl = resolveAppBaseUrl(req);
    const paymentSession = await initiateOneVisionPayment({
      order: result.order,
      certificate: result.certificate,
      paymentId: result.paymentId,
      input: payload,
      baseUrl,
    });
    res.status(201).json({
      order: result.order,
      certificate: result.certificate,
      payment: paymentSession.payment,
      paymentPageUrl: paymentSession.paymentPageUrl,
    });
  }),
);

orderRouter.post(
  "/admin",
  requireManagerOrAdmin,
  asyncHandler(async (req, res) => {
    const payload = createOrderSchema.parse(req.body);

    if (req.user?.role === "manager" && req.user.companyId && payload.companyId !== req.user.companyId) {
      throw new AppError(403, "Менеджер может создавать сертификаты только для своего филиала");
    }

    const result = await createOrder(payload);
    const paymentConfirmation = await autoConfirmPayment(result.paymentId, {
      companyId: req.user?.role === "manager" ? req.user.companyId ?? undefined : undefined,
    });

    res.status(201).json({
      order: result.order,
      certificate: result.certificate,
      payment: paymentConfirmation?.payment,
      downloadUrl: paymentConfirmation?.downloadUrl,
      filePath: paymentConfirmation?.filePath,
    });
  }),
);
