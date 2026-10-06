import Link from "next/link";
import { articleFilterCategories } from "@/lib/articles";

/**
 * Chips de categoria usados em /artigos e /categoria/[slug] (categorias
 * gerais só: iniciantes, monetização, negócios, carreira, futuro). Ferramentas
 * tem filtro próprio em /reviews (por ferramenta) e AI Indica tem filtro
 * próprio em /categoria/ai-indica (por categoria de produto) — por isso não
 * aparecem aqui, diferente do CategoryChips (usado na home e na 404, esse sim
 * com o site inteiro).
 */
export function ArticleCategoryChips({ active, className = "" }: { active?: string; className?: string }) {
  const items = [
    { href: "/artigos", label: "Todos", key: "todos" },
    ...articleFilterCategories.map((c) => ({ href: `/categoria/${c.slug}`, label: c.label, key: c.slug })),
  ];
  return (
    <nav aria-label="Categorias de artigo" className={`relative ${className}`}>
      <ul className="no-scrollbar flex snap-x gap-2 overflow-x-auto pb-1">
        {items.map((it) => {
          const isActive = it.key === active;
          return (
            <li key={it.key} className="snap-start">
              <Link
                href={it.href}
                aria-current={isActive ? "page" : undefined}
                className={`inline-flex h-8 items-center whitespace-nowrap rounded-lg border px-3 text-xs font-medium transition ${
                  isActive
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-surface text-muted hover:border-accent/50 hover:text-foreground"
                }`}
              >
                {it.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
