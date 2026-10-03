import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "whatsapp-business-cobranca-mensagens-ia-outubro-2026",
  title: "WhatsApp Business API começa a cobrar mensagens de atendimento",
  summary:
    "Desde 1º de outubro, Meta cobra R$ 0,035 por mensagem de serviço e por template de utilidade após franquia mensal de 1.000 mensagens gratuitas por número.",
  author: "Bruno Danello",
  sourceName: "Forbes Brasil",
  sourceUrl: "https://forbes.com.br/forbes-tech/2026/10/entenda-o-que-muda-para-as-empresas-com-a-cobranca-no-whatsapp-business/",
  date: "2026-10-03",
  content: `
    <p>A Meta começou a cobrar, a partir de 1º de outubro, por mensagens de atendimento enviadas por empresas através da API oficial do WhatsApp Business. A mudança afeta dois tipos de mensagem que até então eram gratuitas dentro da janela de 24 horas de conversa com o cliente: as mensagens de serviço, que são as respostas em texto livre escritas por atendentes humanos ou por agentes de inteligência artificial, e os templates de utilidade, usados para confirmações de compra e atualizações de status de pedido. Segundo reportagem da <a href="https://forbes.com.br/forbes-tech/2026/10/entenda-o-que-muda-para-as-empresas-com-a-cobranca-no-whatsapp-business/" target="_blank" rel="noopener noreferrer nofollow">Forbes Brasil</a> publicada nesta semana, cada mensagem cobrada custa R$ 0,035 (US$ 0,0068) para contas faturadas no Brasil.</p>
    <p>A cobrança só entra em vigor depois que a empresa ultrapassa uma franquia mensal de 1.000 mensagens de serviço gratuitas por número de telefone comercial, cota que reinicia todo mês e não acumula saldo para o mês seguinte. O WhatsApp Business comum, aplicativo gratuito usado diretamente do celular por pequenos negócios sem integração via API, não é afetado pela mudança: a cobrança vale só para quem usa a API oficial, geralmente através de plataformas de atendimento, CRMs ou agentes de automação conectados ao número da empresa.</p>

    <h2>Do modelo gratuito à conta por mensagem</h2>
    <p>Até setembro de 2026, o modelo de cobrança do WhatsApp Business API já previa pagamento por templates de marketing e por conversas iniciadas pela empresa fora da janela de atendimento, mas deixava de fora as respostas de texto livre dentro da janela de 24 horas, que ficaram gratuitas desde novembro de 2024. A Meta vinha sinalizando a mudança desde julho, quando lançou a Meta Business Agent Platform, sua própria camada de agentes de IA para atendimento no WhatsApp, cobrada por token processado a partir de agosto. A publicação das tarifas por país aconteceu em setembro, mercado por mercado, mantendo o mesmo valor já praticado para mensagens de utilidade e autenticação.</p>
    <p>A exceção que permanece sem custo é a janela de 72 horas aberta quando o cliente inicia a conversa a partir de um anúncio do tipo "clique para o WhatsApp" ou de um botão de chamada para ação em páginas do Facebook ou Instagram. Nesses casos, toda a troca de mensagens dentro desse período continua gratuita, o que preserva o incentivo da Meta para empresas anunciarem dentro do próprio ecossistema de redes sociais do grupo. Mensagens enviadas pelo cliente para a empresa, em qualquer situação, também continuam sem custo: a cobrança incide apenas sobre o que a empresa envia de volta.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se o seu negócio usa automação com IA para responder clientes no WhatsApp, seja um agente próprio seja uma ferramenta como as descritas em nosso guia de <a href="/artigos/como-automatizar-atendimento-no-whatsapp-com-ia">como automatizar atendimento no WhatsApp com IA</a>, a conta muda de figura a partir de agora. Conversas longas, repetitivas ou mal estruturadas deixam de ser só um custo de tempo e passam a ter custo direto em reais por mensagem trocada. Para operações de volume médio ou alto, como e-commerces, delivery e imobiliárias que recebem centenas de conversas por dia, a franquia de 1.000 mensagens gratuitas por número se esgota rápido, e cada mensagem adicional de um fluxo de atendimento mal otimizado passa a pesar na planilha de custos mensal.</p>
    <p>Na prática, a mudança empurra quem vende ou atende pelo WhatsApp a revisar os fluxos de conversa antes de revisar o orçamento. Um agente de IA bem configurado tende a resolver a dúvida do cliente em menos mensagens do que um roteiro de atendimento humano com idas e voltas, então a diferença entre uma automação enxuta e uma automação verbosa, que manda várias mensagens curtas em vez de uma só mais completa, passa a aparecer direto na fatura. Isso também reforça a diferença prática entre contratar um chatbot simples e montar um agente de IA de verdade, tema que detalhamos em <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">agente de IA, chatbot ou automação: qual a diferença</a>, já que um agente capaz de resolver o pedido do cliente em menos trocas de mensagem economiza dinheiro de forma direta a partir de agora.</p>

    <h2>O que observar nas próximas semanas</h2>
    <p>Plataformas de atendimento e provedores de solução de negócio parceiros da Meta, os chamados BSPs, já começaram a divulgar calculadoras e planos para ajudar empresas a estimar o novo custo mensal e redesenhar fluxos de conversa mais econômicos. Vale acompanhar se painéis de métricas de WhatsApp Business vão passar a mostrar, de forma mais clara, quantas mensagens de serviço cada atendente ou agente de IA consome por atendimento, já que esse número se torna um indicador de custo operacional e não só de produtividade.</p>
    <p>Também é razoável esperar que empresas que hoje terceirizam atendimento para agentes genéricos migrem para soluções mais especializadas por setor, que tendem a resolver o pedido do cliente em menos mensagens porque já conhecem o catálogo de produtos ou o fluxo de atendimento da operação. Quem lida com atendimento em mais de um idioma, como mostramos em <a href="/artigos/como-atender-clientes-em-varios-idiomas-usando-ia">como atender clientes em vários idiomas usando IA</a>, deve prestar atenção redobrada, já que mensagens de tradução ou confirmação extra também entram na mesma contagem cobrada pela Meta.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Resumo rápido</span>
      <p>Desde 1º de outubro de 2026: mensagens de serviço e templates de utilidade dentro da janela de 24h passam a custar R$ 0,035 cada no Brasil, após franquia mensal gratuita de 1.000 mensagens por número. WhatsApp Business comum (sem API) não é afetado. Janela de 72h de anúncios "clique para o WhatsApp" continua gratuita.</p>
    </div>
  `,
  faq: [
    {
      question: "A partir de quando o WhatsApp Business API cobra por mensagem de atendimento?",
      answer:
        "Desde 1º de outubro de 2026. Antes dessa data, mensagens de texto livre enviadas por atendentes ou agentes de IA dentro da janela de 24 horas de conversa eram gratuitas desde novembro de 2024.",
    },
    {
      question: "Quanto custa cada mensagem cobrada no Brasil?",
      answer:
        "R$ 0,035 (equivalente a US$ 0,0068) por mensagem de serviço ou template de utilidade entregue, segundo valores publicados pela Meta e confirmados pela Forbes Brasil. O valor é o mesmo já praticado para mensagens de utilidade e autenticação no país.",
    },
    {
      question: "O WhatsApp Business normal, usado pelo celular, também passa a cobrar?",
      answer:
        "Não. A cobrança vale apenas para empresas que usam a API oficial do WhatsApp Business, geralmente integrada a CRMs, plataformas de atendimento ou agentes de automação. O aplicativo gratuito WhatsApp Business, usado diretamente do celular, não foi afetado pela mudança.",
    },
  ],
};
