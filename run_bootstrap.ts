import "dotenv/config";
import { runDevBootstrap } from "./src/server/bootstrap/devBootstrap";

runDevBootstrap()
    .then(() => {
        console.log("Bootstrap completed successfully");
        process.exit(0);
    })
    .catch((e) => {
        console.error("Bootstrap failed", e);
        process.exit(1);
    });
