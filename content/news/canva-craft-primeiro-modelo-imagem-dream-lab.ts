import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "canva-craft-primeiro-modelo-imagem-dream-lab",
  title: "Canva lança o Craft, seu primeiro modelo próprio de geração de imagens",
  summary:
    "O modelo planeja o layout antes de desenhar, gera imagens de até 2K em 30 proporções e já está no Dream Lab e na API do Canva, sem preço divulgado até agora.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/10/22/canva-releases-its-first-image-generation-model/",
  date: "2026-10-25",
  publishedAt: "2026-10-25T07:40:00-03:00",
  imageQuery: "Canva logo",
  topic: "lancamentos",
  content: `
    <p>O Canva apresentou o Craft, o primeiro modelo de geração de imagens desenvolvido pela própria equipe de pesquisa da empresa. A novidade foi publicada na quinta-feira, 22 de outubro de 2026, em reportagem de Ivan Mehta no <a href="https://techcrunch.com/2026/10/22/canva-releases-its-first-image-generation-model/" rel="noopener noreferrer nofollow">TechCrunch</a>. Segundo a reportagem, o modelo já está disponível para todos os usuários na aba Dream Lab e também pela API do Canva, e a empresa não divulgou preço específico para ele.</p>

    <h2>O que é o Canva Craft</h2>
    <p>Até agora, as imagens geradas dentro do Canva dependiam de modelos de terceiros ou de tecnologia herdada de aquisições. O Craft muda isso: é um modelo próprio, pensado para competir com os sistemas de Google, OpenAI, ByteDance e Meta. O TechCrunch informa que pesquisadores da Leonardo.ai, startup que o Canva comprou em 2024, contribuíram para o desenvolvimento.</p>
    <p>A proposta do Canva é entregar imagens com detalhes corretos de objetos e texto legível, um ponto em que geradores de imagem costumam falhar. A empresa também afirma que o modelo permite edições precisas, alterando só o trecho pedido sem mexer no restante da imagem.</p>

    <h2>Como ele funciona: primeiro planeja, depois desenha</h2>
    <p>O Craft trabalha em duas etapas. Na primeira, ele interpreta o comando e monta um plano que considera as relações espaciais entre os elementos, a escala relativa de cada um, a hierarquia visual e o conteúdo do texto. Na segunda, gera a imagem em si, com resolução de até 2K e em até 30 proporções diferentes, o que cobre de post quadrado a banner largo e formato vertical de história.</p>
    <p>Esse tipo de planejamento prévio é parecido com o que um designer faz ao rabiscar um rascunho antes de produzir a peça final. Na prática, a ideia é reduzir aquele problema conhecido de letras trocadas, objetos fora de proporção e títulos ilegíveis em cartazes gerados por IA.</p>

    <h2>Treinado com modelos de design, não com fotos</h2>
    <p>Um detalhe que diferencia o Craft é a base de treino. O Canva afirma ter usado modelos de design criados por humanos e disponíveis em sua biblioteca, como cartazes, posts para redes sociais, apresentações, infográficos, cardápios e layouts com muita tipografia, em vez de fotografias. Isso ajuda a explicar a ênfase em texto legível e composição organizada, que são o dia a dia de quem usa a plataforma.</p>
    <p>O resultado também conversa com outra peça da estratégia da empresa. As imagens geradas podem ser convertidas em designs com camadas pelo Canva Magic, o transformador de imagem em design da plataforma. O Canva lançou em 2025 o próprio modelo de design e camadas, o que permite pegar uma arte gerada e editar cada elemento separadamente, em vez de ficar preso a uma imagem achatada.</p>

    <h2>Onde usar e o que vem a seguir</h2>
    <p>O acesso é feito de duas formas: pela aba Dream Lab, dentro do Canva, e pela API da empresa, para quem quer integrar a geração de imagens em outros produtos. O TechCrunch também registra que o Canva pretende oferecer geração de imagens em chatbots de terceiros, como ChatGPT e Gemini, por meio do MCP, o protocolo que permite a assistentes de IA usar ferramentas externas.</p>
    <p>A empresa ainda trabalha em duas versões mais baratas e rápidas, chamadas Craftfast e Craft-ultrafast, que devem ser lançadas em breve, sem data confirmada. O TechCrunch observa que ter um modelo próprio também pode ajudar o Canva a reduzir o custo com APIs de outras empresas e a ter mais controle sobre qualidade e velocidade.</p>

    <h2>O contexto financeiro</h2>
    <p>A reportagem lembra que o Canva estava a caminho de US$ 4 bilhões em receita no ano passado, mas reduziu sua projeção de crescimento para 2026. Segundo analistas externos citados pelo TechCrunch, a avaliação da empresa teria caído de US$ 42 bilhões para US$ 35 bilhões. Esses números são estimativas externas, não dados confirmados pela companhia. O lançamento do Craft aparece, portanto, como uma tentativa de reforçar a parte de IA do produto num momento de pressão competitiva.</p>
    <p>Essa pressão vem de todos os lados. O Google ampliou o uso do Nano Banana no Gemini, como mostramos em <a href="/noticias/google-nano-banana-2-1-gemini-imagens">a nossa cobertura do Nano Banana 2.1</a>, a OpenAI atualizou seu gerador em <a href="/noticias/openai-lanca-chatgpt-images-2-5">o lançamento do ChatGPT Images 2.5</a>, e a Adobe segue integrando modelos de terceiros, tema de <a href="/noticias/adobe-ferramentas-criativas-gemini-acrobat-claude">a reportagem sobre as ferramentas criativas da Adobe</a>. Em todos os casos, a disputa é a mesma: quem entrega a imagem mais útil para o trabalho real, não só a mais bonita.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você vende serviços, cuida das redes sociais de um negócio ou cria materiais para clientes, o Canva já é provavelmente a ferramenta de design mais usada no Brasil por quem não é designer. Um gerador de imagens que entende layout e escreve texto sem erro pode economizar horas em posts, cardápios, capas e apresentações. Ao mesmo tempo, vale ter cautela: os dados vêm da reportagem e da própria empresa, e ainda faltam testes independentes e preço claro.</p>
    <p>Algumas formas práticas de se preparar:</p>
    <ul>
      <li>Abra a aba Dream Lab e teste o Craft com uma peça que você já produz, como um post com preço ou um cardápio, para avaliar se o texto sai correto.</li>
      <li>Confira sempre a ortografia em português antes de publicar: modelos de imagem ainda erram acentos e palavras longas.</li>
      <li>Use as camadas do Canva Magic para ajustar cores e títulos depois de gerar a arte, em vez de refazer tudo no comando.</li>
      <li>Se você presta serviço de design ou social media, compare custo e tempo com o fluxo atual antes de mudar o preço do que cobra.</li>
      <li>Guarde o comando usado em cada peça: ele funciona como modelo reaproveitável para o próximo cliente.</li>
    </ul>
    <p>Para aprender o básico, veja <a href="/artigos/como-criar-imagens-com-ia-guia-passo-a-passo">o guia passo a passo para criar imagens com IA</a>, a comparação <a href="/artigos/canva-capcut-e-ia-artes-e-videos-sem-saber-design">sobre Canva, CapCut e IA para artes e vídeos sem saber design</a> e o artigo sobre <a href="/artigos/content-credentials-c2pa-como-saber-se-imagem-foi-feita-por-ia">como saber se uma imagem foi feita por IA</a>, útil para identificar o que você mesmo publica.</p>

    <h2>O que observar a seguir</h2>
    <p>Há três pontos para acompanhar. O primeiro é o preço e os limites de uso do Craft nos planos gratuito e pago, que não foram detalhados. O segundo é a chegada do Craftfast e do Craft-ultrafast, que podem tornar a geração mais barata para quem usa a API. O terceiro é a integração via MCP com ChatGPT e Gemini, que permitiria pedir uma arte do Canva sem sair do chatbot. Até lá, o Craft é um lançamento promissor, descrito principalmente pela própria empresa e pela imprensa, e vale testá-lo com os seus próprios exemplos antes de apostar tudo nele.</p>

  `,
  faq: [
    {
      question: "O que é o Canva Craft?",
      answer:
        "É o primeiro modelo de geração de imagens criado pela equipe de pesquisa do Canva. Ele planeja o layout e o texto antes de gerar a imagem, com até 2K e 30 proporções.",
    },
    {
      question: "Onde posso usar o Craft?",
      answer:
        "Segundo o TechCrunch, ele está disponível para todos os usuários na aba Dream Lab e pela API do Canva. O Canva também pretende levá-lo a chatbots como ChatGPT e Gemini via MCP.",
    },
    {
      question: "Quanto custa o Canva Craft?",
      answer:
        "O preço específico do modelo não foi divulgado na reportagem. Duas versões mais baratas, Craftfast e Craft-ultrafast, estão em desenvolvimento.",
    },
  ],
};
