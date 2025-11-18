
import ViteExpress from "vite-express";
import { createApp } from "./src/server/app";
import { env } from "./src/server/config/env";
import { runDevBootstrap } from "./src/server/bootstrap/devBootstrap";
import { startOneVisionStatusPolling } from "./src/server/services/oneVisionService";

const app = createApp();

async function start() {
  if (!env.isProduction) {
    try {
      await runDevBootstrap();
    } catch (error) {
      console.error("[dev-bootstrap] Не удалось подготовить базу данных:", error);
    }
  }

  startOneVisionStatusPolling();

  ViteExpress.listen(app, env.PORT, () => {
    console.log(`Server is listening on port ${env.PORT}...`);
  });
}

start().catch((error) => {
  console.error("Не удалось запустить сервер:", error);
  process.exitCode = 1;
});
