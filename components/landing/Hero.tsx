import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { Diamond, Dot, Ring } from "@/components/ui/Rings";
import { Sticker, StickerIcon } from "@/components/ui/Sticker";
import { StoreButtons } from "@/components/ui/StoreButton";
import { CheckIcon } from "@/components/ui/icons";

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

          {/* HP belakang (miring) + HP depan (splash) */}
          <div className="phone-back" aria-hidden>
            <PhoneMockup src="/screens/body-massage.jpg" alt="" />
          </div>
          <PhoneMockup src="/screens/splash.jpg" alt="Layar pembuka aplikasi INI Best Home" priority />

          <Sticker tilt={3} float style={{ right: "-2%", top: "30%" }}>
            <StickerIcon bg="linear-gradient(135deg,#ECD394,#A47A2E)">
              <CheckIcon size={16} className="text-ink" />
            </StickerIcon>
            <span>
              Terapis Terverifikasi<small>Aman &amp; profesional</small>
            </span>
          </Sticker>
          <Sticker
            variant="gold"
            tilt={-3}
            float
            floatDelay
            style={{ left: "-2%", bottom: "14%", borderRadius: 999, padding: "14px 24px" }}
          >
            Booking dalam 1 menit
          </Sticker>
        </div>
      </div>
    </section>
  );
}
