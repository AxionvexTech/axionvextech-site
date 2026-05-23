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
          <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-cyan-400">
            {category}
          </span>
          <span className="text-[10px] text-white/60 font-medium border border-white/[0.07] rounded px-2 py-0.5">
            {timeline}
          </span>
        </div>

        <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
          {title}
        </h3>

        <p className="text-white/80 text-sm leading-relaxed mb-5 flex-1">
          {summary}
        </p>

        {/* Stack tags */}
        {stack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {stack.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-medium text-white/80 border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <p className="text-cyan-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
          Read case study →
        </p>
      </div>
    </Link>
  );
}
