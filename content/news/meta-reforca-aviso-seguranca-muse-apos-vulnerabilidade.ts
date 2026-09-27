import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "meta-reforca-aviso-seguranca-muse-apos-vulnerabilidade",
  title: "Meta reforça aviso de segurança no Muse após vulnerabilidade que expunha dados de usuários",
  author: "Bruno Danello",
  summary:
    "Um pesquisador externo reportou pelo programa de recompensas por bugs da Meta uma falha que poderia permitir a um invasor acessar a máquina virtual dedicada de um usuário do Muse, com dados como e-mails e arquivos — classificada como SEV-2, o terceiro nível de gravidade mais alto da empresa, o terceiro problema de segurança do assistente em cinco dias.",
  sourceName: "The Information",
  sourceUrl: "https://www.theinformation.com/briefings/exclusive-meta-bolsters-muse-safety-warning-security-vulnerability-found",
  date: "2026-09-25",
  content: `
    <p>A Meta está adicionando um aviso de segurança mais claro dentro do Muse, seu assistente pessoal de IA, depois que um pesquisador externo encontrou uma vulnerabilidade que poderia permitir a um invasor acessar informações pessoais sensíveis de um usuário. A falha, reportada por meio do programa de recompensas por bugs da empresa e não divulgada anteriormente, foi classificada como "SEV-2" — o terceiro nível de gravidade mais alto numa escala de cinco pontos usada internamente pela Meta, normalmente reservado a incidentes de impacto significativo.</p>

    <h2>O que a falha permitia</h2>
    <p>Segundo a reportagem, a vulnerabilidade poderia ter permitido que um invasor acessasse a máquina virtual dedicada de um usuário do Muse — uma conta individual baseada em nuvem que contém dados como e-mails e arquivos pessoais. O Muse, lançado no início de setembro, é o assistente pessoal de IA da Meta projetado para realizar tarefas como compras, reservas de viagem, envio de e-mails e pagamentos em nome dos usuários.</p>

    <div class="callout-box callout-warn">
      <span class="callout-label">Terceiro problema em cinco dias</span>
      <p>A mudança no aviso de segurança do Muse é a resposta da Meta ao terceiro problema de segurança a vir à tona no assistente em apenas cinco dias — um ritmo que chama atenção especialmente porque o aplicativo já acumula cerca de 2,8 milhões de downloads em suas duas primeiras semanas, segundo estimativas da Sensor Tower, além de liderar os rankings de aplicativos gratuitos nos Estados Unidos e no Canadá.</p>
    </div>

    <h2>Por que isso importa</h2>
    <p>O episódio reforça um padrão que já discutimos em nosso texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade: o que você entrega sem perceber</a>: assistentes de IA que ganham permissão para agir em nome do usuário — fazendo compras, enviando e-mails, acessando arquivos — também ampliam a superfície de ataque disponível caso alguma falha de segurança seja explorada. Para um produto que cresceu tão rápido em tão pouco tempo, a sequência de vulnerabilidades encontradas em poucos dias reforça a importância de testes de segurança rigorosos antes — e não só depois — de um lançamento em larga escala.</p>
  `,
};
