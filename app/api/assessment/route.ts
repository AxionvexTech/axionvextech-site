import { NextResponse } from "next/server";
import { Resend } from "resend";

type Body = {
  name?: string;
  email?: string;
  company?: string;
  role?: string;
  website?: string;
  problem?: string;
  outcome?: string;
  systems?: string;
  timeline?: string;
  budget?: string;
  volume?: string;
  exceptions?: string;
  tools?: string;
  sensitivity?: string;
  prototype?: string;
  consent?: boolean;
};

function required(value: unknown) {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (
    !required(body.name) ||
    !required(body.email) ||
    !required(body.company) ||
    !required(body.role) ||
    !required(body.website) ||
    !required(body.problem) ||
    !required(body.outcome) ||
    !required(body.systems) ||
    !required(body.timeline) ||
    !required(body.budget) ||
    !body.consent
  ) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const email = String(body.email).trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM || "applications@axionvextech.com";
  const to = process.env.MANAGER_EMAIL || "contact@axionvextech.com";

  if (!apiKey) {
    console.error("RESEND_API_KEY missing; assessment delivery is unavailable");
    return NextResponse.json(
      {
        error:
          "Online delivery is not configured. Please email contact@axionvextech.com directly.",
      },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);
  const text = Object.entries(body)
    .map(([k, v]) => `${k}: ${String(v ?? "")}`)
    .join("\n");

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `AI Workflow Assessment — ${body.company}`,
    text,
  });

  if (error) {
    console.error(error);
    return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
