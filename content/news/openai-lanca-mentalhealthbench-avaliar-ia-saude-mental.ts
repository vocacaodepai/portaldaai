import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "openai-lanca-mentalhealthbench-avaliar-ia-saude-mental",
  title: "OpenAI lança benchmark público para avaliar como a IA lida com conversas sobre saúde mental",
  author: "Bruno Danello",
  summary:
    "O MentalHealthBench reúne 1.215 conversas sintéticas e 5.262 critérios de avaliação criados junto com mais de 80 psicólogos e psiquiatras licenciados de 22 países — no teste, o GPT-6 Astra liderou com 57,3% de acerto, à frente do Claude Opus 5.5 (52,4%) e bem acima do GPT-4o (32,1%) e do Gemini 2.5 Pro (29,5%).",
  sourceName: "OpenAI",
  sourceUrl: "https://openai.com/index/introducing-mentalhealthbench/",
  date: "2026-09-23",
  content: `
    <p>A OpenAI lançou o MentalHealthBench, um benchmark público criado para avaliar como diferentes modelos de IA respondem em conversas sobre saúde mental — de temas cotidianos de bem-estar até emergências mais graves. O conjunto reúne 1.215 conversas sintéticas pareadas com 5.262 critérios de avaliação (rubrics), desenvolvidos em conjunto com mais de 80 psicólogos e psiquiatras licenciados de 22 países, falando 19 idiomas e cobrindo quase 20 subespecialidades da saúde mental.</p>

    <p>O conteúdo do benchmark se divide em 53,5% de cenários não agudos, 18,2% de alta gravidade e 28,3% de emergência, representando quatro perfis de usuário: adultos (68,1%), adolescentes (21,2%), profissionais clínicos (5,8%) e cuidadores (4,9%). Nos primeiros resultados divulgados pela própria OpenAI, o GPT-6 Astra pontuou 57,3%, à frente do GPT-6 Sol (53,9%), do Claude Opus 5.5 (52,4%) e do GPT-6 Luna (50,2%) — todos bem acima do GPT-4o (32,1%) e do Gemini 2.5 Pro (29,5%).</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Benchmark aberto, uso com cautela</span>
      <p>A OpenAI decidiu liberar o MentalHealthBench de forma aberta para que outros pesquisadores possam examinar a metodologia, rodar suas próprias avaliações e construir em cima do trabalho — mas a pontuação alta num teste desse tipo não substitui acompanhamento profissional real em situações de saúde mental, apenas mede a qualidade da resposta do modelo em cenários simulados.</p>
    </div>

    <h2>Mais um sinal de que conversas sensíveis pedem avaliação específica</h2>
    <p>O lançamento reforça uma preocupação crescente entre laboratórios de IA: modelos de propósito geral, avaliados majoritariamente em tarefas de código e raciocínio, também precisam de testes específicos para temas delicados como saúde mental, onde uma resposta mal calibrada pode ter consequências sérias. Para quem quer entender melhor os termos técnicos por trás desse tipo de avaliação, vale conferir nosso <a href="/artigos/dicionario-de-inteligencia-artificial-termos-essenciais">dicionário de inteligência artificial</a>.</p>
  `,
};
