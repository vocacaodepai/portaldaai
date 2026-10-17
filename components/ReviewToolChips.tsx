"use client";

import { useEffect, useState } from "react";
import { cardsOf, clearKey, setHidden } from "./filterVisibility";

function chipClass(active: boolean): string {
  return `inline-flex h-8 items-center whitespace-nowrap rounded-lg border px-3 text-xs font-medium transition ${
    active
      ? "border-foreground bg-foreground text-background"
      : "border-border bg-surface text-muted hover:border-accent/50 hover:text-foreground"
  }`;
}

/**
 * Filtro de /reviews por ferramenta (ChatGPT, Claude, Gemini...), lido de
 * `review.tool` de cada artigo. Diferente do CategoryChips de artigo
 * (iniciantes, monetização...), que não faz sentido numa página que já é só
 * reviews de ferramenta.
 */
export function ReviewToolChips({
  tools,
  rootId,
  className = "mt-8 border-y border-border py-3",
}: {
  tools: string[];
  rootId: string;
  className?: string;
}) {
  const [active, setActive] = useState("todas");

  function apply(tool: string) {
    setActive(tool);
    cardsOf(rootId).forEach((card) => {
      setHidden(card, "tool", !(tool === "todas" || card.dataset.reviewTool === tool));
    });
  }

  useEffect(() => () => clearKey(rootId, "tool"), [rootId]);

  if (tools.length <= 1) return null;

  return (
    <nav aria-label="Filtrar reviews por ferramenta" className={`relative ${className}`}>
      <ul className="no-scrollbar flex snap-x gap-2 overflow-x-auto pb-1">
        <li className="snap-start">
          <button type="button" onClick={() => apply("todas")} className={chipClass(active === "todas")}>
            Todas
          </button>
        </li>
        {tools.map((tool) => (
          <li key={tool} className="snap-start">
            <button type="button" onClick={() => apply(tool)} className={chipClass(active === tool)}>
              {tool}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
