import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { AdSlot } from "@/components/AdSlot";
import { sortedNews } from "@/lib/news";

export const metadata: Metadata = {
  title: "Notícias",
  description:
    "As notícias mais recentes do mercado de inteligência artificial, escritas por Bruno Danello, com link para a fonte original.",
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
        {`Matérias escritas por Bruno Danello sobre o que está acontecendo no mercado de inteligência artificial — com link para a fonte original em cada uma.`}
      </p>

      <div className="mt-10 space-y-4">
        {items.map((item, i) => (
          <div key={item.slug}>
            <Link href={`/noticias/${item.slug}`} className="block">
              <article className="rounded-2xl border border-border bg-surface p-6 transition hover:border-accent/40">
                <div className="flex items-center gap-2 text-xs text-muted">
                  <span>{formatDate(item.date)}</span>
                  <span aria-hidden>·</span>
                  <span>Por {item.author}</span>
                  <span aria-hidden>·</span>
                  <span>{item.sourceName}</span>
                </div>
                <h2 className="mt-2 font-display text-lg font-semibold sm:text-xl">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.summary}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  Ler matéria completa →
                </span>
              </article>
            </Link>
            {i === 2 && (
              <div className="my-4">
                <AdSlot />
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="mt-10 text-xs text-muted">
        {`As matérias acima são escritas por Bruno Danello a partir de reportagens públicas; cada uma traz o link para a fonte original. Não somos afiliados a nenhuma das empresas citadas.`}
      </p>
    </Container>
  );
}
