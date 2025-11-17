import { z } from "zod";
import { query } from "../db/pool";
import { AppError } from "../errors/AppError";

const utmTagRow = z.object({
  id: z.string(),
  name: z.string(),
  utm_source: z.string().nullable(),
  utm_medium: z.string().nullable(),
  utm_campaign: z.string().nullable(),
  utm_term: z.string().nullable(),
  utm_content: z.string().nullable(),
  target_url: z.string().nullable(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
});

const utmTagWithStatsRow = utmTagRow.extend({
  total_visits: z.number(),
  unique_visitors: z.number(),
  last_visit_at: z.coerce.date().nullable(),
});

const utmVisitRow = z.object({
  id: z.string(),
  utm_tag_id: z.string().nullable(),
  visitor_id: z.string(),
  utm_source: z.string().nullable(),
  utm_medium: z.string().nullable(),
  utm_campaign: z.string().nullable(),
  utm_term: z.string().nullable(),
  utm_content: z.string().nullable(),
  landing_path: z.string().nullable(),
  user_agent: z.string().nullable(),
  referer: z.string().nullable(),
  first_visit_at: z.coerce.date(),
});

export type UtmTag = z.infer<typeof utmTagRow>;
export type UtmVisit = z.infer<typeof utmVisitRow>;

export interface UtmTagSummary {
  id: string;
  name: string;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  utmTerm: string | null;
  utmContent: string | null;
  targetUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
  totalVisits: number;
  uniqueVisitors: number;
  lastVisitAt: Date | null;
}

export interface UtmTagDetail extends UtmTagSummary {
  visits: Array<{
    id: string;
    visitorId: string;
    landingPath: string | null;
    firstVisitAt: Date;
    userAgent: string | null;
    referer: string | null;
  }>;
}

export const upsertUtmTagSchema = z.object({
  name: z.string().trim().min(1, "Укажите название"),
  utmSource: z.string().trim().min(1).optional(),
  utmMedium: z.string().trim().optional(),
  utmCampaign: z.string().trim().min(1, "Укажите кампанию").optional(),
  utmTerm: z.string().trim().optional(),
  utmContent: z.string().trim().optional(),
  targetUrl: z
    .string()
    .trim()
    .optional()
    .refine((value) => !value || value.length <= 1024, "URL слишком длинный"),
});

export const recordUtmVisitSchema = z.object({
  visitorId: z.string().trim().min(1),
  utmSource: z.string().trim().optional(),
  utmMedium: z.string().trim().optional(),
  utmCampaign: z.string().trim().optional(),
  utmTerm: z.string().trim().optional(),
  utmContent: z.string().trim().optional(),
  landingPath: z.string().trim().optional(),
  visitedAt: z.coerce.date().optional(),
  userAgent: z.string().trim().optional(),
  referer: z.string().trim().optional(),
});

function normalize(value?: string | null) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

function mapTag(row: UtmTag, stats?: { totalVisits?: number; uniqueVisitors?: number; lastVisitAt?: Date | null }): UtmTagSummary {
  return {
    id: row.id,
    name: row.name,
    utmSource: row.utm_source,
    utmMedium: row.utm_medium,
    utmCampaign: row.utm_campaign,
    utmTerm: row.utm_term,
    utmContent: row.utm_content,
    targetUrl: row.target_url,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    totalVisits: stats?.totalVisits ?? 0,
    uniqueVisitors: stats?.uniqueVisitors ?? 0,
    lastVisitAt: stats?.lastVisitAt ?? null,
  };
}

function mapTagWithStats(row: z.infer<typeof utmTagWithStatsRow>): UtmTagSummary {
  return mapTag(row, {
    totalVisits: row.total_visits,
    uniqueVisitors: row.unique_visitors,
    lastVisitAt: row.last_visit_at,
  });
}

function mapVisit(row: UtmVisit): UtmTagDetail["visits"][number] {
  return {
    id: row.id,
    visitorId: row.visitor_id,
    landingPath: row.landing_path,
    firstVisitAt: row.first_visit_at,
    userAgent: row.user_agent,
    referer: row.referer,
  };
}

export async function listUtmTags(): Promise<UtmTagSummary[]> {
  const result = await query<z.infer<typeof utmTagWithStatsRow>>(`
    SELECT
      t.id,
      t.name,
      t.utm_source,
      t.utm_medium,
      t.utm_campaign,
      t.utm_term,
      t.utm_content,
      t.target_url,
      t.created_at,
      t.updated_at,
      COALESCE(stats.total_visits, 0) AS total_visits,
      COALESCE(stats.unique_visitors, 0) AS unique_visitors,
      stats.last_visit_at
    FROM utm_tags t
    LEFT JOIN (
      SELECT
        utm_tag_id,
        COUNT(*)::int AS total_visits,
        COUNT(DISTINCT visitor_id)::int AS unique_visitors,
        MAX(first_visit_at) AS last_visit_at
      FROM utm_visits
      GROUP BY utm_tag_id
    ) stats ON stats.utm_tag_id = t.id
    ORDER BY t.created_at DESC
  `);

  return result.rows.map((row) => mapTagWithStats(utmTagWithStatsRow.parse(row)));
}

export async function createUtmTag(input: z.infer<typeof upsertUtmTagSchema>): Promise<UtmTagSummary> {
  const normalized = {
    name: input.name.trim(),
    utmSource: normalize(input.utmSource),
    utmMedium: normalize(input.utmMedium),
    utmCampaign: normalize(input.utmCampaign),
    utmTerm: normalize(input.utmTerm),
    utmContent: normalize(input.utmContent),
    targetUrl: normalize(input.targetUrl),
  };

  const result = await query<UtmTag>(
    `INSERT INTO utm_tags
      (name, utm_source, utm_medium, utm_campaign, utm_term, utm_content, target_url)
     VALUES ($1, $2, $3, $4, $5, $6, $7)
     RETURNING *`,
    [
      normalized.name,
      normalized.utmSource,
      normalized.utmMedium,
      normalized.utmCampaign,
      normalized.utmTerm,
      normalized.utmContent,
      normalized.targetUrl,
    ],
  );

  return mapTag(result.rows[0]);
}

export async function getUtmTag(id: string): Promise<UtmTagDetail> {
  const result = await query<z.infer<typeof utmTagWithStatsRow>>(
    `SELECT
        t.id,
        t.name,
        t.utm_source,
        t.utm_medium,
        t.utm_campaign,
        t.utm_term,
        t.utm_content,
        t.target_url,
        t.created_at,
        t.updated_at,
        COALESCE(stats.total_visits, 0) AS total_visits,
        COALESCE(stats.unique_visitors, 0) AS unique_visitors,
        stats.last_visit_at
      FROM utm_tags t
      LEFT JOIN (
        SELECT
          utm_tag_id,
          COUNT(*)::int AS total_visits,
          COUNT(DISTINCT visitor_id)::int AS unique_visitors,
          MAX(first_visit_at) AS last_visit_at
        FROM utm_visits
        GROUP BY utm_tag_id
      ) stats ON stats.utm_tag_id = t.id
      WHERE t.id = $1
      LIMIT 1`,
    [id],
  );

  const row = result.rows[0];
  if (!row) {
    throw new AppError(404, "UTM-метка не найдена");
  }

  const tag = mapTagWithStats(utmTagWithStatsRow.parse(row));

  const visitsResult = await query<UtmVisit>(
    `SELECT
        id,
        utm_tag_id,
        visitor_id,
        utm_source,
        utm_medium,
        utm_campaign,
        utm_term,
        utm_content,
        landing_path,
        user_agent,
        referer,
        first_visit_at
      FROM utm_visits
      WHERE utm_tag_id = $1
      ORDER BY first_visit_at DESC
      LIMIT 50`,
    [id],
  );

  return {
    ...tag,
    visits: visitsResult.rows.map((row) => mapVisit(utmVisitRow.parse(row))),
  };
}

export async function recordUtmVisit(input: z.infer<typeof recordUtmVisitSchema>) {
  const normalized = {
    utmSource: normalize(input.utmSource),
    utmMedium: normalize(input.utmMedium),
    utmCampaign: normalize(input.utmCampaign),
    utmTerm: normalize(input.utmTerm),
    utmContent: normalize(input.utmContent),
    landingPath: input.landingPath ? input.landingPath.slice(0, 1024) : null,
    userAgent: input.userAgent ? input.userAgent.slice(0, 512) : null,
    referer: input.referer ? input.referer.slice(0, 1024) : null,
    visitedAt: input.visitedAt ?? new Date(),
  };

  const tagResult = await query<{ id: string }>(
    `SELECT id FROM utm_tags
      WHERE utm_source IS NOT DISTINCT FROM $1
        AND utm_medium IS NOT DISTINCT FROM $2
        AND utm_campaign IS NOT DISTINCT FROM $3
        AND utm_term IS NOT DISTINCT FROM $4
        AND utm_content IS NOT DISTINCT FROM $5
      ORDER BY created_at DESC
      LIMIT 1`,
    [
      normalized.utmSource,
      normalized.utmMedium,
      normalized.utmCampaign,
      normalized.utmTerm,
      normalized.utmContent,
    ],
  );

  const tagId = tagResult.rows[0]?.id ?? null;

  await query(
    `INSERT INTO utm_visits
      (utm_tag_id, visitor_id, utm_source, utm_medium, utm_campaign, utm_term, utm_content, landing_path, user_agent, referer, first_visit_at)
     VALUES ($1::uuid, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
    [
      tagId,
      input.visitorId,
      normalized.utmSource,
      normalized.utmMedium,
      normalized.utmCampaign,
      normalized.utmTerm,
      normalized.utmContent,
      normalized.landingPath,
      normalized.userAgent,
      normalized.referer,
      normalized.visitedAt,
    ],
  );

  return { created: true, utmTagId: tagId, matchedTag: Boolean(tagId) };
}

export async function deleteUtmTag(id: string): Promise<void> {
  const result = await query<{ id: string }>(
    `DELETE FROM utm_tags
      WHERE id = $1
      RETURNING id`,
    [id],
  );

  if (result.rowCount === 0) {
    throw new AppError(404, "UTM-метка не найдена");
  }
}
