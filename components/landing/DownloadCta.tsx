import Image from "next/image";
import { Diamond, Dot, Ring } from "@/components/ui/Rings";
import { StoreButtons } from "@/components/ui/StoreButton";

export function DownloadCta() {
  return (
    <section
      id="download"
      className="dark relative overflow-hidden"
      style={{ padding: "clamp(80px,10vw,128px) 0" }}
    >
      <Ring size={820} />
      <Ring size={580} />
      <Diamond style={{ left: "20%", top: "30%" }} />
      <Diamond style={{ right: "22%", bottom: "28%" }} />
      <Dot style={{ right: "26%", top: "18%" }} />
      <div className="wrap flex flex-col items-center gap-6 text-center">
        <p className="eyebrow text-gold">Available now</p>
        <Image
          src="/logo.png"
          alt="Logo INI Best Home"
          width={120}
          height={120}
          style={{ borderRadius: 32, boxShadow: "0 0 80px rgba(224,194,122,.25)" }}
        />
        <p style={{ margin: 0, fontSize: 22, fontWeight: 600, color: "var(--gold)" }}>INI Best Home</p>
        <h2 className="serif" style={{ fontSize: "clamp(54px,8vw,96px)", color: "var(--cream)" }}>
          Time to <span className="gi">relax.</span>
        </h2>
        <div style={{ paddingTop: 8 }}>
          <StoreButtons position="cta" center />
        </div>
      </div>
    </section>
  );
}
