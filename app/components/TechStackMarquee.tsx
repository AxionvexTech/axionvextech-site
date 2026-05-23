import Image from "next/image";

const row1 = [
  { name: "Next.js",    slug: "nextdotjs" },
  { name: "React",      slug: "react" },
  { name: "Node.js",    slug: "nodedotjs" },
  { name: "Python",     slug: "python" },
  { name: "FastAPI",    slug: "fastapi" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "AWS",        slug: "amazonwebservices" },
  { name: "Docker",     slug: "docker" },
  { name: "Redis",      slug: "redis" },
  { name: "Stripe",     slug: "stripe" },
];

const row2 = [
  { name: "OpenAI",      slug: "openai" },
  { name: "Anthropic",   slug: "anthropic" },
  { name: "Supabase",    slug: "supabase" },
  { name: "Vercel",      slug: "vercel" },
  { name: "Cloudflare",  slug: "cloudflare" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "TypeScript",  slug: "typescript" },
  { name: "Terraform",   slug: "terraform" },
  { name: "GitHub",      slug: "github" },
  { name: "GraphQL",     slug: "graphql" },
];

function TechBadge({ name, slug }: { name: string; slug: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/[0.08] bg-white/[0.04] mx-2 flex-shrink-0">
      <Image
        src={`https://cdn.simpleicons.org/${slug}`}
        alt={name}
        width={16}
        height={16}
        className="w-4 h-4 opacity-60 brightness-0 invert"
        unoptimized
      />
      <span className="text-xs text-slate-400 font-medium whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export default function TechStackMarquee() {
  return (
    <div className="relative overflow-hidden py-2">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />

      <div className="avx-marquee mb-3">
        {[...row1, ...row1].map((tech, i) => (
          <TechBadge key={`r1-${i}`} {...tech} />
        ))}
      </div>

      <div className="avx-marquee-reverse">
        {[...row2, ...row2].map((tech, i) => (
          <TechBadge key={`r2-${i}`} {...tech} />
        ))}
      </div>
    </div>
  );
}
