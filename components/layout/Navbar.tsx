import { LogoMark } from "@/components/ui/Logo";

type Link = { href: string; label: string };

/** Header gelap. Landing: menu anchor + tombol Download. Legal: menu anchor halaman. */
export function Navbar({
  homeHref,
  links,
  label,
  cta,
}: {
  homeHref: string;
  links: Link[];
  label: string;
  cta?: Link;
}) {
  return (
    <header className="dark" style={{ borderBottom: "1px solid rgba(224,194,122,.15)" }}>
      <div
        className="wrap flex flex-wrap items-center justify-between gap-4"
        style={{ minHeight: 76, paddingTop: 10, paddingBottom: 10 }}
      >
        <a href={homeHref} className="no-underline" aria-label="INI Best Home — Beranda">
          <LogoMark priority />
        </a>
        <nav aria-label={label} className="flex flex-wrap items-center" style={{ gap: "4px 28px" }}>
          {links.map((l) => (
            <a key={l.href} className="navlink" href={l.href}>
              {l.label}
            </a>
          ))}
          {cta && (
            <a className="btn-gold" href={cta.href} style={{ minHeight: 44, padding: "0 22px", fontSize: 14 }}>
              {cta.label}
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}
