"use client";

import { useEffect, useState } from "react";
import { cardsOf, chipClass, clearKey, setHidden } from "./filterVisibility";

/**
 * Filtro de /categoria/ai-indica: categoria de produto (Cozinha, Casa
 * Inteligente...) e, dentro dela, o tipo específico (Air Fryer, Fechadura
 * Digital...). Diferente do CategoryChips de artigo (iniciantes,
 * monetização...), que não ajuda quem está procurando um produto pra
 * comprar. Filtra no navegador, sem recarregar a página, escondendo os
 * cards de `rootId` cujo `data-product-category`/`data-product-subcategory`
 * não bate com a seleção.
 */
export function ProductCategoryFilter({
  categories,
  subcategories,
  rootId,
  className = "",
}: {
  categories: { slug: string; label: string }[];
  subcategories: { slug: string; label: string; category: string }[];
  rootId: string;
  className?: string;
}) {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [activeSub, setActiveSub] = useState("todos");

  function apply(category: string, sub: string) {
    cardsOf(rootId).forEach((card) => {
      const catMatch = category === "todos" || card.dataset.productCategory === category;
      const subMatch = sub === "todos" || card.dataset.productSubcategory === sub;
      setHidden(card, "prod", !(catMatch && subMatch));
    });
  }

  // Ao sair da tela (ex.: trocou o tipo de review), devolve os cards.
  useEffect(() => () => clearKey(rootId, "prod"), [rootId]);

  function selectCategory(slug: string) {
    setActiveCategory(slug);
    setActiveSub("todos");
    apply(slug, "todos");
  }

  function selectSub(slug: string) {
    setActiveSub(slug);
    apply(activeCategory, slug);
  }

  const visibleSubs = subcategories.filter((s) => s.category === activeCategory);

  return (
    <div className={className}>
      <nav aria-label="Filtrar por categoria de produto" className="relative">
        <ul className="no-scrollbar flex snap-x gap-2 overflow-x-auto pb-1">
          <li className="snap-start">
            <button type="button" onClick={() => selectCategory("todos")} className={chipClass(activeCategory === "todos")}>
              Todos
            </button>
          </li>
          {categories.map((c) => (
            <li key={c.slug} className="snap-start">
              <button type="button" onClick={() => selectCategory(c.slug)} className={chipClass(activeCategory === c.slug)}>
                {c.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {activeCategory !== "todos" && visibleSubs.length > 0 && (
        <nav aria-label="Filtrar por tipo de produto" className="relative mt-2">
          <ul className="no-scrollbar flex snap-x gap-2 overflow-x-auto pb-1">
            <li className="snap-start">
              <button type="button" onClick={() => selectSub("todos")} className={chipClass(activeSub === "todos", true)}>
                Todos
              </button>
            </li>
            {visibleSubs.map((s) => (
              <li key={s.slug} className="snap-start">
                <button type="button" onClick={() => selectSub(s.slug)} className={chipClass(activeSub === s.slug, true)}>
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
