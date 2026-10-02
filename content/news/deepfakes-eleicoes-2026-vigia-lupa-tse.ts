import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "deepfakes-eleicoes-2026-vigia-lupa-tse",
  title: "Mesmo proibidos, deepfakes dominam redes na reta final da eleição",
  summary:
    "Levantamento da Lupa e da Unicamp achou 554 deepfakes de candidatos nas redes, 60% de todo conteúdo com IA na campanha, mesmo com a proibição do TSE em vigor.",
  author: "Bruno Danello",
  sourceName: "Agência Brasil",
  sourceUrl:
    "https://agenciabrasil.ebc.com.br/geral/noticia/2026-10/mesmo-proibidos-deepfakes-tomam-conta-das-redes-antes-da-eleicao",
  date: "2026-10-02",
  content: `
    <p>Um levantamento do projeto VigIA, da agência de fact-checking Lupa em parceria com o Laboratório de Inteligência Artificial da Unicamp (Recod.ai), identificou 554 vídeos e imagens do tipo deepfake envolvendo candidatos às Eleições 2026 circulando nas redes sociais durante a campanha do primeiro turno. Segundo reportagem da <a href="https://agenciabrasil.ebc.com.br/geral/noticia/2026-10/mesmo-proibidos-deepfakes-tomam-conta-das-redes-antes-da-eleicao" target="_blank" rel="noopener noreferrer nofollow">Agência Brasil</a> publicada nesta sexta-feira (2), desses conteúdos, 29 foram divulgados diretamente por perfis de candidatos ou partidos, o que pode gerar punição eleitoral direta, já que essas contas têm responsabilidade reforçada sobre o que publicam.</p>
    <p>O número preocupa justamente porque surge depois de a <a href="/noticias/tse-restricao-ia-reta-final-eleicoes-2026">janela de silêncio eleitoral para IA entrar em vigor em 1º de outubro</a>, proibindo qualquer conteúdo sintético novo envolvendo imagem, voz ou fala de candidato até 24 horas após o fim da votação de domingo (4). Mesmo com a regra do TSE em vigor, o fluxo de material manipulado não parou: os pesquisadores analisaram 1.941 publicações políticas suspeitas e encontraram 920 itens gerados ou alterados por IA, dos quais 60% eram deepfakes propriamente ditos, e apenas 371 (40%) vinham com identificação adequada de que haviam sido produzidos por inteligência artificial, como a própria resolução do tribunal exige.</p>

    <h2>Quem aparece mais nos vídeos falsos e por que a fiscalização é difícil</h2>
    <p>O presidente Luiz Inácio Lula da Silva foi o alvo mais recorrente, aparecendo em 379 publicações identificadas pelo VigIA, das quais 39% tinham tom satírico e 34% atacavam diretamente sua candidatura. Flávio Bolsonaro apareceu em 190 publicações, com proporção inversa: 40% de apoio e 28% de humor. Os pesquisadores também mapearam um padrão recorrente de deepfakes simulando jornalistas anunciando notícias fabricadas e celebridades endossando candidatos de forma falsa, dois formatos que exploram a credibilidade de figuras públicas para dar aparência de legitimidade a conteúdo manipulado.</p>
    <p>Segundo a pesquisadora Beatriz Farrugia, uma das responsáveis pelo levantamento, a maior parte desse conteúdo não sai de perfis identificados de candidatos ou partidos, mas de contas anônimas e avatares sem vínculo aparente com campanhas oficiais, o que exige cooperação direta da Justiça Eleitoral com as plataformas para rastrear a origem. Essa dificuldade de atribuição é o mesmo problema que já apareceu em outro episódio investigado pelo Portal da AI, quando testes do <a href="/noticias/its-rio-boca-de-ia-perplexity-recomenda-candidatos-tse">ITS-Rio mostraram a Perplexity recomendando candidatos de forma indevida</a> sem que houvesse um responsável claro e imediato pelo problema, além de reforçar por que o TSE lançou o <a href="/noticias/tse-lanca-chatvote-assistente-ia-eleicoes-2026">ChatVote como canal oficial de informação</a> justamente para competir com esse tipo de desinformação espalhada por fontes não identificadas.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você administra perfis de campanha, redes sociais de marca ou qualquer conta com alcance relevante, o levantamento reforça que a fiscalização do TSE sobre conteúdo sintético continua reativa, baseada em denúncia e investigação posterior, e não bloqueia a publicação no momento em que ela acontece. Isso significa que mesmo com a regra em vigor, a velocidade de circulação de um deepfake nas primeiras horas depois de publicado segue sendo maior do que a capacidade de remoção, o que vale como alerta para quem recebe esse tipo de conteúdo pronto para repassar em grupos de WhatsApp ou redes sociais nos próximos dias antes do fim da votação.</p>
    <p>Para quem usa IA no dia a dia, fora do contexto eleitoral, o episódio é um bom motivo para revisar os sinais mais comuns de manipulação digital antes de compartilhar qualquer vídeo ou áudio que pareça bom demais, estranho demais ou urgente demais para ser verdade. Nosso guia sobre <a href="/artigos/deepfakes-ia-identificar-conteudo-falso-proteger-reputacao">como identificar deepfakes e proteger sua reputação online</a> explica na prática o que observar em expressões faciais, sincronia de áudio e contexto da publicação, e vale repassar justamente agora, no fim de semana de votação, quando o volume de conteúdo compartilhado tende a crescer.</p>

    <h2>Deepfake político e golpe financeiro usam a mesma engrenagem técnica</h2>
    <p>O mecanismo por trás dos deepfakes eleitorais mapeados pelo VigIA é essencialmente o mesmo usado em fraudes financeiras que já geraram perdas bilionárias fora do contexto político, como o golpe de voz clonada que levou um banco italiano a um <a href="/noticias/golpe-voz-ia-banco-italiano-fideuram-95-milhoes">prejuízo de 95 milhões de euros</a> e o esquema de robôs de negociação com voz sintética denunciado pela <a href="/noticias/sec-golpe-ia-trading-bots-whatsapp-15-milhoes">SEC nos Estados Unidos</a>. Em ambos os casos, a mesma tecnologia de clonagem de voz e vídeo barateada nos últimos anos é usada para criar uma falsa sensação de autenticidade, seja para manipular o voto, seja para esvaziar uma conta bancária. A diferença está só no alvo e na motivação, não na ferramenta usada para enganar quem assiste ou escuta o conteúdo.</p>
    <p>Esse paralelo importa porque mostra que o problema não vai desaparecer com o fim da eleição. As mesmas ferramentas de geração de voz e vídeo que alimentam deepfakes de candidatos continuam disponíveis, baratas e cada vez mais convincentes para qualquer outro tipo de golpe, incluindo phishing corporativo, fraude contra idosos e extorsão com imagem manipulada. Empresas e famílias que já se acostumaram a desconfiar de e-mails suspeitos agora precisam estender esse mesmo ceticismo para vídeos e áudios, que até pouco tempo atrás eram tratados como prova quase irrefutável de que algo realmente aconteceu.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Resumo rápido</span>
      <p>554 deepfakes de candidatos achados pelo VigIA (Lupa e Unicamp) durante a campanha do 1º turno. 60% de todo conteúdo com IA analisado era deepfake, e só 40% vinha identificado. Lula foi o alvo mais recorrente, com 379 publicações, seguido por Flávio Bolsonaro, com 190.</p>
    </div>

    <h2>O que observar até o fim do primeiro turno</h2>
    <p>Com a votação marcada para domingo (4), a janela de silêncio eleitoral para IA segue valendo até 24 horas depois do encerramento das urnas, e qualquer novo material sintético publicado nesse intervalo configura infração, independente de identificação. Vale observar se o TSE vai divulgar um balanço oficial comparando o número de denúncias recebidas pelo aplicativo Pardal com os 554 casos identificados de forma independente pelo VigIA, já que a diferença entre os dois números ajuda a medir o tamanho real da lacuna entre o que é denunciado formalmente e o que de fato circula nas redes sem ser notificado à Justiça Eleitoral.</p>
    <p>Também vale acompanhar se a proporção entre deepfakes de ataque e de apoio muda no segundo turno, caso haja, já que o levantamento mostrou que boa parte do conteúdo analisado tinha tom satírico ou humorístico, uma zona cinzenta que nem sempre se encaixa claramente na definição de deepfake enganoso usada pelo TSE. Esse tipo de distinção tende a ficar mais importante conforme a tecnologia de geração de vídeo barateia ainda mais e a linha entre humor político e desinformação deliberada fica cada vez mais difícil de traçar só pela análise do conteúdo em si.</p>
  `,
  faq: [
    {
      question: "Quantos deepfakes de candidatos foram encontrados na campanha?",
      answer:
        "O projeto VigIA, da Lupa em parceria com a Unicamp, identificou 554 vídeos e imagens do tipo deepfake envolvendo candidatos durante a campanha do primeiro turno de 2026, parte de um total de 920 conteúdos gerados ou alterados por IA analisados pela pesquisa.",
    },
    {
      question: "A proibição do TSE para conteúdo com IA está impedindo os deepfakes?",
      answer:
        "Não totalmente. Mesmo com a janela de silêncio eleitoral em vigor desde 1º de outubro, que proíbe qualquer conteúdo sintético novo envolvendo candidatos, o levantamento do VigIA mostra que boa parte do material circula sem identificação adequada e, em geral, vem de contas anônimas difíceis de rastrear.",
    },
    {
      question: "Quem foi mais alvo de deepfakes na campanha, segundo o levantamento?",
      answer:
        "O presidente Luiz Inácio Lula da Silva foi o mais citado, com 379 publicações mapeadas pelo VigIA, seguido por Flávio Bolsonaro, com 190 publicações.",
    },
  ],
};
