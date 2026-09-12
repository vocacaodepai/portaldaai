import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { AdSlot } from "@/components/AdSlot";
import { sortedNews } from "@/lib/news";

export const metadata: Metadata = {
  title: "Notícias",
  description:
    "As notícias mais recentes do mercado de inteligência artificial, resumidas e com link para a fonte original.",
  alternates: { canonical: "/noticias" },
};

function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function NoticiasPage() {
  const items = sortedNews();

  return (
    <Container className="py-14">
      <h1 className="font-display text-3xl font-semibold sm:text-4xl">Notícias</h1>
      <p className="mt-3 max-w-xl text-sm text-muted sm:text-base">
        {`Um resumo diário do que está acontecendo no mercado de inteligência artificial — sempre com link para a fonte original, pra você aprofundar quando quiser.`}
      </p>

      <div className="mt-10 space-y-4">
        {items.map((item, i) => (
          <div key={item.slug}>
            <article className="rounded-2xl border border-border bg-surface p-6 transition hover:border-accent/40">
              <div className="flex items-center gap-2 text-xs text-muted">
                <span>{formatDate(item.date)}</span>
                <span aria-hidden>·</span>
                <span>{item.sourceName}</span>
              </div>
              <h2 className="mt-2 font-display text-lg font-semibold sm:text-xl">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.summary}</p>
              <a
                href={item.sourceUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent hover:opacity-80"
              >
                Leia na fonte original →
              </a>
            </article>
            {i === 2 && (
              <div className="my-4">
                <AdSlot />
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="mt-10 text-xs text-muted">
        {`Os resumos acima são escritos pela nossa equipe editorial a partir de reportagens públicas; sempre confira a fonte original para o texto completo. Não somos afiliados a nenhuma das empresas citadas.`}
      </p>
    </Container>
  );
}
