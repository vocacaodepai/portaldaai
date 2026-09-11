import Link from "next/link";
import { categories, site } from "@/lib/articles";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-foreground/15 text-[11px] font-semibold tracking-tight">
            AI
          </span>
          <span className="font-display text-[17px] font-semibold tracking-tight">
            Portal da AI
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          <Link href="/artigos" className="transition hover:text-foreground">
            Artigos
          </Link>
          {categories.slice(0, 4).map((c) => (
            <Link
              key={c.slug}
              href={`/categoria/${c.slug}`}
              className="transition hover:text-foreground"
            >
              {c.label}
            </Link>
          ))}
          <Link href="/sobre" className="transition hover:text-foreground">
            Sobre
          </Link>
        </nav>

        <Link
          href="/artigos"
          className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90"
        >
          Ler artigos
        </Link>
      </div>
      <span className="sr-only">{site.name}</span>
    </header>
  );
}
