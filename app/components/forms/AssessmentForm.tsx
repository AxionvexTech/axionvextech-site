"use client";

import { useState } from "react";
import { trackEvent } from "@/app/lib/analytics";

const budgetRanges = [
  "Under $10,000",
  "$10,000 to $25,000",
  "$25,000 to $50,000",
  "$50,000 to $100,000",
  "Over $100,000",
  "Not determined",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function AssessmentForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    trackEvent("assessment_form_submitted");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot
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
          company: data.get("company"),
          role: data.get("role"),
          website: data.get("website"),
          problem: data.get("problem"),
          outcome: data.get("outcome"),
          systems: data.get("systems"),
          timeline: data.get("timeline"),
          budget: data.get("budget"),
          volume: data.get("volume"),
          exceptions: data.get("exceptions"),
          tools: data.get("tools"),
          sensitivity: data.get("sensitivity"),
          prototype: data.get("prototype"),
          consent: data.get("consent") === "on",
        }),
      });

      if (!res.ok) {
        const payload = await res.json().catch(() => ({}));
        throw new Error(payload.error || "Submission failed");
      }

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
        <h2 className="text-xl font-semibold text-ink-950">Context received.</h2>
        <p className="mt-3 text-[var(--text-body)]">
          We will review the workflow, constraints, and target outcome. If the
          project appears aligned, the next step is a focused discovery
          conversation.
        </p>
      </div>
    );
  }

  return (
    <form
      className="surface-card space-y-5 p-6"
      onSubmit={onSubmit}
      onFocus={() => trackEvent("assessment_form_started")}
      noValidate
    >
      <div className="hidden" aria-hidden>
        <label>
          Company website URL
          <input name="company_website_url" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <Field label="Name" name="name" required autoComplete="name" />
      <Field
        label="Work email"
        name="email"
        type="email"
        required
        autoComplete="email"
      />
      <Field label="Company" name="company" required autoComplete="organization" />
      <Field label="Role" name="role" required autoComplete="organization-title" />
      <Field label="Company website" name="website" required autoComplete="url" />
      <TextArea
        label="Workflow or product problem"
        name="problem"
        required
      />
      <TextArea label="Desired outcome" name="outcome" required />
      <TextArea label="Systems involved" name="systems" required />
      <Field label="Target timeline" name="timeline" required />
      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-ink-950">
          Budget range
        </label>
        <select
          id="budget"
          name="budget"
          required
          className="mt-1.5 w-full rounded-xl border border-[var(--border-light)] bg-white px-3 py-2.5"
          defaultValue=""
        >
          <option value="" disabled>
            Select a range
          </option>
          {budgetRanges.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <details className="rounded-xl border border-[var(--border-light)] p-4">
        <summary className="cursor-pointer font-medium text-ink-950">
          Optional details
        </summary>
        <div className="mt-4 space-y-4">
          <Field label="Current process volume" name="volume" />
          <Field label="Known exception rate" name="exceptions" />
          <Field label="Current tools" name="tools" />
          <Field label="Data sensitivity" name="sensitivity" />
          <Field label="Existing prototype" name="prototype" />
        </div>
      </details>

      <label className="flex items-start gap-3 text-sm text-[var(--text-body)]">
        <input type="checkbox" name="consent" required className="mt-1" />
        <span>
          I agree to the{" "}
          <a href="/privacy" className="underline underline-offset-2">
            privacy policy
          </a>{" "}
          and consent to being contacted about this inquiry.
        </span>
      </label>

      {status === "error" ? (
        <p className="text-sm text-danger" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        className="btn btn-primary"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Submit assessment context"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
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
        autoComplete={autoComplete}
        className="mt-1.5 w-full rounded-xl border border-[var(--border-light)] bg-white px-3 py-2.5"
      />
    </div>
  );
}

function TextArea({
  label,
  name,
  required,
}: {
  label: string;
  name: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink-950">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        required={required}
        rows={4}
        className="mt-1.5 w-full rounded-xl border border-[var(--border-light)] bg-white px-3 py-2.5"
      />
    </div>
  );
}
