import type { CSSProperties } from "react";

/**
 * Dekorasi lingkaran konsentris, diamond, dan titik gold.
 * Semua posisi absolut — taruh di parent `position: relative`.
 */

/** Lingkaran berpusat di tengah parent dengan diameter `size`. */
export function Ring({ size, style }: { size: number; style?: CSSProperties }) {
  return (
    <div
      aria-hidden
      className="deco-ring"
      style={{ width: size, height: size, left: "50%", top: "50%", margin: `${-size / 2}px 0 0 ${-size / 2}px`, ...style }}
    />
  );
}

/** Lingkaran dengan posisi bebas (mis. di pojok kanan atas). */
export function RingAt({ size, style }: { size: number; style: CSSProperties }) {
  return <div aria-hidden className="deco-ring" style={{ width: size, height: size, ...style }} />;
}

export function Diamond({ style }: { style: CSSProperties }) {
  return <div aria-hidden className="diamond" style={style} />;
}

export function Dot({ style }: { style: CSSProperties }) {
  return <div aria-hidden className="dot" style={style} />;
}

/** Ornamen pojok kanan atas pada hero halaman legal & kartu gelap. */
export function CornerRings() {
  return (
    <>
      <RingAt size={560} style={{ right: -120, top: -200 }} />
      <RingAt size={380} style={{ right: -30, top: -110 }} />
    </>
  );
}
