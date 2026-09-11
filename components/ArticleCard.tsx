import Link from "next/link";
import { Article, categories } from "@/lib/articles";
import { CoverImage } from "./CoverImage";

function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function ArticleCard({
  article,
  featured = false,
}: {
  article: Article;
  featured?: boolean;
}) {
  const categoryLabel =
    categories.find((c) => c.slug === article.category)?.label ?? article.category;

  return (
    <Link
      href={`/artigos/${article.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition duration-300 hover:border-accent/40 hover:shadow-[0_16px_32px_-24px_rgba(0,0,0,0.25)]"
    >
      <div className={`relative ${featured ? "aspect-[16/9]" : "aspect-[16/10]"} w-full`}>
        <CoverImage
          query={article.imageQuery}
          seed={article.seed}
          alt={article.title}
          className="h-full w-full transition duration-500 group-hover:scale-105"
          priority={featured}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />
        <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/45 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-white/90 backdrop-blur-sm">
          {categoryLabel}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3
          className={`font-display font-semibold text-foreground transition group-hover:text-accent ${
            featured ? "text-xl sm:text-2xl" : "text-lg"
          }`}
        >
          {article.title}
        </h3>
        <p className="line-clamp-2 flex-1 text-sm text-muted">{article.excerpt}</p>
        <div className="flex items-center gap-2 text-xs text-muted">
          <span>{formatDate(article.date)}</span>
          <span aria-hidden>·</span>
          <span>{article.readTime} min de leitura</span>
        </div>
      </div>
    </Link>
  );
}
