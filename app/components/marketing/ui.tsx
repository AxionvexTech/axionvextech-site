import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "dark-primary" | "dark-secondary" | "text";

const variantClass: Record<Variant, string> = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
  "dark-primary": "btn btn-dark-primary",
  "dark-secondary": "btn btn-dark-secondary",
  text: "btn btn-text",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
}) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const cls = `${variantClass[variant]} ${className}`.trim();

  if (isExternal) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} onClick={onClick}>
      {children}
    </Link>
  );
}

export function Section({
  children,
  className = "",
  dark = false,
  id,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`section-avx ${dark ? "bg-ink-950 text-white" : ""} ${className}`}
    >
      <div className="container-avx">{children}</div>
    </section>
  );
}

export function Eyebrow({
  children,
  onDark = false,
}: {
  children: ReactNode;
  onDark?: boolean;
}) {
  return <p className={`eyebrow ${onDark ? "eyebrow-on-dark" : ""} mb-3`}>{children}</p>;
}

export function SectionHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-3xl md:text-4xl font-semibold tracking-tight text-balance leading-[1.15] ${className}`}
    >
      {children}
    </h2>
  );
}

export function PageHero({
  eyebrow,
  title,
  body,
  actions,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  actions?: ReactNode;
  dark?: boolean;
}) {
  return (
    <Section dark={dark} className={dark ? "" : "bg-paper-50"}>
      <div className="max-w-3xl">
        {eyebrow ? <Eyebrow onDark={dark}>{eyebrow}</Eyebrow> : null}
        <h1
          className={`text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-tight leading-[1.08] text-balance ${
            dark ? "text-white" : "text-ink-950"
          }`}
        >
          {title}
        </h1>
        {body ? (
          <p
            className={`mt-5 text-lg leading-relaxed prose-measure ${
              dark ? "text-slate-300" : "text-[var(--text-body)]"
            }`}
          >
            {body}
          </p>
        ) : null}
        {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </Section>
  );
}
