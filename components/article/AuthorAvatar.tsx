/** Iniciais do autor (ex.: "BD") num quadrado em gradiente. Não existe foto do autor. */
export function AuthorAvatar({
  name,
  size = "sm",
  className = "",
}: {
  name: string;
  /** sm = 32px (linha de meta), lg = 64px (caixa do autor). */
  size?: "sm" | "lg";
  className?: string;
}) {
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
  const dims = size === "lg" ? "h-16 w-16 text-xl" : "h-8 w-8 text-[11px]";
  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 select-none items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-2 font-display font-bold tracking-tight text-white ${dims} ${className}`}
    >
      {initials}
    </span>
  );
}
