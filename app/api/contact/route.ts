import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const RECIPIENT = "manager@axionvextech.com";

interface ApplicationPayload {
  name: string;
  email: string;
  phone?: string;
  position: string;
  message: string;
}

function validate(body: unknown): ApplicationPayload | null {
  if (!body || typeof body !== "object") return null;
  const { name, email, position, message } = body as Record<string, unknown>;

  if (typeof name !== "string" || name.trim().length < 2) return null;
  if (typeof email !== "string" || !email.includes("@")) return null;
  if (typeof position !== "string" || position.trim().length === 0) return null;
  if (typeof message !== "string" || message.trim().length < 10) return null;

  return {
    name: name.trim(),
    email: email.trim(),
    phone:
      typeof (body as Record<string, unknown>).phone === "string"
        ? ((body as Record<string, unknown>).phone as string).trim()
        : undefined,
    position: position.trim(),
    message: message.trim(),
  };
}

function buildEmailHtml(data: ApplicationPayload, timestamp: string): string {
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
      <div style="background: #0f172a; padding: 24px 32px; border-radius: 12px 12px 0 0;">
        <h1 style="color: #ffffff; font-size: 18px; margin: 0;">New Application — ${data.position}</h1>
        <p style="color: #94a3b8; font-size: 13px; margin: 8px 0 0;">Submitted via axionvextech.com/recruiting</p>
      </div>

      <div style="background: #ffffff; padding: 32px; border: 1px solid #e2e8f0; border-top: none;">
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 10px 0; color: #64748b; width: 120px; vertical-align: top;">Name</td>
            <td style="padding: 10px 0; font-weight: 600;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #64748b; vertical-align: top;">Email</td>
            <td style="padding: 10px 0;"><a href="mailto:${data.email}" style="color: #2563eb; text-decoration: none;">${data.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #64748b; vertical-align: top;">Phone</td>
            <td style="padding: 10px 0;">${data.phone || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #64748b; vertical-align: top;">Role</td>
            <td style="padding: 10px 0; font-weight: 600;">${data.position}</td>
          </tr>
        </table>

        <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #e2e8f0;">
          <p style="color: #64748b; font-size: 13px; margin: 0 0 8px;">Message</p>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; white-space: pre-wrap; font-size: 14px; line-height: 1.6;">${data.message}</div>
        </div>
      </div>

      <div style="background: #f8fafc; padding: 16px 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
        <p style="color: #94a3b8; font-size: 12px; margin: 0;">
          Received ${timestamp} · Reply directly to <a href="mailto:${data.email}" style="color: #2563eb;">${data.email}</a>
        </p>
      </div>
    </div>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = validate(body);

    if (!data) {
      return NextResponse.json(
        { error: "Invalid application data. Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured. Please email manager@axionvextech.com directly." },
        { status: 500 }
      );
    }

    const timestamp = new Date().toLocaleString("en-US", {
      dateStyle: "long",
      timeStyle: "short",
      timeZone: "America/New_York",
    });

    const resend = new Resend(process.env.RESEND_API_KEY);
    const fromAddress = process.env.RESEND_FROM_ADDRESS || "applications@axionvextech.com";

    const { error } = await resend.emails.send({
      from: `AxionvexTech Applications <${fromAddress}>`,
      to: [RECIPIENT],
      replyTo: data.email,
      subject: `New Application — ${data.position}`,
      html: buildEmailHtml(data, timestamp),
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: "Failed to send application. Please email manager@axionvextech.com directly." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unexpected error in /api/contact:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please email manager@axionvextech.com directly." },
      { status: 500 }
    );
  }
}
