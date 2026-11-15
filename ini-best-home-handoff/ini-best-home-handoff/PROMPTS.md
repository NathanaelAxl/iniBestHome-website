# Prompt untuk Claude Code

Kirim satu per satu. Tunggu setiap tahap selesai dan cek hasilnya di browser sebelum lanjut.

## 1. Setup project

```
Baca CLAUDE.md dan buka ketiga file di folder design/. Buat project Next.js
(App Router, TypeScript, Tailwind) di folder ini, pindahkan assets/ ke public/,
pasang font Playfair Display dan Poppins lewat next/font, dan masukkan design
tokens dari CLAUDE.md ke konfigurasi Tailwind. Tunjukkan dulu rencana struktur
folder dan daftar komponennya sebelum mulai coding.
```

## 2. Landing page

```
Buat halaman / persis seperti design/landing.html. Mulai dari komponen bersama
(PhoneMockup, Sticker, Rings, StoreButton, SectionHeading, ForumPost), lalu
susun section-nya berurutan. Copy disalin apa adanya. Setelah selesai jalankan
npm run build.
```

## 3. Kebijakan Privasi

```
Buat halaman /privacy-policy persis seperti design/privacy-policy.html,
memakai komponen yang sudah ada. Daftar isi pakai <details>.
```

## 4. Hapus Akun

```
Buat halaman /delete-account persis seperti design/delete-account.html.
Tombol WhatsApp memakai link wa.me dengan pesan terisi seperti di file desain.
```

## 5. Fitur teknis

```
Kerjakan bagian "Kebutuhan teknis" di CLAUDE.md: UTM di tombol download,
deteksi device, Meta Pixel + event klik download, OG image, favicon,
SEO + JSON-LD MobileApplication. Nilai yang belum ada taruh di lib/config.ts
dan catat di TODO.md.
```

## 6. Subdomain + cek akhir

```
Buat middleware.ts supaya host privacypolicy.besthomeservice.id membuka
/privacy-policy dan deleteaccount.privacypolicy.besthomeservice.id membuka
/delete-account. Lalu cek tampilan di lebar 390px dan 1440px, perbaiki yang
tidak sama dengan desain, dan jalankan npm run build.
```

## Kalau hasilnya meleset

Sebut bagian yang beda dan file acuannya, misalnya:

```
Section "Member & langganan" belum sama dengan design/landing.html: kartu
Subscription harus di kanan dengan gradient gold. Samakan.
```

Bisa juga lampirkan screenshot (drag & drop gambar ke chat Claude Code).
