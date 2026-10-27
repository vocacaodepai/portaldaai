import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "schwab-jpmorgan-bloqueiam-agentes-ia-externos-contas-clientes",
  title: "Schwab e JPMorgan bloqueiam agentes de IA de mexer na conta de clientes",
  summary:
    "Schwab e JPMorgan barram agentes de IA externos, como o Muse da Meta, de movimentar dinheiro de clientes. O Schwab vai liberar só acesso de leitura via MCP.",
  author: "Bruno Danello",
  sourceName: "The Next Web",
  sourceUrl: "https://thenextweb.com/news/schwab-blocks-ai-agents-meta-muse",
  date: "2026-10-20",
  publishedAt: "2026-10-20T13:24:13-03:00",
  topic: "negocios",
  imageQuery: "Charles Schwab headquarters",
  content: `
    <p>Dois dos maiores nomes do sistema financeiro dos Estados Unidos deixaram claro nesta semana que não pretendem abrir as contas dos clientes para agentes de inteligência artificial de terceiros. Segundo a <a href="https://thenextweb.com/news/schwab-blocks-ai-agents-meta-muse" target="_blank" rel="noopener noreferrer nofollow">reportagem do The Next Web</a>, publicada em 16 de outubro, o CEO do Charles Schwab, Rick Wurster, disse à Bloomberg Television que a corretora bloqueia agentes não autorizados, entre eles o Muse, da Meta, quando tentam movimentar o dinheiro dos clientes. Na mesma linha, Jamie Dimon, CEO do JPMorgan, afirmou na teleconferência de resultados do banco que a instituição não vai deixar agentes externos agirem dentro dos seus sistemas.</p>

    <p>O ponto central do argumento é a forma como esses agentes entram na conta. Em vez de uma integração oficial, muitos deles operam com a senha do próprio cliente, fazendo login como se fossem a pessoa. Wurster resumiu o problema numa pergunta: se o banco não controla o agente e o cliente também não, e algo der errado, quem responde pelo prejuízo? Segundo o The Next Web, os Estados Unidos ainda não têm resposta clara sobre responsabilidade por ações de agentes de IA, tema que segue em debate no Congresso.</p>

    <h2>O que cada empresa disse e o que muda na prática</h2>
    <p>No caso do Schwab, o executivo contou que recebe um relatório semanal com os bloqueios e que os agentes grandes barrados chegam à casa das dezenas por semana. Para ele, o número mostra que os clientes ainda não estão prontos para entregar as próprias contas à IA. A <a href="https://www.americanbanker.com/news/schwab-blocks-unauthorized-ai-agents-points-clients-to-charley" target="_blank" rel="noopener noreferrer nofollow">American Banker</a> detalha que a corretora impede o uso de credenciais de login do cliente e de automação de navegador, e que o cliente ainda pode usar o próprio modelo de linguagem, como o ChatGPT, para fazer operações de investimento. Mover dinheiro por meio de um LLM, porém, continua fora de cogitação por enquanto.</p>

    <p>A alternativa que o Schwab propõe tem dois caminhos. O primeiro são servidores de MCP (Model Context Protocol), que permitem que a IA escolhida pelo cliente se conecte aos sistemas da corretora sob as regras dela. Nesse desenho, as ferramentas de fora só podem consultar saldos e apoiar pesquisas, sem a possibilidade de transferir recursos. O segundo é o Charley, assistente de IA da própria empresa, anunciado em 30 de setembro, construído sobre modelos de linguagem de terceiros e dados do Schwab. Hoje ele faz poucas ações, como trocar um endereço ou indicar um contato de confiança, mas Wurster espera que vire a principal porta de entrada de IA para a corretora.</p>

    <p>Já no JPMorgan, o discurso de Dimon falou em &quot;agentes fora de controle&quot;. Segundo o relato do The Next Web com base na Cybernews, algumas ferramentas externas conseguem ver dados de contas, mas não enviam dinheiro nem pagam contas. O banco, até agora, não informou prazo para criar salvaguardas que permitam que agentes interajam diretamente com as contas dos clientes.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Leitura x movimentação</span>
      <p>A linha que os bancos estão traçando é simples: um agente pode olhar (saldo, extrato, pesquisa), mas não pode agir (transferir, pagar, comprar). Quem constrói automações com IA precisa pensar nesse limite desde o desenho do projeto.</p>
    </div>

    <h2>Segurança, responsabilidade e também negócio</h2>
    <p>A preocupação declarada é de segurança e responsabilidade, mas a American Banker registra uma leitura de mercado que vai além. Tim Welsh, fundador da consultoria Nexus Strategies, afirmou que os riscos de segurança de dados são reais, mas que o Schwab também tem incentivo financeiro para manter o relacionamento dentro de casa. Segundo a reportagem, a corretora teve cerca de US$ 3,48 bilhões em receita líquida de juros no terceiro trimestre, em grande parte vinda de aproximadamente US$ 493 bilhões em contas de varredura de caixa. Um agente independente poderia mover esse dinheiro parado para aplicações com rendimento maior, o que reduziria a receita do banco. Wurster rebate dizendo que clientes que usam IA mantêm mais caixa no Schwab. Vale ressaltar que a motivação financeira é interpretação de um analista, não uma declaração da empresa.</p>

    <p>O contexto também importa. O Muse, assistente da Meta capaz de executar tarefas financeiras, foi lançado cerca de um mês antes, e outros episódios mostram o mesmo atrito entre agentes e plataformas. Nós já cobrimos como a <a href="/noticias/amazon-bloqueia-agente-ia-muse-meta-compras">Amazon bloqueou o agente Muse de fazer compras no site sem autorização</a>, e reguladores nos Estados Unidos e na Europa, segundo o The Next Web, vêm questionando bancos sobre riscos de agentes de IA e de ataques cibernéticos. As próprias conexões MCP já tiveram falhas de segurança, que Google e JPMorgan corrigiram.</p>

    <h2>Por que isso importa para você</h2>
    <p>Mesmo sendo uma história americana, ela antecipa uma discussão que já chega ao Brasil, onde o Pix, o Open Finance e as fintechs já formam um ambiente em que agentes de IA querem operar. Se você usa ou pretende usar um agente para organizar finanças, pagar contas ou automatizar a rotina do seu negócio, três lições práticas aparecem.</p>
    <p>Primeiro, nunca entregue a senha do banco a um agente. O modo seguro é o acesso por integração oficial, com permissão limitada e que você consiga revogar, e não o login simulado com as suas credenciais. Segundo, prefira, sempre que possível, permissões somente de leitura: um agente que apenas consulta saldos e gera relatórios já economiza horas e não pode causar um estrago financeiro. Terceiro, tenha claro quem responde se algo der errado. Como a própria reportagem aponta, essa pergunta ainda não tem resposta jurídica fechada, e contar com a sorte não é uma estratégia.</p>
    <p>Para quem vende serviços de automação, esse cenário também é uma oportunidade. Empresas vão precisar de quem saiba desenhar fluxos com agentes que respeitem limites de acesso, com aprovação humana antes de qualquer movimentação de dinheiro. Se você quer entender a base técnica, vale ler nosso guia sobre <a href="/artigos/mcp-model-context-protocol-o-que-e-e-como-conecta-agentes-de-ia">o que é o MCP e como ele conecta agentes de IA</a>, a explicação sobre <a href="/artigos/agentes-de-ia-comprando-por-voce-comercio">agentes de IA comprando por você</a> e o checklist para <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">escolher uma ferramenta de IA com segurança</a>. Outro exemplo recente de como o MCP vira ponte entre empresas e assistentes está na cobertura sobre o <a href="/noticias/qive-camada-ia-assistente-conector-mcp-claude-chatgpt">conector MCP da Qive para Claude e ChatGPT</a>.</p>

    <h2>O que acompanhar daqui para frente</h2>
    <p>O próximo passo a observar é se os grandes bancos vão de fato publicar interfaces oficiais para agentes, com regras de autenticação, limites de valor e trilhas de auditoria. Até lá, o recado dos dois CEOs é que a porta está aberta apenas para leitura, e que quem quiser mover dinheiro por meio de IA terá de passar pelo assistente da própria instituição. A discussão sobre responsabilidade no Congresso americano deve definir quanto esse modelo vai durar.</p>

    <div class="callout-box">
      <span class="callout-label">Fonte original</span>
      <p>Reportagem de Cristian Dina no <a href="https://thenextweb.com/news/schwab-blocks-ai-agents-meta-muse" target="_blank" rel="noopener noreferrer nofollow">The Next Web</a> (16 de outubro de 2026), com detalhes complementares da <a href="https://www.americanbanker.com/news/schwab-blocks-unauthorized-ai-agents-points-clients-to-charley" target="_blank" rel="noopener noreferrer nofollow">American Banker</a>.</p>
    </div>
  `,
};
