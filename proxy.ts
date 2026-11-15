import { type NextRequest, NextResponse } from "next/server";
import { DELETE_ACCOUNT_HOST, PRIVACY_HOST } from "@/lib/config";

/**
 * Subdomain legal → route masing-masing (Next 16: middleware.ts sekarang bernama proxy.ts).
 *   privacypolicy.besthomeservice.id/                    → /privacy-policy
 *   deleteaccount.privacypolicy.besthomeservice.id/      → /delete-account
 * Hanya path "/" yang di-rewrite; path lain (aset, /privacy-policy, dll.) tetap normal.
 */
const HOST_ROUTES: Record<string, string> = {
  [PRIVACY_HOST]: "/privacy-policy",
  [`www.${PRIVACY_HOST}`]: "/privacy-policy",
  [DELETE_ACCOUNT_HOST]: "/delete-account",
};

export function proxy(request: NextRequest) {
  const host = (request.headers.get("host") ?? "").split(":")[0].toLowerCase();
  const route = HOST_ROUTES[host];
  if (route) {
    return NextResponse.rewrite(new URL(route, request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
