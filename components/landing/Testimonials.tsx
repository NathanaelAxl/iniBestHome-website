import { forumPosts } from "@/content/landing";
import { ForumPost } from "@/components/ui/ForumPost";
import { SectionHeading } from "@/components/ui/SectionHeading";

const cardW = { width: 340 } as const;

export function Testimonials() {
  return (
    <section className="sand sec-pad">
      <div className="wrap flex flex-col" style={{ gap: 44 }}>
        <div className="reveal flex flex-wrap items-end justify-between gap-5">
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

        {/* Mobile: carousel geser */}
        <div className="md:hidden">
        <div className="h-scroll" style={{ alignItems: "flex-start" }}>
          {forumPosts.map((p) => (
            <div key={p.username} style={{ width: "min(82vw, 330px)" }}>
              <ForumPost post={p} />
            </div>
          ))}
        </div>
        </div>

        {/* Tablet & desktop: marquee pelan, berhenti saat di-hover/fokus */}
        <div className="marquee hidden md:block" style={{ margin: "0 calc(50% - 50vw)" }}>
          <div className="marquee-track" style={{ alignItems: "flex-start", padding: "4px 0 8px" }}>
            {[0, 1].map((copy) =>
              forumPosts.map((p) => (
                <div key={`${copy}-${p.username}`} style={cardW} aria-hidden={copy === 1 || undefined}>
                  <ForumPost post={p} />
                </div>
              )),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
