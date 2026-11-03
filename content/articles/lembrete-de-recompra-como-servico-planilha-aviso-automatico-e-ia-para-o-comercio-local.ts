import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "lembrete-de-recompra-como-servico-planilha-aviso-automatico-e-ia-para-o-comercio-local",
  title: "Lembrete de recompra como serviço: planilha, aviso e IA",
  seoTitle: "Lembrete de recompra como serviço para o comércio local",
  excerpt:
    "Pet shop, distribuidora de água e revenda de gás vendem o mesmo item todo mês. Veja como montar e vender um lembrete de recompra com planilha e IA.",
  metaDescription:
    "Lembrete de recompra como serviço: como calcular o ciclo de cada cliente, montar a planilha, automatizar o aviso com Apps Script e respeitar WhatsApp e LGPD.",
  category: "monetizacao",
  articleSubcategory: "automacao-e-agentes",
  date: "2026-11-03",
  readTime: 7,
  imageQuery: "pet shop dog food shelf",
  seed: 1114,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Lembrete de recompra avisa o cliente pouco antes de acabar um produto que ele compra sempre, como ração, galão de água ou gás, calculando a data pelo histórico de compras.",
    "O serviço cabe numa planilha com data da última compra, ciclo em dias e antecedência, mais um aviso automático por e-mail ou uma lista diária para o atendente enviar pelo WhatsApp.",
    "Só envie para quem autorizou, ofereça saída em toda mensagem e respeite os limites do Apps Script e as regras do WhatsApp Business, que exige modelos aprovados fora da janela de 24 horas.",
  ],
  content: `
    <p>Lembrete de recompra como serviço é montar, para um comércio local, um sistema que avisa cada cliente pouco antes de acabar um produto que ele compra sempre. A conta é simples: data da última compra mais o ciclo de consumo, menos alguns dias de antecedência. Você cobra a implantação e uma mensalidade para manter a planilha, os avisos e os textos.</p>

    <p>Funciona melhor em quem vende o mesmo item com frequência previsível: pet shop com ração, distribuidora de água mineral, revenda de gás, loja de produtos de limpeza, papelaria com cartucho de tinta. Este guia mostra como calcular o ciclo, montar a planilha, automatizar o aviso, usar IA nas mensagens e cobrar sem prometer o que não depende de você. Fontes conferidas em 03/11/2026.</p>

    <h2>Por que o comércio local paga por isso</h2>

    <p>Quem compra ração a cada 30 dias não é fiel por contrato, é fiel por hábito. Se o saco acaba num domingo e a loja de sempre está fechada, o cliente compra no aplicativo ou no mercado e talvez não volte. O lembrete chega antes disso, com um texto curto e um jeito fácil de pedir.</p>

    <p>Para o lojista, o valor está em não depender da memória do atendente. Muitos já mandam mensagem "quando lembram". Você transforma isso em rotina com data certa. É um serviço parecido com o de <a href="/artigos/confirmacao-de-consultas-e-lembretes-como-servico-google-agenda-whatsapp-e-ia">confirmação de consultas</a>, mas guiado pelo consumo do produto, não por um horário marcado. E complementa bem o <a href="/artigos/alerta-de-estoque-baixo-como-servico-planilha-aviso-por-e-mail-e-limites-do-apps-script">alerta de estoque baixo</a>, que olha para a prateleira da loja em vez da despensa do cliente.</p>

    <h2>Como calcular o ciclo de recompra</h2>

    <p>O ciclo é o número de dias entre uma compra e a próxima. Há dois jeitos de chegar nele:</p>

    <ul>
      <li><strong>Pelo histórico.</strong> Se o cliente comprou em 02/09, 01/10 e 31/10, o ciclo médio é 30 dias. Com três compras ou mais, use a média.</li>
      <li><strong>Pela regra do produto.</strong> Para cliente novo, use a recomendação do fabricante ou uma pergunta simples. Exemplo ilustrativo: um cão que come 300 g por dia termina um saco de 15 kg em cerca de 50 dias (15.000 dividido por 300).</li>
    </ul>

    <p>A data do aviso fica assim: última compra + ciclo menos antecedência. Para ração, 5 dias de antecedência costuma ser razoável; para galão de água, 1 ou 2 dias. Combine com o lojista e ajuste depois de um mês olhando quem respondeu.</p>

    <h2>A planilha que sustenta o serviço</h2>

    <p>Monte no Planilhas Google, que o lojista já consegue abrir no celular. Uma linha por cliente e produto:</p>

    <table>
      <thead>
        <tr><th>Coluna</th><th>Exemplo</th><th>Para que serve</th></tr>
      </thead>
      <tbody>
        <tr><td>Cliente</td><td>Ana, tutora do Thor</td><td>Personalizar a mensagem</td></tr>
        <tr><td>Contato e canal</td><td>E-mail ou WhatsApp</td><td>Definir como avisar</td></tr>
        <tr><td>Autorizou receber?</td><td>Sim, em 12/10</td><td>Prova de permissão</td></tr>
        <tr><td>Produto</td><td>Ração adulto 15 kg</td><td>Texto do aviso</td></tr>
        <tr><td>Última compra</td><td>31/10</td><td>Base do cálculo</td></tr>
        <tr><td>Ciclo (dias)</td><td>50</td><td>Consumo estimado</td></tr>
        <tr><td>Data do aviso</td><td>fórmula</td><td>Quando enviar</td></tr>
        <tr><td>Status</td><td>Avisado, comprou, pediu para sair</td><td>Acompanhar resultado</td></tr>
      </tbody>
    </table>

    <p>A coluna de data do aviso usa uma fórmula simples, como =E2+F2-5. Se você nunca mexeu com fórmulas, o roteiro de <a href="/artigos/aprender-planilhas-do-zero-com-ia-formulas-erros-e-exercicios">planilhas do zero com IA</a> resolve em uma tarde.</p>

    <h2>Como automatizar o aviso</h2>

    <p>Há três níveis, do mais simples ao mais trabalhoso:</p>

    <h3>1. Lista do dia para o atendente</h3>

    <p>Um filtro mostra quem tem aviso para hoje, com um link pronto para abrir a conversa. O atendente envia manualmente. É o modelo mais seguro para começar, porque cada envio passa por uma pessoa.</p>

    <h3>2. E-mail automático com Apps Script</h3>

    <p>Um script roda uma vez por dia, lê a planilha e manda o e-mail para quem está na data. Os limites oficiais do <a href="https://developers.google.com/apps-script/guides/services/quotas" target="_blank" rel="noopener noreferrer">Google Apps Script</a> pesam aqui: 100 destinatários de e-mail por dia em conta Gmail comum e 1.500 no Google Workspace, 6 minutos por execução e 90 minutos por dia de gatilhos na conta comum. Para uma loja de bairro, 100 por dia costuma sobrar. Se precisar de base para o código, o guia de <a href="/artigos/google-apps-script-com-ia-servico-de-automacao-para-sheets-e-gmail">Apps Script com IA</a> mostra o caminho.</p>

    <h3>3. WhatsApp pela API oficial</h3>

    <p>Para envio automático pelo WhatsApp, use a plataforma oficial do WhatsApp Business. A <a href="https://whatsappbusiness.com/policy/" target="_blank" rel="noopener noreferrer">política de mensagens do WhatsApp Business</a> exige permissão do destinatário antes do contato, obriga a respeitar todo pedido para parar e só permite mensagens fora da janela de 24 horas por modelos aprovados. Ferramentas como <a href="/artigos/n8n-para-iniciantes-como-vender-automacoes-com-ia">n8n</a> ou as comparadas em <a href="/artigos/make-ou-zapier-qual-automacao-com-ia-vale-mais-a-pena">Make ou Zapier</a> conectam a planilha à API, mas aumentam o custo e a manutenção.</p>

    <h2>Onde a IA entra no serviço</h2>

    <p>A IA não decide nada sozinha aqui, ela acelera três partes: escrever o código, variar as mensagens e analisar o histórico. Estes prompts funcionam em qualquer assistente:</p>

    <pre><code>Escreva um Google Apps Script que leia a aba "Clientes" desta planilha,
encontre as linhas em que a coluna "Data do aviso" é igual a hoje e a
coluna "Autorizou receber?" começa com "Sim", envie um e-mail curto com o
nome do cliente e do produto e marque "Avisado" na coluna Status.
Explique onde configurar o gatilho diário e como testar com meu e-mail.</code></pre>

    <pre><code>Crie 5 versões de lembrete de recompra para um pet shop de bairro, com no
máximo 3 linhas cada, tom próximo e sem pressão. Inclua o nome do pet, o
produto e, no fim, a frase "Se não quiser mais receber, responda SAIR".</code></pre>

    <pre><code>Abaixo está o histórico de compras de 40 clientes (cliente, produto, datas).
Calcule o ciclo médio de cada um, marque quem tem menos de 3 compras e
aponte clientes cujo intervalo aumentou mais de 50% nas últimas compras.</code></pre>

    <p>Teste o script com o seu próprio e-mail antes de ligar para clientes reais. Código gerado por IA pode ter erro de coluna ou de data.</p>

    <h2>Pacote, preço e contrato</h2>

    <p>Um formato que costuma funcionar é dividir em implantação e mensalidade. Valores ilustrativos para uma cidade média, não uma promessa de resultado:</p>

    <ul>
      <li><strong>Implantação:</strong> R$ 500 a R$ 900, incluindo planilha, importação de até 200 clientes, textos e script.</li>
      <li><strong>Mensalidade:</strong> R$ 120 a R$ 250, para ajustar ciclos, incluir clientes novos e enviar um relatório simples de quem recomprou.</li>
    </ul>

    <p>Para calcular o seu valor-hora antes de fechar, use o guia de <a href="/artigos/como-precificar-servicos-usando-ia-no-trabalho">como precificar serviços com IA</a>. Deixe claro no escopo o que entra e o que não entra, como mostra o texto sobre <a href="/artigos/briefing-e-escopo-para-freelancer-com-ia-evite-retrabalho-e-cliente-que-pede-mais">briefing e escopo</a>, e formalize a mensalidade com o modelo de <a href="/artigos/retainer-de-automacao-mensalidade-suporte-e-contrato-para-freelancer">retainer de automação</a>.</p>

    <div class="callout-box">
      <span class="callout-label">LGPD em uma frase</span>
      <p>Segundo as <a href="https://www.gov.br/anpd/pt-br/acesso-a-informacao/perguntas-frequentes" target="_blank" rel="noopener noreferrer">perguntas frequentes da ANPD</a>, o consentimento pode ser revogado de forma gratuita e simples. Registre quando e como cada cliente autorizou, e trate o pedido de saída no mesmo dia.</p>
    </div>

    <h2>Erros comuns ao montar o serviço</h2>

    <p>O primeiro é importar a lista inteira de contatos do lojista e começar a avisar todo mundo. Sem permissão registrada, o número pode ser bloqueado e o lojista fica exposto, como explica o guia de <a href="/artigos/campanha-de-whatsapp-opt-in-lista-e-mensagens-com-ia-sem-risco-de-banimento">campanha de WhatsApp com opt-in</a>. O segundo é usar ciclo fixo para todos: um cão pequeno e um grande não terminam a ração no mesmo dia. Use o histórico sempre que houver.</p>

    <p>O terceiro é mandar lembrete para quem já comprou. Se a venda não for registrada na planilha, o cliente recebe aviso de algo que já tem em casa. Combine com o lojista uma rotina de atualizar a última compra, ou leia isso do sistema de vendas. O quarto é transformar o lembrete em promoção toda vez; o aviso funciona porque é útil, não porque oferece desconto. Clientes que pararam de comprar pedem outro tratamento, descrito em <a href="/artigos/reativar-clientes-inativos-com-ia-lista-mensagem-e-oferta-sem-incomodar">reativar clientes inativos</a>.</p>

    <h2>Como começar esta semana</h2>

    <p>Escolha um comércio que você já conhece e que venda item de consumo recorrente. Ofereça um piloto de 30 dias com 30 clientes que já autorizaram contato, use a lista do dia como modelo de envio e meça quantos compraram depois do aviso. Com esse número em mãos, a conversa sobre mensalidade fica muito mais fácil. Para entender onde esse serviço se encaixa entre os tipos de automação, leia <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">agente, chatbot ou automação</a> e monte o seu primeiro pacote.</p>
  `,
  faq: [
    {
      question: "O que é um lembrete de recompra?",
      answer:
        "É um aviso enviado ao cliente pouco antes de acabar um produto que ele compra com frequência, como ração, água ou gás. A data é calculada pela última compra mais o ciclo de consumo, menos alguns dias de antecedência.",
    },
    {
      question: "Posso mandar o lembrete pelo WhatsApp de forma automática?",
      answer:
        "Pela plataforma oficial do WhatsApp Business, sim, desde que o cliente tenha dado permissão. A política exige modelos de mensagem aprovados fora da janela de 24 horas e obriga a respeitar pedidos para parar. Para começar, a lista diária com envio manual é mais simples.",
    },
    {
      question: "Quantos e-mails o Apps Script envia por dia?",
      answer:
        "Pela página oficial de cotas, 100 destinatários por dia em conta Gmail comum e 1.500 no Google Workspace. Cada execução pode durar até 6 minutos. Para um comércio de bairro, o limite comum costuma ser suficiente.",
    },
    {
      question: "Quanto cobrar por um serviço de lembrete de recompra?",
      answer:
        "Um formato comum é implantação mais mensalidade. Como referência ilustrativa, implantação entre R$ 500 e R$ 900 e mensalidade entre R$ 120 e R$ 250, conforme o número de clientes e o canal. Calcule com base nas suas horas e no seu custo de ferramentas.",
    },
    {
      question: "Preciso de autorização do cliente para enviar o lembrete?",
      answer:
        "Sim. Pela LGPD, é preciso ter base legal para usar os dados, e o WhatsApp exige permissão antes do contato. O jeito mais simples é pedir a autorização na compra, registrar a data e incluir uma opção de saída em toda mensagem.",
    },
  ],
  quiz: [
    {
      question: "Um cão come 300 g de ração por dia. Em quantos dias termina um saco de 15 kg?",
      options: ["Cerca de 30 dias", "Cerca de 50 dias", "Cerca de 90 dias"],
      answer: 1,
      explanation: "15.000 g divididos por 300 g dão 50 dias, a base do ciclo de recompra.",
    },
    {
      question: "Qual é o modelo de envio mais seguro para começar o serviço?",
      options: [
        "Disparo automático para todos os contatos do celular",
        "Lista diária com envio manual pelo atendente, só para quem autorizou",
        "Mensagem em grupo com todos os clientes",
      ],
      answer: 1,
      explanation: "A lista do dia mantém uma pessoa revisando cada envio e respeita a permissão do cliente.",
    },
  ],
};
