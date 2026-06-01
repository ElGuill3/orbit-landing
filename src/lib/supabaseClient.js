import { createClient } from "@supabase/supabase-js";

/*
 * SECURITY: The anon key below is PUBLIC (embedded in the client bundle).
 * Supabase Row-Level Security (RLS) policies MUST be configured to:
 *   - ALLOW INSERT for anon on *_leads tables (form submissions)
 *   - DENY SELECT/UPDATE/DELETE for anon on *_leads tables (protect PII)
 * See SECURITY.md for the required SQL policies.
 */
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("[Supabase] Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY environment variables.");
}

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;
