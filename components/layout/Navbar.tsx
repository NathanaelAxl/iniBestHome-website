"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { LogoMark } from "@/components/ui/Logo";

type Link = { href: string; label: string };

/**
 * Header gelap, sticky. Saat di-scroll jadi solid + blur.
 * Desktop (≥1024px): menu sejajar. Mobile: tombol CTA tetap terlihat + menu hamburger.
 */
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
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const ctaEl = cta && (
    <a className="btn-gold" href={cta.href} style={{ minHeight: 44, padding: "0 22px", fontSize: 14 }}>
      {cta.label}
    </a>
  );

  return (
    <header
      className="site-header dark"
      data-scrolled={scrolled || open}
      style={{ borderBottom: "1px solid rgba(224,194,122,.15)" }}
    >
      <div className="wrap flex items-center justify-between gap-4" style={{ minHeight: 76, paddingTop: 10, paddingBottom: 10 }}>
        <a href={homeHref} className="no-underline" aria-label="INI Best Home — Beranda">
          <LogoMark priority />
        </a>

        <nav aria-label={label} className="hidden items-center lg:flex" style={{ gap: "4px 28px" }}>
          {links.map((l) => (
            <a key={l.href} className="navlink" href={l.href}>
              {l.label}
            </a>
          ))}
          {ctaEl}
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          {/* <640px: tombol header disembunyikan; diganti bar download melayang (MobileDownloadBar). */}
          {ctaEl && <span className="hidden sm:inline-flex">{ctaEl}</span>}
          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="mobile-menu lg:hidden" data-open={open}>
        <div>
          <nav aria-label={`${label} (mobile)`} className="wrap flex flex-col" style={{ paddingBottom: 16 }}>
            {links.map((l) => (
              <a
                key={l.href}
                className="navlink"
                href={l.href}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                style={{ fontSize: 16, padding: "14px 4px", borderTop: "1px solid rgba(224,194,122,.12)" }}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
