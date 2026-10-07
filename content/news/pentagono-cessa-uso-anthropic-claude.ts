import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "pentagono-cessa-uso-anthropic-claude",
  title: "Pentágono confirma fim do uso do Claude, meses após o próprio prazo",
  summary:
    "Oficial do Pentágono disse à BBC que parou de usar a Anthropic, mas fontes afirmam que o Claude ainda era usado na semana passada, inclusive contra o Irã.",
  author: "Bruno Danello",
  sourceName: "BBC",
  sourceUrl: "https://www.yahoo.com/news/politics/articles/pentagon-stops-using-anthropic-ai-161451282.html",
  date: "2026-10-05",
  publishedAt: "2026-10-07T06:30:00-03:00",
  topic: "regulacao",
  imageQuery: "Pentagon building Department of Defense",
  content: `
    <p>O Departamento de Defesa dos Estados Unidos confirmou que parou de usar as ferramentas de inteligência artificial da Anthropic, segundo um oficial do governo ouvido pela <a href="https://www.yahoo.com/news/politics/articles/pentagon-stops-using-anthropic-ai-161451282.html" rel="noopener noreferrer nofollow">BBC</a> nesta segunda-feira (5 de outubro). O comunicado chega quase dois meses depois do prazo de agosto que o próprio Pentágono havia estabelecido para encerrar o uso do Claude, depois de classificar a empresa como "risco à cadeia de suprimentos" em fevereiro.</p>

    <p>A confirmação, porém, veio acompanhada de uma contradição relevante: múltiplas fontes familiarizadas com o assunto disseram à BBC que, até a semana anterior ao anúncio, o Claude ainda estava em uso dentro do Departamento de Defesa para pesquisa, análise e coleta de inteligência, inclusive em operações militares contra o Irã. A Anthropic recusou comentar a declaração do Pentágono.</p>

    <figure>
      <img src="https://upload.wikimedia.org/wikipedia/commons/d/d2/The_Pentagon_US_Department_of_Defense_building.jpg" alt="Vista aérea do edifício do Pentágono, sede do Departamento de Defesa dos EUA" />
      <figcaption>Foto: DoD photo by Master Sgt. Ken Hammond, U.S. Air Force / Wikimedia Commons (domínio público)</figcaption>
    </figure>

    <h2>Como a disputa começou</h2>
    <p>O atrito entre Pentágono e Anthropic não é novo. Em fevereiro, o secretário de Defesa Pete Hegseth classificou a Anthropic como "risco de segurança à cadeia de suprimentos" depois que a empresa se recusou a remover as salvaguardas do Claude para dois usos específicos: vigilância em massa de cidadãos americanos e armas totalmente autônomas. O Pentágono queria acesso irrestrito ao modelo para "todo uso militar legal", sem excepcionalidade nenhuma, e a Anthropic não cedeu. O caso chegou à justiça: a empresa processou o governo americano, chamando a designação de "sem precedentes e ilegal", e um <a href="/noticias/tribunal-mantem-anthropic-risco-cadeia-suprimentos-pentagono">tribunal de apelações manteve parte dessa designação</a> em decisão de 2 a 1 no fim de setembro, mesmo depois de um juiz federal em São Francisco já ter considerado ilegal uma designação paralela usada pelo governo.</p>
    <p>O prazo fixado por Hegseth para o Departamento de Defesa deixar de usar o Claude por completo era agosto. A implementação de fato, segundo o relato ao Pentágono à BBC, só aconteceu agora em outubro, sem explicação oficial para o atraso de quase dois meses. Um dos motivos técnicos apontados por quem acompanha o caso é que o Claude estava integrado ao Maven Smart System, operado pela Palantir e usado como plataforma primária do Pentágono para organizar inteligência militar, o que torna a remoção de um modelo específico mais lenta e arriscada do que um simples cancelamento de contrato.</p>

    <div class="callout-box callout-warn">
      <span class="callout-label">Um contrato de até US$ 200 milhões</span>
      <p>A Anthropic havia assinado um contrato de até US$ 200 milhões com o Pentágono para colocar o Claude na plataforma GenAI.mil do Departamento de Defesa. Depois da designação de risco à cadeia de suprimentos, o governo Trump determinou que todas as agências federais cessassem o uso da tecnologia da empresa, com fase de transição de seis meses para sistemas militares já em operação, prazo que, segundo a confirmação desta semana, só foi cumprido com meses de atraso.</p>
    </div>

    <h2>Por que isso importa para você</h2>
    <p>Para quem usa ou vende IA para empresas e governos no Brasil, o episódio mostra dois lados da mesma moeda: de um lado, decisões regulatórias sobre o uso de IA podem levar meses para virar prática real, mesmo quando anunciadas com data e urgência; de outro, um fornecedor de IA que mantém limites de uso firmes, mesmo sob pressão do maior cliente possível (o governo dos EUA), sinaliza ao mercado que esses limites não são só marketing. Isso é relevante para quem avalia fornecedores de IA para uso corporativo sensível: vale perguntar, antes de contratar, que tipo de restrição de uso o fornecedor realmente aplica, e não apenas o que promete em contrato.</p>
    <p>O caso também é um lembrete de como a disputa entre empresas de IA e o governo americano por contratos bilionários tem moldado, cada vez mais, quem ganha acesso a verbas públicas de infraestrutura de IA. Já cobrimos como o <a href="/noticias/pentagono-emprestimo-5-bilhoes-fluidstack">Pentágono negocia empréstimo de US$ 5 bilhões para outra startup de nuvem de IA</a> e como, apesar da resistência institucional, o uso de IA generativa já é disseminado dentro do próprio governo americano: um <a href="/noticias/pentagono-meio-milhao-pessoas-dia-ia-senado-proibido">levantamento recente mostrou meio milhão de pessoas usando ferramentas de IA por dia</a> em agências federais que o Senado dos EUA nem sequer tem acesso para fiscalizar de perto.</p>

    <h2>O que muda (e o que não muda) na prática militar</h2>
    <p>Mesmo com a confirmação pública de que o Claude saiu do Departamento de Defesa, o relato da BBC de que o modelo ainda era usado na semana anterior ao anúncio, inclusive em operações contra o Irã, levanta dúvida sobre o que de fato aconteceu: uma transição técnica real e recém-concluída, ou um anúncio político feito antes da migração estar completa. Substitutos mencionados por quem acompanha o caso incluem o Grok, da xAI, para ambientes classificados, e outros modelos para uso não classificado, mas trocar o modelo de IA que sustenta um sistema de inteligência militar em operação não é trivial, nem rápido, mesmo quando a ordem vem direto da Casa Branca.</p>
    <p>O episódio também chega num momento em que a própria Anthropic prepara seu <a href="/noticias/anthropic-ipo-mira-meados-novembro-bloomberg">IPO para meados de novembro</a>, o que torna a relação (ou a falta dela) com o maior cliente de tecnologia do mundo, o governo dos Estados Unidos, um dado relevante para investidores avaliando o apetite de risco da empresa diante de pressão política.</p>

    <h2>O que observar daqui para frente</h2>
    <p>Vale acompanhar três pontos. Primeiro, se a Anthropic vai comentar publicamente a versão do Pentágono, já que até agora preferiu o silêncio. Segundo, se outros órgãos do governo americano, além do Departamento de Defesa, também vão formalizar o fim do uso do Claude dentro do prazo determinado por Trump em fevereiro. Terceiro, se a disputa judicial em curso, com decisões divididas entre dois tribunais federais diferentes, chega a uma resolução única nos próximos meses, o que teria peso sobre como o próprio governo americano trata fornecedores de IA que recusam remover salvaguardas de segurança.</p>
  `,
  faq: [
    {
      question: "O Pentágono realmente parou de usar o Claude, da Anthropic?",
      answer:
        "Um oficial do Departamento de Defesa confirmou à BBC que o uso cessou, mas múltiplas fontes disseram que o modelo ainda estava em uso na semana anterior ao anúncio, inclusive em operações militares contra o Irã, o que gera dúvida sobre se a transição já estava de fato concluída.",
    },
    {
      question: "Por que o Pentágono quis deixar de usar o Claude?",
      answer:
        "Depois que a Anthropic se recusou a remover salvaguardas do Claude contra vigilância em massa de cidadãos americanos e armas totalmente autônomas, o secretário de Defesa Pete Hegseth classificou a empresa como 'risco à cadeia de suprimentos' em fevereiro de 2026, com prazo de agosto para o Departamento de Defesa deixar de usar o modelo por completo.",
    },
    {
      question: "A Anthropic concorda com essa decisão?",
      answer:
        "Não. A empresa chamou a designação de risco de 'sem precedentes e ilegal' e processou o governo americano. Um tribunal de apelações manteve parte da designação em setembro, mas outra designação paralela já havia sido considerada ilegal por um juiz federal diferente, deixando o caso juridicamente dividido.",
    },
  ],
};
