"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const inputStyles =
    "w-full px-4 py-2.5 bg-white/[0.06] border border-white/[0.1] rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 text-sm transition-colors";
  const labelStyles = "block text-sm font-medium text-slate-300 mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {submitted && (
        <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-3 rounded-lg text-sm">
          Application received. We review every submission and will be in touch
          if there is a fit.
        </div>
      )}

      <div>
        <label htmlFor="name" className={labelStyles}>
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
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

      <div>
        <label htmlFor="position" className={labelStyles}>
          Role You&rsquo;re Applying For
        </label>
        <select
          id="position"
          name="position"
          value={formData.position}
          onChange={handleChange}
          required
          className={inputStyles}
        >
          <option value="" className="bg-slate-900">
            Select a role...
          </option>
          <option value="Talent & Operations Coordinator" className="bg-slate-900">
            Talent & Operations Coordinator
          </option>
          <option value="Client-Facing Technical Lead" className="bg-slate-900">
            Client-Facing Technical Lead
          </option>
          <option value="Other / Future Role" className="bg-slate-900">
            Other / Future Role
          </option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelStyles}>
          Tell us about work you&rsquo;re proud of
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="What have you built, shipped, or solved that you'd want us to know about? Be specific."
          className={inputStyles}
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:text-slate-400 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors"
      >
        {isLoading ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}
