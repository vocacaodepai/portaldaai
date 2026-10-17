"use client";

import { useEffect, useState } from "react";
import { ProductCategoryFilter } from "./ProductCategoryFilter";
import { reviewKindLabels, type ReviewKind } from "./reviewKinds";
import { chipClass, clearKey, cardsOf, setHidden } from "./filterVisibility";

export type AiIndicaFilterData = Record<
  ReviewKind,
  {
    categories: { slug: string; label: string }[];
    subcategories: { slug: string; label: string; category: string }[];
  }
>;

/**
 * Filtro de duas camadas da AI Indica: primeiro o tipo de review (individual
 * ou comparativo); só depois de escolher um tipo aparecem os filtros de
 * categoria/subcategoria de produto, aplicados dentro do tipo escolhido.
 * Filtra no navegador, escondendo os cards de `rootId`.
 */
export function AiIndicaFilter({
  data,
  rootId,
  className = "",
}: {
  data: AiIndicaFilterData;
  rootId: string;
  className?: string;
}) {
  const [kind, setKind] = useState<"todos" | ReviewKind>("todos");

  function select(next: "todos" | ReviewKind) {
    setKind(next);
    cardsOf(rootId).forEach((card) => {
      setHidden(card, "kind", !(next === "todos" || card.dataset.kind === next));
    });
  }

  useEffect(() => () => clearKey(rootId, "kind"), [rootId]);

  const kinds = Object.keys(reviewKindLabels) as ReviewKind[];

  return (
    <div className={className}>
      <nav aria-label="Filtrar por tipo de review">
        <ul className="no-scrollbar flex snap-x gap-2 overflow-x-auto pb-1">
          <li className="snap-start">
            <button
              type="button"
              aria-pressed={kind === "todos"}
              onClick={() => select("todos")}
              className={chipClass(kind === "todos")}
            >
              Todos
            </button>
          </li>
          {kinds.map((k) => (
            <li key={k} className="snap-start">
              <button
                type="button"
                aria-pressed={kind === k}
                title={reviewKindLabels[k].help}
                onClick={() => select(k)}
                className={chipClass(kind === k)}
              >
                {reviewKindLabels[k].label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <p className="mt-2 text-xs leading-relaxed text-muted">
        {kind === "todos"
          ? `${reviewKindLabels.review.label}: ${reviewKindLabels.review.help} ${reviewKindLabels.guia.label}: ${reviewKindLabels.guia.help}`
          : reviewKindLabels[kind].help}
      </p>
      {kind !== "todos" && (
        <ProductCategoryFilter
          key={kind}
          categories={data[kind].categories}
          subcategories={data[kind].subcategories}
          rootId={rootId}
          className="mt-3"
        />
      )}
    </div>
  );
}
