import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "fechamento-de-caixa-diario-na-loja-conferir-pix-cartao-e-dinheiro-com-planilha-e-ia",
  title: "Fechamento de caixa diário: conferir Pix, cartão e dinheiro",
  seoTitle: "Fechamento de caixa diário na loja: passo a passo com IA",
  excerpt:
    "Faça o fechamento de caixa diário da loja em 15 minutos: conferir dinheiro, Pix e cartão, achar a diferença, registrar em planilha e usar a IA sem expor dados.",
  metaDescription:
    "Fechamento de caixa diário na loja: roteiro de 15 minutos para conferir dinheiro, Pix e maquininha, tratar diferenças, montar a planilha e usar IA para achar o erro sem enviar dado de cliente.",
  category: "negocios",
  articleSubcategory: "gestao-e-operacao",
  date: "2026-10-29",
  readTime: 7,
  imageQuery: "cash register small shop counter",
  seed: 903,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O fechamento de caixa diário compara o que as vendas dizem que entrou com o que de fato está na gaveta, na maquininha e na conta, e leva uns 15 minutos quando há um roteiro fixo.",
    "A diferença do dia deve ser apurada no mesmo dia: quanto mais tempo passa, mais difícil é achar a causa, seja erro de troco, Pix devolvido ou venda não registrada.",
    "A IA ajuda a montar a planilha e a levantar hipóteses para a diferença, mas só com totais do dia, sem dado de cliente, e quem confere o dinheiro é sempre uma pessoa.",
  ],
  content: `
    <p>O fechamento de caixa diário é a conferência, ao fim do expediente, entre o que as vendas registradas dizem que entrou e o que realmente está na gaveta, na maquininha e na conta, separado por dinheiro, Pix e cartão. Com um roteiro fixo e uma planilha de uma aba, a conta leva uns 15 minutos e mostra a diferença do dia antes que ela vire um mistério de fim de mês.</p>

    <p>Loja pequena costuma fechar o caixa "de cabeça", só olhando se sobrou dinheiro. Mas o dinheiro é só parte da história: Pix pode ser devolvido, cartão cai com taxa e em outra data, e o troco errado some em silêncio. Este guia monta o roteiro, um exemplo com números e a forma de usar a IA para apontar a causa de uma diferença, sem expor dado de cliente.</p>

    <h2>O que é o fechamento de caixa e por que fazer todo dia</h2>

    <p>Fechar o caixa é comparar três fontes: o registro de vendas (sistema, caderno ou planilha), o dinheiro físico contado e os comprovantes de meios eletrônicos (relatório da maquininha e extrato do Pix). Se os três batem, o dia está fechado. Se não batem, a diferença precisa de explicação no mesmo dia, porque a memória de quem atendeu ainda está fresca.</p>

    <p>O material do Sebrae sobre <a href="https://sebrae.com.br/empreendedores/conteudos/gerenciar/controle-financeiro-organize-o-caixa-com-planilhas" target="_blank" rel="noopener noreferrer">controle financeiro e caixa com planilhas simples</a>, consultado em 29/10/2026, defende exatamente esse caminho: organizar o caixa com planilhas simples para decidir melhor. O fechamento diário é a base de tudo o que vem depois, como o <a href="/artigos/fluxo-de-caixa-com-ia-guia-pequenos-negocios">fluxo de caixa</a> e o <a href="/artigos/dre-simples-com-ia-ler-o-lucro-do-pequeno-negocio-mes-a-mes">DRE simples</a>: números errados no dia viram relatório errado no mês.</p>

    <h2>O roteiro de 15 minutos, em 6 passos</h2>

    <ol>
      <li><strong>Abra o dia com o fundo de troco anotado.</strong> Exemplo: R$ 150 em notas pequenas e moedas, sempre o mesmo valor.</li>
      <li><strong>Feche o registro de vendas.</strong> Imprima ou exporte o total do dia por forma de pagamento: dinheiro, Pix, débito, crédito e outros.</li>
      <li><strong>Conte o dinheiro da gaveta.</strong> Duas pessoas, ou uma pessoa duas vezes, anotando por nota e moeda.</li>
      <li><strong>Imprima o relatório da maquininha.</strong> Compare débito e crédito com o que o sistema registrou.</li>
      <li><strong>Confira o Pix no extrato do dia.</strong> Some os recebimentos e some os valores devolvidos.</li>
      <li><strong>Registre na planilha e assine.</strong> Quem fechou escreve nome, hora e diferença. Se houver, descreve a causa provável.</li>
    </ol>

    <p>Escreva esse roteiro em uma folha e deixe ao lado do caixa. O guia de <a href="/artigos/procedimento-operacional-padrao-com-ia-como-documentar-processos">procedimento operacional padrão com IA</a> mostra como transformar rotinas assim em documento, e o de <a href="/artigos/treinar-funcionario-novo-com-ia-roteiro-da-primeira-semana-no-pequeno-negocio">treinar funcionário novo</a> inclui o fechamento de caixa na primeira semana.</p>

    <h2>Exemplo com números: loja de roupas com movimento de R$ 4.250</h2>

    <p>Os valores abaixo são fictícios, para ilustrar a conta. O sistema registrou as vendas do dia assim:</p>

    <table>
      <thead>
        <tr><th>Forma de pagamento</th><th>Registro de vendas</th><th>Conferido</th><th>Diferença</th></tr>
      </thead>
      <tbody>
        <tr><td>Dinheiro</td><td>R$ 620,00</td><td>R$ 605,00 (gaveta menos fundo de troco e sangria)</td><td>menos R$ 15,00</td></tr>
        <tr><td>Pix</td><td>R$ 1.480,00</td><td>R$ 1.480,00 (extrato)</td><td>R$ 0,00</td></tr>
        <tr><td>Débito</td><td>R$ 740,00</td><td>R$ 740,00 (maquininha)</td><td>R$ 0,00</td></tr>
        <tr><td>Crédito</td><td>R$ 1.410,00</td><td>R$ 1.410,00 (maquininha)</td><td>R$ 0,00</td></tr>
        <tr><td>Total</td><td>R$ 4.250,00</td><td>R$ 4.235,00</td><td>menos R$ 15,00</td></tr>
      </tbody>
    </table>

    <p>Como chegar ao dinheiro conferido: a gaveta tinha R$ 455 ao fim do dia, o fundo de troco era R$ 150, e o dono tirou R$ 300 em uma sangria (retirada para o cofre) durante a tarde. A conta é dinheiro na gaveta mais sangria menos fundo de troco: 455 mais 300 menos 150, igual a R$ 605. O sistema registrou R$ 620 em vendas em dinheiro, então faltam R$ 15.</p>

    <p>Repare que o exemplo expõe um erro frequente: misturar sangria, fundo de troco e venda. Por isso a planilha deve ter uma coluna para cada um desses itens, e a conta, uma fórmula única, sempre igual.</p>

    <h2>Como montar a planilha em uma aba</h2>

    <p>Use uma linha por dia e colunas fixas: data, quem fechou, fundo de troco, dinheiro contado, sangrias, vendas em dinheiro (sistema), Pix (sistema e extrato), débito e crédito (sistema e maquininha), diferença total e observação. Na coluna de diferença, uma fórmula soma o conferido e subtrai o registrado. Se você está começando em planilhas, o texto <a href="/artigos/aprender-planilhas-do-zero-com-ia-formulas-erros-e-exercicios">aprender planilhas do zero com IA</a> explica as fórmulas, e o guia de <a href="/artigos/ia-para-planilhas-automatizar-relatorios-excel-sheets">IA para planilhas</a> mostra como montar o relatório do mês.</p>

    <p>No fim do mês, uma <a href="/artigos/tabela-dinamica-no-google-planilhas-passo-a-passo-e-formato-compacto-com-ia">tabela dinâmica</a> soma as diferenças por dia da semana e por funcionário, o que revela padrões: se a falta aparece sempre no sábado à tarde, o problema é de processo e de movimento, não de pessoa.</p>

    <h2>Pix, cartão e a conciliação com o banco</h2>

    <p>O Pix entra na hora, mas pode ser devolvido, e o cartão cai na conta com desconto da taxa e em data posterior. Por isso o fechamento do dia compara o bruto (o que o cliente pagou), e a conciliação com o extrato bancário, feita semanal ou mensalmente, compara o líquido (o que entrou na conta). O guia de <a href="/artigos/conciliacao-bancaria-com-ia-pequeno-negocio-guia">conciliação bancária com IA</a> explica essa segunda etapa.</p>

    <p>Exemplo hipotético de taxa, só para a conta: se o débito tivesse taxa de 1,5% e o crédito de 3,5% no seu contrato, os R$ 740 e R$ 1.410 do dia renderiam cerca de R$ 11,10 e R$ 49,35 de desconto. Use a taxa real do seu contrato de maquininha, que está no portal da operadora. Para recebimentos recorrentes, o <a href="/artigos/pix-automatico-para-pequeno-negocio-cobrar-mensalidades-com-ia">Pix Automático para pequeno negócio</a> tem outro fluxo de conferência. E se aparecer um Pix que você não reconhece, o texto sobre o <a href="/artigos/golpe-do-pix-o-que-fazer-nas-primeiras-horas-med-e-uso-de-ia">golpe do Pix</a> traz os primeiros passos.</p>

    <h2>Como a IA ajuda, sem expor dado de cliente</h2>

    <p>A IA é boa para montar a planilha, criar as fórmulas e levantar hipóteses sobre uma diferença. Envie só os totais do dia, sem nome de cliente, CPF ou número de cartão. O <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">checklist de LGPD para pequeno negócio</a> explica por que dado de cliente não entra nesse tipo de conversa.</p>

    <pre><code>Sou dono de uma loja pequena. Segue o fechamento do dia, só com totais (sem dados de clientes): fundo de troco R$ 150; dinheiro contado na gaveta R$ 455; sangria R$ 300; vendas em dinheiro no sistema R$ 620; Pix no sistema R$ 1.480 e no extrato R$ 1.480; débito R$ 740 nos dois; crédito R$ 1.410 nos dois. 1) Calcule a diferença de cada forma de pagamento. 2) Liste 4 causas prováveis para a diferença em dinheiro, da mais comum à mais rara. 3) Diga que conferência eu faço primeiro para cada causa. Não invente dado.</code></pre>

    <pre><code>Monte uma planilha de fechamento diário para o Google Planilhas com as colunas: data, responsável, fundo de troco, dinheiro contado, sangrias, vendas em dinheiro, diferença em dinheiro, Pix sistema, Pix extrato, diferença Pix, débito, crédito, diferença total e observação. Escreva as fórmulas de cada coluna calculada e uma formatação condicional que destaque diferenças diferentes de zero.</code></pre>

    <p>A IA pode errar conta, então refaça o cálculo na calculadora quando o valor for relevante. O texto sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a> explica o motivo.</p>

    <h2>Quando a diferença aparece</h2>

    <p>Diferença pequena e esporádica é normal: troco dado a mais, moeda esquecida. Diferença que se repete na mesma forma de pagamento pede investigação. Em dinheiro, as causas mais comuns são troco errado, venda não registrada, sangria sem anotação e erro na contagem do fundo. No Pix, veja devoluções, cobranças duplicadas e comprovantes falsos de pagamento mostrados no balcão (confira sempre no aplicativo do banco, e não só na tela do cliente). No cartão, olhe vendas canceladas no sistema que ficaram aprovadas na maquininha.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Dica</span>
      <p>Defina uma tolerância, como R$ 5 por dia, e uma regra para o que passar disso: refazer a contagem, rever os últimos atendimentos e anotar a causa. Sem regra, cada fechamento vira discussão.</p>
    </div>

    <h2>Fechamento do caixa e as obrigações do MEI</h2>

    <p>Quem é MEI precisa preencher o relatório mensal de receitas brutas. Segundo a <a href="https://www.gov.br/pt-br/servicos/baixar-relatorio-mensal-de-receitas-brutas" target="_blank" rel="noopener noreferrer">página oficial do gov.br para baixar o relatório</a>, consultada em 29/10/2026, o prazo é o dia 20 do mês seguinte, e o documento deve ficar guardado em caso de exigência. Com o fechamento diário organizado, o total do mês sai da própria planilha. Para acompanhar o teto, veja o guia de <a href="/artigos/limite-de-faturamento-do-mei-como-controlar-mes-a-mes">limite de faturamento do MEI</a>.</p>

    <p>O dinheiro que o dono tira do caixa também precisa de registro. A regra de <a href="/artigos/retirada-fixa-do-dono-pro-labore-e-conta-separada-no-pequeno-negocio">retirada fixa do dono e conta separada</a> evita que a sangria do dia se misture com o gasto pessoal.</p>

    <h2>Erros comuns no fechamento de caixa</h2>

    <ul class="checklist">
      <li>Fechar só quando "sobra tempo", e não todo dia, no mesmo horário.</li>
      <li>Deixar a mesma pessoa registrar a venda, contar o dinheiro e assinar o fechamento, sem nenhuma conferência cruzada.</li>
      <li>Misturar o fundo de troco com o dinheiro das vendas.</li>
      <li>Confiar no comprovante de Pix mostrado no celular do cliente, sem checar no aplicativo do banco.</li>
      <li>Colar na IA dados de clientes, notas fiscais com CPF ou números de cartão.</li>
      <li>Ignorar a diferença pequena que se repete: ela costuma ser o sinal de um problema de processo.</li>
    </ul>

    <p>Em épocas de movimento alto, como o <a href="/artigos/natal-2026-como-planejar-estoque-promocoes-e-campanhas-com-ia-na-loja">Natal</a>, o fechamento ganha ainda mais valor, e o <a href="/artigos/kpis-simples-cinco-numeros-para-acompanhar-toda-semana-no-seu-negocio-com-ia">painel de cinco números semanais</a> pode incluir o total de diferenças do período. Escolha um horário, imprima o roteiro e faça o primeiro fechamento hoje, mesmo com a planilha ainda simples. A categoria de <a href="/categoria/negocios">negócios do Portal da AI</a> traz os próximos passos de gestão.</p>
  `,
  faq: [
    {
      question: "O que é fechamento de caixa?",
      answer:
        "É a conferência, ao fim do expediente, entre o total de vendas registrado e o que realmente entrou em dinheiro, Pix e cartão. Se os valores batem, o caixa está fechado. Se há diferença, ela é investigada no mesmo dia, antes que o erro se acumule.",
    },
    {
      question: "Como fazer o fechamento de caixa da loja?",
      answer:
        "Anote o fundo de troco, feche o registro de vendas por forma de pagamento, conte o dinheiro, compare a maquininha e o extrato do Pix, registre tudo em uma planilha e escreva a diferença com a causa provável. Com um roteiro fixo, leva cerca de 15 minutos.",
    },
    {
      question: "Qual diferença de caixa é aceitável?",
      answer:
        "Não existe regra oficial. Cada loja define uma tolerância, como poucos reais por dia, e uma ação para o que passar dela, como recontar e revisar os últimos atendimentos. Diferença pequena que se repete na mesma forma de pagamento merece investigação.",
    },
    {
      question: "A IA pode fazer o fechamento de caixa?",
      answer:
        "Ela ajuda a montar a planilha, escrever fórmulas e levantar hipóteses para uma diferença, usando só os totais do dia. A contagem do dinheiro e a conferência de Pix e maquininha continuam sendo humanas, e as contas da IA devem ser refeitas quando o valor for relevante.",
    },
    {
      question: "O MEI precisa registrar as receitas todo mês?",
      answer:
        "Sim. Segundo o gov.br, o relatório mensal de receitas brutas deve ser preenchido até o dia 20 do mês seguinte e ficar guardado, sem precisar ser enviado a nenhum órgão. O fechamento diário facilita porque o total do mês sai da planilha.",
    },
  ],
};
