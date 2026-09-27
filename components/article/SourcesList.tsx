/** "Fontes consultadas": lista de links externos ao fim do artigo. */
export function SourcesList({ sources }: { sources?: { label: string; url: string }[] }) {
  if (!sources || sources.length === 0) return null;
  return (
    <section aria-labelledby="fontes" className="mt-10 rounded-xl border border-border bg-surface p-5 sm:p-6">
      <h2 id="fontes" className="label-mono text-muted">
        Fontes consultadas
      </h2>
      <ol className="mt-3 space-y-2">
        {sources.map((s, i) => {
          let host = "";
          try {
            host = new URL(s.url).hostname.replace(/^www\./, "");
          } catch {
            host = "";
          }
          return (
            <li key={`${s.url}-${i}`} className="flex gap-3 text-sm leading-snug">
              <span className="shrink-0 font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
              <span className="min-w-0">
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground underline decoration-border underline-offset-4 transition hover:text-accent hover:decoration-accent"
                >
                  {s.label}
                </a>
                {host && <span className="ml-2 font-mono text-[11px] text-muted">{host} ↗</span>}
              </span>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
