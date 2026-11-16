import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { Diamond, Dot, Ring } from "@/components/ui/Rings";
import { StoreButtons } from "@/components/ui/StoreButton";

export function Hero() {
  return (
    <section
      id="top"
      className="dark relative"
      style={{ padding: "clamp(56px,8vw,96px) 0 clamp(64px,8vw,104px)" }}
    >
      <div className="wrap flex flex-wrap items-center" style={{ gap: 56 }}>
        <div className="flex min-w-0 flex-col" style={{ flex: "1 1 480px", gap: 26 }}>
          <p className="eyebrow text-gold">Home service massage</p>
          <h1 className="serif" style={{ fontSize: "clamp(44px,6.4vw,78px)", color: "var(--cream)" }}>
            Pijat profesional, <span className="gi">datang ke rumah</span> Anda.
          </h1>
          <p className="muted-d" style={{ margin: 0, fontSize: 18, maxWidth: "32em" }}>
            Pilih layanan, pilih terapis, tentukan jadwal. Terapis terverifikasi datang ke alamat Anda, dengan
            rincian biaya yang terlihat sebelum membayar.
          </p>
          <div style={{ paddingTop: 6 }}>
            <StoreButtons position="hero" />
          </div>
          <p className="muted-d" style={{ margin: 0, fontSize: 13.5, letterSpacing: ".3em" }}>
            HOME SERVICE · SPA · REFLEXOLOGY
          </p>
        </div>

        <div
          className="hero-visual relative flex min-w-0 items-center justify-center"
          style={{ flex: "1 1 400px", minHeight: 640 }}
        >
          <div className="hero-glow" aria-hidden />
          <Ring size={600} />
          <Ring size={460} />
          <Ring size={340} style={{ borderColor: "rgba(224,194,122,.32)" }} />
          {/* Ornamen berputar sangat pelan mengelilingi mockup */}
          <div className="orbit" aria-hidden>
            <Diamond style={{ left: "10%", top: "26%" }} />
            <Diamond style={{ right: "8%", bottom: "26%" }} />
            <Dot style={{ right: "16%", top: "9%" }} />
            <Dot style={{ left: "22%", bottom: "7%", width: 8, height: 8, opacity: 0.7 }} />
          </div>
          <PhoneMockup src="/screens/splash.jpg" alt="Layar pembuka aplikasi INI Best Home" priority />
        </div>
      </div>
    </section>
  );
}
