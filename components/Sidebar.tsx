import Link from "next/link";
import { categories, countByCategory, getPopularArticles } from "@/lib/articles";
import { author } from "@/lib/author";
import { AdSlot } from "./AdSlot";

/** Lista numerada 01–05 de artigos em destaque (proxy editorial, sem analytics). */
export function FeaturedList({
  title = "Comece por aqui",
  limit = 5,
  exclude = [],
}: {
  title?: string;
  limit?: number;
  exclude?: string[];
}) {
  const items = getPopularArticles(limit + exclude.length)
    .filter((a) => !exclude.includes(a.slug))
    .slice(0, limit);
  return (
    <section aria-labelledby="featured-list" className="rounded-xl border border-border bg-surface p-5">
      <h2 id="featured-list" className="label-mono text-muted">
        {title}
      </h2>
      <ol className="mt-3 divide-y divide-border">
        {items.map((a, i) => (
          <li key={a.slug} className="flex gap-3 py-3 first:pt-0 last:pb-0">
            <span className="font-mono text-sm font-semibold text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <Link
              href={`/artigos/${a.slug}`}
              className="font-display text-[15px] font-semibold leading-snug transition hover:text-accent"
            >
              {a.title}
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function CategoryList() {
  const counts = countByCategory();
  return (
    <section aria-labelledby="category-list" className="rounded-xl border border-border bg-surface p-5">
      <h2 id="category-list" className="label-mono text-muted">
        Categorias
      </h2>
      <ul className="mt-3 space-y-1">
        {categories.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/categoria/${c.slug}`}
              className="flex items-center justify-between rounded-lg px-2 py-1.5 text-sm transition hover:bg-surface-2"
            >
              <span className="font-medium">{c.label}</span>
              <span className="font-mono text-[11px] text-muted">{counts[c.slug]}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function AuthorMini() {
  return (
    <section className="rounded-xl border border-border bg-surface p-5">
      <p className="label-mono text-muted">Quem escreve</p>
      <p className="mt-2 font-display text-base font-semibold">{author.name}</p>
      <p className="mt-1 text-sm leading-relaxed text-muted">{author.shortBio}</p>
      <Link href={author.url} className="mt-3 inline-block font-mono text-xs font-medium text-accent hover:underline">
        Conheça o editor →
      </Link>
    </section>
  );
}

/**
 * Sidebar padrão da home e das listagens. O anúncio (se existir) fica no topo
 * e NÃO é sticky; só os blocos editoriais grudam ao rolar.
 */
export function Sidebar({ exclude = [] }: { exclude?: string[] }) {
  return (
    <aside className="space-y-6" aria-label="Barra lateral">
      <AdSlot format="rectangle" />
      <div className="space-y-6 lg:sticky lg:top-20">
        <FeaturedList exclude={exclude} />
        <CategoryList />
        <AuthorMini />
      </div>
    </aside>
  );
}
