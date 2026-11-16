import { downloadHref, type DownloadPosition } from "@/lib/config";
import { PhoneIcon, PlayIcon } from "./icons";

/** Tombol hitam Google Play / App Store. Lewat /download supaya UTM tercatat. */
export function StoreButton({ store, position }: { store: "play" | "appstore"; position: DownloadPosition }) {
  const play = store === "play";
  const name = play ? "Google Play" : "App Store";
  return (
    <a className="store" href={downloadHref(position, store)} aria-label={`Unduh di ${name}`}>
      {play ? <PlayIcon className="text-gold" /> : <PhoneIcon className="text-gold" />}
      <span>
        <small>Unduh di</small>
        <b>{name}</b>
      </span>
    </a>
  );
}

export function StoreButtons({ position, center }: { position: DownloadPosition; center?: boolean }) {
  return (
    <div className={`flex flex-wrap gap-[14px] ${center ? "justify-center" : ""}`}>
      <StoreButton store="play" position={position} />
      <StoreButton store="appstore" position={position} />
    </div>
  );
}
