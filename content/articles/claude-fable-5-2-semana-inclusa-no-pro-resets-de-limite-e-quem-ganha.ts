import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "claude-fable-5-2-semana-inclusa-no-pro-resets-de-limite-e-quem-ganha",
  title: "Claude Fable 5.2 no plano Pro: semana inclusa, resets e prazos",
  seoTitle: "Claude Fable 5.2: semana inclusa no Pro e resets",
  excerpt:
    "O Claude Fable 5.2 entrou no plano Pro só até 16 de novembro. Veja quem ganhou resets de limite, como usar, quando vale gastar o Fable e quando o Opus basta.",
  metaDescription:
    "Claude Fable 5.2: semana inclusa no Pro e no Team padrão, resets para Max e Ultra, datas no horário de Brasília, como resgatar e quando trocar pelo Opus 5.5.",
  category: "ferramentas",
  date: "2026-11-13",
  readTime: 8,
  imageQuery: "Anthropic Claude logo",
  seed: 1193,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Lançado em 9 de novembro, o Claude Fable 5.2 está em todos os planos pagos, mas no Pro e nos assentos padrão do Team ele normalmente roda com créditos de uso pagos à parte.",
    "Até 16 de novembro (madrugada de 17 no horário de Brasília), Pro e Team padrão podem usar Fable em até 50% do limite semanal e ganham um reset; Max, Ultra e assentos premium ganham de 1 a 3 resets válidos até março de 2027.",
    "A própria Anthropic recomenda o Opus 5.5 como modelo do dia a dia e o Fable só para tarefas longas e difíceis, porque ele consome o limite mais rápido que os outros modelos.",
  ],
  content: `
    <p>O Claude Fable 5.2 é o modelo mais forte que a Anthropic liberou para o público, e nesta semana ele entrou no plano Pro sem custo extra, dentro de um teto: até 50% do limite semanal, só até 16 de novembro. Quem assina Max ou Ultra ganhou resets de limite que valem até março de 2027.</p>

    <p>Depois dessa janela, o Fable volta a funcionar no Pro só com créditos de uso, pagos à parte. Este guia mostra o que cada plano recebeu, as datas convertidas para o horário de Brasília, como resgatar o reset e em quais tarefas vale gastar o Fable em vez do Opus 5.5.</p>

    <h2>O que é o Claude Fable 5.2 e o que mudou</h2>

    <p>O Fable 5.2 saiu em 9 de novembro de 2026, junto com o Mythos 5.2, que é a versão sem travas liberada só para organizações aprovadas. A <a href="/noticias/anthropic-lanca-claude-fable-5-2-mythos-5-2-preco-desempenho">notícia do lançamento do Fable 5.2</a> traz os números de testes divulgados pela empresa. Segundo a <a href="https://www.anthropic.com/claude-fable-and-mythos-5-2" target="_blank" rel="noopener noreferrer">página oficial da Anthropic sobre o Fable e o Mythos 5.2</a>, o novo modelo gera respostas até 30% mais rápido que o Fable 5.1 e, no esforço médio, que é o padrão nos apps do Claude e no Claude Code, resolve tarefas difíceis gastando menos tokens que a versão anterior.</p>

    <p>Para quem chegou agora, a linha Fable fica acima do Opus. O Fable 5.1 tinha saído há pouco mais de dois meses, como conta a <a href="/noticias/anthropic-lanca-claude-fable-5-1-mythos-5-1">notícia do Fable 5.1</a>. Logo abaixo está o Opus 5.5, que a Anthropic chama de modelo mais forte para o uso diário, e depois vêm o Sonnet 5.5 e o Haiku 5.5, mais leves e baratos.</p>

    <p>A outra mudança importante é a das travas. O Fable bloqueia pedidos de alto risco em segurança digital e biologia, e a empresa diz que os bloqueios caíram cerca de 55% em relação ao 5.1. Quando um pedido é barrado, a resposta vem de outro modelo: o Opus 4.8 em perguntas de segurança digital e o Opus 5 em biologia.</p>

    <h2>Quem pode usar e como fica o limite em cada plano</h2>

    <p>A <a href="https://support.claude.com/pt/articles/15424964-modelos-claude-fable-no-seu-plano" target="_blank" rel="noopener noreferrer">central de ajuda do Claude sobre os modelos Fable</a> separa os planos em dois grupos. Fora da promoção desta semana, a regra é esta:</p>

    <table>
      <thead>
        <tr><th>Plano</th><th>Fable no dia a dia</th><th>Oferta de lançamento do 5.2</th></tr>
      </thead>
      <tbody>
        <tr><td>Gratuito</td><td>Sem acesso</td><td>Não participa</td></tr>
        <tr><td>Pro e Team (assento padrão)</td><td>Só com créditos de uso, desde o primeiro pedido</td><td>Fable em até 50% do limite semanal até 16/11, mais 1 reset</td></tr>
        <tr><td>Max, Ultra e Team (assento premium)</td><td>Incluso até 50% do limite semanal; depois, créditos ou outro modelo</td><td>De 1 a 3 resets, conforme o tempo de assinatura</td></tr>
        <tr><td>Enterprise por uso e API</td><td>Cobrança pela tabela da API</td><td>Não participa</td></tr>
      </tbody>
    </table>

    <p>No Enterprise por assentos, o Fable 5.2 começa desligado até o administrador liberar. Sete dias depois do lançamento, ele passa a valer automaticamente para as funções que já tinham um modelo Fable habilitado, a não ser que o admin opte por ficar de fora antes. Para entender como funcionam os créditos que bancam o uso extra, vale ler o guia sobre <a href="/artigos/creditos-de-api-do-claude-nos-planos-max-e-team-como-resgatar-o-que-cobrem-e-limites">créditos de API nos planos Max e Team</a>.</p>

    <h2>As datas da oferta no horário de Brasília</h2>

    <p>A <a href="https://support.claude.com/en/articles/17506494" target="_blank" rel="noopener noreferrer">página de ajuda da oferta de lançamento do Fable 5.2</a> usa o horário do Pacífico, que em novembro fica cinco horas atrás de Brasília. Convertendo:</p>

    <ul class="checklist">
      <li>Quem quisesse participar precisava ter a cobrança paga ativa antes de 9 de novembro às 15h de Brasília. No Team e no Enterprise, também era preciso já estar na organização.</li>
      <li>A semana inclusa do Pro e do Team padrão termina em 16 de novembro às 23h59 do Pacífico, ou seja, 17 de novembro às 4h59 de Brasília.</li>
      <li>O reset do Pro e do Team padrão vence no mesmo horário: 17 de novembro, 4h59 de Brasília.</li>
      <li>Os resets do Max, do Ultra e dos assentos premium vencem em 8 de março de 2027 às 23h59 do Pacífico, que é 9 de março às 4h59 de Brasília.</li>
    </ul>

    <p>No Max, no Ultra e nos assentos premium, a quantidade depende do tempo desde a primeira cobrança paga: 1 reset para menos de 6 meses, 2 para 6 a 12 meses e 3 para mais de 12 meses. A sobra dos 50% da semana inclusa não passa para a semana seguinte.</p>

    <h2>Como funciona e como usar o reset</h2>

    <p>O reset não aumenta o limite: ele devolve o que já foi gasto. No limite semanal, restaura só o uso feito com modelos Fable. Na janela de 5 horas, quando a conta tem uma, ele zera a janela inteira, inclusive o uso de outros modelos. Contas Ultra verificadas não têm janela de 5 horas, então o reset só mexe no limite semanal.</p>

    <ol>
      <li>Abra o Claude na web ou no app e vá em <strong>Configurações</strong>, depois <strong>Uso</strong>.</li>
      <li>Na parte de resets de limite, toque na opção de reset gratuito (em inglês, "Reset for free").</li>
      <li>Para usar o modelo, escolha "Fable 5.2" no seletor de modelo da conversa. O padrão da conta não muda sozinho.</li>
    </ol>

    <p>Dá para usar o reset a qualquer momento antes do vencimento, não só quando o limite acaba. Mas ele não pode ser desfeito, e quem cancela ou rebaixa o plano antes de usar perde o reset. No Claude Code, o Fable 5.2 pede a versão 2.1.321 ou mais nova. Se você ainda se confunde entre limite semanal e janela de 5 horas, o guia sobre <a href="/artigos/limites-de-uso-do-gemini-janela-de-5-horas-planos-e-como-economizar">janela de 5 horas no Gemini</a> explica a mesma lógica num concorrente.</p>

    <h2>Quando vale gastar o Fable e quando o Opus 5.5 basta</h2>

    <p>A própria Anthropic recomenda começar pelo Opus 5.5 na maior parte do trabalho e subir para o Fable só nas tarefas mais ambiciosas. O motivo é prático: o Fable consome o limite mais rápido que os outros modelos. Na semana inclusa, o melhor uso é guardar o Fable para duas ou três tarefas grandes, aquelas que você nunca conseguiu terminar bem com outro modelo. O texto sobre <a href="/artigos/modelo-pequeno-ou-grande-de-ia-velocidade-custo-e-qualidade-para-quem-usa">modelo pequeno ou grande de IA</a> ajuda a calibrar essa escolha, e o <a href="/artigos/claude-haiku-5-5-quando-o-modelo-pequeno-basta-preco-e-limites">guia do Haiku 5.5</a> mostra o outro extremo.</p>

    <h3>Bons candidatos para o Fable</h3>
    <p>Análise de documentos longos com várias fontes, como um relatório anual inteiro; tarefas de várias etapas em que a IA precisa planejar, executar e revisar sozinha; e projetos de programação que mexem em muitos arquivos. Para e-mail, resumo de reunião e post de rede social, Sonnet ou Opus resolvem com folga.</p>

    <p>Um pedido que aproveita bem o modelo:</p>

    <pre><code>Anexei três planilhas de vendas de 2024, 2025 e 2026 da minha loja. Antes de qualquer conclusão, liste as colunas de cada uma e aponte divergências de formato. Depois compare o faturamento mês a mês, identifique os 5 produtos que mais caíram e proponha 3 hipóteses para cada queda, dizendo que dado confirmaria ou derrubaria cada hipótese.</code></pre>

    <p>E um pedido para testar se o Opus já basta, antes de gastar o Fable:</p>

    <pre><code>Resolva esta tarefa em duas partes. Primeiro, diga em uma frase se ela exige planejamento de várias etapas ou só uma resposta direta. Depois, execute. No fim, liste o que você não conseguiu verificar.</code></pre>

    <h2>Exemplo: quanto custa o Fable fora da promoção</h2>

    <p>Depois de 17 de novembro, quem está no Pro e quiser continuar no Fable paga em créditos de uso. Pela tabela da API publicada pela Anthropic (verificado em 13/11/2026), o Fable 5.2 custa US$ 8 por milhão de tokens de entrada e US$ 40 por milhão de tokens de saída. O modo rápido, opcional, custa o dobro.</p>

    <p>Imagine uma contadora de Belo Horizonte que manda um relatório de 20 mil tokens (algo como 30 páginas de texto) e recebe uma análise de 5 mil tokens. Na tabela da API, a entrada sai por US$ 0,16 e a saída por US$ 0,40, total de US$ 0,56 por análise. Repetido 40 vezes no mês, são US$ 22,40, antes de câmbio e IOF do cartão. O valor real nos créditos do app pode ser diferente, porque a conversa reenvia o histórico a cada mensagem. O guia sobre <a href="/artigos/tokens-e-janela-de-contexto-em-ia-o-que-sao-e-por-que-importam">tokens e janela de contexto</a> explica por que conversas longas custam mais, e o de <a href="/artigos/quanto-custa-um-agente-de-ia-tokens-limites-e-a-volta-da-cobranca-por-uso">quanto custa um agente de IA</a> mostra como estimar o gasto mensal.</p>

    <h2>Erros comuns nesta semana</h2>

    <div class="callout-box callout-warn">
      <span class="callout-label">Atenção</span>
      <p>No Pro, o uso de Fable além dos 50% da semana inclusa, ou depois de 17 de novembro, vai para créditos de uso se eles estiverem ativados. Confira em Configurações, depois Uso, se a cobrança extra está ligada antes de começar uma tarefa longa.</p>
    </div>

    <ul>
      <li><strong>Deixar o reset para o último dia.</strong> No Pro ele vence junto com a semana inclusa, e quem esquece perde.</li>
      <li><strong>Gastar o Fable em tarefa simples.</strong> Responder e-mail com o modelo mais caro só queima limite.</li>
      <li><strong>Achar que o reset aumenta o limite.</strong> Ele só devolve o que já foi gasto.</li>
      <li><strong>Cancelar ou rebaixar o plano com reset pendente.</strong> O reset some.</li>
      <li><strong>Confiar cegamente nos números de teste.</strong> São da própria Anthropic. Teste com as suas tarefas antes de mudar o fluxo de trabalho.</li>
    </ul>

    <p>Também vale lembrar que planos e limites de IA mudam com frequência. Uma ação coletiva nos Estados Unidos questiona justamente o uso prometido no Max, como mostra a <a href="/noticias/anthropic-tera-de-responder-acao-coletiva-claude-max-uso-prometido">notícia sobre a ação contra a Anthropic</a>. Leia a página de ajuda antes de contar com qualquer cota.</p>

    <h2>Vale a pena subir de plano por causa do Fable?</h2>

    <p>Para a maioria das pessoas, não. Quem usa o Claude para escrever, estudar e organizar o trabalho tem no Opus 5.5 um modelo de sobra, e no Pro ele já está incluso. A conta muda para quem passa o dia em tarefas longas de análise ou programação e bate no limite com frequência: aí o Max, que inclui o Fable dentro do limite semanal, pode sair mais barato que créditos avulsos. Para organizar esse trabalho por tema, o guia de <a href="/artigos/projetos-no-claude-como-usar-limites-e-memoria-por-projeto">projetos no Claude</a> ajuda a não repetir contexto à toa.</p>

    <p>Aproveite os próximos dias para testar o Fable 5.2 em uma tarefa grande de verdade e comparar com o Opus no mesmo pedido. Se a diferença não aparecer, você economiza limite daqui para frente. Para comparar com outras assistentes, o guia <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini</a> é o melhor ponto de partida, e a categoria <a href="/categoria/ferramentas">Ferramentas</a> reúne as outras novidades da semana.</p>
  `,
  faq: [
    {
      question: "O Claude Fable 5.2 é gratuito?",
      answer:
        "Não. O plano gratuito do Claude não tem acesso aos modelos Fable. No Pro e nos assentos padrão do Team, o Fable normalmente funciona só com créditos de uso, pagos à parte. A exceção é a semana de lançamento, que libera Fable em até 50% do limite semanal até 16 de novembro, no horário do Pacífico.",
    },
    {
      question: "Até quando vai a semana inclusa do Fable 5.2 no Pro?",
      answer:
        "Até 16 de novembro de 2026 às 23h59 do horário do Pacífico, que corresponde a 17 de novembro às 4h59 no horário de Brasília. O reset ganho pelo Pro e pelo Team padrão vence no mesmo momento. A sobra dos 50% do limite semanal não passa para a semana seguinte.",
    },
    {
      question: "Quantos resets o plano Max ganhou?",
      answer:
        "Depende do tempo de assinatura, contado da primeira cobrança paga: 1 reset para menos de 6 meses, 2 para 6 a 12 meses e 3 para mais de 12 meses. Vale o mesmo para Ultra e assentos premium do Team. Esses resets vencem em 8 de março de 2027, no horário do Pacífico.",
    },
    {
      question: "Fable 5.2 ou Opus 5.5: qual usar no dia a dia?",
      answer:
        "O Opus 5.5, segundo a própria Anthropic, que o chama de modelo mais forte para o uso diário. O Fable 5.2 vale para tarefas longas e difíceis, como análise de vários documentos ou projetos de programação grandes. Ele consome o limite mais rápido, então usá-lo em tarefas simples só gasta cota.",
    },
    {
      question: "Como usar o reset de limite do Claude?",
      answer:
        "Entre em Configurações, depois Uso, e na área de resets de limite escolha a opção de reset gratuito. Ele pode ser usado a qualquer momento antes do vencimento, mas não pode ser desfeito. No limite semanal, devolve só o uso com Fable; na janela de 5 horas, zera a janela toda.",
    },
  ],
};
