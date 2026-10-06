"use client";

import { useState } from "react";

function chipClass(active: boolean): string {
  return `inline-flex h-8 items-center whitespace-nowrap rounded-lg border px-3 text-xs font-medium transition ${
    active
      ? "border-foreground bg-foreground text-background"
      : "border-border bg-surface text-muted hover:border-accent/50 hover:text-foreground"
  }`;
}

/**
 * Subfiltro dentro de /categoria/[slug] (iniciantes, monetização, negócios,
 * carreira, futuro — nunca ferramentas/ai-indica, que têm filtro próprio):
 * por subtipo de artigo (ex., dentro de Monetização: Freelas e serviço,
 * Produtos digitais...). Diferente do ArticleCategoryChips (muda de
 * categoria), esse filtra dentro da categoria atual. Filtra no navegador,
 * sem recarregar a página, escondendo os cards de `rootId` cujo
 * `data-article-subcategory` não bate com a seleção.
 */
export function ArticleSubcategoryFilter({
  subcategories,
  rootId,
  className = "",
}: {
  subcategories: { slug: string; label: string }[];
  rootId: string;
  className?: string;
}) {
  const [active, setActive] = useState("todos");

  function apply(slug: string) {
    setActive(slug);
    const root = document.getElementById(rootId);
    if (!root) return;
    root.querySelectorAll<HTMLElement>("[data-article-subcategory]").forEach((card) => {
      card.style.display = slug === "todos" || card.dataset.articleSubcategory === slug ? "" : "none";
    });
  }

  return (
    <nav aria-label="Filtrar por subtipo" className={`relative ${className}`}>
      <ul className="no-scrollbar flex snap-x gap-2 overflow-x-auto pb-1">
        <li className="snap-start">
          <button type="button" onClick={() => apply("todos")} className={chipClass(active === "todos")}>
            Todos
          </button>
        </li>
        {subcategories.map((s) => (
          <li key={s.slug} className="snap-start">
            <button type="button" onClick={() => apply(s.slug)} className={chipClass(active === s.slug)}>
              {s.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
