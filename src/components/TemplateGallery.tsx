import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const templates = [
  {
    id: 1,
    name: "Натуральный спа",
    description: "Бежево-зелёная палитра, листья, камни, натуральные текстуры",
    colors: ["#EADFD5", "#A7B5A3", "#8B9A8F"],
    tag: "Популярный",
  },
  {
    id: 2,
    name: "Золотой люкс",
    description: "Тёплые оттенки с золотыми акцентами и изящными рамками",
    colors: ["#FBF7F3", "#C8A86B", "#B89659"],
    tag: "Премиум",
  },
  {
    id: 3,
    name: "Сканди-минимал",
    description: "Белое пространство с серыми акцентами и геометрией",
    colors: ["#FFFFFF", "#E5E5E5", "#9E9E9E"],
    tag: "Минимализм",
  },
  {
    id: 4,
    name: "Пастельный релакс",
    description: "Нежные розово-лавандовые градиенты для спокойствия",
    colors: ["#F4E8EC", "#E6D5E8", "#D8C5E0"],
    tag: "Нежный",
  },
  {
    id: 5,
    name: "Океанский бриз",
    description: "Бирюзово-голубые волны и блики воды",
    colors: ["#E0F2F7", "#80DEEA", "#4DD0E1"],
    tag: "Свежий",
  },
  {
    id: 6,
    name: "Тёплый камень",
    description: "Терракота, песок, текстуры природных материалов",
    colors: ["#E8DED5", "#C8A88F", "#9B7E67"],
    tag: "Природный",
  },
  {
    id: 7,
    name: "Моно нойр",
    description: "Чёрно-белый дизайн с высокой контрастностью",
    colors: ["#FFFFFF", "#666666", "#1A1A1A"],
    tag: "Элегантный",
  },
  {
    id: 8,
    name: "Сезонный букет",
    description: "Весенние и летние иллюстрации с цветами",
    colors: ["#FFF8E1", "#FFE082", "#FFB74D"],
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
