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

  app.use(errorHandler);

  return app;
}
