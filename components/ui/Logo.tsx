import Image from "next/image";

/** Logo + nama app (navbar & footer). */
export function LogoMark({ priority }: { priority?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <Image src="/logo.png" alt="" width={40} height={40} priority={priority} style={{ borderRadius: 11 }} />
      <span style={{ fontSize: 18, fontWeight: 600, color: "var(--gold)" }}>INI Best Home</span>
    </span>
  );
}
