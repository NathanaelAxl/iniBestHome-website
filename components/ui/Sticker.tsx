import type { CSSProperties, ReactNode } from "react";

const GOLD = "linear-gradient(135deg,#ECD394,#C9A052)";

/**
 * Badge miring yang menempel di pinggir phone mockup.
 * variant: "white" (default), "gold" (gradient), "dark" (pill hitam).
 * pill: radius penuh & padding lebih lebar.
 */
export function Sticker({
  variant = "white",
  pill,
  tilt,
  style,
  children,
}: {
  variant?: "white" | "gold" | "dark";
  pill?: boolean;
  tilt: number;
  style: CSSProperties;
  children: ReactNode;
}) {
  const v: CSSProperties =
    variant === "gold"
      ? { background: GOLD }
      : variant === "dark"
        ? { background: "var(--ink)", color: "var(--cream)" }
        : {};
  const p: CSSProperties = pill ? { borderRadius: 999, padding: "14px 22px" } : {};
  return (
    <span className="sticker" style={{ transform: `rotate(${tilt}deg)`, ...v, ...p, ...style }}>
      {children}
    </span>
  );
}

/** Lingkaran ikon 34px di dalam sticker. */
export function StickerIcon({ bg, children }: { bg: string; children: ReactNode }) {
  return (
    <span
      aria-hidden
      style={{ width: 34, height: 34, borderRadius: "50%", background: bg }}
      className="flex shrink-0 items-center justify-center"
    >
      {children}
    </span>
  );
}
