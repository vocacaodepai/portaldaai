import Link from "next/link";
import { categories } from "@/lib/articles";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { SearchDialog } from "./SearchDialog";
import { MobileMenu } from "./MobileMenu";

export type NavItem = {
  href: string;
  label: string;
  description?: string;
  /** Submenu (ex.: Artigos -> categorias). */
  children?: NavItem[];
  /** Botão de destaque no menu (AI Indica). */
  highlight?: boolean;
};

export const INSTITUTIONAL_NAV = [
  { href: "/sobre", label: "Sobre o Portal da AI" },
  { href: "/autor/bruno-danello", label: "Quem escreve" },
  { href: "/contato", label: "Contato" },
  { href: "/politica-editorial", label: "Política editorial" },
  { href: "/publicidade-e-afiliados", label: "Publicidade e afiliados" },
  { href: "/politica-de-privacidade", label: "Política de privacidade" },
  { href: "/termos-de-uso", label: "Termos de uso" },
];

export function Header() {
  const articleItems: NavItem[] = [
    { href: "/artigos", label: "Todos os artigos", description: "Tudo o que publicamos, com filtro por área." },
    ...categories
      .filter((c) => c.slug !== "ai-indica" && c.slug !== "ferramentas")
      .map((c) => ({ href: `/categoria/${c.slug}`, label: c.label, description: c.description })),
    {
      href: "/reviews",
      label: "Reviews de ferramentas",
      description: "Reviews independentes de ferramentas de IA, com nota de 0 a 10.",
    },
    {
      href: "/categoria/ai-indica",
      label: "AI Indica",
      description: "Reviews individuais e comparativos de produtos, com nota e link de compra.",
    },
  ];

  const primary: NavItem[] = [
    { href: "/noticias", label: "Notícias" },
    { href: "/artigos", label: "Artigos", children: articleItems },
    { href: "/reviews", label: "Reviews" },
    { href: "/categoria/ai-indica", label: "AI Indica", highlight: true },
    { href: "/sobre", label: "Sobre" },
  ];

  const linkClass =
    "rounded-lg px-3 py-2 text-sm font-medium text-muted transition hover:bg-surface-2 hover:text-foreground";

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-surface/85 backdrop-blur-md supports-[backdrop-filter]:bg-surface/75">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Logo priority className="mr-2" />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {primary.map((i) =>
            i.children ? (
              <div key={i.href} className="group relative">
                <button
                  type="button"
                  aria-haspopup="true"
                  className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-muted transition hover:bg-surface-2 hover:text-foreground group-focus-within:text-foreground"
                >
                  {i.label}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div className="invisible absolute left-0 top-full z-50 w-[520px] translate-y-1 pt-2 opacity-0 transition group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="grid grid-cols-2 gap-1 rounded-xl border border-border bg-surface p-2 shadow-xl">
                    {i.children.map((c) => (
                      <Link key={c.href} href={c.href} className="rounded-lg px-3 py-2.5 transition hover:bg-surface-2">
                        <span className="block text-sm font-semibold">{c.label}</span>
                        <span className="mt-0.5 line-clamp-2 block text-xs leading-snug text-muted">
                          {c.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : i.highlight ? (
              <Link
                key={i.href}
                href={i.href}
                className="mx-1 inline-flex h-9 items-center rounded-lg bg-gradient-to-br from-accent to-accent-2 px-3.5 text-sm font-semibold text-accent-foreground shadow-sm ring-1 ring-accent-2/40 transition hover:opacity-90"
              >
                {i.label}
              </Link>
            ) : (
              <Link key={i.href} href={i.href} className={linkClass}>
                {i.label}
              </Link>
            ),
          )}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <SearchDialog />
          <ThemeToggle className="hidden lg:inline-flex" />
          <Link
            href="/categoria/iniciantes"
            className="hidden h-9 items-center rounded-lg bg-accent px-3.5 text-sm font-semibold text-accent-foreground transition hover:opacity-90 lg:inline-flex"
          >
            Comece aqui
          </Link>
          <MobileMenu primary={primary} institutional={INSTITUTIONAL_NAV} />
        </div>
      </div>
    </header>
  );
}
