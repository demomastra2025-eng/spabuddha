import { runSeed } from "./seedData";

export async function runDevBootstrap() {
  const result = await runSeed();
  console.info(
    `[dev-bootstrap] Применили seed: компании=${result.companies}, пользователи=${result.users}, шаблоны=${result.templates}`,
  );
}
