import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { site } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Sobre",
  description: `Conheça o ${site.name} e a nossa missão.`,
};

export default function SobrePage() {
  return (
    <Container className="py-16">
      <h1 className="font-display text-3xl font-semibold sm:text-4xl">
        Sobre o <span className="gradient-text">Portal da AI</span>
      </h1>
      <div className="prose-article mt-8 max-w-2xl">
        <p>
          O <strong>Portal da AI</strong> nasceu com um propósito simples: tornar a
          inteligência artificial compreensível e útil para qualquer pessoa,
          independentemente de idade ou nível técnico.
        </p>
        <p>
          Publicamos conteúdo diário com guias práticos, comparativos de
          ferramentas e caminhos reais para você usar a IA no seu trabalho,
          nos seus estudos e, principalmente, para criar novas fontes de
          renda a partir dela.
        </p>
        <h2>Nossa missão</h2>
        <p>
          Acreditamos que a inteligência artificial é uma das maiores
          oportunidades econômicas da nossa geração. Nosso trabalho é traduzir
          essa tecnologia em linguagem simples e mostrar, na prática, como
          qualquer pessoa pode aproveitá-la — seja para economizar tempo,
          conseguir um emprego melhor ou construir um negócio próprio.
        </p>
        <h2>Como produzimos nosso conteúdo</h2>
        <p>
          Nossa equipe editorial utiliza ferramentas de inteligência
          artificial no processo de pesquisa e produção de conteúdo, sempre
          com curadoria e revisão humana, buscando trazer informação prática,
          confiável e sem jargão desnecessário.
        </p>
        <h2>Fale com a gente</h2>
        <p>
          Tem uma dúvida, sugestão de pauta ou proposta de parceria? Visite
          nossa página de <a href="/contato">contato</a>.
        </p>
      </div>
    </Container>
  );
}
