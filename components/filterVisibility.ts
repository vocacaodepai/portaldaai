/**
 * Visibilidade de cards com vários filtros ao mesmo tempo (tipo de review,
 * categoria de produto, ferramenta, área). Cada filtro liga/desliga a própria
 * "marca" (data-hide-<chave>) e o card só aparece se nenhuma marca estiver ligada.
 */
export function setHidden(card: HTMLElement, key: string, hidden: boolean): void {
  const attr = `hide${key.charAt(0).toUpperCase()}${key.slice(1)}`;
  if (hidden) card.dataset[attr] = "1";
  else delete card.dataset[attr];
  const anyHidden = Object.keys(card.dataset).some((k) => k.startsWith("hide"));
  card.style.display = anyHidden ? "none" : "";
}

export function cardsOf(rootId: string): HTMLElement[] {
  const root = document.getElementById(rootId);
  return root ? Array.from(root.querySelectorAll<HTMLElement>("article[data-category]")) : [];
}

export function clearKey(rootId: string, key: string): void {
  cardsOf(rootId).forEach((c) => setHidden(c, key, false));
}

export function chipClass(active: boolean, small = false): string {
  return `inline-flex items-center whitespace-nowrap rounded-lg border font-medium transition ${
    small ? "h-7 px-2.5 text-[11px]" : "h-8 px-3 text-xs"
  } ${
    active
      ? "border-foreground bg-foreground text-background"
      : "border-border bg-surface text-muted hover:border-accent/50 hover:text-foreground"
  }`;
}
