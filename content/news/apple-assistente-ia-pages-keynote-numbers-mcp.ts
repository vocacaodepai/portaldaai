import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "apple-assistente-ia-pages-keynote-numbers-mcp",
  title: "Apple põe assistente de IA no Pages, Keynote e Numbers e abre o MCP",
  summary:
    "Apple lança em beta um assistente de IA, com modelos próprios e da OpenAI, no Pages, Keynote e Numbers, que também aceitam agentes de terceiros via MCP.",
  author: "Bruno Danello",
  sourceName: "The Verge",
  sourceUrl: "https://www.theverge.com/tech/1019373/apple-pages-keynote-numbers-ai-chatbot-update",
  date: "2026-10-27",
  publishedAt: "2026-10-27T14:25:00-03:00",
  topic: "lancamentos",
  imageQuery: "Apple Park Cupertino",
  content: `
    <p>A Apple anunciou nesta terça-feira (27) um assistente de inteligência artificial para a sua suíte de produtividade. Segundo a reportagem do The Verge, assinada por Emma Roth, o recurso chega ao Pages (textos), ao Keynote (apresentações) e ao Numbers (planilhas), e é construído sobre modelos de IA da própria Apple e da OpenAI. Além do assistente, os três apps passam a aceitar o Model Context Protocol (MCP) no macOS 27 ou posterior, o que permite que agentes de IA de terceiros se conectem a eles.</p>

    <h2>O que o assistente faz em cada app</h2>
    <p>De acordo com o The Verge, o assistente entende o contexto do documento aberto e age sobre ele, em vez de funcionar como um chat solto ao lado. As tarefas descritas pela reportagem se dividem assim:</p>
    <ul>
      <li><strong>Keynote:</strong> projetar, animar e refinar slides a partir do contexto da apresentação.</li>
      <li><strong>Pages:</strong> redigir, reestruturar e ajustar textos escritos.</li>
      <li><strong>Numbers:</strong> calcular, visualizar e organizar dados, sugerir tipos de gráfico e montar tabelas personalizadas.</li>
    </ul>
    <p>É a mesma lógica que já vimos em concorrentes: IA embutida no editor, com acesso ao conteúdo do arquivo, para tirar do usuário o trabalho de começar do zero. A diferença é o ecossistema. Como os apps da Apple vêm instalados em iPhone, iPad e Mac, a base potencial de usuários é enorme, inclusive no Brasil.</p>

    <h2>Disponibilidade: beta e aparelhos compatíveis</h2>
    <p>A reportagem informa que o assistente começa a ser liberado em beta para aparelhos compatíveis com o Apple Intelligence. Ele funciona em dispositivos com iOS 27, iPadOS 27 ou macOS 27 e versões posteriores. Ou seja, quem ainda está em sistemas mais antigos, ou em um aparelho sem suporte ao Apple Intelligence, não verá o recurso. Por ser beta, é razoável esperar liberação gradual, ajustes de comportamento e diferenças de idioma. A matéria não detalha se o português brasileiro entra desde o primeiro dia, então esse é um ponto a conferir no seu aparelho antes de contar com o recurso em uma rotina de trabalho.</p>

    <h2>O ponto mais estratégico: MCP nos apps da Apple</h2>
    <p>O detalhe que mais interessa a quem trabalha com agentes é o suporte ao MCP. Com o protocolo, Keynote, Pages e Numbers passam a poder ser operados por agentes de terceiros no macOS 27 ou posterior. Na prática, um agente como o Claude, o ChatGPT ou uma ferramenta de automação pode, em tese, abrir uma planilha do Numbers, preencher dados, montar uma apresentação no Keynote ou editar um texto no Pages, desde que o usuário o conecte e autorize. O MCP vem se tornando a porta de entrada padrão para agentes em outros serviços, como mostramos na cobertura sobre o <a href="/noticias/walmart-agent-gateway-agentes-ia-compras-mcp">Agent Gateway do Walmart</a>, no <a href="/noticias/figma-dylan-field-mcp-nao-e-protocolo-perfeito-20-parceiros">MCP do Figma</a> e na exigência da <a href="/noticias/amex-corta-5-por-cento-vagas-reestruturacao-agentes-ia-api-mcp">Amex de que agentes entrem por API ou MCP</a>. Que a Apple, conhecida por manter seu ecossistema fechado, adira ao protocolo é um sinal de que a conexão com agentes virou requisito de mercado.</p>
    <p>Isso também levanta uma questão de segurança que a matéria não aprofunda: agentes com acesso a documentos pessoais e de trabalho precisam de permissões bem delimitadas. A própria Apple já endureceu o acesso total a disco no Mac por esse motivo, como relatamos em <a href="/noticias/apple-macos-full-disk-access-agentes-ia">Apple reforça o acesso a disco no Mac por risco de agentes de IA</a>.</p>

    <h2>Outras novidades nos apps criativos</h2>
    <p>O anúncio vai além da suíte de escritório. Segundo o The Verge, o Pixelmator Pro ganha o Generate Fill, que permite editar parte de uma imagem descrevendo a mudança desejada; a Apple diz que a ferramenta combina automaticamente iluminação, perspectiva e textura do entorno para que a edição se misture à foto. O Logic Pro, no Mac e no iPad, recebe um redesenho no estilo Liquid Glass e um assistente de IA que, segundo a empresa, consegue montar uma faixa de voz a partir de um único comando e editar projetos existentes. Há ainda um novo Browser no Mac que usa IA no próprio aparelho para analisar, classificar e etiquetar sons. O Final Cut Pro, por sua vez, traz modelos, gráficos, títulos e transições da MotionVFX direto no app e um Content Hub com biblioteca de vídeos, fotos e fundos de banco de imagens.</p>
    <p>Segundo a reportagem, as atualizações do pacote Creator Studio chegam em novembro, sem custo adicional para quem já é assinante. Já o cronograma do assistente nos apps de escritório é de beta imediato, conforme descrito acima.</p>

    <h2>Contexto: a Apple tenta recuperar terreno em IA</h2>
    <p>O anúncio acontece em uma semana em que a empresa também entregou o <a href="/noticias/apple-ios-27-2-siri-ai-portugues-memoria-apps-excluidos">iOS 27.2, com a Siri AI em português e memória de conversas</a>. A empresa vinha sendo cobrada pelo atraso nos recursos de IA, a ponto de ter fechado o <a href="/noticias/apple-acordo-250-milhoes-processo-siri-ia-atrasada">acordo de US$ 250 milhões em processo sobre a Siri</a>. A parceria com a OpenAI nos modelos do novo assistente mostra que a Apple combina tecnologia própria com a de terceiros para acelerar o que entrega, em vez de depender apenas do que desenvolve internamente. A concorrência já tem produtos parecidos: o Google integra o Gemini ao Workspace e a Microsoft ao Office, e o ChatGPT também avançou nesse terreno, como vimos em <a href="/noticias/openai-chatgpt-space-pages-office">ChatGPT em páginas e documentos de escritório</a>.</p>

    <h2>Por que isso importa para você</h2>
    <p>Quem trabalha por conta própria, dá aulas, vende serviços ou toca um pequeno negócio e já usa Mac, iPad ou iPhone ganha um assistente sem precisar assinar outro app. Alguns usos práticos que a novidade abre:</p>
    <ul>
      <li><strong>Apresentações mais rápidas.</strong> Montar proposta comercial, aula ou relatório no Keynote com ajuda da IA reduz o tempo de formatação. O guia <a href="/artigos/como-criar-apresentacoes-e-slides-profissionais-com-ia">como criar apresentações e slides profissionais com IA</a> mostra o método que vale para qualquer ferramenta.</li>
      <li><strong>Planilhas sem medo de fórmula.</strong> O Numbers com assistente pode sugerir gráficos e tabelas; para aprender a base, veja <a href="/artigos/aprender-planilhas-do-zero-com-ia-formulas-erros-e-exercicios">aprender planilhas do zero com IA</a>.</li>
      <li><strong>Agentes conectados ao seu trabalho.</strong> O suporte ao MCP deve permitir automações que preenchem documentos e planilhas. Antes de liberar acesso, defina o que o agente pode ler e alterar.</li>
      <li><strong>Revisão humana continua obrigatória.</strong> Texto, números e gráficos gerados por IA precisam de conferência, principalmente em orçamentos, contratos e dados de clientes.</li>
      <li><strong>Atenção ao idioma e ao aparelho.</strong> Por ser beta e depender do Apple Intelligence, o recurso pode não estar disponível em português ou no seu modelo de aparelho de imediato.</li>
    </ul>

    <div class="callout-box callout-tip">
      <span class="callout-label">Antes de testar</span>
      <p>Atualize para o sistema 27 ou posterior, procure o assistente dentro de cada app e teste primeiro com um documento sem dados sensíveis. Se for conectar um agente via MCP, comece com permissão apenas de leitura e só amplie depois de ver o que ele faz.</p>
    </div>

    <h2>O que observar a seguir</h2>
    <p>Três pontos merecem acompanhamento. O primeiro é a qualidade do assistente em português, que costuma chegar com menos recursos do que o inglês. O segundo é como a Apple vai tratar a privacidade dos documentos quando o processamento envolver modelos da OpenAI, tema que a reportagem não detalha. O terceiro é quais agentes de terceiros vão de fato usar o MCP dos apps e que tipos de automação surgirão para quem trabalha com documentos todos os dias. Por enquanto, o que está confirmado pela cobertura do The Verge é o anúncio, o beta nos aparelhos compatíveis e o suporte ao protocolo no macOS 27.</p>
  `,
};
