import { ShieldCheck } from "@/components/ui/icons";

function Item({ big, label }: { big: React.ReactNode; label: React.ReactNode }) {
  return (
    <div className="flex items-center gap-[14px]">
      {big}
      <span className="muted-l" style={{ fontSize: 14.5, lineHeight: 1.4 }}>
        {label}
      </span>
    </div>
  );
}

const num = { fontSize: 44, color: "var(--ink)" } as const;

export function TrustStrip() {
  return (
    <section className="sand" style={{ padding: "36px 0" }}>
      <div
        className="wrap grid items-center gap-6"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))" }}
      >
        {/* TODO: "5.0" = rating per layanan di app. Pastikan sesuai data asli sebelum live. */}
        <Item
          big={<span className="serif" style={num}>5.0</span>}
          label={<>Rating layanan<br />dari pelanggan</>}
        />
        <Item
          big={<span className="serif" style={num}>17+</span>}
          label={<>Layanan pijat,<br />terapi &amp; paket</>}
        />
        <Item
          big={
            <span className="serif" style={num}>
              90<span style={{ fontSize: 22 }}> mnt</span>
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
