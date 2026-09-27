import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "pesquisador-exporta-6gb-arquivos-agente-muse-meta",
  title: "Pesquisador consegue exportar 6,8 GB de arquivos internos do agente Muse, da Meta, só com comandos de chat",
  author: "Bruno Danello",
  summary:
    "Sem usar nenhum código de exploração, o pesquisador Peter James pediu ao Muse para compactar seu próprio sistema de arquivos e enviar para o Google Drive, obtendo acesso a documentação interna, chaves SSH e scripts de configuração do ambiente Linux que roda o agente — a Meta classificou o achado como 'não aplicável' em seu programa de recompensas.",
  sourceName: "The Verge",
  sourceUrl: "https://daily.dev/posts/i-asked-meta-s-muse-for-its-filesystem-and-it-sent-me-6-8-gb-vdevyqj0t",
  date: "2026-09-24",
  content: `
    <p>O pesquisador de segurança Peter James publicou um relato detalhado de como conseguiu extrair 6,8 GB de arquivos internos do Muse, o agente pessoal de IA da Meta, usando apenas comandos de chat comuns — sem escrever uma linha de código de exploração. Ele simplesmente pediu ao próprio Muse para compactar seu sistema de arquivos e enviar o resultado para o Google Drive.</p>

    <h2>O que estava dentro do arquivo</h2>
    <p>O despejo obtido incluía arquivos de sistema do Ubuntu, documentação interna, chaves SSH, armazenamento de memória, diretórios de habilidades ("skills") e scripts de configuração de contêiner do ambiente Linux que roda o Muse. O material revelou detalhes da arquitetura interna do agente — internamente batizado de "Hatch" —, incluindo um sistema de memória baseado em Postgres com embeddings vetoriais, uma rotina noturna de "autorreflexão" chamada de "dream", cerca de 68 integrações de habilidades e indícios de uma integração de hardware ainda não lançada, batizada de "Home Link".</p>

    <div class="callout-box callout-warn">
      <span class="callout-label">Meta diz que não é uma falha de segurança</span>
      <p>O programa de recompensas por bugs da Meta classificou o relato como "não aplicável", argumentando que cada máquina virtual do Muse pertence ao próprio usuário, e que exportar seu conteúdo não dá acesso à infraestrutura da Meta nem aos dados de outras pessoas.</p>
    </div>

    <h2>Por que isso importa</h2>
    <p>O episódio expõe, na prática, o quanto agentes de IA pessoais rodam sobre ambientes computacionais complexos e cheios de detalhes internos — memória persistente, credenciais, scripts de automação — que a maioria dos usuários nunca imaginaria estar acessível. Mesmo sem configurar um vazamento de dados de terceiros, o caso reforça uma preocupação que já discutimos em nosso texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a>: quanto mais autonomia e acesso um agente de IA recebe sobre o próprio ambiente de execução, mais superfície de exposição existe para quem souber pedir da forma certa.</p>
  `,
};
