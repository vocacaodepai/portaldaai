import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "ask-gemini-no-google-chat-o-que-faz-quem-tem-e-limites",
  title: "Ask Gemini no Google Chat: o que faz, quem tem e limites",
  seoTitle: "Ask Gemini no Google Chat: o que faz e quem tem",
  excerpt:
    "Ask Gemini no Google Chat busca em Gmail, Drive e Agenda, cria rascunhos e agenda reuniões. Veja quem tem acesso, como abrir e os limites de uso hoje.",
  metaDescription:
    "Ask Gemini no Google Chat: o que a ferramenta faz, em quais planos do Workspace aparece, como abrir com Ctrl+G, o que mudou no painel lateral e quais limites valem.",
  category: "ferramentas",
  date: "2026-10-21",
  readTime: 7,
  imageQuery: "team chat laptop office desk meeting",
  seed: 523,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Ask Gemini é uma área dentro do Google Chat onde você pede coisas em linguagem natural: buscar informação em Gmail, Drive e Agenda, criar rascunhos e imagens, resumir conversas e agendar reuniões.",
    "Segundo o Google, o recurso chegou a partir de 26/08/2026 para Business Standard e Plus, Enterprise Standard e Plus e o complemento Google AI Pro for Education, e a mudança do painel lateral vale só para contas com idioma inglês.",
    "O período de limites mais altos terminou em 01/10/2026, quando passaram a valer limites de uso, e o painel lateral do Gemini deixou de aparecer no Chat para quem usa o novo recurso.",
  ],
  content: `
    <p>Ask Gemini no Google Chat é uma área do aplicativo de mensagens do Google Workspace onde você conversa com o Gemini para buscar informações no Gmail, no Drive e na Agenda, escrever rascunhos, resumir conversas e marcar reuniões. Quem tem o recurso abre pelo atalho Ctrl+G (Windows e ChromeOS) ou Command+G (Mac) e escreve o pedido como se falasse com um colega.</p>
    <p>A novidade importa para quem trabalha em equipe, porque tira o Gemini de uma barra lateral e o coloca no centro do Chat. Mas ela tem requisitos que muita gente não cumpre: plano de empresa, idioma da conta em inglês e a configuração certa feita pelo administrador. Este guia mostra o que o Google informou na documentação oficial, conferida em 21/10/2026, e o que isso muda para quem usa Workspace no Brasil.</p>

    <h2>O que é o Ask Gemini no Google Chat?</h2>
    <p>O <a href="https://workspaceupdates.googleblog.com/2026/08/ask-gemini-in-chat.html" target="_blank" rel="noopener noreferrer">anúncio do Google Workspace Updates</a>, publicado em 19/08/2026, descreve o recurso como uma "linha de comando unificada para o trabalho", movida pela camada chamada Workspace Intelligence. Na prática, é uma conversa com o Gemini que enxerga os seus dados do Workspace, dentro do que você já tem permissão para ver.</p>
    <p>Os usos citados pelo Google são cinco: pesquisar informação em Gmail, Drive e Agenda; gerar imagens e rascunhos de atualizações dentro da conversa; se atualizar sobre conversas em um só lugar; agendar reuniões e gerenciar tarefas e eventos; e organizar o trabalho em sessões separadas, para voltar a um assunto depois. Cada sessão funciona como uma pasta de conversa por tema, parecida com o que o <a href="/artigos/projetos-no-claude-como-usar-limites-e-memoria-por-projeto">recurso de projetos do Claude</a> faz em outra ferramenta.</p>

    <h2>Quem tem acesso e desde quando?</h2>
    <p>O lançamento começou em 26/08/2026, de forma gradual, para domínios nos canais Rapid Release e Scheduled Release, e a visibilidade para todos os usuários pode levar até 15 dias. As edições citadas pelo Google são Business Standard e Plus, Enterprise Standard e Plus, e o complemento Google AI Pro for Education.</p>
    <table>
      <thead>
        <tr><th>Item</th><th>O que o Google informou</th></tr>
      </thead>
      <tbody>
        <tr><td>Planos de empresa</td><td>Business Standard e Plus; Enterprise Standard e Plus</td></tr>
        <tr><td>Educação</td><td>Complemento Google AI Pro for Education</td></tr>
        <tr><td>Início do lançamento</td><td>26/08/2026, gradual</td></tr>
        <tr><td>Idioma</td><td>Mudança do painel lateral vale só para contas com idioma inglês</td></tr>
        <tr><td>Limites mais altos</td><td>Promocionais, até 01/10/2026</td></tr>
        <tr><td>Atalho</td><td>Ctrl+G (ChromeOS e Windows) ou Command+G (macOS)</td></tr>
      </tbody>
    </table>
    <p>Conta pessoal gratuita não aparece nessa lista. Se você usa o Gmail comum, o caminho para ter o Gemini no dia a dia é outro, como no guia de <a href="/artigos/google-ai-plus-pro-ou-ultra-qual-plano-do-gemini-escolher">planos Google AI Plus, Pro e Ultra</a>.</p>

    <h2>Como abrir e usar no dia a dia</h2>
    <p>Para o usuário final, o Google diz que é preciso estar inscrito nos recursos inteligentes do Workspace (Smart Features). Com isso ativo, o Ask Gemini aparece em "Atalhos", no menu à esquerda do Google Chat, ou pelo atalho de teclado.</p>
    <h3>Pedidos que fazem sentido</h3>
    <p>Pense em tarefas de escritório que hoje exigem abrir três abas. Alguns exemplos de pedido:</p>
    <pre><code>Procure no meu Gmail e no Drive os últimos documentos sobre o orçamento do projeto Alfa e me diga o que mudou desde a primeira versão.</code></pre>
    <pre><code>Resuma as conversas do espaço Comercial desde segunda-feira em cinco tópicos e liste o que está pendente comigo.</code></pre>
    <pre><code>Encontre um horário de 30 minutos nesta semana para falar com a Ana sobre o cronograma de lançamento e prepare um convite.</code></pre>
    <p>O segundo anúncio do Google, de <a href="https://workspaceupdates.googleblog.com/2026/09/create-content-schedule-events-and-coordinate-tasks-across-Workspace-regardless-of-what-app-you-are-in.html" target="_blank" rel="noopener noreferrer">09/09/2026</a>, mostra que o Ask Gemini é uma das portas de entrada para um recurso maior: o Gemini trabalhando entre Gmail, Drive, Docs, Slides e Chat, criando documentos, planilhas e apresentações, rascunhando e-mails e marcando reuniões. Há cartões de pré-visualização para você revisar e confirmar e-mails externos e compromissos de agenda antes de qualquer envio.</p>

    <h2>O que mudou no painel lateral do Chat</h2>
    <p>Esta é a parte que mais gera dúvida. Segundo o Google, o painel lateral do Gemini deixou de ser exibido no Chat para quem passou para o Ask Gemini. Os Gems (assistentes personalizados) deixam de ficar acessíveis a partir do painel lateral do Chat, mas continuam nos painéis laterais de outros apps do Workspace. E o histórico das conversas do painel lateral não migra para o Ask Gemini.</p>
    <p>Quem depende de Gems no dia a dia deve conferir o guia sobre como os <a href="/artigos/gemini-gems-viram-skills-o-que-muda-e-como-migrar">Gems estão virando skills</a>, porque o nome e o lugar desses atalhos mudaram em vários produtos do Google. A mudança vale só para contas cujo idioma é inglês. Quem usa outro idioma mantém o painel lateral por enquanto, e o Google diz que pretende ampliar o suporte a mais idiomas no futuro.</p>
    <p>Isso significa que, em uma conta configurada em português, você pode não ver o Ask Gemini agora. Antes de planejar o uso na equipe, abra o Chat, olhe o menu "Atalhos" e teste o atalho de teclado em uma conta de teste.</p>

    <h2>Limites de uso e o que muda depois de 01/10/2026</h2>
    <p>O Google ofereceu limites mais altos de forma promocional até 01/10/2026 e avisou que, depois da data, passam a valer limites de uso. A página não traz números: diz apenas que os detalhes viriam na Central de Ajuda antes de os novos limites começarem. Por isso, qualquer promessa de "mensagens por dia" que você leia em blogs sem fonte oficial deve ser tratada com desconfiança.</p>
    <p>O que dá para fazer na prática é medir o próprio uso. Se a equipe usa o recurso para resumos longos ou buscas pesadas em Drive, anote em quais dias o Gemini avisa que o limite foi atingido. Com duas semanas de anotação você sabe se o plano atual dá conta ou se vale discutir uma mudança com quem administra o contrato. O guia de <a href="/artigos/gemini-deep-research-como-usar-limites-e-planos">limites do Gemini Deep Research</a> mostra o mesmo raciocínio aplicado a outra função do Gemini.</p>

    <h2>Controles do administrador e privacidade</h2>
    <p>O Ask Gemini vem ativado por padrão quando duas configurações estão ligadas: o Gemini no Workspace dentro do Chat e o Workspace Intelligence para todos os apps. Administradores podem exportar o histórico de conversas do Gemini, inclusive o do painel lateral do Chat. Se a organização permitir, o próprio usuário pode baixar o histórico dele. No Data Export e no Google Takeout, esses dados aparecem em "Gemini no Workspace", e não em "Google Chat".</p>
    <p>Para quem lida com dados de clientes, vale entender a regra básica. A <a href="https://support.google.com/gemini/answer/13594961" target="_blank" rel="noopener noreferrer">página de privacidade dos apps do Gemini</a> avisa para não inserir informações confidenciais que você não queira que um revisor veja ou que o Google use para melhorar seus serviços. Essa página trata dos apps do Gemini para contas pessoais, então contas de empresa seguem as regras do contrato do Workspace, que o administrador deve ler. Veja também o guia de <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">privacidade e IA</a> e o de <a href="/artigos/apagar-historico-do-gemini-e-usar-chat-temporario">como apagar o histórico do Gemini</a>.</p>

    <h2>Exemplo: agência de 8 pessoas organizando uma semana de entregas</h2>
    <p>Imagine uma agência pequena com oito pessoas, todas em Business Standard e com o idioma da conta em inglês (cenário hipotético). A coordenadora começa a segunda-feira pedindo ao Ask Gemini um resumo dos espaços de projeto e uma lista do que está atrasado. Em seguida pede que ele procure no Drive a última versão de uma proposta e no Gmail a resposta do cliente.</p>
    <p>Na sequência, ela usa o recurso para sugerir horários de reunião com duas pessoas. Antes de enviar, confere o convite no cartão de pré-visualização. O ganho está em reduzir a troca de abas, não em substituir o julgamento dela. Quem tem rotina parecida pode ler também o guia de <a href="/artigos/gestao-de-equipe-com-ia-escala-e-tarefas-pequeno-negocio">gestão de equipe com IA</a> e o de <a href="/artigos/ia-para-reunioes-transcricao-resumo-ata-automatica">reuniões com transcrição e ata automática</a>.</p>

    <h2>Alternativas para quem não tem o recurso</h2>
    <p>Quem tem conta pessoal ou usa Workspace em português pode ter resultado parecido por outros caminhos. O <a href="/artigos/gemini-no-gmail-escrever-e-responder-emails-mais-rapido">Gemini no Gmail</a> cuida de rascunhos e respostas. Os <a href="/artigos/apps-conectados-do-gemini-agenda-maps-e-youtube-como-usar">apps conectados do Gemini</a> deixam o app conversar com Agenda e Maps. E o <a href="/artigos/agente-de-ia-pessoal-gemini-spark-o-que-delegar-e-o-que-nao">agente pessoal Gemini Spark</a> mostra até onde dá para delegar tarefas. No mundo Microsoft, o equivalente é o <a href="/artigos/copilot-cowork-o-que-e-quem-pode-usar-e-quanto-custa">Copilot Cowork</a>.</p>
    <table>
      <thead>
        <tr><th>Necessidade</th><th>Caminho</th></tr>
      </thead>
      <tbody>
        <tr><td>Escrever e responder e-mails</td><td>Gemini no Gmail</td></tr>
        <tr><td>Marcar compromissos e achar rotas</td><td>Apps conectados do Gemini</td></tr>
        <tr><td>Delegar tarefas em várias etapas</td><td>Agente pessoal, com revisão sua</td></tr>
        <tr><td>Conversar com dados da empresa no Chat</td><td>Ask Gemini, se o plano e o idioma permitirem</td></tr>
      </tbody>
    </table>

    <h2>Erros comuns ao adotar o recurso</h2>
    <ul class="checklist">
      <li><strong>Supor que todo mundo tem.</strong> O acesso depende de plano, idioma da conta e configuração do administrador.</li>
      <li><strong>Colar dados sensíveis sem regra.</strong> Defina com a equipe o que pode e o que não pode entrar em qualquer assistente de IA.</li>
      <li><strong>Confirmar convites sem ler.</strong> O cartão de pré-visualização existe para você revisar antes de enviar.</li>
      <li><strong>Confiar em limites de blog.</strong> Os números oficiais ficam na Central de Ajuda do Google.</li>
      <li><strong>Esquecer o que muda no painel.</strong> Gems e histórico do painel antigo não migram sozinhos.</li>
    </ul>
    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>O texto do Google trata de um lançamento gradual e em inglês. Se o recurso não aparece na sua conta, não é falha sua: confirme idioma, plano e a configuração do administrador antes de abrir chamado.</p></div>
    <p>Se você administra o Workspace da sua empresa, faça um teste com duas pessoas por uma semana e registre o que funcionou. Para acompanhar outras novidades de ferramentas, passe pela categoria de <a href="/categoria/ferramentas">ferramentas de IA</a>.</p>
  `,
  faq: [
    {
      question: "O que é o Ask Gemini no Google Chat?",
      answer:
        "É uma área dentro do Google Chat em que você conversa com o Gemini para buscar informações no Gmail, no Drive e na Agenda, criar rascunhos e imagens, resumir conversas, agendar reuniões e organizar o trabalho em sessões. O Google o descreve como uma linha de comando unificada para o trabalho.",
    },
    {
      question: "Como abrir o Ask Gemini no Chat?",
      answer:
        "Procure Ask Gemini em Atalhos, no menu à esquerda do Google Chat, ou use Ctrl+G no Windows e no ChromeOS, ou Command+G no Mac. O usuário precisa estar inscrito nos recursos inteligentes do Workspace (Smart Features), e o recurso precisa estar liberado para a conta e para a organização.",
    },
    {
      question: "Quem tem direito ao Ask Gemini no Google Chat?",
      answer:
        "Segundo o Google, em 21/10/2026: Business Standard e Plus, Enterprise Standard e Plus, e o complemento Google AI Pro for Education. O lançamento começou em 26/08/2026 e é gradual. A mudança do painel lateral vale só para contas com idioma inglês, então contas em português podem não ver o recurso ainda.",
    },
    {
      question: "O Ask Gemini no Chat é gratuito?",
      answer:
        "Ele é incluído nos planos citados pelo Google, sem cobrança separada informada na página oficial. O Google deu limites mais altos de forma promocional até 01/10/2026 e disse que, depois dessa data, passam a valer limites de uso. A página não traz números, então consulte a Central de Ajuda.",
    },
    {
      question: "O que acontece com o painel lateral do Gemini no Chat?",
      answer:
        "Para contas em inglês que passam ao Ask Gemini, o painel lateral do Gemini deixa de aparecer no Chat. Os Gems deixam de ficar acessíveis a partir desse painel, mas continuam nos painéis de outros apps do Workspace, e o histórico do painel lateral não migra para o Ask Gemini.",
    },
  ],
};
