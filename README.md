# Website INI Best Home

Website untuk aplikasi **INI Best Home** (pijat home service, PT Home Best Service).

| Halaman | Route | Domain produksi |
|---|---|---|
| Landing page download app | `/` | belum ditentukan |
| Kebijakan Privasi | `/privacy-policy` | `privacypolicy.besthomeservice.id` |
| Penghapusan Akun | `/delete-account` | `deleteaccount.privacypolicy.besthomeservice.id` |

Desain acuan ada di `ini-best-home-handoff/ini-best-home-handoff/design/` (lihat juga `CLAUDE.md` di folder itu).

## Menjalankan

```bash
npm install
cp .env.example .env.local   # isi NEXT_PUBLIC_SITE_URL & NEXT_PUBLIC_META_PIXEL_ID bila sudah ada
npm run dev                  # http://localhost:3000
npm run build                # build production
```

## Struktur

- `app/` — halaman, route `/download` (UTM + deteksi device), sitemap, robots, ikon & OG image
- `proxy.ts` — rewrite subdomain legal ke route masing-masing (Next 16: pengganti `middleware.ts`)
- `components/` — `ui/` (komponen bersama), `landing/`, `legal/`, `layout/`
- `content/landing.ts` — data layanan, member, FAQ, testimoni
- `lib/config.ts` — link store, nomor WhatsApp, domain, Pixel ID (satu sumber)
- `lib/track.ts`, `components/MetaPixel.tsx` — Meta Pixel + event `DownloadClick` & `Contact`

Stack: Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · `next/font` (Playfair Display, Poppins).

## Sebelum go-live

Lihat [TODO.md](TODO.md): link App Store, domain, Pixel ID, testimoni asli, dan item yang perlu dicek tim legal.
