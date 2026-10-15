import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "synthid-site-do-google-para-verificar-midia-gerada-por-ia",
  title: "SynthID: site do Google checa se imagem, vídeo ou áudio é IA",
  seoTitle: "SynthID: como checar se um arquivo é de IA",
  excerpt:
    "SynthID é o site do Google que verifica se imagem, vídeo ou áudio tem marca d'água de IA. Veja como usar, o que ele detecta e onde o resultado engana.",
  metaDescription:
    "SynthID explicado: como usar o site do Google para checar se imagem, vídeo ou áudio veio de IA, formatos aceitos e por que resultado negativo não prova nada.",
  category: "ferramentas",
  date: "2026-10-15",
  readTime: 7,
  imageQuery: "magnifying glass photo authenticity check",
  seed: 308,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O SynthID é uma marca d'água invisível que o Google grava em imagens, vídeos, áudios e textos gerados pelas suas ferramentas, e agora qualquer pessoa pode enviar um arquivo ao site para ver se ela está lá.",
    "Se a marca aparece, é um sinal forte de origem em IA; se não aparece, a dúvida continua, porque o arquivo pode ter vindo de uma ferramenta que não usa o SynthID.",
    "A checagem também existe no app Gemini e no Chrome, e funciona melhor como primeiro filtro, combinada com busca pela fonte original e bom senso.",
  ],
  content: `
    <p>O SynthID é uma tecnologia do Google DeepMind que grava uma marca d'água invisível em conteúdo criado por IA, e o site de verificação deixa qualquer pessoa enviar uma imagem, um vídeo ou um áudio para ver se essa marca está presente. Se estiver, o arquivo veio de uma ferramenta que usa o SynthID. Se não estiver, o resultado não prova que o conteúdo é real.</p>

    <p>A novidade importa porque, até pouco tempo atrás, só jornalistas e pesquisadores selecionados podiam usar o detector. Agora ele está aberto, e isso muda a rotina de quem recebe foto de comprovante, áudio estranho no WhatsApp ou imagem viral e quer uma primeira checagem em um minuto. Neste guia você vê como funciona, como usar, o que ele não resolve e como encaixar a ferramenta numa rotina de verificação junto com outras técnicas. A notícia original está em <a href="/noticias/google-synthid-site-publico-verificar-midia-ia">Google abre site público para checar se imagem, vídeo ou áudio vem de IA</a>.</p>

    <h2>O que é o SynthID e o que o site faz</h2>

    <p>Segundo a <a href="https://deepmind.google/models/synthid/" target="_blank" rel="noopener noreferrer">página do Google DeepMind sobre o SynthID</a>, conferida em 15/10/2026, a tecnologia incorpora marcas d'água digitais em imagens, áudio, texto e vídeo gerados por IA. Elas são imperceptíveis para pessoas, mas podem ser detectadas pelo próprio SynthID. Em imagens e vídeos, a marca entra no momento da criação e foi projetada para resistir a recortes, filtros, mudanças de taxa de quadros e compressão com perdas.</p>

    <p>O site de verificação, chamado SynthID Detector, funciona como um portal aberto: você envia o arquivo e ele procura a marca. De acordo com o <a href="https://techcrunch.com/2026/10/07/googles-new-synthid-website-can-identify-ai-generated-media/" target="_blank" rel="noopener noreferrer">TechCrunch</a>, entre as ferramentas do Google que aplicam o SynthID estão Nano Banana, Veo e Lyria, além do Gemini, do Flow e do Vids. A página do DeepMind acrescenta que o detector também reconhece arquivos de parceiros como OpenAI, NVIDIA e Kakao.</p>

    <p>Vale separar duas coisas que costumam se misturar. Detectar a marca é um fato técnico: o sinal está ou não está no arquivo. Provar que algo é falso ou verdadeiro é outra tarefa, que depende de contexto, fonte e intenção. O SynthID só responde à primeira.</p>

    <h2>Como usar o SynthID passo a passo</h2>

    <p>O caminho mais direto é pelo site synthid.com. Na data da conferência, a página inicial mostrava apenas o nome "SynthID Detector", sem texto explicativo, então os detalhes abaixo vêm da reportagem do TechCrunch e da página do DeepMind. O processo é simples:</p>

    <ol>
      <li>Abra o SynthID Detector e envie o arquivo suspeito, de preferência a versão mais original que você tiver, e não um print dele.</li>
      <li>Aguarde o resultado: marca encontrada ou não encontrada.</li>
      <li>Anote o resultado junto com a origem do arquivo (quem enviou, em que grupo, em que data).</li>
      <li>Se o caso for sensível, repita com outra versão do arquivo e procure a fonte original antes de agir.</li>
    </ol>

    <p>Os formatos aceitos, segundo o TechCrunch, são: para imagem, JPG, JPEG, PNG, BMP, WEBP, AVIF, HEIC, HEIF, TIFF, TIF e GIF; para vídeo, MP4, MOV e WEBM; para áudio, WAV, MP3, OGG, FLAC, AAC e M4A. A reportagem não informa limite de tamanho, duração ou número de verificações, então um arquivo muito pesado pode exigir tentativa e erro.</p>

    <p>A mesma checagem também aparece em outros lugares. Pela página do DeepMind, no Gemini, na Pesquisa e no Chrome é possível enviar uma imagem, um vídeo ou um áudio e perguntar se foi criado ou alterado pela IA do Google. Quem já usa o assistente no navegador pode combinar isso com o que mostramos em <a href="/artigos/gemini-no-chrome-o-que-faz-requisitos-e-como-ativar">Gemini no Chrome: o que faz, requisitos e como ativar</a>.</p>

    <h2>O que o SynthID detecta e o que ele não detecta</h2>

    <p>O ponto central é que o detector só encontra o que foi marcado. Uma imagem feita por uma ferramenta que não usa o SynthID pode passar sem alerta, mesmo sendo 100% sintética. O TechCrunch lembra que Microsoft e Meta têm seus próprios padrões de marca d'água, e que esses sistemas nem sempre identificam nem o conteúdo dos modelos das próprias empresas, citando uma reportagem da Reuters de julho de 2026. Ou seja, o ecossistema ainda é fragmentado.</p>

    <table>
      <thead>
        <tr><th>Resultado do site</th><th>O que significa</th><th>O que NÃO significa</th></tr>
      </thead>
      <tbody>
        <tr><td>Marca encontrada</td><td>O arquivo foi criado ou alterado por uma ferramenta com SynthID</td><td>Que o conteúdo é enganoso ou criminoso</td></tr>
        <tr><td>Marca não encontrada</td><td>O detector não achou o sinal</td><td>Que o arquivo é autêntico ou feito por humanos</td></tr>
        <tr><td>Resultado incerto</td><td>Arquivo muito editado ou comprimido, ou fora do que o detector cobre</td><td>Que dá para concluir qualquer coisa</td></tr>
      </tbody>
    </table>

    <p>A reportagem também registra o que não foi informado: taxa de acerto, tamanho máximo de arquivo e desempenho diante de mídia muito editada ou cortada. Sem esses números, o resultado negativo deve ser lido como "não sei", nunca como "é verdadeiro". O mesmo raciocínio vale para detectores de texto, tema do guia <a href="/artigos/detector-de-texto-de-ia-funciona-ou-nao-como-saber-se-foi-escrito-por-ia">detector de texto de IA: funciona ou não?</a>.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Uma foto real editada com uma ferramenta de IA pode carregar a marca, e um vídeo inteiramente fabricado por outro sistema pode não carregar nenhuma. Por isso, o site é um filtro inicial, não um juiz.</p></div>

    <h2>Exemplo prático: o comprovante que chegou por foto</h2>

    <p>Considere um exemplo ilustrativo, inventado só para mostrar a rotina. Marina tem uma loja de roupas em Curitiba e vende por Instagram e WhatsApp. Um cliente envia a foto de um comprovante de Pix de R$ 380 e pede para enviar o pedido antes de o valor cair na conta. Ela desconfia da imagem, porque a fonte parece diferente do app do banco.</p>

    <p>A rotina de Marina, em quatro minutos: primeiro, ela confere o extrato no aplicativo do próprio banco, que é a prova que realmente vale. Segundo, envia o arquivo ao SynthID Detector. Terceiro, anota o resultado. Quarto, se o dinheiro não aparece, ela segura o pedido. Repare que o detector sozinho não decide nada: se disser "marca não encontrada", ela continua sem saber se o comprovante é falso, porque comprovantes adulterados em editores comuns não passam pelo SynthID. A conferência no banco resolve o caso, e o detector entra como mais uma pista.</p>

    <p>Quem atende clientes pelo WhatsApp encontra situações parecidas todos os dias. O texto <a href="/artigos/como-usar-ia-para-checar-mensagem-suspeita-e-evitar-golpes">como usar IA para checar mensagem suspeita e evitar golpes</a> traz um passo a passo para mensagens, links e pedidos de dinheiro.</p>

    <h2>Como combinar o SynthID com outras checagens</h2>

    <p>A verificação confiável nunca depende de uma única ferramenta. Uma rotina enxuta para imagens e vídeos virais costuma ter cinco passos, e o SynthID é só um deles:</p>

    <ul class="checklist">
      <li>Procure a fonte original: quem publicou primeiro, em que veículo, em que data.</li>
      <li>Faça uma busca reversa pela imagem (por exemplo, no Google Lens ou no recurso de pesquisa por imagem do navegador).</li>
      <li>Passe o arquivo pelo SynthID e registre o resultado.</li>
      <li>Procure credenciais de conteúdo, o padrão que registra a origem do arquivo, explicado em <a href="/artigos/content-credentials-c2pa-como-saber-se-imagem-foi-feita-por-ia">Content Credentials (C2PA)</a>.</li>
      <li>Desconfie de urgência: conteúdo que pede ação imediata, como transferência de dinheiro, merece pausa.</li>
    </ul>

    <p>Para casos que envolvem reputação de pessoas ou empresas, o guia <a href="/artigos/deepfakes-ia-identificar-conteudo-falso-proteger-reputacao">deepfakes e IA: como identificar conteúdo falso e proteger sua reputação</a> aprofunda sinais visuais e o que fazer quando você é a vítima. E há pesquisas que seguem outro caminho, sem depender de marca na origem, como o chip óptico da UCLA descrito em <a href="/noticias/ucla-ia-luz-detecta-deepfakes-elight">UCLA usa luz para detectar deepfakes</a>.</p>

    <h2>Para quem o SynthID é útil no dia a dia</h2>

    <h3>Quem produz conteúdo</h3>

    <p>Se você cria imagens e vídeos com ferramentas do Google, o arquivo sai com a marca, e qualquer pessoa pode verificar. Isso reforça a importância de ser transparente. Criadores que vendem arte gerada por IA devem avisar o comprador, como discutido em <a href="/artigos/como-vender-artes-e-fotos-criadas-com-ia-generativa">como vender artes e fotos criadas com IA generativa</a>, e quem trabalha com redes sociais pode incluir a checagem no fluxo de aprovação descrito em <a href="/artigos/ia-para-redes-sociais-criar-agendar-analisar-posts">IA para redes sociais</a>.</p>

    <h3>Quem atende, contrata ou compra</h3>

    <p>Lojistas, equipes de atendimento e profissionais de RH recebem arquivos de terceiros o tempo todo: fotos de produto com defeito, documentos, áudios de reclamação. Uma checagem rápida ajuda a decidir quando vale pedir uma confirmação extra. O cuidado com dados continua o mesmo: antes de enviar um arquivo de cliente para qualquer site, lembre que ele pode conter informações pessoais, tema do texto <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade: o que você entrega sem perceber</a>.</p>

    <h2>Erros comuns ao usar um detector de IA</h2>

    <ul>
      <li><strong>Tratar "não encontrado" como "autêntico".</strong> É a confusão mais frequente e a mais perigosa.</li>
      <li><strong>Enviar um print em vez do arquivo.</strong> Capturas de tela recomprimem a imagem e podem apagar sinais. Use o arquivo mais próximo do original.</li>
      <li><strong>Acusar alguém com base no resultado.</strong> Em casos sensíveis, registre as evidências e busque uma segunda opinião antes de acusar ou publicar correção.</li>
      <li><strong>Subir documentos sigilosos.</strong> Contratos, exames e dados de clientes não devem ir para um site sem você entender a política de privacidade dele.</li>
      <li><strong>Ignorar o contexto.</strong> Uma imagem pode ser real e estar fora de contexto. Nenhuma marca d'água detecta isso.</li>
    </ul>

    <p>Também é bom lembrar que assistentes de IA erram ao explicar o que veem, e por isso o guia <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA: como checar se a resposta está certa</a> é leitura complementar quando você pedir ajuda a um chatbot para interpretar uma imagem suspeita.</p>

    <h2>O que muda daqui para frente</h2>

    <p>Segundo o TechCrunch, o Google diz receber cerca de 1 milhão de pedidos de verificação por dia, o que mostra a demanda. A reportagem também cita que OpenAI, Nvidia e Kakao adotaram o SynthID e que a Apple, segundo informações não confirmadas, deve passar a oferecer suporte em breve. Quanto mais empresas usarem o mesmo padrão, mais útil o site fica. Enquanto isso não acontece, a lição prática é simples: use o detector como pista, não como sentença.</p>

    <p>Quer montar uma rotina de verificação para o seu negócio ou para a sua família? Comece pelo <a href="/artigos/ia-gratis-ou-paga-o-que-vale-a-pena">guia de IA grátis ou paga</a> para escolher ferramentas, volte aqui sempre que surgir um arquivo suspeito e acompanhe a categoria Ferramentas do Portal da AI para saber quando o SynthID e os concorrentes ganharem novos recursos.</p>
  `,
  faq: [
    {
      question: "O SynthID é gratuito?",
      answer:
        "O acesso ao site synthid.com é aberto ao público, sem convite, segundo o TechCrunch. A reportagem não informa limite de uso nem cobrança. Como as condições podem mudar, confira a página oficial antes de depender da ferramenta em uma rotina de trabalho.",
    },
    {
      question: "O SynthID identifica qualquer imagem feita por IA?",
      answer:
        "Não. Ele só encontra a marca d'água SynthID, aplicada por ferramentas do Google e de parceiros que adotaram o padrão. Uma imagem criada por outro sistema pode passar sem alerta. Por isso, um resultado negativo não prova que o arquivo é autêntico.",
    },
    {
      question: "Quais formatos de arquivo o SynthID aceita?",
      answer:
        "Segundo o TechCrunch, aceita imagens em JPG, PNG, WEBP, HEIC, GIF e outros, vídeos em MP4, MOV e WEBM, e áudios em WAV, MP3, OGG, FLAC, AAC e M4A. O texto não informa limites de tamanho ou duração.",
    },
    {
      question: "Dá para checar texto gerado por IA com o SynthID?",
      answer:
        "A página do DeepMind diz que textos gerados pelo app e pela versão web do Gemini recebem marca, mas o site noticiado verifica imagem, vídeo e áudio. Para texto, nenhum detector é totalmente confiável, então trate qualquer resultado com cautela.",
    },
    {
      question: "Posso usar o SynthID para provar uma fraude na Justiça?",
      answer:
        "O resultado é um indício técnico, não uma prova conclusiva. Ele não diz quem criou o arquivo nem com que intenção. Em casos sérios, guarde o arquivo original, registre a origem e procure um advogado e, se necessário, um perito em verificação de conteúdo.",
    },
  ],
};
