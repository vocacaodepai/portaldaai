import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "cliente-da-black-friday-como-fazer-voltar-depois-da-promocao-com-ia",
  title: "Cliente da Black Friday: como fazer ele voltar sem novo desconto",
  seoTitle: "Cliente da Black Friday: como fazer ele voltar",
  excerpt:
    "Quem compra na Black Friday vem pelo preço e some depois. Veja um plano de 60 dias, com mensagens prontas e IA, para transformar esse comprador em cliente.",
  metaDescription:
    "Como fazer o cliente da Black Friday voltar: plano de 60 dias, segmentação, mensagens com IA, arrependimento, LGPD e WhatsApp sem dar novo desconto.",
  category: "negocios",
  articleSubcategory: "retencao-e-experiencia",
  date: "2026-11-03",
  readTime: 6,
  imageQuery: "shopping bags store counter",
  seed: 1115,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O comprador da Black Friday chega pelo preço; para ele voltar, a loja precisa entregar uma boa primeira experiência e um motivo de retorno que não seja outro desconto.",
    "Um plano simples de 60 dias tem quatro contatos: confirmação e entrega, dica de uso, pedido de opinião e uma sugestão útil para o Natal ou para a reposição.",
    "Marque a origem da compra, envie só para quem autorizou e respeite o direito de arrependimento de 7 dias nas vendas fora da loja, previsto no artigo 49 do CDC.",
  ],
  content: `
    <p>Para fazer o cliente da Black Friday voltar, o pequeno negócio precisa de três coisas: marcar quem comprou na promoção, cuidar muito bem da primeira experiência e oferecer um motivo de retorno que não seja outro desconto. Na prática, isso cabe em quatro mensagens ao longo de 60 dias, que a IA ajuda a escrever e personalizar.</p>

    <p>A Black Friday de 2026 cai em 27 de novembro, e o planejamento de preço e margem está no guia de <a href="/artigos/black-friday-2026-desconto-sem-prejuizo-para-pequeno-negocio">Black Friday sem prejuízo</a>. Este texto cuida do depois: como transformar o comprador de ocasião em cliente, com cronograma, prompts prontos, cuidados legais e os erros que fazem a loja gastar mensagem à toa. Fontes conferidas em 03/11/2026.</p>

    <h2>Por que o comprador da Black Friday some</h2>

    <p>Quem chega pela promoção compara preço, não loja. Ele não conhece seu atendimento, sua troca, sua entrega. Se a única lembrança for "estava barato", na próxima vez ele procura onde estiver mais barato. O desafio é criar, nas semanas seguintes, uma segunda lembrança: "foi fácil e me ajudaram".</p>

    <p>Há outro ponto: a loja costuma estar sobrecarregada nesses dias, e é justamente quando o cliente novo forma a primeira impressão. Atraso sem aviso, troca confusa ou resposta seca pesam mais nele do que no cliente antigo, que já confia. Por isso o plano começa antes de qualquer oferta: começa pela entrega.</p>

    <h2>Primeiro passo: marcar a origem da compra</h2>

    <p>Sem saber quem comprou na promoção, não dá para tratar esse grupo de forma diferente. Na planilha ou no sistema de vendas, crie uma etiqueta "BF 2026" e separe três grupos:</p>

    <table>
      <thead>
        <tr><th>Grupo</th><th>Quem é</th><th>Objetivo</th></tr>
      </thead>
      <tbody>
        <tr><td>Novo na Black Friday</td><td>Primeira compra na loja</td><td>Segunda compra em até 60 dias</td></tr>
        <tr><td>Antigo que voltou</td><td>Já tinha comprado antes</td><td>Manter o hábito, sem viciar em desconto</td></tr>
        <tr><td>Antigo inativo</td><td>Não comprava havia mais de 6 meses</td><td>Reativar com atenção, não só com preço</td></tr>
      </tbody>
    </table>

    <p>Na mesma linha, registre se a pessoa autorizou receber mensagens e por qual canal. Esse campo vai decidir quem entra no plano. Para os inativos, o guia de <a href="/artigos/reativar-clientes-inativos-com-ia-lista-mensagem-e-oferta-sem-incomodar">reativar clientes inativos</a> traz uma abordagem própria.</p>

    <h2>O plano de 60 dias, contato por contato</h2>

    <p>Quatro contatos bastam. Mais do que isso, nessa época de muitas mensagens, vira incômodo.</p>

    <ol>
      <li><strong>Dia 0 a 2: confirmação e entrega.</strong> Prazo real, como acompanhar o pedido e como falar com a loja. Se atrasar, avise antes que o cliente pergunte.</li>
      <li><strong>Dia 7 a 10: dica de uso.</strong> Uma orientação curta sobre o produto comprado: como conservar, montar, combinar. Sem oferta.</li>
      <li><strong>Dia 15 a 20: pedido de opinião.</strong> Uma pergunta simples sobre a compra e, se a resposta for boa, convite para avaliar a loja.</li>
      <li><strong>Dia 30 a 60: motivo para voltar.</strong> Sugestão de presente de Natal, reposição do produto, acessório que combina ou um serviço, sempre ligado ao que a pessoa já comprou.</li>
    </ol>

    <p>O segundo e o terceiro contato são os que mais diferenciam a loja. São a base do <a href="/artigos/pos-venda-com-ia-mensagem-de-acompanhamento-e-pedido-de-avaliacao">pós-venda com IA</a> e do <a href="/artigos/como-usar-ia-para-melhorar-onboarding-de-clientes">onboarding de clientes</a>, aplicados ao pico do fim de ano.</p>

    <h2>Mensagens prontas com IA</h2>

    <p>Use a IA para escrever variações e adaptar ao produto, não para disparar em massa. Revise cada texto antes de usar. Três prompts para começar:</p>

    <pre><code>Sou uma loja de [segmento] em [cidade]. Escreva uma mensagem de até 4
linhas para quem fez a primeira compra na Black Friday, enviada 7 dias
depois da entrega, com uma dica prática de uso de [produto]. Tom próximo,
sem oferta e sem emoji em excesso.</code></pre>

    <pre><code>Crie 3 versões de uma pergunta curta pedindo a opinião do cliente sobre a
compra de [produto]. Se ele responder bem, a mensagem seguinte deve
convidá-lo a avaliar a loja no Google. Se responder mal, deve pedir
detalhes e oferecer solução.</code></pre>

    <pre><code>Liste 5 sugestões de produto ou serviço que combinam com [produto
comprado] e que façam sentido como presente de Natal ou reposição em até
60 dias. Para cada uma, escreva uma frase de recomendação sem desconto.</code></pre>

    <p>Para a pergunta de opinião, o guia de <a href="/artigos/pesquisa-de-satisfacao-com-ia-analisar-respostas-de-clientes">pesquisa de satisfação com IA</a> mostra como ler as respostas. E as respostas boas podem virar prova social, com os cuidados do texto sobre <a href="/artigos/depoimentos-de-clientes-como-pedir-publicar-e-usar-com-ia-sem-risco">depoimentos de clientes</a>.</p>

    <h2>Um exemplo com números</h2>

    <p>Cenário ilustrativo: uma loja de utilidades domésticas em Goiânia vende para 180 pessoas na Black Friday, 120 delas compradoras novas. Dessas, 90 autorizaram mensagens. A loja aplica os quatro contatos e, no último, sugere um kit de presente que combina com o que cada uma levou.</p>

    <p>Se 18 das 90 fizerem uma segunda compra em 60 dias, a taxa de recompra do grupo é de 20%. Com tíquete médio de R$ 110 nessa segunda compra, são R$ 1.980 de vendas que não exigiram novo desconto. O número em si é hipotético; o importante é medir: quantos receberam, quantos responderam, quantos voltaram. Esse acompanhamento é o mesmo que ajuda a <a href="/artigos/como-usar-ia-para-reduzir-cancelamento-de-clientes">reduzir o cancelamento de clientes</a> ao longo do ano.</p>

    <h2>O que a lei pede nessa fase</h2>

    <p>Duas regras merecem atenção. A primeira é o direito de arrependimento. O <a href="https://www2.camara.leg.br/legin/fed/lei/1990/lei-8078-11-setembro-1990-365086-normaatualizada-pl.html" target="_blank" rel="noopener noreferrer">artigo 49 do Código de Defesa do Consumidor</a> permite desistir em até 7 dias quando a compra é feita fora do estabelecimento, como pela internet ou por telefone, com devolução imediata dos valores pagos, corrigidos. Explique isso com clareza na mensagem de entrega: o cliente que desiste sem dor de cabeça tende a confiar mais na loja. As diferenças entre essa regra e a garantia estão no guia de <a href="/artigos/garantia-legal-e-contratual-o-que-a-loja-deve-cumprir-e-como-explicar-ao-cliente">garantia legal e contratual</a>.</p>

    <p>A segunda é o uso dos dados. As <a href="https://www.gov.br/anpd/pt-br/acesso-a-informacao/perguntas-frequentes" target="_blank" rel="noopener noreferrer">perguntas frequentes da ANPD</a> lembram que o consentimento pode ser revogado de forma gratuita e simples e que o titular pode se opor ao tratamento. No WhatsApp, a <a href="https://whatsappbusiness.com/policy/" target="_blank" rel="noopener noreferrer">política do WhatsApp Business</a> exige permissão antes do contato e obriga a respeitar todo pedido para parar.</p>

    <div class="callout-box">
      <span class="callout-label">Regra prática</span>
      <p>Toda mensagem do plano termina com um jeito fácil de sair, como "responda SAIR para não receber mais". Quem pedir para sair é retirado no mesmo dia. Se o pedido for para apagar os dados, siga o roteiro de <a href="/artigos/cliente-pediu-para-apagar-seus-dados-como-responder-pela-lgpd-no-pequeno-negocio">como responder pela LGPD</a>.</p>
    </div>

    <h2>Erros comuns depois da Black Friday</h2>

    <ul class="checklist">
      <li>Mandar um cupom novo uma semana depois. Isso ensina que o preço cheio nunca vale a pena.</li>
      <li>Disparar para a lista inteira, inclusive quem não autorizou, e arriscar bloqueio do número; veja <a href="/artigos/campanha-de-whatsapp-opt-in-lista-e-mensagens-com-ia-sem-risco-de-banimento">campanha de WhatsApp com opt-in</a>.</li>
      <li>Ignorar quem reclamou da entrega e seguir mandando dica de uso como se nada tivesse acontecido.</li>
      <li>Mudar o horário no fim de ano sem avisar; o passo a passo está em <a href="/artigos/horario-especial-de-fim-de-ano-no-google-feriados-aviso-aos-clientes-e-mensagens-com-ia">horário especial de fim de ano</a>.</li>
      <li>Tratar cliente antigo e cliente novo com o mesmo texto genérico.</li>
      <li>Não medir nada e concluir, em janeiro, que "pós-venda não funciona".</li>
    </ul>

    <h2>Depois dos 60 dias</h2>

    <p>Quem voltou entra na rotina normal da loja, com os benefícios que você já oferece. Se ainda não tem nada estruturado, um programa simples de pontos ou de indicação ajuda; veja os guias de <a href="/artigos/como-usar-ia-para-fidelizar-clientes-programa-de-recompensas">programa de recompensas</a> e de <a href="/artigos/programa-de-indicacao-de-clientes-com-ia-pequeno-negocio">indicação de clientes</a>. Quem não voltou não deve ser bombardeado: guarde para uma campanha de reposição meses depois. Comece agora, antes do pico: crie a etiqueta "BF 2026", escreva os quatro textos com a IA e combine com a equipe quem cuida de cada contato. Para alinhar o resto do fim de ano, siga para o planejamento de <a href="/artigos/natal-2026-como-planejar-estoque-promocoes-e-campanhas-com-ia-na-loja">Natal 2026 na loja</a>.</p>
  `,
  faq: [
    {
      question: "Como fazer o cliente da Black Friday voltar a comprar?",
      answer:
        "Marque quem comprou na promoção, cuide da entrega e da primeira experiência e envie poucos contatos úteis nos 60 dias seguintes: confirmação, dica de uso, pedido de opinião e uma sugestão ligada ao que a pessoa comprou. O motivo para voltar deve ser utilidade, não outro desconto.",
    },
    {
      question: "Quantas mensagens mandar depois da Black Friday?",
      answer:
        "Quatro contatos em 60 dias costumam bastar: um na entrega, um com dica de uso, um pedindo opinião e um com sugestão de reposição ou presente. Mais do que isso, numa época cheia de mensagens, tende a parecer incômodo.",
    },
    {
      question: "O cliente pode desistir da compra feita na Black Friday?",
      answer:
        "Sim, quando a compra foi feita fora do estabelecimento, como pela internet ou por telefone. O artigo 49 do CDC dá 7 dias para desistir, com devolução imediata dos valores pagos, corrigidos. Na loja física, a troca depende da política da loja, salvo defeito.",
    },
    {
      question: "Posso mandar WhatsApp para todos que compraram na promoção?",
      answer:
        "Só para quem autorizou receber mensagens. A política do WhatsApp Business exige permissão antes do contato e obriga a respeitar pedidos para parar. Pela LGPD, o cliente pode revogar o consentimento de forma simples e gratuita.",
    },
    {
      question: "Como a IA ajuda no pós-Black Friday?",
      answer:
        "Ela escreve variações de mensagens por produto, sugere itens complementares, resume as respostas da pesquisa de opinião e ajuda a montar a planilha de acompanhamento. As decisões e o envio final continuam com a equipe da loja.",
    },
  ],
  quiz: [
    {
      question: "Qual é o melhor motivo para o cliente da Black Friday voltar?",
      options: [
        "Um cupom novo na semana seguinte",
        "Uma sugestão útil ligada ao que ele comprou",
        "Mensagens diárias até ele comprar",
      ],
      answer: 1,
      explanation:
        "Desconto repetido ensina a esperar promoção; a sugestão útil cria um motivo de retorno que não corrói a margem.",
    },
    {
      question: "Quanto tempo o CDC dá para desistir de uma compra feita pela internet?",
      options: ["3 dias", "7 dias", "30 dias"],
      answer: 1,
      explanation: "O artigo 49 do CDC prevê 7 dias para compras fora do estabelecimento comercial.",
    },
  ],
};
