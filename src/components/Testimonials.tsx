import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Айгуль Маратқызы",
    role: "Подарок маме, Алматы",
    content:
      "У нас в семье принято баловать друг друга заботой. Через сервис я собрала сертификат за пару минут, добавила тёплое поздравление на казахском — мама растрогалась до слёз.",
    rating: 5,
  },
  {
    name: "Ермек Сейтказин",
    role: "HR-менеджер, Astana Hub",
    content:
      "Искали нативный подарок для команды к Наурызу. Отправили цифровые сертификаты — ребята с удовольствием сходили в Buddha Spa после аврала. Очень по-нашему, по‑домашнему.",
    rating: 5,
  },
  {
    name: "Сауле Жаксылыкова",
    role: "Подружка невесты, Шымкент",
    content:
      "Сделали сюрприз для келін-сы. Выбрали шаблон с золотистым фоном, вписали личное пожелание — будто вручали именно её мечту. Девочки в восторге, сервис супер!",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-muted-foreground">
            Тысячи довольных получателей и счастливых дарителей
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card border border-border shadow-spa hover:shadow-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
