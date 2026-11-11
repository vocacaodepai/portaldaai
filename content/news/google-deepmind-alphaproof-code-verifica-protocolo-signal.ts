import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "google-deepmind-alphaproof-code-verifica-protocolo-signal",
  title: "DeepMind usa agentes de IA para provar a segurança do código do Signal",
  summary:
    "Com o AlphaProof Code, a DeepMind provou em quatro semanas que o código do protocolo Signal cumpre garantias-chave de segurança. Nenhuma falha nova apareceu.",
  author: "Bruno Danello",
  sourceName: "Google DeepMind, WIRED",
  sourceUrl: "https://deepmind.google/blog/introducing-alphaproof-code/",
  date: "2026-11-11",
  publishedAt: "2026-11-11T17:26:00-03:00",
  topic: "seguranca",
  imageQuery: "Signal messenger logo",
  content: `
    <p>O Google DeepMind anunciou nesta terça-feira (10 de novembro) que usou agentes de inteligência artificial para provar matematicamente que o código do protocolo Signal cumpre algumas das suas principais garantias de segurança. O Signal é a tecnologia de criptografia de ponta a ponta usada no aplicativo de mesmo nome e no Google Mensagens, e a reportagem da WIRED sobre o caso lembra que a mesma criptografia também protege conversas no WhatsApp. O trabalho foi feito com uma ferramenta nova, chamada AlphaProof Code, e levou quatro semanas.</p>
    <p>Segundo o laboratório, é a primeira vez que a IA é usada para verificar formalmente, nesse nível de profundidade, um protocolo criptográfico usado em larga escala. A DeepMind vai além e afirma que é também a primeira vez que a implementação de um protocolo desse porte é verificada formalmente por qualquer método, com ou sem IA. A análise não encontrou nenhuma vulnerabilidade nova nas partes do protocolo que foram examinadas.</p>

    <h2>O que exatamente foi provado</h2>
    <p>Verificação formal é o processo de usar matemática para demonstrar que um programa faz o que deveria fazer, sem brechas. É considerada o padrão mais alto de garantia em segurança de software, mas sempre foi lenta e cara, porque exige especialistas para descrever o comportamento esperado, transformar essa descrição em fórmulas e depois escrever as provas.</p>
    <p>A maioria das verificações de protocolos criptográficos para no nível do projeto, ou seja, prova que a ideia do protocolo é segura no papel. O diferencial apresentado pela DeepMind é ter chegado ao código compilado, aquele que de fato roda nos aparelhos. Entre as propriedades provadas está a de manter as mensagens protegidas antes e depois de um aparelho ser comprometido temporariamente, uma das promessas centrais do Signal. Como muitas falhas reais aparecem justamente na distância entre o projeto e a implementação, fechar essa lacuna torna as provas bem mais complexas.</p>
    <p>A própria WIRED ressalta os limites do trabalho: a análise cobriu propriedades específicas do protocolo e não verificou, por exemplo, o aplicativo móvel do Signal inteiro. Também não há, nas fontes, nenhuma afirmação de que o código próprio do WhatsApp ou de outros aplicativos tenha sido examinado. O que foi verificado é o código do protocolo mantido pelo Signal.</p>

    <figure>
      <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Pushmeet_Kohli_at_SXSW_London_2026_%28cropped%29.jpg" alt="Pushmeet Kohli, vice-presidente de pesquisa do Google DeepMind, no SXSW London 2026" loading="lazy" />
      <figcaption>Foto: Photographer.JuliaMustard / Wikimedia Commons (CC BY-SA 4.0)</figcaption>
    </figure>

    <h2>Como o AlphaProof Code funciona</h2>
    <p>A DeepMind descreve o AlphaProof Code como um sistema com vários modelos de linguagem que divide o trabalho como faria uma equipe de pesquisa. Primeiro, pesquisadores humanos trabalharam junto com os modelos para traduzir os objetivos de segurança do Signal em especificações matemáticas formais, e cada uma delas foi revisada por especialistas. Depois, agentes movidos pelo Gemini Carbon, o modelo mais avançado do Google, fizeram as provas e geraram mais de seis milhões de linhas em Lean, uma linguagem usada para escrever demonstrações matemáticas que o próprio computador confere.</p>
    <p>Na etapa seguinte, os agentes auditaram as provas e apontaram os trechos que mereciam uma segunda olhada humana. Segundo o laboratório, só 1% do código precisou desse reforço, porque o Lean confere automaticamente o resto. Isso permitiu que os especialistas concentrassem a revisão onde o julgamento humano faz diferença.</p>
    <p>Para testar se a ferramenta realmente separa código correto de código com defeito, a equipe recolocou duas falhas reais, já corrigidas no passado, numa versão isolada do código do Signal. Nos dois casos, o sistema produziu uma prova verificada de que a versão com defeito era insegura. Swarat Chaudhuri, cientista de pesquisa da DeepMind, disse à WIRED que a ideia é fugir de um cenário em que a IA cria os objetivos, cria as provas e corrige a própria prova, e que o processo busca um meio-termo, com revisão humana nos pontos decisivos.</p>
    <p>O laboratório admite que teve uma vantagem inicial: o Signal já havia passado por trabalhos anteriores de verificação formal, o que adiantou parte do caminho. O diretor de tecnologia do Signal, Ehren Kret, afirmou em nota que as verificações anteriores tinham foco em partes menores do código e que a abordagem da DeepMind permite uma expansão significativa. Ele acrescentou que, com o aumento das ameaças de segurança movidas por IA, verificar com rigor a implementação do protocolo dá à organização ainda mais confiança nas garantias de privacidade do código.</p>

    <h2>O que ainda não se sabe</h2>
    <p>A grande dúvida, apontada pela WIRED, é se esse tipo de verificação automatizada consegue ganhar escala com um custo que caiba no bolso das empresas. A análise do Signal foi feita de graça, como projeto de pesquisa, e o Google se recusou a informar quanto ela custou. A empresa também não quis comentar se pretende lançar um produto ou serviço comercial de verificação formal.</p>
    <p>A DeepMind diz que vai abrir para a comunidade os artefatos de verificação, incluindo a especificação e as provas desenvolvidas para o Signal, e publicou um artigo técnico junto com o anúncio. Pushmeet Kohli, vice-presidente de pesquisa da DeepMind, citou à WIRED bancos e outras empresas que dependem de garantias contra falhas como possíveis beneficiários, caso a técnica possa ser aplicada a outros sistemas. O laboratório menciona ainda firmware de dispositivos médicos e software de redes elétricas como próximos alvos possíveis, mas reconhece que ampliar a técnica exige mais pesquisa. Chaudhuri disse à revista que ainda há um longo caminho até que seja possível levar isso a todo o software do mundo.</p>
    <p>O anúncio vem duas semanas depois de o Google liberar o Gemini 4 Carbon primeiro para especialistas em defesa cibernética, como o Portal da AI contou em <a href="/noticias/google-gemini-4-carbon-lancamento-ranking-preco">Google lança o Gemini 4 Carbon</a>. A disputa entre os laboratórios em segurança digital está acirrada: a OpenAI também apresentou recentemente um modelo voltado a defensores, que <a href="/noticias/openai-lanca-gpt-6-cyber-81-falhas-firefox-948-exploits-linux">achou 81 falhas graves no Firefox</a>. A diferença é que, em vez de caçar falhas, o trabalho da DeepMind com o Signal tenta provar que elas não existem nas partes analisadas.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para o usuário comum no Brasil, a notícia é tranquilizadora, mas não muda nada no dia a dia. A verificação foi feita sobre o código do protocolo do Signal, e o resultado reforça que a criptografia desenhada para proteger conversas faz o que promete nas propriedades testadas. Isso não significa que o seu celular esteja imune: a maior parte dos golpes que atingem brasileiros não quebra criptografia nenhuma, e sim engana a pessoa para que ela entregue códigos, senhas ou dinheiro. Nosso guia sobre <a href="/artigos/como-usar-ia-para-checar-mensagem-suspeita-e-evitar-golpes">como usar IA para checar mensagem suspeita</a> continua sendo mais útil para o cotidiano do que qualquer prova matemática.</p>
    <p>Também vale lembrar que uma conversa criptografada protege o caminho da mensagem, não o que você decide compartilhar com aplicativos e assistentes. Quem quer entender esse outro lado pode ler <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade: o que você entrega sem perceber</a>.</p>
    <p>Para empresas e desenvolvedores, o recado é outro. Se a verificação formal com agentes ficar barata, ela pode virar exigência em setores como bancos, saúde e infraestrutura, e a procura por profissionais capazes de escrever especificações e revisar provas tende a crescer. Quem pensa em entrar na área encontra um ponto de partida em nosso texto sobre <a href="/artigos/carreira-em-ciberseguranca-com-ia-vagas-trilha-e-habilidades">carreira em cibersegurança com IA</a>. Por enquanto, porém, o Google não tem produto à venda nem preço divulgado, e o resultado é uma demonstração de pesquisa, não uma ferramenta disponível para o mercado.</p>
  `,
  faq: [
    {
      question: "O WhatsApp foi verificado pela DeepMind?",
      answer:
        "Não. A verificação foi feita sobre o código do protocolo mantido pelo Signal. O WhatsApp usa a mesma criptografia, mas as fontes não dizem que o código do aplicativo da Meta foi examinado.",
    },
    {
      question: "O AlphaProof Code está disponível para empresas?",
      answer:
        "Não há produto comercial anunciado. O Google não informou o custo da análise e não comentou planos comerciais. A DeepMind disse que vai abrir os artefatos de verificação do Signal para a comunidade.",
    },
  ],
};
