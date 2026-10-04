import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "microsoft-copilot-cobranca-uso-brasil-fora",
  title: "Microsoft muda cobrança do Copilot por uso, mas Brasil fica de fora",
  summary:
    "A partir de 1º de dezembro, novas licenças do Microsoft 365 Copilot Business vêm com cobrança por uso ativada por padrão, mas o Brasil está entre os mercados sem a mudança por ora.",
  author: "Bruno Danello",
  sourceName: "Microsoft Learn (Partner Center)",
  sourceUrl:
    "https://learn.microsoft.com/en-us/partner-center/announcements/2026-october",
  date: "2026-10-04",
  content: `
    <p>A Microsoft confirmou, em comunicado publicado em 1º de outubro no Partner Center, que a cobrança por uso (usage-based billing) vai passar a vir ativada por padrão em novas licenças do Microsoft 365 Copilot Business compradas através do programa Cloud Solution Provider (CSP) a partir de 1º de dezembro de 2026. A data já havia sido anunciada antes para 2 de novembro, mas foi empurrada para dezembro, segundo o <a href="https://learn.microsoft.com/en-us/partner-center/announcements/2026-october" rel="noopener noreferrer nofollow">documento oficial da Microsoft</a>.</p>
    <p>O ponto que chama atenção para quem usa IA no Brasil é a lista de exceções: a própria Microsoft lista o país entre os mercados onde a mudança não vai valer de início, ao lado de Austrália, Bélgica, França, Alemanha, Índia, Itália, Coreia do Sul, Holanda, Polônia e Espanha. Ou seja, empresas brasileiras que comprarem o Copilot Business via CSP depois de dezembro continuam, por enquanto, na configuração de cobrança fixa por assinatura, sem o modelo de créditos consumidos por uso que começa a valer em mercados como os Estados Unidos.</p>

    <h2>Como funciona a cobrança por uso que chega primeiro fora do Brasil</h2>
    <p>O novo modelo passa a vir configurado por padrão como "pague conforme usa" (pay-as-you-go) em vez de preço fixo mensal. Segundo a Microsoft, o limite padrão de gasto é de 4.000 Copilot Credits por usuário por mês, ajustável pelos administradores da conta. Na prática, uma empresa com 100 usuários do Microsoft 365 Copilot Business poderia consumir até 400 mil créditos por mês dentro desse limite padrão, com cobrança proporcional ao uso real de recursos como o Copilot Cowork, as Work IQ APIs e o GitHub Copilot Harness. Passar do limite depende de ajuste manual feito pelo administrador, o que dá à empresa controle sobre o teto de gasto, mas também exige acompanhamento mais próximo do consumo mensal do que a assinatura de preço fixo que o mercado já conhece.</p>
    <p>A mudança nasceu do mesmo relançamento do Copilot que o Portal da AI já <a href="/noticias/microsoft-relanca-copilot-super-app-agentes-autopilot">cobriu em setembro</a>, quando a empresa uniu chat, produtividade e agentes de IA sob três frentes: Home, Code e Autopilot. É justamente esse pacote mais agêntico, com recursos que consomem poder computacional de forma variável a cada tarefa executada, que torna o modelo de crédito por uso mais atraente para a Microsoft do que simplesmente manter todo mundo numa mensalidade fixa, já que o custo de rodar um agente que trabalha sozinho por horas é bem diferente do custo de uma pergunta simples no chat.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para quem roda uma pequena empresa ou presta serviço de automação no Brasil usando Microsoft 365, a notícia tem um lado bom e um ponto de atenção. O lado bom é que, por ora, nada muda na cobrança de quem já usa ou vai comprar o Copilot Business no país: a mensalidade seguirá previsível, sem risco de uma conta de cartão surpreendente no fim do mês por conta de agentes que trabalharam demais. O ponto de atenção é que essa pausa é temporária e não tem data de fim anunciada: a Microsoft diz apenas que vai "compartilhar informações adicionais conforme a disponibilidade se expande" para os mercados hoje de fora, o que inclui o Brasil.</p>
    <p>Quem já usa o Copilot para tarefas de produtividade no dia a dia, como revisar planilhas ou gerar rascunhos de documento, tende a sentir pouca diferença mesmo quando a cobrança por uso chegar aqui, já que esse tipo de tarefa consome poucos créditos. Já quem pretende usar os recursos mais agênticos do pacote, como o Copilot Cowork ou agentes que ficam ativos continuamente, como mostrou a reportagem sobre o <a href="/artigos/microsoft-copilot-vale-a-pena-preco-2026">Microsoft Copilot valer a pena pelo preço atual</a>, faz bem em já simular mentalmente quanto esse uso intenso custaria num modelo de créditos, porque é bem provável que esse padrão de cobrança chegue ao Brasil em algum momento de 2027.</p>

    <h2>O contexto: todo mundo migrando para cobrança por consumo de IA</h2>
    <p>A Microsoft não está sozinha nessa transição. O setor de IA como um todo vem caminhando para modelos de cobrança por consumo em vez de assinatura fixa, à medida que as tarefas que a IA realiza ficam mais complexas e variam mais em custo computacional entre um uso leve e um uso intenso. É o mesmo raciocínio que levou outras plataformas de automação a cobrar por mensagem processada, como mostrou a <a href="/noticias/whatsapp-business-cobranca-mensagens-ia-outubro-2026">nova cobrança por mensagem de IA no WhatsApp Business</a>. A diferença é que a Microsoft optou por manter o modelo de assinatura como padrão de entrada e empurrar a cobrança por uso apenas para quem efetivamente ativa os recursos mais pesados, em vez de forçar todo o mercado a migrar de uma vez.</p>
    <p>Vale lembrar que essa não é a primeira vez que a Microsoft ajusta a data de uma mudança de cobrança do Copilot: o prazo já passou de novembro para dezembro uma vez, o que sugere que a empresa ainda está calibrando o impacto da mudança junto a parceiros e grandes clientes antes de rodar o modelo em escala total. Para o mercado brasileiro, isso é mais um indício de que a cobrança por uso, quando chegar, provavelmente vai passar primeiro por um período de testes em mercados menores ou por feedback direto de parceiros CSP locais antes de virar padrão geral.</p>

    <h2>O que observar nos próximos meses</h2>
    <p>Três pontos valem acompanhamento de quem decide sobre ferramentas de IA numa empresa brasileira. O primeiro é se a Microsoft vai anunciar uma data específica para estender a cobrança por uso ao Brasil, o que normalmente aparece em comunicados futuros do Partner Center como este. O segundo é o comportamento de preço em mercados onde a mudança já vale a partir de dezembro: se o consumo médio ficar dentro do limite padrão de 4.000 créditos por usuário, a cobrança por uso tende a ser vista como vantagem, mas se empresas começarem a reportar contas inesperadas, é provável que o rollout para novos países desacelere ainda mais. O terceiro é como o Copilot Cowork e o Autopilot, os recursos mais agênticos do pacote, evoluem em disponibilidade geral, já que são justamente eles que mais pesam no consumo de créditos e que, por isso, mais interessam a quem avalia seguir usando preço fixo ou migrar para o modelo por uso quando ele chegar ao Brasil.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Resumo rápido</span>
      <p>A partir de 1º de dezembro de 2026, novas licenças do Microsoft 365 Copilot Business compradas via CSP vêm com cobrança por uso ativada por padrão, com limite inicial de 4.000 créditos por usuário por mês. O Brasil está, por ora, fora da lista de mercados onde a mudança já vale.</p>
    </div>
  `,
  faq: [
    {
      question: "O preço do Microsoft Copilot já muda no Brasil?",
      answer:
        "Não imediatamente. A Microsoft listou o Brasil entre os mercados onde a cobrança por uso não entra em vigor junto com o lançamento inicial de dezembro de 2026, sem data definida para a expansão chegar ao país.",
    },
    {
      question: "O que é a cobrança por uso (usage-based billing) do Copilot?",
      answer:
        "É um modelo de pague conforme usa, com créditos consumidos por recursos como Copilot Cowork, Work IQ APIs e GitHub Copilot Harness, em vez da mensalidade fixa tradicional. O limite padrão inicial é de 4.000 créditos por usuário por mês, ajustável pelo administrador da conta.",
    },
    {
      question: "Quando a cobrança por uso do Copilot Business começa a valer?",
      answer:
        "A partir de 1º de dezembro de 2026, para novas licenças do Microsoft 365 Copilot Business compradas via Cloud Solution Provider (CSP) nos mercados já habilitados, segundo o comunicado da Microsoft no Partner Center.",
    },
  ],
};
