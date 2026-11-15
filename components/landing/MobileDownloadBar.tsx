"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { downloadHref } from "@/lib/config";

/**
 * Bar "Unduh di Google Play" melayang di bawah layar (hanya mobile, lihat .dl-bar).
 * Muncul setelah hero terlewati, sembunyi lagi saat section #download terlihat.
 */
export function MobileDownloadBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    const cta = document.getElementById("download");
    if (!hero || !cta) return;
    const state = { heroVisible: true, ctaVisible: false };
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === hero) state.heroVisible = e.isIntersecting;
        if (e.target === cta) state.ctaVisible = e.isIntersecting;
      }
      setShow(!state.heroVisible && !state.ctaVisible);
    });
    io.observe(hero);
    io.observe(cta);
    return () => io.disconnect();
  }, []);

  return (
    <div className="dl-bar" data-show={show} aria-hidden={!show}>
      <Image src="/logo.png" alt="" width={40} height={40} style={{ borderRadius: 11 }} />
      <span className="flex min-w-0 flex-1 flex-col" style={{ lineHeight: 1.25 }}>
        <b style={{ fontSize: 14, color: "var(--cream)" }}>INI Best Home</b>
        <span style={{ fontSize: 12, color: "var(--muted-dark)" }}>Pijat profesional ke rumah</span>
      </span>
      <a
        className="btn-gold"
        href={downloadHref("sticky", "play")}
        tabIndex={show ? 0 : -1}
        style={{ minHeight: 44, padding: "0 18px", fontSize: 14 }}
      >
        Unduh
      </a>
    </div>
  );
}
