const introductory = [
  "Политика обработки персональных данных составлена в соответствии с Законом Республики Казахстан от 21 мая 2013 года № 94-V «О персональных данных и их защите».",
  "Оператор – Конвай Титиркан – стремится защищать права и свободы посетителей сайта buddhaspa.kz, обеспечивая конфиденциальность и безопасность персональной информации.",
  "Политика распространяется на любую информацию, которую Оператор может получить о посетителях сайта.",
];

const definitionsPolicy = [
  { term: "Автоматизированная обработка", description: "Обработка персональных данных с помощью вычислительной техники." },
  { term: "Блокирование", description: "Временное прекращение обработки персональных данных." },
  { term: "Веб-сайт", description: "budhaspa.kz и все размещённые на нём материалы, программы и базы данных." },
  { term: "Информационная система", description: "Совокупность баз данных и технологий для обработки персональных данных." },
  { term: "Обезличивание", description: "Действия, делающие невозможным определить принадлежность данных конкретному пользователю." },
  { term: "Оператор", description: "Лицо, определяющее цели и методы обработки персональных данных." },
  { term: "Персональные данные", description: "Любая информация о посетителях сайта buddhaspa.kz." },
  { term: "Пользователь", description: "Любой посетитель сайта." },
  { term: "Предоставление", description: "Действия по раскрытию персональных данных определенному кругу лиц." },
  { term: "Распространение", description: "Раскрытие персональных данных неопределенному кругу лиц." },
  { term: "Трансграничная передача", description: "Передача данных иностранным государствам или организациям." },
  { term: "Уничтожение", description: "Действия, приводящие к невозможности восстановления персональных данных." },
];

const operatorRights = [
  "Получать достоверные сведения и документы от субъектов персональных данных.",
  "Продолжать обработку персональных данных при отзыве согласия, если имеются законные основания.",
  "Определять меры по защите персональных данных в рамках законодательства РК.",
];

const operatorDuties = [
  "Предоставлять субъектам информацию об обработке их данных.",
  "Организовывать обработку персональных данных в соответствии с законом.",
  "Отвечать на запросы субъектов и уполномоченных органов.",
  "Обеспечивать доступ к настоящей Политике и принимать меры по защите данных.",
  "Прекращать обработку и уничтожать данные в случаях, предусмотренных законодательством.",
];

const subjectRights = [
  "Получать информацию об обработке персональных данных.",
  "Требовать уточнения, блокирования или уничтожения данных, если они неполные или неточные.",
  "Выдвигать условие согласия при обработке данных в маркетинговых целях.",
  "Отзывать согласие на обработку и обжаловать действия оператора.",
];

const subjectObligations = [
  "Предоставлять достоверные данные.",
  "Сообщать об изменениях персональных данных.",
];

const dataCategories = [
  "Фамилия, имя, отчество.",
  "Электронный адрес.",
  "Номера телефонов.",
  "Обезличенные данные (cookies, данные аналитики).",
];

const processingPrinciples = [
  "Обработка осуществляется на законной и справедливой основе.",
  "Данные собираются для конкретных, заранее определённых целей.",
  "Не допускается объединение несовместимых баз данных.",
  "Обрабатываются только данные, соответствующие целям обработки.",
  "Хранение осуществляется не дольше, чем требуется для достижения целей.",
];

const processingGoals = [
  "Информирование пользователя посредством электронных писем.",
  "Заключение и исполнение договоров.",
  "Предоставление доступа к сервисам и материалам сайта buddhaspa.kz.",
  "Отправка уведомлений о новых продуктах и акциях (с возможностью отказа).",
  "Сбор обезличенной статистики для улучшения сайта.",
];

const legalGrounds = [
  "Уставные документы Оператора.",
  "Законы Республики Казахстан и иные нормативные акты.",
  "Согласие Пользователя на обработку персональных данных и на их распространение.",
];

const processingConditions = [
  "Обработка осуществляется с согласия субъекта персональных данных.",
  "Производится в целях исполнения договора или обязательств перед субъектом.",
  "Необходима для прав и законных интересов оператора или третьих лиц.",
  "Возможна в отношении общедоступных данных и данных, подлежащих публикации.",
];

const operatorActions = [
  "Сбор, запись, систематизация и накопление данных.",
  "Хранение, уточнение, извлечение и использование.",
  "Передача, обезличивание, блокирование, удаление и уничтожение.",
  "Автоматизированная обработка с передачей данных по сетям связи.",
];

const finalProvisions = [
  "Пользователи могут направить вопросы о политике на info@buddhaspa.kz.",
  "Политика действует бессрочно до момента её обновления.",
  "Актуальная версия доступна на сайте buddhaspa.kz.",
];

const privacyRequisites = [
  "E-mail: info@buddhaspa.kz",
  "Оператор: Конвай Титиркан",
];

const PrivacyPolicy = () => {
  return (
    <div className="bg-background">
      <div className="container px-4 py-12">
        <header className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-secondary/60">Документы Buddha Spa</p>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
            Политика в отношении обработки персональных данных
          </h1>
          <p className="text-muted-foreground">
            Политика описывает порядок обработки и защиты персональных данных посетителей сайта buddhaspa.kz.
          </p>
        </header>

        <article className="max-w-5xl mx-auto mt-12 space-y-10 text-muted-foreground leading-relaxed">
          <section className="space-y-3">
            {introductory.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <section className="rounded-2xl border border-secondary/20 bg-card p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground mb-4">Основные понятия</h2>
            <ul className="space-y-3">
              {definitionsPolicy.map(({ term, description }) => (
                <li key={term}>
                  <strong>{term}:</strong> {description}
                </li>
              ))}
            </ul>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border p-6 bg-muted/40 space-y-2">
              <h2 className="text-lg font-semibold text-foreground">Права оператора</h2>
              <ul className="space-y-2 list-disc list-inside">
                {operatorRights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border p-6 bg-muted/40 space-y-2">
              <h2 className="text-lg font-semibold text-foreground">Обязанности оператора</h2>
              <ul className="space-y-2 list-disc list-inside">
                {operatorDuties.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border p-6 bg-card space-y-2">
              <h2 className="text-lg font-semibold text-foreground">Права субъектов данных</h2>
              <ul className="space-y-2 list-disc list-inside">
                {subjectRights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border p-6 bg-card space-y-2">
              <h2 className="text-lg font-semibold text-foreground">Обязанности субъектов</h2>
              <ul className="space-y-2 list-disc list-inside">
                {subjectObligations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-serif font-semibold text-foreground">Категории обрабатываемых данных</h2>
            <ul className="space-y-2 list-disc list-inside">
              {dataCategories.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>Специальные категории персональных данных (расовая, национальная принадлежность, политические взгляды и т.п.) не обрабатываются.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-serif font-semibold text-foreground">Принципы обработки персональных данных</h2>
            <ul className="space-y-2 list-disc list-inside">
              {processingPrinciples.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-serif font-semibold text-foreground">Цели обработки</h2>
            <ul className="space-y-2 list-disc list-inside">
              {processingGoals.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-serif font-semibold text-foreground">Правовые основания обработки</h2>
            <ul className="space-y-2 list-disc list-inside">
              {legalGrounds.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-serif font-semibold text-foreground">Условия обработки</h2>
            <ul className="space-y-2 list-disc list-inside">
              {processingConditions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>Вся информация сторонних сервисов (платёжные системы, провайдеры связи) хранится и обрабатывается в соответствии с их собственными документами. Пользователь обязан ознакомиться с ними самостоятельно.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-serif font-semibold text-foreground">Порядок обработки и хранение</h2>
            <p>Оператор принимает правовые, организационные и технические меры для защиты персональных данных. Доступ к персональным данным третьим лицам исключён, за исключением случаев, предусмотренных законодательством или согласованных с пользователем.</p>
            <p>Пользователь может актуализировать данные или отозвать согласие, направив письмо на info@buddhaspa.kz. Обработка продолжается до достижения целей или отзыва согласия, если иное не предусмотрено законом.</p>
            <p>Запреты на передачу персональных данных не применяются при обработке в государственных, общественных и иных публичных интересах.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-serif font-semibold text-foreground">Действия оператора с персональными данными</h2>
            <ul className="space-y-2 list-disc list-inside">
              {operatorActions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-serif font-semibold text-foreground">Трансграничная передача данных</h2>
            <p>Перед началом трансграничной передачи оператор убедится в наличии надёжной защиты персональных данных в стране получателя. Передача в государства без достаточного уровня защиты возможна только с письменного согласия субъекта.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-serif font-semibold text-foreground">Конфиденциальность</h2>
            <p>Оператор и лица, имеющие доступ к персональным данным, обязаны не раскрывать информацию без согласия субъекта, за исключением случаев, предусмотренных законодательством.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-serif font-semibold text-foreground">Заключительные положения</h2>
            {finalProvisions.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <section className="rounded-2xl border border-border p-6 bg-muted/40 space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Контакты для вопросов</h2>
            <ul className="space-y-1 text-muted-foreground">
              {privacyRequisites.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
