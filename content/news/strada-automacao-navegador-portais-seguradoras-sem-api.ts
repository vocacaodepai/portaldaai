import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "strada-automacao-navegador-portais-seguradoras-sem-api",
  title: "Strada lança automação de navegador para que agentes de IA operem portais de seguradoras sem precisar de API",
  author: "Bruno Danello",
  summary:
    "A nova capacidade grava e reproduz fluxos de trabalho dentro de portais de operadoras e sistemas legados que não oferecem integração via API, usando as mesmas credenciais e permissões já atribuídas aos funcionários humanos — cada etapa fica registrada para fins de auditoria.",
  sourceName: "IT Business Net",
  sourceUrl: "https://itbusinessnet.com/2026/09/strada-launches-browser-automation-for-carrier-portals-and-legacy-systems-without-apis/",
  date: "2026-09-24",
  content: `
    <p>A Strada, empresa de automação com IA voltada ao setor de seguros, lançou uma capacidade de automação de navegador que permite que seus agentes naveguem e completem tarefas diretamente em sistemas baseados na web, sem depender de integração via API. Muitos sistemas do setor — incluindo portais de operadoras e sistemas legados — simplesmente não oferecem API, o que até agora limitava a automação possível nesses ambientes.</p>

    <h2>Como funciona na prática</h2>
    <p>A automação de navegador permite que os agentes da Strada operem diretamente dentro desses sistemas usando as mesmas credenciais e permissões que uma operadora, MGA, corretora por atacado ou TPA (administrador terceirizado) já atribui aos próprios funcionários humanos. Um endosso de apólice, por exemplo, pode avançar de uma solicitação recebida até a atualização do registro no sistema, com cada etapa registrada ao longo do caminho para fins de auditoria.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Gravar uma vez, repetir sempre</span>
      <p>A automação roda dentro dos fluxos de trabalho já existentes da Strada, ao lado dos agentes de voz, chat e e-mail já em produção — basta um usuário gravar uma tarefa uma única vez para que a empresa a capture como um fluxo de trabalho executável, que os agentes passam a rodar depois sobre dados reais.</p>
    </div>

    <h2>Por que isso importa</h2>
    <p>O lançamento ilustra uma solução prática para um problema comum de automação corporativa: setores inteiros, como o de seguros, ainda dependem de sistemas legados sem API pronta para integração, o que historicamente travava iniciativas de automação mais ambiciosas. Ao operar diretamente pela interface visual — como faria um funcionário humano —, esse tipo de agente consegue contornar essa limitação sem exigir que cada seguradora modernize sua própria infraestrutura antes de adotar IA.</p>
  `,
};
