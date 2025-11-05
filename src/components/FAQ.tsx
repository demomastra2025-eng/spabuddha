import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Как долго действует сертификат?",
    answer: "Стандартный срок действия сертификата составляет 6 месяцев с даты покупки. При создании вы можете выбрать другой срок или указать конкретную дату активации.",
  },
  {
    question: "Можно ли изменить дизайн после оплаты?",
    answer: "После завершения оплаты изменить дизайн нельзя, но вы можете создать новый сертификат. Мы рекомендуем внимательно проверить предпросмотр на шаге подтверждения.",
  },
  {
    question: "Какие способы доставки доступны?",
    answer: "Вы можете отправить сертификат на email получателя, через WhatsApp, или скачать в формате PDF/PNG для самостоятельной печати или отправки.",
  },
  {
    question: "Можно ли использовать сертификат в любом филиале?",
    answer: "При создании вы выбираете конкретный филиал. Если хотите, чтобы сертификат действовал во всех филиалах сети, выберите опцию 'Все филиалы' на первом шаге.",
  },
  {
    question: "Какие номиналы доступны?",
    answer: "Вы можете выбрать из предустановленных номиналов (3000₽, 5000₽, 7000₽, 10000₽) или ввести произвольную сумму от 1000₽ до 50000₽.",
  },
  {
    question: "Безопасна ли оплата?",
    answer: "Да, мы используем защищённое соединение и сертифицированные платёжные системы. Данные вашей карты не сохраняются на наших серверах.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-muted-foreground">
            Ответы на самые популярные вопросы о сертификатах
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-2xl px-6 bg-card shadow-spa hover:shadow-glow transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
