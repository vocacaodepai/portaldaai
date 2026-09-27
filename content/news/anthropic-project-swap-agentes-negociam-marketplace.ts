import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-project-swap-agentes-negociam-marketplace",
  title: "Anthropic testa agentes de IA negociando trocas de objetos em nome de humanos",
  author: "Bruno Danello",
  summary:
    "No experimento Project Swap, funcionários da Anthropic em seis escritórios levaram um livro para doar, conversaram por cinco minutos com o Claude sobre suas preferências de leitura e deixaram um agente barganhar com outros agentes num pregão aberto — a capacidade do modelo usado pesou mais no resultado da negociação do que as instruções de prompt dadas a ele.",
  sourceName: "Anthropic",
  sourceUrl: "https://www.anthropic.com/research/project-swap",
  date: "2026-09-24",
  content: `
    <p>A Anthropic publicou os resultados do Project Swap, um experimento controlado que dá sequência ao Project Deal, sua primeira tentativa de colocar agentes de IA para interagir num mercado em nome de pessoas reais. Desta vez, funcionários da empresa em seis escritórios diferentes trouxeram um livro que queriam doar, tiveram uma conversa curta com o Claude sobre suas preferências de leitura, e depois enviaram um agente baseado no Claude para um "pregão" aberto, onde ele precisava negociar, fazer ofertas e fechar trocas com os agentes de outras pessoas.</p>

    <p>O resultado chamou atenção da própria Anthropic: a partir de uma conversa de apenas cinco minutos, o ranking de livros feito pelo agente coincidiu com o do próprio funcionário em 61% dos pares comparados — um índice considerado surpreendentemente alto para um contexto tão curto de conversa. Segundo a empresa, isso indica que os agentes conseguiram representar razoavelmente bem as preferências humanas durante negociações de mercado, mesmo com informação limitada.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">O que mais pesa na negociação</span>
      <p>A principal conclusão do estudo é que a capacidade do modelo subjacente usado pelo agente influencia mais a eficiência da negociação do que instruções específicas de prompt — ou seja, um raciocínio mais avançado parece ser pré-requisito para que um agente de IA participe bem de mercados autônomos, mais do que a forma como ele é instruído a agir.</p>
    </div>

    <p>O experimento se soma a uma linha de pesquisa da Anthropic sobre como agentes de IA podem agir de forma autônoma em nome de pessoas em contextos comerciais e de cadeia de suprimentos — um tema que já discutimos em nosso artigo sobre <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">a diferença entre agente de IA, chatbot e automação</a>, e que ganha relevância à medida que empresas avaliam colocar agentes autônomos para tomar decisões de negociação em seu nome.</p>
  `,
};
