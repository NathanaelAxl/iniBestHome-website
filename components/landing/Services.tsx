import { completePackages, serviceGroups } from "@/content/landing";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { downloadHref } from "@/lib/config";

export function Services() {
  return (
    <section id="layanan" className="cream" style={{ padding: "clamp(72px,9vw,120px) 0" }}>
      <div className="wrap flex flex-col gap-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            tone="light"
            eyebrow="Pilihan layanan"
            title={<>Semua relaksasi, <em>satu aplikasi.</em></>}
            size="clamp(36px,5vw,58px)"
            gap={16}
            style={{ maxWidth: 640 }}
          />
          <p className="muted-l" style={{ margin: 0, fontSize: 15.5, maxWidth: "26em" }}>
            Harga di bawah adalah harga mulai dari, sebelum biaya panggilan dan app fee yang tampil saat
            konfirmasi.
          </p>
        </div>

        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(255px, 1fr))" }}>
          {serviceGroups.map((g) => (
            <article key={g.title} className="card flex flex-col gap-3">
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
            </article>
          ))}

          <article
            className="card flex flex-col gap-3"
            style={{ background: "var(--ink)", borderColor: "var(--ink)", color: "var(--cream)" }}
          >
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
            <a
              href={downloadHref("services")}
              style={{ fontSize: 14.5, fontWeight: 600, color: "var(--gold)", paddingTop: 4 }}
            >
              Lihat Paket Komplit A–D di aplikasi
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
