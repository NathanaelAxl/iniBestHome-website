import { downloadHref, type DownloadPosition } from "@/lib/config";
import { PhoneIcon, PlayIcon } from "./icons";

/** Tombol hitam Google Play. Lewat /download supaya UTM tercatat. */
export function PlayStoreButton({ position }: { position: DownloadPosition }) {
  return (
    <a className="store" href={downloadHref(position, "play")} aria-label="Unduh di Google Play">
      <PlayIcon className="text-gold" />
      <span>
        <small>Unduh di</small>
        <b>Google Play</b>
      </span>
    </a>
  );
}

/**
 * App Store: aplikasi iOS masih dalam tahap pengembangan → bukan link, hanya label "Segera hadir".
 * Setelah rilis, ganti dengan tombol link seperti PlayStoreButton (lihat TODO.md).
 */
export function AppStoreSoon() {
  return (
    <span className="store store-soon" aria-label="App Store: segera hadir, aplikasi iOS masih dalam tahap pengembangan">
      <PhoneIcon className="text-gold" />
      <span>
        <small>Segera hadir di</small>
        <b>App Store</b>
      </span>
      <span className="soon-pill" aria-hidden>
        Soon
      </span>
    </span>
  );
}

export function StoreButtons({ position, center }: { position: DownloadPosition; center?: boolean }) {
  return (
    <div className={`flex flex-wrap gap-[14px] ${center ? "justify-center" : ""}`}>
      <PlayStoreButton position={position} />
      <AppStoreSoon />
    </div>
  );
}
