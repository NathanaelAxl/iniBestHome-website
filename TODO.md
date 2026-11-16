# TODO sebelum go-live

Semua item di bawah menunggu data atau keputusan dari pemilik. Cari di kode dengan `grep -rn "TODO\|\[Salin" app components content lib`.

## Link & konfigurasi

- [x] **App Store** sudah diisi (`id6794550410`). Tombol App Store aktif; iOS diarahkan ke App Store lewat `/download`.
- [ ] **Domain utama** → env `NEXT_PUBLIC_SITE_URL`. Dipakai untuk canonical, sitemap, dan OG image. (QR code dihapus atas permintaan.)
- [ ] **Meta Pixel ID** → env `NEXT_PUBLIC_META_PIXEL_ID`. Kosong = Pixel tidak dimuat.
- [x] Link Play Store sudah diisi (`com.jostarapp.bmsgym`, sudah dikonfirmasi).
- [ ] Atur domain di Vercel: domain utama, `privacypolicy.besthomeservice.id`, `deleteaccount.privacypolicy.besthomeservice.id` (rewrite ada di `proxy.ts`).

## Konten placeholder (jangan dikarang)

- [x] Jawaban FAQ OTP & terapis terlambat diisi dari menu Keluhan & Saran di aplikasi; FAQ "cara menjadi mitra terapis" ditambahkan dari sumber yang sama.
- [x] FAQ "kode promo" disamakan dengan teks di app.
- [ ] Layar Forum di kolase section Fitur adalah **ilustrasi HTML** dengan contoh postingan (`components/landing/ForumScreen.tsx`), bukan screenshot asli.
- [ ] Screenshot asli langkah 3 & 4 hapus akun (sekarang ilustrasi HTML) → `app/delete-account/page.tsx`, simpan di `public/screens/`.
- [x] Section testimoni Forum dihapus atas permintaan (tidak ada lagi testimoni dummy di situs).
- [ ] Trust strip "5.0 Rating layanan dari pelanggan" (`components/landing/TrustStrip.tsx`) — pastikan sesuai data asli. JSON-LD sengaja tidak memuat rating.

## Perlu dicek tim legal (copy disalin apa adanya dari desain)

- [ ] **Kebijakan Privasi belum mencakup fitur app.** Teks menyebut "tidak mengumpulkan foto KTP", padahal pendaftaran mitra meminta KTP & foto diri. Belum disebut: email, lokasi GPS/Google Maps, Masuk dengan Google, forum (postingan publik), referral/saldo/top up/tarik saldo, notifikasi push. Harus konsisten dengan Data Safety di Play Console.
- [ ] Halaman Hapus Akun menyebut "Best Home Services"; Google Play mensyaratkan nama app & developer sesuai store listing ("INI Best Home").
- [ ] Hapus Akun: nasib Saldo/earnings referral dan postingan forum saat akun dihapus belum disebut.
- [ ] "Nonaktifkan akun sementara" di bagian Alternatif — pastikan fitur ini memang ada.

## Penyesuaian kontras (beda kecil dari desain, demi WCAG AA ≥ 4.5:1)

- Link di bg terang: `#A47A2E` → `#7C5A1F` (token `gold-text`).
- Teks kecil di sticker & tanggal post forum: `#A47A2E`/`#8C7F6E` → `#7C5A1F`/`#786B5A`.
- Kartu Subscription: gradient `#B68A3A→#8A6528` → `#93702D→#6E5020` supaya teks krem terbaca.
