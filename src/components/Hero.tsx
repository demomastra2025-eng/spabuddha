import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Sparkles, Gift, Heart } from "lucide-react";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden spa-gradient">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/30 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 shadow-spa backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">
              Премиальные подарочные сертификаты
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight">
            Подарите состояние
            <span className="block text-primary mt-2">спокойствия</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Создайте идеальный сертификат в 5 шагов и отправьте любимым за минуту
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-2xl shadow-spa hover:shadow-glow transition-all duration-300 hover:scale-105"
              onClick={() => navigate("/create")}
            >
              <Gift className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Создать сертификат
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg rounded-2xl border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
              onClick={() => document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Heart className="w-5 h-5 mr-2" />
              Посмотреть шаблоны
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-12 text-sm">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5 мин</div>
              <div className="text-muted-foreground mt-1">Время создания</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">8+</div>
              <div className="text-muted-foreground mt-1">Стилей дизайна</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">3</div>
              <div className="text-muted-foreground mt-1">Способа доставки</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full p-1">
          <div className="w-1.5 h-3 bg-primary/50 rounded-full mx-auto" />
        </div>
      </div>
    </section>
  );
};
