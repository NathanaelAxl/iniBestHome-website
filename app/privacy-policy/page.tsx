import type { Metadata } from "next";
import { DataTable } from "@/components/legal/DataTable";
import { LegalHero } from "@/components/legal/LegalHero";
import { PolicySection, SectionIcon } from "@/components/legal/PolicySection";
import { LegalFooter } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ChevronDown } from "@/components/ui/icons";
import { HOME_URL, WA, waLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description:
    "Kebijakan Privasi INI Best Home oleh PT Home Best Service: data yang kami kumpulkan, cara penggunaannya, dan hak Anda atas data pribadi.",
  alternates: { canonical: "/privacy-policy" },
};

const toc = [
  ["s1", "Informasi Umum"],
  ["s2", "Data yang Dikumpulkan"],
  ["s3", "Penggunaan Data"],
  ["s4", "Keamanan & Penyimpanan"],
  ["s5", "Berbagi Data"],
  ["s6", "Hak Pengguna"],
  ["s7", "Retensi Data"],
  ["s8", "Perubahan Kebijakan"],
  ["s9", "Hubungi Kami"],
] as const;

function Use({ items }: { items: [string, React.ReactNode][] }) {
  return (
    <div className="use">
      {items.map(([b, t]) => (
        <div key={b}>
          <b>{b}</b>
          {t}
        </div>
      ))}
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <div className="legal">
      <Navbar
        homeHref={HOME_URL}
        label="Navigasi"
        links={[
          { href: "#s1", label: "Informasi Umum" },
          { href: "#s2", label: "Data" },
          { href: "#s3", label: "Penggunaan" },
          { href: "#s6", label: "Hak Anda" },
          { href: "#s9", label: "Kontak" },
        ]}
      />
      <LegalHero
        eyebrow="Privasi & perlindungan data"
        title={
          <>
            Kebijakan <span className="gi">Privasi</span>
          </>
        }
        intro="Saat menggunakan layanan kami, Anda mempercayakan informasi pribadi Anda kepada kami. Halaman ini menjelaskan data apa yang kami kumpulkan, mengapa kami mengumpulkannya, dan bagaimana Anda dapat meninjau, mengatur, serta menghapusnya."
        meta="Terakhir diperbarui 13 Juni 2026 · PT Home Best Service"
      />

      <main style={{ padding: "clamp(40px,6vw,72px) 0 clamp(64px,8vw,96px)" }}>
        <div className="wrap flex flex-wrap items-start" style={{ gap: 40 }}>
          <aside className="min-w-0" style={{ flex: "1 1 260px" }}>
            <details
              open
              style={{ background: "#fff", border: "1px solid var(--line-2)", borderRadius: 22, padding: "22px 26px" }}
            >
              <summary
                className="flex items-center justify-between"
                style={{ fontWeight: 600, fontSize: 15, paddingBottom: 8 }}
              >
                Daftar isi
                <ChevronDown size={18} className="chev text-gold-deep" />
              </summary>
              <nav className="toc flex flex-col" aria-label="Daftar isi">
                {toc.map(([id, label], i) => (
                  <a key={id} href={`#${id}`}>
                    <span>{i + 1}</span>
                    {label}
                  </a>
                ))}
              </nav>
            </details>
          </aside>

          <div className="flex min-w-0 flex-col" style={{ flex: "999 1 560px", gap: 18 }}>
            <PolicySection
              id="s1"
              title="1. Informasi Umum"
              icon={
                <SectionIcon>
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 11v6M12 7.5h.01" />
                </SectionIcon>
              }
            >
              <ul>
                <li>
                  Kebijakan ini berlaku untuk seluruh layanan Best Home Services milik PT Home Best Service, yaitu
                  layanan Massage dan Nails yang bisa dipesan melalui WhatsApp maupun aplikasi mobile.
                </li>
                <li>
                  Dengan menggunakan layanan kami melalui WhatsApp, chatbot, atau aplikasi, Anda menyetujui
                  pengumpulan dan penggunaan data sesuai kebijakan ini.
                </li>
                <li>
                  Kebijakan ini dapat diperbarui sewaktu-waktu. Perubahan signifikan akan diberitahukan melalui
                  WhatsApp atau notifikasi aplikasi.
                </li>
              </ul>
            </PolicySection>

            <PolicySection
              id="s2"
              title="2. Data yang Dikumpulkan"
              icon={
                <SectionIcon>
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" />
                </SectionIcon>
              }
            >
              <p>Kami hanya mengumpulkan data yang dibutuhkan untuk menjalankan layanan home service.</p>
              <Use
                items={[
                  [
                    "Data identitas",
                    "Disimpan di profil pelanggan: nama lengkap, nomor WhatsApp, jenis kelamin, dan alamat lengkap termasuk area atau kecamatan.",
                  ],
                  [
                    "Data pemesanan",
                    "Per transaksi: jenis layanan (Massage atau Nails), tanggal dan waktu layanan, alamat lokasi layanan, serta catatan atau permintaan khusus.",
                  ],
                  [
                    "Preferensi & komunikasi",
                    "Preferensi terapis atau nail artist, catatan kondisi khusus (misalnya alergi atau kondisi fisik), dan riwayat percakapan dengan admin dan/atau chatbot di WhatsApp.",
                  ],
                  ["Data transaksi", "Nominal dan metode pembayaran, status pembayaran, dan riwayat pemesanan."],
                ]}
              />
              <p className="callout">
                Kami tidak mengumpulkan secara langsung data sensitif seperti foto KTP/SIM, data biometrik, atau
                informasi kartu kredit. Pembayaran diproses oleh DOKU sebagai penyedia payment gateway.
              </p>
            </PolicySection>

            <PolicySection
              id="s3"
              title="3. Penggunaan Data"
              icon={
                <SectionIcon>
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" />
                </SectionIcon>
              }
            >
              <Use
                items={[
                  [
                    "Operasional layanan",
                    "Memproses pesanan, memastikan jadwal, menugaskan terapis atau nail artist, dan memastikan kunjungan berjalan lancar.",
                  ],
                  [
                    "Pemesanan berikutnya lebih cepat",
                    "Alamat dan preferensi yang tersimpan dipakai agar Anda tidak perlu mengisi ulang data.",
                  ],
                  [
                    "Penentuan area layanan",
                    "Alamat dipakai untuk mengecek ketersediaan layanan dan menghitung biaya transportasi bila berlaku.",
                  ],
                  [
                    "Komunikasi & konfirmasi",
                    "Konfirmasi pesanan, pengingat jadwal, info kehadiran terapis, dan pembaruan status lewat WhatsApp.",
                  ],
                  [
                    "Promosi & penawaran",
                    "Info promo dan layanan baru lewat WhatsApp. Anda bisa berhenti menerima promosi kapan saja dengan menghubungi admin, dan permintaan langsung diproses.",
                  ],
                  [
                    "Peningkatan kualitas",
                    "Analisis riwayat pemesanan secara agregat untuk memperbaiki layanan, jadwal, dan respons chatbot.",
                  ],
                ]}
              />
            </PolicySection>

            <PolicySection
              id="s4"
              title="4. Keamanan & Penyimpanan"
              icon={
                <SectionIcon>
                  <rect x="5" y="10" width="14" height="10" rx="2.5" />
                  <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                </SectionIcon>
              }
            >
              <p>Keamanan data adalah prioritas kami. Kami menggunakan infrastruktur Google Firebase:</p>
              <ul>
                <li>Semua data dikirim melalui koneksi terenkripsi TLS/HTTPS.</li>
                <li>Database Firebase Firestore memakai aturan akses ketat sesuai peran pengguna.</li>
                <li>Firebase Authentication tidak menyimpan kata sandi dalam bentuk teks biasa.</li>
                <li>Server berada di Asia Tenggara (region asia-southeast1) dengan backup otomatis.</li>
              </ul>
              <p className="callout">
                Google Firebase mematuhi standar ISO 27001, SOC 1/2/3, dan regulasi perlindungan data internasional.
              </p>
            </PolicySection>

            <PolicySection
              id="s5"
              title="5. Berbagi Data"
              icon={
                <SectionIcon>
                  <circle cx="6" cy="12" r="2.5" />
                  <circle cx="18" cy="6" r="2.5" />
                  <circle cx="18" cy="18" r="2.5" />
                  <path d="M8.2 10.8l7.6-3.6M8.2 13.2l7.6 3.6" />
                </SectionIcon>
              }
            >
              <p>
                <b>Kami tidak menjual data pribadi Anda kepada pihak mana pun.</b> Data hanya dibagikan dalam kondisi
                terbatas berikut:
              </p>
              <ul>
                <li>
                  <b>Terapis atau nail artist yang bertugas</b> hanya menerima nama, nomor WhatsApp, dan alamat
                  layanan, setelah jadwal dikonfirmasi. Mereka tidak dapat mengakses riwayat transaksi Anda.
                </li>
                <li>
                  <b>Google Firebase</b> sebagai penyedia infrastruktur, berdasarkan perjanjian pemrosesan data dengan
                  standar keamanan ketat.
                </li>
                <li>
                  <b>DOKU</b> menerima data transaksi yang diperlukan semata untuk memproses pembayaran.
                </li>
                <li>
                  <b>Kewajiban hukum:</b> data dapat dibuka jika diwajibkan oleh hukum atau perintah pengadilan yang
                  sah di Indonesia.
                </li>
              </ul>
            </PolicySection>

            <PolicySection
              id="s6"
              title="6. Hak Pengguna"
              icon={
                <SectionIcon>
                  <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
                  <path d="M9 12l2 2 4-4" />
                </SectionIcon>
              }
            >
              <Use
                items={[
                  ["Akses", "Melihat data pribadi yang kami simpan."],
                  ["Koreksi", "Meminta perbaikan data yang keliru atau tidak lengkap."],
                  [
                    "Penghapusan",
                    <>
                      Meminta penghapusan akun dan seluruh data pribadi. Lihat{" "}
                      <a href="/delete-account">Penghapusan Akun</a>.
                    </>,
                  ],
                  ["Portabilitas", "Mendapatkan salinan data dalam format yang bisa dibaca."],
                  ["Menolak promosi", "Berhenti menerima pesan promosi kapan saja, tanpa syarat."],
                ]}
              />
              <p>Permintaan dapat diajukan melalui kontak di bagian 9.</p>
            </PolicySection>

            <PolicySection
              id="s7"
              title="7. Retensi Data"
              icon={
                <SectionIcon>
                  <ellipse cx="12" cy="6" rx="8" ry="3" />
                  <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
                </SectionIcon>
              }
            >
              <p>Data disimpan selama diperlukan untuk keperluan operasional dan hukum:</p>
              <div style={{ paddingTop: 6 }}>
                <DataTable
                  head={["Jenis data", "Lama penyimpanan"]}
                  rows={[
                    ["Profil pelanggan aktif", "Selama akun masih aktif digunakan"],
                    ["Riwayat pemesanan dan transaksi", "5 tahun"],
                    ["Riwayat percakapan WhatsApp", "1 tahun"],
                    ["Data akun yang dihapus", "Dihapus permanen dalam 30 hari"],
                  ]}
                />
              </div>
            </PolicySection>

            <PolicySection
              id="s8"
              title="8. Perubahan Kebijakan"
              icon={
                <SectionIcon>
                  <path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3" />
                  <path d="M18 3v4h-4M6 21v-4h4" />
                </SectionIcon>
              }
            >
              <p>
                Kami dapat memperbarui kebijakan ini sewaktu-waktu. Perubahan signifikan diumumkan melalui pesan
                WhatsApp ke nomor terdaftar, notifikasi aplikasi, atau pembaruan tanggal berlaku di halaman ini.
                Dengan tetap menggunakan layanan setelah perubahan berlaku, Anda dianggap menyetujui kebijakan yang
                diperbarui.
              </p>
            </PolicySection>

            <PolicySection
              id="s9"
              title="9. Hubungi Kami"
              dark
              icon={
                <SectionIcon light>
                  <path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z" />
                </SectionIcon>
              }
            >
              <p style={{ color: "var(--muted-dark)" }}>
                Pertanyaan atau permintaan terkait data pribadi dapat disampaikan melalui WhatsApp. Respons dalam
                1×24 jam pada hari kerja.
              </p>
              <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))" }}>
                {([
                  ["Massage", WA.massage],
                  ["Nails", WA.nails],
                ] as const).map(([label, wa]) => (
                  <a
                    key={label}
                    href={waLink(wa.number)}
                    className="flex items-center gap-[14px] no-underline hover:!text-gold"
                    style={{
                      background: "var(--ink-2)",
                      border: "1px solid rgba(224,194,122,.35)",
                      color: "var(--cream)",
                      borderRadius: 16,
                      padding: "16px 20px",
                      minHeight: 44,
                    }}
                  >
                    <span className="flex flex-col" style={{ lineHeight: 1.35 }}>
                      <span style={{ fontSize: 12.5, color: "var(--gold)" }}>{label}</span>
                      <b style={{ fontSize: 18 }}>{wa.label}</b>
                    </span>
                  </a>
                ))}
              </div>
              <p style={{ color: "var(--muted-dark)", fontSize: 14 }}>
                Dengan menggunakan layanan kami, Anda menyatakan telah membaca dan menyetujui Kebijakan Privasi ini.
              </p>
            </PolicySection>
          </div>
        </div>
      </main>

      <LegalFooter
        note="© 2026 PT Home Best Service"
        links={[
          { href: HOME_URL, label: "Beranda" },
          { href: "/privacy-policy", label: "Kebijakan Privasi" },
          { href: "/delete-account", label: "Hapus Akun" },
        ]}
      />
    </div>
  );
}
