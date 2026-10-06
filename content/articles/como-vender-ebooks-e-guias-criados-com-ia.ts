import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "como-vender-ebooks-e-guias-criados-com-ia",
  title: "Vender ebooks criados com IA: guia do rascunho à primeira venda",
  seoTitle: "Vender ebooks criados com IA: guia completo",
  excerpt:
    "Vender ebooks criados com IA: como escolher o tema, escrever sem ficar genérico, montar capa, publicar na Amazon ou na Kiwify e quanto sobra por venda.",
  metaDescription:
    "Vender ebooks criados com IA sem parecer texto de máquina: tema, prompts, capa, regras da Amazon KDP sobre uso de IA, taxas por venda e exemplo em reais.",
  category: "monetizacao",
  articleSubcategory: "produtos-digitais",
  date: "2026-09-13",
  updated: "2026-09-27",
  readTime: 9,
  imageQuery: "ebook writing laptop desk",
  seed: 20,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Ebook feito com IA vende quando resolve um problema estreito com a experiência de quem escreve; texto gerado e publicado sem edição não segura leitor nem avaliação.",
    "A Amazon KDP exige informar conteúdo gerado por IA e paga 35% ou 70% do preço sem impostos; plataformas brasileiras como a Kiwify cobram uma taxa por venda.",
    "Comece com um guia de 20 a 40 páginas, preço abaixo de R$ 40,00 e uma página de venda simples; use as primeiras vendas para decidir se vale ampliar.",
  ],
  content: `
    <p>Vender ebooks criados com IA funciona quando o material resolve um problema estreito e carrega a experiência de quem assina. A inteligência artificial corta a parte braçal (sumário, rascunho, revisão, capa) e transforma semanas de trabalho em alguns dias. O que ela não faz é dar motivo para alguém pagar por um texto que o Google entrega de graça.</p>

    <p>Este guia mostra o caminho inteiro: escolher o tema, escrever com a IA sem soar genérico, montar capa e arquivo, publicar na Amazon ou em uma plataforma brasileira, entender quanto fica no seu bolso e evitar os erros que derrubam avaliação. Os preços e taxas citados foram conferidos nas páginas oficiais em 27/09/2026.</p>

    <h2>Ebook criado com IA vende de verdade?</h2>

    <p>Vende, mas por um motivo diferente do que parece. Ninguém compra um ebook porque ele foi rápido de fazer; compra porque quer resolver algo específico sem procurar em vinte lugares. Um guia de 30 páginas sobre "como organizar o financeiro de um salão de beleza em 30 dias" tem comprador. Um livro de 150 páginas sobre "marketing digital" compete com todo o conteúdo gratuito da internet e perde.</p>

    <p>A IA entra como assistente de produção, e a Amazon deixou isso explícito nas <a href="https://kdp.amazon.com/pt_BR/help/topic/G200672390" rel="noopener noreferrer">diretrizes de conteúdo do KDP</a>: conteúdo "gerado por IA" (texto, imagem ou tradução criados pela ferramenta, mesmo com edição depois) precisa ser informado na publicação; conteúdo "assistido por IA" (você escreveu e usou a ferramenta para revisar, refinar ou ter ideias) não precisa. A distinção é útil como régua de qualidade: quanto mais o texto é seu, mais ele se sustenta e menos você depende de declaração.</p>

    <p>Se você ainda está decidindo entre ebook, curso ou comunidade, o guia sobre <a href="/artigos/como-transformar-conhecimento-em-comunidade-paga-com-ia">transformar conhecimento em comunidade paga</a> mostra o outro lado da moeda: o ebook é o produto de entrada mais barato de fazer e de comprar, e por isso costuma ser o primeiro.</p>

    <h2>Escolha um problema que alguém já paga para resolver</h2>

    <p>O tema certo tem três sinais: alguém já gasta dinheiro ou tempo com aquilo, você tem experiência real no assunto e dá para descrever o resultado em uma frase. "Planilha e rotina para o MEI não atrasar imposto" passa nos três. "Tudo sobre produtividade" não passa em nenhum.</p>

    <p>Antes de escrever, teste a demanda. O artigo sobre <a href="/artigos/como-validar-ideia-de-negocio-com-ia-antes-de-investir">validar uma ideia de negócio com IA</a> traz um roteiro de uma semana que serve para infoproduto: pesquisar perguntas repetidas em grupos, olhar o que já existe na Amazon e na Hotmart, e conversar com dez pessoas do público. Um prompt que ajuda a mapear o terreno:</p>

    <pre><code>Você é um pesquisador de mercado. Liste 15 perguntas que donos de salão de beleza no Brasil fazem sobre controle financeiro, agrupadas por nível (iniciante, intermediário). Para cada grupo, sugira um título de guia de 30 páginas que responda só àquele grupo.</code></pre>

    <p>Quem já tem audiência tem vantagem: uma <a href="/artigos/como-ganhar-dinheiro-com-newsletter-usando-ia">newsletter</a> com 300 leitores fiéis vende mais ebook que um perfil com 10 mil seguidores frios. Se você não tem nenhuma, escolha o tema pensando em onde essas pessoas conversam (grupos de WhatsApp, fóruns, comentários de vídeo), porque é lá que você vai anunciar.</p>

    <h2>Como usar a IA sem o texto ficar genérico</h2>

    <p>A regra de ouro: a IA escreve a partir do que você dá para ela, nunca do zero. Grave um áudio de 15 minutos explicando o assunto como explicaria para um cliente, transcreva e entregue isso como matéria-prima. O <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">guia de prompt engineering</a> detalha por que contexto e exemplos mudam o resultado.</p>

    <h3>Passo 1: sumário a partir da sua experiência</h3>
    <pre><code>Com base na transcrição abaixo, monte o sumário de um guia prático de 30 páginas para donos de salão de beleza. Cada capítulo deve terminar com uma tarefa de 15 minutos. Não invente informações que não estejam na transcrição; marque com [VERIFICAR] o que faltar.

[cole a transcrição]</code></pre>

    <h3>Passo 2: rascunho capítulo a capítulo</h3>
    <pre><code>Escreva o capítulo 2 seguindo o sumário aprovado, em português do Brasil, com frases curtas e um exemplo com números em reais. Use só as informações fornecidas. Onde faltar um dado, escreva [COMPLETAR COM EXEMPLO REAL] para eu preencher.</code></pre>

    <h3>Passo 3: reescrever e revisar</h3>
    <p>Reescreva os trechos marcados com casos seus. Depois peça a revisão de clareza, mas sem deixar a ferramenta "melhorar" a sua voz. Quem quer aprofundar essa etapa encontra um método completo em <a href="/artigos/como-ganhar-dinheiro-revisando-textos-com-ia">revisar e editar textos com ajuda de IA</a>. Para checar fatos e citar fontes, <a href="/artigos/perplexity-notebooklm-ia-de-pesquisa-estudar-mais-rapido">Perplexity e NotebookLM</a> funcionam melhor que o assistente de conversa, porque mostram de onde tiraram cada informação. E se estiver em dúvida sobre qual assistente usar para escrever, a comparação entre <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude e Gemini</a> ajuda a escolher.</p>

    <div class="callout-box callout-bad"><span class="callout-label">Nunca faça</span><p>Publicar o texto gerado sem ler. Dados inventados, exemplos que não existem e frases repetidas viram avaliação de uma estrela e pedido de reembolso.</p></div>

    <h2>Capa, formatação e arquivo final</h2>

    <p>A capa vende antes do texto. Faça no Canva com um título grande, legível em miniatura, e uma única imagem. O guia de <a href="/artigos/canva-capcut-e-ia-artes-e-videos-sem-saber-design">Canva e CapCut para quem não sabe design</a> cobre o básico, e se quiser uma ilustração própria em vez de banco de imagem, o artigo sobre <a href="/artigos/como-vender-artes-e-fotos-criadas-com-ia-generativa">artes criadas com IA generativa</a> explica como gerar e quais regras de uso comercial valem.</p>

    <p>Sobre o arquivo: para a Amazon, exporte em EPUB (o formato que o KDP prefere); para venda direta ou em plataforma brasileira, PDF em tamanho A4 ou A5, com fonte de 11 a 12 pontos e margens generosas, porque muita gente lê no celular. Coloque um sumário clicável, numeração de página e uma página final com seu contato e um convite para o próximo produto.</p>

    <p>Tamanho: 20 a 40 páginas para um guia de entrada. Mais que isso não aumenta o preço percebido e atrasa o lançamento. Se o tema render mais, você lança o volume 2 depois, com o feedback do primeiro.</p>

    <h2>Onde vender e quanto fica no seu bolso</h2>

    <p>Cada canal tem uma lógica de taxa. A tabela abaixo resume o que foi conferido em 27/09/2026 nas páginas oficiais; a Hotmart não abriu para conferência, então consulte a página oficial dela.</p>

    <table>
      <thead>
        <tr><th>Canal</th><th>Como paga</th><th>Faixa de preço e observações (verificado em 27/09/2026)</th></tr>
      </thead>
      <tbody>
        <tr><td>Amazon KDP</td><td>35% ou 70% do preço sem impostos; na opção de 70%, desconta o custo de entrega do arquivo</td><td>Na Amazon.com.br, a opção de 70% vale para preços de R$ 5,99 a R$ 31,99; a de 35% aceita de R$ 1,99 a R$ 400,00</td></tr>
        <tr><td>Kiwify</td><td>Taxa por venda de 8,99% mais R$ 2,49</td><td>Você define o preço; recebe em 2 dias no Pix e boleto, 15 dias no cartão (ou 2, opcional)</td></tr>
        <tr><td>Hotmart</td><td>Taxa por venda</td><td>Consulte a página oficial</td></tr>
        <tr><td>Venda direta (página própria e Pix)</td><td>Sem taxa de plataforma; você cuida da entrega</td><td>Exige uma página de venda e um jeito de enviar o arquivo</td></tr>
      </tbody>
    </table>

    <p>As regras de royalties da Amazon estão na <a href="https://kdp.amazon.com/pt_BR/help/topic/G200644210" rel="noopener noreferrer">página de royalties de eBooks</a> e as faixas de preço na de <a href="https://kdp.amazon.com/pt_BR/help/topic/G200634560" rel="noopener noreferrer">requisitos de preço de lista</a>. A <a href="https://kiwify.com.br/" rel="noopener noreferrer">Kiwify</a> mostra a taxa na própria página inicial. Para venda direta, dá para montar a página em uma tarde seguindo o guia de <a href="/artigos/como-criar-landing-pages-e-sites-simples-com-ia">landing pages com IA</a>.</p>

    <h2>Um exemplo de conta: guia de 35 páginas a R$ 29,90</h2>

    <p>Um cenário, sem promessa de resultado: uma contadora de Recife escreve um guia de 35 páginas, "Financeiro do salão em 30 dias", com base no que responde para clientes há anos. Gasta duas semanas nas noites: transcrição dos áudios, sumário e rascunho com o ChatGPT, reescrita com casos reais, revisão, capa no Canva.</p>

    <p>Na Kiwify, a R$ 29,90, a taxa fica em R$ 2,69 (8,99%) mais R$ 2,49, e sobram R$ 24,72 por venda. Com 30 vendas no primeiro mês, vindas de grupos de WhatsApp de donas de salão e de um post por semana no Instagram, entram cerca de R$ 741,00. Na Amazon, ao preço de R$ 19,90 na opção de 70%, o royalty fica em torno de R$ 13,90 antes do custo de entrega, mas o alcance é outro: quem procura "financeiro salão de beleza" na loja acha o livro sem você anunciar.</p>

    <p>O número que importa não é o do primeiro mês, e sim o que o ebook abre: pedidos de consultoria, alunos para um curso, leitores para a newsletter. Muita gente usa o guia como bônus de um serviço maior, e o artigo sobre <a href="/artigos/como-ganhar-dinheiro-ensinando-ia-para-iniciantes">ensinar IA para iniciantes</a> mostra como um material de R$ 30,00 vira porta de entrada para uma turma.</p>

    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Venda a pré-venda. Anuncie o guia com sumário e capa, cobre metade do preço de quem comprar antes e use as perguntas dessas pessoas para fechar o texto. Se ninguém comprar, você economizou duas semanas.</p></div>

    <h2>Erros comuns de quem publica ebook feito com IA</h2>

    <ul class="checklist">
      <li><strong>Tema largo demais.</strong> "Guia de marketing" não vende; "roteiro de 30 dias para a primeira campanha de uma loja de bairro" vende.</li>
      <li><strong>Texto sem experiência própria.</strong> Se o leitor consegue gerar o mesmo conteúdo em cinco minutos, ele pede reembolso. Cada capítulo precisa de um caso seu.</li>
      <li><strong>Não declarar conteúdo gerado por IA na Amazon</strong> quando a regra exige. A conta pode ser suspensa.</li>
      <li><strong>Dados e citações sem fonte.</strong> A IA inventa estatística com naturalidade. Confira cada número em uma fonte que você possa citar.</li>
      <li><strong>Capa feita às pressas.</strong> Miniatura ilegível na loja mata a venda antes da descrição.</li>
      <li><strong>Lançar sem página de venda nem lista.</strong> Ebook não se vende sozinho; ele precisa de um lugar para ser encontrado e de alguém para anunciar.</li>
      <li><strong>Repetir os erros de iniciante com a ferramenta</strong>, como aceitar a primeira resposta. Os <a href="/artigos/5-erros-comuns-de-quem-esta-comecando-a-usar-ia">5 erros de quem está começando a usar IA</a> valem em dobro aqui.</li>
    </ul>

    <p>Uma variação que funciona bem para quem já domina as ferramentas: em vez do guia em texto, vender os próprios prompts e modelos que você usa, como mostra o artigo sobre <a href="/artigos/como-ganhar-dinheiro-criando-prompts-e-templates-de-ia">criar e vender prompts e templates de IA</a>. O processo de validação e de venda é o mesmo.</p>

    <p>Vender ebooks criados com IA é a forma mais barata de testar se o seu conhecimento tem comprador: um guia curto, uma página de venda e trinta pessoas dispostas a pagar dizem mais que qualquer plano. Se o teste der certo, o passo seguinte costuma ser um produto maior, e o guia sobre <a href="/artigos/como-criar-e-vender-curso-online-usando-ia">criar e vender um curso online com IA</a> mostra como reaproveitar o mesmo material.</p>
  `,
  faq: [
    {
      question: "A Amazon aceita ebook feito com inteligência artificial?",
      answer:
        "Aceita, com uma condição: as diretrizes de conteúdo do KDP pedem que o autor informe, no momento da publicação, se o texto, as imagens ou a tradução foram gerados por IA, mesmo que tenham sido editados depois. Conteúdo escrito por você e apenas revisado ou refinado com IA é considerado assistido e não exige a declaração.",
    },
    {
      question: "Quanto a Amazon paga por ebook vendido?",
      answer:
        "Segundo a página de royalties do KDP, o autor recebe 35% ou 70% do preço sem impostos. Na opção de 70%, a Amazon desconta um custo de entrega proporcional ao tamanho do arquivo. Na loja brasileira, a opção de 70% vale para preços entre R$ 5,99 e R$ 31,99 (verificado em 27/09/2026); acima disso, o royalty cai para 35%.",
    },
    {
      question: "Qual o melhor preço para um ebook no Brasil?",
      answer:
        "Para um guia de entrada, de 20 a 40 páginas, a faixa que costuma converter fica abaixo de R$ 40,00. Na Amazon, ficar dentro do limite de R$ 31,99 garante a opção de 70%. Em plataforma própria ou na Kiwify, lembre que a taxa fixa por venda pesa mais em preços baixos, então R$ 19,90 a R$ 39,90 tende a equilibrar volume e margem.",
    },
    {
      question: "Ebook criado com IA precisa de registro ou ISBN?",
      answer:
        "Para vender na Amazon KDP ou em plataformas de infoproduto, o ISBN não é obrigatório; a Amazon atribui um código próprio ao eBook. O ISBN passa a fazer sentido para livro impresso ou distribuição em livrarias. Registro de direito autoral é opcional no Brasil, e o texto reescrito por você é o que sustenta sua autoria.",
    },
    {
      question: "Quanto tempo leva para criar um ebook com IA?",
      answer:
        "Para um guia de 30 páginas sobre um assunto que você domina, o tempo típico fica entre uma e três semanas de trabalho nas horas vagas: um ou dois dias para validar o tema e montar o sumário, uma semana para rascunhar e reescrever capítulo a capítulo, e mais alguns dias para revisão, capa, formatação e página de venda.",
    },
  ],
};
