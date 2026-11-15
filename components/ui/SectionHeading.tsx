import type { CSSProperties, ReactNode } from "react";

/**
 * Eyebrow + heading Playfair. Bungkus frasa italic dengan <em>:
 *   <SectionHeading tone="light" eyebrow="Cara kerja" title={<>Tiga langkah, <em>lalu rileks.</em></>} />
 * tone "dark" → eyebrow & italic gold; "light" → eyebrow gold-text, italic gold-deep.
 */
export function SectionHeading({
  tone,
  eyebrow,
  title,
  as: Tag = "h2",
  size = "clamp(34px,4.4vw,52px)",
  gap = 20,
  style,
}: {
  tone: "dark" | "light";
  eyebrow?: string;
  title: ReactNode;
  as?: "h1" | "h2";
  size?: string;
  gap?: number;
  style?: CSSProperties;
}) {
  return (
    <div className="flex flex-col" style={{ gap, ...style }}>
      {eyebrow && (
        <p className="eyebrow" style={{ color: tone === "dark" ? "var(--gold)" : "var(--gold-text)" }}>
          {eyebrow}
        </p>
      )}
      <Tag
        className={`serif ${tone === "dark" ? "[&_em]:text-gold" : "[&_em]:text-gold-deep"} [&_em]:italic`}
        style={{ fontSize: size, color: tone === "dark" ? "var(--cream)" : undefined }}
      >
        {title}
      </Tag>
    </div>
  );
}
