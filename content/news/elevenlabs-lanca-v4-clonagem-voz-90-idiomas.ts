import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "elevenlabs-lanca-v4-clonagem-voz-90-idiomas",
  title: "ElevenLabs lança Eleven v4, com clonagem de voz em só 10 segundos",
  summary:
    "Novo modelo de voz suporta 90 idiomas, com ganho de qualidade em português brasileiro, e chega junto com uma versão Turbo de baixa latência para agentes de voz.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/09/28/elevenlabs-new-v4-speech-model-supports-more-expression-control-and-90-languages/",
  date: "2026-09-28",
  content: `
    <p>A ElevenLabs lançou nesta segunda-feira (28) o Eleven v4, novo modelo de voz que reduz o tempo necessário para clonar uma voz de forma convincente para apenas 10 segundos de áudio, ante um tempo bem maior nas versões anteriores. Segundo a <a href="https://techcrunch.com/2026/09/28/elevenlabs-new-v4-speech-model-supports-more-expression-control-and-90-languages/" rel="noopener noreferrer nofollow">reportagem da TechCrunch</a>, o modelo suporta 90 idiomas, com ganhos de qualidade específicos em português brasileiro, japonês, mandarim e cantonês.</p>
    <p>A empresa também lançou o Eleven v4 Turbo, uma versão de latência mais baixa voltada para agentes de voz em tempo real, como atendimento automatizado. O preço de lançamento é de US$ 22 por milhão de caracteres no v4 e US$ 11 no Turbo. A ElevenLabs já fatura US$ 600 milhões em receita anualizada, está avaliada em US$ 22 bilhões e sinaliza interesse em abrir capital.</p>

    <h2>Contexto</h2>
    <p>A ElevenLabs vem expandindo parcerias no mercado de música e voz licenciada, como mostramos quando a empresa <a href="/noticias/universal-music-elevenlabs-plataforma-ia-musical-licenciada">se associou à Universal Music numa plataforma de IA musical com catálogo licenciado</a>. Clonagem de voz mais rápida e barata também levanta questão de segurança, dado o crescimento de golpes que usam voz clonada para fraude.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você trabalha com dublagem, narração ou produção de conteúdo em áudio, clonagem em 10 segundos com qualidade melhor em português brasileiro reduz drasticamente o tempo de produção e abre espaço pra personalizar vozes de forma mais rápida e barata. Vale conferir o guia de <a href="/artigos/ganhar-dinheiro-dublando-videos-com-ia-vozes-sinteticas">como ganhar dinheiro dublando vídeos com vozes sintéticas de IA</a> pra entender como aplicar isso na prática.</p>
    <p>Para quem monta atendimento automatizado por voz, a versão Turbo de baixa latência é o destaque: agentes de voz mais responsivos tendem a soar mais naturais numa ligação, o que impacta direto a experiência do cliente. Do outro lado, clonagem de voz cada vez mais rápida também exige mais atenção a golpes: sempre confirme identidade por canal independente antes de autorizar qualquer transação por voz, mesmo que pareça familiar.</p>
  `,
  faq: [
    {
      question: "Preciso pagar assinatura pra usar o Eleven v4?",
      answer: "O preço de lançamento é por uso, cobrado por caractere gerado (US$ 22 por milhão no v4, US$ 11 por milhão no Turbo), dentro dos planos da ElevenLabs.",
    },
  ],
};
