import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "openai-modelos-google-cloud-model-garden-codex",
  title: "OpenAI vai vender GPT-6 Astra e o Codex também no Google Cloud",
  summary:
    "Em acordo anunciado nesta quarta, OpenAI e Google levam modelos de fronteira e o Codex ao Model Garden nas próximas semanas, com compra pelo Marketplace.",
  author: "Bruno Danello",
  sourceName: "Reuters",
  sourceUrl:
    "https://www.thestar.com.my/tech/tech-news/2026/10/21/openai-to-sell-its-top-models-on-google-cloud-in-latest-enterprise-push",
  date: "2026-10-21",
  publishedAt: "2026-10-21T15:35:00-03:00",
  topic: "negocios",
  imageQuery: "Google Cloud data center",
  content: `
    <p>A OpenAI vai passar a vender seus modelos de fronteira e o agente de programação Codex também dentro do Google Cloud. O anúncio foi feito nesta quarta-feira, 21 de outubro, pelas duas empresas e é o assunto de uma reportagem da <a href="https://www.thestar.com.my/tech/tech-news/2026/10/21/openai-to-sell-its-top-models-on-google-cloud-in-latest-enterprise-push" target="_blank" rel="noopener noreferrer nofollow">Reuters</a>, republicada pelo jornal The Star. Segundo a agência, a disponibilidade deve começar nas próximas semanas, e os modelos mais recentes da OpenAI, como o GPT-6 Astra, entram no Model Garden, o catálogo de modelos da nuvem do Google.</p>

    <p>Para quem não trabalha com tecnologia, a notícia parece coisa de bastidor entre gigantes. Mas ela mexe em algo bem concreto: por onde as empresas vão comprar IA, quanto vão pagar e com qual facilidade vão trocar de modelo. Isso acaba chegando, mais adiante, nos produtos e serviços que o profissional autônomo e o pequeno empresário usam todos os dias.</p>

    <h2>O que foi anunciado</h2>
    <p>De acordo com a Reuters, clientes do Google Cloud poderão comprar os modelos da OpenAI pelo Google Cloud Marketplace e usar os compromissos de gasto que já têm com a nuvem para pagar por eles. Na prática, uma empresa que já tem um contrato grande com o Google não precisa abrir uma relação nova e separada com a OpenAI para usar o GPT-6 Astra: o consumo entra na mesma conta.</p>
    <p>A reportagem também diz que empresas de setores regulados, como o financeiro e o de saúde, poderão usar os modelos com os controles de acesso, as ferramentas de governança de dados e a infraestrutura do Google Cloud para montar fluxos de trabalho com agentes de IA. Segundo a cobertura do PYMNTS sobre o mesmo anúncio, os modelos também chegarão ao Antigravity, o ambiente de desenvolvimento do Google, e ao Gemini Agent, que aparece como uma etapa que ainda vai chegar. As duas empresas falam em dar às companhias "flexibilidade de escolha de modelo".</p>
    <p>A Reuters não traz preços, datas exatas de lançamento geral nem a lista completa de modelos que entrarão no catálogo. O que há é a direção: modelos de fronteira da OpenAI e o Codex disponíveis no Google Cloud em um prazo de semanas, sem data fechada.</p>

    <h2>Por que a OpenAI está indo para outras nuvens</h2>
    <p>O contexto, segundo a agência, é o fim da exclusividade que a OpenAI tinha com a Microsoft para distribuir seus modelos em nuvem, que expirou em abril. Desde então, a empresa também ampliou a presença na Amazon Web Services. Com o Google, os modelos da OpenAI passam a estar disponíveis nas três maiores nuvens dos Estados Unidos. A Reuters lembra que as duas companhias competem em produtos de IA e em busca, mas cooperam porque construir e operar grandes modelos é muito caro. O Google já havia fechado, no ano passado, um acordo com a OpenAI para fornecer mais capacidade de computação.</p>
    <p>Do lado do Google, o recado vem do CEO do Google Cloud, Thomas Kurian, que já disse à Reuters em entrevista anterior que a plataforma é aberta e recebe bem qualquer modelo popular entre desenvolvedores. A agência observa ainda que as grandes nuvens estão se tornando os principais canais comerciais dos laboratórios de IA, e que costumam ficar com uma porcentagem das vendas feitas em suas plataformas.</p>

    <h2>O peso das nuvens na receita dos laboratórios</h2>
    <p>A reportagem traz um dado que ajuda a dimensionar esse canal. Segundo o pedido de abertura de capital da Anthropic, visto pela Reuters, 47% da receita da empresa em 2025 veio das plataformas de nuvem da Amazon e do Google. Ou seja, vender por meio das grandes nuvens deixou de ser um complemento e virou o caminho principal para chegar às empresas. É esse caminho que a OpenAI agora completa, ao colocar seus modelos no Google depois de já estar na Microsoft e na Amazon.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Na prática</span>
      <p>Se a sua empresa já paga uma nuvem (Google, Amazon ou Microsoft), vale perguntar ao fornecedor se dá para usar o saldo contratado para consumir modelos de IA. Em muitos casos, isso simplifica a compra e a contabilidade, e deixa trocar de modelo sem refazer a integração do zero.</p>
    </div>

    <h2>Por que isso importa para você</h2>
    <p>Para a maioria das pessoas, o ChatGPT e o Claude continuam sendo usados pelo aplicativo ou pelo navegador, e nada muda hoje. O efeito é indireto, mas real. Quando os mesmos modelos podem ser comprados em várias nuvens, as empresas ganham poder de negociação e a concorrência por preço tende a aumentar. O Portal da AI já acompanhou esse movimento na <a href="/noticias/anthropic-openai-guerra-precos-opus-5-5-gpt-6-sol-luna">guerra de preços entre Anthropic e OpenAI</a>, e a disputa agora se estende a quem entrega o modelo e em que condições.</p>
    <p>Para o freelancer e o dono de pequeno negócio que contrata sistemas feitos por terceiros, a consequência é a escolha. Uma agência ou um desenvolvedor que monta automações para você poderá, em tese, usar o modelo que fizer mais sentido para cada tarefa, sem ficar preso a um único fornecedor. Se isso aparecer na proposta, pergunte qual modelo será usado e como a cobrança funciona. Para entender o básico dessa decisão, vale ver o comparativo <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini: qual IA escolher</a>.</p>
    <p>Há ainda a questão do Codex. O agente de programação da OpenAI passa a estar disponível dentro de um ambiente que muitas equipes de desenvolvimento já usam. Quem vende serviços de automação, sites ou sistemas pode se beneficiar de ferramentas que atendem o cliente onde ele já está. Se esse é o seu caso, o Portal da AI explica <a href="/artigos/como-ganhar-dinheiro-criando-e-vendendo-agentes-de-ia-personalizados">como ganhar dinheiro criando e vendendo agentes de IA personalizados</a> e como o <a href="/artigos/mcp-model-context-protocol-o-que-e-e-como-conecta-agentes-de-ia">MCP conecta agentes de IA a outros sistemas</a>, um padrão que torna mais fácil conectar um modelo a vários serviços.</p>
    <p>Por fim, o assunto custo. Em modelos de cobrança por uso, a conta varia conforme o volume de trabalho. Para entender como reduzir gastos sem perder qualidade, leia sobre <a href="/artigos/como-usar-ia-para-reduzir-custos-operacionais-pequenos-negocios">como usar IA para reduzir custos operacionais em pequenos negócios</a>.</p>

    <h2>O que ainda não se sabe</h2>
    <p>Vale separar o que foi dito do que falta. A Reuters informa que a chegada acontecerá "nas próximas semanas", sem dia marcado. Não há detalhes publicados sobre preço por milhão de tokens no Google Cloud, sobre se o preço será igual ao praticado pela OpenAI diretamente, nem sobre quais regiões terão acesso. Também não está claro se o Brasil terá os modelos hospedados localmente, o que costuma importar para empresas com exigências de proteção de dados.</p>
    <p>Outra dúvida é sobre o efeito na relação entre as empresas. A OpenAI e o Google competem diretamente em assistentes, em busca e em ferramentas para programadores, e a própria Reuters destaca essa rivalidade. O acordo mostra que, no mercado corporativo, o interesse comercial pesa mais do que a competição de produto. Isso pode se repetir com outros pares de rivais, e é um sinal útil para quem tenta prever como os preços e as ofertas de IA vão evoluir.</p>

    <h2>O que acompanhar daqui para a frente</h2>
    <p>Os próximos passos a observar são a data de disponibilidade geral no Model Garden, a tabela de preços, a chegada ao Antigravity e ao Gemini Agent e a reação da Microsoft e da Amazon, que passam a dividir a vitrine com o Google. Também vale acompanhar se a Anthropic, que já tem forte presença nas nuvens da Amazon e do Google, responderá com novos acordos ou condições comerciais. Para quem usa IA no trabalho, a mensagem é simples: o modelo está deixando de ser prisão de um único fornecedor, e quem entende essa mudança negocia melhor, escolhe melhor e gasta menos.</p>

  `,
};
