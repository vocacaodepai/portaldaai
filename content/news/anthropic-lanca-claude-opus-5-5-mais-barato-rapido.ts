import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-lanca-claude-opus-5-5-mais-barato-rapido",
  title: "Anthropic lança Claude Opus 5.5: 20% mais barato e 30% mais rápido que o Opus 5",
  author: "Bruno Danello",
  summary:
    "O novo modelo de topo da Anthropic custa US$ 4 por milhão de tokens de entrada e US$ 20 por milhão de saída — 20% abaixo do Opus 5 — e gera respostas mais de 30% mais rápido, mantendo desempenho próximo ao do modelo principal Fable 5.1 em boa parte das tarefas.",
  sourceName: "Anthropic",
  sourceUrl: "https://www.anthropic.com/claude-opus-5-5",
  date: "2026-09-22",
  content: `
    <p>A Anthropic anunciou em 22 de setembro o Claude Opus 5.5, atualização do seu modelo de topo focada em corte de custo e ganho de velocidade em vez de um salto isolado de capacidade. O novo modelo custa US$ 4 por milhão de tokens de entrada e US$ 20 por milhão de saída — 20% abaixo dos US$ 5 e US$ 25 cobrados pelo Opus 5, lançado em julho — e as leituras de cache caem 60%, de US$ 0,50 para US$ 0,20 por milhão de tokens.</p>

    <p>Além do preço, a empresa afirma que o Opus 5.5 gera respostas mais de 30% mais rápido que seu antecessor e mantém desempenho próximo ao do Fable 5.1, o modelo principal da Anthropic, na maior parte das tarefas — apesar de custar cerca de 40% menos para rodar.</p>

    <h2>Para quem já usa Claude no trabalho</h2>
    <p>A Anthropic destaca ganhos em codificação, agentes autônomos e tarefas de conhecimento: um dos testadores iniciais completou uma migração de código de 680 mil linhas em menos de um dia, trabalho que levaria semanas para um time de engenharia. O modelo também alcançou os melhores resultados já registrados na auditoria comportamental automatizada da empresa, sua bateria de testes de alinhamento com milhares de cenários simulados.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Onde já está disponível</span>
      <p>O Opus 5.5 já está no ar para assinantes Pro, Max, Team e Enterprise do Claude, e para desenvolvedores na Claude Platform, além de AWS, Google Cloud e Microsoft Foundry.</p>
    </div>

    <h2>Parte de uma guerra de preços mais ampla</h2>
    <p>O lançamento aconteceu minutos antes de a OpenAI anunciar seus próprios modelos GPT-6 Sol e GPT-6 Luna com cortes de preço ainda mais agressivos — reforçando um padrão que já discutimos em nosso <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">comparativo entre ChatGPT, Claude e Gemini</a>: a diferença de preço entre os grandes modelos está encolhendo rápido, o que muda a conta de quem decide entre <a href="/artigos/ia-gratis-ou-paga-o-que-vale-a-pena">usar IA gratuita ou paga</a> no dia a dia.</p>
  `,
};
