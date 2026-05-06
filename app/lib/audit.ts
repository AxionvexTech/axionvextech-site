import { getSupabaseAdmin, isSupabaseConfigured } from "./supabase/admin";

interface LogInput {
  actor_id?: string | null;
  action: string;
  target_type?: string | null;
  target_id?: string | null;
  metadata?: Record<string, unknown>;
  ip?: string | null;
  user_agent?: string | null;
}

/**
 * Append an activity log row. Non-fatal: swallows errors so the caller's
 * main path is never broken by logging failure. If Supabase is not
 * configured yet, just writes to the server console.
 */
export async function logActivity(input: LogInput): Promise<void> {
  if (!isSupabaseConfigured()) {
    console.log(`[audit] ${input.action}`, input);
    return;
  }

  try {
    const admin = getSupabaseAdmin();
    const { error } = await admin.from("activity_logs").insert({
      actor_id: input.actor_id ?? null,
      action: input.action,
      target_type: input.target_type ?? null,
      target_id: input.target_id ?? null,
      metadata: input.metadata ?? {},
      ip: input.ip ?? null,
      user_agent: input.user_agent ?? null,
    });
    if (error) console.warn("[audit] insert failed:", error.message);
  } catch (err) {
    console.warn("[audit] unexpected error:", err);
  }
}
