"use client";

import { useEffect, useState } from "react";
import { reviewKindLabels, type ReviewKind } from "./reviewKinds";
import { chipClass, clearKey, cardsOf, setHidden } from "./filterVisibility";

/**
 * Filtro secundário da AI Indica: tipo de review (individual ou comparativo).
 * Roda no navegador e vale só para os cards da página atual (`rootId`); o
 * filtro principal (categoria/tipo de produto) é por rota, ver
 * ProductCategoryLinks.
 */
export function AiIndicaKindFilter({ rootId, className = "" }: { rootId: string; className?: string }) {
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
              className={chipClass(kind === "todos", true)}
            >
              Todos os tipos
            </button>
          </li>
          {kinds.map((k) => (
            <li key={k} className="snap-start">
              <button
                type="button"
                aria-pressed={kind === k}
                title={reviewKindLabels[k].help}
                onClick={() => select(k)}
                className={chipClass(kind === k, true)}
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
          : `${reviewKindLabels[kind].help} (filtra os cards desta página)`}
      </p>
    </div>
  );
}
