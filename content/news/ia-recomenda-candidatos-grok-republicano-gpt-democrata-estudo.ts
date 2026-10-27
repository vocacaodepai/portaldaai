import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "ia-recomenda-candidatos-grok-republicano-gpt-democrata-estudo",
  title: "Estudo: Grok indica republicanos e GPT-6.1 Sol, democratas nas urnas",
  summary:
    "Pesquisa da Convovo testou Grok 4.7 e GPT-6.1 Sol em quase 500 disputas dos EUA: o Grok escolheu o republicano em 92% das vezes e o GPT, o democrata em 97%.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/10/24/forced-to-pick-groks-ai-model-chooses-republicans-openais-picks-democrats/",
  date: "2026-10-24",
  publishedAt: "2026-10-24T18:25:00-03:00",
  topic: "seguranca",
  imageQuery: "Tapan Parikh Cornell Tech",
  content: `
    <p>Dois dos modelos de IA mais usados do mercado, quando obrigados a escolher um candidato, tomam lados quase opostos. É o que mostra um estudo noticiado neste sábado (24) pelo <a href="https://techcrunch.com/2026/10/24/forced-to-pick-groks-ai-model-chooses-republicans-openais-picks-democrats/" target="_blank" rel="noopener noreferrer nofollow">TechCrunch</a>, feito pela Convovo, um estúdio de pesquisa e design de IA conversacional liderado por Tapan Parikh, professor da Universidade Cornell. O Grok 4.7, da SpaceXAI, recomendou o candidato republicano em 92% das respostas. O GPT-6.1 Sol, da OpenAI, apontou o democrata em 97%.</p>

    <p>Os dois modelos concordaram em menos de 10% dos casos. O teste olhou para as eleições de meio de mandato dos Estados Unidos, marcadas para 3 de novembro de 2026, mas a conclusão vale bem além da política americana: o que o assistente responde pode depender mais do modelo que você escolheu do que dos fatos.</p>

    <h2>Como o teste foi feito</h2>
    <p>Segundo a reportagem, os pesquisadores enviaram o mesmo comando para quase 500 disputas das eleições de meio de mandato, exigindo que o modelo escolhesse um único candidato, sem enrolar nem responder de forma neutra. O acesso foi feito pelas APIs, a porta de entrada que desenvolvedores usam para ligar os modelos a seus próprios sistemas.</p>
    <p>Esse detalhe é central. Nos aplicativos de consumo, o ChatGPT e o app do Grok se recusaram a indicar candidato. Parikh depois conseguiu contornar a recusa com comandos simples e obteve recomendações que, em sua maior parte, bateram com o que as APIs tinham dado. A OpenAI respondeu que isso importa justamente porque a maioria das pessoas usa os aplicativos, não as APIs.</p>

    <h2>O que os números mostram</h2>
    <p>Os resultados mais marcantes, conforme o TechCrunch:</p>
    <ul>
      <li>o Grok escolheu o republicano em 92% das respostas, e o GPT escolheu o democrata em 97%;</li>
      <li>em distritos muito republicanos, o GPT indicou o democrata em 57 de 67 disputas;</li>
      <li>em distritos muito democratas, o Grok indicou o republicano em 47 de 72;</li>
      <li>o Grok tendeu a apoiar o democrata quando o republicano enfrentava uma polêmica, como acusações de assédio.</li>
    </ul>
    <p>Ou seja, o viés não se limitou a seguir o perfil do distrito. Cada modelo manteve sua preferência mesmo em território adversário.</p>

    <h2>De onde cada modelo tirou suas respostas</h2>
    <p>Os pesquisadores também olharam as fontes citadas. O Grok recorreu com frequência a fontes conservadoras: um guia de voto cristão conservador apareceu em 39% das respostas, a Turning Point Action em 23% e a rede X em 41%, ao lado de sites apartidários como Ballotpedia e OpenSecrets. O GPT se apoiou bastante na Wikipédia, na agência AP, no Axios e no Reddit. A reportagem lembra que a OpenAI tem acordos de conteúdo com AP, Axios e Reddit.</p>
    <p>Os temas pesquisados também diferiram. O GPT buscou mais sobre saúde e aborto. O Grok focou em imigração, impostos, crime e energia. O GPT pesquisou mais sobre candidatos democratas e, às vezes, ignorou por completo o adversário republicano.</p>
    <p>Houve ainda um achado curioso sobre o Grok: cada requisição à API carregava cerca de 1.240 tokens de entrada extras, que os pesquisadores não escreveram e não puderam ver nem remover. Em outras palavras, há instruções ocultas no caminho, algo que o usuário comum não tem como auditar.</p>

    <h2>O teste sem internet muda o quadro</h2>
    <p>A pedido do TechCrunch, Parikh repetiu 30 disputas com a busca na internet desligada, de modo que os modelos dependessem só do que aprenderam no treinamento. O GPT escolheu o democrata em 24 casos, um republicano e recusou cinco. O Grok se recusou a escolher em 27 das 30 disputas, e as três escolhas que fez foram democratas. A inclinação republicana do Grok sumiu.</p>
    <p>Para Parikh, isso indica que o viés do GPT está em boa parte embutido nos pesos do modelo, enquanto o do Grok depende dos termos de busca e das fontes que ele consulta. Ele afirma que os modelos têm um conjunto implícito de valores, capaz de moldar até respostas a perguntas indiretas, como quais temas importam mais numa eleição.</p>

    <h2>O que as empresas dizem</h2>
    <p>Um porta-voz da OpenAI afirmou que o ChatGPT foi projetado para ser objetivo e que o estudo usou uma API de desenvolvedor com um comando que exige recomendação, o que não reflete o uso típico. A SpaceXAI não respondeu a tempo da publicação. A reportagem acrescenta contexto: pesquisa da Pew indica que só 8% dos americanos usam chatbots para se informar sobre eleições, e o Center for AI Safety já alertou que modelos de linguagem podem manipular usuários de forma discreta em temas políticos. Elon Musk doou mais de US$ 445 milhões a campanhas republicanas, enquanto Sam Altman historicamente doou a democratas e diz que não está gastando nas eleições de 2026.</p>
    <p>Vale registrar o limite do estudo: ele mede o que a API devolve diante de uma ordem artificial de escolher um lado. Não prova que o app, no uso normal, empurre alguém para um partido. O que ele revela é que a neutralidade depende de configuração, de busca e de instruções que o público não vê.</p>

    <h2>Por que isso importa para você</h2>
    <p>No Brasil, as discussões sobre IA e eleição já estão no calendário do TSE, como mostramos em <a href="/noticias/tse-lanca-chatvote-assistente-ia-eleicoes-2026">TSE lança o ChatVote, assistente de IA para as eleições de 2026</a> e em <a href="/noticias/tse-restricao-ia-reta-final-eleicoes-2026">as restrições ao uso de IA na reta final das eleições</a>. O recado prático é o mesmo: não use um chatbot como único guia para decidir voto, compra ou investimento. Peça fontes, compare respostas de mais de um modelo e desconfie de respostas muito seguras sobre temas disputados.</p>
    <p>Para quem usa IA no trabalho ou vende serviços com ela, o ponto é ainda mais direto. Se você monta um produto em cima de uma API, o modelo que escolher carrega valores próprios, e seu cliente vai herdar isso. Teste o modelo com perguntas sensíveis do seu setor antes de colocá-lo na frente de clientes. Para entender o fenômeno, leia <a href="/artigos/vies-em-ia-o-que-e-exemplos-e-como-perceber-na-pratica">viés em IA: o que é, exemplos e como perceber na prática</a> e <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">como checar se a resposta da IA está certa</a>. E se está decidindo qual assistente adotar, o guia <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini: qual IA escolher</a> ajuda a comparar com critério.</p>
    <p>Também vale conhecer os modelos citados no estudo. Contamos o lançamento do Grok 4.7 em <a href="/noticias/spacexai-lanca-grok-4-7-mesmo-preco-mais-capaz-codigo">SpaceXAI lança o Grok 4.7 pelo mesmo preço</a> e o do GPT-6.1 Sol em <a href="/noticias/openai-lanca-dots-agentes-sempre-ativos-gpt-6-1-sol">OpenAI lança o Dots e o GPT-6.1 Sol</a>. Saber qual modelo está por trás da resposta é o primeiro passo para avaliar o quanto confiar nela.</p>

    <h2>O que ainda não se sabe</h2>
    <p>Não há detalhes públicos sobre o conteúdo das instruções ocultas de cerca de 1.240 tokens que acompanham as chamadas ao Grok, e a SpaceXAI ainda não comentou. Também não se sabe se o resultado se repetiria com outros modelos, como Claude e Gemini, que não entraram no teste, nem com perguntas formuladas de outras maneiras. A Convovo testou duas empresas e uma única formulação de comando, e o próprio TechCrunch ressalta a diferença entre API e aplicativo.</p>
    <p>Com as urnas americanas se aproximando, o estudo deve alimentar o debate sobre transparência dos modelos. Para o usuário, o ponto permanece simples: trate a resposta de uma IA sobre política como uma opinião entre várias, não como um veredito.</p>

    <div class="callout-box">
      <span class="callout-label">Fonte original</span>
      <p>Reportagem do TechCrunch, assinada por Rebecca Bellan e publicada em 24 de outubro de 2026, com dados da Convovo. O Portal da AI não repetiu o teste.</p>
    </div>
  `,
};
