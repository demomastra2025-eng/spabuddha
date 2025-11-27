-- Add Altegio columns to company table
ALTER TABLE company
ADD COLUMN IF NOT EXISTS altegio_company_id TEXT;
ALTER TABLE company
ADD COLUMN IF NOT EXISTS altegio_category_id TEXT;
ALTER TABLE company
ADD COLUMN IF NOT EXISTS storage_id TEXT;
ALTER TABLE company
DROP COLUMN IF EXISTS altegio_document_id;
-- Create system_settings table
CREATE TABLE IF NOT EXISTS system_settings (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
-- Insert Altegio Auth Token and User ID
INSERT INTO system_settings (key, value, description)
VALUES (
        'altegio_auth_token',
        'Bearer j8smnhedgebees6f2nnb',
        'Altegio API Authorization Token'
    ),
    (
        'altegio_user_id',
        '31c63baf1509bc49f46be91c68123178',
        'Altegio User ID'
    ) ON CONFLICT (key) DO
UPDATE
SET value = EXCLUDED.value;
-- Update Company Data
-- Шымкент, ул. Иляева, 37
UPDATE company
SET altegio_company_id = '129964',
    altegio_category_id = '224820',
    storage_id = '226518'
WHERE address LIKE '%Иляева%';
-- Шымкент, ул. Тауке хана, 95А
UPDATE company
SET altegio_company_id = '717537',
    altegio_category_id = '916963',
    storage_id = '1435635'
WHERE address LIKE '%Тауке хана%';
-- Шымкент, микрорайон Нурсат, 173Б
UPDATE company
SET altegio_company_id = '750957',
    altegio_category_id = '932166',
    storage_id = '1503814'
WHERE address LIKE '%Нурсат%';
-- Астана, пр. Туран, 54
UPDATE company
SET altegio_company_id = '782603',
    altegio_category_id = '967901',
    storage_id = '1569453'
WHERE address LIKE '%Туран%';
-- Тараз, ул. Толе Би, 93Б
UPDATE company
SET altegio_company_id = '1266617',
    altegio_category_id = '1005340',
    storage_id = '2539283'
WHERE address LIKE '%Толе Би%';
