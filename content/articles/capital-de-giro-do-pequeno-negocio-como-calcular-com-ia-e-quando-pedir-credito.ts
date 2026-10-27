import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "capital-de-giro-do-pequeno-negocio-como-calcular-com-ia-e-quando-pedir-credito",
  title: "Capital de giro do pequeno negócio: como calcular com IA",
  seoTitle: "Capital de giro: como calcular com ajuda de IA",
  excerpt:
    "Entenda capital de giro do pequeno negócio: como calcular quanto você precisa, usar IA para montar a planilha e saber quando pedir crédito sem se enrolar.",
  metaDescription:
    "Capital de giro do pequeno negócio explicado: fórmula simples, exemplo com números, prompts para a IA montar a conta e o que conferir antes de pedir crédito.",
  category: "negocios",
  articleSubcategory: "financas-e-precificacao",
  date: "2026-10-26",
  readTime: 7,
  imageQuery: "small shop owner calculator cash register",
  seed: 821,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Capital de giro é o dinheiro que cobre as despesas do dia a dia enquanto as vendas ainda não viraram caixa, e a conta básica é ativo circulante menos passivo circulante.",
    "Uma forma simples de estimar quanto a operação consome é somar contas a receber e estoque e subtrair o que se deve a fornecedores, depois comparar com o caixa disponível.",
    "Crédito serve para crescer, não para tapar falta de planejamento: antes de pedir, calcule a necessidade, tente encurtar o ciclo e compare o custo total da proposta.",
  ],
  content: `
    <p>Capital de giro é o dinheiro de que o negócio precisa para pagar fornecedores, salários, aluguel e impostos enquanto as vendas ainda não viraram dinheiro no caixa. Para saber quanto o seu pequeno negócio precisa, some o que tem a receber e o que está parado em estoque, subtraia o que deve aos fornecedores e compare com o caixa disponível.</p>

    <p>Muita loja boa quebra sem estar dando prejuízo. Ela vende bem, mas paga o fornecedor em 30 dias e recebe do cliente em 60, e o buraco no meio come o caixa. Entender essa conta antes de pedir um empréstimo evita contratar crédito caro para resolver um problema que, às vezes, é de prazo. Este guia mostra a fórmula, um exemplo com números, prompts para a IA montar a planilha e o que olhar na hora de decidir.</p>

    <h2>O que é capital de giro, em palavras simples</h2>

    <p>O <a href="https://www.sebrae-sc.com.br/blog/o-que-e-capital-de-giro" target="_blank" rel="noopener noreferrer">Sebrae de Santa Catarina</a> define capital de giro como o recurso financeiro necessário para cobrir as despesas operacionais de uma empresa no curto prazo, e compara com o fôlego que permite ao negócio continuar rodando mesmo quando entradas e saídas de dinheiro não coincidem. A fórmula do texto é capital de giro igual a ativo circulante menos passivo circulante.</p>

    <p>Ativo circulante é o que vira dinheiro em até um ano: caixa, contas a receber e estoque. Passivo circulante são as dívidas de curto prazo, como fornecedores, salários e impostos a pagar. O exemplo do Sebrae usa R$ 50 mil de ativo e R$ 30 mil de passivo para chegar a R$ 20 mil de capital de giro. Se o resultado dá negativo, o negócio deve mais no curto prazo do que consegue transformar em dinheiro.</p>

    <p>Isso não é a mesma coisa que lucro. O <a href="/artigos/dre-simples-com-ia-ler-o-lucro-do-pequeno-negocio-mes-a-mes">DRE simples</a> mostra se a operação dá resultado no mês, e o capital de giro mostra se há dinheiro disponível na hora de pagar a conta. Os dois olham o mesmo negócio por ângulos diferentes.</p>

    <h2>Uma conta rápida: quanto a operação consome</h2>

    <p>Para o dia a dia de uma loja ou de um prestador de serviço, uma versão simplificada ajuda: necessidade de capital de giro igual a contas a receber, mais estoque, menos fornecedores a pagar. É uma aproximação de gestão, e o contador pode refinar com outros itens. O valor mostra quanto dinheiro fica preso na operação até as vendas virarem caixa.</p>

    <p>Quanto mais longo o ciclo, maior a necessidade. O ciclo é o tempo entre pagar o fornecedor e receber do cliente. Se você paga em 30 dias, o produto gira em 45 e o cartão cai em 30, o negócio financia cerca de 45 dias de operação com dinheiro próprio. Encurtar qualquer ponto desse ciclo reduz a necessidade sem pegar empréstimo nenhum.</p>

    <p>O <a href="/artigos/fluxo-de-caixa-com-ia-guia-pequenos-negocios">guia de fluxo de caixa com IA</a> complementa essa conta com a visão semana a semana, que é o que mostra o dia exato em que o dinheiro vai faltar.</p>

    <h2>Exemplo com números: uma loja de roupas fictícia</h2>

    <p>Os números abaixo são inventados para ilustrar o raciocínio. Uma loja de roupas tem R$ 18.000 a receber de vendas no cartão e no crediário, R$ 35.000 em estoque e R$ 22.000 a pagar a fornecedores. Tem R$ 12.000 em caixa.</p>

    <table>
      <thead>
        <tr><th>Item</th><th>Valor</th><th>Observação</th></tr>
      </thead>
      <tbody>
        <tr><td>Contas a receber</td><td>R$ 18.000</td><td>Vendas ainda não recebidas</td></tr>
        <tr><td>Estoque</td><td>R$ 35.000</td><td>Dinheiro parado em mercadoria</td></tr>
        <tr><td>Fornecedores a pagar</td><td>R$ 22.000</td><td>Dívida de curto prazo da operação</td></tr>
        <tr><td>Necessidade de giro</td><td>R$ 31.000</td><td>18.000 + 35.000 - 22.000</td></tr>
        <tr><td>Caixa disponível</td><td>R$ 12.000</td><td>Recurso próprio</td></tr>
        <tr><td>Falta estimada</td><td>R$ 19.000</td><td>31.000 - 12.000</td></tr>
      </tbody>
    </table>

    <p>A conta diz que o negócio precisa de cerca de R$ 19.000 além do caixa para sustentar o ciclo atual. Antes de pensar em empréstimo, a pergunta é qual parte desse buraco dá para fechar mexendo na operação. Reduzir R$ 8.000 de estoque parado e negociar mais 15 dias com um fornecedor grande podem diminuir a falta de forma importante, sem juros.</p>

    <h2>Como a IA ajuda a montar e revisar a conta</h2>

    <p>A IA não conhece o seu caixa, mas organiza a planilha, explica a fórmula e aponta onde a conta pode estar errada. Use valores arredondados e não cole extratos bancários nem dados de clientes. A <a href="/artigos/politica-de-uso-de-ia-na-pequena-empresa-regras-simples-para-a-equipe">política de uso de IA na pequena empresa</a> traz regras simples sobre o que nunca deve ir para uma ferramenta aberta.</p>

    <pre><code>Quero calcular a necessidade de capital de giro de uma loja. Monte uma planilha com colunas para: contas a receber, estoque, fornecedores a pagar, caixa disponível. Calcule a necessidade (receber + estoque - fornecedores) e a falta (necessidade - caixa). Use estes valores: receber R$ 18.000, estoque R$ 35.000, fornecedores R$ 22.000, caixa R$ 12.000. Explique cada linha em frase curta.</code></pre>

    <pre><code>Com base nesta conta, liste 6 ações para reduzir a necessidade de capital de giro sem pegar empréstimo, ordenadas da mais fácil para a mais difícil. Considere que o ciclo é: pago fornecedor em 30 dias, estoque gira em 45 dias, cartão cai em 30 dias. Não invente números.</code></pre>

    <p>Depois de gerar a planilha, confira as fórmulas célula por célula, como no guia de <a href="/artigos/como-ganhar-dinheiro-vendendo-planilhas-automatizadas-com-ia">planilhas automatizadas com IA</a>. A IA erra soma com mais frequência do que parece, e uma conta de caixa errada custa caro.</p>

    <h2>Como reduzir a necessidade sem pedir crédito</h2>

    <p>O mesmo texto do Sebrae de Santa Catarina lista práticas para manter o capital de giro saudável: acompanhar de perto contas a pagar e a receber, cobrar clientes atrasados e negociar prazos com fornecedores; controlar o estoque para que não prenda caixa; manter uma reserva de emergência equivalente a 3 a 6 meses de despesas operacionais, em conta separada; e diversificar as fontes de receita.</p>

    <p>Em termos de rotina, três ações rendem mais. A primeira é cobrar em dia: o guia de <a href="/artigos/ia-para-cobranca-e-inadimplencia-pequeno-negocio">IA para cobrança e inadimplência</a> mostra mensagens educadas para quem atrasa, e o <a href="/artigos/pix-automatico-para-pequeno-negocio-cobrar-mensalidades-com-ia">Pix Automático para cobrar mensalidades</a> reduz o esquecimento em serviços recorrentes. A segunda é girar o estoque, e o texto sobre <a href="/artigos/como-usar-ia-para-gerenciar-estoque-pequeno-comercio">gerenciar estoque com IA</a> ajuda a achar o que está parado. A terceira é rever o preço, porque margem baixa deixa o caixa sem folga, como mostra o artigo sobre <a href="/artigos/markup-ou-margem-qual-usar-para-formar-preco-no-pequeno-negocio">markup ou margem</a>.</p>

    <h2>Quando faz sentido pedir crédito</h2>

    <p>O Sebrae de Santa Catarina recomenda usar crédito com cuidado, para crescimento e não para cobrir falhas de planejamento, e comparar taxas e prazos antes de fechar. Crédito faz sentido quando a necessidade é temporária e previsível, como comprar estoque para uma data forte, e a venda esperada paga a parcela com folga.</p>

    <p>Um sinal de alerta é pegar empréstimo para pagar despesa fixa do mês. Isso costuma indicar preço, custo ou prazo desajustado, e a dívida só adia o problema. Antes de assinar, verifique:</p>

    <ul class="checklist">
      <li>O custo total da operação, incluindo juros, tarifas, seguros e impostos, e não só a parcela.</li>
      <li>O prazo, a carência e o valor total pago ao final.</li>
      <li>Se a parcela cabe na margem do negócio sem comprometer o pagamento de fornecedores.</li>
      <li>Se existe garantia exigida e o que acontece em caso de atraso.</li>
      <li>Se programas de crédito para pequenos negócios, que mudam de regra com frequência, são uma opção; confirme as condições atuais direto com o banco.</li>
    </ul>

    <p>Peça a proposta por escrito de mais de uma instituição e leve a conta feita na planilha. Na dúvida, converse com o contador. Se o negócio é MEI e está crescendo, vale ler também o texto sobre <a href="/artigos/de-mei-para-microempresa-quando-migrar-simples-nacional-e-contador">quando migrar de MEI para microempresa</a>.</p>

    <h2>Erros comuns com capital de giro</h2>

    <ul>
      <li>Misturar o dinheiro da loja com o da casa. Sem separação, ninguém sabe o capital de giro real. A conta fica mais clara com <a href="/artigos/retirada-fixa-do-dono-pro-labore-e-conta-separada-no-pequeno-negocio">retirada fixa do dono e conta separada</a>.</li>
      <li>Comprar muito estoque por desconto. O desconto vira prejuízo se a mercadoria demora para girar.</li>
      <li>Vender a prazo sem controlar. Venda não recebida não paga fornecedor.</li>
      <li>Olhar só o lucro do mês. Lucro no papel não paga boleto.</li>
      <li>Calcular uma vez e esquecer. Reveja a conta todo mês, junto dos <a href="/artigos/kpis-simples-cinco-numeros-para-acompanhar-toda-semana-no-seu-negocio-com-ia">KPIs semanais do negócio</a>.</li>
    </ul>

    <h2>Seu próximo passo</h2>

    <p>Separe 30 minutos hoje, anote os quatro números do exemplo e calcule a falta. Depois escolha uma ação para reduzi-la neste mês e confirme o efeito no próximo fechamento. Para organizar as outras partes das finanças, volte à <a href="/categoria/negocios">categoria Negócios</a> e use o <a href="https://www.sebrae.com.br/sites/PortalSebrae" target="_blank" rel="noopener noreferrer">portal do Sebrae</a> para buscar orientação gratuita na sua cidade.</p>
  `,
  faq: [
    {
      question: "O que é capital de giro?",
      answer:
        "É o recurso financeiro que o negócio precisa para cobrir as despesas do dia a dia no curto prazo, como fornecedores, salários, aluguel e impostos, enquanto as vendas ainda não viraram dinheiro no caixa. Na conta contábil, é ativo circulante menos passivo circulante.",
    },
    {
      question: "Como calcular o capital de giro de um pequeno negócio?",
      answer:
        "A fórmula básica é ativo circulante menos passivo circulante. Para uma estimativa rápida da necessidade da operação, some contas a receber e estoque, subtraia fornecedores a pagar e compare com o caixa. Peça ao contador para refinar a conta.",
    },
    {
      question: "Capital de giro é a mesma coisa que lucro?",
      answer:
        "Não. Lucro mostra se a operação deu resultado em um período. Capital de giro mostra se há dinheiro disponível para pagar as contas no curto prazo. Um negócio pode ter lucro no papel e falta de caixa se recebe muito depois de pagar.",
    },
    {
      question: "Quando vale pegar empréstimo de capital de giro?",
      answer:
        "Quando a necessidade é temporária e previsível, como estoque para uma data forte, e a venda esperada paga a parcela com folga. Para tapar falha de planejamento, tende a piorar a situação. Compare o custo total das propostas antes de decidir.",
    },
    {
      question: "A IA pode calcular o capital de giro por mim?",
      answer:
        "Ela monta a planilha, explica a fórmula e sugere ações, mas você precisa conferir as contas e os números de entrada. Use valores arredondados, não envie extratos nem dados de clientes e peça ao contador para validar decisões de crédito.",
    },
  ],
};
