import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "vender-no-mercado-livre-com-ia-anuncio-custos-e-reputacao-para-comecar",
  title: "Vender no Mercado Livre com IA: anúncio, custos e reputação",
  seoTitle: "Vender no Mercado Livre com IA: guia para começar",
  category: "monetizacao",
  articleSubcategory: "negocios-online",
  excerpt:
    "Quer vender no Mercado Livre? Veja como usar IA para pesquisar o produto, escrever o anúncio, calcular o custo antes de publicar e cuidar da reputação sem prometer renda.",
  metaDescription:
    "Como vender no Mercado Livre com ajuda de IA: escolha do produto, título e descrição do anúncio, conta de custos com tarifa e frete, atendimento e reputação, sem promessa de renda.",
  date: "2026-11-01",
  readTime: 6,
  imageQuery: "packages shipping small business desk",
  seed: 1024,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "A IA ajuda a pesquisar demanda, escrever título e descrição e responder perguntas, mas a decisão de vender depende da conta de custos: tarifa, frete, imposto e devolução.",
    "As tarifas do Mercado Livre mudam por categoria, tipo de anúncio e logística, então o valor real deve ser conferido no simulador oficial antes de definir preço.",
    "Reputação se constrói com prazo cumprido, produto como anunciado e respostas rápidas; a IA acelera o atendimento, mas a revisão humana evita promessa que a loja não cumpre.",
  ],
  content: `
    <p>Para vender no Mercado Livre com ajuda de IA, escolha um produto com margem, calcule o custo total (tarifa, frete e imposto) antes de publicar, use a IA para escrever título, descrição e respostas, e acompanhe a reputação. A tarifa varia por categoria e logística, então confira sempre o simulador oficial do marketplace.</p>

    <p>Muita gente começa pelo anúncio e descobre a conta só depois da primeira venda, quando o lucro some entre tarifa, frete e devolução. Este guia inverte a ordem: primeiro a conta, depois o anúncio. Não há promessa de renda aqui, porque o resultado depende de produto, preço, estoque e concorrência. Se você ainda compara marketplaces, veja também <a href="/artigos/vender-na-shopee-com-ia-taxas-margem-e-anuncios">vender na Shopee com IA</a> e a <a href="/artigos/loja-na-amazon-brasil-plano-individual-ou-profissional-e-fba-com-ajuda-de-ia">loja na Amazon Brasil</a>.</p>

    <h2>Como funciona vender no Mercado Livre</h2>

    <p>O Mercado Livre é um marketplace: você cria o anúncio, o comprador paga pela plataforma, você envia o produto e recebe depois, descontadas as tarifas. Para começar, a página oficial de <a href="https://www.mercadolivre.com.br/ajuda" target="_blank" rel="noopener noreferrer">ajuda do Mercado Livre</a> reúne as regras de cadastro, envio e custos, que mudam com o tempo. Em 01/11/2026, não use números de blogs antigos: o próprio marketplace ajusta com frequência a forma de cobrar produtos baratos e o custo de envio.</p>

    <p>Pessoa física pode vender de forma eventual, mas quem vende com frequência tende a precisar de CNPJ. Se a ideia é virar rotina, o <a href="/artigos/abrir-mei-passo-a-passo-ocupacao-das-e-primeiros-meses-com-ia">passo a passo para abrir MEI</a> e o texto sobre o <a href="/artigos/limite-de-faturamento-do-mei-como-controlar-mes-a-mes">limite de faturamento do MEI</a> explicam o caminho. O portal do governo também traz o <a href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/quero-ser-mei" target="_blank" rel="noopener noreferrer">formalizar-se como MEI</a>.</p>

    <h2>Passo 1: escolher o produto com ajuda da IA</h2>

    <p>A IA não vê as vendas reais do marketplace, então não peça a ela o que vende mais. Use-a para organizar a pesquisa que você faz na plataforma: abra os anúncios dos concorrentes, copie preços, notas, prazos de entrega e perguntas frequentes, e cole numa planilha. Depois peça uma análise.</p>

    <pre><code>Tenho uma lista de 15 anúncios concorrentes de [produto] com preço, nota, número de avaliações e prazo de entrega: [cole a tabela]. Aponte (1) a faixa de preço mais comum, (2) o que os compradores mais elogiam e reclamam nas avaliações que colei, (3) duas brechas que um vendedor pequeno poderia explorar. Não invente dados que não estão na tabela.</code></pre>

    <p>Prefira produto leve, que não quebra, tem poucas variações e não exige registro especial. Evite marca que não é sua e produto que o marketplace restringe. A pesquisa de <a href="/artigos/como-usar-ia-para-monitorar-concorrencia-tomar-decisoes-melhores">como monitorar a concorrência com IA</a> detalha esse método.</p>

    <h2>Passo 2: a conta antes do anúncio</h2>

    <p>Antes de escrever uma linha, calcule se o produto sobra dinheiro. A conta básica soma: custo do produto, embalagem, tarifa de venda do marketplace, custo de envio (quando fica com o vendedor), imposto e uma reserva para devoluções e trocas.</p>

    <table>
      <thead>
        <tr><th>Item</th><th>Exemplo hipotético (R$)</th></tr>
      </thead>
      <tbody>
        <tr><td>Preço de venda</td><td>89,90</td></tr>
        <tr><td>Custo do produto</td><td>32,00</td></tr>
        <tr><td>Embalagem</td><td>2,50</td></tr>
        <tr><td>Tarifa (suponha 15%)</td><td>13,49</td></tr>
        <tr><td>Envio pago pelo vendedor (suposição)</td><td>14,00</td></tr>
        <tr><td>Reserva para devolução (3%)</td><td>2,70</td></tr>
        <tr><td>Sobra antes do imposto</td><td>25,21</td></tr>
      </tbody>
    </table>

    <p>Os 15% e o frete são suposições para ilustrar a conta, não as tarifas reais: consulte o simulador oficial para o seu produto. Com esse resultado, o markup e a margem entram em cena; o texto <a href="/artigos/markup-ou-margem-qual-usar-para-formar-preco-no-pequeno-negocio">markup ou margem</a> explica a diferença, e o guia de <a href="/artigos/frete-e-embalagem-no-preco-da-loja-online-calcular-com-ia-sem-perder-margem">frete e embalagem no preço</a> ajuda a não esquecer custos.</p>

    <h2>Passo 3: escrever o anúncio com IA sem exagerar</h2>

    <p>O título precisa dizer o que é o produto, a marca (se for sua ou revendida legalmente), o modelo e a característica que o comprador procura. A descrição deve responder às dúvidas antes de elas virarem pergunta ou devolução: medidas, material, o que vem na caixa, compatibilidade e prazo.</p>

    <pre><code>Escreva o título (até 60 caracteres) e a descrição de um anúncio de [produto]. Use só estes fatos: [medidas, material, conteúdo da caixa, garantia]. Liste o que o produto NÃO faz. Não use palavras como melhor, milagroso ou garantido. Termine com as três perguntas mais comuns e as respostas.</code></pre>

    <h3>Checklist de revisão do anúncio</h3>

    <ul class="checklist">
      <li>Todas as medidas e materiais batem com o produto que está no estoque.</li>
      <li>As fotos mostram o produto real, de vários ângulos, sem imagem de terceiros.</li>
      <li>Nenhuma promessa que a descrição do fabricante não sustenta.</li>
      <li>Garantia e prazo de entrega escritos de forma clara.</li>
      <li>Nada que viole as regras do marketplace sobre marcas e produtos restritos.</li>
    </ul>

    <h2>Passo 4: atendimento e reputação</h2>

    <p>Vender é só metade do trabalho. O marketplace avalia o vendedor por prazo de envio, qualidade do atendimento e reclamações, e isso influencia a confiança do comprador. Os detalhes de como a reputação é medida ficam na central de ajuda, e podem mudar.</p>

    <p>A IA ajuda a responder perguntas rápido, mas a resposta precisa ser fiel ao produto. Monte um banco de respostas curtas (prazo, troca, nota fiscal, compatibilidade) e use a IA para adaptá-las ao tom da loja. As regras do <a href="/artigos/decreto-13135-de-2026-novas-regras-do-sac-e-o-que-copiar-no-atendimento-da-sua-loja">decreto do SAC</a> e a política de <a href="/artigos/troca-e-devolucao-na-loja-online-politica-clara-e-respostas-com-ia">troca e devolução na loja online</a> servem de base para as respostas.</p>

    <h2>Modelos de operação para quem está começando</h2>

    <ul>
      <li><strong>Produto próprio ou de artesão local:</strong> mais controle, menos concorrência direta. Veja <a href="/artigos/vender-artesanato-e-produto-personalizado-apos-o-fim-do-elo7-onde-vender-e-como-usar-ia">como vender artesanato com IA</a>.</li>
      <li><strong>Usados e seminovos:</strong> margem boa, mas exige fotos honestas e descrição precisa; o guia do <a href="/artigos/brecho-online-com-ia-pecas-fotos-descricao-e-preco-sem-prejuizo">brechó online</a> serve de modelo.</li>
      <li><strong>Revenda de atacado:</strong> exige capital de giro e atenção ao preço de lista; confirme a regra de marca do fabricante.</li>
      <li><strong>Dropshipping:</strong> risco de prazo e de reputação; leia <a href="/artigos/como-ganhar-dinheiro-com-dropshipping-usando-ia">dropshipping com IA</a> antes.</li>
    </ul>

    <h2>Rotina semanal enxuta para quem começa</h2>

    <p>No começo, o risco é gastar tempo demais com detalhes e pouco com o que move o negócio. Uma rotina de cerca de 5 horas por semana já organiza a operação de uma loja pequena: duas sessões para fotografar, cadastrar e revisar anúncios, uma para responder perguntas e mensagens, uma para embalar e despachar, e uma para olhar os números.</p>

    <p>Na sessão de números, abra a planilha de custos e compare o que você previu com o que aconteceu: quanto sobrou de fato em cada venda, quantas perguntas se repetem e quais anúncios não tiveram visita. Cole os dados na IA e peça um resumo com três ajustes possíveis, como trocar a foto principal, mudar o título ou rever o preço. Teste uma mudança por vez, para saber o que funcionou.</p>

    <pre><code>Estes são os números da minha loja nesta semana: [anúncio, visitas, vendas, perguntas, devoluções]. Aponte os três anúncios que merecem ajuste, diga o que mudar em cada um e por quê, e lembre que não tenho dados sobre a concorrência além dos que colei.</code></pre>

    <p>Guarde também um registro de cada reclamação ou devolução com o motivo. Ao fim do mês, esse histórico mostra se o problema está na descrição, na embalagem ou no produto, e evita que o mesmo erro se repita em toda venda.</p>

    <h2>Erros comuns</h2>

    <ul>
      <li><strong>Copiar o texto do fabricante ou do concorrente.</strong> Pode violar direitos e confunde o comprador.</li>
      <li><strong>Definir preço sem calcular tarifa e frete.</strong> A venda acontece, o lucro não.</li>
      <li><strong>Prometer prazo que a transportadora não cumpre.</strong> Atraso derruba a reputação.</li>
      <li><strong>Deixar a IA inventar especificação.</strong> Revise cada número.</li>
      <li><strong>Esquecer a parte fiscal.</strong> Venda recorrente exige organização; consulte um contador.</li>
    </ul>

    <h2>Próximo passo</h2>

    <p>Escolha um produto, preencha a planilha de custos com a tarifa do simulador oficial e só então escreva o anúncio. Se a conta não fecha, troque de produto antes de gastar com estoque. Para organizar o preço, volte ao guia <a href="/artigos/como-precificar-produtos-e-servicos-com-ia">como precificar produtos e serviços com IA</a>, e veja a categoria Monetização para outras formas de vender online.</p>
  `,
  faq: [
    {
      question: "Dá para vender no Mercado Livre sem CNPJ?",
      answer:
        "Pessoa física pode vender, mas quem vende com frequência tende a precisar formalizar a atividade, e o marketplace pode pedir documentos. A regra exata está na central de ajuda e muda com o tempo. Se a venda virar rotina, abrir um MEI costuma ser o caminho mais simples, respeitando o limite de faturamento.",
    },
    {
      question: "Quanto o Mercado Livre cobra de tarifa?",
      answer:
        "Depende da categoria, do tipo de anúncio e da logística de envio, e as regras para produtos baratos mudaram recentemente. Por isso este guia não traz porcentagem fixa. Use o simulador de custos oficial do Mercado Livre com o seu produto antes de definir o preço de venda.",
    },
    {
      question: "A IA pode escrever meu anúncio do Mercado Livre?",
      answer:
        "Pode ajudar a escrever título, descrição e respostas, desde que você forneça os fatos reais do produto e revise tudo. Não deixe a IA inventar medida, material ou garantia. Evite superlativos como melhor ou milagroso e não copie texto de concorrente, que pode violar direitos.",
    },
    {
      question: "Como a IA ajuda a escolher o que vender?",
      answer:
        "Ela não enxerga as vendas reais do marketplace. O que ela faz bem é analisar a pesquisa que você coletou: preços, notas, avaliações e prazos de anúncios concorrentes. Cole a tabela e peça faixa de preço, elogios e reclamações mais comuns e brechas, sem inventar dados.",
    },
    {
      question: "Qual o maior erro de quem começa a vender online?",
      answer:
        "Publicar o anúncio antes de calcular o custo total. Tarifa, frete, embalagem, imposto e devolução podem consumir a margem inteira. Faça a conta primeiro, com o simulador oficial, e só venda o produto que deixa uma sobra mesmo no pior cenário razoável, como um frete mais caro.",
    },
  ],
};
