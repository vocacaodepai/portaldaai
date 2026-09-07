import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { site } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Contato",
  description: `Entre em contato com a equipe do ${site.name}.`,
};

export default function ContatoPage() {
  return (
    <Container className="py-16">
      <h1 className="font-display text-3xl font-semibold sm:text-4xl">Contato</h1>
      <div className="prose-article mt-8 max-w-2xl">
        <p>
          Quer enviar uma sugestão de pauta, tirar uma dúvida ou propor uma
          parceria com o {site.name}? Fale com a gente:
        </p>
        <p>
          E-mail:{" "}
          <a href="mailto:contato@portaldaai.com.br">contato@portaldaai.com.br</a>
        </p>
        <p>
          Respondemos o mais rápido possível, geralmente em até 2 dias úteis.
        </p>
      </div>
    </Container>
  );
}
