import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center justify-center py-32 text-center">
      <span className="text-accent font-display text-6xl font-bold">404</span>
      <h1 className="mt-4 font-display text-2xl font-semibold">Página não encontrada</h1>
      <p className="mt-2 max-w-sm text-sm text-muted">
        O conteúdo que você procura não existe ou foi movido.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90"
      >
        Voltar para a página inicial
      </Link>
    </Container>
  );
}
