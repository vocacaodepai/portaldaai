import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "claude-haiku-5-5-quando-o-modelo-pequeno-basta-preco-e-limites",
  title: "Claude Haiku 5.5: preço, o que muda e quando o modelo pequeno basta",
  seoTitle: "Claude Haiku 5.5: preço, usos e limites do modelo",
  excerpt:
    "Claude Haiku 5.5 chegou com preço até 75% menor que o Haiku 4.5. Veja o que ele faz, quanto custa, onde roda e quando vale trocar um modelo maior por ele.",
  metaDescription:
    "Claude Haiku 5.5 explicado: preço por milhão de tokens, ajuste de esforço, tarefas em que basta e limites. Inclui conta de custo e checklist para decidir a troca.",
  category: "ferramentas",
  date: "2026-10-31",
  readTime: 7,
  imageQuery: "server room cables data center",
  seed: 977,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O Claude Haiku 5.5 foi lançado em 7 de outubro de 2026 e, segundo a Anthropic, custa em média cerca de 75% menos para rodar que o Haiku 4.5.",
    "Ele serve para trabalho de alto volume e sensível a custo, como classificar, resumir e extrair dados; para programação agêntica complexa, a própria empresa indica Sonnet 5.5 e Opus 5.5.",
    "O anúncio não diz se ele chega aos aplicativos do Claude nem informa a janela de contexto, então quem usa só o chat não deve esperar mudança imediata.",
  ],
  content: `
    <p>O Claude Haiku 5.5 é o modelo pequeno da Anthropic lançado em 7 de outubro de 2026, descrito pela empresa como o mais barato, rápido e capaz que ela já fez. Ele é feito para tarefas repetidas em grande volume, como classificar mensagens, resumir textos e extrair dados, e roda pela API com o identificador claude-haiku-5-5.</p>

    <p>Para quem só conversa com o Claude no navegador, a novidade é indireta. Para quem monta automações, atendimento ou rotinas com agentes, ela mexe na conta do mês. Este guia reúne o que o anúncio oficial confirma, mostra uma conta de custo com números e lista os casos em que um modelo maior ainda compensa. Preços e limites foram conferidos em 31/10/2026 e podem mudar.</p>

    <h2>O que é o Claude Haiku 5.5?</h2>
    <p>A família Claude tem modelos de tamanhos diferentes. Os maiores raciocinam melhor e custam mais; os menores respondem rápido e custam pouco. O Haiku é o menor da linha. Segundo o <a href="https://www.anthropic.com/news/claude-haiku-5-5" target="_blank" rel="noopener noreferrer">anúncio da Anthropic</a>, o Haiku 5.5 foi pensado para trabalho de alto volume e sensível a custo, como resumos, compactação de contexto, consultas a bancos de dados e classificação.</p>
    <p>A empresa também cita um uso como subagente: um fluxo pode deixar o Opus 5.5 ou o Sonnet 5.5 nas decisões difíceis e entregar os passos mecânicos ao Haiku. Outra novidade é o ajuste de esforço, algo inédito em um Haiku: você escolhe quanto o modelo pensa antes de responder, trocando custo por qualidade. A <a href="/noticias/anthropic-lanca-claude-haiku-5-5-mais-barato">cobertura do lançamento no Portal da AI</a> traz os números de desempenho divulgados.</p>
    <p>Se a ideia de modelo pequeno e modelo grande ainda é nova, o texto sobre <a href="/artigos/modelo-pequeno-ou-grande-de-ia-velocidade-custo-e-qualidade-para-quem-usa">modelo pequeno ou grande de IA</a> explica a lógica sem jargão.</p>

    <h2>Quanto custa o Haiku 5.5?</h2>
    <p>O preço da API é cobrado por milhão de tokens, e um token é um pedaço de palavra. Pela página oficial, para prompts de até 100 mil tokens, a entrada custa US$ 0,10 e a saída US$ 0,50 por milhão. Para prompts maiores que 100 mil, os valores sobem para US$ 0,50 na entrada e US$ 2,50 na saída. A leitura de cache sai por US$ 0,01 por milhão no primeiro caso.</p>

    <table>
      <thead>
        <tr><th>Item (por 1 milhão de tokens)</th><th>Prompts até 100 mil</th><th>Prompts acima de 100 mil</th></tr>
      </thead>
      <tbody>
        <tr><td>Entrada</td><td>US$ 0,10</td><td>US$ 0,50</td></tr>
        <tr><td>Saída</td><td>US$ 0,50</td><td>US$ 2,50</td></tr>
        <tr><td>Leitura de cache</td><td>US$ 0,01</td><td>US$ 0,05</td></tr>
        <tr><td>Escrita de cache</td><td>US$ 0,125</td><td>US$ 0,625</td></tr>
      </tbody>
    </table>

    <p>A Anthropic afirma que o custo médio de execução ficou cerca de 75% menor que o do Haiku 4.5. Valores em dólar, verificados em 31/10/2026: consulte a página oficial antes de contratar. Quem paga em reais deve somar a cotação do dia e eventuais impostos do cartão.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Preço por token não é preço por tarefa. Se o modelo gastar mais tokens para fazer o mesmo trabalho, parte da economia some. Meça uma amostra real antes de migrar tudo.</p></div>

    <h2>Quanto isso rende na prática? Uma conta com números</h2>
    <p>Cenário ilustrativo, para mostrar o cálculo. Uma loja de cosméticos em Curitiba recebe 10 mil mensagens por mês no WhatsApp e quer classificar cada uma em "dúvida", "troca", "elogio" ou "reclamação" antes de passar para a equipe. Suponha 300 tokens de entrada por mensagem (texto mais instruções) e 50 de saída (só o rótulo e uma frase).</p>
    <ul>
      <li>Entrada: 10.000 mensagens x 300 tokens = 3 milhões de tokens x US$ 0,10 = US$ 0,30.</li>
      <li>Saída: 10.000 x 50 = 0,5 milhão de tokens x US$ 0,50 = US$ 0,25.</li>
      <li>Total do mês: cerca de US$ 0,55, ou perto de R$ 3 a uma cotação hipotética de R$ 5,50.</li>
    </ul>
    <p>Mesmo que o consumo real seja dez vezes maior, a conta continua pequena perto do salário de quem faria essa triagem à mão. O gargalo deixa de ser o custo e passa a ser a qualidade da triagem e o cuidado com dados de clientes, tema do guia de <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">LGPD para pequeno negócio que usa IA</a>. Para pensar o gasto total com assinaturas e API, veja o <a href="/artigos/orcamento-de-ia-no-pequeno-negocio-quanto-gastar-com-assinaturas-e-quando-subir-de-plano">orçamento de IA no pequeno negócio</a>.</p>

    <h2>Para que tarefas o Haiku 5.5 basta?</h2>
    <p>A regra prática é simples: quanto mais mecânica e repetida a tarefa, maior a chance de o modelo pequeno bastar. Pelo anúncio e pelo que a empresa lista como uso-alvo, estes casos se encaixam.</p>
    <h3>Tarefas que combinam com ele</h3>
    <ul class="checklist">
      <li>Classificar mensagens, e-mails, tickets ou avaliações em poucas categorias.</li>
      <li>Resumir textos curtos e médios com formato fixo.</li>
      <li>Extrair campos de formulários, notas e contratos padronizados (nome, data, valor).</li>
      <li>Responder perguntas simples de um FAQ que você mesmo forneceu.</li>
      <li>Rodar como subagente em fluxos maiores, deixando o raciocínio pesado para um modelo maior.</li>
    </ul>
    <h3>Um prompt de teste para classificação</h3>
    <pre><code>Você classifica mensagens de clientes de uma loja. Responda só com um JSON:
{"categoria": "duvida" | "troca" | "elogio" | "reclamacao", "urgente": true | false}
Mensagem: "Comprei o sérum há 5 dias, veio com a tampa quebrada e quero trocar."</code></pre>
    <p>Rode 50 mensagens reais por dois modelos e compare as respostas lado a lado. Se a taxa de erro do Haiku ficar aceitável, a troca se paga. Quem automatiza com ferramentas visuais encontra cenários parecidos no comparativo <a href="/artigos/make-ou-zapier-qual-automacao-com-ia-vale-mais-a-pena">Make ou Zapier</a>.</p>

    <h2>Quando um modelo maior ainda vale a pena</h2>
    <p>A própria Anthropic diz que Sonnet 5.5 e Opus 5.5 seguem melhores para programação agêntica complexa. Nos testes divulgados, o Haiku 5.5 fica atrás do Sonnet 5.5 em todos os comparativos, por exemplo 39,2% contra 70,6% no Terminal-Bench 4.0. Esses números vêm da empresa, não de uma avaliação independente, e medem tarefas em inglês e de código.</p>
    <p>Em português do dia a dia, a diferença só aparece no teste com os seus dados. Mantenha um modelo maior quando a resposta errada custa caro: parecer jurídico, análise financeira, decisão que o cliente vai ler sem revisão. Nesses casos, uma segunda checagem humana segue obrigatória, como explica o guia sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a>.</p>

    <h2>Onde o Haiku 5.5 está disponível e o que o anúncio não diz</h2>
    <p>Segundo a Anthropic, o modelo está disponível em todas as plataformas, incluindo Amazon Web Services, Google Cloud, Microsoft Azure e a Claude Platform. O anúncio não informa a janela de contexto e não afirma se ele aparece nos aplicativos de consumo nem no plano gratuito. Quem só usa o chat deve conferir o seletor de modelos no próprio app, sem presumir que ele esteja lá.</p>
    <p>Há ainda um benefício ligado ao lançamento: a empresa citou créditos mensais de API para assinantes de planos mais altos. Os detalhes de quem recebe e como resgatar estão nas <a href="https://support.claude.com/en/articles/12138966-release-notes" target="_blank" rel="noopener noreferrer">notas de versão do Claude</a> e no guia sobre os <a href="/artigos/creditos-de-api-do-claude-nos-planos-max-e-team-como-resgatar-o-que-cobrem-e-limites">créditos de API nos planos Max e Team</a>.</p>

    <h2>Erros comuns ao trocar de modelo</h2>
    <ul>
      <li>Migrar tudo de uma vez, sem testar uma amostra de 50 a 100 casos reais.</li>
      <li>Comparar só preço por token e ignorar o total de tokens gastos por tarefa.</li>
      <li>Usar o modelo pequeno em decisões de alto risco sem revisão humana.</li>
      <li>Mandar dados pessoais de clientes sem checar contrato, retenção e base legal. O texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a> ajuda a revisar isso.</li>
      <li>Esquecer o ajuste de esforço: em tarefa simples, esforço baixo costuma bastar; em tarefa difícil, subir o esforço pode ser mais barato que trocar de modelo.</li>
    </ul>

    <h2>Como decidir em 10 minutos</h2>
    <ol>
      <li>Liste a tarefa e o volume mensal (quantas chamadas por mês).</li>
      <li>Separe 50 exemplos reais, com a resposta certa conhecida.</li>
      <li>Rode no Haiku 5.5 e no modelo que você usa hoje, com o mesmo prompt.</li>
      <li>Conte os erros de cada um e multiplique o custo pelo volume.</li>
      <li>Fique com o menor modelo cujo erro você aceita, e reavalie a cada lançamento.</li>
    </ol>
    <p>Para escolher entre assistentes de uso geral, o comparativo <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini</a> segue como ponto de partida. Quem quer cortar despesas sem perder qualidade encontra mais ideias em <a href="/artigos/como-usar-ia-para-reduzir-custos-operacionais-pequenos-negocios">como usar IA para reduzir custos operacionais</a>.</p>

    <p>O Haiku 5.5 não faz do Claude uma ferramenta nova para o usuário comum, mas muda o cálculo de quem automatiza. Teste com seus dados, compare o custo por tarefa e deixe o modelo grande para o que realmente exige raciocínio. Veja também o contexto de preços em <a href="/noticias/anthropic-openai-guerra-precos-opus-5-5-gpt-6-sol-luna">guerra de preços entre Anthropic e OpenAI</a>.</p>
  `,
  faq: [
    {
      question: "Quanto custa o Claude Haiku 5.5?",
      answer:
        "Pela página oficial da Anthropic, verificada em 31/10/2026, prompts de até 100 mil tokens custam US$ 0,10 por milhão na entrada e US$ 0,50 na saída. Acima de 100 mil tokens, sobem para US$ 0,50 e US$ 2,50. A empresa diz que o custo médio caiu cerca de 75% frente ao Haiku 4.5.",
    },
    {
      question: "O Claude Haiku 5.5 está no aplicativo do Claude?",
      answer:
        "O anúncio oficial não confirma. Ele diz que o modelo está em todas as plataformas de API, como AWS, Google Cloud, Microsoft Azure e Claude Platform, mas não fala de apps de consumo nem do plano gratuito. Abra o seletor de modelos no seu app para ver se ele aparece na sua conta.",
    },
    {
      question: "Haiku 5.5 é melhor que o Sonnet 5.5?",
      answer:
        "Não nos testes divulgados. O Sonnet 5.5 fica à frente em todos os comparativos citados, e a Anthropic indica Sonnet 5.5 e Opus 5.5 para programação agêntica complexa. O Haiku vence em custo e velocidade, e basta para tarefas simples e repetidas, como classificação e extração.",
    },
    {
      question: "Quando vale trocar para um modelo menor?",
      answer:
        "Quando a tarefa é repetida, tem formato fixo e um erro eventual é barato de corrigir. Teste 50 exemplos reais nos dois modelos, compare erros e custo total por tarefa. Se o menor errar pouco, a troca compensa; se errar em casos críticos, mantenha o maior.",
    },
    {
      question: "O que é o ajuste de esforço do Haiku 5.5?",
      answer:
        "É um controle que deixa você escolher quanto o modelo raciocina antes de responder, trocando custo e tempo por qualidade. A Anthropic diz que o Haiku 5.5 é o primeiro da linha Haiku com esse recurso. Em tarefa simples, esforço baixo costuma bastar.",
    },
  ],
};
