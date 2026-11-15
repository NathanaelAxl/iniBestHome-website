import { faqs } from "@/content/landing";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlusIcon } from "@/components/ui/icons";
import { WA, waLink } from "@/lib/config";

export function Faq() {
  return (
    <section id="bantuan" className="sand sec-pad">
      <div className="wrap flex flex-wrap gap-12">
        <div className="flex flex-col" style={{ flex: "1 1 300px", gap: 14 }}>
          <SectionHeading
            tone="light"
            eyebrow="Bantuan"
            title={<>Pertanyaan <em>yang sering muncul.</em></>}
            size="clamp(34px,4.5vw,50px)"
            gap={14}
          />
          <p className="muted-l" style={{ margin: 0, fontSize: 16 }}>
            Belum terjawab? Chat admin dari menu Butuh Bantuan di aplikasi, atau WhatsApp{" "}
            <a href={waLink(WA.massage.number)} style={{ fontWeight: 600 }}>
              {WA.massage.label}
            </a>
            .
          </p>
        </div>
        <div className="flex min-w-0 flex-col gap-3" style={{ flex: "2 1 520px" }}>
          {faqs.map((f) => (
            <details key={f.q} className="card" style={{ padding: 0 }} open={f.open}>
              <summary
                className="flex items-center justify-between gap-4"
                style={{ padding: "22px 26px", fontWeight: 600, fontSize: 17 }}
              >
                {f.q}
                <PlusIcon size={20} className="plus text-gold-deep" />
              </summary>
              <p className="muted-l" style={{ margin: 0, padding: "0 26px 24px", fontSize: 15 }}>
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
