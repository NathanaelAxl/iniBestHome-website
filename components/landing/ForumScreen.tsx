import Image from "next/image";
import {
  Heart,
  History,
  House,
  ImageIcon,
  MessageCircle,
  MessageSquareText,
  MoreHorizontal,
  Pencil,
  Plus,
  Search,
  Share2,
  User,
  Wallet,
} from "lucide-react";

/**
 * Ilustrasi layar Forum (HTML) untuk mockup di section Komunitas.
 * Digambar di lebar 390px seperti di app, lalu diperkecil ke ukuran layar mockup (252px).
 * Postingan = contoh ilustrasi, bukan ulasan pelanggan.
 */

type Post = {
  user: string;
  time: string;
  text: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  liked?: boolean;
};

const posts: Post[] = [
  {
    user: "@sari_wellness",
    time: "2 jam lalu",
    text: "Buat yang sering pegal leher karena kerja depan laptop: minta terapis fokus di bahu & leher, lalu kompres hangat sebelum tidur. Ngaruh banget!",
    likes: 48,
    comments: 12,
    shares: 5,
    liked: true,
  },
  {
    user: "@nadia.rlx",
    time: "3 jam lalu",
    text: "Me time Minggu sore: Aromatherapy Massage di rumah. Wanginya masih kerasa sampai sekarang.",
    image: "/forum/pijat.webp",
    likes: 76,
    comments: 18,
    shares: 7,
    liked: true,
  },
  {
    user: "@dimas.runner",
    time: "5 jam lalu",
    text: "Ada yang pernah coba Deep Tissue habis lari 10K? Worth it nggak buat recovery?",
    likes: 21,
    comments: 9,
    shares: 1,
  },
  {
    user: "@andi_akun",
    time: "kemarin",
    text: "Rekomendasi minyak esensial buat tidur nyenyak dong. Lavender atau chamomile?",
    likes: 15,
    comments: 23,
    shares: 2,
  },
];

const GOLD = "#A47A2E";
const SCALE = 252 / 390;

function PostCard({ p }: { p: Post }) {
  return (
    <div style={{ background: "#fff", border: "1px solid #F0E8DA", borderRadius: 16, padding: "14px 14px 10px" }}>
      <div className="flex items-center" style={{ gap: 10 }}>
        <span
          className="flex shrink-0 items-center justify-center"
          style={{ width: 36, height: 36, borderRadius: "50%", background: "#F8EEDC", border: "1px solid #E9D7B6", color: "#8A6528", fontWeight: 600, fontSize: 14 }}
        >
          {p.user.charAt(1).toUpperCase()}
        </span>
        <span className="flex flex-1 flex-col" style={{ lineHeight: 1.25 }}>
          <b style={{ fontSize: 13.5 }}>{p.user}</b>
          <span style={{ fontSize: 11, color: "#9A8E7D" }}>{p.time}</span>
        </span>
        <MoreHorizontal size={18} color="#9A8E7D" />
      </div>
      <p style={{ margin: "10px 0 0", fontSize: 13, lineHeight: 1.5, color: "#2A2218" }}>{p.text}</p>
      {p.image && (
        <div className="relative overflow-hidden" style={{ marginTop: 10, borderRadius: 12, height: 104 }}>
          <Image src={p.image} alt="" fill sizes="220px" className="object-cover" />
        </div>
      )}
      <div className="flex items-center" style={{ gap: 18, marginTop: 10, paddingTop: 8, borderTop: "1px solid #F3ECE0", fontSize: 12, color: "#7A6E5E" }}>
        <span className="flex items-center" style={{ gap: 5 }}>
          <Heart size={15} color={p.liked ? "#8E4A3A" : "#7A6E5E"} fill={p.liked ? "#8E4A3A" : "none"} />
          {p.likes}
        </span>
        <span className="flex items-center" style={{ gap: 5 }}>
          <MessageCircle size={15} />
          {p.comments}
        </span>
        <span className="flex items-center" style={{ gap: 5 }}>
          <Share2 size={15} />
          {p.shares}
        </span>
      </div>
    </div>
  );
}

export function ForumScreen() {
  const nav = [
    { icon: House, label: "Beranda" },
    { icon: MessageSquareText, label: "Forum", active: true },
    { icon: History, label: "Riwayat" },
    { icon: Wallet, label: "Earnings" },
    { icon: User, label: "Profil" },
  ];
  return (
    <div
      role="img"
      aria-label="Layar Forum komunitas di aplikasi INI Best Home dengan beberapa postingan pengguna"
      className="absolute inset-0 overflow-hidden"
      style={{ background: "#FBF8F2" }}
    >
      <div
        aria-hidden
        className="absolute top-0 left-0 font-sans"
        style={{ width: 390, height: 552 / SCALE, transform: `scale(${SCALE})`, transformOrigin: "top left", color: "#1E1810" }}
      >
        {/* Header */}
        <div style={{ background: "#FFFEFB", padding: "26px 18px 0", borderBottom: "1px solid #EFE7D8" }}>
          <div className="flex items-center justify-between">
            <b style={{ fontSize: 22 }}>Forum</b>
            <span className="flex" style={{ gap: 8 }}>
              {[User, Search].map((Icon, i) => (
                <span key={i} className="flex items-center justify-center" style={{ width: 38, height: 38, borderRadius: 12, border: "1px solid #EBE2D2", background: "#fff" }}>
                  <Icon size={17} color="#6B5E4E" />
                </span>
              ))}
            </span>
          </div>
          <div className="flex" style={{ gap: 22, marginTop: 14, fontSize: 13.5, fontWeight: 600 }}>
            <span style={{ color: GOLD, borderBottom: `2.5px solid ${GOLD}`, paddingBottom: 9 }}>Untuk Anda</span>
            <span style={{ color: "#8C8070" }}>Trending</span>
            <span style={{ color: "#8C8070" }}>Terbaru</span>
          </div>
        </div>

        {/* Feed */}
        <div className="flex flex-col" style={{ padding: "12px 12px 0", gap: 10 }}>
          <div className="flex items-center" style={{ gap: 10, background: "#fff", border: "1px solid #F0E8DA", borderRadius: 16, padding: "10px 12px" }}>
            <span className="flex items-center justify-center" style={{ width: 34, height: 34, borderRadius: "50%", background: "#F8EEDC" }}>
              <Pencil size={15} color={GOLD} />
            </span>
            <span className="flex-1" style={{ fontSize: 12.5, color: "#A09482" }}>Bagikan cerita atau tanya sesuatu…</span>
            <ImageIcon size={18} color={GOLD} />
          </div>
          {posts.map((p) => (
            <PostCard key={p.user} p={p} />
          ))}
        </div>

        {/* FAB */}
        <span
          className="absolute flex items-center justify-center"
          style={{ right: 16, bottom: 86, width: 52, height: 52, borderRadius: "50%", background: "linear-gradient(135deg,#C9A052,#A47A2E)", boxShadow: "0 8px 18px rgba(164,122,46,.4)" }}
        >
          <Plus size={24} color="#fff" />
        </span>

        {/* Bottom nav */}
        <div
          className="absolute right-0 bottom-0 left-0 flex justify-around"
          style={{ background: "#FFFEFB", borderTop: "1px solid #EFE7D8", padding: "10px 6px 26px" }}
        >
          {nav.map(({ icon: Icon, label, active }) => (
            <span key={label} className="flex flex-col items-center" style={{ gap: 3, fontSize: 10.5, fontWeight: active ? 600 : 500, color: active ? GOLD : "#A09482" }}>
              <Icon size={20} />
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
