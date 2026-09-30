import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "mcp-python-sdk-falha-oauth-credenciais",
  title: "Falha no SDK Python do MCP expunha credenciais de login a servidor malicioso",
  summary: "Vulnerabilidade de alto risco no SDK oficial do Model Context Protocol permitia roubo de credenciais OAuth. Correção já foi lançada, mas exige configuração extra.",
  author: "Bruno Danello",
  sourceName: "The Hacker News",
  sourceUrl: "https://thehackernews.com/2026/09/official-mcp-python-sdk-flaw-can-let.html",
  date: "2026-09-29",
  content: `
    <p>A empresa de segurança Cycode descobriu e reportou uma falha de alto risco no SDK Python oficial do Model Context Protocol (MCP), o padrão criado pela Anthropic para conectar agentes de IA a ferramentas e serviços externos. A vulnerabilidade, catalogada como GHSA-qx49-fqc8-xw99 e divulgada em 29 de setembro, permitia que um servidor MCP malicioso roubasse as credenciais de login OAuth de quem se conectava a ele, segundo reportagem do <a href="https://thehackernews.com/2026/09/official-mcp-python-sdk-flaw-can-let.html" rel="noopener noreferrer nofollow">The Hacker News</a>.</p>
    <p>O problema recebeu pontuação CVSS de 7,5 em cenários sem intervenção do usuário e 6,5 quando há interação humana no meio do processo, patamares que a indústria de segurança classifica como risco alto. A Anthropic já lançou correção nas versões 1.30.0 e 2.2.0 do SDK, mas especialistas alertam que só atualizar a biblioteca não fecha completamente a brecha: é preciso também ajustar a configuração de cada aplicação que usa o protocolo.</p>

    <h2>Como a falha funcionava na prática</h2>
    <p>O Model Context Protocol é o padrão que a Anthropic popularizou para permitir que agentes de IA, como o Claude Code, se conectem a bancos de dados, planilhas, sistemas internos de empresas e outras ferramentas de forma padronizada. Quando um cliente MCP precisa se autenticar em um serviço protegido, ele pede ao servidor conectado a localização do provedor de autorização OAuth responsável por validar o login.</p>
    <p>O bug estava exatamente nessa etapa de descoberta: quando um servidor malicioso devolvia um erro 404 no endpoint padrão de descoberta OAuth, o SDK caía para um caminho alternativo que buscava a configuração de autorização diretamente no próprio servidor conectado, sem validar se aquele emissor (issuer) era realmente confiável. Na prática, isso dava a um servidor MCP hostil a chance de redirecionar toda a troca de credenciais para um endpoint sob controle do atacante, capturando o segredo do cliente, o código de autorização e a chave de prova PKCE, três elementos que juntos bastam para obter um token de acesso válido junto ao provedor de identidade real, com as mesmas permissões concedidas à aplicação original.</p>
    <p>As versões afetadas vão da 1.9.1 até a 1.29.1 na linha 1.x, e da 2.0.0 até a 2.1.1 na linha 2.x. O risco recai sobre aplicações que usam os provedores OAuthClientProvider, ClientCredentialsOAuthProvider, PrivateKeyJWTOAuthProvider ou o já descontinuado RFC7523OAuthClientProvider para se conectar, via HTTP, a servidores MCP que não são totalmente confiáveis, cenário comum em integrações com plugins e conectores de terceiros como os que já povoam o <a href="/noticias/anthropic-lanca-claude-marketplace-2000-plugins">Claude Marketplace</a>, lançado pela própria Anthropic com mais de 2 mil conectores.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se sua empresa usa agentes de IA conectados via MCP a sistemas internos, seja um time de engenharia rodando Claude Code em produção, seja um negócio que integrou um conector de terceiro ao fluxo de trabalho, essa falha é o tipo de brecha que passa despercebida até virar vazamento de dados de cliente ou acesso indevido a uma conta corporativa. A lógica é simples: quanto mais uma empresa conecta seus sistemas críticos a agentes de IA através de protocolos como o MCP, maior a superfície de ataque, e nem sempre quem configura essas integrações tem tempo de acompanhar cada aviso de segurança publicado pelos mantenedores da ferramenta.</p>
    <p>Isso reforça um padrão que já apareceu em outra falha recente batizada de <a href="/noticias/plugin4shell-falha-agentes-ia-codigo-claude-code-codex-copilot-gemini">Plugin4Shell, que expôs os principais agentes de IA de programação a invasão remota</a>: o ecossistema de agentes conectados a ferramentas externas ainda é jovem, e vulnerabilidades na camada de autenticação e execução de plugins têm aparecido com frequência maior do que costuma acontecer em softwares mais maduros. Para quem monta produto ou automação em cima de IA, isso não é motivo para abandonar a tecnologia, mas é motivo de sobra para tratar segurança como parte do processo, não como algo a ser resolvido depois que o problema aparece.</p>

    <h2>O que fazer se você usa MCP no seu negócio</h2>
    <p>A correção da Anthropic exige mais do que rodar um comando de atualização. Segundo a análise da Cycode, times que usam ClientCredentialsOAuthProvider ou PrivateKeyJWTOAuthProvider precisam, além de atualizar para a versão 1.30.0 ou 2.2.0, passar explicitamente o parâmetro <code>issuer</code> nomeando o serviço de login legítimo, já que a atualização sozinha oferece proteção incompleta sem essa configuração extra. Também é recomendado limpar registros de cliente OAuth armazenados anteriormente, porque versões antigas desses registros não têm o vínculo de emissor que a correção introduz.</p>
    <p>Para quem suspeita de exposição, o passo seguinte é rotacionar segredos de cliente e revogar tokens junto ao serviço de login usado, além de migrar aplicações que ainda dependem do provedor descontinuado RFC7523OAuthClientProvider para uma alternativa suportada. A Cycode não relatou exploração ativa da falha até a publicação da correção, mas isso não reduz a urgência: uma vez que a vulnerabilidade se torna pública, o tempo entre a divulgação e as primeiras tentativas de exploração costuma ser curto.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Checklist rápido para quem usa MCP</span>
      <ul>
        <li>Atualize o SDK Python do MCP para a versão 1.30.0 (linha 1.x) ou 2.2.0 (linha 2.x).</li>
        <li>Configure o parâmetro <code>issuer</code> nos provedores OAuth de credencial de máquina, não confie só na atualização da biblioteca.</li>
        <li>Limpe registros de cliente OAuth salvos antes da correção.</li>
        <li>Se houver suspeita de exposição, rotacione segredos e revogue tokens no provedor de identidade usado.</li>
        <li>Evite conectar aplicações críticas a servidores MCP de terceiros sem antes checar a reputação do conector, principalmente fora de marketplaces oficiais.</li>
      </ul>
    </div>

    <h2>O padrão que se repete: segurança como ponto cego da corrida por agentes</h2>
    <p>Este episódio se soma a uma lista crescente de falhas de segurança ligadas à adoção acelerada de agentes de IA em 2026, da instabilidade de infraestrutura registrada quando <a href="/noticias/anthropic-falha-claude-code-api-fora-do-ar">Claude, Claude Code e a API da Anthropic ficaram fora do ar</a> a incidentes de ransomware operado por agentes documentados pela Microsoft. Para quem está decidindo como e onde conectar ferramentas de IA a sistemas de negócio, o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist de como escolher ferramenta de IA com segurança</a> ajuda a colocar esse tipo de avaliação no processo de decisão, em vez de tratar segurança como algo que só entra em pauta depois que uma falha vira manchete.</p>
    <p>Vale acompanhar também os próximos avisos de segurança publicados pela Anthropic e pela comunidade que mantém o protocolo MCP, já que o padrão segue em expansão rápida junto com o <a href="/noticias/openai-chatgpt-plugins-extensoes-app-devday">lançamento de plugins e extensões concorrentes por parte da OpenAI</a>, o que tende a atrair mais atenção de pesquisadores de segurança, tanto do lado defensivo quanto do lado ofensivo, para essa camada de conexão entre IA e sistemas reais.</p>
  `,
  faq: [
    {
      question: "Quais versões do SDK Python do MCP estão vulneráveis?",
      answer:
        "As versões 1.9.1 até 1.29.1 na linha 1.x, e 2.0.0 até 2.1.1 na linha 2.x. As correções estão nas versões 1.30.0 e 2.2.0.",
    },
    {
      question: "Só atualizar o SDK resolve o problema?",
      answer:
        "Não completamente. Aplicações que usam ClientCredentialsOAuthProvider ou PrivateKeyJWTOAuthProvider também precisam configurar o parâmetro issuer, apontando o serviço de login legítimo, para fechar a brecha por completo.",
    },
    {
      question: "A falha já foi explorada por atacantes?",
      answer:
        "Segundo a Cycode, empresa que descobriu e reportou a vulnerabilidade, não há registro de exploração ativa até o momento da divulgação da correção, em 29 de setembro de 2026.",
    },
  ],
};
