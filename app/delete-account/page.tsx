import type { Metadata } from "next";
import Image from "next/image";
import { DocLayout, DocSection, DocTable } from "@/components/legal/Doc";
import { LegalFooter } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { HOME_URL, WA, waLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "Penghapusan Akun",
  description:
    "Cara menghapus akun INI Best Home (PT Home Best Service) beserta data pribadi Anda: lewat aplikasi atau WhatsApp, data yang dihapus, dan linimasa prosesnya.",
  alternates: { canonical: "/delete-account" },
};

const WA_DELETE_MESSAGE =
  "Halo Best Home Services, saya ingin mengajukan penghapusan akun dan seluruh data pribadi saya.\n\nNama terdaftar: \nNomor WhatsApp terdaftar: \nAlasan (opsional): ";

const toc = [
  ["data", "Data yang akan dihapus"],
  ["tutorial", "Hapus lewat aplikasi"],
  ["ajukan", "Ajukan lewat WhatsApp"],
  ["linimasa", "Linimasa proses"],
  ["alternatif", "Alternatif sebelum menghapus"],
  ["hak", "Hak Anda & retensi"],
  ["kontak", "Kontak"],
] as const;

/* Ilustrasi HTML langkah 3 & 4 — ganti dengan screenshot asli (lihat TODO.md). */
const row = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  background: "#fff",
  border: "1px solid #EFE6D6",
  borderRadius: 10,
  padding: "8px 9px",
  fontSize: 10.5,
} as const;
const ico = { width: 18, height: 18, borderRadius: 5, background: "#F6EBD8", flexShrink: 0 } as const;

function SettingsIllustration() {
  return (
    <div
      role="img"
      aria-label="Ilustrasi halaman Pengaturan dengan menu Hapus Akun Permanen"
      className="absolute inset-0 flex flex-col"
      style={{ padding: "16px 10px", gap: 7 }}
    >
      <b style={{ fontSize: 12, paddingBottom: 4, color: "var(--ink)" }}>Pengaturan</b>
      {[60, 48, 55].map((w) => (
        <div key={w} style={row}>
          <span style={ico} />
          <span style={{ height: 5, borderRadius: 3, background: "#E9E1D2", width: `${w}%` }} />
        </div>
      ))}
      <div style={{ ...row, border: "1.5px solid var(--brick)", background: "#FBEFEB" }}>
        <span style={{ ...ico, background: "var(--brick)" }} />
        <b style={{ color: "var(--brick)" }}>Hapus Akun Permanen</b>
      </div>
      <span style={{ marginTop: "auto", fontSize: 9.5, color: "#786B5A" }}>Ilustrasi · ganti dengan screenshot asli</span>
    </div>
  );
}

function ConfirmIllustration() {
  return (
    <div
      role="img"
      aria-label="Ilustrasi dialog konfirmasi Hapus Akun dengan tombol Batal dan Ya, Hapus"
      className="absolute inset-0 flex items-center justify-center"
      style={{ background: "#8A8378", padding: 12 }}
    >
      <div className="flex w-full flex-col text-center" style={{ background: "#fff", borderRadius: 14, padding: "14px 10px", gap: 7 }}>
        <b style={{ fontSize: 12.5, color: "var(--ink)" }}>Hapus Akun?</b>
        <span style={{ fontSize: 10, color: "var(--muted-light)", lineHeight: 1.45 }}>
          Akun dan seluruh data Anda akan dihapus permanen.
        </span>
        <span className="flex gap-1.5" style={{ paddingTop: 2 }}>
          <span className="flex-1" style={{ border: "1px solid #D9CDB6", borderRadius: 999, padding: "5px 0", fontSize: 10, fontWeight: 600, color: "var(--ink)" }}>
            Batal
          </span>
          <span className="flex-1" style={{ background: "var(--brick)", color: "#fff", borderRadius: 999, padding: "5px 0", fontSize: 10, fontWeight: 600 }}>
            Ya, Hapus
          </span>
        </span>
      </div>
    </div>
  );
}

const steps = [
  {
    title: "Buka tab Profil",
    text: "Pastikan Anda sudah login, lalu ketuk ikon Profil di navigasi bawah kanan.",
    shot: <Image src="/screens/profil.jpg" alt="Halaman Profil aplikasi" fill sizes="180px" className="object-cover object-top" />,
  },
  {
    title: "Buka Pengaturan",
    text: "Gulir melewati info pribadi dan alamat, lalu ketuk Pengaturan di bagian Lainnya.",
    shot: (
      <Image
        src="/screens/profil-lainnya.jpg"
        alt="Bagian Lainnya di halaman Profil dengan menu Pengaturan"
        fill
        sizes="180px"
        className="object-cover object-top"
      />
    ),
  },
  {
    title: "Ketuk Hapus Akun Permanen",
    text: "Di halaman Pengaturan, cari dan ketuk menu Hapus Akun Permanen.",
    shot: <SettingsIllustration />,
  },
  {
    title: "Konfirmasi penghapusan",
    text: "Baca peringatan di dialog Hapus Akun?, lalu ketuk Ya, Hapus.",
    shot: <ConfirmIllustration />,
  },
];

export default function DeleteAccountPage() {
  return (
    <>
      <Navbar
        homeHref={HOME_URL}
        label="Navigasi"
        links={[
          { href: HOME_URL, label: "Beranda" },
          { href: "/privacy-policy", label: "Kebijakan Privasi" },
          { href: "#ajukan", label: "Ajukan" },
        ]}
      />

      <DocLayout
        title="Penghapusan Akun"
        updated="Diperbarui 27 September 2026 · PT Home Best Service"
        toc={toc}
        intro={
          <>
            <p>
              Halaman ini menjelaskan cara meminta penghapusan permanen akun beserta seluruh data pribadi Anda di Best
              Home Services. Informasi terkait akun akan dihapus dan tidak dapat dipulihkan.
            </p>
            <div role="note" className="doc-warning">
              <strong>Tindakan ini permanen dan tidak dapat dibatalkan.</strong> Setelah data dihapus, Anda kehilangan
              akses ke akun dan semua informasinya. Simpan data yang masih Anda butuhkan sebelum melanjutkan.
            </div>
          </>
        }
      >
        <DocSection id="data" title="Data yang akan dihapus">
          <p>Setelah permintaan diverifikasi, empat kelompok data berikut dihapus permanen:</p>
          <dl>
            <dt>Informasi pribadi</dt>
            <dd>Nama, nomor WhatsApp, jenis kelamin, profil, dan alamat termasuk kecamatan.</dd>
            <dt>Data pemesanan</dt>
            <dd>Riwayat layanan Massage dan Nails, jadwal dan lokasi, catatan serta preferensi terapis.</dd>
            <dt>Data komunikasi</dt>
            <dd>Riwayat WhatsApp dan chatbot, pengaturan akun, dan konten tersimpan.</dd>
            <dt>Data teknis</dt>
            <dd>Informasi perangkat dan sesi, log aktivitas, statistik pemakaian, dan data autentikasi Firebase.</dd>
          </dl>
        </DocSection>

        <DocSection id="tutorial" title="Hapus akun lewat aplikasi">
          <p>Empat langkah untuk menghapus akun langsung dari aplikasi.</p>
          <ol className="doc-shots" style={{ listStyle: "none", padding: 0 }}>
            {steps.map((s, i) => (
              <li key={s.title} style={{ margin: 0 }}>
                <figure>
                  <div className="doc-shot">{s.shot}</div>
                  <figcaption>
                    <strong>
                      {i + 1}. {s.title}
                    </strong>
                    <br />
                    {s.text}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ol>
          <p>
            Dialog <strong>Akun Terhapus</strong> akan muncul. Ketuk <strong>Lanjutkan</strong> untuk kembali ke
            halaman login. Penghapusan selesai dan bersifat permanen.
          </p>
        </DocSection>

        <DocSection id="ajukan" title="Ajukan penghapusan lewat WhatsApp">
          <p>
            Gunakan cara ini jika tidak bisa menghapus dari aplikasi, misalnya karena lupa password atau kendala teknis.
          </p>
          <ol>
            <li>
              <strong>Kirim permintaan</strong> lewat WhatsApp resmi, sertakan nama terdaftar, nomor WhatsApp terdaftar,
              dan alasan (opsional).
            </li>
            <li>
              <strong>Verifikasi identitas.</strong> Tim memastikan Anda pemilik akun dan mungkin meminta detail
              tambahan.
            </li>
            <li>
              <strong>Proses penghapusan</strong> paling lama 30 hari sejak verifikasi. Selama itu data dinonaktifkan
              dan dijadwalkan untuk dihapus.
            </li>
            <li>
              <strong>Konfirmasi selesai</strong> dikirim lewat WhatsApp setelah data terhapus. Sejak itu data tidak
              bisa dipulihkan.
            </li>
          </ol>
          <p>Contoh pesan (sudah terisi otomatis saat Anda menekan tombol di bawah):</p>
          <div className="doc-quote">
            {"Halo Best Home Services, saya ingin mengajukan penghapusan akun dan seluruh data pribadi saya.\n"}
            <b>Nama terdaftar:</b> …{"\n"}
            <b>Nomor WhatsApp terdaftar:</b> …{"\n"}
            <b>Alasan (opsional):</b> …
          </div>
          <div className="flex flex-wrap gap-3">
            <a className="doc-btn" href={waLink(WA.massage.number, WA_DELETE_MESSAGE)}>
              Ajukan via WA Massage
            </a>
            <a className="doc-btn doc-btn-line" href={waLink(WA.nails.number, WA_DELETE_MESSAGE)}>
              Ajukan via WA Nails
            </a>
          </div>
        </DocSection>

        <DocSection id="linimasa" title="Linimasa proses">
          <DocTable
            head={["Waktu", "Tahap"]}
            rows={[
              ["Hari 1", "Permintaan diterima."],
              ["Hari 1–3", "Verifikasi identitas."],
              ["Hari 3–30", "Penghapusan data."],
              ["Hari 30", "Konfirmasi dikirim. Data terhapus permanen."],
            ]}
          />
        </DocSection>

        <DocSection id="alternatif" title="Alternatif sebelum menghapus">
          <ul>
            <li>Nonaktifkan akun sementara tanpa menghapus data.</li>
            <li>Minta ekspor data sebagai cadangan.</li>
            <li>Ubah pengaturan privasi atau berhenti menerima promosi.</li>
            <li>Perbaiki data yang keliru daripada menghapusnya.</li>
          </ul>
        </DocSection>

        <DocSection id="hak" title="Hak Anda & retensi setelah penghapusan">
          <ul>
            <li>Hak penghapusan akun dan data pribadi.</li>
            <li>Hak portabilitas: mendapatkan salinan data sebelum dihapus.</li>
            <li>Hak menarik persetujuan kapan saja.</li>
            <li>Hak akses dan koreksi data.</li>
          </ul>
          <DocTable
            head={["Jenis data", "Perlakuan"]}
            rows={[
              ["Profil dan preferensi", "Dihapus permanen dalam 30 hari"],
              ["Riwayat WhatsApp", "Dihapus permanen dalam 30 hari"],
              ["Catatan transaksi (kewajiban hukum)", "Disimpan dan dianonimkan"],
              ["Data analitik agregat", "Tidak terkait identitas Anda"],
            ]}
          />
          <p>
            Proses ini mengikuti persyaratan Google Play dan peraturan perlindungan data pribadi di Indonesia. Detail
            lengkap ada di <a href="/privacy-policy">Kebijakan Privasi</a>.
          </p>
        </DocSection>

        <DocSection id="kontak" title="Kontak">
          <p>Respons 1×24 jam pada hari kerja.</p>
          <ul>
            <li>
              WhatsApp Massage: <a href={waLink(WA.massage.number)}>{WA.massage.label}</a>
            </li>
            <li>
              WhatsApp Nails: <a href={waLink(WA.nails.number)}>{WA.nails.label}</a>
            </li>
          </ul>
        </DocSection>
      </DocLayout>

      <LegalFooter
        note="© 2026 PT Home Best Service · Penghapusan bersifat permanen setelah diproses."
        links={[
          { href: HOME_URL, label: "Beranda" },
          { href: "/privacy-policy", label: "Kebijakan Privasi" },
          { href: "#ajukan", label: "Ajukan Penghapusan" },
        ]}
      />
    </>
  );
}
