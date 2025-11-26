-- Update OneVision and Wazzup common settings for all branches
UPDATE company
SET key_one_vision = '7110b98f-b3f4-4b4f-b7ef-af71278a657d',
    pass_one_vision = '1ebd8dfbb1b1001a6f07f8a6aa2ea8aded02d0a2209a30a2ade7df5f6e44e2d2',
    company_one_vision_id = 'c9ce6199-f2cc-451a-9b4f-55ac2f783f74',
    company_name_one_vision_id = 'a3384e50-a9f0-481d-9187-4d65feaf6ef4',
    wazzup_api_token = '0f9aa378023049da83957004e5609a3b';
-- Update specific settings for each branch
-- Шымкент, ул. Кунаева, 13
UPDATE company
SET altegio_company_id = '129964',
    altegio_category_id = '224820',
    wazzup_channel_id = '22b49d4c-f53b-4c37-bc52-c4fc638bd665',
    wazzup_number = '77022223100'
WHERE address LIKE '%Кунаева%';
-- Шымкент, ул. Тауке хана, 95А
UPDATE company
SET altegio_company_id = '717537',
    altegio_category_id = '916963',
    wazzup_channel_id = 'a23419d4-f530-46b7-8c08-d5fa0277e060',
    wazzup_number = '77787794309'
WHERE address LIKE '%Тауке хана%';
-- Шымкент, микрорайон Нурсат, 173Б
UPDATE company
SET altegio_company_id = '750957',
    altegio_category_id = '932166',
    wazzup_channel_id = '0bfc9109-309a-4f60-a0ea-c2a3eceaf226',
    wazzup_number = '77026518099'
WHERE address LIKE '%Нурсат%';
-- Астана, пр. Туран, 54
UPDATE company
SET altegio_company_id = '782603',
    altegio_category_id = '967901',
    wazzup_channel_id = '1b536d64-8e95-4373-85a8-a56b689e3edc',
    wazzup_number = '77005298001'
WHERE address LIKE '%Туран%';
-- Тараз, ул. Толе Би, 93Б
UPDATE company
SET altegio_company_id = '1266617',
    altegio_category_id = '1005340',
    wazzup_channel_id = '8a02b760-dd52-4a96-a411-d4238cbadef4',
    wazzup_number = '77058887650'
WHERE address LIKE '%Толе Би%';