import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "dhs-proibe-deepseek-orgaos-federais-civis-eua",
  title: "EUA mandam órgãos federais civis abandonarem a DeepSeek",
  summary:
    "O DHS ordenou que agências civis dos EUA deixem de usar produtos da DeepSeek e removam o que já usam, com uma regra vaga para produtos de terceiros.",
  author: "Bruno Danello",
  sourceName: "The Register",
  sourceUrl: "https://www.theregister.com/security/2026/10/20/deepseek-deep-sixed-at-all-us-federal-civilian-agencies/5304010",
  date: "2026-10-19",
  publishedAt: "2026-10-19T23:22:00-03:00",
  topic: "regulacao",
  imageQuery: "DeepSeek logo",
  content: `
    <p>O Departamento de Segurança Interna dos Estados Unidos (DHS) emitiu na segunda-feira (19) uma ordem que manda todas as agências civis do governo federal pararem de usar produtos da DeepSeek, laboratório chinês de IA, e retirarem qualquer implementação que já exista. A informação é da <a href="https://www.theregister.com/security/2026/10/20/deepseek-deep-sixed-at-all-us-federal-civilian-agencies/5304010" target="_blank" rel="noopener noreferrer nofollow">The Register</a>, em reportagem de Thomas Claburn. O texto cobre "todos os produtos da DeepSeek e de afiliadas" e também "produtos e serviços de terceiros desenvolvidos com implementações da DeepSeek", e é justamente essa segunda parte que gera dúvida.</p>

    <h2>O que a ordem determina</h2>
    <p>Na prática, qualquer órgão civil federal americano que use o chatbot, a API ou modelos da DeepSeek precisa desligar e remover. A ordem não atinge, por ora, as forças armadas, que já bloqueavam a ferramenta desde 2025. A Defense Information Systems Agency começou a barrar a DeepSeek nas redes do Pentágono em janeiro daquele ano, e a Marinha, a NASA e a Câmara dos Representantes seguiram o mesmo caminho, assim como vários estados.</p>
    <p>Desde o lançamento do modelo R1, no início de 2025, autoridades americanas discutem uma proibição ampla. Em fevereiro de 2025, os deputados Darin LaHood e Josh Gottheimer apresentaram o projeto No DeepSeek on Government Devices Act, que travou em comissão. Sem lei aprovada, cada agência agiu por conta própria. A ordem do DHS muda isso ao criar uma regra única para o setor civil.</p>
    <figure>
      <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/DeepSeek_purple.png" alt="Logotipo da DeepSeek em roxo" />
      <figcaption>Foto: RoadMaster19 / Wikimedia Commons (CC BY 4.0)</figcaption>
    </figure>

    <h2>Onde a regra fica vaga</h2>
    <p>Segundo a reportagem, a ordem é ampla e imprecisa. Não está claro quais produtos de terceiros se enquadram em "desenvolvidos com implementações da DeepSeek". Isso pode significar apenas serviços que embutem o modelo, mas também poderia alcançar qualquer aplicativo cujo código tenha sido escrito ou testado com ajuda da DeepSeek. Um porta-voz do DHS não respondeu ao pedido de comentário.</p>
    <p>Outro ponto em aberto são os intermediários de modelos, como OpenRouter e Vercel AI Gateway. Esses serviços encaminham cada pedido ao "melhor provedor disponível", de modo que uma agência poderia usar a DeepSeek sem querer, a menos que restrinja a lista de provedores. A ordem não trata desse cenário.</p>
    <p>Katie Moussouris, fundadora e CEO da Luta Security, disse à publicação que banir o aplicativo e a API da própria DeepSeek é viável, mas que a cláusula de terceiros é impraticável. Para ela, "desenvolvido com" não tem definição, uma lista de componentes de software de IA não registra quais ferramentas os programadores usaram, e não há como um fornecedor provar que a DeepSeek jamais tocou no seu código. Moussouris também afirmou que aplicar a regra a modelos da DeepSeek hospedados em servidores americanos vai longe demais, já que a hospedagem local evita boa parte do risco de dados indo para a China.</p>

    <h2>Os riscos citados</h2>
    <p>Parlamentares americanos tratam a DeepSeek como ameaça à segurança nacional, com o argumento de que seus serviços coletam dados de cidadãos e os repassam ao governo chinês. Pouco depois do lançamento do R1, pesquisadores apontaram falhas de segurança e privacidade no aplicativo para iPhone. Um relatório de dezembro de 2025 sobre os apps de Android e iOS encontrou vazamento de informações em texto aberto, ligações com servidores operados por empresas de tecnologia chinesas e ausência de SSL pinning, uma proteção contra interceptação de tráfego.</p>
    <p>A própria reportagem pondera que esses problemas são, em sua maioria, falhas comuns de aplicativos móveis e não resolvem a questão de fundo: o risco de capturar prompts e respostas, ou de agentes de IA lerem segredos e dados sensíveis guardados no computador. Moussouris lembrou que o instituto americano NIST considerou a DeepSeek mais vulnerável a injeção de comandos e mais fácil de desbloquear do que modelos dos EUA, mas ressaltou que todo modelo tem problemas de injeção de comandos e que barreiras contra desbloqueio também podem atrapalhar quem defende sistemas.</p>

    <h2>O efeito no mercado</h2>
    <p>A reportagem sugere que o momento pode favorecer empresas americanas de IA, entre elas a Anthropic, que espera abrir capital em breve. Os modelos abertos chineses ganharam espaço por serem capazes e baratos. Agências impedidas de usá-los podem acabar pagando os preços definidos pelas fabricantes de modelos americanas preferidas. Para a DeepSeek, que vem crescendo em receita e se prepara para uma oferta de ações, o recado é de que o acesso ao mercado público americano continua a encolher.</p>
    <p>Vale lembrar que a decisão vale para órgãos federais civis dos EUA. Ela não proíbe cidadãos nem empresas privadas americanas de usar a DeepSeek, e não tem efeito legal no Brasil. O que muda é o sinal: governos tendem a tratar o país de origem do modelo como critério de risco, e esse critério costuma chegar depois aos contratos de empresas que vendem para o setor público.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você usa a DeepSeek no trabalho, a ordem não o impede de continuar, mas é um bom momento para revisar o que você coloca nela. O texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a> explica que tipo de dado não deve ir para nenhum chat, seja de qual país for. Para escolher ferramentas com critério, o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher ferramenta de IA com segurança</a> ajuda a pesar origem, termos de uso e onde os dados ficam.</p>
    <p>Quem presta serviço ou monta automações para clientes maiores, especialmente de setores regulados ou que vendem para governos americanos, deve esperar perguntas do tipo "qual modelo está por baixo disso?". Ter um plano para trocar de modelo sem refazer o projeto inteiro vira vantagem. Acompanhamos esse movimento de preços e acesso em <a href="/noticias/deepseek-search-fetch-api-preco-por-busca">DeepSeek lança APIs de busca e leitura de páginas</a> e em <a href="/noticias/deepseek-v4-1-flash-mantem-v4-pro">DeepSeek V4.1 Flash e a manutenção do V4 Pro</a>.</p>
    <p>O cenário geopolítico também pesa. Veja como a China reagiu com regras próprias em <a href="/noticias/china-controle-exportacao-ia-modelos-agentes-rascunho-catalogo">controle de exportação de IA</a> e como o debate sobre pesos abertos e segurança chegou ao Congresso americano em <a href="/noticias/khanna-pesos-modelos-ia-seguranca-china">o caso do deputado Khanna</a>. Para o lado financeiro da empresa, leia <a href="/noticias/deepseek-capta-12-bilhoes-tencent-catl-ipo-2027">a captação da DeepSeek com Tencent e CATL</a>.</p>

    <h2>O que observar daqui para frente</h2>
    <p>O DHS ainda precisa esclarecer o alcance da cláusula de terceiros e se modelos da DeepSeek rodando em nuvem americana ficam de fora. Também vale acompanhar se os estados e o setor privado copiam a medida, e se a ordem estimula intermediários de modelos a oferecer filtros por país de origem. Até lá, a regra prática é simples: saiba qual modelo roda por trás de cada ferramenta que você usa e mantenha a opção de trocá-lo.</p>

    <div class="callout-box">
      <span class="callout-label">Fonte original</span>
      <p>Reportagem da <a href="https://www.theregister.com/security/2026/10/20/deepseek-deep-sixed-at-all-us-federal-civilian-agencies/5304010" target="_blank" rel="noopener noreferrer nofollow">The Register</a>, publicada em 20 de outubro de 2026. O DHS não comentou a ordem até a publicação.</p>
    </div>
  `,
};
