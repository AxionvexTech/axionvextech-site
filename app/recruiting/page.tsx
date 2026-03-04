import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Recruiting | AxionvexTech",
  description:
    "Join AxionvexTech's global senior engineering team. We are hiring Recruiters and Technical Leads for remote-first roles across the Americas and Europe.",
  alternates: {
    canonical: "https://axionvextech.com/recruiting",
  },
};

export default function Recruiting() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* ナビゲーションバー */}
      <nav className="sticky top-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-at.svg"
              alt="AxionvexTech Logo"
              width={140}
              height={40}
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">AxionvexTech</span>
          </Link>
          <div className="hidden md:flex gap-8 text-gray-700 dark:text-gray-300">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Home</Link>
            <a href="#positions" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Positions</a>
            <a href="#apply" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Apply</a>
          </div>
        </div>
      </nav>

      {/* ヒーローセクション */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop"
            alt="Remote global engineering team collaboration"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Join Our Global Team
          </h1>
          <p className="text-xl md:text-2xl text-gray-100">
            Remote Opportunities – Expanding to the Americas
          </p>
        </div>
      </section>

      {/* 概要セクション */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">🌍 We're Hiring!</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We are an international team of senior software engineers based across Europe and Asia. As we expand into the Americas, we are hiring two key remote roles to support our growth.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              We are building long-term partnerships with serious professionals.
            </p>
          </div>
        </div>
      </section>

      {/* 募集ポジションセクション */}
      <section id="positions" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Open Positions
          </h2>

          {/* ポジション1 */}
          <div className="mb-16">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold mb-2 text-blue-600 dark:text-blue-400">
                1️⃣ Recruiter / Virtual Assistant
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg font-semibold">
                Help us source and screen highly qualified English-speaking web developers
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Your Mission</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Identify strong technical talent and help us build a reliable candidate pipeline.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">🔎 Key Responsibilities</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li><strong>Candidate Sourcing:</strong> Identify English-speaking developers with 4+ years of web development experience. Use job platforms, LinkedIn, communities, and recruiting channels. Build and maintain a structured candidate pipeline.</li>
                    <li><strong>Candidate Screening:</strong> Review resumes, GitHub profiles, and portfolios. Conduct initial screening interviews. Evaluate front-end and back-end fundamentals. Shortlist qualified candidates for technical evaluation.</li>
                    <li><strong>Communication & Coordination:</strong> Serve as liaison between candidates and internal hiring team. Track candidate progress and maintain organized documentation. Provide regular updates on sourcing performance.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">📋 Requirements</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>✓ Minimum 2 years experience in recruitment or virtual assistant roles</li>
                    <li>✓ Basic understanding of web development technologies</li>
                    <li>✓ Strong English communication skills (written & verbal)</li>
                    <li>✓ Detail-oriented and organized</li>
                    <li>✓ Ability to follow structured hiring processes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* ポジション2 */}
          <div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold mb-2 text-blue-600 dark:text-blue-400">
                2️⃣ English-Speaking Technical Lead & Client Interview Specialist
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg font-semibold">
                Client-facing technical representative of our senior engineering team
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Role Overview</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    We are looking for a highly skilled English-speaking web developer to serve as the client-facing technical representative of our senior engineering team.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our internal developers are technically strong, but some are not fluent in English. Your primary role is to lead client interviews, represent one of our senior developers during technical discussions, increase our project win rate, and support or lead project execution after acquisition.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">🎤 Core Responsibilities</h4>
                  <div className="space-y-3 text-gray-600 dark:text-gray-300">
                    <p><strong>Client Interview Leadership (Primary Focus):</strong></p>
                    <ul className="space-y-2 ml-4">
                      <li>• Attend discovery calls and technical interviews</li>
                      <li>• Represent and present one of our senior internal developers</li>
                      <li>• Clearly communicate technical stack, architecture decisions, and project experience</li>
                      <li>• Handle advanced technical questions confidently</li>
                      <li>• Position our team strategically to maximize win probability</li>
                      <li>• Provide structured summaries after each meeting</li>
                    </ul>
                    <p className="mt-3"><strong>Your key objective: Turn interviews into successful project wins.</strong></p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">🧠 Technical Alignment & Support</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Work closely with the assigned senior internal developer</li>
                    <li>• Fully understand their experience, projects, and technical strengths</li>
                    <li>• Accurately communicate technical details to clients</li>
                    <li>• Step in to clarify, explain, or strengthen technical positioning when needed</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">🚀 Post-Win Project Involvement</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">After winning a project, your role may expand:</p>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li><strong>Option A – Interview + Coordination Role:</strong> Continue handling client communication, support project alignment and technical clarification, ensure expectations remain aligned.</li>
                    <li><strong>Option B – Direct Project Leadership:</strong> Take ownership of the project, lead development execution, coordinate internal developers, serve as technical lead until delivery.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">💬 Compensation Structure</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    This is performance-based and structured to reward strong closers:
                  </p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• <strong>Interview Handling:</strong> Paid hourly for meetings and interview sessions ($20-$25 per hour)</li>
                    <li>• <strong>If the Project Is Won:</strong> $1,000 - $2,000 per project (if you handle interviews and assist in coordination)</li>
                    <li>• <strong>If You Directly Lead the Project:</strong> $3,000 - $4,000 per project (if you take ownership and manage execution)</li>
                  </ul>
                  <p className="text-gray-600 dark:text-gray-300 mt-3">
                    This role offers high upside for professionals who can both win and deliver.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">📋 Qualifications</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>✓ Minimum 4+ years of web development experience</li>
                    <li>✓ Strong understanding of full-stack development</li>
                    <li>✓ Excellent English fluency (clear, confident, persuasive)</li>
                    <li>✓ Experience leading technical interviews or client discussions</li>
                    <li>✓ Strong communication presence and leadership mindset</li>
                    <li>✓ Ability to translate business requirements into technical solutions</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">⭐ Preferred</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Based in Americas or Europe</li>
                    <li>• Experience working with distributed development teams</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">🚀 Ideal Candidate Profile</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Senior developer comfortable in client-facing environments</li>
                    <li>• Strong communicator who enjoys technical positioning</li>
                    <li>• Strategic thinker focused on increasing win rates</li>
                    <li>• Professional seeking performance-based earning potential</li>
                    <li>• Developer ready to step into technical leadership</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 応募フォームセクション */}
      <section id="apply" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Ready to Join Us?
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            Fill out the form below to submit your application. We're looking for motivated professionals ready to make an impact.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Questions?</h2>
          <p className="text-lg mb-8">
            Reach out to us directly at{" "}
            <a
              href="mailto:manager@axionvextech.com"
              className="underline hover:text-blue-100"
            >
              manager@axionvextech.com
            </a>
          </p>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">AxionvexTech</h4>
              <p>Global technical consulting and web development solutions.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li><Link href="/recruiting" className="hover:text-white transition">Recruiting</Link></li>
              </ul>
            </div>
            <div />
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:manager@axionvextech.com" className="hover:text-white transition">manager@axionvextech.com</a></li>
                <li>Global Offices</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>&copy; 2026 AxionvexTech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
