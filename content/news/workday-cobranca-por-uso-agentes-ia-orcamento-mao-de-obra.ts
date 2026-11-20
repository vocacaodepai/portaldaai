import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "workday-cobranca-por-uso-agentes-ia-orcamento-mao-de-obra",
  title: "Workday quer cobrar seus agentes de IA por uso, e não por funcionário",
  summary:
    "Em evento anual, a Workday disse que mira o orçamento de terceirização das empresas e que o CEO prefere cobrar agentes por consumo, como as nuvens de grande porte.",
  author: "Bruno Danello",
  sourceName: "The Register",
  sourceUrl:
    "https://www.theregister.com/saas/2026/10/15/workday-wants-a-slice-of-customers-labour-budget-that-its-ai-agents-could-replace/5303281",
  date: "2026-10-19",
  publishedAt: "2026-10-19T14:30:00-03:00",
  topic: "negocios",
  imageQuery: "Workday logo",
  content: `
    <p>A Workday, empresa de software de recursos humanos e finanças usada por grandes companhias, deixou claro na semana passada como pretende ganhar dinheiro com agentes de IA: indo atrás do dinheiro que as empresas hoje gastam com pessoas e terceirização, e cobrando pelo uso, não por funcionário. A informação vem de uma reportagem do <a href="https://www.theregister.com/saas/2026/10/15/workday-wants-a-slice-of-customers-labour-budget-that-its-ai-agents-could-replace/5303281" target="_blank" rel="noopener noreferrer nofollow">The Register</a>, publicada em 15 de outubro, a partir das falas de executivos da empresa na conferência anual em Las Vegas.</p>

    <p>Parece um assunto distante de quem trabalha por conta própria ou toca um negócio pequeno no Brasil, mas não é. A forma como as grandes plataformas decidem cobrar seus agentes costuma chegar, mais cedo ou mais tarde, aos produtos menores que muita gente usa no dia a dia. E o raciocínio por trás da mudança, trocar o preço por pessoa pelo preço por tarefa, diz muito sobre o que vem pela frente no mercado de trabalho.</p>

    <h2>O que a Workday disse no evento</h2>
    <p>Segundo a reportagem, o diretor de IA da empresa, Joel Hellermark, afirmou a investidores que automatizar tarefas de RH pode ampliar o mercado da companhia para além dos orçamentos de software, chegando ao gasto com mão de obra e serviços. Em suas palavras, os clientes gastam dezenas de milhões de dólares com terceirização, e é nesse bolo que a empresa quer entrar. Hellermark também disse que agentes de autoatendimento elevaram em 25% a taxa de resolução de tarefas comuns e que a empresa está "só começando" nessa frente.</p>
    <p>O cofundador e CEO, Aneel Bhusri, falou sobre a própria Workday. Para ele, a IA ajuda a empresa a crescer sem aumentar o número de funcionários na mesma proporção. Bhusri disse que isso não significa necessariamente mais demissões, mas pode significar deixar de contratar em áreas onde a empresa contratava no passado. Ele também admitiu que a IA vinha sendo tratada de forma muito dispersa, cada equipe cuidando da sua parte, e que a companhia estava "se movendo devagar demais", por isso quer centralizar a responsabilidade pelo tema.</p>

    <h2>Cobrança por consumo no lugar da assinatura por pessoa</h2>
    <p>O ponto mais comentado do evento foi o modelo de preço. De acordo com o The Register, a Workday espera que as cobranças dos agentes sigam o uso, e não o número de funcionários licenciados, de modo que a conta cresça conforme o volume de trabalho que os agentes executam. Bhusri chamou a cobrança por consumo de "um modelo muito melhor" do que as assinaturas baseadas em pessoas, que, segundo ele, vão continuar por muito tempo. Ele comparou com o que os clientes pagam a Google Cloud, AWS e Azure e disse que gostaria que a Workday estivesse nesse negócio.</p>
    <p>A reportagem não traz valores, faixas de preço nem tarifas por tipo de tarefa. Ou seja, ainda não dá para dizer quanto uma empresa pagaria por um agente de RH da Workday. O que existe é a direção: sair da lógica de "uma licença por colaborador" e entrar na lógica de "quanto trabalho o agente fez neste mês".</p>

    <h2>As novidades técnicas anunciadas na mesma semana</h2>
    <p>Além do discurso sobre preço, a Workday apresentou duas peças de tecnologia. A primeira é o acesso "headless" aos sistemas de RH e finanças, que permite a agentes de IA ler dados e executar tarefas sem passar pela interface que uma pessoa usaria. Esse acesso acontece por ferramentas baseadas no Model Context Protocol (MCP), com as permissões, aprovações e trilhas de auditoria da própria Workday.</p>
    <p>A segunda é a Workday Data Cloud, que dá acesso a dados operacionais e históricos e os compartilha com Snowflake, Databricks e Salesforce. Ela usa um data lake construído sobre o formato aberto de tabelas Apache Iceberg. Na prática, a empresa quer que os agentes de terceiros e os próprios consigam trabalhar sobre os dados de pessoas e finanças sem precisar de um humano clicando em telas.</p>

    <h2>O contexto: mudança de comando e rumores de venda</h2>
    <p>A reportagem lembra que, em agosto, a Reuters informou que a Silver Lake, empresa de investimentos, estava em negociações para comprar a Workday, algo que a companhia não comentou na época. Também recorda que, em fevereiro, Bhusri voltou ao cargo de CEO no lugar de Carl Eschenbach, que saiu com um pagamento único de US$ 3,6 milhões. O texto não diz que as falas sobre preço estavam ligadas a um balanço trimestral, e não há números de receita ou crescimento na matéria.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Na prática</span>
      <p>Se você contrata ou pensa em contratar qualquer ferramenta com agentes, pergunte como a cobrança funciona: por assinatura fixa, por usuário ou por uso. Em modelos por consumo, vale definir um teto de gasto e acompanhar o consumo semanal para a conta não surpreender no fim do mês.</p>
    </div>

    <h2>Por que isso importa para você</h2>
    <p>Há dois recados práticos. O primeiro é sobre preço. Quando um fornecedor de software passa a cobrar por uso, o custo deixa de ser previsível como uma mensalidade e passa a depender de quanto você usa. Isso já aparece em ferramentas que o público brasileiro conhece: o Portal da AI mostrou, por exemplo, como o Copilot da Microsoft passou a ter <a href="/noticias/microsoft-copilot-cobranca-uso-brasil-fora">cobrança por uso, com o Brasil fora do primeiro lote</a>. Para quem gerencia custos de um pequeno negócio, entender essa lógica evita contas inesperadas, e vale conferir também como <a href="/artigos/como-usar-ia-para-reduzir-custos-operacionais-pequenos-negocios">usar IA para reduzir custos operacionais em pequenos negócios</a>.</p>
    <p>O segundo recado é sobre trabalho. Quando uma empresa de software diz que quer "uma fatia" do orçamento de terceirização e de mão de obra, está dizendo que seus agentes foram feitos para fazer tarefas que hoje são pagas a pessoas ou a prestadores. A própria Workday já havia publicado dados mostrando que a IA muda as vagas mais do que as elimina, como o Portal da AI detalhou em <a href="/noticias/workday-relatorio-ia-nao-reduz-vagas-mas-muda-tudo">relatório da Workday mostra que IA muda as vagas mais do que corta empregos</a>. A fala de Bhusri sobre "não contratar onde antes se contratava" combina com esse quadro: a mudança tende a aparecer menos em demissões em massa e mais em vagas que deixam de ser abertas, principalmente em tarefas repetitivas de apoio.</p>
    <p>Para o profissional autônomo, a leitura é de oportunidade com atenção. Quem entende de processos de RH, finanças ou atendimento e sabe configurar agentes tem espaço para vender esse serviço a empresas menores, tema que o Portal da AI explica em <a href="/artigos/como-ganhar-dinheiro-criando-e-vendendo-agentes-de-ia-personalizados">como ganhar dinheiro criando e vendendo agentes de IA personalizados</a>. Ao mesmo tempo, quanto mais as plataformas grandes oferecem agentes prontos, mais o diferencial passa a ser conhecer o problema do cliente, e não apenas operar a ferramenta. Quem quiser começar pelo básico pode ver como <a href="/artigos/automacao-com-ia-economize-horas-de-trabalho">economizar horas de trabalho com automação e IA</a> e entender <a href="/artigos/como-humanos-e-agentes-de-ia-vao-trabalhar-juntos-no-futuro">como humanos e agentes de IA vão trabalhar juntos no futuro</a>.</p>

    <h2>Os riscos e as dúvidas que ficam</h2>
    <p>A cobrança por consumo tem vantagens, como pagar só pelo que se usa, mas também traz dúvidas. Uma é a previsibilidade: se um agente entra em um ciclo de tarefas repetidas por erro, a conta pode subir sem que ninguém perceba. Outra é a dependência: quanto mais processos de RH e finanças rodam por agentes de um único fornecedor, mais difícil é trocar de plataforma depois. A Workday afirma que o acesso por MCP segue permissões, aprovações e auditoria, o que reduz parte do risco de segurança, mas a reportagem não traz detalhes sobre como esses controles funcionam na prática.</p>
    <p>Também vale lembrar o que a matéria não informa: não há lista de agentes com nome, não há preço por tarefa, não há datas de lançamento geral e não há comentário de analistas independentes. Tudo o que foi dito sobre ganhos, como os 25% de melhora na resolução de tarefas comuns, vem da própria empresa e deve ser lido como indicação, e não como resultado verificado por terceiros.</p>

    <h2>O que acompanhar daqui para a frente</h2>
    <p>Os próximos passos a observar são a divulgação de tabelas de preço por consumo, a disponibilidade dos agentes fora dos Estados Unidos, incluindo o Brasil, e a reação dos clientes a um modelo em que a fatura varia a cada mês. Também será interessante ver se concorrentes de software corporativo adotam a mesma estratégia, o que consolidaria a cobrança por tarefa como padrão. Enquanto isso, a mensagem da Workday ajuda a entender o rumo do mercado: os agentes de IA estão sendo vendidos não como mais uma ferramenta de software, mas como substitutos parciais de trabalho que hoje é pago em salário ou em contrato de terceirização.</p>
  `,
};
