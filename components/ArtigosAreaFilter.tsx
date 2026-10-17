"use client";

import { useEffect, useState } from "react";
import { AiIndicaFilter, type AiIndicaFilterData } from "./AiIndicaFilter";
import { ReviewToolChips } from "./ReviewToolChips";
import { cardsOf, chipClass, clearKey, setHidden } from "./filterVisibility";

export type Area = {
  key: string;
  label: string;
  /** Categoria do artigo (data-category) que pertence à área; omitido = todos. */
  category?: string;
  /** Só review (kind=review) ou só não-review dentro da categoria. */
  kind?: "review" | "not-review";
};

/**
 * Filtro por área de /artigos. Mostra todos os artigos numa página só e filtra
 * no navegador. "Reviews de ferramentas" abre o subfiltro por ferramenta;
 * "AI Indica" abre o filtro de duas camadas (tipo de review + produto).
 */
export function ArtigosAreaFilter({
  areas,
  tools,
  aiData,
  rootId,
  className = "",
}: {
  areas: Area[];
  tools: string[];
  aiData: AiIndicaFilterData;
  rootId: string;
  className?: string;
}) {
  const [active, setActive] = useState("todos");

  function select(key: string) {
    setActive(key);
    const area = areas.find((a) => a.key === key);
    cardsOf(rootId).forEach((card) => {
      let show = true;
      if (area?.category) {
        show = card.dataset.category === area.category;
        if (show && area.kind === "review") show = card.dataset.kind === "review";
        if (show && area.kind === "not-review") show = card.dataset.kind !== "review";
      }
      setHidden(card, "area", !show);
    });
  }

  useEffect(() => () => clearKey(rootId, "area"), [rootId]);

  const items = [{ key: "todos", label: "Todos" }, ...areas];

  return (
    <div className={className}>
      <nav aria-label="Filtrar artigos por área">
        <ul className="no-scrollbar flex snap-x gap-2 overflow-x-auto pb-1">
          {items.map((it) => (
            <li key={it.key} className="snap-start">
              <button
                type="button"
                aria-pressed={active === it.key}
                onClick={() => select(it.key)}
                className={chipClass(active === it.key)}
              >
                {it.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {active === "reviews-ferramentas" && <ReviewToolChips tools={tools} rootId={rootId} className="mt-3" />}
      {active === "ai-indica" && <AiIndicaFilter data={aiData} rootId={rootId} className="mt-3" />}
    </div>
  );
}
