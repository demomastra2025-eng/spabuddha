import fs from "node:fs/promises";
import path from "node:path";
import { Router } from "express";
import { asyncHandler } from "../middleware/asyncHandler";

const TMP_CERT_DIR = path.join(process.cwd(), "tmp", "certificates");
const FILE_NAME_PATTERN = /^[\w-]+\.(pdf|png|jpe?g)$/i;

export const tmpCertificateRouter = Router();

tmpCertificateRouter.get(
  "/:fileName",
  asyncHandler(async (req, res) => {
    const fileName = req.params.fileName;
    if (!FILE_NAME_PATTERN.test(fileName)) {
      res.status(404).json({ message: "Файл не найден" });
      return;
    }

    const filePath = path.join(TMP_CERT_DIR, fileName);

    try {
      await fs.access(filePath);
    } catch (error) {
      console.warn("[tmpFile] certificate not found", fileName, error);
      res.status(404).json({ message: "Файл не найден" });
      return;
    }

    res.type(fileName);
    res.sendFile(filePath);
  }),
);
