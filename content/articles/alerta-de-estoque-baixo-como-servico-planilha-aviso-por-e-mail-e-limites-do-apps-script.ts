import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "alerta-de-estoque-baixo-como-servico-planilha-aviso-por-e-mail-e-limites-do-apps-script",
  title: "Alerta de estoque baixo como serviço: planilha e e-mail",
  seoTitle: "Alerta de estoque baixo como serviço com planilha",
  excerpt:
    "Monte um serviço de alerta de estoque baixo para lojas pequenas: planilha, fórmula de reposição e e-mail diário com Apps Script, com limites e preço a combinar.",
  metaDescription:
    "Alerta de estoque baixo como serviço: veja como montar a planilha, o e-mail automático com Apps Script, os limites do Google, o escopo e como cobrar o cliente.",
  category: "monetizacao",
  articleSubcategory: "automacao-e-agentes",
  date: "2026-11-02",
  readTime: 8,
  imageQuery: "small shop shelves inventory counting",
  seed: 1034,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Um alerta de estoque baixo é uma planilha com estoque mínimo por produto e um e-mail automático diário que lista só o que precisa ser reposto.",
    "O Google limita o envio de e-mails do Apps Script e o tempo dos gatilhos, e esses limites mudam entre conta pessoal e Google Workspace, então o desenho do serviço precisa respeitá-los.",
    "O serviço vale para lojas pequenas que ainda controlam estoque de cabeça ou em caderno: cobre-se implantação e manutenção, sem prometer faturamento ao cliente nem a você.",
  ],
  content: `
    <p>Alerta de estoque baixo como serviço é uma automação simples que você monta para uma loja pequena: uma planilha guarda o estoque atual e o mínimo de cada produto, e um e-mail diário avisa quais itens precisam de reposição. O dono deixa de descobrir a falta quando o cliente pergunta e passa a receber a lista pronta de manhã.</p>

    <p>É um serviço de entrada para quem está começando com automação, porque usa ferramentas gratuitas do Google, tem escopo curto e resolve uma dor concreta. Este guia mostra a planilha, o script, os limites do Google que você precisa conhecer, o que entregar, como combinar preço e os erros que mais derrubam esse tipo de projeto. Dados conferidos em 02/11/2026.</p>

    <h2>Para quem esse serviço faz sentido</h2>

    <p>O cliente ideal vende produtos com giro frequente e controla estoque de cabeça, no caderno ou numa planilha que ninguém olha: mercadinho de bairro, papelaria, loja de suplementos, petshop, loja de cosméticos, lanchonete com insumos. A dor aparece como venda perdida, compra de emergência mais cara ou dinheiro parado em excesso.</p>

    <p>Quando o negócio já tem sistema com alerta embutido, não há o que vender. E se o cliente não faz contagem nenhuma, o primeiro trabalho é organizar o estoque, não automatizar. O guia de <a href="/artigos/como-usar-ia-para-gerenciar-estoque-pequeno-comercio">IA para gerenciar estoque de pequeno comércio</a> mostra como começar esse controle antes do alerta. Em datas de pico, o aviso ganha valor extra, como no <a href="/artigos/natal-2026-como-planejar-estoque-promocoes-e-campanhas-com-ia-na-loja">planejamento de estoque para o Natal</a>.</p>

    <h2>Montando a planilha</h2>

    <p>Use o Google Planilhas, com uma aba de produtos e colunas fixas. A estrutura abaixo cobre a maioria dos casos pequenos.</p>

    <table>
      <thead>
        <tr><th>Coluna</th><th>O que guarda</th><th>Exemplo</th></tr>
      </thead>
      <tbody>
        <tr><td>A: Produto</td><td>Nome que o dono reconhece</td><td>Ração 10 kg</td></tr>
        <tr><td>B: Estoque atual</td><td>Quantidade contada</td><td>6</td></tr>
        <tr><td>C: Estoque mínimo</td><td>Ponto em que precisa repor</td><td>8</td></tr>
        <tr><td>D: Fornecedor</td><td>Quem entrega</td><td>Distribuidora Souza</td></tr>
        <tr><td>E: Prazo (dias)</td><td>Tempo de entrega</td><td>3</td></tr>
        <tr><td>F: Situação</td><td>Fórmula de alerta</td><td>REPOR</td></tr>
      </tbody>
    </table>

    <p>Na coluna F, a fórmula é simples:</p>

    <pre><code>=SE(B2&lt;=C2;"REPOR";"ok")</code></pre>

    <p>O estoque mínimo é a decisão mais importante. Uma regra prática para começar: vendas médias por dia multiplicadas pelo prazo de entrega, mais uma folga. Se a loja vende 3 sacos por dia e o fornecedor leva 3 dias, o mínimo é 9 mais uma folga de 2, ou seja, 11. Peça ao dono para confirmar os números e ajuste depois de duas semanas de uso. Para quem quer uma visão em gráficos depois, o serviço de <a href="/artigos/dashboard-para-pequeno-negocio-com-ia-servico-pacotes-e-entrega">dashboard para pequeno negócio</a> é um bom upgrade.</p>

    <h2>O e-mail automático com Apps Script</h2>

    <p>O Apps Script é o editor de código ligado ao Google Planilhas, em Extensões. A função abaixo lê a aba, junta os itens marcados como REPOR e manda um e-mail. Você pode pedir a um assistente de IA para gerar e explicar o código, mas teste sempre numa cópia da planilha. O artigo sobre <a href="/artigos/google-apps-script-com-ia-servico-de-automacao-para-sheets-e-gmail">Apps Script com IA como serviço</a> detalha essa rotina.</p>

    <pre><code>function enviarAlertaDeEstoque() {
  var aba = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Produtos");
  var linhas = aba.getDataRange().getValues();
  var itens = [];
  for (var i = 1; i &lt; linhas.length; i++) {
    if (linhas[i][5] === "REPOR") {
      itens.push(linhas[i][0] + ": " + linhas[i][1] + " em estoque (mínimo " + linhas[i][2] + ") - " + linhas[i][3]);
    }
  }
  if (itens.length === 0) return;
  MailApp.sendEmail("dono@exemplo.com.br", "Estoque baixo: " + itens.length + " itens", itens.join(String.fromCharCode(10)));
}</code></pre>

    <p>Depois, crie um gatilho por tempo: em Gatilhos, adicione um novo e escolha execução diária. Segundo a <a href="https://developers.google.com/apps-script/guides/triggers/installable" target="_blank" rel="noopener noreferrer">documentação do Google sobre gatilhos</a>, o horário pode variar dentro da janela escolhida (um gatilho das 9h pode disparar entre 9h e 10h), e o gatilho roda com a conta de quem o criou. Avise o cliente sobre isso.</p>

    <h2>Os limites do Google que você precisa conhecer</h2>

    <p>A <a href="https://developers.google.com/apps-script/guides/services/quotas" target="_blank" rel="noopener noreferrer">página de cotas do Apps Script</a> lista os limites. Em 02/11/2026, ela indica 100 destinatários de e-mail por dia para contas pessoais e 1.500 para contas Google Workspace, 90 minutos por dia de tempo total de gatilhos em contas pessoais contra 6 horas no Workspace, e 6 minutos por execução em ambos. Esses números podem mudar, então confira a página antes de fechar o projeto.</p>

    <p>Na prática, um e-mail diário com a lista completa cabe com folga em qualquer conta. O problema aparece se você mandar um e-mail por produto ou para muita gente. Por isso, o desenho certo é um único resumo por dia. A função <code>MailApp.getRemainingDailyQuota()</code>, descrita na <a href="https://developers.google.com/apps-script/reference/mail/mail-app" target="_blank" rel="noopener noreferrer">referência do MailApp</a>, mostra quantos destinatários ainda restam no dia. Outro cuidado: o script pede autorização para enviar e-mail em nome da conta, e o cliente precisa aceitá-la.</p>

    <h2>O que entregar e como cobrar</h2>

    <p>Defina o escopo por escrito. Um pacote enxuto inclui a planilha pronta, o mínimo calculado para os 30 a 50 produtos principais, o e-mail diário, um vídeo curto de uso e 30 dias de ajustes. Fora do escopo ficam integração com caixa registradora, leitura de código de barras e relatórios de venda. Para vender pacotes maiores, veja <a href="/artigos/como-vender-pacotes-de-automacao-de-ia-para-negocios-locais">como vender pacotes de automação para negócios locais</a>.</p>

    <p>Quanto cobrar depende da sua região, do tamanho da loja e do tempo gasto. Como exemplo de raciocínio, não de preço de mercado: se a implantação toma 6 horas e você valoriza sua hora em R$ 60, o piso é R$ 360, e uma mensalidade de suporte de R$ 80 cobre ajustes e dúvidas. Faça a sua conta e compare com o custo de uma venda perdida para o cliente. Para estruturar a mensalidade, leia sobre <a href="/artigos/retainer-de-automacao-mensalidade-suporte-e-contrato-para-freelancer">retainer de automação e contrato</a>. Nada disso garante clientes ou renda: o resultado depende de você achar quem tenha essa dor.</p>

    <h2>Cuidados com dados e contrato</h2>

    <p>A planilha de estoque normalmente não tem dado pessoal, o que simplifica as coisas. Mas, se ela passar a incluir clientes, fiado ou telefones, o <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">checklist de LGPD para pequeno negócio</a> passa a valer. Peça que a planilha fique na conta do cliente, compartilhe com você como editor apenas durante o projeto e registre isso no contrato.</p>

    <p>Também combine quem responde se o aviso não chegar. Gatilhos podem falhar, e o Google envia e-mail de falha ao dono do gatilho. Oriente o cliente a conferir a caixa de spam nos primeiros dias e a avisar você se um dia passar sem e-mail.</p>

    <h2>Erros comuns</h2>

    <ul class="checklist">
      <li>Mínimo chutado e nunca revisado: o alerta dispara demais ou de menos e o cliente perde a confiança.</li>
      <li>Estoque atual desatualizado: o alerta só é tão bom quanto a contagem. Combine quem atualiza e quando.</li>
      <li>Um e-mail por produto: estoura a cota e vira ruído. Prefira um resumo diário.</li>
      <li>Código copiado de IA sem teste: rode numa cópia, com dados fictícios, antes de ligar o gatilho.</li>
      <li>Prometer integração com sistema fechado sem checar se ele exporta dados.</li>
    </ul>

    <p>Outro caminho para o aviso é a própria regra de notificação do Planilhas, descrita na <a href="https://support.google.com/docs/answer/91588" target="_blank" rel="noopener noreferrer">ajuda do Google</a>: ela avisa quando alguém altera a planilha ou envia um formulário, com e-mail imediato ou resumo diário. Serve para saber que o estoque mudou, mas não filtra por produto abaixo do mínimo, por isso o script segue sendo a opção para o alerta de verdade.</p>

    <h2>Próximo passo</h2>

    <p>Monte primeiro a sua própria versão com dez produtos fictícios e teste o gatilho por uma semana. Com isso em mãos, você tem uma demonstração para mostrar a um comerciante conhecido. Se quiser variar o portfólio, os serviços de <a href="/artigos/formulario-de-pedido-e-orcamento-como-servico-google-forms-planilha-e-aviso-com-ia">formulário de pedido e orçamento</a> e de <a href="/artigos/confirmacao-de-consultas-e-lembretes-como-servico-google-agenda-whatsapp-e-ia">confirmação de consultas e lembretes</a> seguem a mesma lógica. E para ver outras ideias prontas, passe por <a href="/artigos/como-ganhar-dinheiro-vendendo-automacoes-prontas-com-ia">vender automações prontas com IA</a>.</p>
  `,
  faq: [
    {
      question: "O que é um alerta de estoque baixo?",
      answer:
        "É um aviso automático que informa quando a quantidade de um produto chega ao mínimo definido. Na versão mais simples, uma planilha compara o estoque atual com o mínimo e um script manda um e-mail diário com os itens a repor, para o dono comprar antes de faltar.",
    },
    {
      question: "Precisa saber programar para oferecer esse serviço?",
      answer:
        "Não é preciso ser programador, mas é preciso entender a lógica e testar bem. Um assistente de IA ajuda a escrever e explicar o código do Apps Script, e você valida numa cópia da planilha com dados fictícios. A fórmula da planilha e o gatilho se configuram sem código.",
    },
    {
      question: "Quantos e-mails o Apps Script pode enviar por dia?",
      answer:
        "Pela página de cotas do Google, conferida em 02/11/2026, contas pessoais enviam para até 100 destinatários por dia e contas Google Workspace até 1.500. Os limites mudam com o tempo, então consulte a página oficial antes de fechar o projeto e prefira um resumo diário.",
    },
    {
      question: "Quanto cobrar por um alerta de estoque?",
      answer:
        "Não há preço fixo. Some as horas de implantação, o valor da sua hora e um suporte mensal, e compare com o custo das vendas que o cliente perde por falta de produto. O exemplo do texto é só raciocínio de conta, não tabela de mercado, e não garante clientes.",
    },
    {
      question: "O alerta funciona com WhatsApp?",
      answer:
        "O desenho deste guia usa e-mail, que é o caminho direto do Apps Script. Enviar por WhatsApp exige outras ferramentas e regras de consentimento, com custos e riscos próprios. Comece pelo e-mail, valide o uso com o cliente e só então avalie outro canal.",
    },
  ],
};
