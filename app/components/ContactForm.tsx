"use client";

import { FormEvent, useState, useEffect } from "react";

interface ContactFormProps {
  initialRole?: string;
}

export default function ContactForm({ initialRole }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: initialRole || "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (initialRole) {
      setFormData((prev) => ({ ...prev, position: initialRole }));
    }
  }, [initialRole]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).catch(() => null);

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", position: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const inputStyles =
    "w-full px-4 py-2.5 bg-white/[0.06] border border-white/[0.1] rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 text-sm transition-colors";
  const labelStyles = "block text-sm font-medium text-slate-300 mb-2";

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-5">
          <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">
          Application received.
        </h3>
        <div className="space-y-4 text-sm text-slate-400 leading-relaxed max-w-sm mx-auto">
          <p>We read every application. Here is what happens next:</p>
          <div className="text-left space-y-3 bg-white/[0.03] border border-white/[0.06] rounded-lg p-4">
            <div className="flex items-start gap-3">
              <span className="text-blue-400 font-bold mt-0.5 flex-shrink-0 text-xs">01</span>
              <p>We review your submission within one week.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-400 font-bold mt-0.5 flex-shrink-0 text-xs">02</span>
              <p>If there is a potential fit, we schedule a short intro call.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-400 font-bold mt-0.5 flex-shrink-0 text-xs">03</span>
              <p>You hear back either way — we do not ghost candidates.</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {initialRole && (
        <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-lg px-4 py-3 mb-2">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
          <p className="text-blue-400 text-sm">
            Applying for: <span className="font-semibold text-white">{initialRole}</span>
          </p>
        </div>
      )}

      <div>
        <label htmlFor="name" className={labelStyles}>Full Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name" className={inputStyles} />
      </div>

      <div>
        <label htmlFor="email" className={labelStyles}>Email Address</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" className={inputStyles} />
      </div>

      <div>
        <label htmlFor="phone" className={labelStyles}>
          Phone Number <span className="text-slate-500 font-normal">(optional)</span>
        </label>
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className={inputStyles} />
      </div>

      {!initialRole && (
        <div>
          <label htmlFor="position" className={labelStyles}>Role You Are Applying For</label>
          <select id="position" name="position" value={formData.position} onChange={handleChange} required className={inputStyles}>
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
        <label htmlFor="message" className={labelStyles}>Tell us about work you are proud of</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="What have you built, shipped, or solved that you'd want us to know about? Be specific." className={inputStyles} />
      </div>

      <button type="submit" disabled={isLoading} className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:text-slate-400 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors">
        {isLoading ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}
