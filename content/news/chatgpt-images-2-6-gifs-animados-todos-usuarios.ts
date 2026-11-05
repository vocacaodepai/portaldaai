import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "chatgpt-images-2-6-gifs-animados-todos-usuarios",
  title: "ChatGPT passa a criar GIFs animados com o novo modelo Images 2.6",
  summary:
    "OpenAI libera o Images 2.6 a todos no ChatGPT e no Codex: GIF a partir de texto ou foto, com ajuste de velocidade e edição quadro a quadro, e mais rapidez.",
  author: "Bruno Danello",
  sourceName: "The Verge, The Decoder, OpenAI",
  sourceUrl: "https://www.theverge.com/ai-artificial-intelligence/1026474/openai-chatgpt-animated-gifs-images-2-6",
  date: "2026-11-05",
  publishedAt: "2026-11-05T09:26:00-03:00",
  topic: "lancamentos",
  imageQuery: "ChatGPT app smartphone",
  content: `
    <p>O ChatGPT ganhou nesta quarta-feira (4) uma função que muita gente que trabalha com redes sociais vinha improvisando havia tempo: gerar GIFs animados direto na conversa. A novidade chega junto com o Images 2.6, nova versão do modelo de imagem da OpenAI, que também promete deixar a geração de imagens mais rápida. Segundo a empresa, o recurso está sendo liberado para todos os usuários do ChatGPT e do Codex, na web, no aplicativo de computador e no celular.</p>

    <p>A atualização foi detalhada pelo The Verge e pelo The Decoder, a partir do anúncio da OpenAI. Ela ocorre dois meses depois do <a href="/noticias/openai-lanca-chatgpt-images-2-5">lançamento do Images 2.5</a>, em setembro, que tinha focado em iluminação mais natural, texturas e fidelidade a fotos de referência.</p>

    <h2>O que muda na prática</h2>
    <p>Até agora, o ChatGPT não conseguia produzir um GIF em um passo só. Quem queria uma animação curta precisava pedir vários quadros separados, juntar os arquivos fora do chat ou recorrer a outro programa. Com o Images 2.6, basta descrever a animação em texto ou enviar uma foto e pedir que ela ganhe movimento. No exemplo divulgado pela OpenAI, o pedido "faça um GIF de um gato dançando" gera uma sequência de quadros com pequenas variações do mesmo personagem, no estilo de um livrinho animado.</p>

    <p>Depois de gerado, o GIF pode ser ajustado dentro do próprio ChatGPT. Dá para mudar a velocidade da animação, ver a sequência quadro a quadro, editar quadros individuais e compartilhar o resultado. O The Decoder destaca que o modelo mantém o personagem reconhecível de um quadro para o outro, algo em que gerações anteriores de modelos de imagem costumavam falhar: um rosto ou um mascote que muda de traço a cada quadro estraga qualquer animação.</p>

    <p>Além do GIF, a OpenAI diz que o Images 2.6 deixa a geração de imagens comum mais rápida no ChatGPT. A empresa não divulgou um número para esse ganho de velocidade nem informou se os limites de uso mudam entre os planos gratuito, Plus e Pro. Também não há, por enquanto, detalhe público sobre a duração máxima de cada GIF ou a quantidade de quadros.</p>

    <figure><img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Smartphone_with_ChatGPT_app_and_laptop_%2852917381683%29.jpg" alt="Celular com o aplicativo do ChatGPT aberto ao lado de um notebook" /><figcaption>Foto: Jernej Furman / Wikimedia Commons (CC BY 2.0)</figcaption></figure>

    <h2>Novos modelos na API para desenvolvedores</h2>
    <p>Para quem integra geração de imagem em sistemas próprios, a OpenAI lançou duas versões do modelo na sua API: o GPT-Image-2.6 Flare, voltado para geração mais rápida e eficiente, e o GPT-Image-2.6 Sunburst, voltado para imagens de qualidade mais alta. Segundo o The Decoder, as duas variantes já existiam na geração 2.5 e agora foram atualizadas. As reportagens consultadas não trazem os preços por imagem da nova versão; quem usa a API deve conferir a tabela oficial antes de trocar de modelo em produção.</p>

    <p>A divisão em duas linhas segue uma lógica que já virou padrão no mercado: um modelo mais barato e veloz para volume (miniaturas, variações para teste A/B, imagens de catálogo) e outro mais caro para peças em que o acabamento importa. Para uma agência ou um e-commerce, a escolha entre os dois afeta diretamente o custo por campanha.</p>

    <h2>A disputa no mercado de imagem</h2>
    <p>A OpenAI também aproveitou o anúncio para mostrar escala. De acordo com a empresa, os usuários já geram mais de 4 bilhões de imagens por semana somando o ChatGPT e a API, contra 3 bilhões por semana informados em setembro. É um crescimento de cerca de um terço em pouco mais de um mês, puxado tanto por uso pessoal quanto por empresas que automatizaram a criação de peças visuais.</p>

    <p>O movimento acontece num momento de concorrência apertada. O Google vem atualizando o Nano Banana no Gemini, como mostrou a <a href="/noticias/google-nano-banana-2-1-gemini-imagens">versão 2.1 do modelo</a>, e o Canva lançou seu <a href="/noticias/canva-craft-primeiro-modelo-imagem-dream-lab">primeiro modelo próprio de imagem, o Craft</a>. GIF e animação curta são um terreno em que ferramentas especializadas, de editores de vídeo a apps de figurinhas, ainda dominavam. Ao colocar isso dentro do chat, a OpenAI tenta reduzir o motivo para o usuário sair do ChatGPT e abrir outro aplicativo.</p>

    <h2>Cuidados antes de usar em trabalho</h2>
    <p>Como em qualquer imagem gerada por IA, vale atenção a três pontos. O primeiro é direito de imagem: animar a foto de uma pessoa real, especialmente para uso comercial, exige autorização dela. O segundo é marca e personagem de terceiros: pedir um GIF com o mascote de outra empresa pode render problema jurídico, tema que explicamos no guia sobre <a href="/artigos/ia-e-direitos-autorais-o-que-criadores-precisam-saber">IA e direitos autorais para criadores</a>. O terceiro é transparência: em publicidade, o público e as plataformas cobram cada vez mais a sinalização de conteúdo sintético, e padrões como as <a href="/artigos/content-credentials-c2pa-como-saber-se-imagem-foi-feita-por-ia">Content Credentials (C2PA)</a> ajudam a identificar a origem de uma imagem.</p>

    <p>Também é bom revisar quadro a quadro antes de publicar. Modelos de imagem ainda erram mãos, textos e detalhes finos, e numa animação esse erro aparece várias vezes por segundo. A possibilidade de editar quadros individuais, que a OpenAI incluiu justamente nesta versão, serve para corrigir essas falhas sem gerar tudo de novo.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para o pequeno negócio e para o criador de conteúdo brasileiro, GIF é formato de trabalho: aparece em stories, em respostas no WhatsApp, em e-mail marketing e em anúncios. Até ontem, fazer uma animação simples, como um produto girando, um logotipo pulsando ou um selo de promoção piscando, exigia saber usar um editor ou pagar alguém. Agora dá para testar a ideia em uma conversa, e a OpenAI diz que a liberação vale para todos os usuários do ChatGPT. Quem já monta o <a href="/artigos/instagram-para-pequeno-negocio-com-ia-calendario-reels-e-legendas">calendário de Instagram com IA</a> ganha mais um formato para variar os posts sem aumentar o custo.</p>

    <p>Para quem vende serviço de design ou social media, a leitura é dupla. A parte mais simples do trabalho tende a ficar mais barata, porque o cliente pode fazer sozinho. Em compensação, quem domina a ferramenta produz mais variações em menos tempo e pode cobrar pela direção criativa, pela consistência de marca e pela revisão, que a IA ainda não resolve sozinha. Se você está começando, o nosso <a href="/artigos/como-criar-imagens-com-ia-guia-passo-a-passo">guia de como criar imagens com IA</a> ajuda a escrever pedidos melhores, e a mesma lógica vale para os GIFs: descreva o movimento, o fundo, o estilo e a duração que você quer, e depois ajuste a velocidade e os quadros no próprio chat.</p>
  `,
};
