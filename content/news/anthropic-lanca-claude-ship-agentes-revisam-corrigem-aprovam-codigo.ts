import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-lanca-claude-ship-agentes-revisam-corrigem-aprovam-codigo",
  title: "Anthropic lança Claude Ship: agentes que revisam e aprovam código",
  summary:
    "Claude Ship reúne Code Review, PR Steward e Claude Approvals: agentes que revisam, corrigem e até aprovam mudanças de código por regras definidas pelo time.",
  author: "Bruno Danello",
  sourceName: "TechCrunch, Anthropic",
  sourceUrl:
    "https://techcrunch.com/2026/11/23/anthropic-launches-claude-ship-letting-ai-agents-review-fix-and-approve-code-changes/",
  date: "2026-11-24",
  publishedAt: "2026-11-24T08:25:00-03:00",
  topic: "lancamentos",
  imageQuery: "Anthropic logo",
  content: `
    <p>A Anthropic anunciou na segunda-feira, 23 de novembro, o Claude Ship, um conjunto de agentes de IA que revisam, corrigem e aprovam mudanças de código. Segundo a TechCrunch, a empresa, que acabou de abrir capital, quer passar de "Claude escreve o código" para "Claude ajuda a decidir quando o código está pronto para ir ao ar". O ponto novo é um agente que pode aprovar mudanças de rotina sozinho, seguindo regras que o próprio time escreve.</p>

    <h2>O que se sabe</h2>
    <p>O Claude Ship tem três peças. A primeira é o Code Review, que já estava disponível para todos e analisa pull requests (as propostas de mudança de código). As outras duas são novas e estão em beta: o PR Steward e o Claude Approvals.</p>
    <p>O PR Steward cuida do que costuma travar uma mudança depois de aberta: testes automáticos que falham, conflitos na hora de juntar o código e comentários deixados pela revisão. Segundo a TechCrunch, a cada envio ele comenta o que alterou e como desfazer, se for preciso.</p>
    <p>O Claude Approvals aplica uma política de aprovação que o time escreve como arquivo dentro do próprio repositório, em linguagem natural. A decisão pode levar em conta os achados do Code Review e os classificadores da própria empresa. É a parte que mais chama atenção, porque ferramentas de IA para programar já ofereciam revisão antes, mas não deixavam um agente aprovar a mudança.</p>

    <div class="callout-box">
      <span class="callout-label">Como começar, segundo a matéria</span>
      <p>Como o recurso está em beta, a Anthropic sugere rodar a aprovação primeiro em modo só de observação, começar por um único repositório e definir limites de gasto mensais. O time escolhe onde o Claude Ship roda, o nível de revisão (Rápido, Padrão ou Profundo) e quais mudanças sempre sobem para uma pessoa decidir.</p>
    </div>

    <h2>Quem pode usar</h2>
    <p>O Claude Ship está sendo liberado para os planos Claude Team e Enterprise, para repositórios no GitHub. Quem usa o plano individual, por enquanto, não aparece na lista. A matéria não informa preço das duas novidades em beta, nem se haverá versão para outras plataformas além do GitHub, e o <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">comparativo entre ChatGPT, Claude e Gemini</a> do Portal da AI ainda não considera essa camada.</p>
    <p>A empresa explica a motivação no blog oficial, citado pela TechCrunch: a maioria dos times quer que uma pessoa aprove cada mudança, e isso é fácil de acompanhar quando pessoas escrevem cada linha. Mas hoje muita gente constrói com agentes. Na equipe do Claude Code, segundo o texto, o Claude escreve a maior parte do código, e a Anthropic quis que tudo o que vem depois do pull request andasse na mesma velocidade.</p>

    <h2>O gargalo que o produto tenta resolver</h2>
    <p>Quando agentes passam a gerar muito mais código, o limite deixa de ser digitar e passa a ser conferir. Uma equipe pequena que antes revisava cinco mudanças por dia pode receber dezenas, e a fila de aprovação vira o freio. A TechCrunch descreve exatamente esse cenário: o aumento da capacidade dos agentes de programação criou um engarrafamento de revisão e aprovação antes de o código ir para produção.</p>
    <p>Na leitura do Portal da AI, a Anthropic está vendendo a etapa seguinte da mesma lógica. Se o agente escreve, o agente também revisa, corrige e, dentro de regras, libera. O risco é óbvio: um erro que passa pela revisão automática chega à produção sem que nenhuma pessoa tenha olhado. Por isso o conselho de começar em modo de observação e de definir o que sempre escala para um humano é o ponto mais importante do anúncio. O <a href="/artigos/permissoes-de-agentes-de-ia-o-que-liberar-o-que-travar-e-quando-pedir-aprovacao">guia de permissões de agentes de IA</a> trata dessa mesma divisão entre o que liberar e o que exigir aprovação.</p>

    <h2>O que ainda não está confirmado</h2>
    <p>As fontes consultadas não trazem números de desempenho: não há taxa de erro das aprovações automáticas, comparação com revisão humana nem exemplos de mudanças que o agente barrou. Também não foi informado o preço, nem se o gasto mensal do Claude Approvals entra no plano atual ou é cobrado à parte. A TechCrunch não diz quando os agentes em beta chegam a todos os clientes, e não há informação sobre disponibilidade fora do GitHub ou no Brasil. Até a Anthropic publicar esses dados, o melhor é tratar o recurso como experimento controlado.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você é desenvolvedor ou tem uma equipe de tecnologia, o Claude Ship indica para onde o trabalho está indo: menos tempo escrevendo e conferindo, mais tempo definindo regras de qualidade. Escrever bem a política de aprovação, em linguagem natural, passa a ser parte do ofício, e esse arquivo no repositório vira o lugar onde o time registra o que pode ser liberado sozinho.</p>
    <p>Se você não programa, o efeito é indireto, mas real: aplicativos e sites que você usa tendem a receber correções e atualizações mais rápido, e também a ter a revisão humana cada vez mais concentrada nos casos de risco. Quem toca um pequeno negócio com sistema próprio ou contrata uma agência deveria perguntar como as mudanças são aprovadas e quem responde quando uma delas dá errado, tema do artigo sobre <a href="/artigos/quando-o-agente-de-ia-erra-quem-responde-cdc-contrato-e-o-que-fazer">quando o agente de IA erra</a>. Para quem trabalha com programação, a discussão sobre <a href="/artigos/ia-vai-substituir-programadores-o-que-muda-ate-2030">o que muda para programadores até 2030</a> ganha mais um dado: a revisão, antes considerada trabalho tipicamente humano, também está sendo delegada.</p>
    <p>O lançamento vem logo depois de a Anthropic <a href="/noticias/anthropic-carta-ipo-claude-nunca-tera-anuncios">estrear na bolsa</a>, e mostra a empresa tentando ampliar a receita com produtos para equipes corporativas, não só com o chat. Vale acompanhar os primeiros relatos de times que testarem o modo de observação, porque é aí que vão aparecer os números que hoje faltam.</p>
  `,
  faq: [
    {
      question: "O que é o Claude Ship?",
      answer:
        "É um conjunto de agentes da Anthropic para revisar, corrigir e aprovar mudanças de código. Reúne o Code Review, já disponível, e o PR Steward e o Claude Approvals, em beta.",
    },
    {
      question: "O Claude pode aprovar código sozinho?",
      answer:
        "Sim, dentro de uma política que o time escreve em um arquivo do repositório. A Anthropic recomenda começar em modo de observação e definir quais mudanças sempre vão para uma pessoa decidir.",
    },
    {
      question: "Quem pode usar o Claude Ship?",
      answer:
        "Segundo a TechCrunch, ele está sendo liberado para os planos Claude Team e Enterprise, em repositórios no GitHub.",
    },
  ],
};
