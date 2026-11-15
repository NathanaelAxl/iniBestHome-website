import type { Metadata, Viewport } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import { MetaPixel } from "@/components/MetaPixel";
import { APP_NAME, SITE_URL } from "@/lib/config";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL || "http://localhost:3000"),
  title: {
    default: `${APP_NAME} — Pijat Profesional Datang ke Rumah`,
    template: `%s — ${APP_NAME}`,
  },
  description:
    "Pilih layanan, pilih terapis, tentukan jadwal. Terapis terverifikasi datang ke alamat Anda, dengan rincian biaya yang terlihat sebelum membayar.",
  applicationName: APP_NAME,
  openGraph: { siteName: APP_NAME, locale: "id_ID", type: "website" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#1A140E",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${playfair.variable} ${poppins.variable}`}>
      <body>
        {/* overflow-x: clip (bukan hidden) supaya lingkaran dekoratif terpotong tapi header & daftar isi tetap bisa sticky. */}
        <div className="w-full overflow-x-clip">{children}</div>
        <MetaPixel />
      </body>
    </html>
  );
}
