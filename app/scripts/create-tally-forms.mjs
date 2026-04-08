import crypto from "node:crypto";
import fs from "node:fs/promises";
import { config } from "dotenv";

config({ path: ".env.local" });

const API_KEY = process.env.TALLY_API_KEY;
if (!API_KEY) {
  throw new Error("Missing TALLY_API_KEY in environment");
}

const API_BASE = "https://api.tally.so";

function uuid() {
  return crypto.randomUUID();
}

function titleBlock(html) {
  return {
    uuid: uuid(),
    type: "FORM_TITLE",
    groupUuid: uuid(),
    groupType: "TEXT",
    payload: { html, title: html.replace(/<[^>]+>/g, "") }
  };
}

function textBlock(html) {
  return {
    uuid: uuid(),
    type: "TEXT",
    groupUuid: uuid(),
    groupType: "TEXT",
    payload: { html }
  };
}

function inputBlock(label, required = true) {
  return {
    uuid: uuid(),
    type: "INPUT_TEXT",
    groupUuid: uuid(),
    groupType: "QUESTION",
    payload: {
      label,
      required,
      placeholder: ""
    }
  };
}

function textareaBlock(label) {
  return [
    {
      uuid: uuid(),
      type: "TEXT",
      groupUuid: uuid(),
      groupType: "TEXT",
      payload: { html: `<p>${label}</p>` }
    },
    {
      uuid: uuid(),
      type: "TEXTAREA",
      groupUuid: uuid(),
      groupType: "TEXTAREA",
      payload: { placeholder: "" }
    }
  ];
}

function urlBlock(label) {
  return [
    {
      uuid: uuid(),
      type: "TEXT",
      groupUuid: uuid(),
      groupType: "TEXT",
      payload: { html: `<p>${label}</p>` }
    },
    {
      uuid: uuid(),
      type: "INPUT_LINK",
      groupUuid: uuid(),
      groupType: "INPUT_LINK",
      payload: { placeholder: "" }
    }
  ];
}

// Note: hidden fields are usually passed as URL params and referenced in form logic/settings.
// Tally docs confirm hidden fields and URL parameter support, but block schema docs are less obvious.
// So we keep these forms simple and rely on URL params + form settings after creation.

async function createForm(name, blocks) {
  blocks = blocks.flat();
  const res = await fetch(`${API_BASE}/forms`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name,
      status: "PUBLISHED",
      blocks
    })
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed creating "${name}": ${res.status} ${text}`);
  }

  const data = await res.json();
  return { name, ...data };
}

const forms = [
  {
    name: "Recruiter / Talent Coordinator Evaluation",
    blocks: [
      titleBlock("Recruiter / Talent Coordinator Evaluation"),
      textBlock("Please complete this short evaluation carefully. Estimated time: 10–15 minutes."),
      textareaBlock("1. You need to source 2 suitable candidates for a frontend engineer role. Explain where you would look and why."),
      textareaBlock("2. What 3 factors would you use to screen candidates quickly but effectively?"),
      textareaBlock("3. Write a short outreach message to a strong candidate."),
      textareaBlock("4. Explain how you would keep the pipeline organized and transparent."),
      urlBlock("Optional: LinkedIn profile or portfolio")
    ]
  },
  {
    name: "Technical Interview Lead Evaluation",
    blocks: [
      titleBlock("Technical Interview Lead Evaluation"),
      textBlock("Please answer clearly and concisely. Estimated time: 10–15 minutes."),
      textareaBlock("1. Explain React state and props in a way a client could understand."),
      textareaBlock("2. A client asks an unexpected technical question you are not fully sure about. How would you respond?"),
      textareaBlock("3. How would you represent a senior developer’s strengths confidently in a client-facing meeting?"),
      textareaBlock("4. What makes someone credible in a technical interview, beyond just speaking English well?"),
      urlBlock("Optional: Link to short intro video")
    ]
  },
  {
    name: "Developer / Engineer Evaluation",
    blocks: [
      titleBlock("Developer / Engineer Evaluation"),
      textBlock("This is a short engineering evaluation. Estimated time: 10–15 minutes."),
      textareaBlock("1. A web app feels slow after adding several dashboard widgets. How would you investigate the root cause?"),
      textareaBlock("2. When would you choose server-side rendering over client-side rendering?"),
      textareaBlock("3. Describe how you would structure a production-ready API for reliability and maintainability."),
      textareaBlock("4. Explain one recent technical problem you solved and how you approached it."),
      urlBlock("GitHub or portfolio URL", false)
    ]
  },
  {
    name: "Marketer / Outreach Evaluation",
    blocks: [
      titleBlock("Marketer / Outreach Evaluation"),
      textBlock("Please complete this short evaluation carefully. Estimated time: 10–15 minutes."),
      textareaBlock("1. Write a short recruiting post for a client-facing technical interviewer role."),
      textareaBlock("2. Which channels would you prioritize first for finding qualified candidates, and why?"),
      textareaBlock("3. How would you improve response rate for outreach to passive candidates?"),
      textareaBlock("4. What makes a recruiting/job post feel trustworthy instead of spammy?"),
      urlBlock("Optional: Portfolio or sample work")
    ]
  }
];

const created = [];
for (const form of forms) {
  const result = await createForm(form.name, form.blocks);
  created.push(result);
  console.log(`Created: ${form.name} -> https://tally.so/r/${result.id}`);
}

await fs.writeFile(
  "tally-created-forms.json",
  JSON.stringify(created, null, 2),
  "utf8"
);

console.log("Done. Saved tally-created-forms.json");