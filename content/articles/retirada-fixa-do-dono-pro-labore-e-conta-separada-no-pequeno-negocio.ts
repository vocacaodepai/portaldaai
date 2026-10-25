import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "retirada-fixa-do-dono-pro-labore-e-conta-separada-no-pequeno-negocio",
  title: "Retirada fixa do dono: pró-labore e conta separada",
  seoTitle: "Retirada fixa do dono: pró-labore e conta separada",
  excerpt:
    "Retirada fixa do dono: aprenda a separar o dinheiro da empresa do seu, definir o pró-labore pelo pior mês e usar a IA para montar a regra sem se enrolar.",
  metaDescription:
    "Retirada fixa do dono: como separar conta pessoal e da empresa, definir o pró-labore pelo pior mês de faturamento, criar reserva e usar prompts de IA com um exemplo em reais.",
  category: "negocios",
  articleSubcategory: "financas-e-precificacao",
  date: "2026-10-25",
  readTime: 7,
  imageQuery: "small business owner counting money notebook calculator",
  seed: 707,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "A retirada fixa é um valor que o dono transfere da conta da empresa para a pessoal sempre na mesma data, e as despesas pessoais saem só dele, o que evita saques avulsos que bagunçam o caixa.",
    "Um jeito prudente de definir o valor é partir do pior mês de faturamento recente, descontar as despesas do negócio e comparar com os custos pessoais, deixando a sobra de meses melhores para reserva e reinvestimento.",
    "A IA ajuda a organizar a regra e simular cenários, mas valor de pró-labore, INSS e imposto devem ser confirmados com contador e nas tabelas oficiais, porque dependem do tipo de empresa.",
  ],
  content: `
    <p>A retirada fixa do dono é um valor combinado que você transfere da conta da empresa para a sua conta pessoal todo mês, na mesma data. Em empresa com sócios, a remuneração de quem trabalha no negócio se chama pró-labore. O objetivo é simples: parar de tirar dinheiro do caixa quando dá vontade e passar a pagar as contas de casa só com essa retirada.</p>

    <p>Quase todo pequeno negócio começa com a conta do dono e a conta da empresa misturadas. Funciona nos primeiros meses e, depois, ninguém sabe se o negócio dá lucro ou se o lucro é só o dinheiro que sobrou no Pix. Este guia mostra como separar as contas, como chegar a um valor de retirada com um exemplo em reais, como a IA ajuda nas simulações e onde pedir ajuda profissional.</p>

    <h2>Por que misturar as contas atrapalha</h2>

    <p>Quando o dinheiro de vendas cai na mesma conta que paga o mercado e o aluguel de casa, três problemas aparecem. Primeiro, você não enxerga o lucro real, porque gastos pessoais se misturam às despesas do negócio. Segundo, o caixa vira surpresa: o dinheiro que deveria pagar o fornecedor foi para uma viagem. Terceiro, fica difícil conseguir crédito, fazer a declaração e conversar com o contador, já que nada tem origem clara.</p>

    <p>O <a href="https://blog.rn.sebrae.com.br/gestao-financeira-pequenos-negocios-guia-completo/" target="_blank" rel="noopener noreferrer">guia de gestão financeira do Sebrae RN</a> (consultado em 25/10/2026) recomenda abrir uma conta usada só para o negócio, em que entram as vendas e saem os pagamentos da empresa. Também orienta evitar saques avulsos, porque eles desorganizam o fluxo de caixa, e fixar uma retirada mensal realista. Em empresas com sócios, o texto chama essa retirada de pró-labore. As despesas pessoais, como aluguel, mercado e contas de casa, saem só dela.</p>

    <p>Se o seu caixa ainda é uma planilha improvisada, comece pelo básico do <a href="/artigos/fluxo-de-caixa-com-ia-guia-pequenos-negocios">fluxo de caixa com IA</a> e pelo método da <a href="/artigos/conciliacao-bancaria-com-ia-pequeno-negocio-guia">conciliação bancária</a>.</p>

    <h2>Passo a passo para separar as contas</h2>

    <ol>
      <li><strong>Abra uma conta só do negócio.</strong> Compare tarifas entre bancos e instituições de pagamento, porque muitos oferecem contas empresariais de baixo custo.</li>
      <li><strong>Direcione todas as vendas para ela:</strong> chave Pix, maquininha, boletos e marketplaces.</li>
      <li><strong>Pague todos os custos do negócio por ela</strong>, inclusive impostos, fornecedores e ferramentas.</li>
      <li><strong>Defina a retirada e a data.</strong> Uma transferência por mês, de valor fixo.</li>
      <li><strong>Pague suas despesas pessoais só com a retirada.</strong> Se faltar, o problema é de planejamento, e não é para pegar mais no caixa.</li>
      <li><strong>Separe uma reserva</strong> em outra conta ou investimento de liquidez diária.</li>
    </ol>

    <p>Para o MEI, a conversa tem uma particularidade: ele não tem pró-labore formal como uma sociedade, e a forma de tirar o lucro tem regras próprias. Confirme com um contador e acompanhe o <a href="/artigos/limite-de-faturamento-do-mei-como-controlar-mes-a-mes">limite de faturamento do MEI</a> mês a mês. Se o negócio cresce, o guia <a href="/artigos/de-mei-para-microempresa-quando-migrar-simples-nacional-e-contador">de MEI para microempresa</a> explica quando pensar na migração.</p>

    <h2>Como definir o valor da retirada: o método do pior mês</h2>

    <p>A tentação é fixar a retirada pela média dos melhores meses. O problema é que o mês ruim chega e o caixa não aguenta. Um método mais prudente usa o pior mês recente:</p>

    <table>
      <thead>
        <tr><th>Passo</th><th>Exemplo (salão de beleza, valores fictícios)</th></tr>
      </thead>
      <tbody>
        <tr><td>Faturamento do pior mês dos últimos 6</td><td>R$ 6.500</td></tr>
        <tr><td>Menos despesas do negócio (aluguel do ponto, produtos, taxas, impostos)</td><td>R$ 3.000</td></tr>
        <tr><td>Resultado do pior mês</td><td>R$ 3.500</td></tr>
        <tr><td>Custos pessoais mensais do dono</td><td>R$ 2.800</td></tr>
        <tr><td><strong>Retirada fixa sugerida</strong></td><td><strong>R$ 2.800</strong></td></tr>
        <tr><td>Sobra do pior mês, vai para a reserva</td><td>R$ 700</td></tr>
      </tbody>
    </table>

    <p>Nos meses melhores, o que passa dessa retirada fica na conta da empresa. Uma regra simples de partida (ajuste ao seu caso) é dividir o excedente: metade para reserva até cobrir alguns meses de despesas, parte para reinvestir no negócio e o restante para distribuição de lucro, se a sua forma de empresa permitir. Se o resultado do pior mês não cobre sequer os seus custos pessoais, o sinal é de que o negócio ainda não sustenta você. Aí vale rever preço e custos antes de aumentar a retirada, com o apoio de <a href="/artigos/ponto-de-equilibrio-com-ia-quanto-vender-para-nao-ter-prejuizo">ponto de equilíbrio com IA</a> e <a href="/artigos/como-precificar-produtos-e-servicos-com-ia">precificação com IA</a>.</p>

    <h2>Pró-labore, imposto e o que pedir ao contador</h2>

    <p>Em empresa com sócios, o pró-labore é a remuneração de quem trabalha no negócio e costuma ter contribuição previdenciária e imposto de renda retido na fonte. A tabela mensal do imposto de renda de pessoa física para 2026 está na <a href="https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas/2026" target="_blank" rel="noopener noreferrer">página da Receita Federal</a> (verificada em 25/10/2026): isenção até R$ 2.428,80, alíquotas de 7,5% a 27,5% acima disso e uma redução mensal, a partir de janeiro de 2026, que zera o imposto para rendimentos tributáveis de até R$ 5.000,00. Não use essa tabela como cálculo final do seu caso: a base e a contribuição do sócio dependem do enquadramento da empresa.</p>

    <p>Leve ao contador estas perguntas: qual regime tributário a empresa tem, qual valor mínimo e máximo de pró-labore faz sentido, quais descontos incidem, se há distribuição de lucro isenta no seu caso e quando devo formalizar a retirada. Quem já tem folha para outros trabalhadores pode ler o <a href="/artigos/holerite-com-ia-como-ler-descontos-inss-irrf-e-fgts-sem-erro">guia de como ler descontos no holerite</a> para entender o lado do empregado.</p>

    <h2>Como a IA ajuda (e onde ela não decide)</h2>

    <p>A IA é boa para organizar a regra, simular cenários e criar a rotina. Ela não sabe o seu regime tributário nem as tabelas do ano. Dois prompts úteis:</p>

    <pre><code>Sou dono de um [tipo de negócio]. Meu faturamento nos últimos 6 meses foi: [valores]. As despesas médias do negócio são R$ [valor] e meus custos pessoais são R$ [valor]. Simule três valores de retirada fixa e mostre, mês a mês, o saldo da conta da empresa. Aponte o mês em que o caixa fica mais apertado.</code></pre>

    <pre><code>Crie uma regra de 5 linhas para dividir o excedente do caixa nos meses bons: reserva, reinvestimento e lucro. Use percentuais como exemplo e liste as perguntas que devo levar ao meu contador antes de adotar.</code></pre>

    <p>Cole números reais só se a ferramenta for segura para a sua empresa; caso contrário, troque por valores aproximados, conforme o guia de <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">LGPD para pequeno negócio</a>. Para ver o resultado do mês depois da retirada, o <a href="/artigos/dre-simples-com-ia-ler-o-lucro-do-pequeno-negocio-mes-a-mes">DRE simples com IA</a> mostra se o negócio deu lucro de verdade.</p>

    <h2>Rotina de 15 minutos por mês para manter a regra</h2>

    <p>A regra só funciona se virar hábito. Reserve um horário fixo, por exemplo o primeiro dia útil, e siga um roteiro curto. Primeiro, faça a transferência da retirada da conta da empresa para a pessoal. Segundo, anote o faturamento e as despesas do mês anterior numa planilha de três colunas. Terceiro, calcule o resultado e veja se o pior mês dos últimos seis mudou. Quarto, mova o excedente do mês bom para a conta de reserva. Quinto, registre em uma linha qualquer decisão tomada, como um aumento de retirada ou uma compra grande.</p>

    <p>Quem tem pouco tempo pode pedir à IA que monte a planilha com as fórmulas de soma e resultado e depois conferir cada fórmula com dados de teste. Com três meses de histórico você já enxerga o padrão de sazonalidade do negócio: em lojas, por exemplo, o fim de ano costuma puxar o caixa para cima e janeiro para baixo, e a reserva existe exatamente para atravessar essa diferença.</p>

    <h2>Erros comuns</h2>

    <ul class="checklist">
      <li>Fixar a retirada pela média dos melhores meses.</li>
      <li>Pagar a conta de casa direto com o cartão ou o Pix da empresa.</li>
      <li>Retirar o lucro antes de pagar impostos e fornecedores.</li>
      <li>Não ter reserva: o primeiro cliente que atrasa vira crise (veja <a href="/artigos/ia-para-cobranca-e-inadimplencia-pequeno-negocio">cobrança e inadimplência com IA</a>).</li>
      <li>Nunca rever o valor: reavalie a retirada a cada trimestre, ao fazer o <a href="/artigos/planejamento-2027-do-pequeno-negocio-metas-orcamento-e-calendario-com-ia">planejamento do próximo ano</a>.</li>
      <li>Esquecer do lado pessoal: se o seu orçamento da casa é bagunçado, comece por <a href="/artigos/como-usar-ia-para-organizar-financas-pessoais">organizar as finanças pessoais com IA</a>.</li>
    </ul>

    <p>Uma retirada fixa não traz mais dinheiro por si só, mas traz clareza: você passa a saber quanto o negócio paga a você e quanto fica para ele crescer. Para continuar, passe pela categoria de negócios do Portal da AI e escolha o próximo ajuste do seu caixa.</p>
  `,
  faq: [
    {
      question: "O que é pró-labore?",
      answer:
        "É a remuneração mensal do sócio ou administrador que trabalha na empresa. Funciona como um salário do dono e costuma ter contribuição previdenciária e imposto de renda na fonte. O valor e o tratamento dependem do tipo de empresa, então confirme com o contador.",
    },
    {
      question: "MEI pode ter pró-labore?",
      answer:
        "O MEI não funciona como uma sociedade com pró-labore formal. Mesmo assim, vale separar a conta pessoal da conta do negócio e definir uma retirada mensal fixa de controle. Para saber como tratar o lucro e o limite de faturamento, consulte um contador.",
    },
    {
      question: "Qual valor de retirada devo definir?",
      answer:
        "Um método prudente parte do pior mês de faturamento recente, desconta as despesas do negócio e compara o resultado com seus custos pessoais. A retirada não deve passar do que o negócio sustenta no mês fraco. Os meses melhores alimentam reserva e reinvestimento.",
    },
    {
      question: "Preciso abrir conta bancária só para a empresa?",
      answer:
        "É a prática recomendada pelo Sebrae para quem quer enxergar o lucro real. Compare tarifas, porque há contas empresariais de baixo custo. Direcione vendas e pagamentos do negócio para ela e deixe só a retirada sair para a conta pessoal.",
    },
    {
      question: "A IA pode calcular meu pró-labore?",
      answer:
        "Pode simular cenários de caixa e organizar a regra, mas não substitui o contador no cálculo de contribuição e imposto, que dependem do regime da empresa e das tabelas do ano. Use a IA para preparar as perguntas e confirme os números em fontes oficiais.",
    },
  ],
};
