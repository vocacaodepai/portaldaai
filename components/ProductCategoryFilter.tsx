import Link from "next/link";
import { chipClass } from "./filterVisibility";

/**
 * Filtro de /categoria/ai-indica por categoria de produto (Cozinha, Casa
 * Inteligente...) e, dentro dela, o tipo específico (Air Fryer, Fechadura
 * Digital...). Cada chip é um link para uma rota estática indexável
 * (/categoria/ai-indica/<categoria>[/<tipo>]), não um filtro no navegador:
 * assim o filtro funciona com a listagem paginada e cada recorte tem URL própria.
 */
export function ProductCategoryLinks({
  categories,
  subcategories,
  activeCategory,
  activeSub,
  className = "",
}: {
  categories: { slug: string; label: string }[];
  /** Tipos de produto da categoria ativa (vazio na raiz). */
  subcategories: { slug: string; label: string }[];
  activeCategory?: string;
  activeSub?: string;
  className?: string;
}) {
  const base = "/categoria/ai-indica";
  return (
    <div className={className}>
      <nav aria-label="Filtrar por categoria de produto" className="relative">
        <ul className="no-scrollbar flex snap-x gap-2 overflow-x-auto pb-1">
          <li className="snap-start">
            <Link href={base} aria-current={!activeCategory ? "page" : undefined} className={chipClass(!activeCategory)}>
              Todos
            </Link>
          </li>
          {categories.map((c) => {
            const active = activeCategory === c.slug;
            return (
              <li key={c.slug} className="snap-start">
                <Link
                  href={`${base}/${c.slug}`}
                  aria-current={active && !activeSub ? "page" : undefined}
                  className={chipClass(active)}
                >
                  {c.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {activeCategory && subcategories.length > 0 && (
        <nav aria-label="Filtrar por tipo de produto" className="relative mt-2">
          <ul className="no-scrollbar flex snap-x gap-2 overflow-x-auto pb-1">
            <li className="snap-start">
              <Link
                href={`${base}/${activeCategory}`}
                aria-current={!activeSub ? "page" : undefined}
                className={chipClass(!activeSub, true)}
              >
                Todos
              </Link>
            </li>
            {subcategories.map((s) => (
              <li key={s.slug} className="snap-start">
                <Link
                  href={`${base}/${activeCategory}/${s.slug}`}
                  aria-current={activeSub === s.slug ? "page" : undefined}
                  className={chipClass(activeSub === s.slug, true)}
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
