import express from "express";
import fs from "fs";
import path from "path";
import { authRouter } from "./routes/authRouter";
import { companyRouter } from "./routes/companyRouter";
import { templateRouter } from "./routes/templateRouter";
import { certificateRouter } from "./routes/certificateRouter";
import { orderRouter } from "./routes/orderRouter";
import { clientRouter } from "./routes/clientRouter";
import { paymentRouter } from "./routes/paymentRouter";
import { healthRouter } from "./routes/healthRouter";
import { errorHandler } from "./middleware/errorHandler";
import { spaProcedureRouter } from "./routes/spaProcedureRouter";
import { previewRouter } from "./routes/previewRouter";
import { utmRouter } from "./routes/utmRouter";
import { tmpCertificateRouter } from "./routes/tmpFileRouter";
import { altegioRouter } from "./routes/altegioRouter";

export function createApp() {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/api/health", healthRouter);
  app.use("/api/auth", authRouter);
  app.use("/api/companies", companyRouter);
  app.use("/api/templates", templateRouter);
  app.use("/api/certificates", certificateRouter);
  app.use("/api/orders", orderRouter);
  app.use("/api/clients", clientRouter);
  app.use("/api/payments", paymentRouter);
  app.use("/api/spa-procedures", spaProcedureRouter);
  app.use("/api/preview", previewRouter);
  app.use("/api/utm", utmRouter);
  app.use("/api/tmp/certificates", tmpCertificateRouter);
  app.use("/api/altegio", altegioRouter);

  // Serve built client when it exists (works for both dev Docker image and production)
  const distDir = path.resolve(process.cwd(), "dist");
  if (fs.existsSync(distDir)) {
    const indexHtml = path.join(distDir, "index.html");
    app.use(express.static(distDir));
    app.use((req, res, next) => {
      if (req.path.startsWith("/api/") || req.method !== "GET") return next();
      return res.sendFile(indexHtml);
    });
  }

  app.use(errorHandler);

  return app;
}
