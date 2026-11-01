import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-renomeia-planos-max-ultra-sem-limite-cinco-horas",
  title: "Anthropic renomeia o Claude Max 20x para Ultra e tira o limite de 5 horas",
  summary:
    "O plano de US$ 200 vira Ultra, sem limite a cada cinco horas para contas verificadas, mas a página de preços agora lista 10x o uso do Pro, não mais 20x.",
  author: "Bruno Danello",
  sourceName: "The Next Web, Anthropic",
  sourceUrl: "https://thenextweb.com/news/claude-ultra-max-plan-rename-five-hour-limit",
  date: "2026-11-01",
  publishedAt: "2026-11-01T11:35:00-03:00",
  topic: "lancamentos",
  imageQuery: "Anthropic logo",
  content: `
    <p>A Anthropic reorganizou os nomes dos planos mais caros do Claude e mexeu em uma regra que incomodava quem usa a ferramenta o dia inteiro. O plano de US$ 100 por mês, antes chamado Max 5x, passa a se chamar apenas Max. O de US$ 200 por mês, antes Max 20x, agora é o Ultra, e para contas verificadas ele deixa de ter o limite que zerava a cada cinco horas. Os preços não mudaram. A informação foi publicada neste domingo, 1º de novembro de 2026, pelo The Next Web, e confere com a página de preços da própria Anthropic, que consultamos para esta matéria.</p>

    <p>Para quem usa o Claude para programar, escrever, analisar documentos ou tocar um negócio sozinho, a mudança parece só de nome, mas tem três detalhes que pesam no bolso e no uso diário. Vamos separar o que foi anunciado do que ficou sem explicação.</p>

    <h2>O que mudou nos nomes e nos limites</h2>
    <p>Segundo o The Next Web, a Anthropic anunciou as mudanças na sexta-feira, 30 de outubro, e a maior parte dos assinantes atuais já recebeu a alteração no mesmo dia. A conta oficial do Claude no X disse, na tradução livre da reportagem, que quem já é assinante não precisa fazer nada. Na prática, a escada de planos fica assim: Free, Pro, Max e Ultra.</p>
    <p>O Max custa US$ 100 por mês e dá 5 vezes o uso do Pro, com limite a cada cinco horas e também semanal. O Ultra custa US$ 200 por mês, dá 10 vezes o uso semanal do Pro e, para contas verificadas, não tem o limite de cinco horas. O limite semanal continua existindo nos dois planos. Em outras palavras, o Ultra não é ilimitado: você só deixa de ser interrompido no meio de uma sessão longa e passa a lidar apenas com o teto da semana.</p>

    <h2>O que é o limite de cinco horas e por que ele irritava</h2>
    <p>Desde o início dos planos Max, o uso do Claude é medido em janelas. A cada cinco horas, o contador reinicia, e se você gastar tudo antes disso precisa esperar. Quem roda agentes de código por horas seguidas, como o Claude Code, ou quem trabalha com muitos arquivos longos esbarrava nesse teto no meio de uma tarefa. Retirar essa janela no Ultra muda o ritmo de trabalho: o controle passa a ser só o total da semana, que você pode gastar como preferir, concentrado em um dia pesado ou distribuído.</p>
    <p>A Anthropic afirma que a verificação das contas serve para prevenir fraude e abuso. Contas Ultra mais novas mantêm um limite de cinco horas temporário até passarem pela verificação, e o usuário recebe um e-mail quando o limite for retirado. A reportagem não detalha quais critérios a empresa usa para verificar uma conta, nem quanto tempo isso leva.</p>

    <h2>O número que ficou sem explicação: de 20x para 10x</h2>
    <p>Aqui está o ponto mais delicado. O nome antigo, Max 20x, prometia 20 vezes o uso do Pro. A página de preços atual da Anthropic descreve o Ultra como 10 vezes o uso semanal do Pro. O The Next Web observa que o anúncio não mencionou essa diferença. Não dá para dizer, só com o que foi publicado, se a empresa reduziu a franquia, se passou a medir de outro jeito (agora com ênfase no uso semanal, sem o teto de cinco horas) ou se apenas reescreveu a descrição. Vale registrar também que, em junho, uma ação coletiva acusou a Anthropic de vender mais uso do que entregava nos dois planos Max, tema que a reportagem lembra como contexto.</p>
    <p>Como a Anthropic não explicou a conta, o recomendável é tratar o número com cautela: quem pagava pelo Max 20x pensando em 20 vezes o Pro deve acompanhar o consumo real nas próximas semanas antes de planejar o trabalho em cima da nova descrição.</p>

    <h2>Créditos de API e o acesso ao modelo mais forte</h2>
    <p>A página de preços traz mais duas novidades marcadas como novas. A primeira é um crédito mensal de API: US$ 100 por mês no Max e US$ 200 por mês no Ultra (na página, o Ultra aparece como "US$ 200 por mês em créditos de API, acima dos US$ 100 do Max"). Esse crédito serve para quem constrói produtos ou automações usando a plataforma de desenvolvedores da Anthropic sem pagar à parte. Se você quiser entender como resgatar e usar esse benefício, temos um guia sobre <a href="/artigos/creditos-de-api-do-claude-nos-planos-max-e-team-como-resgatar-o-que-cobrem-e-limites">créditos de API do Claude nos planos Max e Team</a>.</p>
    <p>A segunda é o acesso ao Fable, o modelo mais avançado da empresa, incluído nos dois planos até metade do limite semanal. Ou seja, parte do uso semanal pode ir para o Fable, e o restante fica para os outros modelos. Para entender onde o Fable se encaixa na linha da empresa, veja a nossa cobertura do lançamento do <a href="/noticias/anthropic-lanca-claude-fable-5-1-mythos-5-1">Claude Fable 5.1 e do Mythos 5.1</a>. O Ultra também aparece com acesso antecipado a recursos avançados do Claude e prioridade em horários de pico, segundo a página de preços.</p>

    <h2>Contexto: a briga por limites e preços de uso</h2>
    <p>A mudança chega em um momento em que quase todo grande fornecedor de IA está redesenhando como cobra. A OpenAI, por exemplo, prepara a união de Chat e Work no ChatGPT, com um orçamento único de tokens, como contamos em <a href="/noticias/openai-une-chat-e-work-orcamento-unico-tokens-chatgpt">ChatGPT vai unir Chat e Work</a>, e há poucos dias dobrou limites nos planos Pro de 100 e 500 dólares, assunto da nossa notícia sobre <a href="/noticias/openai-dobra-limites-pro-100-500-codex-work">os limites de Codex e Work</a>. Do lado da Anthropic, a reportagem lembra que em maio a empresa dobrou os limites de cinco horas do Claude Code com a capacidade de computação nova vinda da SpaceX, e que em abril bloqueou ferramentas de terceiros, como o OpenClaw, de usarem assinaturas do Claude.</p>
    <p>A Anthropic também está sob os olhos do mercado por causa do IPO, e cada ajuste de plano tende a ser lido à luz da receita que a empresa mostrou, assunto da notícia sobre o <a href="/noticias/anthropic-protocola-s-1-publico-nasdaq-ant-receita-16-bilhoes">S-1 da empresa na Nasdaq</a>. Para quem acompanha o custo de usar IA em equipe, também vale ler os <a href="/noticias/anthropic-relatorios-gasto-claude-retorno-orcamentos-compartilhados">novos relatórios de gasto do Claude</a>.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você é assinante do Max 5x ou do Max 20x, nada muda na sua cobrança, e o que pode mudar é a experiência. Quem estava no plano de US$ 200 e vivia esperando o contador de cinco horas reiniciar ganha liberdade para sessões longas, desde que a conta seja verificada. Já quem escolheu o plano de US$ 200 por causa do número 20x deve observar se a franquia semanal continua suficiente, já que a descrição agora fala em 10 vezes.</p>
    <p>Se você ainda está no Pro e pensa em subir, o raciocínio fica mais simples: o Max é a entrada para quem trabalha com o Claude o dia todo e aceita a pausa a cada cinco horas, e o Ultra é para quem faz tarefas longas e contínuas, como agentes de código ou análises grandes, e quer apenas o teto semanal. Os valores são em dólar, e o preço em reais depende de câmbio, impostos e da forma de cobrança; a página da Anthropic é a referência na hora de assinar.</p>
    <p>Para quem ainda decide qual ferramenta de IA usar no trabalho, o nosso guia para <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">escolher entre ChatGPT, Claude e Gemini</a> ajuda a pesar custo e resultado antes de pagar US$ 100 ou US$ 200 por mês.</p>

    <h2>O que ainda não se sabe</h2>
    <p>Restam perguntas que a Anthropic não respondeu no anúncio. Não está claro por que o multiplicador caiu de 20x para 10x na descrição, como a verificação de contas funciona na prática nem por quanto tempo as contas novas ficam com o limite temporário. Também não há, nos dados publicados, detalhes sobre a disponibilidade e o preço local para assinantes no Brasil. Enquanto isso não for esclarecido, a leitura mais segura é a mais literal: mudaram os nomes, o Ultra perdeu a janela de cinco horas para contas verificadas, o limite semanal continua, e o preço de US$ 100 e US$ 200 por mês ficou igual.</p>
  `,
  faq: [
    {
      question: "Como ficaram os planos do Claude depois da mudança?",
      answer:
        "Free, Pro, Max (US$ 100 por mês, antes Max 5x) e Ultra (US$ 200 por mês, antes Max 20x). Os preços não mudaram, segundo o The Next Web e a página de preços da Anthropic.",
    },
    {
      question: "O Ultra ainda tem limite de uso?",
      answer:
        "Sim. Para contas verificadas ele não tem o limite que reinicia a cada cinco horas, mas mantém o limite semanal, listado como 10 vezes o uso semanal do Pro.",
    },
    {
      question: "Quem já é assinante precisa fazer alguma coisa?",
      answer:
        "Não. A conta oficial do Claude no X afirmou que assinantes não precisam fazer nada. Contas Ultra mais novas mantêm um limite de cinco horas temporário até a verificação.",
    },
  ],
};
