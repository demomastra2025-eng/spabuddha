import express from "express";
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

  app.use(errorHandler);

  return app;
}
