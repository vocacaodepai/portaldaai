import { NEWS_SITEMAP_PATH, SITEMAP_IDS, escapeXml, sitemapEntries, sitemapUrl } from "@/lib/sitemap";
import { absoluteUrl } from "@/lib/seo";

// Índice de sitemaps no endereço de sempre (/sitemap.xml, o que está no
// Search Console e no robots.txt): aponta para os sitemaps por tipo e para o
// sitemap de notícias recentes (Google News).
export const dynamic = "force-static";

function lastmodOf(dates: (string | Date | undefined)[]): string | undefined {
  const list = dates
    .map((d) => (d instanceof Date ? d.toISOString() : d))
    .filter((d): d is string => Boolean(d))
    .map((d) => new Date(d.length === 10 ? `${d}T12:00:00-03:00` : d).getTime())
    .filter(Number.isFinite);
  return list.length ? new Date(Math.max(...list)).toISOString() : undefined;
}

export function GET() {
  const items = [
    ...SITEMAP_IDS.map((id) => ({
      loc: sitemapUrl(id),
      lastmod: lastmodOf(sitemapEntries(id).map((e) => e.lastModified)),
    })),
    { loc: absoluteUrl(NEWS_SITEMAP_PATH), lastmod: undefined },
  ];
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...items.map(
      (it) => `<sitemap><loc>${escapeXml(it.loc)}</loc>${it.lastmod ? `<lastmod>${it.lastmod}</lastmod>` : ""}</sitemap>`
    ),
    "</sitemapindex>",
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
