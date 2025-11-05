import { Palette, Zap, Mail, Smartphone, Download, Shield } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Визуальный редактор",
    description: "Настраивайте дизайн без навыков дизайнера: цвета, шрифты, фон и декоративные элементы",
  },
  {
    icon: Zap,
    title: "За 5 минут",
    description: "Простой пошаговый мастер проведёт от выбора филиала до готового сертификата",
  },
  {
    icon: Mail,
    title: "Отправка на email",
    description: "Мгновенная доставка красивого PDF-сертификата на электронную почту получателя",
  },
  {
    icon: Smartphone,
    title: "WhatsApp доставка",
    description: "Отправьте сертификат прямо в WhatsApp с персональным поздравлением",
  },
  {
    icon: Download,
    title: "Скачивание PDF/PNG",
    description: "Высокое качество для печати или публикации в социальных сетях",
  },
  {
    icon: Shield,
    title: "Безопасно и надёжно",
    description: "Защита данных, соответствие законодательству, гарантия качества",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Всё для идеального подарка
          </h2>
          <p className="text-xl text-muted-foreground">
            Современные технологии и заботливый подход к каждой детали
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border shadow-spa hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
