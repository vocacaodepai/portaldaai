import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { CoverImage } from "@/components/CoverImage";
import { ArticleCard } from "@/components/ArticleCard";
import { AdSlot } from "@/components/AdSlot";
import { FaqAccordion } from "@/components/FaqAccordion";
import { QuizWidget } from "@/components/QuizWidget";
import {
  articles,
  categories,
  getArticleBySlug,
  getRelatedArticles,
  site,
} from "@/lib/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/artigos/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: `${site.url}/artigos/${article.slug}`,
      publishedTime: article.date,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const categoryLabel =
    categories.find((c) => c.slug === article.category)?.label ?? article.category;
  const related = getRelatedArticles(article);

  const authorName = article.author ?? "Bruno Danello";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: { "@type": "Person", name: authorName },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/artigos/${article.slug}`,
  };

  const faqJsonLd =
    article.faq && article.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: article.faq.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }
      : null;

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <Container className="pt-10">
        <nav className="mb-6 text-xs text-muted">
          <Link href="/" className="hover:text-foreground">
            Início
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/categoria/${article.category}`} className="hover:text-foreground">
            {categoryLabel}
          </Link>
        </nav>

        <h1 className="max-w-3xl font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
          {article.title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted">
          <span>Por {authorName}</span>
          <span aria-hidden>·</span>
          <span>{formatDate(article.date)}</span>
          <span aria-hidden>·</span>
          <span>{article.readTime} min de leitura</span>
        </div>

        <div className="relative mt-8 aspect-[16/8] w-full overflow-hidden rounded-2xl border border-border">
          <CoverImage
            query={article.imageQuery}
            seed={article.seed}
            alt={article.title}
            className="h-full w-full"
            priority
          />
        </div>
      </Container>

      <Container className="grid grid-cols-1 gap-10 py-10 lg:grid-cols-[1fr_280px]">
        <div>
          <div
            className="prose-article max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          {article.faq && <FaqAccordion items={article.faq} />}
          {article.quiz && <QuizWidget questions={article.quiz} />}
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:h-fit">
          <AdSlot label="Publicidade" />
          <div className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-display text-base font-semibold">Sobre o Portal da AI</h3>
            <p className="mt-2 text-sm text-muted">{site.description}</p>
          </div>
        </aside>
      </Container>

      <Container className="pb-16">
        <AdSlot />
      </Container>

      {related.length > 0 && (
        <Container className="pb-20">
          <h2 className="mb-6 font-display text-2xl font-semibold">Continue lendo</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <ArticleCard key={r.slug} article={r} />
            ))}
          </div>
        </Container>
      )}
    </article>
  );
}
