import Image from "next/image";
import { Gift, MessagesSquare, ReceiptText, UserRoundCheck } from "lucide-react";
import type { ReactNode } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StoreButtons } from "@/components/ui/StoreButton";
import { ForumScreen } from "./ForumScreen";

/**
 * Gabungan 4 fitur (terapis, referral, harga, forum) dalam satu section bergaya kolase:
 * teks + tombol store di kiri, dua kolom layar app dalam bingkai berwarna di kanan
 * yang bergeser pelan berlawanan arah (CSS, berhenti jika reduced-motion).
 */

const points = [
  {
    Icon: UserRoundCheck,
    title: "Pilih terapis favorit",
    text: "Standard atau Pro, pria atau wanita, Anda yang pilih.",
  },
  {
    Icon: Gift,
    title: "Referral 10%",
    text: "10% dari tiap transaksi teman masuk ke Saldo Anda.",
  },
  {
    Icon: ReceiptText,
    title: "Harga transparan",
    text: "Total bayar terlihat sebelum konfirmasi, tanpa biaya kejutan.",
  },
  {
    Icon: MessagesSquare,
    title: "Komunitas wellness",
    text: "Berbagi cerita, tips, dan pengalaman di Forum.",
  },
];

type Screen = { frame: string; src?: string; alt: string; custom?: ReactNode };

const colA: Screen[] = [
  { frame: "frame-gold", src: "/screens/konfirmasi-pesanan.jpg", alt: "Layar konfirmasi pemesanan dengan pilihan gender terapis" },
  { frame: "frame-cream", src: "/screens/earnings.jpg", alt: "Layar Earnings dengan saldo dan kode referral" },
  { frame: "frame-bronze", src: "/screens/membership.jpg", alt: "Layar Membership dengan tier Bronze, Silver, Gold" },
];
const colB: Screen[] = [
  { frame: "frame-dark", src: "/screens/rincian-pembayaran.jpg", alt: "Layar rincian pembayaran sebelum konfirmasi" },
  { frame: "frame-sand", alt: "Layar Forum komunitas", custom: <ForumScreen /> },
  { frame: "frame-gold", src: "/screens/body-massage.jpg", alt: "Layar daftar layanan Body Massage" },
];

function Frame({ s, hidden }: { s: Screen; hidden?: boolean }) {
  return (
    <div className={`frame ${s.frame}`} aria-hidden={hidden || undefined}>
      <div className="frame-screen">
        {s.custom ?? <Image src={s.src!} alt={hidden ? "" : s.alt} fill sizes="252px" className="object-cover object-top" />}
      </div>
    </div>
  );
}

function Column({ items, reverse }: { items: Screen[]; reverse?: boolean }) {
  return (
    <div className="collage-col">
      <div className={`collage-track ${reverse ? "collage-track-rev" : ""}`}>
        {items.map((s, i) => (
          <Frame key={`a${i}`} s={s} />
        ))}
        {/* Duplikat untuk loop mulus (disembunyikan dari screen reader) */}
        {items.map((s, i) => (
          <Frame key={`b${i}`} s={s} hidden />
        ))}
      </div>
    </div>
  );
}

export function FeatureShowcase() {
  return (
    <section id="fitur" className="dark showcase relative overflow-hidden">
      <div className="wrap flex flex-wrap items-center" style={{ columnGap: 56 }}>
        <div className="reveal flex min-w-0 flex-col gap-6 showcase-text" style={{ flex: "1 1 420px" }}>
          <SectionHeading
            tone="dark"
            eyebrow="Fitur aplikasi"
            title={<>Satu aplikasi, <em>banyak kemudahan.</em></>}
            size="clamp(36px,4.8vw,58px)"
          />
          <ul className="m-0 grid list-none gap-5 p-0 sm:grid-cols-2">
            {points.map(({ Icon, title, text }) => (
              <li key={title} className="flex gap-3">
                <span
                  aria-hidden
                  className="flex shrink-0 items-center justify-center"
                  style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(224,194,122,.12)", border: "1px solid rgba(224,194,122,.3)" }}
                >
                  <Icon size={20} className="text-gold" />
                </span>
                <span className="flex flex-col" style={{ lineHeight: 1.45 }}>
                  <b style={{ fontSize: 16, color: "var(--cream)" }}>{title}</b>
                  <span className="muted-d" style={{ fontSize: 14.5 }}>
                    {text}
                  </span>
                </span>
              </li>
            ))}
          </ul>
          <div style={{ paddingTop: 4 }}>
            <StoreButtons position="features" />
          </div>
        </div>

        <div className="collage-wrap min-w-0" style={{ flex: "1 1 520px" }}>
          <div className="collage">
            <Column items={colA} />
            <Column items={colB} reverse />
          </div>
        </div>
      </div>
    </section>
  );
}
