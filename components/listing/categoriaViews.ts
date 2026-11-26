import {
  articleSubcategories,
  categories,
  getArticlesByCategory,
  getCategory,
  isCategory,
  productCategories,
  productSubcategories,
  type Article,
  type Category,
} from "@/lib/articles";
import { ARTICLES_PER_PAGE, LISTING_PER_PAGE, MIN_INDEXABLE_FILTER, countPages, pageParams } from "./paginate";

/** Categorias gerais, que ganham rota de subtipo (/categoria/<slug>/<articleSubcategory>). */
export const GENERAL_CATEGORIES: readonly Category[] = [
  "iniciantes",
  "monetizacao",
  "negocios",
  "carreira",
  "futuro",
  "guias-e-dicas",
];

export type Crumb = { name: string; path: string };

/**
 * Uma listagem de categoria já resolvida: a raiz (/categoria/<slug>) ou uma
 * rota de filtro (/categoria/ai-indica/<produto>[/<tipo>],
 * /categoria/<geral>/<subtipo>). Tudo que a página, o metadata e o sitemap
 * precisam sai daqui, pra não divergir.
 */
export type CategoriaView = {
  slug: Category;
  categoryLabel: string;
  /** Caminho da página 1 desta listagem. */
  base: string;
  /** h1 e base do <title>. */
  title: string;
  description: string;
  items: Article[];
  perPage: number;
  /** Rota de filtro com poucos artigos: fica no ar, mas noindex e fora do sitemap. */
  indexable: boolean;
  crumbs: Crumb[];
  /** É a raiz da categoria (sem filtro). */
  isRoot: boolean;
  productCategory?: string;
  productSubcategory?: string;
  articleSubcategory?: string;
};

export function categoriaBase(slug: string): string {
  return `/categoria/${slug}`;
}

function perPageFor(slug: string): number {
  // ferramentas mantém 12 por página para não mudar as URLs /pagina/N que já existiam.
  return slug === "ferramentas" ? ARTICLES_PER_PAGE : LISTING_PER_PAGE;
}

/** Resolve a listagem; null quando a combinação não existe ou não tem artigo. */
export function resolveCategoriaView(slug: string, filtro?: string, sub?: string): CategoriaView | null {
  if (!isCategory(slug)) return null;
  const category = getCategory(slug);
  if (!category) return null;
  const all = getArticlesByCategory(slug);
  const base = categoriaBase(slug);
  const root: Crumb[] = [
    { name: "Início", path: "/" },
    { name: category.label, path: base },
  ];
  const common = { slug, categoryLabel: category.label, perPage: perPageFor(slug) };

  if (!filtro) {
    if (sub) return null;
    return {
      ...common,
      base,
      title: category.label,
      description: category.description,
      items: all,
      indexable: true,
      crumbs: root,
      isRoot: true,
    };
  }

  if (slug === "ai-indica") {
    const pc = productCategories.find((c) => c.slug === filtro);
    if (!pc) return null;
    const inCat = all.filter((a) => a.productCategory === pc.slug);
    if (inCat.length === 0) return null;
    const catBase = `${base}/${pc.slug}`;
    const catCrumbs = [...root, { name: pc.label, path: catBase }];
    if (!sub) {
      return {
        ...common,
        base: catBase,
        title: `${pc.label}: reviews e comparativos`,
        description: `Reviews e comparativos de produtos de ${pc.label}, com nota de 0 a 10 por critério, prós e contras e link direto para comprar.`,
        items: inCat,
        indexable: inCat.length >= MIN_INDEXABLE_FILTER,
        crumbs: catCrumbs,
        isRoot: false,
        productCategory: pc.slug,
      };
    }
    const ps = productSubcategories.find((s) => s.slug === sub && s.category === pc.slug);
    if (!ps) return null;
    const inSub = inCat.filter((a) => a.productSubcategory === ps.slug);
    if (inSub.length === 0) return null;
    const subBase = `${catBase}/${ps.slug}`;
    return {
      ...common,
      base: subBase,
      title: `${ps.label}: reviews e comparativos`,
      description: `Qual ${ps.label.toLowerCase()} comprar: reviews e comparativos com nota de 0 a 10 por critério, prós e contras e link direto para comprar.`,
      items: inSub,
      indexable: inSub.length >= MIN_INDEXABLE_FILTER,
      crumbs: [...catCrumbs, { name: ps.label, path: subBase }],
      isRoot: false,
      productCategory: pc.slug,
      productSubcategory: ps.slug,
    };
  }

  if (!GENERAL_CATEGORIES.includes(slug) || sub) return null;
  const s = articleSubcategories.find((x) => x.slug === filtro && x.category === slug);
  if (!s) return null;
  const inSub = all.filter((a) => a.articleSubcategory === s.slug);
  if (inSub.length === 0) return null;
  const subBase = `${base}/${s.slug}`;
  return {
    ...common,
    base: subBase,
    title: `${s.label}: ${category.label}`,
    description: `${category.label}, ${s.label.toLowerCase()}: ${category.description}`,
    items: inSub,
    indexable: inSub.length >= MIN_INDEXABLE_FILTER,
    crumbs: [...root, { name: s.label, path: subBase }],
    isRoot: false,
    articleSubcategory: s.slug,
  };
}

export function viewTotalPages(view: CategoriaView): number {
  return countPages(view.items.length, view.perPage);
}

/** [slug] de todas as categorias. */
export function categoriaParams(): { slug: string }[] {
  return categories.map((c) => ({ slug: c.slug }));
}

/** [slug]/[filtro] existentes: categorias de produto da AI Indica e subtipos das 5 gerais (só com artigo). */
export function filtroParams(): { slug: string; filtro: string }[] {
  const out: { slug: string; filtro: string }[] = [];
  for (const c of productCategories) {
    if (resolveCategoriaView("ai-indica", c.slug)) out.push({ slug: "ai-indica", filtro: c.slug });
  }
  for (const s of articleSubcategories) {
    if (resolveCategoriaView(s.category, s.slug)) out.push({ slug: s.category, filtro: s.slug });
  }
  return out;
}

/** [slug]/[filtro]/[sub] existentes: só AI Indica (categoria de produto > tipo de produto). */
export function subParams(): { slug: string; filtro: string; sub: string }[] {
  return productSubcategories
    .filter((s) => resolveCategoriaView("ai-indica", s.category, s.slug))
    .map((s) => ({ slug: "ai-indica", filtro: s.category, sub: s.slug }));
}

/** Todas as listagens de categoria (raiz + filtros), para o sitemap. */
export function allCategoriaViews(): CategoriaView[] {
  const views: CategoriaView[] = [];
  for (const { slug } of categoriaParams()) {
    const v = resolveCategoriaView(slug);
    if (v) views.push(v);
  }
  for (const { slug, filtro } of filtroParams()) {
    const v = resolveCategoriaView(slug, filtro);
    if (v) views.push(v);
  }
  for (const { slug, filtro, sub } of subParams()) {
    const v = resolveCategoriaView(slug, filtro, sub);
    if (v) views.push(v);
  }
  return views;
}

/** Params [page] (2..N) de uma listagem; a página 1 é a raiz. */
export function extraPageParams(view: CategoriaView | null): { page: string }[] {
  if (!view) return [];
  return pageParams(viewTotalPages(view)).filter(({ page }) => page !== "1");
}
