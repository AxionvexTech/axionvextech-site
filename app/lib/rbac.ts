import type { AuthedUser, BusinessRole, SystemRole } from "../types/domain";

/**
 * Capability-based access control. System role grants the baseline;
 * business role layers additional capabilities for workers.
 *
 * RLS in Supabase is the data-layer safety net. `can()` is the
 * primary gate inside server actions / route handlers.
 */

export type Action =
  | "application.read"
  | "application.approve"
  | "application.reject"
  | "worker.invite"
  | "worker.suspend"
  | "task.create"
  | "task.read.self"
  | "task.read.any"
  | "task.update.self"
  | "candidate.create"
  | "candidate.read.self"
  | "candidate.read.any"
  | "candidate.update.self"
  | "submission.create"
  | "submission.decide"
  | "supplier.read"
  | "supplier.assign"
  | "audit.read"
  | "user.manage";

const SYSTEM_ROLE_CAPS: Record<SystemRole, Action[]> = {
  applicant: [],
  worker: [
    "task.read.self",
    "task.update.self",
    "candidate.read.self",
    "candidate.update.self",
    "candidate.create",
    "submission.create",
  ],
  manager: [
    "application.read",
    "application.approve",
    "application.reject",
    "worker.invite",
    "task.create",
    "task.read.any",
    "candidate.read.any",
    "submission.decide",
    "supplier.read",
    "supplier.assign",
    "audit.read",
  ],
  admin: ["user.manage", "worker.suspend"],
};

const BUSINESS_ROLE_CAPS: Partial<Record<BusinessRole, Action[]>> = {
  recruiter: ["candidate.create", "submission.create"],
  account_supplier: ["supplier.read"],
};

export function can(user: AuthedUser | null | undefined, action: Action): boolean {
  if (!user) return false;

  const caps = new Set<Action>(SYSTEM_ROLE_CAPS[user.system_role]);
  if (user.system_role === "admin") {
    SYSTEM_ROLE_CAPS.manager.forEach((a) => caps.add(a));
  }
  if (caps.has(action)) return true;

  if (user.business_role) {
    const bcaps = BUSINESS_ROLE_CAPS[user.business_role] ?? [];
    if (bcaps.includes(action)) return true;
  }
  return false;
}

export class ForbiddenError extends Error {
  constructor(action: Action) {
    super(`Forbidden: missing capability ${action}`);
    this.name = "ForbiddenError";
  }
}

export function assertCan(user: AuthedUser | null | undefined, action: Action): void {
  if (!can(user, action)) throw new ForbiddenError(action);
}
