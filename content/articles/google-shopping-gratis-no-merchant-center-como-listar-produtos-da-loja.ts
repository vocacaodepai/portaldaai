import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "google-shopping-gratis-no-merchant-center-como-listar-produtos-da-loja",
  title: "Google Shopping grátis: como listar produtos no Merchant Center",
  seoTitle: "Google Shopping grátis: listar produtos no Merchant Center",
  excerpt:
    "Veja como aparecer no Google sem pagar anúncio: listagens gratuitas do Merchant Center, dados exigidos, regras de foto e como a IA ajuda a organizar o catálogo.",
  metaDescription:
    "Google Shopping grátis com Merchant Center: o que são listagens gratuitas, atributos obrigatórios, regras de imagem, erros comuns e como usar IA para preparar o catálogo.",
  category: "negocios",
  articleSubcategory: "vendas-e-marketing",
  date: "2026-10-21",
  readTime: 7,
  imageQuery: "online store product photos on laptop",
  seed: 530,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "As listagens gratuitas do Google mostram seus produtos na Pesquisa, na aba Shopping, em Imagens e em outros lugares sem custo por clique, mas o Google avisa que estar elegível não garante que o produto vai aparecer.",
    "O que decide a qualidade da listagem é o catálogo: título, preço, disponibilidade, imagem e identificadores precisam bater com a página da loja, e é aqui que a IA economiza tempo.",
    "A imagem principal tem regras próprias: fundo limpo, produto ocupando boa parte da foto e nada de texto promocional, preço, marca d'água ou logotipo sobreposto.",
  ],
  content: `
    <p>Google Shopping grátis é o nome popular das listagens gratuitas do Google Merchant Center: seus produtos podem aparecer na Pesquisa, na aba Shopping e em outros lugares do Google sem pagar por clique. Para a loja pequena, é uma porta de entrada de tráfego que depende menos de verba e mais de um catálogo bem preenchido.</p>

    <p>Este guia explica o que são as listagens gratuitas, o que o Google exige, como preparar título, foto e preço, onde a IA ajuda e onde ela atrapalha. Os dados vêm das páginas de ajuda do Google, consultadas em 21/10/2026. Regras mudam e variam por país, então confirme no seu painel do Merchant Center antes de agir.</p>

    <h2>O que são as listagens gratuitas do Google?</h2>

    <p>De acordo com a <a href="https://support.google.com/merchants/answer/9199328" target="_blank" rel="noopener noreferrer">página de ajuda do Merchant Center sobre listagens gratuitas</a>, elas permitem mostrar produtos sem custo em várias áreas do Google, incluindo Pesquisa, aba Shopping, Imagens, Lens, YouTube, Maps, Gemini e o módulo de produtos do Perfil da Empresa. Servem tanto para venda online quanto para loja física.</p>

    <p>O Google informa que contas novas do Merchant Center costumam entrar nas listagens gratuitas automaticamente, e que você confere o status em Marketing, depois Métodos de marketing, no cartão de listagens gratuitas. Mas há um aviso importante na própria página: a permissão para mostrar produtos de graça não garante que eles serão mostrados. Ou seja, não trate o canal como promessa de vendas, e sim como mais uma vitrine que você alimenta com dados de qualidade.</p>

    <p>Quem já usa anúncios pode combinar os dois mundos, como mostra o guia de <a href="/artigos/google-ads-com-ia-performance-max-e-ai-max-para-pequeno-negocio">Google Ads com IA para pequeno negócio</a>. Para quem tem loja física e quer aparecer no mapa, o texto sobre o <a href="/artigos/perfil-da-empresa-no-google-com-ia-respostas-fotos-e-posts">Perfil da Empresa no Google com IA</a> complementa.</p>

    <h2>O que você precisa ter antes de começar</h2>

    <p>A mesma página lista os requisitos. Veja o checklist adaptado:</p>

    <ul class="checklist">
      <li>Seguir as políticas do Google para exibir produtos gratuitamente.</li>
      <li>Informar a política de devolução, de preferência dentro do Merchant Center.</li>
      <li>Configurar o frete ou usar o atributo de frete (obrigatório em vários países; confira as regras do seu país no painel).</li>
      <li>Preencher os atributos obrigatórios de todo produto: identificador, título, link, link da imagem, preço, descrição e disponibilidade.</li>
      <li>Informar marca e código GTIN (o código de barras) ou MPN quando não houver GTIN.</li>
      <li>Para roupas, preencher cor, tamanho, faixa etária e gênero, e agrupar variações pelo identificador de grupo.</li>
      <li>Manter os dados iguais aos da sua loja virtual: preço e disponibilidade divergentes causam reprovação.</li>
    </ul>

    <p>Se você ainda não tem uma loja, o caminho mais rápido está no guia para <a href="/artigos/como-montar-uma-loja-virtual-em-um-fim-de-semana-usando-ia">montar uma loja virtual em um fim de semana com IA</a>. E a política de troca precisa existir de verdade: o texto sobre <a href="/artigos/troca-e-devolucao-na-loja-online-politica-clara-e-respostas-com-ia">troca e devolução na loja online</a> mostra como escrever uma clara.</p>

    <h2>Como preparar o catálogo com ajuda da IA</h2>

    <p>O gargalo de quase toda loja pequena é o catálogo: dezenas de produtos com títulos bagunçados, descrições copiadas do fornecedor e dados faltando. A IA é boa para padronizar em lote, desde que você revise. Ela organiza, mas não conhece o seu estoque: nunca deixe que invente medida, material ou código de barras.</p>

    <p>Prompt para padronizar títulos a partir de uma planilha:</p>

    <pre><code>Você vai padronizar títulos de produtos para um catálogo de loja virtual. Formato: Marca + Tipo de produto + Característica principal + Cor/Tamanho. Máximo de 100 caracteres, sem caixa alta, sem "promoção", "barato" ou "melhor". Use apenas os dados da linha: se faltar marca, cor ou tamanho, escreva FALTA em vez de inventar.
[cole 10 linhas da planilha]</code></pre>

    <p>Prompt para revisar descrições:</p>

    <pre><code>Reescreva a descrição abaixo em 3 a 5 frases claras, em português, sem exagero e sem promessa de resultado. Mantenha somente informações que estão no texto original: material, medidas, o que vem na caixa. Liste no final o que está faltando para o cliente decidir a compra.
[cole a descrição]</code></pre>

    <p>Para quem tem muitos itens, existe até um serviço pronto: veja <a href="/artigos/cadastro-de-produtos-para-loja-virtual-com-ia-servico-pacote-e-preco">cadastro de produtos para loja virtual com IA</a>. E os preços que entram no catálogo devem nascer de conta, não de chute: o guia sobre <a href="/artigos/como-precificar-produtos-e-servicos-com-ia">precificação com IA</a> ajuda.</p>

    <h2>Regras da imagem principal</h2>

    <p>A <a href="https://support.google.com/merchants/answer/6324350" target="_blank" rel="noopener noreferrer">página de requisitos de imagem do Merchant Center</a> é detalhista e vale uma leitura inteira. O resumo do que ela diz:</p>

    <table>
      <thead>
        <tr><th>Item</th><th>O que o Google pede</th></tr>
      </thead>
      <tbody>
        <tr><td>Tamanho</td><td>Mínimo de 500 x 500 pixels, valendo para todos os produtos a partir de 31 de janeiro de 2027; recomendado cerca de 1500 x 1500 ou mais</td></tr>
        <tr><td>Peso e formatos</td><td>Até 16 MB; JPEG, WebP, PNG, GIF, BMP e TIFF, com extensão igual ao formato real</td></tr>
        <tr><td>Enquadramento</td><td>Produto ocupando de 75% a 90% da imagem, sem bordas</td></tr>
        <tr><td>Texto e selos</td><td>Sem "Compre agora", preço, desconto, frete, garantia, adjetivos como "melhor" ou "barato", nem código de barras ou QR</td></tr>
        <tr><td>Marca d'água e logos</td><td>Proibidos, exceto o logotipo que for parte física do produto</td></tr>
        <tr><td>Reaproveitamento</td><td>Não usar a mesma foto genérica para produtos diferentes nem placeholder do tipo "em breve"</td></tr>
      </tbody>
    </table>

    <p>Quem edita foto com IA precisa de atenção extra: a página orienta preservar metadados que indicam geração por IA, como a marcação de tipo de fonte digital do IPTC. O artigo sobre <a href="/artigos/content-credentials-c2pa-como-saber-se-imagem-foi-feita-por-ia">Content Credentials</a> explica essas etiquetas. Para fotografar e melhorar imagens sem inventar o produto, veja <a href="/artigos/fotos-de-produto-para-vender-online-com-ia">fotos de produto para vender online com IA</a>. A foto nunca pode mostrar um item diferente do que o cliente receberá.</p>

    <h2>Exemplo: uma loja de 40 produtos de papelaria</h2>

    <p>Considere uma papelaria online hipotética com 40 produtos. A dona exporta a lista da loja para uma planilha, usa a IA para padronizar 40 títulos em quatro lotes de 10, confere cada um contra a embalagem e preenche os GTINs lendo os códigos de barras. Reserva uma tarde para tirar fotos em fundo branco, com o produto ocupando boa parte do quadro e sem texto na imagem.</p>

    <p>Em seguida cria a conta no Merchant Center, cadastra a política de devolução, o frete e envia os produtos. Nos dias seguintes, acompanha os avisos de reprovação: um preço diferente entre a loja e o catálogo, um GTIN faltando, uma foto com selo de "promoção". Cada correção vai para uma lista, e o catálogo melhora aos poucos. O ganho depende de fatores que ninguém controla por completo, como concorrência e demanda, então registre as visitas que vêm do canal para decidir se vale investir mais tempo.</p>

    <h2>Erros comuns e como evitar</h2>

    <ul>
      <li><strong>Preço ou estoque diferente da loja:</strong> atualize junto, ou automatize a sincronização pela plataforma. O texto sobre <a href="/artigos/como-usar-ia-para-gerenciar-estoque-pequeno-comercio">gestão de estoque com IA</a> ajuda.</li>
      <li><strong>Selo promocional na foto:</strong> viola a regra da imagem principal. Coloque o desconto no preço, não na imagem.</li>
      <li><strong>Título com palavras de venda:</strong> prefira descrever o produto.</li>
      <li><strong>Deixar a IA inventar atributos:</strong> peça para marcar o que falta.</li>
      <li><strong>Esquecer a política de devolução:</strong> o Google pede essa informação, e a <a href="/artigos/ia-para-reduzir-devolucoes-trocas-ecommerce">redução de devoluções com IA</a> ajuda a manter a taxa sob controle.</li>
      <li><strong>Ignorar as datas:</strong> campanhas como a <a href="/artigos/black-friday-2026-desconto-sem-prejuizo-para-pequeno-negocio">Black Friday</a> e o <a href="/artigos/natal-2026-como-planejar-estoque-promocoes-e-campanhas-com-ia-na-loja">Natal</a> exigem catálogo pronto com antecedência.</li>
    </ul>

    <h2>Por onde começar hoje</h2>

    <p>Escolha cinco produtos, os que você mais vende, e prepare o cadastro completo deles: título limpo, foto com fundo neutro, GTIN, preço e disponibilidade iguais aos da loja. Envie, espere a aprovação e corrija os avisos antes de subir o restante. Para decidir onde mais investir, o guia de <a href="/artigos/como-usar-ia-para-planejar-marketing-de-pequena-empresa">planejamento de marketing com IA</a> ajuda, e o texto sobre <a href="/artigos/vender-na-shopee-com-ia-taxas-margem-e-anuncios">vender na Shopee</a> mostra outro canal. Mais ideias na categoria <a href="/categoria/negocios">Negócios</a>.</p>
  `,
  faq: [
    {
      question: "Google Shopping grátis existe mesmo?",
      answer:
        "Sim: são as listagens gratuitas do Google Merchant Center, que mostram produtos em Pesquisa, aba Shopping, Imagens e outros locais sem custo por clique. A página do Google ressalta que estar elegível não garante que o produto será exibido, e a disponibilidade varia por país.",
    },
    {
      question: "Preciso ter CNPJ para usar o Merchant Center?",
      answer:
        "As páginas consultadas não tratam disso, então não há como afirmar. Cada país tem exigências e políticas próprias, e o Merchant Center pede dados da empresa e da loja. Confira no cadastro da sua conta e, se necessário, consulte seu contador sobre a forma de atuação.",
    },
    {
      question: "O que é GTIN e onde encontro?",
      answer:
        "GTIN é o número do código de barras do produto, como o EAN usado no varejo. O Google pede GTIN, marca e, quando não houver GTIN, o código MPN do fabricante. Você encontra na embalagem ou com o fornecedor, e não deve inventar nem copiar o de outro produto.",
    },
    {
      question: "Posso usar foto feita por IA no Google Shopping?",
      answer:
        "A imagem precisa mostrar o produto real, sem texto promocional, selos ou marcas d'água. O Google orienta preservar metadados que indicam geração por IA. Use a IA para limpar fundo e iluminar, nunca para mostrar um item diferente do que o cliente receberá.",
    },
    {
      question: "Quanto tempo leva para os produtos aparecerem?",
      answer:
        "As páginas consultadas não informam prazo. A aprovação depende da qualidade dos dados e da revisão do Google, e a exibição não é garantida. Prepare poucos produtos bem cadastrados, acompanhe os avisos no painel e corrija o que for reprovado antes de enviar o restante.",
    },
  ],
};
