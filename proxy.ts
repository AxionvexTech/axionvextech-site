import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

/**
 * Proxy (Next 16 replacement for middleware) for AxionvexTech:
 *   1. If the request host matches PORTAL_HOST, rewrite to /portal/*
 *      so the portal lives on its own subdomain.
 *   2. For any /portal/* path, refresh the Supabase session cookie
 *      and redirect to /portal/login when there's no session.
 *
 * Cookie scope is set to `.axionvextech.com` so the same session works
 * on both the main site and the portal subdomain.
 */

const PORTAL_HOST = process.env.PORTAL_HOST;
const PUBLIC_PORTAL_PATHS = ["/portal/login", "/portal/invite", "/auth/callback"];

export async function proxy(request: NextRequest) {
  const url = request.nextUrl;
  const host = request.headers.get("host") ?? "";

  // ─── Subdomain rewrite: portal.axionvextech.com → /portal ───
  const onPortalHost =
    PORTAL_HOST &&
    (host === PORTAL_HOST || host.startsWith(`${PORTAL_HOST}:`));

  if (onPortalHost && !url.pathname.startsWith("/portal") && !url.pathname.startsWith("/auth")) {
    const rewriteUrl = url.clone();
    rewriteUrl.pathname = `/portal${url.pathname === "/" ? "" : url.pathname}`;
    return NextResponse.rewrite(rewriteUrl);
  }

  // ─── Only auth-gate portal paths ──────────────────────────────
  const isPortalPath =
    url.pathname.startsWith("/portal") || (onPortalHost && url.pathname !== "/");
  if (!isPortalPath) return NextResponse.next();

  // Public portal routes (login, invite-accept, auth callback) skip auth gate.
  const isPublicPortalPath = PUBLIC_PORTAL_PATHS.some((p) =>
    url.pathname.startsWith(p)
  );

  const response = NextResponse.next({ request });

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !anonKey) {
    // Supabase not configured yet — allow through so developer can set env vars.
    return response;
  }

  const supabase = createServerClient(supabaseUrl, anonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) =>
          response.cookies.set(name, value, options)
        );
      },
    },
  });

  const { data } = await supabase.auth.getUser();

  if (!data.user && !isPublicPortalPath) {
    const loginUrl = url.clone();
    loginUrl.pathname = "/portal/login";
    loginUrl.searchParams.set("next", url.pathname + url.search);
    return NextResponse.redirect(loginUrl);
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.svg|apple-icon.png|.*\\.(?:svg|png|jpg|jpeg|webp|gif|ico|txt|xml|json)$).*)",
  ],
};
