import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "alibaba-chip-zhenwu-v900-modelo-10-trilhoes-parametros",
  title: "Alibaba apresenta novo chip de IA e planeja modelo com até 10 trilhões de parâmetros",
  author: "Bruno Danello",
  summary:
    "A gigante chinesa de tecnologia revelou o chip Zhenwu V900, que a empresa chama de mais potente já feito na China, e anunciou planos para treinar um modelo de IA de próxima geração até quatro vezes maior que seu atual carro-chefe, o Qwen 3.8 Max.",
  sourceName: "Bloomberg",
  sourceUrl: "https://www.bloomberg.com/news/articles/2026-09-22/alibaba-unveils-ai-chip-to-drive-20gw-of-data-centers-by-2032",
  date: "2026-09-22",
  content: `
    <p>A Alibaba anunciou em 22 de setembro, durante a conferência anual Apsara de sua divisão de nuvem em Hangzhou, o chip de IA Zhenwu V900 — que a empresa descreve como o mais potente já produzido na China. Segundo a Alibaba, o novo chip entrega o triplo do desempenho de seu antecessor, o Zhenwu M890, e conta com memória e largura de banda suficientes para sustentar clusters de até 500 mil placas trabalhando juntas em treinamento e inferência de modelos. A produção em massa e o lançamento comercial estão previstos para o primeiro trimestre de 2027.</p>

    <p>Na mesma ocasião, a empresa revelou planos para treinar um modelo de IA de próxima geração na escala de 5 a 10 trilhões de parâmetros — até quatro vezes maior que seu atual modelo carro-chefe, o Qwen 3.8 Max, lançado em julho com 2,4 trilhões de parâmetros. As ações da Alibaba subiram cerca de 5% após os anúncios.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">O que os anúncios sinalizam</span>
      <p>Ao apresentar chip próprio e um roteiro claro para modelos maiores no mesmo evento, a Alibaba reforça a estratégia de construir cada camada de seu negócio de IA internamente — do hardware ao modelo — em vez de depender só de fornecedores externos de chips.</p>
    </div>

    <h2>Por que isso importa</h2>
    <p>O movimento da Alibaba acontece em meio a uma corrida acelerada entre empresas chinesas e americanas para lançar modelos cada vez mais capazes — como vimos recentemente com o <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">avanço simultâneo de ChatGPT, Claude e Gemini</a> e, mais recentemente, com o lançamento do Claude Opus 5.5 e do GPT-6 Sol/Luna. Diferente dos laboratórios americanos, que dependem majoritariamente de chips da Nvidia, a aposta da Alibaba em desenvolver hardware próprio reflete também a pressão das restrições de exportação de semicondutores impostas pelos EUA à China — um fator que deve continuar moldando a competição global por infraestrutura de IA nos próximos anos.</p>
  `,
};
