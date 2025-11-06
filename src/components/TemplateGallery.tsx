import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const templates = [
  {
    id: 1,
    name: "Тёплый шафран",
    description: "Кремово-золотая палитра с мягким свечением и естественными текстурами",
    colors: ["#FEFAE0", "#BC6C25", "#FDF6D8"],
    tag: "Популярный",
  },
  {
    id: 2,
    name: "Лесной мох",
    description: "Глубокий зелёный с мшистыми акцентами и тонкими линиями",
    colors: ["#606C38", "#283618", "#EBF7DC"],
    tag: "Выбор гостей",
  },
  {
    id: 3,
    name: "Сумеречный лес",
    description: "Контраст тёмного леса и акцентного янтаря для драматичного образа",
    colors: ["#283618", "#BC6C25", "#606C38"],
    tag: "Премиум",
  },
  {
    id: 4,
    name: "Нежная свежесть",
    description: "Мягкие пастельные оттенки и воздушные тени для лёгких поздравлений",
    colors: ["#EBF7DC", "#FEFAE0", "#D9B28C"],
    tag: "Нежный",
  },
  {
    id: 5,
    name: "Песочный сатин",
    description: "Натуральные бежевые оттенки и сатиновые градиенты",
    colors: ["#F7E7CE", "#D9B28C", "#BC6C25"],
    tag: "Свежий",
  },
  {
    id: 6,
    name: "Контрастный крем",
    description: "Кремовый фон с графитовыми акцентами и лаконичной типографикой",
    colors: ["#FEFAE0", "#1F2A13", "#606C38"],
    tag: "Природный",
  },
  {
    id: 7,
    name: "Церемониальный янтарь",
    description: "Тёплые переливы янтаря и золота с изящными рамками",
    colors: ["#BC6C25", "#DFA35E", "#FEFAE0"],
    tag: "Элегантный",
  },
  {
    id: 8,
    name: "Лазурный штрих",
    description: "Лёгкое добавление прохладного акцента на основе базовой палитры",
    colors: ["#EBF7DC", "#A3C4BC", "#606C38"],
    tag: "Сезонный",
  },
];

export const TemplateGallery = () => {
  const navigate = useNavigate();

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {templates.map((template, index) => (
            <div
              key={template.id}
              className="group relative rounded-2xl overflow-hidden shadow-spa hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => navigate(`/create?template=${template.id}`)}
            >
              {/* Color Preview */}
              <div className="aspect-[3/4] relative overflow-hidden">
                <div className="absolute inset-0 flex">
                  {template.colors.map((color, idx) => (
                    <div
                      key={idx}
                      className="flex-1 transition-all duration-500 group-hover:flex-[1.2]"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Tag */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-foreground hover:bg-white">
                    {template.tag}
                  </Badge>
                </div>

                {/* Quick Action */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="bg-white text-foreground hover:bg-white/90">
                    Выбрать шаблон
                  </Button>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 bg-card border-t border-border">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {template.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {template.description}
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
