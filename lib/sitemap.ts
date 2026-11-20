/**
 * Entradas dos sitemaps, divididas em 3 grupos (cada um vira
 * /sitemaps/sitemap/<id>.xml, ver app/sitemaps/sitemap.ts) e reunidas no
 * índice /sitemap.xml (app/sitemap.xml/route.ts):
 *
 * - artigos: /artigos/<slug>
 * - noticias: /noticias/<slug>
 * - paginas: home, listagens (com /pagina/N), rotas de filtro, autor e
 *   institucionais
 *
 * Sem changeFrequency/priority (o Google ignora os dois); lastModified é
 * `updated ?? date` no artigo, `updatedAt ?? publishedAt ?? date` na notícia e o item mais
 * novo da página nas listagens. Artigo/notícia com `noindex: true` e rota de
 * filtro com poucos artigos (noindex) ficam de fora.
 */
import type { MetadataRoute } from "next";
import { INSTITUTIONAL_PATHS, INSTITUTIONAL_UPDATED } from "@/components/InstitutionalPage";
import { allCategoriaViews } from "@/components/listing/categoriaViews";
import { LISTING_PER_PAGE, NEWS_PER_PAGE, countPages, slicePage } from "@/components/listing/paginate";
import { pageHref } from "@/components/Pagination";
import { getReviews, site, sortedArticles } from "@/lib/articles";
import { author } from "@/lib/author";
import { sortedNews } from "@/lib/news";
import { absoluteUrl } from "@/lib/seo";
import type { Article, NewsItem } from "@/lib/types";

export type Entry = MetadataRoute.Sitemap[number];

export const SITEMAP_IDS = ["paginas", "artigos", "noticias"] as const;
export type SitemapId = (typeof SITEMAP_IDS)[number];

export function articleModified(a: Pick<Article, "date" | "updated">): string {
  return a.updated ?? a.date;
}

export function newsModified(n: Pick<NewsItem, "date" | "publishedAt" | "updatedAt">): string {
  return n.updatedAt ?? n.publishedAt ?? n.date;
}

function newest(dates: (string | undefined)[]): string | undefined {
  const list = dates.filter((d): d is string => Boolean(d));
  return list.length ? list.reduce((max, d) => (d > max ? d : max)) : undefined;
}

/** Raiz + /pagina/N de uma listagem; lastModified = item mais novo da página. */
function paginated(base: string, dates: string[], perPage: number): Entry[] {
  const total = countPages(dates.length, perPage);
  const out: Entry[] = [];
  for (let n = 1; n <= total; n++) {
    out.push({ url: absoluteUrl(pageHref(base, n)), lastModified: newest(slicePage(dates, n, perPage)) });
  }
  return out;
}

export function indexableArticles(): Article[] {
  return sortedArticles().filter((a) => !a.noindex);
}

export function indexableNews(): NewsItem[] {
  return sortedNews().filter((n) => !n.noindex);
}

function articleEntries(): Entry[] {
  return indexableArticles().map((a) => ({
    url: absoluteUrl(`/artigos/${a.slug}`),
    lastModified: articleModified(a),
  }));
}

function newsEntries(): Entry[] {
  return indexableNews().map((n) => ({
    url: absoluteUrl(`/noticias/${n.slug}`),
    lastModified: newsModified(n),
  }));
}

function pageEntries(): Entry[] {
  const articles = sortedArticles();
  const articleDates = articles.map(articleModified);
  const newsDates = sortedNews().map((n) => n.date);
  const newestArticle = newest(articleDates);

  const listagens: Entry[] = [
    { url: site.url, lastModified: newest([newestArticle, newest(newsDates)]) },
    ...paginated("/artigos", articleDates, LISTING_PER_PAGE),
    ...paginated("/noticias", newsDates, NEWS_PER_PAGE),
    { url: absoluteUrl("/reviews"), lastModified: newest(getReviews().map(articleModified)) ?? newestArticle },
  ];

  const categorias = allCategoriaViews()
    .filter((v) => v.indexable)
    .flatMap((v) => paginated(v.base, v.items.map(articleModified), v.perPage));

  const autor: Entry[] = [{ url: absoluteUrl(author.url), lastModified: newestArticle }];
  const institucionais: Entry[] = INSTITUTIONAL_PATHS.map((path) => ({
    url: absoluteUrl(path),
    lastModified: INSTITUTIONAL_UPDATED,
  }));

  return [...listagens, ...categorias, ...autor, ...institucionais];
}

export function sitemapEntries(id: SitemapId): Entry[] {
  if (id === "artigos") return articleEntries();
  if (id === "noticias") return newsEntries();
  return pageEntries();
}

/** URL pública de cada sitemap do índice. */
export function sitemapUrl(id: SitemapId): string {
  return absoluteUrl(`/sitemaps/sitemap/${id}.xml`);
}

export const NEWS_SITEMAP_PATH = "/news-sitemap.xml";

/** Notícias publicadas nas últimas `hours` horas (Google News aceita até 48 h). */
export function recentNews(now = new Date(), hours = 48): NewsItem[] {
  const limit = now.getTime() - hours * 3600 * 1000;
  return indexableNews().filter((n) => {
    const t = new Date(n.publishedAt ?? `${n.date}T12:00:00-03:00`).getTime();
    return Number.isFinite(t) && t >= limit && t <= now.getTime() + 3600 * 1000;
  });
}

export function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
