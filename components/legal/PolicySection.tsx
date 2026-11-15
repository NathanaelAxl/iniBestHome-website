import type { CSSProperties, ReactNode } from "react";

/** Kartu satu bagian kebijakan: ikon line gold + judul Playfair. */
export function PolicySection({
  id,
  icon,
  title,
  dark,
  children,
}: {
  id: string;
  icon: ReactNode;
  title: string;
  dark?: boolean;
  children: ReactNode;
}) {
  const sec: CSSProperties | undefined = dark ? { background: "var(--ink)", borderColor: "var(--ink)" } : undefined;
  const ico: CSSProperties | undefined = dark ? { background: "var(--ink-2)", borderColor: "#3A2E20" } : undefined;
  return (
    <section id={id} className="sec" style={sec} aria-labelledby={`${id}-title`}>
      <div className="flex items-center gap-[14px]">
        <span className="ico" style={ico}>
          {icon}
        </span>
        <h2 id={`${id}-title`} className="serif" style={{ fontSize: 27, color: dark ? "var(--cream)" : undefined }}>
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

/** Ikon line 22px untuk judul bagian (path dari design/privacy-policy.html). */
export function SectionIcon({ children, light }: { children: ReactNode; light?: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke={light ? "#E0C27A" : "#A47A2E"}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}
