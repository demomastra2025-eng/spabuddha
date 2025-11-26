import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PenSquare } from "lucide-react";
import { toast } from "sonner";

export type Template = {
    id: string;
    name: string;
    description?: string;
    backgroundUrl?: string;
    previewUrl?: string;
    textColor?: string;
};

const templateFormDefaults = {
    name: "",
    description: "",
    backgroundUrl: "",
    previewUrl: "",
    textColor: "#FFFFFF",
};

interface TemplateEditorProps {
    templates: Template[];
    loading: boolean;
    onRefresh: () => void;
    token: string | undefined;
    isGlobalManager: boolean;
}

export const TemplateEditor = ({ templates, loading, onRefresh, token, isGlobalManager }: TemplateEditorProps) => {
    const [templateForm, setTemplateForm] = useState(templateFormDefaults);
    const [submittingTemplate, setSubmittingTemplate] = useState(false);
    const [editingTemplateId, setEditingTemplateId] = useState<string | null>(null);

    const startTemplateEdit = (templateId: string) => {
        const template = templates.find((item) => item.id === templateId);
        if (!template) {
            toast.error("Шаблон не найден");
            return;
        }
        setEditingTemplateId(templateId);
        setTemplateForm({
            name: template.name,
            description: template.description ?? "",
            backgroundUrl: template.backgroundUrl ?? "",
            previewUrl: template.previewUrl ?? "",
            textColor: template.textColor ?? "#FFFFFF",
        });
    };

    const cancelTemplateEdit = () => {
        setEditingTemplateId(null);
        setTemplateForm(templateFormDefaults);
    };

    const handleTemplateChange = (field: keyof typeof templateForm) => (value: string) => {
        setTemplateForm((prev) => ({ ...prev, [field]: value }));
    };

    const submitTemplate: React.FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        if (!isGlobalManager) {
            toast.error("Создавать шаблоны может только админ");
            return;
        }
        if (!templateForm.name.trim()) {
            toast.error("Введите название шаблона");
            return;
        }
        if (!templateForm.backgroundUrl.trim()) {
            toast.error("Укажите фон (URL)");
            return;
        }
        if (!templateForm.previewUrl.trim()) {
            toast.error("Укажите превью (URL)");
            return;
        }
        if (!token) {
            toast.error("Сессия истекла. Перезайдите.");
            return;
        }

        setSubmittingTemplate(true);
        try {
            const payload = {
                name: templateForm.name.trim(),
                description: templateForm.description.trim() || undefined,
                backgroundUrl: templateForm.backgroundUrl.trim(),
                previewUrl: templateForm.previewUrl.trim(),
                layoutConfig: {
                    textColor: templateForm.textColor.trim() || undefined,
                },
            };

            const endpoint = editingTemplateId ? `/api/templates/${editingTemplateId}` : "/api/templates";
            const response = await fetch(endpoint, {
                method: editingTemplateId ? "PUT" : "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => null);
                throw new Error(errorData?.message ?? "Не удалось создать шаблон");
            }

            toast.success(editingTemplateId ? "Шаблон обновлён" : "Шаблон добавлен");
            cancelTemplateEdit();
            onRefresh();
        } catch (error) {
            console.error(error);
            toast.error(error instanceof Error ? error.message : "Не удалось создать шаблон");
        } finally {
            setSubmittingTemplate(false);
        }
    };

    return (
        <section className="grid gap-6 lg:grid-cols-2">
            <Card className="border border-border/60 bg-card shadow-sm">
                <CardHeader>
                    <CardTitle>{editingTemplateId ? "Редактирование шаблона" : "Создание шаблона"}</CardTitle>
                    <CardDescription>Добавьте новый фон и превью сертификата</CardDescription>
                </CardHeader>
                <CardContent>
                    {isGlobalManager ? (
                        <form className="space-y-4" onSubmit={submitTemplate}>
                            <div className="space-y-2">
                                <Label>Название</Label>
                                <Input
                                    placeholder="Например, Лесной мох"
                                    value={templateForm.name}
                                    onChange={(event) => handleTemplateChange("name")(event.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Описание</Label>
                                <Textarea
                                    rows={2}
                                    placeholder="Короткий текст для менеджеров"
                                    value={templateForm.description}
                                    onChange={(event) => handleTemplateChange("description")(event.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>URL фона</Label>
                                <Input
                                    placeholder="https://..."
                                    value={templateForm.backgroundUrl}
                                    onChange={(event) => handleTemplateChange("backgroundUrl")(event.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>URL превью</Label>
                                <Input
                                    placeholder="https://..."
                                    value={templateForm.previewUrl}
                                    onChange={(event) => handleTemplateChange("previewUrl")(event.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Цвет текста (HEX)</Label>
                                <Input
                                    placeholder="#FFFFFF"
                                    value={templateForm.textColor}
                                    onChange={(event) => handleTemplateChange("textColor")(event.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Button type="submit" className="w-full" disabled={submittingTemplate}>
                                    {submittingTemplate
                                        ? "Сохраняем..."
                                        : editingTemplateId
                                            ? "Сохранить изменения"
                                            : "Создать шаблон"}
                                </Button>
                                {editingTemplateId && (
                                    <Button type="button" variant="ghost" className="w-full" onClick={cancelTemplateEdit}>
                                        Отмена
                                    </Button>
                                )}
                            </div>
                        </form>
                    ) : (
                        <p className="text-sm text-muted-foreground">
                            Создавать шаблоны может только администратор. Обратитесь к головному офису.
                        </p>
                    )}
                </CardContent>
            </Card>

            <Card className="border border-border/60 bg-card shadow-sm">
                <CardHeader>
                    <CardTitle>Каталог шаблонов</CardTitle>
                    <CardDescription>Доступные варианты оформления</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    {loading && <p className="text-sm text-muted-foreground">Загружаем шаблоны...</p>}
                    {!loading && !templates.length && (
                        <p className="text-sm text-muted-foreground">Шаблоны ещё не добавлены.</p>
                    )}
                    {!loading &&
                        templates.map((template) => (
                            <div key={template.id} className="flex gap-3 rounded-xl border border-border/60 p-3">
                                <div
                                    className="w-24 h-16 rounded-lg bg-cover bg-center"
                                    style={{
                                        backgroundImage: `url(${template.previewUrl ?? template.backgroundUrl ?? "/placeholder-card.png"})`,
                                    }}
                                />
                                <div className="flex-1">
                                    <p className="font-semibold">{template.name}</p>
                                    <p className="text-xs text-muted-foreground">
                                        {template.description ?? "Фирменный стиль Buddha Spa"}
                                    </p>
                                </div>
                                {isGlobalManager && (
                                    <Button
                                        type="button"
                                        size="sm"
                                        variant="outline"
                                        onClick={() => startTemplateEdit(template.id)}
                                    >
                                        <PenSquare className="w-4 h-4 mr-2" />
                                        Редактировать
                                    </Button>
                                )}
                            </div>
                        ))}
                </CardContent>
            </Card>
        </section>
    );
};
