"use client";

import { useState } from "react";
import { trackEvent } from "@/app/lib/analytics";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactFormLite() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);

    if (String(data.get("company_website_url") || "").trim()) {
      setStatus("success");
      return;
    }

    try {
      const res = await fetch("/api/assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company") || "Not provided",
          role: data.get("role") || "Not provided",
          website: data.get("website") || "Not provided",
          problem: data.get("message"),
          outcome: "General contact",
          systems: "Not provided",
          timeline: "Not provided",
          budget: "Not determined",
          consent: data.get("consent") === "on",
        }),
      });
      if (!res.ok) {
        const payload = await res.json().catch(() => ({}));
        throw new Error(payload.error || "Submission failed");
      }
      trackEvent("contact_form_submitted");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Submission failed");
    }
  }

  if (status === "success") {
    return (
      <div className="surface-card p-6" role="status">
        <h2 className="text-xl font-semibold text-ink-950">Message received.</h2>
        <p className="mt-3 text-[var(--text-body)]">
          If the inquiry is aligned, we will follow up with next steps.
        </p>
      </div>
    );
  }

  return (
    <form className="surface-card space-y-4 p-6" onSubmit={onSubmit}>
      <div className="hidden" aria-hidden>
        <input name="company_website_url" tabIndex={-1} autoComplete="off" />
      </div>
      <Input label="Name" name="name" required />
      <Input label="Work email" name="email" type="email" required />
      <Input label="Company" name="company" />
      <Input label="Role" name="role" />
      <Input label="Website" name="website" />
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink-950">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1.5 w-full rounded-xl border border-[var(--border-light)] px-3 py-2.5"
        />
      </div>
      <label className="flex items-start gap-3 text-sm">
        <input type="checkbox" name="consent" required className="mt-1" />
        <span>
          I agree to the{" "}
          <a href="/privacy" className="underline">
            privacy policy
          </a>
          .
        </span>
      </label>
      {status === "error" ? (
        <p className="text-sm text-danger" role="alert">
          {error}
        </p>
      ) : null}
      <button type="submit" className="btn btn-primary" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

function Input({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink-950">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-[var(--border-light)] px-3 py-2.5"
      />
    </div>
  );
}
