import { ErrorRequestHandler } from "express";
import { env } from "../config/env";
import { AppError } from "../errors/AppError";

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      message: err.message,
      details: err.details,
    });
    return;
  }

  console.error("Unhandled error", err);
  res.status(500).json({
    message: env.isProduction ? "Internal Server Error" : err?.message ?? "Internal Server Error",
  });
};
