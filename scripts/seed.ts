import "dotenv/config";
import { pool } from "../src/server/db/pool";

type CompanySeed = {
  label?: string;
  address?: string;
  slug: string;
  altegioCompanyId: string;
  storageId?: string | null;
  altegioCategoryId?: string | null;
  altegioProviderToken?: string | null;
  altegioUserToken?: string | null;
  goodIds?: string[] | null;
};

const defaultAltegioProviderToken = "Bearer j8smnhedgebees6f2nnb";
const defaultAltegioUserToken = "31c63baf1509bc49f46be91c68123178";

const companies: CompanySeed[] = [
  {
    slug: "taraz-tole-bi-93b",
    altegioCompanyId: "1266617",
    altegioCategoryId: "1005340",
    storageId: "2539283",
  },
  {
    slug: "astana-turan-54",
    altegioCompanyId: "782603",
    altegioCategoryId: "967901",
    storageId: "1569453",
    goodIds: ["22882087", "22882029", "23652458"],
  },
  {
    slug: "shymkent-tauke-hana-95a",
    altegioCompanyId: "717537",
    altegioCategoryId: "916963",
    storageId: "1435635",
  },
  {
    slug: "shymkent-ilyaeva-37",
    altegioCompanyId: "129964",
    altegioCategoryId: "224820",
    storageId: "226518",
  },
  {
    slug: "shymkent-nursat-173b",
    altegioCompanyId: "750957",
    altegioCategoryId: "932166",
    storageId: "1503814",
  },
];

async function seedCompanies() {
  for (const company of companies) {
    const result = await pool.query(
      `UPDATE company
         SET altegio_company_id = $1,
             storage_id = COALESCE($2, storage_id),
             altegio_category_id = COALESCE($3, altegio_category_id),
             altegio_provider_token = COALESCE($4, altegio_provider_token),
             altegio_user_token = COALESCE($5, altegio_user_token),
             good_ids = COALESCE($6, good_ids),
             updated_at = NOW()
       WHERE slug = $7`,
      [
        company.altegioCompanyId,
        company.storageId ?? null,
        company.altegioCategoryId ?? null,
        company.altegioProviderToken ?? defaultAltegioProviderToken,
        company.altegioUserToken ?? defaultAltegioUserToken,
        company.goodIds ?? null,
        company.slug,
      ],
    );

    if (!result.rowCount) {
      console.warn(`⚠️  Company with slug "${company.slug}" not found, skipped`);
    }
  }
}

async function main() {
  try {
    await seedCompanies();
    console.log("✅ Seeding completed");
  } catch (error) {
    console.error("❌ Seeding failed", error);
    process.exitCode = 1;
  } finally {
    await pool.end();
  }
}

void main();
