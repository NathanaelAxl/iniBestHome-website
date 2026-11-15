import { steps } from "@/content/landing";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowItWorks() {
  return (
    <section className="cream sec-pad">
      <div className="wrap flex flex-col gap-12">
        <div className="reveal">
        <SectionHeading
          tone="light"
          eyebrow="Cara kerja"
          title={<>Tiga langkah, <em>lalu rileks.</em></>}
          size="clamp(36px,4.6vw,54px)"
          gap={14}
          style={{ maxWidth: 620 }}
        />
        </div>
        <ol
          className="m-0 grid list-none p-0"
          style={{ gap: 28, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
        >
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="flex flex-col gap-3"
              style={{ paddingTop: 22, borderTop: "1.5px solid var(--gold-mid)" }}
            >
              <span aria-hidden className="serif italic" style={{ fontSize: 56, color: "var(--gold-deep)" }}>
                {i + 1}
              </span>
              <h3 className="serif" style={{ fontSize: 26 }}>
                {s.title}
              </h3>
              <p className="muted-l" style={{ margin: 0, fontSize: 15.5 }}>
                {s.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
