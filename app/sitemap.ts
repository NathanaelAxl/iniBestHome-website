import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL || "http://localhost:3000";
  return [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/privacy-policy`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/delete-account`, changeFrequency: "yearly", priority: 0.5 },
  ];
}
