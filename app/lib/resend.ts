import { Resend } from "resend";

let _resend: Resend | null = null;

/**
 * Singleton Resend client. Throws at call time if RESEND_API_KEY is missing,
 * so builds succeed even without the key.
 */
export function getResendClient(): Resend {
  if (!_resend) {
    const key = process.env.RESEND_API_KEY;
    if (!key) throw new Error("RESEND_API_KEY is not configured");
    _resend = new Resend(key);
  }
  return _resend;
}

export const FROM_ADDRESS =
  process.env.EMAIL_FROM || "applications@axionvextech.com";

export const MANAGER_EMAIL =
  process.env.MANAGER_EMAIL || "manager@axionvextech.com";
