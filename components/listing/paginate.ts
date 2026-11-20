/**
 * Paginação das listagens. /categoria/ferramentas segue com 12 por página
 * (ARTICLES_PER_PAGE, mantém as URLs /pagina/N que já existiam); /artigos,
 * AI Indica, as 5 categorias gerais e as rotas de filtro usam 30
 * (LISTING_PER_PAGE, divisível pela grade de 2 e de 3 colunas).
 */
export const ARTICLES_PER_PAGE = 12;
export const LISTING_PER_PAGE = 30;
export const NEWS_PER_PAGE = 30;

/**
 * Rotas de filtro (/categoria/ai-indica/<produto>, /categoria/<slug>/<subtipo>)
 * com menos artigos que isto continuam no ar (os chips apontam pra elas), mas
 * saem do índice (noindex, follow) e do sitemap: listagem de 1 ou 2 cards é
 * página rala, só repete o que já está na categoria-mãe.
 */
export const MIN_INDEXABLE_FILTER = 3;

export function countPages(total: number, perPage: number): number {
  return Math.max(1, Math.ceil(total / perPage));
}

export function slicePage<T>(items: T[], page: number, perPage: number): T[] {
  return items.slice((page - 1) * perPage, page * perPage);
}

/** Converte o segmento [page] em número; null quando não é um inteiro positivo. */
export function parsePage(raw: string): number | null {
  if (!/^[1-9]\d*$/.test(raw)) return null;
  const n = Number(raw);
  return Number.isSafeInteger(n) ? n : null;
}

/** Params de todas as páginas (1..total) para generateStaticParams. */
export function pageParams(total: number): { page: string }[] {
  return Array.from({ length: total }, (_, i) => ({ page: String(i + 1) }));
}

/** "91 artigos", "1 notícia". */
export function countLabel(count: number, singular: string, plural: string): string {
  return `${count} ${count === 1 ? singular : plural}`;
}
