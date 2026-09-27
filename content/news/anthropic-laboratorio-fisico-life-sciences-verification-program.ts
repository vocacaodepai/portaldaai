import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-laboratorio-fisico-life-sciences-verification-program",
  title: "Anthropic confirma laboratório físico de biologia e abre programa para pesquisadores usarem o Claude sem as restrições padrão",
  author: "Bruno Danello",
  summary:
    "A empresa por trás do Claude confirmou que opera um laboratório 'wet lab' na Bay Area, onde o modelo chega a dirigir protocolos robóticos de experimentos reais, e abriu inscrições para o Life Sciences Verification Program, que libera usos hoje bloqueados no Claude padrão para instituições de pesquisa verificadas.",
  sourceName: "Anthropic",
  sourceUrl: "https://www.anthropic.com/news/life-sciences-verification-program",
  date: "2026-09-17",
  content: `
    <p>A Anthropic confirmou que opera um laboratório físico de biologia — um "wet lab", no jargão da área — na região da Baía de São Francisco, onde o Claude não só sugere hipóteses científicas como chega a dirigir protocolos robóticos que executam experimentos reais. Junto com essa confirmação, a empresa abriu inscrições para o Life Sciences Verification Program (LSVP), um programa que libera para instituições de pesquisa verificadas uma série de usos hoje bloqueados na versão padrão do Claude.</p>

    <h2>Por que o modelo tem restrições nessa área</h2>
    <p>Tarefas como pesquisa em descoberta de fármacos, biologia experimental, desenvolvimento clínico e manufatura biológica esbarram em bloqueios de segurança do Claude, criados justamente para evitar uso indevido em contextos sensíveis — como o mau uso de conhecimento biológico avançado. O LSVP existe para abrir uma exceção controlada: cada instituição que se inscreve passa por uma verificação que avalia credenciais de pesquisa, padrões de segurança da instituição e supervisão ética do trabalho.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">O que muda na prática</span>
      <p>Segundo Eric Kauderer-Abrams, chefe da área de ciências da vida da Anthropic, o teste final de qualquer hipótese em biologia "ainda é, e vai continuar sendo por um bom tempo, o trabalho de laboratório real" — por isso a empresa decidiu integrar verticalmente até a execução física dos experimentos, não só a parte de análise e sugestão de hipóteses.</p>
    </div>

    <h2>Uma aposta que já vinha sendo construída</h2>
    <p>O laboratório físico não surgiu do zero: a Anthropic adquiriu em abril a startup de biotecnologia em modo furtivo Coefficient Bio, por cerca de US$ 400 milhões — movimento que, visto em retrospecto, já sinalizava a intenção de ir além do software e assumir também a ponta de execução física da pesquisa científica.</p>

    <h2>Por que isso importa para quem acompanha IA aplicada</h2>
    <p>O caso ilustra um padrão que deve se repetir em outras áreas sensíveis: em vez de manter restrições genéricas para todo mundo, empresas de IA criam programas de acesso verificado que liberam capacidades mais avançadas só para quem comprova credenciais e supervisão adequada. Para profissionais e empresas de setores regulados, entender que esse tipo de acesso "sob verificação" existe pode ser o caminho para aproveitar capacidades de IA que o público geral ainda não tem acesso.</p>
  `,
};
