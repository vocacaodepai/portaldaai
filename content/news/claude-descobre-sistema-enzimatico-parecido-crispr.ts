import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "claude-descobre-sistema-enzimatico-parecido-crispr",
  title: "Anthropic diz que o Claude descobriu sozinho um sistema enzimático parecido com o CRISPR",
  author: "Bruno Danello",
  summary:
    "Em 21 horas, 950 agentes do Claude vasculharam o DNA de bacteriófagos e identificaram um sistema enzimático até então desconhecido pela ciência, com repetições organizadas que lembram o mecanismo por trás da edição genética CRISPR — primeiro resultado do novo laboratório de ciências da vida da Anthropic.",
  sourceName: "Anthropic",
  sourceUrl: "https://www.anthropic.com/news/claude-discovers-novel-enzyme-system",
  date: "2026-09-23",
  content: `
    <p>A Anthropic anunciou um novo grupo de pesquisa e um laboratório próprio de ciências da vida, na Bay Area, e já apresentou o primeiro resultado: o Claude identificou sozinho um sistema enzimático inédito, batizado de ART (transcriptases reversas associadas a arranjos), encontrado principalmente em bacteriófagos — os vírus que infectam bactérias.</p>

    <p>O sistema é formado por uma enzima RT, um gene parceiro ao lado dela e um longo arranjo de sequências de DNA repetidas em intervalos regulares — uma organização que lembra os arranjos usados pelo sistema CRISPR, hoje a base de boa parte da edição genética moderna. Para chegar a esse resultado, a Anthropic colocou 950 agentes do Claude para vasculhar cerca de 200 mil enzimas em bancos de dados genômicos por 21 horas seguidas.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Como o Claude "percebeu" o padrão</span>
      <p>Ao analisar a sequência de DNA ao lado da enzima RT, o próprio agente registrou em seu raciocínio: "o DNA ao lado do RT é espetacular: consigo ver a olho nu um arranjo de repetições em série... isso é um arranjo de repetições parecido com CRISPR?!". Em seguida, ele contou as repetições, mediu o espaçamento entre elas, comparou com sistemas de RT já conhecidos e buscou na literatura científica se o padrão já havia sido descrito antes de registrar um relatório para revisão humana.</p>
    </div>

    <h2>Cientistas humanos continuam no comando dos experimentos</h2>
    <p>Segundo a Anthropic, todos os experimentos de bancada do novo laboratório são conduzidos por cientistas humanos — o Claude é usado para buscar em bases de dados genômicos, gerar hipóteses, analisar candidatos e ajudar a interpretar resultados experimentais, mas a função do sistema ART ainda é desconhecida e precisa ser validada em laboratório. Ainda assim, o caso se soma a outros indícios recentes de que modelos de IA já conseguem contribuir de forma autônoma para pesquisa científica original, um tema que também aparece em nosso guia sobre o avanço dos <a href="/artigos/agentes-de-ia-o-futuro-do-trabalho-autonomo-explicado">agentes de IA no trabalho autônomo</a>.</p>
  `,
};
