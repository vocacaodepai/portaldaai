import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "google-gemini-3-8-live-avatar-video-tempo-real-97-idiomas",
  title: "Google lança Gemini 3.8 Live com avatar em vídeo que conversa em tempo real em 97 idiomas",
  summary:
    "Disponível no Gemini Enterprise, o Live Avatar gera um rosto animado que fala, faz sincronia labial e troca de idioma no meio da conversa, com marca d'água SynthID em todo áudio e vídeo. Google mira atendimento ao cliente e tutoriais interativos.",
  author: "Bruno Danello",
  sourceName: "Google",
  sourceUrl: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-with-live-avatar/",
  date: "2026-09-24",
  content: `
    <p>O Google colocou à venda o <strong>Gemini 3.8 Live com Live Avatar</strong>, um recurso do Gemini Enterprise que junta o modelo de conversa por voz a um gerador de vídeo de baixa latência. O resultado é um avatar que aparece na tela, responde falando, faz sincronia labial e expressões faciais e consegue mudar de idioma no meio da conversa sem desalinhar o vídeo. Segundo o anúncio, assinado pelos pesquisadores Shuo-yiin Chang e CJ Zheng, o recurso cobre 97 idiomas, incluindo o português.</p>
    <p>Na prática, a empresa pode escolher um rosto de uma biblioteca de avatares prontos, cada um com aparência e voz próprias, ou, mediante liberação, gerar um avatar a partir de uma imagem de referência, preservando a identidade visual da marca. O avatar também executa ferramentas em segundo plano, como consultar um sistema ou registrar um pedido, enquanto segue conversando.</p>

    <h2>Onde o Google quer usar isso</h2>
    <p>Os exemplos citados pelo Google são atendimento ao cliente, tutoriais interativos e recepção de hotel. É o mesmo terreno dos <a href="/artigos/como-criar-chatbot-de-atendimento-para-seu-site-sem-programar">chatbots de atendimento</a> que pequenos negócios já montam sem programar, só que com um rosto e voz na frente. Para quem atende clientes de fora, a troca automática de idioma resolve um problema que hoje exige ferramenta separada, como mostramos no guia de <a href="/artigos/como-atender-clientes-em-varios-idiomas-usando-ia">atendimento em vários idiomas com IA</a>.</p>
    <p>O produto está disponível com endpoints nos Estados Unidos e na Europa, com capacidade provisionada e as regras de governança de dados do Gemini Enterprise. O Google não divulgou preço no anúncio; a cobrança segue a tabela do Gemini Enterprise.</p>

    <h2>Marca d'água em tudo</h2>
    <p>Todo áudio e vídeo gerado pelo Live Avatar sai com o SynthID, a marca d'água invisível do Google, para que o conteúdo continue identificável como produzido por IA. É uma resposta direta à preocupação com <a href="/artigos/deepfakes-ia-identificar-conteudo-falso-proteger-reputacao">deepfakes e vídeos falsos</a>, que cresce junto com a qualidade desses geradores.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Por que isso importa para você</span><p>Avatares em vídeo deixam de ser brinquedo de demonstração e viram produto corporativo, com contrato, governança e marca d'água. Para criadores e pequenos negócios, o caminho ainda passa por ferramentas mais acessíveis, como as do guia de <a href="/artigos/ia-para-video-criar-avatar-digital-que-fala-por-voce">avatar digital que fala por você</a>, mas o padrão de qualidade que o cliente vai esperar acaba de subir.</p></div>
  `,
  faq: [
    {
      question: "O Gemini 3.8 Live com Live Avatar funciona em português?",
      answer:
        "Sim. O Google informa suporte a 97 idiomas com sincronia labial e troca de idioma durante a conversa, e o português está entre eles. O recurso, porém, é vendido dentro do Gemini Enterprise, voltado a empresas, e não no aplicativo Gemini para consumidores.",
    },
    {
      question: "Dá para saber se um vídeo foi feito pelo Live Avatar?",
      answer:
        "O Google afirma que todo áudio e vídeo gerado recebe a marca d'água SynthID, invisível para as pessoas, mas detectável por ferramentas de verificação. Isso ajuda a identificar conteúdo sintético, embora não impeça usos indevidos por si só.",
    },
  ],
};
