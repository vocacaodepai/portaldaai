import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "como-criar-imagens-com-ia-guia-passo-a-passo",
  title: "Como criar imagens com IA: guia passo a passo para iniciantes",
  seoTitle: "Como criar imagens com IA: guia passo a passo",
  excerpt:
    "Como criar imagens com IA sem saber desenhar: ferramentas gratuitas, o prompt certo e os erros que estragam o resultado. Passo a passo simples.",
  metaDescription:
    "Como criar imagens com IA do zero: ferramentas gratuitas e pagas, prompt em português, exemplo prático e os erros mais comuns de quem está começando.",
  category: "iniciantes",
  date: "2026-09-29",
  readTime: 8,
  imageQuery: "digital art tablet colorful illustration",
  seed: 100,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Dá para criar imagens com IA de graça no Gemini, no ChatGPT ou no Bing Image Creator, escrevendo o pedido em português normal.",
    "Um prompt bom descreve cena, estilo, enquadramento e luz; quanto mais detalhe concreto, menos a IA improvisa.",
    "Imagem de IA não é foto real de produto nem de pessoa específica: para isso o caminho é outro, e este guia explica quando não usar.",
  ],
  content: `
    <p>Criar imagens com IA significa descrever em texto o que você quer ver e deixar um modelo de geração de imagens montar o resultado em segundos, sem precisar saber desenhar ou usar Photoshop. Hoje isso é gratuito nas versões básicas do Gemini, do ChatGPT e do Bing Image Creator, e o segredo não está na ferramenta: está em como você escreve o pedido.</p>

    <p>Este guia mostra as ferramentas que funcionam bem em português, o passo a passo para sair do zero até a primeira imagem publicável, um exemplo com prompt completo e os erros que fazem a imagem sair torta, com texto ilegível ou parecida com a de qualquer outra pessoa que usou o mesmo pedido genérico.</p>

    <h2>O que é geração de imagens com IA, na prática</h2>

    <p>O modelo foi treinado olhando bilhões de pares de imagem e descrição, e aprendeu a associar palavras a formas, cores e composições. Quando você escreve um prompt, ele não busca uma foto existente: monta uma imagem nova, pixel por pixel, a partir do padrão que aprendeu. Por isso duas pessoas com o mesmo prompt recebem resultados parecidos, mas nunca idênticos.</p>

    <p>Existem hoje dois jeitos de usar isso: gerar do zero (texto vira imagem) e editar uma imagem existente (você envia uma foto e pede para mudar o fundo, a luz ou um elemento específico). O <a href="https://gemini.google/br/overview/image-generation/?hl=pt-BR" rel="noopener noreferrer">Nano Banana Pro do Google</a> faz os dois bem, incluindo trocar o estilo de uma foto mantendo o rosto reconhecível. Se a dúvida for sobre o conceito de IA em si antes de partir para a prática, o guia <a href="/artigos/o-que-e-inteligencia-artificial-guia-completo">o que é inteligência artificial</a> explica do começo.</p>

    <h2>Ferramentas gratuitas para começar hoje</h2>

    <p>Não precisa pagar nada para testar. As três abaixo têm plano gratuito funcional em português, cada uma com um ponto forte diferente.</p>

    <table>
      <thead>
        <tr><th>Ferramenta</th><th>Ponto forte</th><th>Limite do plano grátis</th></tr>
      </thead>
      <tbody>
        <tr><td>Gemini (Nano Banana)</td><td>Edita fotos reais mantendo o rosto e o objeto originais</td><td>Gera com o modelo padrão; volta para ele quando o limite de gerações no Pro acaba, segundo a <a href="https://gemini.google/br/overview/image-generation/?hl=pt-BR" rel="noopener noreferrer">página oficial do Gemini</a></td></tr>
        <tr><td>ChatGPT</td><td>Entende pedidos longos e corrige a própria imagem se você pedir ajuste</td><td>Número de gerações por dia varia por plano; consulte a página oficial</td></tr>
        <tr><td>Bing Image Creator (Microsoft Designer)</td><td>Bom para texto dentro da imagem, como cartazes e capas</td><td>Créditos diários; renova todo dia, consulte a página oficial</td></tr>
      </tbody>
    </table>

    <p>Se a dúvida é qual assistente escolher no geral, não só para imagem, o comparativo <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini</a> ajuda a decidir. Para quem já paga por um desses planos e quer saber se vale continuar pagando, o guia <a href="/artigos/ia-gratis-ou-paga-o-que-vale-a-pena">IA grátis ou paga</a> lista o que cada nível libera.</p>

    <h2>Passo a passo: da ideia até a primeira imagem pronta</h2>

    <h3>Antes de escrever o prompt</h3>

    <ol>
      <li><strong>Defina o uso.</strong> Post de rede social, capa de artigo, ilustração de apresentação e mockup de produto pedem proporções diferentes (quadrado, 16:9, vertical).</li>
      <li><strong>Separe uma referência de estilo</strong>, mesmo que mental: fotografia realista, ilustração plana, aquarela, 3D. Isso evita que a IA misture estilos sem você pedir.</li>
      <li><strong>Escolha a ferramenta pelo uso</strong>: edição de foto real vai no Gemini, texto dentro da imagem vai no Bing Image Creator, cena complexa com várias instruções vai no ChatGPT.</li>
    </ol>

    <h3>Escrevendo o prompt</h3>

    <ol>
      <li>Descreva o assunto principal em uma frase clara: quem ou o que aparece.</li>
      <li>Adicione cenário e luz: onde está, que hora do dia, luz natural ou artificial.</li>
      <li>Diga o estilo: fotografia, ilustração, 3D, desenho de linha.</li>
      <li>Feche com enquadramento: close, plano aberto, vista de cima.</li>
      <li>Gere, olhe o resultado e ajuste só o que não ficou bom, pedindo a mudança específica em vez de reescrever tudo.</li>
    </ol>

    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Peça uma coisa de cada vez no ajuste: "deixe o fundo mais claro" funciona melhor que "melhore a imagem", porque a IA não sabe o que você considera melhor.</p></div>

    <h2>Prompts prontos para testar agora</h2>

    <p>A lógica de escrever um bom prompt é parecida em qualquer ferramenta de IA generativa, e o guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">prompt engineering</a> detalha o método completo. Para imagem, o prompt fica mais concreto quando descreve como se fosse uma cena real, não uma ideia abstrata.</p>

    <p><strong>Prompt 1: capa de artigo.</strong></p>

    <pre><code>Crie uma ilustração plana e colorida de uma pessoa usando notebook em uma mesa de madeira clara, luz natural vinda da janela à esquerda, estilo flat design com poucas cores (azul, laranja e branco), sem texto, proporção 16:9.</code></pre>

    <p><strong>Prompt 2: foto de produto simples.</strong></p>

    <pre><code>Fotografia realista de uma caneca de cerâmica branca sobre uma mesa de mármore claro, fundo desfocado em tom bege, luz suave de estúdio vinda de cima, sem logotipos, sem texto, ângulo levemente de cima, proporção quadrada.</code></pre>

    <p><strong>Prompt 3: editar uma foto existente (envie a foto junto).</strong></p>

    <pre><code>Troque só o fundo desta foto para um escritório moderno com plantas, mantendo a pessoa, a roupa e a pose exatamente como estão. Não altere o rosto.</code></pre>

    <p>Quem já domina o básico e quer criar peças completas, não só imagens soltas, encontra o próximo passo nos guias de <a href="/artigos/como-criar-apresentacoes-e-slides-profissionais-com-ia">apresentações profissionais com IA</a> e de <a href="/artigos/canva-capcut-e-ia-artes-e-videos-sem-saber-design">Canva, CapCut e IA</a> para montar artes e vídeos sem curso de design.</p>

    <h2>Exemplo brasileiro: cardápio digital de uma hamburgueria</h2>

    <p>Cenário ilustrativo, para mostrar a conta, não um caso que acompanhamos. Diego tem uma hamburgueria em Sorocaba e precisava de seis imagens para o cardápio digital do site: três lanches, uma bebida, uma sobremesa e uma foto de capa. Fotografia profissional na região saía por cerca de R$ 800 o pacote, com data marcada e prato preparado especialmente para a sessão.</p>

    <p>Ele testou o Gemini Free: descreveu cada prato com ingredientes visíveis (pão brioche, queijo derretido, bacon crocante, alface) e pediu "fotografia realista, luz de estúdio, fundo escuro, ângulo de 45 graus". As três primeiras tentativas saíram genéricas demais; ajustando o prompt para citar a cor exata do pão e o tipo de prato (madeira escura), o resultado ficou perto do que ele queria. Tempo total: uma tarde. Custo: R$ 0, porque ficou dentro do limite diário do plano gratuito.</p>

    <p>A ressalva que ele levou a sério: imagem de IA de comida ajuda o cardápio digital a ficar bonito, mas não substitui foto real quando o cliente compara com o prato entregue. Ele usa as imagens de IA no cardápio online e fotos reais nas redes sociais, para não gerar expectativa que o prato físico não cumpre.</p>

    <h2>Quando não usar imagem gerada por IA</h2>

    <p>Existem casos em que a imagem de IA atrapalha mais do que ajuda, e vale saber identificar antes de publicar.</p>

    <ul class="checklist">
      <li>Foto de produto físico que o cliente vai receber exatamente igual: use foto real, porque a IA pode inventar um detalhe que o produto não tem.</li>
      <li>Retrato de uma pessoa real específica sem o consentimento dela: além do problema ético, o resultado costuma sair com traços estranhos.</li>
      <li>Documento, identidade visual de marca registrada ou logotipo de terceiros: risco de direito autoral e de imagem enganosa.</li>
      <li>Texto muito específico dentro da imagem (número de telefone, endereço): a IA ainda erra letras e números com frequência, revise sempre.</li>
    </ul>

    <p>O tema de confiar demais no que a IA entrega sem checar aparece também na <a href="/artigos/deepfakes-ia-identificar-conteudo-falso-proteger-reputacao">discussão sobre deepfakes</a>, que trata do lado mais sério do mesmo recurso: gerar rosto realista de alguém que não deu permissão.</p>

    <h2>Erros comuns de quem está começando</h2>

    <p>O erro mais frequente é escrever um prompt de três palavras ("cachorro fofo brincando") e esperar o resultado perfeito: a IA preenche todo o resto com escolhas aleatórias, e o resultado varia demais entre tentativas. O segundo é ignorar a proporção antes de gerar, o que obriga a cortar a imagem depois e perder parte da composição.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Nenhuma ferramenta de imagem por IA garante direitos de uso comercial no plano gratuito. Antes de vender ou usar em anúncio pago, leia os termos da ferramenta que você escolheu.</p></div>

    <p>Outro erro comum é não guardar o prompt que funcionou. Quando uma imagem sai boa, copie o texto exato para um documento à parte: é mais rápido reaproveitar e ajustar do que reconstruir a descrição do zero na próxima vez. Se a preocupação é o que essas ferramentas fazem com os dados e imagens enviadas, o guia <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a> explica o que checar nos termos antes de subir fotos reais.</p>

    <h2>Por onde ir depois</h2>

    <p>Comece pelo Gemini ou pelo ChatGPT, gratuitos, e gere dez imagens testando cenário, luz e estilo diferentes antes de decidir se vale assinar um plano pago. Quem já tem noção de prompt e quer aplicar isso em logotipo ou identidade visual encontra o próximo passo no guia de <a href="/artigos/ia-para-design-de-logotipo-marca-simples-profissional">IA para design de logotipo</a>, e quem pensa em transformar a habilidade em renda extra pode ler sobre <a href="/artigos/como-vender-artes-e-fotos-criadas-com-ia-generativa">vender artes criadas com IA generativa</a>. A categoria <a href="/categoria/iniciantes">Para Iniciantes</a> reúne os outros primeiros passos com IA.</p>
  `,
  faq: [
    {
      question: "Criar imagens com IA é gratuito?",
      answer:
        "Sim, dá para começar sem pagar nada. Gemini, ChatGPT e Bing Image Creator têm plano gratuito com limite diário de gerações; o limite exato muda com frequência, então consulte a página oficial de cada ferramenta antes de planejar um uso constante.",
    },
    {
      question: "As imagens geradas por IA têm direitos autorais?",
      answer:
        "Depende da ferramenta e do plano. Algumas liberam uso comercial no plano pago e restringem no gratuito, outras têm regras diferentes por tipo de conteúdo. Antes de vender ou usar em anúncio, leia os termos de uso específicos da ferramenta escolhida, porque isso muda entre Gemini, ChatGPT e Bing.",
    },
    {
      question: "Dá para editar uma foto real com IA sem perder a identidade da pessoa?",
      answer:
        "Sim, ferramentas como o Nano Banana Pro do Gemini foram feitas para isso: você envia a foto e pede para trocar só o fundo, a roupa ou a luz, mantendo o rosto reconhecível. Funciona melhor quando o pedido é específico, como 'troque só o fundo, mantenha o rosto e a pose'.",
    },
    {
      question: "Por que minha imagem sai diferente do que eu pedi?",
      answer:
        "Geralmente porque o prompt deixou espaço para a IA interpretar. Descrever cena, luz, estilo e enquadramento reduz a variação. Também ajuda gerar mais de uma vez e ajustar só o que não ficou bom, em vez de reescrever o pedido inteiro a cada tentativa.",
    },
    {
      question: "Posso usar imagem de IA para o cardápio ou catálogo do meu negócio?",
      answer:
        "Pode, principalmente em pratos e itens que não precisam bater exatamente com a entrega. Para produto físico que o cliente vai receber, o mais honesto é usar foto real, porque a IA pode inventar detalhes que o produto não tem.",
    },
  ],
};
