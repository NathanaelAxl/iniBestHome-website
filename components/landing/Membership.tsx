import { tiers } from "@/content/landing";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Membership() {
  return (
    <section id="member" className="dark sec-pad">
      <div className="wrap flex flex-col" style={{ gap: 44 }}>
        <SectionHeading
          tone="dark"
          eyebrow="Member & langganan"
          title={<>Makin sering pijat, <em>makin banyak benefit.</em></>}
          gap={16}
          style={{ maxWidth: 680 }}
        />
        <div className="flex flex-wrap items-stretch gap-6">
          <div
            className="grid min-w-0 gap-4"
            style={{ flex: "2 1 520px", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))" }}
          >
            {tiers.map((t) => (
              <div
                key={t.name}
                className="flex flex-col"
                style={{
                  gap: 10,
                  borderRadius: 20,
                  padding: 24,
                  border: t.highlight ? "1px solid var(--gold)" : "1px solid rgba(224,194,122,.35)",
                  background: t.highlight ? "rgba(224,194,122,.08)" : undefined,
                }}
              >
                <b style={{ fontSize: 18, color: t.color }}>{t.name}</b>
                <span className="muted-d" style={{ fontSize: 13 }}>
                  {t.note}
                </span>
                <ul className="m-0 list-none p-0" style={{ fontSize: 14.5, lineHeight: 1.8 }}>
                  {t.perks.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Desain: gradient #B68A3A → #8A6528. Digelapkan sedikit supaya teks krem lolos AA. */}
          <div
            className="flex min-w-0 flex-col"
            style={{
              flex: "1 1 300px",
              gap: 14,
              borderRadius: 24,
              padding: 28,
              background: "linear-gradient(140deg,#93702D,#6E5020)",
              color: "#FFFCF6",
            }}
          >
            <span style={{ fontSize: 14, fontWeight: 500 }}>Subscription · Monthly Basic</span>
            <span>
              <span className="serif" style={{ fontSize: 44 }}>
                Rp 10.000
              </span>
              <span style={{ fontSize: 14 }}> / 30 hari</span>
            </span>
            <span style={{ fontSize: 15, lineHeight: 1.8 }}>
              Gratis biaya panggilan (Rp 15.000)
              <br />
              Gratis same-day fee (Rp 20.000)
            </span>
            <span style={{ fontSize: 13, color: "#F6E6C4" }}>
              Perpanjang kapan saja. Sisa hari tidak hangus, masa aktif diakumulasi.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
