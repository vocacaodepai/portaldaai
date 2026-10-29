import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "ia-com-busca-na-web-como-funciona-citacoes-e-quando-desconfiar",
  title: "IA com busca na web: como funciona, citações e quando desconfiar",
  seoTitle: "IA com busca na web: como funciona e quando desconfiar",
  excerpt:
    "Chatbots que pesquisam na internet citam fontes, mas ainda erram. Entenda como a IA com busca na web funciona, o que as citações provam e como conferir o link.",
  metaDescription:
    "IA com busca na web: veja como o chatbot decide pesquisar, monta a resposta com links, o que uma citação garante e não garante, e um roteiro de 5 passos para conferir a fonte.",
  category: "iniciantes",
  articleSubcategory: "conceitos",
  date: "2026-10-29",
  readTime: 7,
  imageQuery: "person laptop browsing search results",
  seed: 912,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "IA com busca na web é um chatbot que, antes de responder, decide se precisa pesquisar, faz uma ou mais buscas e escreve a resposta com base nas páginas encontradas.",
    "A citação mostra de onde a IA diz ter tirado a informação, mas não prova que ela leu certo: é preciso abrir o link e conferir se a página realmente diz aquilo.",
    "Para assuntos de dinheiro, saúde, lei ou notícia, trate a resposta como ponto de partida e confirme em fonte oficial antes de agir.",
  ],
  content: `
    <p>IA com busca na web é um chatbot ligado a um buscador: ao receber sua pergunta, ele decide se precisa de informação atual, faz uma ou várias pesquisas, lê os resultados e escreve a resposta com links para as páginas usadas. Isso reduz o problema de respostas desatualizadas, mas não elimina o erro, porque a IA ainda interpreta o que leu.</p>

    <p>Quase todo mundo já viu a cena: você pergunta sobre uma regra nova, o chatbot responde com segurança e coloca três linkzinhos no fim. A dúvida é o que esses links garantem. Este guia explica o mecanismo em linguagem simples, mostra o que a documentação oficial do Google diz sobre esse tipo de recurso, traz um exemplo com números e termina com um roteiro de conferência que leva cerca de 3 minutos.</p>

    <h2>O que é uma IA com busca na web</h2>

    <p>Um modelo de linguagem comum responde com o que aprendeu no treinamento, que tem uma data de corte. Quando o assunto é recente, ele pode errar ou inventar, como explica o texto sobre <a href="/artigos/como-uma-ia-aprende-treinamento-ajuste-fino-e-por-que-erra">como uma IA aprende e por que erra</a>. A busca na web resolve parte disso: em vez de depender só da memória, o sistema consulta páginas atuais.</p>

    <p>Na documentação para desenvolvedores, o Google chama a ideia de ancoragem (grounding) com a Pesquisa Google. A <a href="https://ai.google.dev/gemini-api/docs/google-search" target="_blank" rel="noopener noreferrer">página oficial</a>, consultada em 29/10/2026, diz que o recurso conecta os modelos Gemini a conteúdo da web em tempo real, para que as respostas possam usar informação atual e incluir citações. O texto afirma que isso aumenta a precisão factual e reduz alucinações, o que é uma meta do recurso, não uma garantia de acerto.</p>

    <p>Outros chatbots têm modos parecidos, com nomes diferentes: pesquisa, busca na web, modo de pesquisa. O princípio é o mesmo, e vale para os principais assistentes de que fala o comparativo <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini</a>.</p>

    <h2>Como o chatbot decide pesquisar e monta a resposta</h2>

    <p>Segundo a mesma documentação, o modelo decide sozinho se uma pesquisa ajuda. Se ajudar, ele gera uma ou mais consultas, executa, processa os resultados e escreve uma resposta baseada neles. A resposta pode trazer anotações que ligam trechos do texto às URLs e aos títulos das páginas, e o desenvolvedor consegue mostrar quais buscas foram feitas.</p>

    <ol>
      <li>Você faz a pergunta.</li>
      <li>O modelo avalia se a resposta depende de informação recente ou específica.</li>
      <li>O sistema cria as buscas, que podem ser diferentes das palavras que você digitou.</li>
      <li>As páginas encontradas entram como contexto, dentro do limite de memória da conversa descrito em <a href="/artigos/tokens-e-janela-de-contexto-em-ia-o-que-sao-e-por-que-importam">tokens e janela de contexto</a>.</li>
      <li>O modelo escreve a resposta e marca os trechos com as fontes.</li>
    </ol>

    <p>Repare que são dois trabalhos diferentes: achar as páginas certas e resumir sem distorcer. O primeiro depende do buscador, parente da lógica de <a href="/artigos/busca-semantica-e-embeddings-como-a-ia-encontra-o-que-voce-quis-dizer">busca semântica e embeddings</a>. O segundo depende do modelo, e é nele que nascem os deslizes sutis.</p>

    <h2>O que uma citação prova e o que ela não prova</h2>

    <p>Uma citação prova que aquela página foi consultada ou associada ao trecho. Ela não prova que a página diz exatamente o que o chatbot escreveu, que a página é confiável, nem que é a fonte mais atual. Um link para um blog antigo continua sendo um link.</p>

    <table>
      <thead>
        <tr><th>O que você vê</th><th>O que isso garante</th><th>O que falta conferir</th></tr>
      </thead>
      <tbody>
        <tr><td>Link no fim da resposta</td><td>A página foi uma das consultadas</td><td>Se o trecho realmente aparece nela</td></tr>
        <tr><td>Link ao lado da frase</td><td>O sistema associou a frase àquela página</td><td>Se a associação está correta e completa</td></tr>
        <tr><td>Nome de órgão oficial</td><td>Nada por si só</td><td>Abrir o site oficial e ver a data da página</td></tr>
        <tr><td>Resposta sem link algum</td><td>Provavelmente veio da memória do modelo</td><td>Tudo: peça fontes ou pesquise por conta própria</td></tr>
      </tbody>
    </table>

    <p>O guia sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA e como checar</a> traz outras técnicas, e o texto sobre <a href="/artigos/noticias-pelo-chatbot-de-ia-o-que-o-reuters-institute-mostra-e-como-checar-a-fonte">notícias pelo chatbot de IA</a> mostra por que a checagem importa quando o assunto é jornalismo.</p>

    <h2>Exemplo com números: conferindo uma regra do MEI</h2>

    <p>Veja um caso ilustrativo. Rafael é MEI e pergunta ao chatbot com busca ligada: "Qual é o limite de faturamento anual do MEI e o que muda se eu passar?". A resposta traz um valor, uma explicação sobre o excesso e três links. Em vez de confiar, ele gasta 3 minutos: abre o link que parece oficial, procura a data da página, compara o valor com o que está no texto e vê que um dos três links é de um blog sem data.</p>

    <p>Resultado: dois links confirmam, um é descartado. Rafael copia o número da página oficial para a sua planilha, anota a data de consulta e segue em frente. Para o contexto do tema, o texto sobre o <a href="/artigos/limite-de-faturamento-do-mei-como-controlar-mes-a-mes">limite de faturamento do MEI</a> mostra como acompanhar o valor mês a mês. O ponto do exemplo não é o número, e sim o hábito: citação é convite para conferir, não dispensa de conferir.</p>

    <h2>Riscos: fonte ruim, página enganosa e instruções escondidas</h2>

    <p>A IA que lê a internet herda os problemas da internet. Páginas desatualizadas, conteúdo feito só para ranquear e anúncios disfarçados de matéria podem entrar na resposta. Há ainda um risco técnico: páginas podem trazer instruções escondidas para enganar o sistema, tema do guia sobre <a href="/artigos/prompt-injection-risco-de-ia-que-le-paginas-e-emails">prompt injection</a>. Quanto mais ferramentas o chatbot usa, mais atenção você precisa dar ao que ele faz com os dados que lê.</p>

    <p>Existem também limites de acesso. A documentação do Google sobre leitura de endereços informados pelo usuário, a <a href="https://ai.google.dev/gemini-api/docs/url-context" target="_blank" rel="noopener noreferrer">ferramenta de contexto de URL</a>, consultada em 29/10/2026, diz que ela não lê conteúdo atrás de paywall, vídeos do YouTube nem arquivos do Google Docs e Planilhas, e que aceita até 20 endereços por pedido. Em outras palavras: se uma página está fechada para assinantes, o chatbot pode não ter lido o texto completo e ainda assim dar uma resposta com ar de certeza.</p>

    <h2>Roteiro de 5 passos para conferir uma resposta com fontes</h2>

    <ul class="checklist">
      <li>Abra pelo menos um link e procure a frase que sustenta a resposta.</li>
      <li>Veja a data da página e o nome de quem publica: órgão público, empresa ou blog.</li>
      <li>Compare números e prazos com o texto original, sem arredondar de cabeça.</li>
      <li>Para dinheiro, saúde, lei ou segurança, confirme em site oficial antes de agir.</li>
      <li>Se algo não bater, volte ao chat e peça: "mostre o trecho exato da página que sustenta isso".</li>
    </ul>

    <pre><code>Pesquise na web e responda: [sua pergunta]. Use apenas fontes de órgãos oficiais ou de veículos conhecidos, informe a data de cada página e copie o trecho exato que sustenta cada afirmação. Se não encontrar fonte oficial, diga que não encontrou, sem completar com palpite.</code></pre>

    <p>Esse tipo de pedido não elimina o erro, mas torna a checagem mais rápida. Para pesquisas mais longas, com relatório e várias fontes, o guia do <a href="/artigos/gemini-deep-research-como-usar-limites-e-planos">Gemini Deep Research</a> explica o modo aprofundado.</p>

    <h2>Quando ligar a busca e quando deixar desligada</h2>

    <p>Ligue a busca para preços, regras, prazos, notícias, versões de programas e qualquer coisa que muda. Deixe de lado quando o trabalho é reescrever um texto seu, traduzir, resumir um documento que você colou ou brincar com ideias: nesses casos, a pesquisa só acrescenta ruído. Se a dúvida é qual modelo usar para cada tarefa, o texto sobre <a href="/artigos/ranking-de-ia-e-benchmarks-como-ler-arena-e-testes-antes-de-escolher-qual-usar">ranking de IA e benchmarks</a> ajuda a pensar nisso.</p>

    <p>Na próxima vez que um chatbot responder com links, abra um deles antes de copiar a resposta. Se você está começando, a página <a href="/artigos/o-que-e-inteligencia-artificial-guia-completo">o que é inteligência artificial</a> é um bom ponto de apoio, e a categoria de <a href="/categoria/iniciantes">iniciantes</a> reúne os próximos passos.</p>
  `,
  faq: [
    {
      question: "O que é IA com busca na web?",
      answer:
        "É um chatbot que, além da memória do treinamento, consulta um buscador para responder. Ele decide se precisa pesquisar, faz as buscas, lê os resultados e escreve a resposta com links das páginas usadas. Serve para assuntos recentes, mas ainda pode errar.",
    },
    {
      question: "A resposta com link de fonte é sempre confiável?",
      answer:
        "Não. O link mostra de onde a IA diz ter tirado a informação, mas ela pode resumir mal, usar uma página antiga ou associar o trecho à fonte errada. Abra o link, procure a frase e compare datas e números antes de usar a resposta.",
    },
    {
      question: "Por que o chatbot às vezes não lê o site que eu mandei?",
      answer:
        "Porque há limites de acesso. A documentação do Google informa que a ferramenta de contexto de URL não lê conteúdo com paywall, vídeos do YouTube nem arquivos do Google Docs e Planilhas. Nesses casos, cole o texto na conversa ou use outra forma de acesso.",
    },
    {
      question: "Devo deixar a busca na web sempre ligada?",
      answer:
        "Não precisa. Ligue para informação que muda, como preços, regras e notícias. Para reescrever, traduzir ou resumir um texto que você mesmo colou, a busca pode trazer fontes desnecessárias e distrair o modelo. Escolha conforme a tarefa.",
    },
    {
      question: "Como pedir que a IA mostre a prova do que disse?",
      answer:
        "Peça o trecho exato da página, a data e o nome de quem publica. Uma boa frase é: mostre o trecho que sustenta cada afirmação e diga quando não encontrar fonte oficial. Depois, abra o link e confirme por conta própria.",
    },
  ],
};
