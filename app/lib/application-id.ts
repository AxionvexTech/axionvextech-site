/**
 * Generates a unique application ID.
 * Format: AXV-YYYYMMDD-XXXX (e.g., AXV-20260408-0001)
 *
 * Uses date + random 4-digit suffix. For true uniqueness at scale,
 * replace the random suffix with a database sequence.
 */
export function generateApplicationId(): string {
  const date = new Date()
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, "");
  const suffix = String(Math.floor(Math.random() * 10000)).padStart(4, "0");
  return `AXV-${date}-${suffix}`;
}
