/**
 * Data berulang untuk landing page. Copy disalin apa adanya dari design/landing.html.
 */

export type ServiceGroup = {
  tag: string;
  title: string;
  items: { name: string; price: string }[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    tag: "5 layanan · 90 menit",
    title: "Body Massage",
    items: [
      { name: "Full Body Massage", price: "Rp 240.000" },
      { name: "Full Body + Kerokan", price: "Rp 245.000" },
      { name: "Full Body + Totok Wajah", price: "Rp 250.000" },
      { name: "Full Body + Foot Reflexy", price: "Rp 250.000" },
      { name: "Full Body + Body Scrub", price: "Rp 280.000" },
    ],
  },
  {
    tag: "4 layanan · 60–90 menit",
    title: "Therapy & Treatment",
    items: [
      { name: "Reflexology", price: "Rp 210.000" },
      { name: "Aromatherapy Massage", price: "Rp 270.000" },
      { name: "Hot Stone Therapy", price: "Rp 305.000" },
      { name: "Deep Tissue / Strong", price: "Rp 325.000" },
    ],
  },
  {
    tag: "Ibu & bayi · 30–90 menit",
    title: "Special Care",
    items: [
      { name: "Baby Massage", price: "Rp 165.000" },
      { name: "Pregnancy Massage", price: "Rp 220.000" },
      { name: "Lactation Massage", price: "Rp 220.000" },
      { name: "Postnatal Massage", price: "Rp 240.000" },
    ],
  },
];

export const completePackages = {
  tag: "4 paket · 2,5 jam",
  title: "Complete Packages",
  description:
    "Gabungan full body massage dengan totok wajah, foot refleksi, head massage, kerokan, atau body scrub.",
  priceFrom: "Rp 440.000",
};

export type Tier = { name: string; color: string; note: string; perks: string[]; highlight?: boolean };

export const tiers: Tier[] = [
  {
    name: "Bronze",
    color: "#E0C27A",
    note: "Untuk semua member baru",
    perks: ["Welcome voucher", "Akses layanan dasar", "Promo eksklusif", "Booking EXP"],
  },
  {
    name: "Silver",
    color: "#E8E1D3",
    note: "Min. 12 booking/bulan",
    perks: ["Voucher tier-up Silver", "Badge Silver", "EXP boost", "Voucher potongan"],
  },
  {
    name: "Gold",
    color: "#ECD394",
    note: "Min. 15 booking/bulan",
    perks: ["Voucher tier-up Gold", "Voucher loyal", "Voucher bulanan premium", "Prioritas promo"],
    highlight: true,
  },
];

export const steps = [
  {
    title: "Pilih layanan",
    text: "Cari dari Body Massage, Therapy, Special Care, atau Complete Packages.",
  },
  {
    title: "Atur terapis & jadwal",
    text: "Pilih level dan gender terapis, tanggal, jam, dan alamat, lalu Konfirmasi & Bayar.",
  },
  {
    title: "Terapis datang",
    text: "Pantau statusnya di Riwayat Pesanan, dari Dikonfirmasi sampai Menuju Lokasi.",
  },
];

export const faqs: { q: string; a: string; open?: boolean }[] = [
  {
    q: "Bagaimana cara membatalkan pesanan?",
    a: "Buka Riwayat Pesanan, pilih pesanan yang ingin dibatalkan, lalu tekan tombol Batalkan. Pembatalan hanya bisa dilakukan sebelum mitra berangkat menuju lokasi Anda.",
    open: true,
  },
  {
    q: "Metode pembayaran apa saja yang bisa dipakai?",
    a: "Cash, Online Payment, atau Saldo aplikasi. Saldo bisa diisi lewat Top Up Saldo di menu Earnings.",
  },
  {
    q: "Apakah ada biaya panggilan?",
    a: "Biaya panggilan Rp 15.000 dan same-day fee Rp 20.000 ditambahkan saat konfirmasi. Dengan Subscription Monthly Basic (Rp 10.000/30 hari), keduanya gratis.",
  },
  {
    q: "Apakah kode OTP boleh dibagikan ke terapis?",
    a: "Tidak. Kode OTP hanya untuk verifikasi kedatangan Anda sendiri — jangan pernah membagikannya kepada siapa pun, termasuk terapis.",
  },
  {
    q: "Bagaimana jika terapis terlambat datang?",
    a: "Anda dapat memantau status pesanan secara real-time di halaman Riwayat, atau menghubungi terapis langsung lewat fitur Chat pada pesanan terkait.",
  },
  {
    q: "Bagaimana cara menggunakan kode promo?",
    // Disamakan dengan teks di menu Keluhan & Saran di aplikasi.
    a: "Saat konfirmasi pemesanan, tekan bagian Kode Promo dan pilih voucher yang tersedia. Diskon akan otomatis terhitung di ringkasan biaya.",
  },
  {
    // Dari menu Keluhan & Saran di aplikasi.
    q: "Bagaimana cara menjadi mitra terapis?",
    a: 'Buka menu Profil, pilih "Daftar jadi Mitra", lalu unggah KTP dan foto diri (wajib) — SKCK dan sertifikat pijat sifatnya opsional. Tim kami akan meninjau pengajuan Anda dalam 1×24 jam.',
  },
];
