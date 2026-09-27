import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "brecha-base-principal-orgaos-federais-eua-driblam-supervisao-ia",
  title: "Prazo de conformidade em IA do governo dos EUA vira alvo de crítica por 'brecha' que esvazia a fiscalização",
  author: "Bruno Danello",
  summary:
    "Hoje, 22 de setembro, venceu o prazo para órgãos federais americanos reportarem como estão cumprindo as regras de segurança da OMB para sistemas de IA de 'alto impacto'. Uma reportagem mostra como o Departamento de Segurança Interna (DHS) usa uma interpretação da própria norma para escapar das exigências mais rígidas.",
  sourceName: "Forkast",
  sourceUrl: "https://forkast.news/the-principal-basis-loophole-how-dhs-evades-ai-oversight-2/",
  date: "2026-09-22",
  content: `
    <p>Hoje, 22 de setembro, é o prazo final para que agências do governo federal dos Estados Unidos comprovem que estão cumprindo as regras mínimas de gestão de risco para sistemas de IA classificados como "alto impacto" — exigência criada pelo memorando OMB M-25-21, do Escritório de Administração e Orçamento da Casa Branca. Uma reportagem publicada hoje mostra como pelo menos um órgão, o Departamento de Segurança Interna (DHS), encontrou uma forma de escapar da parte mais rígida dessa fiscalização.</p>

    <h2>Como funciona a "brecha da base principal"</h2>
    <p>A norma define como "alto impacto" qualquer sistema de IA cuja saída sirva de "base principal" para decisões com efeito legal, material ou significativo sobre direitos ou segurança de uma pessoa. O DHS argumenta que, se um humano participa da decisão final — mesmo que só carimbando o que a IA recomendou — a saída do sistema deixa de ser considerada "base principal", e o órgão fica livre das exigências mais pesadas: testes prévios, avaliação de impacto, supervisão humana adequada e mecanismos de recurso para quem for afetado.</p>

    <div class="callout-box callout-warn">
      <span class="callout-label">Por que isso importa</span>
      <p>Essa interpretação permite manter a aparência de controle humano sobre a decisão, enquanto na prática o peso real da escolha continua vindo de um algoritmo pouco transparente — em decisões que podem afetar diretamente direitos e segurança de pessoas comuns.</p>
    </div>

    <h2>Um prazo que já nasce sem página oficial</h2>
    <p>Reforçando a fragilidade do processo, a própria página da Casa Branca que hospedava o texto do memorando M-25-21 está retornando erro 404 no dia em que o prazo de conformidade vence — um detalhe simbólico que a reportagem usa para ilustrar o estado atual da supervisão federal sobre IA nos EUA.</p>

    <h2>Por que isso importa mesmo fora dos EUA</h2>
    <p>O episódio é um lembrete de um problema que não é exclusivo do governo americano: regras bem escritas sobre uso responsável de IA podem ser esvaziadas por interpretações técnicas quando não há fiscalização rigorosa por trás. Para quem acompanha o avanço de <a href="/artigos/agentes-de-ia-o-futuro-do-trabalho-autonomo-explicado">agentes de IA autônomos</a> tomando decisões cada vez mais complexas, o caso reforça por que supervisão humana de verdade — não apenas formal — segue sendo um ponto central da discussão sobre uso responsável de inteligência artificial.</p>
  `,
};
