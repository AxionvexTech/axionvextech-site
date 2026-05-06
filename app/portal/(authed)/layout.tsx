import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getAuthedUser } from "../lib/auth-user";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "AxionvexTech Portal",
  robots: { index: false, follow: false },
};

const NAV = [
  { href: "/portal/dashboard", label: "Dashboard", need: "any" as const },
  { href: "/portal/hiring", label: "Hiring", need: "manager" as const },
  { href: "/portal/tasks", label: "Tasks", need: "any" as const },
  { href: "/portal/candidates", label: "Candidates", need: "worker" as const },
  { href: "/portal/submissions", label: "Submissions", need: "manager" as const },
];

export default async function PortalLayout({ children }: { children: React.ReactNode }) {
  const user = await getAuthedUser();

  // Middleware already redirects unauthenticated users. If we got here
  // without a user row, that means the session is valid but the DB row
  // is missing — kick back to login to run the bootstrap flow.
  if (!user) redirect("/portal/login");

  const canSee = (need: "any" | "manager" | "worker") => {
    if (need === "any") return true;
    if (need === "manager") return user.system_role === "manager" || user.system_role === "admin";
    if (need === "worker") return user.system_role !== "applicant";
    return false;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-mono text-sm">
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-6">
          <Link href="/portal/dashboard" className="font-semibold tracking-tight text-emerald-400">
            axv_portal
          </Link>
          <nav className="flex gap-4 text-slate-300">
            {NAV.filter((n) => canSee(n.need)).map((n) => (
              <Link key={n.href} href={n.href} className="hover:text-white">
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-3 text-xs text-slate-400">
            <span className="uppercase tracking-wider">{user.system_role}</span>
            <span className="text-slate-600">·</span>
            <span>{user.email}</span>
            <form action="/auth/signout" method="post">
              <button className="text-slate-300 hover:text-white" type="submit">
                logout
              </button>
            </form>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-8">{children}</main>
    </div>
  );
}
