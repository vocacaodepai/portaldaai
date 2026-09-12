import Link from "next/link";
import { Container } from "@/components/Container";
import { ArticleCard } from "@/components/ArticleCard";
import { AdSlot } from "@/components/AdSlot";
import { categories, sortedArticles } from "@/lib/articles";
import { sortedNews } from "@/lib/news";

function formatNewsDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
  });
}

export default function Home() {
  const articles = sortedArticles();
  const [featured, ...rest] = articles;
  const latestNews = sortedNews().slice(0, 3);

  return (
    <>
      <section className="border-b border-border">
        <Container className="py-16 sm:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Novo artigo publicado todos os dias
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Entenda e <span className="text-accent">monetize</span> a inteligência
            artificial, sem jargão técnico.
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted sm:text-lg">
            {`O Portal da AI traz, todos os dias, guias práticos para você usar IA no dia a dia, criar novos negócios e transformar essa tecnologia em uma fonte real de renda — para qualquer idade e nível de conhecimento.`}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/artigos"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Explorar artigos
            </Link>
            <Link
              href="/categoria/monetizacao"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:border-accent/50"
            >
              Como monetizar IA
            </Link>
          </div>
        </Container>
      </section>

      <Container className="py-14">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-display text-2xl font-semibold">Destaque de hoje</h2>
        </div>
        <ArticleCard article={featured} featured />
      </Container>

      <Container className="pb-6">
        <AdSlot />
      </Container>

      <Container className="py-10">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-display text-2xl font-semibold">Últimos artigos</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/categoria/${c.slug}`}
                className="rounded-full border border-border px-3 py-1.5 text-xs text-muted transition hover:border-accent/50 hover:text-foreground"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </Container>

      <Container className="py-10">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-display text-2xl font-semibold">Notícias do mercado de IA</h2>
          <Link
            href="/noticias"
            className="text-sm font-medium text-accent transition hover:opacity-80"
          >
            Ver todas →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {latestNews.map((item) => (
            <a
              key={item.slug}
              href={item.sourceUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="flex flex-col rounded-2xl border border-border bg-surface p-5 transition hover:border-accent/40"
            >
              <div className="flex items-center gap-2 text-xs text-muted">
                <span>{formatNewsDate(item.date)}</span>
                <span aria-hidden>·</span>
                <span>{item.sourceName}</span>
              </div>
              <h3 className="mt-2 font-display text-sm font-semibold leading-snug">
                {item.title}
              </h3>
            </a>
          ))}
        </div>
      </Container>

      <Container className="pb-16">
        <div className="rounded-2xl border border-border bg-surface p-8 text-center sm:p-12">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Todo dia, um novo caminho para lucrar com IA
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted sm:text-base">
            Volte amanhã — publicamos conteúdo novo diariamente para te manter
            sempre um passo à frente na corrida da inteligência artificial.
          </p>
          <Link
            href="/artigos"
            className="mt-6 inline-block rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90"
          >
            Ver todos os artigos
          </Link>
        </div>
      </Container>
    </>
  );
}
