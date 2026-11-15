import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

/**
 * Frame ponsel #14100B radius 44px (varian "sm" 36px untuk tutorial hapus akun).
 * Isi dengan screenshot dari public/screens/ atau children (ilustrasi HTML).
 */
export function PhoneMockup({
  src,
  alt = "",
  priority,
  size = "md",
  style,
  screenStyle,
  children,
}: {
  src?: string;
  alt?: string;
  priority?: boolean;
  size?: "md" | "sm";
  style?: CSSProperties;
  screenStyle?: CSSProperties;
  children?: ReactNode;
}) {
  return (
    <div className={size === "sm" ? "phone phone-sm" : "phone"} style={style}>
      <div className="screen" style={screenStyle}>
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={size === "sm" ? "204px" : "252px"}
            className="object-cover object-top"
          />
        ) : (
          children
        )}
      </div>
    </div>
  );
}
