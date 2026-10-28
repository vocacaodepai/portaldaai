import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "noticias-pelo-chatbot-de-ia-o-que-o-reuters-institute-mostra-e-como-checar-a-fonte",
  title: "Notícias pelo chatbot de IA: como checar a fonte e não cair",
  seoTitle: "Notícias pelo chatbot de IA: como checar a fonte",
  excerpt:
    "Cerca de 10% das pessoas já usam chatbots para saber notícias, diz o Reuters Institute. Veja o que isso significa, onde a IA erra e um roteiro de 5 passos para checar.",
  metaDescription:
    "Ler notícias pelo chatbot de IA: dados do Digital News Report 2026 do Reuters Institute, riscos de erro e um roteiro de 5 passos para checar a fonte antes de repassar.",
  category: "iniciantes",
  articleSubcategory: "vida-pratica",
  date: "2026-10-28",
  readTime: 7,
  imageQuery: "person reading news phone coffee",
  seed: 884,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Segundo o Digital News Report 2026, do Reuters Institute, 10% das pessoas usam chatbots de IA para notícias toda semana, contra 7% no ano anterior.",
    "Só 20% confiam nas respostas de chatbots, contra 37% de confiança em notícias em geral, e o uso mais comum é fazer perguntas de acompanhamento.",
    "Para usar bem, peça os links, abra a fonte, confira a data e desconfie de resposta sem origem: a IA resume, mas quem decide se a notícia é verdadeira é você.",
  ],
  content: `
    <p>Perguntar notícias a um chatbot de IA funciona como uma conversa sobre o que aconteceu, mas a resposta pode misturar fatos, datas e fontes sem avisar. O Digital News Report 2026, do Reuters Institute, mostra que 10% das pessoas já fazem isso toda semana. O caminho seguro é pedir os links, abrir a fonte e conferir a data antes de repassar.</p>

    <p>Muita gente começou assim sem perceber: pergunta "o que mudou na lei do SAC?" ou "o que aconteceu hoje com o dólar?" e recebe um texto bem escrito. O problema é que texto bem escrito parece verdadeiro. Este guia mostra o que a pesquisa diz sobre quem usa, quanto se confia, onde o erro costuma aparecer e um roteiro de cinco passos para conferir.</p>

    <h2>O que o Reuters Institute mostra sobre notícias e IA</h2>

    <p>O <a href="https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2026/dnr-executive-summary" target="_blank" rel="noopener noreferrer">resumo executivo do Digital News Report 2026</a>, consultado em 28/10/2026, traz os números principais. Segundo o relatório, 10% das pessoas usam chatbots de IA para notícias toda semana, contra 7% no ano anterior, e entre menores de 35 anos o índice é de 16%. O uso mais popular é poder fazer perguntas de acompanhamento, citado por 42% das pessoas.</p>

    <p>A confiança é menor que o uso sugere: 20% confiam nas respostas de chatbots no mundo, contra 37% de confiança em notícias em geral. O relatório também mostra que quem usa chatbot para notícias costuma ser alguém já muito interessado em notícias. Em outras palavras, a IA entra como complemento. Um <a href="https://reutersinstitute.politics.ox.ac.uk/news/our-podcast-digital-news-report-2026-episode-4-how-people-are-using-ai-chatbots-news" target="_blank" rel="noopener noreferrer">episódio do podcast do instituto</a> cita que só 1% apontam o chatbot como fonte principal de notícias.</p>

    <h2>Por que o chatbot pode errar uma notícia</h2>

    <p>Um modelo de linguagem escreve a resposta mais provável, não a mais verificada. Quando ele consulta a internet, pode pegar uma página antiga, um texto de opinião ou uma fonte de baixa qualidade e resumir tudo no mesmo tom confiante. O guia sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a> explica por que a máquina inventa detalhes quando não sabe.</p>

    <p>Há três riscos recorrentes em notícia:</p>

    <ul>
      <li><strong>Data trocada:</strong> o chatbot descreve uma lei, um preço ou um caso como atual, mas a fonte é de meses atrás.</li>
      <li><strong>Fonte misturada:</strong> o resumo junta dois acontecimentos parecidos em um só.</li>
      <li><strong>Número sem origem:</strong> aparece uma porcentagem sem dizer quem mediu.</li>
    </ul>

    <p>O relatório não traz um índice de erro dos chatbots, então não vale citar percentual de acerto. O que vale é o hábito de checar. E o hábito é mais urgente em tema sensível, como saúde, dinheiro e eleição, o assunto do texto sobre <a href="/artigos/deepfake-nas-eleicoes-2026-regras-do-tse-rotulagem-e-multas">deepfake nas eleições 2026</a>.</p>

    <h2>Roteiro de 5 passos para checar uma notícia que a IA resumiu</h2>

    <ol>
      <li><strong>Peça os links.</strong> Diga: "liste as fontes com link e data de publicação". Sem link, trate como boato.</li>
      <li><strong>Abra pelo menos uma fonte.</strong> Leia o texto original e compare com o resumo. O relatório do instituto indica que quem usa IA para notícia costuma clicar mais para verificar uma história do que para ler mais detalhes.</li>
      <li><strong>Confira a data.</strong> Veja se o fato é de hoje, da semana passada ou de anos atrás.</li>
      <li><strong>Procure uma segunda fonte.</strong> Se só um site diz, espere. Se jornais e órgãos oficiais dizem, a chance de erro cai.</li>
      <li><strong>Vá ao documento oficial quando houver.</strong> Em lei, decreto, preço de plano ou regra de órgão público, a página oficial vale mais que qualquer resumo.</li>
    </ol>

    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Se o chatbot não consegue mostrar a origem de um dado, pergunte: "de onde você tirou esse número?". Se a resposta for vaga, não repasse.</p></div>

    <h2>Prompts que ajudam a usar a IA como assistente de leitura</h2>

    <p>Em vez de perguntar "o que aconteceu com X?", peça uma tarefa que deixe a checagem fácil. Dois modelos que funcionam em qualquer chatbot com acesso à web:</p>

    <pre><code>Resuma em até 6 linhas o que se sabe sobre [assunto] até hoje. Para cada afirmação, informe a fonte, o link e a data. Separe o que é fato confirmado do que é opinião ou suposição. Se não encontrar fonte, diga que não encontrou.</code></pre>

    <pre><code>Cole abaixo o texto de uma notícia. Liste as afirmações verificáveis (números, datas, nomes, leis) e o que eu preciso conferir em fonte oficial para cada uma. Não confirme nada que não esteja no texto.</code></pre>

    <p>O segundo prompt é útil porque a IA trabalha em cima do texto que você colou, e você mantém o controle da fonte. Para estudar conteúdos longos com apoio de IA e checagem, veja também o texto sobre <a href="/artigos/videoaulas-do-youtube-com-gemini-resumo-perguntas-e-como-checar-o-que-a-ia-disse">videoaulas do YouTube com Gemini</a>.</p>

    <h2>Exemplo: boato sobre mudança no pagamento do INSS</h2>

    <p>Imagine que a Marlene, de 58 anos, recebe no grupo da família a mensagem "o governo vai mudar o dia do pagamento do INSS". Ela pergunta a um chatbot, que responde com um parágrafo confiante e uma data. Em vez de repassar, ela aplica o roteiro: pede os links, vê que a única fonte é um site de notícias sem data, procura o canal oficial do INSS e o portal gov.br, não encontra aviso e conclui que o boato não está confirmado. Em cinco minutos, ela evitou espalhar um erro.</p>

    <p>Esse tipo de checagem também vale para mensagens de golpe. O guia de <a href="/artigos/como-usar-ia-para-checar-mensagem-suspeita-e-evitar-golpes">como usar IA para checar mensagem suspeita</a> mostra sinais de alerta, e o de <a href="/artigos/checar-foto-e-noticia-falsa-com-sobre-esta-imagem-e-fact-check-explorer">checar foto e notícia falsa</a> cobre imagens. Para conteúdo gerado por IA, o <a href="/artigos/synthid-site-do-google-para-verificar-midia-gerada-por-ia">site SynthID do Google</a> ajuda em parte dos casos.</p>

    <h2>Qual chatbot usar para notícia e quando preferir a busca</h2>

    <p>Nenhum chatbot é fonte de notícia. Alguns têm busca na web e mostram links, o que ajuda. Se a sua necessidade é a notícia do dia, abrir um site de jornal, o app de um veículo ou o <a href="/artigos/modo-ia-do-google-como-usar-a-pesquisa-com-ia">Modo IA do Google</a> com os links à vista costuma ser mais seguro que uma conversa sem fonte. Para pesquisa com fontes citadas, o texto sobre <a href="/artigos/perplexity-notebooklm-ia-de-pesquisa-estudar-mais-rapido">Perplexity e NotebookLM</a> compara as opções, e o <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">comparativo ChatGPT, Claude e Gemini</a> ajuda a escolher a ferramenta.</p>

    <p>Entender por que a resposta muda de uma ferramenta para outra também ajuda. O texto sobre <a href="/artigos/ranking-de-ia-e-benchmarks-como-ler-arena-e-testes-antes-de-escolher-qual-usar">ranking de IA e benchmarks</a> explica o que esses placares medem e o que deixam de fora.</p>

    <h2>Erros comuns</h2>

    <ul class="checklist">
      <li>Repassar um resumo da IA sem abrir nenhuma fonte.</li>
      <li>Confundir resposta bem escrita com resposta verificada.</li>
      <li>Aceitar número sem saber quem mediu e quando.</li>
      <li>Usar o chatbot como única fonte em tema de saúde, dinheiro ou eleição.</li>
      <li>Não conferir a data da fonte.</li>
      <li>Colar no chatbot dados pessoais para "ver se é golpe".</li>
    </ul>

    <p>Na próxima vez em que perguntar uma notícia a um chatbot, aplique o roteiro de cinco passos antes de compartilhar. Se quiser entender como a IA encontra o que você pergunta, leia sobre <a href="/artigos/busca-semantica-e-embeddings-como-a-ia-encontra-o-que-voce-quis-dizer">busca semântica e embeddings</a>, e veja mais guias de uso seguro na categoria Iniciantes.</p>
  `,
  faq: [
    {
      question: "Posso confiar em notícia que o ChatGPT ou o Gemini me conta?",
      answer:
        "Use como ponto de partida, não como prova. Segundo o Digital News Report 2026, só 20% confiam nas respostas de chatbots. Peça os links, abra a fonte, confira a data e procure uma segunda fonte ou o documento oficial antes de acreditar ou repassar.",
    },
    {
      question: "Quantas pessoas usam chatbot de IA para ler notícias?",
      answer:
        "Segundo o Reuters Institute, 10% das pessoas pesquisadas usam chatbots de IA para notícias toda semana, contra 7% no ano anterior, e 16% entre menores de 35 anos. O uso é mais forte em alguns países e menor em outros, como o Reino Unido.",
    },
    {
      question: "Como pedir ao chatbot as fontes de uma notícia?",
      answer:
        "Escreva algo como: liste as fontes com link e data de publicação e separe fato confirmado de opinião. Se a IA não apresentar links ou apresentar links que não abrem, considere a resposta não confirmada e busque a notícia direto em jornais ou em sites oficiais.",
    },
    {
      question: "A IA inventa notícia?",
      answer:
        "Ela pode inventar detalhes, como data, número ou citação, principalmente quando não encontra a informação. Por isso vale conferir a fonte. A melhor defesa é abrir o link e comparar o que a IA disse com o texto original.",
    },
    {
      question: "Chatbot substitui o jornal?",
      answer:
        "Não segundo os dados do Reuters Institute: o podcast do instituto cita que apenas 1% das pessoas apontam o chatbot como principal fonte de notícias. Para a maioria, ele complementa hábitos que já existem, como redes sociais, buscas e sites de notícias.",
    },
  ],
};
