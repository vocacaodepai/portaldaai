import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "bessent-critica-ceos-ia-pedido-regulacao",
  title:
    "Bessent rebate CEOs de IA que pedem regulação: 'então desacelerem'",
  summary:
    "Secretário do Tesouro dos EUA chamou pedidos de Amodei, Altman e Musk de alarmismo sem solução e disse que o governo não vai assumir a responsabilidade dos laboratórios.",
  author: "Bruno Danello",
  sourceName: "The Next Web (via The Axios Show)",
  sourceUrl:
    "https://thenextweb.com/news/bessent-says-ai-alarmism-without-solutions-is-not-leadership",
  date: "2026-10-03",
  content: `
    <p>O secretário do Tesouro dos Estados Unidos, Scott Bessent, criticou publicamente os executivos de inteligência artificial que pedem regulação federal enquanto alertam para riscos catastróficos dos próprios produtos. Em entrevista ao programa <a href="https://thenextweb.com/news/bessent-says-ai-alarmism-without-solutions-is-not-leadership" target="_blank" rel="noopener noreferrer nofollow">The Axios Show</a>, publicada no sábado (3), Bessent disse que "esse alarmismo sem solução por parte de uma parte da comunidade de IA não é liderança". A fala foi uma resposta direta aos pedidos feitos em setembro por Dario Amodei, CEO da Anthropic, Sam Altman, CEO da OpenAI, e Elon Musk, dono da xAI, para que o setor desacelerasse o desenvolvimento dos modelos mais avançados.</p>
    <p>Questionado sobre esses pedidos, Bessent foi direto: "bem, então eles deveriam desacelerar". Ele comparou os executivos que pedem freio regulatório ao mesmo tempo em que continuam lançando modelos cada vez mais potentes a uma cena clássica do personagem Hannibal Lecter, "é meio que: me impeçam antes que eu mate de novo". Sobre quem deve responder pelos riscos da tecnologia, o secretário foi categórico: "é a galera dos laboratórios que precisa aceitar a responsabilidade, e eu concordo com isso", descartando qualquer ideia de que o governo federal vá funcionar como um escudo de responsabilidade civil para as empresas.</p>

    <h2>O pano de fundo: meses de pedidos de freio vindos de dentro do setor</h2>
    <p>A declaração de Bessent chega depois de um ano em que os próprios fundadores dos maiores laboratórios de IA do mundo passaram a pedir publicamente mais supervisão sobre o que eles mesmos constroem. Bill Gates chegou a alertar para um cenário de "um bilhão de mortes" ligado a riscos da IA se nada for feito. Esse padrão, CEO alertando para risco existencial enquanto segue levantando capital e lançando modelo mais capaz, já tinha gerado atrito entre os próprios laboratórios: o cientista-chefe da Meta, Yann LeCun, chegou a chamar Amodei de <a href="/noticias/lecun-chama-amodei-deluded-debate-seguranca-ia">"deluded" (iludido)</a> num debate público sobre segurança de IA, acusando a Anthropic de usar o discurso de risco catastrófico como estratégia de marketing regulatório.</p>
    <p>O governo Trump, por sua vez, vem resistindo a qualquer modelo de regulação federal nos moldes europeus desde o início do mandato. Só na semana passada, executivos de Anthropic, OpenAI, Google, Meta, xAI e Nvidia assinaram na Casa Branca o <a href="/noticias/acordo-seguranca-ia-casa-branca-trump">Joint Commitment on Frontier Responsibilities</a>, um conjunto de compromissos descrito pelo próprio governo como "moralmente vinculante", mas sem qualquer força de lei. Dias antes, Trump já tinha recebido Amodei para um jantar privado e <a href="/noticias/trump-amodei-jantar-casa-branca-desaceleracao-ia">rejeitado o pedido de desaceleração</a>, dizendo que os EUA lideram a China por até 18 meses e que qualquer nova regra "abriria a porta para Pequim assumir a liderança". A fala de Bessent se encaixa exatamente nessa linha: o governo aceita que o risco existe, mas empurra toda a responsabilidade prática de administrar esse risco para dentro das próprias empresas, e não para uma agência federal.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para quem usa ChatGPT, Claude, Gemini ou qualquer outra ferramenta de IA generativa no trabalho ou no negócio no Brasil, a fala de Bessent confirma, de forma direta, algo que já vínhamos observando nos últimos meses: não existe no horizonte próximo uma agência reguladora americana com poder de multa ou suspensão sobre essas empresas. A régua de segurança que vai valer na prática, pelo menos nos Estados Unidos, é a que cada laboratório decide aplicar sobre si mesmo, reforçada por acordos voluntários como o assinado na Casa Branca ou pela proposta de um órgão autorregulatório batizado de <a href="/noticias/safa-padrao-seguranca-ia-openai-anthropic-google">SAFA</a>, negociado entre OpenAI, Anthropic e Google sem qualquer participação do governo.</p>
    <p>Na prática, isso significa que cabe a quem usa essas ferramentas no dia a dia redobrar o próprio cuidado antes de colocar qualquer modelo generativo em processo crítico de negócio, já que não há, hoje, uma camada externa e independente de fiscalização que sirva de garantia. Vale revisar o nosso <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist de como escolher ferramenta de IA com segurança</a> justamente por esse motivo: o selo de "compromisso moral" assinado por um CEO na Casa Branca não tem o mesmo peso de uma auditoria externa obrigatória. Para empreendedores brasileiros que dependem de API de modelos americanos, o recado também é sobre previsibilidade: enquanto a política de segurança de IA nos EUA continuar sendo decidida por acordo informal entre Casa Branca e CEOs de laboratório, qualquer mudança de postura de um desses laboratórios, por pressão de investidor, concorrência ou próprio IPO, pode alterar de uma hora para outra o comportamento ou o custo do modelo que você usa.</p>

    <h2>O que observar nas próximas semanas</h2>
    <p>Bessent também revelou que os Estados Unidos vão propor à China um sistema bilateral de notificação para incidentes graves de IA, depois de conversas que já teve em setembro, em Nova York, com o vice-premiê chinês He Lifeng. A ideia é reduzir incerteza entre os dois países, compartilhando alertas sobre agentes de IA que escapam de controle ou são usados por grupos não estatais em ataques cibernéticos ou biológicos, antes que o problema escale ou se espalhe globalmente. Trump já rejeitou, porém, qualquer acordo formal e amplo de segurança em IA com a China, o que limita esse mecanismo a um canal de aviso pontual, não a um tratado de regulação conjunta.</p>
    <p>Vale acompanhar também se a fala de Bessent é um episódio isolado ou o início de uma postura mais dura do governo americano contra o discurso de risco existencial dos próprios laboratórios, especialmente num momento em que a Anthropic se prepara para abrir capital na bolsa. Como mostrou o <a href="/noticias/anthropic-ipo-prospecto-vazado-2-trilhoes">prospecto confidencial vazado da oferta</a>, a própria empresa reconhece formalmente aos futuros investidores que seus modelos podem representar risco catastrófico, incluindo cenários em que um sistema resiste a ser desligado. Ver o governo que supervisiona esse mercado de capitais tratando esse mesmo discurso como "alarmismo sem solução" é um sinal de que o debate sobre quem deve, de fato, prestar contas pelo risco da IA está longe de resolvido, e vai continuar afetando regra, preço e disponibilidade de ferramenta de IA usada por empresa e profissional no Brasil.</p>

    <div class="callout-box"><span class="callout-label">Para lembrar</span>O secretário do Tesouro dos EUA, Scott Bessent, disse que os CEOs de Anthropic, OpenAI e xAI que pedem regulação federal enquanto alertam para risco catastrófico da própria IA deveriam simplesmente desacelerar, e que a responsabilidade pelo risco é dos laboratórios, não do governo. A fala reforça que não há, por ora, agência federal americana com poder de fiscalizar ou multar esses modelos, deixando a régua de segurança nas mãos das próprias empresas.</div>
  `,
  faq: [
    {
      question: "O que Scott Bessent disse sobre os CEOs de IA?",
      answer:
        "Disse que o alarmismo sem solução não é liderança, e que se Dario Amodei, Sam Altman e Elon Musk acham a IA tão arriscada, deveriam simplesmente desacelerar o desenvolvimento de seus próprios modelos, em vez de pedir regulação ao governo.",
    },
    {
      question: "O governo dos EUA vai criar uma lei federal de segurança em IA?",
      answer:
        "Não no curto prazo. Bessent deixou claro que o governo não vai assumir a responsabilidade pelos riscos dos modelos no lugar dos laboratórios, e a Casa Branca tem preferido acordos voluntários, como o Joint Commitment on Frontier Responsibilities, a uma lei federal.",
    },
    {
      question: "O que é o sistema de notificação com a China mencionado por Bessent?",
      answer:
        "Um canal bilateral proposto pelos EUA para avisar a China, e vice-versa, sobre incidentes graves de IA, como agentes que escapam de controle ou uso malicioso por grupos não estatais, sem que isso configure um tratado formal de regulação conjunta.",
    },
  ],
};
