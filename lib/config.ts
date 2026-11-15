/**
 * Konfigurasi situs — SATU sumber untuk link store, nomor WA, dan ID tracking.
 * Nilai yang masih kosong dicatat di TODO.md.
 */

export const APP_NAME = "INI Best Home";
export const COMPANY = "PT Home Best Service";

/** URL utama situs (tanpa slash di akhir). Domain belum ditentukan → isi lewat env. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/\/$/, "");

export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.jostarapp.bmsgym";

// TODO: ganti link App Store. Selama kosong, pengguna iOS diarahkan ke /#download.
export const APP_STORE_URL = "";

export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";

/** Domain produksi halaman legal (lihat proxy.ts). */
export const PRIVACY_HOST = "privacypolicy.besthomeservice.id";
export const DELETE_ACCOUNT_HOST = "deleteaccount.privacypolicy.besthomeservice.id";

export const WA = {
  massage: { number: "6287813263066", label: "0878-1326-3066" },
  nails: { number: "6287775977653", label: "0877-7597-7653" },
} as const;

export function waLink(number: string, text?: string) {
  return `https://wa.me/${number}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
}

export type DownloadPosition = "hero" | "services" | "mitra" | "cta" | "sticky" | "footer";
export type Store = "play" | "appstore";

/** Semua tombol download lewat /download (app/download/route.ts) supaya UTM tercatat. */
export function downloadHref(position: DownloadPosition, store?: Store) {
  const q = new URLSearchParams({ utm_content: position });
  if (store) q.set("store", store);
  return `/download?${q.toString()}`;
}

/** Link ke landing dari halaman legal (bisa dibuka di subdomain lain). */
export const HOME_URL = SITE_URL ? `${SITE_URL}/` : "/";
