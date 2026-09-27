import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "como-criar-landing-pages-e-sites-simples-com-ia",
  title: "Landing page com IA: como criar sites simples sem programar",
  seoTitle: "Landing page com IA: crie sites sem programar",
  excerpt:
    "Landing page com IA: monte uma página de vendas ou captura em uma tarde, sem programar, com ferramenta gratuita, prompts prontos e preços verificados em R$.",
  metaDescription:
    "Landing page com IA: como criar sites simples sem programar, quais ferramentas usar (preços verificados), prompts prontos e checklist antes de publicar.",
  category: "ferramentas",
  date: "2026-09-19",
  updated: "2026-09-27",
  readTime: 8,
  imageQuery: "website builder landing page",
  seed: 51,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Uma landing page com IA sai em uma tarde: você descreve o negócio, a ferramenta gera estrutura, texto e layout, e você revisa antes de publicar.",
    "Há opção gratuita (Google Sites, plano Free do Framer) e opção paga a partir de R$ 10,99 por mês na Hostinger, preço promocional verificado em 27/09/2026.",
    "O que faz a página vender não é o visual gerado, e sim um objetivo único, uma chamada para ação clara e um texto que soa como o seu negócio.",
  ],
  sources: [
    { label: "Hostinger: criador de sites com IA (preços em R$)", url: "https://www.hostinger.com/br/criador-de-sites" },
    { label: "Framer: planos e preços", url: "https://www.framer.com/pricing/" },
    { label: "Google: como criar um site no Google Sites", url: "https://support.google.com/sites/answer/6372878" },
    { label: "Google Search Central: experiência na página", url: "https://developers.google.com/search/docs/appearance/page-experience" },
    { label: "web.dev: Core Web Vitals", url: "https://web.dev/articles/vitals" },
  ],
  content: `
    <p>Criar uma landing page com IA é o jeito mais rápido de ter uma página própria na internet sem contratar ninguém e sem escrever código. Você descreve o negócio em um parágrafo, a ferramenta monta estrutura, texto e layout, e o seu trabalho passa a ser revisar, trocar as fotos e publicar. Dá para fazer em uma tarde, com plano gratuito.</p>

    <p>Este guia mostra o fluxo completo: qual ferramenta usar em cada situação (com preços verificados), o que escrever no prompt para a IA não gerar uma página genérica, o que uma landing page precisa ter para converter, um exemplo brasileiro com as contas e o checklist de teste antes de divulgar. No fim, os erros que fazem uma página bonita não vender nada.</p>

    <h2>O que é uma landing page e quando ela basta?</h2>

    <p>Landing page é uma página única com um objetivo só: vender um produto, captar contato (nome e WhatsApp) ou apresentar um serviço com botão de agendamento. Site simples é a versão com três ou quatro páginas (início, sobre, serviços, contato). Para a maioria dos pequenos negócios, a landing page resolve, e o site só faz falta quando há vários serviços com públicos diferentes.</p>

    <p>A regra prática: se você consegue dizer em uma frase o que quer que o visitante faça ("agendar consulta", "pedir orçamento", "comprar o ebook"), é landing page. Se a resposta começa com "depende", você ainda precisa decidir o objetivo antes de abrir qualquer ferramenta. O artigo sobre <a href="/artigos/como-validar-ideia-de-negocio-com-ia-antes-de-investir">validar uma ideia de negócio com IA</a> ajuda a chegar nessa frase.</p>

    <p>Uma loja com dezenas de produtos, carrinho e pagamento é outro bicho. Para esse caso, o guia de <a href="/artigos/como-montar-uma-loja-virtual-em-um-fim-de-semana-usando-ia">montar uma loja virtual em um fim de semana</a> segue um caminho diferente deste.</p>

    <h2>Qual ferramenta usar para criar landing page com IA</h2>

    <p>Há dezenas de construtores com IA e a diferença entre eles é menor do que parece. O que muda é preço, domínio próprio e o quanto você consegue editar depois. Três opções cobrem quase todos os casos:</p>

    <table>
      <thead>
        <tr><th>Ferramenta</th><th>Para quem</th><th>Preço (verificado em 27/09/2026)</th></tr>
      </thead>
      <tbody>
        <tr><td>Google Sites</td><td>Página institucional simples, sem venda, com conta Google</td><td>Gratuito; a <a href="https://support.google.com/sites/answer/6372878" rel="noopener noreferrer">ajuda do Google</a> mostra o passo a passo de criar e publicar</td></tr>
        <tr><td>Framer</td><td>Landing page com visual moderno, geração por IA e domínio framer.app no gratuito</td><td>Plano Free (US$ 0), Basic US$ 10/mês e Pro US$ 30/mês, segundo a <a href="https://www.framer.com/pricing/" rel="noopener noreferrer">página de preços do Framer</a></td></tr>
        <tr><td>Hostinger (criador com IA)</td><td>Quem quer domínio próprio, e-mail e hospedagem no mesmo lugar, cobrando em reais</td><td>A partir de R$ 10,99/mês no plano Premium, preço promocional para contrato de 48 meses, segundo a <a href="https://www.hostinger.com/br/criador-de-sites" rel="noopener noreferrer">página do criador de sites da Hostinger</a>; a renovação é mais cara</td></tr>
      </tbody>
    </table>

    <p>Antes de assinar qualquer uma, passe pelo <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist de segurança para escolher ferramenta de IA</a>: quem é dono do conteúdo, como cancelar e o que acontece com o domínio se você sair. Preço promocional de 48 meses é barato no mês, mas você paga tudo de uma vez.</p>

    <h2>Passo a passo: da descrição do negócio à página publicada</h2>

    <h3>1. Escreva o briefing antes de abrir a ferramenta</h3>

    <p>A IA gera página genérica quando recebe pedido genérico. Escreva em um bloco de notas: o que você vende, para quem, qual a ação que o visitante deve fazer, três motivos para escolher você e uma objeção comum do cliente. Isso leva 15 minutos e economiza uma hora de retrabalho. A lógica é a mesma de qualquer <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">prompt que funciona</a>: contexto, tarefa e formato.</p>

    <h3>2. Gere a estrutura e o texto</h3>

    <p>Cole o briefing no gerador da ferramenta ou, se preferir controlar melhor, gere o texto primeiro no ChatGPT, Claude ou Gemini e depois monte a página. Este prompt produz as seções na ordem certa:</p>

    <pre><code>Você é redator de landing pages. Com base no briefing abaixo, escreva o texto de uma landing page com estas seções, nesta ordem: título (até 10 palavras, com o benefício principal), subtítulo (uma frase), 3 blocos de benefício (título + 2 linhas cada), como funciona em 3 passos, 2 depoimentos com marcação [inserir depoimento real], perguntas frequentes (4), chamada para ação final. Português do Brasil, frases curtas, sem "incrível", "poderoso" ou exclamação. Não invente número nem prazo.

Briefing:
[cole aqui]</code></pre>

    <h3>3. Troque o que é genérico pelo que é seu</h3>

    <p>Substitua as fotos de banco de imagem por fotos reais do produto, do espaço ou de você. Troque os depoimentos marcados por depoimentos verdadeiros (peça a dois clientes hoje). Se ainda não tem logo, o guia de <a href="/artigos/ia-para-design-de-logotipo-marca-simples-profissional">IA para design de logotipo</a> resolve em uma hora, e o de <a href="/artigos/canva-capcut-e-ia-artes-e-videos-sem-saber-design">Canva, CapCut e IA</a> mostra como ajustar imagem sem saber design.</p>

    <h3>4. Ligue o botão a algo que funciona</h3>

    <p>O botão principal precisa abrir o WhatsApp com mensagem pré-preenchida, um formulário que chega no seu e-mail ou a página de pagamento. Teste você mesmo, do celular, antes de publicar. Se o volume de mensagens crescer, dá para plugar um <a href="/artigos/como-criar-chatbot-de-atendimento-para-seu-site-sem-programar">chatbot de atendimento no site</a> para responder as perguntas repetidas.</p>

    <h2>O que uma landing page precisa ter para converter</h2>

    <ul class="checklist">
      <li>Um objetivo só. Página que vende, capta contato e apresenta a empresa ao mesmo tempo não faz nenhuma das três.</li>
      <li>Título com o benefício, não com o nome do negócio. "Consulta nutricional online com plano em 48 horas" vende mais que "Clínica Silva".</li>
      <li>Chamada para ação visível no topo e repetida a cada duas seções.</li>
      <li>Prova real: depoimento com nome, foto do espaço, número de clientes atendidos (só se for verdadeiro).</li>
      <li>Preço ou faixa de preço, ou o motivo de não ter (orçamento sob medida).</li>
      <li>Contato fácil: WhatsApp, endereço se houver ponto físico, CNPJ no rodapé.</li>
      <li>Carrega rápido no celular e não pula o layout enquanto abre.</li>
    </ul>

    <p>Esse último item tem peso no Google. A <a href="https://developers.google.com/search/docs/appearance/page-experience" rel="noopener noreferrer">documentação do Google Search Central</a> diz que os sistemas de ranqueamento recompensam páginas com boa experiência, e a referência técnica de <a href="https://web.dev/articles/vitals" rel="noopener noreferrer">Core Web Vitals do web.dev</a> coloca as metas: conteúdo principal em até 2,5 segundos e deslocamento de layout de no máximo 0,1. Na prática, isso significa fotos comprimidas e sem vídeo em fundo automático. Teste a página no PageSpeed Insights do Google antes de divulgar.</p>

    <h2>Exemplo brasileiro: a página de uma nutricionista em uma tarde</h2>

    <p>Considere uma nutricionista em Belo Horizonte que atende online e quer parar de depender só do Instagram. Objetivo da página: agendar a primeira consulta pelo WhatsApp. Ela escreve o briefing em 15 minutos, gera o texto com o prompt acima em 10 minutos e monta a página no plano Free do Framer em duas horas, com domínio gratuito da ferramenta. Custo: R$ 0. Se preferir o domínio próprio e e-mail profissional, o plano Premium da Hostinger sai a R$ 10,99 por mês na promoção de 48 meses (verificado em 27/09/2026), ou seja, cerca de R$ 527 pagos de uma vez pelo período inteiro.</p>

    <p>A conta que importa vem depois. Se ela publica o link na bio do Instagram, recebe 200 visitas por mês e 5% viram conversa no WhatsApp, são 10 contatos. Se fecha 4 consultas a R$ 180, são R$ 720 por mês vindos de uma página que custou uma tarde. Os percentuais são hipotéticos e variam com o público e com o tráfego; a estrutura da conta (visitas, taxa de contato, taxa de fechamento, ticket) é o que vale acompanhar. O guia de <a href="/artigos/ia-para-redes-sociais-criar-agendar-analisar-posts">IA para redes sociais</a> mostra como alimentar essa página com posts constantes, e o de <a href="/artigos/como-usar-ia-para-vender-mais-no-seu-negocio-local">vender mais no negócio local com IA</a> cobre o lado do atendimento.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Depoimento inventado pela IA é o erro que mais custa caro. Além de ser propaganda enganosa, o cliente percebe. Se não tem depoimento ainda, tire a seção e coloque de volta quando tiver dois reais.</p></div>

    <h2>Erros comuns em landing pages feitas com IA</h2>

    <ul>
      <li><strong>Publicar o texto do jeito que saiu.</strong> A IA escreve para "um negócio como o seu", não para o seu. Leia em voz alta e troque o que você não diria para um cliente.</li>
      <li><strong>Deixar os placeholders.</strong> "[inserir depoimento]" e "Lorem ipsum" no ar acontecem mais do que parece. Revise seção por seção.</li>
      <li><strong>Três botões diferentes.</strong> "Saiba mais", "Fale conosco" e "Compre" na mesma página dividem a atenção. Um botão, uma ação.</li>
      <li><strong>Imagem gerada por IA fingindo ser foto real.</strong> Do produto e do espaço, foto verdadeira. Imagem gerada só para ilustração, e sem enganar.</li>
      <li><strong>Não testar no celular.</strong> A maior parte dos cliques vem do Instagram e do WhatsApp, ou seja, do celular. Abra no seu, no 4G, antes de divulgar.</li>
      <li><strong>Assinar 48 meses no primeiro dia.</strong> Comece no gratuito, valide que a página traz contato e só depois pague por domínio próprio.</li>
    </ul>

    <h2>Quando não usar IA para fazer a página</h2>

    <p>Se a página vai receber pagamento com dados de cartão dentro dela, use uma plataforma de pagamento estabelecida em vez de montar formulário próprio: o construtor com IA não é o lugar para isso. Se você vende para grandes empresas e a primeira impressão define contrato de seis dígitos, vale pagar um designer para a versão final, usando a IA só no rascunho. E se o negócio muda de cara toda semana, um perfil bem cuidado no Instagram e um link de WhatsApp resolvem melhor até o modelo estabilizar.</p>

    <p>Para quem vende produto digital, a landing page é a porta de entrada, e o guia de <a href="/artigos/como-vender-ebooks-e-guias-criados-com-ia">vender ebooks e guias criados com IA</a> mostra o restante do caminho. Quem quer testar uma ideia de aplicativo antes da página encontra o método em <a href="/artigos/ia-para-design-de-produto-prototipar-ideia-rapidamente">prototipar uma ideia rapidamente com IA</a>. E quando a página estiver trazendo contato todo dia, o próximo passo é automatizar o que vem depois do clique, como mostra o guia de <a href="/artigos/notion-zapier-e-ia-automatize-seu-negocio-sem-programar">Notion, Zapier e IA</a>.</p>

    <p>A mesma lógica de <a href="/artigos/como-criar-apresentacoes-e-slides-profissionais-com-ia">criar apresentações com IA</a> vale aqui: o ganho está em ter a primeira versão pronta em minutos, e o seu tempo vai para o que só você sabe fazer, que é ajustar a mensagem para o cliente que você conhece. Monte a sua página neste fim de semana e, quando ela estiver no ar, a categoria <a href="/ferramentas">Ferramentas</a> tem os próximos passos para ela trabalhar por você.</p>
  `,
  faq: [
    {
      question: "Dá para criar uma landing page com IA de graça?",
      answer:
        "Sim. O Google Sites é gratuito com conta Google e serve para página institucional simples. O Framer tem plano Free com geração por IA e domínio da própria ferramenta. Para ter domínio próprio (.com.br) e e-mail profissional, o caminho mais comum é um plano pago, como o da Hostinger a partir de R$ 10,99 por mês na promoção de 48 meses, verificado em 27/09/2026.",
    },
    {
      question: "Quanto tempo leva para fazer um site simples com IA?",
      answer:
        "Uma tarde, se você chega com o briefing pronto. Contando 15 minutos de briefing, 10 minutos para gerar o texto, duas horas para montar e revisar a página e mais meia hora de teste no celular, dá para publicar em cerca de três horas. Um site com três ou quatro páginas leva um fim de semana.",
    },
    {
      question: "Landing page feita com IA ranqueia no Google?",
      answer:
        "Pode ranquear, mas não por ter sido feita com IA. O Google avalia se a página responde bem à busca e se a experiência é boa: carregar rápido, funcionar no celular, sem layout pulando. Texto genérico gerado sem revisão tende a ficar parecido com milhares de outras páginas, então a revisão com a sua voz e os seus dados é o que faz diferença.",
    },
    {
      question: "Wix, Hostinger ou Framer: qual é melhor para landing page?",
      answer:
        "Depende do que você precisa. Framer tem visual moderno e plano gratuito, bom para quem quer testar sem gastar. Hostinger cobra em reais, inclui domínio e e-mail e é prática para quem quer tudo no mesmo lugar. Wix é conhecido e tem plano gratuito, mas os preços variam por região e vale consultar a página oficial antes de decidir.",
    },
    {
      question: "Preciso de CNPJ para publicar uma landing page?",
      answer:
        "Não, para publicar a página não. Você precisa de CNPJ para emitir nota fiscal e, dependendo da atividade, para anunciar e vender de forma regular. Se já é MEI, coloque o CNPJ e o endereço no rodapé: isso aumenta a confiança de quem chega pela primeira vez e é exigido em vendas ao consumidor.",
    },
  ],
};
