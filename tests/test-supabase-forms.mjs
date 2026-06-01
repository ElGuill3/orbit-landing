/**
 * Supabase Form Submission Tests
 *
 * Tests that all 4 form variants in ContactModal.jsx correctly
 * insert data into their respective Supabase tables.
 *
 * Usage: node tests/test-supabase-forms.mjs
 */

import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

// ── Load .env manually (no dotenv dependency) ──
const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = resolve(__dirname, "..", ".env");
let env = {};
try {
  const envContent = readFileSync(envPath, "utf-8");
  env = Object.fromEntries(
    envContent
      .split("\n")
      .filter((line) => line.trim() && !line.startsWith("#"))
      .map((line) => {
        const idx = line.indexOf("=");
        if (idx === -1) return null;
        return [line.slice(0, idx).trim(), line.slice(idx + 1).trim()];
      })
      .filter(Boolean)
  );
} catch (e) {
  console.error("[FAIL] Could not read .env file:", e.message);
  process.exit(1);
}

const supabaseUrl = env.VITE_SUPABASE_URL;
const supabaseKey = env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error(
    "[FAIL] Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY in .env"
  );
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Unique marker to identify test rows for cleanup
const TEST_MARKER = `__test_${Date.now()}`;

// ── Table definitions matching ContactModal.jsx insert calls exactly ──
const TABLES = [
  {
    name: "contact_leads",
    variant: "contact",
    data: {
      name: `Test Contact ${TEST_MARKER}`,
      email: `contact-${TEST_MARKER}@test.example`,
      company: "Test Corp",
      phone: "+1234567890",
      product: "intel",
      message: "Automated test submission",
    },
  },
  {
    name: "capital_leads",
    variant: "capital",
    data: {
      name: `Test Capital ${TEST_MARKER}`,
      email: `capital-${TEST_MARKER}@test.example`,
      company: "Test Fund LLC",
      investment_range: "5M-15M",
      referral_source: "linkedin",
      message: "Automated test submission",
    },
  },
  {
    name: "risk_leads",
    variant: "risk",
    data: {
      name: `Test Risk ${TEST_MARKER}`,
      email: `risk-${TEST_MARKER}@test.example`,
      company: "Test Industries",
      phone: "+0987654321",
      industry: "manufacturing",
      message: "Automated test submission",
    },
  },
  {
    name: "intel_leads",
    variant: "intel",
    data: {
      name: `Test Intel ${TEST_MARKER}`,
      email: `intel-${TEST_MARKER}@test.example`,
      company: "Test Analytics",
      role: "CTO",
      vertical_interest: "political",
      company_size: "50-200",
      use_case: "Automated test submission",
    },
  },
];

let passed = 0;
let failed = 0;
const insertedRows = [];

console.log("=== Supabase Form Submission Tests ===\n");
console.log(`URL: ${supabaseUrl}`);
console.log(`Test marker: ${TEST_MARKER}\n`);

// ── Phase 1: Preflight — check connectivity and table existence ──
console.log("--- Phase 1: Preflight (checking tables exist) ---\n");

let preflightFailed = false;
for (const table of TABLES) {
  const { error } = await supabase.from(table.name).select("id").limit(0);
  if (error) {
    console.error(`  [FAIL] Table "${table.name}": ${error.message}`);
    if (error.code === "42P01" || error.message.includes("does not exist")) {
      console.error(`         -> Table does not exist. Create it in Supabase SQL editor.`);
    } else if (error.code === "42501" || error.message.includes("permission")) {
      console.error(`         -> RLS may be blocking access. Add a SELECT policy for anon role.`);
    }
    preflightFailed = true;
    failed++;
  } else {
    console.log(`  [PASS] Table "${table.name}" exists and is accessible`);
    passed++;
  }
}

if (preflightFailed) {
  console.error(`\n[STOP] ${failed} table(s) not accessible. Fix issues above before running insert tests.`);
  console.error(`\nSQL to create missing tables:\n`);
  console.error(`-- Run this in Supabase SQL Editor (Dashboard > SQL Editor > New Query)\n`);
  console.error(`CREATE TABLE IF NOT EXISTS contact_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT, email TEXT, company TEXT, phone TEXT, product TEXT, message TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS capital_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT, email TEXT, company TEXT, investment_range TEXT, referral_source TEXT, message TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS risk_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT, email TEXT, company TEXT, phone TEXT, industry TEXT, message TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS intel_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT, email TEXT, company TEXT, role TEXT, vertical_interest TEXT, company_size TEXT, use_case TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- RLS Policies (allow anon inserts for lead capture)
ALTER TABLE contact_leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow anon insert" ON contact_leads FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow anon select" ON contact_leads FOR SELECT TO anon USING (true);
CREATE POLICY "Allow anon delete" ON contact_leads FOR DELETE TO anon USING (true);

ALTER TABLE capital_leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow anon insert" ON capital_leads FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow anon select" ON capital_leads FOR SELECT TO anon USING (true);
CREATE POLICY "Allow anon delete" ON capital_leads FOR DELETE TO anon USING (true);

ALTER TABLE risk_leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow anon insert" ON risk_leads FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow anon select" ON risk_leads FOR SELECT TO anon USING (true);
CREATE POLICY "Allow anon delete" ON risk_leads FOR DELETE TO anon USING (true);

ALTER TABLE intel_leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow anon insert" ON intel_leads FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow anon select" ON intel_leads FOR SELECT TO anon USING (true);
CREATE POLICY "Allow anon delete" ON intel_leads FOR DELETE TO anon USING (true);
`);
  process.exit(1);
}

// ── Phase 2: Insert + Verify per table ──
console.log("\n--- Phase 2: Insert + Verify ---\n");

for (const table of TABLES) {
  const label = `${table.variant} -> ${table.name}`;

  // INSERT
  const { data: insertData, error: insertError } = await supabase
    .from(table.name)
    .insert([table.data])
    .select();

  if (insertError) {
    console.error(`  [FAIL] INSERT ${label}: ${insertError.message}`);
    if (insertError.code === "42501") {
      console.error(`         -> RLS blocking INSERT. Add an INSERT policy for anon role.`);
    } else if (insertError.message.includes("column")) {
      console.error(`         -> Column mismatch. Check table schema matches ContactModal.jsx.`);
    }
    failed++;
    continue;
  }

  if (!insertData || insertData.length === 0) {
    console.error(`  [FAIL] INSERT ${label}: No data returned (RLS may block .select() after insert)`);
    failed++;
    continue;
  }

  const insertedId = insertData[0].id;
  insertedRows.push({ table: table.name, id: insertedId });
  console.log(`  [PASS] INSERT ${label} (id: ${insertedId})`);
  passed++;

  // VERIFY — select back and check each field
  const { data: selectData, error: selectError } = await supabase
    .from(table.name)
    .select("*")
    .eq("id", insertedId)
    .single();

  if (selectError || !selectData) {
    console.error(
      `  [FAIL] VERIFY ${label}: ${selectError?.message || "No data returned"}`
    );
    failed++;
    continue;
  }

  let allMatch = true;
  for (const [col, expectedVal] of Object.entries(table.data)) {
    const actualVal = selectData[col];
    if (actualVal !== expectedVal) {
      console.error(
        `  [FAIL] VERIFY ${label}: column "${col}" expected "${expectedVal}" but got "${actualVal}"`
      );
      allMatch = false;
    }
  }

  if (allMatch) {
    console.log(
      `  [PASS] VERIFY ${label}: all ${Object.keys(table.data).length} fields match`
    );
    passed++;
  } else {
    failed++;
  }
}

// ── Phase 3: Cleanup ──
console.log("\n--- Phase 3: Cleanup ---\n");

for (const { table, id } of insertedRows) {
  const { error } = await supabase.from(table).delete().eq("id", id);
  if (error) {
    console.warn(`  [WARN] Cleanup ${table} (${id}): ${error.message}`);
    console.warn(`         -> If DELETE is blocked by RLS, add a DELETE policy or clean up manually.`);
  } else {
    console.log(`  [OK]   Deleted test row from ${table} (${id})`);
  }
}

// ── Summary ──
console.log(`\n${"=".repeat(50)}`);
console.log(`RESULTS: ${passed} passed, ${failed} failed`);
console.log(`${"=".repeat(50)}`);
process.exit(failed > 0 ? 1 : 0);
