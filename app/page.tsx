import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | AxionvexTech",
  description: "AxionvexTech - Global technical consulting and web development. 100+ clients served, 500+ projects completed with 99.9% uptime.",
  alternates: {
    canonical: "https://axionvextech.com",
  },
};

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AxionvexTech",
    url: "https://axionvextech.com",
    logo: "https://axionvextech.com/logo.png",
    description: "Global technical consulting and web development company",
    sameAs: [
      "https://www.linkedin.com/company/axionvextech",
      "https://twitter.com/axionvextech",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-contact",
      contactType: "Customer Service",
      email: "contact@axionvextech.com",
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image 
              src="/logo.png" 
              alt="AxionvexTech Logo" 
              width={40} 
              height={40}
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">AxionvexTech</span>
          </div>
          <div className="hidden md:flex gap-8 text-gray-700 dark:text-gray-300">
            <a href="#services" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Services</a>
            <a href="#why" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Why Us</a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Transform Your Digital Future
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Global technical consulting and cutting-edge web development solutions for modern enterprises
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href="mailto:contact@axionvextech.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Get Started
            </a>
            <a 
              href="#services"
              className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Our Services
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="w-12 h-12 bg-blue-600 rounded-lg mb-6"></div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Web Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Modern, scalable web applications built with cutting-edge technologies and best practices.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="w-12 h-12 bg-green-600 rounded-lg mb-6"></div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Technical Consulting</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Expert guidance on architecture, strategy, and technology decisions for your enterprise.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="w-12 h-12 bg-purple-600 rounded-lg mb-6"></div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Cloud Solutions</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Migrate, optimize, and manage your infrastructure on leading cloud platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Why Choose AxionvexTech?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Expert Team</h4>
                    <p className="text-gray-600 dark:text-gray-400">Decades of combined experience in technology and consulting</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">24/7 Support</h4>
                    <p className="text-gray-600 dark:text-gray-400">Round-the-clock support for your peace of mind</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Proven Track Record</h4>
                    <p className="text-gray-600 dark:text-gray-400">Trusted by 100+ enterprise clients worldwide</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Agile Approach</h4>
                    <p className="text-gray-600 dark:text-gray-400">Flexible methodologies that adapt to your needs</p>
                  </div>
                </li>
              </ul>
            </div>
            <div 
              className="rounded-xl overflow-hidden shadow-lg h-96"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <p className="text-blue-100">Clients Served</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-blue-100">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <p className="text-blue-100">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <p className="text-blue-100">Uptime SLA</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Let's discuss how AxionvexTech can help you achieve your digital transformation goals.
          </p>
          <a 
            href="mailto:contact@axionvextech.com"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-lg font-semibold text-lg transition"
          >
            Contact Us Today
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">AxionvexTech</h4>
              <p>Global technical consulting and web development solutions.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-white transition">Web Development</a></li>
                <li><a href="#services" className="hover:text-white transition">Consulting</a></li>
                <li><a href="#services" className="hover:text-white transition">Cloud Solutions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:contact@axionvextech.com" className="hover:text-white transition">contact@axionvextech.com</a></li>
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
