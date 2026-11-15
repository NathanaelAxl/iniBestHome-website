import { LogoMark } from "@/components/ui/Logo";
import { WA, waLink } from "@/lib/config";

const head = { fontSize: 13, color: "var(--gold)", fontWeight: 600, paddingBottom: 6 } as const;
const fl = { lineHeight: 2.2 } as const;

/** Footer lengkap untuk landing page. */
export function LandingFooter() {
  return (
    // pb ekstra di mobile supaya copyright tidak tertutup bar download melayang
    <footer className="pb-28 md:pb-9" style={{ background: "var(--footer)", color: "var(--cream)", paddingTop: 64 }}>
      <div className="wrap flex flex-col gap-12">
        <div className="flex flex-wrap justify-between" style={{ gap: "40px 64px" }}>
          <div className="flex flex-col" style={{ flex: "1 1 260px", gap: 14 }}>
            <LogoMark />
            <p className="muted-d" style={{ margin: 0, fontSize: 14, maxWidth: "26em" }}>
              Premium home wellness. Pijat, terapi, dan perawatan profesional yang datang ke rumah Anda.
            </p>
          </div>
          <nav aria-label="Perusahaan" className="flex flex-col">
            <span style={head}>Perusahaan</span>
            <a className="flink" style={fl} href="#top">Tentang</a>
            <a className="flink" style={fl} href="#layanan">Layanan</a>
            <a className="flink" style={fl} href="#mitra">Jadi Mitra</a>
          </nav>
          <nav aria-label="Bantuan dan legal" className="flex flex-col">
            <span style={head}>Bantuan</span>
            <a className="flink" style={fl} href="#bantuan">FAQ</a>
            <a className="flink" style={fl} href="/privacy-policy">Kebijakan Privasi</a>
            <a className="flink" style={fl} href="/delete-account">Hapus Akun</a>
          </nav>
          <div className="flex flex-col">
            <span style={head}>Hubungi kami</span>
            <a className="flink" style={fl} href={waLink(WA.massage.number)}>
              WA Massage {WA.massage.label}
            </a>
            <a className="flink" style={fl} href={waLink(WA.nails.number)}>
              WA Nails {WA.nails.label}
            </a>
            <span className="flink" style={fl}>Respons 1×24 jam hari kerja</span>
          </div>
        </div>
        <div
          style={{ borderTop: "1px solid rgba(224,194,122,.18)", paddingTop: 24, fontSize: 13, color: "var(--muted-dark)" }}
        >
          © 2026 PT Home Best Service. Semua hak dilindungi.
        </div>
      </div>
    </footer>
  );
}

/** Footer ringkas untuk halaman legal. */
export function LegalFooter({ note, links }: { note: string; links: { href: string; label: string }[] }) {
  return (
    <footer style={{ background: "var(--footer)", color: "var(--cream)", padding: "40px 0" }}>
      <div className="wrap flex flex-wrap items-center justify-between" style={{ gap: "16px 32px" }}>
        <span style={{ fontSize: 13, color: "var(--muted-dark)" }}>{note}</span>
        <nav aria-label="Tautan footer" className="flex flex-wrap" style={{ gap: "8px 28px" }}>
          {links.map((l) => (
            <a key={l.href} className="flink" href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
