import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "pewdiepie-ajax-ia-local-openai-banido",
  title: "PewDiePie lança IA local após ser banido duas vezes pela OpenAI",
  summary:
    "Youtuber mostra o Ajax, modelo de 9 bilhões de parâmetros que roda só no computador do usuário, e diz que a OpenAI suspendeu sua conta por suspeita de destilação.",
  author: "Bruno Danello",
  sourceName: "Interesting Engineering",
  sourceUrl:
    "https://interestingengineering.com/ai-robotics/pewdiepie-ajax-ai-model-local-pc-openai-ban",
  date: "2026-10-03",
  content: `
    <p>O youtuber sueco Felix Kjellberg, conhecido como PewDiePie, anunciou em 3 de outubro o Ajax, um modelo de linguagem de cerca de 9 bilhões de parâmetros feito para rodar inteiramente no computador do próprio usuário, sem depender de nuvem. Segundo reportagem da <a href="https://interestingengineering.com/ai-robotics/pewdiepie-ajax-ai-model-local-pc-openai-ban" target="_blank" rel="noopener noreferrer nofollow">Interesting Engineering</a>, o Ajax é uma versão ajustada do Qwen3.5-9B, modelo aberto da chinesa Alibaba, e foi pensado para funcionar como assistente sempre ativo dentro do Odysseus, o ambiente de trabalho pessoal de código aberto que Kjellberg mantém e já havia mostrado antes em vídeos no próprio canal.</p>

    <p>O lançamento ganhou atenção extra porque Kjellberg revelou, no vídeo de apresentação, que a OpenAI suspendeu sua conta duas vezes durante o desenvolvimento do Ajax. A primeira suspensão citou "destilação" como motivo, prática em que um desenvolvedor usa as respostas de um modelo de terceiros para treinar ou ajustar um modelo próprio; a conta foi restaurada depois de um recurso. A segunda suspensão ocorreu quando ele usou o ChatGPT para gerar dados de treinamento (as chamadas "seed data") para o próprio Ajax. A OpenAI não deu explicação pública sobre os casos, e o relato disponível é apenas a versão do próprio criador.</p>

    <h2>Como funciona um modelo que roda só no seu computador</h2>
    <p>Diferente do ChatGPT, do Claude ou do Gemini, que processam cada pergunta em servidores da empresa que oferece o serviço, um modelo local como o Ajax faz todo o processamento dentro da própria máquina do usuário, sem enviar nada para fora. Isso exige hardware razoavelmente robusto: modelos de 9 bilhões de parâmetros em geral pedem uma GPU com memória de vídeo (VRAM) relevante, algo que ainda está fora do alcance da maioria dos notebooks comuns, mas que já é viável em desktops gamer de médio para alto custo. Kjellberg também usou a ferramenta de código aberto Heretic para remover parte do comportamento de recusa automática do modelo, mantendo, segundo ele, barreiras contra instruções de automutilação ou de dano a terceiros.</p>
    <p>O Ajax ainda não está disponível ao público: a página oficial do projeto, que teve uma contagem regressiva antes do anúncio, passou a dizer apenas que o lançamento vai sair "quando estiver pronto", sinalizando que faltam etapas de ajuste fino, redução do tamanho do modelo (quantização) e testes de desempenho antes da versão final chegar a quem quiser instalar. O movimento acompanha uma tendência maior que já apareceu em outros lançamentos recentes, como o <a href="/noticias/xiaomi-lanca-mimo-v2-6-modelo-aberto-treinado-3-milhoes">MiMo-V2.6 da Xiaomi, modelo aberto treinado por apenas US$ 3 milhões</a>, mostrando que construir um modelo próprio, mesmo sem o orçamento de uma gigante de tecnologia, está cada vez mais acessível para quem tem conhecimento técnico e hardware adequado.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para quem usa ferramentas de IA no trabalho ou no próprio negócio no Brasil, o caso do Ajax chama atenção para duas coisas práticas. A primeira é o custo recorrente: assinaturas de ChatGPT Plus, Claude Pro ou Gemini Pro cobram mensalidade em dólar, o que pesa mais no bolso brasileiro do que no americano. Um modelo local elimina essa mensalidade, trocando-a por um investimento único em hardware, o que pode valer a pena para quem já processa um grande volume de tarefas repetitivas com IA. Nosso guia sobre <a href="/artigos/ia-codigo-aberto-o-que-muda-para-quem-usa">IA de código aberto e o que muda para quem usa no trabalho</a> detalha quando vale a pena rodar um modelo próprio e quando o assistente de nuvem comum ainda é a opção mais simples.</p>
    <p>A segunda é a privacidade: como o processamento fica na própria máquina, nenhuma informação digitada passa pelos servidores de uma empresa terceira, o que importa para quem lida com dados sensíveis de clientes, contratos ou informações financeiras. Isso não quer dizer que toda empresa deva abandonar o ChatGPT ou o Claude, que continuam sendo opções mais simples e com suporte oficial, mas mostra que existe uma alternativa real para quem se preocupa com o que acontece com os dados enviados a um serviço de IA. Vale a leitura do nosso artigo sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade: o que você entrega sem perceber</a> para entender melhor esse ponto antes de decidir qual caminho seguir.</p>

    <h2>Destilação: o motivo da polêmica com a OpenAI</h2>
    <p>O termo "destilação", citado pela OpenAI nas duas suspensões da conta de Kjellberg, descreve a prática de usar as respostas de um modelo já treinado para ensinar ou ajustar um modelo novo, geralmente menor e mais barato de operar. Os termos de uso da OpenAI proíbem usar as saídas do ChatGPT ou da API para treinar modelos concorrentes, regra que a empresa já aplicou em outros episódios de grande repercussão: em setembro, a própria OpenAI disse ter <a href="/noticias/openai-moonshot-destilacao-raciocinio-chatgpt">bloqueado uma campanha coordenada que tentava extrair o raciocínio oculto do ChatGPT</a>, atribuída a associados da chinesa Moonshot AI. A diferença no caso de Kjellberg é a escala: ele é uma pessoa física testando os limites da política de uso ao treinar um modelo pessoal, não uma empresa concorrente tentando copiar capacidades comerciais em larga escala, o que deixa a régua da OpenAI num território mais cinzento do que nos casos corporativos.</p>
    <p>O episódio também reabre uma discussão antiga sobre até que ponto é justo restringir destilação quando o próprio modelo usado como base, o Qwen3.5-9B, é aberto e distribuído pela Alibaba justamente para esse tipo de ajuste. Treinar um modelo aberto a partir de dados gerados por outro sistema de IA, aberto ou fechado, é uma prática cada vez mais comum entre pesquisadores independentes e pequenas equipes que não têm orçamento para treinar um modelo do zero, e episódios como esse tendem a se repetir enquanto não houver clareza maior sobre onde termina o uso legítimo e onde começa a violação de contrato.</p>

    <h2>O que esperar do lançamento completo</h2>
    <p>Kjellberg tem histórico de se envolver tecnicamente em projetos próprios de infraestrutura digital, e o Odysseus já existia como ambiente de automação pessoal antes do Ajax ser anunciado como seu "motor" de IA dedicado. Caso o lançamento avance como planejado, a expectativa é que o modelo ganhe uma versão com compressão de tamanho (quantização) voltada a placas de vídeo mais acessíveis, o que ampliaria o público capaz de rodá-lo sem depender de hardware de ponta. Para o mercado brasileiro de IA, que já acompanha de perto o avanço de modelos abertos chineses como o Qwen e o DeepSeek, o Ajax funciona como mais um exemplo prático de que a barreira entre "usar IA de alguém" e "manter sua própria IA" está cada vez mais baixa, mesmo fora do ambiente corporativo.</p>
    <div class="callout-box">
      <span class="callout-label">Resumo rápido</span>
      PewDiePie anunciou o Ajax, modelo de IA de 9 bilhões de parâmetros baseado no Qwen3.5-9B que roda localmente, sem nuvem, dentro do seu ambiente Odysseus. Ele revelou que a OpenAI suspendeu sua conta duas vezes durante o desenvolvimento, citando destilação. O modelo ainda não tem data de lançamento público.
    </div>
  `,
  faq: [
    {
      question: "O que é o Ajax, da PewDiePie?",
      answer:
        "É um modelo de IA de cerca de 9 bilhões de parâmetros, ajustado a partir do Qwen3.5-9B da Alibaba, feito para rodar localmente no computador do usuário dentro do Odysseus, o ambiente de automação pessoal criado por Felix Kjellberg (PewDiePie).",
    },
    {
      question: "Por que a OpenAI suspendeu a conta de PewDiePie?",
      answer:
        "Segundo o próprio Kjellberg, a primeira suspensão citou 'destilação', prática de treinar um modelo próprio usando as respostas de outro modelo, o que viola os termos de uso da OpenAI. A segunda ocorreu quando ele usou o ChatGPT para gerar dados de treinamento para o Ajax.",
    },
    {
      question: "O Ajax já está disponível para download?",
      answer:
        "Não. Até o anúncio, a página oficial do projeto informava apenas que o lançamento sairia 'quando estiver pronto', já que faltam etapas de ajuste fino, redução de tamanho (quantização) e testes de desempenho antes de uma versão pública.",
    },
  ],
};
