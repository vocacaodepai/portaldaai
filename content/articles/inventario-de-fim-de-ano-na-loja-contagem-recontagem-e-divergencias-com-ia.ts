import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "inventario-de-fim-de-ano-na-loja-contagem-recontagem-e-divergencias-com-ia",
  title: "Inventário de fim de ano na loja: contagem, recontagem e IA",
  seoTitle: "Inventário de fim de ano: contagem e divergências",
  excerpt:
    "Faça o inventário de fim de ano na loja com contagem, recontagem e análise de divergências em planilha, com IA para organizar dados sem pular a conferência.",
  metaDescription:
    "Inventário de estoque no fim do ano em pequena loja: preparação, contagem e recontagem, tolerância de divergência, planilha e prompts de IA para as diferenças.",
  category: "negocios",
  articleSubcategory: "gestao-e-operacao",
  date: "2026-11-02",
  readTime: 8,
  imageQuery: "shop owner counting stock shelves clipboard",
  seed: 1096,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Inventário é contar o estoque físico e comparar com o que o sistema ou a planilha diz; a diferença mostra erros de registro, perdas e itens esquecidos.",
    "O guia de inventários da ABRAS recomenda recontagem feita por outra pessoa ou pelo supervisor, com meta de 100% do depósito e de 10% a 25% da área de venda.",
    "A IA ajuda a montar a planilha de contagem e a classificar causas das divergências, mas a contagem em si e o ajuste do estoque são decisões humanas.",
  ],
  content: `
    <p>Inventário de fim de ano é a contagem física de tudo o que está no estoque da loja, comparada com o saldo registrado no sistema ou na planilha. O objetivo é descobrir a diferença, entender de onde ela veio e corrigir os registros antes de planejar compras, promoções e o balanço do ano.</p>

    <p>Para uma loja pequena, o desafio é fazer isso sem fechar por dias. Este guia mostra um plano de contagem em duas etapas, uma planilha simples, como tratar divergências e onde a IA ajuda, com base no <a href="https://static.abras.com.br/pdf/eficiencia-operacional/guias-praticos-inventarios.pdf" target="_blank" rel="noopener noreferrer">guia prático de inventários da ABRAS</a>, que li em 02/11/2026. A ABRAS é a associação de supermercados, então os números dela são de varejo maior: use como referência de método, não como regra fixa.</p>

    <h2>Por que contar o estoque agora</h2>

    <p>Entre o fim de novembro e dezembro, a loja vende mais, repõe mais e erra mais. Se o saldo do sistema está errado, você compra o que já tem e deixa faltar o que vende. A ABRAS descreve o inventário como o método que permite identificar o estoque real da empresa, e lista entre seus objetivos mapear processos para corrigir as causas de perdas.</p>

    <p>O material do Sebrae sobre <a href="https://datasebrae.com.br/wp-content/uploads/2020/04/Organização-e-Controle-de-Estoque-CS11002-2.pdf" target="_blank" rel="noopener noreferrer">organização e controle de estoque</a>, consultado em 02/11/2026, inclui a rotina de inventário e conferência entre os pontos a avaliar no diagnóstico de uma empresa. Há ainda um motivo de caixa: estoque parado e estoque perdido são dinheiro parado ou perdido. Quem planeja a virada do ano com o texto sobre <a href="/artigos/natal-2026-como-planejar-estoque-promocoes-e-campanhas-com-ia-na-loja">Natal 2026: estoque, promoções e campanhas</a> ou com o de <a href="/artigos/black-friday-2026-desconto-sem-prejuizo-para-pequeno-negocio">Black Friday sem prejuízo</a> precisa de um saldo confiável antes de decidir quanto comprar. Para o dia a dia, o guia de <a href="/artigos/como-usar-ia-para-gerenciar-estoque-pequeno-comercio">estoque no pequeno comércio com IA</a> traz a rotina.</p>

    <h2>Tipos de inventário e qual usar</h2>

    <p>O material da ABRAS separa o inventário geral de ciclos menores. O preventivo é diário, semanal ou quinzenal e serve para ajustar distorções antes do ciclo geral. O de manutenção é mensal e ajusta divergências e analisa distorções. O geral cobre tudo, normalmente uma ou poucas vezes por ano, e pode ser feito à noite ou com a loja fechada.</p>

    <p>Para uma loja pequena, uma combinação realista é: contagem rotativa de poucos itens por semana durante o ano e uma contagem geral em janeiro, depois das vendas de fim de ano. Mas se você nunca contou, faça uma contagem geral agora, em um dia de menor movimento, mesmo que em duas etapas (por exemplo, domingo à noite e segunda cedo). O que pesa é a comparação com o saldo, e não o tamanho da operação.</p>

    <table>
      <thead>
        <tr><th>Tipo</th><th>Frequência</th><th>Uso na loja pequena</th></tr>
      </thead>
      <tbody>
        <tr><td>Rotativo/preventivo</td><td>Semanal ou quinzenal</td><td>Contar 20 a 30 itens que giram mais</td></tr>
        <tr><td>De manutenção</td><td>Mensal</td><td>Corrigir divergências e rever causas</td></tr>
        <tr><td>Geral</td><td>1 a 2 vezes por ano</td><td>Contar tudo, com o sistema parado</td></tr>
      </tbody>
    </table>

    <h2>Preparação: o que fazer antes do dia da contagem</h2>

    <p>O guia da ABRAS insiste em planejamento: definir data, comunicar a equipe, preparar o espaço e identificar com etiquetas os locais onde será feita a contagem, para que nenhum item fique de fora. Adaptado para uma loja de bairro, fica assim.</p>

    <ul class="checklist">
      <li>Defina a data com 7 a 10 dias de antecedência e avise equipe e fornecedores.</li>
      <li>Arrume prateleiras e depósito: um produto, um lugar; caixas abertas e itens soltos juntos.</li>
      <li>Divida a loja em zonas (A, B, C...) e cole uma etiqueta em cada.</li>
      <li>Imprima uma folha de contagem por zona, com código, descrição e coluna para 1ª e 2ª contagem.</li>
      <li>Separe devoluções, avarias e produtos de terceiros em área própria.</li>
      <li>Exporte o saldo do sistema na véspera e anote o último movimento lançado (o "corte").</li>
      <li>Pare entradas e saídas do sistema durante a contagem, ou anote à mão o que se mover.</li>
    </ul>

    <p>Se você tem funcionário novo na equipe, o roteiro da primeira semana em <a href="/artigos/treinar-funcionario-novo-com-ia-roteiro-da-primeira-semana-no-pequeno-negocio">treinar funcionário novo com IA</a> inclui um bom momento para ensinar a contar. E quem contrata reforço de Natal pode combinar a escala com o texto sobre <a href="/artigos/trabalhador-temporario-no-natal-contrato-prazo-e-escala-com-ia-no-pequeno-comercio">trabalhador temporário no Natal</a>.</p>

    <h2>Contagem e recontagem</h2>

    <p>A primeira contagem cobre todos os itens. A ABRAS descreve a recontagem como etapa de auditoria, com meta de 100% da área do depósito e de 10% a 25% da área de vendas, e diz que ela deve ser feita por outro inventariante ou pelo supervisor, e não por quem contou primeiro. Em uma loja pequena, isso significa que o dono ou outro funcionário refaz a contagem das zonas, sem olhar o número anotado.</p>

    <p>Regras simples evitam erros. Conte em voz alta ou em dupla. Anote a unidade (peça, caixa, pacote) e o fator de conversão quando houver. Marque a zona como concluída para não contar duas vezes. Compare as duas contagens antes de ir ao saldo do sistema: onde elas diferem, conte de novo uma terceira vez. Só depois compare com o saldo.</p>

    <h3>Exemplo com números (ilustrativo)</h3>

    <p>Uma loja de materiais de papelaria tem 420 códigos e valor de estoque de cerca de R$ 38.000 no sistema. Na contagem geral, 31 códigos divergem do saldo. Após a recontagem, 12 dessas divergências eram erro de contagem e 19 eram diferenças reais.</p>

    <table>
      <thead>
        <tr><th>Item</th><th>Sistema</th><th>Contagem</th><th>Diferença</th><th>Causa provável</th></tr>
      </thead>
      <tbody>
        <tr><td>Caderno 10 matérias</td><td>48</td><td>44</td><td>-4</td><td>Venda sem baixa (código antigo)</td></tr>
        <tr><td>Caneta azul (caixa)</td><td>20</td><td>22</td><td>+2</td><td>Entrada lançada em unidade</td></tr>
        <tr><td>Cola bastão</td><td>60</td><td>60</td><td>0</td><td>Ok</td></tr>
        <tr><td>Estojo escolar</td><td>15</td><td>11</td><td>-4</td><td>Avaria não registrada</td></tr>
      </tbody>
    </table>

    <h2>Como tratar as divergências</h2>

    <p>Divergência é o nome para qualquer diferença entre contagem e saldo. O caminho sensato é classificar a causa antes de ajustar. As causas mais comuns em loja pequena são erro de lançamento de entrada, venda sem baixa, código duplicado, troca ou devolução sem registro, avaria, furto e erro de unidade.</p>

    <p>Defina uma tolerância. Por exemplo, diferenças de até 1 unidade em itens baratos entram direto como ajuste, e diferenças maiores ou em itens caros exigem investigação. A tolerância é uma decisão sua, e não uma regra da ABRAS. Para cada divergência acima dela, olhe notas de entrada, vendas dos últimos 30 dias e o caixa do período, e o texto sobre <a href="/artigos/fechamento-de-caixa-diario-na-loja-conferir-pix-cartao-e-dinheiro-com-planilha-e-ia">fechamento de caixa diário</a> ajuda a cruzar venda e dinheiro.</p>

    <h2>Onde a IA ajuda (e onde não)</h2>

    <p>Use a IA depois da contagem, com os números em planilha e sem dados pessoais. Ela ajuda a montar fórmulas, a achar padrões e a rascunhar o relatório. Não conta o estoque, não define o ajuste e não substitui a recontagem. O guia de <a href="/artigos/ia-para-planilhas-automatizar-relatorios-excel-sheets">IA para planilhas</a> e o de <a href="/artigos/tabela-dinamica-no-google-planilhas-passo-a-passo-e-formato-compacto-com-ia">tabela dinâmica no Google Planilhas</a> mostram como resumir por zona ou fornecedor.</p>

    <pre><code>Tenho uma planilha de inventário com colunas: código, descrição, saldo do sistema, 1ª contagem, 2ª contagem, valor unitário. Escreva as fórmulas para: diferença em unidades, diferença em reais, e uma coluna que marque "Recontar" quando as duas contagens forem diferentes.</code></pre>

    <pre><code>Segue a lista de divergências do inventário (código, diferença, valor). Agrupe por provável causa (lançamento, avaria, venda sem baixa, furto, unidade) e sugira o que verificar primeiro. Diga quando faltar informação em vez de supor.</code></pre>

    <p>Defina na equipe o que pode entrar em chats de IA, como sugere a <a href="/artigos/politica-de-uso-de-ia-na-pequena-empresa-regras-simples-para-a-equipe">política de uso de IA na pequena empresa</a>. Códigos e quantidades costumam ser seguros; dados de clientes e fornecedores, não.</p>

    <h2>Erros comuns</h2>

    <p>O primeiro é contar com o sistema funcionando, porque as vendas durante a contagem desfazem a comparação. O segundo é deixar quem contou conferir a própria contagem. O terceiro é ajustar o saldo sem investigar, o que esconde o problema. O quarto é esquecer o estoque de produtos com validade, que pede um controle à parte, como em <a href="/artigos/controle-de-validade-e-perdas-no-comercio-de-alimentos-pvps-planilha-e-ia">controle de validade e perdas</a>.</p>

    <p>Outro erro é contar uma vez por ano e nunca mais olhar. Alertas simples ajudam entre contagens, como no modelo de <a href="/artigos/alerta-de-estoque-baixo-como-servico-planilha-aviso-por-e-mail-e-limites-do-apps-script">alerta de estoque baixo</a>, e uma boa negociação com fornecedores depende de saldo confiável, tema de <a href="/artigos/como-usar-ia-para-negociar-melhor-com-fornecedores">negociar melhor com fornecedores</a>.</p>

    <h2>Depois do inventário</h2>

    <p>Feche o inventário com um relatório curto de uma página: valor contado, valor do sistema, diferença total em reais e em percentual, as cinco maiores divergências, as causas encontradas e as ações. Ajuste o sistema com os saldos validados, guarde as folhas de contagem e registre o que mudar na rotina, como baixa imediata de avaria e conferência de unidade na entrada.</p>

    <p>Se o resultado trouxer prejuízo de perdas, converse com a equipe sem caça às bruxas: o objetivo é achar o processo que falha. Para ver como a IA entra em outras rotinas da loja, passe pela <a href="/categoria/negocios">categoria de negócios</a> e comece o próximo ciclo com uma contagem rotativa de poucos itens por semana.</p>
  `,
  faq: [
    {
      question: "O que é inventário de estoque?",
      answer:
        "É a contagem física dos itens em estoque, comparada com o saldo do sistema ou da planilha. O resultado mostra o estoque real, revela erros de registro e perdas e serve de base para corrigir os saldos e planejar compras.",
    },
    {
      question: "Quantas vezes por ano devo fazer inventário?",
      answer:
        "Depende do tamanho e do giro da loja. O guia da ABRAS descreve inventários preventivos (diários a quinzenais), de manutenção (mensais) e gerais. Para lojas pequenas, uma contagem geral por ano ou semestre com contagens rotativas semanais costuma ser viável.",
    },
    {
      question: "Por que fazer recontagem?",
      answer:
        "Porque a primeira contagem erra. A ABRAS recomenda que a recontagem seja feita por outro inventariante ou pelo supervisor, com meta de 100% do depósito e de 10% a 25% da área de vendas. Assim, você separa erro de contagem de diferença real.",
    },
    {
      question: "A IA pode fazer o inventário por mim?",
      answer:
        "Não. A contagem física é humana. A IA ajuda a montar fórmulas de planilha, agrupar divergências por causa provável e rascunhar o relatório, sempre com números que você conferiu e sem dados pessoais de clientes ou fornecedores.",
    },
    {
      question: "Posso vender durante o inventário?",
      answer:
        "O ideal é parar entradas e saídas no sistema durante a contagem, em um horário de pouco movimento ou com a loja fechada. Se precisar vender, anote à mão cada saída para ajustar a comparação depois, ou conte zona por zona.",
    },
  ],
};
