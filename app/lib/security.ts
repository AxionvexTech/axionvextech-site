import { timingSafeEqual } from "node:crypto";

/**
 * Verify the shared webhook secret.
 * Uses timing-safe comparison to prevent timing attacks.
 *
 * Accepts the secret from either:
 *   - `x-axionvex-secret` request header (preferred for Apps Script)
 *   - `secret` field in the request body (legacy/fallback)
 */
export function verifyWebhookSecret(incoming: unknown): boolean {
  const expected = process.env.WEBHOOK_SHARED_SECRET;
  if (!expected || typeof incoming !== "string" || !incoming) return false;
  if (incoming.length !== expected.length) return false;

  return timingSafeEqual(
    Buffer.from(incoming),
    Buffer.from(expected)
  );
}
