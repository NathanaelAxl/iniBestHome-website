"use client";

import Script from "next/script";
import { useEffect } from "react";
import { META_PIXEL_ID } from "@/lib/config";
import { detectPlatform, track } from "@/lib/track";

/**
 * Meta Pixel. Tidak dimuat sama sekali jika NEXT_PUBLIC_META_PIXEL_ID kosong.
 * Event:
 *  - PageView di setiap halaman
 *  - DownloadClick {position, platform} saat link /download diklik
 *  - Contact saat link wa.me diklik
 */
export function MetaPixel() {
  useEffect(() => {
    if (!META_PIXEL_ID) return;
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") ?? "";
      if (href.startsWith("/download")) {
        const q = new URL(href, location.origin).searchParams;
        track(
          "DownloadClick",
          { position: q.get("utm_content"), platform: q.get("store") ?? detectPlatform() },
          true,
        );
      } else if (href.startsWith("https://wa.me/")) {
        track("Contact", { channel: "whatsapp" });
      }
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  if (!META_PIXEL_ID) return null;

  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`}
    </Script>
  );
}
