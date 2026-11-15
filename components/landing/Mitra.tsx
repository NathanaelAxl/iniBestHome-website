import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { RingAt } from "@/components/ui/Rings";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { downloadHref } from "@/lib/config";

const docs = [
  { name: "KTP", required: true },
  { name: "Foto diri", required: true },
  { name: "SKCK", required: false },
  { name: "Sertifikat pijat", required: false },
];

export function Mitra() {
  return (
    <section id="mitra" className="cream sec-pad">
      <div className="wrap">
        <div
          className="relative flex flex-wrap items-center overflow-hidden"
          style={{ background: "var(--ink)", borderRadius: 32, padding: "clamp(32px,5vw,64px)", gap: 48 }}
        >
          <RingAt size={560} style={{ right: -180, top: -200 }} />
          <RingAt size={380} style={{ right: -90, top: -110 }} />
          <div className="reveal relative flex min-w-0 flex-col gap-5" style={{ flex: "1 1 440px" }}>
            <SectionHeading
              tone="dark"
              eyebrow="Jadi mitra terapis"
              title={<>Keahlian Anda, <em>pelanggan di sekitar Anda.</em></>}
              size="clamp(34px,4.4vw,50px)"
            />
            <p className="muted-d" style={{ margin: 0, fontSize: 17 }}>
              Satu akun untuk semua. Daftar sebagai pelanggan, lalu ajukan verifikasi mitra kapan saja dari menu
              Profil › Daftar jadi Mitra.
            </p>
            <ul
              className="m-0 grid list-none p-0"
              style={{ gap: 10, gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}
            >
              {docs.map((d) => (
                <li
                  key={d.name}
                  style={{
                    border: "1px solid rgba(224,194,122,.3)",
                    borderRadius: 14,
                    padding: "12px 16px",
                    color: "var(--cream)",
                    fontSize: 14.5,
                  }}
                >
                  {d.name}{" "}
                  {d.required ? (
                    <span style={{ color: "var(--gold)", fontSize: 12, fontWeight: 600 }}>· Wajib</span>
                  ) : (
                    <span style={{ color: "var(--muted-dark)", fontSize: 12 }}>· Opsional</span>
                  )}
                </li>
              ))}
            </ul>
            <p className="muted-d" style={{ margin: 0, fontSize: 14 }}>
              Estimasi review dokumen 1×24 jam.
            </p>
            <div className="flex flex-wrap gap-3">
              <a className="btn-gold" href={downloadHref("mitra")}>
                Download &amp; daftar jadi mitra
              </a>
            </div>
          </div>
          <div className="reveal relative flex justify-center" style={{ flex: "0 1 290px" }}>
            <div className="mitra-phone">
              <PhoneMockup src="/screens/status-mitra.jpg" alt="Layar status pendaftaran mitra" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
