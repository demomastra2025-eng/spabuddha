import { branchDefaults, spaMenu } from "../data/branchDefaults";
import { query } from "../db/pool";

async function upsertCompany(branch: (typeof branchDefaults)[number]) {
  const existing = await query<{ id: string }>("SELECT id FROM company WHERE slug = $1 LIMIT 1", [branch.slug]);

  if (existing.rows[0]) {
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
        branch.oneVision.apiKey,
        branch.oneVision.secret,
        branch.oneVision.merchantId ?? branch.oneVision.apiKey,
        branch.oneVision.serviceId ?? branch.oneVision.merchantId ?? branch.oneVision.apiKey,
        existing.rows[0].id,
      ],
    );
    return existing.rows[0].id;
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
      branch.oneVision.apiKey,
      branch.oneVision.secret,
      branch.oneVision.merchantId ?? branch.oneVision.apiKey,
      branch.oneVision.serviceId ?? branch.oneVision.merchantId ?? branch.oneVision.apiKey,
    ],
  );
  return result.rows[0].id;
}

export async function syncBranchData() {
  const results: Array<{ slug: string; services: number }> = [];

  for (const branch of branchDefaults) {
    const companyId = await upsertCompany(branch);

    await query(`DELETE FROM spa_procedures WHERE company_id = $1`, [companyId]);

    for (const service of spaMenu) {
      await query(
        `INSERT INTO spa_procedures
          (name, description, category, duration_minutes, price, currency, company_id, is_active)
         VALUES ($1,$2,$3,$4,$5,'KZT',$6,TRUE)`,
        [service.name, service.description ?? null, service.category, service.durationMinutes ?? null, service.price, companyId],
      );
    }

    results.push({ slug: branch.slug, services: spaMenu.length });
  }

  return results;
}
