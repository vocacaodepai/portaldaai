import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "openai-abre-avaliacoes-seguranca-terceiros-durante-treinamento",
  title: "OpenAI vai deixar grupos independentes avaliarem segurança de seus modelos ainda durante o treinamento",
  author: "Bruno Danello",
  summary:
    "A empresa anunciou que passará a permitir avaliações técnicas de segurança por organizações externas durante o treinamento e a avaliação de novos modelos, e não apenas perto do lançamento como era o padrão até agora.",
  sourceName: "OpenAI",
  sourceUrl: "https://openai.com/index/strengthening-safety-with-external-testing/",
  date: "2026-09-22",
  content: `
    <p>A OpenAI anunciou em 22 de setembro que passará a permitir que grupos externos conduzam avaliações técnicas de segurança de seus modelos ao longo de todo o ciclo de desenvolvimento — durante o treinamento, a avaliação e a implantação — e não apenas nos testes que costumam acontecer perto do lançamento, como era prática padrão até então.</p>

    <p>Segundo a empresa, o objetivo é dar a avaliadores independentes acesso profundo o suficiente para questionar premissas internas, identificar riscos que a própria equipe pode ter deixado passar e chegar a conclusões próprias sobre a eficácia das salvaguardas de segurança. A OpenAI diz estar em conversas com organizações como METR e Redwood Research, embora ainda não tenha confirmado publicamente parceiros nem os termos exatos de acesso.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">O que muda na prática</span>
      <p>Até agora, avaliações externas de segurança costumavam acontecer só nos testes finais antes de um modelo ir ao ar. A mudança antecipa esse escrutínio para as fases de treinamento e avaliação, quando ainda é mais fácil corrigir um problema antes que ele chegue ao produto final.</p>
    </div>

    <h2>Por que isso importa</h2>
    <p>A decisão chega no mesmo dia em que a OpenAI e a Anthropic travaram uma nova rodada da guerra de preços entre modelos, com o lançamento do GPT-6 Sol e do GPT-6 Luna logo depois do Claude Opus 5.5 — um lembrete de que a corrida por modelos mais baratos e rápidos segue lado a lado com a pressão por mecanismos de verificação independente, tema que já tratamos em nosso <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist de como escolher ferramentas de IA com segurança</a>.</p>
  `,
};
