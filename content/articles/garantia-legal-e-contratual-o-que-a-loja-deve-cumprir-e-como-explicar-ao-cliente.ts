import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "garantia-legal-e-contratual-o-que-a-loja-deve-cumprir-e-como-explicar-ao-cliente",
  title: "Garantia legal e contratual: o que a loja deve cumprir e explicar",
  seoTitle: "Garantia legal e contratual: o que a loja deve cumprir",
  excerpt:
    "Garantia legal e contratual: veja prazos de 30 e 90 dias, o termo escrito, como contar o prazo e como a IA ajuda a explicar a garantia ao cliente sem erro.",
  metaDescription:
    "Garantia legal e contratual na pequena loja: prazos do CDC, o que o termo de garantia precisa dizer, como o prazo é contado e como usar IA para responder clientes.",
  category: "negocios",
  articleSubcategory: "retencao-e-experiencia",
  date: "2026-10-28",
  readTime: 7,
  imageQuery: "shop owner handing product warranty card customer",
  seed: 877,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "A garantia legal do Código de Defesa do Consumidor é de 30 dias para produto não durável e de 90 dias para durável, e vale mesmo que a loja não ofereça nada além disso.",
    "A garantia contratual é voluntária, complementa a legal e precisa ser entregue por termo escrito, dizendo o que cobre, como e onde usar, por quanto tempo e quais custos o cliente paga.",
    "A IA ajuda a redigir o termo e as respostas, mas o texto final deve ser conferido com a lei e com o contador ou advogado, porque a contagem dos prazos tem interpretações diferentes.",
  ],
  content: `
    <p>Garantia legal é o prazo mínimo que o Código de Defesa do Consumidor (CDC) dá ao cliente para reclamar de defeito: 30 dias para produto não durável e 90 dias para durável. Garantia contratual é a que a loja oferece por vontade própria, por escrito, somando-se à legal. Quem vende precisa saber a diferença, porque é aí que nascem as brigas de balcão e as reclamações públicas.</p>

    <p>Na pequena loja, o problema costuma ser de comunicação: o cliente ouve "tem um ano de garantia" e entende que tudo está coberto, enquanto o vendedor pensou só no fabricante. Este guia explica os dois tipos de garantia, o que o termo escrito deve conter, como o prazo é contado, um exemplo com números, prompts para a IA ajudar e os erros mais comuns. É um texto informativo, não aconselhamento jurídico.</p>

    <h2>Qual é a diferença entre garantia legal e contratual?</h2>

    <p>De acordo com o <a href="https://mpce.mp.br/decon/duvidas/produtos/garantia-contratual/" target="_blank" rel="noopener noreferrer">Decon do Ministério Público do Ceará</a>, a garantia legal é a do art. 26 do CDC: 30 dias para bens não duráveis e 90 dias para duráveis, nos vícios de adequação. A garantia contratual é oferecida pelo fornecedor por liberalidade, ou seja, a lei não obriga a dar, mas, uma vez dada, precisa ser cumprida nos exatos termos prometidos.</p>

    <p>Na prática, a loja nunca tem "zero garantia": mesmo sem prometer nada, vale a legal. Quando a loja diz "6 meses de garantia", esses 6 meses são um extra por escrito. O Idec lembra ainda que o prazo de 7 dias do art. 49 do CDC é de arrependimento em compra fora do estabelecimento, como na internet, e não tem relação com defeito. Para esse caso, veja o guia de <a href="/artigos/troca-e-devolucao-na-loja-online-politica-clara-e-respostas-com-ia">troca e devolução na loja online</a>.</p>

    <table>
      <thead>
        <tr><th>Item</th><th>Garantia legal</th><th>Garantia contratual</th></tr>
      </thead>
      <tbody>
        <tr><td>Origem</td><td>CDC, art. 26</td><td>Oferta da loja ou do fabricante, art. 50</td></tr>
        <tr><td>Obrigatória?</td><td>Sim</td><td>Não, mas se for dada, tem de ser cumprida</td></tr>
        <tr><td>Prazo</td><td>30 dias (não durável) ou 90 dias (durável)</td><td>Definido por quem oferece</td></tr>
        <tr><td>Forma</td><td>Vale sem papel nenhum</td><td>Termo escrito</td></tr>
      </tbody>
    </table>

    <h2>Quando começa a contar o prazo?</h2>

    <p>Segundo o <a href="https://idec.org.br/print/24492" target="_blank" rel="noopener noreferrer">Idec</a>, no vício aparente o prazo começa na entrega do produto. No vício oculto, que aparece com o uso, começa quando o defeito surge. O Idec também informa que o vício deve ser corrigido em 30 dias e que, depois disso, o consumidor pode pedir produto novo, devolução do dinheiro ou abatimento no preço. Em produtos essenciais, como geladeira e fogão, a troca pode ser imediata.</p>

    <p>O Idec cita ainda que o prazo de conserto pode ser combinado entre as partes, desde que não fique abaixo de sete nem acima de 180 dias. Por isso é perigoso prometer, no WhatsApp, um prazo de conserto que a assistência técnica não cumpre. A promessa vira obrigação sua.</p>

    <h2>Como somar a garantia contratual com a legal</h2>

    <p>Aqui há divergência. O Decon do Ceará, seguindo decisão do STJ citada na página (REsp 967.623), adota a leitura de que os 30 ou 90 dias da garantia legal começam depois do fim da garantia contratual. Há quem defenda que a legal fica embutida dentro da contratual de um ano. Como a questão é interpretativa, o caminho seguro é redigir o termo de forma clara e, em dúvida, consultar o Procon, um advogado ou o contador.</p>

    <p>Um exemplo com números: uma loja de eletrodomésticos pequenos vende uma cafeteira por R$ 289 com garantia contratual de 6 meses. Pela leitura do Decon, os 90 dias de garantia legal, por ser produto durável, começam depois dos 6 meses, e o cliente teria cerca de 9 meses no total para reclamar de defeito que apareceu no período da garantia. A loja que entendeu 6 meses e negou o conserto no mês 8 pode acabar em reclamação formal.</p>

    <h2>O que o termo de garantia precisa dizer</h2>

    <p>O art. 50 diz que a garantia contratual será conferida mediante termo escrito. Segundo o Decon, o termo deve explicar o que a garantia cobre, como e onde exercer o direito, por quanto tempo vale e quais custos ficam com o consumidor, e deve ser entregue na venda, junto de um manual claro. Um checklist:</p>

    <ul class="checklist">
      <li>Nome do produto, modelo e número de série ou nota fiscal.</li>
      <li>Prazo da garantia contratual, em dias ou meses, e a data de início.</li>
      <li>O que é coberto (defeito de fabricação) e o que não é (mau uso, queda, contato com líquido).</li>
      <li>Como acionar: canal, endereço da assistência técnica e documentos necessários.</li>
      <li>Quem paga frete de envio e retirada, se houver custo.</li>
      <li>Frase deixando claro que a garantia contratual complementa a legal.</li>
    </ul>

    <p>Exclusões muito amplas podem ser questionadas. Se o cliente nunca vai entender o termo, ele não cumpre sua função, e o texto vira prova contra a loja. Escreva em frases curtas e peça a um profissional para revisar o modelo uma vez.</p>

    <h2>Como a IA ajuda a explicar a garantia ao cliente</h2>

    <p>A IA é boa para transformar o texto técnico em linguagem simples e para padronizar respostas, desde que você cole o conteúdo correto e revise. Dois prompts:</p>

    <pre><code>Escreva um termo de garantia contratual de 6 meses para uma cafeteira vendida na minha loja. Use linguagem simples, em tópicos: o que cobre, o que não cobre, como acionar, prazos e custos. Inclua que a garantia contratual complementa a garantia legal do CDC e deixe campos entre colchetes para eu preencher dados da loja. Não invente prazos de conserto.</code></pre>

    <pre><code>Cliente escreveu: "meu produto parou de funcionar com 4 meses, vocês dão garantia?". Responda em 5 linhas, tom educado, pedindo número do pedido e foto, explicando que existe garantia legal e a contratual de 6 meses da loja e que vou analisar o caso. Não prometa troca nem prazo.</code></pre>

    <p>Quando a resposta envolver prazo, direito ou valor, confira com a política da loja e com a lei antes de enviar, e lembre-se de que o modelo pode errar, como mostra o guia sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a>. Para casos tensos, veja como <a href="/artigos/cliente-irritado-como-responder-com-ia-escuta-solucao-e-limites-do-cdc">responder cliente irritado com IA</a> e o roteiro de <a href="/artigos/sac-com-ia-protocolo-prazo-de-resposta-e-quando-chamar-humano">SAC com protocolo e prazo</a>.</p>

    <h2>Garantia como parte da experiência do cliente</h2>

    <p>Garantia bem explicada reduz atrito e fortalece a confiança. A loja que entrega o termo, dá um número de protocolo e acompanha o caso transforma um problema em motivo de recompra. Alguns passos de rotina:</p>

    <ol>
      <li>Anexe o termo de garantia ao pedido e à mensagem de pós-venda, como no modelo de <a href="/artigos/pos-venda-com-ia-mensagem-de-acompanhamento-e-pedido-de-avaliacao">pós-venda com pedido de avaliação</a>.</li>
      <li>Registre cada chamado com data, foto e resposta, para ter histórico.</li>
      <li>Responda em um prazo fixo e comunique cada etapa, no mesmo canal que o cliente usou.</li>
      <li>Meça o resultado com uma <a href="/artigos/pesquisa-de-satisfacao-com-ia-analisar-respostas-de-clientes">pesquisa de satisfação</a> depois do atendimento.</li>
      <li>Revise os casos de defeito repetido para trocar de fornecedor ou ajustar o que você vende, como em <a href="/artigos/ia-para-reduzir-devolucoes-trocas-ecommerce">reduzir devoluções e trocas</a>.</li>
    </ol>

    <p>Reputação também depende disso: o cliente que sente que foi ouvido costuma avaliar melhor, o que conecta com o guia de <a href="/artigos/como-melhorar-avaliacoes-e-reputacao-online-com-ia">avaliações e reputação online</a>. E, se o cliente não ficar satisfeito, ele pode abrir reclamação em canais públicos, como mostra o passo a passo do <a href="/artigos/reclamar-de-empresa-com-ia-consumidor-gov-br-passo-a-passo">consumidor.gov.br</a>, então vale resolver antes.</p>

    <h2>Erros comuns de quem vende</h2>

    <ul class="checklist">
      <li>Dizer "não tem garantia" ou "garantia só do fabricante" para evitar a legal.</li>
      <li>Prometer a garantia contratual só de boca, sem termo escrito.</li>
      <li>Confundir o prazo de arrependimento de 7 dias com o prazo para reclamar de defeito.</li>
      <li>Usar um termo copiado de outra loja, sem ajustar produto, prazo e canal.</li>
      <li>Responder com IA sem checar prazo e valor e prometer o que a loja não faz.</li>
      <li>Guardar dados de cliente do chamado sem cuidado, algo que o checklist de <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">LGPD para pequeno negócio</a> ajuda a evitar.</li>
    </ul>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Este texto resume o que o Idec e o Decon do Ceará publicam e não substitui orientação jurídica. Para casos de valor alto ou recusa em disputa, consulte um advogado ou o Procon da sua cidade.</p></div>

    <h2>Próximo passo: padronize em uma tarde</h2>

    <p>Separe os dez produtos mais vendidos, defina o prazo da garantia contratual de cada um (ou decida que a loja só segue a legal) e monte um termo-modelo. Salve as respostas aos casos mais comuns como respostas rápidas, conforme o guia de <a href="/artigos/whatsapp-business-para-pequeno-negocio-catalogo-etiquetas-e-respostas">WhatsApp Business</a>, e documente o fluxo no formato de <a href="/artigos/procedimento-operacional-padrao-com-ia-como-documentar-processos">procedimento operacional padrão</a>. Para mais rotinas de relacionamento, a categoria de <a href="/categoria/negocios">negócios com IA</a> reúne os próximos passos.</p>
  `,
  faq: [
    {
      question: "Qual a diferença entre garantia legal e garantia contratual?",
      answer:
        "A legal está no art. 26 do CDC e vale sempre: 30 dias para produto não durável e 90 para durável. A contratual é voluntária, oferecida pela loja ou pelo fabricante, deve ser dada por termo escrito e complementa a legal. Quem a oferece precisa cumprir exatamente o que prometeu.",
    },
    {
      question: "A loja pode dizer que não tem garantia?",
      answer:
        "Não. Mesmo sem oferecer garantia contratual, vale a garantia legal do CDC. A loja pode escolher não dar garantia extra, mas não pode negar o direito de reclamar de defeito dentro dos prazos legais. Frases como produto sem garantia no balcão podem ser questionadas pelo cliente e pelo Procon.",
    },
    {
      question: "A garantia legal conta depois da contratual?",
      answer:
        "Há divergência. O Decon do Ministério Público do Ceará adota a leitura de que os 30 ou 90 dias legais começam após o fim da garantia contratual, citando decisão do STJ. Outros entendem que a legal fica dentro de um período contratual maior. Na dúvida, consulte o Procon ou um profissional.",
    },
    {
      question: "O prazo de 7 dias vale para defeito?",
      answer:
        "Não. Segundo o Idec, o prazo de 7 dias do art. 49 do CDC é de arrependimento em compras feitas fora do estabelecimento, como pela internet. Defeito segue as regras da garantia legal e da contratual. Algumas lojas oferecem troca em poucos dias como política própria, mas isso não substitui os prazos da lei.",
    },
    {
      question: "A IA pode escrever o termo de garantia da minha loja?",
      answer:
        "Pode gerar um rascunho, mas não substitui a revisão. Cole os dados reais do produto e da loja, peça linguagem simples e campos para preencher, e depois confira com a lei e com um profissional. Nunca publique um modelo sem checar prazos, exclusões e custos que ficam com o cliente.",
    },
  ],
};
