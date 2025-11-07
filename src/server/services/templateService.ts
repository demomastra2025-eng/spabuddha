import { z } from "zod";
import { query } from "../db/pool";

const templateRow = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  background_url: z.string().nullable(),
  layout_config: z.any().nullable(),
  preview_url: z.string().nullable(),
  is_active: z.boolean(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  created_by: z.string().nullable(),
  locale: z.string().nullable(),
});

export type Template = z.infer<typeof templateRow>;

export interface TemplateView {
  id: string;
  name: string;
  description: string | null;
  backgroundUrl: string | null;
  layoutConfig: unknown;
  previewUrl: string | null;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string | null;
  locale: string | null;
}

export const templateInputSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  backgroundUrl: z.string().url().optional(),
  layoutConfig: z.any().optional(),
  previewUrl: z.string().url().optional(),
  isActive: z.boolean().default(true),
  createdBy: z.string().optional(),
  locale: z.string().optional(),
});

export type TemplateInput = z.infer<typeof templateInputSchema>;

function mapTemplate(row: Template): TemplateView {
  return {
    id: row.id,
    name: row.name,
    description: row.description,
    backgroundUrl: row.background_url,
    layoutConfig: row.layout_config,
    previewUrl: row.preview_url,
    isActive: row.is_active,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    createdBy: row.created_by,
    locale: row.locale,
  };
}

export async function listTemplates() {
  const result = await query<Template>("SELECT * FROM template ORDER BY created_at DESC");
  return result.rows.map(mapTemplate);
}

export async function createTemplate(input: TemplateInput) {
  const result = await query<Template>(
    `INSERT INTO template
      (name, description, background_url, layout_config, preview_url, is_active, created_by, locale)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
     RETURNING *`,
    [
      input.name,
      input.description ?? null,
      input.backgroundUrl ?? null,
      input.layoutConfig ?? null,
      input.previewUrl ?? null,
      input.isActive ?? true,
      input.createdBy ?? null,
      input.locale ?? null,
    ],
  );
  return mapTemplate(result.rows[0]);
}

export async function updateTemplate(id: string, input: TemplateInput) {
  const result = await query<Template>(
    `UPDATE template SET
      name = $1,
      description = $2,
      background_url = $3,
      layout_config = $4,
      preview_url = $5,
      is_active = $6,
      created_by = $7,
      locale = $8,
      updated_at = NOW()
     WHERE id = $9
     RETURNING *`,
    [
      input.name,
      input.description ?? null,
      input.backgroundUrl ?? null,
      input.layoutConfig ?? null,
      input.previewUrl ?? null,
      input.isActive ?? true,
      input.createdBy ?? null,
      input.locale ?? null,
      id,
    ],
  );
  const row = result.rows[0];
  return row ? mapTemplate(row) : null;
}
