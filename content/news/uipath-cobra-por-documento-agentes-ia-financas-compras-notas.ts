import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "uipath-cobra-por-documento-agentes-ia-financas-compras-notas",
  title: "UiPath vai cobrar por documento nos seus agentes de IA de finanças",
  summary:
    "A UiPath lança agentes de IA prontos para compras e contas a pagar, cobrados por documento processado, não por projeto. A estreia fica para o início de 2027.",
  author: "Bruno Danello",
  sourceName: "The Next Web",
  sourceUrl:
    "https://thenextweb.com/news/uipath-per-document-pricing-source-to-pay-agents",
  date: "2026-11-04",
  publishedAt: "2026-11-04T03:23:00-03:00",
  imageQuery: "UiPath logo",
  topic: "lancamentos",
  content: `
    <p>A UiPath, uma das maiores empresas de automação de processos do mundo, decidiu mudar a forma de vender seus agentes de inteligência artificial para a área financeira. Em vez de montar um projeto sob medida para cada cliente, com meses de consultoria antes de qualquer robô funcionar, a empresa vai oferecer um produto pronto para compras e contas a pagar e cobrar por documento processado. A novidade foi apresentada na segunda-feira (2), no evento UiPath FUSION, realizado no Museu do Futuro, em Dubai, e relatada pelo site The Next Web.</p>

    <p>O produto se chama UiPath Solution for Source-to-Pay, nome que no jargão do setor cobre o caminho inteiro que vai da busca por um fornecedor até o pagamento da nota. Ele tem duas partes principais: os agentes de compras (procurement) e os de processamento de faturas. As duas chegam no início de 2027. Outros módulos financeiros, como o de pedido até recebimento (order-to-cash), estão previstos para meados de 2027.</p>

    <h2>Como funciona a cobrança</h2>
    <p>A conta é simples: o cliente paga um valor por item multiplicado pela quantidade de itens que os agentes processaram. Se em um mês a empresa recebeu mil notas de fornecedores e os agentes cuidaram delas, a fatura acompanha esse volume. A UiPath não divulgou o preço por documento, então ainda não dá para comparar o custo com o de um funcionário ou de outras ferramentas.</p>

    <p>A lógica por trás da mudança foi explicada por Mircea Giurcan, diretor sênior de transformação da UiPath, que conduziu a apresentação em Dubai. Segundo ele, a equipe de produto percebeu há cerca de um ano que boa parte do trabalho financeiro é igual em qualquer empresa e em qualquer setor. Uma nota fiscal é uma nota fiscal, seja numa fábrica, seja num hospital. Giurcan resumiu a ideia com uma frase direta: o setor de contas a pagar de ninguém é especial, e não deveria ser.</p>

    <p>Ele também contou que os clientes mais maduros da UiPath gastam a maior parte do esforço de automação antes de qualquer robô rodar: escolhendo processos, analisando indicadores, entrevistando funcionários e montando a justificativa de negócio. Um produto padronizado corta boa parte dessa etapa.</p>

    <h2>O que a demonstração mostrou</h2>
    <p>Na apresentação, a UiPath mostrou os dois lados do produto em ação. No lado de compras, um funcionário pediu dez notebooks para um evento. O agente verificou se a compra era permitida pelas regras internas, descobriu quem precisava aprovar o pedido e encontrou o fornecedor que costuma vender aquele item. Ao perceber que o preço cotado estava acima dos pedidos anteriores, o agente escreveu um e-mail ao representante comercial do distribuidor, citando o número da requisição, e deixou o pedido em espera até a resposta chegar. Segundo Giurcan, um comprador levaria cerca de meia hora para fazer esse trabalho na mão.</p>

    <p>No lado das faturas, os agentes recebem as notas no formato em que elas chegam (PDF, imagem, e-mail), conferem os dados e lançam tudo no sistema de gestão da empresa, o ERP.</p>

    <h2>Uma estratégia que já vinha sendo montada</h2>
    <p>O anúncio fecha um caminho que a UiPath vem desenhando ao longo de 2026. Em março, a empresa apresentou os agentes de compras com o nome UiPath Solution for Purchase-to-Pay, mas sem preço nem data de lançamento. Em fevereiro, comprou a WorkFusion para crescer no setor financeiro. Em setembro, lançou o Cartographer, um agente que mapeia processos e, segundo Giurcan, reduz o número de entrevistas necessárias para entender como uma área trabalha. No mesmo evento de setembro, o presidente-executivo Daniel Dines defendeu que as pessoas precisam continuar no comando da IA. E, em julho, a guinada da empresa para os agentes de IA foi bem recebida pelos investidores.</p>

    <p>A cobrança por resultado também acompanha um movimento maior do mercado. Fornecedores de software corporativo estão trocando a licença por usuário por modelos ligados ao trabalho que a IA de fato entrega. A Workday, por exemplo, já anunciou <a href="/noticias/workday-cobranca-por-uso-agentes-ia-orcamento-mao-de-obra">cobrança por uso dos seus agentes de IA, tirada do orçamento de mão de obra</a>. A diferença da UiPath é amarrar o preço a uma unidade que qualquer gerente financeiro entende: o documento.</p>

    <h2>Os pontos em aberto</h2>
    <p>Há limites claros no que se sabe até agora. O preço por documento não foi revelado, e sem ele não há como saber se o modelo compensa para empresas de volume menor. A reportagem não cita nenhum cliente usando o produto, e a estreia só acontece em 2027, o que deixa tempo para mudanças. Também não está claro como a cobrança trata documentos que o agente não consegue resolver sozinho e que precisam voltar para um humano.</p>

    <p>Outro ponto é o custo da própria IA por trás do serviço. Agentes fazem muitas chamadas a modelos para cada tarefa, e a Gartner já alertou que <a href="/noticias/gartner-custo-agentes-ia-quintuplica-2028">o custo por fluxo com agentes pode ficar mais de cinco vezes maior até 2028</a>. Ao cobrar por documento, a UiPath assume esse risco: se o processamento de uma nota sair mais caro do que o previsto, a margem é dela, não do cliente.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você trabalha no <strong>financeiro de uma empresa</strong>, a mensagem é que contas a pagar e compras estão entre as primeiras áreas a ganhar agentes de IA prontos para uso, com preço previsível. Isso muda a conversa com a diretoria: em vez de pedir verba para um projeto grande e incerto, dá para comparar o custo por nota com o tempo que a equipe gasta hoje. O guia sobre <a href="/artigos/copilot-para-financas-no-excel-conciliacao-lancamentos-e-quem-tem-acesso">Copilot para finanças no Excel</a> mostra o que já dá para automatizar com ferramentas que muitas empresas brasileiras já pagam.</p>

    <p>Se você <strong>vende automação para pequenas e médias empresas</strong>, a cobrança por documento é uma ideia que dá para copiar já. Cobrar por nota lançada ou por pedido conferido é mais fácil de vender do que horas de consultoria, porque o cliente enxerga o valor na hora. Os textos sobre <a href="/artigos/como-vender-pacotes-de-automacao-de-ia-para-negocios-locais">como vender pacotes de automação de IA para negócios locais</a> e sobre <a href="/artigos/n8n-para-iniciantes-como-vender-automacoes-com-ia">n8n para iniciantes</a> ajudam a montar essa oferta.</p>

    <p>E se você vai colocar um agente para mexer em compras ou pagamentos, a demonstração da UiPath mostra um cuidado importante: o agente parou o pedido quando o preço estava fora do padrão, em vez de seguir sozinho. Antes de soltar qualquer agente em dinheiro de verdade, vale definir o que ele pode fazer sozinho e quando precisa pedir aprovação, como explica o guia sobre <a href="/artigos/permissoes-de-agentes-de-ia-o-que-liberar-o-que-travar-e-quando-pedir-aprovacao">permissões de agentes de IA</a>.</p>
  `,
};
