import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCards } from "./ServiceCards";

export function Services() {
  return (
    <section id="layanan" className="cream" style={{ padding: "clamp(72px,9vw,120px) 0" }}>
      <div className="wrap flex flex-col gap-10 lg:gap-12">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
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
        <ServiceCards />
      </div>
    </section>
  );
}
