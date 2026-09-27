import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "spacexai-lanca-grok-4-7-mesmo-preco-mais-capaz-codigo",
  title: "SpaceXAI (ex-xAI) lança Grok 4.7, focado em programação e tarefas longas, pelo mesmo preço do Grok 4.6",
  author: "Bruno Danello",
  summary:
    "O novo modelo de topo da SpaceXAI — empresa formada pela fusão entre xAI e SpaceX — chega com janela de contexto de 500 mil tokens e foco em tarefas de programação e raciocínio de várias horas, mantendo o mesmo preço do Grok 4.6.",
  sourceName: "SpaceXAI",
  sourceUrl: "https://x.ai/news/grok-4-7",
  date: "2026-09-21",
  content: `
    <p>A SpaceXAI, empresa formada pela fusão entre a xAI e a SpaceX anunciada em fevereiro e oficializada com o rebranding em julho, lançou em 21 de setembro o Grok 4.7, seu novo modelo de topo voltado a programação, agentes e trabalho de conhecimento. A empresa descreve o lançamento como o modelo mais capaz que já colocou no ar para esse tipo de tarefa, embora os primeiros benchmarks independentes tragam um retrato mais misto do que o anúncio sugere.</p>

    <h2>O que mudou</h2>
    <p>Segundo a SpaceXAI, o Grok 4.7 usa uma base maior que a do Grok 4.6 e passou por um treinamento de reforço mais longo, com uma mistura de tarefas mais difíceis e peso maior em problemas que levam várias horas para serem concluídos. Na prática, isso significa que o modelo trabalha por mais tempo em tarefas complexas e checa o próprio trabalho com mais cuidado antes de responder. A janela de contexto chega a 500 mil tokens.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Preço sem mudança</span>
      <p>Apesar do salto de capacidade anunciado, o Grok 4.7 é cobrado pelo mesmo preço do Grok 4.6: US$ 1,60 por milhão de tokens de entrada e US$ 4,80 por milhão de saída, com leitura de cache a US$ 0,40 por milhão de tokens.</p>
    </div>

    <h2>Onde já está disponível</h2>
    <p>O modelo já está no ar no Cursor, no Grok Build (agente de programação da própria SpaceXAI) e na API pública, com chegada prevista nas próximas semanas a outras ferramentas de terceiros, roteadores de modelo e provedores de nuvem. O Grok 4.7 também já apareceu no GitHub Copilot como uma das opções de modelo.</p>

    <h2>Mais um capítulo da corrida entre modelos</h2>
    <p>O lançamento acontece na mesma semana em que Anthropic e OpenAI travaram sua própria disputa de preço e capacidade com o Claude Opus 5.5 e o GPT-6 Sol/Luna — reforçando que a escolha entre <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude e Gemini</a> (e agora também Grok) muda de mês a mês, e vale a pena reavaliar de tempos em tempos qual modelo entrega mais pelo que você paga, especialmente para tarefas técnicas como as descritas em nosso guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">prompt engineering</a>.</p>
  `,
};
