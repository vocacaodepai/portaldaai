import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { AdSlot } from "@/components/AdSlot";
import { FaqAccordion } from "@/components/FaqAccordion";
import { QuizWidget } from "@/components/QuizWidget";
import { news, getNewsBySlug, sortedNews } from "@/lib/news";
import { site } from "@/lib/articles";

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) return {};

  return {
    title: item.title,
    description: item.summary,
    alternates: { canonical: `/noticias/${item.slug}` },
    openGraph: {
      type: "article",
      title: item.title,
      description: item.summary,
      url: `${site.url}/noticias/${item.slug}`,
      publishedTime: item.date,
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description: item.summary,
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

export default async function NewsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) notFound();

  const others = sortedNews()
    .filter((n) => n.slug !== item.slug)
    .slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: item.title,
    description: item.summary,
    datePublished: item.date,
    author: { "@type": "Person", name: item.author },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/noticias/${item.slug}`,
  };

  const faqJsonLd =
    item.faq && item.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: item.faq.map((f) => ({
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
          <Link href="/noticias" className="hover:text-foreground">
            Notícias
          </Link>
        </nav>

        <h1 className="max-w-3xl font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
          {item.title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted">
          <span>Por {item.author}</span>
          <span aria-hidden>·</span>
          <span>{formatDate(item.date)}</span>
        </div>
      </Container>

      <Container className="grid grid-cols-1 gap-10 py-10 lg:grid-cols-[1fr_280px]">
        <div>
          {item.content ? (
            <div
              className="prose-article max-w-none"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          ) : (
            <p className="max-w-none text-base leading-relaxed text-foreground">{item.summary}</p>
          )}

          <div className="mt-8 rounded-2xl border border-border bg-surface p-5 text-sm text-muted">
            Fonte original:{" "}
            <a
              href={item.sourceUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="font-medium text-accent hover:opacity-80"
            >
              {item.sourceName}
            </a>
          </div>

          {item.faq && <FaqAccordion items={item.faq} />}
          {item.quiz && <QuizWidget questions={item.quiz} />}
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

      {others.length > 0 && (
        <Container className="pb-20">
          <h2 className="mb-6 font-display text-2xl font-semibold">Mais notícias</h2>
          <div className="space-y-4">
            {others.map((n) => (
              <Link
                key={n.slug}
                href={`/noticias/${n.slug}`}
                className="block rounded-2xl border border-border bg-surface p-6 transition hover:border-accent/40"
              >
                <div className="flex items-center gap-2 text-xs text-muted">
                  <span>{formatDate(n.date)}</span>
                  <span aria-hidden>·</span>
                  <span>{n.sourceName}</span>
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold">{n.title}</h3>
              </Link>
            ))}
          </div>
        </Container>
      )}
    </article>
  );
}
