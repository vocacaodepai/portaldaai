import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "google-gemini-omni-1-2-flash-video-15-segundos-30-por-cento-mais-barato",
  title: "Gemini Omni 1.2 Flash faz vídeos de 15 segundos e fica 30% mais barato",
  summary:
    "Novo modelo de vídeo do Google gera clipes de até 15 segundos, edita por conversa e custa US$ 0,07 por segundo em 720p na API, e chega ao Vids e ao Ads.",
  author: "Bruno Danello",
  sourceName: "Google, The Decoder",
  sourceUrl: "https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/",
  date: "2026-11-06",
  publishedAt: "2026-11-06T09:26:00-03:00",
  topic: "lancamentos",
  imageQuery: "Google Gemini logo",
  content: `
    <p>O Google começou a liberar nesta quinta-feira (5) o Gemini Omni 1.2 Flash, nova versão do seu modelo de geração de vídeo. A atualização mexe em três pontos que pesam direto no bolso e na rotina de quem produz conteúdo: os clipes passam de 10 para até 15 segundos, o preço cai 30% em relação ao Omni 1.1 e o vídeo pode ser ajustado em conversa, pedido a pedido, sem precisar gerar tudo de novo. Pela primeira vez, a família Omni também fica disponível de forma geral (sem o rótulo de prévia) na API do Gemini e no Google Cloud.</p>

    <p>O anúncio foi feito no <a href="https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/" rel="noopener noreferrer nofollow">blog oficial do Google</a>, assinado por Anish Nangia, gerente de produto do Google DeepMind, e detalhado também pelo The Decoder. As melhorias de qualidade descritas abaixo são promessas da própria empresa: o Google não publicou testes comparativos independentes junto com o lançamento.</p>

    <h2>O que muda no modelo</h2>
    <p>A mudança mais visível é a duração. O Omni 1.2 Flash gera vídeos nativos de 3 a 15 segundos, com escolha de segundo em segundo. No Omni 1.1, o limite era de 10 segundos. Na prática, 15 segundos é o tamanho de um anúncio curto de rede social, de um story completo ou de uma explicação rápida de produto, o que reduz a necessidade de emendar vários clipes para contar uma história inteira.</p>

    <p>O segundo ponto é a edição por conversa. Depois de gerar um clipe, o usuário pode pedir, em etapas, para trocar o fundo, mudar a iluminação ou o clima, substituir um produto ou alterar a proporção da tela (de horizontal para vertical, por exemplo), mantendo o resto da cena. Segundo o Google, isso funciona ao longo dos 15 segundos inteiros. Para quem faz publicidade, a consequência é produzir variações de um mesmo anúncio para públicos e formatos diferentes sem começar do zero a cada versão.</p>

    <p>O terceiro é a fidelidade às referências. O modelo aceita fotos de personagem, de produto ou de estilo, trechos curtos de movimento (até três segundos) e amostras de áudio. A promessa é que rostos, roupas, tipografia de embalagem e cores da marca continuem iguais quando a câmera muda de ângulo. No exemplo divulgado, uma foto de modelo e imagens de frente e de costas de três roupas viraram um vídeo de 15 segundos de provador virtual, com giros de 360 graus.</p>

    <figure><img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Gemini_language_model_logo.png" alt="Logotipo do Gemini, família de modelos de inteligência artificial do Google" /><figcaption>Foto: Google / Wikimedia Commons (Domínio público)</figcaption></figure>

    <p>O Google também diz ter melhorado a consistência entre o primeiro e o último quadro (menos "derretimento" de objetos e personagens no meio do movimento), a sincronia labial e a separação de vozes quando há mais de um personagem falando, além de movimentos de câmera longos, como voos de drone em primeira pessoa e afastamentos contínuos, com menos cortes indesejados. A empresa reconhece que ainda há o que melhorar em cenas de esporte rápidas, mudanças bruscas de roteiro e física complexa.</p>

    <h2>Quanto custa e onde usar</h2>
    <p>Na API, o preço anunciado é de US$ 0,07 por segundo de vídeo em 720p, 30% abaixo do Omni 1.1. Na conta simples, um clipe de 15 segundos nessa resolução sai por cerca de US$ 1,05, sem contar impostos e conversão de câmbio. O Google sugere um fluxo para economizar: fazer os rascunhos em 360p ou 720p, corrigir detalhes com pedidos de edição em vez de gerar outro vídeo e só no fim ampliar a versão escolhida para 1080p ou 4K. A tabela completa, com os demais valores, fica na documentação do Google AI Studio, e quem vai usar em volume deve conferir lá antes de fechar orçamento.</p>

    <p>Além da API e do Google AI Studio, o modelo está chegando a vários produtos do Google:</p>
    <ul>
      <li><strong>Google Cloud:</strong> uso corporativo pelo console, com capacidade reservada (Provisioned Throughput) para quem precisa de volume garantido.</li>
      <li><strong>Google Vids:</strong> clipes de 15 segundos sem custo adicional para quem tem conta Google ou assinatura do Google Workspace.</li>
      <li><strong>Flow:</strong> a ferramenta de criação de cenas com IA do Google, para dirigir tomadas e fazer edições em várias etapas.</li>
      <li><strong>App do Gemini:</strong> vídeos de 15 segundos, por enquanto em liberação para assinantes do Google AI Ultra.</li>
      <li><strong>Google Ads:</strong> para escalar campanhas em vídeo dentro da própria plataforma de anúncios.</li>
    </ul>

    <p>Todo vídeo gerado sai com a marca d'água invisível SynthID, a tecnologia do Google para identificar conteúdo sintético. O anúncio não detalha restrições por país; como costuma acontecer, a chegada a cada produto pode ser gradual.</p>

    <h2>A briga pelo vídeo com IA</h2>
    <p>O lançamento vem num momento em que o vídeo gerado por IA virou um dos mercados mais disputados do setor. Nesta semana, a Fal, empresa que oferece infraestrutura para rodar modelos de imagem e vídeo, <a href="/noticias/fal-dobra-avaliacao-16-bilhoes-rodada-1-3-bilhao-inferencia-video-imagem">dobrou seu valor de mercado para US$ 16 bilhões</a>, sinal de quanto dinheiro está indo para esse tipo de geração. Na véspera, a OpenAI tinha colocado <a href="/noticias/chatgpt-images-2-6-gifs-animados-todos-usuarios">GIFs animados dentro do ChatGPT com o Images 2.6</a>, mirando o mesmo público de criadores e pequenas empresas.</p>

    <p>A estratégia do Google é diferente da de concorrentes que vendem um aplicativo isolado: em vez de pedir que o usuário vá até uma ferramenta nova, o Omni aparece dentro do Vids, do Workspace e do Google Ads, onde muitas empresas já trabalham. Cortar o preço e alongar o clipe ao mesmo tempo também pressiona quem cobra por vídeo gerado, de plataformas como Runway e Pika ao Sora, da OpenAI.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para o lojista e o pequeno negócio brasileiro, o ganho mais concreto está no vídeo de produto. Com fotos que você já tem do catálogo, dá para testar um giro de produto, um provador virtual ou um anúncio curto sem contratar gravação, e depois pedir variações em formato vertical para Reels e TikTok. Se você vende esse tipo de entrega, nosso guia sobre <a href="/artigos/videos-de-produto-com-ia-servico-para-lojistas-pacote-e-preco">vídeos de produto com IA como serviço para lojistas</a> mostra como montar pacote e preço, e a queda de custo por segundo melhora a margem de quem já trabalha assim.</p>

    <p>Quem usa o Google Workspace no trabalho pode experimentar sem gastar nada a mais pelo Google Vids, que já tinha recursos como <a href="/artigos/google-vids-com-gemini-avatares-quem-pode-usar-e-limites">avatares com Gemini</a>. E quem anuncia no Google pode ver o modelo aparecer dentro da própria conta de anúncios; vale ler antes o nosso guia de <a href="/artigos/google-ads-com-ia-performance-max-e-ai-max-para-pequeno-negocio">Google Ads com IA para pequeno negócio</a>, para não deixar a automação gastar sem controle.</p>

    <p>Dois cuidados continuam valendo. O primeiro é direito de imagem: usar o rosto de uma pessoa real num vídeo comercial exige autorização dela, mesmo que a cena seja gerada por IA. O segundo é transparência com o público, cada vez mais cobrada por plataformas e pela publicidade. Quem produz conteúdo para marcas encontra as regras práticas no nosso texto sobre <a href="/artigos/criador-ugc-com-ia-roteiro-edicao-e-regras-do-conar-para-vender-a-marcas">criador UGC com IA e as regras do Conar</a>. E, como as melhorias foram anunciadas pelo próprio Google, faça um teste curto em 360p antes de colocar o modelo em produção: é o jeito mais barato de saber se ele resolve o seu caso.</p>
  `,
};
