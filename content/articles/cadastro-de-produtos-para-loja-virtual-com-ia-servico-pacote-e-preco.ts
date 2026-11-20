import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "cadastro-de-produtos-para-loja-virtual-com-ia-servico-pacote-e-preco",
  title: "Cadastro de produtos para loja virtual com IA: serviço e preço",
  seoTitle: "Cadastro de produtos com IA: serviço, pacote e preço",
  excerpt:
    "Monte um serviço de cadastro de produtos para loja virtual com IA: planilha padrão, títulos e descrições revisados, regras do Google Merchant e como cobrar por pacote.",
  metaDescription:
    "Cadastro de produtos para loja virtual com IA como serviço freelancer: fluxo de trabalho, regras de título e descrição do Google Merchant Center, GTIN e como montar pacotes.",
  category: "monetizacao",
  articleSubcategory: "freelance-servicos",
  date: "2026-10-21",
  readTime: 8,
  imageQuery: "online store product listing laptop boxes",
  seed: 525,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Cadastro de produtos é um serviço de bastidor: transformar fichas bagunçadas do fornecedor em títulos, descrições, atributos e planilha prontos para subir na loja virtual ou no marketplace.",
    "A IA acelera o rascunho de títulos e descrições, mas o freelancer precisa conferir cada dado técnico, porque o Google Merchant Center exige que o texto descreva o produto com precisão e combine com a página de venda.",
    "Dá para cobrar por produto ou por pacote, e o valor depende da quantidade, da complexidade dos atributos e do prazo, sem prometer ganho fixo: os números do artigo são exemplos para você montar sua tabela.",
  ],
  content: `
    <p>Cadastro de produtos para loja virtual com IA é o serviço de receber a lista de itens de um lojista, em planilha, PDF ou foto, e devolver cada produto pronto para publicar: título claro, descrição organizada, atributos (cor, tamanho, material), categoria e imagens nomeadas. A IA entra para rascunhar o texto e padronizar a planilha; o que o cliente paga é o seu critério para não errar o dado.</p>
    <p>Esse trabalho aparece em todo lojista que tem estoque grande e pouco tempo, e em quem está migrando de plataforma. É um nicho discreto, que combina bem com quem já gosta de planilha e organização. Este guia mostra o fluxo, as regras públicas do Google para dados de produto, os limites do que a IA pode fazer sozinha e como montar pacotes de preço com os números como exemplo, sem prometer renda.</p>

    <h2>O que exatamente você entrega nesse serviço?</h2>
    <p>Pense em quatro entregas. A primeira é a planilha padronizada, com uma linha por produto e uma coluna por atributo. A segunda são os textos: título e descrição curtos e fiéis ao produto. A terceira é o checklist de identificadores (marca, código de barras, código do fabricante). A quarta é a organização de imagens, com nomes de arquivo coerentes e a ordem em que devem aparecer.</p>
    <p>Quem já oferece <a href="/artigos/site-para-negocio-local-com-ia-pacote-prazo-e-como-cobrar">site para negócio local</a> ou monta <a href="/artigos/como-montar-uma-loja-virtual-em-um-fim-de-semana-usando-ia">loja virtual em um fim de semana</a> pode vender o cadastro como serviço complementar, e quem trabalha com <a href="/artigos/fotos-de-produto-para-vender-online-com-ia">fotos de produto</a> consegue fechar um pacote completo. O cadastro também é porta de entrada para contratos recorrentes de manutenção de catálogo, como no modelo de <a href="/artigos/retainer-de-automacao-mensalidade-suporte-e-contrato-para-freelancer">retainer de automação</a>.</p>

    <h2>As regras públicas do Google que servem de guia</h2>
    <p>Mesmo que o cliente não anuncie no Google, a <a href="https://support.google.com/merchants/answer/7052112" target="_blank" rel="noopener noreferrer">especificação de dados de produto do Google Merchant Center</a>, conferida em 21/10/2026, é um bom padrão de qualidade. Ela diz que o título é obrigatório, aceita até 150 caracteres e deve descrever o produto com precisão e combinar com o título da página de venda. O Google desaconselha texto promocional como "frete grátis", letras todas em maiúsculas e caracteres chamativos. Para variações, o título deve trazer o que as diferencia, como cor ou tamanho.</p>
    <p>A descrição também é obrigatória, com limite de 5.000 caracteres, e deve descrever só o produto, sem promoções, links para a loja, informações de venda ou dados de concorrentes. Há um detalhe novo que interessa a quem usa IA: o Google orienta usar o atributo de título estruturado ou de descrição estruturada, e não os campos comuns, quando o texto foi criado com IA generativa. Peça ao cliente para conferir se a plataforma dele já tem esse campo.</p>
    <table>
      <thead>
        <tr><th>Campo</th><th>Regra do Google</th><th>O que fazer no serviço</th></tr>
      </thead>
      <tbody>
        <tr><td>Título</td><td>Até 150 caracteres, sem promoção nem caixa alta</td><td>Marca, modelo, atributo-chave</td></tr>
        <tr><td>Descrição</td><td>Até 5.000 caracteres, só o produto</td><td>Texto fiel à ficha, sem exagero</td></tr>
        <tr><td>Marca</td><td>Obrigatória para itens novos, em geral</td><td>Nunca preencher "genérico" ou "sem marca"</td></tr>
        <tr><td>GTIN</td><td>Só se tiver certeza; incorreto reprova</td><td>Pedir ao fornecedor, não inventar</td></tr>
        <tr><td>Imagem principal</td><td>Mínimo de 500 por 500 pixels (exigência prevista a partir de 31/01/2027)</td><td>Sem marca d'água ou borda</td></tr>
      </tbody>
    </table>

    <h2>GTIN, marca e código do fabricante: onde a IA não pode chutar</h2>
    <p>O GTIN é o número do código de barras. A especificação do Google pede para enviar só quando você tem certeza e diz que um valor incorreto causa reprovação. Se o produto não tem GTIN, é preciso informar a marca e o código do fabricante (MPN). A marca, segundo o Google, deve ser a reconhecida pelos consumidores, e quando não existe, o campo fica vazio, sem "N/A" nem "genérico".</p>
    <p>A <a href="https://www.gs1br.org/" target="_blank" rel="noopener noreferrer">GS1 Brasil</a> é a entidade que emite o código de barras no país, e a página inicial menciona que, a partir de 1º de outubro, as secretarias da Fazenda passam a validar GTINs em notas fiscais de muitas categorias de produtos. Confira no site da GS1 o ano e a sua categoria antes de orientar um cliente, porque isso afeta quem emite nota. Para o seu serviço, a regra é prática: o cadastro nunca recebe um código de barras que o fornecedor não confirmou.</p>
    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>IA generativa inventa números com a mesma segurança com que acerta. Nunca peça à IA um GTIN, um código de fabricante ou uma medida que não esteja na ficha do fornecedor. Se não está no documento, o campo fica vazio e vira pergunta para o cliente.</p></div>

    <h2>O fluxo de trabalho em 6 etapas</h2>
    <ol>
      <li><strong>Receba a ficha bruta.</strong> Planilha do fornecedor, catálogo em PDF ou fotos de etiqueta. Peça tudo de uma vez e combine um canal único.</li>
      <li><strong>Crie a planilha-modelo.</strong> Colunas fixas: SKU, nome base, marca, modelo, cor, tamanho, material, peso, dimensões, GTIN, categoria, título, descrição.</li>
      <li><strong>Extraia os dados.</strong> A IA lê o PDF ou a lista e preenche as colunas. Marque células em dúvida, em vez de completar.</li>
      <li><strong>Gere os textos.</strong> Com um prompt fixo, a IA escreve título e descrição a partir das colunas, e nada além delas.</li>
      <li><strong>Revise por amostragem e por regra.</strong> Confira 100% dos campos numéricos e uma amostra de 20% dos textos, além de buscar títulos repetidos e palavras proibidas.</li>
      <li><strong>Entregue e registre.</strong> Planilha final, lista de pendências e um documento de padrão para o cliente manter o catálogo sozinho.</li>
    </ol>
    <p>O <a href="/artigos/ia-para-planilhas-automatizar-relatorios-excel-sheets">guia de IA para planilhas</a> ajuda na etapa de fórmulas e validação, e o <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">guia de prompts</a> mostra como fixar regras para o modelo repetir o mesmo padrão em todas as linhas.</p>

    <h2>Prompts para título e descrição</h2>
    <pre><code>Você prepara cadastro de produtos para uma loja virtual brasileira. Use SOMENTE os dados da linha abaixo. Escreva um título de até 90 caracteres no formato: marca + tipo de produto + modelo + atributo principal + cor/tamanho. Sem caixa alta, sem frete, sem promoção, sem emoji. Se faltar um dado, escreva [FALTA: nome do campo] e não invente.
Dados: [cole a linha da planilha]</code></pre>
    <pre><code>Escreva a descrição do produto em 3 parágrafos curtos e uma lista de especificações, usando só os dados informados. Parágrafo 1: o que é e para que serve. Parágrafo 2: material e dimensões. Parágrafo 3: o que acompanha. Não cite preço, frete, promoção, concorrentes nem links. Se um dado não existir, não mencione.
Dados: [cole a linha da planilha]</code></pre>
    <p>Depois de gerar, rode um segundo prompt de checagem: peça à IA para listar, linha por linha, qualquer afirmação do texto que não esteja nos dados de entrada. É um filtro útil contra <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a>, mas não dispensa a sua conferência final.</p>

    <h2>Como montar pacotes e preço</h2>
    <p>Em vez de cobrar por hora, venda por produto ou por pacote, porque o cliente compara e decide mais rápido. O valor depende da complexidade: um produto simples (camiseta de uma cor) dá menos trabalho do que um item técnico (peça com medidas e compatibilidades). Os valores abaixo são um exemplo de estrutura para você ajustar ao seu mercado e ao seu tempo, não uma tabela de preço de referência.</p>
    <table>
      <thead>
        <tr><th>Pacote</th><th>O que inclui</th><th>Exemplo de valor</th></tr>
      </thead>
      <tbody>
        <tr><td>Essencial, até 30 produtos</td><td>Planilha, título e descrição, revisão</td><td>R$ 300 (R$ 10 por produto)</td></tr>
        <tr><td>Padrão, até 100 produtos</td><td>Essencial mais atributos e nomes de imagem</td><td>R$ 800 (R$ 8 por produto)</td></tr>
        <tr><td>Catálogo, 300 produtos ou mais</td><td>Padrão mais documento de padrão e pendências</td><td>Sob orçamento, com piloto de 20 itens</td></tr>
      </tbody>
    </table>
    <p>Comece por um piloto de 20 produtos, que mostra ao cliente a qualidade e a você o tempo real por item. Se cada produto leva 6 minutos de revisão, 100 produtos custam 10 horas suas; calcule o seu valor-hora antes de aceitar o preço. O guia de <a href="/artigos/como-precificar-produtos-e-servicos-com-ia">precificação de produtos e serviços</a> e o de <a href="/artigos/propostas-comerciais-com-ia-como-fechar-mais-contratos">propostas comerciais</a> ajudam a fechar o orçamento, e o texto sobre <a href="/artigos/conseguir-clientes-no-99freelas-com-ia-perfil-proposta-e-preco">clientes no 99Freelas</a> mostra um lugar para encontrar os primeiros contratos.</p>

    <h2>Exemplo: lojista de utensílios com 120 itens</h2>
    <p>Uma lojista de utensílios de cozinha tem 120 itens numa planilha do fornecedor, com nomes como "PANELA ALUM 24 PRETA" e descrições copiadas entre produtos (cenário hipotético). Você propõe o pacote Padrão, de até 100, mais 20 avulsos, e começa com um piloto de 20.</p>
    <p>No piloto, a IA extrai medidas e material, escreve os títulos no formato marca, tipo, modelo e cor, e a descrição fiel à ficha. Você revisa tudo, encontra duas panelas com a mesma medida registrada por erro do fornecedor e devolve como pendência. A cliente vê que o serviço pega erro, não só reescreve texto, e fecha o restante. Se a loja vende em marketplaces, o texto pode ser adaptado depois, como no guia para <a href="/artigos/vender-na-shopee-com-ia-taxas-margem-e-anuncios">vender na Shopee com IA</a> ou no de <a href="/artigos/loja-na-amazon-brasil-plano-individual-ou-profissional-e-fba-com-ajuda-de-ia">loja na Amazon Brasil</a>.</p>

    <h2>Erros comuns no serviço de cadastro</h2>
    <ul class="checklist">
      <li><strong>Deixar a IA completar dado técnico.</strong> Peso, medida, voltagem e compatibilidade vêm da ficha, sempre.</li>
      <li><strong>Copiar a descrição do fabricante ou de concorrente.</strong> Gera risco de direitos autorais e de texto duplicado entre lojas.</li>
      <li><strong>Colocar promoção no título.</strong> O Google desaconselha, e preço muda mais que o produto.</li>
      <li><strong>Esquecer variações.</strong> Cada cor e tamanho precisa de identificação clara.</li>
      <li><strong>Cobrar barato demais sem piloto.</strong> Sem testar o tempo real, o preço pode virar prejuízo.</li>
      <li><strong>Não combinar a emissão de nota.</strong> Para sua própria cobrança, veja o guia de <a href="/artigos/nota-fiscal-de-servico-para-mei-nfs-e-nacional-com-ajuda-de-ia">nota fiscal de serviço para MEI</a>.</li>
    </ul>
    <p>Para começar, monte a planilha-modelo e rode um piloto com 20 produtos de um conhecido ou de uma loja pequena da sua cidade. Quando tiver um caso, você terá prova de qualidade para a próxima proposta. Há mais ideias de serviços na categoria de <a href="/categoria/monetizacao">monetização com IA</a>.</p>
  `,
  faq: [
    {
      question: "O que é cadastro de produtos para loja virtual?",
      answer:
        "É o trabalho de organizar os dados de cada item de uma loja online: nome, marca, modelo, atributos, descrição, categoria, código de barras e imagens. Um cadastro bem feito ajuda o cliente a achar e entender o produto e reduz erros de pedido, devolução e anúncio reprovado em marketplaces e no Google.",
    },
    {
      question: "A IA pode escrever as descrições dos produtos?",
      answer:
        "Pode escrever o rascunho, desde que receba só dados confirmados do fornecedor. O risco é inventar medidas, materiais ou compatibilidades. Use um prompt que proíba completar o que falta, marque campos em branco para perguntar ao cliente e revise todos os números antes de entregar o catálogo.",
    },
    {
      question: "Qual o limite de caracteres do título no Google Merchant Center?",
      answer:
        "Segundo a especificação de dados de produto do Google, conferida em 21/10/2026, o título aceita até 150 caracteres e deve descrever o produto com precisão, sem texto promocional nem letras todas em maiúsculas. Para listagens em outros marketplaces, os limites podem ser menores, então consulte as regras de cada um.",
    },
    {
      question: "Quanto cobrar por produto cadastrado?",
      answer:
        "Não há valor único. Depende da complexidade dos atributos, da qualidade da ficha recebida e do seu tempo de revisão. Faça um piloto de 20 itens, meça os minutos por produto, defina o seu valor-hora e só então monte pacotes. Os valores do artigo são exemplos, não referência de mercado.",
    },
    {
      question: "Posso inventar o GTIN se o produto não tem código de barras?",
      answer:
        "Não. O Google diz que um GTIN incorreto causa reprovação e que só se deve enviar quando houver certeza. Sem código, informe a marca e o código do fabricante, quando existirem. A emissão oficial de códigos de barras no Brasil é feita pela GS1 Brasil, e o fornecedor deve confirmar o número.",
    },
  ],
};
