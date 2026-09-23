import type { MetadataRoute } from "next";
import { articleHref, articles } from "@/lib/news";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/practice-areas", priority: 0.9 },
    { path: "/news", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
  ];

  return [
    ...pages.map(({ path, priority }) => ({
      url: `${siteUrl}${path}`,
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...articles.map((article) => ({
      url: `${siteUrl}${articleHref(article)}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
