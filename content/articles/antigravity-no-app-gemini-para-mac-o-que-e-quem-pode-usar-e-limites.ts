import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "antigravity-no-app-gemini-para-mac-o-que-e-quem-pode-usar-e-limites",
  title: "Antigravity no app Gemini para Mac: o que é, quem usa e limites",
  seoTitle: "Antigravity no app Gemini para Mac: o que é",
  excerpt:
    "O Google colocou o Antigravity dentro do app Gemini para macOS. Veja o que ele faz, requisitos do Mac, quem pode usar, o que ainda não foi informado e os cuidados.",
  metaDescription:
    "Antigravity dentro do app Gemini para Mac: veja o que o agente de código faz, requisitos do macOS, idioma, idade mínima, regiões e o que checar antes de usar.",
  category: "ferramentas",
  date: "2026-10-30",
  readTime: 7,
  imageQuery: "macbook code editor desk",
  seed: 919,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O Antigravity está embutido no app Gemini para macOS e permite iniciar um agente de código, aprovar o plano e voltar ao chat enquanto ele constrói e testa em segundo plano.",
    "A nota de versão de 13/10/2026 fala em disponibilidade em inglês, para contas pessoais e contas de trabalho elegíveis de maiores de 18 anos, nas regiões em que o Antigravity é compatível.",
    "O app Gemini para Mac exige processador Apple Silicon e macOS Sequoia (15.0) ou posterior, e a página oficial não informa preço nem plano específico para o Antigravity.",
  ],
  content: `
    <p>O Antigravity no app Gemini para Mac é o agente de código do Google embutido no aplicativo de desktop do Gemini: você começa uma tarefa, aprova o plano que ele propõe e volta para a conversa enquanto ele constrói e testa o código em segundo plano. A nota de versão do Gemini com a novidade é de 13 de outubro de 2026.</p>

    <p>Vale entender o que isso muda para quem não é programador, quais são os requisitos do Mac e o que a página oficial ainda não informa. As informações abaixo vêm das páginas oficiais do Gemini, abertas e conferidas em 30/10/2026, e podem mudar. Confira sempre as notas de versão antes de contar com um recurso.</p>

    <h2>O que é o Antigravity dentro do Gemini</h2>

    <p>Segundo as <a href="https://gemini.google/release-notes/" target="_blank" rel="noopener noreferrer">notas de versão do Gemini</a>, na entrada de 13/10/2026, o Google Antigravity passou a vir embutido no app Gemini para macOS, para ir direto da conversa de brainstorming para o código de um app. O fluxo descrito é: clicar em Antigravity no topo do app no Mac, iniciar um agente de código, aprovar o plano e voltar ao chat enquanto o agente constrói e testa. O app avisa quando o trabalho está pronto para revisão.</p>

    <p>Em termos simples, é uma divisão de papéis. Você descreve a ideia no chat, o agente propõe um plano, você aprova ou ajusta, e só depois ele escreve e testa o código. A aprovação do plano é o ponto de controle: o agente não parte direto para a execução sem passar por você. Para o leitor que já viu o <a href="/artigos/gemini-4-argon-e-modo-tarefas-quem-tem-acesso-e-o-que-esperar">Modo Tarefas do Gemini 4 Argon</a>, a lógica é parecida: tarefas longas rodando enquanto você faz outra coisa.</p>

    <h2>Requisitos do Mac e como baixar</h2>

    <p>A <a href="https://gemini.google/desktop" target="_blank" rel="noopener noreferrer">página do Gemini para desktop</a> informa que o app para macOS é voltado a MacBooks com Apple Silicon e macOS Sequoia (15.0) ou posterior. Os atalhos citados são Option + Espaço para o chat compacto e Option + Shift + Espaço para o chat completo, e dá para abrir pelo ícone da barra de menus ou do Dock. Os atalhos podem ser personalizados nas configurações do app.</p>

    <table>
      <thead>
        <tr><th>Item</th><th>O que a página oficial informa</th></tr>
      </thead>
      <tbody>
        <tr><td>Sistema</td><td>macOS Sequoia (15.0) ou posterior</td></tr>
        <tr><td>Processador</td><td>Apple Silicon</td></tr>
        <tr><td>Antigravity</td><td>Abre o Google Antigravity com um clique, para criar apps, escrever código e prototipar ideias</td></tr>
        <tr><td>Idioma e conta (nota de 13/10)</td><td>Inglês, contas pessoais e contas de trabalho elegíveis, maiores de 18 anos</td></tr>
        <tr><td>Região</td><td>Onde o Antigravity é compatível</td></tr>
        <tr><td>Preço do Antigravity</td><td>Não informado nessas páginas</td></tr>
      </tbody>
    </table>

    <p>Para quem usa Windows, o cenário é outro. A mesma página diz que a maior parte dos recursos nativos está no macOS por enquanto, com mais chegando ao Windows com o tempo. O guia do <a href="/artigos/app-do-gemini-para-windows-como-baixar-atalho-e-limites">app do Gemini para Windows</a> mostra o que existe lá hoje.</p>

    <h2>Quem pode usar e o que ainda não foi dito</h2>

    <p>A nota de versão limita o recurso a inglês, a contas pessoais e a contas de trabalho elegíveis, a maiores de 18 anos e às regiões em que o Antigravity é compatível. Se o português do Brasil ou o Brasil entram nessa lista, a nota não esclarece no trecho que conferimos. Na dúvida, instale o app, abra o Antigravity e veja se o recurso aparece na sua conta.</p>

    <p>Também não há, nas páginas consultadas, valor de assinatura, cota de uso ou limite de tarefas para o Antigravity dentro do Gemini. Isso importa: agentes de código podem consumir bastante processamento. Antes de planejar um fluxo de trabalho em cima disso, olhe a página de planos do Google e as configurações da sua conta. O texto sobre os <a href="/artigos/limites-de-uso-do-gemini-janela-de-5-horas-planos-e-como-economizar">limites de uso do Gemini</a> explica como funcionam as janelas de uso do app.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Contas de trabalho dependem do administrador. Se o Gemini da sua empresa está sob regras do Workspace, o administrador pode limitar recursos, como mostra o guia do <a href="/artigos/menu-personalizar-do-gemini-skills-apps-e-controle-para-admins">menu Personalizar do Gemini</a>.</p></div>

    <h2>Para que serve na prática</h2>

    <p>O Antigravity pode ser útil para quem quer prototipar uma ideia sem montar o ambiente de programação: uma página simples, um painel de números, um formulário, uma automação pequena. A fronteira é que gerar código não é o mesmo que entregar um produto seguro e mantido. Quem não programa precisa de ajuda para revisar o que foi criado antes de usar com dados de clientes.</p>

    <h3>Exemplo de uso com pé no chão</h3>

    <p>Uma dona de papelaria em Curitiba quer uma página para clientes escolherem kits de volta às aulas e mandarem o pedido por WhatsApp. No chat, ela descreve os kits, os valores e o fluxo. O agente propõe um plano em etapas: página, lista de produtos, botão de mensagem. Ela aprova, volta ao trabalho e, quando o app avisa, revisa o resultado em um navegador. Antes de publicar, confere preços, textos e o número de telefone. Se a página for coletar nome e endereço, entra a LGPD, tema do <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">checklist de LGPD para pequeno negócio</a>.</p>

    <p>Quem já usa o Gemini para criar páginas e documentos pode comparar com o <a href="/artigos/gemini-canvas-como-criar-documentos-apps-e-slides">Gemini Canvas</a>, que mantém tudo dentro do navegador, e com a opção de <a href="/artigos/exportar-app-do-gemini-para-o-google-sites-como-publicar-e-cuidados">exportar um app do Gemini para o Google Sites</a>. Para quem nunca programou, o texto sobre <a href="/artigos/vibe-coding-para-nao-programadores-carreira-e-riscos">vibe coding para não programadores</a> mostra riscos e limites desse jeito de criar software.</p>

    <h2>Cuidados antes de usar</h2>

    <ul class="checklist">
      <li>Não cole chaves de API, senhas ou dados de clientes no chat do agente.</li>
      <li>Leia o plano antes de aprovar e recuse etapas que você não entende.</li>
      <li>Teste o resultado em um ambiente separado, nunca direto no site em produção.</li>
      <li>Guarde uma cópia do que foi criado fora do app, para não depender de um único lugar.</li>
      <li>Revise permissões de arquivos e pastas que o app do Gemini pode acessar no Mac.</li>
    </ul>

    <p>Agentes que escrevem e rodam código também estão expostos a ataques que escondem instruções em páginas e arquivos. O artigo sobre <a href="/artigos/prompt-injection-risco-de-ia-que-le-paginas-e-emails">prompt injection</a> explica o risco, e a visão geral de <a href="/artigos/agente-de-ia-pessoal-gemini-spark-o-que-delegar-e-o-que-nao">o que delegar a um agente pessoal</a> ajuda a decidir o que fica com você.</p>

    <h2>Erros comuns</h2>

    <ul>
      <li><strong>Supor que o recurso está liberado no Brasil.</strong> A nota oficial cita inglês e regiões compatíveis.</li>
      <li><strong>Aprovar o plano sem ler.</strong> A etapa de aprovação existe para você mudar o rumo.</li>
      <li><strong>Publicar sem revisão.</strong> Código gerado por agente pode ter erro de lógica ou falha de segurança.</li>
      <li><strong>Esperar que seja de graça.</strong> A página oficial não informa o custo do Antigravity.</li>
    </ul>

    <h2>Vale testar?</h2>

    <p>Se você tem um Mac com Apple Silicon, está no macOS 15 ou mais novo e tem curiosidade por criar protótipos, vale abrir o app e ver se o Antigravity aparece na sua conta. Comece com um projeto pequeno, descartável, e use a primeira rodada para entender como o plano e a aprovação funcionam. Acompanhe as <a href="https://gemini.google/release-notes/" target="_blank" rel="noopener noreferrer">notas de versão oficiais</a> para saber quando idioma e regiões forem ampliados. Para outras novidades de ferramentas, veja a categoria <a href="/categoria/ferramentas">ferramentas de IA</a>.</p>
  `,
  faq: [
    {
      question: "O que é o Antigravity no app Gemini para Mac?",
      answer:
        "É o agente de código do Google embutido no app Gemini para macOS. Você inicia uma tarefa, aprova o plano proposto e volta ao chat enquanto o agente constrói e testa o código em segundo plano, com aviso quando houver algo pronto para revisar. Foi anunciado na nota de versão de 13/10/2026.",
    },
    {
      question: "Quais são os requisitos para usar o app Gemini no Mac?",
      answer:
        "A página oficial do Gemini para desktop cita MacBooks com Apple Silicon e macOS Sequoia (15.0) ou posterior. O app abre com Option + Espaço (chat compacto) ou Option + Shift + Espaço (chat completo), e os atalhos podem ser alterados nas configurações.",
    },
    {
      question: "O Antigravity no Gemini funciona em português e no Brasil?",
      answer:
        "A nota de versão fala em disponibilidade em inglês, para contas pessoais e de trabalho elegíveis de maiores de 18 anos, nas regiões compatíveis com o Antigravity. O texto consultado não detalha o Brasil, então o jeito seguro é instalar o app e verificar na sua conta.",
    },
    {
      question: "O Antigravity no Gemini é gratuito?",
      answer:
        "As páginas oficiais consultadas não informam preço, plano ou limite de uso específico para o Antigravity dentro do Gemini. Antes de contar com ele no trabalho, confira os planos do Google e as configurações da sua conta, porque agentes de código podem consumir bastante processamento.",
    },
    {
      question: "Quem não programa pode usar o Antigravity?",
      answer:
        "Pode experimentar para prototipar ideias simples, mas precisa revisar o resultado com cuidado antes de usar com clientes ou dados reais. Código gerado por agente pode ter erros e falhas de segurança. Comece com projetos pequenos, sem dados sensíveis, e peça ajuda de alguém técnico antes de publicar.",
    },
  ],
};
