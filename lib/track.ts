/**
 * Helper tracking — satu pintu untuk Meta Pixel (nanti bisa disambungkan ke Conversions API).
 * Aman dipanggil walau Pixel tidak dimuat.
 */
type Fbq = (cmd: "track" | "trackCustom", event: string, params?: Record<string, unknown>) => void;

export function track(event: string, params?: Record<string, unknown>, custom = false) {
  if (typeof window === "undefined") return;
  const fbq = (window as unknown as { fbq?: Fbq }).fbq;
  if (!fbq) return;
  fbq(custom ? "trackCustom" : "track", event, params);
}

export function detectPlatform(): "android" | "ios" | "desktop" {
  if (typeof navigator === "undefined") return "desktop";
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) return "android";
  if (/iphone|ipad|ipod/i.test(ua) || (/macintosh/i.test(ua) && navigator.maxTouchPoints > 1)) {
    return "ios";
  }
  return "desktop";
}
