import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site, sortedArticles } from "@/lib/articles";
import { ArtigosAreaChips } from "@/components/ArtigosAreaFilter";
import { absoluteUrl, breadcrumbJsonLd } from "@/lib/seo";
import { ArticleListing } from "./ArticleListing";
import { JsonLd } from "./JsonLd";
import { listingMetadata, pagedTitle } from "./metadata";
import { LISTING_PER_PAGE, countPages, slicePage } from "./paginate";
import { pageHref } from "@/components/Pagination";

const BASE = "/artigos";
const TITLE = "Todos os artigos";
const DESCRIPTION =
  "Guias práticos de inteligência artificial para iniciantes, monetização, pequenos negócios, ferramentas, carreira e futuro do trabalho. Artigos novos todo dia.";

// /artigos lista todos os artigos (inclusive AI Indica e reviews de
// ferramenta), paginado em LISTING_PER_PAGE. Os chips de área são links para
// as listagens próprias de cada área, que têm os filtros detalhados.
export function artigosTotalPages(): number {
  return countPages(sortedArticles().length, LISTING_PER_PAGE);
}

export function artigosMetadata(page: number): Metadata {
  if (page > artigosTotalPages()) return {};
  return listingMetadata({
    title: pagedTitle(TITLE, page),
    description: DESCRIPTION,
    path: pageHref(BASE, page),
  });
}

export function ArtigosPage({ page }: { page: number }) {
  const all = sortedArticles();
  const totalPages = artigosTotalPages();
  if (page > totalPages) notFound();
  const items = slicePage(all, page, LISTING_PER_PAGE);
  const path = pageHref(BASE, page);

  const collection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: pagedTitle(TITLE, page),
    description: DESCRIPTION,
    url: absoluteUrl(path),
    inLanguage: "pt-BR",
    isPartOf: { "@id": `${site.url}/#website` },
    publisher: { "@id": `${site.url}/#organization` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: all.length,
      itemListElement: items.map((a, i) => ({
        "@type": "ListItem",
        position: (page - 1) * LISTING_PER_PAGE + i + 1,
        name: a.title,
        url: absoluteUrl(`/artigos/${a.slug}`),
      })),
    },
  };

  return (
    <>
      <JsonLd data={collection} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: TITLE, path: BASE },
        ])}
      />
      <ArticleListing
        label="Arquivo"
        title={TITLE}
        description={DESCRIPTION}
        items={items}
        total={all.length}
        page={page}
        totalPages={totalPages}
        basePath={BASE}
        active="todos"
        filters={<ArtigosAreaChips className="mt-8 border-y border-border py-3" />}
      />
    </>
  );
}
