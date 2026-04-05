import Link from "next/link";
import DashboardMockup from "./DashboardMockup";

interface CaseStudyCardProps {
  slug: string;
  category: string;
  categoryColor: string;
  title: string;
  summary: string;
  stack: string[];
  timeline: string;
  mockup: "saas" | "ops" | "cloud";
  accent: string;
}

export default function CaseStudyCard({
  slug,
  category,
  categoryColor,
  title,
  summary,
  stack,
  timeline,
  mockup,
  accent,
}: CaseStudyCardProps) {
  return (
    <Link
      href={`/work/${slug}`}
      className={`group bg-white rounded-xl border border-slate-200 border-t-2 ${accent} overflow-hidden hover:shadow-lg transition-shadow block`}
    >
      {/* Visual */}
      <div className="p-4 pb-0">
        <DashboardMockup variant={mockup} />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <p
            className={`text-xs font-bold tracking-[0.15em] uppercase ${categoryColor}`}
          >
            {category}
          </p>
          <span className="text-[11px] text-slate-400 font-medium">
            {timeline}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
          {title}
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed mb-5">
          {summary}
        </p>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {stack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-medium text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-blue-600 text-sm font-semibold group-hover:translate-x-1 transition-transform">
          Read case study →
        </p>
      </div>
    </Link>
  );
}
