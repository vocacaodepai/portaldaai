import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "google-synthid-site-publico-verificar-midia-ia",
  title: "Google abre site público para checar se imagem, vídeo ou áudio vem de IA",
  summary:
    "O synthid.com deixa qualquer pessoa checar se imagem, vídeo ou áudio tem a marca d'água SynthID. O Google diz ter 1 milhão de pedidos por dia, mas há limites.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/10/07/googles-new-synthid-website-can-identify-ai-generated-media/",
  date: "2026-10-07",
  publishedAt: "2026-10-07T15:54:30-03:00",
  imageQuery: "Google logo",
  topic: "seguranca",
  content: `
    <p>O Google abriu ao público o synthid.com, um site em que qualquer pessoa pode enviar uma imagem, um vídeo ou um áudio e descobrir se o arquivo foi criado com ferramentas de inteligência artificial que usam a marca d'água SynthID. A novidade foi publicada pelo <a href="https://techcrunch.com/2026/10/07/googles-new-synthid-website-can-identify-ai-generated-media/" target="_blank" rel="noopener noreferrer nofollow">TechCrunch</a>, em texto de Ivan Mehta, que informa que o lançamento ocorreu na terça-feira (6).</p>

    <p>Até agora, a verificação estava restrita. O Google liberou a ferramenta para testes no ano passado, durante o Google I/O, apenas para jornalistas, profissionais de mídia e pesquisadores selecionados. Com o site, o acesso passa a ser aberto a qualquer pessoa, sem precisar de convite.</p>

    <h2>Como funciona a verificação do SynthID</h2>
    <p>O SynthID foi apresentado pelo Google em 2023. A tecnologia insere uma marca d'água invisível em conteúdo gerado por IA, e o site procura essa marca no arquivo enviado. Segundo a reportagem, entre as ferramentas do Google que aplicam a marca estão o Nano Banana, o Veo e o Lyria, além do Gemini, do Flow, do ProducerAI e do Vids.</p>
    <p>O site aceita vários formatos. Para imagens: JPG, JPEG, PNG, BMP, WEBP, AVIF, HEIC, HEIF, TIFF, TIF e GIF. Para vídeo: MP4, MOV e WEBM. Para áudio: WAV, MP3, OGG, FLAC, AAC e M4A. A mesma checagem também está embutida no aplicativo do Gemini e no navegador Chrome, de acordo com o texto.</p>
    <p>O Google afirma que já recebe 1 milhão de pedidos de verificação por dia, número que dá uma ideia da demanda por esse tipo de conferência. A reportagem também registra que outras empresas adotaram o SynthID, entre elas OpenAI, Nvidia e Kakao, e que a Apple, segundo informações não confirmadas, deve passar a oferecer suporte em breve. A OpenAI mantém, além disso, um site próprio para checar conteúdo.</p>

    <h2>As limitações que a própria reportagem aponta</h2>
    <p>O TechCrunch faz uma ressalva importante. A Microsoft e a Meta têm seus próprios padrões de marca d'água e de verificação, e esses sistemas não são infalíveis: muitas vezes deixam de identificar até conteúdo criado pelos modelos das próprias empresas, segundo uma reportagem da Reuters de julho de 2026 citada no texto.</p>
    <p>A publicação também deixa claro o que não foi informado: não há detalhes sobre limite de tamanho de arquivo, taxa de acerto ou desempenho do SynthID diante de mídia editada ou cortada. Isso importa porque a verificação só encontra o que foi marcado. Um arquivo feito por uma ferramenta que não usa o SynthID pode passar sem alerta, e o resultado negativo não prova que o conteúdo é autêntico.</p>
    <p>O Portal da AI já acompanhou outras frentes da mesma disputa. O Google DeepMind criou uma <a href="/noticias/synthid-bio-deepmind-marca-dagua-proteinas-ia">marca d'água para proteínas desenhadas por IA</a>, e a OpenAI avançou na <a href="/noticias/openai-marca-dagua-texto-chatgpt-ue">marca d'água de texto no ChatGPT na União Europeia</a>. Do lado da pesquisa, um chip da UCLA mostrou um caminho diferente, com um <a href="/noticias/ucla-ia-luz-detecta-deepfakes-elight">detector óptico de deepfakes</a> que não depende de marca inserida na origem.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para quem trabalha com conteúdo, atendimento ou redes sociais no Brasil, a ferramenta oferece uma primeira checagem rápida e gratuita quando surge uma imagem ou um áudio suspeito, algo cada vez mais comum em golpes e em períodos eleitorais. O guia <a href="/artigos/deepfakes-ia-identificar-conteudo-falso-proteger-reputacao">deepfakes e IA: como identificar conteúdo falso e proteger sua reputação</a> reúne outras formas de conferir, e o texto sobre os <a href="/noticias/deepfakes-eleicoes-2026-vigia-lupa-tse">deepfakes nas eleições de 2026 e a Lupa do TSE</a> mostra como o tema já chegou ao cenário político brasileiro.</p>
    <p>O cuidado está em interpretar o resultado com calma. Se o site indicar que o arquivo foi marcado pelo SynthID, há um sinal forte de origem em IA. Se não indicar, a dúvida continua. Vale combinar a ferramenta com outras checagens: procurar a fonte original, comparar com outros veículos, olhar o contexto em que o arquivo circulou e desconfiar de conteúdo que pede ação imediata, como transferência de dinheiro.</p>
    <p>Para empresas, há ainda uma lição prática. Quem publica material produzido com IA passa a ter, no SynthID, uma marca que terceiros conseguem verificar. Isso reforça a importância de ser transparente sobre o uso de IA em campanhas e peças, já que o conteúdo pode ser identificado por qualquer pessoa.</p>

    <p>Um detalhe que costuma passar despercebido é a diferença entre detectar e provar. A marca d'água é um sinal técnico gravado no arquivo no momento da criação, e o site apenas informa se esse sinal está ali. Ele não diz quem criou o conteúdo, com que intenção, nem se o que aparece na imagem ou no áudio é verdadeiro ou enganoso. Uma foto real pode ser editada com uma ferramenta de IA e carregar a marca, e um vídeo totalmente fabricado por outro sistema pode não carregar nenhuma.</p>
    <p>Isso significa que o site funciona melhor como filtro inicial do que como juiz final. Em redações, agências e equipes de atendimento, a recomendação razoável é registrar o resultado da verificação junto com as demais evidências e, em casos sensíveis, buscar uma segunda opinião de um especialista em verificação de conteúdo antes de acusar alguém ou publicar uma correção.</p>

    <h2>O que observar daqui para frente</h2>
    <p>O primeiro ponto é a adesão. Quanto mais empresas aplicarem o mesmo padrão, mais útil o site se torna, e a eventual entrada da Apple pode ampliar muito o alcance. O segundo é a transparência sobre a precisão: sem números sobre acertos e erros, fica difícil saber o quanto confiar em um resultado negativo. O terceiro é a resistência à edição, já que o uso real mistura recortes, compressões e reenvios por aplicativos de mensagem, situações que podem reduzir a chance de detecção.</p>
    <p>Por enquanto, o synthid.com é uma ferramenta útil, mas parcial. Ela ajuda a confirmar que algo veio de IA quando a marca está presente, e não substitui o hábito de verificar a origem de qualquer conteúdo antes de compartilhá-lo.</p>
  `,
};
