import Link from "next/link";

const CRITERIA = [
  { label: "Facilidade", text: "Dá para usar sem tutorial? Quanto tempo até o primeiro resultado útil?" },
  { label: "Recursos", text: "O que a ferramenta faz de verdade, comparado ao que promete na página de vendas." },
  { label: "Preço em reais", text: "Quanto custa por mês convertido em reais, com impostos, e se o plano grátis serve." },
  { label: "Português", text: "Entende e escreve bem em português do Brasil ou só funciona direito em inglês?" },
  { label: "Privacidade", text: "O que acontece com os seus dados e se dá para desligar o uso deles em treinamento." },
];

/** Bloco "Como avaliamos": critérios públicos das notas de review. */
export function ReviewCriteria() {
  return (
    <section aria-labelledby="como-avaliamos" className="mt-8 rounded-xl border border-border bg-surface p-5 sm:p-6">
      <p className="label-mono text-muted">Como avaliamos</p>
      <h2 id="como-avaliamos" className="mt-1 font-display text-xl font-bold tracking-tight sm:text-2xl">
        Nota de 0 a 10, por critérios públicos
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
        Cada review recebe uma nota final de 0 a 10, calculada a partir de cinco critérios avaliados
        separadamente. Quando há teste prático, dizemos por quantos dias usamos a ferramenta antes de
        escrever. Links de afiliado, quando existem, são sempre sinalizados no próprio artigo e não
        mudam a nota.
      </p>
      <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {CRITERIA.map((c, i) => (
          <li key={c.label} className="rounded-lg border border-border bg-background p-4">
            <span className="font-mono text-xs font-semibold text-accent">{String(i + 1).padStart(2, "0")}</span>
            <p className="mt-1 font-display text-sm font-semibold">{c.label}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted">{c.text}</p>
          </li>
        ))}
      </ol>
      <p className="mt-4 font-mono text-xs text-muted">
        Leia a{" "}
        <Link href="/politica-editorial" className="text-accent hover:underline">
          política editorial
        </Link>{" "}
        e a página de{" "}
        <Link href="/publicidade-e-afiliados" className="text-accent hover:underline">
          publicidade e afiliados
        </Link>
        .
      </p>
    </section>
  );
}
