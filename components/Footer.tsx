import Link from "next/link";
import { categories, site } from "@/lib/articles";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-8 px-5 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="col-span-2">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-foreground/15 text-[11px] font-semibold tracking-tight">
              AI
            </span>
            <span className="font-display text-[17px] font-semibold tracking-tight">
              Portal da AI
            </span>
          </Link>
          <p className="mt-3 max-w-sm text-sm text-muted">{site.description}</p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Categorias</h4>
          <ul className="space-y-2 text-sm text-muted">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/categoria/${c.slug}`} className="transition hover:text-foreground">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Institucional</h4>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <Link href="/sobre" className="transition hover:text-foreground">
                Sobre o Portal da AI
              </Link>
            </li>
            <li>
              <Link href="/contato" className="transition hover:text-foreground">
                Contato
              </Link>
            </li>
            <li>
              <Link href="/politica-de-privacidade" className="transition hover:text-foreground">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link href="/termos-de-uso" className="transition hover:text-foreground">
                Termos de Uso
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-muted sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Portal da AI. Todos os direitos reservados.</p>
          <p>Feito para ajudar pessoas reais a prosperarem com inteligência artificial.</p>
        </div>
      </div>
    </footer>
  );
}
