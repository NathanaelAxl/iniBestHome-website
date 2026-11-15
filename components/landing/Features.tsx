import type { ReactNode } from "react";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { Ring } from "@/components/ui/Rings";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Sticker, StickerIcon } from "@/components/ui/Sticker";
import { HeartFill } from "@/components/ui/icons";
import { ForumScreen } from "./ForumScreen";

/** Satu baris fitur: teks + phone mockup. phoneFirst = mockup di kiri (desktop). */
function FeatureRow({
  id,
  tone,
  phoneFirst,
  text,
  phone,
}: {
  id?: string;
  tone: "cream" | "sand" | "dark";
  phoneFirst: boolean;
  text: ReactNode;
  phone: ReactNode;
}) {
  const textCol = (
    <div className="flex min-w-0 flex-col gap-5" style={{ flex: "1 1 440px" }}>
      {text}
    </div>
  );
  const phoneCol = (
    <div className="relative flex justify-center" style={{ flex: "1 1 300px", padding: "20px 0" }}>
      {phone}
    </div>
  );
  return (
    <section id={id} className={`${tone} sec-pad relative`}>
      {/* Desain: mockup-kiri pakai wrap, mockup-kanan pakai wrap-reverse (di mobile mockup selalu di atas). */}
      <div
        className="wrap flex items-center"
        style={{ gap: 64, flexWrap: phoneFirst ? "wrap" : "wrap-reverse" }}
      >
        {phoneFirst ? (
          <>
            {phoneCol}
            {textCol}
          </>
        ) : (
          <>
            {textCol}
            {phoneCol}
          </>
        )}
      </div>
    </section>
  );
}

const lead = { margin: 0, fontSize: 17 } as const;

export function Features() {
  return (
    <>
      {/* FITUR 1: TERAPIS */}
      <FeatureRow
        id="fitur"
        tone="sand"
        phoneFirst
        phone={
          <>
            <PhoneMockup
              src="/screens/konfirmasi-pesanan.jpg"
              alt="Layar konfirmasi pemesanan dengan pilihan gender terapis"
            />
            <Sticker variant="dark" pill tilt={-3} style={{ left: 0, bottom: "18%" }}>
              Pria, wanita, <span className="text-gold">Anda yang pilih</span>
            </Sticker>
          </>
        }
        text={
          <>
            <SectionHeading
              tone="light"
              eyebrow="Sesuai keinginan Anda"
              title={<>Pilih terapis <em>favorit Anda.</em></>}
            />
            <p className="muted-l" style={lead}>
              Tentukan level terapis dan gendernya sebelum memesan, lalu pilih tanggal, jam, dan alamat layanan.
            </p>
            <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))" }}>
              <div style={{ background: "var(--card)", border: "1.5px solid var(--gold-deep)", borderRadius: 16, padding: "16px 18px" }}>
                <b className="block">Standard</b>
                <span className="muted-l" style={{ fontSize: 14 }}>Terapis junior · harga layanan</span>
              </div>
              <div style={{ background: "var(--card)", border: "1px solid #E3D5B8", borderRadius: 16, padding: "16px 18px" }}>
                <b className="block">
                  Pro <span style={{ color: "var(--gold-text)", fontWeight: 600 }}>+Rp 75rb</span>
                </b>
                <span className="muted-l" style={{ fontSize: 14 }}>Terapis senior</span>
              </div>
            </div>
            <p className="muted-l" style={{ margin: 0, fontSize: 14.5 }}>
              Gender terapis: <b className="text-ink">Bebas</b>, <b className="text-ink">Pria</b>, atau{" "}
              <b className="text-ink">Wanita</b>.
            </p>
          </>
        }
      />

      {/* FITUR 2: REFERRAL */}
      <FeatureRow
        tone="dark"
        phoneFirst={false}
        phone={
          <>
            <Ring size={440} />
            <PhoneMockup src="/screens/earnings.jpg" alt="Layar Earnings berisi saldo dan kode referral" />
            <Sticker
              variant="gold"
              tilt={4}
              style={{ right: "2%", top: "14%", flexDirection: "column", alignItems: "flex-start", gap: 0, padding: "14px 22px" }}
            >
              <span className="serif" style={{ fontSize: 38, lineHeight: 1 }}>10%</span>
              <span style={{ fontSize: 13 }}>dari tiap transaksi</span>
            </Sticker>
          </>
        }
        text={
          <>
            <SectionHeading
              tone="dark"
              eyebrow="Program referral"
              title={<>Bagikan kode <em>referral,</em> nikmati bonusnya.</>}
            />
            <p className="muted-d" style={lead}>
              Saat teman mendaftar pakai kode Anda, akunnya otomatis tertaut ke Anda. Setiap kali mereka booking
              dan pembayarannya selesai, 10% dari nilai transaksinya langsung masuk ke Saldo Anda.
            </p>
            <p className="muted-d" style={{ margin: 0, fontSize: 15 }}>
              Berlaku terus-menerus, tanpa batas jumlah teman atau transaksi. Saldo bisa ditarik atau dipakai untuk
              booking.
            </p>
          </>
        }
      />

      {/* FITUR 3: HARGA */}
      <FeatureRow
        tone="cream"
        phoneFirst
        phone={
          <>
            <PhoneMockup src="/screens/rincian-pembayaran.jpg" alt="Layar rincian pembayaran sebelum konfirmasi" />
            <Sticker tilt={3} style={{ right: 0, top: "22%" }}>
              Harga jelas, <span className="text-gold-text">tanpa kejutan</span>
            </Sticker>
          </>
        }
        text={
          <>
            <SectionHeading
              tone="light"
              eyebrow="Harga transparan"
              title={<>Total biaya terlihat <em>sebelum Anda bayar.</em></>}
            />
            <p className="muted-l" style={lead}>
              Rincian pembayaran menampilkan harga layanan, potongan voucher, dan app fee Rp 5.000. Yang tertulis
              di Total Bayar adalah yang Anda bayar.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {["Cash", "Online Payment", "Saldo", "Voucher"].map((t) => (
                <span key={t} className="tag" style={{ fontSize: 13, padding: "7px 14px" }}>
                  {t}
                </span>
              ))}
            </div>
          </>
        }
      />

      {/* FITUR 4: FORUM */}
      <FeatureRow
        tone="sand"
        phoneFirst={false}
        phone={
          <>
            <PhoneMockup>
              <ForumScreen />
            </PhoneMockup>
            <Sticker tilt={3} style={{ right: "-2%", top: "26%" }}>
              <StickerIcon bg="var(--brick)">
                <HeartFill size={16} className="text-white" />
              </StickerIcon>
              <span>
                Berbagi cerita sehat<small>Tips, pengalaman, inspirasi</small>
              </span>
            </Sticker>
          </>
        }
        text={
          <>
            <SectionHeading
              tone="light"
              eyebrow="Komunitas wellness"
              title={<>Terhubung, <em>tumbuh bersama.</em></>}
            />
            <p className="muted-l" style={lead}>
              Di Forum, pengguna berbagi cerita, tips perawatan tubuh, dan pengalaman dengan terapis. Lihat yang
              Untuk Anda, Trending, atau Terbaru.
            </p>
          </>
        }
      />
    </>
  );
}
