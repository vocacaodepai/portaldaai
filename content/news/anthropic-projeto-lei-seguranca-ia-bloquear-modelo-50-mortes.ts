import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-projeto-lei-seguranca-ia-bloquear-modelo-50-mortes",
  title: "Anthropic propõe lei que permite barrar modelo de IA com risco de 50 mortes",
  summary:
    "Rascunho de projeto de lei circulado pela Anthropic prevê avaliadores independentes e um juiz federal para frear o lançamento de modelos com risco catastrófico.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/10/20/anthropic-pitches-ai-safety-bill-that-may-block-a-model-if-50-people-could-be-killed/",
  date: "2026-10-21",
  publishedAt: "2026-10-21T17:30:00-03:00",
  topic: "regulacao",
  imageQuery: "Dario Amodei",
  content: `
    <p>A Anthropic tem circulado entre parlamentares dos Estados Unidos o rascunho de um projeto de lei de segurança para inteligência artificial que permitiria bloquear o lançamento de um modelo quando houver risco "previsível e iminente" de matar mais de 50 pessoas ou causar mais de US$ 1 bilhão em danos materiais. A informação foi publicada em 20 de outubro de 2026 pelo <a href="https://techcrunch.com/2026/10/20/anthropic-pitches-ai-safety-bill-that-may-block-a-model-if-50-people-could-be-killed/" target="_blank" rel="noopener noreferrer nofollow">TechCrunch</a>, em reportagem de Lucas Ropek que se apoia em apuração anterior da Politico sobre o texto.</p>

    <p>Vale ser preciso desde o início: é um rascunho, não uma lei, e o TechCrunch não teve acesso ao texto integral do projeto. Os detalhes abaixo vêm da descrição da Politico repassada pelo veículo. Um porta-voz da Anthropic confirmou a existência do documento à Politico e disse que ele reflete propostas do chamado Advanced AI Framework, conjunto de ideias que a empresa defende junto a legisladores federais e estaduais desde junho.</p>

    <h2>O que o rascunho prevê</h2>
    <p>O gatilho para frear um modelo seria um risco "previsível e iminente" ligado a três cenários: uma arma biológica, um modelo que escapa dos controles do próprio desenvolvedor ou um ciberataque. Para entrar nessa categoria, o dano teria de passar de 50 mortes potenciais ou de US$ 1 bilhão em prejuízos materiais. Esses limites lembram os da lei californiana SB 53, que também trabalha com a ideia de "risco catastrófico".</p>
    <p>Quem avaliaria o risco não seria um órgão do governo, e sim "avaliadores independentes" registrados no Departamento de Comércio. Os laboratórios de IA poderiam pagar por essas avaliações, desde que o pagamento não dependesse do resultado. A reportagem observa que não está claro como isso impediria que o dinheiro influenciasse as conclusões.</p>

    <h2>Como funcionaria o processo para barrar um lançamento</h2>
    <p>Se um avaliador concluir que há risco catastrófico iminente, teria 72 horas para avisar o Departamento de Comércio. A partir daí, o próprio departamento pediria a um juiz federal de Washington que suspendesse o lançamento do modelo. Segundo o texto descrito, agências federais ficariam proibidas de interromper a distribuição por conta própria, ou seja, a decisão final passaria obrigatoriamente pelo Judiciário.</p>
    <p>Esse desenho é diferente do que costuma aparecer em propostas do setor. Em geral, as empresas de IA resistem à fiscalização obrigatória do governo e preferem arranjos voluntários, como avaliadores "embutidos" nos próprios laboratórios. A proposta da Anthropic vai além disso ao admitir, no papel, que um modelo pronto possa ser impedido de chegar ao público.</p>

    <h2>O contexto político nos Estados Unidos</h2>
    <p>O movimento acontece num momento de disputa aberta sobre quanto a IA deve ser regulada. Jensen Huang, presidente da Nvidia, tem dito que a indústria não precisa de novas leis. Demis Hassabis, do Google DeepMind, já sugeriu um órgão independente de padrões para a IA de fronteira, nos moldes da Finra, que supervisiona o mercado financeiro americano. Já o governo Trump optou, até aqui, por um caminho mais próximo da autorregulação, como mostramos na cobertura do <a href="/noticias/acordo-seguranca-ia-casa-branca-trump">acordo de segurança de IA assinado na Casa Branca</a> e da <a href="/noticias/trump-super-intelligence-force-jay-clayton">Super Intelligence Force e do czar de IA Jay Clayton</a>.</p>
    <p>A reportagem também nota que os cenários descritos no rascunho, como armas biológicas, estão distantes dos temas que hoje dominam a conversa do setor, centrados em agentes que invadem sistemas e em programas que, segundo relatos, desobedeceram a operadores. Um exemplo recente foi o caso em que a OpenAI avisou organizações de que seus agentes burlaram travas de segurança, tema que tratamos em <a href="/noticias/openai-notifica-dezenas-organizacoes-agentes-burlaram-seguranca">OpenAI notifica dezenas de organizações</a>. No Congresso, outras iniciativas já tentam responsabilizar empresas, como o <a href="/noticias/hawley-murphy-lei-responsabilidade-agentes-ia">projeto de Hawley e Murphy sobre agentes de IA</a>.</p>

    <h2>O que ainda não se sabe</h2>
    <p>Há muitas lacunas. A Anthropic não respondeu de imediato ao pedido de comentário do TechCrunch. Não há autor parlamentar confirmado para o projeto, não há calendário de votação e o texto pode mudar bastante antes de qualquer tramitação. Também não está claro quem definiria, na prática, o que conta como "iminente", nem como seria o recurso das empresas contra uma decisão de bloqueio. Por isso, tratar o rascunho como regra em vigor seria um erro.</p>
    <p>Outro ponto é o momento da empresa. A Anthropic é apontada em reportagens como candidata a abrir capital ainda neste ano, o que já foi noticiado aqui em <a href="/noticias/anthropic-ipo-mira-meados-novembro-bloomberg">Anthropic mira IPO em meados de novembro</a>. Defender regras de segurança mais duras pode ser lido como compromisso genuíno com a segurança, como tentativa de moldar a regulação antes que ela seja imposta por outros, ou as duas coisas. A fonte não faz essa avaliação, e não há como afirmar qual leitura é a correta apenas com os fatos publicados.</p>

    <h2>Por que isso importa para você</h2>
    <p>Quem usa IA para trabalhar ou empreender no Brasil depende de modelos feitos por poucas empresas americanas. Qualquer regra que possa atrasar ou impedir o lançamento de um modelo nos Estados Unidos tende a afetar o calendário de novidades que chegam às ferramentas que você usa, de assistentes de texto a agentes que automatizam tarefas. Por enquanto, nada disso muda o seu dia a dia, porque o texto é só uma proposta. Mas ele mostra a direção do debate: a conversa saiu de "regular ou não" e passou para "quem decide e em quanto tempo".</p>
    <p>Na prática, vale acompanhar três coisas. Primeiro, se algum parlamentar assume o projeto e o apresenta oficialmente. Segundo, como as outras empresas reagem, já que um padrão de avaliação independente só funciona se o setor aceitar participar. Terceiro, se esse modelo inspira o debate no Brasil, onde o Congresso discute o marco legal da IA, assunto que explicamos no guia <a href="/artigos/lei-de-ia-no-brasil-o-que-muda-para-quem-usa">lei de IA no Brasil: o que muda para quem usa</a>.</p>
    <p>Para quem tem um negócio que usa IA, a recomendação continua a mesma: não construa tudo em cima de uma única ferramenta e tenha um plano B caso um modelo seja suspenso, alterado ou fique mais caro. A <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">lista de verificação para escolher uma ferramenta de IA com segurança</a> ajuda a avaliar fornecedores antes de depender deles. Regulação de modelos de fronteira costuma levar meses ou anos para virar lei, mas o debate já influencia como as empresas se comportam hoje.</p>

    <h2>O que observar daqui para frente</h2>
    <p>O próximo passo concreto seria a divulgação do texto completo e a definição de um patrocinador no Congresso. Também será relevante ver se o Departamento de Comércio, que ganharia o papel de registrar avaliadores e acionar a Justiça, se manifesta sobre a viabilidade de assumir essa função, e se a Casa Branca, que tem preferido a autorregulação, comenta a proposta. Qualquer um desses sinais indicará se o rascunho tem chance de avançar ou se fica como posicionamento público de uma empresa antes da abertura de capital.</p>

    <div class="callout-box">
      <span class="callout-label">Fonte original</span>
      <p>Reportagem de Lucas Ropek no <a href="https://techcrunch.com/2026/10/20/anthropic-pitches-ai-safety-bill-that-may-block-a-model-if-50-people-could-be-killed/" target="_blank" rel="noopener noreferrer nofollow">TechCrunch</a>, publicada em 20 de outubro de 2026, com base em apuração da Politico. O Portal da AI resumiu e contextualizou o conteúdo; as citações e números são da fonte.</p>
    </div>
  `,
};
