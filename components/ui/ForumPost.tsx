import type { ForumPostData } from "@/content/landing";
import { CommentIcon, HeartIcon, ShareIcon } from "./icons";

/** Kartu testimoni bergaya postingan Forum di app. */
export function ForumPost({ post }: { post: ForumPostData }) {
  return (
    <article className="post">
      <div className="flex items-center gap-3">
        <span className="av" aria-hidden>
          {post.username.replace(/^@/, "").charAt(0).toUpperCase()}
        </span>
        <span className="flex flex-col" style={{ lineHeight: 1.3 }}>
          <b style={{ fontSize: 15 }}>{post.username}</b>
          {/* Desain: #8C7F6E (4.0:1) → digelapkan supaya lolos AA */}
          <span style={{ fontSize: 12.5, color: "#786B5A" }}>{post.date}</span>
        </span>
      </div>
      <p style={{ margin: 0, fontSize: 15 }}>{post.text}</p>
      <div className="acts">
        <span>
          <HeartIcon size={16} />
          <span className="sr-only">Suka:</span>
          {post.likes}
        </span>
        <span>
          <CommentIcon size={16} />
          <span className="sr-only">Komentar:</span>
          {post.comments}
        </span>
        <span>
          <ShareIcon size={16} />
          <span className="sr-only">Dibagikan:</span>
          {post.shares}
        </span>
      </div>
    </article>
  );
}
