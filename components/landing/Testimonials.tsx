import { forumPosts } from "@/content/landing";
import { ForumPost } from "@/components/ui/ForumPost";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section className="sand sec-pad">
      <div className="wrap flex flex-col" style={{ gap: 44 }}>
        <div className="flex flex-wrap items-end justify-between gap-5">
          <SectionHeading
            tone="light"
            title={<>Cerita dari <em>Forum kami.</em></>}
            size="clamp(36px,4.6vw,54px)"
            style={{ maxWidth: 640 }}
          />
          <p className="muted-l" style={{ margin: 0, fontSize: 15, maxWidth: "24em" }}>
            Pengalaman pengguna INI Best Home setelah sesi pijat di rumah.
          </p>
        </div>
        <div
          className="grid items-start"
          style={{ gap: 18, gridTemplateColumns: "repeat(auto-fit, minmax(min(300px,100%), 1fr))" }}
        >
          {forumPosts.map((p) => (
            <ForumPost key={p.username} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
