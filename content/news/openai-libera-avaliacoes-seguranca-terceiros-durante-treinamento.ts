import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "openai-libera-avaliacoes-seguranca-terceiros-durante-treinamento",
  title: "OpenAI vai permitir que terceiros avaliem segurança de modelos já durante o treinamento",
  author: "Bruno Danello",
  summary:
    "A empresa está em conversas com organizações independentes como METR e Redwood Research para conduzir avaliações técnicas de segurança ao longo de todo o ciclo de desenvolvimento — não mais só na revisão final antes do lançamento —, priorizando análise de salvaguardas críticas, avaliações de capacidade e investigação independente de incidentes de desalinhamento.",
  sourceName: "Bloomberg",
  sourceUrl: "https://www.bloomberg.com/news/articles/2026-09-22/openai-to-let-outside-groups-evaluate-ai-models-at-earlier-phase",
  date: "2026-09-22",
  content: `
    <p>A OpenAI anunciou que vai abrir avaliações técnicas de segurança de seus modelos a organizações externas ao longo de todo o ciclo de desenvolvimento — treinamento, avaliação e implantação —, ampliando o que até agora era, em grande parte, uma revisão concentrada apenas na fase final, antes do lançamento. A empresa confirmou estar em conversas com a METR e a Redwood Research, duas organizações independentes que já avaliam capacidades e riscos de modelos de fronteira.</p>

    <p>Segundo a OpenAI, a iniciativa vai priorizar quatro áreas: avaliação de casos de segurança que abrangem tanto o treinamento quanto a implantação, revisão de salvaguardas consideradas críticas, análise de avaliações de capacidade ligadas ao seu Preparedness Framework, e investigação independente de incidentes de comportamento desalinhado. A empresa afirma que as avaliações devem seguir princípios de independência, rigor científico, práticas de segurança robustas e responsabilidades bem definidas.</p>

    <div class="callout-box callout-ok">
      <span class="callout-label">Detectar riscos mais cedo</span>
      <p>Segundo a OpenAI, avaliações independentes ao longo de todo o desenvolvimento — e não só no fim — podem permitir detectar riscos de alinhamento, segurança e uso indevido mais cedo no ciclo de vida do modelo, evitando que problemas cheguem à fase de implantação. A empresa prevê revisões concorrentes em cronogramas variados, de algumas semanas a vários meses.</p>
    </div>

    <h2>Mais transparência, sob pressão crescente</h2>
    <p>O anúncio acontece num momento em que laboratórios de IA enfrentam pressão crescente por mais transparência sobre como avaliam a segurança de seus próprios modelos antes de lançá-los ao público — um tema que já discutimos por aqui em relação a incidentes de comportamento inesperado em agentes de IA. Para quem quer entender melhor os termos técnicos por trás desse tipo de avaliação, vale conferir nosso <a href="/artigos/dicionario-de-inteligencia-artificial-termos-essenciais">dicionário de inteligência artificial</a>.</p>
  `,
};
