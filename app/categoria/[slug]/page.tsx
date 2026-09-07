import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { ArticleCard } from "@/components/ArticleCard";
import { categories, getArticlesByCategory } from "@/lib/articles";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return {};
  return {
    title: category.label,
    description: `Artigos do Portal da AI sobre ${category.label.toLowerCase()}.`,
    alternates: { canonical: `/categoria/${category.slug}` },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const articles = getArticlesByCategory(category.slug);

  return (
    <Container className="py-14">
      <h1 className="font-display text-3xl font-semibold sm:text-4xl">
        {category.label}
      </h1>
      <p className="mt-3 text-sm text-muted sm:text-base">
        {articles.length} artigo{articles.length === 1 ? "" : "s"} nessa categoria.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </Container>
  );
}
