/*
# Create contact_inquiries table (single-tenant, no auth)

1. New Tables
- `contact_inquiries`
  - `id` (uuid, primary key)
  - `name` (text, not null) — full name of the person submitting the inquiry
  - `email` (text, not null) — contact email of the submitter
  - `company` (text, nullable) — optional company name
  - `phone` (text, nullable) — optional phone number
  - `service` (text, nullable) — which service they're interested in
  - `message` (text, not null) — the inquiry body
  - `status` (text, default 'new') — tracking status for the inquiry (new, contacted, closed)
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `contact_inquiries`.
- Allow anon + authenticated INSERT only (public contact form submissions).
- No SELECT/UPDATE/DELETE for anon — only authenticated admins would manage inquiries later.
*/

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  phone text,
  service text,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_inquiries" ON contact_inquiries;
CREATE POLICY "anon_insert_inquiries" ON contact_inquiries
  FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_contact_inquiries_created_at ON contact_inquiries (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_status ON contact_inquiries (status);
