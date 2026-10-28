import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-relatorios-gasto-claude-retorno-orcamentos-compartilhados",
  title: "Anthropic lança relatórios que mostram o que o gasto com Claude rende",
  summary:
    "Novos relatórios cruzam análises internas e pesquisas com funcionários para mostrar resultado, custo e gargalos de cada equipe, e liberam orçamentos de tokens em grupo.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/10/28/anthropic-just-launched-tools-to-show-companies-what-their-ai-spending-is-buying/",
  date: "2026-10-28",
  publishedAt: "2026-10-28T17:35:00-03:00",
  topic: "negocios",
  imageQuery: "Anthropic logo",
  content: `
    <p>A Anthropic anunciou nesta quarta-feira, 28 de outubro de 2026, um conjunto de ferramentas de relatório para clientes corporativos do Claude. A ideia é responder a uma pergunta que hoje trava muita compra de IA: o dinheiro gasto em tokens está virando resultado de verdade? A reportagem é da TechCrunch, assinada por Tim Fernholz, e o lançamento acontece em um momento sensível para a empresa, que se prepara para abrir capital.</p>

    <p>Em vez de entregar só uma conta com o total de tokens consumidos, os novos relatórios tentam mostrar o que cada equipe produziu com esse consumo, quanto aquilo custou e onde o trabalho emperrou. É uma mudança de enfoque: sai a fatura, entra a explicação do que ela comprou.</p>

    <h2>O que as ferramentas mostram</h2>
    <p>Segundo a TechCrunch, os relatórios combinam análises internas de uso com pesquisas feitas com os próprios funcionários. O gestor escolhe um intervalo de datas e vê, para uma equipe, o que foi entregue, qual foi o custo desse trabalho e quais fluxos quebraram pelo caminho. As telas divulgadas pela empresa incluem visão geral dos fluxos de trabalho, detalhes de cada fluxo, os atritos mais comuns, trabalhos autônomos complexos, resultados das tarefas, recomendações e até um rascunho de skill.</p>

    <p>Os relatórios trazem também sugestões para melhorar o resultado, ou seja, não servem apenas para olhar o passado. A Anthropic afirma que não vai usar esses dados para treinar modelos por padrão, um ponto importante para quem teme que a análise de uso vire matéria-prima de treinamento.</p>

    <h2>Orçamentos de tokens em grupo</h2>
    <p>Outra peça do pacote são os orçamentos compartilhados. Em vez de cada pessoa ter um limite individual, equipes podem administrar o gasto com tokens em um orçamento coletivo. Na prática, isso facilita para a área financeira e para os gestores de tecnologia dividirem o custo por time ou por projeto, sem precisar acompanhar usuário por usuário.</p>

    <h2>Por que a Anthropic faz isso agora</h2>
    <p>A reportagem liga o lançamento a um problema real do mercado: grande parte das empresas ainda não consegue provar o retorno do que investe em IA. A TechCrunch cita que a maioria das empresas da lista Fortune 500 não está vendo ganhos expressivos, enquanto boa parte do consumo de tokens vem de empresas apoiadas por capital de risco. Quem paga a conta quer números, e quem vende o modelo precisa dar esses números para manter o cliente.</p>

    <p>O contexto financeiro reforça a pressa. De acordo com a reportagem, dados compartilhados com investidores nesta semana indicam que o Claude Code é um sucesso comercial: a empresa teve lucro operacional no segundo trimestre, e a retenção líquida de receita chegou a 900%, o que significa que os mesmos clientes gastaram cerca de nove vezes mais no terceiro trimestre de 2026 do que um ano antes. Esses números são informados pela própria companhia e não foram confirmados de forma independente. Já falamos do pedido de abertura de capital em <a href="/noticias/anthropic-protocola-s-1-publico-nasdaq-ant-receita-16-bilhoes">Anthropic abre S-1: ANT na Nasdaq e US$ 16,3 bi de receita no semestre</a>.</p>

    <h2>O que diz o relatório da Jellyfish</h2>
    <p>A TechCrunch traz um dado de fora para dimensionar o tamanho do gasto. A Jellyfish, que faz ferramentas para equipes de desenvolvimento, divulgou um estudo um dia antes, baseado no uso de ferramentas de programação com agentes em 276 mil clientes. Segundo o levantamento, o Claude Code e outras ferramentas com modelos da Anthropic são as mais usadas e respondem por quase um terço das alterações de código enviadas para revisão.</p>

    <p>O gasto com essas ferramentas cresceu dez vezes desde o início do ano e já equivale a cerca de 2% do custo total de engenharia. O cientista-chefe da Jellyfish, Nicholas Arcolano, resumiu o ponto: mesmo que 2% pareça pouco, esse crescimento de dez vezes é algo que a maioria dos diretores financeiros não havia planejado. Para ele, as empresas agora precisam otimizar o gasto com IA, e não apenas gastar mais.</p>

    <h2>Um pouco de consultoria embutida</h2>
    <p>Nikolas Albarran, responsável por produto de IA na Jellyfish, disse à TechCrunch que a Anthropic ganhou força com uma abordagem corporativa muito bem estruturada e com a vantagem de ter chegado primeiro. Segundo ele, o Codex, da OpenAI, só ganhou tração recentemente nos dados da empresa, e o modelo Astra, lançado pela OpenAI neste verão, não chegou a frear a adoção do Claude.</p>

    <p>Albarran também comparou os novos relatórios a uma versão leve de um modelo que as grandes empresas de IA vêm adotando, o de engenheiros e consultores que ficam dentro do cliente para implantar a tecnologia. Quanto mais a empresa padroniza fluxos de trabalho em torno de uma ferramenta, mais caro e trabalhoso fica trocar de fornecedor, e relatórios de valor ajudam a manter esse vínculo.</p>

    <h2>O que ainda não está claro</h2>
    <p>A matéria não detalha preços, planos que terão acesso nem a data de chegada de cada recurso. Também não explica como as pesquisas com funcionários serão aplicadas na prática, nem como as empresas poderão auditar as recomendações geradas pelo sistema. Vale tratar o lançamento, por enquanto, como um anúncio de produto feito pela própria Anthropic, narrado por uma única reportagem.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você usa IA no trabalho, ou vende serviços com IA para empresas, esse movimento muda a conversa com o cliente. Cada vez mais, o gestor que paga a conta não pergunta se a ferramenta é impressionante, e sim quanto ela entrega por real gasto. Quem consegue mostrar horas economizadas, tarefas concluídas e custo por resultado se destaca de quem só entrega acesso à ferramenta.</p>

    <p>Mesmo sem acesso aos relatórios da Anthropic, você pode copiar a lógica em pequena escala: anote quanto gasta com assinaturas e API, quais tarefas a IA realmente resolveu e onde ela travou. O tema do custo já apareceu em outras notícias, como <a href="/noticias/accenture-limita-gasto-claude-29-dolares-por-funcionario">Accenture limita gasto com Claude a US$ 29 por funcionário</a> e <a href="/noticias/gartner-custo-agentes-ia-quintuplica-2028">Gartner: custo de agentes de IA pode quintuplicar até 2028</a>. Se ainda está escolhendo ferramenta, compare opções em <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini: qual IA escolher</a> e veja como funcionam os <a href="/artigos/creditos-de-api-do-claude-nos-planos-max-e-team-como-resgatar-o-que-cobrem-e-limites">créditos de API do Claude nos planos Max e Team</a>.</p>

    <p>Para quem cuida de uma equipe pequena, a lição prática é definir um orçamento mensal por projeto antes de liberar o uso, em vez de descobrir o tamanho da conta no fim do mês. Para quem é freelancer, vale incluir no preço do serviço o custo de tokens e mostrar ao cliente o resultado entregue. A fonte deste texto é a reportagem da TechCrunch, com análise nossa, e a notícia veio de uma fonte principal.</p>
  `,
};
