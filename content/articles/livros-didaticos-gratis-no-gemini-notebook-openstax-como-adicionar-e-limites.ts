import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "livros-didaticos-gratis-no-gemini-notebook-openstax-como-adicionar-e-limites",
  title: "Livros didáticos grátis no Gemini Notebook: como usar e limites",
  seoTitle: "Livros didáticos grátis no Gemini Notebook: como usar",
  excerpt:
    "O Gemini Notebook ganhou centenas de livros didáticos gratuitos como fonte. Veja onde fica o catálogo, como estudar com citações e que limites conferir.",
  metaDescription:
    "Gemini Notebook traz livros didáticos gratuitos da OpenStax e de outros provedores. Veja como adicionar, gerar quiz e flashcards e o que o Google omitiu.",
  category: "ferramentas",
  date: "2026-11-02",
  readTime: 7,
  imageQuery: "student studying textbook laptop library",
  coverImage: {
    url: "/images/covers/livros-didaticos-gratis-no-gemini-notebook-openstax-como-adicionar-e-limites.webp",
    width: 1280,
    height: 695,
    credit: "Pexels / Pixabay",
    creditUrl: "https://pixabay.com/photos/books-stack-white-stack-of-books-1845614/",
  },
  seed: 1093,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Em 29/10/2026 o Google anunciou centenas de livros didáticos gratuitos dentro do Gemini Notebook, de provedores como OpenStax, Open Textbook Library e S Chand Publishing.",
    "O caminho é abrir um caderno, escolher Adicionar fontes e depois Textbooks; as respostas trazem citações com link para a fonte original.",
    "O post oficial cita provedores dos EUA e da Índia e não informa países com acesso nem idioma do catálogo, então vale conferir na sua conta antes de montar um plano de estudo.",
  ],
  content: `
    <p>Os livros didáticos gratuitos do Gemini Notebook são um catálogo de obras abertas que você adiciona a um caderno como fonte e consulta por conversa, com citações. O Google anunciou a novidade em 29/10/2026, citando OpenStax, Open Textbook Library e S Chand Publishing como provedores, sem custo para o estudante.</p>

    <p>Para quem estuda, o ganho é prático: em vez de colar capítulos soltos ou confiar na memória do modelo, você pede explicações presas a um livro específico. Este texto mostra o caminho de clique, um plano de estudo de uma semana, prompts prontos e os pontos que o anúncio deixou em aberto. Tudo abaixo vem do <a href="https://blog.google/innovation-and-ai/products/gemini-notebook/new-access-textbooks/" target="_blank" rel="noopener noreferrer">post oficial do Google</a>, aberto em 02/11/2026.</p>

    <h2>O que mudou no Gemini Notebook</h2>

    <p>O Gemini Notebook é o nome atual do antigo NotebookLM, e a troca está explicada em <a href="/artigos/gemini-notebook-antigo-notebooklm-o-que-mudou">Gemini Notebook, o antigo NotebookLM</a>. A ideia do produto é simples: você reúne fontes em um caderno e a IA responde com base nelas. Até agora, quem queria estudar por um livro precisava ter o arquivo ou usar um e-book comprado no Google Play Livros, caminho que o post descreve como o recurso anterior, chamado Expert Intelligence.</p>

    <p>A novidade amplia esse recurso com livros gratuitos. Segundo o Google, os estudantes podem adicionar centenas de obras de provedores dos Estados Unidos e da Índia direto no caderno, sem cobrança. As respostas são fundamentadas no livro escolhido, trazem citações no próprio texto e cada citação leva ao trecho original. A partir do livro, também é possível gerar guias de estudo, questionários de prática e flashcards, entre outros materiais.</p>

    <p>Quem já usa cadernos pela conversa do Gemini, como mostra o texto sobre <a href="/artigos/gemini-notebook-no-app-gemini-como-criar-e-consultar-cadernos-por-conversa">cadernos dentro do app Gemini</a>, continua com a mesma lógica: a fonte vive no caderno, e o chat consulta o que está nele.</p>

    <h2>Quem fornece os livros</h2>

    <p>Os três provedores citados pelo Google têm perfis diferentes. A <a href="https://openstax.org/about" target="_blank" rel="noopener noreferrer">OpenStax</a> é uma iniciativa educacional sem fins lucrativos da Rice University que publica livros revisados por pares, escritos por professores de faculdades comunitárias, universidades públicas e centros de pesquisa. Segundo a própria página, todos os títulos podem ser lidos online ou baixados em PDF sem custo.</p>

    <p>Open Textbook Library e S Chand Publishing completam a lista do post. O Google não detalha quantos títulos cada um entrega nem publica a lista completa, então não existe número exato para citar. Trate qualquer lista de matérias como exemplo até abrir a tela de Textbooks na sua conta.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>O post do Google fala em provedores dos EUA e da Índia. Ele não diz em quais países o recurso está liberado nem em que idiomas os livros estão. Confira na sua conta antes de contar com isso para uma prova.</p></div>

    <h2>Como adicionar um livro ao caderno</h2>

    <p>O caminho descrito pelo Google tem três passos. Abra um caderno (ou crie um novo), selecione Adicionar fontes e escolha Textbooks para navegar pelo catálogo. Depois de adicionar o livro, ele passa a ser uma fonte como qualquer outra do caderno.</p>

    <ol>
      <li>Abra o Gemini Notebook e crie um caderno com o nome da matéria, por exemplo "Introdução à Economia".</li>
      <li>Clique em Adicionar fontes e depois em Textbooks.</li>
      <li>Procure o livro pelo tema, escolha o título e adicione ao caderno.</li>
      <li>Faça uma pergunta de teste e abra uma das citações para ver se o trecho confirma a resposta.</li>
    </ol>

    <p>Se a opção Textbooks não aparecer, o mais provável é que o recurso ainda não tenha chegado à sua conta ou ao seu país, mas o Google não detalha o cronograma, e isso é uma hipótese, não uma informação oficial. Uma saída é manter o caderno com os seus próprios materiais, como PDFs da disciplina, e <a href="/artigos/como-usar-ia-para-resumir-pdfs-artigos-e-textos-longos">resumir PDFs e textos longos</a> com cuidado.</p>

    <h2>Plano de estudo de uma semana com um livro</h2>

    <p>Um livro inteiro como fonte pede método, senão vira só mais um resumo. Veja um exemplo para quem tem prova em uma semana, com 45 minutos por dia (números ilustrativos, ajuste à sua rotina):</p>

    <table>
      <thead>
        <tr><th>Dia</th><th>Tarefa no caderno</th><th>Tempo</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>Pedir o mapa do capítulo e listar os conceitos-chave</td><td>45 min</td></tr>
        <tr><td>2</td><td>Ler o trecho original de 2 conceitos e explicar com suas palavras</td><td>45 min</td></tr>
        <tr><td>3</td><td>Gerar flashcards e revisar só os que você errar</td><td>45 min</td></tr>
        <tr><td>4</td><td>Responder um questionário de prática sem consultar</td><td>45 min</td></tr>
        <tr><td>5</td><td>Anotar os erros e pedir explicação com citação</td><td>45 min</td></tr>
        <tr><td>6</td><td>Simulado curto, cronometrado</td><td>45 min</td></tr>
        <tr><td>7</td><td>Revisão final e descanso</td><td>30 min</td></tr>
      </tbody>
    </table>

    <p>A lógica é a mesma de <a href="/artigos/testar-se-em-vez-de-reler-pratica-de-recuperacao-com-ia-para-estudar-e-lembrar">testar-se em vez de reler</a>: o questionário só ajuda se você responde antes de ver a resposta. E o <a href="/artigos/caderno-de-erros-com-ia-estudar-pelo-que-voce-errou-e-nao-repetir-o-erro">caderno de erros</a> guarda o que você errou para a revisão do dia 5.</p>

    <h2>Prompts para usar com o livro</h2>

    <p>Peça sempre ancoragem no livro e a página ou seção de onde vem a resposta. Três modelos:</p>

    <pre><code>Com base apenas no livro adicionado, explique o conceito de custo de oportunidade em 5 frases, com um exemplo do dia a dia, e indique a seção de onde tirou cada ideia.</code></pre>

    <pre><code>Crie 8 perguntas de múltipla escolha sobre o capítulo 3, com 4 alternativas cada. Mostre o gabarito só depois que eu responder, e cite o trecho que justifica cada resposta.</code></pre>

    <pre><code>Estou confuso entre oferta e demanda. Faça 3 perguntas para descobrir o que eu já sei, uma por vez, e só depois explique o que faltar usando o livro.</code></pre>

    <p>O terceiro prompt segue a ideia da <a href="/artigos/tecnica-feynman-com-ia-explicar-com-suas-palavras-e-achar-as-falhas-antes-da-prova">técnica Feynman com IA</a>: a IA pergunta, você explica, e só então ela corrige.</p>

    <h2>Limites e cuidados</h2>

    <p>Citação com link ajuda, mas não elimina o erro. A IA pode resumir mal um trecho, juntar duas ideias de seções diferentes ou responder além do que o livro diz. O hábito certo é abrir a citação de toda resposta que vai cair na prova, como ensina o texto sobre <a href="/artigos/videoaulas-do-youtube-com-gemini-resumo-perguntas-e-como-checar-o-que-a-ia-disse">como checar o que a IA disse</a> em videoaulas, e o guia de <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a> serve de lista de verificação.</p>

    <ul class="checklist">
      <li>Abra pelo menos uma citação por pergunta importante e compare com a resposta.</li>
      <li>Confira se o livro cobre o conteúdo da sua disciplina: edição, país e currículo podem diferir.</li>
      <li>Não use só a IA para tabelas, fórmulas e datas; confirme no livro.</li>
      <li>Verifique idioma e nível do livro antes de montar o plano.</li>
      <li>Mantenha o caderno só com material de estudo, sem dados pessoais.</li>
    </ul>

    <h2>Livro gratuito não significa qualquer uso</h2>

    <p>Os livros estão disponíveis sem cobrança dentro do Gemini Notebook, mas o Google não detalha, nesse post, as licenças de cada título. A OpenStax descreve seus livros como abertos, e a página consultada não nomeia a licença específica. Para estudo pessoal, o uso no caderno é o caso previsto. Se você pretende revender resumos ou apostilas, confirme a licença de cada livro no site do provedor antes, e leia o que o texto sobre <a href="/artigos/vender-planilhas-prontas-feitas-com-ia-nichos-preco-protecao-e-direito-autoral">direito autoral em produtos digitais</a> diz sobre atribuição.</p>

    <p>Quanto à privacidade, o que você pergunta e gera fica na sua conta Google. Revise as configurações como em <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a> antes de misturar anotações pessoais ao caderno.</p>

    <h2>Quando usar o livro no caderno e quando não</h2>

    <p>Vale usar quando a matéria é introdutória e tem livro aberto equivalente: economia, biologia, estatística, computação, negócios. Vale menos quando o seu curso adota apostila própria, quando a prova cobra a visão específica do professor ou quando o idioma do livro atrapalha. Nesses casos, o caderno com seus próprios PDFs rende mais, e a pesquisa de apoio pode vir do <a href="/artigos/gemini-deep-research-como-usar-limites-e-planos">Deep Research do Gemini</a>.</p>

    <p>Quem estuda para concurso ou vestibular encontra uma rotina mais completa em <a href="/artigos/como-usar-ia-para-estudar-para-provas-e-concursos">como usar IA para estudar para provas e concursos</a>, e quem precisa de limites de uso mais altos pode comparar planos em <a href="/artigos/google-ai-plus-pro-ou-ultra-qual-plano-do-gemini-escolher">qual plano do Gemini escolher</a>. Se o seu objetivo é montar um fluxo de leitura com citação e conferência, a lógica de <a href="/artigos/ia-com-busca-na-web-como-funciona-citacoes-e-quando-desconfiar">IA com busca, citações e quando desconfiar</a> vale aqui também.</p>

    <h2>Próximo passo</h2>

    <p>Escolha uma matéria da semana, abra o catálogo de Textbooks e faça o teste de 20 minutos: um mapa do capítulo, três perguntas e a conferência de uma citação. Se o resultado ajudar, monte o plano de sete dias da tabela. Para acompanhar outras atualizações de ferramentas, volte à <a href="/categoria/ferramentas">categoria de ferramentas</a>.</p>
  `,
  faq: [
    {
      question: "Os livros didáticos do Gemini Notebook são grátis?",
      answer:
        "Sim. O Google informa que os estudantes podem adicionar centenas de livros de provedores como OpenStax, Open Textbook Library e S Chand Publishing no Gemini Notebook sem cobrança. O post não menciona plano pago exigido, mas o acesso pode variar por conta e país.",
    },
    {
      question: "Como adicionar um livro didático ao Gemini Notebook?",
      answer:
        "Abra um caderno, selecione Adicionar fontes e escolha Textbooks para ver o catálogo. Depois de adicionar o livro, faça perguntas no chat e abra as citações para conferir o trecho original que sustenta cada resposta.",
    },
    {
      question: "O Gemini Notebook com livros funciona no Brasil?",
      answer:
        "O Google cita provedores dos Estados Unidos e da Índia e não informa os países com acesso nem o idioma dos livros. Por isso, a forma segura é abrir Adicionar fontes na sua conta e ver se a opção Textbooks aparece.",
    },
    {
      question: "O que dá para gerar a partir de um livro no caderno?",
      answer:
        "O Google diz que o conteúdo pode virar guias de estudo, questionários de prática e flashcards, entre outros materiais. Em todos os casos, confira as respostas nas citações do livro antes de estudar por elas.",
    },
    {
      question: "A IA pode errar mesmo citando o livro?",
      answer:
        "Pode. A citação ajuda a conferir, mas a IA pode resumir mal ou extrapolar. Abra o trecho citado nas perguntas importantes e confirme fórmulas, datas e definições direto no livro.",
    },
  ],
};
