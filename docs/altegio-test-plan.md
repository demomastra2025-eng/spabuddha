### Предварительные настройки
- В `.env` задать `ALTEGIO_USER_TOKEN`, `ALTEGIO_API_URL` (по умолчанию `https://api.alteg.io/api/v1`), при необходимости `ALTEGIO_DEFAULT_DOCUMENT_ID`.
- В таблице `company` для тестируемого филиала заполнить `altegio_company_id` и (желательно) `altegio_document_id`.
- Для номиналов (`certificate_nominal_options`) проставить `altegio_good_id` (и при наличии `altegio_certificate_type_id`). Для процедурных сертификатов — `spa_procedures.altegio_good_id`.

### Ручные кейсы
1) **Поиск существующего клиента**  
   - В Altegio заранее есть клиент с телефоном `+7...`.  
   - Запрос: `POST /api/orders/admin` с `companyId` филиала и `client.phone` этого номера.  
   - Ожидание: заказ создаётся, в таблице `client` заполнен `altegio_client_id`.

2) **Создание клиента в Altegio**  
   - Номер отсутствует и локально, и в Altegio.  
   - Тот же `POST /api/orders/admin` с новым телефоном.  
   - Ожидание: клиент создан в Altegio, `client.altegio_client_id` сохранён.

3) **Подарочный сертификат → транзакция**  
   - Для номинала суммы заказа задан `certificate_nominal_options.altegio_good_id`.  
   - Подтвердить оплату (маршрут `/api/orders/admin` или прямой вызов `markPaymentAsPaid`).  
   - Ожидание: вызван `storage_operations/goods_transactions/{company}`, транзакция создана; в `certificates` проставлены `altegio_operation_id/altegio_transaction_id`.

4) **Процедурный сертификат**  
   - У выбранной процедуры есть `spa_procedures.altegio_good_id`.  
   - После оплаты создаётся транзакция с этим `good_id`.

5) **Отсутствует маппинг товара**  
   - Удалить `altegio_good_id` у соответствующего номинала/процедуры.  
   - Попробовать подтвердить оплату.  
   - Ожидание: запрос завершается ошибкой 400 “Не настроен товар Altegio…”, статус оплаты не меняется.

6) **Document ID не настроен**  
   - Очистить `company.altegio_document_id` и не задавать `ALTEGIO_DEFAULT_DOCUMENT_ID`.  
   - Подтверждение оплаты.  
   - Ожидание: ошибка 400 “Не настроен document_id для Altegio”.

7) **Эндпоинт подгрузки товаров**  
   - `GET /api/altegio/goods/{companyId}` (менеджер/админ).  
   - Ожидание: список товаров с `good_id`, `title`, `loyalty_certificate_type_id`.
   - Данные берутся из кэша `altegio_goods_cache` (обновляется по cron/после изменения `good_ids` у филиала).

8) **Эндпоинт типов сертификатов**  
   - `GET /api/altegio/certificate-types/{companyId}`.  
   - Ожидание: отдаёт массив типов из Altegio.
