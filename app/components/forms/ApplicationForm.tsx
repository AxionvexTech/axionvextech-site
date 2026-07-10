"use client";

import { useEffect, useId, useState } from "react";
import { applicationRoleOptions } from "@/content/jobs";
import { trackEvent } from "@/app/lib/analytics";

type Status = "idle" | "submitting" | "success" | "error";

const steps = [
  { key: "role", label: "Role" },
  { key: "contact", label: "Contact" },
  { key: "experience", label: "Experience" },
  { key: "evidence", label: "Evidence" },
  { key: "availability", label: "Availability" },
  { key: "review", label: "Review" },
] as const;

const fieldClass =
  "mt-1.5 w-full rounded-xl border border-border bg-surface px-3.5 py-3 text-[15px] text-ink outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/15";

export default function ApplicationForm({
  initialRole = "",
}: {
  initialRole?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [step, setStep] = useState(0);
  const [receipt, setReceipt] = useState("");
  const [hydrated, setHydrated] = useState(false);
  const formId = useId();
  const [draft, setDraft] = useState({
    role: initialRole,
    full_name: "",
    email: "",
    phone: "",
    country: "",
    timezone: "",
    years: "",
    focus: "",
    portfolio: "",
    linkedin: "",
    github: "",
    message: "",
    availability: "",
    start: "",
    consent: false,
  });

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem("avx-application-draft");
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<typeof draft>;
        setDraft((d) => ({
          ...d,
          ...parsed,
          role: initialRole || parsed.role || d.role,
        }));
      } else if (initialRole) {
        setDraft((d) => ({ ...d, role: initialRole }));
      }
    } catch {
      if (initialRole) setDraft((d) => ({ ...d, role: initialRole }));
    }
    setHydrated(true);
  }, [initialRole]);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem("avx-application-draft", JSON.stringify(draft));
  }, [draft, hydrated]);

  useEffect(() => {
    if (!initialRole) return;
    setDraft((d) => (d.role === initialRole ? d : { ...d, role: initialRole }));
  }, [initialRole]);

  function update<K extends keyof typeof draft>(key: K, value: (typeof draft)[K]) {
    setDraft((d) => ({ ...d, [key]: value }));
  }

  function validateStep() {
    if (step === 0 && !draft.role) return "Select a role to continue.";
    if (step === 1) {
      if (!draft.full_name.trim()) return "Enter your full name.";
      if (!draft.email.trim() || !draft.email.includes("@")) {
        return "Enter a valid email address.";
      }
    }
    if (step === 2 && draft.focus.trim().length < 8) {
      return "Share a short note about your experience focus.";
    }
    if (step === 3 && draft.message.trim().length < 10) {
      return "Describe relevant work evidence in a short paragraph.";
    }
    if (step === 4 && !draft.availability.trim()) {
      return "Share your availability or preferred start window.";
    }
    if (step === 5 && !draft.consent) {
      return "Confirm privacy consent before submitting.";
    }
    return "";
  }

  function next() {
    const msg = validateStep();
    if (msg) {
      setError(msg);
      return;
    }
    setError("");
    if (step === 0) trackEvent("job_application_started", { role: draft.role });
    setStep((s) => Math.min(s + 1, steps.length - 1));
  }

  function back() {
    setError("");
    setStep((s) => Math.max(s - 1, 0));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const msg = validateStep();
    if (msg) {
      setError(msg);
      return;
    }

    const form = e.currentTarget;
    const honeypot = new FormData(form).get("company_website_url");
    if (String(honeypot || "").trim()) {
      setStatus("success");
      setReceipt("AVX-DRAFT");
      return;
    }

    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: draft.full_name,
          email: draft.email,
          phone: draft.phone || "",
          country: draft.country || "",
          timezone: draft.timezone || "",
          role: draft.role,
          portfolio: draft.portfolio || "",
          linkedin: draft.linkedin || "",
          github: draft.github || "",
          message: [
            draft.message,
            draft.focus ? `Focus: ${draft.focus}` : "",
            draft.years ? `Experience: ${draft.years}` : "",
            draft.availability ? `Availability: ${draft.availability}` : "",
            draft.start ? `Preferred start: ${draft.start}` : "",
          ]
            .filter(Boolean)
            .join("\n\n"),
        }),
      });
      const payload = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(payload.error || "Submission failed");
      trackEvent("job_application_completed", { role: draft.role });
      setReceipt(
        typeof payload.id === "string"
          ? payload.id
          : `AVX-${Date.now().toString(36).toUpperCase()}`
      );
      setStatus("success");
      window.localStorage.removeItem("avx-application-draft");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Submission failed");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[22px] border border-success/25 bg-surface p-7 md:p-8" role="status" id="apply">
        <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-success">
          Application received
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-ink">Thank you. Your application is in review.</h2>
        <p className="mt-3 text-[var(--text-body)]">
          Check your email for the next step. You will receive a short role-based
          evaluation link when one is configured for your track.
        </p>
        {receipt ? (
          <p className="mt-5 inline-flex rounded-full border border-border bg-surface-soft px-3 py-1.5 font-mono text-sm text-ink-muted">
            Reference: {receipt}
          </p>
        ) : null}
      </div>
    );
  }

  const progress = ((step + 1) / steps.length) * 100;

  return (
    <form
      id="apply"
      className="overflow-hidden rounded-[22px] border border-border bg-surface shadow-[var(--shadow-soft)]"
      onSubmit={onSubmit}
      noValidate
      data-glow
    >
      <div className="border-b border-border bg-surface-soft/80 px-5 py-4 md:px-7">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-muted">
              Application
            </p>
            <p className="mt-1 text-sm font-medium text-ink">
              Step {step + 1} of {steps.length}: {steps[step].label}
            </p>
          </div>
          <p className="font-mono text-xs text-ink-muted">{Math.round(progress)}%</p>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-border">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue to-cyan transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <ol className="mt-4 hidden gap-1 sm:flex" aria-label="Application progress">
          {steps.map((item, i) => (
            <li
              key={item.key}
              className={`flex-1 rounded-full px-2 py-1 text-center font-mono text-[10px] uppercase tracking-[0.05em] ${
                i === step
                  ? "bg-ink text-white"
                  : i < step
                    ? "bg-surface-blue text-blue"
                    : "bg-surface text-ink-muted"
              }`}
              aria-current={i === step ? "step" : undefined}
            >
              {item.label}
            </li>
          ))}
        </ol>
      </div>

      <div className="space-y-5 px-5 py-6 md:px-7 md:py-7">
        <div className="hidden" aria-hidden>
          <input name="company_website_url" tabIndex={-1} autoComplete="off" />
        </div>

        {step === 0 ? (
          <div>
            <label htmlFor={`${formId}-role`} className="block text-sm font-medium text-ink">
              Which role are you applying for?
            </label>
            <select
              id={`${formId}-role`}
              required
              value={draft.role}
              onChange={(e) => update("role", e.target.value)}
              className={fieldClass}
            >
              <option value="" disabled>
                Select a role…
              </option>
              {applicationRoleOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <p className="mt-2 text-sm text-ink-muted">
              Choose an open role, or “Other / Future Role” for the talent network.
            </p>
          </div>
        ) : null}

        {step === 1 ? (
          <div className="space-y-4">
            <Field
              label="Full name"
              name="full_name"
              value={draft.full_name}
              onChange={(v) => update("full_name", v)}
              required
              autoComplete="name"
            />
            <Field
              label="Email"
              name="email"
              type="email"
              value={draft.email}
              onChange={(v) => update("email", v)}
              required
              autoComplete="email"
            />
            <Field
              label="Phone"
              name="phone"
              type="tel"
              value={draft.phone}
              onChange={(v) => update("phone", v)}
              autoComplete="tel"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Country"
                name="country"
                value={draft.country}
                onChange={(v) => update("country", v)}
                autoComplete="country-name"
              />
              <Field
                label="Time zone"
                name="timezone"
                value={draft.timezone}
                onChange={(v) => update("timezone", v)}
                placeholder="e.g. EST, UTC+2"
              />
            </div>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="space-y-4">
            <Field
              label="Years of relevant experience"
              name="years"
              value={draft.years}
              onChange={(v) => update("years", v)}
              placeholder="e.g. 5+"
            />
            <div>
              <label htmlFor={`${formId}-focus`} className="block text-sm font-medium text-ink">
                Experience focus
              </label>
              <textarea
                id={`${formId}-focus`}
                rows={4}
                value={draft.focus}
                onChange={(e) => update("focus", e.target.value)}
                className={fieldClass}
                placeholder="Primary domains, stacks, or operating contexts"
              />
            </div>
          </div>
        ) : null}

        {step === 3 ? (
          <div className="space-y-4">
            <Field
              label="Portfolio or website"
              name="portfolio"
              value={draft.portfolio}
              onChange={(v) => update("portfolio", v)}
              placeholder="https://"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="LinkedIn"
                name="linkedin"
                value={draft.linkedin}
                onChange={(v) => update("linkedin", v)}
              />
              <Field
                label="GitHub"
                name="github"
                value={draft.github}
                onChange={(v) => update("github", v)}
              />
            </div>
            <div>
              <label htmlFor={`${formId}-message`} className="block text-sm font-medium text-ink">
                Work evidence
              </label>
              <textarea
                id={`${formId}-message`}
                required
                rows={5}
                value={draft.message}
                onChange={(e) => update("message", e.target.value)}
                className={fieldClass}
                placeholder="Why this role, and what relevant work have you done?"
              />
            </div>
          </div>
        ) : null}

        {step === 4 ? (
          <div className="space-y-4">
            <Field
              label="Availability"
              name="availability"
              value={draft.availability}
              onChange={(v) => update("availability", v)}
              placeholder="Hours/week, notice period, or interview windows"
              required
            />
            <Field
              label="Preferred start"
              name="start"
              value={draft.start}
              onChange={(v) => update("start", v)}
              placeholder="e.g. Immediate, 2 weeks, specific date"
            />
          </div>
        ) : null}

        {step === 5 ? (
          <div className="space-y-4 text-sm text-[var(--text-body)]">
            <dl className="space-y-3 rounded-2xl border border-border bg-surface-soft p-4">
              <div>
                <dt className="font-medium text-ink">Role</dt>
                <dd className="mt-0.5">{draft.role}</dd>
              </div>
              <div>
                <dt className="font-medium text-ink">Contact</dt>
                <dd className="mt-0.5">
                  {draft.full_name} · {draft.email}
                </dd>
              </div>
              <div>
                <dt className="font-medium text-ink">Availability</dt>
                <dd className="mt-0.5">{draft.availability}</dd>
              </div>
            </dl>
            <label className="flex items-start gap-3 rounded-2xl border border-border p-4">
              <input
                type="checkbox"
                checked={draft.consent}
                onChange={(e) => update("consent", e.target.checked)}
                className="mt-1"
              />
              <span>
                I agree to the processing of my application data as described in the{" "}
                <a href="/applicant-privacy" className="font-medium text-blue underline" target="_blank" rel="noreferrer">
                  Applicant Privacy Notice
                </a>
                .
              </span>
            </label>
          </div>
        ) : null}

        {error || status === "error" ? (
          <p className="rounded-xl border border-danger/25 bg-danger/5 px-3 py-2 text-sm text-danger" role="alert">
            {error || "Submission failed"}
          </p>
        ) : null}

        <div className="flex flex-wrap gap-3 pt-1">
          {step > 0 ? (
            <button type="button" className="btn btn-secondary" onClick={back}>
              Back
            </button>
          ) : null}
          {step < steps.length - 1 ? (
            <button type="button" className="btn btn-primary" onClick={next}>
              Continue
            </button>
          ) : (
            <button type="submit" className="btn btn-primary" disabled={status === "submitting"}>
              {status === "submitting" ? "Submitting…" : "Submit application"}
            </button>
          )}
        </div>
        <p className="text-xs text-ink-muted">Draft saves automatically in this browser until you submit.</p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={fieldClass}
      />
    </div>
  );
}
