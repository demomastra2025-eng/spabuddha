import fs from "node:fs/promises";
import path from "node:path";
import { Router } from "express";
import { asyncHandler } from "../middleware/asyncHandler";
import { requireAdmin } from "../middleware/authMiddleware";
import { query } from "../db/pool";
import { certificateInputSchema, createCertificate, getCertificateById, listCertificates } from "../services/certificateService";

export const certificateRouter = Router();

certificateRouter.get(
  "/",
  requireAdmin,
  asyncHandler(async (_req, res) => {
    const certificates = await listCertificates();
    res.json(certificates);
  }),
);

certificateRouter.post(
  "/",
  requireAdmin,
  asyncHandler(async (req, res) => {
    const payload = certificateInputSchema.parse(req.body);
    const certificate = await createCertificate(payload);
    res.status(201).json(certificate);
  }),
);

certificateRouter.get(
  "/:id/download",
  asyncHandler(async (req, res) => {
    const certificate = await getCertificateById(req.params.id);
    if (!certificate || !certificate.fileUrl) {
      res.status(404).json({ message: "Сертификат не найден или файл недоступен" });
      return;
    }

    const orderStatus = await query<{ payment_status: string }>(
      `SELECT payment_status FROM orders WHERE certificate_id = $1 ORDER BY created_at DESC LIMIT 1`,
      [certificate.id],
    );

    if (!orderStatus.rows[0] || orderStatus.rows[0].payment_status !== "paid") {
      res.status(403).json({ message: "Сертификат доступен для скачивания после оплаты" });
      return;
    }

    const filePath = path.isAbsolute(certificate.fileUrl)
      ? certificate.fileUrl
      : path.join(process.cwd(), certificate.fileUrl);

    try {
      await fs.access(filePath);
    } catch (error) {
      console.error("certificate download error", error);
      res.status(404).json({ message: "Файл сертификата не найден" });
      return;
    }

    res.download(filePath, path.basename(filePath));
  }),
);
