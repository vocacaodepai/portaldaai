import type { MetadataRoute } from "next";
import { SITEMAP_IDS, sitemapEntries, type SitemapId } from "@/lib/sitemap";

// /sitemaps/sitemap/paginas.xml, /sitemaps/sitemap/artigos.xml e
// /sitemaps/sitemap/noticias.xml, todos listados no índice /sitemap.xml.
export const dynamic = "force-static";

export function generateSitemaps() {
  return SITEMAP_IDS.map((id) => ({ id }));
}

export default async function sitemap(props: { id: Promise<string> }): Promise<MetadataRoute.Sitemap> {
  const id = (await props.id) as SitemapId;
  return SITEMAP_IDS.includes(id) ? sitemapEntries(id) : [];
}
