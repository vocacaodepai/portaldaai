import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { ReviewToolChips } from "@/components/ReviewToolChips";
import { Container } from "@/components/Container";
import { Sidebar } from "@/components/Sidebar";
import { JsonLd } from "@/components/listing/JsonLd";
import { ListingHeader } from "@/components/listing/ListingHeader";
import { ReviewCriteria } from "@/components/listing/ReviewCriteria";
import { listingMetadata } from "@/components/listing/metadata";
import { countLabel } from "@/components/listing/paginate";
import { getArticlesByCategory, getReviews, site } from "@/lib/articles";
import { absoluteUrl, breadcrumbJsonLd } from "@/lib/seo";

const PATH = "/reviews";
const TITLE = "Reviews de ferramentas de IA";
const DESCRIPTION =
  "Reviews independentes de ferramentas de IA com nota de 0 a 10 por critérios públicos: facilidade, recursos, preço em reais, português e privacidade.";

export const metadata: Metadata = listingMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const REVIEWS_GRID_ID = "reviews-grid";

export default function ReviewsPage() {
  const reviews = getReviews();
  const meanwhile = reviews.length === 0 ? getArticlesByCategory("ferramentas").slice(0, 6) : [];
  const tools = [...new Set(reviews.map((a) => a.review?.tool).filter((t): t is string => Boolean(t)))];

  const collection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: TITLE,
    description: DESCRIPTION,
    url: absoluteUrl(PATH),
    inLanguage: "pt-BR",
    isPartOf: { "@id": `${site.url}/#website` },
    publisher: { "@id": `${site.url}/#organization` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: reviews.length,
      itemListElement: reviews.map((a, i) => ({
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
          { name: "Reviews", path: PATH },
        ])}
      />
      <Container className="py-10 sm:py-14">
        <ListingHeader
          label="Reviews"
          title={TITLE}
          description={DESCRIPTION}
          intro="Testamos as ferramentas como um usuário comum no Brasil testaria: criando conta, pagando o plano quando é preciso e usando no trabalho de verdade. A nota resume a experiência; o texto explica o porquê."
          count={countLabel(reviews.length, "review", "reviews")}
        />
        <ReviewToolChips tools={tools} rootId={REVIEWS_GRID_ID} />
        <ReviewCriteria />
        <div id={REVIEWS_GRID_ID} className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="min-w-0">
            {reviews.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {reviews.map((article, i) => (
                  <ArticleCard key={article.slug} article={article} headingLevel="h2" priority={i < 3} />
                ))}
              </div>
            ) : (
              <>
                <section
                  aria-labelledby="reviews-vazio"
                  className="relative overflow-hidden rounded-xl border border-border bg-ink p-6 text-ink-foreground sm:p-8"
                >
                  <div className="hero-glow pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
                  <div className="relative">
                    <p className="label-mono text-ink-foreground/70">Em produção</p>
                    <h2 id="reviews-vazio" className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                      Os primeiros reviews estão sendo preparados
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-foreground/80 sm:text-base">
                      Cada review passa por dias de uso real antes de ganhar nota. Quando o primeiro for
                      publicado, ele aparece aqui e no feed do site. Até lá, os guias de ferramentas abaixo
                      já ajudam a escolher o que usar.
                    </p>
                    <Link
                      href="/feed.xml"
                      className="mt-5 inline-flex h-9 items-center rounded-lg border border-ink-foreground/30 px-4 font-mono text-xs font-medium text-ink-foreground transition hover:border-ink-foreground/60"
                    >
                      Assinar o feed RSS →
                    </Link>
                  </div>
                </section>
                {meanwhile.length > 0 && (
                  <section aria-labelledby="enquanto-isso" className="mt-10">
                    <div className="mb-5 flex items-end justify-between gap-4">
                      <div>
                        <p className="label-mono text-accent">Enquanto isso</p>
                        <h2 id="enquanto-isso" className="mt-1 font-display text-xl font-bold tracking-tight sm:text-2xl">
                          Guias de ferramentas de IA
                        </h2>
                      </div>
                      <Link
                        href="/categoria/ferramentas"
                        className="shrink-0 font-mono text-xs font-medium text-muted transition hover:text-accent"
                      >
                        Ver todos →
                      </Link>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                      {meanwhile.map((article) => (
                        <ArticleCard key={article.slug} article={article} headingLevel="h3" />
                      ))}
                    </div>
                  </section>
                )}
              </>
            )}
          </div>
          <Sidebar />
        </div>
      </Container>
    </>
  );
}
