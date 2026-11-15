"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { completePackages, serviceGroups } from "@/content/landing";
import { downloadHref } from "@/lib/config";

const photos: Record<string, string> = {
  "Body Massage": "/services/body-massage.webp",
  "Therapy & Treatment": "/services/therapy.webp",
  "Special Care": "/services/special-care.webp",
  "Complete Packages": "/services/complete-packages.webp",
};

const tabs = [...serviceGroups.map((g) => g.title), completePackages.title];

/**
 * Kartu layanan berfoto. Desktop: grid 4 kolom + hover lift.
 * Mobile/tablet: carousel geser + chip kategori yang ikut aktif saat digeser.
 */
export function ServiceCards() {
  const scroller = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const root = scroller.current;
    if (!root) return;
    const cards = Array.from(root.children) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(cards.indexOf(e.target as HTMLElement));
        }
      },
      { root, threshold: 0.6 },
    );
    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  const goTo = (i: number) => {
    const root = scroller.current;
    const card = root?.children[i] as HTMLElement | undefined;
    if (!root || !card) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.scrollTo({ left: card.offsetLeft - root.offsetLeft - parseFloat(getComputedStyle(root).paddingLeft), behavior: reduce ? "auto" : "smooth" });
    setActive(i);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="lg:hidden">
      <div className="h-scroll" style={{ gap: 8, paddingBottom: 4 }} role="group" aria-label="Kategori layanan">
        {tabs.map((t, i) => (
          <button key={t} type="button" className="svc-chip" aria-current={active === i} onClick={() => goTo(i)}>
            {t}
          </button>
        ))}
      </div>
      </div>

      <div ref={scroller} className="h-scroll-m lg:grid lg:grid-cols-4 lg:gap-5">
        {serviceGroups.map((g) => (
          <article key={g.title} className="card svc-card flex flex-col">
            <div className="svc-img">
              <Image src={photos[g.title]} alt="" fill sizes="(min-width:1024px) 270px, 330px" className="object-cover" />
            </div>
            <div className="flex flex-col gap-3" style={{ padding: "20px 24px 24px" }}>
              <span className="tag self-start">{g.tag}</span>
              <h3 className="serif" style={{ fontSize: 27 }}>
                {g.title}
              </h3>
              <div>
                {g.items.map((it) => (
                  <div key={it.name} className="price">
                    <span>{it.name}</span>
                    <b>{it.price}</b>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}

        <article
          className="card svc-card flex flex-col"
          style={{ background: "var(--ink)", borderColor: "var(--ink)", color: "var(--cream)" }}
        >
          <div className="svc-img">
            <Image src={photos[completePackages.title]} alt="" fill sizes="(min-width:1024px) 270px, 330px" className="object-cover" />
            <span aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(30,24,16,.85))" }} />
          </div>
          <div className="flex flex-col gap-3" style={{ padding: "20px 24px 24px" }}>
            <span className="tag self-start" style={{ background: "#3A2E20", color: "var(--gold)" }}>
              {completePackages.tag}
            </span>
            <h3 className="serif" style={{ fontSize: 27 }}>
              {completePackages.title}
            </h3>
            <p className="muted-d" style={{ margin: 0, fontSize: 14.5 }}>
              {completePackages.description}
            </p>
            <p style={{ margin: 0, fontSize: 13, color: "var(--muted-dark)", paddingTop: 4 }}>Mulai dari</p>
            <p className="serif" style={{ fontSize: 34, color: "var(--gold)" }}>
              {completePackages.priceFrom}
            </p>
            <a href={downloadHref("services")} style={{ fontSize: 14.5, fontWeight: 600, color: "var(--gold)", paddingTop: 4 }}>
              Lihat Paket Komplit A–D di aplikasi
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
