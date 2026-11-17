"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/** Progress bar baca (CSS scroll-driven) + tombol kembali ke atas. */
export function LegalEnhancements() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <>
      <div className="read-progress" aria-hidden />
      <button
        type="button"
        className="to-top"
        data-show={show}
        aria-label="Kembali ke atas"
        tabIndex={show ? 0 : -1}
        onClick={toTop}
      >
        <ArrowUp size={20} aria-hidden />
      </button>
    </>
  );
}

/**
 * Daftar isi: sticky di desktop, bagian yang sedang dibaca di-highlight.
 * Di mobile berupa <details> yang bisa dibuka-tutup.
 */
export function Toc({ items, children }: { items: readonly (readonly [string, string])[]; children: React.ReactNode }) {
  const [active, setActive] = useState(items[0]?.[0]);
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const desktop = () => window.matchMedia("(min-width: 1024px)").matches;

  // Desktop: selalu terbuka di samping. Mobile: tertutup, bisa dibuka lewat "Daftar isi".
  useEffect(() => {
    const d = detailsRef.current;
    if (!d) return;
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => {
      d.open = mq.matches;
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const sections = items.map(([id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-100px 0px -55% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [items]);

  return (
    <aside className="doc-toc">
      <details ref={detailsRef}>
        {children}
        <nav className="toc flex flex-col" aria-label="Daftar isi">
          {items.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "true" : undefined}
              onClick={() => {
                // Di mobile, tutup daftar isi setelah memilih bagian
                if (!desktop() && detailsRef.current) detailsRef.current.open = false;
              }}
            >
              {label}
            </a>
          ))}
        </nav>
      </details>
    </aside>
  );
}
