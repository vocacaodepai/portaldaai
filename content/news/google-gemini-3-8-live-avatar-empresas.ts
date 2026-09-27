import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "google-gemini-3-8-live-avatar-empresas",
  title: "Google lança avatar animado em tempo real para o Gemini 3.8 Live, voltado a empresas",
  author: "Bruno Danello",
  summary:
    "O Gemini 3.8 Live with Live Avatar gera vídeo a 24 quadros por segundo de uma pessoa ou personagem animado com boca e expressões sincronizadas à fala, suporta 97 idiomas e já está disponível para clientes do Gemini Enterprise — toda a saída de áudio e vídeo carrega marca d'água SynthID.",
  sourceName: "Google Cloud Blog",
  sourceUrl: "https://cloud.google.com/blog/products/ai-machine-learning/gemini-3-8-live-with-live-avatar-is-now-generally-available",
  date: "2026-09-24",
  content: `
    <p>O Google anunciou a disponibilidade geral do Gemini 3.8 Live with Live Avatar para clientes do Gemini Enterprise, uma semana depois de lançar a versão apenas em áudio do Gemini 3.8 Live. A novidade acopla as capacidades de diálogo em tempo real do Gemini a geração de vídeo com baixa latência, criando uma presença visual dinâmica para o assistente de IA.</p>

    <h2>Como funciona o avatar</h2>
    <p>O recurso gera vídeo a 24 quadros por segundo de uma pessoa ou personagem animado, com boca e expressões faciais sincronizadas à fala em tempo real, suportando 97 idiomas. O sistema também consegue enxergar entradas de câmera ou tela e continuar falando enquanto ferramentas rodam em segundo plano, mantendo a conversa fluida mesmo durante tarefas mais demoradas.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Controle e segurança</span>
      <p>Empresas clientes podem escolher entre uma biblioteca de avatares pré-construídos e com curadoria; já a criação de avatares personalizados fica restrita a um processo rigoroso de autorização e verificação empresarial. Todo o áudio e vídeo gerados carregam marcas d'água imperceptíveis SynthID, e o serviço já está disponível com endpoints nos EUA e na União Europeia, com governança de dados e conformidade empresarial.</p>
    </div>

    <h2>Por que isso importa</h2>
    <p>O lançamento amplia a corrida entre grandes empresas de IA por assistentes com presença visual mais convincente, indo além de chatbots puramente textuais ou de voz — um recurso que pode se tornar relevante para atendimento ao cliente, treinamento corporativo e outras aplicações empresariais que se beneficiam de uma interface mais humana e expressiva. Para empresas que avaliam adotar esse tipo de tecnologia, o cuidado com autorização de avatares personalizados e marcas d'água reforça a importância de mecanismos claros de rastreabilidade à medida que conteúdo sintético com aparência humana se torna mais comum no ambiente corporativo.</p>
  `,
};
