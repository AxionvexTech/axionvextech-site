import { timingSafeEqual } from "node:crypto";

/**
 * Verify the shared secret from an incoming webhook request.
 * Uses timing-safe comparison to prevent timing attacks.
 */
export function verifyWebhookSecret(incoming: unknown): boolean {
  const expected = process.env.WEBHOOK_SHARED_SECRET;
  if (!expected || typeof incoming !== "string") return false;
  if (incoming.length !== expected.length) return false;

  return timingSafeEqual(
    Buffer.from(incoming),
    Buffer.from(expected)
  );
}
