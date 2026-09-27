import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "google-gemini-3-8-flash-tts-clonagem-voz",
  title: "Google lança Gemini 3.8 Flash TTS, modelo de voz que clona timbres a partir de 30 segundos de áudio",
  author: "Bruno Danello",
  summary:
    "Os novos modelos de conversão de texto em fala suportam mais de 100 idiomas e dialetos, oferecem mais de 2 mil vozes prontas e conseguem seguir instruções linha a linha sobre tom, ritmo, sotaque, sussurros e risadas — já disponíveis na API do Gemini e no Google AI Studio.",
  sourceName: "Google Blog",
  sourceUrl: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-text-to-speech/",
  date: "2026-09-23",
  content: `
    <p>O Google lançou o Gemini 3.8 Flash TTS e o Gemini 3.8 Flash-Lite TTS, descritos pela empresa como seus modelos de geração de áudio mais expressivos até agora. Ambos já estão disponíveis na API do Gemini e no Google AI Studio, além de chegarem ao Gemini Notebook e ao Google Vids.</p>

    <h2>O que os modelos conseguem fazer</h2>
    <p>O Gemini 3.8 Flash TTS consegue criar uma voz original a partir de uma descrição em linguagem natural, com suporte a mais de 100 idiomas e dialetos e acesso a mais de 2 mil vozes prontas para uso — a replicação de voz consegue recriar um timbre consistente a partir de uma amostra de apenas 30 segundos de áudio. Os modelos também seguem instruções linha a linha sobre tom, ritmo, mudanças de sotaque, sussurros, risadas, suspiros e outras nuances de fala, e conseguem encenar conversas entre dois personagens a partir de um único roteiro, mantendo as vozes consistentes ao longo de horas de áudio.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Dois modelos, dois usos</span>
      <p>O Gemini 3.8 Flash TTS é voltado a direção criativa mais profunda e criação de personagens para jogos, audiolivros imersivos, podcasts e mídia interativa. Já o Gemini 3.8 Flash-Lite TTS foi projetado para uso de alto volume e custo mais baixo, otimizado para dublagem, criação de conteúdo em áudio e agentes de voz que ainda precisam de controle fino sobre tom e ritmo.</p>
    </div>

    <h2>Por que isso importa</h2>
    <p>O lançamento acirra a disputa entre grandes empresas de IA por modelos de voz cada vez mais realistas e controláveis — área que já reúne concorrentes como ElevenLabs e OpenAI, e que se conecta a debates recentes sobre uso indevido de clonagem de voz para golpes e desinformação. Para desenvolvedores e criadores de conteúdo, a chegada de mais um modelo de ponta com controle detalhado de tom e emoção amplia as opções disponíveis para produzir áudio sintético em escala, ao mesmo tempo em que aumenta a pressão por mecanismos claros de consentimento e rastreabilidade sobre vozes clonadas.</p>
  `,
};
