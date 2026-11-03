import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "marca-dagua-em-texto-de-ia-o-que-o-ai-act-exige-e-o-que-muda-para-quem-usa",
  title: "Marca d'água em texto de IA: o que o AI Act exige e o que muda",
  seoTitle: "Marca d'água em texto de IA: o que o AI Act exige",
  excerpt:
    "OpenAI, Anthropic e Google passaram a marcar texto feito por IA. Entenda como a marca d'água funciona, o que a lei europeia exige e o que muda no Brasil.",
  metaDescription:
    "Marca d'água em texto de IA: como funciona, o que o artigo 50 do AI Act exige desde agosto de 2026, os limites da detecção e o que muda para o Brasil.",
  category: "futuro",
  articleSubcategory: "regulacao-e-etica",
  date: "2026-11-03",
  readTime: 7,
  imageQuery: "european parliament building flags",
  seed: 1112,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O artigo 50 do AI Act, em vigor desde 2 de agosto de 2026, obriga quem fornece IA generativa a marcar a saída de forma legível por máquina e detectável como artificial.",
    "A marca d'água em texto não é um símbolo visível: o modelo inclina de leve a escolha de palavras e cria um padrão estatístico que um detector com a chave reconhece.",
    "A detecção falha com edição, tradução e textos curtos, e a ausência da marca não prova que um humano escreveu. Ela é ferramenta de transparência, não detector de cola.",
  ],
  content: `
    <p>Marca d'água em texto de IA é um padrão invisível na escolha de palavras que permite a um detector reconhecer, depois, que aquele texto saiu de um modelo. Ela virou assunto porque o AI Act, a lei de IA da União Europeia, passou a exigir desde 2 de agosto de 2026 que conteúdo sintético seja marcado de forma detectável por máquina.</p>

    <p>OpenAI, Anthropic e Google já anunciaram como estão cumprindo a regra, cada uma de um jeito e com alcance diferente. Este guia explica o que a lei pede, como a técnica funciona, por que ela é frágil e o que muda para quem escreve, contrata ou publica texto no Brasil. Fontes conferidas em 03/11/2026.</p>

    <h2>O que o AI Act exige</h2>

    <p>A regra está no <a href="https://artificialintelligenceact.eu/article/50/" target="_blank" rel="noopener noreferrer">artigo 50 do AI Act</a>, que trata de transparência e se aplica desde 2 de agosto de 2026. O parágrafo 2 diz que fornecedores de sistemas de IA, incluindo os de uso geral, que geram áudio, imagem, vídeo ou texto sintético devem garantir que a saída seja marcada em formato legível por máquina e detectável como gerada ou manipulada artificialmente. As soluções precisam ser eficazes, interoperáveis, robustas e confiáveis dentro do que for tecnicamente viável.</p>

    <p>Há exceções. Sistemas que só fazem edição assistiva comum, como corretor, ou que não alteram de forma substancial o conteúdo de entrada, ficam de fora. O parágrafo 4 trata de quem usa a IA: deepfakes de imagem, áudio ou vídeo precisam ser revelados como tal, e texto gerado por IA publicado para informar o público sobre assuntos de interesse público também, a menos que tenha passado por revisão humana e alguém assuma a responsabilidade editorial.</p>

    <table>
      <thead>
        <tr><th>Quem</th><th>Obrigação no artigo 50</th></tr>
      </thead>
      <tbody>
        <tr><td>Fornecedor do modelo (OpenAI, Anthropic, Google)</td><td>Marcar a saída de forma detectável por máquina</td></tr>
        <tr><td>Quem publica deepfake</td><td>Avisar que o conteúdo é artificial</td></tr>
        <tr><td>Quem publica texto de interesse público feito por IA</td><td>Avisar, salvo revisão humana com responsável editorial</td></tr>
        <tr><td>Ferramenta de correção ou edição leve</td><td>Em geral, fora da obrigação de marcar</td></tr>
      </tbody>
    </table>

    <h2>Como funciona a marca d'água em texto</h2>

    <p>Um modelo de linguagem escreve uma palavra por vez, escolhendo entre candidatas com probabilidades diferentes. O <a href="https://deepmind.google/models/synthid/" target="_blank" rel="noopener noreferrer">SynthID, do Google DeepMind</a>, usa um exemplo simples: depois de "minhas frutas tropicais favoritas são manga e", a palavra "banana" tem nota maior que "avião". A marca d'água ajusta de leve essas notas segundo uma chave secreta.</p>

    <p>Em uma frase isolada, ninguém percebe. Em centenas de palavras, o conjunto dessas pequenas inclinações forma um padrão estatístico que um detector com a chave consegue medir. Não há caractere escondido, emoji ou espaço especial, por isso o padrão sobrevive a copiar e colar. A técnica mexe justamente na aleatoriedade da geração, o mesmo mecanismo explicado em <a href="/artigos/por-que-a-ia-responde-diferente-na-mesma-pergunta-aleatoriedade-e-como-controlar">por que a IA responde diferente à mesma pergunta</a>.</p>

    <h2>O que cada empresa fez</h2>

    <p>As três maiores empresas do setor seguiram caminhos parecidos na técnica e diferentes no alcance:</p>

    <ul>
      <li><strong>OpenAI.</strong> Segundo o <a href="https://techcrunch.com/2026/10/05/openai-will-start-watermarking-chatgpts-text-in-the-eu" target="_blank" rel="noopener noreferrer">TechCrunch</a>, a marca chamada textGrain vale para todos os planos do ChatGPT e do Codex, mas só na União Europeia. Na API, em qualquer região, é opcional e vem desligada. O detector ficou restrito a pesquisadores e organizações aprovados. Mais detalhes na <a href="/noticias/openai-marca-dagua-texto-chatgpt-ue">notícia sobre o textGrain</a>.</li>
      <li><strong>Anthropic.</strong> De acordo com o <a href="https://the-decoder.com/anthropics-watermark-rollout-leaves-a-loophole-on-two-older-claude-models/" target="_blank" rel="noopener noreferrer">The Decoder</a>, a marca é uma variante do SynthID embutida no próprio modelo, vale em qualquer plataforma de nuvem e não pode ser desligada pelo cliente. Modelos lançados depois de 2 de agosto já saem marcados e os antigos recebem a marca em etapas, de olho em um prazo de dezembro. Nos modelos 4.6, ela só vale com os parâmetros de amostragem no padrão, brecha descrita na <a href="/noticias/anthropic-marca-dagua-texto-claude-brecha-temperatura">notícia sobre a marca d'água do Claude</a>.</li>
      <li><strong>Google.</strong> A página do SynthID informa que o texto gerado no app Gemini e na versão web já leva a marca.</li>
    </ul>

    <p>Na prática, um usuário brasileiro do ChatGPT recebe texto sem marca, enquanto o mesmo usuário no Claude ou no app Gemini recebe texto marcado. A obrigação é europeia, mas a implementação depende de cada empresa.</p>

    <h2>Os limites da detecção</h2>

    <p>A própria OpenAI publicou números que mostram a fragilidade. Em um teste, trocar 10% das palavras por sinônimos derrubou a taxa de detecção de cerca de 92% para 66%. Trechos curtos, respostas de matemática e textos traduzidos são ainda mais difíceis. E a empresa avisa que a falta da marca não prova autoria humana.</p>

    <div class="callout-box">
      <span class="callout-label">O que a marca d'água não é</span>
      <p>Não é prova de cola, não identifica quem escreveu e não diz se o conteúdo é verdadeiro. As empresas afirmam que a marca não carrega dados do usuário. Ela só indica, com alguma probabilidade, que um modelo específico gerou aquele texto.</p>
    </div>

    <p>Isso conversa com o que já se sabe sobre detectores comerciais, que erram para os dois lados, como mostra o guia sobre <a href="/artigos/detector-de-texto-de-ia-funciona-ou-nao-como-saber-se-foi-escrito-por-ia">se detector de texto de IA funciona</a>. A diferença é que a marca d'água é colocada na origem, pelo próprio fornecedor, em vez de adivinhada depois pelo estilo.</p>

    <h2>E no Brasil?</h2>

    <p>Não há, hoje, regra brasileira equivalente ao artigo 50 para texto comum. O marco legal da IA, aprovado no Senado, segue em discussão, como mostra o guia sobre a <a href="/artigos/lei-de-ia-no-brasil-o-que-muda-para-quem-usa">lei de IA no Brasil</a>. Mas existem regras setoriais que já pedem transparência: o TSE exige rótulo em conteúdo sintético nas campanhas, tema do guia sobre <a href="/artigos/deepfake-nas-eleicoes-2026-regras-do-tse-rotulagem-e-multas">deepfake nas eleições de 2026</a>, e o Conar trata da identificação de publicidade, explicado em <a href="/artigos/link-de-afiliado-e-publicidade-o-que-o-guia-do-conar-2026-muda-para-criadores-e-marcas">link de afiliado é publicidade</a>.</p>

    <p>Mesmo sem lei própria, a regra europeia chega por tabela. Como Claude e Gemini marcam o texto em qualquer país, quem usa essas ferramentas no Brasil já produz conteúdo marcado. E empresas brasileiras que vendem para a Europa podem ser cobradas pelos clientes de lá.</p>

    <h3>Exemplo com um freelancer</h3>

    <p>Cenário ilustrativo: Marina, redatora em Recife, cobra R$ 250 por artigo de blog para uma agência de Lisboa. Ela usa IA para o rascunho, reescreve boa parte e revisa os dados. Pelo parágrafo 4, um texto de blog comercial não é, em geral, "informação ao público sobre assunto de interesse público", e há revisão humana. Mesmo assim, faz sentido combinar em contrato como a IA entra no trabalho, porque o cliente pode ter política própria. O guia sobre <a href="/artigos/direitos-autorais-e-ia-no-brasil-quem-e-dono-do-que-a-ia-cria-e-o-que-esta-em-discussao">direitos autorais e IA no Brasil</a> ajuda a fechar a outra parte da conversa: de quem é o texto.</p>

    <h2>O que muda para quem usa IA no trabalho</h2>

    <p>Para a maioria das pessoas, nada muda na tela: o texto sai igual. O que muda é a possibilidade de rastrear a origem. Alguns cuidados práticos:</p>

    <ul class="checklist">
      <li>Seja transparente com clientes e professores sobre o uso de IA, em vez de apostar que ninguém vai detectar.</li>
      <li>Revise de verdade: além de ser a exigência europeia para texto de interesse público, é o que garante qualidade e responsabilidade.</li>
      <li>Não use marca d'água, nem detector, como prova única para acusar alguém de usar IA.</li>
      <li>Em redação jornalística, siga a política do veículo; o guia sobre <a href="/artigos/jornalismo-e-ia-o-que-muda-para-quem-produz-noticia-e-para-quem-publica">jornalismo e IA</a> traz exemplos.</li>
      <li>Para imagens e vídeos, a checagem de marca já é pública em alguns casos, como no <a href="/artigos/synthid-site-do-google-para-verificar-midia-gerada-por-ia">site do SynthID</a>.</li>
    </ul>

    <h2>Erros comuns sobre o tema</h2>

    <p>O primeiro erro é achar que existe um "removedor de marca d'água" seguro. Reescrever muda o padrão, sim, mas a obrigação de transparência não depende da marca existir: se a sua profissão ou o seu contrato pede aviso, o aviso continua devido. O segundo é imaginar que a marca expõe dados pessoais; segundo as empresas, ela não contém informações sobre o usuário ou as conversas.</p>

    <p>O terceiro erro é confundir marca d'água com verificação de fatos. Um texto marcado pode estar certo e um texto humano pode estar errado. Checar a informação continua sendo trabalho de quem publica, como no guia sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a>. O quarto é acreditar que o assunto é só europeu: como Claude e Gemini marcam o texto em qualquer país, a regra já alcança quem usa essas ferramentas aqui, e a discussão sobre IA generativa também avança no Brasil, como mostra o <a href="/artigos/sandbox-de-ia-da-anpd-o-que-e-o-que-testou-e-o-que-muda-para-quem-usa-ia">sandbox de IA da ANPD</a>.</p>

    <h2>O que esperar daqui para frente</h2>

    <p>Duas coisas ainda estão em aberto. A primeira é a interoperabilidade que a lei pede: hoje cada empresa tem seu detector e sua chave, e não existe um verificador único para texto aberto ao público. A segunda é o efeito em quem usa modelos abertos, que podem rodar sem nenhuma marca. Se você trabalha com conteúdo, a melhor preparação é simples: use IA de forma declarada, revise tudo e guarde rascunhos que mostrem o seu processo. Quer entender o lado da privacidade? Continue em <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade: o que você entrega sem perceber</a>.</p>
  `,
  faq: [
    {
      question: "O que é marca d'água em texto gerado por IA?",
      answer:
        "É um padrão estatístico invisível na escolha de palavras. O modelo inclina de leve as escolhas segundo uma chave secreta, e um detector com essa chave consegue estimar, depois, se o texto saiu daquele modelo. Não há símbolo ou caractere escondido.",
    },
    {
      question: "O AI Act obriga a marcar texto de IA?",
      answer:
        "Sim, para fornecedores. O artigo 50, aplicável desde 2 de agosto de 2026, exige que sistemas que geram texto, imagem, áudio ou vídeo sintético marquem a saída de forma legível por máquina e detectável. Há exceções para edição assistiva leve.",
    },
    {
      question: "O texto do ChatGPT no Brasil tem marca d'água?",
      answer:
        "Segundo o TechCrunch, a OpenAI aplica a marca textGrain no ChatGPT e no Codex só para usuários da União Europeia. Na API ela é opcional e vem desligada. Já Anthropic e Google informam marcar o texto do Claude e do app Gemini de forma geral.",
    },
    {
      question: "Dá para provar que alguém usou IA pela marca d'água?",
      answer:
        "Não com segurança. A própria OpenAI mostrou que trocar 10% das palavras derruba a detecção de cerca de 92% para 66%, e textos curtos ou traduzidos são difíceis de identificar. A falta de marca também não prova que um humano escreveu.",
    },
    {
      question: "Existe lei brasileira parecida com o artigo 50?",
      answer:
        "Não para texto em geral. O marco legal da IA ainda está em discussão no Congresso. Há regras setoriais de transparência, como as do TSE para conteúdo sintético em campanhas eleitorais e as orientações do Conar sobre identificação de publicidade.",
    },
  ],
  quiz: [
    {
      question: "Como a marca d'água em texto de IA é inserida?",
      options: [
        "Com caracteres invisíveis entre as palavras",
        "Inclinando de leve a escolha de palavras segundo uma chave",
        "Com uma assinatura no fim do texto",
      ],
      answer: 1,
      explanation:
        "A marca fica no padrão estatístico das palavras, por isso sobrevive a copiar e colar, mas enfraquece com edição.",
    },
    {
      question: "Quando o texto de interesse público feito por IA dispensa aviso no AI Act?",
      options: [
        "Quando é curto",
        "Quando foi publicado fora da Europa",
        "Quando passou por revisão humana e alguém assume a responsabilidade editorial",
      ],
      answer: 2,
      explanation:
        "O parágrafo 4 do artigo 50 isenta o texto revisado por humanos com responsável editorial.",
    },
  ],
};
