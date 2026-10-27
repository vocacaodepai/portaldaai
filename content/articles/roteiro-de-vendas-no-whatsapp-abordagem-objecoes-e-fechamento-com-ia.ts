import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "roteiro-de-vendas-no-whatsapp-abordagem-objecoes-e-fechamento-com-ia",
  title: "Roteiro de vendas no WhatsApp: objeções e fechamento com IA",
  seoTitle: "Roteiro de vendas no WhatsApp com IA: passo a passo",
  excerpt:
    "Roteiro de vendas no WhatsApp para pequeno negócio: como abordar, responder objeções e fechar com mensagens curtas, usando IA para rascunhar sem soar robô.",
  metaDescription:
    "Monte um roteiro de vendas no WhatsApp: primeira resposta, perguntas, proposta, objeções comuns e fechamento, com prompts de IA e regras de opt-in e CDC.",
  category: "negocios",
  articleSubcategory: "vendas-e-marketing",
  date: "2026-10-24",
  readTime: 8,
  imageQuery: "small business owner phone sales chat",
  seed: 629,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Um bom roteiro de vendas no WhatsApp tem cinco etapas curtas: primeira resposta, perguntas de diagnóstico, proposta, objeções e fechamento com próximo passo claro.",
    "A IA serve para rascunhar variações de mensagem e preparar respostas às objeções mais comuns, mas quem conhece o cliente e confirma preço e prazo é você.",
    "O que você promete por mensagem vale como oferta: o CDC trata a informação precisa como parte do contrato, e a política do WhatsApp exige opt-in para mensagens ativas.",
  ],
  content: `
    <p>Um roteiro de vendas no WhatsApp é uma sequência curta de mensagens que leva a conversa do primeiro oi até o pagamento: responder rápido, entender o que o cliente precisa, apresentar a proposta, tratar objeções e propor o próximo passo. Com a IA, você prepara os rascunhos e as respostas prontas em uma tarde, e passa a vender com menos improviso.</p>

    <p>Para o pequeno negócio, o WhatsApp é o balcão. A pessoa chega com uma pergunta de preço e a venda se decide em poucas trocas de mensagem. Quem responde sem método perde clientes por demora, por texto longo ou por falar de preço antes de entender o problema. Este guia entrega um roteiro em cinco etapas, prompts para a IA ajudar na redação, exemplos de objeção com resposta e os cuidados legais para não prometer o que não pode cumprir.</p>

    <h2>Por que um roteiro ajuda a vender mais no WhatsApp</h2>

    <p>Sem roteiro, cada atendimento depende do humor e da memória de quem responde. Com roteiro, você sabe o que perguntar, em que ordem e o que oferecer. Isso não deixa a conversa mecânica: o roteiro é um mapa, e você adapta as palavras ao cliente. A diferença aparece em três pontos: a primeira resposta sai em minutos, a conversa avança por etapas e nenhum pedido se perde no meio.</p>

    <p>Outra vantagem é treinar a equipe. Quando o dono escreve o roteiro e o compartilha, o atendente novo responde no mesmo tom desde o primeiro dia, assunto que também aparece em <a href="/artigos/treinar-funcionario-novo-com-ia-roteiro-da-primeira-semana-no-pequeno-negocio">treinar funcionário novo com IA</a>. E se você ainda não organizou o básico do aplicativo (catálogo, etiquetas, respostas rápidas), comece por <a href="/artigos/whatsapp-business-para-pequeno-negocio-catalogo-etiquetas-e-respostas">WhatsApp Business para pequeno negócio</a>, que é a base deste roteiro.</p>

    <h2>As cinco etapas do roteiro</h2>

    <table>
      <thead>
        <tr><th>Etapa</th><th>Objetivo</th><th>Exemplo de mensagem</th></tr>
      </thead>
      <tbody>
        <tr><td>1. Primeira resposta</td><td>Mostrar presença e abrir a conversa</td><td>Oi, Carla! Aqui é o Rogério, da Marcenaria Rocha. Vi que você perguntou sobre armário. Posso te fazer duas perguntas rápidas?</td></tr>
        <tr><td>2. Diagnóstico</td><td>Entender necessidade, prazo e orçamento</td><td>É para qual cômodo? Já tem a medida? Precisa para quando?</td></tr>
        <tr><td>3. Proposta</td><td>Apresentar opção clara com valor</td><td>Pelo que você contou, a opção A atende. Fica R$ 2.800 em até 3x, entrega em 20 dias úteis.</td></tr>
        <tr><td>4. Objeções</td><td>Tirar dúvidas sem pressionar</td><td>Entendo. Quer que eu mostre a opção B, mais enxuta?</td></tr>
        <tr><td>5. Fechamento</td><td>Propor um próximo passo único</td><td>Posso reservar a data de medição na quinta às 14h? Mando o Pix do sinal em seguida.</td></tr>
      </tbody>
    </table>

    <p>O exemplo é de uma marcenaria fictícia em Belo Horizonte, com números ilustrativos para mostrar o formato: a mensagem é curta, termina em pergunta e sempre aponta um próximo passo. Adapte o vocabulário ao seu negócio e ao jeito de falar da sua região.</p>

    <h2>Etapa 1 e 2: responder rápido e descobrir o que o cliente quer</h2>

    <p>A primeira resposta deve chegar o mais rápido possível, porque quem pergunta preço costuma conversar com mais de um vendedor ao mesmo tempo. Se você não consegue responder na hora, deixe uma mensagem de ausência com prazo de retorno, como mostra o texto sobre <a href="/artigos/atendimento-fora-do-horario-mensagem-de-ausencia-e-retorno-organizado-com-ia">atendimento fora do horário</a>. E responda o que foi perguntado antes de fazer suas perguntas, para a conversa não parecer interrogatório.</p>

    <p>No diagnóstico, faça no máximo três perguntas por vez. Elas devem levar à proposta: o que a pessoa precisa, para quando e qual faixa de investimento faz sentido. Anote as respostas em etiquetas do aplicativo ou em uma planilha simples. A IA pode ajudar a preparar perguntas específicas para o seu nicho:</p>

    <pre><code>Sou dono de [tipo de negócio] em [cidade]. Escreva 5 perguntas curtas, em tom amigável,
que eu possa fazer no WhatsApp a um cliente novo para entender o que ele precisa antes de passar preço.
Cada pergunta deve caber em uma linha e não pode soar como formulário.</code></pre>

    <h2>Etapa 3: a proposta que cabe numa tela</h2>

    <p>Proposta no WhatsApp precisa caber em uma tela do celular. Traga a opção recomendada, o valor, a forma de pagamento e o prazo. Se houver orçamento mais detalhado, envie em PDF depois, como no fluxo de <a href="/artigos/ia-para-orcamentos-e-cotacoes-responder-clientes-rapido">orçamentos e cotações com IA</a>, e use o <a href="/artigos/propostas-comerciais-com-ia-como-fechar-mais-contratos">modelo de proposta comercial</a> quando o ticket for maior.</p>

    <p>Dê, no máximo, duas opções. Três ou quatro opções fazem o cliente adiar a decisão. E confira sempre os números antes de enviar: o <a href="https://www2.camara.leg.br/legin/fed/lei/1990/lei-8078-11-setembro-1990-365086-publicacaooriginal-1-pl.html" target="_blank" rel="noopener noreferrer">Código de Defesa do Consumidor</a>, na leitura de 24/10/2026, diz em seu artigo 30 que toda informação suficientemente precisa veiculada por qualquer meio obriga o fornecedor, e o artigo 31 exige informações corretas, claras e precisas na oferta. Preço, prazo e condição escritos no chat são prova.</p>

    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Se usar IA para rascunhar a proposta, cole você mesmo a tabela de preços no prompt e releia o resultado antes de enviar. Nunca deixe o modelo "completar" um valor que você não informou.</p></div>

    <h2>Etapa 4: as objeções mais comuns e como responder</h2>

    <p>Objeção é dúvida em voz alta, não recusa. Prepare respostas para as cinco mais frequentes e ajuste ao seu caso.</p>

    <h3>"Está caro"</h3>
    <p>Não discuta preço de imediato. Pergunte o que está sendo comparado: "Você viu outra opção? Me conta o que ela inclui para eu te mostrar a diferença." Se for só questão de orçamento, ofereça uma versão menor ou parcelamento claro.</p>

    <h3>"Vou pensar"</h3>
    <p>Tudo bem, e peça permissão para um retorno: "Claro! Posso te chamar na quinta para saber se ficou alguma dúvida?" Isso mantém o contato sem pressão e mostra respeito pelo tempo do cliente.</p>

    <h3>"Achei mais barato em outro lugar"</h3>
    <p>Pergunte o que está incluído (garantia, entrega, instalação, prazo). Se a diferença for real, diga isso com calma. Evite baixar o preço sem motivo: isso ensina o cliente a pedir desconto sempre.</p>

    <h3>"Posso pagar depois?"</h3>
    <p>Defina antes a sua política: sinal, parcelamento ou pagamento na entrega. Responder com regra clara evita improviso e mal-entendido.</p>

    <h3>"Não sei se vai funcionar para mim"</h3>
    <p>Mostre um caso parecido, uma foto de trabalho feito ou uma garantia que você realmente oferece. Não invente depoimento nem prometa resultado que não controla.</p>

    <p>Use a IA para criar variações dessas respostas no seu tom:</p>

    <pre><code>Escreva 3 versões curtas (até 3 linhas) de resposta no WhatsApp para a objeção "está caro",
para um cliente de [tipo de negócio]. Tom: educado, sem pressão, sem inventar desconto.
Cada versão deve terminar com uma pergunta que ajude a entender o que o cliente compara.</code></pre>

    <h2>Etapa 5: fechamento com um próximo passo só</h2>

    <p>Quem fecha bem não pergunta "e aí, vai querer?". Propõe um passo concreto: reservar a data, enviar a chave Pix do sinal, confirmar o endereço de entrega. Uma só ação por mensagem, com data e horário quando possível. Depois que o cliente confirma, envie um resumo do combinado (item, valor, prazo, forma de pagamento) e peça um "ok" de volta, o que deixa o acordo registrado.</p>

    <p>Se o negócio trabalha com agenda, conecte esse passo ao <a href="/artigos/agenda-online-para-negocio-de-servico-menos-faltas-com-google-agenda-e-ia">agendamento online</a>. Se cobra mensalidade, vale ver o <a href="/artigos/pix-automatico-para-pequeno-negocio-cobrar-mensalidades-com-ia">Pix Automático</a>. E atenção a um detalhe do artigo 49 do CDC: quando a compra acontece fora do estabelecimento comercial, como por telefone ou mensagem, o consumidor pode desistir no prazo de 7 dias, a contar da assinatura ou do recebimento. Informe essa regra no fechamento se o seu negócio vende produtos ou serviços à distância.</p>

    <h2>Regras do canal: opt-in e respeito ao cliente</h2>

    <p>Responder a quem escreveu para você é o caso mais simples. Mensagem ativa, que você inicia, exige permissão. A <a href="https://whatsappbusiness.com/policy/" target="_blank" rel="noopener noreferrer">política da WhatsApp Business</a> (última atualização em 23/09/2026, conforme a página consultada em 24/10/2026) diz que a empresa precisa ter recebido o consentimento do destinatário para mensagens futuras e respeitar pedidos de parar de receber. O guia de <a href="/artigos/campanha-de-whatsapp-opt-in-lista-e-mensagens-com-ia-sem-risco-de-banimento">campanha de WhatsApp com opt-in</a> detalha como montar a lista sem risco.</p>

    <p>Os dados que o cliente informa no chat também merecem cuidado. Veja o <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">checklist de LGPD para pequeno negócio</a> antes de colar conversas inteiras em ferramentas de IA, e prefira apagar nome e telefone dos trechos usados em prompts.</p>

    <h2>Erros comuns no atendimento comercial</h2>

    <ul class="checklist">
      <li>Mandar preço antes de entender o que o cliente precisa.</li>
      <li>Escrever blocos de texto longos ou enviar vários áudios seguidos sem resumo.</li>
      <li>Deixar a conversa morrer sem um retorno combinado.</li>
      <li>Prometer prazo ou desconto de memória e depois não conseguir cumprir.</li>
      <li>Responder objeção com argumento defensivo, em vez de uma pergunta.</li>
      <li>Colar a mensagem da IA sem ajustar o tom, o que o cliente percebe de longe.</li>
    </ul>

    <h2>Depois da venda: o que fazer com o roteiro</h2>

    <p>O roteiro termina quando o cliente recebe e fica satisfeito. Envie uma mensagem de acompanhamento, como em <a href="/artigos/pos-venda-com-ia-mensagem-de-acompanhamento-e-pedido-de-avaliacao">pós-venda com pedido de avaliação</a>, e guarde os contatos que não compraram para retomar depois, seguindo o método de <a href="/artigos/reativar-clientes-inativos-com-ia-lista-mensagem-e-oferta-sem-incomodar">reativar clientes inativos</a>. Quem comprou e gostou é a melhor fonte do próximo cliente: veja o <a href="/artigos/programa-de-indicacao-de-clientes-com-ia-pequeno-negocio">programa de indicação</a>.</p>

    <p>Quer colocar tudo em prática esta semana? Escreva as cinco etapas com as suas palavras, peça à IA três variações de cada uma e teste por duas semanas, anotando onde as conversas travam. Para mais ideias de venda e marketing, passe pela categoria de <a href="/categoria/negocios">IA para negócios</a>.</p>
  `,
  faq: [
    {
      question: "Como montar um roteiro de vendas no WhatsApp?",
      answer:
        "Divida a conversa em cinco etapas: primeira resposta, perguntas de diagnóstico, proposta, objeções e fechamento. Escreva uma mensagem curta para cada uma, no seu tom, e use a IA para criar variações. Teste por duas semanas e ajuste onde as conversas travam.",
    },
    {
      question: "Posso usar IA para responder clientes no WhatsApp?",
      answer:
        "Pode usar para rascunhar respostas e preparar variações, e a política da WhatsApp Business admite automação na janela de 24 horas, com caminho para falar com uma pessoa. Confira preço, prazo e condições antes de enviar, porque o que você escreve vale como oferta.",
    },
    {
      question: "Qual a melhor forma de responder à objeção de preço?",
      answer:
        "Pergunte o que o cliente está comparando e mostre o que o seu preço inclui, como garantia, prazo e atendimento. Se fizer sentido, ofereça uma versão menor ou parcelamento claro. Evite baixar o valor sem motivo, porque isso estimula pedidos de desconto toda vez.",
    },
    {
      question: "Posso mandar mensagem para clientes que não falaram comigo?",
      answer:
        "Só com permissão. A política da WhatsApp Business exige que a empresa tenha recebido opt-in do destinatário para as mensagens seguintes e que respeite pedidos de parar. Monte a lista com consentimento claro e ofereça uma forma simples de sair.",
    },
    {
      question: "O cliente pode desistir de uma compra feita pelo WhatsApp?",
      answer:
        "Em compras feitas fora do estabelecimento comercial, como por telefone ou mensagem, o artigo 49 do Código de Defesa do Consumidor prevê desistência em 7 dias, a contar da assinatura ou do recebimento. Informe essa regra ao cliente e registre o combinado por escrito.",
    },
  ],
};
