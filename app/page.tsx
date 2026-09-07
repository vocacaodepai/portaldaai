import Link from "next/link";
import { Container } from "@/components/Container";
import { ArticleCard } from "@/components/ArticleCard";
import { AdSlot } from "@/components/AdSlot";
import { categories, sortedArticles } from "@/lib/articles";

export default function Home() {
  const articles = sortedArticles();
  const [featured, ...rest] = articles;

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(600px circle at 15% 0%, rgba(124,92,255,0.25), transparent 60%), radial-gradient(600px circle at 85% 20%, rgba(34,211,238,0.2), transparent 60%)",
          }}
        />
        <Container className="relative py-16 sm:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
            Novo artigo publicado todos os dias
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Entenda e <span className="gradient-text">monetize</span> a inteligência
            artificial, sem jargão técnico.
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted sm:text-lg">
            {`O Portal da AI traz, todos os dias, guias práticos para você usar IA no dia a dia, criar novos negócios e transformar essa tecnologia em uma fonte real de renda — para qualquer idade e nível de conhecimento.`}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/artigos"
              className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
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
