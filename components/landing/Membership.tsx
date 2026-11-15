import { Award, Crown, Medal } from "lucide-react";
import { tiers } from "@/content/landing";
import { SectionHeading } from "@/components/ui/SectionHeading";

const metal: Record<string, { cls: string; Icon: typeof Award }> = {
  Bronze: { cls: "tier-bronze", Icon: Award },
  Silver: { cls: "tier-silver", Icon: Medal },
  Gold: { cls: "tier-gold", Icon: Crown },
};

export function Membership() {
  return (
    <section id="member" className="dark sec-pad">
      <div className="wrap flex flex-col" style={{ gap: 44 }}>
        <div className="reveal">
          <SectionHeading
            tone="dark"
            eyebrow="Member & langganan"
            title={<>Makin sering pijat, <em>makin banyak benefit.</em></>}
            gap={16}
            style={{ maxWidth: 680 }}
          />
        </div>
        <div className="flex flex-wrap items-stretch gap-6">
          {/* Mobile/tablet: tier digeser ke samping. Desktop: 3 kolom. */}
          <div className="h-scroll-m min-w-0 lg:grid lg:grid-cols-3 lg:gap-4" style={{ flex: "2 1 520px" }}>
            {tiers.map((t) => {
              const { cls, Icon } = metal[t.name];
              return (
                <div key={t.name} className={`tier ${cls}`}>
                  <div className="flex items-center gap-3">
                    <span className="tier-medal" aria-hidden>
                      <Icon size={20} strokeWidth={2} />
                    </span>
                    <span className="flex flex-col" style={{ lineHeight: 1.3 }}>
                      <b className="tier-name">{t.name}</b>
                      <span className="muted-d" style={{ fontSize: 13 }}>
                        {t.note}
                      </span>
                    </span>
                  </div>
                  <ul className="m-0 list-none p-0" style={{ fontSize: 14.5, lineHeight: 1.8, paddingTop: 4 }}>
                    {t.perks.map((p) => (
                      <li key={p} className="flex items-baseline gap-2">
                        <span aria-hidden style={{ color: "var(--gold)", fontSize: 10 }}>
                          ◆
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          {/* Desain: gradient #B68A3A → #8A6528. Digelapkan sedikit supaya teks krem lolos AA. */}
          <div
            className="reveal relative flex min-w-0 flex-col overflow-hidden"
            style={{
              flex: "1 1 300px",
              gap: 14,
              borderRadius: 24,
              padding: 28,
              background: "linear-gradient(140deg,#93702D,#6E5020)",
              color: "#FFFCF6",
              boxShadow: "0 24px 50px -24px rgba(224,194,122,.45)",
            }}
          >
            <span
              aria-hidden
              className="absolute"
              style={{ width: 220, height: 220, right: -70, top: -90, borderRadius: "50%", border: "1px solid rgba(255,252,246,.18)" }}
            />
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
