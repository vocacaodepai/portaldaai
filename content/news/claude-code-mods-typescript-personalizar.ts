import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "claude-code-mods-typescript-personalizar",
  title: "Anthropic lança mods para o Claude Code, personalizáveis em TypeScript",
  summary:
    "Mods permitem reescrever prompts, bloquear chamadas de ferramenta e mudar a interface do Claude Code, distribuídos como plugins instaláveis via diretório oficial.",
  author: "Bruno Danello",
  sourceName: "Claude (Anthropic)",
  sourceUrl: "https://claude.com/blog/claude-code-mods",
  date: "2026-10-01",
  content: `
    <p>A Anthropic lançou, em 1º de outubro de 2026, os mods para o Claude Code: pequenas funções escritas em TypeScript ou JavaScript que mudam como a ferramenta se comporta por dentro, sem precisar esperar por um recurso oficial da empresa. Segundo o anúncio publicado no <a href="https://claude.com/blog/claude-code-mods" target="_blank" rel="noopener noreferrer nofollow">blog oficial da Claude</a>, um mod pode reescrever um prompt antes de ele chegar ao modelo, adicionar uma interface nova, substituir um recurso já existente do Claude Code ou criar uma funcionalidade inteira que não existia antes.</p>
    <p>O recurso já está disponível tanto na CLI quanto no aplicativo desktop do Claude Code, para qualquer pessoa que use a ferramenta. A Anthropic descreve os mods como uma expansão relevante da capacidade de personalização que já existia antes, limitada principalmente a hooks simples e configurações pontuais.</p>

    <h2>Como um mod funciona por dentro</h2>
    <p>O sistema funciona em torno de eventos. O Claude Code emite eventos para ações como chamadas de ferramenta, pedidos de permissão e a renderização de telas, e os mods se conectam a esses eventos para agir antes, depois ou no lugar deles, ou envolvendo o evento inteiro para rodar código nos dois momentos. Isso dá a quem programa um mod controle fino sobre o funcionamento interno do agente, algo que antes só a própria Anthropic conseguia ajustar.</p>
    <p>Entre as capacidades citadas no anúncio estão reescrever ou bloquear chamadas de ferramenta, aprovar ou negar pedidos de permissão automaticamente, redigir (ocultar) segredos que apareçam na saída de uma ferramenta, e editar ou substituir elementos da interface, incluindo adicionar botões e campos de entrada próprios. Vários mods podem rodar ao mesmo tempo, empilhados em ordem de carregamento: o primeiro a carregar é o primeiro a processar cada evento, o que exige atenção de quem combina mods de fontes diferentes.</p>
    <p>A distribuição segue a infraestrutura de plugins que a Anthropic já havia expandido recentemente com o <a href="/noticias/anthropic-lanca-claude-marketplace-2000-plugins">Claude Marketplace, lançado com mais de 2 mil plugins</a>. Um mod é empacotado dentro de um plugin, instalado e compartilhado pelo comando <code>/plugin</code> direto na CLI, e pode ser submetido ao diretório oficial pelo mesmo processo usado para qualquer outro plugin.</p>

    <h2>Segurança em times e empresas</h2>
    <p>Para contas de equipe e empresa, a Anthropic incluiu um mod de segurança padrão, chamado "sec-default", que carrega antes de qualquer outro e impede que mods instalados por usuários sobrescrevam regras de permissão definidas pela organização. Times corporativos já estão usando a estrutura para construir painéis de status de CI/CD dentro do próprio Claude Code, travas de confirmação antes de ações em produção, e registros de auditoria detalhados de cada chamada feita por um mod.</p>
    <p>Esse cuidado faz sentido considerando o histórico recente da própria ferramenta: em setembro, uma <a href="/noticias/anthropic-falha-claude-code-api-fora-do-ar">falha deixou a API do Claude Code fora do ar</a> por horas, e meses antes uma vulnerabilidade batizada de <a href="/noticias/plugin4shell-falha-agentes-ia-codigo-claude-code-codex-copilot-gemini">Plugin4Shell expôs justamente os principais agentes de IA para programação</a>, incluindo o Claude Code, a invasão remota via plugins mal configurados. Abrir a ferramenta para código de terceiros roda esse mesmo tipo de risco, e a Anthropic parece estar tentando antecipar o problema com a trava corporativa.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você usa o Claude Code para programar, automatizar tarefas ou já vende serviços de automação com IA para clientes, os mods abrem uma camada de personalização que antes só existia de forma limitada em configurações soltas. Um freelancer ou uma pequena agência pode agora empacotar um comportamento específico (por exemplo, sempre pedir confirmação antes de qualquer ação em produção, ou registrar tudo que o agente fez num cliente) como um mod reutilizável, em vez de repetir instruções manuais em cada projeto novo. Isso se conecta diretamente com o que já discutimos em <a href="/artigos/como-ganhar-dinheiro-vendendo-automacoes-prontas-com-ia">como ganhar dinheiro vendendo automações prontas com IA</a>: um mod bem feito é, na prática, um produto que pode ser vendido ou licenciado dentro do próprio ecossistema do Claude.</p>
    <p>Para quem desenvolve software e usa IA no dia a dia de trabalho, a mudança também reduz a dependência de esperar a Anthropic lançar um recurso específico. Se a interface padrão do Claude Code não atende a um fluxo de trabalho interno, agora é possível escrever (ou pedir ao próprio Claude Code para escrever) um mod que resolve isso, parecido com o espírito das automações sem código discutidas em <a href="/artigos/make-ou-zapier-qual-automacao-com-ia-vale-mais-a-pena">Make ou Zapier, qual automação com IA vale mais a pena</a>, mas aplicado dentro da própria ferramenta de codificação.</p>

    <h2>O cuidado antes de instalar o primeiro mod</h2>
    <p>Como um mod pode interceptar chamadas de ferramenta, aprovar permissões automaticamente e ler o que aparece na tela, instalar um mod de terceiro equivale a dar a esse código acesso a praticamente tudo que o Claude Code faz na sua máquina. Antes de instalar qualquer mod que não tenha sido escrito por você mesmo, vale aplicar o mesmo cuidado recomendado no nosso <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist de como escolher ferramenta de IA com segurança</a>: checar quem publicou, ler o código quando ele é aberto, e nunca instalar um mod capaz de aprovar permissões automaticamente num ambiente que tenha acesso a dados sensíveis ou produção, sem antes testar num projeto isolado.</p>
    <div class="callout-box callout-tip">
      <span class="callout-label">Para quem não programa</span>
      <p>Mods são escritos em código e pensados para desenvolvedores, mas o próprio anúncio da Anthropic menciona que é possível pedir ao Claude Code para escrever um mod simples a partir de uma descrição em português do que você quer. Vale testar primeiro num projeto de teste, nunca direto num ambiente de produção ou com dados de clientes.</p>
    </div>
  `,
  faq: [
    {
      question: "O que são os mods do Claude Code?",
      answer:
        "São pequenas funções em TypeScript ou JavaScript que se conectam a eventos internos do Claude Code para mudar seu comportamento: podem reescrever prompts, bloquear ou aprovar chamadas de ferramenta, ocultar segredos na saída e alterar a interface, adicionando botões e painéis próprios.",
    },
    {
      question: "Como instalar um mod no Claude Code?",
      answer:
        "Mods são distribuídos dentro de plugins, pela mesma infraestrutura do Claude Marketplace. A instalação é feita pelo comando /plugin direto na CLI ou no aplicativo desktop, e qualquer desenvolvedor pode submeter um mod ao diretório oficial.",
    },
    {
      question: "Mods do Claude Code são seguros para usar em uma empresa?",
      answer:
        "A Anthropic incluiu um mod de segurança padrão, chamado sec-default, que carrega antes de qualquer outro em contas de Time e Empresa e impede que mods de usuários sobrescrevam as regras de permissão da organização. Ainda assim, como um mod pode interceptar chamadas de ferramenta e aprovar permissões, instalar mods de terceiros exige o mesmo cuidado de segurança aplicado a qualquer plugin com acesso amplo ao ambiente.",
    },
  ],
};
