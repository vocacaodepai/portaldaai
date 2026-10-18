import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-consulta-escritorios-advocacia-agentes-ia-negociar",
  title: "Anthropic consulta escritórios de advocacia para ensinar IA a negociar",
  summary:
    "Segundo o Financial Times, a Anthropic fala com advogados para criar regras para agentes de IA que negociam: quanta autonomia dar e quando chamar o humano.",
  author: "Bruno Danello",
  sourceName: "The420.in",
  sourceUrl: "https://the420.in/anthropic-ai-agents-negotiate-deals-lawyers/",
  date: "2026-10-18",
  publishedAt: "2026-10-18T10:35:00-03:00",
  imageQuery: "Dario Amodei portrait",
  topic: "regulacao",
  content: `
    <p>A Anthropic está consultando escritórios de advocacia para entender como um agente de IA deve se comportar quando negocia em nome de uma pessoa, segundo a reportagem do Financial Times, repercutida neste domingo pelo site indiano <a href="https://the420.in/anthropic-ai-agents-negotiate-deals-lawyers/" rel="noopener noreferrer nofollow">The420.in</a>. A ideia é descobrir como os advogados defendem os interesses de um cliente sem abrir mão da justiça na mesa de negociação, e se esses princípios podem virar regra para máquinas.</p>
    <p>Os casos citados vão de barganhar o preço de um produto a resolver disputas e negociar condições de emprego. O ponto central, de acordo com a <a href="https://the420.in/anthropic-ai-agents-negotiate-deals-lawyers/" rel="noopener noreferrer nofollow">publicação</a>, é quanta liberdade um agente deve ter ao seguir as instruções do usuário e em que momentos ele precisa parar e pedir orientação, em vez de decidir sozinho. A Anthropic chama o conjunto de regras em estudo de "normas de negociação".</p>

    <h2>O que a Anthropic está estudando</h2>
    <p>De acordo com o relato, a empresa conversa com escritórios para entender como advogados negociam por clientes protegendo os interesses deles e mantendo a lealdade a princípios de equidade. A pergunta de fundo é se algo parecido pode guiar um agente de IA quando ele negocia com outro sistema automatizado ou com um representante humano.</p>
    <p>Um dos desenhos em discussão são instruções assinadas pelo usuário, que deixariam registrado o que o agente está autorizado a fazer e quais decisões exigem aprovação extra. Na prática, funcionaria como uma procuração digital com limites claros: o agente pode pedir desconto até certo valor, mas não aceita cláusula nova sem consultar você.</p>
    <p>O texto dá exemplos simples. Um agente que compra um notebook poderia procurar o agente do vendedor, negociar o preço e tentar uma oferta melhor, sem que o dono precise comparar lojas ou falar com ninguém. O mesmo modelo poderia, no futuro, ajudar em aluguéis, reclamações de atendimento e contratos de trabalho, inclusive em uma negociação salarial em que o agente tenta melhorar as condições de quem o contratou.</p>

    <figure>
      <img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Dario_Amodei_at_TechCrunch_Disrupt_2023_01.jpg" alt="Dario Amodei, CEO da Anthropic, em palco do TechCrunch Disrupt em 2023" />
      <figcaption>Foto: TechCrunch / Wikimedia Commons (CC BY 2.0)</figcaption>
    </figure>

    <h2>O que já se sabia sobre agentes que negociam</h2>
    <p>O tema não é novo para a empresa. Em setembro, a Anthropic divulgou um experimento em que funcionários usaram agentes para comprar e vender livros num pregão virtual. Cobrimos o teste na notícia sobre o <a href="/noticias/anthropic-project-swap-agentes-negociam-marketplace">Project Swap</a>. Agentes instruídos a agir de forma implacável conseguiram resultados um pouco melhores, enquanto os cooperativos às vezes aceitavam um livro menos desejado só para que todos saíssem com algo.</p>
    <p>A lição é incômoda: a instrução dada ao agente muda o resultado da negociação. Se você manda o seu agente ser duro, ele tende a ganhar mais, mas isso pode piorar o clima quando o outro lado também é uma máquina com a mesma ordem.</p>
    <p>Há ainda o risco de segurança. A reportagem cita uma pesquisa da professora Michelle Vaccaro, da Harvard Business School, com mais de 180 mil negociações entre agentes, em situações como ofertas de emprego e contratos de aluguel. Segundo o estudo, um agente pode usar prompt injection, que é esconder comandos dentro do material que o outro sistema lê, para fazer o adversário revelar informações privadas. Já tratamos de um caso brasileiro parecido em <a href="/noticias/stf-prompt-injection-peticao-maria-shield">petição com prompt injection no STF</a>.</p>

    <h2>Por que isso importa para você</h2>
    <p>Quem trabalha por conta própria, vende serviço ou toca um pequeno negócio negocia o tempo todo: preço com fornecedor, prazo com cliente, valor de contrato. Quando agentes passarem a fazer parte dessa conversa, a vantagem vai para quem souber dar boas instruções e colocar limites. Um agente sem limites pode fechar um acordo que você não aceitaria, e hoje não existe regra clara dizendo quem responde por isso no Brasil.</p>
    <p>Isso conecta com o que já discutimos em <a href="/artigos/agentes-de-ia-comprando-por-voce-comercio">agentes de IA comprando por você</a> e em <a href="/noticias/amex-intent-framework-agentes-compras-nao-autorizadas">o framework da Amex contra compras não autorizadas de agentes</a>: o setor está tentando definir, antes que o problema estoure, o que o agente pode fazer sozinho e o que exige o seu "sim".</p>
    <p>Existe também a questão da desigualdade, que a publicação destaca. Se os melhores agentes ficarem restritos a quem pode pagar mais, quem tem acesso a eles negocia em vantagem em aluguel, emprego e compras. Para o trabalhador brasileiro, isso vale como alerta: a IA pode ajudar a pedir um salário melhor, como mostramos em <a href="/artigos/como-negociar-salario-melhor-sabendo-usar-ia">como negociar salário melhor usando IA</a>, mas só funciona se o outro lado não tiver um agente muito mais forte.</p>

    <div class="callout-box">
      <span class="callout-label">Ponto de atenção</span>
      <p>Até agora, o que existe é consulta e estudo. A Anthropic não anunciou um produto de negociação nem uma data. A informação vem de relato jornalístico, e as regras podem mudar bastante até virarem algo concreto.</p>
    </div>

    <h2>Como se preparar já</h2>
    <p>Mesmo sem agente negociador no mercado, dá para adotar hábitos que vão servir quando ele chegar. O primeiro é definir por escrito o que você aceita e o que não aceita antes de pedir qualquer ajuda de IA numa negociação: preço mínimo, prazo máximo, cláusulas que não passam.</p>
    <ul>
      <li>Nunca dê a um agente acesso a informação que você não revelaria ao outro lado, como seu orçamento máximo ou sua urgência.</li>
      <li>Exija aprovação humana para qualquer fechamento, assinatura ou pagamento.</li>
      <li>Guarde o histórico da conversa entre agentes, porque ele pode ser a prova se houver disputa depois.</li>
      <li>Desconfie de mensagens que pareçam instruções escondidas dentro de propostas, e-mails ou PDFs recebidos.</li>
    </ul>
    <p>Para quem já usa IA para preparar a conversa com fornecedores, vale reler o passo a passo de <a href="/artigos/como-usar-ia-para-negociar-melhor-com-fornecedores">como usar IA para negociar melhor com fornecedores</a>, que mantém o humano no comando e usa a ferramenta só para pesquisar preço e montar argumentos.</p>

    <h2>O que observar daqui para frente</h2>
    <p>Três pontos merecem acompanhamento. O primeiro é se a Anthropic vai publicar essas normas de negociação, já que a discussão com escritórios sugere um documento aberto. O segundo é como outras empresas, como OpenAI, Google e Meta, que já oferecem agentes de compra, vão tratar o mesmo problema. O terceiro é a reação de reguladores: a questão de responsabilidade, ou seja, quem paga quando um agente fecha um mau negócio, ainda não tem resposta na lei brasileira.</p>
    <p>Enquanto isso, a conclusão prática é simples. Agente de IA negociando por você deixa de ser ficção científica, e a diferença entre ganhar e perder vai estar menos no modelo escolhido e mais nas regras, nos limites e na aprovação que você mantiver nas suas mãos.</p>

    <div class="callout-box">
      <span class="callout-label">Fonte original</span>
      <p>Reportagem do Financial Times, repercutida pelo <a href="https://the420.in/anthropic-ai-agents-negotiate-deals-lawyers/" rel="noopener noreferrer nofollow">The420.in</a> em 18 de outubro de 2026.</p>
    </div>
  `,
  faq: [
    {
      question: "O que são normas de negociação para agentes de IA?",
      answer:
        "São regras que definem como um agente deve negociar em nome de uma pessoa: quanta autonomia ele tem, quais decisões exigem aprovação humana e como tratar o outro lado com equidade. A Anthropic estuda o tema com escritórios de advocacia.",
    },
    {
      question: "Já existe um agente da Anthropic que negocia por mim?",
      answer:
        "Não há anúncio de produto. O que existe é um experimento interno de setembro, o Project Swap, e consultas a advogados relatadas pela imprensa.",
    },
  ],
};
