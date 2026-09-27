import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "processo-antitruste-anthropic-openai-google-xai-desaceleracao",
  title: "Anthropic, OpenAI, Google e xAI são processadas por suposta combinação para desacelerar a IA",
  author: "Bruno Danello",
  summary:
    "Uma ação coletiva protocolada em tribunal federal da Califórnia acusa Dario Amodei, Sam Altman, Demis Hassabis e Elon Musk de firmarem um acordo ilegal entre concorrentes ao apoiarem publicamente, na mesma data, a proposta de desaceleração da IA feita pelo CEO da Anthropic — o que configuraria violação da lei antitruste americana, segundo os autores do processo.",
  sourceName: "CNN Business",
  sourceUrl: "https://us.cnn.com/2026/09/19/business/ai-slowdown-lawsuit-antitrust",
  date: "2026-09-19",
  content: `
    <p>O apoio quase simultâneo de Dario Amodei, Sam Altman, Demis Hassabis e Elon Musk a uma proposta de desaceleração da inteligência artificial — que cobrimos aqui na <a href="/noticias">semana passada</a> — virou alvo de uma ação judicial. Uma ação coletiva protocolada em 18 de setembro no tribunal federal do Distrito Norte da Califórnia acusa as quatro empresas de terem firmado um acordo ilegal entre concorrentes, em vez de apenas coincidirem em opinião.</p>

    <h2>O que a ação alega</h2>
    <p>Segundo o processo, em 12 de setembro Dario Amodei propôs publicamente uma "coordenação em nível de setor" para limitar o avanço da IA — incluindo restrições ao poder computacional usado em treinamento, a rodadas de treinamento e ao uso de IA para melhorar outras IAs, além de avaliadores independentes para verificar o cumprimento dessas regras. No mesmo dia, segundo a ação, Musk, Altman e Hassabis endossaram publicamente a proposta — o que os autores do processo classificam como um acordo comercial ilegal entre concorrentes diretos, e não como posições independentes que coincidiram por acaso.</p>

    <div class="callout-box callout-warn">
      <span class="callout-label">O que está em jogo</span>
      <p>A classe representada no processo inclui consumidores dos EUA que pagam assinatura de ChatGPT, Claude, Grok ou Gemini. Os autores pedem indenização multiplicada (treble damages) e uma ordem judicial que proíba o suposto acordo, além de pedir que a Justiça certifique uma classe nacional de consumidores.</p>
    </div>

    <h2>Por que isso é delicado</h2>
    <p>O caso expõe uma tensão real no setor: safety-conscious executivos concordando publicamente em desacelerar o ritmo de lançamentos pode, aos olhos da lei antitruste americana, parecer coordenação entre concorrentes para limitar a oferta de um produto — mesmo quando a intenção declarada é reduzir riscos de segurança, não proteger margem ou preço. Empresas de IA que participam de discussões públicas sobre "pacing" (ritmo de desenvolvimento) provavelmente vão precisar documentar com mais cuidado que decisões de segurança são tomadas de forma independente, não combinada.</p>
  `,
};
