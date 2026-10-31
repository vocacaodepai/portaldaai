import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-openai-google-microsoft-sinal-unico-robots-txt-bloquear-treino",
  title: "Gigantes da IA aceitam um sinal único no robots.txt para recusar treino",
  summary:
    "OpenAI, Google, Microsoft e Anthropic dizem que vão respeitar um token no robots.txt, proposto no IETF, para sites barrarem o treino de IA de uma só vez.",
  author: "Bruno Danello",
  sourceName: "The Verge",
  sourceUrl:
    "https://www.theverge.com/tech/1023763/openai-google-microsoft-ai-scraping-standard-opt-out",
  date: "2026-10-31",
  publishedAt: "2026-10-31T01:30:00-03:00",
  topic: "regulacao",
  imageQuery: "robots.txt",
  content: `
    <p>OpenAI, Google, Microsoft e Anthropic disseram que vão adotar um novo padrão para que sites recusem o uso de seu conteúdo por inteligência artificial. Em vez de configurar a preferência separadamente para cada empresa, o dono do site poderá usar um único sinal, chamado de "token de política", que as quatro se comprometeram a respeitar. A informação foi publicada pelo The Verge nesta sexta-feira (30), com base em reportagem anterior do Search Engine Roundtable.</p>
    <p>O sinal foi proposto por Kevin Kelley, líder técnico de padrões da Anthropic, dentro do IETF, a entidade que define normas técnicas da internet. Ele ficará no arquivo robots.txt, aquele que há décadas diz a robôs de busca, de arquivamento e de treino de IA o que podem ou não rastrear em um site.</p>

    <h2>O que muda na prática</h2>
    <p>Hoje, quem quer impedir que seu texto, suas fotos ou seu catálogo sirvam para treinar modelos precisa conhecer o nome do robô de cada empresa e bloquear um por um. Cada nova empresa ou novo rastreador exige uma nova linha no arquivo. O token compartilhado muda essa lógica: o site declara a preferência uma vez, e todos os rastreadores de IA que adotaram o padrão passam a obedecer.</p>
    <p>Segundo a reportagem, OpenAI, Google, Microsoft e Anthropic afirmam que vão impedir que seus rastreadores de IA acessem um site quando encontrarem o token. A Anthropic já adotou o sinal. Google e Microsoft pretendem passar a respeitá-lo no ano que vem, e a OpenAI diz que fará isso nos "próximos meses". Ou seja, a promessa é firme, mas a proteção completa ainda não está valendo em todas as empresas.</p>

    <h2>Microsoft promete controles mais finos</h2>
    <p>A Microsoft informou que vai oferecer controles mais granulares, que permitirão ao editor recusar o treino de modelos ou o chamado grounding, que é o processo de apontar um modelo para uma fonte verificada de informação para reduzir erros e invenções. A empresa ressalta que os sites continuarão aparecendo nos resultados de busca do Bing, independentemente da preferência escolhida.</p>
    <p>O Google, segundo o texto, já tinha controles parecidos, que deixam o site decidir se seu conteúdo aparece nos recursos de busca com IA ou se serve para treino, sem perder visibilidade na busca tradicional. A diferença agora é o sinal comum entre empresas concorrentes.</p>

    <h2>E a Meta?</h2>
    <p>A Meta não está entre as quatro que prometeram obedecer ao token, mas o chefe de comunicação, Andy Stone, sinalizou apoio à ideia. Ele disse acreditar que criar um sinal comum que transmita essas preferências a vários provedores de uma só vez é um passo importante, e que a empresa pretende trabalhar com outras companhias de IA nos padrões e na implementação. Stone não afirmou, porém, se a Meta vai de fato respeitar o token. A diferença entre apoiar a ideia e obedecer ao sinal é justamente o ponto que os editores vão acompanhar.</p>

    <h2>Por que isso aparece agora</h2>
    <p>O anúncio chega num momento em que editores e donos de sites reclamam do volume de robôs de IA que visitam suas páginas e alimentam modelos com o conteúdo. Outras iniciativas já tentaram responder a isso. O padrão Really Simple Licensing (RSL) dá ao editor a possibilidade de cobrar dos rastreadores que visitam o site, e a Cloudflare passou a bloquear rastreadores de IA por padrão. O token do IETF é uma abordagem diferente: não cobra nem bloqueia por tecnologia de rede, apenas dá um aviso padronizado que as empresas se comprometem a seguir.</p>
    <p>Esse limite importa. O robots.txt sempre foi um pedido, não uma barreira técnica. Quem respeita o arquivo, respeita; quem não respeita, pode ignorá-lo. O avanço do token está em que as maiores empresas de IA do mundo se comprometeram publicamente a obedecer, o que cria uma cobrança concreta caso alguém descumpra.</p>

    <h2>Treino é uma coisa, resposta em tempo real é outra</h2>
    <p>Vale separar dois usos que costumam ser misturados. Um é o treino, quando o conteúdo ajuda a construir o modelo. Outro é a busca na hora da pergunta, quando o assistente lê páginas para montar a resposta. A discussão jurídica trata os dois de forma diferente, como mostra o parecer da Wikimedia, que defende que treinar é provavelmente uso justo e que copiar sites para responder não é, em <a href="/noticias/wikimedia-amicus-openai-nyt-treino-justo-rag-nao">Wikimedia diz à Justiça: treinar IA é uso justo, chatbot copiar site não</a>. A reportagem não detalha, no trecho aberto, como o token trata cada um desses usos além do treino e do grounding citados pela Microsoft, e esse é um ponto a observar quando o texto do padrão for publicado em versão final.</p>
    <p>O tema também se conecta a outras decisões das empresas sobre dados de terceiros. A OpenAI, por exemplo, anunciou que passaria a treinar modelos com uma cópia da web em vez de navegar ao vivo, assunto de <a href="/noticias/openai-treinar-modelos-sem-internet-ao-vivo-copia-da-web">OpenAI vai treinar modelos sem internet ao vivo</a>. Já o controle de quem pode entrar num site aparece também na cobertura sobre <a href="/noticias/agentes-ia-bloqueados-sites-comercio">agentes de IA bloqueados em sites de comércio</a> e na que trata de <a href="/noticias/cloudflare-monetization-gateway-pagamento-agentes-ia">cobrança de agentes de IA pela Cloudflare</a>. E a prática de empresas mudarem regras de raspagem nos próprios termos foi tema em <a href="/noticias/meta-remove-trecho-termos-raspagem-treino-ia">Meta remove trecho dos termos sobre raspagem para treino</a>.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você tem blog, loja virtual, canal com site, newsletter ou qualquer página que produza conteúdo, o robots.txt do seu site passa a ser uma ferramenta de decisão de negócio. Quando o padrão estiver valendo, será possível dizer de uma vez que seu material não serve para treino de IA, sem depender de lembrar o nome de cada robô. Isso protege texto autoral, mas também tem custo: quem bloqueia pode reduzir a chance de ser citado ou lembrado por assistentes de IA, o que afeta quem depende de tráfego vindo desses canais.</p>
    <p>Para quem usa IA no trabalho, a notícia indica que o acesso a conteúdo da web tende a ficar mais regulado por sinais claros, e não só por processos na Justiça. Para quem vende serviços de conteúdo e SEO, abre uma nova camada de consultoria: configurar a política de IA do cliente com cuidado, escolhendo o que liberar e o que recusar. Para quem monta automações que raspam páginas, vale conferir o robots.txt do site antes de coletar dados, porque o padrão deve se tornar a referência do que é aceitável. Se você ainda está decidindo qual assistente usar no dia a dia, o guia <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini: qual IA escolher</a> ajuda a comparar as opções.</p>

    <h2>O que acompanhar</h2>
    <p>Há três pontos em aberto. O primeiro é o calendário: a Anthropic já adotou o sinal, mas Google e Microsoft só devem passar a respeitá-lo no ano que vem, e a OpenAI fala em "próximos meses", sem data. O segundo é a Meta, que apoiou a ideia sem se comprometer a obedecer. O terceiro é a aceitação do padrão pelo próprio IETF, já que o sinal foi apresentado como proposta dentro do órgão e o texto final pode mudar. Enquanto isso, o caminho mais seguro para o dono de site continua sendo bloquear os robôs conhecidos individualmente, e acompanhar quando o token passar a valer de fato em cada empresa. A promessa conjunta é um sinal positivo, mas só a prática de cada rastreador, nos próximos meses, vai mostrar se o aviso padronizado funciona.</p>
  `,
};
