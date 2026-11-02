import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "claude-cowork-e-chat-viram-um-so-claude-o-que-muda-quem-tem-acesso-e-como-testar",
  title: "Claude Cowork e chat viram um só: o que muda e quem tem acesso",
  seoTitle: "Claude Cowork e chat unificados: o que muda e quem tem",
  excerpt:
    "O Claude juntou chat, Cowork e Design em uma só conversa. Veja o que muda, quais planos recebem primeiro, como as tarefas agendadas funcionam e como testar.",
  metaDescription:
    "O Claude juntou chat, Cowork e Design em uma só conversa. Veja o que muda, quais planos recebem primeiro, como funcionam as tarefas agendadas e como testar.",
  category: "ferramentas",
  date: "2026-11-02",
  readTime: 7,
  imageQuery: "person laptop planning documents desk",
  seed: 1088,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Desde 16/09/2026, o Claude trata chat, Cowork (tarefas maiores) e Design como uma só experiência: você pede, e o Claude decide o que a tarefa exige, sem precisar escolher um modo.",
    "O acesso começou pelos planos Pro, Max e Ultra, com Team e Free previstos para depois; o Enterprise passou a ter disponibilidade geral em 23/10/2026, segundo a própria Anthropic.",
    "Por padrão o Claude pergunta antes de agir, e você pode liberar mais autonomia depois de testar com uma tarefa pequena, como um relatório semanal ou uma apresentação de rascunho.",
  ],
  content: `
    <p>O Claude Cowork e o chat viraram uma só experiência: em vez de escolher entre conversar, delegar uma tarefa maior ou criar algo visual, você descreve o que precisa e o Claude decide como fazer. O anúncio da Anthropic é de 16/09/2026, e a empresa registrou em 23/10/2026 que o formato unificado está em disponibilidade geral para o plano Enterprise.</p>

    <p>Para quem usa o Claude no dia a dia, a mudança é menos de tela e mais de hábito: tarefas longas, documentos e apresentações passam a nascer dentro da mesma conversa. Este guia explica o que mudou, quais planos recebem primeiro, o que ainda está em beta e como testar sem correr risco. Quem quer comparar com a concorrência pode começar pelo <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">comparativo entre ChatGPT, Claude e Gemini</a>.</p>

    <h2>O que mudou: um só lugar para conversar e delegar</h2>

    <p>Antes, o Claude pedia uma decisão antes de começar: era uma pergunta rápida para o chat, um trabalho maior para o Cowork ou algo visual para o Claude Design. Segundo o <a href="https://claude.com/blog/cowork-is-now-claude" target="_blank" rel="noopener noreferrer">anúncio oficial da Anthropic</a>, as pessoas achavam essa escolha frustrante, e o que começava em um lugar não passava para o outro. A solução foi tirar a escolha: o Claude avalia o que a tarefa exige e traz os recursos de Cowork e de Design para qualquer conversa.</p>

    <p>Quem já usava o Cowork mantém chats, projetos, artefatos, conectores e skills, que continuam onde estavam. Quem usa mais o chat comum, segundo a empresa, não precisa mudar nada. Para entender a diferença entre uma IA que só responde e uma que executa, vale o texto sobre <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">agente de IA, chatbot ou automação</a>.</p>

    <h2>Tarefas longas e trabalho agendado</h2>

    <p>A página oficial descreve dois comportamentos que mudam a rotina. O primeiro é o das tarefas que continuam rodando: você entrega um trabalho maior, como um relatório com prazo ao meio-dia, e o Claude segue mesmo depois de você fechar o notebook. Se algo estiver pouco claro, ele pergunta, e o andamento pode ser conferido pelo celular.</p>

    <p>O segundo é o trabalho recorrente. A Anthropic dá como exemplo um relatório semanal que o Claude começa sozinho toda segunda-feira. Isso aproxima o produto de uma rotina automática, e por isso o <a href="/artigos/permissoes-de-agentes-de-ia-o-que-liberar-o-que-travar-e-quando-pedir-aprovacao">guia de permissões de agentes de IA</a> é leitura útil antes de liberar qualquer coisa. Para a versão do app no celular, há também o texto sobre <a href="/artigos/claude-app-celular-controlar-outros-apps">o Claude controlando outros apps</a>.</p>

    <h2>Docs, Slides e Design na mesma conversa</h2>

    <p>A unificação veio junto com três formatos de entrega. No Claude Docs, você e a IA escrevem um documento juntos dentro da conversa. No Claude Slides, o Claude monta a apresentação, você edita direto, apresenta de dentro do Claude ou baixa em PowerPoint ou PDF. O Claude Design passa a funcionar dentro das conversas, e o uso isolado continua como antes.</p>

    <p>Tudo que sai do Design, do Slides e do Docs tem um link compartilhável que abre no celular, e dá para deixar comentários para o Claude em um slide. A própria Anthropic classifica Docs, Slides e os downloads como beta nos planos pagos. Ou seja: bom para rascunho e para ganhar tempo, mas confira cada entrega antes de enviar a alguém.</p>

    <table>
      <thead>
        <tr><th>Recurso</th><th>O que a página oficial diz</th><th>Situação</th></tr>
      </thead>
      <tbody>
        <tr><td>Chat e tarefas no mesmo lugar</td><td>Claude decide o que a tarefa exige</td><td>Em liberação para Pro, Max e Ultra</td></tr>
        <tr><td>Tarefas agendadas</td><td>Trabalho recorrente, como relatório semanal</td><td>Citado no anúncio</td></tr>
        <tr><td>Claude Docs e Slides</td><td>Documento e apresentação com link compartilhável</td><td>Beta nos planos pagos</td></tr>
        <tr><td>Claude Design</td><td>Funciona dentro das conversas</td><td>Uso isolado segue como antes</td></tr>
      </tbody>
    </table>

    <h2>Quem tem acesso e quando</h2>

    <p>A liberação começou pelos planos Pro, Max e Ultra, no app para web, desktop e celular, ao longo de algumas semanas. Segundo o anúncio, Team e Free vêm "em breve", sem data. Para o Enterprise, administradores recebem aviso com pelo menos 30 dias de antecedência, e a atualização de 23/10/2026 informa que a experiência unificada já está em disponibilidade geral nesse plano, com a escolha de ativar Docs, Slides e Design ficando com o administrador.</p>

    <p>A <a href="https://support.claude.com/en/articles/12138966-release-notes" target="_blank" rel="noopener noreferrer">página de notas de versão do Claude</a> registra a mudança em 16/09/2026 e lista os lançamentos seguintes, como o Claude Haiku 5.5 e o Claude Duet. Sobre o modelo pequeno, veja <a href="/artigos/claude-haiku-5-5-quando-o-modelo-pequeno-basta-preco-e-limites">quando o Haiku 5.5 basta</a>; sobre o agente proativo, o texto do <a href="/artigos/claude-duet-o-que-faz-quem-tem-acesso-e-como-se-preparar-com-seguranca">Claude Duet</a>. Preço e limites variam por plano: consulte a página oficial antes de assinar, e o guia de <a href="/artigos/ia-gratis-ou-paga-o-que-vale-a-pena">IA grátis ou paga</a> ajuda a decidir.</p>

    <h2>Como o Claude pede confirmação</h2>

    <p>A regra de segurança é direta: por padrão, o Claude pergunta antes de agir. Você pode escolher deixá-lo seguir e avisar só quando algo exigir um olhar mais atento. A Anthropic resume com uma frase: a decisão final é sua.</p>

    <p>Na prática, comece no modo mais cauteloso e só relaxe quando a tarefa for repetitiva e o resultado fácil de conferir. O risco maior aparece quando o Claude lê conteúdo externo, como e-mails e páginas: um texto malicioso pode tentar dar ordens à IA. O artigo sobre <a href="/artigos/prompt-injection-risco-de-ia-que-le-paginas-e-emails">prompt injection</a> explica o problema, e o de <a href="/artigos/colar-dados-da-empresa-no-chatgpt-o-que-o-funcionario-pode-fazer">dados da empresa em chatbots</a> serve para quem trabalha com informação de cliente.</p>

    <h2>Exemplo: relatório semanal de uma loja pequena</h2>

    <p>Imagine, como cenário hipotético, uma loja de roupas que fatura cerca de R$ 38 mil por mês e fecha a semana na sexta. A dona exporta a planilha de vendas e quer um resumo toda segunda: o que vendeu mais, o que encalhou e três ações para a semana. Antes, ela abriria o chat, colaria dados e copiaria a resposta para um documento. Com a experiência unificada, ela pode descrever a rotina uma vez e pedir que o resumo vire um documento compartilhável.</p>

    <pre><code>Todo domingo à noite, leia a planilha de vendas da semana que eu anexar,
liste os 5 produtos mais vendidos e os 5 parados, calcule a variação em
relação à semana anterior e proponha 3 ações simples de promoção.
Entregue em um documento curto e pergunte se algum número parecer estranho.</code></pre>

    <p>O ponto central é a última linha: pedir que o Claude sinalize números estranhos reduz o risco de uma conta errada passar batida. A planilha continua sendo a fonte, e a conferência continua sendo sua. Para montar o controle financeiro por trás disso, o guia de <a href="/artigos/fluxo-de-caixa-com-ia-guia-pequenos-negocios">fluxo de caixa com IA</a> ajuda.</p>

    <h2>Como testar sem risco</h2>

    <ul class="checklist">
      <li>Comece com uma tarefa pequena e sem dado sensível, como um resumo de texto público.</li>
      <li>Mantenha a confirmação antes de cada ação até ter confiança no resultado.</li>
      <li>Peça que o Claude liste o que fez e o que não conseguiu fazer ao final.</li>
      <li>Revise todo número, nome e data de documentos e slides, lembrando que estão em beta.</li>
      <li>Só ative trabalho agendado depois de rodar a mesma tarefa manualmente duas ou três vezes.</li>
    </ul>

    <p>Se a sua ideia é transformar rotinas assim em serviço para outras pessoas, o texto sobre <a href="/artigos/agentes-no-workspace-studio-servico-de-automacao-para-pequenas-empresas">automação como serviço para pequenas empresas</a> mostra o caminho e os cuidados.</p>

    <h2>Erros comuns e quando não usar</h2>

    <p>O primeiro erro é tratar uma entrega em beta como produto final. Docs e Slides ajudam a chegar a um bom rascunho, mas contratos, propostas e números de cliente pedem revisão humana. O segundo é liberar autonomia cedo demais: um trabalho agendado que erra uma vez erra toda semana até alguém notar.</p>

    <p>Também não faz sentido usar tarefa longa para algo que você resolve em um minuto, nem delegar decisões que dependem de contexto que a IA não tem, como política interna ou acordo verbal com cliente. E, em conta de trabalho, confirme com a TI ou com o administrador o que pode ser carregado na ferramenta, porque no Enterprise essa escolha é do administrador.</p>

    <p>Para o próximo passo, abra o Claude, rode uma tarefa pequena e compare o resultado com o que você faria sozinho. Para continuar explorando ferramentas que executam trabalho e não apenas respondem, veja o texto sobre o <a href="/artigos/copilot-cowork-o-que-e-quem-pode-usar-e-quanto-custa">Copilot Cowork</a> e acompanhe a <a href="/categoria/ferramentas">categoria Ferramentas</a> do Portal da AI.</p>
  `,
  faq: [
    {
      question: "O Cowork do Claude ainda existe separado do chat?",
      answer:
        "Segundo a Anthropic, não como um lugar à parte: os recursos do Cowork e do Design passaram a estar disponíveis dentro de qualquer conversa. Quem já usava mantém chats, projetos, artefatos, conectores e skills. O Claude decide o que a tarefa exige, então você não precisa escolher um modo antes de começar.",
    },
    {
      question: "Quais planos do Claude recebem o chat unificado?",
      answer:
        "A liberação começou pelos planos Pro, Max e Ultra, em web, desktop e celular, ao longo de algumas semanas. A Anthropic diz que Team e Free vêm em breve, sem data. Para o Enterprise, a atualização de 23/10/2026 informa disponibilidade geral. Confira na sua conta, porque a chegada é gradual.",
    },
    {
      question: "Preciso ativar alguma coisa para usar?",
      answer:
        "Nos planos da primeira onda, a página oficial diz que não há nada para ativar. Já os recursos Docs, Slides e downloads estão em beta nos planos pagos, e no Enterprise o administrador escolhe quando liberar Docs, Slides e Design para a organização.",
    },
    {
      question: "O Claude age sozinho sem me perguntar?",
      answer:
        "Por padrão, não: a Anthropic afirma que o Claude pergunta antes de agir. Você pode optar por deixá-lo continuar e avisar apenas quando algo pedir atenção. Para começar, mantenha as confirmações ligadas e só relaxe em tarefas repetitivas, de baixo risco e fáceis de conferir.",
    },
    {
      question: "Dá para agendar uma tarefa recorrente no Claude?",
      answer:
        "Sim. O anúncio dá como exemplo um relatório semanal que o Claude começa sozinho toda segunda-feira. Teste primeiro rodando a mesma tarefa manualmente algumas vezes, confira o resultado e só então agende, porque um erro em trabalho recorrente se repete toda semana.",
    },
  ],
};
