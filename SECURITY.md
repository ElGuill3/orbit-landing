# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it responsibly.

**Email:** aa@orbitcapital.ai

Please include:

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

We will acknowledge receipt within 48 hours and aim to provide a resolution timeline within 5 business days.

## Supported Versions

Only the latest version deployed on `main` is actively supported with security updates.

## Scope

This policy covers the Orbit Intelligence landing page and its associated infrastructure. For vulnerabilities in third-party dependencies, please report them to the respective maintainers.

---

## CRITICAL: Supabase Row-Level Security (RLS) Configuration

The frontend uses the Supabase **anon key** (public, embedded in the JS bundle). The following RLS policies **MUST** be configured in the Supabase dashboard to prevent unauthorized data access:

### Required RLS Policies for Lead Tables

The tables `contact_leads`, `capital_leads`, `risk_leads`, and `intel_leads` contain PII (names, emails, phone numbers, companies). The following policies must be enforced:

| Table | Operation | Policy |
|-------|-----------|--------|
| `*_leads` | `INSERT` | Allow for `anon` role (public form submissions) |
| `*_leads` | `SELECT` | **DENY for `anon`** — only allow `service_role` or authenticated admin users |
| `*_leads` | `UPDATE` | **DENY for `anon`** — only allow `service_role` |
| `*_leads` | `DELETE` | **DENY for `anon`** — only allow `service_role` |

### Example RLS Policy SQL

```sql
-- Enable RLS on all lead tables
ALTER TABLE contact_leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE capital_leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE risk_leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE intel_leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (form submissions)
CREATE POLICY "Allow anon insert" ON contact_leads FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow anon insert" ON capital_leads FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow anon insert" ON risk_leads FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow anon insert" ON intel_leads FOR INSERT TO anon WITH CHECK (true);

-- Block anonymous reads (protect PII)
CREATE POLICY "Block anon select" ON contact_leads FOR SELECT TO anon USING (false);
CREATE POLICY "Block anon select" ON capital_leads FOR SELECT TO anon USING (false);
CREATE POLICY "Block anon select" ON risk_leads FOR SELECT TO anon USING (false);
CREATE POLICY "Block anon select" ON intel_leads FOR SELECT TO anon USING (false);

-- Block anonymous deletes
CREATE POLICY "Block anon delete" ON contact_leads FOR DELETE TO anon USING (false);
CREATE POLICY "Block anon delete" ON capital_leads FOR DELETE TO anon USING (false);
CREATE POLICY "Block anon delete" ON risk_leads FOR DELETE TO anon USING (false);
CREATE POLICY "Block anon delete" ON intel_leads FOR DELETE TO anon USING (false);
```

### Risk if Not Configured

Without these policies, **anyone** who extracts the anon key from the JS bundle can:
- **READ** all submitted leads (PII: names, emails, phones, companies)
- **DELETE** all lead data
- This constitutes a **data breach** under GDPR/LFPDPPP (Mexico's privacy law)

### Verification

After applying the policies, verify by running from a browser console:

```js
const { data, error } = await supabase.from('contact_leads').select('*');
// Should return: data = [], error = { message: "..." } or empty result
```
