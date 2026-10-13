import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "amex-intent-framework-agentes-compras-nao-autorizadas",
  title: "Amex cria framework para barrar compras não autorizadas de agentes de IA",
  summary:
    "A American Express apresentou o Intent Intelligence Framework, que registra e autentica a intenção de compra do cliente antes de um agente de IA finalizar a transação.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/10/13/amex-introduces-a-framework-to-prevent-ai-agents-from-making-unauthorized-purchases/",
  date: "2026-10-13",
  publishedAt: "2026-10-13T10:24:11-03:00",
  topic: "seguranca",
  imageQuery: "American Express headquarters",
  content: `
    <p>A American Express apresentou nesta terça-feira (13) o Intent Intelligence Framework, um conjunto de regras e serviços criado para capturar e autenticar a intenção de compra de um cliente antes que um agente de IA conclua uma transação em nome dele. A informação é da <a href="https://techcrunch.com/2026/10/13/amex-introduces-a-framework-to-prevent-ai-agents-from-making-unauthorized-purchases/" target="_blank" rel="noopener noreferrer nofollow">TechCrunch</a>, em texto assinado por Sarah Perez, editora de notícias de consumo do site.</p>

    <p>Segundo a reportagem, agentes pessoais de IA fazem cada vez mais transações para os usuários. Como os modelos de linguagem são não determinísticos, eles podem agir fora do que a pessoa pretendia, o que aumenta o risco de transações não autorizadas. A Amex quer carregar as instruções de compra do cliente por todo o ciclo de vida da transação e espera que o framework vire um padrão do setor para pagamentos feitos por IA.</p>

    <h2>Como o framework funciona</h2>
    <p>De acordo com a TechCrunch, o processo é dividido em etapas que ligam o que o cliente pediu ao que o agente de fato tenta comprar:</p>

    <ol>
      <li><strong>Create Intent API:</strong> captura as instruções e restrições do cliente, como nome do comerciante, orçamento máximo e preferências de produto. A forma de coletar essas informações pode variar conforme o modelo de IA, e a Amex diz que quer suportar todos os modelos de comércio com agentes.</li>
      <li><strong>Autenticação:</strong> o cliente confirma a própria identidade e aprova a intenção capturada.</li>
      <li><strong>Identificadores:</strong> o sistema cria um Intent ID e um Proof of Intent Token, que carrega as restrições de alto nível.</li>
      <li><strong>Credencial de pagamento:</strong> o token obtém uma credencial digital segura, que o agente usa no checkout no lugar do número real do cartão.</li>
      <li><strong>Uso posterior:</strong> o Intent ID e o token podem apoiar a prevenção de fraude e a resolução de disputas ao longo da transação.</li>
    </ol>

    <p>Um dos exemplos dados na reportagem: se o cliente pede a um agente um tênis Nike branco, tamanho 9, e o agente tenta comprar um par da Adidas, a Amex poderia bloquear a transação. Para Hannah Bozian, vice-presidente de parcerias e estratégia de comércio com agentes da Amex, o objetivo é manter essas transações "seamless, trusted, and secure" (fluidas, confiáveis e seguras). Ela disse à TechCrunch que as novas transações terão três participantes, um consumidor, um comerciante e um agente, e que a abordagem da empresa "pulls intent earlier into the transaction flow" (traz a intenção para mais cedo no fluxo da transação), o que ajuda a reduzir o risco antes que ele aconteça.</p>

    <h2>Contexto: o que a Amex já tinha anunciado</h2>
    <p>O framework segue o lançamento, em abril, do Agentic Commerce Experiences (ACE), um kit de ferramentas para desenvolvedores. O Intent Intelligence Framework agora passa a ser um dos serviços dentro do ACE. A Amex afirma que não viu aumento de disputas vindas do comércio com agentes e que está construindo a tecnologia cedo, enquanto esse tipo de compra ganha escala.</p>

    <p>A reportagem cita ainda dados do relatório Trendex da empresa: 66% dos consumidores americanos ouvidos disseram ser prováveis usuários de agentes de IA para pesquisar o melhor preço, e 61% disseram o mesmo para recomendações de produtos ou serviços nos próximos 12 meses. Os números descrevem intenção declarada em pesquisa nos Estados Unidos, não uso real medido.</p>

    <p>A TechCrunch também descreve cenários de futuro. Os agentes podem agir de forma mais autônoma, por exemplo reabastecendo itens de casa como papel toalha ou papel higiênico, em que só preço e tamanho importam. Nesses casos, segundo a Amex, uma verificação técnica faz sentido. Um registro do que cada agente estava autorizado a fazer, e quando, também poderia ajudar a lidar com fraudes cometidas em nome de um agente.</p>

    <h2>Por que isso importa para você</h2>
    <p>A notícia trata de cartões americanos e de um produto voltado a desenvolvedores e parceiros do ecossistema de pagamentos, e a reportagem não diz que o framework esteja disponível no Brasil. Mesmo assim, o problema que ele tenta resolver é universal: quando você delega uma compra a um agente de IA, quem garante que ele comprou exatamente o que você pediu?</p>

    <p>Para o leitor brasileiro, há alguns pontos práticos que valem desde já:</p>

    <ul>
      <li><strong>Delegar compra é delegar poder:</strong> antes de deixar qualquer agente pagar por você, entenda quais limites ele aceita (valor máximo, loja, tipo de produto) e se você consegue revisar o pedido antes da cobrança.</li>
      <li><strong>Cartão virtual e credencial própria:</strong> a ideia de usar uma credencial no lugar do número real do cartão é um bom princípio. Sempre que seu banco oferecer cartão virtual com limite, prefira esse caminho a entregar o cartão físico a uma ferramenta nova.</li>
      <li><strong>Rastro de decisão:</strong> o registro de o que foi autorizado e quando é o que torna uma contestação possível. Guarde prints e confirmações de qualquer compra feita por agente.</li>
      <li><strong>Atenção a golpes:</strong> a automação de compras também atrai fraudadores. Vale reforçar os hábitos de <a href="/artigos/como-usar-ia-para-checar-mensagem-suspeita-e-evitar-golpes">checar mensagens suspeitas com IA</a>.</li>
    </ul>

    <p>Se você quer entender o cenário maior de agentes que fazem compras, leia o guia sobre <a href="/artigos/agentes-de-ia-comprando-por-voce-comercio">agentes de IA comprando por você</a>. Para a diferença entre as categorias de ferramenta, veja <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">chatbot, automação e agente de IA</a>. E, antes de conectar dados de pagamento a qualquer serviço, passe pelo <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher ferramentas de IA com segurança</a>.</p>

    <p>Quem tem loja online também deve prestar atenção. Se agentes passarem a comprar em nome de clientes, o comerciante entra na conta: haverá pedidos feitos por software, e a discussão sobre quem responde por um erro de compra tende a chegar ao varejo. Outras empresas de pagamento também se movimentam nessa direção, como mostram as notícias sobre a <a href="/noticias/mastercard-alchemy-agentcard-agentes-ia-compras">Mastercard e o AgentCard</a> e sobre o <a href="/noticias/worldline-protocolo-comercio-universal-pagamentos-agentes-ia">protocolo de comércio universal da Worldline</a>.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Cuidado prático</span>
      <p>Se você testar um agente que compra por você, comece com valores baixos e com um limite fixo. Confira o pedido antes de aprovar e só amplie a autonomia depois de ver o agente acertar várias vezes.</p>
    </div>

    <h2>O que observar a seguir</h2>
    <p>Segundo a TechCrunch, a Amex está conversando com parceiros do ecossistema de pagamentos sobre a implementação do ACE, que inclui tokens para agentes que carregam credenciais de pagamento da empresa, além de outros componentes do kit. A companhia diz que vai continuar desenvolvendo o ACE conforme o ecossistema de comércio com agentes evolui.</p>

    <p>O primeiro ponto a acompanhar é a adesão: a Amex quer que o framework vire padrão, e isso depende de outras empresas, como comerciantes, plataformas de agentes e outras bandeiras, aceitarem usar algo parecido. O segundo é a prática: a reportagem não informa quais comerciantes ou plataformas já testam o framework, nem prazos de lançamento. O terceiro é o equilíbrio entre segurança e conveniência. Quanto mais verificações, mais fricção, e a proposta de um comércio "seamless" precisa conviver com isso.</p>

    <p>Também vale observar como o modelo vai tratar compras recorrentes e de baixo risco, em que a própria Amex reconhece que uma checagem técnica pode bastar, e como o registro de autorização será usado em disputas reais. A empresa diz não ter visto aumento de contestações até agora, mas o volume de transações por agentes ainda é pequeno perto do que se projeta.</p>

    <p>Bozian vai falar sobre o framework no dia 13 de outubro, no palco Industry Stage do TechCrunch Disrupt 2026, em San Francisco. Para quem acompanha pagamentos e IA, a lição é que a corrida dos agentes de compra deixou de ser só sobre quem consegue comprar sozinho e passou a ser também sobre quem consegue provar o que o cliente realmente quis.</p>
  `,
  faq: [
    {
      question: "O que é o Intent Intelligence Framework da Amex?",
      answer:
        "É um framework da American Express que captura e autentica a intenção de compra do cliente, como orçamento máximo, comerciante e preferências de produto, antes de um agente de IA concluir a transação. Ele faz parte dos serviços do ACE, o kit de ferramentas da empresa para comércio com agentes.",
    },
    {
      question: "Como o agente paga sem usar o número do cartão?",
      answer:
        "Segundo a TechCrunch, depois que o cliente se autentica e aprova a intenção, o sistema cria um Intent ID e um Proof of Intent Token. O token obtém uma credencial digital segura de pagamento, que o agente usa no checkout no lugar do número real do cartão.",
    },
    {
      question: "O framework da Amex já funciona no Brasil?",
      answer:
        "A reportagem da TechCrunch não informa disponibilidade no Brasil. Ela diz que a Amex discute a implementação do ACE com parceiros do ecossistema de pagamentos e que quer que o framework se torne padrão do setor.",
    },
  ],
};
