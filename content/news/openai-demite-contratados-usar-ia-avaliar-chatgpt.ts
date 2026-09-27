import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "openai-demite-contratados-usar-ia-avaliar-chatgpt",
  title: "OpenAI demite prestadores de serviço flagrados usando IA para avaliar respostas do ChatGPT",
  author: "Bruno Danello",
  summary:
    "Documentos internos revelam que a empresa baniu ferramentas como GPTZero, Grammarly e qualquer chatbot do trabalho de mais de dez mil avaliadores contratados para classificar respostas do ChatGPT — usar IA para treinar a própria IA pode causar 'colapso de modelo' quando dados sintéticos se acumulam no treinamento.",
  sourceName: "404 Media",
  sourceUrl: "https://www.404media.co/people-training-openais-ai-fired-for-using-ai-to-train-the-ai/",
  date: "2026-09-24",
  content: `
    <p>A OpenAI demitiu diversos prestadores de serviço contratados para avaliar e melhorar as respostas do ChatGPT depois de flagrá-los usando ferramentas de IA no próprio trabalho de avaliação, segundo documentos internos obtidos pela imprensa. As diretrizes da empresa proíbem explicitamente o uso de detectores de texto por IA como o GPTZero, de assistentes de escrita como o Grammarly, de tradutores automáticos e de qualquer chatbot durante as tarefas de anotação — a instrução aos revisores é direta: "não use ferramentas de detecção de IA, nem IA você mesmo".</p>

    <p>Segundo os documentos, mais de dez mil prestadores atuam nos diferentes pipelines de avaliação da empresa. Um desses programas, batizado internamente de "Project Lily", tem centenas de avaliadores lendo prompts reais de usuários e classificando as respostas do ChatGPT quanto a bajulação excessiva ou tendência a antropomorfizar o próprio modelo. Segundo a reportagem, os sinais que denunciam o uso indevido de IA pelos próprios avaliadores incluem padrões repetitivos de palavras, uso excessivo de travessões e tempos de conclusão da tarefa anormalmente rápidos.</p>

    <div class="callout-box callout-warn">
      <span class="callout-label">Por que a proibição existe</span>
      <p>A OpenAI usa avaliadores humanos justamente para evitar que seus modelos aprendam a partir de dados sintéticos gerados por outras IAs — um fenômeno conhecido como "colapso de modelo" (model collapse), em que a qualidade de um sistema de IA se degrada progressivamente quando treinado repetidamente sobre conteúdo produzido por outros modelos, em vez de dados originais gerados por humanos.</p>
    </div>

    <p>O episódio expõe uma tensão pouco discutida na cadeia de produção dos grandes modelos de linguagem: por trás do treinamento de sistemas como o ChatGPT existe uma vasta força de trabalho humana dedicada a avaliar e corrigir respostas — e a integridade desse processo depende justamente de que esses avaliadores não recorram à própria tecnologia que estão ajudando a aperfeiçoar.</p>
  `,
};
