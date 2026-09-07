import type { MetadataRoute } from "next";
import { articles, categories, site } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: site.url, changeFrequency: "daily", priority: 1 },
    { url: `${site.url}/artigos`, changeFrequency: "daily", priority: 0.9 },
    { url: `${site.url}/sobre`, changeFrequency: "monthly", priority: 0.3 },
    { url: `${site.url}/contato`, changeFrequency: "monthly", priority: 0.3 },
    {
      url: `${site.url}/politica-de-privacidade`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    { url: `${site.url}/termos-de-uso`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const categoryPages: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${site.url}/categoria/${c.slug}`,
    changeFrequency: "daily",
    priority: 0.6,
  }));

  const articlePages: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${site.url}/artigos/${a.slug}`,
    lastModified: a.date,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticPages, ...categoryPages, ...articlePages];
}
