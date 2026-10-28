import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-gsa-onegov-desconto-40-claude-governos",
  title: "Anthropic dá 40% de desconto no Claude a governos dos EUA até 2029",
  summary:
    "Acordo com a agência GSA vale para órgãos federais e, pela primeira vez, estaduais e municipais: 40% de desconto no uso por token, sem pedido mínimo.",
  author: "Bruno Danello",
  sourceName: "The Next Web, Anthropic, GSA",
  sourceUrl: "https://thenextweb.com/news/anthropic-gsa-onegov-40-percent-claude-discount",
  date: "2026-10-28",
  publishedAt: "2026-10-28T15:30:00-03:00",
  topic: "negocios",
  imageQuery: "General Services Administration headquarters Washington",
  content: `
    <p>A Anthropic fechou um novo acordo com a GSA, a agência de serviços gerais do governo dos Estados Unidos, que dá 40% de desconto no uso por token de todos os modelos Claude liberados para o setor público. A empresa anunciou o acordo em um post na terça-feira, 27 de outubro de 2026, a GSA publicou um comunicado próprio, e o The Next Web detalhou o caso nesta quarta-feira, 28, com base no anúncio e em reportagem da Nextgov.</p>

    <p>A novidade não é só o desconto. O acordo amplia quem pode comprar: além das agências federais, passam a ter acesso às mesmas condições, pela primeira vez, governos estaduais, municipais, tribais e territoriais. É um passo grande para uma empresa que, nesta mesma semana, protocolou o pedido de abertura de capital e precisa mostrar que a receita com o setor público é sólida.</p>

    <h2>O que muda no acordo</h2>
    <p>Segundo a reportagem, o desconto de 40% vale sobre o consumo por token e cobre três frentes: o Claude Enterprise, o Claude for Government e a API do Claude. Não há pedido mínimo, ou seja, o órgão público paga só pelo que usar, sem precisar assumir um volume de compromisso para entrar no preço reduzido. O prazo é de 27 meses, até 31 de janeiro de 2029, de acordo com uma página da própria GSA citada pela Nextgov.</p>

    <p>O novo contrato substitui o primeiro acordo do programa OneGov, firmado em agosto de 2025, em que as agências federais podiam usar o Claude por simbólicos US$ 1. Essa oferta expira em 31 de outubro, e o acordo de agora é a forma de manter o Claude no catálogo federal com preço reduzido, mas já dentro de uma lógica comercial normal. A Anthropic estima que os descontos economizem cerca de US$ 1 bilhão para o governo.</p>

    <h2>O número por trás: adoção em alta</h2>
    <p>A Anthropic usou o anúncio para mostrar o crescimento do uso. A empresa diz que cerca de 500 organizações governamentais federais, estaduais e locais já usam o Claude. Os usuários ativos semanais do Claude for Government cresceram aproximadamente oito vezes desde fevereiro, e o uso nas agências civis federais aumentou cerca de 20 vezes em um ano.</p>

    <p>Dois exemplos foram citados. Em Utah, 34 desenvolvedores de 10 agências estaduais receberam o Claude Code em um piloto de quatro semanas, e 71% disseram ter economizado 20 horas ou mais. Em outro caso, uma equipe de segurança federal usou o Claude Mythos, modelo que a Anthropic havia segurado por questões de segurança, para encontrar e corrigir uma falha que um teste de invasão feito por humanos não tinha achado. Mais da metade dos estados americanos também participou do programa de defesa cibernética da empresa. Esses números são informados pela própria Anthropic, e não houve verificação independente na reportagem.</p>

    <h2>A disputa com a OpenAI pelo cliente público</h2>
    <p>O acordo não acontece no vácuo. Segundo o The Next Web, a OpenAI já tem um contrato parecido com a GSA, com desconto de 50% no uso por token, também por 27 meses, em vigor desde o início de outubro. Na semana passada, o Departamento de Saúde e Serviços Humanos dos EUA também disse que pretende fazer uma contratação direta, sem concorrência, para modelos Claude. A GSA afirma que o programa OneGov já gerou mais de US$ 1,8 bilhão em economia, sendo cerca de US$ 1,6 bilhão ligado aos chamados acordos de superinteligência.</p>

    <p>O desenho dos dois contratos mostra uma estratégia: as grandes empresas de IA aceitam margem menor no setor público em troca de volume, presença nos sistemas do governo e uma vitrine para o mercado corporativo. Para o governo, o desconto por token também reduz o risco de ficar preso a um único fornecedor, já que dois contratos competitivos ficam disponíveis ao mesmo tempo.</p>

    <h2>O ponto de atenção para o IPO</h2>
    <p>Como lembra a reportagem, o anúncio sai na mesma semana em que a Anthropic protocolou o pedido de oferta pública na Nasdaq. No documento enviado a investidores, a empresa avisa que ações do governo dos EUA podem afetar o negócio. A relação é mesmo delicada: ao mesmo tempo em que o setor público vira cliente importante, decisões políticas, como restrições de compra ou disputas sobre regulação, podem mudar rápido. Já tratamos do documento em <a href="/noticias/anthropic-protocola-s-1-publico-nasdaq-ant-receita-16-bilhoes">Anthropic abre S-1: ANT na Nasdaq e US$ 16,3 bi de receita no semestre</a>.</p>

    <p>Também vale lembrar que o Claude for Government só saiu do beta há poucas semanas, como contamos em <a href="/noticias/anthropic-claude-governo-fedramp-high">Claude for Government sai do beta e chega a agências dos EUA</a>. Em menos de um mês, a oferta passou de produto recém-liberado para contrato com preço reduzido e alcance ampliado para todos os níveis de governo.</p>

    <h2>O que a reportagem ainda não responde</h2>
    <p>O desconto vale para o uso por token, mas a reportagem não informa o preço final por modelo nem quanto cada órgão pagará na prática, porque o valor depende do consumo e da tabela de cada produto. A economia de US$ 1 bilhão é uma estimativa da Anthropic, não um número auditado. Também não há detalhe sobre como os governos estaduais e municipais vão contratar, se por compra direta ou por intermediários, nem sobre eventuais regras de segurança específicas além das já exigidas para o uso federal.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você mora no Brasil, o acordo não muda o preço do seu plano nem da sua API. Mas ele mostra para onde o mercado caminha: o preço por token está virando negociação de volume, e quem compra em escala consegue condições bem melhores do que o usuário comum. Para quem presta serviço ou vende soluções com IA, isso é um sinal útil. O custo do modelo tende a cair para clientes grandes, e o diferencial de quem trabalha com empresas pequenas passa a ser a implantação, o atendimento e o resultado entregue, não a revenda do acesso ao modelo.</p>

    <p>Também é um recado sobre escolha de ferramenta. A disputa entre Anthropic e OpenAI no setor público tende a trazer concorrência de preço e de recursos para todos os usuários, inclusive no Brasil. Se você ainda está decidindo qual assistente usar no trabalho, vale ler nosso comparativo <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini: qual IA escolher</a> e entender como funcionam os <a href="/artigos/creditos-de-api-do-claude-nos-planos-max-e-team-como-resgatar-o-que-cobrem-e-limites">créditos de API do Claude nos planos Max e Team</a>.</p>

    <p>Por fim, o caso reforça que segurança e governança entram no pacote de venda para o setor público. Um dos exemplos citados é justamente o uso de IA para achar falhas que testes humanos deixaram passar, tema que já apareceu em <a href="/noticias/anthropic-invadida-agentes-ia-cathedral-bug-bounty">agentes de IA de startup invadem sistemas de apoio da Anthropic</a>. Para quem lida com dados de clientes, a lição é a mesma: antes de contratar qualquer ferramenta de IA, confira onde os dados ficam e quem pode acessá-los.</p>

    <p>Este texto é análise nossa a partir da reportagem do The Next Web, que cita o anúncio da Anthropic, o comunicado da GSA e a Nextgov. A notícia veio de uma fonte principal, e os números acima refletem o que essa reportagem informa, sem confirmação independente adicional.</p>
  `,
};
