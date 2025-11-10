import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { useTemplates } from "@/hooks/useTemplates";

const SkeletonCard = () => (
  <div className="rounded-2xl overflow-hidden border border-border/60 bg-muted/20 animate-pulse h-full" />
);

export const TemplateGallery = () => {
  const navigate = useNavigate();
  const { templates, loading, error } = useTemplates();
  const items = templates.slice(0, 8);

  return (
    <section id="templates" className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Галерея шаблонов
          </h2>
          <p className="text-xl text-muted-foreground">
            Выберите готовый стиль или создайте свой уникальный дизайн
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12 min-h-[420px]">
          {loading && Array.from({ length: 4 }).map((_, index) => <SkeletonCard key={`skeleton-${index}`} />)}

          {!loading && items.length === 0 && (
            <div className="md:col-span-2 lg:col-span-4 text-center text-muted-foreground">
              {error ?? "Шаблоны пока не добавлены"}
            </div>
          )}

          {!loading && items.map((template, index) => (
            <div
              key={template.id}
              className="group relative rounded-2xl overflow-hidden shadow-spa hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => navigate(`/create?template=${template.id}`)}
            >
              {/* Visual Preview */}
              <div className="aspect-[86/54] relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-center bg-cover"
                  style={{
                    backgroundImage: `url(${template.previewUrl ?? template.backgroundUrl ?? "/placeholder-card.png"})`,
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Tag */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-foreground hover:bg-white">
                    Готовый стиль
                  </Badge>
                </div>

                {/* Quick Action */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="bg-white text-foreground hover:bg-white/90">Выбрать шаблон</Button>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 bg-card border-t border-border">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {template.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {template.description ?? "Изображение фоновой карты для сертификата"}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-2xl shadow-spa hover:shadow-glow transition-all duration-300"
            onClick={() => navigate("/create")}
          >
            Начать создание сертификата
          </Button>
        </div>
      </div>
    </section>
  );
};
