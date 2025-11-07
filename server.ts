
import ViteExpress from "vite-express";
import { createApp } from "./src/server/app";
import { env } from "./src/server/config/env";

const app = createApp();

ViteExpress.listen(app, env.PORT, () => {
  console.log(`Server is listening on port ${env.PORT}...`);
});
