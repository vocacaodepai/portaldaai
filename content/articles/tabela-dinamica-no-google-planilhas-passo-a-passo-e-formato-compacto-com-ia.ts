import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "tabela-dinamica-no-google-planilhas-passo-a-passo-e-formato-compacto-com-ia",
  title: "Tabela dinâmica no Google Planilhas: passo a passo com IA",
  seoTitle: "Tabela dinâmica no Google Planilhas: passo a passo",
  excerpt:
    "Aprenda a criar tabela dinâmica no Google Planilhas do zero, somar vendas por vendedor e mês e usar o novo formato compacto do Google com ajuda de IA.",
  metaDescription:
    "Tabela dinâmica no Google Planilhas passo a passo: cabeçalhos, linhas, valores, filtros, totais e o novo formato compacto. Veja um exemplo de vendas e prompts de IA.",
  category: "iniciantes",
  articleSubcategory: "apps-e-tarefas",
  date: "2026-10-29",
  readTime: 7,
  imageQuery: "sales report table laptop coffee",
  seed: 888,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Tabela dinâmica é um resumo automático da sua planilha: você escolhe o que vai nas linhas, colunas e valores, e o Google Planilhas soma, conta ou tira a média sem fórmula.",
    "O caminho é selecionar os dados com cabeçalho, ir em Inserir, Tabela dinâmica e adicionar campos no painel lateral, e a tabela se atualiza quando os dados de origem mudam.",
    "Em outubro de 2026 o Google anunciou o formato compacto, que junta todos os campos de linha em uma coluna só e preserva o layout de tabelas importadas do Excel.",
  ],
  content: `
    <p>Tabela dinâmica no Google Planilhas é um resumo automático dos seus dados: você escolhe o que fica nas linhas, nas colunas e nos valores, e a planilha soma, conta ou calcula a média sem você escrever fórmula. Para criar, selecione os dados com cabeçalho, vá em Inserir, Tabela dinâmica e monte os campos no painel lateral.</p>

    <p>Quem controla vendas, gastos ou presença de alunos em uma planilha com centenas de linhas costuma perder tempo somando na mão. Este guia mostra o passo a passo, um exemplo de loja com números, os erros que mais travam iniciantes e a novidade que o Google anunciou em outubro de 2026, o formato compacto. As etapas seguem a ajuda oficial do Google, consultada em 29/10/2026.</p>

    <h2>O que é uma tabela dinâmica e quando usar</h2>

    <p>A tabela dinâmica lê uma tabela comprida e devolve uma pequena, agrupada do jeito que você pedir. Se a sua planilha tem uma linha por venda, com data, vendedor, produto e valor, a dinâmica responde em segundos "quanto cada vendedor vendeu em cada mês" sem que você mexa nos dados originais.</p>

    <p>Ela vale a pena quando você repete a mesma pergunta sobre dados que crescem. Para uma conta de duas linhas, uma soma simples resolve. Se você ainda está pegando o jeito das fórmulas, o guia de <a href="/artigos/aprender-planilhas-do-zero-com-ia-formulas-erros-e-exercicios">aprender planilhas do zero com IA</a> é um bom ponto de partida antes deste.</p>

    <h2>Antes de começar: arrume a base de dados</h2>

    <p>A ajuda oficial do Google é direta: cada coluna precisa ter um cabeçalho. Além disso, a dinâmica trabalha melhor com uma base arrumada: uma linha por registro, sem linhas em branco no meio e sem células mescladas. Datas devem estar como data, e valores como número, não como texto com "R$" digitado à mão.</p>

    <ul class="checklist">
      <li>Primeira linha com nomes curtos de coluna: Data, Vendedor, Produto, Valor.</li>
      <li>Nenhuma linha de total no meio dos dados (a dinâmica calcula os totais).</li>
      <li>Nomes padronizados: "Ana" e "ana " viram dois itens diferentes na tabela.</li>
      <li>Uma cópia da planilha antes de limpar, caso algo saia errado.</li>
    </ul>

    <p>Se a base está bagunçada, vale limpar antes. O texto sobre <a href="/artigos/limpeza-e-padronizacao-de-planilhas-como-servico-pacote-preco-e-lgpd-com-ia">limpeza e padronização de planilhas com IA</a> mostra o processo, e o de <a href="/artigos/ia-para-planilhas-automatizar-relatorios-excel-sheets">IA para planilhas</a> traz outras automações.</p>

    <h2>Passo a passo para criar a tabela dinâmica</h2>

    <p>Segundo a <a href="https://support.google.com/docs/answer/1272900" target="_blank" rel="noopener noreferrer">página de ajuda do Google sobre tabelas dinâmicas</a>, o caminho no computador é este:</p>

    <ol>
      <li>Abra a planilha no Google Planilhas.</li>
      <li>Selecione as células com os dados, incluindo a linha de cabeçalho.</li>
      <li>Clique em Inserir e depois em Tabela dinâmica (o Google pede para escolher onde criar a tabela, em uma nova aba ou na atual).</li>
      <li>No painel lateral, ao lado de Linhas ou Colunas, clique em Adicionar e escolha um campo.</li>
      <li>Ao lado de Valores, clique em Adicionar e escolha o que será resumido, como a soma do valor vendido.</li>
      <li>Para mudar a forma de listar, ordenar, resumir ou filtrar, use a seta ao lado do campo.</li>
    </ol>

    <p>O Google também pode sugerir tabelas prontas: se aparecerem opções em "Sugeridas", basta clicar em uma. Tabelas sugeridas de alta confiança entram automaticamente quando você cria a dinâmica, e dá para desligar isso em Ferramentas, Controles de sugestão. A tabela se atualiza sempre que as células de origem mudam.</p>

    <h2>Exemplo: loja de roupas com vendas por vendedor e mês</h2>

    <p>Imagine uma loja pequena com 420 vendas registradas em três meses, uma linha por venda. Você quer saber quanto cada vendedor faturou por mês. Coloque Vendedor em Linhas, Mês em Colunas e a soma de Valor em Valores. A tabela pode ficar assim (números ilustrativos):</p>

    <table>
      <thead>
        <tr><th>Vendedor</th><th>Agosto</th><th>Setembro</th><th>Outubro</th><th>Total</th></tr>
      </thead>
      <tbody>
        <tr><td>Ana</td><td>R$ 6.200</td><td>R$ 7.100</td><td>R$ 6.800</td><td>R$ 20.100</td></tr>
        <tr><td>Bruno</td><td>R$ 4.900</td><td>R$ 5.300</td><td>R$ 7.400</td><td>R$ 17.600</td></tr>
        <tr><td>Carla</td><td>R$ 5.600</td><td>R$ 4.800</td><td>R$ 5.100</td><td>R$ 15.500</td></tr>
      </tbody>
    </table>

    <p>Em um minuto você enxerga que Bruno subiu em outubro e Carla ficou estável. Para a mesma base, troque Vendedor por Produto e descubra o que mais vende. Quem acompanha poucos números por semana pode ligar isso ao guia de <a href="/artigos/kpis-simples-cinco-numeros-para-acompanhar-toda-semana-no-seu-negocio-com-ia">KPIs simples para o negócio</a>, e quem precisa saber o lucro, ao de <a href="/artigos/dre-simples-com-ia-ler-o-lucro-do-pequeno-negocio-mes-a-mes">DRE simples com IA</a>.</p>

    <h2>Filtros, totais, ordem e cálculos</h2>

    <p>A página de ajuda sobre <a href="https://support.google.com/docs/answer/7572895" target="_blank" rel="noopener noreferrer">como personalizar tabelas dinâmicas</a> lista as opções mais úteis para quem está começando:</p>

    <ul>
      <li><strong>Ordenar:</strong> em Linhas ou Colunas, use a seta em "Ordem" ou "Classificar por" para colocar o maior valor no topo.</li>
      <li><strong>Totais:</strong> marque "Mostrar totais" na linha ou na coluna.</li>
      <li><strong>Filtros:</strong> ao lado de Filtros, clique em Adicionar e escolha "Filtrar por condição" ou "Filtrar por valores".</li>
      <li><strong>Mostrar como:</strong> em Valores, o campo "Mostrar como" permite ver o número em outra forma, como porcentagem do total.</li>
      <li><strong>Agrupar:</strong> as opções de grupo juntam itens ou datas, por exemplo transformando dias em meses.</li>
    </ul>

    <p>Para uma conta que não existe na base, como margem, a ajuda do Google descreve o campo calculado: em Valores, clique em Adicionar, escolha Campo calculado, dê um nome, digite a fórmula e defina "Resumir por" como Personalizado. E um truque de conferência: dar duplo clique em qualquer célula da tabela abre uma nova aba com as linhas de origem daquele número.</p>

    <h2>O formato compacto: o que o Google mudou em outubro de 2026</h2>

    <p>Quando você coloca mais de um campo em Linhas, como Região e depois Vendedor, a tabela tende a ficar larga. O Google anunciou, em 22 de outubro de 2026, duas opções de layout, segundo a <a href="https://workspaceupdates.googleblog.com/2026/10/apply-compact-form-layout-for-pivot-tables-in-Google-Sheets.html" target="_blank" rel="noopener noreferrer">nota do Workspace Updates</a>:</p>

    <ul>
      <li><strong>Formato estruturado (outline):</strong> cada campo de linha em sua própria coluna.</li>
      <li><strong>Formato compacto:</strong> todos os campos de linha aninhados em uma única coluna, com recuo e botões de expandir e recolher.</li>
    </ul>

    <p>A mudança também vale para arquivos do Excel: tabelas dinâmicas em formato compacto passam a manter o layout ao serem importadas para o Planilhas, em vez de virarem estruturadas, e o layout é preservado se o arquivo voltar para o Excel. O recurso vale para todos os clientes do Workspace e para contas pessoais, sem controle do administrador. A liberação para domínios de lançamento rápido começou em 22/10/2026, com até 15 dias para aparecer, e para domínios de lançamento programado começa em 6/11/2026. O Google diz que a escolha do layout fica no editor da tabela dinâmica, mas não detalha o nome do botão, então procure a opção de layout no painel lateral.</p>

    <h2>Como a IA ajuda sem tomar o lugar da conferência</h2>

    <p>A IA é boa para sugerir perguntas e explicar o que a tabela mostra. Para proteger dados de clientes, cole apenas os nomes das colunas e duas ou três linhas fictícias, nunca a planilha inteira. O texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a> explica o motivo.</p>

    <pre><code>Tenho uma planilha de vendas com as colunas: Data, Vendedor, Produto, Forma de pagamento, Valor. Sugira 5 perguntas úteis que uma tabela dinâmica responde para o dono de uma loja de roupas e diga, para cada uma, o que colocar em Linhas, Colunas, Valores e Filtros.</code></pre>

    <pre><code>Esta é minha tabela dinâmica de vendas por vendedor e mês (valores colados abaixo, sem nomes de clientes). Diga em 5 linhas o que chama atenção e quais números eu devo conferir na base antes de tomar decisão.</code></pre>

    <p>O Gemini dentro do próprio Planilhas também ajuda em tarefas ligadas à planilha. O guia do <a href="/artigos/gemini-no-google-planilhas-no-iphone-e-android-como-usar-e-limites">Gemini no Planilhas no iPhone e no Android</a> e o do <a href="/artigos/fill-with-gemini-no-planilhas-do-google-fontes-por-celula-e-limite-de-3-mil-celulas">Fill with Gemini</a> mostram o que ele faz e quais limites existem.</p>

    <h2>Erros comuns e como evitar</h2>

    <ul>
      <li><strong>Cabeçalho faltando:</strong> sem nome de coluna, o campo não aparece. Corrija a primeira linha e refaça a seleção.</li>
      <li><strong>Números como texto:</strong> a tabela conta em vez de somar. Converta a coluna para número.</li>
      <li><strong>Intervalo fixo demais:</strong> se você selecionou até a linha 200 e a base cresceu, use Selecionar intervalo de dados no editor para ampliar.</li>
      <li><strong>Nomes escritos de formas diferentes:</strong> padronize antes, ou a tabela mostrará "Camiseta" e "camiseta" separados.</li>
      <li><strong>Confiar sem conferir:</strong> use o duplo clique para ver as linhas de origem de um total que parecer estranho.</li>
    </ul>

    <p>Quando a pergunta ficar maior que a planilha, existem o <a href="/artigos/grafico-de-caixa-no-google-planilhas-box-plot-quartis-e-outliers">gráfico de caixa no Planilhas</a> para ver dispersão e a <a href="/artigos/planilha-conectada-ao-bigquery-com-gemini-perguntas-em-linguagem-natural-e-paineis">planilha conectada ao BigQuery</a> para bases enormes. E quem gosta de planilha pode até transformar a habilidade em renda com o guia de <a href="/artigos/como-ganhar-dinheiro-vendendo-planilhas-automatizadas-com-ia">planilhas automatizadas</a>.</p>

    <h2>Próximo passo</h2>

    <p>Pegue uma planilha sua com pelo menos 50 linhas, crie uma dinâmica com uma pergunta só e confira um total pelo duplo clique. Quando isso ficar fácil, acrescente um segundo campo em Linhas e teste o formato compacto assim que ele chegar à sua conta. Para continuar, veja o guia de <a href="/artigos/fluxo-de-caixa-com-ia-guia-pequenos-negocios">fluxo de caixa com IA</a>, que usa o mesmo raciocínio de resumir dados para decidir.</p>
  `,
  faq: [
    {
      question: "Como criar uma tabela dinâmica no Google Planilhas?",
      answer:
        "Selecione os dados com cabeçalho, clique em Inserir e depois em Tabela dinâmica. No painel lateral, adicione campos em Linhas ou Colunas e escolha o que resumir em Valores. A tabela se atualiza quando as células de origem mudam.",
    },
    {
      question: "Por que minha tabela dinâmica não soma os valores?",
      answer:
        "O motivo mais comum é a coluna estar formatada como texto, e aí a tabela conta os itens em vez de somar. Converta a coluna para número, remova símbolos digitados à mão e confira se a opção em Valores está como Soma.",
    },
    {
      question: "O que é o formato compacto da tabela dinâmica?",
      answer:
        "É um layout em que todos os campos de linha ficam aninhados em uma única coluna, com recuo e botões de expandir e recolher. O Google anunciou em 22/10/2026, junto com o formato estruturado, que coloca cada campo em sua coluna.",
    },
    {
      question: "Tabela dinâmica do Excel funciona no Google Planilhas?",
      answer:
        "Sim, o Planilhas importa tabelas dinâmicas de arquivos do Excel. Segundo o Google, as que usam o formato compacto agora mantêm o layout na importação, em vez de virar formato estruturado, e o layout também é preservado se o arquivo voltar para o Excel.",
    },
    {
      question: "Dá para usar IA para montar a tabela dinâmica?",
      answer:
        "Dá para usar IA para sugerir perguntas e indicar o que colocar em linhas, colunas e valores, e para explicar o resultado. Evite colar dados de clientes: envie só os nomes das colunas e exemplos fictícios, e sempre confira os totais na base.",
    },
  ],
};
