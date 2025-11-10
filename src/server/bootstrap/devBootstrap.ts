import { syncBranchData } from "./branchSync";

export async function runDevBootstrap() {
  const updated = await syncBranchData();
  console.info(
    `[dev-bootstrap] Обновили данные филиалов (${updated.length}) и пересобрали услуги (${updated
      .map((item) => `${item.slug}:${item.services}`)
      .join(", ")})`,
  );
}
