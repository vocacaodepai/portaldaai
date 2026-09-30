import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-falha-claude-code-api-fora-do-ar",
  title: "Claude, Claude Code e API da Anthropic ficam fora do ar por 2 horas",
  summary:
    "Falha em cadeia derrubou login, novas conversas e a API da Anthropic na segunda-feira (29), afetando quem usa Claude Code no trabalho. Serviço foi normalizado depois.",
  author: "Bruno Danello",
  sourceName: "Status da Anthropic",
  sourceUrl: "https://status.claude.com/",
  date: "2026-09-29",
  content: `
    <p>A Anthropic registrou uma falha em cadeia que deixou Claude.ai, Claude Code, Claude Cowork, o Console e a API fora do ar, ou funcionando de forma instável, por mais de duas horas na segunda-feira (29). O problema começou por volta das 14h21 UTC com um aumento súbito de erros em vários serviços ao mesmo tempo, segundo o <a href="https://status.claude.com/" rel="noopener noreferrer nofollow">painel oficial de status da Anthropic</a>.</p>
    <p>A empresa aplicou uma primeira correção às 14h36 UTC, que reduziu boa parte dos erros e devolveu conversas já abertas ao normal, mas um segundo problema separado passou a impedir login, abertura de novas conversas, conversas por voz e sessões de Claude Code ou Cowork. Usuários viram mensagens como "conta temporariamente incapaz de autenticar", e a Anthropic chegou a recomendar publicamente que quem já estava logado evitasse se desconectar para não ficar barrado. O quadro só foi dado como totalmente resolvido às 16h27 UTC, cerca de duas horas depois do início.</p>

    <h2>O que travou, e por que travou em cadeia</h2>
    <p>Pelo registro público de incidentes, o problema teve duas frentes distintas. A primeira afetou a taxa de erro geral nos serviços voltados a uso direto (chat, Claude Code, Cowork), mitigada em cerca de 15 minutos. A segunda, mais duradoura, ficou concentrada em autenticação: single sign-on e "Entrar com a Apple" pararam de funcionar, o que bloqueou não só novos logins como upload de arquivos e compras dentro da plataforma. Esse tipo de falha em duas camadas, uma de disponibilidade geral e outra específica de login, é comum em incidentes de infraestrutura de nuvem quando o serviço de autenticação depende de um componente compartilhado que também sustenta outras partes do sistema.</p>
    <p>Não é a primeira vez que grandes provedores de IA enfrentam picos de instabilidade nesta reta final de 2026: a corrida por lançar modelos cada vez mais rápido, como mostrou o <a href="/noticias/anthropic-lanca-claude-sonnet-5-5">lançamento do Claude Sonnet 5.5</a> na mesma semana, também aumenta a pressão sobre a infraestrutura por trás desses serviços. A Anthropic vem expandindo capacidade de forma acelerada, e picos de tráfego em torno de lançamentos como o <a href="/noticias/openai-lanca-gpt-6-sol-luna-corta-precos-pela-metade">GPT-6 Sol e Luna, lançados horas depois de um Claude Opus 5.5</a>, costumam coincidir com episódios de instabilidade em toda a indústria.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você programa com Claude Code, atende cliente com um agente rodando sobre a API da Anthropic ou automatizou parte do seu negócio em cima desses serviços, essas duas horas de instabilidade tiveram efeito direto: builds travados, agentes que pararam no meio de uma tarefa, integrações que devolveram erro para quem estava do outro lado. Isso reforça um ponto que vale para qualquer negócio que depende de uma única API de IA: ter um plano B, mesmo que simples, evita que uma falha de duas horas no fornecedor vire um problema de duas horas no seu próprio produto.</p>
    <p>Na prática, isso significa três coisas simples de implementar. Primeiro, monitorar o status oficial do provedor (a própria Anthropic mantém o painel público em status.claude.com) em vez de descobrir a falha só quando o cliente reclama. Segundo, sempre que possível, desenhar o fluxo do seu produto para não travar por completo quando a IA fica indisponível, por exemplo salvando o que o usuário estava fazendo e avisando que o serviço está temporariamente fora, em vez de simplesmente travar a tela. Terceiro, para quem roda tarefa crítica de produção em cima de um único modelo, vale avaliar ter um segundo provedor configurado como alternativa, mesmo que com qualidade ligeiramente inferior, só para não ficar zerado em um momento como esse.</p>

    <h2>Como saber se um problema é da Anthropic ou do seu código</h2>
    <p>Um erro genérico de API pode ter origem em qualquer ponto: no seu próprio código, na sua conexão de internet ou no provedor. Antes de gastar horas debugando localmente, o primeiro passo é sempre checar o status oficial do serviço. No caso da Anthropic, isso significa visitar status.claude.com, onde a empresa publica linha do tempo detalhada de cada incidente, com horário exato de início, mitigação e resolução, além do escopo (quais produtos foram afetados). Outros provedores como OpenAI e Google também mantêm páginas equivalentes, e vale ter o link de cada uma salvo se o seu negócio depende de mais de uma IA.</p>
    <p>Para quem está avaliando qual ferramenta de IA usar no dia a dia, episódios como este não deveriam ser o único critério de decisão, mas merecem entrar na conta ao lado de preço e qualidade de resposta. Nosso <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">comparativo entre ChatGPT, Claude e Gemini</a> e o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist de como escolher ferramenta de IA com segurança</a> ajudam a pensar nesse tipo de trade-off antes de colocar toda a operação em cima de um único fornecedor.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Checklist rápido para não depender de um único provedor</span>
      <ul>
        <li>Salve o link do status oficial de cada IA que seu negócio usa (Anthropic, OpenAI, Google) e cheque antes de abrir chamado de suporte interno.</li>
        <li>Configure alerta simples (pode ser até um lembrete de calendário semanal) para revisar se algum provedor teve incidente relevante na semana.</li>
        <li>Se a tarefa for crítica para o cliente, tenha ao menos um segundo modelo configurado como alternativa, mesmo que mais caro ou um pouco pior, só para os minutos em que o principal cai.</li>
        <li>Desenhe a interface do seu produto para avisar o usuário quando a IA está fora do ar, em vez de deixar a tela travada sem explicação.</li>
      </ul>
    </div>

    <h2>O que esperar da Anthropic depois do incidente</h2>
    <p>Empresas de infraestrutura crítica de IA costumam publicar um post-mortem técnico depois de incidentes desse porte, detalhando a causa raiz e as mudanças feitas para evitar repetição. Vale acompanhar o próprio status.claude.com nos próximos dias, já que a Anthropic tende a atualizar o registro do incidente com uma explicação mais completa assim que a investigação interna terminar. Para quem constrói produto em cima da API da empresa, esse tipo de post-mortem costuma trazer informação útil sobre limites e pontos de atenção da arquitetura que vale a pena levar em conta ao desenhar o próprio sistema de retries e tratamento de erro.</p>
  `,
  faq: [
    {
      question: "Quanto tempo o Claude ficou fora do ar em 29 de setembro de 2026?",
      answer:
        "A instabilidade começou por volta das 14h21 UTC e foi totalmente resolvida às 16h27 UTC, cerca de duas horas depois, segundo o painel oficial de status da Anthropic.",
    },
    {
      question: "Quais serviços da Anthropic foram afetados?",
      answer:
        "Claude.ai (web, desktop e mobile), Claude Code, Claude Cowork, o Console da Anthropic e a API oficial. O problema principal envolveu autenticação, o que bloqueou login, novas conversas e uploads.",
    },
  ],
};
