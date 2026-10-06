import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { ArticleCategoryChips } from "@/components/ArticleCategoryChips";
import { ArticleSubcategoryFilter } from "@/components/ArticleSubcategoryFilter";
import { ProductCategoryFilter } from "@/components/ProductCategoryFilter";
import { Container } from "@/components/Container";
import { Pagination } from "@/components/Pagination";
import { Sidebar } from "@/components/Sidebar";
import type { Article } from "@/lib/articles";
import { ListingHeader } from "./ListingHeader";
import { countLabel } from "./paginate";

const ARTICLES_GRID_ID = "artigos-grid";

/**
 * Listagem paginada de artigos (todos, por categoria, reviews): cabeçalho,
 * chips de categoria, grade de cards à esquerda e sidebar à direita.
 */
export function ArticleListing({
  label = "Artigos",
  title,
  description,
  intro,
  items,
  total,
  page,
  totalPages,
  basePath,
  active,
  productFilter,
  subcategoryFilter,
  emptyTitle = "Nenhum artigo por aqui ainda",
  emptyText = "Publicamos conteúdo novo todos os dias. Enquanto isso, explore as outras categorias.",
  children,
}: {
  label?: string;
  title: string;
  description: string;
  intro?: string;
  /** Artigos desta página. */
  items: Article[];
  /** Total de artigos da listagem (todas as páginas). Padrão: items.length. */
  total?: number;
  page: number;
  totalPages: number;
  basePath: string;
  /** Chip ativo: "todos" ou slug de categoria. */
  active: string;
  /** Só quando active === "ai-indica": categorias/subcategorias de produto presentes nos itens. */
  productFilter?: {
    categories: { slug: string; label: string }[];
    subcategories: { slug: string; label: string; category: string }[];
  };
  /** Só nas categorias gerais (iniciantes, monetização...): subtipos presentes nos itens desta categoria. */
  subcategoryFilter?: { slug: string; label: string }[];
  emptyTitle?: string;
  emptyText?: string;
  /** Conteúdo extra entre o cabeçalho e a grade (ex.: "Como avaliamos"). */
  children?: React.ReactNode;
}) {
  const count = total ?? items.length;
  return (
    <Container className="py-10 sm:py-14">
      <ListingHeader
        label={label}
        title={title}
        description={description}
        intro={intro}
        count={countLabel(count, "artigo", "artigos")}
        page={page}
        totalPages={totalPages}
      />
      {productFilter ? (
        <ProductCategoryFilter
          categories={productFilter.categories}
          subcategories={productFilter.subcategories}
          rootId={ARTICLES_GRID_ID}
          className="mt-8 border-y border-border py-3"
        />
      ) : active !== "ferramentas" ? (
        <ArticleCategoryChips active={active} className="mt-8 border-y border-border py-3" />
      ) : null}
      {subcategoryFilter && subcategoryFilter.length > 0 && (
        <ArticleSubcategoryFilter
          subcategories={subcategoryFilter}
          rootId={ARTICLES_GRID_ID}
          className="mt-3"
        />
      )}
      {children}
      <div id={ARTICLES_GRID_ID} className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0">
          {items.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {items.map((article, i) => (
                <ArticleCard
                  key={article.slug}
                  article={article}
                  headingLevel="h2"
                  priority={page === 1 && i < 3}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-border bg-surface p-8 text-center">
              <p className="font-display text-lg font-semibold">{emptyTitle}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{emptyText}</p>
              <Link
                href="/artigos"
                className="mt-4 inline-flex h-9 items-center rounded-lg border border-border bg-background px-4 font-mono text-xs font-medium transition hover:border-accent/50 hover:text-accent"
              >
                Ver todos os artigos →
              </Link>
            </div>
          )}
          <Pagination current={page} total={totalPages} basePath={basePath} />
        </div>
        <Sidebar />
      </div>
    </Container>
  );
}
