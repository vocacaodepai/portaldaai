import Link from "next/link";
import { chipClass } from "./filterVisibility";

/**
 * Subfiltro dentro de /categoria/[slug] (iniciantes, monetização, negócios,
 * carreira, futuro — nunca ferramentas/ai-indica, que têm filtro próprio):
 * por subtipo de artigo (ex., dentro de Monetização: Freelas e serviço,
 * Produtos digitais...). Cada chip é um link para a rota estática
 * /categoria/<slug>/<subtipo>, que funciona com a listagem paginada.
 */
export function ArticleSubcategoryLinks({
  category,
  subcategories,
  active,
  className = "",
}: {
  category: string;
  subcategories: { slug: string; label: string }[];
  active?: string;
  className?: string;
}) {
  const base = `/categoria/${category}`;
  return (
    <nav aria-label="Filtrar por subtipo" className={`relative ${className}`}>
      <ul className="no-scrollbar flex snap-x gap-2 overflow-x-auto pb-1">
        <li className="snap-start">
          <Link href={base} aria-current={!active ? "page" : undefined} className={chipClass(!active)}>
            Todos
          </Link>
        </li>
        {subcategories.map((s) => (
          <li key={s.slug} className="snap-start">
            <Link
              href={`${base}/${s.slug}`}
              aria-current={active === s.slug ? "page" : undefined}
              className={chipClass(active === s.slug)}
            >
              {s.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
