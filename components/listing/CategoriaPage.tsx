import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { articleSubcategories, getArticlesByCategory, productCategories, productSubcategories, site } from "@/lib/articles";
import { absoluteUrl, breadcrumbJsonLd } from "@/lib/seo";
import { ScoreScaleNote } from "@/components/ScoreScaleNote";
import { ArticleSubcategoryLinks } from "@/components/ArticleSubcategoryFilter";
import { ProductCategoryLinks } from "@/components/ProductCategoryFilter";
import { AiIndicaKindFilter } from "@/components/AiIndicaFilter";
import { ArticleCategoryChips } from "@/components/ArticleCategoryChips";
import { ArticleListing, ARTICLES_GRID_ID } from "./ArticleListing";
import { JsonLd } from "./JsonLd";
import { categoryIntros } from "./categoryIntros";
import { listingMetadata, pagedTitle } from "./metadata";
import { parsePage, slicePage } from "./paginate";
import { resolveCategoriaView, viewTotalPages, type CategoriaView } from "./categoriaViews";
import { pageHref } from "@/components/Pagination";

export { categoriaBase, categoriaParams } from "./categoriaViews";

export function categoriaTotalPages(slug: string): number {
  const v = resolveCategoriaView(slug);
  return v ? viewTotalPages(v) : 1;
}

export function categoriaMetadata(slug: string, page: number, filtro?: string, sub?: string): Metadata {
  const view = resolveCategoriaView(slug, filtro, sub);
  if (!view || page > viewTotalPages(view)) return {};
  const meta = listingMetadata({
    title: pagedTitle(view.title, page),
    description: view.description,
    path: pageHref(view.base, page),
  });
  return view.indexable ? meta : { ...meta, robots: { index: false, follow: true } };
}

/**
 * Página de uma rota /pagina/N: a página 1 e páginas além do fim redirecionam
 * (301) para a raiz da listagem, então nenhum endereço antigo (de quando a
 * listagem tinha outro número de páginas) quebra.
 */
export function CategoriaPagedPage({
  slug,
  rawPage,
  filtro,
  sub,
}: {
  slug: string;
  rawPage: string;
  filtro?: string;
  sub?: string;
}) {
  const view = resolveCategoriaView(slug, filtro, sub);
  if (!view) notFound();
  const page = parsePage(rawPage);
  if (!page) notFound();
  if (page === 1 || page > viewTotalPages(view)) permanentRedirect(view.base);
  return <CategoriaPage slug={slug} page={page} filtro={filtro} sub={sub} />;
}

/**
 * Filtros principais como links (rotas estáticas indexáveis): categoria e tipo
 * de produto na AI Indica, subtipo nas 5 gerais. O tipo de review da AI Indica
 * (individual/comparativo) é filtro secundário, no navegador, só sobre os
 * cards da página atual.
 */
function Filters({ view }: { view: CategoriaView }) {
  if (view.slug === "ai-indica") {
    const all = getArticlesByCategory("ai-indica");
    const cats = productCategories.filter((c) => all.some((a) => a.productCategory === c.slug));
    const subs = view.productCategory
      ? productSubcategories.filter(
          (s) => s.category === view.productCategory && all.some((a) => a.productSubcategory === s.slug)
        )
      : [];
    return (
      <div className="mt-8 border-y border-border py-3">
        <ProductCategoryLinks
          categories={cats}
          subcategories={subs}
          activeCategory={view.productCategory}
          activeSub={view.productSubcategory}
        />
        <AiIndicaKindFilter rootId={ARTICLES_GRID_ID} className="mt-3" />
      </div>
    );
  }
  if (view.slug === "ferramentas") return null;
  const all = getArticlesByCategory(view.slug);
  const subs = articleSubcategories
    .filter((s) => s.category === view.slug)
    .filter((s) => all.some((a) => a.articleSubcategory === s.slug));
  return (
    <>
      <ArticleCategoryChips active={view.slug} className="mt-8 border-y border-border py-3" />
      {subs.length > 0 && (
        <ArticleSubcategoryLinks
          category={view.slug}
          subcategories={subs}
          active={view.articleSubcategory}
          className="mt-3"
        />
      )}
    </>
  );
}

export function CategoriaPage({
  slug,
  page,
  filtro,
  sub,
}: {
  slug: string;
  page: number;
  filtro?: string;
  sub?: string;
}) {
  const view = resolveCategoriaView(slug, filtro, sub);
  if (!view) notFound();
  const totalPages = viewTotalPages(view);
  if (page > totalPages) notFound();
  const items = slicePage(view.items, page, view.perPage);
  const path = pageHref(view.base, page);

  const collection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: pagedTitle(view.title, page),
    description: view.description,
    url: absoluteUrl(path),
    inLanguage: "pt-BR",
    isPartOf: { "@id": `${site.url}/#website` },
    publisher: { "@id": `${site.url}/#organization` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: view.items.length,
      itemListElement: items.map((a, i) => ({
        "@type": "ListItem",
        position: (page - 1) * view.perPage + i + 1,
        name: a.title,
        url: absoluteUrl(`/artigos/${a.slug}`),
      })),
    },
  };

  const isAiIndica = view.slug === "ai-indica";
  const intro = view.isRoot && !isAiIndica && page === 1 ? categoryIntros[view.slug] : undefined;
  const footerText = view.isRoot && isAiIndica ? categoryIntros[view.slug] : undefined;

  return (
    <>
      <JsonLd data={collection} />
      <JsonLd data={breadcrumbJsonLd(view.crumbs)} />
      <ArticleListing
        label={view.isRoot ? "Categoria" : view.categoryLabel}
        title={view.title}
        description={view.description}
        intro={intro}
        footerText={footerText}
        items={items}
        total={view.items.length}
        page={page}
        totalPages={totalPages}
        basePath={view.base}
        active={view.slug}
        filters={<Filters view={view} />}
        emptyTitle="Os primeiros artigos desta categoria estão a caminho"
        emptyText="Publicamos conteúdo novo todos os dias. Enquanto isso, veja o que já está no ar nas outras categorias."
      >
        {isAiIndica && <ScoreScaleNote />}
      </ArticleListing>
    </>
  );
}
