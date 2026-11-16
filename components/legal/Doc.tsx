import type { ReactNode } from "react";
import { LegalEnhancements, Toc } from "./LegalEnhancements";

/**
 * Tata letak dokumen legal yang sederhana: judul polos, daftar isi di samping (desktop),
 * isi satu kolom yang enak dibaca. Tanpa kartu, ikon, atau ornamen.
 */
export function DocLayout({
  title,
  updated,
  intro,
  toc,
  children,
}: {
  title: string;
  updated: string;
  intro: ReactNode;
  toc: readonly (readonly [string, string])[];
  children: ReactNode;
}) {
  return (
    <main className="doc-page">
      <div className="wrap" style={{ paddingTop: "clamp(40px,6vw,72px)", paddingBottom: "clamp(56px,8vw,96px)" }}>
        <div className="doc-grid">
          <Toc items={toc}>
            <summary className="doc-toc-summary">Daftar isi</summary>
          </Toc>
          <article className="doc">
            <header className="doc-head">
              <h1>{title}</h1>
              <p className="doc-updated">{updated}</p>
              <div className="doc-intro">{intro}</div>
            </header>
            {children}
          </article>
        </div>
      </div>
      <LegalEnhancements />
    </main>
  );
}

export function DocSection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-t`}>
      <h2 id={`${id}-t`}>{title}</h2>
      {children}
    </section>
  );
}

/** Tabel sederhana bergaris tipis, scroll horizontal di layar sempit. */
export function DocTable({ head, rows }: { head: [string, string]; rows: [string, string][] }) {
  return (
    <div className="doc-table-wrap" tabIndex={0} role="region" aria-label={`Tabel ${head[0]} dan ${head[1]}`}>
      <table className="doc-table">
        <thead>
          <tr>
            <th scope="col">{head[0]}</th>
            <th scope="col">{head[1]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([a, b]) => (
            <tr key={a}>
              <td>{a}</td>
              <td>{b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
