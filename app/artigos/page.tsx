import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ArticleCard } from "@/components/ArticleCard";
import { sortedArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Todos os artigos",
  description:
    "Todos os artigos do Portal da AI sobre inteligência artificial, monetização, negócios e ferramentas.",
};

export default function ArtigosPage() {
  const articles = sortedArticles();

  return (
    <Container className="py-14">
      <h1 className="font-display text-3xl font-semibold sm:text-4xl">
        Todos os <span className="gradient-text">artigos</span>
      </h1>
      <p className="mt-3 max-w-xl text-sm text-muted sm:text-base">
        Conteúdo novo publicado diariamente sobre inteligência artificial,
        monetização e negócios.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </Container>
  );
}
