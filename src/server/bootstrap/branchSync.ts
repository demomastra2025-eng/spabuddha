import { branchDefaults, spaMenu } from "../data/branchDefaults";
import { query } from "../db/pool";

function resolvePreservedValue(current: string | null, fallback?: string | null) {
  return current && current.trim().length > 0 ? current : fallback ?? null;
}

async function upsertCompany(branch: (typeof branchDefaults)[number]) {
  const existing = await query<{
    id: string;
    key_one_vision: string | null;
    pass_one_vision: string | null;
    company_one_vision_id: string | null;
    company_name_one_vision_id: string | null;
  }>("SELECT id, key_one_vision, pass_one_vision, company_one_vision_id, company_name_one_vision_id FROM company WHERE slug = $1 LIMIT 1", [
    branch.slug,
  ]);

  const defaultKey = branch.oneVision.apiKey;
  const defaultSecret = branch.oneVision.secret;
  const defaultMerchant = branch.oneVision.merchantId ?? branch.oneVision.apiKey;
  const defaultService = branch.oneVision.serviceId ?? branch.oneVision.merchantId ?? branch.oneVision.apiKey;

  if (existing.rows[0]) {
    const current = existing.rows[0];
    const resolvedKey = resolvePreservedValue(current.key_one_vision, defaultKey);
    const resolvedSecret = resolvePreservedValue(current.pass_one_vision, defaultSecret);
    const resolvedMerchant = resolvePreservedValue(current.company_one_vision_id, defaultMerchant);
    const resolvedService = resolvePreservedValue(current.company_name_one_vision_id, defaultService);

    await query(
      `UPDATE company
         SET label = $1,
             address = $2,
             phone = $3,
             manager_name = $4,
             timezone = $5,
             name_company = $6,
             key_one_vision = $7,
             pass_one_vision = $8,
             company_one_vision_id = $9,
             company_name_one_vision_id = $10,
             status = 'active',
             updated_at = NOW()
       WHERE id = $11`,
      [
        branch.label,
        branch.address,
        branch.phone,
        branch.managerName,
        branch.timezone,
        branch.nameCompany,
        resolvedKey,
        resolvedSecret,
        resolvedMerchant,
        resolvedService,
        current.id,
      ],
    );
    return current.id;
  }

  const result = await query<{ id: string }>(
    `INSERT INTO company
        (slug, label, address, phone, manager_name, timezone, name_company,
         key_one_vision, pass_one_vision, company_one_vision_id, company_name_one_vision_id, status)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,'active')
     RETURNING id`,
    [
      branch.slug,
      branch.label,
      branch.address,
      branch.phone,
      branch.managerName,
      branch.timezone,
      branch.nameCompany,
      defaultKey,
      defaultSecret,
      defaultMerchant,
      defaultService,
    ],
  );
  return result.rows[0].id;
}

export async function syncBranchData() {
  const results: Array<{ slug: string; services: number }> = [];

  for (const branch of branchDefaults) {
    const companyId = await upsertCompany(branch);

    const existingServices = await query<{ name: string }>(
      `SELECT name FROM spa_procedures WHERE company_id = $1`,
      [companyId],
    );
    const existingNames = new Set(existingServices.rows.map((row) => row.name));

    let inserted = 0;

    for (const service of spaMenu) {
      if (existingNames.has(service.name)) {
        continue;
      }

      await query(
        `INSERT INTO spa_procedures
          (name, description, category, duration_minutes, price, currency, company_id, is_active)
         VALUES ($1,$2,$3,$4,$5,'KZT',$6,TRUE)`,
        [
          service.name,
          service.description ?? null,
          service.category,
          service.durationMinutes ?? null,
          service.price,
          companyId,
        ],
      );
      inserted += 1;
    }

    results.push({ slug: branch.slug, services: inserted });
  }

  return results;
}
