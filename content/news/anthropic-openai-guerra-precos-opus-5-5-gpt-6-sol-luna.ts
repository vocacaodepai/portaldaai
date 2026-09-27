import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-openai-guerra-precos-opus-5-5-gpt-6-sol-luna",
  title: "Anthropic e OpenAI travam guerra de preços com Claude Opus 5.5 e GPT-6 Sol e Luna",
  author: "Bruno Danello",
  summary:
    "A Anthropic lançou o Claude Opus 5.5 com preço 40% menor que o do Opus 5 em uso típico, e poucos minutos depois a OpenAI respondeu com dois modelos novos, GPT-6 Sol e GPT-6 Luna, ambos cerca de 50% mais baratos que os antecessores de mesmo nome.",
  sourceName: "SiliconANGLE",
  sourceUrl: "https://siliconangle.com/2026/09/22/anthropic-releases-claude-opus-5-5-and-openai-counters-with-two-cheaper-gpt-6-models/",
  date: "2026-09-22",
  content: `
    <p>A Anthropic lançou o Claude Opus 5.5 cobrando US$ 4 por milhão de tokens de entrada e US$ 20 por milhão de saída — cerca de 40% mais barato do que o Opus 5 num uso típico, segundo a empresa, com a maior queda concentrada na leitura de cache, que caiu 60%, para US$ 0,20. Minutos depois, a OpenAI respondeu lançando dois modelos novos: o GPT-6 Sol, a US$ 2 de entrada e US$ 10 de saída por milhão de tokens, e o GPT-6 Luna, bem mais barato, a US$ 0,10 e US$ 0,50 — ambos cerca de metade do preço das versões anteriores que levavam os mesmos nomes.</p>

    <p>O movimento quase simultâneo das duas maiores empresas de IA generativa do mundo reforça um padrão que já vinha se desenhando ao longo do ano: lançamentos cada vez mais próximos no tempo, com preço por token caindo de forma consistente a cada nova geração de modelo, mesmo com ganhos de desempenho em benchmarks de programação e uso de computador.</p>

    <div class="callout-box callout-ok">
      <span class="callout-label">Bom para quem usa IA no dia a dia</span>
      <p>Preços mais baixos por token tendem a se refletir diretamente no custo de assinaturas e no uso via API — inclusive para tarefas mais pesadas, como analisar documentos longos ou manter conversas extensas, que ficam mais baratas de sustentar ao longo do tempo.</p>
    </div>

    <h2>Uma corrida que já dura o ano inteiro</h2>
    <p>A queda de preços acontece poucos dias depois de a própria Anthropic destacar que os <a href="/noticias/openai-anthropic-modelos-mais-seguros-testes-comportamento">novos modelos da OpenAI e da Anthropic tentam menos burlar restrições em testes de segurança</a>, mostrando que a disputa entre as duas empresas não é só de preço, mas também de quem consegue equilibrar capacidade e segurança de forma mais convincente. Para quem ainda está decidindo qual ferramenta usar no trabalho ou nos estudos, vale revisitar nosso comparativo entre <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude e Gemini</a> para entender as diferenças práticas entre elas.</p>
  `,
};
