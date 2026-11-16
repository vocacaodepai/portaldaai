import Link from "next/link";
import { articleFilterCategories } from "@/lib/articles";
import { chipClass } from "./filterVisibility";

/**
 * Chips por área de /artigos. Cada área é um link para a listagem própria
 * (categoria, /reviews, AI Indica), cada uma paginada e com os próprios
 * filtros; /artigos em si mostra tudo, paginado.
 */
export function ArtigosAreaChips({ className = "" }: { className?: string }) {
  const items = [
    { href: "/artigos", label: "Todos", active: true },
    ...articleFilterCategories.map((c) => ({ href: `/categoria/${c.slug}`, label: c.label, active: false })),
    { href: "/reviews", label: "Reviews de ferramentas", active: false },
    { href: "/categoria/ferramentas", label: "Guias de ferramentas", active: false },
    { href: "/categoria/ai-indica", label: "AI Indica", active: false },
  ];
  return (
    <nav aria-label="Áreas de artigo" className={`relative ${className}`}>
      <ul className="no-scrollbar flex snap-x gap-2 overflow-x-auto pb-1">
        {items.map((it) => (
          <li key={it.href} className="snap-start">
            <Link href={it.href} aria-current={it.active ? "page" : undefined} className={chipClass(it.active)}>
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
