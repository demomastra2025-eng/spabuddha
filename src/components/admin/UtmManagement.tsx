import { ChangeEvent, FormEventHandler, useCallback, useEffect, useMemo, useState } from "react";
import { Clipboard, ExternalLink, RefreshCw, TrendingUp } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface UtmTagSummary {
  id: string;
  name: string;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  utmTerm: string | null;
  utmContent: string | null;
  targetUrl: string | null;
  createdAt: string;
  updatedAt: string;
  totalVisits: number;
  uniqueVisitors: number;
  lastVisitAt: string | null;
}

interface UtmTagDetail extends UtmTagSummary {
  visits: Array<{
    id: string;
    visitorId: string;
    landingPath: string | null;
    firstVisitAt: string;
    userAgent: string | null;
    referer: string | null;
  }>;
}

interface UtmManagementProps {
  token?: string | null;
  canManage: boolean;
}

const defaultFormState = {
  name: "",
  utmSource: "",
  utmMedium: "",
  utmCampaign: "",
  utmTerm: "",
  utmContent: "",
  targetUrl: "",
};

type FormState = typeof defaultFormState;

const formFields: Array<{
  key: keyof FormState;
  label: string;
  placeholder?: string;
  required?: boolean;
}> = [
  { key: "name", label: "Название метки", required: true, placeholder: "Например, Весенний промо" },
  { key: "targetUrl", label: "Целевая страница", placeholder: "https://example.kz/landing" },
  { key: "utmSource", label: "UTM Source", required: true, placeholder: "google" },
  { key: "utmMedium", label: "UTM Medium", placeholder: "cpc" },
  { key: "utmCampaign", label: "UTM Campaign", placeholder: "spring_sale" },
  { key: "utmTerm", label: "UTM Term", placeholder: "spa+kz" },
  { key: "utmContent", label: "UTM Content", placeholder: "banner_a" },
];

export function UtmManagement({ token, canManage }: UtmManagementProps) {
  const [form, setForm] = useState<FormState>(defaultFormState);
  const [creating, setCreating] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState<UtmTagSummary[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedTagId, setSelectedTagId] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<UtmTagDetail | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);

  const resetForm = () => setForm(defaultFormState);

  const handleFormChange = (key: keyof FormState) => (event: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const loadTags = useCallback(async () => {
    if (!canManage || !token) {
      setTags([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/utm/tags", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        throw new Error(payload?.message ?? "Не удалось загрузить метки");
      }

      const data = (await response.json()) as UtmTagSummary[];
      setTags(data);
      if (!data.length) {
        setSelectedTagId(null);
        setSelectedTag(null);
      }
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "Неизвестная ошибка загрузки");
    } finally {
      setLoading(false);
    }
  }, [canManage, token]);

  const loadTagDetail = useCallback(
    async (tagId: string) => {
      if (!canManage || !token) {
        return;
      }

      setDetailLoading(true);
      try {
        const response = await fetch(`/api/utm/tags/${tagId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const payload = await response.json().catch(() => null);
          throw new Error(payload?.message ?? "Не удалось загрузить статистику");
        }

        const data = (await response.json()) as UtmTagDetail;
        setSelectedTagId(tagId);
        setSelectedTag(data);
      } catch (err) {
        console.error(err);
        toast.error(err instanceof Error ? err.message : "Не удалось загрузить статистику");
      } finally {
        setDetailLoading(false);
      }
    },
    [canManage, token],
  );

  useEffect(() => {
    void loadTags();
  }, [loadTags]);

  useEffect(() => {
    if (!selectedTagId && tags.length) {
      void loadTagDetail(tags[0].id);
    }
  }, [tags, selectedTagId, loadTagDetail]);

  const submitForm: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (!canManage) {
      toast.error("Раздел доступен только администраторам");
      return;
    }
    if (!token) {
      toast.error("Сессия истекла. Перезайдите.");
      return;
    }
    if (!form.name.trim()) {
      toast.error("Введите название метки");
      return;
    }
    if (!form.utmSource.trim()) {
      toast.error("Укажите utm_source");
      return;
    }

    setCreating(true);
    try {
      const payload = {
        name: form.name.trim(),
        utmSource: form.utmSource.trim(),
        utmMedium: form.utmMedium.trim() || undefined,
        utmCampaign: form.utmCampaign.trim() || undefined,
        utmTerm: form.utmTerm.trim() || undefined,
        utmContent: form.utmContent.trim() || undefined,
        targetUrl: form.targetUrl.trim() || undefined,
      };

      const response = await fetch("/api/utm/tags", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const payloadData = await response.json().catch(() => null);
        throw new Error(payloadData?.message ?? "Не удалось создать метку");
      }

      const created = (await response.json()) as UtmTagSummary;
      toast.success("Метка создана");
      resetForm();
      await loadTags();
      await loadTagDetail(created.id);
    } catch (err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : "Не удалось создать метку");
    } finally {
      setCreating(false);
    }
  };

  const trackingUrl = useMemo(() => {
    if (!selectedTag) {
      return null;
    }
    const base = selectedTag.targetUrl?.trim() || (typeof window !== "undefined" ? window.location.origin : "");
    if (!base) {
      return null;
    }
    try {
      const url = new URL(base, typeof window !== "undefined" ? window.location.origin : undefined);
      const params = new URLSearchParams(url.search);
      if (selectedTag.utmSource) params.set("utm_source", selectedTag.utmSource);
      if (selectedTag.utmMedium) params.set("utm_medium", selectedTag.utmMedium);
      if (selectedTag.utmCampaign) params.set("utm_campaign", selectedTag.utmCampaign);
      if (selectedTag.utmTerm) params.set("utm_term", selectedTag.utmTerm);
      if (selectedTag.utmContent) params.set("utm_content", selectedTag.utmContent);
      url.search = params.toString();
      return url.toString();
    } catch (error) {
      console.error("Failed to build tracking url", error);
      return null;
    }
  }, [selectedTag]);

  const copyTrackingUrl = async () => {
    if (!trackingUrl) {
      toast.error("Нет ссылки для копирования");
      return;
    }
    if (typeof navigator === "undefined" || !navigator.clipboard) {
      toast.error("Копирование не поддерживается в этом браузере");
      return;
    }
    try {
      await navigator.clipboard.writeText(trackingUrl);
      toast.success("Ссылка скопирована");
    } catch (error) {
      console.error(error);
      toast.error("Не удалось скопировать ссылку");
    }
  };

  if (!canManage) {
    return (
      <Card className="border border-border/60 bg-card shadow-sm">
        <CardHeader>
          <CardTitle>UTM-метки</CardTitle>
          <CardDescription>Управление доступно только администраторам</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="space-y-8">
      <Card className="border border-border/60 bg-card shadow-sm">
        <CardHeader>
          <CardTitle>Создать новую метку</CardTitle>
          <CardDescription>Заполните параметры UTM и получите готовую ссылку</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={submitForm} className="grid gap-4 md:grid-cols-2">
            {formFields.map(({ key, label, placeholder, required }) => (
              <div key={key} className="space-y-2">
                <Label htmlFor={`utm-${key}`}>{label}</Label>
                <Input
                  id={`utm-${key}`}
                  placeholder={placeholder}
                  value={form[key]}
                  onChange={handleFormChange(key)}
                  required={required}
                />
              </div>
            ))}
            <div className="md:col-span-2 flex items-center gap-3 justify-end">
              <Button type="submit" disabled={creating} className="inline-flex items-center gap-2">
                {creating ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <TrendingUp className="w-4 h-4" />
                )}
                {creating ? "Сохраняем..." : "Создать метку"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card className="border border-border/60 bg-card shadow-sm">
        <CardHeader className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <CardTitle>Список UTM-меток</CardTitle>
            <CardDescription>Контролируйте кампании и уникальных посетителей</CardDescription>
          </div>
          <Button type="button" variant="outline" size="sm" onClick={() => loadTags()} disabled={loading}>
            <RefreshCw className={`w-4 h-4 mr-2 ${loading ? "animate-spin" : ""}`} />
            Обновить
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && <p className="text-sm text-destructive">{error}</p>}
          {!tags.length && !loading && <p className="text-sm text-muted-foreground">Пока нет созданных меток.</p>}
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Название</TableHead>
                  <TableHead>Источник</TableHead>
                  <TableHead>Кампания</TableHead>
                  <TableHead className="text-right">Уникальные</TableHead>
                  <TableHead className="text-right">Всего визитов</TableHead>
                  <TableHead className="text-right">Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tags.map((tag) => (
                  <TableRow key={tag.id} data-state={selectedTagId === tag.id ? "selected" : undefined}>
                    <TableCell className="font-medium">{tag.name}</TableCell>
                    <TableCell>{tag.utmSource ?? "—"}</TableCell>
                    <TableCell>{tag.utmCampaign ?? "—"}</TableCell>
                    <TableCell className="text-right">
                      <Badge variant="secondary">{tag.uniqueVisitors}</Badge>
                    </TableCell>
                    <TableCell className="text-right">{tag.totalVisits}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => loadTagDetail(tag.id)}
                        disabled={detailLoading && selectedTagId === tag.id}
                        className="inline-flex items-center gap-2"
                      >
                        {detailLoading && selectedTagId === tag.id ? (
                          <RefreshCw className="w-4 h-4 animate-spin" />
                        ) : (
                          <ExternalLink className="w-4 h-4" />
                        )}
                        Подробнее
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {selectedTag && (
        <Card className="border border-border/60 bg-card shadow-sm">
          <CardHeader className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <CardTitle>{selectedTag.name}</CardTitle>
              <CardDescription>
                Последняя активность: {selectedTag.lastVisitAt ? new Date(selectedTag.lastVisitAt).toLocaleString("ru-RU") : "—"}
              </CardDescription>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="text-sm text-muted-foreground">
                <div>Уникальные: <span className="font-semibold text-foreground">{selectedTag.uniqueVisitors}</span></div>
                <div>Всего визитов: <span className="font-semibold text-foreground">{selectedTag.totalVisits}</span></div>
              </div>
              <Button type="button" variant="outline" className="inline-flex items-center gap-2" onClick={copyTrackingUrl}>
                <Clipboard className="w-4 h-4" />
                Скопировать ссылку
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {trackingUrl && (
              <div className="rounded-md bg-muted/60 px-4 py-3 text-sm text-foreground break-all">
                {trackingUrl}
              </div>
            )}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-foreground">Последние визиты</h4>
              {selectedTag.visits.length === 0 ? (
                <p className="text-sm text-muted-foreground">По этой метке ещё не было визитов.</p>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Дата</TableHead>
                        <TableHead>Посетитель</TableHead>
                        <TableHead>Страница</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {selectedTag.visits.map((visit) => (
                        <TableRow key={visit.id}>
                          <TableCell className="whitespace-nowrap">
                            {new Date(visit.firstVisitAt).toLocaleString("ru-RU")}
                          </TableCell>
                          <TableCell className="text-sm text-muted-foreground">{visit.visitorId}</TableCell>
                          <TableCell className="text-sm text-muted-foreground">
                            {visit.landingPath ?? "—"}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
