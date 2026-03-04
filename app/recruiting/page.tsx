import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
    <div className="min-h-screen bg-gray-900">
      <Header page="recruiting" />

      {/* Hero Section */}
      <section className="relative h-80 md:h-96 flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop"
            alt="Remote global engineering team collaboration"
            fill
            priority
            className="object-cover opacity-40"
          />
        </div>
        
        <div className="relative z-10 text-center text-gray-100 px-6 max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Join Our Global Team
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Remote Opportunities – Expanding to the Americas
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gray-800 p-10 rounded-2xl shadow-lg border border-gray-200">
            <h2 className="text-4xl font-bold mb-6 text-gray-100">🌍 We're Hiring!</h2>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              We are an international team of senior software engineers based across Europe and Asia. As we expand into the Americas, we are hiring two key remote roles to support our growth.
            </p>
            <p className="text-gray-300 text-lg font-semibold text-blue-600">
              We are building long-term partnerships with serious professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="positions" className="py-20 bg-gray-800 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-100">
              Open Positions
            </h2>
            <p className="text-gray-300 text-lg">
              Two exciting opportunities to grow with our expanding team
            </p>
          </div>

          {/* Position 1 */}
          <div className="mb-12">
            <div className="bg-gray-800 p-10 rounded-2xl shadow-lg border-l-4 border-blue-600 border border-gray-200">
              <div className="flex items-start gap-4 mb-8">
                <div className="bg-blue-100 rounded-lg p-3">
                  <span className="text-2xl">🔍</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-100 mb-2">
                    Recruiter / Virtual Assistant
                  </h3>
                  <p className="text-gray-300 text-lg font-semibold">
                    Source and screen highly qualified English-speaking web developers
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-4 text-gray-100 flex items-center gap-2">
                    <span className="text-blue-600">→</span> Your Mission
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Identify strong technical talent and help us build a reliable candidate pipeline.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4 text-gray-100 flex items-center gap-2">
                    <span className="text-blue-600">→</span> Key Responsibilities
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span><strong>Candidate Sourcing:</strong> Build a pipeline using job platforms, LinkedIn, and communities</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span><strong>Candidate Screening:</strong> Review portfolios and conduct initial interviews</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span><strong>Communication:</strong> Liaison between candidates and internal team</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-xl font-bold mb-4 text-gray-100">📋 Requirements</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex gap-3">
                    <span className="text-green-600 text-xl">✓</span>
                    <span className="text-gray-300">2+ years recruitment or VA experience</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-green-600 text-xl">✓</span>
                    <span className="text-gray-300">Basic web development knowledge</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-green-600 text-xl">✓</span>
                    <span className="text-gray-300">Strong English communication</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-green-600 text-xl">✓</span>
                    <span className="text-gray-300">Detail-oriented & organized</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Position 2 */}
          <div>
            <div className="bg-gray-800 p-10 rounded-2xl shadow-lg border-l-4 border-purple-600 border border-gray-200">
              <div className="flex items-start gap-4 mb-8">
                <div className="bg-purple-100 rounded-lg p-3">
                  <span className="text-2xl">🎤</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-100 mb-2">
                    Technical Lead & Client Interview Specialist
                  </h3>
                  <p className="text-gray-300 text-lg font-semibold">
                    Client-facing technical representative of our senior engineering team
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold mb-4 text-gray-100 flex items-center gap-2">
                    <span className="text-purple-600">→</span> Role Overview
                  </h4>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We are looking for a highly skilled English-speaking web developer to serve as the client-facing technical representative of our senior engineering team.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Your primary role is to lead client interviews, represent our senior developers during technical discussions, increase our project win rate, and support or lead project execution after acquisition.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold mb-4 text-gray-100">🎤 Interview Leadership</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Lead discovery & technical interviews</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Represent senior internal developers</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Handle advanced technical questions</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Maximize project win probability</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold mb-4 text-gray-100">💬 Compensation</h4>
                    <div className="space-y-3 text-gray-300">
                      <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                        <strong>Interview Handling:</strong> $20-$25/hour
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                        <strong>Project Won & Support:</strong> $1,000 - $2,000
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                        <strong>Project Leadership:</strong> $3,000 - $4,000
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-700 p-6 rounded-lg border border-slate-600">
                  <h4 className="text-lg font-bold mb-4 text-gray-100">📋 Qualifications</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex gap-3">
                      <span className="text-green-600 text-xl">✓</span>
                      <span className="text-gray-300">4+ years web development</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-green-600 text-xl">✓</span>
                      <span className="text-gray-300">Full-stack development expertise</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-green-600 text-xl">✓</span>
                      <span className="text-gray-300">Fluent English (clear & persuasive)</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-green-600 text-xl">✓</span>
                      <span className="text-gray-300">Experience with client discussions</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-green-600 text-xl">✓</span>
                      <span className="text-gray-300">Strong communication presence</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-green-600 text-xl">✓</span>
                      <span className="text-gray-300">Technical leadership mindset</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h4 className="text-lg font-bold mb-3 text-gray-100">⭐ Preferred Location</h4>
                  <p className="text-gray-300">Americas or Europe timezone</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 scroll-mt-24">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-100">
              Ready to Join Us?
            </h2>
            <p className="text-gray-300 text-lg">
              Fill out the form below to submit your application. We look forward to hearing from you!
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Have Questions?</h2>
          <p className="text-xl mb-8 text-blue-50">
            Reach out to us directly at{" "}
            <a
              href="mailto:manager@axionvextech.com"
              className="underline hover:text-blue-100 font-semibold"
            >
              manager@axionvextech.com
            </a>
          </p>
          <p className="text-blue-100">We're happy to discuss the roles and answer any questions you may have.</p>
        </div>
      </section>

      {/* Footer */}
      <Footer page="recruiting" />
    </div>
  );
}

