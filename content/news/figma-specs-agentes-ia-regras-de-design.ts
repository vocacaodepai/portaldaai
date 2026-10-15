import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "figma-specs-agentes-ia-regras-de-design",
  title: "Figma lança o Specs para dar regras de design aos agentes de IA",
  summary:
    "O novo Specs é um editor Markdown dentro do Figma que guarda as regras de design para equipes e agentes de IA, e o code layers entra em beta aberto.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl:
    "https://techcrunch.com/2026/10/14/figma-announces-new-features-to-define-how-agents-work-on-its-platform/",
  date: "2026-10-15",
  publishedAt: "2026-10-15T02:21:36-03:00",
  imageQuery: "Figma logo",
  topic: "lancamentos",
  faq: [
    {
      question: "O que é o Specs do Figma?",
      answer:
        "É um editor baseado em Markdown dentro do Figma onde a equipe escreve e guarda o contexto do projeto, como regras de design, decisões e referências. Ele pode ficar num arquivo próprio ou junto do canvas, e serve de referência tanto para pessoas quanto para agentes de IA, segundo a Figma.",
    },
    {
      question: "O Specs já está disponível para todo mundo?",
      answer:
        "Segundo o blog oficial da Figma, o Specs está chegando em beta aberto para planos pagos, na web, no desktop e no celular. Quem usa só o plano gratuito pode não ter acesso por enquanto. Confira no seu próprio painel antes de contar com o recurso.",
    },
    {
      question: "O que muda com o code layers em beta aberto?",
      answer:
        "O code layers, que permite colocar código funcionando dentro do canvas para criar protótipos mais interativos, deixou o beta privado de junho e agora pode ser testado por mais usuários. Também é possível pedir ao agente que transforme um design em código ou ajuste um trecho do código.",
    },
  ],
  content: `
    <p>A Figma anunciou nesta semana um conjunto de recursos pensado para um problema que quem já usou IA para criar interfaces conhece bem: o agente produz rápido, mas nem sempre respeita as regras da marca. Segundo o <a href="https://techcrunch.com/2026/10/14/figma-announces-new-features-to-define-how-agents-work-on-its-platform/" target="_blank" rel="noopener noreferrer nofollow">TechCrunch</a>, a empresa apresentou um editor baseado em Markdown chamado Figma Specs, ampliou o suporte ao seu servidor MCP e liberou o recurso de code layers em beta aberto. O anúncio aconteceu no primeiro evento Config da empresa na Índia.</p>

    <p>A proposta, de acordo com a reportagem, é dar uma definição clara do que a Figma e agentes de terceiros devem seguir ao criar com IA dentro de um sistema de design. Na prática, em vez de repetir as mesmas instruções a cada pedido, a equipe escreve as regras uma vez, num lugar compartilhado, e os agentes consultam esse material.</p>

    <h2>O que é o Figma Specs</h2>
    <p>O Specs é um editor de Markdown no qual os usuários descrevem a linguagem de design da empresa de forma simples. Segundo o TechCrunch, o documento serve como referência para as equipes e para os agentes enquanto eles trabalham no Figma. Um spec pode existir como arquivo independente ou ficar junto do canvas, e dá para referenciar outros elementos do Figma, como itens do canvas, diagramas do FigJam, code layers e designs.</p>

    <p>No <a href="https://www.figma.com/blog/introducing-figma-specs/" target="_blank" rel="noopener noreferrer nofollow">blog oficial da Figma</a>, a empresa explica a motivação: cada vez mais gente que constrói produtos trabalha em Markdown ao colaborar com agentes, mas esses arquivos costumam ficar isolados no computador de uma pessoa, com pouca ligação com o projeto que os originou. O Specs seria um contêiner multiusuário para esse contexto, que pode entrar e sair do Figma. A Figma também afirma que o agente consegue ler e responder comentários dentro de um spec, como faria um colega.</p>

    <h3>Como criar e usar</h3>
    <ul>
      <li>Segundo a Figma, basta apertar a tecla D ou clicar no ícone de Specs na barra de ferramentas do Figma ou do FigJam.</li>
      <li>Também é possível arrastar um arquivo .md existente para o canvas e transformá-lo em spec.</li>
      <li>O agente da Figma pode ajudar a redigir o spec ao lado dos designs e do código.</li>
      <li>Depois, o spec pode ser enviado a um agente de código pelo servidor MCP da Figma.</li>
    </ul>

    <div class="callout-box">
      <span class="callout-label">Disponibilidade</span>
      <p>De acordo com o blog oficial da Figma, o Specs está sendo liberado em beta aberto para planos pagos, na web, no desktop e no celular. A Figma não detalhou, no texto que consultamos, a data para o plano gratuito nem valores no Brasil.</p>
    </div>

    <h2>Code layers em beta aberto e novos conectores</h2>
    <p>O TechCrunch lembra que a Figma havia apresentado o code layers em beta privado em junho, em uma <a href="https://techcrunch.com/2026/06/24/figma-adds-code-layers-support-for-animations-more-ai-features-in-new-update/" target="_blank" rel="noopener noreferrer nofollow">atualização anterior</a>. O recurso adiciona código ao canvas, para criar protótipos mais interativos. Agora ele entra em beta aberto, e os usuários podem pedir ao agente que transforme um design em código ou altere uma parte do código para iterar no protótipo. A Figma também descreve um caminho de volta: é possível extrair designs de um code layer e convertê-los em camadas de design editáveis.</p>

    <p>Outro ponto do anúncio é o MCP, o protocolo que conecta agentes a ferramentas. A Figma afirma que o servidor agora suporta mais de 20 novas ferramentas, entre elas Open Code, Dia, Grok Bot e a startup indiana de IA Sarvam. Se você ainda não sabe o que é esse protocolo, vale ler nosso explicativo sobre <a href="/artigos/mcp-model-context-protocol-o-que-e-e-como-conecta-agentes-de-ia">o que é MCP e como ele conecta agentes de IA</a>.</p>

    <p>O TechCrunch também registra que, na semana anterior, a empresa liberou seu agente no canvas para uma base maior de usuários. Como a IA é não determinística, ou seja, pode responder de formas diferentes ao mesmo pedido, a Figma diz oferecer ferramentas para conduzir o agente a resultados mais previsíveis. O Specs é uma dessas ferramentas.</p>

    <h2>O que a Figma diz sobre o momento da IA</h2>
    <blockquote>
      <p>"Há 17 vezes mais linhas de código sendo produzidas hoje do que no passado. Mas, quando você olha para os lançamentos, são só 1,3 vez mais lançamentos."</p>
    </blockquote>
    <p>A frase, traduzida pelo Portal da AI, é de Loredana Crisan, diretora de design da Figma, em entrevista ao TechCrunch. Ela argumenta que boa parte desse código não é feita para ir ao ar, e sim para descobrir o que o produto deve ser. Para a Figma, isso reforça a ideia de que a plataforma é o lugar onde equipes de software decidem o que vão construir e entregar.</p>

    <h3>Payload e o mercado indiano</h3>
    <p>A reportagem menciona ainda que a Figma adquiriu no ano passado o Payload, um sistema de gerenciamento de conteúdo (CMS) de código aberto, e agora o integra ao Figma Make, produto usado para gerar sites dinâmicos e gerenciar conteúdo diretamente. A empresa afirma que os downloads do Payload cresceram seis vezes em 12 meses. Sobre o evento, a Índia é o maior mercado da Figma em número de usuários fora dos Estados Unidos, e a plataforma é usada por 40% das 100 maiores empresas listadas na bolsa de Bombaim, segundo a companhia.</p>

    <h2>Por que isso importa para você</h2>
    <p>Esta seção é interpretação do Portal da AI, não informação da Figma. Para designers, freelancers e pequenas equipes brasileiras, o ponto mais útil do anúncio é a ideia de escrever as regras uma vez e reaproveitá-las. Quem já cansou de repetir ao agente "use esta cor, este espaçamento, este tom de voz" pode ganhar tempo ao concentrar essas regras num documento que a equipe e o agente consultam.</p>

    <ul>
      <li><strong>Freelancers:</strong> um spec por cliente pode virar um manual de marca vivo, que reduz retrabalho quando o cliente pede ajustes e facilita passar o projeto para outra pessoa. Para quem está se posicionando, nosso artigo sobre <a href="/artigos/freelancer-na-era-da-ia-como-se-tornar-insubstituivel">como se tornar insubstituível na era da IA</a> mostra por que organizar contexto é um diferencial.</li>
      <li><strong>Pequenas equipes:</strong> documentar decisões ao lado do design pode ajudar quem tem pouco tempo e poucos profissionais. O texto sobre <a href="/artigos/como-times-pequenos-competem-com-grandes-empresas-usando-ia">como times pequenos competem com grandes empresas usando IA</a> trata desse tipo de ganho de escala.</li>
      <li><strong>Quem prototipa ideias:</strong> o code layers em beta aberto aproxima design e código. Se você quer ver o caminho sem programar, leia sobre <a href="/artigos/ia-para-design-de-produto-prototipar-ideia-rapidamente">como prototipar uma ideia rapidamente com IA</a> e sobre <a href="/artigos/vibe-coding-para-nao-programadores-carreira-e-riscos">vibe coding para quem não programa</a>.</li>
    </ul>

    <h3>O que ainda é incerto</h3>
    <p>Ainda é cedo para saber o quanto o Specs realmente deixa os agentes mais previsíveis, já que a própria Figma reconhece a natureza não determinística da IA. Também não encontramos, nas fontes consultadas, informação sobre preço específico para o Brasil, suporte em português ou limites por plano. Como o recurso está em beta e restrito a planos pagos, um freelancer que usa a versão gratuita deve testar antes de prometer algo a um cliente. Vale ainda lembrar que regras escritas num spec não substituem a revisão humana: a decisão final de design continua sendo de quem assina o trabalho.</p>

    <p>O movimento da Figma também conversa com o que outras empresas de criação fazem ao conectar agentes às suas ferramentas, como mostramos na cobertura sobre as <a href="/noticias/adobe-ferramentas-criativas-gemini-acrobat-claude">ferramentas criativas da Adobe integradas a Gemini e Claude</a>. A tendência é clara: o diferencial deixa de ser só gerar mais rápido e passa a ser controlar melhor o que a IA gera.</p>
  `,
};
