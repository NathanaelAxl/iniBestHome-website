import type { Metadata } from "next";
import { DownloadCta } from "@/components/landing/DownloadCta";
import { Faq } from "@/components/landing/Faq";
import { FeatureShowcase } from "@/components/landing/FeatureShowcase";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Membership } from "@/components/landing/Membership";
import { Mitra } from "@/components/landing/Mitra";
import { Services } from "@/components/landing/Services";
import { TrustStrip } from "@/components/landing/TrustStrip";
import { MobileDownloadBar } from "@/components/landing/MobileDownloadBar";
import { LandingFooter } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { faqs } from "@/content/landing";
import { APP_NAME, APP_STORE_URL, COMPANY, PLAY_STORE_URL, SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: { absolute: `${APP_NAME} — Pijat Profesional Datang ke Rumah` },
  description:
    "Pijat profesional datang ke rumah Anda. Pilih layanan, pilih terapis, tentukan jadwal. Terapis terverifikasi, rincian biaya terlihat sebelum membayar.",
  alternates: { canonical: "/" },
};

function JsonLd() {
  const isPlaceholder = (a: string) => a.startsWith("[");
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "MobileApplication",
      name: APP_NAME,
      operatingSystem: APP_STORE_URL ? "Android, iOS" : "Android",
      applicationCategory: "LifestyleApplication",
      description: metadata.description,
      installUrl: PLAY_STORE_URL,
      downloadUrl: [PLAY_STORE_URL, APP_STORE_URL].filter(Boolean),
      offers: { "@type": "Offer", price: "0", priceCurrency: "IDR" },
      publisher: { "@type": "Organization", name: COMPANY },
      // aggregateRating sengaja tidak diisi sampai ada rating store asli.
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: COMPANY,
      brand: APP_NAME,
      ...(SITE_URL ? { url: SITE_URL, logo: `${SITE_URL}/logo.png` } : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs
        .filter((f) => !isPlaceholder(f.a))
        .map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar
        homeHref="#top"
        label="Menu utama"
        links={[
          { href: "#layanan", label: "Layanan" },
          { href: "#fitur", label: "Fitur" },
          { href: "#member", label: "Member" },
          { href: "#mitra", label: "Jadi Mitra" },
          { href: "#bantuan", label: "Bantuan" },
        ]}
        cta={{ href: "#download", label: "Download" }}
      />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <FeatureShowcase />
        <HowItWorks />
        <Membership />
        <Mitra />
        <Faq />
        <DownloadCta />
      </main>
      <LandingFooter />
      <MobileDownloadBar />
    </>
  );
}
