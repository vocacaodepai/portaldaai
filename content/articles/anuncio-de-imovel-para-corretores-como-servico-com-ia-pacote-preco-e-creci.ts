import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "anuncio-de-imovel-para-corretores-como-servico-com-ia-pacote-preco-e-creci",
  title: "Anúncio de imóvel com IA: serviço para corretores, pacote e CRECI",
  seoTitle: "Anúncio de imóvel com IA: serviço para corretores",
  excerpt:
    "Monte um serviço de anúncio de imóvel com IA para corretores: pacote, preço de partida, prompts e as regras do CRECI e do CDC para não vender anúncio enganoso.",
  metaDescription:
    "Anúncio de imóvel com IA como serviço para corretores: o que entregar, exemplo de pacote e preço, prompts, regra do número do CRECI e cuidados com fotos e informações do imóvel.",
  category: "monetizacao",
  articleSubcategory: "freelance-servicos",
  date: "2026-10-29",
  readTime: 7,
  imageQuery: "real estate agent keys apartment",
  seed: 899,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Corretor de imóveis vive de anúncio, e escrever título, descrição e legenda de cada imóvel toma tempo: é um serviço que a IA acelera e que você pode vender em pacote mensal.",
    "O texto do anúncio precisa seguir as regras do CRECI, como o número de inscrição junto do nome, e o Código de Defesa do Consumidor, que proíbe informação falsa ou omissão que induza o cliente ao erro.",
    "Fotos e metragem não se inventam: a IA organiza e redige a partir de dados que o corretor confirma, e nada de prometer venda ou renda com o serviço.",
  ],
  content: `
    <p>Anúncio de imóvel com IA, como serviço para corretores, é uma entrega simples: você recebe os dados e as fotos do imóvel, escreve título, descrição, legendas e uma versão curta para redes sociais, e o corretor revisa e publica. Ele ganha tempo para visitar clientes, e você cobra por pacote mensal, sem inventar nada que o imóvel não tenha.</p>

    <p>O mercado é concreto: quem trabalha com imóveis mantém vários anúncios ao mesmo tempo e atualiza todos quando o preço muda. Este guia mostra o que entregar, como organizar o pacote, prompts que funcionam e as regras que impedem um texto bonito de virar problema, sem prometer renda: o que você fatura depende do seu tempo, da sua carteira de clientes e da região.</p>

    <h2>O que o corretor precisa e por que paga por isso</h2>

    <p>O corretor perde horas escrevendo descrições parecidas, ajustando fotos e respondendo as mesmas perguntas. Um anúncio fraco, com texto genérico e metragem esquecida, recebe menos contatos qualificados. O que ele compra de você é consistência: título claro, descrição que responde as dúvidas e conteúdo pronto para portais, WhatsApp e Instagram.</p>

    <p>Esse tipo de oferta combina com quem já presta serviço de texto. Se você usa a mesma lógica do <a href="/artigos/blog-para-negocio-local-como-servico-pacote-preco-e-o-que-o-google-aceita-de-ia">blog para negócio local como serviço</a> ou do <a href="/artigos/carrossel-de-instagram-como-servico-para-profissionais-liberais-pacote-e-preco">carrossel de Instagram para profissionais liberais</a>, o fluxo de briefing, entrega e revisão é quase o mesmo. A diferença está no setor: aqui existem regras próprias de identificação e de veracidade.</p>

    <h2>O que entregar em cada anúncio</h2>

    <table>
      <thead>
        <tr><th>Item</th><th>O que é</th><th>Tamanho de referência</th></tr>
      </thead>
      <tbody>
        <tr><td>Título</td><td>Tipo, bairro e um diferencial real</td><td>Até 70 caracteres</td></tr>
        <tr><td>Descrição</td><td>Texto corrido com planta, cômodos, condomínio e entorno</td><td>120 a 200 palavras</td></tr>
        <tr><td>Lista de características</td><td>Itens em tópicos, sem adjetivo</td><td>8 a 12 itens</td></tr>
        <tr><td>Legendas de fotos</td><td>Uma frase por foto, descrevendo o que aparece</td><td>1 por foto</td></tr>
        <tr><td>Versão para redes sociais</td><td>Texto curto com chamada para contato</td><td>40 a 80 palavras</td></tr>
        <tr><td>Resposta pronta de WhatsApp</td><td>Texto para as primeiras perguntas</td><td>3 variações</td></tr>
      </tbody>
    </table>

    <p>Peça ao corretor uma ficha padrão com metragem, número de quartos e vagas, valor do condomínio e do IPTU, situação da documentação, andar, face do sol e pontos fracos. Os pontos fracos importam: quem esconde o barulho da avenida perde a confiança na primeira visita. O guia de <a href="/artigos/briefing-e-escopo-para-freelancer-com-ia-evite-retrabalho-e-cliente-que-pede-mais">briefing e escopo para freelancer</a> mostra como transformar essa ficha em contrato de escopo.</p>

    <h2>Prompts que funcionam para anúncio de imóvel</h2>

    <p>A regra do prompt é a mesma de qualquer texto comercial: dê os fatos, defina o tamanho e proíba a invenção. Cole só dados confirmados pelo corretor.</p>

    <pre><code>Escreva a descrição de um anúncio de imóvel em português do Brasil, com 150 a 180 palavras, em parágrafos curtos. Use APENAS os dados abaixo. Não invente metragem, vista, reforma ou proximidade de nada. Não use "oportunidade única", "imperdível" nem exclamações. Termine com uma frase neutra convidando para visita.

Dados: [tipo, bairro, metragem, quartos, suítes, vagas, andar, condomínio em R$, IPTU em R$, pontos fortes, pontos de atenção]</code></pre>

    <pre><code>Com base na ficha do imóvel, gere 3 títulos de até 70 caracteres e uma lista de 10 características em tópicos, cada uma com um dado verificável. Se faltar dado, escreva "confirmar com o corretor".</code></pre>

    <p>Para o <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">texto do prompt</a> render, guarde o modelo e troque só os dados a cada imóvel. A parte de fotos, que costuma ser a mais sensível, vem na seção de cuidados. Se o corretor quiser vídeo curto do imóvel, o serviço de <a href="/artigos/videos-de-produto-com-ia-servico-para-lojistas-pacote-e-preco">vídeos de produto com IA</a> traz uma estrutura de pacote parecida.</p>

    <h2>As regras do CRECI e do CDC no texto</h2>

    <p>Anúncio de imóvel não é texto livre. Segundo a <a href="https://www.normasbrasil.com.br/norma/resolucao-1065-2007_105573.html" target="_blank" rel="noopener noreferrer">Resolução COFECI nº 1.065/2007</a>, consultada em 29/10/2026, o corretor pessoa física que usa seu nome na divulgação deve acompanhá-lo da expressão "corretor de imóveis" ou "profissional liberal", seguida do número de inscrição, precedido da sigla CRECI, em destaque idêntico ao da expressão. Pessoa física não pode usar nome fantasia, e a pessoa jurídica acrescenta a letra "J" ao número. O texto da resolução também limita o tamanho mínimo da expressão a 25% do nome.</p>

    <p>Como o texto pode ter sido alterado depois, peça ao corretor para confirmar a regra vigente no CRECI do estado e incluir o número dele em todo material. A responsabilidade pelo anúncio é do profissional, mas você precisa montar o texto de modo que a identificação apareça. Do lado do consumidor, o <a href="https://consumidor.gov.br/pages/conteudo/publico/102" target="_blank" rel="noopener noreferrer">Código de Defesa do Consumidor publicado no consumidor.gov.br</a> define como enganosa qualquer comunicação publicitária inteira ou parcialmente falsa, e a omissão de dado importante sobre natureza ou preço também pode induzir o cliente ao erro.</p>

    <div class="callout-box callout-warn">
      <span class="callout-label">Atenção</span>
      <p>Não prometa valorização, retorno de aluguel ou prazo de venda no texto. Sem dado oficial, sem frase. Quando houver dúvida jurídica, o corretor consulta o CRECI ou um advogado.</p>
    </div>

    <h2>Fotos: o que a IA pode e o que não pode</h2>

    <p>A IA ajuda a escrever a legenda e a ordenar as fotos (sala, cozinha, quartos, área comum), mas não a mudar o que a foto mostra. Tirar um fio solto ou uma lixeira costuma ser aceitável quando o corretor aprova, como mostra o texto sobre a <a href="/artigos/borracha-magica-do-google-fotos-remover-objetos-e-pedir-edicao-por-texto">borracha mágica do Google Fotos</a>. Já apagar uma obra no prédio vizinho, aumentar o cômodo ou "mobiliar" com imagem gerada por IA sem avisar leva o anúncio para o território da informação enganosa.</p>

    <p>Regra simples para o seu contrato: toda imagem alterada por IA leva um aviso na legenda, como "imagem ilustrativa de mobília", e todo ajuste de cor e luz é permitido desde que o imóvel continue reconhecível. O guia <a href="/artigos/como-editar-fotos-com-ia-no-celular-guia-iniciantes">como editar fotos com IA no celular</a> mostra o que dá para melhorar sem alterar o conteúdo.</p>

    <h2>Exemplo de pacote com números</h2>

    <p>Os valores abaixo são um exemplo para você ajustar ao seu mercado, não uma tabela de preço oficial nem promessa de ganho.</p>

    <ul>
      <li><strong>Pacote Avulso:</strong> 1 imóvel, com título, descrição, 10 características, legendas e versão para rede social, por R$ 60 a R$ 90, em até 24 horas.</li>
      <li><strong>Pacote Mensal 10:</strong> 10 imóveis por mês, com 1 rodada de ajuste por anúncio, por R$ 450 a R$ 650.</li>
      <li><strong>Atualização:</strong> troca de preço ou foto em anúncio já entregue, R$ 15 a R$ 25 por item.</li>
    </ul>

    <p>Veja a conta de uma carteira fictícia: 3 corretores no Pacote Mensal 10, a R$ 500 cada, dão R$ 1.500 por mês. Se cada anúncio toma 25 minutos com IA e revisão, 30 anúncios exigem 12 horas e meia de trabalho, ou cerca de R$ 120 por hora. O número serve só para testar se a conta fecha: o tempo real varia com a qualidade dos dados que o corretor entrega, e o cálculo de <a href="/artigos/como-precificar-servicos-usando-ia-no-trabalho">como precificar serviços usando IA</a> ajuda a refazer a conta com o seu custo.</p>

    <h2>Como achar os primeiros clientes</h2>

    <p>Comece pelos corretores que você já conhece ou por quem anuncia imóveis no seu bairro. Ofereça 2 anúncios de teste gratuitos para dois deles, com a condição de poder mostrar o resultado e receber um comentário. Depois, monte um portfólio com antes e depois (com autorização) e apresente em uma página simples, no estilo do <a href="/artigos/site-para-negocio-local-com-ia-pacote-prazo-e-como-cobrar">site para negócio local</a>. Plataformas de freelancer também funcionam, e o texto sobre <a href="/artigos/conseguir-clientes-no-99freelas-com-ia-perfil-proposta-e-preco">conseguir clientes no 99Freelas</a> traz o formato de proposta.</p>

    <p>Se o corretor também precisa de presença no Instagram, ofereça o calendário do <a href="/artigos/instagram-para-pequeno-negocio-com-ia-calendario-reels-e-legendas">Instagram para pequeno negócio</a> como adicional, e o <a href="/artigos/perfil-da-empresa-no-google-com-ia-respostas-fotos-e-posts">perfil da empresa no Google</a> para imobiliárias com endereço físico.</p>

    <h2>Erros comuns neste serviço</h2>

    <ul class="checklist">
      <li>Escrever sem ficha completa e preencher lacunas com adjetivo.</li>
      <li>Esquecer o nome e o número do CRECI no material de divulgação.</li>
      <li>Copiar o texto de um anúncio concorrente: além de ruim, pode violar direito autoral.</li>
      <li>Guardar dados do proprietário, como endereço completo e telefone, em ferramentas sem proteção. O <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">checklist de LGPD para pequeno negócio</a> mostra o cuidado básico.</li>
      <li>Cobrar sem contrato e sem limite de revisões.</li>
      <li>Atuar como pessoa física sem pensar na parte fiscal: veja <a href="/artigos/abrir-mei-passo-a-passo-ocupacao-das-e-primeiros-meses-com-ia">como abrir MEI</a> e a <a href="/artigos/nota-fiscal-de-servico-para-mei-nfs-e-nacional-com-ajuda-de-ia">nota fiscal de serviço para MEI</a>.</li>
    </ul>

    <p>Escolha um corretor, monte a ficha padrão e entregue o primeiro anúncio de teste ainda esta semana. Para mais ideias de serviços que a IA acelera, a categoria de <a href="/categoria/monetizacao">monetização do Portal da AI</a> reúne os guias práticos.</p>
  `,
  faq: [
    {
      question: "Posso cobrar para escrever anúncio de imóvel com IA?",
      answer:
        "Pode, desde que o resultado seja revisado e que os dados venham do corretor. Você vende tempo, organização e texto claro, não promessa de venda. Defina em contrato o que está incluso, quantas revisões existem e quem responde pela veracidade das informações.",
    },
    {
      question: "O anúncio precisa ter o número do CRECI?",
      answer:
        "Pela Resolução COFECI nº 1.065/2007, o nome do corretor na divulgação deve vir com a expressão profissional e o número de inscrição precedido da sigla CRECI. Como a norma pode mudar, confirme a regra atual no CRECI do estado antes de publicar.",
    },
    {
      question: "A IA pode inventar informação sobre o imóvel?",
      answer:
        "Pode, se o pedido for vago. Por isso, entregue uma ficha com os dados confirmados e peça que a IA use apenas essas informações. Quando faltar dado, o texto deve dizer que é preciso confirmar com o corretor, e não preencher a lacuna.",
    },
    {
      question: "Posso alterar fotos do imóvel com IA?",
      answer:
        "Ajustes de luz e cor, em geral, são aceitáveis. Mudar o que a foto mostra, como apagar um prédio vizinho ou aumentar um cômodo, pode tornar o anúncio enganoso. Imagens com mobília gerada por IA devem trazer aviso claro de que são ilustrativas.",
    },
    {
      question: "Quanto cobrar por anúncio de imóvel feito com IA?",
      answer:
        "Não há preço oficial. Como ponto de partida para testar, use valores entre R$ 60 e R$ 90 por anúncio avulso e pacotes mensais com desconto. Calcule o seu tempo real, inclusive revisão, e ajuste ao mercado da sua cidade.",
    },
  ],
};
