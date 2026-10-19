import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "tcc-com-ia-o-que-a-faculdade-aceita-abnt-citacoes-e-plagio",
  title: "TCC com IA: o que a faculdade aceita, ABNT, citações e plágio",
  seoTitle: "TCC com IA: o que a faculdade aceita e como evitar plágio",
  excerpt:
    "TCC com IA é permitido? Veja o que costuma ser aceito, como declarar o uso, checar citações ABNT, evitar plágio e quais prompts ajudam sem fazer o trabalho por você.",
  metaDescription:
    "Usar IA no TCC pode ou não, conforme a regra da sua faculdade. Veja o que perguntar ao orientador, como declarar o uso, checar fontes e evitar plágio na ABNT.",
  category: "iniciantes",
  articleSubcategory: "estudos",
  date: "2026-10-19",
  readTime: 8,
  imageQuery: "student writing thesis laptop library",
  seed: 464,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Usar IA no TCC não tem uma regra única no Brasil: quem decide é a sua instituição e o seu orientador, então a primeira tarefa é pedir a política por escrito.",
    "A IA ajuda bem em tarefas de apoio, como organizar o roteiro, explicar um conceito e revisar clareza, mas não deve escrever o texto que vai com o seu nome nem inventar referências.",
    "Toda citação e toda referência precisam ser conferidas na fonte original, porque assistentes de IA podem criar autores, datas e páginas que não existem.",
  ],
  content: `
    <p>Usar IA no TCC é aceito em algumas faculdades, limitado em outras e proibido em algumas, e a regra que vale é a da sua instituição e do seu orientador, não a de um blog. Na prática, o uso mais seguro é como apoio de estudo e revisão, com declaração do que foi usado, sem deixar a ferramenta escrever o texto que leva o seu nome.</p>

    <p>Este guia mostra o que perguntar antes de abrir o ChatGPT ou o Gemini, quais tarefas costumam ser toleradas, como cuidar das citações e das referências no padrão ABNT, o que é plágio quando a IA entra na história e três prompts para usar sem se encrencar. Se você ainda está montando a rotina de estudo, vale ler antes <a href="/artigos/como-usar-ia-para-estudar-para-provas-e-concursos">como usar IA para estudar para provas e concursos</a>.</p>

    <h2>A faculdade permite IA no TCC?</h2>
    <p>Não existe uma lei brasileira que diga sim ou não para o TCC. O que existe são regras internas de cada instituição, que mudam rápido e variam até entre cursos da mesma universidade. Algumas pedem que o aluno declare qualquer ferramenta usada, outras aceitam só a revisão de texto, e outras proíbem a geração de trechos. Por isso a primeira ação é simples: procure o regulamento de trabalhos de conclusão, o manual do curso ou a política de integridade acadêmica e, se não achar nada, pergunte ao orientador por e-mail.</p>
    <p>O guia da <a href="https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research" target="_blank" rel="noopener noreferrer">UNESCO sobre IA generativa na educação e na pesquisa</a> (publicado em 2023 e atualizado em janeiro de 2026) afirma que escolas e universidades ainda estão despreparadas para validar essas ferramentas e defende uma abordagem centrada no ser humano. Traduzindo: é normal a sua faculdade estar em dúvida, e é por isso que a resposta por escrito protege você.</p>
    <div class="callout-box callout-warn"><span class="callout-label">Antes de começar</span><p>Mande ao orientador uma mensagem curta: "Posso usar IA para organizar a pesquisa e revisar a clareza do texto, declarando a ferramenta no trabalho?". Guarde a resposta. Se a regra mudar depois, você tem o registro.</p></div>

    <h2>O que costuma ser aceito e o que costuma ser proibido</h2>
    <p>Não há lista oficial, mas o padrão que aparece nas políticas acadêmicas é parecido: quanto mais a IA substitui o seu raciocínio, maior o risco. A tabela abaixo é uma referência de bom senso, não uma autorização. Confirme com a sua instituição.</p>
    <table>
      <thead><tr><th>Uso</th><th>Risco</th><th>Observação</th></tr></thead>
      <tbody>
        <tr><td>Explicar um conceito que você não entendeu</td><td>Baixo</td><td>Confira em livro ou artigo antes de usar a ideia</td></tr>
        <tr><td>Montar um cronograma de escrita</td><td>Baixo</td><td>Você ajusta os prazos com o orientador</td></tr>
        <tr><td>Sugerir a estrutura de capítulos</td><td>Médio</td><td>Discuta com o orientador, a estrutura é decisão sua</td></tr>
        <tr><td>Revisar gramática e clareza de um texto seu</td><td>Médio</td><td>Declare o uso se a instituição pedir</td></tr>
        <tr><td>Resumir artigos que você já leu</td><td>Médio</td><td>Leia o original, o resumo pode omitir ressalvas</td></tr>
        <tr><td>Gerar parágrafos ou capítulos inteiros</td><td>Alto</td><td>Pode ser tratado como autoria indevida</td></tr>
        <tr><td>Gerar referências e citações</td><td>Muito alto</td><td>A IA pode inventar fontes que não existem</td></tr>
      </tbody>
    </table>
    <p>Repare que o risco sobe quando a ferramenta passa de apoio para autora. A banca e o orientador avaliam o seu raciocínio, e isso não se terceiriza.</p>

    <h2>Como declarar o uso de IA no trabalho</h2>
    <p>Quando a instituição permite o uso com declaração, a forma mais honesta é um parágrafo curto na metodologia ou em uma nota no início, dizendo qual ferramenta foi usada, em que etapa e para quê. Não há um modelo oficial único. Muitas universidades já publicaram o seu próprio formato, então procure o da sua antes de inventar um.</p>
    <p>Um exemplo de redação seria: "Para este trabalho, utilizou-se o assistente Gemini em outubro de 2026 para explicar conceitos de estatística e para revisar a clareza de parágrafos já escritos pela autora. Todo o conteúdo foi conferido e reescrito pela autora, e as fontes citadas foram consultadas nos originais." Guarde também o histórico das conversas, porque o orientador pode pedir para ver como você usou a ferramenta.</p>
    <ul class="checklist">
      <li>Nome da ferramenta e mês de uso.</li>
      <li>Etapa do trabalho em que entrou: pesquisa, estrutura, revisão.</li>
      <li>O que a IA não fez: texto final, dados, referências.</li>
      <li>Confirmação de que as fontes foram lidas nos originais.</li>
    </ul>

    <h2>Citações e referências ABNT: o ponto em que a IA mais erra</h2>
    <p>O erro mais grave de quem usa IA em trabalho acadêmico é aceitar uma referência que parece perfeita e não existe. Esses modelos geram texto plausível, e um sobrenome de autor, um ano e um título bem formatado cabem direitinho nessa lógica, mesmo sem correspondência real. O artigo sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a> explica por que isso acontece e como checar.</p>
    <p>A regra de ouro para o TCC é inverter a ordem: primeiro você acha a fonte em uma base confiável (biblioteca da faculdade, Google Acadêmico, SciELO), lê o trecho e só depois pede à IA para ajudar a formatar a referência no padrão ABNT. Cada item da bibliografia deve ter um link ou um exemplar que você abriu. Uma ferramenta de pesquisa que mostra a origem de cada afirmação, como as descritas em <a href="/artigos/perplexity-notebooklm-ia-de-pesquisa-estudar-mais-rapido">Perplexity e NotebookLM</a>, ajuda a achar o caminho, mas o link ainda precisa ser aberto por você.</p>
    <h3>Um teste de 30 segundos para cada referência</h3>
    <ol>
      <li>Copie o título exato e pesquise entre aspas.</li>
      <li>Confirme que autor, ano e revista batem com o resultado.</li>
      <li>Abra o arquivo e ache a página que você vai citar.</li>
      <li>Só então coloque na bibliografia.</li>
    </ol>

    <h2>O que é plágio quando a IA entra</h2>
    <p>Plágio é apresentar como seu um trabalho que não é seu, e isso continua valendo quando o autor é uma máquina. Copiar um parágrafo gerado e assinar embaixo costuma ser tratado como falta de autoria, mesmo sem cópia de outra pessoa. Parafrasear de perto um artigo sem citar também é plágio, com ou sem IA no meio.</p>
    <p>Sobre os detectores de texto de IA, não confie neles como árbitro: o texto <a href="/artigos/detector-de-texto-de-ia-funciona-ou-nao-como-saber-se-foi-escrito-por-ia">detector de texto de IA, funciona ou não</a> mostra que eles erram nos dois sentidos, acusando texto humano e deixando passar texto de máquina. O melhor seguro é ter o rascunho com datas, as anotações de leitura e o histórico de versões, que provam o seu processo. Sobre direitos de terceiros em textos e imagens, leia também <a href="/artigos/ia-e-direitos-autorais-o-que-criadores-precisam-saber">IA e direitos autorais</a>.</p>

    <h2>Três prompts de apoio que respeitam o seu trabalho</h2>
    <p>Esses prompts usam a IA como colega de estudo, não como autora. Dados sensíveis de pesquisa, como entrevistas com pessoas identificáveis, não devem ser colados em ferramentas públicas: veja <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">o que você entrega sem perceber</a>.</p>
    <pre><code>Estou escrevendo um TCC de [curso] sobre [tema]. Faça 8 perguntas que um orientador faria para testar se o meu problema de pesquisa está claro. Não responda, só pergunte.</code></pre>
    <pre><code>Segue um parágrafo que eu escrevi. Aponte trechos confusos, repetições e frases longas demais. Não reescreva: liste os problemas e explique cada um em uma linha.</code></pre>
    <pre><code>Explique o conceito de [conceito] como se eu fosse aluno do 2º semestre, com um exemplo do cotidiano. No final, liste 3 termos que devo pesquisar em livros ou artigos para confirmar.</code></pre>
    <p>Para escrever comandos melhores, o guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">prompt engineering</a> traz a estrutura básica. E se a sua ferramenta tem um modo próprio para estudar, veja o <a href="/artigos/modo-estudo-do-chatgpt-e-aprendizado-guiado-do-gemini-como-usar">modo estudo do ChatGPT e o aprendizado guiado do Gemini</a>, que fazem perguntas em vez de entregar respostas prontas.</p>

    <h2>Estudar com o material do TCC: NotebookLM e Gemini Notebook</h2>
    <p>Uma forma útil e de menor risco é carregar apenas os artigos que você já selecionou em um caderno de estudo e conversar com eles. Em 15 de setembro de 2026, o Google anunciou, para o <a href="https://blog.google/innovation-and-ai/products/gemini-notebook/new-study-tools-september-2026/" target="_blank" rel="noopener noreferrer">Gemini Notebook, novas ferramentas de estudo</a>, como resumos interativos com quiz e flashcards e vídeos curtos de cerca de 60 segundos, e descreve as respostas como baseadas nas suas fontes. O anúncio também cita uma oferta para estudantes universitários, resgatável até 31 de dezembro de 2026, que depende do país e exige forma de pagamento: leia as condições antes de ativar.</p>
    <p>Mesmo com respostas ancoradas nas suas fontes, volte ao texto original antes de citar. A mesma lógica vale para <a href="/artigos/flashcards-com-ia-estudar-melhor-notebooklm-e-anki">flashcards com NotebookLM e Anki</a>, que ajudam a fixar a teoria da fundamentação, e para o <a href="/artigos/como-usar-ia-para-resumir-pdfs-artigos-e-textos-longos">resumo de PDFs e artigos longos</a>, útil para a triagem de leituras.</p>

    <h2>Erros comuns de quem usa IA no TCC</h2>
    <ul>
      <li><strong>Colar a bibliografia da IA sem conferir.</strong> É o erro que mais derruba trabalho.</li>
      <li><strong>Não avisar o orientador.</strong> Descobrir depois é pior do que perguntar antes.</li>
      <li><strong>Deixar o texto com cara de máquina.</strong> Frases genéricas e sem exemplos do seu campo chamam atenção da banca.</li>
      <li><strong>Usar a IA para dados.</strong> Resultados de pesquisa vêm da sua coleta, não de uma conversa.</li>
      <li><strong>Esquecer a defesa.</strong> Na banca, você precisa explicar cada decisão sem consultar nada.</li>
    </ul>
    <p>Para escolher uma ferramenta com cuidado com dados e termos de uso, siga o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist de escolha de ferramenta de IA</a>, e para decidir entre assistentes, veja <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini</a>.</p>

    <h2>Um exemplo de semana de TCC com IA</h2>
    <p>Imagine uma aluna de Administração com a monografia sobre fluxo de caixa em padarias, entrega em dezembro. Na segunda, ela usa o primeiro prompt para testar o problema de pesquisa e leva as perguntas ao orientador. Na terça e na quarta, lê quatro artigos que ela mesma achou na biblioteca e anota as páginas. Na quinta, pede à IA que explique um conceito de contabilidade que não entendeu e confirma no livro-texto. Na sexta, escreve dois parágrafos, usa o segundo prompt para achar trechos confusos e reescreve com as próprias palavras. Tempo total: cerca de 8 horas, sem custo se usar o plano gratuito. O texto final é dela, com declaração do apoio na metodologia.</p>

    <h2>Seu próximo passo</h2>
    <p>Abra o regulamento do seu curso hoje e escreva ao orientador. Com a regra na mão, use a IA como colega de estudo e deixe a autoria com você. Para explorar mais formas de aprender com ferramentas de IA, siga a categoria de iniciantes do Portal da AI.</p>
  `,
  faq: [
    {
      question: "Posso usar IA no TCC?",
      answer:
        "Depende da regra da sua instituição e do seu orientador, porque não há uma lei única para o TCC. Procure o regulamento do curso e pergunte por escrito. Onde há permissão, o uso costuma ser de apoio, como explicar conceitos e revisar clareza, com declaração da ferramenta usada.",
    },
    {
      question: "A faculdade consegue descobrir que usei IA?",
      answer:
        "Detectores existem, mas erram nos dois sentidos, e o que costuma pesar é o conjunto: texto genérico, referências inexistentes e dificuldade de explicar o trabalho na banca. Em vez de tentar esconder, converse com o orientador e guarde rascunhos e histórico que mostrem o seu processo.",
    },
    {
      question: "A IA pode gerar as referências ABNT do meu TCC?",
      answer:
        "Ela pode ajudar a formatar uma referência que você já encontrou, mas não deve ser a fonte da referência. Modelos de linguagem podem inventar autores, anos e títulos. Pesquise cada fonte em uma base confiável, abra o arquivo, confirme os dados e só depois formate.",
    },
    {
      question: "Preciso avisar que usei IA no trabalho?",
      answer:
        "Se a instituição exige, sim. Mesmo quando não exige, declarar o uso é a escolha mais segura: um parágrafo curto na metodologia com a ferramenta, a etapa e o que ela não fez. Muitas universidades já têm modelo próprio de declaração, então procure o da sua.",
    },
    {
      question: "Qual IA é melhor para estudar para o TCC?",
      answer:
        "Para conversar com os artigos que você já selecionou, ferramentas de caderno de estudo como o NotebookLM e o Gemini Notebook são boas porque respondem com base nas suas fontes. Para tirar dúvidas de conceito, qualquer assistente serve. Em todos os casos, confirme nos originais.",
    },
  ],
};
