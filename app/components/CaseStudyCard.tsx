import Link from "next/link";
import DashboardMockup from "./DashboardMockup";

interface CaseStudyCardProps {
  slug: string;
  category: string;
  categoryColor?: string;
  title: string;
  summary: string;
  stack: string[];
  timeline: string;
  mockup: "saas" | "ops" | "cloud";
  accent?: string;
}

export default function CaseStudyCard({
  slug,
  category,
  title,
  summary,
  stack,
  timeline,
  mockup,
}: CaseStudyCardProps) {
  return (
    <Link
      href={`/work/${slug}`}
      className="glass-card group flex flex-col overflow-hidden block"
    >
      {/* Dashboard mockup */}
      <div className="p-4 pb-0 bg-white/[0.01]">
        <DashboardMockup variant={mockup} />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#38BDF8]">
            {category}
          </span>
          <span className="text-[10px] text-[#64748B] font-medium border border-white/[0.07] rounded px-2 py-0.5">
            {timeline}
          </span>
        </div>

        <h3 className="text-base font-bold text-[#F8FAFC] mb-2 leading-snug group-hover:text-[#38BDF8] transition-colors">
          {title}
        </h3>

        <p className="text-[#CBD5E1] text-sm leading-relaxed mb-5 flex-1">
          {summary}
        </p>

        {/* Stack tags */}
        {stack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {stack.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-medium text-[#94A3B8] border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <p className="text-[#38BDF8] text-sm font-semibold group-hover:translate-x-1 transition-transform">
          Read case study →
        </p>
      </div>
    </Link>
  );
}
