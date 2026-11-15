# Website INI Best Home

Website untuk aplikasi **INI Best Home** (pijat home service, milik PT Home Best Service).
Terdiri dari 3 halaman:

| Halaman | File desain (sumber kebenaran) | Route | Domain produksi |
|---|---|---|---|
| Landing page download app | `design/landing.html` | `/` | domain utama (belum ditentukan) |
| Kebijakan Privasi | `design/privacy-policy.html` | `/privacy-policy` | `privacypolicy.besthomeservice.id` |
| Penghapusan Akun | `design/delete-account.html` | `/delete-account` | `deleteaccount.privacypolicy.besthomeservice.id` |

## Aturan utama

- **Desain harus sama dengan file di `design/`.** Buka file-nya di browser untuk melihat hasil akhirnya. Warna, font, ukuran, jarak, urutan section, dan copy diambil dari sana. Jangan mengarang ulang tampilan.
- **Copy (teks) sudah final.** Salin apa adanya. Teks dalam kurung siku seperti `[Salin jawaban ...]` adalah placeholder yang menunggu data dari pemilik. Biarkan tetap terlihat sebagai placeholder dan catat di `TODO.md`.
- Bahasa website: **Indonesia saja**. `<html lang="id">`.
- Semua gambar ada di `assets/`. Jangan pakai gambar dari internet.
- Kerjakan satu halaman sampai selesai, cocokkan dengan file desainnya, baru lanjut ke halaman berikutnya.

## Stack

- **Next.js (App Router) + TypeScript + Tailwind CSS**, deploy ke **Vercel**.
- Font lewat `next/font/google`: **Playfair Display** (heading, 500/600/700 + italic) dan **Poppins** (body/UI, 400/500/600/700).
- Gambar lewat `next/image`. Pindahkan `assets/` ke `public/`.
- Konten statis, tanpa database dan tanpa backend.
- Ketiga halaman satu project. Subdomain privacy dan delete account diarahkan ke route masing-masing lewat `middleware.ts` (rewrite berdasarkan host) atau pengaturan domain di Vercel.

## Design tokens

Masukkan ke `tailwind.config` (atau `@theme` di Tailwind v4):

| Token | Nilai | Dipakai untuk |
|---|---|---|
| `bg-dark` | `#1A140E` → `#2A2016` (gradient 160deg) | Hero, section gelap |
| `footer` | `#120D08` | Footer |
| `ink` | `#1E1810` | Teks utama di bg terang, card gelap |
| `gold` | `#E0C27A` | Aksen italic & eyebrow di bg gelap, garis lingkaran |
| `gold-deep` | `#A47A2E` | Aksen di bg terang, ikon |
| `gold-text` | `#7C5A1F` | Eyebrow & link di bg terang (kontras cukup) |
| `cream` | `#F8F3E8` | Section terang, background halaman legal |
| `sand` | `#F0E4CC` | Section terang alternatif |
| `card` | `#FFFDF8` / `#FFFFFF` | Card |
| `line` | `#E8DCC3` / `#EADFC8` | Border card |
| `muted-dark` | `#CFC2AA` | Teks sekunder di bg gelap |
| `muted-light` | `#5E5243` | Teks sekunder di bg terang |
| `brick` | `#8E4A3A` | Peringatan hapus akun, ikon forum |

- Tombol utama: pill, `linear-gradient(135deg, #ECD394 0%, #C9A052 55%, #A47A2E 100%)`, teks `#1E1810`, tinggi min 48px.
- Container: `max-width: 1200px`, padding samping `clamp(20px, 5vw, 48px)`.
- Radius: card 22px, phone mockup 44px (layar dalam 36px), tombol 999px.
- Heading: Playfair 600, `letter-spacing: -0.01em`, line-height 1.1. Pola: kalimat biasa + satu frasa *italic* berwarna gold.
- Eyebrow: Poppins 12px, uppercase, `letter-spacing: .42em`.

## Elemen khas (buat sebagai komponen)

- `PhoneMockup`: frame `#14100B` rounded 44px, berisi screenshot dari `assets/screens/` (`object-fit: cover; object-position: top`).
- `Sticker`: badge putih/gold, miring ±3°, shadow, menempel di pinggir phone mockup.
- `Rings`: lingkaran konsentris tipis `rgba(224,194,122,.22)` + diamond kecil + titik gold di belakang mockup.
- `StoreButton`: tombol hitam Google Play / App Store.
- `ForumPost`: kartu testimoni bergaya postingan Forum di app (avatar inisial, @username, tanggal, isi, like/comment/share).
- `SectionHeading`: eyebrow + heading Playfair dengan frasa italic.
- Section selang-seling gelap ↔ cream/sand, sesuai urutan di `design/landing.html`.

## Interaksi

- FAQ dan daftar isi di halaman privasi memakai `<details>`/`<summary>`.
- Link navbar scroll ke anchor section (`#layanan`, `#fitur`, `#member`, `#mitra`, `#bantuan`, `#download`).
- Tombol WhatsApp memakai `https://wa.me/62...`; tombol hapus akun membawa pesan terisi (`?text=`). Contohnya ada di `design/delete-account.html`.
- Hormati `prefers-reduced-motion`. Jangan tambah animasi masuk di setiap section.

## Kebutuhan teknis (dari brief Notion)

1. Tombol download memakai UTM per posisi: `utm_content=hero`, `cta`, `footer`.
2. Deteksi device: Android → Play Store, iOS → App Store, desktop → tampilkan QR code.
3. Meta Pixel + event saat tombol download diklik. ID pixel lewat env `NEXT_PUBLIC_META_PIXEL_ID`.
4. OG image: `assets/og-banner.png`. Favicon dari `assets/logo.png`.
5. SEO: title & meta description per halaman, schema JSON-LD `MobileApplication` di landing.
6. Mobile-first, Lighthouse ≥ 90 untuk Performance, Accessibility, Best Practices, SEO.
7. Aksesibilitas: alt text di screenshot, `aria-hidden` di SVG dekoratif, fokus terlihat, kontras teks ≥ 4.5:1.

Link Play Store, App Store, dan Meta Pixel ID **belum ada**. Taruh di `lib/config.ts` sebagai konstanta kosong dan catat di `TODO.md`.

## Data yang masih placeholder (jangan dikarang)

- Jawaban FAQ "kode OTP boleh dibagikan ke terapis?" dan "terapis terlambat".
- Screenshot langkah 3 & 4 hapus akun (sekarang ilustrasi HTML).
- QR code (generate dari link store setelah ada).
- Testimoni di section Forum masih **data dummy**. Wajib diganti ulasan asli sebelum live.

## Cara kerja yang diharapkan

- Sebelum coding, buat rencana singkat struktur folder dan komponen, lalu minta persetujuan.
- Setelah tiap halaman selesai, jalankan `npm run build` dan pastikan tidak ada error.
- Bandingkan hasil di `localhost` dengan file di `design/` pada lebar 1440px dan 390px.
