import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "nano-banana-no-gemini-editar-fotos-criar-imagens-limites-e-planos",
  title: "Nano Banana no Gemini: editar fotos, criar imagens e limites",
  seoTitle: "Nano Banana no Gemini: como editar fotos e limites",
  excerpt:
    "Nano Banana no Gemini: veja como criar e editar imagens, o que muda entre Flash e Pro, os limites diários, a resolução do download e os cuidados de uso.",
  metaDescription:
    "Nano Banana no Gemini: passo a passo para editar fotos e gerar imagens, diferença entre os modelos, limite diário, resolução 1K e 2K, idade mínima e cuidados.",
  category: "ferramentas",
  date: "2026-10-18",
  readTime: 7,
  imageQuery: "photo editing smartphone creative desk",
  seed: 432,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O Nano Banana é o modelo de imagem do Gemini: cria imagens a partir de texto e edita fotos que você envia, com pedidos em português simples.",
    "Segundo a ajuda oficial do Google, há limite diário de imagens, o download sai em 1K sem plano do Google AI e em 2K com plano, e a edição exige 18 anos ou mais.",
    "Para uso profissional, vale tratar o resultado como rascunho: confira texto dentro da imagem, direitos de uso e se a foto final não engana o cliente.",
  ],
  content: `
    <p>O Nano Banana é o gerador e editor de imagens do Gemini, o assistente do Google: você descreve o que quer ou envia uma foto, pede a mudança em português e o modelo devolve a imagem pronta. Dá para trocar fundo, ajustar cena, juntar várias fotos em uma nova e baixar o resultado, dentro de limites diários e de idade mínima.</p>

    <p>O nome apareceu como apelido interno e virou marca. Hoje designa a família de modelos de imagem do Gemini, com versões mais rápidas e versões mais capazes. Este guia usa a página de ajuda do Google e a ficha técnica da DeepMind para explicar o que cada versão faz, como começar, quais limites existem, três prompts para testar e onde o uso comercial exige cuidado. Se você ainda não conhece a base, o <a href="/artigos/como-criar-imagens-com-ia-guia-passo-a-passo">guia de criação de imagens com IA</a> dá o contexto geral.</p>

    <h2>O que é o Nano Banana e quais versões existem</h2>
    <p>Segundo a <a href="https://support.google.com/gemini/answer/14286560" target="_blank" rel="noopener noreferrer">página de ajuda do Gemini</a>, o Nano Banana 2 cria imagens quando o modelo do Gemini está em Flash ou Pro, e o Nano Banana 2 Lite entra quando o modelo é o Flash-Lite, descrito como otimizado para velocidade. Existe também o Nano Banana Pro, restrito a quem tem um plano do Google AI.</p>
    <p>A ficha técnica publicada pela <a href="https://deepmind.google/models/model-cards/nano-banana-2-1/" target="_blank" rel="noopener noreferrer">DeepMind</a> descreve o Nano Banana 2.1, baseado no Gemini 3.6 Flash e divulgado em 6 de outubro de 2026. Ele está no app Gemini, no Google AI Studio, na API, no modo de IA da Busca, no Google Ads, no Flow e no Stitch. A ficha cita como usos pretendidos criar e editar imagens com controle fino, gerar texto legível em pôsteres e diagramas e renderizar texto localizado em vários idiomas. A <a href="/noticias/google-nano-banana-2-1-gemini-imagens">notícia sobre o lançamento do Nano Banana 2.1</a> resume as mudanças.</p>
    <p>Na prática, o nome da versão que aparece para você pode variar conforme conta, país e momento, e a própria página de ajuda ainda cita o Nano Banana 2. Por isso, a regra é simples: confira na tela do Gemini qual modelo está ativo e leia a ajuda oficial quando precisar de um limite exato.</p>

    <h2>Como criar e editar imagens passo a passo</h2>
    <p>O fluxo é o mesmo no celular e no computador. Entre no Gemini com a sua conta Google e siga os passos.</p>
    <ol>
      <li>Escolha o modelo (Flash costuma ser o ponto de partida) e abra um chat novo.</li>
      <li>Para criar do zero, descreva a imagem: assunto, cenário, estilo, luz e proporção.</li>
      <li>Para editar, envie a foto pelo botão de anexo e diga só a mudança que quer.</li>
      <li>Para combinar fotos, envie mais de uma e explique o papel de cada uma.</li>
      <li>Peça ajustes em sequência: uma mudança por vez, em frases curtas.</li>
      <li>Quando gostar, baixe a imagem. Se tiver plano, use a opção de refazer com o Pro.</li>
    </ol>
    <p>A página de ajuda lista três formas de edição: ajustar uma imagem que você gerou, enviar uma foto para editar e enviar várias imagens para criar uma nova. Quem quer ideias de uso no dia a dia pode ler também o texto de <a href="/artigos/como-editar-fotos-com-ia-no-celular-guia-iniciantes">edição de fotos com IA no celular</a>.</p>

    <h2>Limites, resolução e idade mínima</h2>
    <p>As regras abaixo vêm da página de ajuda oficial na data da consulta (18/10/2026). Elas mudam com frequência, então reconfira antes de prometer algo a cliente.</p>
    <table>
      <thead>
        <tr><th>Ponto</th><th>O que a ajuda oficial diz</th></tr>
      </thead>
      <tbody>
        <tr><td>Cota diária</td><td>O Nano Banana 2 tem cota diária de imagens; ao atingir, não é possível refazer com o Nano Banana Pro. A página não informa o número.</td></tr>
        <tr><td>Resolução do download</td><td>2K com plano do Google AI e 1K sem plano.</td></tr>
        <tr><td>Nano Banana Pro</td><td>Para assinantes de um plano do Google AI, com a opção de refazer com o Pro.</td></tr>
        <tr><td>Idade</td><td>Gerar imagens exige 13 anos ou o mínimo do país; editar exige 18 anos ou mais para contas pessoais.</td></tr>
        <tr><td>Disponibilidade</td><td>Limitada aos idiomas e países de cada app do Gemini; contas escolares podem ter restrições.</td></tr>
      </tbody>
    </table>
    <p>Para escolher entre plano gratuito e pago, o comparativo <a href="/artigos/google-ai-plus-pro-ou-ultra-qual-plano-do-gemini-escolher">Google AI Plus, Pro ou Ultra</a> detalha cada nível. Se a família usa o Gemini com adolescentes, o texto sobre o <a href="/artigos/eca-digital-e-ia-o-que-muda-para-pais-criancas-chatbots-e-apps">ECA Digital e IA</a> ajuda a entender as regras para menores.</p>

    <h2>Três prompts para testar hoje</h2>
    <p>Use fotos suas ou de produtos que você tem direito de usar. Evite imagens de terceiros e de crianças.</p>
    <h3>Prompt 1: trocar o fundo de uma foto de produto</h3>
    <pre><code>Mantenha a caneca exatamente como está, com o mesmo formato, cor
e logotipo. Troque apenas o fundo por uma mesa de madeira clara com
luz natural de janela, estilo foto de catálogo. Não adicione textos.</code></pre>
    <h3>Prompt 2: criar uma arte com texto</h3>
    <pre><code>Crie um cartaz vertical para uma padaria de bairro com o texto
"Pão quente às 7h" em letras grandes e legíveis, fundo bege,
ilustração simples de uma cesta de pães. Estilo limpo, sem
outros textos na imagem.</code></pre>
    <h3>Prompt 3: combinar duas fotos</h3>
    <pre><code>Use a primeira foto como cenário (sala de estar) e a segunda
como o móvel (poltrona). Coloque a poltrona no canto direito da
sala, com sombra coerente com a luz da janela. Não mude o resto.</code></pre>
    <p>Repare em dois detalhes dos prompts: dizem o que não deve mudar e pedem um ajuste de cada vez. Isso reduz o risco de a IA alterar partes que você queria preservar. O <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">guia de prompt engineering</a> aprofunda a técnica.</p>

    <h2>Para que serve no trabalho: negócios e conteúdo</h2>
    <p>O uso mais seguro é como apoio. Para loja pequena, o modelo ajuda a limpar fundo, criar variações de cenário para anúncios e montar artes de divulgação. O texto de <a href="/artigos/fotos-de-produto-para-vender-online-com-ia">fotos de produto com IA</a> mostra o fluxo completo, e o de <a href="/artigos/canva-capcut-e-ia-artes-e-videos-sem-saber-design">Canva e CapCut</a> mostra como finalizar a arte. Quem vai usar nas redes pode combinar com o guia de <a href="/artigos/instagram-para-pequeno-negocio-com-ia-calendario-reels-e-legendas">Instagram para pequeno negócio com IA</a>.</p>
    <p>Já para produto físico à venda, a regra é rígida: a foto precisa mostrar o item real. Imagem que melhora demais o produto, muda cor ou tamanho engana o cliente e pode gerar reclamação. Use a IA para o cenário, não para inventar o produto. Outro ponto é o texto dentro da imagem: a ficha da DeepMind fala em melhorias na geração de texto legível, mas confira cada palavra, acento e preço antes de publicar.</p>

    <h2>Cuidados: direitos, privacidade e conteúdo falso</h2>
    <p>Três frentes pedem atenção. A primeira é o direito de uso: o que você pode fazer com a imagem gerada depende dos termos do Google e da lei, tema do texto sobre <a href="/artigos/ia-e-direitos-autorais-o-que-criadores-precisam-saber">direitos autorais e IA</a>. A segunda é a privacidade: ao enviar foto de outras pessoas, você entrega dado pessoal a um serviço online, ponto discutido em <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">o que você entrega sem perceber</a>. Quem quiser apagar o histórico do chat encontra o caminho no guia do <a href="/artigos/apagar-historico-do-gemini-e-usar-chat-temporario">chat temporário do Gemini</a>.</p>
    <p>A terceira é o risco de desinformação. Imagem realista de pessoa, lugar ou acontecimento pode ser usada para enganar, e o texto sobre <a href="/artigos/deepfakes-ia-identificar-conteudo-falso-proteger-reputacao">deepfakes</a> mostra como se proteger. O Google mantém o <a href="https://deepmind.google/models/synthid/" target="_blank" rel="noopener noreferrer">SynthID</a>, tecnologia que embute marcas invisíveis em conteúdo gerado ou alterado por IA, e o <a href="/artigos/synthid-site-do-google-para-verificar-midia-gerada-por-ia">site de verificação</a> ajuda a checar. A página de ajuda do Nano Banana consultada não detalha marca d'água, então não presuma que toda imagem baixada tenha ou não tenha uma. O padrão <a href="/artigos/content-credentials-c2pa-como-saber-se-imagem-foi-feita-por-ia">Content Credentials</a> é outro caminho de rotulagem.</p>

    <h2>Erros comuns e quando não usar</h2>
    <ul>
      <li>Pedir tudo em um prompt gigante. Prefira ajustes pequenos e sucessivos.</li>
      <li>Aceitar texto com erro de português dentro da arte.</li>
      <li>Usar foto de menor de idade ou de terceiro sem autorização.</li>
      <li>Publicar imagem que parece foto real de um fato que não aconteceu.</li>
      <li>Contar com cota ilimitada: ela existe e o número não é divulgado na ajuda.</li>
      <li>Usar para documento, comprovante ou qualquer imagem que possa ser tomada como prova.</li>
    </ul>
    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Limites, resolução e disponibilidade foram conferidos na página oficial em 18/10/2026 e podem mudar. Antes de contar com o recurso para um trabalho pago, abra a página de ajuda do Gemini e confirme.</p></div>

    <h2>Vale a pena para quem?</h2>
    <p>Para quem cria artes de divulgação, edita foto de produto ou quer ilustrar um documento, o Nano Banana economiza horas e funciona bem no plano gratuito para uso leve. Quem produz volume e precisa de resolução maior tende a considerar um plano do Google AI. Para quem trabalha com imagem como profissão, a IA é uma ferramenta a mais, não substituta do olhar. O próximo passo é rodar o Prompt 1 com uma foto sua e ver o resultado. Para ir além da imagem, conheça também o <a href="/artigos/gemini-canvas-como-criar-documentos-apps-e-slides">Gemini Canvas</a>, que cria documentos e slides.</p>
  `,
  faq: [
    {
      question: "O Nano Banana é gratuito no Gemini?",
      answer:
        "Há uso sem plano pago, mas com limites. A página de ajuda do Google informa cota diária de imagens e download em 1K sem plano do Google AI, contra 2K com plano. O Nano Banana Pro é para assinantes. Confira a página oficial, pois as regras mudam.",
    },
    {
      question: "Qual a diferença entre Nano Banana 2 e Nano Banana Pro?",
      answer:
        "O Nano Banana 2 é o modelo padrão quando o Gemini está em Flash ou Pro. O Nano Banana Pro é restrito a quem tem plano do Google AI, e quem atinge a cota diária do Nano Banana 2 deixa de poder refazer a imagem com o Pro. A ajuda oficial não detalha os números.",
    },
    {
      question: "Quem pode editar fotos com o Nano Banana?",
      answer:
        "Segundo a ajuda oficial, a edição de imagens não está disponível para menores de 18 anos, e gerar imagens exige pelo menos 13 anos ou a idade mínima do país. Contas escolares podem ter restrições próprias, definidas pela instituição.",
    },
    {
      question: "Posso usar imagens do Nano Banana em anúncios?",
      answer:
        "Em geral é possível, mas leia os termos do Google e respeite o direito do consumidor. A foto de um produto à venda precisa mostrar o item real. Revise textos dentro da imagem e evite retratar pessoas reais sem autorização.",
    },
    {
      question: "O Nano Banana funciona em português?",
      answer:
        "A ficha técnica da DeepMind cita a renderização de texto localizado em vários idiomas, e o Gemini aceita pedidos em português. Mesmo assim, confira acentos e palavras dentro da imagem, porque erros de texto ainda acontecem em qualquer gerador.",
    },
  ],
};
