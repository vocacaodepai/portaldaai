import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "workspace-studio-condicoes-aninhadas-buscar-documento-e-ignorar-respostas-no-gmail",
  title: "Workspace Studio: condições aninhadas e busca de documento",
  seoTitle: "Workspace Studio: condições aninhadas e busca de doc",
  excerpt:
    "Veja as novidades do Workspace Studio: condições aninhadas, ignorar respostas no Gmail, busca de documento no Drive e saídas do Meet. Quem tem e quais os limites.",
  metaDescription:
    "Workspace Studio ganha condições aninhadas, gatilho de Gmail que ignora respostas, busca de documento no Drive e mais dados do Meet. Veja quem tem e como montar um fluxo.",
  category: "ferramentas",
  date: "2026-10-26",
  readTime: 7,
  imageQuery: "flowchart automation laptop office workflow",
  seed: 822,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O Workspace Studio recebeu quatro novidades: condições aninhadas para ramificar o fluxo, ignorar respostas no gatilho do Gmail, mais dados do Meet nas saídas e uma etapa para buscar documento no Drive.",
    "Segundo o Google, as novidades estão disponíveis para clientes do Workspace e assinantes do Workspace Individual com acesso ao Studio, com liberação gradual a partir de 13 de outubro de 2026 e até 15 dias para aparecer.",
    "Administradores controlam quais etapas existem no Console do Admin, e quem monta fluxos que leem e-mails deve revisar cada etapa de envio antes de ligar o fluxo.",
  ],
  content: `
    <p>O Workspace Studio, ferramenta do Google para montar fluxos automáticos entre Gmail, Drive, Chat, Agenda e Planilhas, ganhou condições aninhadas, a opção de ignorar respostas no gatilho de e-mail, mais dados do Meet e uma etapa para buscar documento no Drive. Em termos práticos, o fluxo agora decide melhor e dispara menos à toa.</p>

    <p>O anúncio saiu no blog Workspace Updates, do Google, e começou a ser liberado em 13 de outubro de 2026. Este texto resume cada novidade, mostra um desenho de fluxo para pequena empresa, explica quem pode usar e aponta os limites que a documentação oficial deixa claros. Nada aqui é teste pessoal: é leitura do anúncio e das páginas de ajuda, consultadas em 26/10/2026.</p>

    <h2>O que mudou no Workspace Studio</h2>

    <p>De acordo com o <a href="https://workspaceupdates.googleblog.com/2026/10/new-logic-and-search-steps-in-workspace-Studio-help-expand-automation-capabilities.html" target="_blank" rel="noopener noreferrer">anúncio do Google</a>, o pacote de outubro trouxe quatro itens:</p>

    <ul>
      <li><strong>Condições aninhadas:</strong> permitem criar ramificações dentro do fluxo, com caminhos de decisão em camadas.</li>
      <li><strong>Ignorar respostas no Gmail:</strong> o gatilho de e-mail pode desconsiderar respostas de uma conversa, para que o fluxo rode só nos e-mails principais que chegam.</li>
      <li><strong>Saídas do Meet:</strong> a etapa do Meet passa a trazer mais detalhes do evento da Agenda, como a lista completa de convidados, e ganha modelos para rascunhos de e-mail de acompanhamento após a reunião.</li>
      <li><strong>Buscar um documento:</strong> uma etapa do Drive que procura arquivos de documento por parâmetros de busca.</li>
    </ul>

    <p>O Google informa que as novidades vêm ligadas por padrão para os usuários e aparecem no construtor de fluxos. Se você nunca abriu a ferramenta, o texto sobre <a href="/artigos/agentes-no-workspace-studio-servico-de-automacao-para-pequenas-empresas">agentes no Workspace Studio</a> explica a base e como a automação pode virar serviço.</p>

    <h2>Quem tem e quando chega</h2>

    <p>Segundo o anúncio, as novidades estão disponíveis para todos os clientes do Google Workspace e para assinantes do Workspace Individual com acesso ao Studio. O texto não detalha disponibilidade por edição, então vale conferir no seu painel.</p>

    <p>A liberação é gradual para domínios de Lançamento Rápido e de Lançamento Programado, começando em 13 de outubro de 2026, e a visibilidade pode levar até 15 dias. Em português claro: se você ainda não vê a etapa, pode ser só fila de liberação. Para entender os dois tipos de domínio, o Google mantém uma <a href="https://support.google.com/a/answer/172177" target="_blank" rel="noopener noreferrer">página sobre lançamento rápido e programado</a>.</p>

    <p>Para quem administra a conta, o anúncio diz que o controle herda as políticas do Studio por domínio e unidade organizacional. Isso se junta ao que o texto sobre <a href="/artigos/menu-personalizar-do-gemini-skills-apps-e-controle-para-admins">menu Personalizar do Gemini</a> já mostra: no Workspace, quase tudo novo de IA vem com chave de administrador.</p>

    <h2>Condições aninhadas: como a decisão fica em camadas</h2>

    <p>O guia oficial de <a href="https://support.google.com/workspace-studio/table/17176961" target="_blank" rel="noopener noreferrer">gatilhos e etapas do Studio</a> descreve a etapa "Check if" como a que só deixa o fluxo continuar quando regras são atendidas, usando operadores como "contém" e combinações com E ou OU. As regras podem ser aninhadas para criar ramificações. Há ainda a etapa "Decide", que usa o Gemini para devolver verdadeiro ou falso e pode alimentar um "Check if".</p>

    <p>Pense em duas perguntas em sequência: "o e-mail pede orçamento?" e, só se sim, "veio com anexo?". Cada resposta leva a um caminho diferente. Antes, era comum espalhar vários fluxos pequenos para cobrir cada caso. Com a ramificação, um fluxo só organiza a lógica, o que facilita a manutenção.</p>

    <p>O guia também lista "Filter a list" e "Repeat for each", etapas para filtrar uma lista e processar cada item separadamente. Elas ajudam em tarefas como tratar cada convidado de uma reunião, algo que as novas saídas do Meet tornam mais útil.</p>

    <h2>Gmail: ignorar respostas e evitar disparo repetido</h2>

    <p>O gatilho "When I get an email" roda quando chega um e-mail novo, para todos ou para os que atendem a filtros. O guia do Studio informa que ele ignora, por padrão, e-mails criados por outros fluxos, para evitar laços, e que isso muda marcando a caixa "Include messages sent by flows". Entre as condições disponíveis estão pular respostas de conversa, remetente, palavras, assunto, anexos, tamanho e marcador.</p>

    <p>O guia também traz limites: não dá para filtrar por prefixo de marcador nem por data, e só os marcadores padrão do Gmail funcionam. Se o seu fluxo depende de um marcador personalizado, teste antes de apostar nele.</p>

    <p>Ignorar respostas evita um problema real: o cliente responde cinco vezes na mesma conversa, e o fluxo dispara cinco rascunhos. Para quem já usa as ferramentas de inbox, o texto sobre <a href="/artigos/gmail-ai-inbox-e-gmail-live-quem-tem-o-que-fazem-e-alternativas">Gmail AI Inbox e Gmail Live</a> mostra outro jeito de lidar com a caixa de entrada, sem montar fluxo.</p>

    <h2>Buscar um documento no Drive: o que a ajuda diz</h2>

    <p>O anúncio apresenta uma etapa do Drive que procura documentos por parâmetros. No guia de etapas, a que aparece com nome parecido é "Search for a doc", descrita como uma busca por Google Docs de sua propriedade, pelo título, e, se vários resultados casarem, ela escolhe o mais recentemente modificado.</p>

    <p>Isso importa para o desenho do fluxo. Dê nomes consistentes aos seus modelos, como "Proposta - modelo atual", e evite ter dois documentos com títulos parecidos. Se a busca pega o mais recente, uma cópia de teste editada por engano pode virar o documento escolhido. A <a href="https://knowledge.workspace.google.com/admin/studio/allow-or-block-ws-service-specific-steps" target="_blank" rel="noopener noreferrer">página de administração do Studio</a> também lembra que, para um serviço funcionar em fluxo, o usuário precisa ter acesso a ele.</p>

    <h2>Um fluxo de exemplo para uma pequena empresa</h2>

    <p>Este é um desenho possível, pensado a partir das etapas descritas, e não um fluxo testado. A empresa fictícia é um escritório de design com 3 pessoas que recebe pedidos de orçamento por e-mail.</p>

    <ol>
      <li>Gatilho: "When I get an email", com a condição de pular respostas de conversa e filtro por palavras como "orçamento".</li>
      <li>Etapa "Decide": o Gemini responde se o e-mail é mesmo um pedido de orçamento.</li>
      <li>Etapa "Check if": se sim, e se há menção a prazo, segue o caminho de urgência; senão, o caminho padrão.</li>
      <li>Etapa de busca: localizar o modelo "Proposta - modelo atual" no Drive.</li>
      <li>Etapa de Gmail: criar um rascunho de resposta com o link do modelo, para uma pessoa revisar.</li>
    </ol>

    <p>Repare que o final é um rascunho, não um envio. Resposta automática a cliente sem revisão é o erro que mais assusta quem começa. Se a ideia for vender esse tipo de configuração, o <a href="/artigos/retainer-de-automacao-mensalidade-suporte-e-contrato-para-freelancer">retainer de automação</a> mostra como organizar o contrato de suporte.</p>

    <h2>Limites, cuidados e o que ainda não está claro</h2>

    <p>Alguns pontos pedem atenção:</p>

    <ul>
      <li>O anúncio não separa disponibilidade por edição. Confirme no seu painel antes de prometer algo a um cliente.</li>
      <li>A etapa de busca descrita no guia trabalha com título e com documentos de sua propriedade. Quem espera busca no conteúdo do arquivo deve testar antes.</li>
      <li>Os marcadores do Gmail têm restrições, e fluxos criados por outros fluxos são ignorados por padrão.</li>
      <li>O guia avisa que a etapa "Ask a Gem" está sendo descontinuada e deve ser trocada por "Ask Gemini" antes de março de 2027. O texto sobre <a href="/artigos/gemini-gems-viram-skills-o-que-muda-e-como-migrar">Gems que viram skills</a> explica a mudança.</li>
      <li>Fluxo que lê e-mail de cliente lida com dado pessoal. A <a href="/artigos/politica-de-uso-de-ia-na-pequena-empresa-regras-simples-para-a-equipe">política de uso de IA</a> da equipe deve dizer quem pode criar e revisar fluxos.</li>
    </ul>

    <h2>Studio ou outra ferramenta de automação?</h2>

    <p>Se o seu processo vive dentro do Workspace, o Studio tem a vantagem de estar na mesma conta, sem conectar chaves e sem pagar outra assinatura à parte, sujeito ao seu plano. Se o processo cruza ferramentas fora do Google, o comparativo entre <a href="/artigos/make-ou-zapier-qual-automacao-com-ia-vale-mais-a-pena">Make e Zapier</a> pode servir melhor, e para lógica mais personalizada existe o <a href="/artigos/google-apps-script-com-ia-servico-de-automacao-para-sheets-e-gmail">Apps Script com IA</a>.</p>

    <p>As novidades de reunião conversam entre si: os <a href="/artigos/proximos-passos-no-google-meet-email-de-acompanhamento-e-tarefas-depois-da-reuniao">próximos passos no Google Meet</a> criam rascunho de e-mail depois da reunião, e as saídas novas do Meet no Studio dão mais matéria-prima para fluxos próprios.</p>

    <h2>Vale a pena testar agora?</h2>

    <p>Vale, se você já tem um processo repetitivo no Gmail ou no Drive e uma pessoa para revisar o resultado. Comece com um fluxo pequeno, em modo de rascunho, e some o tempo economizado durante duas semanas antes de ampliar. Se ainda não vê as etapas novas, espere o fim da janela de 15 dias e confira com o administrador.</p>

    <p>Para acompanhar novidades como esta, siga a <a href="/categoria/ferramentas">categoria Ferramentas</a> e leia o guia sobre <a href="/artigos/instrucoes-personalizadas-do-gemini-no-workspace-onde-valem-e-como-gerenciar">instruções personalizadas do Gemini no Workspace</a>, que complementa o controle do que a IA faz na sua conta.</p>
  `,
  faq: [
    {
      question: "O que é o Workspace Studio?",
      answer:
        "É a ferramenta do Google para montar fluxos automáticos com gatilhos e etapas em apps como Gmail, Drive, Chat, Agenda e Planilhas. Você define o que dispara o fluxo, como a chegada de um e-mail, e o que acontece depois, com ajuda do Gemini em algumas etapas.",
    },
    {
      question: "O que são condições aninhadas no Workspace Studio?",
      answer:
        "São regras dentro de regras, que criam ramificações no fluxo. O guia do Google descreve a etapa Check if, que só deixa o fluxo continuar quando as condições são atendidas, com operadores como contém e combinações com E ou OU, que podem ser aninhadas.",
    },
    {
      question: "Como evitar que o fluxo dispare a cada resposta no Gmail?",
      answer:
        "Use a opção de ignorar respostas de conversa no gatilho de e-mail, anunciada em outubro de 2026, para rodar só nos e-mails principais. Por padrão, o gatilho também ignora e-mails criados por outros fluxos, a menos que você marque a caixa que os inclui.",
    },
    {
      question: "Quem pode usar as novidades do Workspace Studio?",
      answer:
        "Segundo o anúncio, clientes do Google Workspace e assinantes do Workspace Individual com acesso ao Studio, com liberação gradual desde 13 de outubro de 2026 e até 15 dias para aparecer. O texto não detalha edições, então confirme no seu painel.",
    },
    {
      question: "O administrador pode bloquear etapas do Studio?",
      answer:
        "Sim. No Console do Admin, em Apps, Google Workspace e Workspace Studio, a opção Steps and features permite ligar ou desligar apps e etapas específicas. Se um serviço está desligado para o usuário, as etapas dele não funcionam nos fluxos.",
    },
  ],
};
