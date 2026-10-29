import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "fatura-do-cartao-com-ia-assinaturas-esquecidas-rotativo-e-o-que-nao-enviar",
  title: "Fatura do cartão com IA: achar assinaturas esquecidas e erros",
  seoTitle: "Fatura do cartão com IA: achar assinaturas esquecidas",
  excerpt:
    "Veja como ler a fatura do cartão com IA: agrupar gastos, achar assinaturas esquecidas e cobranças repetidas, entender o teto do rotativo e o que nunca enviar.",
  metaDescription:
    "Fatura do cartão com IA passo a passo: como mascarar dados, pedir o agrupamento por estabelecimento, achar assinaturas esquecidas, contestar cobrança e entender o teto de 100% do rotativo.",
  category: "iniciantes",
  articleSubcategory: "vida-pratica",
  date: "2026-10-29",
  readTime: 7,
  imageQuery: "credit card statement laptop coffee",
  seed: 898,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "A IA ajuda a agrupar os lançamentos da fatura por estabelecimento e a destacar valores que se repetem todo mês, o que revela assinaturas esquecidas em poucos minutos.",
    "Antes de enviar qualquer coisa ao chatbot, apague número do cartão, CPF, endereço e nome completo: a análise funciona só com data, estabelecimento e valor.",
    "Se a fatura atrasar, o total cobrado de juros e encargos do rotativo tem teto de 100% da dívida original desde 03/01/2024, segundo o governo federal, e cobrança indevida dá direito à devolução em dobro, salvo engano justificável.",
  ],
  content: `
    <p>Para analisar a fatura do cartão com IA, baixe o arquivo do aplicativo do banco, apague número do cartão, CPF e endereço, cole só data, estabelecimento e valor, e peça ao chatbot que agrupe os gastos por estabelecimento e destaque valores que se repetem todo mês. Em poucos minutos aparecem as assinaturas esquecidas e as cobranças que merecem uma conferência.</p>

    <p>A fatura chega com 30, 40 ou 60 linhas de nomes truncados, como "PAG*Servico" ou "EBN *Plataforma", e a maioria das pessoas só olha o total. Este guia mostra um método simples, com prompts prontos, e também o que não enviar à IA, o que a regra do rotativo diz e como contestar uma cobrança que você não reconhece. Os dados oficiais foram conferidos em 29/10/2026.</p>

    <h2>Por que a fatura esconde gasto que você nem lembra</h2>

    <p>O cartão facilita a cobrança recorrente: você cadastra uma vez, e o valor volta todo mês sem pedir nada. O teste gratuito de 7 dias vira plano pago, o app que você abriu uma vez continua cobrando, e o serviço que o filho assinou no seu cartão segue ativo. Cada item é pequeno, e por isso passa despercebido.</p>

    <p>Veja um exemplo fictício, só para fazer a conta. Três assinaturas esquecidas, de R$ 29,90, R$ 21,90 e R$ 19,90, somam R$ 71,70 por mês, ou R$ 860,40 por ano. É dinheiro suficiente para quitar uma conta de luz ou reforçar a <a href="/artigos/reserva-de-emergencia-para-quem-tem-renda-variavel-orcamento-com-ia-e-inss">reserva de emergência</a>. O problema nunca é um gasto grande, é a soma de vários que ninguém revisa.</p>

    <p>A IA entra bem nessa tarefa porque ela não se cansa de ler linhas repetidas. Ela compara nomes, agrupa e calcula. A decisão de cancelar continua sua, e o texto sobre <a href="/artigos/como-usar-ia-para-organizar-financas-pessoais">como usar IA para organizar as finanças pessoais</a> mostra como encaixar essa revisão em uma rotina mensal.</p>

    <h2>Passo a passo para analisar a fatura</h2>

    <ol>
      <li><strong>Baixe a fatura fechada.</strong> Prefira o arquivo em planilha (CSV ou XLS), quando o banco oferece. Se só houver PDF, copie a lista de lançamentos.</li>
      <li><strong>Apague os dados pessoais.</strong> Remova número do cartão, CPF, nome completo, endereço e código de barras. Fique só com data, descrição e valor.</li>
      <li><strong>Cole a lista no chatbot</strong> com o prompt abaixo.</li>
      <li><strong>Confira cada item suspeito</strong> no app do banco e no e-mail, procurando recibos e confirmações.</li>
      <li><strong>Cancele ou conteste</strong> o que não reconhece, guardando o protocolo.</li>
    </ol>

    <p>Se a sua fatura está em PDF escaneado ou em foto, o guia sobre <a href="/artigos/escanear-documentos-no-celular-recibos-garantias-e-contas-com-ia">escanear documentos no celular</a> ajuda a extrair o texto sem perder linhas. Quem está começando com planilhas pode usar o texto <a href="/artigos/aprender-planilhas-do-zero-com-ia-formulas-erros-e-exercicios">aprender planilhas do zero com IA</a> para somar por categoria.</p>

    <h2>Prompts prontos para colar</h2>

    <p>Quanto mais claro o pedido, melhor a resposta. O <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">guia de prompts</a> explica por que dar formato e limites ajuda, e aqui vão dois modelos.</p>

    <pre><code>Abaixo está a lista de lançamentos da minha fatura (data, descrição, valor). Não há dados pessoais. Tarefas: 1) agrupe por estabelecimento e some os valores; 2) liste os lançamentos que aparecem em mais de um mês ou com o mesmo valor; 3) marque descrições que você não consegue identificar; 4) apresente tudo em uma tabela com as colunas estabelecimento, quantidade, total e observação. Não invente informação: se não souber o que é um lançamento, escreva "não identificado".

[cole aqui a lista]</code></pre>

    <pre><code>Com base na tabela anterior, monte um checklist de conferência com os 5 lançamentos que eu devo verificar primeiro, do mais caro ao mais barato, e uma pergunta curta que eu possa fazer ao banco ou ao estabelecimento sobre cada um.</code></pre>

    <p>Depois de receber a tabela, abra o app do banco e confira os itens marcados. A IA pode confundir dois estabelecimentos com nomes parecidos, e é você quem confirma se a cobrança existe. O texto sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a> mostra por que essa checagem não é opcional.</p>

    <h2>Sinais de que um lançamento merece atenção</h2>

    <table>
      <thead>
        <tr><th>Sinal</th><th>O que pode ser</th><th>O que fazer</th></tr>
      </thead>
      <tbody>
        <tr><td>Mesmo valor todo mês</td><td>Assinatura ou mensalidade</td><td>Ver se você ainda usa; cancelar se não</td></tr>
        <tr><td>Valor pequeno de nome desconhecido</td><td>Teste de cartão ou cobrança indevida</td><td>Ligar para o banco e pedir bloqueio preventivo</td></tr>
        <tr><td>Mesma compra duas vezes no mesmo dia</td><td>Cobrança duplicada</td><td>Pedir estorno ao estabelecimento e ao banco</td></tr>
        <tr><td>Compra parcelada que acabou e continua</td><td>Parcela a mais ou nova contratação</td><td>Pedir o contrato e o detalhamento</td></tr>
        <tr><td>Compra em outra cidade ou país</td><td>Uso por terceiro</td><td>Bloquear o cartão e contestar</td></tr>
      </tbody>
    </table>

    <p>Quando o desconhecido vier acompanhado de uma mensagem pedindo "confirmação" por link, desconfie. O guia para <a href="/artigos/como-usar-ia-para-checar-mensagem-suspeita-e-evitar-golpes">checar mensagem suspeita</a> e o texto sobre o <a href="/artigos/golpe-do-pix-o-que-fazer-nas-primeiras-horas-med-e-uso-de-ia">golpe do Pix</a> mostram como agir nas primeiras horas.</p>

    <h2>O que nunca enviar para a IA</h2>

    <p>A fatura contém dados que valem dinheiro nas mãos erradas. Não cole o número completo do cartão, a data de validade, o código de segurança, o CPF, o endereço, a senha do aplicativo ou a foto da fatura inteira com o cabeçalho. A análise funciona com data, estabelecimento e valor, nada além.</p>

    <p>Também vale conferir as configurações do chatbot, porque alguns serviços usam as conversas para melhorar o produto, conforme as regras de cada plano. O texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">o que você entrega sem perceber</a> explica como ler essas opções. Para quem quer manter tudo no aparelho, há o caminho dos <a href="/artigos/ia-no-celular-sem-internet-gemini-nano-e-privacidade">modelos que rodam no celular sem internet</a>.</p>

    <div class="callout-box callout-warn">
      <span class="callout-label">Atenção</span>
      <p>Nenhuma IA precisa da sua senha ou do código que chega por SMS para analisar uma fatura. Se um serviço pedir isso, feche a página.</p>
    </div>

    <h2>Se a fatura atrasar: o teto do rotativo</h2>

    <p>Quando a fatura não é paga por inteiro, o saldo pode entrar no crédito rotativo ou ser parcelado. Segundo o <a href="https://www.gov.br/secom/pt-br/acompanhe-a-secom/noticias/2024/01/novo-teto-de-juros-do-cartao-de-credito-passa-a-valer-a-partir-desta-quarta" target="_blank" rel="noopener noreferrer">comunicado da Secretaria de Comunicação Social do governo federal</a>, consultado em 29/10/2026, o total devido não pode ultrapassar 100% da dívida original. A regra começou a valer em 03/01/2024 e vale para dívidas feitas a partir dessa data.</p>

    <p>A mesma página informa que a dívida do rotativo e do parcelamento de fatura pode ser transferida, por portabilidade, para outra instituição com condições melhores, e que a fatura passou a trazer o valor do pagamento mínimo, as opções de financiamento e o custo efetivo total. Use esses números para comparar antes de escolher pagar o mínimo. Peça à IA para calcular o custo de cada opção, mas confira a conta no simulador do próprio banco.</p>

    <h2>Cobrança que você não reconhece: como contestar</h2>

    <p>O primeiro passo é procurar a origem. Pesquise o nome do lançamento no e-mail e no histórico de pedidos. Se ainda assim não reconhecer, peça o estorno ao estabelecimento e abra a contestação no aplicativo do banco, anotando o número do protocolo. O Código de Defesa do Consumidor, em sua <a href="https://consumidor.gov.br/pages/conteudo/publico/102" target="_blank" rel="noopener noreferrer">versão publicada no consumidor.gov.br</a>, prevê no parágrafo único do artigo 42 o direito à devolução do que foi cobrado em excesso por valor igual ao dobro do que se pagou, salvo engano justificável.</p>

    <p>Guarde as provas: print da fatura, e-mails de cancelamento e protocolos. Quando a cobrança vier depois de um cancelamento, a mensagem ao estabelecimento deve ser escrita e objetiva. Peça à IA um rascunho e revise antes de enviar.</p>

    <pre><code>Escreva uma mensagem curta e educada para o atendimento da empresa [nome]. Contexto: cancelei o serviço em [data], protocolo [número], e a cobrança de R$ [valor] apareceu de novo na fatura de [mês]. Peça o cancelamento definitivo, o estorno em até 7 dias e a confirmação por escrito. Sem ameaças e sem citar leis.</code></pre>

    <h2>Erros comuns ao analisar a fatura com IA</h2>

    <ul class="checklist">
      <li>Enviar a fatura inteira, com número do cartão e CPF, em vez de só a lista de lançamentos.</li>
      <li>Aceitar a classificação da IA sem conferir no app, principalmente em nomes truncados.</li>
      <li>Cancelar a assinatura no cartão e esquecer de cancelar no aplicativo do serviço, que pode voltar a cobrar por outro meio.</li>
      <li>Pagar só o mínimo por falta de comparação, sem olhar as opções que a fatura passou a mostrar.</li>
      <li>Fazer a revisão uma vez e nunca mais. Marque 15 minutos no calendário, todo mês, logo depois do fechamento.</li>
    </ul>

    <p>Quem usa o <a href="/artigos/gerenciador-de-senhas-como-escolher-comecar-e-usar-com-seguranca">gerenciador de senhas</a> e a <a href="/artigos/chave-de-acesso-passkey-como-ativar-e-proteger-sua-conta-de-golpes">chave de acesso</a> no app do banco reduz o risco de alguém acessar a fatura por você. E, em épocas de promoção, o roteiro de <a href="/artigos/comprar-na-black-friday-comparar-precos-evitar-golpe-e-arrependimento">comprar na Black Friday sem arrependimento</a> ajuda a não transformar desconto em parcela esquecida.</p>

    <h2>Uma rotina de 15 minutos por mês</h2>

    <p>No dia seguinte ao fechamento da fatura, baixe a lista, mascare os dados e rode o primeiro prompt. Anote em uma planilha o que foi cancelado e quanto isso economiza por mês. Em três meses você terá um histórico claro, e a conversa com o banco, quando for preciso, ficará mais simples. Para entender também a ponta do salário, vale ler o guia do <a href="/artigos/holerite-com-ia-como-ler-descontos-inss-irrf-e-fgts-sem-erro">holerite com IA</a>.</p>

    <p>Comece hoje: abra a última fatura, separe os lançamentos de valor repetido e faça a primeira conferência. Se o assunto é novidade para você, o <a href="/categoria/iniciantes">guia de iniciantes do Portal da AI</a> reúne os próximos passos.</p>
  `,
  faq: [
    {
      question: "Posso enviar a fatura do cartão para o ChatGPT ou outra IA?",
      answer:
        "Pode enviar a lista de lançamentos, desde que você apague número do cartão, validade, código de segurança, CPF, endereço e nome completo. A análise precisa só de data, estabelecimento e valor. Revise também as configurações de privacidade do chatbot antes de colar qualquer coisa.",
    },
    {
      question: "Como achar assinaturas esquecidas no cartão?",
      answer:
        "Junte as últimas 3 faturas, mascare os dados e peça à IA para listar lançamentos com o mesmo valor ou o mesmo estabelecimento em meses diferentes. Depois confirme cada item no app do banco e no e-mail. O que se repete todo mês quase sempre é assinatura.",
    },
    {
      question: "Qual é o teto de juros do rotativo do cartão?",
      answer:
        "Segundo comunicado do governo federal, o total cobrado de juros e encargos sobre a dívida do rotativo não pode passar de 100% do valor original desde 03/01/2024. A regra vale para dívidas feitas a partir dessa data. Confira as condições na sua fatura.",
    },
    {
      question: "O que fazer se a cobrança no cartão for indevida?",
      answer:
        "Procure a origem no e-mail, peça o estorno ao estabelecimento e abra a contestação no aplicativo do banco, guardando o protocolo. O Código de Defesa do Consumidor prevê a devolução em dobro do valor cobrado em excesso, salvo engano justificável.",
    },
    {
      question: "A IA pode errar ao classificar os gastos da fatura?",
      answer:
        "Pode. Nomes truncados, como siglas de maquininha, levam a confusões entre estabelecimentos parecidos. Peça que a IA escreva \"não identificado\" quando não souber e confira os itens suspeitos no app do banco antes de cancelar qualquer coisa.",
    },
  ],
};
