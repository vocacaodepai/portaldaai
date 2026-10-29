import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-carta-newsom-tribunais-barrar-modelos-ia-california",
  title: "Anthropic pede a Newsom que tribunais possam barrar modelos de IA",
  summary:
    "Em carta ao governador da Califórnia, a Anthropic defende que o estado possa pedir a um juiz que bloqueie modelos de IA de risco grave. A OpenAI discorda.",
  author: "Bruno Danello",
  sourceName: "The Next Web, Politico",
  sourceUrl: "https://thenextweb.com/news/anthropic-newsom-letter-courts-block-ai-models",
  date: "2026-10-29",
  publishedAt: "2026-10-29T07:30:00-03:00",
  topic: "regulacao",
  imageQuery: "Gavin Newsom portrait",
  content: `
    <p>A Anthropic enviou ao governador da Califórnia, Gavin Newsom, uma carta em que pede que o estado ganhe o poder de levar a um tribunal o pedido de bloqueio de modelos de inteligência artificial que representem um risco sério. O documento é datado de 15 de outubro de 2026, foi revelado primeiro pelo Politico e repercutido nesta quinta-feira (29) pelo The Next Web. A Anthropic confirmou que a carta é autêntica. Até a publicação da reportagem, o gabinete de Newsom não tinha respondido.</p>

    <p>O assunto não nasce do nada. Em setembro, Newsom assinou um decreto que criou um grupo de trabalho com a missão de recomendar, em até dois meses, como reforçar as leis californianas de segurança em IA. Uma das perguntas em aberto é se os desenvolvedores devem ser obrigados a conseguir desligar seus modelos. A carta da Anthropic é a contribuição da empresa para esse debate, e ela chega num momento em que o estado, sede de boa parte dos laboratórios de IA do mundo, discute como agir sem esperar o governo federal.</p>

    <h2>O que a Anthropic propõe</h2>
    <p>O ponto central é o que a empresa chama de bloqueio por decisão judicial. Pelo desenho descrito na reportagem, avaliadores independentes reportariam riscos ao procurador-geral da Califórnia. Se ele enxergasse um risco próximo de dano catastrófico, poderia pedir a um tribunal que pausasse um modelo. Um juiz poderia barrar o lançamento, o uso interno ou a continuação do desenvolvimento. Na frase atribuída à Anthropic, quando uma revisão mostra que um modelo traz risco sério, o governo deve poder pedir a um tribunal que o bloqueie.</p>
    <p>A proposta tem mais três peças. A primeira é a presença de auditores de segurança externos dentro das principais empresas de IA, pagos por meio de um fundo estadual, e não diretamente pelas companhias auditadas, para reduzir o conflito de interesse. A segunda é a publicação de relatórios de risco pelos grandes desenvolvedores pelo menos a cada seis meses. A terceira é um posicionamento sobre desligamento de emergência: a Anthropic concorda que toda empresa de ponta precisa ser capaz de desligar seus modelos rapidamente, mas argumenta que uma lei que exija só isso pode dar uma falsa sensação de segurança. A empresa prefere medidas mais estreitas, como desativar um único agente de IA ou cortar o acesso de um cliente específico.</p>

    <h2>Como se conecta ao projeto federal</h2>
    <p>Quem acompanha o noticiário de regulação já viu uma ideia parecida. Há poucos dias, mostramos que a empresa circulou entre parlamentares americanos um rascunho de lei federal, que você pode reler em <a href="/noticias/anthropic-projeto-lei-seguranca-ia-bloquear-modelo-50-mortes">Anthropic propõe lei que permite barrar modelo de IA com risco de 50 mortes</a>. Naquele texto, o Departamento de Comércio poderia pedir a um tribunal federal o bloqueio de um lançamento em casos restritos. A carta a Newsom leva a mesma lógica para o nível estadual e a combina com auditoria e transparência periódica.</p>
    <p>Do outro lado do Congresso, deputados já propuseram a chamada AI Kill Switch Act, que daria a autoridades o poder de mandar empresas desligarem modelos considerados perigosos. É um caminho diferente: em vez de passar por um juiz, a ordem viria de um agente do governo. A discussão sobre quem decide, e com que controle, é justamente o ponto de divergência entre as propostas, e algo semelhante apareceu em nível municipal, como mostramos em <a href="/noticias/nyc-council-projetos-lei-regulacao-ia-kill-switch-denuncia">projetos de lei de IA e kill switch na Câmara de Nova York</a>.</p>

    <h2>A resposta da OpenAI e o contexto político</h2>
    <p>A Anthropic não está sozinha na conversa. A OpenAI enviou a Newsom suas próprias recomendações em 20 de outubro. Segundo a reportagem, ela apoia controles de desligamento e auditores internos, mas não aceita ordens judiciais para bloquear modelos. A diferença mostra como as duas maiores empresas do setor têm visões distintas sobre o grau de intervenção externa aceitável. Para a Anthropic, um juiz funciona como freio com garantias legais. Para a OpenAI, esse mecanismo seria pesado demais e arriscaria atrasar produtos.</p>
    <p>Vale lembrar o pano de fundo. O decreto de Newsom surgiu em meio à disputa política sobre quem manda na regulação da IA nos Estados Unidos, tema que tratamos em <a href="/noticias/newsom-decreto-ia-super-intelligencia-california">Newsom assina decreto que mantém o termo Artificial Intelligence</a>. Já a relação do governador com o setor também passa por temas de trabalho, como vimos em <a href="/noticias/california-newsom-leis-ia-trabalhadores">as leis de IA e trabalhadores da Califórnia</a>. Qualquer regra que saia do grupo de trabalho tende a servir de referência para outros estados e para Washington, porque o que a Califórnia aprova costuma ter efeito nacional.</p>

    <h2>O que ainda não se sabe</h2>
    <p>É importante separar proposta de lei. A carta é uma recomendação, não uma norma, e o governador não se pronunciou. Também não há definição de como seria medido um risco catastrófico, quem credenciaria os avaliadores independentes ou quanto tempo um tribunal levaria para decidir. Esses detalhes decidem se um mecanismo desse tipo protege de verdade ou vira entrave burocrático. Críticos de regras mais duras costumam alertar para o risco de decisões lentas e de empurrar o desenvolvimento para fora da jurisdição regulada. Defensores respondem que, sem algum ponto de controle antes do lançamento, o custo de um erro recai sobre a sociedade.</p>
    <p>O grupo de trabalho do decreto tem prazo curto, de cerca de dois meses a partir de setembro, então as próximas semanas devem trazer sinais mais concretos. Vale acompanhar se o relatório final incorpora a ideia do bloqueio judicial, se prefere o modelo de desligamento defendido pela OpenAI ou se junta elementos de ambos.</p>

    <h2>Por que isso importa para você</h2>
    <p>Mesmo que a lei seja californiana, os efeitos chegam ao Brasil por um caminho prático: as ferramentas que você usa no trabalho, como Claude e ChatGPT, são desenvolvidas por empresas sediadas lá. Uma regra que permita barrar o lançamento ou o uso de um modelo pode atrasar versões novas, mudar o que é oferecido ao público ou criar exigências de transparência que depois se espalham para o resto do mundo. Na direção contrária, relatórios de risco periódicos e auditorias independentes podem aumentar a confiança em quem depende dessas ferramentas para atender clientes.</p>
    <p>Quem empreende com IA deve tirar daqui duas lições. A primeira é não depender de um único fornecedor, já que decisões regulatórias ou judiciais podem alterar a disponibilidade de um modelo. A segunda é acompanhar como as empresas tratam segurança, porque isso passa a pesar na escolha da ferramenta. O nosso guia <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">como escolher uma ferramenta de IA com segurança</a> ajuda a montar essa avaliação, e a comparação <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini: qual IA escolher</a> mostra as diferenças práticas entre as opções mais usadas.</p>
    <p>Também vale lembrar que o Brasil debate seu próprio marco legal de IA, e propostas americanas servem de referência para os parlamentares daqui. Se a ideia de um juiz decidir sobre o bloqueio de modelos ganhar força na Califórnia, é provável que apareça em discussões brasileiras também. Para o profissional comum, o recado é simples: acompanhe a regulação como acompanha preço e funcionalidades, porque ela passa a fazer parte do risco de usar cada ferramenta.</p>
    <div class="callout-box">
      <span class="callout-label">Resumo rápido</span>
      Em carta de 15 de outubro a Gavin Newsom, a Anthropic propõe que a Califórnia possa pedir a um tribunal o bloqueio de modelos de IA de risco sério, com auditores externos e relatórios semestrais. A OpenAI, em recomendações de 20 de outubro, apoia desligamento e auditoria interna, mas não ordens judiciais. Newsom ainda não respondeu.
    </div>
  `,
};
