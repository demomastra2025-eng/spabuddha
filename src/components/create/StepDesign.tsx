import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CertificateData } from "@/types/certificates";
import { CertificatePreview } from "./CertificatePreview";
import { Image as ImageIcon, Palette } from "lucide-react";
import { useTemplates, type TemplateOption } from "@/hooks/useTemplates";
import { toast } from "sonner";

interface StepDesignProps {
  data: CertificateData;
  updateData: (data: Partial<CertificateData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const StepDesign = ({ data, updateData, onNext, onPrev }: StepDesignProps) => {
  const { templates, loading, error } = useTemplates();
  const selectedTemplate = templates.find((template) => template.id === data.templateId) ?? null;

  const handleSelect = (template: TemplateOption) => {
    updateData({
      templateId: template.id,
      templateBackgroundUrl: template.backgroundUrl ?? template.previewUrl ?? null,
      templateFontFamily: template.fontFamily ?? null,
      templateTextColor: template.textColor ?? null,
      templateName: template.name,
    });
  };

  useEffect(() => {
    if (!loading && templates.length && !data.templateId) {
      handleSelect(templates[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, templates.length]);

  const handleNext = () => {
    if (!data.templateId) {
      toast.error("Пожалуйста, выберите шаблон сертификата");
      return;
    }
    onNext();
  };

  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Template Picker */}
        <div className="bg-card rounded-2xl shadow-spa p-8 space-y-8 h-fit">
          <div>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-2">Дизайн сертификата</h2>
            <p className="text-muted-foreground">
              Фон задаётся готовым шаблоном (форм-фактор банковской карты). Меняйте только текст и номинал.
            </p>
          </div>

          <div className="space-y-4">
            <Label className="text-lg font-semibold flex items-center gap-2">
              <Palette className="w-5 h-5 text-primary" />
              Шаблоны Buddha Spa
            </Label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {loading &&
                Array.from({ length: 4 }).map((_, index) => (
                  <div key={`template-skeleton-${index}`} className="h-40 rounded-xl bg-muted/30 animate-pulse" />
                ))}

              {!loading && templates.length === 0 && (
                <div className="text-sm text-muted-foreground col-span-2">{error ?? "Шаблоны ещё не добавлены"}</div>
              )}

              {!loading &&
                templates.map((template) => (
                  <button
                    key={template.id}
                    type="button"
                    onClick={() => handleSelect(template)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      data.templateId === template.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div
                      className="w-full aspect-[86/54] rounded-2xl overflow-hidden mb-4 bg-center bg-cover"
                      style={{
                        backgroundImage: `url(${template.previewUrl ?? template.backgroundUrl ?? "/placeholder-card.png"})`,
                      }}
                    />
                    <p className="text-base font-semibold text-foreground leading-tight">{template.name}</p>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {template.description ?? "Фирменная карта Buddha Spa"}
                    </p>
                  </button>
                ))}
            </div>

            {selectedTemplate && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/20 px-4 py-3 rounded-xl">
                <ImageIcon className="w-4 h-4 text-primary" />
                Используем фон <span className="font-medium text-foreground">{selectedTemplate.name}</span>
              </div>
            )}
          </div>
        </div>

        {/* Live Preview */}
        <div className="lg:sticky lg:top-8 h-fit">
          <div className="bg-card rounded-2xl shadow-spa p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">Предпросмотр карты</h3>
            <CertificatePreview data={data} />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-8 max-w-6xl mx-auto">
        <Button size="lg" variant="outline" onClick={onPrev} className="px-8 h-14 text-base rounded-xl">
          Назад
        </Button>
        <Button
          size="lg"
          onClick={handleNext}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 text-base rounded-xl"
        >
          Далее
        </Button>
      </div>
    </div>
  );
};
