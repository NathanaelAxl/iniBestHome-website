import { type NextRequest, NextResponse } from "next/server";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/config";

/**
 * /download?utm_content=<posisi>[&store=play|appstore]
 *  - store=play / Android      → Play Store (+ referrer UTM)
 *  - store=appstore / iOS      → App Store (+ ct=<posisi>), atau /#download selama link belum ada
 *  - lainnya (desktop)         → /#download (section CTA dengan QR code)
 */
export function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const position = (searchParams.get("utm_content") ?? "unknown").slice(0, 40);
  const store = searchParams.get("store");
  const ua = request.headers.get("user-agent") ?? "";

  const isAndroid = /android/i.test(ua);
  const isIOS = /iphone|ipad|ipod/i.test(ua);
  const target = store === "play" || store === "appstore" ? store : isAndroid ? "play" : isIOS ? "appstore" : null;

  let location: string;
  if (target === "play") {
    const referrer = new URLSearchParams({
      utm_source: "website",
      utm_medium: "landing",
      utm_content: position,
    }).toString();
    const url = new URL(PLAY_STORE_URL);
    url.searchParams.set("referrer", referrer);
    location = url.toString();
  } else if (target === "appstore" && APP_STORE_URL) {
    const url = new URL(APP_STORE_URL);
    url.searchParams.set("ct", position);
    location = url.toString();
  } else {
    location = new URL("/#download", request.url).toString();
  }

  return NextResponse.redirect(location, { status: 302, headers: { "Cache-Control": "no-store" } });
}
