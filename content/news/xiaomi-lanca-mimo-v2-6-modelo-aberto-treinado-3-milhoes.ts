import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "xiaomi-lanca-mimo-v2-6-modelo-aberto-treinado-3-milhoes",
  title: "Xiaomi lança o MiMo-V2.6, novo modelo aberto que treinou por apenas US$ 3 milhões",
  author: "Bruno Danello",
  summary:
    "Sob licença MIT, o MiMo-V2.6-Pro tem 1 trilhão de parâmetros, entende texto, imagem, vídeo e áudio em um único modelo e alcançou o topo entre os modelos de peso aberto no índice da Artificial Analysis — com um custo de treinamento considerado baixo para o padrão do setor.",
  sourceName: "Data North AI",
  sourceUrl: "https://datanorth.ai/news/xiaomi-releases-mimo-v2-6-pro-and-flash",
  date: "2026-09-21",
  content: `
    <p>A Xiaomi lançou o MiMo-V2.6-Pro e o MiMo-V2.6-Flash, dois modelos de IA de peso aberto sob licença MIT, com pesos publicados no Hugging Face. O Pro é um modelo de mistura de especialistas com 1,02 trilhão de parâmetros totais (42 bilhões ativos por token), enquanto o Flash, mais leve, tem 309 bilhões de parâmetros totais com 15 bilhões ativos — ambos com janela de contexto de até 1 milhão de tokens, suficiente para repositórios de código inteiros ou sessões longas de agentes.</p>

    <p>Os dois modelos são "omnimodais nativos": processam texto, imagem, vídeo e áudio dentro da mesma arquitetura, sem depender de módulos separados para cada tipo de conteúdo. Segundo a Xiaomi, o MiMo-V2.6-Pro alcançou pontuação 46 no Índice de Inteligência da Artificial Analysis, colocando-o no topo entre os modelos de peso aberto disponíveis atualmente — com a API já ativa na própria plataforma da Xiaomi e também na OpenRouter.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">O dado que chama atenção</span>
      <p>Segundo estimativas do setor, o treinamento do MiMo-V2.6-Pro custou cerca de US$ 3 milhões — uma fração do que laboratórios como OpenAI e Anthropic gastam para treinar modelos de ponta, reforçando a tendência de empresas chinesas alcançarem desempenho competitivo com custos de treinamento bem menores.</p>
    </div>

    <h2>Mais uma peça na disputa por modelos abertos</h2>
    <p>O lançamento reforça a corrida entre empresas chinesas por modelos de peso aberto competitivos, um movimento que já vimos com o <a href="/noticias/deepseek-v4-1-flash-mantem-v4-pro">DeepSeek V4.1 Flash</a> e que pressiona diretamente o preço cobrado por concorrentes ocidentais. Para quem avalia qual ferramenta de IA usar no dia a dia, vale lembrar que "melhor" nem sempre significa "mais caro" — como já discutimos em nosso comparativo entre <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude e Gemini</a> — e que entender termos como "peso aberto" e "mistura de especialistas" ajuda a acompanhar esse tipo de notícia, algo que nosso <a href="/artigos/dicionario-de-inteligencia-artificial-termos-essenciais">dicionário de inteligência artificial</a> explica em detalhes.</p>
  `,
};
