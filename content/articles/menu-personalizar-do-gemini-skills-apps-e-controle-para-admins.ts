import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "menu-personalizar-do-gemini-skills-apps-e-controle-para-admins",
  title: "Menu Personalizar do Gemini: skills, apps conectados e controle",
  seoTitle: "Menu Personalizar do Gemini: o que é e como usar",
  excerpt:
    "O Gemini ganhou o menu Personalizar, que reúne skills e apps conectados em um só lugar. Veja o que muda, quem recebe, como usar e o que admins controlam.",
  metaDescription:
    "Menu Personalizar do Gemini: onde fica, como criar skills, conectar e remover apps, quem recebe, datas de liberação, disponibilidade no Brasil e controles do administrador.",
  category: "ferramentas",
  date: "2026-10-21",
  readTime: 7,
  imageQuery: "smartphone settings menu app connections",
  seed: 531,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O Google lançou o menu Personalizar no app do Gemini, um lugar único para criar skills com preferências de resposta e gerenciar os apps conectados, que passam de 40 serviços externos além dos apps do Google.",
    "O menu está sendo liberado aos poucos para contas pessoais, assinantes individuais e clientes do Workspace, na web, no celular e no app para desktop, e a visibilidade pode levar até 15 dias desde o início da liberação em 13 de outubro de 2026.",
    "Você escolhe quais apps conectar e pode revisar permissões ou desconectar a qualquer momento, e administradores gerenciam integrações no Console de administração; no Brasil, só alguns apps estão disponíveis.",
  ],
  content: `
    <p>O menu Personalizar do Gemini é uma área do app onde você ajusta como o assistente responde e a quais ferramentas ele se conecta. Segundo o Google, é um único lugar para criar skills, que guardam suas preferências e tarefas repetidas, e para gerenciar os apps conectados, incluindo mais de 40 serviços externos e os apps do próprio Google.</p>

    <p>Este guia explica onde encontrar o menu, o que cada parte faz, quem recebe e quando, o que vale no Brasil e o que administradores de empresas conseguem controlar. Tudo com base no anúncio oficial do Google de 21/10/2026 e na página de ajuda do Gemini. Como a liberação é gradual, o menu pode ainda não ter chegado à sua conta, e isso é normal.</p>

    <h2>O que é o menu Personalizar?</h2>

    <p>De acordo com o <a href="https://workspaceupdates.googleblog.com/2026/10/an-easier-way-to-customize-how-gemini-works-for-you.html" target="_blank" rel="noopener noreferrer">anúncio no blog Workspace Updates</a>, o Personalizar centraliza duas coisas. A primeira são as skills: você configura habilidades e preferências de prompt para tarefas repetitivas, manter o mesmo tom e voz, ou exigir que as respostas sigam uma estrutura. A segunda são os apps conectados: o Gemini pode se ligar a mais de 40 serviços externos e a apps do Google, e você decide quais conectar.</p>

    <p>A novidade, portanto, é menos uma função nova e mais uma arrumação. Antes, a personalização ficava espalhada entre Gems, configurações e telas de extensões. Agora o caminho é um só: abrir o menu lateral esquerdo do Gemini e tocar em Personalizar. Dali você adiciona skills, explora apps e gerencia as conexões.</p>

    <p>A mudança conversa com outra que está em andamento: os Gems estão sendo trocados por skills. A <a href="https://support.google.com/gemini/answer/15146780" target="_blank" rel="noopener noreferrer">página de ajuda do Gemini sobre Gems</a> avisa que, a partir de novembro de 2026, os Gems deixam de existir em contas pessoais e passam automaticamente a skills. O detalhe do calendário está no guia <a href="/artigos/gemini-gems-viram-skills-o-que-muda-e-como-migrar">Gems viram skills no Gemini</a>.</p>

    <h2>Quem recebe e quando</h2>

    <p>O Google afirma que o menu está disponível para todos os clientes do Google Workspace, assinantes individuais do Workspace e usuários de contas pessoais do Google. A liberação cobre a web, o celular e o app do Gemini para desktop, no Windows e no macOS. Quem usa o aplicativo no computador pode ler o guia do <a href="/artigos/app-do-gemini-para-windows-como-baixar-atalho-e-limites">app do Gemini para Windows</a>.</p>

    <p>Sobre o calendário, domínios de Liberação Rápida e de Liberação Programada começaram a receber o menu de forma gradual em 13 de outubro de 2026, e a visibilidade pode levar até 15 dias. Resumindo em uma tabela:</p>

    <table>
      <thead>
        <tr><th>Pergunta</th><th>Resposta segundo o Google</th></tr>
      </thead>
      <tbody>
        <tr><td>Onde fica?</td><td>Menu lateral esquerdo do Gemini, opção Personalizar</td></tr>
        <tr><td>Quem tem?</td><td>Clientes do Workspace, assinantes individuais e contas pessoais</td></tr>
        <tr><td>Onde funciona?</td><td>Web, celular e app para desktop (Windows e macOS)</td></tr>
        <tr><td>Início da liberação</td><td>13 de outubro de 2026, com até 15 dias para aparecer</td></tr>
        <tr><td>Preço e limites</td><td>A página não informa preço nem limites por plano</td></tr>
      </tbody>
    </table>

    <p>Se o menu não aparece, não há o que forçar: atualize o app, confira se está logado na conta certa e tente de novo nos próximos dias. Quem decidiu a conta mais adequada ao uso pode comparar planos no texto sobre <a href="/artigos/google-ai-plus-pro-ou-ultra-qual-plano-do-gemini-escolher">Google AI Plus, Pro ou Ultra</a>.</p>

    <h2>Skills: como usar para padronizar respostas</h2>

    <p>Uma skill funciona como uma instrução reutilizável. Em vez de repetir toda conversa "responda em tópicos, tom informal, até 100 palavras", você cria a skill uma vez e a chama quando precisa. O Google cita três usos: automatizar tarefas repetitivas, manter tom e voz consistentes e impor uma estrutura de resposta.</p>

    <p>Um bom modelo de skill é curto, tem gatilho claro e formato de saída. Exemplo para quem atende clientes:</p>

    <pre><code>Nome: resposta-curta-de-cliente
Quando usar: quando eu colar uma mensagem de cliente.
Instruções: responda em português do Brasil, em até 5 linhas, tom educado e direto. Comece reconhecendo o pedido, dê o próximo passo e termine com uma pergunta de confirmação. Se faltar informação, pergunte antes. Não invente prazo, preço nem política da empresa.</code></pre>

    <p>Outro exemplo, para estudo:</p>

    <pre><code>Nome: resumo-de-estudo
Quando usar: quando eu colar um texto de aula.
Instruções: resuma em 5 tópicos, liste 3 termos difíceis com definição simples e faça 3 perguntas de revisão sem dar a resposta. Se o texto não tiver informação suficiente, diga o que falta.</code></pre>

    <p>Para escrever instruções melhores, o guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">prompt engineering</a> traz a base. E se você quer um assistente que guarde mais contexto sobre você, veja a diferença para a <a href="/artigos/memoria-longa-em-ia-assistente-que-lembra-de-voce">memória longa em IA</a>.</p>

    <h2>Apps conectados: o que dá para fazer e como controlar</h2>

    <p>Com os apps conectados, o Gemini pode consultar e agir em serviços que você autoriza. O Google diz que você escolhe quais apps conectar e pode auditar permissões ou desconectar quando quiser. Isso é importante: cada conexão amplia o que o assistente enxerga. Para ver exemplos de uso com Agenda, Maps e YouTube, leia <a href="/artigos/apps-conectados-do-gemini-agenda-maps-e-youtube-como-usar">apps conectados do Gemini</a>.</p>

    <p>Boas práticas antes de conectar qualquer app:</p>

    <ul class="checklist">
      <li>Conecte só o que você vai usar nesta semana, e desconecte o resto.</li>
      <li>Leia as permissões pedidas: leitura, escrita, envio de mensagens?</li>
      <li>Em conta de trabalho, confirme com o responsável de TI antes de conectar serviços de terceiros.</li>
      <li>Revise a lista de apps conectados uma vez por mês.</li>
      <li>Evite conectar serviços com dados sensíveis, como saúde e finanças, sem entender o tratamento.</li>
    </ul>

    <p>Dois cuidados extras: conteúdo de páginas e e-mails pode tentar manipular um assistente com acesso a apps, tema do texto sobre <a href="/artigos/prompt-injection-risco-de-ia-que-le-paginas-e-emails">prompt injection</a>, e o protocolo que liga assistentes a ferramentas é explicado em <a href="/artigos/mcp-model-context-protocol-o-que-e-e-como-conecta-agentes-de-ia">MCP</a>. Quem se preocupa com histórico pode ver como <a href="/artigos/apagar-historico-do-gemini-e-usar-chat-temporario">apagar o histórico do Gemini e usar o chat temporário</a>.</p>

    <h2>E no Brasil? Disponibilidade dos apps</h2>

    <p>O anúncio faz uma ressalva que pesa para o leitor brasileiro: a maioria dos apps conectados está disponível em inglês nos Estados Unidos. Alguns apps chegam a outras regiões de língua inglesa, ao Brasil e à Índia. O Google não lista, na página, quais apps valem para cada país. Portanto, o menu pode aparecer na sua conta, mas parte do catálogo pode não estar liberada em português do Brasil.</p>

    <p>A orientação prática: abra a seção de apps, veja o que aparece para você e não conte com um serviço específico antes de testar. Se a sua rotina depende de um app em particular, confirme a disponibilidade antes de montar um fluxo de trabalho em torno dele. Para escolher a ferramenta de IA com base no que de fato funciona para o seu caso, o comparativo <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude e Gemini</a> ajuda, e o assistente <a href="/artigos/agente-de-ia-pessoal-gemini-spark-o-que-delegar-e-o-que-nao">Gemini Spark</a> mostra o que delegar a um agente.</p>

    <h2>Controles para administradores e equipes</h2>

    <p>Em contas de trabalho, o administrador gerencia os apps conectados e integrações de terceiros no Console de administração, em Apps, Serviços adicionais do Google e Gemini. O Google remete a artigos de ajuda sobre controlar o acesso do app do Gemini aos serviços do Workspace e sobre gerenciar a lista de apps permitidos do Marketplace.</p>

    <p>Para equipes pequenas, vale tratar o menu como parte da governança de IA: definir quais apps podem ser conectados, quem cria skills compartilhadas e o que nunca deve ir para o assistente. O modelo da <a href="/artigos/politica-de-uso-de-ia-na-pequena-empresa-regras-simples-para-a-equipe">política de uso de IA na pequena empresa</a> serve de ponto de partida, e o recurso de colaboração do <a href="/artigos/ask-gemini-no-google-chat-o-que-faz-quem-tem-e-limites">Ask Gemini no Google Chat</a> mostra outro lugar onde o assistente entra no trabalho em grupo. Antes de adotar qualquer integração, aplique o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist de segurança para ferramentas de IA</a>.</p>

    <h2>Erros comuns ao personalizar o Gemini</h2>

    <ul>
      <li><strong>Conectar tudo de uma vez:</strong> cada app a mais amplia o acesso do assistente.</li>
      <li><strong>Skill com instrução vaga:</strong> "seja útil" não muda nada; defina tom, tamanho e formato.</li>
      <li><strong>Misturar tarefas:</strong> uma skill por tarefa fica mais fácil de ajustar.</li>
      <li><strong>Esquecer de revisar:</strong> abra a lista de apps e skills uma vez por mês.</li>
      <li><strong>Colocar dado sensível nas instruções:</strong> senhas e dados de clientes não pertencem a uma skill.</li>
    </ul>

    <p>O próximo passo é simples: abra o menu lateral do Gemini, veja se a opção Personalizar já apareceu e crie uma única skill para a tarefa que você mais repete. Conecte um app só depois de ler as permissões. Para acompanhar outras novidades, explore a categoria <a href="/categoria/ferramentas">Ferramentas</a>.</p>
  `,
  faq: [
    {
      question: "Onde fica o menu Personalizar do Gemini?",
      answer:
        "Segundo o Google, no menu de navegação à esquerda do Gemini, na web, no celular e no app para desktop. Ali você adiciona skills, explora apps e gerencia serviços conectados. Se a opção não aparece, a liberação ainda não chegou à sua conta, e pode levar até 15 dias.",
    },
    {
      question: "O menu Personalizar é gratuito?",
      answer:
        "O anúncio do Google não informa preço, limites de uso nem diferenças entre planos. Ele diz apenas que o menu é liberado para contas pessoais, assinantes individuais do Workspace e clientes do Workspace. Verifique no seu app se alguma função específica depende de assinatura.",
    },
    {
      question: "Os apps conectados funcionam no Brasil?",
      answer:
        "Em parte. O Google informa que a maioria dos apps está disponível em inglês nos Estados Unidos, e que alguns chegam a outras regiões de língua inglesa, ao Brasil e à Índia. A página não lista quais. Abra a seção de apps na sua conta para ver o que está liberado para você.",
    },
    {
      question: "Como desconectar um app do Gemini?",
      answer:
        "O Google afirma que você pode auditar permissões ou desconectar apps a qualquer momento pelo menu Personalizar. Em contas de trabalho, o administrador também gerencia integrações no Console de administração. Faça uma revisão mensal e desconecte o que não usa mais.",
    },
    {
      question: "O que acontece com meus Gems?",
      answer:
        "A página de ajuda do Gemini informa que, a partir de novembro de 2026, os Gems deixam de existir em contas pessoais e são convertidos automaticamente em skills. Contas de trabalho têm cronograma próprio. Copie suas instruções para um documento antes, por segurança.",
    },
  ],
};
