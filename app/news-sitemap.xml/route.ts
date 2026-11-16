import { site } from "@/lib/articles";
import { absoluteUrl } from "@/lib/seo";
import { escapeXml, recentNews } from "@/lib/sitemap";

// Sitemap do Google News: só notícias das últimas 48 h (regra do Google News).
// Estático, mas revalidado de hora em hora para a janela de 48 h andar sozinha
// mesmo entre um deploy e outro.
export const dynamic = "force-static";
export const revalidate = 3600;

function isoDate(publishedAt: string | undefined, date: string): string {
  return publishedAt ?? `${date}T12:00:00-03:00`;
}

export function GET() {
  const items = recentNews();
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">',
    ...items.map(
      (n) =>
        `<url><loc>${escapeXml(absoluteUrl(`/noticias/${n.slug}`))}</loc><news:news><news:publication><news:name>${escapeXml(
          site.name
        )}</news:name><news:language>pt</news:language></news:publication><news:publication_date>${isoDate(
          n.publishedAt,
          n.date
        )}</news:publication_date><news:title>${escapeXml(n.title)}</news:title></news:news></url>`
    ),
    "</urlset>",
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
