import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "gemini-entre-apps-do-workspace-criar-pesquisar-e-agendar-sem-trocar-de-app-quem-tem",
  title: "Gemini entre apps do Workspace: criar, pesquisar e agendar",
  seoTitle: "Gemini entre apps do Workspace: o que faz e quem tem",
  excerpt:
    "Gemini entre apps do Workspace cria documentos, pesquisa pastas, rascunha e-mails e agenda reuniões sem trocar de app. Veja quem tem, idioma e limites.",
  metaDescription:
    "Gemini entre apps do Google Workspace: o que faz em Gmail, Docs, Slides, Chat e Drive, quais planos têm acesso, o idioma do lançamento e como revisar antes de enviar.",
  category: "ferramentas",
  date: "2026-10-28",
  readTime: 7,
  imageQuery: "laptop multiple windows office collaboration desk",
  seed: 874,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Desde setembro de 2026, o Gemini do Workspace pode agir como orquestrador: cria Docs, Sheets e Slides em segundo plano, pesquisa pastas inteiras, rascunha e-mails, marca reuniões e cria tarefas, a partir do painel de um único app.",
    "Segundo o Google, o lançamento começou em 02/09/2026, é só em inglês por enquanto e cobre planos Business e Enterprise Standard e Plus, além de Google AI Pro (sem agendamento) e Google AI Ultra.",
    "E-mails e reuniões passam por um cartão de prévia que você revisa e confirma antes de qualquer envio, e o Gemini só enxerga o que a sua conta já tem permissão para abrir.",
  ],
  content: `
    <p>O Gemini entre apps do Google Workspace é uma função em que você pede uma tarefa no painel do Gemini de um app, como Gmail, Docs, Slides, Chat ou Drive, e ele cumpre o pedido em outros apps por conta própria: cria o documento, pesquisa as pastas, rascunha o e-mail, procura horário na agenda e registra a tarefa. O Google anunciou a novidade em 09/09/2026 e ela chega aos poucos.</p>

    <p>Na prática, tira de cena o vaivém de abas que consome parte do dia de escritório. Mas há duas pegadinhas: no lançamento a função só funciona com a conta em inglês, e nem todo plano inclui tudo. Este guia mostra o que o Google informou, quem tem acesso, exemplos de pedidos, como revisar o resultado e quando não vale a pena usar.</p>

    <h2>O que é o Gemini entre apps do Workspace?</h2>

    <p>De acordo com o <a href="https://workspaceupdates.googleblog.com/2026/09/create-content-schedule-events-and-coordinate-tasks-across-Workspace-regardless-of-what-app-you-are-in.html" target="_blank" rel="noopener noreferrer">anúncio do Google Workspace Updates</a>, publicado em 09/09/2026, o Gemini passa a funcionar como orquestrador entre os apps. Ele usa a camada chamada Workspace Intelligence e, segundo o Google, a mesma tecnologia vai alimentar os fluxos montados no Workspace Studio. Em vez de você abrir o Docs, depois o Sheets e depois a Agenda, descreve o objetivo uma vez e o Gemini faz as etapas.</p>

    <p>Os apps citados são Gmail, Docs e Slides (no painel lateral do Gemini), Chat (pelo Ask Gemini in Chat) e Drive (pelo Ask Gemini in Drive). Se você quer entender a peça do Chat em detalhe, o guia sobre o <a href="/artigos/ask-gemini-no-google-chat-o-que-faz-quem-tem-e-limites">Ask Gemini no Google Chat</a> mostra atalho, requisitos e o que mudou no painel lateral. Aqui o foco é o que acontece quando o pedido atravessa mais de um app.</p>

    <h2>O que ele faz na prática: cinco tipos de tarefa</h2>

    <p>O Google separa a função em cinco grupos de tarefa. A tabela resume cada um com um exemplo do dia a dia de um pequeno negócio.</p>

    <table>
      <thead>
        <tr><th>Tarefa</th><th>O que o Google descreve</th><th>Exemplo do dia a dia</th></tr>
      </thead>
      <tbody>
        <tr><td>Criar conteúdo</td><td>Gera Docs formatados, planilhas estruturadas ou apresentações em segundo plano, salvos no Drive</td><td>Planilha de acompanhamento dos pedidos da semana</td></tr>
        <tr><td>Pesquisa profunda</td><td>Resume pastas grandes e conversas longas em um relatório com atribuição de fontes</td><td>Comparar o rascunho do blog com materiais antigos da pasta de marketing</td></tr>
        <tr><td>Rascunhar e enviar e-mails</td><td>Escreve a partir de notas de reunião ou do documento aberto e deixa como rascunho no Gmail ou envia do app atual</td><td>Resposta ao cliente com base na proposta aberta no Docs</td></tr>
        <tr><td>Agendar reuniões</td><td>Procura horários livres, marca e resolve conflitos sem abrir a Agenda</td><td>Reunião de 30 minutos com a contadora na quinta</td></tr>
        <tr><td>Gerenciar tarefas</td><td>Cria lembretes e listas no Google Tarefas</td><td>Lembrete de cobrança criado a partir de uma apresentação</td></tr>
      </tbody>
    </table>

    <p>Repare que a função cria arquivos e escreve e-mails, mas a decisão continua sendo sua. O texto gerado é um primeiro rascunho, e o Docs, a planilha e o e-mail precisam de leitura antes de circular.</p>

    <h2>Quem tem acesso e quando</h2>

    <p>O Google informa que o lançamento gradual começou em 02/09/2026 para domínios nos canais Rapid Release e Scheduled Release, e que a função pode levar até 15 dias para aparecer. A lista de planos mostrada no anúncio é esta:</p>

    <ul>
      <li><strong>Business:</strong> Standard e Plus.</li>
      <li><strong>Enterprise:</strong> Standard e Plus.</li>
      <li><strong>Consumidor:</strong> Google AI Pro (sem o agendamento) e Google AI Ultra.</li>
      <li><strong>Frontline Plus:</strong> somente agendamento.</li>
      <li><strong>Educação:</strong> complemento Google AI Pro for Education.</li>
      <li><strong>Outros:</strong> complemento AI Expanded Access.</li>
    </ul>

    <p>O idioma é a maior restrição: o anúncio diz que o lançamento é somente em inglês e que mais idiomas estão previstos. Quem usa a conta em português deve testar antes de prometer o recurso para a equipe. Se a dúvida é qual plano pessoal do Gemini escolher, o comparativo de <a href="/artigos/google-ai-plus-pro-ou-ultra-qual-plano-do-gemini-escolher">Google AI Plus, Pro e Ultra</a> ajuda. O Google também avisa que recursos avançados de IA têm limites de uso, descritos na documentação do AI Expanded Access, então o volume diário não é ilimitado.</p>

    <h2>Como usar: passo a passo</h2>

    <ol>
      <li>Abra um app compatível, como Gmail, Docs ou Slides, ou o Ask Gemini no Chat ou no Drive.</li>
      <li>Abra o painel do Gemini.</li>
      <li>Escreva o pedido com objetivo, material de base e resultado esperado.</li>
      <li>Para e-mail ou reunião, leia o cartão de prévia, edite o que for preciso e confirme.</li>
      <li>Abra o arquivo criado no Drive e revise antes de compartilhar.</li>
    </ol>

    <p>Pedidos melhores seguem o que o guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">prompt engineering</a> ensina: contexto, tarefa e formato. Três modelos para adaptar (em inglês, por enquanto, quando a sua conta exigir):</p>

    <pre><code>Create a one-page Google Doc summarizing the proposal in this document for a client meeting: scope, timeline, three risks and next steps. Save it to my Drive.</code></pre>

    <pre><code>Compare the draft in this doc with the files in the Marketing folder and list what repeats, what contradicts and what is missing. Cite the files you used.</code></pre>

    <pre><code>Find a 30-minute slot this week for me and Ana to review the delivery schedule and create the invite as a preview for me to confirm.</code></pre>

    <h2>Segurança e controle: o que o Google garante e o que continua com você</h2>

    <p>O anúncio afirma três pontos de segurança. Os dados de clientes não são revisados por pessoas nem usados para treinar os modelos do Gemini. O Gemini respeita as permissões de cada usuário: se você não consegue abrir um documento, ele também não consegue. E, para ações com efeito externo, como enviar e-mail ou marcar reunião, aparece um cartão de prévia em que você revisa, edita e confirma antes de rodar.</p>

    <p>Isso não elimina o trabalho do dono do negócio. Pasta com permissão larga demais vira fonte de pesquisa, então vale revisar quem enxerga o quê no Drive. Quem administra o Workspace deve olhar o <a href="/artigos/menu-personalizar-do-gemini-skills-apps-e-controle-para-admins">menu Personalizar do Gemini</a>, as <a href="/artigos/instrucoes-personalizadas-do-gemini-no-workspace-onde-valem-e-como-gerenciar">instruções personalizadas</a> e o que o <a href="/artigos/google-vault-exporta-conversas-do-gemini-no-workspace-o-que-o-admin-ve">Google Vault exporta das conversas</a>. Para dados de clientes, siga o checklist de <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">LGPD para pequeno negócio</a>.</p>

    <h2>Exemplo: loja de bolos com três pessoas</h2>

    <p>Imagine uma confeitaria com Google Workspace Business Standard, conta em inglês e três pessoas na equipe. Na segunda de manhã, a dona abre o Docs com a proposta de um buffet de 80 convidados e pede um resumo de uma página, um e-mail de resposta para a cliente e uma reunião de 30 minutos na quinta. Em vez de abrir três apps, ela revisa o resumo, ajusta o preço no e-mail, confirma o cartão da reunião e pede um lembrete no Tarefas para cobrar o sinal de 30% em 3 dias.</p>

    <p>O ganho está em encurtar a montagem, não em decidir pelo negócio. O preço, o prazo e a promessa ao cliente continuam sendo conferidos por ela. Se o time quer padronizar esse tipo de rotina, o <a href="/artigos/workspace-studio-condicoes-aninhadas-buscar-documento-e-ignorar-respostas-no-gmail">Workspace Studio</a> e o serviço de <a href="/artigos/agentes-no-workspace-studio-servico-de-automacao-para-pequenas-empresas">automação com agentes no Workspace Studio</a> mostram como transformar o pedido repetido em fluxo.</p>

    <h2>Erros comuns e quando não usar</h2>

    <ul class="checklist">
      <li>Enviar e-mail sem ler o cartão de prévia, só porque o texto parece bom.</li>
      <li>Pedir pesquisa em pasta com arquivos antigos e tratar o relatório como verdade, sem abrir as fontes citadas.</li>
      <li>Prometer a função para a equipe antes de testar com a conta no idioma exigido.</li>
      <li>Usar para decisão jurídica, financeira ou de contratação sem revisão humana.</li>
      <li>Esquecer que planos como o Google AI Pro não incluem o agendamento.</li>
    </ul>

    <p>Também não faz sentido usar quando a tarefa é pequena e você já está no app certo: escrever um parágrafo no Docs é mais rápido sem pedir um fluxo inteiro. Para tarefas puramente de pessoa, o <a href="/artigos/gemini-no-gmail-escrever-e-responder-emails-mais-rapido">Gemini no Gmail</a> e o <a href="/artigos/google-tarefas-e-lembretes-no-celular-organizar-a-semana-com-ia-passo-a-passo">Google Tarefas</a> bastam.</p>

    <div class="callout-box callout-tip"><span class="callout-label">Teste antes de adotar</span><p>Escolha uma rotina de baixo risco, como resumo semanal de uma pasta, rode por duas semanas e compare o tempo gasto com o método atual. Só depois leve para tarefas com cliente. Para montar apresentações com apoio da IA, veja também o guia de <a href="/artigos/como-criar-apresentacoes-e-slides-profissionais-com-ia">slides profissionais com IA</a>.</p></div>

    <h2>Próximos passos</h2>

    <p>Verifique no seu painel do Gemini se a função apareceu, leia o anúncio do Google com o seu plano em mente e defina uma regra simples para a equipe: a IA monta, a pessoa confere e só então envia. Para fixar regras de uso, o texto sobre <a href="/artigos/politica-de-uso-de-ia-na-pequena-empresa-regras-simples-para-a-equipe">política de uso de IA na pequena empresa</a> traz um modelo, e a página de <a href="/categoria/ferramentas">ferramentas</a> reúne as novidades mais recentes do Gemini.</p>
  `,
  faq: [
    {
      question: "O Gemini entre apps do Workspace funciona em português?",
      answer:
        "Segundo o Google, o lançamento de setembro de 2026 é somente em inglês, com mais idiomas previstos. Se a sua conta está em português, o recurso pode não aparecer ainda. Teste com uma conta configurada em inglês antes de prometer a função para a equipe e acompanhe o Workspace Updates para novos idiomas.",
    },
    {
      question: "Quais planos têm o Gemini entre apps?",
      answer:
        "O anúncio cita Business e Enterprise (Standard e Plus), Google AI Pro, com o agendamento fora, e Google AI Ultra. Também entram Frontline Plus, só para agendamento, o complemento Google AI Pro for Education e o AI Expanded Access. A visibilidade pode levar até 15 dias após o lançamento no domínio.",
    },
    {
      question: "O Gemini pode enviar e-mail e marcar reunião sozinho?",
      answer:
        "Ele prepara, mas o Google diz que ações com efeito externo, como enviar e-mail ou agendar reunião, mostram um cartão de prévia interativo. Você revisa, edita e confirma antes de rodar. Mesmo assim, leia destinatário, data e texto, porque o erro de um rascunho enviado sem leitura é seu.",
    },
    {
      question: "O Gemini vê arquivos que eu não posso abrir?",
      answer:
        "Não. O Google afirma que o Gemini respeita as permissões e as políticas de compartilhamento de cada usuário: se você não acessa um documento, ele também não. O ponto de atenção é o contrário, pastas com acesso largo demais passam a ser fonte de pesquisa para quem tem permissão.",
    },
    {
      question: "Os dados da minha empresa treinam o Gemini?",
      answer:
        "O anúncio diz que os dados de clientes não são revisados por pessoas nem usados para treinar os modelos do Gemini. Mesmo assim, empresas com dados sensíveis devem alinhar a regra com o administrador do Workspace, conferir as configurações da conta e seguir a política interna de uso de IA.",
    },
  ],
};
