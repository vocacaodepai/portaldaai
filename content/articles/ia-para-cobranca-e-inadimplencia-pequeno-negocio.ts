import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "ia-para-cobranca-e-inadimplencia-pequeno-negocio",
  title: "Cobrança com IA: como reduzir a inadimplência na sua empresa",
  seoTitle: "Cobrança com IA: reduza a inadimplência do seu negócio",
  excerpt:
    "Cobrança com IA ajuda pequenos negócios a lembrar clientes, escrever mensagens educadas e reduzir a inadimplência. Veja régua, prompts e cuidados com a LGPD.",
  metaDescription:
    "Cobrança com IA para pequeno negócio: monte uma régua de cobrança, use prompts para mensagens educadas e organize recebíveis na planilha sem violar a LGPD.",
  category: "negocios",
  articleSubcategory: "financas-e-precificacao",
  date: "2026-10-08",
  readTime: 7,
  imageQuery: "invoice payment laptop desk",
  seed: 182,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Cobrança com IA funciona melhor quando você cria uma régua fixa de lembretes (antes, no dia e depois do vencimento) e usa a IA para escrever e adaptar as mensagens.",
    "Uma planilha de recebíveis simples, com vencimento, valor e status de cada cliente, é a base que permite à IA indicar quem cobrar hoje.",
    "Dados de clientes usados na cobrança entram na LGPD: compartilhe com a IA só o necessário, de preferência sem CPF e sem dados bancários.",
  ],
  sources: [
    { label: "ANPD: Autoridade Nacional de Proteção de Dados", url: "https://www.gov.br/anpd/pt-br" },
    { label: "Serpro: o que muda com a LGPD", url: "https://www.serpro.gov.br/lgpd/menu/a-lgpd/o-que-muda-com-a-lgpd" },
    { label: "Sebrae RN: inteligência artificial para pequenos negócios", url: "https://blog.rn.sebrae.com.br/inteligencia-artificial-pequenos-negocios/" },
  ],
  content: `
    <p>Cobrança com IA é usar inteligência artificial para organizar quem deve, quando lembrar cada cliente e como escrever a mensagem de cobrança sem constrangimento. Na prática, você mantém uma planilha de recebíveis, define uma régua de lembretes e pede para a IA redigir e ajustar o tom de cada aviso.</p>

    <p>Para pequeno negócio, a inadimplência raramente vem de má-fé: quase sempre é esquecimento, boleto perdido ou vergonha de avisar que não vai pagar. O <a href="https://blog.rn.sebrae.com.br/inteligencia-artificial-pequenos-negocios/" rel="noopener noreferrer">guia do Sebrae RN sobre IA para pequenos negócios</a> mostra que atendimento e gestão estão entre os usos mais simples para começar. Este texto leva essa ideia para o dinheiro que está parado na rua, e complementa o <a href="/artigos/fluxo-de-caixa-com-ia-guia-pequenos-negocios">guia de fluxo de caixa com IA</a>.</p>

    <h2>O que é cobrança com IA e o que ela não faz</h2>
    <p>A IA não cobra por você, não decide quem é caloteiro e não deve ter acesso à sua conta bancária. O papel dela é de assistente administrativo: lê a lista de títulos a receber, separa quem vence nos próximos dias, quem já atrasou e escreve a mensagem adequada para cada caso.</p>
    <p>Três tarefas rendem mais. A primeira é a <strong>redação</strong>: mensagens curtas, educadas e com o link de pagamento no lugar certo. A segunda é a <strong>priorização</strong>: de 40 títulos em aberto, quais merecem contato hoje. A terceira é o <strong>registro</strong>: transformar conversas soltas do WhatsApp em anotações na planilha.</p>
    <p>O envio pode ser manual ou automático. Quem já usa um fluxo de atendimento encontra no guia de <a href="/artigos/como-automatizar-atendimento-no-whatsapp-com-ia">automatizar o atendimento no WhatsApp com IA</a> o caminho para disparar os lembretes, e quem quer ligar planilha e mensagem sem programar pode comparar as opções em <a href="/artigos/make-ou-zapier-qual-automacao-com-ia-vale-mais-a-pena">Make ou Zapier</a>. O ponto de partida, porém, é sempre o mesmo: ter os dados organizados.</p>

    <h2>Passo a passo para montar a cobrança com IA</h2>
    <ol>
      <li><strong>Liste todos os recebíveis.</strong> Uma linha por título, com cliente, descrição, valor, data de emissão, data de vencimento e forma de pagamento.</li>
      <li><strong>Crie uma coluna de status.</strong> Use poucas opções: a vencer, pago, atrasado, negociado. Quanto menos categorias, menos erro.</li>
      <li><strong>Defina a régua de cobrança.</strong> Escolha os dias de contato (veja a tabela abaixo) e escreva uma regra simples, como "atraso acima de 10 dias vai para ligação".</li>
      <li><strong>Peça os textos à IA.</strong> Gere uma versão de cada etapa da régua e salve como modelo. Ajuste o tom para o seu jeito de falar.</li>
      <li><strong>Revise antes de enviar.</strong> Confira nome, valor e data. Uma cobrança errada custa mais caro do que o atraso.</li>
      <li><strong>Atualize a planilha no mesmo dia.</strong> Pagamento recebido, promessa de data e renegociação entram na linha do cliente.</li>
    </ol>
    <p>Se a planilha ainda é um ponto fraco, o guia de <a href="/artigos/ia-para-planilhas-automatizar-relatorios-excel-sheets">IA para planilhas</a> mostra como montar fórmulas e relatórios, inclusive um painel de vencidos por faixa de dias. E quando a cobrança vira rotina repetida, vale olhar a lógica de <a href="/artigos/automacao-com-ia-economize-horas-de-trabalho">automação com IA para economizar horas de trabalho</a>.</p>

    <h2>Régua de cobrança: quando e como lembrar o cliente</h2>
    <p>Régua de cobrança é a sequência fixa de contatos ligada ao vencimento. Ela tira a cobrança do improviso e evita dois erros: cobrar tarde demais e cobrar o cliente bom com o mesmo tom usado para o devedor antigo. A tabela abaixo é um ponto de partida, e você ajusta os prazos ao seu tipo de venda.</p>
    <table>
      <thead>
        <tr>
          <th>Momento</th>
          <th>Objetivo</th>
          <th>Tom</th>
          <th>O que a mensagem leva</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>D-3 (3 dias antes)</td>
          <td>Lembrar e evitar esquecimento</td>
          <td>Leve, de aviso</td>
          <td>Valor, data e link ou chave Pix</td>
        </tr>
        <tr>
          <td>D0 (dia do vencimento)</td>
          <td>Facilitar o pagamento do dia</td>
          <td>Cordial e curto</td>
          <td>Código de barras ou Pix copia e cola</td>
        </tr>
        <tr>
          <td>D+3 (3 dias depois)</td>
          <td>Descobrir se houve problema</td>
          <td>Atencioso, pergunta aberta</td>
          <td>Segunda via e pedido de confirmação</td>
        </tr>
        <tr>
          <td>D+10 (10 dias depois)</td>
          <td>Combinar uma data realista</td>
          <td>Firme e respeitoso</td>
          <td>Valor atualizado e proposta de acordo</td>
        </tr>
      </tbody>
    </table>
    <div class="callout-box callout-tip">
      <span class="callout-label">Dica</span>
      <p>Cliente que sempre paga em dia pode pular o D-3 e receber só o D0. Cliente que já atrasou duas vezes ganha um contato extra em D-5. A régua é um padrão, não uma regra rígida.</p>
    </div>

    <h2>Exemplo brasileiro: uma gráfica rápida em Campinas</h2>
    <p>Este é um cenário ilustrativo, com números inventados para mostrar a conta. Uma gráfica em Campinas vende R$ 38.000 por mês, e boa parte é para empresas clientes, com pagamento em 28 dias via boleto. A dona controlava os vencimentos num caderno e cobrava só quando lembrava, quase sempre por ligação, o que a deixava desconfortável.</p>
    <p>Ela passou a registrar os 45 títulos do mês numa planilha do Google Sheets (plano gratuito) e a usar uma IA de conversa para gerar os quatro textos da régua. No fim de cada dia, colava na IA só as linhas com vencimento em três dias ou menos, sem CPF nem endereço, e recebia a lista de quem lembrar.</p>
    <p>Imagine que, antes, R$ 6.840 (18% da venda) ficassem atrasados mais de 15 dias. Com a régua, suponha que esse valor caísse para R$ 3.420 (9%). A diferença, R$ 3.420, volta ao caixa uma ou duas semanas antes, o que reduz a necessidade de pedir adiantamento ao banco. O ganho vem do hábito de lembrar, e não da tecnologia em si. Para saber o quanto cada atraso pesa no mês, o <a href="/artigos/como-fazer-previsao-de-vendas-planejamento-financeiro-com-ia">guia de previsão de vendas e planejamento financeiro com IA</a> ajuda a projetar o recebimento.</p>

    <h2>Prompts prontos para mensagens de cobrança educadas</h2>
    <p>Bons prompts trazem contexto, tom e limite de tamanho. O guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">como escrever comandos que funcionam</a> explica a lógica, e os três modelos abaixo servem para começar. Troque o que está entre colchetes.</p>
    <pre><code>Escreva uma mensagem de WhatsApp de até 40 palavras, tom leve e cordial, lembrando que a fatura de [valor] do cliente [primeiro nome] vence em 3 dias, em [data]. Inclua a chave Pix [chave] e termine oferecendo ajuda caso haja algum problema. Não use ameaça nem linguagem de cobrança agressiva.</code></pre>
    <pre><code>O cliente [primeiro nome] está 10 dias atrasado em [valor]. Já enviei dois lembretes sem resposta. Escreva uma mensagem firme e respeitosa de até 60 palavras propondo pagar em até [prazo] ou parcelar em [número] vezes. Deixe claro que quero resolver juntos e peça uma resposta até [data].</code></pre>
    <pre><code>Segue minha lista de recebíveis (sem CPF e sem dados bancários): [cole as linhas com cliente, valor, vencimento e status]. Hoje é [data]. Separe em três grupos: vence em até 3 dias, venceu há 1 a 9 dias, venceu há 10 dias ou mais. Para cada grupo, diga em uma linha qual mensagem da régua enviar.</code></pre>

    <h2>LGPD na cobrança: cuidado com os dados dos clientes</h2>
    <p>Nome, telefone, e-mail e histórico de pagamento são dados pessoais quando se referem a uma pessoa. Mesmo vendendo para empresas, você lida com o contato de gente de carne e osso. A <a href="https://www.serpro.gov.br/lgpd/menu/a-lgpd/o-que-muda-com-a-lgpd" rel="noopener noreferrer">explicação do Serpro sobre a LGPD</a> resume dois princípios que valem aqui: usar o dado para uma finalidade definida e limitar o uso ao que for necessário. A cobrança de contrato firmado costuma ser uma das bases legais previstas, mas confirme o seu caso com um contador ou advogado.</p>
    <ul class="checklist">
      <li>Cole na IA só o necessário: primeiro nome, valor e vencimento bastam</li>
      <li>Nunca envie CPF, número de conta, senha ou foto de documento</li>
      <li>Leia a política de privacidade da ferramenta e desligue o uso das conversas para treino, quando houver essa opção</li>
      <li>Não exponha dívida em grupo, status público ou mensagem para terceiros</li>
      <li>Guarde o registro de cada contato e apague dados que não precisa mais</li>
    </ul>
    <p>Para entender o que a IA faz com o que você digita, leia <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade: o que você entrega sem perceber</a>. A <a href="https://www.gov.br/anpd/pt-br" rel="noopener noreferrer">ANPD</a> é o órgão que orienta e fiscaliza o tema no país.</p>

    <h2>Erros comuns na cobrança com IA</h2>
    <ul>
      <li><strong>Mandar a mensagem sem revisar.</strong> A IA erra nome, valor e data com facilidade, e uma cobrança de título já pago queima a relação com o cliente.</li>
      <li><strong>Usar tom ameaçador.</strong> Constrangimento e exposição pública da dívida podem gerar problema jurídico. Peça sempre tom respeitoso no prompt.</li>
      <li><strong>Cobrar só depois do atraso.</strong> O lembrete antes do vencimento custa pouco e resolve boa parte dos casos.</li>
      <li><strong>Deixar a planilha desatualizada.</strong> Cobrar quem já pagou é o erro mais comum de quem automatiza sem atualizar o status.</li>
      <li><strong>Ignorar a causa.</strong> Se o mesmo cliente atrasa sempre, o problema pode estar no prazo ou no preço combinado. Veja como ajustar em <a href="/artigos/como-precificar-produtos-e-servicos-com-ia">precificar produtos e serviços com IA</a>.</li>
      <li><strong>Esquecer o início da relação.</strong> Combinar prazo e forma de pagamento por escrito na venda evita boa parte dos atrasos. O guia de <a href="/artigos/ia-para-orcamentos-e-cotacoes-responder-clientes-rapido">orçamentos e cotações com IA</a> mostra como deixar isso claro desde a proposta.</li>
    </ul>

    <p>Comece pequeno: monte a planilha dos próximos 30 dias, escreva os quatro textos da régua e envie o primeiro lembrete amanhã. Depois, conecte com <a href="/artigos/como-usar-ia-para-reduzir-custos-operacionais-pequenos-negocios">a redução de custos operacionais</a> e com a <a href="/artigos/como-usar-ia-para-reduzir-cancelamento-de-clientes">retenção de clientes</a>, porque cobrar bem e manter o cliente caminham juntos. Mais ideias estão na seção <a href="/categoria/negocios">Negócios com IA</a>.</p>
  `,
  faq: [
    {
      question: "Como usar IA para cobrar clientes sem constranger?",
      answer:
        "Peça à IA mensagens curtas, com tom cordial, valor e data claros e uma saída prática, como Pix ou segunda via. Evite ameaça e exposição da dívida. Sempre revise o texto antes de enviar e ofereça uma conversa para negociar, porque quase todo atraso tem uma causa simples.",
    },
    {
      question: "O que é régua de cobrança?",
      answer:
        "É a sequência fixa de contatos ligada ao vencimento do título. Um exemplo comum envia lembrete 3 dias antes, aviso no dia, contato 3 dias depois e proposta de acordo após 10 dias. Ela evita cobrança tardia e dá previsibilidade, e você adapta os prazos ao seu tipo de venda.",
    },
    {
      question: "Posso passar a lista de clientes devedores para o ChatGPT?",
      answer:
        "Só o mínimo necessário. Use primeiro nome, valor e vencimento, e deixe de fora CPF, endereço e dados bancários. A LGPD pede finalidade definida e uso limitado ao necessário. Confira as configurações de privacidade da ferramenta e, em caso de dúvida, consulte um contador ou advogado.",
    },
    {
      question: "A IA consegue enviar as cobranças sozinha?",
      answer:
        "Sim, quando ligada a ferramentas de automação e a um canal como o WhatsApp Business. Mesmo assim, comece com envio manual para validar textos e dados. Automatize apenas as etapas leves da régua, como o lembrete antes do vencimento, e mantenha a negociação de atrasos longos com uma pessoa.",
    },
    {
      question: "Qual planilha usar para controlar contas a receber?",
      answer:
        "Google Sheets ou Excel bastam no início. Crie colunas para cliente, descrição, valor, emissão, vencimento, forma de pagamento e status. Com poucos títulos por mês, isso resolve. Quando o volume crescer, vale avaliar um sistema de gestão financeiro que emita boletos e envie lembretes.",
    },
  ],
};
