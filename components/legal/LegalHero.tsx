import type { ReactNode } from "react";
import { CornerRings, Diamond } from "@/components/ui/Rings";

/** Hero gelap pendek untuk halaman legal. */
export function LegalHero({
  eyebrow,
  title,
  intro,
  meta,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  meta: string;
}) {
  return (
    <section className="dark relative overflow-hidden" style={{ padding: "clamp(56px,7vw,96px) 0" }}>
      <CornerRings />
      <Diamond style={{ right: "24%", bottom: "28%" }} />
      <div className="wrap flex flex-col gap-5">
        <p className="eyebrow text-gold">{eyebrow}</p>
        <h1 className="serif" style={{ fontSize: "clamp(44px,6vw,72px)", color: "var(--cream)" }}>
          {title}
        </h1>
        <p className="muted-d" style={{ margin: 0, fontSize: 17, maxWidth: "40em" }}>
          {intro}
        </p>
        <p style={{ margin: 0, fontSize: 13.5, color: "var(--gold)" }}>{meta}</p>
      </div>
    </section>
  );
}
