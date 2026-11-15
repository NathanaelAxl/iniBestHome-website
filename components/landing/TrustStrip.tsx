import { CountUp } from "@/components/ui/CountUp";
import { ShieldCheck } from "@/components/ui/icons";

function Item({ big, label }: { big: React.ReactNode; label: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-[14px]">
      {big}
      <span className="muted-l" style={{ fontSize: 14.5, lineHeight: 1.4 }}>
        {label}
      </span>
    </div>
  );
}

const num = { fontSize: 44, color: "var(--ink)", lineHeight: 1.1 } as const;

export function TrustStrip() {
  return (
    <section className="sand" style={{ padding: "36px 0" }}>
      {/* Mobile 2×2, desktop 4 kolom */}
      <div className="wrap grid grid-cols-2 items-center gap-x-5 gap-y-7 lg:grid-cols-4 lg:gap-6">
        {/* TODO: "5.0" = rating per layanan di app. Pastikan sesuai data asli sebelum live. */}
        <Item
          big={
            <span className="serif" style={num}>
              <CountUp value={5} decimals={1} />
            </span>
          }
          label={<>Rating layanan<br />dari pelanggan</>}
        />
        <Item
          big={
            <span className="serif" style={num}>
              <CountUp value={17} />+
            </span>
          }
          label={<>Layanan pijat,<br />terapi &amp; paket</>}
        />
        <Item
          big={
            <span className="serif" style={num}>
              <CountUp value={90} />
              <span style={{ fontSize: 22 }}> mnt</span>
            </span>
          }
          label={<>Durasi standar<br />body massage</>}
        />
        <Item
          big={<ShieldCheck size={44} className="text-gold-deep" />}
          label={<>Terapis lolos<br />verifikasi dokumen</>}
        />
      </div>
    </section>
  );
}
