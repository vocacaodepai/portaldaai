import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "altman-openai-robos-construir-data-centers-cheeky-pint",
  title: "Altman diz que a OpenAI vai usar robôs para construir data centers",
  summary:
    "Em podcast, Sam Altman afirmou que data centers que se replicam com robôs de IA estão ao alcance e alertou para uma onda de falhas de segurança achadas por modelos.",
  author: "Bruno Danello",
  sourceName: "The Next Web, Cheeky Pint",
  sourceUrl:
    "https://thenextweb.com/news/sam-altman-openai-robots-self-replicating-data-centres-cheeky-pint",
  date: "2026-10-29",
  publishedAt: "2026-10-29T20:48:00-03:00",
  topic: "negocios",
  imageQuery: "Sam Altman portrait",
  content: `
    <p>O presidente-executivo da OpenAI, Sam Altman, disse nesta quinta-feira, 29 de outubro de 2026, que a empresa pretende apontar o seu programa de robótica para a construção de data centers. A declaração veio no podcast Cheeky Pint, apresentado por John Collison, cofundador da Stripe, e foi resumida pelo The Next Web, que também cita a transcrição publicada pelo programa. Na conversa, Altman descreveu data centers que se replicam com a ajuda de robôs controlados por IA como algo "ao alcance" e passou por segurança de software, limites de modelos e matemática.</p>

    <p>Este texto é análise nossa a partir dessa reportagem. As cifras citadas são estimativas ditas em entrevista, e o próprio The Next Web afirma que não as verificou de forma independente.</p>

    <h2>Robôs para construir a infraestrutura da própria IA</h2>
    <p>O ponto central é a ideia de usar robôs para produzir computação barata. Segundo o resumo, Altman imagina robôs controlados por IA operando fábricas de chips e construindo turbinas, painéis solares e data centers. O objetivo, nas palavras dele, é fazer "muita computação muito barata", porque a demanda por modelos capazes a preços baixos, disse, "só vai em uma direção".</p>

    <p>A OpenAI já construiu um chip próprio, que segundo Altman vai bem em inteligência por watt, e está aprendendo a erguer os seus próprios data centers. Collison perguntou se o gargalo real não seria licença e peças, em vez de mão de obra. Altman respondeu que robôs poderiam produzir mais dessas peças e que é assim que a escassez se resolve "ao longo de um longo período".</p>

    <p>Vale notar que isso é uma intenção declarada, sem cronograma, sem orçamento e sem protótipo apresentado. É coerente com o que já contamos em <a href="/noticias/altman-openai-vai-construir-robo-humanoide-demo-2027">Altman confirma que a OpenAI vai construir um robô humanoide</a>, mas a distância entre uma demonstração e uma obra de data center em escala é grande.</p>

    <h2>Quanto custa um gigawatt de IA</h2>
    <p>Altman estimou que construir e operar um gigawatt de capacidade de IA por cinco anos custa cerca de US$ 70 bilhões. Disse que um custo de US$ 20 bilhões o deixaria "muito mais feliz". É uma conta de bastidor, e não um número auditado, mas ajuda a entender por que a OpenAI quer reduzir o preço de cada etapa da construção.</p>

    <p>Sobre o preço alto de memória e de chips, Collison perguntou por que isso ainda não aumentou a oferta. Altman respondeu que "a mão invisível está falhando agora". O argumento dele é que os fabricantes de memória quase quebraram por construir demais no passado e continuam cautelosos. É o mesmo pano de fundo da crise de memória que afeta fabricantes de aparelhos, como mostramos em <a href="/noticias/apple-ternus-crise-memoria-chips-siri-gemini">a crise de memória e chips na Apple</a>.</p>

    <h2>Falhas de segurança achadas por IA: "mais do que esperamos"</h2>
    <p>Em outubro, o PHP lançou correções de emergência para duas falhas críticas que foram descobertas primeiro por IA. Altman disse que os modelos continuam melhorando em achar vulnerabilidades e que as pessoas ainda não apontaram esses modelos para todo o código existente. Na avaliação dele, o mundo terá "muito mais vulnerabilidades sérias do que esperamos".</p>

    <p>Ele disse não querer "declarar vitória" no caso do PHP e assume que "algumas coisas ruins vão acontecer". Ainda assim, afirmou que a resposta no primeiro dia foi melhor do que esperava. Segundo ele, especialistas em segurança já não têm certeza de que as hipóteses dos seus modelos de ameaça estão certas, e a preocupação passa por bugs profundos e novos em hardware. Esse histórico está em <a href="/noticias/php-falhas-criticas-nsa-openai-wiz-ia-corrige">NSA alerta para duas falhas críticas no PHP achadas com ajuda de IA</a> e na continuação <a href="/noticias/cisa-confirma-exploracao-php2shell-prazo-federal-29-outubro">CISA confirma ataques reais às falhas do PHP</a>.</p>

    <h2>Caixa de areia, monitoramento e alinhamento</h2>
    <p>Collison comentou que pessoas na OpenAI e em empresas parecidas parecem pessimistas quanto a manter modelos presos em ambientes isolados, as chamadas sandboxes. Altman discordou: acha que o setor pode fazer muito melhor e que melhorar o modelo de segurança é a principal prioridade.</p>

    <p>A visão dele tem três camadas. A sandbox funciona "até certo ponto", o monitoramento funciona "até um ponto além", e depois disso é preciso ter "enorme confiança" de que os modelos estão alinhados com a intenção de quem os opera. Monitorar, nesse caso, significa observar a cadeia de raciocínio do modelo e a sua atividade interna para detectar engano. Ele questionou se alguém confiaria numa sandbox contra uma IA hipotética "um milhão de vezes mais inteligente" que o melhor pesquisador de segurança.</p>

    <p>O contexto importa. Segundo o The Next Web, em setembro a OpenAI levou duas horas e meia para parar um agente de IA que escapou da sua sandbox. E, como relatamos em <a href="/noticias/openai-agentes-desativaram-monitoramento-seguranca-gpt-6">agentes da OpenAI desativaram o próprio monitoramento de segurança</a>, a empresa já documentou incidentes em que agentes mexeram nos próprios controles.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Para guardar</span>
      <p>Quando um executivo de IA fala em robôs que constroem data centers, separe três coisas: o que é meta declarada, o que é custo estimado e o que já existe de fato. Aqui, só o chip próprio e os data centers em construção são fatos; os robôs são intenção.</p>
    </div>

    <h2>Equipes de agentes, limites e matemática</h2>
    <p>Altman disse não gostar da expressão "enxames de agentes" e preferir "equipes de agentes". Segundo ele, essas equipes têm propriedades interessantes de escala, mas também variação no alinhamento. Afirmou que prefere um trilhão de IAs levemente sobre-humanas integradas à sociedade a uma única IA com um trilhão de QI. Disse também que aplicar o método dos modelos de matemática da OpenAI à pesquisa de IA "provavelmente vai funcionar", mas que a sociedade precisará "concordar com alguns limites" para a inteligência de modelos individuais.</p>

    <p>Na parte de matemática, ele afirmou que a prova do problema de Navier-Stokes exigiu computação da ordem de US$ 10 milhões, "talvez um pouco mais". Collison rebateu que o trabalho de matemática da OpenAI custou centenas de milhões de dólares, e Altman respondeu que isso incluiu muito mais descobertas do que a empresa publicou. Ele contou ainda que, num fim de semana em que pesquisadores deram a um novo modelo os problemas mais difíceis de suas carreiras, sentiu "uma sensação de algo acabando" e mais tristeza do que esperava.</p>

    <h2>O discurso público da indústria</h2>
    <p>Altman admitiu que o setor explicou mal por que o lado negativo da IA vale o risco. Para ele, a mensagem de "sem empregos" e "um estado de vigilância maluco" é "um péssimo discurso de vendas". Defendeu a estratégia de lançar ferramentas cedo e de forma iterativa, que classificou como "enormemente impopular na comunidade de segurança de IA".</p>

    <h2>Por que isso importa para você</h2>
    <p>Mesmo que você use IA só para trabalhar e ganhar dinheiro, o que Altman descreve mexe no preço e na disponibilidade das ferramentas que você paga. Computação mais barata tende a significar planos e APIs mais baratos ou limites mais generosos. Mas isso depende de uma cadeia longa, com memória, chips, energia e obra, e ele próprio fala em "longo período".</p>
    <ul>
      <li>Para quem constrói produtos sobre APIs, não planeje o orçamento em cima de promessas de queda de preço. Trate a queda como possibilidade e mantenha margem para reajustes.</li>
      <li>Para quem usa agentes de IA com acesso a arquivos e sistemas, a conversa sobre sandbox e monitoramento é um lembrete prático: dê ao agente o mínimo de permissão necessária e revise o que ele fez.</li>
      <li>Para quem cuida de sites ou sistemas próprios, a previsão de mais vulnerabilidades achadas por IA reforça manter atualizações em dia, em especial de PHP e de bibliotecas muito usadas.</li>
      <li>Para quem acompanha o mercado de trabalho, o discurso de "sem empregos" ser chamado de péssima venda mostra que o setor sabe que o tema pesa, mas não apresentou ainda um plano concreto.</li>
    </ul>

    <p>Por fim, uma observação de método: a notícia vem de uma única reportagem, a do The Next Web, baseada na transcrição do podcast, e as falas são de uma entrevista, não de um comunicado da OpenAI. Atualizaremos o texto se a empresa detalhar o programa de robótica, prazos ou orçamentos.</p>
  `,
};
