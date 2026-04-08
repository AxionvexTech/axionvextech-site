"use client";

import { useState, useEffect } from "react";

interface ContactFormProps {
  initialRole?: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm({ initialRole }: ContactFormProps) {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    role: initialRole || "",
    portfolio: "",
    linkedin: "",
    github: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (initialRole) {
      setFormData((prev) => ({ ...prev, role: initialRole }));
    }
  }, [initialRole]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(
          data.error || "Something went wrong. Please try again or email manager@axionvextech.com."
        );
        return;
      }

      setStatus("success");
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        role: "",
        portfolio: "",
        linkedin: "",
        github: "",
        message: "",
      });
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong. Please try again or email manager@axionvextech.com."
      );
    }
  };

  const inputStyles =
    "w-full px-4 py-2.5 bg-white/[0.06] border border-white/[0.1] rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 text-sm transition-colors";
  const labelStyles = "block text-sm font-medium text-slate-300 mb-2";

  // ── Success state ──
  if (status === "success") {
    return (
      <div className="text-center py-8">
        <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-5">
          <svg
            className="w-6 h-6 text-emerald-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">
          Application received.
        </h3>
        <p className="text-sm text-slate-400 mb-6">
          Check your email for the next step.
        </p>

        <div className="text-left space-y-3 bg-white/[0.03] border border-white/[0.06] rounded-lg p-5 max-w-sm mx-auto">
          {[
            { num: "01", text: "You will receive a short role-based evaluation by email." },
            { num: "02", text: "We review your application within one week." },
            { num: "03", text: "If there is a potential fit, we schedule a short screening call." },
            { num: "04", text: "Qualified candidates have a focused technical conversation." },
            { num: "05", text: "You hear back either way — we do not ghost candidates." },
          ].map((step) => (
            <div key={step.num} className="flex items-start gap-3">
              <span className="text-blue-400 font-bold mt-0.5 flex-shrink-0 text-xs">
                {step.num}
              </span>
              <p className="text-slate-400 text-sm leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
        >
          Submit another application
        </button>
      </div>
    );
  }

  // ── Form ──
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === "error" && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
          <p className="text-red-400 text-sm">{errorMessage}</p>
        </div>
      )}

      {initialRole && (
        <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-lg px-4 py-3">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
          <p className="text-blue-400 text-sm">
            Applying for:{" "}
            <span className="font-semibold text-white">{initialRole}</span>
          </p>
        </div>
      )}

      <div>
        <label htmlFor="full_name" className={labelStyles}>
          Full Name
        </label>
        <input
          type="text"
          id="full_name"
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
          required
          minLength={2}
          placeholder="Your full name"
          className={inputStyles}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelStyles}>
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="you@example.com"
          className={inputStyles}
        />
      </div>

      <div>
        <label htmlFor="phone" className={labelStyles}>
          Phone Number{" "}
          <span className="text-slate-500 font-normal">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+1 (555) 000-0000"
          className={inputStyles}
        />
      </div>

      {!initialRole && (
        <div>
          <label htmlFor="role" className={labelStyles}>
            Role You Are Applying For
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className={inputStyles}
          >
            <option value="" className="bg-slate-900">Select a role...</option>
            <option value="Talent & Operations Coordinator" className="bg-slate-900">Talent & Operations Coordinator</option>
            <option value="Client-Facing Technical Lead" className="bg-slate-900">Client-Facing Technical Lead</option>
            <option value="Full-Stack Web Developer" className="bg-slate-900">Full-Stack Web Developer</option>
            <option value="Software Engineer" className="bg-slate-900">Software Engineer</option>
            <option value="Frontend Engineer" className="bg-slate-900">Frontend Engineer</option>
            <option value="Backend Engineer" className="bg-slate-900">Backend Engineer</option>
            <option value="Technical Interview Specialist" className="bg-slate-900">Technical Interview Specialist</option>
            <option value="Recruiter / Talent Sourcer" className="bg-slate-900">Recruiter / Talent Sourcer</option>
            <option value="Social Media / Outreach Marketer" className="bg-slate-900">Social Media / Outreach Marketer</option>
            <option value="Delivery Coordinator" className="bg-slate-900">Delivery Coordinator</option>
            <option value="Other / Future Role" className="bg-slate-900">Other / Future Role</option>
          </select>
        </div>
      )}

      <div>
        <label htmlFor="portfolio" className={labelStyles}>
          Portfolio URL{" "}
          <span className="text-slate-500 font-normal">(optional)</span>
        </label>
        <input
          type="url"
          id="portfolio"
          name="portfolio"
          value={formData.portfolio}
          onChange={handleChange}
          placeholder="https://yourportfolio.com"
          className={inputStyles}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="linkedin" className={labelStyles}>
            LinkedIn{" "}
            <span className="text-slate-500 font-normal">(optional)</span>
          </label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            placeholder="https://linkedin.com/in/..."
            className={inputStyles}
          />
        </div>

        <div>
          <label htmlFor="github" className={labelStyles}>
            GitHub{" "}
            <span className="text-slate-500 font-normal">(optional)</span>
          </label>
          <input
            type="url"
            id="github"
            name="github"
            value={formData.github}
            onChange={handleChange}
            placeholder="https://github.com/..."
            className={inputStyles}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelStyles}>
          Tell us about work you are proud of
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          minLength={10}
          rows={5}
          placeholder="What have you built, shipped, or solved that you'd want us to know about? Be specific."
          className={inputStyles}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:text-slate-400 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <>
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending application...
          </>
        ) : (
          "Submit Application"
        )}
      </button>

      <p className="text-slate-500 text-xs text-center">
        After applying, you&rsquo;ll receive a short role-based evaluation by email.
      </p>
    </form>
  );
}
