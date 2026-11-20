import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "exportar-app-do-gemini-para-o-google-sites-como-publicar-e-cuidados",
  title: "Gemini para Google Sites: como exportar um app e publicar",
  seoTitle: "Gemini para Google Sites: exportar app e publicar",
  excerpt:
    "O Gemini agora exporta apps interativos para um rascunho privado no Google Sites. Veja como usar, quem tem acesso, o que revisar antes de publicar e os limites.",
  metaDescription:
    "Como exportar um app interativo do Gemini para o Google Sites: passo a passo, quem pode usar, rascunho privado, o que revisar antes de publicar e cuidados com dados.",
  category: "ferramentas",
  date: "2026-10-20",
  readTime: 7,
  imageQuery: "website builder laptop browser",
  seed: 496,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Em um app interativo criado no Gemini, a opção Exportar leva ao Google Sites e abre o conteúdo como um rascunho privado, que você edita, publica e compartilha.",
    "Segundo o Google, o recurso vale para clientes do Workspace, assinantes Workspace Individual e contas pessoais com acesso ao app do Gemini, desde que o Google Sites esteja liberado.",
    "O rascunho nasce privado, mas o site publicado é público conforme a sua escolha: revise dados, links e textos antes de divulgar.",
  ],
  content: `
    <p>O Gemini passou a permitir que você exporte um app interativo criado no próprio Gemini para o Google Sites: basta escolher Exportar e depois Google Sites. O conteúdo abre como um rascunho privado no editor de sites, onde você pode ajustar, publicar e compartilhar. O anúncio foi publicado no blog de atualizações do Workspace em 19/10/2026.</p>

    <p>Para quem não programa, isso encurta um caminho: você descreve uma calculadora, um quiz ou uma página de apresentação no Gemini, vê o resultado funcionando e leva para um endereço que pode divulgar. Este guia explica o passo a passo, quem tem acesso, o que o Google informa e o que ele deixa em aberto, e quais cuidados tomar antes de publicar. As informações vêm do <a href="https://workspaceupdates.googleblog.com/2026/10/publish-interactive-apps-from-gemini-app-to-Google-Sites.html" rel="noopener noreferrer" target="_blank">comunicado oficial</a>, conferido em 20/10/2026, e o recurso pode mudar.</p>

    <h2>O que é esse recurso</h2>

    <p>O Gemini consegue criar aplicativos interativos dentro da conversa, como mostra o guia do <a href="/artigos/gemini-canvas-como-criar-documentos-apps-e-slides">Gemini Canvas</a>. Até agora, compartilhar esse app exigia usar o link do próprio Gemini. Com a exportação, o app vai para o Google Sites, o construtor de páginas do Google, e passa a ser um site que você controla: título, menu, textos extras, imagens e endereço.</p>

    <p>A diferença prática é de destino. No Gemini, o app vive dentro da conversa. No Google Sites, vira uma página que pode ficar no cartão de visita, no perfil do Instagram ou no <a href="/artigos/perfil-da-empresa-no-google-com-ia-respostas-fotos-e-posts">perfil da empresa no Google</a>. Para ideias de uso, veja também <a href="/artigos/como-criar-landing-pages-e-sites-simples-com-ia">como criar landing pages e sites simples com IA</a>.</p>

    <h2>Quem pode usar</h2>

    <p>O comunicado informa que o recurso está disponível para clientes do Google Workspace, assinantes do Workspace Individual e usuários de contas pessoais do Google que tenham acesso ao app do Gemini. É preciso que o Google Sites esteja ativado e que a pessoa tenha permissão para criar e editar sites. Em empresas e escolas, quem administra a conta pode ter desligado o Sites, e então o botão não resolve.</p>

    <table>
      <thead><tr><th>Item</th><th>O que o Google informa</th></tr></thead>
      <tbody>
        <tr><td>Contas</td><td>Workspace, Workspace Individual e contas pessoais com acesso ao app do Gemini</td></tr>
        <tr><td>Condição</td><td>Google Sites ativado e permissão para criar e editar sites</td></tr>
        <tr><td>Plataformas</td><td>Web, Android e iOS</td></tr>
        <tr><td>Disponibilidade</td><td>Já disponível para domínios de Lançamento Rápido e Lançamento Programado</td></tr>
        <tr><td>Controle de administrador</td><td>Nenhum controle novo; valem as políticas existentes de Sites e Drive</td></tr>
      </tbody>
    </table>

    <p>O texto não detalha edições do Workspace, idiomas ou limites por plano. Se aparecer alguma restrição na sua conta, ela não está descrita na página oficial. Para entender como os planos do Gemini se diferenciam, veja o <a href="/artigos/google-ai-plus-pro-ou-ultra-qual-plano-do-gemini-escolher">comparativo de planos do Google AI</a>.</p>

    <h2>Passo a passo para exportar</h2>

    <ol>
      <li>No Gemini, peça um app interativo. Exemplo de pedido: crie um quiz de 5 perguntas sobre cuidados com o carro, com resultado no final e visual limpo, em português.</li>
      <li>Teste o app na própria conversa: clique em tudo, digite dados estranhos e veja se o resultado faz sentido.</li>
      <li>Peça ajustes até estar satisfeito, uma mudança por vez.</li>
      <li>No app interativo, escolha Exportar e depois Google Sites.</li>
      <li>O conteúdo abre no Google Sites como um rascunho privado. Edite títulos, textos e imagens.</li>
      <li>Quando estiver pronto, publique e compartilhe o endereço.</li>
    </ol>

    <pre><code>Crie um app interativo em português: calculadora de preço de venda. Campos: custo do produto, imposto em percentual, comissão da plataforma em percentual e margem desejada em percentual. Mostre o preço sugerido e o lucro por unidade em reais. Explique a fórmula em uma frase abaixo do resultado e avise que é uma estimativa.</code></pre>

    <p>O comunicado não traz uma sequência detalhada de telas, apenas o caminho Exportar e Google Sites e o fato de o rascunho nascer privado. Se a interface da sua conta for diferente, procure o mesmo comando no menu do app. Dicas para escrever bons pedidos estão em <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">prompt engineering</a>.</p>

    <h2>O que revisar antes de publicar</h2>

    <p>O rascunho é privado, e isso dá tempo para conferir. Uma publicação com erro é pior do que nenhuma, porque o endereço circula e o cliente confia no que vê. Use esta lista:</p>

    <ul class="checklist">
      <li>Refaça as contas do app com valores que você conhece. Se a calculadora diz que R$ 100 de custo com 30% de margem resulta em outro número que não bate com a sua conta, corrija.</li>
      <li>Leia todos os textos. IA pode inventar uma promessa que você não pode cumprir. Veja como conferir respostas em <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">como checar se a resposta da IA está certa</a>.</li>
      <li>Remova dados pessoais e informações internas que tenham entrado no exemplo.</li>
      <li>Confira links, telefone e e-mail de contato.</li>
      <li>Veja a página no celular, onde a maioria dos clientes vai abrir.</li>
      <li>Defina quem pode ver o site publicado, conforme as opções do Google Sites e as políticas da sua conta.</li>
    </ul>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção com dados</span><p>Se o app coleta informações de clientes, como nome, telefone ou e-mail, você assume responsabilidades de proteção de dados. Antes de coletar, leia o checklist de <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">LGPD para pequeno negócio que usa IA</a>.</p></div>

    <h2>Para que serve na prática</h2>

    <p>Alguns usos simples para quem tem pequeno negócio ou trabalha por conta própria:</p>

    <ul>
      <li><strong>Calculadora de orçamento</strong> para o cliente estimar o valor de um serviço antes de chamar você, ligada a um <a href="/artigos/ia-para-orcamentos-e-cotacoes-responder-clientes-rapido">fluxo de orçamentos e cotações</a>.</li>
      <li><strong>Quiz de diagnóstico</strong> que indica o serviço mais adequado e termina com o botão de contato.</li>
      <li><strong>Guia interativo</strong> de dúvidas frequentes, para aliviar o <a href="/artigos/como-automatizar-atendimento-no-whatsapp-com-ia">atendimento no WhatsApp</a>.</li>
      <li><strong>Material de apoio</strong> de aula ou treinamento, como mini-simulador.</li>
    </ul>

    <p>Para um projeto maior, como loja completa ou sistema com login e pagamentos, esse caminho não basta. O Sites serve melhor a páginas informativas e ferramentas simples. Se a ideia vira negócio, o guia de <a href="/artigos/site-para-negocio-local-com-ia-pacote-prazo-e-como-cobrar">site para negócio local com IA</a> mostra como estruturar a oferta.</p>

    <h2>Limites e alternativas</h2>

    <p>O comunicado não lista limitações, o que não significa que não existam. Como o app nasce de um modelo de IA, ele pode ter comportamento diferente do esperado em casos de borda, e a manutenção fica com você: se o Gemini mudar, o app exportado não se atualiza sozinho. Por isso, trate o primeiro como protótipo e mantenha uma cópia do pedido original. As <a href="https://gemini.google/release-notes/" rel="noopener noreferrer" target="_blank">notas de versão do Gemini</a> mostram quando o app recebe mudanças.</p>

    <p>Se você só precisa de uma página bonita, outras ferramentas podem servir melhor, como as de apresentação e design descritas em <a href="/artigos/gamma-ou-canva-qual-ia-cria-apresentacao-melhor">Gamma ou Canva</a>. E se o assunto é compartilhar um app direto do Gemini, relembre que quem recebe o link pode ver e, em alguns casos, editar dados, conforme o alerta do guia do Canvas. A exportação para o Sites dá mais controle sobre o que é publicado.</p>

    <h2>Erros comuns</h2>

    <ul>
      <li><strong>Publicar sem testar.</strong> Um botão que não funciona derruba a confiança.</li>
      <li><strong>Pedir tudo de uma vez.</strong> Peça uma versão simples e evolua em etapas.</li>
      <li><strong>Esquecer a política da conta.</strong> Em conta de trabalho, o administrador pode limitar a publicação.</li>
      <li><strong>Deixar texto genérico.</strong> Troque exemplos fictícios por informações reais do seu negócio.</li>
      <li><strong>Não avisar que é estimativa.</strong> Calculadoras devem dizer que o resultado é aproximado.</li>
    </ul>

    <p>Comece pequeno: exporte um app simples, revise, publique para duas pessoas de confiança e peça opinião. Para acompanhar outras novidades do ecossistema, veja os guias de <a href="/artigos/apps-conectados-do-gemini-agenda-maps-e-youtube-como-usar">apps conectados do Gemini</a> e o resumo do <a href="/artigos/gemini-4-argon-e-modo-tarefas-quem-tem-acesso-e-o-que-esperar">Gemini 4 Argon</a>, e confira a categoria de <a href="/categoria/ferramentas">ferramentas de IA</a>.</p>
  `,
  faq: [
    {
      question: "Como exportar um app do Gemini para o Google Sites?",
      answer:
        "No app interativo criado no Gemini, escolha Exportar e depois Google Sites. O conteúdo abre no Google Sites como um rascunho privado, onde você pode editar, publicar e compartilhar. O recurso foi anunciado pelo Google em 19 de outubro de 2026.",
    },
    {
      question: "Quem pode usar a exportação para o Google Sites?",
      answer:
        "Segundo o Google, clientes do Workspace, assinantes do Workspace Individual e usuários de contas pessoais com acesso ao app do Gemini. É preciso que o Google Sites esteja ativado e que você tenha permissão para criar e editar sites na sua conta.",
    },
    {
      question: "O site exportado já nasce público?",
      answer:
        "Não. O Google informa que o conteúdo abre como um novo rascunho privado. Ele só se torna acessível a outras pessoas quando você publica ou compartilha, e o site criado segue as políticas de Sites e Drive já existentes na sua organização.",
    },
    {
      question: "Preciso pagar para exportar um app do Gemini?",
      answer:
        "O comunicado não menciona cobrança extra para esse recurso e não detalha limites por plano. Como as condições podem variar por conta e por região, consulte a página oficial e as configurações da sua conta do Google antes de contar com o recurso.",
    },
    {
      question: "O app exportado se atualiza sozinho?",
      answer:
        "O comunicado não descreve atualização automática. Por segurança, trate o app exportado como uma cópia: se quiser mudanças, edite no Google Sites ou gere uma nova versão no Gemini e exporte de novo, guardando o pedido original para repetir o processo.",
    },
  ],
};
