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

// ─── Block helpers (validated against Tally API) ─────────────────

function titleBlock(html) {
  return {
    uuid: uuid(),
    type: "FORM_TITLE",
    groupUuid: uuid(),
    groupType: "TEXT",
    payload: { html, title: html.replace(/<[^>]+>/g, "") },
  };
}

function textBlock(html) {
  return {
    uuid: uuid(),
    type: "TEXT",
    groupUuid: uuid(),
    groupType: "TEXT",
    payload: { html },
  };
}

function inputBlock(label, required = true) {
  return {
    uuid: uuid(),
    type: "INPUT_TEXT",
    groupUuid: uuid(),
    groupType: "QUESTION",
    payload: { label, required, placeholder: "" },
  };
}

// TEXTAREA type requires groupType "TEXTAREA" and does not accept label/required.
// Question text goes in a separate TEXT block before the textarea.
function textareaBlock(label) {
  return [
    {
      uuid: uuid(),
      type: "TEXT",
      groupUuid: uuid(),
      groupType: "TEXT",
      payload: { html: `<p>${label}</p>` },
    },
    {
      uuid: uuid(),
      type: "TEXTAREA",
      groupUuid: uuid(),
      groupType: "TEXTAREA",
      payload: { placeholder: "" },
    },
  ];
}

// INPUT_LINK type requires groupType "INPUT_LINK" and does not accept label/required.
function urlBlock(label) {
  return [
    {
      uuid: uuid(),
      type: "TEXT",
      groupUuid: uuid(),
      groupType: "TEXT",
      payload: { html: `<p>${label}</p>` },
    },
    {
      uuid: uuid(),
      type: "INPUT_LINK",
      groupUuid: uuid(),
      groupType: "INPUT_LINK",
      payload: { placeholder: "" },
    },
  ];
}

// ─── Form creation ───────────────────────────────────────────────

async function createForm(name, blocks) {
  blocks = blocks.flat();
  const res = await fetch(`${API_BASE}/forms`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, status: "PUBLISHED", blocks }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed creating "${name}": ${res.status} ${text}`);
  }

  const data = await res.json();
  return { name, ...data };
}

// ─── All 8 role evaluation forms ─────────────────────────────────
// Each form maps to a role_key in app/lib/tally-links.ts
// and a TALLY_*_URL env var.

const forms = [
  // 1. recruiter — Talent & Operations Coordinator, Delivery Coordinator
  {
    role_key: "recruiter",
    env_var: "TALLY_RECRUITER_URL",
    name: "Recruiter / Talent Coordinator Evaluation",
    blocks: [
      titleBlock("Recruiter / Talent Coordinator Evaluation"),
      textBlock("Please complete this short evaluation carefully. Estimated time: 10–15 minutes."),
      textareaBlock("1. You need to source 2 suitable candidates for a frontend engineer role. Explain where you would look and why."),
      textareaBlock("2. What 3 factors would you use to screen candidates quickly but effectively?"),
      textareaBlock("3. Write a short outreach message to a strong candidate."),
      textareaBlock("4. Explain how you would keep the pipeline organized and transparent."),
      urlBlock("Optional: LinkedIn profile or portfolio"),
    ],
  },

  // 2. proxy_interviewer — Client-Facing Technical Lead, Technical Interview Specialist
  {
    role_key: "proxy_interviewer",
    env_var: "TALLY_PROXY_INTERVIEWER_URL",
    name: "Technical Interview Lead Evaluation",
    blocks: [
      titleBlock("Technical Interview Lead Evaluation"),
      textBlock("Please answer clearly and concisely. Estimated time: 10–15 minutes."),
      textareaBlock("1. Explain React state and props in a way a client could understand."),
      textareaBlock("2. A client asks an unexpected technical question you are not fully sure about. How would you respond?"),
      textareaBlock("3. How would you represent a senior developer's strengths confidently in a client-facing meeting?"),
      textareaBlock("4. What makes someone credible in a technical interview, beyond just speaking English well?"),
      urlBlock("Optional: Link to short intro video"),
    ],
  },

  // 3. developer — Full-Stack, Software Engineer, Frontend, Backend
  {
    role_key: "developer",
    env_var: "TALLY_DEVELOPER_URL",
    name: "Developer / Engineer Evaluation",
    blocks: [
      titleBlock("Developer / Engineer Evaluation"),
      textBlock("This is a short engineering evaluation. Estimated time: 10–15 minutes."),
      textareaBlock("1. A web app feels slow after adding several dashboard widgets. How would you investigate the root cause?"),
      textareaBlock("2. When would you choose server-side rendering over client-side rendering?"),
      textareaBlock("3. Describe how you would structure a production-ready API for reliability and maintainability."),
      textareaBlock("4. Explain one recent technical problem you solved and how you approached it."),
      urlBlock("GitHub or portfolio URL"),
    ],
  },

  // 4. headhunter — Recruiter / Talent Sourcer
  {
    role_key: "headhunter",
    env_var: "TALLY_HEADHUNTER_URL",
    name: "Headhunter / Talent Sourcer Evaluation",
    blocks: [
      titleBlock("Headhunter / Talent Sourcer Evaluation"),
      textBlock("This evaluation focuses on sourcing strategy and candidate engagement. Estimated time: 10–15 minutes."),
      textareaBlock("1. A client needs a senior backend engineer with Go experience in 2 weeks. Walk through your sourcing plan step by step."),
      textareaBlock("2. You found a strong candidate but they are not actively looking. How would you approach them?"),
      textareaBlock("3. How do you differentiate between a genuinely experienced developer and someone who inflates their resume?"),
      textareaBlock("4. Describe a time you filled a difficult role. What made it hard and how did you close it?"),
      urlBlock("Optional: LinkedIn profile or sourcing portfolio"),
    ],
  },

  // 5. social_marketer — Social Media / Outreach Marketer
  {
    role_key: "social_marketer",
    env_var: "TALLY_SOCIAL_MARKETER_URL",
    name: "Social Media / Outreach Marketer Evaluation",
    blocks: [
      titleBlock("Social Media / Outreach Marketer Evaluation"),
      textBlock("Please complete this short evaluation carefully. Estimated time: 10–15 minutes."),
      textareaBlock("1. Write a short recruiting post for a client-facing technical interviewer role."),
      textareaBlock("2. Which channels would you prioritize first for finding qualified candidates, and why?"),
      textareaBlock("3. How would you improve response rate for outreach to passive candidates?"),
      textareaBlock("4. What makes a recruiting or job post feel trustworthy instead of spammy?"),
      urlBlock("Optional: Portfolio or sample work"),
    ],
  },

  // 6. reverse_recruiter — Reverse Recruiter (represents candidates to companies)
  {
    role_key: "reverse_recruiter",
    env_var: "TALLY_REVERSE_RECRUITER_URL",
    name: "Reverse Recruiter Evaluation",
    blocks: [
      titleBlock("Reverse Recruiter Evaluation"),
      textBlock("This evaluation focuses on candidate positioning and outbound strategy. Estimated time: 10–15 minutes."),
      textareaBlock("1. A developer has 5 years of React experience but no big-name companies on their resume. How would you position them to land interviews at strong companies?"),
      textareaBlock("2. You are reaching out to a hiring manager on behalf of a candidate. Write a short outreach message that gets a response."),
      textareaBlock("3. What is your process for identifying the right companies and roles to target for a specific candidate?"),
      textareaBlock("4. How do you handle it when a candidate you are representing gets rejected after a final interview? What is your next move?"),
      urlBlock("Optional: LinkedIn or professional profile"),
    ],
  },

  // 7. normal_job_bidder — General applicant / Other / Future Role
  {
    role_key: "normal_job_bidder",
    env_var: "TALLY_NORMAL_JOB_BIDDER_URL",
    name: "General Application Evaluation",
    blocks: [
      titleBlock("General Application Evaluation"),
      textBlock("Thank you for your interest. This short evaluation helps us understand your strengths. Estimated time: 10–15 minutes."),
      textareaBlock("1. What kind of work are you best at? Describe your strongest professional skill and give a specific example."),
      textareaBlock("2. Describe a project or task you completed that you are genuinely proud of. What was your role and what was the outcome?"),
      textareaBlock("3. How do you stay organized and productive when working remotely without direct supervision?"),
      textareaBlock("4. What type of role or work are you looking for, and why does AxionvexTech interest you?"),
      urlBlock("Optional: Portfolio, LinkedIn, or relevant profile"),
    ],
  },

  // 8. tailored_job_bidder — Specialized / tailored job applications
  {
    role_key: "tailored_job_bidder",
    env_var: "TALLY_TAILORED_JOB_BIDDER_URL",
    name: "Tailored Job Bidder Evaluation",
    blocks: [
      titleBlock("Tailored Job Bidder Evaluation"),
      textBlock("This evaluation assesses your ability to craft targeted proposals and win project-based work. Estimated time: 10–15 minutes."),
      textareaBlock("1. A client posts a project requiring a Next.js dashboard with real-time data. Write the opening paragraph of your proposal."),
      textareaBlock("2. What do you look for in a job post to decide whether it is worth bidding on?"),
      textareaBlock("3. How do you tailor a proposal to stand out from generic responses? Walk through your process."),
      textareaBlock("4. Describe a time you won a competitive bid. What made your proposal stronger than the rest?"),
      urlBlock("Optional: Link to a sample proposal or profile"),
    ],
  },
];

// ─── Execute ─────────────────────────────────────────────────────

console.log(`Creating ${forms.length} Tally evaluation forms...\n`);

const created = [];
for (const form of forms) {
  const result = await createForm(form.name, form.blocks);
  const url = `https://tally.so/r/${result.id}`;
  created.push({ role_key: form.role_key, env_var: form.env_var, name: form.name, id: result.id, url });
  console.log(`  [${form.role_key}] ${form.name}`);
  console.log(`    -> ${url}`);
  console.log(`    -> ${form.env_var}=${url}\n`);
}

// Save results
await fs.writeFile(
  "tally-created-forms.json",
  JSON.stringify(created, null, 2),
  "utf8"
);

// Print .env block for easy copy-paste
console.log("─── Copy to .env.local ───\n");
for (const f of created) {
  console.log(`${f.env_var}=${f.url}`);
}
console.log("\n─── Done. Saved tally-created-forms.json ───");
