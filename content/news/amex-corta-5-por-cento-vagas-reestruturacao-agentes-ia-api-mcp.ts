import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "amex-corta-5-por-cento-vagas-reestruturacao-agentes-ia-api-mcp",
  title: "Amex corta 5% da equipe e só deixa agentes de IA entrarem por API ou MCP",
  summary:
    "A American Express revelou reestruturação de US$ 336 milhões, com corte de cerca de 5% dos funcionários, e disse que só aceitará agentes de IA aprovados via API ou MCP.",
  author: "Bruno Danello",
  sourceName: "American Express (resultados do 3º tri de 2026)",
  sourceUrl: "https://s26.q4cdn.com/747928648/files/doc_earnings/2026/q3/earnings-result/Q3-2026-Earnings-Press-Release.pdf",
  date: "2026-10-26",
  publishedAt: "2026-10-26T10:58:00-03:00",
  topic: "mercado-trabalho",
  imageQuery: "American Express logo",
  content: `
    <p>A American Express (Amex) divulgou na sexta-feira (23) os resultados do terceiro trimestre de 2026 e, junto com eles, uma reestruturação ligada a ganhos de eficiência. No <a href="https://s26.q4cdn.com/747928648/files/doc_earnings/2026/q3/earnings-result/Q3-2026-Earnings-Press-Release.pdf" target="_blank" rel="noopener noreferrer nofollow">comunicado de resultados da própria empresa</a>, a Amex registra uma despesa de reestruturação de US$ 336 milhões antes de impostos (US$ 253 milhões depois de impostos). Segundo a cobertura da CNBC, resumida pelo The Next Web, o plano corta cerca de 5% da força de trabalho global do grupo, e o CEO, Stephen Squeri, aproveitou a teleconferência com analistas para dizer que a empresa só vai permitir acesso de agentes de IA aos seus sistemas por canais aprovados, via API ou MCP.</p>

    <p>Vale separar o que é número oficial do que vem de reportagem. O valor da despesa, o lucro, a receita e a nova projeção estão no comunicado da Amex. O percentual de 5% de corte e as falas de Squeri e da diretora financeira, Christophe Le Caillec, aparecem na reportagem da CNBC e foram resumidos pelo <a href="https://thenextweb.com/news/amex-job-cuts-ai-agents-run-rogue" target="_blank" rel="noopener noreferrer nofollow">The Next Web</a>. O Portal da AI não conseguiu abrir a página da CNBC, então essas partes dependem da apuração dos dois veículos.</p>

    <h2>O que a Amex informou nos números</h2>
    <p>De acordo com o comunicado, a receita total, líquida de despesas com juros, foi um recorde de US$ 20,1 bilhões no trimestre, alta de 9% sobre o mesmo período do ano passado. O lucro líquido chegou a US$ 3,7 bilhões, contra US$ 2,9 bilhões um ano antes, e o lucro por ação foi de US$ 5,42, alta de 31%.</p>

    <p>Esse resultado, porém, inclui um ganho pontual de US$ 982 milhões antes de impostos (US$ 751 milhões depois) com a venda da participação da Amex na Global Business Travel Group. A empresa informa que parte desse ganho foi usada para financiar a reestruturação. Sem esses itens, o lucro líquido ajustado foi de US$ 3,2 bilhões, ou US$ 4,68 por ação, alta de 13% sobre os US$ 4,14 do ano anterior.</p>

    <p>Com o desempenho do ano até agora, a Amex elevou a projeção de lucro por ação para 2026 a uma faixa de US$ 18,30 a US$ 18,60 (US$ 17,60 a US$ 17,90 na base ajustada) e disse que segue no caminho de entregar outro ano de crescimento de receita de 10%. Ou seja, o corte de vagas não vem de uma empresa em dificuldade: vem de uma empresa em ano forte, que decidiu usar parte de um ganho extraordinário para se reorganizar.</p>

    <h2>Corte de 5% e a lógica de "preparar a empresa para a IA"</h2>
    <p>Segundo o relato do The Next Web a partir da CNBC, a base de comparação são cerca de 77 mil funcionários no fim de 2025. Um corte de 5% sobre esse total daria algo perto de 3.850 postos, mas essa é uma conta do Portal da AI, não um número divulgado pela Amex. A empresa também não detalhou, nas fontes consultadas, quais áreas serão afetadas, nem em quais países.</p>

    <p>A explicação dada pela diretoria combina duas ideias: reduzir camadas de gestão e se preparar para a IA. Squeri descreveu o movimento como forma de acelerar a inovação para "vencer nos próximos anos". Já Le Caillec, ainda conforme a CNBC, deu um recado mais técnico sobre automação: "você não quer automatizar processos que não estão otimamente estruturados" (tradução livre). Em outras palavras, a empresa diz que primeiro enxuga e reorganiza o trabalho e só depois coloca a IA em cima.</p>

    <p>O movimento se soma a uma sequência de anúncios do setor financeiro nas últimas semanas. O Barclays, por exemplo, atribuiu parte do corte de cinco mil vagas à IA, como mostramos em <a href="/noticias/barclays-corta-5-mil-vagas-ia-eficiencia">Barclays corta 5 mil vagas e liga parte da decisão à IA</a>. Fora dos bancos, a HubSpot também reorganizou equipes em torno de agentes, tema da notícia sobre a <a href="/noticias/hubspot-demite-660-reorganiza-equipes-agentes-ia-breeze">demissão de 660 funcionários na HubSpot</a>.</p>

    <h2>A regra para agentes de IA: só por API ou MCP</h2>
    <p>A segunda parte do recado é a que mais interessa a quem constrói ou usa agentes. Squeri afirmou que a Amex atenderá clientes que usam agentes de IA, mas que "só vamos permitir que acessem nossos sistemas agentes aprovados por canais de API ou MCP". Segundo o The Next Web, ele também disse que a empresa não vai deixar assistentes "saírem do controle" dentro de seus sistemas.</p>

    <p>MCP (Model Context Protocol) é o padrão aberto que conecta agentes de IA a ferramentas e dados de forma controlada. Na prática, a posição da Amex significa que um agente de IA genérico, que simula cliques numa tela de login para acessar a conta de alguém, não será bem-vindo. Só entra quem for credenciado e usar a porta oficial. Quem quiser entender o protocolo pode ler o guia <a href="/artigos/mcp-model-context-protocol-o-que-e-e-como-conecta-agentes-de-ia">MCP: o que é e como conecta agentes de IA</a>.</p>

    <p>A postura é coerente com o que a empresa já vinha fazendo. No comunicado de resultados, a Amex lista entre os destaques do trimestre integrações do Resy, incluindo uma com a OpenAI, e o lançamento do Intent Intelligence Framework, voltado a comércio com agentes. Esse framework registra e autentica a intenção de compra do cliente antes de um agente fechar a transação, e foi tema de uma notícia anterior: <a href="/noticias/amex-intent-framework-agentes-compras-nao-autorizadas">Amex cria framework para barrar compras não autorizadas de agentes de IA</a>. A linha geral é abrir a porta aos agentes, mas só com identificação, limites e rastro de quem autorizou o quê.</p>

    <h2>Por que isso importa para você</h2>
    <p>Mesmo sendo uma notícia sobre uma empresa americana, ela traz recados práticos para quem trabalha, empreende ou usa IA no dia a dia no Brasil.</p>

    <ul>
      <li><strong>Para quem é empregado:</strong> o discurso de "preparar a empresa para a IA" vem junto com cortes em empresas que estão lucrando. Isso reforça que a pressão sobre cargos de gestão intermediária e de tarefas repetitivas existe mesmo em anos bons. Vale mapear quais partes do seu trabalho são decisão e relacionamento, e quais são processo que um agente pode assumir. O artigo sobre <a href="/artigos/empregos-que-a-ia-vai-transformar-como-se-preparar">empregos que a IA vai transformar e como se preparar</a> ajuda nesse mapa.</li>
      <li><strong>Para quem está em transição de carreira:</strong> áreas que combinam conhecimento do negócio com domínio de agentes e integrações tendem a ficar mais valorizadas. Veja o roteiro em <a href="/artigos/como-migrar-de-carreira-para-area-de-ia">como migrar de carreira para a área de IA</a>.</li>
      <li><strong>Para quem constrói automações e agentes:</strong> grandes empresas estão fechando o acesso a robôs que não foram aprovados. Se o seu agente depende de "fingir ser um usuário" num site, ele pode parar de funcionar. Prefira integrações oficiais, por API ou MCP, e prepare-se para pedir credenciamento.</li>
      <li><strong>Para quem usa agentes para comprar ou lidar com dinheiro:</strong> espere regras de autenticação e limites cada vez mais claras. O guia sobre <a href="/artigos/agentes-de-ia-comprando-por-voce-comercio">agentes de IA comprando por você</a> explica os cuidados básicos.</li>
    </ul>

    <div class="callout-box callout-tip">
      <span class="callout-label">Cuidado prático</span>
      <p>Antes de dar a um agente de IA acesso à sua conta bancária, de cartão ou de qualquer sistema financeiro, confira se o banco ou a plataforma oferece uma integração oficial para isso. Se a única forma é entregar sua senha, o risco é seu, e muitas instituições já tratam esse uso como violação das regras da conta.</p>
    </div>

    <h2>O que observar a seguir</h2>
    <p>O primeiro ponto é o detalhamento do corte: quais áreas, quais países e se haverá realocação de pessoas para funções ligadas a tecnologia e IA. O segundo é a lista de agentes e parceiros aprovados pela Amex, que mostrará quem entra no ecossistema oficial. O terceiro é se outras empresas de pagamento e bancos vão adotar a mesma regra de "só por API ou MCP", em linha com o que Schwab e JPMorgan já fizeram ao bloquear agentes externos, tema da notícia <a href="/noticias/schwab-jpmorgan-bloqueiam-agentes-ia-externos-contas-clientes">Schwab e JPMorgan bloqueiam agentes de IA de mexer na conta de clientes</a>.</p>

    <p>Também vale acompanhar se as próximas divulgações de resultados do setor trarão a mesma combinação: lucro em alta, corte de pessoal e discurso de IA. Se vier, ficará mais difícil tratar cada caso como exceção, e a conversa passará a ser sobre como as empresas redesenham o trabalho em torno de agentes, e não apenas sobre cortar custo.</p>
  `,
  faq: [
    {
      question: "Quanto a Amex vai gastar com a reestruturação?",
      answer:
        "O comunicado de resultados do 3º trimestre de 2026 registra uma despesa de reestruturação de US$ 336 milhões antes de impostos, ou US$ 253 milhões depois de impostos, parcialmente financiada pelo ganho com a venda da participação na Global Business Travel Group.",
    },
    {
      question: "Quantos funcionários a Amex vai cortar?",
      answer:
        "Segundo a CNBC, reproduzida pelo The Next Web, cerca de 5% da força de trabalho global. A empresa não detalhou, nas fontes consultadas, áreas e países afetados.",
    },
    {
      question: "O que a Amex disse sobre agentes de IA?",
      answer:
        "O CEO Stephen Squeri afirmou que a empresa atenderá clientes que usam agentes de IA, mas só permitirá acesso aos seus sistemas por agentes aprovados via canais de API ou MCP.",
    },
  ],
};
