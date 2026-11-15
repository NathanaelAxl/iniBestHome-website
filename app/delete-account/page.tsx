import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DataTable } from "@/components/legal/DataTable";
import { LegalHero } from "@/components/legal/LegalHero";
import { LegalFooter } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { RingAt } from "@/components/ui/Rings";
import { ChatIcon, CheckCircle, WarningIcon } from "@/components/ui/icons";
import { HOME_URL, WA, waLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "Penghapusan Akun",
  description:
    "Cara menghapus akun INI Best Home (PT Home Best Service) beserta data pribadi Anda: lewat aplikasi atau WhatsApp, data yang dihapus, dan linimasa prosesnya.",
  alternates: { canonical: "/delete-account" },
};

const WA_DELETE_MESSAGE =
  "Halo Best Home Services, saya ingin mengajukan penghapusan akun dan seluruh data pribadi saya.\n\nNama terdaftar: \nNomor WhatsApp terdaftar: \nAlasan (opsional): ";

const cardH2 = "clamp(30px,3.5vw,40px)";
const sideH2 = "clamp(28px,3.2vw,36px)";

function H2({ size, children }: { size: string; children: ReactNode }) {
  return (
    <h2 className="serif [&_em]:text-gold-deep [&_em]:italic" style={{ fontSize: size }}>
      {children}
    </h2>
  );
}

function Step({ n, title, caption, children }: { n: number; title: string; caption: string; children: ReactNode }) {
  return (
    // Subgrid: nomor, judul, mockup, dan caption sejajar antar-kolom walau judul ada yang 2 baris.
    <li
      className="grid justify-items-center text-center"
      style={{ gridRow: "span 4", gridTemplateRows: "subgrid", rowGap: 14, alignItems: "start" }}
    >
      <span
        aria-hidden
        className="flex items-center justify-center font-serif"
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: "linear-gradient(135deg,#ECD394,#A47A2E)",
          color: "var(--ink)",
          fontWeight: 700,
          fontSize: 20,
        }}
      >
        {n}
      </span>
      <h3 style={{ margin: 0, fontSize: 17, fontWeight: 600, alignSelf: "center" }}>
        <span className="sr-only">Langkah {n}: </span>
        {title}
      </h3>
      {children}
      <p style={{ fontSize: 13.5, color: "var(--muted-light)", maxWidth: 230, margin: 0 }}>{caption}</p>
    </li>
  );
}

/* Ilustrasi HTML langkah 3 & 4 — ganti dengan screenshot asli (lihat TODO.md). */
const mrow = "flex items-center gap-2.5 text-left";
const mrowStyle = {
  background: "#fff",
  border: "1px solid #EFE6D6",
  borderRadius: 12,
  padding: "10px 12px",
  fontSize: 11.5,
} as const;
const mico = { width: 24, height: 24, borderRadius: 7, background: "#F6EBD8", flexShrink: 0 } as const;
const bar = { height: 6, borderRadius: 3, background: "#E9E1D2" } as const;

function SettingsIllustration() {
  return (
    <PhoneMockup
      size="sm"
      screenStyle={{ padding: "22px 14px", display: "flex", flexDirection: "column", gap: 10 }}
    >
      <div role="img" aria-label="Ilustrasi halaman Pengaturan dengan menu Hapus Akun Permanen" className="contents">
        <div className="flex items-center gap-2.5" style={{ paddingBottom: 8 }}>
          <span style={{ width: 26, height: 26, borderRadius: 8, background: "#F6EBD8" }} />
          <b style={{ fontSize: 13 }}>Pengaturan</b>
        </div>
        {[60, 48, 55].map((w) => (
          <div key={w} className={mrow} style={mrowStyle}>
            <span style={mico} />
            <span style={{ ...bar, width: `${w}%` }} />
          </div>
        ))}
        <div className={mrow} style={{ ...mrowStyle, border: "1.5px solid var(--brick)", background: "#FBEFEB" }}>
          <span style={{ ...mico, background: "var(--brick)" }} />
          <b style={{ color: "var(--brick)" }}>Hapus Akun Permanen</b>
        </div>
        {/* Desain: #8C7F6E → digelapkan supaya lolos AA */}
        <span style={{ marginTop: "auto", fontSize: 10, color: "#786B5A" }}>
          Ilustrasi · ganti dengan screenshot asli
        </span>
      </div>
    </PhoneMockup>
  );
}

function ConfirmIllustration() {
  return (
    <PhoneMockup
      size="sm"
      screenStyle={{ background: "#8A8378", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}
    >
      <div
        role="img"
        aria-label="Ilustrasi dialog konfirmasi Hapus Akun dengan tombol Batal dan Ya, Hapus"
        className="flex w-full flex-col text-center"
        style={{ background: "#fff", borderRadius: 18, padding: "20px 16px", gap: 10 }}
      >
        <span
          className="mx-auto flex items-center justify-center"
          style={{ width: 40, height: 40, borderRadius: "50%", background: "#FBEFEB" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8E4A3A" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M12 7v6M12 17h.01" />
          </svg>
        </span>
        <b style={{ fontSize: 14 }}>Hapus Akun?</b>
        <span style={{ fontSize: 10.5, color: "var(--muted-light)", lineHeight: 1.5 }}>
          Akun dan seluruh data Anda akan dihapus permanen.
        </span>
        <span className="flex gap-2" style={{ paddingTop: 4 }}>
          <span className="flex-1" style={{ border: "1px solid #D9CDB6", borderRadius: 999, padding: "7px 0", fontSize: 11, fontWeight: 600 }}>
            Batal
          </span>
          <span className="flex-1" style={{ background: "var(--brick)", color: "#fff", borderRadius: 999, padding: "7px 0", fontSize: 11, fontWeight: 600 }}>
            Ya, Hapus
          </span>
        </span>
      </div>
    </PhoneMockup>
  );
}

const waSteps = [
  ["Kirim permintaan", "Lewat WhatsApp resmi, sertakan nama terdaftar, nomor WhatsApp terdaftar, dan alasan (opsional)."],
  ["Verifikasi identitas", "Tim memastikan Anda pemilik akun dan mungkin meminta detail tambahan."],
  ["Proses penghapusan", "Paling lama 30 hari sejak verifikasi. Selama itu data dinonaktifkan dan dijadwalkan untuk dihapus."],
  ["Konfirmasi selesai", "Dikirim lewat WhatsApp setelah data terhapus. Sejak itu data tidak bisa dipulihkan."],
] as const;

const timeline = [
  ["Hari 1", "Permintaan diterima."],
  ["Hari 1–3", "Verifikasi identitas."],
  ["Hari 3–30", "Penghapusan data."],
  ["Hari 30", "Konfirmasi dikirim. Data terhapus permanen."],
] as const;

function AltIcon({ children }: { children: ReactNode }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A47A2E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
      {children}
    </svg>
  );
}

const alternatives: { icon: ReactNode; text: string }[] = [
  {
    icon: <><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></>,
    text: "Nonaktifkan akun sementara tanpa menghapus data.",
  },
  { icon: <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />, text: "Minta ekspor data sebagai cadangan." },
  {
    icon: <><path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4z" /><path d="M4 4l16 16" /></>,
    text: "Ubah pengaturan privasi atau berhenti menerima promosi.",
  },
  { icon: <path d="M4 20h4L19 9l-4-4L4 16z" />, text: "Perbaiki data yang keliru daripada menghapusnya." },
];

export default function DeleteAccountPage() {
  return (
    <div className="legal">
      <Navbar
        homeHref={HOME_URL}
        label="Navigasi"
        links={[
          { href: "#tutorial", label: "Tutorial" },
          { href: "#ajukan", label: "Ajukan" },
          { href: "#linimasa", label: "Linimasa" },
          { href: "/privacy-policy", label: "Kebijakan Privasi" },
        ]}
      />
      <LegalHero
        eyebrow="Penghapusan akun & data"
        title={
          <>
            Penghapusan <span className="gi">Akun</span>
          </>
        }
        intro="Halaman ini menjelaskan cara meminta penghapusan permanen akun beserta seluruh data pribadi Anda di Best Home Services. Informasi terkait akun akan dihapus dan tidak dapat dipulihkan."
        meta="Diperbarui 27 September 2026 · PT Home Best Service"
      />

      <main style={{ padding: "clamp(40px,6vw,72px) 0 clamp(64px,8vw,96px)" }}>
        <div className="wrap flex flex-col" style={{ gap: 32 }}>
          {/* Peringatan */}
          <div
            role="note"
            className="flex items-start"
            style={{ background: "var(--brick)", color: "#fff", borderRadius: 20, padding: "22px 26px", gap: 18 }}
          >
            <WarningIcon size={28} className="shrink-0 text-white" style={{ marginTop: 2 }} />
            <div className="flex flex-col gap-1">
              <strong style={{ fontSize: 17 }}>Tindakan ini permanen dan tidak dapat dibatalkan</strong>
              <span style={{ fontSize: 15, color: "#F6E3DD" }}>
                Setelah data dihapus, Anda kehilangan akses ke akun dan semua informasinya. Simpan data yang masih
                Anda butuhkan sebelum melanjutkan.
              </span>
            </div>
          </div>

          {/* 1 Data yang dihapus */}
          <section className="card flex flex-col" style={{ gap: 22, background: "#fff", borderColor: "var(--line-2)", padding: "clamp(24px,3.5vw,40px)" }}>
            <H2 size={cardH2}>
              Data yang <em>akan dihapus</em>
            </H2>
            <p className="muted-l" style={{ margin: 0, fontSize: 15.5 }}>
              Setelah permintaan diverifikasi, empat kelompok data berikut dihapus permanen:
            </p>
            <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
              {[
                ["Informasi pribadi", "Nama, nomor WhatsApp, jenis kelamin, profil, dan alamat termasuk kecamatan."],
                ["Data pemesanan", "Riwayat layanan Massage dan Nails, jadwal dan lokasi, catatan serta preferensi terapis."],
                ["Data komunikasi", "Riwayat WhatsApp dan chatbot, pengaturan akun, dan konten tersimpan."],
                ["Data teknis", "Informasi perangkat dan sesi, log aktivitas, statistik pemakaian, dan data autentikasi Firebase."],
              ].map(([b, t]) => (
                <div key={b} className="grp">
                  <b>{b}</b>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 2 Tutorial */}
          <section id="tutorial" className="card flex flex-col" style={{ gap: 34, background: "#fff", borderColor: "var(--line-2)", padding: "clamp(24px,3.5vw,40px)" }}>
            <div className="flex flex-col gap-2.5">
              <H2 size={cardH2}>
                Tutorial hapus akun <em>via aplikasi</em>
              </H2>
              <p className="muted-l" style={{ margin: 0, fontSize: 15.5 }}>
                Empat langkah untuk menghapus akun langsung dari aplikasi.
              </p>
            </div>
            <ol
              className="m-0 grid list-none p-0"
              style={{ gap: "36px 24px", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))" }}
            >
              <Step n={1} title="Buka tab Profil" caption="Pastikan Anda sudah login, lalu ketuk ikon Profil di navigasi bawah kanan.">
                <PhoneMockup size="sm" src="/screens/profil.jpg" alt="Halaman Profil aplikasi" />
              </Step>
              <Step n={2} title="Buka Pengaturan" caption="Gulir melewati info pribadi dan alamat, lalu ketuk Pengaturan di bagian Lainnya.">
                <PhoneMockup
                  size="sm"
                  src="/screens/profil-lainnya.jpg"
                  alt="Bagian Lainnya di halaman Profil dengan menu Pengaturan"
                />
              </Step>
              <Step n={3} title="Ketuk Hapus Akun Permanen" caption="Di halaman Pengaturan, cari dan ketuk menu Hapus Akun Permanen.">
                <SettingsIllustration />
              </Step>
              <Step n={4} title="Konfirmasi penghapusan" caption="Baca peringatan di dialog Hapus Akun?, lalu ketuk Ya, Hapus.">
                <ConfirmIllustration />
              </Step>
            </ol>
            <div className="flex items-center" style={{ gap: 14, background: "var(--sand)", borderRadius: 16, padding: "16px 20px" }}>
              <CheckCircle size={24} className="shrink-0 text-gold-text" />
              <p style={{ margin: 0, fontSize: 15 }}>
                Dialog <b>Akun Terhapus</b> akan muncul. Ketuk <b>Lanjutkan</b> untuk kembali ke halaman login.
                Penghapusan selesai dan bersifat permanen.
              </p>
            </div>
          </section>

          {/* 3 Ajukan via WA */}
          <section
            id="ajukan"
            className="dark relative flex flex-col overflow-hidden"
            style={{ borderRadius: 28, padding: "clamp(28px,4vw,52px)", gap: 30 }}
          >
            <RingAt size={420} style={{ right: -140, top: -160 }} />
            <div className="relative flex flex-col gap-2.5" style={{ maxWidth: 660 }}>
              <h2 className="serif" style={{ fontSize: cardH2, color: "var(--cream)" }}>
                Cara mengajukan <span className="gi">penghapusan</span>
              </h2>
              <p className="muted-d" style={{ margin: 0, fontSize: 15.5 }}>
                Gunakan cara ini jika tidak bisa menghapus dari aplikasi, misalnya karena lupa password atau kendala
                teknis.
              </p>
            </div>
            <ol
              className="relative m-0 grid list-none gap-5 p-0"
              style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}
            >
              {waSteps.map(([b, t], i) => (
                <li key={b} className="flex flex-col gap-2" style={{ borderTop: "1px solid rgba(224,194,122,.4)", paddingTop: 16 }}>
                  <span aria-hidden className="serif italic" style={{ fontSize: 32, color: "var(--gold)" }}>
                    {i + 1}
                  </span>
                  <b>{b}</b>
                  <span className="muted-d" style={{ fontSize: 14.5 }}>
                    {t}
                  </span>
                </li>
              ))}
            </ol>
            <div className="relative flex flex-wrap items-center gap-6">
              <div
                className="min-w-0"
                style={{ flex: "1 1 380px", background: "#FFFCF6", color: "var(--ink)", borderRadius: 18, padding: "20px 22px", fontSize: 14.5, lineHeight: 1.8 }}
              >
                Halo Best Home Services, saya ingin mengajukan penghapusan akun dan seluruh data pribadi saya.
                <br />
                <b>Nama terdaftar:</b> …
                <br />
                <b>Nomor WhatsApp terdaftar:</b> …
                <br />
                <b>Alasan (opsional):</b> …
              </div>
              <div className="flex flex-col gap-3" style={{ flex: "0 1 300px" }}>
                <span style={{ fontSize: 13, color: "var(--gold)", fontWeight: 600 }}>
                  Pengajuan cepat · pesan sudah terisi
                </span>
                <a className="btn-gold" style={{ minHeight: 52 }} href={waLink(WA.massage.number, WA_DELETE_MESSAGE)}>
                  <ChatIcon size={20} className="text-ink" />
                  Ajukan via WA Massage
                </a>
                <a className="btn-line" href={waLink(WA.nails.number, WA_DELETE_MESSAGE)}>
                  Ajukan via WA Nails
                </a>
              </div>
            </div>
          </section>

          {/* 4 Linimasa + 5 Alternatif */}
          <div className="flex flex-wrap gap-6">
            <section
              id="linimasa"
              className="card flex min-w-0 flex-col gap-6"
              style={{ flex: "1 1 440px", background: "#fff", borderColor: "var(--line-2)", padding: "clamp(24px,3.5vw,40px)" }}
            >
              <H2 size={sideH2}>
                Linimasa <em>proses</em>
              </H2>
              <ol className="relative m-0 list-none p-0">
                {timeline.map(([day, text], i) => {
                  const first = i === 0;
                  const last = i === timeline.length - 1;
                  return (
                    <li key={day} className="relative flex" style={{ gap: 22, paddingBottom: last ? 0 : 30 }}>
                      {!last && (
                        <span
                          aria-hidden
                          className="absolute"
                          style={{ left: 8, top: 22, bottom: 0, width: 2, background: "var(--line)" }}
                        />
                      )}
                      <span
                        aria-hidden
                        className="relative z-[1] shrink-0"
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: "50%",
                          marginTop: 4,
                          border: `2px solid ${last ? "var(--brick)" : "var(--gold-deep)"}`,
                          background: last ? "var(--brick)" : first ? "var(--gold-deep)" : "#fff",
                        }}
                      />
                      <div className="flex flex-col" style={{ gap: 2 }}>
                        <strong style={{ fontSize: 16 }}>{day}</strong>
                        <span className="muted-l" style={{ fontSize: 15 }}>
                          {text}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </section>

            <section
              className="card flex min-w-0 flex-col gap-5"
              style={{ flex: "1 1 440px", background: "#fff", borderColor: "var(--line-2)", padding: "clamp(24px,3.5vw,40px)" }}
            >
              <H2 size={sideH2}>
                Alternatif <em>sebelum menghapus</em>
              </H2>
              <ul className="m-0 flex list-none flex-col gap-3 p-0">
                {alternatives.map(({ icon, text }) => (
                  <li key={text} className="grp" style={{ flexDirection: "row", alignItems: "center", gap: 14 }}>
                    <AltIcon>{icon}</AltIcon>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* 6 Hak & retensi */}
          <section
            className="card flex flex-wrap"
            style={{ gap: 36, background: "#fff", borderColor: "var(--line-2)", padding: "clamp(24px,3.5vw,40px)" }}
          >
            <div className="flex min-w-0 flex-col gap-4" style={{ flex: "1 1 300px" }}>
              <H2 size={sideH2}>
                Hak <em>Anda</em>
              </H2>
              <ul
                className="m-0 flex list-disc flex-col gap-2"
                style={{ paddingLeft: 20, fontSize: 15, color: "var(--body-light)" }}
              >
                <li>Hak penghapusan akun dan data pribadi.</li>
                <li>Hak portabilitas: mendapatkan salinan data sebelum dihapus.</li>
                <li>Hak menarik persetujuan kapan saja.</li>
                <li>Hak akses dan koreksi data.</li>
              </ul>
            </div>
            <div className="flex min-w-0 flex-col gap-4" style={{ flex: "2 1 460px" }}>
              <H2 size={sideH2}>
                Retensi <em>setelah penghapusan</em>
              </H2>
              <DataTable
                head={["Jenis data", "Perlakuan"]}
                rows={[
                  ["Profil dan preferensi", "Dihapus permanen dalam 30 hari"],
                  ["Riwayat WhatsApp", "Dihapus permanen dalam 30 hari"],
                  ["Catatan transaksi (kewajiban hukum)", "Disimpan dan dianonimkan"],
                  ["Data analitik agregat", "Tidak terkait identitas Anda"],
                ]}
              />
              <p className="muted-l" style={{ margin: 0, fontSize: 14 }}>
                Proses ini mengikuti persyaratan Google Play dan peraturan perlindungan data pribadi di Indonesia.
                Detail lengkap ada di <a href="/privacy-policy">Kebijakan Privasi</a>.
              </p>
            </div>
          </section>

          {/* 7 Kontak */}
          <section aria-label="Kontak WhatsApp" className="grid gap-[14px]" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            {([
              ["WhatsApp Massage", WA.massage],
              ["WhatsApp Nails", WA.nails],
            ] as const).map(([label, wa]) => (
              <a
                key={label}
                href={waLink(wa.number)}
                className="flex flex-col no-underline"
                style={{ gap: 2, background: "var(--ink)", color: "var(--cream)", borderRadius: 18, padding: "20px 24px" }}
              >
                <span style={{ fontSize: 13, color: "var(--gold)" }}>{label}</span>
                <b style={{ fontSize: 20 }}>{wa.label}</b>
                <span style={{ fontSize: 13, color: "var(--muted-dark)" }}>Respons 1×24 jam pada hari kerja</span>
              </a>
            ))}
          </section>
        </div>
      </main>

      <LegalFooter
        note="© 2026 PT Home Best Service · Penghapusan bersifat permanen setelah diproses."
        links={[
          { href: HOME_URL, label: "Beranda" },
          { href: "/privacy-policy", label: "Kebijakan Privasi" },
          { href: "#ajukan", label: "Ajukan Penghapusan" },
        ]}
      />
    </div>
  );
}
