import bcrypt from "bcryptjs";
import { Pool } from "pg";
import { branchDefaults } from "../data/branchDefaults";

type CompanySeed = {
  slug: string;
  label: string;
  address: string;
  phone: string;
  nameCompany?: string;
  email?: string;
  managerName?: string;
  timezone?: string;
  keyOneVision?: string;
  passOneVision?: string;
  companyOneVisionId?: string;
  companyNameOneVisionId?: string;
  altegioCompanyId?: string;
  altegioCategoryId?: string;
  altegioDocumentId?: string;
};

type TemplateSeed = {
  key: string;
  name: string;
  description: string;
  backgroundUrl: string;
  previewUrl: string;
  layoutConfig: Record<string, unknown>;
};

const templateTextColor = "#273517";

type UserSeed = {
  email: string;
  password: string;
  displayName: string;
  role: "superadmin" | "admin" | "manager";
  companySlug?: string;
};

const companies: CompanySeed[] = branchDefaults.map((branch) => {
  let altegioCompanyId: string | undefined;
  let altegioCategoryId: string | undefined;
  const isAstana = branch.slug === "astana-turan-54";

  const oneVisionOverride = isAstana
    ? {
        apiKey: "7110b98f-b3f4-4b4f-b7ef-af71278a657d",
        secret: "1ebd8dfbb1b1001a6f07f8a6aa2ea8aded02d0a2209a30a2ade7df5f6e44e2d2",
        merchantId: "c9ce6199-f2cc-451a-9b4f-55ac2f783f74",
        serviceId: "a3384e50-a9f0-481d-9187-4d65feaf6ef4",
      }
    : {
        apiKey: null,
        secret: null,
        merchantId: null,
        serviceId: null,
      };

  if (branch.address.includes("Кунаева")) {
    altegioCompanyId = "129964";
    altegioCategoryId = "224820";
  } else if (branch.address.includes("Тауке хана")) {
    altegioCompanyId = "717537";
    altegioCategoryId = "916963";
  } else if (branch.address.includes("Нурсат")) {
    altegioCompanyId = "750957";
    altegioCategoryId = "932166";
  } else if (branch.address.includes("Туран")) {
    altegioCompanyId = "782603";
    altegioCategoryId = "967901";
  } else if (branch.address.includes("Толе Би")) {
    altegioCompanyId = "1266617";
    altegioCategoryId = "1005340";
  }

  return {
    slug: branch.slug,
    label: branch.label,
    address: branch.address,
    phone: branch.phone,
    managerName: branch.managerName,
    timezone: branch.timezone,
    nameCompany: branch.nameCompany,
    keyOneVision: oneVisionOverride.apiKey,
    passOneVision: oneVisionOverride.secret,
    companyOneVisionId: oneVisionOverride.merchantId ?? oneVisionOverride.apiKey,
    companyNameOneVisionId: oneVisionOverride.serviceId ?? oneVisionOverride.merchantId ?? oneVisionOverride.apiKey,
    altegioCompanyId,
    altegioCategoryId,
    altegioDocumentId: "22254960",
  };
});

const templateSeeds: TemplateSeed[] = [
  {
    key: "ornament-gold-1",
    name: "Золотое кружево",
    description: "Глубокий чёрный фон с золотыми акцентами",
    backgroundUrl: "/template/IMG_2137.PNG",
    previewUrl: "/template/IMG_2137.PNG",
    layoutConfig: {
      accentColor: "#C8A55F",
      backgroundColor: "#0F0F0F",
      textColor: templateTextColor,
    },
  },
  {
    key: "marble-light",
    name: "Светлый мрамор",
    description: "Текстурный светлый фон с тонкими линиями золота",
    backgroundUrl: "/template/IMG_2138.PNG",
    previewUrl: "/template/IMG_2138.PNG",
    layoutConfig: {
      accentColor: "#A57C52",
      backgroundColor: "#EFEADE",
      textColor: templateTextColor,
    },
  },
  {
    key: "marble-dark",
    name: "Тёмный мрамор",
    description: "Контрастный мрамор с россыпью золотых вкраплений",
    backgroundUrl: "/template/IMG_2139.PNG",
    previewUrl: "/template/IMG_2139.PNG",
    layoutConfig: {
      accentColor: "#E0C097",
      backgroundColor: "#0B0B0B",
      textColor: templateTextColor,
    },
  },
  {
    key: "amber-lines",
    name: "Янтарные линии",
    description: "Тёмный градиент с диагональными янтарными штрихами",
    backgroundUrl: "/template/IMG_2141.PNG",
    previewUrl: "/template/IMG_2141.PNG",
    layoutConfig: {
      accentColor: "#AD6B32",
      backgroundColor: "#111111",
      textColor: templateTextColor,
    },
  },
  {
    key: "terracotta-silk",
    name: "Терракотовый шёлк",
    description: "Насыщенный терракотовый фон с плавными линиями",
    backgroundUrl: "/template/IMG_2142.PNG",
    previewUrl: "/template/IMG_2142.PNG",
    layoutConfig: {
      accentColor: "#C76B37",
      backgroundColor: "#1E1A17",
      textColor: templateTextColor,
    },
  },
  {
    key: "buddha-glow",
    name: "Сияние Будды",
    description: "Глубокий чёрный с крупным золотым орнаментом",
    backgroundUrl: "/template/IMG_2143.PNG",
    previewUrl: "/template/IMG_2143.PNG",
    layoutConfig: {
      accentColor: "#BDA083",
      backgroundColor: "#050505",
      textColor: templateTextColor,
    },
  },
  {
    key: "stone-mineral",
    name: "Минеральный камень",
    description: "Пастельные минералы и золотой логотип",
    backgroundUrl: "/template/IMG_2144.PNG",
    previewUrl: "/template/IMG_2144.PNG",
    layoutConfig: {
      accentColor: "#9FC5C0",
      backgroundColor: "#1A1A1A",
      textColor: templateTextColor,
    },
  },
  {
    key: "calligraphy-gold",
    name: "Подпись мастера",
    description: "Тёмный фон со вставками золотой каллиграфии",
    backgroundUrl: "/template/IMG_2149.JPG",
    previewUrl: "/template/IMG_2149.JPG",
    layoutConfig: {
      accentColor: "#D2A679",
      backgroundColor: "#0D0D0D",
      textColor: templateTextColor,
    },
  },
  {
    key: "pearl-wave",
    name: "Перламутровая волна",
    description: "Молочно-золотой градиент с мягкой текстурой",
    backgroundUrl: "/template/IMG_2150.JPG",
    previewUrl: "/template/IMG_2150.JPG",
    layoutConfig: {
      accentColor: "#B18C6E",
      backgroundColor: "#F7F0E6",
      textColor: templateTextColor,
    },
  },
  {
    key: "graphite-gold",
    name: "Графитовый блеск",
    description: "Графит и золото для строгого сертификата",
    backgroundUrl: "/template/IMG_2151.JPG",
    previewUrl: "/template/IMG_2151.JPG",
    layoutConfig: {
      accentColor: "#D7B46A",
      backgroundColor: "#161616",
      textColor: templateTextColor,
    },
  },
];

const userSeeds: UserSeed[] = [
  {
    email: "superadmin@buddhaspa.kz",
    password: "SuperBuddha#2024",
    displayName: "Супер администратор",
    role: "superadmin",
  },
  {
    email: "admin@buddhaspa.kz",
    password: "BuddhaSpa#2024",
    displayName: "Главный администратор",
    role: "admin",
  },
  {
    email: "astana.manager@buddhaspa.kz",
    password: "Manager#Astana2024",
    displayName: "Менеджер Астана",
    role: "manager",
    companySlug: "astana-turan-54",
  },
  {
    email: "taukehana.manager@buddhaspa.kz",
    password: "Manager#Tauke2024",
    displayName: "Менеджер Шымкент Тауке",
    role: "manager",
    companySlug: "shymkent-tauke-hana-95a",
  },
  {
    email: "nursat.manager@buddhaspa.kz",
    password: "Manager#Nursat2024",
    displayName: "Менеджер Шымкент Нурсат",
    role: "manager",
    companySlug: "shymkent-nursat-173b",
  },
  {
    email: "kunaeva.manager@buddhaspa.kz",
    password: "Manager#Kunaeva2024",
    displayName: "Менеджер Шымкент Кунаева",
    role: "manager",
    companySlug: "shymkent-kunaeva-13",
  },
  {
    email: "taraz.manager@buddhaspa.kz",
    password: "Manager#Taraz2024",
    displayName: "Менеджер Тараз",
    role: "manager",
    companySlug: "taraz-tole-bi-93b",
  },
];

function getPool() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is not defined");
  }

  return new Pool({
    connectionString,
    ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : undefined,
  });
}

async function seedCompanies(pool: Pool) {
  const companyMap = new Map<string, string>();
  for (const company of companies) {
    const existing = await pool.query<{ id: string }>(
      `SELECT id FROM company WHERE slug = $1 OR (slug IS NULL AND label = $2 AND address = $3) LIMIT 1`,
      [company.slug, company.label, company.address],
    );

    if (existing.rows[0]) {
      await pool.query(
        `UPDATE company
         SET label = $1,
             address = $2,
             phone = $3,
             manager_name = $4,
             timezone = $5,
             status = 'active',
             slug = $6,
             name_company = $7,
             key_one_vision = $8,
             pass_one_vision = $9,
             company_one_vision_id = $10,
             company_name_one_vision_id = $11,
             email = $12,
             altegio_company_id = $13,
             altegio_category_id = $14,
             altegio_document_id = $15,
             updated_at = NOW()
         WHERE id = $16`,
        [
          company.label,
          company.address,
          company.phone,
          company.managerName ?? null,
          company.timezone ?? null,
          company.slug,
          company.nameCompany ?? null,
          company.keyOneVision ?? null,
          company.passOneVision ?? null,
          company.companyOneVisionId ?? null,
          company.companyNameOneVisionId ?? null,
          company.email ?? null,
          company.altegioCompanyId ?? null,
          company.altegioCategoryId ?? null,
          company.altegioDocumentId ?? null,
          existing.rows[0].id,
        ],
      );
      companyMap.set(company.slug, existing.rows[0].id);
      continue;
    }

    const result = await pool.query<{ id: string }>(
      `INSERT INTO company
        (slug, label, address, phone, status, manager_name, timezone, name_company, key_one_vision,
         pass_one_vision, company_one_vision_id, company_name_one_vision_id, email, altegio_company_id, altegio_category_id, altegio_document_id)
       VALUES ($1,$2,$3,$4,'active',$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)
       RETURNING id`,
      [
        company.slug,
        company.label,
        company.address,
        company.phone,
        company.managerName ?? null,
        company.timezone ?? null,
        company.nameCompany ?? null,
        company.keyOneVision ?? null,
        company.passOneVision ?? null,
        company.companyOneVisionId ?? null,
        company.companyNameOneVisionId ?? null,
        company.email ?? null,
        company.altegioCompanyId ?? null,
        company.altegioCategoryId ?? null,
        company.altegioDocumentId ?? null,
      ],
    );
    companyMap.set(company.slug, result.rows[0].id);
  }
  return companyMap;
}

async function seedUsers(pool: Pool, companyMap: Map<string, string>) {
  const rounds = Number(process.env.BCRYPT_ROUNDS ?? 10);
  const userMap = new Map<string, { id: string; companyId: string | null }>();

  for (const admin of userSeeds) {
    const passwordHash = await bcrypt.hash(admin.password, rounds);
    const companyId = admin.companySlug ? companyMap.get(admin.companySlug) ?? null : null;

    const existing = await pool.query<{ id: string }>(
      `SELECT id FROM users WHERE email = $1 LIMIT 1`,
      [admin.email],
    );

    if (existing.rows[0]) {
      await pool.query(
        `UPDATE users
         SET password_hash = $1,
             role = $2,
             display_name = $3,
             is_active = TRUE,
             company_id = $4,
             updated_at = NOW()
         WHERE id = $5`,
        [passwordHash, admin.role, admin.displayName ?? null, companyId, existing.rows[0].id],
      );
      userMap.set(admin.email, { id: existing.rows[0].id, companyId });
      continue;
    }

    const result = await pool.query<{ id: string }>(
      `INSERT INTO users (email, password_hash, role, display_name, is_active, company_id)
       VALUES ($1,$2,$3,$4,TRUE,$5)
       RETURNING id`,
      [admin.email, passwordHash, admin.role, admin.displayName ?? null, companyId],
    );
    userMap.set(admin.email, { id: result.rows[0].id, companyId });
  }

  return userMap;
}

async function seedTemplates(pool: Pool) {
  const templateMap = new Map<string, string>();
  for (const template of templateSeeds) {
    const result = await pool.query<{ id: string }>(
      `INSERT INTO template
        (name, description, background_url, layout_config, preview_url, is_active, locale)
       VALUES ($1,$2,$3,$4::jsonb,$5,TRUE,'ru')
       ON CONFLICT (name)
       DO UPDATE SET description = EXCLUDED.description,
                     background_url = EXCLUDED.background_url,
                     layout_config = EXCLUDED.layout_config,
                     preview_url = EXCLUDED.preview_url,
                     updated_at = NOW()
       RETURNING id`,
      [template.name, template.description, template.backgroundUrl, JSON.stringify(template.layoutConfig), template.previewUrl],
    );
    templateMap.set(template.key, result.rows[0].id);
  }
  return templateMap;
}

async function seedSystemSettings(pool: Pool) {
  const settings = [
    { key: "altegio_auth_token", value: "Bearer j8smnhedgebees6f2nnb", description: "Altegio API Authorization Token" },
    { key: "altegio_user_id", value: "31c63baf1509bc49f46be91c68123178", description: "Altegio User ID" },
  ];

  for (const setting of settings) {
    await pool.query(
      `INSERT INTO system_settings (key, value, description)
       VALUES ($1, $2, $3)
       ON CONFLICT (key)
       DO UPDATE SET value = EXCLUDED.value,
                     description = EXCLUDED.description,
                     updated_at = NOW()`,
      [setting.key, setting.value, setting.description],
    );
  }
}

export interface SeedResult {
  companies: number;
  users: number;
  templates: number;
}

export async function runSeed(): Promise<SeedResult> {
  const pool = getPool();
  try {
    await seedSystemSettings(pool);
    const companyMap = await seedCompanies(pool);
    const userMap = await seedUsers(pool, companyMap);
    const templateMap = await seedTemplates(pool);

    return {
      companies: companyMap.size,
      users: userMap.size,
      templates: templateMap.size,
    };
  } finally {
    await pool.end();
  }
}
