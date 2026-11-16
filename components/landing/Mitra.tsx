import { BadgeCheck, FileCheck2, Smartphone } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { downloadHref } from "@/lib/config";

const steps = [
  {
    Icon: Smartphone,
    title: "Download & buat akun",
    text: "Daftar sebagai pelanggan di aplikasi INI Best Home. Satu akun untuk semua, tidak perlu akun terpisah.",
  },
  {
    Icon: FileCheck2,
    title: "Unggah dokumen",
    text: "Buka Profil › Daftar jadi Mitra. KTP dan foto diri wajib, SKCK dan sertifikat pijat opsional.",
  },
  {
    Icon: BadgeCheck,
    title: "Mulai terima pesanan",
    text: "Dokumen ditinjau dalam 1×24 jam. Setelah lolos verifikasi, Anda siap melayani pelanggan di sekitar Anda.",
  },
];

/** Section mitra lebar penuh: judul di tengah + 3 langkah (ikon, judul, teks) + satu tombol. */
export function Mitra() {
  return (
    <section id="mitra" className="cream sec-pad">
      <div className="wrap flex flex-col items-center gap-12 text-center lg:gap-14">
        <div className="reveal flex flex-col items-center gap-4" style={{ maxWidth: 760 }}>
          <SectionHeading
            tone="light"
            eyebrow="Jadi mitra terapis"
            title={<>Keahlian Anda, <em>pelanggan di sekitar Anda.</em></>}
            size="clamp(34px,4.6vw,54px)"
            gap={16}
          />
          <p className="muted-l" style={{ margin: 0, fontSize: 17 }}>
            Tiga langkah untuk mulai menerima pesanan pijat dari pelanggan INI Best Home.
          </p>
        </div>

        <ol className="m-0 grid w-full list-none gap-10 p-0 text-left md:grid-cols-3 md:gap-8">
          {steps.map(({ Icon, title, text }, i) => (
            <li key={title} className="reveal flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span
                  aria-hidden
                  className="flex shrink-0 items-center justify-center"
                  style={{ width: 56, height: 56, borderRadius: 16, background: "linear-gradient(135deg,#ECD394,#C9A052)", boxShadow: "0 12px 24px -12px rgba(164,122,46,.6)" }}
                >
                  <Icon size={26} className="text-ink" strokeWidth={1.8} />
                </span>
                <span aria-hidden className="serif italic" style={{ fontSize: 40, color: "var(--gold-mid)", lineHeight: 1 }}>
                  0{i + 1}
                </span>
              </div>
              <h3 className="serif" style={{ fontSize: 26 }}>
                <span className="sr-only">Langkah {i + 1}: </span>
                {title}
              </h3>
              <p className="muted-l" style={{ margin: 0, fontSize: 15.5 }}>
                {text}
              </p>
            </li>
          ))}
        </ol>

        <a className="btn-gold" href={downloadHref("mitra")} style={{ minHeight: 52, padding: "0 30px" }}>
          Download &amp; daftar jadi mitra
        </a>
      </div>
    </section>
  );
}
