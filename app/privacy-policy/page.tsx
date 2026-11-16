import type { Metadata } from "next";
import { DocLayout, DocSection, DocTable } from "@/components/legal/Doc";
import { LegalFooter } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { HOME_URL, WA, waLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description:
    "Kebijakan Privasi INI Best Home oleh PT Home Best Service: data yang kami kumpulkan, cara penggunaannya, dan hak Anda atas data pribadi.",
  alternates: { canonical: "/privacy-policy" },
};

const toc = [
  ["s1", "1. Informasi Umum"],
  ["s2", "2. Data yang Dikumpulkan"],
  ["s3", "3. Penggunaan Data"],
  ["s4", "4. Keamanan & Penyimpanan"],
  ["s5", "5. Berbagi Data"],
  ["s6", "6. Hak Pengguna"],
  ["s7", "7. Retensi Data"],
  ["s8", "8. Perubahan Kebijakan"],
  ["s9", "9. Hubungi Kami"],
] as const;

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar
        homeHref={HOME_URL}
        label="Navigasi"
        links={[
          { href: HOME_URL, label: "Beranda" },
          { href: "/delete-account", label: "Hapus Akun" },
          { href: "#s9", label: "Kontak" },
        ]}
      />

      <DocLayout
        title="Kebijakan Privasi"
        updated="Terakhir diperbarui 13 Juni 2026 · PT Home Best Service"
        toc={toc}
        intro={
          <p>
            Saat menggunakan layanan kami, Anda mempercayakan informasi pribadi Anda kepada kami. Halaman ini
            menjelaskan data apa yang kami kumpulkan, mengapa kami mengumpulkannya, dan bagaimana Anda dapat meninjau,
            mengatur, serta menghapusnya.
          </p>
        }
      >
        <DocSection id="s1" title="1. Informasi Umum">
          <ul>
            <li>
              Kebijakan ini berlaku untuk seluruh layanan Best Home Services milik PT Home Best Service, yaitu layanan
              Massage dan Nails yang bisa dipesan melalui WhatsApp maupun aplikasi mobile.
            </li>
            <li>
              Dengan menggunakan layanan kami melalui WhatsApp, chatbot, atau aplikasi, Anda menyetujui pengumpulan dan
              penggunaan data sesuai kebijakan ini.
            </li>
            <li>
              Kebijakan ini dapat diperbarui sewaktu-waktu. Perubahan signifikan akan diberitahukan melalui WhatsApp
              atau notifikasi aplikasi.
            </li>
          </ul>
        </DocSection>

        <DocSection id="s2" title="2. Data yang Dikumpulkan">
          <p>Kami hanya mengumpulkan data yang dibutuhkan untuk menjalankan layanan home service.</p>
          <dl>
            <dt>Data identitas</dt>
            <dd>
              Disimpan di profil pelanggan: nama lengkap, nomor WhatsApp, jenis kelamin, dan alamat lengkap termasuk
              area atau kecamatan.
            </dd>
            <dt>Data pemesanan</dt>
            <dd>
              Per transaksi: jenis layanan (Massage atau Nails), tanggal dan waktu layanan, alamat lokasi layanan, serta
              catatan atau permintaan khusus.
            </dd>
            <dt>Preferensi &amp; komunikasi</dt>
            <dd>
              Preferensi terapis atau nail artist, catatan kondisi khusus (misalnya alergi atau kondisi fisik), dan
              riwayat percakapan dengan admin dan/atau chatbot di WhatsApp.
            </dd>
            <dt>Data transaksi</dt>
            <dd>Nominal dan metode pembayaran, status pembayaran, dan riwayat pemesanan.</dd>
          </dl>
          <p className="doc-note">
            Kami tidak mengumpulkan secara langsung data sensitif seperti foto KTP/SIM, data biometrik, atau informasi
            kartu kredit. Pembayaran diproses oleh DOKU sebagai penyedia payment gateway.
          </p>
        </DocSection>

        <DocSection id="s3" title="3. Penggunaan Data">
          <dl>
            <dt>Operasional layanan</dt>
            <dd>
              Memproses pesanan, memastikan jadwal, menugaskan terapis atau nail artist, dan memastikan kunjungan
              berjalan lancar.
            </dd>
            <dt>Pemesanan berikutnya lebih cepat</dt>
            <dd>Alamat dan preferensi yang tersimpan dipakai agar Anda tidak perlu mengisi ulang data.</dd>
            <dt>Penentuan area layanan</dt>
            <dd>
              Alamat dipakai untuk mengecek ketersediaan layanan dan menghitung biaya transportasi bila berlaku.
            </dd>
            <dt>Komunikasi &amp; konfirmasi</dt>
            <dd>
              Konfirmasi pesanan, pengingat jadwal, info kehadiran terapis, dan pembaruan status lewat WhatsApp.
            </dd>
            <dt>Promosi &amp; penawaran</dt>
            <dd>
              Info promo dan layanan baru lewat WhatsApp. Anda bisa berhenti menerima promosi kapan saja dengan
              menghubungi admin, dan permintaan langsung diproses.
            </dd>
            <dt>Peningkatan kualitas</dt>
            <dd>
              Analisis riwayat pemesanan secara agregat untuk memperbaiki layanan, jadwal, dan respons chatbot.
            </dd>
          </dl>
        </DocSection>

        <DocSection id="s4" title="4. Keamanan & Penyimpanan">
          <p>Keamanan data adalah prioritas kami. Kami menggunakan infrastruktur Google Firebase:</p>
          <ul>
            <li>Semua data dikirim melalui koneksi terenkripsi TLS/HTTPS.</li>
            <li>Database Firebase Firestore memakai aturan akses ketat sesuai peran pengguna.</li>
            <li>Firebase Authentication tidak menyimpan kata sandi dalam bentuk teks biasa.</li>
            <li>Server berada di Asia Tenggara (region asia-southeast1) dengan backup otomatis.</li>
          </ul>
          <p className="doc-note">
            Google Firebase mematuhi standar ISO 27001, SOC 1/2/3, dan regulasi perlindungan data internasional.
          </p>
        </DocSection>

        <DocSection id="s5" title="5. Berbagi Data">
          <p>
            <strong>Kami tidak menjual data pribadi Anda kepada pihak mana pun.</strong> Data hanya dibagikan dalam
            kondisi terbatas berikut:
          </p>
          <ul>
            <li>
              <strong>Terapis atau nail artist yang bertugas</strong> hanya menerima nama, nomor WhatsApp, dan alamat
              layanan, setelah jadwal dikonfirmasi. Mereka tidak dapat mengakses riwayat transaksi Anda.
            </li>
            <li>
              <strong>Google Firebase</strong> sebagai penyedia infrastruktur, berdasarkan perjanjian pemrosesan data
              dengan standar keamanan ketat.
            </li>
            <li>
              <strong>DOKU</strong> menerima data transaksi yang diperlukan semata untuk memproses pembayaran.
            </li>
            <li>
              <strong>Kewajiban hukum:</strong> data dapat dibuka jika diwajibkan oleh hukum atau perintah pengadilan
              yang sah di Indonesia.
            </li>
          </ul>
        </DocSection>

        <DocSection id="s6" title="6. Hak Pengguna">
          <dl>
            <dt>Akses</dt>
            <dd>Melihat data pribadi yang kami simpan.</dd>
            <dt>Koreksi</dt>
            <dd>Meminta perbaikan data yang keliru atau tidak lengkap.</dd>
            <dt>Penghapusan</dt>
            <dd>
              Meminta penghapusan akun dan seluruh data pribadi. Lihat <a href="/delete-account">Penghapusan Akun</a>.
            </dd>
            <dt>Portabilitas</dt>
            <dd>Mendapatkan salinan data dalam format yang bisa dibaca.</dd>
            <dt>Menolak promosi</dt>
            <dd>Berhenti menerima pesan promosi kapan saja, tanpa syarat.</dd>
          </dl>
          <p>Permintaan dapat diajukan melalui kontak di bagian 9.</p>
        </DocSection>

        <DocSection id="s7" title="7. Retensi Data">
          <p>Data disimpan selama diperlukan untuk keperluan operasional dan hukum:</p>
          <DocTable
            head={["Jenis data", "Lama penyimpanan"]}
            rows={[
              ["Profil pelanggan aktif", "Selama akun masih aktif digunakan"],
              ["Riwayat pemesanan dan transaksi", "5 tahun"],
              ["Riwayat percakapan WhatsApp", "1 tahun"],
              ["Data akun yang dihapus", "Dihapus permanen dalam 30 hari"],
            ]}
          />
        </DocSection>

        <DocSection id="s8" title="8. Perubahan Kebijakan">
          <p>
            Kami dapat memperbarui kebijakan ini sewaktu-waktu. Perubahan signifikan diumumkan melalui pesan WhatsApp
            ke nomor terdaftar, notifikasi aplikasi, atau pembaruan tanggal berlaku di halaman ini. Dengan tetap
            menggunakan layanan setelah perubahan berlaku, Anda dianggap menyetujui kebijakan yang diperbarui.
          </p>
        </DocSection>

        <DocSection id="s9" title="9. Hubungi Kami">
          <p>
            Pertanyaan atau permintaan terkait data pribadi dapat disampaikan melalui WhatsApp. Respons dalam 1×24 jam
            pada hari kerja.
          </p>
          <ul>
            <li>
              WhatsApp Massage: <a href={waLink(WA.massage.number)}>{WA.massage.label}</a>
            </li>
            <li>
              WhatsApp Nails: <a href={waLink(WA.nails.number)}>{WA.nails.label}</a>
            </li>
          </ul>
          <p>Dengan menggunakan layanan kami, Anda menyatakan telah membaca dan menyetujui Kebijakan Privasi ini.</p>
        </DocSection>
      </DocLayout>

      <LegalFooter
        note="© 2026 PT Home Best Service"
        links={[
          { href: HOME_URL, label: "Beranda" },
          { href: "/privacy-policy", label: "Kebijakan Privasi" },
          { href: "/delete-account", label: "Hapus Akun" },
        ]}
      />
    </>
  );
}
