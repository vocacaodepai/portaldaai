import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "garry-tan-ycombinator-gasta-200-mil-dolares-ano-tokens-agentes-ia",
  title: "Garry Tan, do Y Combinator, gasta até US$ 200 mil por ano em tokens",
  summary:
    "O CEO do Y Combinator diz gastar de US$ 100 mil a US$ 200 mil por ano em tokens de agentes de IA e vê o custo como a barreira para o uso pessoal.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/11/02/y-combinators-garry-tan-uses-ai-agents-so-much-he-spends-up-to-200k-a-year-on-tokens/",
  date: "2026-11-02",
  publishedAt: "2026-11-02T22:26:00-03:00",
  topic: "negocios",
  imageQuery: "Garry Tan portrait",
  coverImage: {
    url: "/images/covers/garry-tan-ycombinator-gasta-200-mil-dolares-ano-tokens-agentes-ia.webp",
    width: 1280,
    height: 720,
    credit: "Web Summit (CC BY 2.0) / Wikimedia Commons",
    creditUrl: "https://commons.wikimedia.org/wiki/File%3AGarry%20Tan%2C%20Web%20Summit%202018%2C%20November%206%20SD5%206949%20(45700698642)(portrait%204x3%20crop).jpg",
  },
  content: `
    <p>Garry Tan, presidente-executivo do Y Combinator, a aceleradora de startups mais influente do Vale do Silício, contou que gasta entre US$ 100 mil e US$ 200 mil por ano apenas com tokens, a unidade de consumo dos modelos de inteligência artificial. A informação foi publicada pelo TechCrunch nesta segunda-feira (2 de novembro) e vem de uma entrevista a ser exibida no podcast The Builders, de Walter Isaacson, na terça-feira seguinte. O próprio Tan reconhece que esse nível de gasto é um privilégio que poucas pessoas podem bancar.</p>

    <h2>O que Garry Tan disse</h2>
    <p>Segundo a reportagem, Tan já havia brincado antes que sofria de uma espécie de "ciberpsicose", de tão empolgado com os agentes de IA que, às vezes, mal dorme. Na entrevista, ele estima o valor anual que paga pelo consumo de modelos e explica como usa os agentes no dia a dia. Eles entram em vários projetos de trabalho e em tarefas de programação. Para a própria gravação do podcast, ele pediu a um agente que pesquisasse o entrevistador e preparasse as perguntas mais prováveis.</p>
    <p>O uso também é pessoal. Tan afirma que mantém um agente com acesso ao e-mail, ao Dropbox e ao Apple Notes, incluindo notas de terapia acumuladas ao longo de 20 anos. Ele compara o agente a um "Grilo Falante" no ombro, que antecipa necessidades, sugere ideias e lembra de pontos que ele poderia deixar passar. A frase mostra a direção do discurso: o agente deixa de ser um chat ao qual se faz perguntas e passa a ser um assistente com contexto amplo, que age com autonomia crescente.</p>

    <h2>As 23 habilidades do gstack e o agente do Y Combinator</h2>
    <p>Para ajudar outras pessoas a entenderem o que os agentes conseguem fazer, Tan publicou no GitHub um conjunto de 23 habilidades do Claude Code, batizado de gstack. Ele também disse ter sido um dos primeiros a adotar o OpenClaw, ferramenta de agentes, e hoje se considera um usuário intenso. Dentro do Y Combinator, a organização usa um agente interno chamado Stray Light, descrito como tendo personalidade própria e um "cérebro da empresa". Segundo o TechCrunch, esse agente teria contexto sobre todos os fundadores que o YC já apoiou, sobre todas as pessoas que enviaram e-mail à aceleradora e sobre todas as candidaturas recebidas.</p>
    <p>Esse tipo de arranjo, em que as habilidades ficam descritas em arquivos que o agente consulta, é o mesmo princípio dos padrões abertos de skills que vêm ganhando espaço. Se você quer entender a base técnica, vale ler o guia <a href="/artigos/agent-skills-padrao-aberto-o-que-sao-skills-de-agentes-de-ia-e-por-que-importam">Agent Skills: o que são skills de agentes de IA e por que importam</a>.</p>

    <div class="callout-box">
      <span class="callout-label">Em números</span>
      <p>Entre US$ 100 mil e US$ 200 mil por ano em tokens, 23 habilidades publicadas no gstack e um agente interno do Y Combinator com contexto sobre todos os fundadores e candidaturas da aceleradora. Os valores são estimativas do próprio Garry Tan.</p>
    </div>

    <h2>Agentes não são software tradicional, diz Tan</h2>
    <p>Um dos pontos centrais da fala é uma lição que Tan diz ter aprendido: as pessoas não deveriam tratar agentes de IA como software tradicional. Em sua visão, muita gente se preocupa tanto com repetibilidade e segurança que acaba perdendo justamente as qualidades que fazem os agentes parecerem humanos, como a capacidade de improvisar, ter estilo e reagir a situações novas. É uma opinião, não um fato medido, e ela entra em tensão com a realidade das empresas, que precisam de previsibilidade, trilha de auditoria e controle de acesso.</p>
    <p>Essa tensão aparece em outras notícias recentes do Portal da AI. O <a href="/noticias/1password-for-agents-senhas-agentes-ia">1Password for Agents</a> existe exatamente porque agentes com acesso a credenciais criam um risco novo, e o <a href="/noticias/anthropic-lanca-claude-duet-agente-pessoal-proativo">Claude Duet</a>, agente pessoal proativo da Anthropic, aponta para o mesmo tipo de assistente que Tan descreve. Dar acesso a e-mail, arquivos e anotações privadas, como ele faz, rende conveniência, mas também ampliaria bastante o estrago caso algo desse errado.</p>

    <h2>O custo como barreira</h2>
    <p>Tan afirma acreditar que agentes pessoais de IA vão se tornar comuns quando os custos caírem, e diz que os preços atuais são altos demais. A conta dele ajuda a dimensionar: US$ 200 mil por ano equivalem a cerca de US$ 16,7 mil por mês, valor que ultrapassa o salário de muitos profissionais qualificados. Para a maioria das pessoas, o uso de agentes cabe em uma assinatura mensal com limites, e o consumo pesado por API, em que se paga por token, é outra categoria de gasto.</p>
    <p>O tema do consumo exagerado já apareceu aqui. Na notícia sobre o alerta da Amazon a engenheiros que inflavam métricas de uso, em <a href="/noticias/amazon-alerta-engenheiros-tokenmaxxing-metricas-uso-ia">Amazon alerta engenheiros sobre tokenmaxxing</a>, o ponto era que gastar mais tokens não significa produzir mais valor. O caso de Tan é diferente, porque ele relata um uso que considera produtivo, mas vale a mesma pergunta: quanto desse consumo se converte em resultado concreto?</p>

    <h2>Crítica às ferramentas gratuitas das big techs</h2>
    <p>Segundo o TechCrunch, Tan também criticou os agentes gratuitos oferecidos por grandes empresas de tecnologia. Ele cita o controle que a Meta exerce sobre o algoritmo de suas redes sociais como motivo para preferir uma IA pessoal que o usuário controle e possa programar por conta própria. O argumento é conhecido: quando o produto é gratuito, o interesse de quem o oferece pode não coincidir com o seu. Ainda assim, a posição vem de alguém que dirige uma aceleradora ligada a várias empresas do setor, e deve ser lida com esse contexto em mente.</p>

    <h2>Por que isso importa para você</h2>
    <p>Mesmo sem gastar nada perto de US$ 200 mil, a história traz lições práticas para quem trabalha, empreende ou quer ganhar dinheiro com IA no Brasil. A primeira é que custo de IA é uma linha do orçamento a ser medida. Se você usa agentes por API em um negócio, acompanhe quanto cada tarefa consome, defina limites de gasto e compare com o tempo ou o dinheiro que a tarefa economiza. Para pequenas empresas, o guia <a href="/artigos/como-usar-ia-para-reduzir-custos-operacionais-pequenos-negocios">como usar IA para reduzir custos operacionais</a> mostra por onde começar sem estourar a conta.</p>
    <p>A segunda lição é sobre o que delegar. Tan dá ao agente acesso a e-mail e anotações pessoais, mas isso não é um conselho a ser copiado sem cuidado. Antes de liberar acesso amplo, vale separar o que o agente precisa ver, usar contas com permissões mínimas e evitar colocar dados muito sensíveis, como informações de saúde, em ferramentas que você não controla. O artigo <a href="/artigos/agente-de-ia-pessoal-gemini-spark-o-que-delegar-e-o-que-nao">agente de IA pessoal: o que delegar e o que não delegar</a> ajuda a traçar essa linha.</p>
    <p>A terceira é entender a diferença entre automação fixa e agente. Para tarefas repetitivas e previsíveis, uma automação simples costuma sair mais barata e mais segura. Agentes valem mais quando a tarefa exige contexto e decisão. Veja a comparação em <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">agente de IA, chatbot ou automação: qual a diferença</a>. E, para quem pensa em transformar esse conhecimento em renda, o texto sobre <a href="/artigos/como-ganhar-dinheiro-criando-e-vendendo-agentes-de-ia-personalizados">como ganhar dinheiro criando e vendendo agentes de IA personalizados</a> explora esse caminho.</p>

    <h2>O que observar daqui para frente</h2>
    <p>O primeiro ponto é a queda de preço. Tan trata o custo como o principal obstáculo para que agentes pessoais virem produto de massa, e a velocidade com que modelos mais baratos e eficientes chegam ao mercado vai decidir se isso acontece em meses ou em anos. O segundo é a disputa entre agentes que o usuário controla e agentes gratuitos de big techs, que deve ganhar força conforme mais empresas lançarem assistentes embutidos em seus produtos. O terceiro é a segurança: quanto mais acesso os agentes têm a dados pessoais e profissionais, mais relevante fica o debate sobre permissões, auditoria e proteção contra ataques.</p>
    <p>Vale lembrar que os números e as falas citados aqui vêm da reportagem do TechCrunch sobre uma entrevista que ainda iria ao ar, e não foram confirmados de forma independente. Os valores de gasto são estimativas do próprio Tan, sem detalhamento de quais modelos ou ferramentas compõem a conta. Quando o episódio do podcast for publicado, podem aparecer mais detalhes sobre como ele organiza o uso e quanto desse gasto é pago pessoalmente ou por empresas ligadas a ele.</p>

    <div class="callout-box">
      <span class="callout-label">Fonte original</span>
      <p>Reportagem do TechCrunch: <a href="https://techcrunch.com/2026/11/02/y-combinators-garry-tan-uses-ai-agents-so-much-he-spends-up-to-200k-a-year-on-tokens/" target="_blank" rel="noopener noreferrer nofollow">Y Combinator's Garry Tan uses AI agents so much, he spends up to $200K a year on tokens</a>.</p>
    </div>
  `,
};
