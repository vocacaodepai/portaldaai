import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "google-apps-script-com-ia-servico-de-automacao-para-sheets-e-gmail",
  title: "Google Apps Script com IA: automação de Sheets e Gmail",
  seoTitle: "Google Apps Script com IA: venda automações",
  excerpt:
    "Use IA para escrever scripts de Google Apps Script, automatizar Sheets e Gmail para pequenos negócios e saiba os limites, o preço e os riscos antes de cobrar.",
  metaDescription:
    "Google Apps Script com IA: como a IA escreve o código, o que automatizar em Planilhas e Gmail, limites de cota, preço do serviço e cuidados com dados.",
  category: "monetizacao",
  articleSubcategory: "automacao-e-agentes",
  date: "2026-10-15",
  readTime: 8,
  imageQuery: "spreadsheet code laptop small business",
  seed: 306,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O Google Apps Script roda dentro da conta Google, sem instalar nada, e permite automatizar Planilhas, Gmail, Agenda e Drive, o que cria um serviço vendável para pequenos negócios que já usam essas ferramentas.",
    "A IA acelera a escrita do código, mas você precisa entender o que ele faz, testar em cópia da planilha e respeitar as cotas do Google (6 minutos por execução e 100 destinatários de e-mail por dia em conta comum).",
    "Cobre por problema resolvido e manutenção, deixe claro o acesso aos dados do cliente e nunca prometa resultado financeiro: a renda depende de achar clientes, entregar e manter o que construiu.",
  ],
  content: `
    <p>Para ganhar dinheiro com Google Apps Script e IA, você usa o assistente para escrever pequenos scripts que automatizam tarefas repetitivas em Planilhas Google e Gmail, testa tudo numa cópia e cobra de pequenos negócios pelo problema resolvido, com uma mensalidade de manutenção. A IA ajuda com o código, mas a responsabilidade pelo resultado continua sendo sua.</p>

    <p>Muita loja, clínica e prestador de serviço vive de planilha e e-mail: lança pedidos à mão, cobra clientes um a um, copia dados de um lugar para outro. O Apps Script resolve isso dentro do próprio ecossistema Google, sem servidor e sem instalar programa. Neste guia você vê o que ele é, o que dá para automatizar, como pedir o código à IA, quais limites de cota existem, como precificar com exemplos ilustrativos e quais cuidados evitam dor de cabeça. Se você ainda está escolhendo o caminho, o texto sobre <a href="/artigos/como-ganhar-dinheiro-vendendo-automacoes-prontas-com-ia">como vender automações prontas com IA</a> mostra as outras opções.</p>

    <h2>O que é o Google Apps Script e por que ele serve para vender serviço</h2>

    <p>Segundo a <a href="https://developers.google.com/apps-script/overview" target="_blank" rel="noopener noreferrer">visão geral do Apps Script</a>, conferida em 15/10/2026, é uma plataforma para criar aplicativos de negócio integrados ao Google Workspace, escritos em JavaScript moderno com bibliotecas prontas para Gmail, Agenda e Drive. Dá para adicionar menus e painéis a Planilhas, Docs e Formulários, criar funções personalizadas e publicar web apps simples. Não há instalação: o código é escrito num editor no navegador, fica salvo no Drive e roda nos servidores do Google.</p>

    <p>Isso é bom para quem quer oferecer serviço por três motivos. O cliente já tem a conta Google, então não precisa comprar sistema novo. O custo de infraestrutura é praticamente zero para automações pequenas. E o resultado é visível: o cliente abre a planilha e vê o botão novo funcionando.</p>

    <p>A contrapartida é que a página assume que você conhece JavaScript. É aqui que a IA entra: ela escreve o rascunho, explica linha por linha e corrige erros. Mas quem não entende o que o código faz não deveria vendê-lo, porque o dano de um script errado numa planilha de cliente é real.</p>

    <h2>O que dá para automatizar em Planilhas e Gmail</h2>

    <p>As demandas mais comuns de pequenos negócios cabem em poucos padrões. Veja uma lista de ideias para começar, todas dentro do que a documentação descreve para Planilhas, Gmail e Agenda:</p>

    <ul class="checklist">
      <li>Enviar e-mail de lembrete automático para clientes com parcela ou consulta vencendo hoje.</li>
      <li>Copiar respostas de um Formulário Google para a aba certa da planilha, já organizadas.</li>
      <li>Gerar um PDF de orçamento a partir de uma linha da planilha e mandar por e-mail.</li>
      <li>Criar eventos na Agenda a partir de datas escritas na planilha.</li>
      <li>Montar um resumo semanal de vendas e enviar para o dono toda segunda-feira.</li>
      <li>Limpar e padronizar dados, como telefones e nomes, em lote.</li>
    </ul>

    <p>Se a necessidade for só fórmula e relatório sem código, talvez nem precise de script: o guia <a href="/artigos/ia-para-planilhas-automatizar-relatorios-excel-sheets">IA para planilhas: automatizar relatórios em Excel e Sheets</a> cobre esse nível. E quando o cliente já usa ferramentas que se conectam por cliques, a comparação em <a href="/artigos/make-ou-zapier-qual-automacao-com-ia-vale-mais-a-pena">Make ou Zapier</a> e o texto sobre <a href="/artigos/n8n-para-iniciantes-como-vender-automacoes-com-ia">n8n para iniciantes</a> ajudam a escolher a ferramenta certa. O Apps Script costuma ganhar quando tudo acontece dentro do Google.</p>

    <h2>Como pedir o código para a IA sem se perder</h2>

    <p>O segredo é descrever o problema como um briefing, não como um pedido genérico. Quanto mais exato o que existe na planilha, melhor o resultado. O guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">prompt engineering</a> traz a base; aqui vai um modelo pronto:</p>

    <pre><code>Escreva um script de Google Apps Script para uma planilha.
A aba se chama "Cobrancas" e tem as colunas: A Nome, B E-mail,
C Valor, D Vencimento (data), E Status ("Pendente" ou "Pago").
Todo dia, para cada linha com Status "Pendente" e Vencimento
igual a hoje, envie um e-mail educado ao cliente com o valor e
depois escreva "Lembrete enviado" na coluna F.
Leia todos os dados de uma vez (getValues) e escreva de volta
em lote. Comente o código em português e explique como criar o
gatilho diário.</code></pre>

    <p>Depois de receber o código, não cole direto na planilha do cliente. Faça uma cópia, preencha com dados falsos e rode. Peça à IA para explicar cada bloco e para apontar o que pode dar errado: data em formato diferente, linha vazia, e-mail inválido.</p>

    <pre><code>function enviarLembretes() {
  var planilha = SpreadsheetApp.getActive().getSheetByName("Cobrancas");
  var dados = planilha.getDataRange().getValues();
  var hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  for (var i = 1; i &lt; dados.length; i++) {
    var vencimento = new Date(dados[i][3]);
    vencimento.setHours(0, 0, 0, 0);
    if (dados[i][4] === "Pendente" &amp;&amp; vencimento.getTime() === hoje.getTime()) {
      MailApp.sendEmail(dados[i][1], "Lembrete de pagamento",
        "Olá, " + dados[i][0] + ". Passando para lembrar do pagamento de R$ " + dados[i][2] + " que vence hoje.");
      planilha.getRange(i + 1, 6).setValue("Lembrete enviado");
    }
  }
}</code></pre>

    <p>Esse exemplo é didático e propositalmente simples. Antes de usar com cliente, falta tratar erros, formatar o valor e conferir a política do e-mail. Para automações de cobrança, o texto <a href="/artigos/ia-para-cobranca-e-inadimplencia-pequeno-negocio">IA para cobrança e inadimplência</a> mostra o tom certo das mensagens.</p>

    <h2>Limites de cota que você precisa conhecer</h2>

    <p>O Apps Script tem cotas diárias que decidem o que cabe em cada projeto. A <a href="https://developers.google.com/apps-script/guides/services/quotas" target="_blank" rel="noopener noreferrer">página oficial de cotas</a>, conferida em 15/10/2026, informa que os valores podem mudar sem aviso. Os principais para quem vende automação:</p>

    <table>
      <thead>
        <tr><th>Item</th><th>Conta comum (gmail.com)</th><th>Google Workspace</th></tr>
      </thead>
      <tbody>
        <tr><td>Tempo de execução por script</td><td>6 minutos</td><td>6 minutos</td></tr>
        <tr><td>Tempo total de gatilhos por dia</td><td>90 minutos</td><td>6 horas</td></tr>
        <tr><td>Destinatários de e-mail por dia</td><td>100</td><td>1.500 (externos)</td></tr>
        <tr><td>Chamadas URL Fetch por dia</td><td>20.000</td><td>100.000</td></tr>
      </tbody>
    </table>

    <p>Na prática: um negócio que envia 300 lembretes por dia não cabe numa conta comum, que permite 100 destinatários. A solução é usar uma conta Workspace ou dividir os envios. Antes de fechar o escopo, pergunte quantos e-mails e linhas existem e se o cliente usa conta Workspace. A mesma página indica a função MailApp.getRemainingDailyQuota() para checar quanto ainda dá para enviar.</p>

    <p>Para o código não estourar os 6 minutos, as <a href="https://developers.google.com/apps-script/guides/support/best-practices" target="_blank" rel="noopener noreferrer">boas práticas do Apps Script</a> recomendam ler e escrever em lote em vez de célula por célula: no exemplo do documento, o tempo cai de cerca de 70 segundos para cerca de 1 segundo. Por isso o prompt acima pede getValues e escrita em lote.</p>

    <h2>Quanto cobrar: exemplo ilustrativo com números</h2>

    <p>Os números abaixo são hipotéticos, para mostrar o raciocínio, e não representam ganho garantido. Imagine que você atende uma clínica de fisioterapia com 120 pacientes ativos e uma planilha de agendamentos. O pedido: lembrar o paciente por e-mail um dia antes da sessão e gerar um resumo semanal para a dona.</p>

    <p>Você estima 6 horas de trabalho (levantamento, código com ajuda da IA, testes e treinamento). Se valoriza sua hora em R$ 60, o projeto sai por R$ 360 mais uma manutenção mensal de R$ 50 para ajustes e suporte. Compare com o tempo da recepcionista, que gasta cerca de 30 minutos por dia confirmando sessões à mão: o argumento de venda é o tempo devolvido, não o código. Para montar a conta e o texto da proposta, use o roteiro de <a href="/artigos/como-precificar-produtos-e-servicos-com-ia">como precificar produtos e serviços com IA</a> e o modelo de <a href="/artigos/propostas-comerciais-com-ia-como-fechar-mais-contratos">propostas comerciais com IA</a>.</p>

    <p>Se você é MEI, lembre que o serviço precisa caber na atividade registrada e no limite anual de faturamento, tema do guia <a href="/artigos/limite-de-faturamento-do-mei-como-controlar-mes-a-mes">limite de faturamento do MEI</a>. E para achar os primeiros clientes, o texto <a href="/artigos/como-vender-pacotes-de-automacao-de-ia-para-negocios-locais">como vender pacotes de automação de IA para negócios locais</a> traz ideias de abordagem.</p>

    <h2>Cuidados com dados, contrato e manutenção</h2>

    <p>Um script que lê planilha de cliente enxerga nomes, e-mails e valores. Isso é dado pessoal, e a LGPD vale mesmo para negócios pequenos. Combine por escrito quem é o dono do script, quem paga a conta Google, quem acessa os dados e o que acontece se o contrato terminar. O checklist em <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">LGPD para pequeno negócio que usa IA</a> ajuda a conversar sobre isso. Nunca envie a planilha inteira do cliente para um chatbot: use dados fictícios ao pedir o código.</p>

    <ul>
      <li>Instale o script na conta do cliente, não na sua, para ele não ficar refém de você nem você responsável por tudo.</li>
      <li>Documente o que o script faz em uma aba "Leia-me" da planilha.</li>
      <li>Avise que mudanças nas colunas da planilha podem quebrar a automação.</li>
      <li>Defina o que está incluso na manutenção e o prazo de resposta.</li>
    </ul>

    <h2>Erros comuns de quem começa</h2>

    <p>O erro mais frequente é vender o que não sabe sustentar. O código gerado por IA pode funcionar no teste e falhar no mundo real: formato de data diferente, aba renomeada, cota estourada num dia de movimento. Outros tropeços repetidos:</p>

    <ul>
      <li>Testar direto na planilha de produção e apagar dados.</li>
      <li>Ignorar as cotas e descobrir o limite quando o cliente reclama.</li>
      <li>Cobrar barato demais e não prever manutenção.</li>
      <li>Prometer integrações que o Apps Script não faz bem, quando outra ferramenta serviria melhor.</li>
      <li>Entregar sem treinar o cliente nem deixar instruções.</li>
    </ul>

    <p>Se você não programa e quer reduzir o risco, comece por projetos pequenos e leia o texto sobre <a href="/artigos/vibe-coding-para-nao-programadores-carreira-e-riscos">vibe coding para não programadores</a>, que discute os limites de depender da IA para escrever código.</p>

    <h2>Próximos passos</h2>

    <p>Monte uma planilha de demonstração com dados falsos, automatize um fluxo (como o lembrete de cobrança), grave um vídeo curto mostrando antes e depois e use isso como portfólio. Depois ofereça a primeira automação a um negócio conhecido, com preço de entrada honesto e escopo pequeno. A categoria Monetização do Portal da AI reúne outros caminhos para transformar IA em serviço, e o <a href="/artigos/automacao-com-ia-economize-horas-de-trabalho">guia de automação com IA para economizar horas de trabalho</a> é uma boa leitura para sair com ideias do que oferecer.</p>
  `,
  faq: [
    {
      question: "Preciso saber programar para usar Google Apps Script?",
      answer:
        "A página oficial usa JavaScript e sugere cursos para iniciantes, então algum conhecimento ajuda. A IA escreve rascunhos e explica o código, mas você precisa entender o que ele faz para testar, corrigir e manter. Comece com scripts curtos em planilhas de teste.",
    },
    {
      question: "Google Apps Script é gratuito?",
      answer:
        "O uso básico é gratuito com uma conta Google, dentro de cotas diárias. Contas Google Workspace têm limites maiores, mas a assinatura é paga. Os valores das cotas podem mudar, então consulte a página oficial de cotas antes de fechar o escopo com um cliente.",
    },
    {
      question: "Quantos e-mails o Apps Script pode enviar por dia?",
      answer:
        "Segundo a página de cotas conferida em 15/10/2026, contas comuns podem enviar para até 100 destinatários por dia e contas Workspace para até 1.500 externos. Os limites podem mudar sem aviso. A função MailApp.getRemainingDailyQuota() mostra o que resta no dia.",
    },
    {
      question: "Quanto cobrar por uma automação em Planilhas Google?",
      answer:
        "Não existe tabela oficial. Calcule suas horas de levantamento, código, teste e treinamento, some uma mensalidade de manutenção e compare com o tempo que o cliente economiza. Comece por um projeto pequeno e ajuste o preço conforme aprende quanto tempo cada tipo de automação leva.",
    },
    {
      question: "É seguro colocar dados de clientes em um script feito com IA?",
      answer:
        "Cuidado: ao pedir código, use dados fictícios, nunca a planilha real. No uso, o script roda na conta Google do cliente, mas ele continua sujeito à LGPD. Combine por escrito quem acessa os dados, limite as permissões e revise o que o código faz antes de ativar.",
    },
  ],
};
