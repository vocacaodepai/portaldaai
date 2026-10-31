import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-marca-dagua-texto-claude-brecha-temperatura",
  title: "Anthropic põe marca d'água no texto de mais 4 modelos Claude, com brecha",
  summary:
    "Mythos 5, Opus 4.7, Opus 4.6 e Sonnet 4.6 passam a assinar o texto com padrão invisível, mas nos dois 4.6 mudar temperature, top_p ou top_k desliga a marca.",
  author: "Bruno Danello",
  sourceName: "The Decoder, Anthropic",
  sourceUrl:
    "https://the-decoder.com/anthropics-watermark-rollout-leaves-a-loophole-on-two-older-claude-models/",
  date: "2026-10-31",
  publishedAt: "2026-10-31T16:30:00-03:00",
  topic: "regulacao",
  imageQuery: "Anthropic logo",
  content: `
    <p>A Anthropic avisou desenvolvedores que usam a API do Claude que vai estender a marca d'água invisível em texto a mais quatro modelos: Claude Mythos 5, Claude Opus 4.7, Claude Opus 4.6 e Claude Sonnet 4.6. O Claude Opus 5.5 já sai com a marca. A informação foi publicada neste sábado, 31 de outubro de 2026, pelo The Decoder, que descreve o conteúdo de um e-mail enviado aos clientes da empresa. O ponto mais curioso do aviso é uma brecha: nos dois modelos 4.6, a marca só vale se o desenvolvedor não mexer em alguns parâmetros de geração.</p>

    <p>Para quem usa IA para trabalhar, escrever ou vender serviços no Brasil, a história mistura três assuntos que andam juntos: regulação europeia, transparência sobre texto feito por máquina e a pergunta prática de como provar (ou não) que um conteúdo veio de um modelo. Vamos aos fatos, separando o que foi informado do que ainda é dúvida.</p>

    <h2>O que a Anthropic anunciou</h2>
    <p>Segundo o The Decoder, a Anthropic descreve a marca como um "padrão imperceptível na escolha de palavras". A empresa afirma que ela não muda o sentido, a qualidade nem a legibilidade do texto, não acrescenta caracteres ou tokens, não altera preço nem o formato de pedidos e respostas e quase não atrasa a geração. A Anthropic também diz que a marca não contém informação sobre o usuário, a organização dele ou as conversas com o Claude.</p>

    <p>O método é uma variante da abordagem SynthID para texto, do Google DeepMind: em vez de inserir um símbolo, o sistema ajusta de leve a aleatoriedade por trás da escolha de cada palavra, criando um padrão estatístico que um detector consegue reconhecer depois. Quem lê o texto não vê nada. Nós já explicamos a mesma ideia, do lado do Google, na notícia sobre o <a href="/noticias/google-synthid-site-publico-verificar-midia-ia">site público do SynthID para verificar mídia feita por IA</a>.</p>

    <p>A empresa justifica o movimento pelo prazo de dezembro do AI Act, a lei de IA da União Europeia. De acordo com a reportagem, os modelos lançados depois de 2 de agosto de 2026 já saíram com a marca desde o primeiro dia. Como ela é embutida no próprio modelo, vale também quando o Claude é usado pela AWS, pelo Google Cloud e pelo Microsoft Foundry, e o cliente não consegue desligá-la. No Amazon Bedrock, o The Decoder informa que a ativação pode levar alguns dias a mais. A Anthropic mantém ainda uma API de detecção em prévia privada, para verificar se um texto carrega a marca.</p>

    <h2>A brecha dos modelos 4.6</h2>
    <p>Aqui está a parte que merece atenção. No Claude Opus 4.6 e no Claude Sonnet 4.6, a marca só é aplicada quando os parâmetros de amostragem temperature, top_p e top_k estão nos valores padrão. Basta mudar um deles para a marca deixar de ser inserida. O próprio aviso da Anthropic, segundo o The Decoder, recomenda em tradução livre: se você depende da marca d'água para cumprir regras por conta própria, mantenha essas configurações no padrão.</p>

    <p>O e-mail não traz essa ressalva para o Claude Mythos 5 nem para o Claude Opus 4.7. O The Decoder interpreta isso como sinal de que esses dois modelos recebem a marca independentemente das configurações, mas é uma leitura do veículo, não uma confirmação da Anthropic. A reportagem lembra ainda que o Opus 4.6 continua sendo, na avaliação do veículo, o melhor modelo de escrita da empresa, à frente do Opus 5.5, o que torna a brecha relevante: muita gente que escreve com IA justamente prefere esse modelo.</p>

    <p>Vale lembrar o que parâmetros como temperature fazem, em termos simples. Eles controlam o quanto o modelo "arrisca" ao escolher a próxima palavra. Muitas ferramentas e fluxos de trabalho ajustam esses valores para deixar o texto mais criativo ou mais previsível. Ou seja, a brecha pode ser acionada sem querer, apenas por uma configuração de rotina de quem monta um produto em cima da API.</p>

    <h2>Como as outras empresas estão tratando o tema</h2>
    <p>O The Decoder situa o anúncio dentro de um movimento mais amplo. A OpenAI lançou em outubro de 2026 o seu sistema, chamado textGrain, que fica ligado por padrão apenas para usuários do ChatGPT e do Codex na União Europeia; clientes da API no mundo todo podem ativá-lo, mas ele vem desligado. Detalhamos o caso na notícia sobre a <a href="/noticias/openai-marca-dagua-texto-chatgpt-ue">marca d'água invisível no texto do ChatGPT na UE</a>. Já o Google DeepMind abriu o código do SynthID para texto e o integrou aos modelos Gemini.</p>

    <p>Há também críticas. O blogueiro John Gruber argumenta, segundo a reportagem, que dois sinônimos nunca significam exatamente a mesma coisa, de modo que escolher palavras pela chave da marca, e não pelo encaixe de sentido, tende a reduzir a precisão do texto. Já o site Artificial Lawyer aponta riscos para escritórios de advocacia: clientes que proibiram o uso de IA poderiam detectar a marca, e várias marcas sobrepostas em um mesmo documento poderiam gerar complicações.</p>

    <h2>O que isso muda no Brasil</h2>
    <p>O AI Act é uma lei europeia, então ela não obriga ninguém no Brasil diretamente. O efeito indireto, porém, pode ser real: como a marca fica embutida no modelo e não pode ser desativada pelo cliente, ela vale para quem usa esses modelos pelos provedores de nuvem citados. A reportagem não detalha, no entanto, se há diferença por região no caso do Claude, e a Anthropic não comentou isso no trecho divulgado. Também não há, até agora, uma data pública para a API de detecção sair da prévia privada.</p>

    <p>A Anthropic, aliás, segue no centro das atenções neste momento, com o <a href="/noticias/anthropic-protocola-s-1-publico-nasdaq-ant-receita-16-bilhoes">pedido de abertura de capital na Nasdaq</a>, e demonstrar cumprimento de regras de transparência ajuda a empresa a contar uma história de conformidade para investidores e clientes corporativos.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você é freelancer, agência ou empresa que entrega textos feitos com ajuda do Claude, três pontos práticos valem a pena. Primeiro, saiba que o texto gerado por esses modelos pode carregar uma assinatura estatística invisível, que sobrevive a copiar e colar, mas que pode enfraquecer se o texto for muito editado ou traduzido (limitações que a OpenAI, por exemplo, já admitiu para o método dela). Segundo, não use a marca como prova jurídica de que algo foi ou não escrito por IA: ela tem brechas, como a dos modelos 4.6, e detectores dão probabilidades, não certezas. Terceiro, se algum cliente seu proíbe conteúdo de IA, converse antes e combine regras claras, porque a detecção pode se tornar mais comum nos próximos meses.</p>

    <p>Para quem está escolhendo ferramenta, o assunto também entra na conta. Em nosso guia sobre <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">como escolher entre ChatGPT, Claude e Gemini</a>, a qualidade do texto e o custo são os critérios de sempre; agora a transparência sobre conteúdo gerado por IA passa a ser mais um fator. E, se a sua dúvida é saber se dá para confiar em ferramentas que dizem identificar texto de IA, leia também <a href="/artigos/detector-de-texto-de-ia-funciona-ou-nao-como-saber-se-foi-escrito-por-ia">se o detector de texto de IA funciona ou não</a>.</p>

    <h2>O que ainda não se sabe</h2>
    <p>Alguns pontos ficaram em aberto. O e-mail aos clientes não está publicado na íntegra, e o The Decoder informa que a mensagem original não foi linkada. A Anthropic mantém uma página de ajuda sobre como o Claude marca conteúdo gerado por IA, que o veículo cita como fonte primária. Não há, nos dados divulgados, números de taxa de detecção para os modelos da Anthropic, nem comparação com o textGrain ou com o SynthID. Também não se sabe quando a API de detecção sai da prévia privada. Até lá, o uso prático da marca fica restrito a quem tem acesso a esse detector.</p>

    <p>O que se pode afirmar, com base no que foi publicado, é que o mercado de IA generativa caminha para a rotulagem invisível de texto, impulsionado por uma lei europeia, e que a primeira versão dessa rotulagem na Anthropic já nasce com uma brecha que a própria empresa reconhece e documenta.</p>
  `,
  faq: [
    {
      question: "Quais modelos do Claude passam a ter marca d'água no texto?",
      answer:
        "Claude Mythos 5, Claude Opus 4.7, Claude Opus 4.6 e Claude Sonnet 4.6 entram agora. O Claude Opus 5.5 já tinha a marca, segundo o The Decoder.",
    },
    {
      question: "Qual é a brecha da marca d'água do Claude?",
      answer:
        "No Opus 4.6 e no Sonnet 4.6, a marca só vale se temperature, top_p e top_k estiverem no padrão. Mudar qualquer um deles basta para a marca não ser aplicada, e a própria Anthropic avisa isso.",
    },
    {
      question: "Dá para desligar a marca d'água do Claude?",
      answer:
        "Segundo a reportagem, o cliente não consegue desativar a marca, que é embutida no modelo e vale também na AWS, no Google Cloud e no Microsoft Foundry. A exceção prática é a brecha dos modelos 4.6.",
    },
  ],
};
