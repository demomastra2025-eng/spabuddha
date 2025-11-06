const definitions = [
  { term: "Исполнитель", description: "ИП Samal Art" },
  { term: "Объекты SPA-салона", description: "Территория, помещения и инфраструктура Buddha Spa, в том числе бассейн и сауны." },
  { term: "Бассейн", description: "Плавательный бассейн Buddha Spa площадью 41,66 м² и глубиной 1,6 м." },
  { term: "Заказчик (Посетитель)", description: "Любое дееспособное физическое лицо, действующее по собственному волеизъявлению." },
  { term: "Представитель Заказчика", description: "Лицо, действующее от имени Заказчика на основании доверенности." },
  { term: "Услуги", description: "Общеоздоровительные процедуры Buddha Spa." },
  { term: "Подарочный сертификат", description: "Документ (бумажный или электронный), предоставляющий право на услуги на сумму номинала." },
  { term: "Режим работы", description: "График, размещённый на сайте www.buddhaspa.kz." },
  { term: "Технический перерыв", description: "Перерыв для уборки и санитарной обработки." },
  { term: "Правила посещения", description: "Документы, регулирующие поведение и меры безопасности в Buddha Spa." },
];

const generalProvisions = [
  "Акцепт оферты подтверждает, что посетитель получил необходимую информацию об услугах и согласен с правилами Buddha Spa.",
  "Посетитель подтверждает отсутствие медицинских противопоказаний и осознаёт возможные риски, связанные с общеоздоровительными процедурами.",
  "На территории ведётся видеонаблюдение в целях безопасности.",
  "Исполнитель вправе обновлять условия оферты и правила посещения. Актуальная информация публикуется на www.buddhaspa.kz.",
  "Для получения услуг требуется предварительная запись и соблюдение установленных правил.",
];

const obligationsPerformer = [
  "Оказывать услуги надлежащего качества в сроки, определённые договором.",
  "Предоставлять посетителю место для хранения личных вещей на время сеанса.",
  "Сохранять конфиденциальность данных посетителей, за исключением случаев, предусмотренных законом.",
  "Предпринимать меры для предотвращения и устранения недостатков услуг.",
  "При необходимости вызывать скорую медицинскую помощь.",
];

const rightsPerformer = [
  "Отказывать в доступе при признаках заболевания, опьянения или наличии опасности для здоровья посетителя.",
  "Изменять расписание и стоимость услуг, уведомив клиентов любым доступным способом.",
  "Отказывать в обслуживании при несоблюдении правил или при наличии противопоказаний.",
  "Расторгать договор в одностороннем порядке при нарушении обязанностей посетителем.",
];

const obligationsCustomer = [
  "Ознакомиться с условиями оферты и правилами посещения до оплаты услуг.",
  "Соблюдать нормы поведения и меры безопасности, уважительно относиться к персоналу и другим гостям.",
  "Предоставлять достоверные сведения о состоянии здоровья и при необходимости медицинские документы.",
  "Бережно относиться к имуществу Buddha Spa и возвращать предоставленное имущество по окончании посещения.",
  "Немедленно информировать персонал о травмах, ухудшении самочувствия, нештатных ситуациях.",
];

const rightsCustomer = [
  "Получать информацию о режиме работы и услугах.",
  "Выбирать и получать оплаченные услуги в рамках договора.",
  "Направлять предложения по улучшению сервиса и информировать о возникающих вопросах.",
];

const responsibilities = [
  "Стороны несут ответственность в соответствии с законодательством Республики Казахстан.",
  "Посетитель возмещает ущерб, причинённый имуществу Buddha Spa.",
  "Исполнитель не несёт ответственности за личные вещи посетителей, оставленные без присмотра.",
  "При обстоятельствах непреодолимой силы стороны освобождаются от ответственности.",
  "Посетитель самостоятельно контролирует состояние своего здоровья и принимает риски, связанные с посещением.",
];

const conclusion = [
  "Во всём, что не урегулировано офертой, стороны руководствуются действующим законодательством Республики Казахстан.",
  "Споры разрешаются путём переговоров, при необходимости с соблюдением претензионного порядка и обращением в суд.",
  "Приложения (в т.ч. правила поведения и меры безопасности) являются неотъемлемой частью договора.",
];

const spaOfferDate = "Оферта действует с 06.12.2023 года.";

const spaRequisites = [
  "ИП Samal Art",
  "БИН/ИИН: 970305400184",
  "KZT: KZ5096516F0011577622",
  "Юридический адрес: г. Шымкент, Аль-Фарабийский район, ул. Гани Иляева, д. 37, кв. 1, индекс 160000",
];

const SpaOffer = () => {
  return (
    <div className="bg-background">
      <div className="container px-4 py-12">
        <header className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-secondary/70">Документы Buddha Spa</p>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
            Публичная оферта на оказание общеоздоровительных услуг Buddha Spa
          </h1>
          <p className="text-muted-foreground">{spaOfferDate}</p>
          <p className="text-muted-foreground">
            Оплата услуг в салонах Buddha Spa означает полное согласие с условиями настоящей оферты. Пожалуйста, ознакомьтесь с документом до посещения салона.
          </p>
        </header>

        <article className="max-w-5xl mx-auto mt-12 space-y-10">
          <section className="rounded-2xl border border-secondary/20 bg-card p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground mb-4">Термины и определения</h2>
            <ul className="space-y-3 text-muted-foreground">
              {definitions.map(({ term, description }) => (
                <li key={term}>
                  <strong>{term}:</strong> {description}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-3 text-muted-foreground leading-relaxed">
            <h2 className="text-2xl font-serif font-semibold text-foreground">1. Общие положения</h2>
            {generalProvisions.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <section className="space-y-3 text-muted-foreground leading-relaxed">
            <h2 className="text-2xl font-serif font-semibold text-foreground">2. Предмет договора</h2>
            <p>
              Исполнитель оказывает общеоздоровительные услуги в Buddha Spa в соответствии с приобретёнными абонементами, подарочными сертификатами или разовыми посещениями. Заказчик принимает услуги и оплачивает их на условиях настоящей оферты. Срок действия договора совпадает со сроком действия оплаченного продукта (абонемента, сертификата или разового визита).
            </p>
          </section>

          <section className="space-y-3 text-muted-foreground leading-relaxed">
            <h2 className="text-2xl font-serif font-semibold text-foreground">3. Сроки и порядок расчётов</h2>
            <p>
              Услуги предоставляются при условии 100% предоплаты. Оплата возможна наличными, банковской картой через POS-терминал или переводом на расчётный счёт Исполнителя. Покупатель предоставляет документ, удостоверяющий личность, а представитель — доверенность.
            </p>
          </section>

          <section className="space-y-3 text-muted-foreground leading-relaxed">
            <h2 className="text-2xl font-serif font-semibold text-foreground">4. Обязанности Исполнителя</h2>
            <ul className="space-y-2 list-disc list-inside">
              {obligationsPerformer.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-3 text-muted-foreground leading-relaxed">
            <h2 className="text-2xl font-serif font-semibold text-foreground">5. Права Исполнителя</h2>
            <ul className="space-y-2 list-disc list-inside">
              {rightsPerformer.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-3 text-muted-foreground leading-relaxed">
            <h2 className="text-2xl font-serif font-semibold text-foreground">6. Обязанности Заказчика</h2>
            <ul className="space-y-2 list-disc list-inside">
              {obligationsCustomer.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-3 text-muted-foreground leading-relaxed">
            <h2 className="text-2xl font-serif font-semibold text-foreground">7. Права Заказчика</h2>
            <ul className="space-y-2 list-disc list-inside">
              {rightsCustomer.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-3 text-muted-foreground leading-relaxed">
            <h2 className="text-2xl font-serif font-semibold text-foreground">8. Ответственность сторон</h2>
            <ul className="space-y-2 list-disc list-inside">
              {responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-3 text-muted-foreground leading-relaxed">
            <h2 className="text-2xl font-serif font-semibold text-foreground">9. Заключительные положения</h2>
            {conclusion.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <section className="rounded-2xl border border-border p-6 bg-muted/40">
            <h2 className="text-lg font-semibold text-foreground mb-2">Реквизиты Исполнителя</h2>
            <ul className="space-y-1 text-muted-foreground">
              {spaRequisites.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
};

export default SpaOffer;
