import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "google-recorre-uniao-europeia-dma-android-ia",
  title: "Google recorre da UE contra ordem que abre Android a IA rival",
  summary:
    "Google pediu à Corte Geral da UE para anular duas ordens da DMA que forçariam o Android a dar acesso a assistentes de IA rivais e compartilhar dados de busca.",
  author: "Bruno Danello",
  sourceName: "Bloomberg / Irish Times",
  sourceUrl: "https://www.irishtimes.com/technology/big-tech/2026/09/29/google-fights-eu-attempt-to-open-android-to-rival-ai/",
  date: "2026-09-29",
  content: `
    <p>O Google pediu à Corte Geral da União Europeia, em Luxemburgo, para anular duas ordens da Comissão Europeia baseadas na Lei de Mercados Digitais (DMA) que forçariam o Android a abrir espaço para assistentes de inteligência artificial concorrentes do Gemini. O recurso foi protocolado nesta terça-feira (29), segundo reportagem do <a href="https://www.irishtimes.com/technology/big-tech/2026/09/29/google-fights-eu-attempt-to-open-android-to-rival-ai/" rel="noopener noreferrer nofollow">Irish Times</a>, que cita também apuração da Bloomberg sobre o caso.</p>

    <p>As duas ordens, emitidas pela Comissão em julho, exigem que o Google permita, em até 12 meses, que usuários do Android ativem por comando de voz um assistente de IA de terceiros no lugar do Gemini, com acesso às mesmas 11 funções do aparelho hoje reservadas ao assistente próprio do Google, como ativação por voz e execução de ações dentro de outros aplicativos. A segunda ordem obriga o Google a compartilhar, a partir de janeiro de 2027, dados anonimizados sobre o que os usuários buscam e clicam no Google Search com mecanismos de busca e chatbots de IA rivais. Oliver Bethell, diretor sênior de concorrência do Google, afirmou que as pessoas usam a busca para "suas perguntas mais pessoais, de preocupações médicas a relacionamentos próximos", e que exigir o compartilhamento dessas consultas sem garantias adequadas "causaria dano irreversível à privacidade do usuário".</p>

    <h2>O que está em jogo na Lei de Mercados Digitais</h2>
    <p>A DMA é a principal ferramenta da União Europeia para forçar interoperabilidade entre as grandes plataformas de tecnologia e seus concorrentes menores, e já resultou em mudanças forçadas na App Store da Apple e no WhatsApp da Meta, entre outros casos. O Google já havia sido multado em US$ 1 bilhão numa ação anterior sob a mesma lei, e a maior parte das big techs afetadas pela DMA recorreu de pelo menos uma decisão da Comissão nos últimos anos. A Comissão Europeia respondeu ao novo recurso do Google dizendo que as medidas "incorporam salvaguardas robustas para garantir que a privacidade dos usuários, a integridade do dispositivo e a segurança sejam protegidas", com um método de anonimização de dados em várias camadas.</p>
    <p>O caso chega num momento em que a corrida por assistentes de IA em celulares já é um dos principais campos de disputa entre big techs: o próprio Google levou meses <a href="/noticias/google-encerra-gemini-gems-migra-skills">reformulando recursos do Gemini</a>, enquanto a Meta tenta empurrar seu Muse para dentro do ecossistema corporativo e a OpenAI expande o ChatGPT para funções de sistema operacional. Ter o Gemini como assistente padrão do Android, sem concorrência de igual acesso a funções do aparelho, é hoje uma vantagem competitiva relevante para o Google, o que explica a resistência à ordem da Comissão.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para quem usa Android no Brasil, essa disputa ainda não muda nada na prática: as ordens da Comissão valem só para o mercado europeu, e o recurso na Justiça deve levar meses, senão anos, para ser decidido. Mas o desfecho do caso tende a virar referência regulatória para outros mercados, inclusive para a discussão do PL 2338 sobre regulação de IA no Congresso brasileiro, porque trata exatamente da pergunta que muitos reguladores fora da Europa também estão fazendo: até que ponto uma big tech pode reservar o próprio assistente de IA como padrão do sistema, sem abrir espaço equivalente para concorrentes.</p>
    <p>Para quem desenvolve ou usa assistentes de IA alternativos ao Gemini no Android (seja um app de terceiros, seja um agente próprio construído sobre outra API), o caso mostra como é difícil competir de igual para igual quando o sistema operacional já vem com um assistente embutido por padrão. Vale usar esse tipo de notícia como lembrete prático: quem monta produto ou fluxo de trabalho em cima de <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">um assistente de IA específico</a> depende também das regras de acesso da plataforma onde ele roda, não só da qualidade do modelo em si.</p>

    <h2>O padrão de resistência das big techs à DMA</h2>
    <p>Recorrer de decisões da DMA já virou rotina entre as grandes plataformas de tecnologia, e o governo dos Estados Unidos, sob a gestão Trump, também vem criticando publicamente a lei europeia como discriminatória contra empresas americanas. Esse embate político soma-se ao jurídico: enquanto o caso do Google tramita na Corte Geral, a Comissão Europeia segue aplicando a DMA a outras frentes, incluindo o processo que resultou no <a href="/noticias/processo-antitruste-anthropic-openai-google-xai-desaceleracao">processo antitruste contra Anthropic, OpenAI, Google e xAI por suposta combinação para desacelerar a IA</a>, o que mostra que a pressão regulatória sobre o setor de inteligência artificial está crescendo em várias frentes ao mesmo tempo, não só na Europa.</p>
    <p>Um ponto sensível do caso é justamente o equilíbrio entre abrir a plataforma para concorrência e proteger dados pessoais dos usuários, tema que também está no centro de discussões sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">privacidade e uso de dados por ferramentas de IA</a>. A Comissão argumenta que o compartilhamento de dados de busca seria anonimizado e cercado de salvaguardas; o Google argumenta que nenhuma anonimização elimina completamente o risco de reidentificação em consultas de busca sensíveis, especialmente sobre saúde ou relacionamentos.</p>

    <h2>O que observar daqui para frente</h2>
    <p>A Corte Geral da UE costuma levar de um a dois anos para julgar recursos desse porte, então não deve haver decisão definitiva antes de 2027 ou 2028, mesmo com o prazo de 12 meses da própria ordem da Comissão em vigor enquanto o processo corre. Isso cria um cenário de incerteza: o Google pode ter que cumprir a ordem provisoriamente enquanto o recurso tramita, dependendo de como a Corte decidir sobre um eventual pedido de suspensão da medida. Vale acompanhar se outras big techs, como a Apple (que já enfrenta processo semelhante sobre acesso de terceiros ao iOS), seguem o mesmo caminho de resistência jurídica ou se alguma delas decide negociar um acordo direto com a Comissão para evitar anos de litígio.</p>
    <p>Do lado brasileiro, o caso reforça um debate que já aparece na Câmara dos Deputados sobre regulação de IA: como equilibrar concorrência entre plataformas e proteção de dados sem travar a inovação. Mesmo sem força legal aqui, decisões da União Europeia costumam influenciar propostas regulatórias em outros países, porque a UE é hoje a jurisdição mais avançada em legislação específica sobre concorrência digital e inteligência artificial.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Resumo rápido</span>
      <p>Google recorreu à Corte Geral da UE contra duas ordens da DMA: uma que obriga o Android a dar acesso a assistentes de IA rivais até 12 meses após julho de 2026, e outra que exige compartilhar dados de busca anonimizados com concorrentes a partir de janeiro de 2027. O Google já foi multado em US$ 1 bilhão em outro caso da mesma lei.</p>
    </div>
  `,
  faq: [
    {
      question: "O que o Google está contestando na Justiça da União Europeia?",
      answer:
        "Duas ordens da Comissão Europeia baseadas na Lei de Mercados Digitais (DMA): uma que obriga o Android a dar acesso equivalente a assistentes de IA rivais do Gemini, e outra que exige compartilhar dados anonimizados de busca com buscadores e chatbots concorrentes.",
    },
    {
      question: "Quando essas ordens entrariam em vigor?",
      answer:
        "O acesso de assistentes de IA rivais ao Android tem prazo de 12 meses a partir de julho de 2026, quando a Comissão emitiu as ordens. O compartilhamento de dados de busca começaria em janeiro de 2027.",
    },
    {
      question: "Isso afeta usuários de Android no Brasil?",
      answer:
        "Não diretamente por enquanto. As ordens da Comissão Europeia valem apenas para o mercado europeu, mas o caso costuma servir de referência para debates regulatórios em outros países, incluindo o Brasil.",
    },
    {
      question: "O Google já foi punido antes por descumprir a DMA?",
      answer:
        "Sim, a empresa já recebeu uma multa de US$ 1 bilhão em um caso anterior julgado sob a mesma lei europeia.",
    },
  ],
};
