CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'admin',
    display_name TEXT,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    last_login_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS company (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    label TEXT NOT NULL,
    address TEXT NOT NULL,
    phone TEXT,
    name_company TEXT,
    bin_company TEXT,
    bik_company TEXT,
    official_address TEXT,
    company_one_vision_id TEXT,
    pass_one_vision TEXT,
    key_one_vision TEXT,
    company_name_one_vision_id TEXT,
    email TEXT,
    status TEXT NOT NULL DEFAULT 'active',
    manager_name TEXT,
    timezone TEXT,
    wazzup_api_token TEXT,
    wazzup_channel_id TEXT,
    wazzup_number TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS template (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    description TEXT,
    background_url TEXT,
    layout_config JSONB,
    preview_url TEXT,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_by UUID REFERENCES users(id),
    locale TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS client (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    first_name TEXT,
    last_name TEXT,
    email TEXT UNIQUE,
    phone TEXT UNIQUE,
    preferred_language TEXT,
    notes TEXT,
    consent_marketing BOOLEAN,
    birthday TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS certificates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name_cert TEXT NOT NULL,
    start_date TIMESTAMPTZ,
    finish_date TIMESTAMPTZ,
    company_id UUID NOT NULL REFERENCES company(id),
    type_cert TEXT NOT NULL,
    price_cert NUMERIC(12,2) NOT NULL,
    service_cert TEXT,
    template_id UUID REFERENCES template(id),
    code TEXT NOT NULL UNIQUE,
    status TEXT NOT NULL DEFAULT 'active',
    sender_name TEXT,
    recipient_name TEXT,
    recipient_email TEXT,
    message TEXT,
    currency TEXT NOT NULL DEFAULT 'KZT',
    created_by UUID REFERENCES users(id),
    file_url TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_number TEXT NOT NULL UNIQUE,
    client_id UUID NOT NULL REFERENCES client(id),
    certificate_id UUID NOT NULL REFERENCES certificates(id),
    company_id UUID NOT NULL REFERENCES company(id),
    status TEXT NOT NULL DEFAULT 'created',
    total_amount NUMERIC(12,2) NOT NULL,
    currency TEXT NOT NULL DEFAULT 'KZT',
    payment_status TEXT NOT NULL DEFAULT 'pending',
    delivery_method TEXT NOT NULL,
    delivery_contact TEXT,
    scheduled_at TIMESTAMPTZ,
    notes TEXT,
    fulfilled_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS payments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    amount NUMERIC(12,2) NOT NULL,
    currency TEXT NOT NULL DEFAULT 'KZT',
    status TEXT NOT NULL DEFAULT 'pending',
    provider TEXT,
    transaction_id TEXT,
    paid_at TIMESTAMPTZ,
    refunded_at TIMESTAMPTZ,
    metadata JSONB DEFAULT '{}'::jsonb,
    receipt_url TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS certificate_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    certificate_id UUID NOT NULL REFERENCES certificates(id) ON DELETE CASCADE,
    event_type TEXT NOT NULL,
    metadata JSONB,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    entity_type TEXT NOT NULL,
    entity_id TEXT NOT NULL,
    action TEXT NOT NULL,
    performed_by TEXT,
    metadata JSONB,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_company_status ON company(status);
CREATE INDEX IF NOT EXISTS idx_certificates_code ON certificates(code);
CREATE INDEX IF NOT EXISTS idx_orders_order_number ON orders(order_number);
CREATE INDEX IF NOT EXISTS idx_payments_order_id ON payments(order_id);
CREATE INDEX IF NOT EXISTS idx_certificate_events_certificate_id ON certificate_events(certificate_id);
CREATE UNIQUE INDEX IF NOT EXISTS idx_template_name_unique ON template(name);

ALTER TABLE company
    ADD COLUMN IF NOT EXISTS slug TEXT UNIQUE;

ALTER TABLE company
    ADD COLUMN IF NOT EXISTS wazzup_api_token TEXT;

ALTER TABLE company
    ADD COLUMN IF NOT EXISTS wazzup_channel_id TEXT;

ALTER TABLE company
    ADD COLUMN IF NOT EXISTS wazzup_number TEXT;

ALTER TABLE users
    ADD COLUMN IF NOT EXISTS company_id UUID REFERENCES company(id);

CREATE INDEX IF NOT EXISTS idx_users_company_id ON users(company_id);

CREATE TABLE IF NOT EXISTS certificate_nominal_options (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    amount NUMERIC(12,2) NOT NULL,
    currency TEXT NOT NULL DEFAULT 'KZT',
    description TEXT,
    is_featured BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_certificate_nominal_unique ON certificate_nominal_options(amount, currency);

CREATE TABLE IF NOT EXISTS spa_procedures (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    description TEXT,
    category TEXT,
    duration_minutes INTEGER,
    price NUMERIC(12,2) NOT NULL,
    discount_percent NUMERIC(5,2) NOT NULL DEFAULT 0,
    currency TEXT NOT NULL DEFAULT 'KZT',
    company_id UUID REFERENCES company(id),
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE spa_procedures
    ADD COLUMN IF NOT EXISTS discount_percent NUMERIC(5,2) NOT NULL DEFAULT 0;

CREATE TABLE IF NOT EXISTS utm_tags (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    utm_source TEXT,
    utm_medium TEXT,
    utm_campaign TEXT,
    utm_term TEXT,
    utm_content TEXT,
    target_url TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_utm_tags_unique_params ON utm_tags(
    COALESCE(utm_source, ''),
    COALESCE(utm_medium, ''),
    COALESCE(utm_campaign, ''),
    COALESCE(utm_term, ''),
    COALESCE(utm_content, '')
);

CREATE TABLE IF NOT EXISTS utm_visits (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    utm_tag_id UUID REFERENCES utm_tags(id) ON DELETE SET NULL,
    visitor_id TEXT NOT NULL,
    utm_source TEXT,
    utm_medium TEXT,
    utm_campaign TEXT,
    utm_term TEXT,
    utm_content TEXT,
    landing_path TEXT,
    user_agent TEXT,
    referer TEXT,
    first_visit_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_utm_visits_tag ON utm_visits(utm_tag_id);
CREATE INDEX IF NOT EXISTS idx_utm_visits_visitor ON utm_visits(visitor_id);
DROP INDEX IF EXISTS idx_utm_visits_unique;

CREATE INDEX IF NOT EXISTS idx_spa_procedures_company_id ON spa_procedures(company_id);

ALTER TABLE spa_procedures
    ADD COLUMN IF NOT EXISTS discount_percent NUMERIC(5,2) NOT NULL DEFAULT 0;
