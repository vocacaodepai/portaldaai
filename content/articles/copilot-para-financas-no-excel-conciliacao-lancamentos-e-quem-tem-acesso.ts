import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "copilot-para-financas-no-excel-conciliacao-lancamentos-e-quem-tem-acesso",
  title: "Copilot para finanças no Excel: o que faz e quem tem acesso",
  seoTitle: "Copilot para finanças no Excel: o que faz e quem usa",
  excerpt:
    "Copilot para finanças chega ao Excel e ao Cowork com conciliação e lançamentos contábeis. Veja o que a Microsoft anunciou, o que é Frontier e como testar com cuidado.",
  metaDescription:
    "A Microsoft anunciou o Copilot para finanças em 29/10/2026: habilidades no Excel, conciliação, lançamentos e plugins no Cowork. Veja o que já está liberado e o que ainda é Frontier.",
  category: "ferramentas",
  date: "2026-11-01",
  readTime: 7,
  imageQuery: "finance analyst spreadsheet laptop desk",
  seed: 987,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Em 29/10/2026 a Microsoft apresentou o Copilot para finanças: mais de 25 habilidades e plugins de parceiros no Excel e no Copilot Cowork, para contabilidade, mercado de capitais e finanças corporativas.",
    "As habilidades de finanças no Excel e os plugins do Cowork estão em disponibilidade geral; as funções de contabilidade (conciliação, lançamentos e relatórios) ainda estão no programa Frontier.",
    "Tudo é pensado para empresas com licença do Microsoft 365 Copilot; a Microsoft não informou preço nem disponibilidade no Brasil, então o uso pessoal e o pequeno negócio devem tratar o anúncio como referência, não como compra.",
  ],
  content: `
    <p>O Copilot para finanças é o conjunto de habilidades e plugins que a Microsoft colocou no Excel e no Copilot Cowork para tarefas de contabilidade, mercado de capitais e finanças corporativas, como conciliar contas, rascunhar lançamentos e explicar variações contra o orçado. O anúncio saiu em 29/10/2026 no <a href="https://www.microsoft.com/en-us/microsoft-365/blog/2026/10/29/microsoft-copilot-for-finance-purpose-built-for-the-way-finance-teams-work/" target="_blank" rel="noopener noreferrer">blog do Microsoft 365</a>.</p>

    <p>A novidade interessa a quem trabalha com números todo dia: contadores, analistas financeiros e donos de empresa que fecham o mês em planilha. Este guia separa o que está liberado do que ainda é teste, mostra como cada peça funciona e lista os cuidados antes de colocar uma IA perto do balanço. As informações foram conferidas nas páginas da Microsoft em 01/11/2026.</p>

    <h2>O que é o Copilot para finanças</h2>

    <p>Não é um programa novo para instalar. É um pacote de recursos dentro de duas peças que a Microsoft já oferece a clientes do Microsoft 365 Copilot: o Copilot no Excel e o <a href="/artigos/copilot-cowork-o-que-e-quem-pode-usar-e-quanto-custa">Copilot Cowork</a>, o agente que executa tarefas longas em várias etapas. Segundo o anúncio, a empresa soma mais de 25 novas habilidades de finanças e plugins feitos por parceiros.</p>

    <p>A Microsoft descreve três componentes. O primeiro é o Office no Copilot, que leva o Excel para dentro do aplicativo Copilot, para analisar, editar e escrever planilhas a várias mãos no Chat ou no Cowork. O segundo é o próprio Cowork, para trabalho com várias etapas, como um pacote de fechamento ou um memorando de investimento. O terceiro é o Work IQ, que dá ao Copilot contexto da empresa, como o calendário de fechamento, além do arquivo aberto.</p>

    <p>Quem ainda não conhece o conceito de agente pode começar pelo guia que explica a diferença entre <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">agente de IA, chatbot e automação</a>. A lógica aqui é essa: em vez de responder uma dúvida, o Copilot recebe um objetivo e entrega um arquivo para você revisar.</p>

    <h2>O que ele faz na contabilidade</h2>

    <p>É a parte mais relevante para o dia a dia de um escritório ou de um financeiro pequeno. De acordo com a Microsoft, as habilidades de contabilidade no Excel e no Cowork cobrem três frentes.</p>

    <ul class="checklist">
      <li><strong>Conciliação de contas:</strong> compara saldos e transações, aponta divergências e prepara os itens de conciliação para revisão.</li>
      <li><strong>Lançamentos contábeis:</strong> rascunha provisões, reclassificações, rateios, estornos e lançamentos recorrentes, com checagem de dados obrigatórios e de partidas balanceadas.</li>
      <li><strong>Relatórios:</strong> analisa o desempenho contra o planejado, identifica os fatores principais e escreve um relatório explicativo.</li>
    </ul>

    <p>O anúncio cita ainda auditoria, tributos, planejamento financeiro, conformidade e treinamento como áreas de apoio. No Excel, o usuário pode ligar uma trilha de auditoria que registra o que o Copilot mudou e por quê, e o Copilot consegue ler o histórico de alterações da pasta de trabalho, identificar quem mexeu em quê e desfazer edições individuais.</p>

    <p>Essas funções de contabilidade, porém, estão no programa Frontier, o canal de acesso antecipado da Microsoft. Ou seja, ainda não são para todo cliente. Quem quiser entender o mesmo trabalho feito sem esse pacote pode olhar o guia de <a href="/artigos/conciliacao-bancaria-com-ia-pequeno-negocio-guia">conciliação bancária com IA no pequeno negócio</a>.</p>

    <h2>Mercado de capitais, finanças corporativas e dados</h2>

    <p>Dois plugins do Cowork foram anunciados. O de Mercado de Capitais atende bancos, pesquisa, private equity e gestão de patrimônio: montar uma tese de investimento com fontes, testar uma aquisição com múltiplos e modelo de LBO, além de modelagem de três demonstrações, fluxo de caixa descontado, memorandos e revisão de carteiras. O de Finanças atende o financeiro de empresas, com pacotes de revisão de fechamento, revisões de previsão levadas até a diretoria, evidências para auditoria e análise de bases de dados.</p>

    <p>Para trazer dados, a Microsoft citou um plugin de aplicativos Dynamics 365 ERP, o Fabric IQ (dados governados do Microsoft Fabric, começando por relatórios do Power BI) e plugins de parceiros. Na lista aparecem Intuit QuickBooks, Xero e Zoho Books para contabilidade e planejamento, Mercury para controle de gastos, e provedores de dados como FactSet, Moody's, S&amp;P Global e LSEG. Serviços de terceiros podem exigir licença, assinatura ou liberação do administrador separadamente.</p>

    <p>Em junho a empresa já tinha liberado habilidades de finanças no Excel, como descreve a <a href="https://microsoft.com/en-us/microsoft-365/blog/2026/06/25/copilot-in-excel-built-for-the-era-of-frontier-finance" target="_blank" rel="noopener noreferrer">publicação de 25/06/2026</a>: o time define como o Copilot deve fazer um processo recorrente, como fechar o mês ou montar uma análise de variação, e o Copilot segue o roteiro. Essas habilidades personalizadas são arquivos de texto em formato aberto, o que lembra a ideia das <a href="/artigos/skills-do-gemini-como-servico-montar-instrucoes-reutilizaveis-para-pequenos-negocios">skills do Gemini</a>.</p>

    <h2>Quem tem acesso e quanto custa</h2>

    <table>
      <thead>
        <tr><th>Recurso</th><th>Situação informada pela Microsoft</th></tr>
      </thead>
      <tbody>
        <tr><td>Habilidades de finanças no Copilot no Excel</td><td>Disponibilidade geral</td></tr>
        <tr><td>Plugins de Mercado de Capitais e de Finanças no Cowork</td><td>Disponibilidade geral</td></tr>
        <tr><td>Fabric IQ no Cowork</td><td>Disponibilidade geral</td></tr>
        <tr><td>Capacidades de contabilidade (Excel e Cowork)</td><td>Frontier (acesso antecipado)</td></tr>
        <tr><td>Plugin do Dynamics 365 ERP e plugins de parceiros</td><td>Começando a chegar pelo registro de plugins da Microsoft</td></tr>
      </tbody>
    </table>

    <p>O texto do anúncio não informa preço nem tipo de licença específico para esses recursos, e não diz nada sobre o Brasil. O que se sabe é que o público-alvo são clientes do Microsoft 365 Copilot, produto corporativo. Para entender a lógica de cobrança do Cowork, que é por crédito de uso, leia o guia sobre <a href="/artigos/copilot-cowork-o-que-e-quem-pode-usar-e-quanto-custa">quem pode usar e quanto custa</a>, e para o lado do consumidor veja <a href="/artigos/microsoft-copilot-vale-a-pena-preco-2026">se o Copilot vale a pena</a>.</p>

    <p>Uma notícia recente também mostra que a cobrança por uso do Copilot não vale igual em todo lugar: confira <a href="/noticias/microsoft-copilot-cobranca-uso-brasil-fora">o que a Microsoft disse sobre cobrança por uso no Brasil</a>.</p>

    <h2>Segurança e controle, segundo a Microsoft</h2>

    <p>Para finanças, a pergunta principal é onde ficam os dados. A empresa afirma que prompts e respostas são processados dentro do limite de serviço do Microsoft 365, com proteção de dados empresarial. O Copilot só trabalha com conteúdo que o usuário já pode acessar, respeita permissões e rótulos de sensibilidade e não usa prompts, respostas ou documentos para treinar os modelos de base. A decisão, a aprovação e o acompanhamento continuam com o profissional.</p>

    <p>Esse último ponto é o que decide se a ferramenta é útil ou perigosa. Um agente que rascunha um lançamento pode errar a conta, o centro de custo ou o período. O rascunho é dele, a assinatura é sua. Vale ler também o guia de <a href="/artigos/permissoes-de-agentes-de-ia-o-que-liberar-o-que-travar-e-quando-pedir-aprovacao">permissões de agentes de IA</a> antes de liberar qualquer acesso a um sistema de contabilidade.</p>

    <h2>Números e clientes citados: o que dá para tirar deles</h2>

    <p>A Microsoft informou que, em sete dias de disponibilidade limitada para Insiders, mais de 8 mil usuários únicos invocaram as habilidades de contabilidade mais de 44 mil vezes, em mais de 18 mil conversas. É um dado de uso, não de qualidade: mostra curiosidade, não acerto. Dois clientes foram citados: a EY Irlanda, que disse usar as habilidades de contabilidade para agilizar relatórios semanais (com testes ainda em andamento), e a Zurich Insurance North America, que usou o Cowork para montar painéis de despesas e consolidar revisões de lançamentos manuais.</p>

    <p>Como são relatos da própria empresa e de clientes escolhidos por ela, trate como indício. Antes de decidir qualquer coisa, peça uma prova com os seus dados, em ambiente de teste.</p>

    <h2>Como testar com segurança (para quem tem acesso)</h2>

    <p>Se a sua empresa tem o Microsoft 365 Copilot e o administrador liberou o recurso, comece por uma tarefa pequena e reversível. Um bom primeiro teste é a conciliação de uma conta de um mês já fechado, cujo resultado você conhece. Exemplos de pedidos:</p>

    <pre><code>Concilie a aba "Extrato" com a aba "Razão" da conta Banco Itaú, mês de setembro.
Liste as diferenças em uma tabela com data, valor e provável causa.
Não altere nenhuma célula original. Escreva o resultado em uma aba nova.</code></pre>

    <pre><code>Rascunhe o lançamento de provisão de férias de outubro com base na aba "Folha".
Mostre a fórmula usada, as premissas e o débito e o crédito.
Se faltar algum dado, pergunte antes de preencher.</code></pre>

    <ul class="checklist">
      <li>Use uma cópia do arquivo ou um mês já encerrado.</li>
      <li>Ligue a trilha de auditoria e confira o histórico de mudanças.</li>
      <li>Compare o resultado com o que o seu time fez à mão e anote as diferenças.</li>
      <li>Não envie dados de cliente final nem dados pessoais sem autorização da empresa.</li>
    </ul>

    <p>O raciocínio se aplica também a quem monta controles em planilha comum: o guia de <a href="/artigos/ia-para-planilhas-automatizar-relatorios-excel-sheets">IA para planilhas</a> mostra como pedir fórmulas e relatórios com revisão.</p>

    <h2>Erros comuns e quando não usar</h2>

    <ul>
      <li><strong>Aprovar sem conferir.</strong> Rascunho de lançamento não é lançamento aprovado.</li>
      <li><strong>Testar no mês aberto.</strong> Comece em período encerrado, em que você conhece a resposta.</li>
      <li><strong>Supor que o recurso chega ao Brasil igual.</strong> A Microsoft não informou regiões para essas funções.</li>
      <li><strong>Esquecer a licença dos parceiros.</strong> Plugins de terceiros podem exigir contrato à parte.</li>
      <li><strong>Substituir o contador.</strong> A IA acelera a rotina; a responsabilidade técnica continua do profissional registrado. O guia sobre <a href="/artigos/contabilidade-e-ia-o-que-muda-para-contadores-e-como-se-preparar">contabilidade e IA</a> detalha o que muda na profissão.</li>
    </ul>

    <p>Para o pequeno negócio sem Microsoft 365 Copilot, o caminho continua sendo o básico bem feito: <a href="/artigos/fluxo-de-caixa-com-ia-guia-pequenos-negocios">fluxo de caixa com IA</a> e um bom <a href="/artigos/dre-simples-com-ia-ler-o-lucro-do-pequeno-negocio-mes-a-mes">DRE simples</a> já dão visão do mês sem depender de nenhum pacote novo.</p>

    <h2>Próximo passo</h2>

    <p>Se você trabalha com finanças em uma empresa que já paga o Copilot, leve o anúncio ao TI com duas perguntas: quais dessas funções já estão no seu plano e como o administrador as liga. Se não, guarde a referência e acompanhe a <a href="/categoria/ferramentas">categoria Ferramentas</a> do Portal da AI para saber quando algo parecido chegar a quem trabalha por conta própria.</p>
  `,
  faq: [
    {
      question: "O Copilot para finanças é gratuito?",
      answer:
        "A Microsoft não informou preço no anúncio de 29/10/2026. Os recursos são voltados a clientes do Microsoft 365 Copilot, que é um produto pago e corporativo, e o Cowork tem cobrança por uso. Plugins de parceiros podem exigir licença própria. Consulte a página oficial ou o administrador da sua empresa.",
    },
    {
      question: "O Copilot para finanças já funciona no Brasil?",
      answer:
        "A Microsoft não detalhou disponibilidade por país para essas funções. O texto fala em lançamento progressivo e em disponibilidade geral para algumas peças e Frontier para outras. Se a sua empresa quer usar, confirme com o administrador do Microsoft 365 o que está liberado na sua conta.",
    },
    {
      question: "O que é o programa Frontier da Microsoft?",
      answer:
        "É o canal de acesso antecipado a recursos novos do Copilot. No anúncio, as capacidades de contabilidade no Excel e no Cowork estão nele, enquanto as habilidades de finanças no Excel e os plugins de Mercado de Capitais e de Finanças estão em disponibilidade geral.",
    },
    {
      question: "O Copilot pode fazer a conciliação sozinho?",
      answer:
        "Segundo a Microsoft, ele compara saldos e transações, aponta divergências e prepara itens de conciliação para revisão. A decisão e a aprovação ficam com o profissional. Na prática, trate o resultado como rascunho e confira por amostragem antes de lançar.",
    },
    {
      question: "O Copilot usa os dados da minha empresa para treinar a IA?",
      answer:
        "A Microsoft afirma que prompts, respostas e documentos não são usados para treinar os modelos de base e que os dados ficam dentro do limite de serviço do Microsoft 365, com respeito a permissões e rótulos de sensibilidade. É uma declaração da empresa; a política da sua organização e o contrato valem mais que o resumo.",
    },
  ],
};
