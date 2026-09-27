import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "microsoft-novo-copilot-home-code-autopilot-agente-persistente",
  title: "Microsoft refaz o Copilot com Home, Code e Autopilot, um agente que trabalha enquanto você está fora",
  summary:
    "Novo Copilot junta chat e Cowork em uma tela inicial, deixa qualquer pessoa criar apps e automações sem programar e estreia o Autopilot, agente que segue executando tarefas sozinho. Cobrança passa a ter parte por uso.",
  author: "Bruno Danello",
  sourceName: "Microsoft",
  sourceUrl: "https://blogs.microsoft.com/blog/2026/09/25/introducing-the-new-copilot-with-home-code-and-autopilot/",
  date: "2026-09-25",
  content: `
    <p>A Microsoft apresentou nesta quinta-feira (25) uma reformulação do Copilot, seu assistente de IA para o trabalho. Segundo o anúncio assinado por Jared Spataro, vice-presidente de marketing de IA no trabalho, o produto passa a girar em torno de três peças: <strong>Home</strong>, <strong>Code</strong> e <strong>Autopilot</strong>.</p>
    <p>O Home vira a tela inicial do aplicativo, reunindo o chat e o modo Cowork com Word, Excel e PowerPoint no mesmo lugar: a pessoa vê o que fez recentemente, recebe sugestões e retoma o trabalho de onde parou. O Code é a aposta em quem não programa: pela mesma tecnologia do GitHub Copilot, dá para descrever em linguagem natural um aplicativo, um painel ou um fluxo de automação e ter tudo rodando dentro do ambiente da própria empresa, em um serviço novo chamado Copilot Managed Runtime.</p>

    <h2>O que muda com o Autopilot</h2>
    <p>A novidade mais falada é o Autopilot, descrito pela Microsoft como um agente persistente, proativo e pessoal, que continua trabalhando mesmo quando a pessoa fecha o computador. Ele recebe tarefas e as executa em Teams, Outlook e documentos, sem depender de alguém acompanhando cada passo. É a mesma lógica dos <a href="/artigos/agentes-de-ia-o-futuro-do-trabalho-autonomo-explicado">agentes de IA autônomos</a> que vêm ganhando espaço no mercado, agora dentro do pacote que boa parte das empresas brasileiras já assina.</p>
    <p>O calendário é escalonado: Home e Code começam a chegar nas próximas semanas para quem participa do programa Frontier, o Autopilot entra em prévia privada até o fim de setembro e a prévia do Code para assinantes do Microsoft 365 Premium e Pro fica para mais adiante no ano. Também estão previstos um centro de comando chamado Today (prévia em outubro) e a menção @Copilot dentro de canais do Teams.</p>

    <h2>Cobrança por uso</h2>
    <p>Junto com o produto, a Microsoft muda o modelo comercial. A licença por usuário segue cobrindo o uso do dia a dia, com roteamento automático entre modelos, mas o trabalho "agêntico" (Cowork, Code e Autopilot) passa a ser cobrado por consumo. Para segurar a conta, a empresa anunciou controles de FinOps para IA, que mostram quanto cada agente gasta.</p>

    <div class="callout-box callout-tip"><span class="callout-label">Por que isso importa para você</span><p>Se a sua empresa já paga Microsoft 365, o Copilot novo é o caminho mais curto para testar um agente de verdade sem contratar nada extra. A conta por uso, porém, exige regra clara de quem pode acionar o Autopilot e para quê. Vale revisar o <a href="/artigos/como-configurar-primeiro-assistente-de-ia-pessoal">passo a passo de configurar um assistente de IA</a> e o guia de <a href="/artigos/ia-para-planilhas-automatizar-relatorios-excel-sheets">automação de relatórios em Excel e Sheets</a>, que são os usos onde o Code tende a render mais rápido.</p></div>
  `,
  faq: [
    {
      question: "O Autopilot do Copilot já está disponível para qualquer usuário?",
      answer:
        "Ainda não. Segundo a Microsoft, o Autopilot entra em prévia privada até o fim de setembro de 2026. Home e Code chegam primeiro para participantes do programa Frontier, e a prévia do Code para assinantes do Microsoft 365 Premium e Pro fica para mais adiante no ano.",
    },
    {
      question: "Quanto vai custar usar os agentes do novo Copilot?",
      answer:
        "A Microsoft não divulgou valores, mas informou que o trabalho com agentes (Cowork, Code e Autopilot) será cobrado por uso, separado da licença mensal por usuário. Os novos controles de FinOps para IA servem para acompanhar esse consumo.",
    },
  ],
};
