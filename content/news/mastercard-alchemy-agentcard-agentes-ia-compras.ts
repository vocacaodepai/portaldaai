import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "mastercard-alchemy-agentcard-agentes-ia-compras",
  title: "Mastercard e Alchemy lançam cartão virtual para agentes de IA fazerem compras sem aprovação a cada transação",
  author: "Bruno Danello",
  summary:
    "Pelo Mastercard Agent Pay, integrado ao AgentCard da Alchemy, usuários conectam um agente de IA já existente ao próprio cartão e definem limites de gasto e restrições de onde ele pode comprar — a rede usa 'tokens agênticos' que empacotam a intenção declarada do usuário com os detalhes da transação.",
  sourceName: "PYMNTS",
  sourceUrl: "https://www.pymnts.com/news/artificial-intelligence/2026/mastercard-alchemy-partner-enable-everyday-agentic-payments/",
  date: "2026-09-17",
  content: `
    <p>A Mastercard lançou o Agent Pay, uma ferramenta de pagamento por IA que permite emitir um cartão de crédito virtual diretamente para o agente de IA de um usuário, deixando o bot fazer compras sem precisar da aprovação do titular do cartão a cada transação. O produto chega ao mercado através de uma parceria com a startup Alchemy, cujo AgentCard já havia firmado integração semelhante com a Visa no início do ano — o que significa que a maioria dos cartões de crédito hoje pode funcionar com a ferramenta.</p>

    <h2>Como funcionam os limites de segurança</h2>
    <p>Usuários conectam um agente de IA que já utilizam ao próprio cartão Mastercard através da Alchemy e definem restrições sobre o que o agente pode fazer — incluindo tetos de gasto e limites sobre em quais lojas ele pode comprar. A integração usa "tokens agênticos", gerados pelo banco emissor do cartão, que empacotam a intenção declarada do titular junto com os detalhes da transação, permitindo que a rede de pagamentos confirme que o agente está operando dentro dos limites autorizados.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Da busca ao checkout</span>
      <p>O lançamento é descrito pela Mastercard como um passo que leva as compras por IA "da busca ao checkout" — até agora, muitos agentes de IA conseguiam ajudar a pesquisar e comparar produtos, mas a etapa final de pagamento ainda exigia intervenção manual do usuário na maioria dos casos.</p>
    </div>

    <h2>Por que isso importa</h2>
    <p>O lançamento reforça uma tendência que já discutimos em nosso texto sobre <a href="/artigos/agentes-de-ia-comprando-por-voce-comercio">agentes de IA comprando por você no comércio</a>: à medida que redes de pagamento como Mastercard e Visa criam infraestrutura dedicada para agentes autônomos, o comércio "agêntico" deixa de ser conceito experimental e passa a ter trilhos formais de segurança e autorização — o mesmo tipo de controle de acesso e limites que já discutimos como fundamental em nosso guia sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a>.</p>
  `,
};
