import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articleFilterCategories, getReviews, site, sortedArticles } from "@/lib/articles";
import { ArtigosAreaFilter, type Area } from "@/components/ArtigosAreaFilter";
import { buildAiIndicaFilterData } from "./aiIndicaFilterData";
import { absoluteUrl, breadcrumbJsonLd } from "@/lib/seo";
import { ArticleListing } from "./ArticleListing";
import { JsonLd } from "./JsonLd";
import { listingMetadata, pagedTitle } from "./metadata";
import { pageHref } from "@/components/Pagination";

const BASE = "/artigos";
const TITLE = "Todos os artigos";
const DESCRIPTION =
  "Guias práticos de inteligência artificial para iniciantes, monetização, pequenos negócios, ferramentas, carreira e futuro do trabalho. Artigos novos todo dia.";

// /artigos mostra todos os artigos numa página só (inclusive AI Indica e
// reviews de ferramenta), porque o filtro por área e os subfiltros funcionam
// no navegador, sobre os cards que já estão na página; paginar quebraria o filtro.
function allArticles() {
  return sortedArticles();
}

export function artigosTotalPages(): number {
  return 1;
}

export function artigosMetadata(page: number): Metadata {
  return listingMetadata({
    title: pagedTitle(TITLE, page),
    description: DESCRIPTION,
    path: pageHref(BASE, page),
  });
}

export function ArtigosPage({ page }: { page: number }) {
  const all = allArticles();
  const totalPages = 1;
  if (page > totalPages) notFound();
  const items = all;
  const areas: Area[] = [
    ...articleFilterCategories.map((c) => ({ key: c.slug, label: c.label, category: c.slug })),
    { key: "reviews-ferramentas", label: "Reviews de ferramentas", category: "ferramentas", kind: "review" as const },
    { key: "guias-ferramentas", label: "Guias de ferramentas", category: "ferramentas", kind: "not-review" as const },
    { key: "ai-indica", label: "AI Indica", category: "ai-indica" },
  ];
  const tools = [...new Set(getReviews().map((a) => a.review?.tool).filter((t): t is string => Boolean(t)))];
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
        position: i + 1,
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
        areaFilter={<ArtigosAreaFilter areas={areas} tools={tools} aiData={buildAiIndicaFilterData(all)} rootId="artigos-grid" />}
      />
    </>
  );
}
