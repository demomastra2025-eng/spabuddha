import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CertificateData } from "@/pages/Create";
import { CertificatePreview } from "./CertificatePreview";
import { Palette } from "lucide-react";

interface StepDesignProps {
  data: CertificateData;
  updateData: (data: Partial<CertificateData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

const templates = [
  { id: 1, name: "Тёплый шафран", color: "#FEFAE0" },
  { id: 2, name: "Золотой янтарь", color: "#BC6C25" },
  { id: 3, name: "Лесной мох", color: "#606C38" },
  { id: 4, name: "Глубокий лес", color: "#283618" },
  { id: 5, name: "Нежная свежесть", color: "#EBF7DC" },
  { id: 6, name: "Светлый крем", color: "#FDF6D8" },
  { id: 7, name: "Контрастный графит", color: "#1F2A13" },
  { id: 8, name: "Песочный сатин", color: "#D9B28C" },
];

const colorPalettes = [
  { name: "Базовый Buddha Spa", colors: ["#FEFAE0", "#BC6C25", "#283618"] },
  { name: "Лесное утро", colors: ["#EBF7DC", "#606C38", "#283618"] },
  { name: "Тёплый песок", colors: ["#FEFAE0", "#D9B28C", "#BC6C25"] },
  { name: "Сумеречный лес", colors: ["#283618", "#606C38", "#BC6C25"] },
  { name: "Светлый крем", colors: ["#FFFFFF", "#FEFAE0", "#EBF7DC"] },
];

export const StepDesign = ({ data, updateData, onNext, onPrev }: StepDesignProps) => {
  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Design Controls */}
        <div className="bg-card rounded-2xl shadow-spa p-8 space-y-8 h-fit">
          <div>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-2">
              Дизайн сертификата
            </h2>
            <p className="text-muted-foreground">
              Настройте внешний вид вашего сертификата
            </p>
          </div>

          {/* Template Selection */}
          <div className="space-y-4">
            <Label className="text-lg font-semibold flex items-center gap-2">
              <Palette className="w-5 h-5 text-primary" />
              Выбор шаблона
            </Label>
            <div className="grid grid-cols-2 gap-3">
              {templates.map((template) => (
                <button
                  key={template.id}
                  onClick={() => updateData({ templateId: template.id, backgroundColor: template.color })}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    data.templateId === template.id
                      ? "border-primary bg-primary/5"
                      : "border-muted hover:border-primary/50"
                  }`}
                >
                  <div
                    className="w-full h-20 rounded-lg mb-3"
                    style={{ backgroundColor: template.color }}
                  />
                  <p className="text-sm font-medium text-center">{template.name}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Color Palettes */}
          <div className="space-y-4">
            <Label className="text-lg font-semibold">Цветовая палитра</Label>
            <div className="space-y-3">
              {colorPalettes.map((palette, index) => (
                <button
                  key={index}
                  onClick={() => updateData({ backgroundColor: palette.colors[0] })}
                  className={`w-full p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${
                    data.backgroundColor === palette.colors[0]
                      ? "border-primary bg-primary/5"
                      : "border-muted hover:border-primary/50"
                  }`}
                >
                  <div className="flex gap-2">
                    {palette.colors.map((color, idx) => (
                      <div
                        key={idx}
                        className="w-10 h-10 rounded-lg"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <span className="font-medium">{palette.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Font Selection */}
          <div className="space-y-4">
            <Label className="text-lg font-semibold">Шрифт</Label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => updateData({ fontFamily: "Playfair Display" })}
                className={`p-4 rounded-xl border-2 transition-all ${
                  data.fontFamily === "Playfair Display"
                    ? "border-primary bg-primary/5"
                    : "border-muted hover:border-primary/50"
                }`}
              >
                <p className="font-serif text-lg mb-1">Элегантный</p>
                <p className="text-sm text-muted-foreground">Playfair Display</p>
              </button>
              <button
                onClick={() => updateData({ fontFamily: "Inter" })}
                className={`p-4 rounded-xl border-2 transition-all ${
                  data.fontFamily === "Inter"
                    ? "border-primary bg-primary/5"
                    : "border-muted hover:border-primary/50"
                }`}
              >
                <p className="font-sans text-lg mb-1">Современный</p>
                <p className="text-sm text-muted-foreground">Inter</p>
              </button>
            </div>
          </div>
        </div>

        {/* Live Preview */}
        <div className="lg:sticky lg:top-8 h-fit">
          <div className="bg-card rounded-2xl shadow-spa p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Предпросмотр
            </h3>
            <CertificatePreview data={data} />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-8 max-w-6xl mx-auto">
        <Button
          size="lg"
          variant="outline"
          onClick={onPrev}
          className="px-8 h-14 text-base rounded-xl"
        >
          Назад
        </Button>
        <Button
          size="lg"
          onClick={onNext}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 text-base rounded-xl"
        >
          Далее
        </Button>
      </div>
    </div>
  );
};
