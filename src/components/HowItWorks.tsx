import { MapPin, UserCircle, Palette, Send, CreditCard } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MapPin,
    title: "Выбор филиала",
    description: "Выберите удобный филиал салона и определите номинал сертификата",
  },
  {
    number: "02",
    icon: UserCircle,
    title: "Детали и получатель",
    description: "Укажите имена, напишите персональное поздравление и контактные данные",
  },
  {
    number: "03",
    icon: Palette,
    title: "Дизайн сертификата",
    description: "Выберите шаблон и настройте визуальное оформление в редакторе",
  },
  {
    number: "04",
    icon: Send,
    title: "Способ доставки",
    description: "Email, WhatsApp или прямое скачивание — выберите удобный вариант",
  },
  {
    number: "05",
    icon: CreditCard,
    title: "Оплата",
    description: "Проверьте детали заказа и завершите оформление безопасным платежом",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Как это работает
          </h2>
          <p className="text-xl text-muted-foreground">
            Простой процесс в пять шагов — от идеи до готового подарка
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative flex items-start gap-6 p-8 rounded-2xl bg-card border border-border shadow-spa hover:shadow-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Step Number */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-12 top-full w-0.5 h-6 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
