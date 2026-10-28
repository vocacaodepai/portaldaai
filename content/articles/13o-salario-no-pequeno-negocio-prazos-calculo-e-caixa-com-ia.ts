import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "13o-salario-no-pequeno-negocio-prazos-calculo-e-caixa-com-ia",
  title: "13º salário no pequeno negócio: prazos, cálculo e caixa com IA",
  seoTitle: "13º salário no pequeno negócio: prazos e cálculo",
  excerpt:
    "13º salário no pequeno negócio: veja os prazos de 30/11 e 20/12, como calcular o proporcional e a parte variável e como separar o caixa com a IA.",
  metaDescription:
    "13º salário no pequeno negócio: prazos oficiais, cálculo proporcional e com comissão, exemplo com três funcionários, plano de caixa e prompts para a IA.",
  category: "negocios",
  articleSubcategory: "financas-e-precificacao",
  date: "2026-10-28",
  readTime: 7,
  imageQuery: "small business owner calculator payroll desk",
  seed: 853,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "A primeira parcela do 13º vale metade da remuneração do mês anterior e tem prazo até 30 de novembro; a segunda complementa o valor e vence em 20 de dezembro.",
    "Quem trabalhou parte do ano recebe o proporcional por mês, e fração de 15 dias ou mais conta como mês inteiro; com comissão ou horas extras, o cálculo usa média.",
    "Reservar cerca de 1/12 da folha por mês evita o aperto de caixa em novembro e dezembro, e a IA ajuda a montar a planilha, mas o fechamento deve passar pelo contador.",
  ],
  content: `
    <p>O 13º salário no pequeno negócio tem duas datas: a primeira parcela, de metade da remuneração do mês anterior, deve ser paga até 30 de novembro, e a segunda, que completa o valor, até 20 de dezembro. Quem trabalhou só parte do ano recebe o proporcional por mês trabalhado. Com a conta calculada agora, você separa o caixa antes de novembro chegar.</p>

    <p>Para muita loja, oficina e salão, novembro e dezembro são os meses em que mais se vende e também aqueles em que mais se paga: 13º, férias de fim de ano, compras de estoque e, em alguns casos, temporários. Este guia explica as regras gerais com base nas páginas oficiais, mostra um exemplo com três funcionários, propõe um plano de caixa e traz prompts para a IA montar a planilha. Ele não substitui o contador: cada empresa tem convenção coletiva, regime e detalhes próprios.</p>

    <h2>Quem tem direito e quais são os prazos?</h2>

    <p>Segundo a <a href="https://www.gov.br/trabalho-e-emprego/pt-br/noticias-e-conteudo/2025/novembro/decimo-terceiro-salario-entenda-o-direito-regras-e-prazos-de-pagamento" target="_blank" rel="noopener noreferrer">página do Ministério do Trabalho e Emprego sobre o 13º</a>, consultada em 28/10/2026, todos os empregados formais têm direito ao benefício, que pode ser pago integralmente ou de forma proporcional ao tempo trabalhado no ano. A primeira parcela pode ser paga entre fevereiro e novembro, com prazo final em 30 de novembro, e corresponde à metade da remuneração do mês anterior, em geral outubro. A segunda parcela vence em 20 de dezembro e paga o restante do valor total devido.</p>

    <p>Em 2026, o dia 30 de novembro cai numa segunda-feira, e o dia 20 de dezembro, num domingo. A página oficial não detalha o que ocorre quando o prazo cai no fim de semana, então a regra prática é não deixar para a última hora: programe a transferência para a sexta, 18 de dezembro, ou antes. Se a sua categoria tem convenção coletiva, confira se ela prevê datas ou multas diferentes.</p>

    <p>Se o seu negócio é MEI com empregado, o limite de empregados e as regras de contribuição estão no texto sobre <a href="/artigos/mei-com-dois-empregados-e-teto-de-r-140-mil-o-que-muda-com-a-lc-238">MEI com dois empregados e o teto de R$ 140 mil</a>. Para quem já faz contratação sazonal, o 13º do temporário entra na mesma lógica proporcional, como mostra o guia de <a href="/artigos/trabalhador-temporario-no-natal-contrato-prazo-e-escala-com-ia-no-pequeno-comercio">trabalhador temporário no Natal</a>.</p>

    <h2>Como calcular o 13º proporcional</h2>

    <p>A regra do proporcional é por mês. A mesma página do Ministério informa que o 13º integral é devido a quem trabalhou o ano todo e que, para quem não completou 12 meses, o cálculo é feito pelos meses trabalhados, com fração de 15 dias ou mais contando como mês inteiro. O exemplo oficial: quem foi contratado até 15 de janeiro recebe o valor integral, e quem entrou em 10 de maio recebe 8/12.</p>

    <p>Na prática, a fórmula simples é: salário mensal dividido por 12, multiplicado pelos meses a receber. Faltas não justificadas, afastamentos e outras situações podem alterar o número de meses. Por isso, use a fórmula para estimar o caixa e deixe o valor definitivo para a folha de pagamento.</p>

    <h3>E se o salário tem comissão ou hora extra?</h3>

    <p>Com remuneração variável, o cálculo usa média. Segundo o Ministério, a primeira parcela se baseia na média de janeiro a novembro, paga até 30 de novembro. A segunda parcela completa o valor até 11/12 da média, paga até 20 de dezembro. Depois do fechamento de dezembro, há o ajuste final com base na média dos 12 meses, até 10 de janeiro do ano seguinte. Se os valores variáveis de dezembro ainda não estiverem apurados, o empregador deve recalcular o 13º depois de fechar a folha e acertar a diferença.</p>

    <h2>Exemplo: loja com três funcionários</h2>

    <p>Considere uma loja de roupas com três empregados em regime CLT. Ana ganha R$ 1.800 e trabalhou o ano todo. Bruno ganha R$ 2.200 e também. Carla ganha R$ 2.500 e foi contratada em 12 de março, o que dá 20 dias em março e, portanto, 10 meses contados (março a dezembro), ou 10/12. Valores arredondados, antes de descontos de INSS e imposto de renda, quando aplicáveis:</p>

    <table>
      <thead>
        <tr><th>Funcionário</th><th>Total do 13º</th><th>1ª parcela (até 30/11)</th><th>2ª parcela (até 20/12)</th></tr>
      </thead>
      <tbody>
        <tr><td>Ana</td><td>R$ 1.800,00</td><td>R$ 900,00</td><td>R$ 900,00</td></tr>
        <tr><td>Bruno</td><td>R$ 2.200,00</td><td>R$ 1.100,00</td><td>R$ 1.100,00</td></tr>
        <tr><td>Carla (10/12)</td><td>R$ 2.083,33</td><td>R$ 1.250,00</td><td>R$ 833,33</td></tr>
        <tr><td>Total</td><td>R$ 6.083,33</td><td>R$ 3.250,00</td><td>R$ 2.833,33</td></tr>
      </tbody>
    </table>

    <p>Para Carla, a primeira parcela segue a regra oficial de metade da remuneração do mês anterior, e a segunda ajusta o restante até o total proporcional. Números são apenas ilustrativos. Se houver diferença na forma como a sua folha ou o seu contador trata a primeira parcela de quem foi admitido durante o ano, siga a orientação deles.</p>

    <p>Além do 13º, a empresa tem encargos sobre ele. A página do <a href="https://www.gov.br/pt-br/servicos/emissao-de-guia-para-recolhimento-do-fgts-atraves-do-fgts-digital" target="_blank" rel="noopener noreferrer">serviço de emissão de guia do FGTS Digital</a>, consultada em 28/10/2026, informa que as contribuições vencem no dia 20 do mês seguinte ao período de trabalho e que, se não houver expediente bancário nessa data, o prazo vai para o dia útil bancário anterior. Peça ao contador a competência e o valor exatos das guias que incidem sobre o 13º.</p>

    <h2>Plano de caixa: como separar o dinheiro antes de novembro</h2>

    <p>O erro mais comum é tratar o 13º como surpresa de dezembro. Ele é um custo previsível, como o aluguel. Uma regra simples é reservar 1/12 da folha por mês, ou seja, cerca de 8,33%. Na loja do exemplo, a folha base é de R$ 6.500 por mês, então a reserva mensal seria de aproximadamente R$ 541,67. Quem não reservou até agora pode dividir o valor que falta em semanas.</p>

    <ul class="checklist">
      <li>Abra uma conta ou "caixinha" separada só para o 13º e para as férias, e mova o valor todo mês.</li>
      <li>Some a primeira parcela de novembro e a segunda de dezembro ao fluxo de caixa mensal.</li>
      <li>Reserve também uma margem para encargos e para a folha de dezembro.</li>
      <li>Revise a previsão de vendas de Black Friday e Natal antes de comprar estoque a prazo.</li>
      <li>Defina uma data interna de aprovação do pagamento, 3 dias úteis antes do prazo oficial.</li>
    </ul>

    <p>Para montar o fluxo, o guia de <a href="/artigos/fluxo-de-caixa-com-ia-guia-pequenos-negocios">fluxo de caixa com IA</a> ensina a estrutura, e o de <a href="/artigos/capital-de-giro-do-pequeno-negocio-como-calcular-com-ia-e-quando-pedir-credito">capital de giro</a> mostra quando o aperto pede crédito. Se a sua loja depende do Natal, veja também o planejamento de <a href="/artigos/natal-2026-como-planejar-estoque-promocoes-e-campanhas-com-ia-na-loja">estoque e campanhas para o Natal</a> e o de <a href="/artigos/black-friday-2026-desconto-sem-prejuizo-para-pequeno-negocio">Black Friday sem prejuízo</a>.</p>

    <h2>Prompts para a IA montar a planilha</h2>

    <p>A IA é boa para organizar e simular cenários, não para decidir a regra trabalhista. Não cole nome completo, CPF ou salários identificados de funcionários em ferramentas públicas: troque por "Funcionário A", "B" e "C", como recomenda a <a href="/artigos/politica-de-uso-de-ia-na-pequena-empresa-regras-simples-para-a-equipe">política de uso de IA para a equipe</a>.</p>

    <pre><code>Monte uma tabela para eu estimar o 13º salário de 3 funcionários CLT. Dados: A ganha R$ 1.800 e trabalhou o ano todo; B ganha R$ 2.200 e trabalhou o ano todo; C ganha R$ 2.500 e foi admitido em 12/03/2026. Regras: fração de 15 dias ou mais conta como mês; 1ª parcela = metade da remuneração de outubro, até 30/11; 2ª parcela = restante, até 20/12. Mostre total, 1ª e 2ª parcelas e a reserva mensal de 1/12 da folha. Avise o que depende do contador.</code></pre>

    <pre><code>Tenho R$ 18.000 de caixa hoje, vendas médias de R$ 42.000 por mês e despesas fixas de R$ 31.000. Preciso pagar R$ 3.250 em 30/11 e R$ 2.833 em 20/12 de 13º. Simule três cenários de vendas (queda de 10%, estável e alta de 15%) em novembro e dezembro e diga em quais semanas o caixa fica mais apertado.</code></pre>

    <p>Peça sempre que a IA mostre o cálculo passo a passo, e confira a conta na calculadora. Para dar nome ao que você está olhando no fim do mês, a planilha de <a href="/artigos/dre-simples-com-ia-ler-o-lucro-do-pequeno-negocio-mes-a-mes">DRE simples</a> e os <a href="/artigos/kpis-simples-cinco-numeros-para-acompanhar-toda-semana-no-seu-negocio-com-ia">cinco números semanais</a> ajudam a enxergar o impacto.</p>

    <h2>Erros comuns com o 13º no pequeno negócio</h2>

    <ul class="checklist">
      <li>Deixar para pagar tudo em dezembro e perder o prazo da primeira parcela de 30 de novembro.</li>
      <li>Esquecer que a média de comissão e hora extra entra no cálculo.</li>
      <li>Contar meses errado para quem entrou ou saiu durante o ano: fração de 15 dias ou mais vale um mês.</li>
      <li>Tratar a estimativa da IA como valor final, sem passar pela folha do contador.</li>
      <li>Misturar o dinheiro do 13º com o capital de giro e gastar em estoque. A <a href="/artigos/retirada-fixa-do-dono-pro-labore-e-conta-separada-no-pequeno-negocio">conta separada do dono e do negócio</a> ajuda a manter a disciplina.</li>
      <li>Ignorar a convenção coletiva da categoria, que pode trazer regras próprias.</li>
    </ul>

    <p>Se você conversa com a equipe sobre fim de ano, uma boa prática é avisar as datas com antecedência e explicar o que será pago. O guia de <a href="/artigos/gestao-de-equipe-com-ia-escala-e-tarefas-pequeno-negocio">gestão de equipe com IA</a> ajuda a organizar escala e comunicação, e o texto sobre <a href="/artigos/holerite-com-ia-como-ler-descontos-inss-irrf-e-fgts-sem-erro">como ler o holerite</a> é útil para o funcionário entender os descontos da segunda parcela.</p>

    <h2>Próximo passo</h2>

    <p>Nesta semana, liste os funcionários, o salário e a data de admissão, calcule o 13º estimado e marque no calendário o dia 30 de novembro e o dia 18 de dezembro. Depois, confirme os valores e as guias com o contador. Para planejar o ano seguinte com metas e calendário, o roteiro do <a href="/artigos/planejamento-2027-do-pequeno-negocio-metas-orcamento-e-calendario-com-ia">planejamento 2027 do pequeno negócio</a> é um bom próximo passo. Mais conteúdo para donos de negócio está na <a href="/categoria/negocios">categoria Negócios</a>.</p>
  `,
  faq: [
    {
      question: "Qual o prazo do 13º salário em 2026?",
      answer:
        "Segundo o Ministério do Trabalho e Emprego, a primeira parcela pode ser paga de fevereiro a novembro, com prazo final em 30 de novembro, e vale metade da remuneração do mês anterior. A segunda parcela vence em 20 de dezembro. Confira também a convenção coletiva da sua categoria.",
    },
    {
      question: "Como calcular o 13º de quem trabalhou só parte do ano?",
      answer:
        "O cálculo é proporcional aos meses trabalhados, e fração de 15 dias ou mais conta como mês inteiro. Em geral, divide-se o salário por 12 e multiplica-se pelos meses a receber. Quem foi contratado em 10 de maio, por exemplo, recebe 8/12, segundo o exemplo do Ministério.",
    },
    {
      question: "Como fica o 13º com comissão e hora extra?",
      answer:
        "A primeira parcela usa a média de janeiro a novembro, paga até 30 de novembro. A segunda completa até 11/12 da média, paga até 20 de dezembro. Depois de fechar dezembro, há o ajuste final com a média dos 12 meses, até 10 de janeiro do ano seguinte.",
    },
    {
      question: "MEI com funcionário precisa pagar 13º?",
      answer:
        "O empregado formal tem direito ao 13º, e o MEI que contrata um funcionário passa a ser empregador. Os detalhes de contribuição e de declaração mudam conforme o caso, então confirme com o contador e nas páginas oficiais de MEI e eSocial antes de fechar a folha.",
    },
    {
      question: "A IA pode calcular o 13º dos meus funcionários?",
      answer:
        "Ela ajuda a montar a planilha e a simular o caixa, mas o valor final deve vir da folha de pagamento ou do contador. Evite enviar nomes, CPFs e salários identificados a ferramentas públicas, use rótulos como Funcionário A e confira as contas na calculadora.",
    },
  ],
};
