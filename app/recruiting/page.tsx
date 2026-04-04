import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Join the Team | AxionvexTech",
  description:
    "We hire slowly. We keep people long. Open roles for senior engineers and talent coordinators at AxionvexTech.",
  alternates: {
    canonical: "https://axionvextech.com/recruiting",
  },
};

export default function Recruiting() {
  return (
    <div className="min-h-screen bg-white">
      <Header page="recruiting" />

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-slate-950">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-indigo-600 rounded-full blur-[120px] opacity-10 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-36">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-bold tracking-[0.25em] uppercase text-blue-400">
              We&rsquo;re Hiring
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.06] text-white mb-6 tracking-tight">
              We hire slowly.<br />We keep people long.
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
              We&rsquo;re a small team of senior engineers building real systems
              for real clients. If you want ownership, growth, and work that
              actually challenges you — this is worth reading.
            </p>
            <a
              href="#positions"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors text-base"
            >
              See Open Roles
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-white pointer-events-none" />
      </section>

      {/* ─── ABOUT THE TEAM ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-600 mb-5">
                Who We Are
              </p>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                A small team. High standards. Growing fast.
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  We&rsquo;re not a large agency. We&rsquo;re a tight group of
                  senior engineers — distributed across time zones — who work
                  closely, move fast, and hold each other to a high standard.
                </p>
                <p>
                  Everyone here owns their work from start to finish.
                  There&rsquo;s no one to hand it off to, and we prefer it that
                  way. The people who thrive here are the ones who would rather
                  have full ownership of something real than be a small cog in
                  something large.
                </p>
                <p>
                  We&rsquo;re currently expanding our team for the first time
                  since we started. If you join now, you&rsquo;re joining early
                  — when the decisions you make actually shape what this becomes.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  title: "Remote-first",
                  body: "Distributed team. Async by default. We hire for output, not presence.",
                },
                {
                  title: "Async-first",
                  body: "We communicate when it matters. No standups for the sake of it.",
                },
                {
                  title: "Ownership-heavy",
                  body: "You run your work. You make decisions. You own the outcomes.",
                },
                {
                  title: "Growing",
                  body: "New client projects every month. Team expanding deliberately.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-6"
                >
                  <p className="font-bold text-slate-900 text-sm mb-2">
                    {item.title}
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── ENGINEERING CULTURE ─── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-16">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-600 mb-4">
              How We Work
            </p>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
              Engineering culture, not just engineering.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Culture isn&rsquo;t a perk. It&rsquo;s how we work day to day.
              Here&rsquo;s what that actually looks like here.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Code review is real",
                body: "We actually read each other's PRs. We leave comments that matter. If something's wrong, we say it — clearly and constructively.",
              },
              {
                title: "You ship to production",
                body: "Everyone deploys. Everyone monitors what they ship. If something goes wrong at 2am, the person who wrote it knows why.",
              },
              {
                title: "Ownership means all of it",
                body: "Discovery, architecture, implementation, testing, deployment. You don't hand off — you see it through.",
              },
              {
                title: "We write things down",
                body: "Decisions get documented. Code gets documented. We don't rebuild context from scratch every time someone asks a question.",
              },
              {
                title: "Direct client contact",
                body: "Senior team members talk to clients. You'll understand the business context behind what you're building.",
              },
              {
                title: "No \"not my job\"",
                body: "We're small. If you see a problem — in the code, in the process, in the communication — you raise it or you fix it.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-slate-200 rounded-xl p-7 hover:shadow-sm transition-shadow"
              >
                <div className="w-8 h-0.5 bg-blue-600 mb-5" />
                <h3 className="font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO SHOULD + SHOULD NOT JOIN ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-16">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-600 mb-4">
              Fit
            </p>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              This environment isn&rsquo;t for everyone.<br />
              It shouldn&rsquo;t be.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Who should join */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                <h3 className="text-xl font-bold text-slate-900">
                  You&rsquo;ll thrive here if...
                </h3>
              </div>
              <ul className="space-y-5">
                {[
                  "You've shipped production systems you're genuinely proud of",
                  "You're comfortable owning a problem from discovery to deployment",
                  "You communicate clearly in writing — async is your default",
                  "You get better from specific feedback, not defensive",
                  "You'd rather have ownership of something hard than comfort in something easy",
                  "You read error logs before asking for help",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold mt-0.5 flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-slate-700 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who should NOT join */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-500" />
                <h3 className="text-xl font-bold text-white">
                  This isn&rsquo;t a fit if...
                </h3>
              </div>
              <ul className="space-y-5">
                {[
                  "You need someone to structure your day or tell you what to do",
                  "You treat code review as a checkbox, not a conversation",
                  "You go quiet when things get hard or ambiguous",
                  "You're looking for an easy remote job",
                  "You separate \"my code\" from \"my responsibility\"",
                  "You'd rather look busy than be useful",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-slate-500 font-bold mt-0.5 flex-shrink-0">
                      ✕
                    </span>
                    <span className="text-slate-400 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MOMENTUM ─── */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 items-center">
            <div className="md:col-span-2">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-600 mb-4">
                Momentum
              </p>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                We&rsquo;re growing. Right now.
              </h2>
              <p className="text-slate-600 leading-relaxed">
                New client projects starting monthly. Team expanding for the
                first time since we started. If you join now, you&rsquo;re
                joining at the point where your work shapes what this becomes —
                not maintaining someone else&rsquo;s decisions.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
              <p className="text-3xl font-extrabold text-slate-900 mb-1">
                Growing
              </p>
              <p className="text-slate-500 text-sm">
                New client projects every month
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
              <p className="text-3xl font-extrabold text-slate-900 mb-1">
                Expanding
              </p>
              <p className="text-slate-500 text-sm">
                First team expansion since launch
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OPEN POSITIONS ─── */}
      <section id="positions" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-16">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-600 mb-4">
              Open Roles
            </p>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Two open positions.
            </h2>
          </div>

          {/* Position 1 */}
          <div className="mb-8 bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
            <div className="border-l-4 border-blue-500 p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                <div>
                  <p className="text-xs font-bold tracking-[0.15em] uppercase text-slate-400 mb-2">
                    Role 01
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                    Talent & Operations Coordinator
                  </h3>
                  <p className="text-slate-500 mt-2">
                    Remote · Part-time to full-time · Americas timezone preferred
                  </p>
                </div>
                <a
                  href="#apply"
                  className="flex-shrink-0 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors self-start"
                >
                  Apply for This Role
                </a>
              </div>

              <div className="grid md:grid-cols-2 gap-10 mb-10">
                <div>
                  <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">
                    What You&rsquo;ll Do
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Source and qualify senior engineering candidates across job platforms, LinkedIn, and developer communities",
                      "Conduct initial screens — you'll need to assess technical credibility, not just culture fit",
                      "Manage candidate pipeline and communications from first contact through offer",
                      "Coordinate scheduling and logistics between candidates and our engineering leads",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-blue-500 mt-0.5 flex-shrink-0">
                          ›
                        </span>
                        <span className="text-slate-600 text-sm leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">
                    What We Need
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "2+ years in recruitment, sourcing, or operations",
                      "Basic understanding of web development — enough to distinguish real experience from resume padding",
                      "Strong written English — you'll be the first impression for candidates",
                      "Organized, self-directed, no hand-holding required",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-slate-400 mt-0.5 flex-shrink-0 font-bold">
                          ✓
                        </span>
                        <span className="text-slate-600 text-sm leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-8">
                <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">
                  Growth Opportunity
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
                  As we grow, this role grows. You&rsquo;re building the hiring
                  foundation for an engineering team — there&rsquo;s a clear
                  path into operations leadership as we scale.
                </p>
              </div>
            </div>
          </div>

          {/* Position 2 */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
            <div className="border-l-4 border-indigo-500 p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                <div>
                  <p className="text-xs font-bold tracking-[0.15em] uppercase text-slate-400 mb-2">
                    Role 02
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                    Client-Facing Technical Lead
                  </h3>
                  <p className="text-slate-500 mt-2">
                    Remote · Project-based · Americas or Europe timezone
                  </p>
                </div>
                <a
                  href="#apply"
                  className="flex-shrink-0 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors self-start"
                >
                  Apply for This Role
                </a>
              </div>

              <div className="mb-8">
                <p className="text-slate-600 leading-relaxed max-w-2xl">
                  You&rsquo;re the first engineer a client talks to. You run
                  technical discovery calls, understand what they&rsquo;re
                  actually trying to build, translate it into something our
                  team can execute, and then stay involved through delivery.
                  This isn&rsquo;t a sales role — it&rsquo;s an engineering
                  role that requires clear communication.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-10 mb-10">
                <div>
                  <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">
                    What You&rsquo;ll Do
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Lead client discovery and technical scoping conversations",
                      "Represent our engineering team's capabilities in client discussions",
                      "Translate business requirements into clear technical briefs",
                      "Support or lead project execution post-acquisition",
                      "Build client confidence through technical credibility, not pitch decks",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-indigo-500 mt-0.5 flex-shrink-0">
                          ›
                        </span>
                        <span className="text-slate-600 text-sm leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">
                    Compensation
                  </h4>
                  <div className="space-y-3">
                    {[
                      {
                        label: "Client interviews / discovery sessions",
                        value: "$20–$25 / hr",
                      },
                      {
                        label: "Project won — support role",
                        value: "$1,000–$2,000",
                      },
                      {
                        label: "Project won — lead role",
                        value: "$3,000–$4,000",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between bg-white border border-slate-200 rounded-lg px-4 py-3"
                      >
                        <span className="text-slate-600 text-sm">
                          {item.label}
                        </span>
                        <span className="font-bold text-slate-900 text-sm">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10 border-t border-slate-200 pt-8">
                <div>
                  <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">
                    What We Need
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "4+ years full-stack web development",
                      "Proven ability to run technical conversations with non-technical stakeholders",
                      "Fluent English — you need to be clear, confident, and specific",
                      "Experience making architectural decisions under real constraints",
                      "You've shipped enough to know what will go wrong before it does",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-slate-400 mt-0.5 flex-shrink-0 font-bold">
                          ✓
                        </span>
                        <span className="text-slate-600 text-sm leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">
                    Growth Path
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Strong performance here leads to recurring project
                    leadership, increased compensation per engagement, and a
                    long-term relationship as we grow our client base. This
                    isn&rsquo;t a one-off gig — we&rsquo;re looking for
                    someone who becomes a core part of how we operate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── APPLICATION FORM ─── */}
      <section id="apply" className="py-24 bg-slate-950 scroll-mt-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-blue-400 mb-4">
              Apply
            </p>
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
              Think you&rsquo;re a fit?
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Fill this out clearly. Tell us about work you&rsquo;re proud of.
              We read every application.
            </p>
          </div>

          <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-8">
            <ContactForm />
          </div>

          <p className="text-center text-slate-500 text-sm mt-8">
            Prefer to reach out directly?{" "}
            <a
              href="mailto:manager@axionvextech.com"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              manager@axionvextech.com
            </a>
          </p>
        </div>
      </section>

      <Footer page="recruiting" />
    </div>
  );
}
