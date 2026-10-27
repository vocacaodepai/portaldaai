import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "elvis-presley-herdeiros-processam-anthropic-274-musicas",
  title: "Donos do catálogo de Elvis Presley processam a Anthropic por 274 músicas",
  summary:
    "A Authentic Brands Group acusa a Anthropic de treinar o Claude com 274 músicas de Elvis sem licença e pede cerca de US$ 41 milhões em indenização.",
  author: "Bruno Danello",
  sourceName: "The Guardian",
  sourceUrl: "https://www.theguardian.com/us-news/2026/oct/25/elvis-presley-anthropic-lawsuit-ai-models-music",
  date: "2026-10-26",
  publishedAt: "2026-10-26T00:40:00-03:00",
  topic: "regulacao",
  imageQuery: "Elvis Presley portrait",
  content: `
    <p>A Authentic Brands Group, empresa de licenciamento que controla tanto o catálogo musical quanto a imagem de Elvis Presley, abriu um processo contra a Anthropic, dona do Claude. A ação, protocolada na sexta-feira (23 de outubro) e revelada primeiro pela Billboard, acusa a empresa de usar 274 músicas do Rei do Rock para treinar seus modelos de IA sem permissão. A informação consta na <a href="https://www.theguardian.com/us-news/2026/oct/25/elvis-presley-anthropic-lawsuit-ai-models-music" rel="noopener noreferrer nofollow">reportagem do The Guardian</a>, publicada neste domingo (25 de outubro), e foi repercutida por veículos como a Rolling Stone, a NBC News e o Hollywood Reporter.</p>

    <p>O caso chama atenção por um motivo específico. Segundo o Guardian, é um dos primeiros grandes processos movidos diretamente pelos donos do espólio de um artista contra uma desenvolvedora de IA. Até aqui, a maior parte das ações musicais contra empresas do setor partia de associações da indústria, como a RIAA, ou de gravadoras e editoras como Sony, Universal e Warner.</p>

    <h2>O que a ação alega</h2>
    <p>De acordo com a reportagem, a Authentic Brands Group afirma que a Anthropic infringiu os direitos de 274 músicas de Elvis, entre elas "Can't Help Falling in Love", "All Shook Up" e "A Little Less Conversation". O advogado principal dos autores, Richard Busch, escreveu na petição que os donos do catálogo querem fazer valer seus direitos exclusivos contra uma empresa que, nas palavras da ação, "construiu todo o seu modelo de negócio sobre violação de direitos autorais em uma escala nunca vista".</p>

    <p>A petição faz duas acusações diferentes, e vale separá-las:</p>
    <ul>
      <li><strong>Treinamento:</strong> a Anthropic teria usado as 274 músicas para treinar o Claude sem licença.</li>
      <li><strong>Saída do modelo:</strong> o Claude teria gerado, desde o início, resultados que reproduzem material protegido de "virtualmente todas as músicas de todos os catálogos disponíveis na internet", segundo o texto citado pelo Guardian.</li>
    </ul>
    <p>Os autores também afirmam que a Anthropic criou barreiras de proteção, ainda que ineficazes, para limitar respostas que violam direitos musicais depois de ser pega. Para eles, o fato de a empresa saber que essas barreiras não funcionavam mostra que ela "se envolveu conscientemente e continua a se envolver de forma deliberada" na violação.</p>

    <h2>Quanto eles pedem</h2>
    <p>A ação pede US$ 150 mil por faixa supostamente violada. Multiplicado pelas 274 músicas, o total chega a cerca de US$ 41 milhões. Em ações de direitos autorais nos Estados Unidos, esse é o valor máximo de indenização por obra em casos de violação intencional.</p>

    <table>
      <thead>
        <tr><th>Item</th><th>O que consta na ação</th></tr>
      </thead>
      <tbody>
        <tr><td>Autora</td><td>Authentic Brands Group (música e imagem de Elvis Presley)</td></tr>
        <tr><td>Ré</td><td>Anthropic (Claude)</td></tr>
        <tr><td>Músicas citadas</td><td>274, incluindo "Can't Help Falling in Love" e "All Shook Up"</td></tr>
        <tr><td>Indenização pedida</td><td>US$ 150 mil por faixa, cerca de US$ 41 milhões no total</td></tr>
        <tr><td>Protocolada em</td><td>Sexta-feira, 23 de outubro de 2026</td></tr>
      </tbody>
    </table>

    <p>Até a publicação, a reportagem consultada não traz uma resposta da Anthropic a esta ação específica. Em processos anteriores de editoras musicais, a empresa disse que defenderia seus interesses "vigorosamente" e sustentou que o treinamento de IA com material protegido é uso justo (fair use). Esse argumento ainda não foi definitivamente decidido pela Justiça americana.</p>

    <h2>Mais um capítulo de uma disputa que não para</h2>
    <p>A Anthropic já enfrenta outras ações do setor musical. Em agosto, a Sony Music e a Warner Chappell a processaram, como o Portal da AI mostrou em <a href="/noticias/sony-warner-processam-anthropic-direitos-autorais">Sony Music e Warner Chappell processam a Anthropic</a>, e editoras como Universal, Concord e ABKCO movem ações desde 2023. A questão central é a mesma em todas: treinar um modelo de IA com obras protegidas, sem pedir licença, é legal?</p>
    <p>Nos Estados Unidos, as respostas vêm em pedaços e nem sempre apontam para o mesmo lado. Um panorama de decisões recentes está em <a href="/noticias/justica-eua-ia-copyright-fair-use-westlaw">Justiça dos EUA, IA, direitos autorais e fair use</a>. A diferença do caso de Elvis é que quem processa não é uma gravadora, e sim a empresa que cuida do nome, da imagem e da obra de um artista, o que acrescenta o debate sobre uso de identidade e voz.</p>
    <p>O Guardian lembra ainda que músicos reclamam do uso de suas obras e vozes sem autorização e temem que a música gerada em massa por IA, a chamada "slop", ocupe o lugar das faixas feitas por pessoas. Na semana passada, segundo a reportagem, o Spotify disse ter removido das recomendações cerca de 50 milhões de faixas consideradas lixo de IA ao longo do último ano.</p>

    <h2>O que ainda não se sabe</h2>
    <p>Uma ação protocolada é uma acusação, não uma decisão. A Anthropic ainda deve apresentar sua defesa, e o processo pode levar meses ou anos até uma sentença. Também não está claro, pelo que foi divulgado, quais provas os autores têm de que cada uma das 274 músicas entrou de fato no treinamento, nem se o caso será unido a outros processos musicais já em andamento. Quem acompanha o tema deve tratar os valores como pedido inicial dos autores, e não como estimativa de condenação.</p>

    <h2>Por que isso importa para você</h2>
    <p>Quem usa IA para criar conteúdo, vender serviços ou montar produtos digitais precisa entender que o debate sobre direitos autorais está longe de resolvido. O resultado dessas ações pode mudar quais ferramentas continuam disponíveis, em que condições e a que preço, principalmente as que geram música, letra e voz.</p>
    <p>Na prática, algumas atitudes reduzem o risco no seu trabalho:</p>
    <ul>
      <li>Não peça a uma IA para escrever ou imitar letras, melodias ou vozes de artistas conhecidos em material que você vai publicar ou vender.</li>
      <li>Leia os termos de uso da ferramenta: alguns planos comerciais dizem quem responde se houver reclamação sobre o resultado.</li>
      <li>Guarde o prompt e a data de geração de tudo que você entregar a clientes, para mostrar como o material foi criado.</li>
      <li>Para música de fundo em vídeos e anúncios, prefira bibliotecas com licença clara ou ferramentas que declarem o catálogo licenciado.</li>
    </ul>
    <p>Para se aprofundar, veja <a href="/artigos/ia-e-direitos-autorais-o-que-criadores-precisam-saber">IA e direitos autorais: o que criadores precisam saber</a>, o comparativo <a href="/artigos/melhor-ia-para-criar-musica-com-letra-em-portugues">melhor IA para criar música com letra em português</a> e o checklist <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">como escolher uma ferramenta de IA com segurança</a>. Se você usa o Claude no trabalho, o guia <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini: qual IA escolher</a> ajuda a comparar as opções.</p>
  `,
};
