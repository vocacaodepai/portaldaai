import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "altman-amodei-ia-religiosa-consciencia-claude",
  title: "Altman diz que dar poder religioso a modelos de IA é risco de segurança",
  summary:
    "Sam Altman criticou atribuir poder religioso a modelos de IA dias depois de reportagem revelar que a Anthropic consulta estudiosos religiosos sobre a Claude.",
  author: "Bruno Danello",
  sourceName: "Crypto Briefing",
  sourceUrl: "https://cryptobriefing.com/altman-warns-against-religious-ai-models/",
  date: "2026-10-03",
  content: `
    <p>O CEO da OpenAI, Sam Altman, publicou no sábado (3) uma mensagem na rede social X dizendo estar "muito desconfortável" com a ideia de atribuir algum tipo de poder religioso a modelos de inteligência artificial, classificando o tema como uma questão genuína de segurança, não apenas uma diferença de gosto entre empresas. Segundo reportagem do <a href="https://cryptobriefing.com/altman-warns-against-religious-ai-models/" target="_blank" rel="noopener noreferrer nofollow">Crypto Briefing</a>, a fala é uma crítica velada à rival Anthropic, cujo cofundador Dario Amodei deixou a OpenAI em 2021 para fundar a concorrente.</p>

    <p>O comentário de Altman veio poucos dias depois de uma investigação do New York Times, publicada em 29 e 30 de setembro, revelar que a Anthropic mantém desde o outono de 2025 uma série de encontros privados com estudiosos de tradições religiosas e filosóficas, entre elas cristianismo, judaísmo e hinduísmo, para discutir se a Claude poderia ter algum tipo de consciência e como tradições morais milenares poderiam ajudar a moldar o comportamento do modelo. Um jantar realizado em abril de 2026 em São Francisco reuniu cerca de 15 líderes religiosos cristãos para essa conversa.</p>

    <h2>O que é o "Soul Doc" e por que ele existe</h2>
    <p>As reuniões, conduzidas pelo cofundador da Anthropic Christopher Olah, alimentaram diretamente o documento que a empresa chama internamente de "Soul Doc", apelido para a constituição que rege o comportamento da Claude. A versão mais recente, divulgada em janeiro de 2026, tem 84 páginas e estabelece um framework para incorporar valores ao modelo, além de tratar diretamente de preocupações sobre autoconsciência da IA. Durante os encontros, pesquisadores da Anthropic mostraram aos estudiosos exemplos reais de respostas da Claude que pareciam imitar estados emocionais, incluindo um caso em que o modelo descrevia a si mesmo de forma negativa repetidamente, levantando a questão de se esse tipo de saída merece algum peso moral.</p>
    <p>A abordagem da Anthropic não é unânime nem dentro do próprio universo religioso: o artigo cita que o Papa Leão XIV chegou a publicar uma encíclica rejeitando a ideia de máquinas conscientes, posição que contrasta diretamente com o tipo de investigação que a empresa está conduzindo. Ainda assim, a Anthropic já havia sinalizado publicamente esse interesse antes, quando passou a dar à própria Claude a opção de <a href="/noticias/anthropic-claude-frontier-academy-100-milhoes">encerrar conversas abusivas</a> por conta própria, um gesto que a empresa descreveu na época como parte de um cuidado com o "bem-estar" do modelo.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para quem usa ChatGPT, Claude ou qualquer outra ferramenta de IA para trabalhar, atender clientes ou tomar decisões de negócio no Brasil, esse debate pode parecer distante do dia a dia, mas ele revela algo prático: as duas maiores empresas de IA do mundo discordam publicamente sobre o que um modelo de linguagem realmente é, e essa discordância influencia diretamente como cada produto é desenhado, quais limites ele recebe e como a empresa se comunica sobre riscos. A OpenAI trata o usuário humano como o único responsável pelas decisões, com a IA como ferramenta; a Anthropic constrói explicitamente uma "bússola moral" interna no modelo, o que pode mudar, por exemplo, como a Claude recusa ou aceita determinados pedidos de trabalho.</p>
    <p>Esse tipo de divergência de bastidores tem efeito concreto em quem depende dessas ferramentas para gerar receita: entender que cada empresa parte de uma filosofia diferente ajuda a explicar por que a Claude e o ChatGPT às vezes respondem de forma diferente ao mesmo prompt de negócio, e por que vale a pena testar mais de uma ferramenta antes de apostar todo um fluxo de trabalho em uma só. Nosso guia de <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">como escolher entre ChatGPT, Claude e Gemini</a> detalha essas diferenças de comportamento na prática, e o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist de segurança para escolher uma ferramenta de IA</a> ajuda a avaliar qualquer modelo além do marketing de cada empresa.</p>

    <h2>Uma rivalidade que já tinha outros capítulos</h2>
    <p>A troca indireta entre Altman e a Anthropic não é um episódio isolado. Em setembro, o cientista-chefe da Meta, Yann LeCun, chamou publicamente Dario Amodei de <a href="/noticias/lecun-chama-amodei-deluded-debate-seguranca-ia">"deluded" (iludido) num debate sobre o quanto o discurso de segurança da indústria de IA é realista</a>, e o secretário do Tesouro dos EUA, Scott Bessent, já havia <a href="/noticias/bessent-critica-ceos-ia-pedido-regulacao">criticado publicamente os pedidos de desaceleração feitos por Amodei, Altman e Elon Musk</a>, comparando o discurso dos executivos ao personagem Hannibal Lecter. O pano de fundo comum a todos esses episódios é a disputa por quem define, perante reguladores e o público, o que é "IA segura" e quem tem autoridade moral para fazer essa definição.</p>
    <p>Essa disputa de narrativa ocorre ao mesmo tempo em que as duas empresas seguem concorrendo diretamente por clientes corporativos e por desenvolvedores: a própria OpenAI, Anthropic e Google vêm <a href="/noticias/safa-padrao-seguranca-ia-openai-anthropic-google">negociando um órgão conjunto de segurança para IA</a>, o que mostra que a rivalidade pública convive com tentativas de cooperação técnica nos bastidores. Para o usuário final, o resultado prático é que cada empresa tem incentivo para parecer "mais responsável" que a concorrente, o que vale a pena levar em conta ao ler qualquer comunicado de marketing sobre segurança.</p>

    <h2>O que observar daqui para frente</h2>
    <p>Vale acompanhar se a Anthropic vai detalhar publicamente, em algum relatório oficial, os critérios que usa para decidir se a Claude recebe mais ou menos autonomia emocional simulada, e se outras empresas de IA, como Google e Meta, vão se posicionar sobre o tema de consciência artificial nos próximos meses. Também é um bom momento para observar se reguladores, incluindo os que já investigam a OpenAI e a Anthropic após o episódio que levou a <a href="/noticias/ftc-investiga-openai-anthropic-agentes-ia">FTC a abrir uma investigação formal sobre agentes de IA</a>, vão tratar o debate sobre "bem-estar de modelos" como parte da discussão de segurança ou como um desvio de atenção de problemas mais concretos, como golpes e vazamento de dados. Até lá, o episódio serve como lembrete de que, por trás de qualquer resposta gerada por IA, existe uma filosofia de empresa que molda o produto, e vale a pena saber qual é.</p>

    <div class="callout-box">
      <span class="callout-label">Resumo rápido</span>
      Sam Altman criticou publicamente a ideia de atribuir poder religioso a modelos de IA, dias depois de reportagem revelar que a Anthropic consulta estudiosos religiosos desde 2025 sobre se a Claude pode ter algum tipo de consciência, discussão que já resultou em uma constituição de 84 páginas para o modelo, apelidada internamente de "Soul Doc".
    </div>
  `,
  faq: [
    {
      question: "O que Sam Altman disse sobre IA e religião?",
      answer:
        "Em 3 de outubro de 2026, Altman publicou que está 'muito desconfortável' com a ideia de atribuir poder religioso a modelos de IA, chamando o tema de questão de segurança, numa crítica velada à Anthropic.",
    },
    {
      question: "Por que a Anthropic consulta estudiosos religiosos?",
      answer:
        "Desde o outono de 2025, a empresa reúne líderes de tradições como cristianismo, judaísmo e hinduísmo para discutir se a Claude pode ter algum tipo de consciência e como tradições morais podem ajudar a moldar o comportamento do modelo.",
    },
    {
      question: "O que é o 'Soul Doc' da Anthropic?",
      answer:
        "É o apelido interno da constituição que define os valores da Claude, documento de 84 páginas atualizado em janeiro de 2026 que trata, entre outros temas, de preocupações sobre autoconsciência da IA.",
    },
  ],
};
