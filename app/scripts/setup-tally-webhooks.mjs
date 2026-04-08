/**
 * Register a webhook on each Tally evaluation form so that
 * submissions are forwarded to the Google Apps Script endpoint.
 *
 * Usage:
 *   node app/scripts/setup-tally-webhooks.mjs
 *
 * Requires:
 *   TALLY_API_KEY in .env.local
 *   APPS_SCRIPT_WEBHOOK_URL in .env.local (your deployed Apps Script web app URL)
 */

import fs from "node:fs/promises";
import { config } from "dotenv";

config({ path: ".env.local" });

const API_KEY = process.env.TALLY_API_KEY;
if (!API_KEY) throw new Error("Missing TALLY_API_KEY in .env.local");

const WEBHOOK_URL = process.env.APPS_SCRIPT_WEBHOOK_URL;
if (!WEBHOOK_URL) throw new Error("Missing APPS_SCRIPT_WEBHOOK_URL in .env.local — set it to your deployed Apps Script URL");

// Load the form IDs from the previous creation step
const formsRaw = await fs.readFile("tally-created-forms.json", "utf8");
const forms = JSON.parse(formsRaw);

console.log(`Registering webhooks on ${forms.length} Tally forms...`);
console.log(`Target: ${WEBHOOK_URL}\n`);

const results = [];

for (const form of forms) {
  try {
    const res = await fetch("https://api.tally.so/webhooks", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formId: form.id,
        url: WEBHOOK_URL,
        eventTypes: ["FORM_RESPONSE"],
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.log(`  [FAIL] ${form.role_key} (${form.id}): ${res.status} ${text}`);
      results.push({ ...form, webhook: "FAILED", error: text });
      continue;
    }

    const data = await res.json();
    console.log(`  [OK]   ${form.role_key} (${form.id}) -> webhook ID: ${data.id}`);
    results.push({ ...form, webhook_id: data.id, webhook: "OK" });
  } catch (err) {
    console.log(`  [ERR]  ${form.role_key} (${form.id}): ${err.message}`);
    results.push({ ...form, webhook: "ERROR", error: err.message });
  }
}

await fs.writeFile(
  "tally-webhooks.json",
  JSON.stringify(results, null, 2),
  "utf8"
);

const ok = results.filter((r) => r.webhook === "OK").length;
const fail = results.length - ok;
console.log(`\nDone. ${ok} succeeded, ${fail} failed. Saved tally-webhooks.json`);
