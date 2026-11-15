/* Ikon line dari file desain (semua dekoratif → aria-hidden). */
import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement> & { size?: number };

function Svg({ size = 24, children, ...rest }: P) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const PlayIcon = (p: P) => (
  <Svg strokeWidth={1.6} {...p}>
    <path d="M5 3.5v17l14-8.5z" />
  </Svg>
);
export const PhoneIcon = (p: P) => (
  <Svg strokeWidth={1.6} {...p}>
    <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
    <path d="M10.5 18.5h3" />
  </Svg>
);
export const CheckIcon = (p: P) => (
  <Svg strokeWidth={2.4} {...p}>
    <path d="M5 12l5 5 9-10" />
  </Svg>
);
export const HeartFill = (p: P) => (
  <Svg stroke="none" fill="currentColor" {...p}>
    <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
  </Svg>
);
export const HeartIcon = (p: P) => (
  <Svg strokeWidth={1.8} {...p}>
    <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
  </Svg>
);
export const CommentIcon = (p: P) => (
  <Svg strokeWidth={1.8} {...p}>
    <path d="M4 5h16v11H9l-5 4z" />
  </Svg>
);
export const ShareIcon = (p: P) => (
  <Svg strokeWidth={1.8} {...p}>
    <path d="M12 15V4M8 8l4-4 4 4M5 13v6h14v-6" />
  </Svg>
);
export const ShieldCheck = (p: P) => (
  <Svg strokeWidth={1.4} {...p}>
    <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
    <path d="M9 12l2 2 4-4" />
  </Svg>
);
export const PlusIcon = (p: P) => (
  <Svg strokeWidth={2} {...p}>
    <path d="M12 5v14M5 12h14" />
  </Svg>
);
export const ChevronDown = (p: P) => (
  <Svg strokeWidth={2} {...p}>
    <path d="M6 9l6 6 6-6" />
  </Svg>
);
export const ChatIcon = (p: P) => (
  <Svg strokeWidth={1.8} {...p}>
    <path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z" />
  </Svg>
);
export const WarningIcon = (p: P) => (
  <Svg strokeWidth={1.8} {...p}>
    <path d="M12 3l10 18H2z" />
    <path d="M12 10v5M12 18h.01" />
  </Svg>
);
export const CheckCircle = (p: P) => (
  <Svg strokeWidth={2} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12l3 3 5-6" />
  </Svg>
);
