import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "como-usar-ia-para-gerenciar-estoque-pequeno-comercio",
  title: "IA para gerenciar estoque no pequeno comércio: guia prático",
  seoTitle: "IA para gerenciar estoque no pequeno comércio",
  excerpt:
    "IA para gerenciar estoque no pequeno comércio: organize a planilha, preveja a reposição, encontre produto parado e evite perda, com prompts prontos.",
  metaDescription:
    "Use IA para gerenciar estoque no pequeno comércio: planilha organizada, previsão de reposição, curva ABC e alerta de produto parado, com prompts prontos.",
  category: "negocios",
  articleSubcategory: "gestao-e-operacao",
  date: "2026-09-16",
  updated: "2026-09-27",
  readTime: 9,
  imageQuery: "warehouse inventory boxes stock",
  seed: 37,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Estoque parado trava dinheiro e produto em falta perde venda; a IA ajuda a equilibrar os dois a partir da planilha que você já tem.",
    "O primeiro passo é organizar os dados (produto, entrada, saída, data) e só depois pedir previsão, curva ABC e alerta de reposição.",
    "Dá para começar com R$ 0 usando ChatGPT, Claude ou Gemini no plano gratuito e uma planilha no Google Sheets ou Excel.",
  ],
  content: `
    <p>Usar IA para gerenciar estoque no pequeno comércio é transformar a planilha (ou o caderno) que você já tem em três respostas: o que comprar, quanto comprar e o que parar de comprar. Não precisa de sistema caro nem de consultor. Precisa de dados organizados, um assistente de IA no plano gratuito e uma rotina semanal de 30 minutos.</p>

    <p>Este guia mostra o caminho na ordem certa: arrumar os dados, pedir a análise, montar o alerta de reposição e revisar o pedido de compra. Traz prompts prontos para colar no ChatGPT, Claude ou Gemini, um exemplo de loja brasileira com as contas na mesa e os erros que fazem o controle de estoque morrer na segunda semana.</p>

    <h2>O que a IA faz pelo estoque de uma loja pequena?</h2>

    <p>O <a href="https://blog.rn.sebrae.com.br/guia-mei/" rel="noopener noreferrer">guia do MEI do Sebrae RN</a> resume o problema em duas frases: excesso de mercadoria parada consome capital e falta de produto leva a venda perdida. Todo dono de loja sabe disso. O que falta é tempo para olhar os números toda semana, e é exatamente aí que a IA entra.</p>

    <p>Um assistente de IA lê a sua planilha de entradas e saídas e responde perguntas em português: quais produtos giram rápido, quais estão parados há 60 dias, quanto pedir do item que mais vende antes do fim de semana. Ele cruza sazonalidade, histórico e tendência recente em minutos, uma conta que na mão leva a tarde inteira. O guia de <a href="/artigos/ia-para-planilhas-automatizar-relatorios-excel-sheets">IA para planilhas</a> mostra a mecânica básica.</p>

    <p>O que a IA não faz: contar o estoque físico por você, saber que o fornecedor atrasou ou adivinhar a promoção do concorrente. Ela trabalha com o que você registra. Dado ruim entra, decisão ruim sai. Por isso o primeiro passo não é o prompt, é a planilha.</p>

    <h2>Passo 1: organize os dados antes de qualquer prompt</h2>

    <p>A IA precisa de uma tabela simples e consistente. Quatro colunas resolvem o começo: produto, data, tipo (entrada ou saída) e quantidade. Se você tem custo e preço de venda, adicione mais duas colunas. Se hoje os dados estão em cupons, caderno e mensagens de WhatsApp, use a própria IA para digitar: tire foto do caderno e peça para ela transcrever em tabela.</p>

    <p>No Google Sheets, o Gemini cria tabelas, fórmulas e análises a partir de um pedido em texto, segundo a <a href="https://support.google.com/docs/answer/14356410" rel="noopener noreferrer">documentação do Google</a>; o recurso exige um plano Google Workspace ou Google AI elegível. No Excel, o <a href="https://support.microsoft.com/en-us/office/get-started-with-copilot-in-excel-d7110502-0334-4b4f-a175-a73abdfc118a" rel="noopener noreferrer">Copilot</a> faz o mesmo: aplica fórmulas, resume dados e aponta tendências e valores fora do padrão. Nos dois casos, quem não tem o plano pago pode exportar a planilha em CSV e colar no ChatGPT, Claude ou Gemini gratuitos.</p>

    <pre><code>Segue a foto (ou o texto) do meu controle de estoque.
Transforme em uma tabela com as colunas: produto, data (dd/mm/aaaa), tipo (entrada ou saída), quantidade.
Padronize os nomes dos produtos (ex.: "coca 2l" e "Coca-Cola 2L" viram o mesmo item).
Se algum registro estiver ilegível ou incompleto, liste em separado em vez de inventar.</code></pre>

    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Padronize o nome dos produtos uma vez e nunca mais mude. Metade dos erros de análise vem de "camiseta P branca" e "Camiseta branca P" contarem como dois itens.</p></div>

    <h2>Passo 2: peça a análise que importa (curva ABC e giro)</h2>

    <p>Com a tabela pronta, a primeira análise que vale a pena é a curva ABC: separar os produtos que respondem pela maior parte do faturamento (A) dos que vendem pouco (C). Isso diz onde a sua atenção e o seu dinheiro devem ficar. A segunda é o giro: quantos dias, em média, cada produto leva para sair. Junte as duas e você enxerga o que está travando caixa.</p>

    <pre><code>Segue minha planilha de vendas e estoque dos últimos 90 dias.
Faça, em português simples e mostrando as contas:
1) Curva ABC por faturamento: liste os produtos A (até 80% do total), B (próximos 15%) e C (5% restantes).
2) Giro: para cada produto, quantos dias em média leva para vender o estoque atual.
3) Produtos sem nenhuma saída nos últimos 60 dias e quanto dinheiro está parado neles (quantidade vezes custo).
4) Três decisões que você tomaria hoje com base nisso.

[cole os dados]</code></pre>

    <p>Peça sempre para a IA mostrar as contas. Se ela disser que um produto está parado, confira na planilha antes de liquidar. A IA erra em silêncio, e o guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">prompt engineering</a> ensina a travar o formato da resposta para você conferir rápido. Essa mesma lógica de análise serve para <a href="/artigos/como-precificar-produtos-e-servicos-com-ia">precificar produtos com IA</a> e para descobrir o que o concorrente está vendendo mais, tema do guia sobre <a href="/artigos/como-usar-ia-para-monitorar-concorrencia-tomar-decisoes-melhores">monitorar a concorrência com IA</a>.</p>

    <h2>Passo 3: monte o alerta de reposição e o pedido de compra</h2>

    <p>Alerta de reposição é uma regra simples: quando o estoque de um produto cai abaixo de um número, você compra. A IA ajuda a calcular esse número por produto, considerando quanto ele vende por dia e quanto tempo o fornecedor leva para entregar. Depois, a planilha faz o alerta sozinha com uma formatação condicional que a IA também escreve para você.</p>

    <pre><code>Com base na planilha, calcule para cada produto:
1) Venda média por dia nos últimos 30 dias.
2) Estoque mínimo = venda média por dia x prazo de entrega do fornecedor (use [X] dias) + margem de 3 dias.
3) Sugestão de pedido para os próximos 15 dias, descontando o que já tenho.
Depois me dê a fórmula do Google Sheets para pintar de vermelho a linha em que o estoque atual estiver abaixo do mínimo.</code></pre>

    <p>Quem quiser dar um passo além pode automatizar o aviso: uma automação no Zapier ou no Make lê a planilha toda manhã e manda mensagem no WhatsApp com os itens abaixo do mínimo. O guia <a href="/artigos/notion-zapier-e-ia-automatize-seu-negocio-sem-programar">Notion, Zapier e IA</a> explica como montar sem programar, e o artigo sobre <a href="/artigos/automacao-com-ia-economize-horas-de-trabalho">automação com IA</a> traz os preços dos conectores verificados.</p>

    <h3>Rotina semanal de 30 minutos</h3>

    <ul class="checklist">
      <li>Segunda: atualizar entradas e saídas da semana anterior na planilha.</li>
      <li>Segunda: rodar o prompt de reposição e separar os itens abaixo do mínimo.</li>
      <li>Terça: fechar o pedido com o fornecedor com a sugestão da IA revisada por você.</li>
      <li>Toda primeira segunda do mês: rodar a curva ABC e a lista de parados.</li>
      <li>Todo trimestre: contar o estoque físico e corrigir a planilha.</li>
    </ul>

    <h2>Exemplo brasileiro: loja de roupas com 180 itens em Campinas</h2>

    <p>Cenário ilustrativo, montado para mostrar as contas (não é um caso que acompanhamos). Juliana tem uma loja de roupa feminina em Campinas, é MEI e fatura perto do teto da categoria, que o <a href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/quero-ser-mei/o-que-voce-precisa-saber-antes-de-se-tornar-um-mei" rel="noopener noreferrer">Portal do Empreendedor</a> fixa em R$ 81 mil por ano. Ela trabalha com 180 itens (modelo, cor e tamanho) e comprava repetindo o pedido anterior.</p>

    <p>Ela exportou 90 dias de vendas do Sheets e rodou os prompts deste guia no Claude gratuito. A curva ABC mostrou que 28 itens respondiam por 70% do faturamento e que 41 itens não tinham nenhuma venda em 60 dias, somando R$ 6.400 a custo parados na arara. O giro revelou que o tamanho M de três modelos esgotava em 9 dias enquanto o GG durava 70.</p>

    <p>Decisões: liquidação dos 41 parados com 30% de desconto para recuperar caixa, pedido do próximo mês com o dobro de M e metade de GG nos três modelos campeões, e estoque mínimo calculado para os 28 itens A. Custo da ferramenta: R$ 0. Tempo: uma tarde para organizar a planilha e 30 minutos por semana depois. Esse dinheiro liberado costuma render mais em ação de venda, como mostra o guia sobre <a href="/artigos/como-usar-ia-para-vender-mais-no-seu-negocio-local">vender mais no negócio local com IA</a>.</p>

    <h2>Ferramentas e custos: o que usar em cada etapa</h2>

    <p>Não existe uma ferramenta única de IA para estoque de loja pequena que valha o preço antes de você ter a planilha organizada. A tabela abaixo mostra o que resolve cada etapa e quanto custa começar. Preços de assinatura dos assistentes mudam com o câmbio; consulte a página oficial antes de assinar.</p>

    <table>
      <thead>
        <tr><th>Etapa</th><th>Ferramenta</th><th>Custo para começar</th></tr>
      </thead>
      <tbody>
        <tr><td>Digitar e padronizar registros</td><td>ChatGPT, Claude ou Gemini (foto ou texto)</td><td>R$ 0 no plano gratuito</td></tr>
        <tr><td>Guardar os dados</td><td>Google Sheets ou Excel</td><td>Google Sheets gratuito com conta Google</td></tr>
        <tr><td>Análise dentro da planilha</td><td>Gemini no Sheets ou Copilot no Excel</td><td>Exige plano pago; consulte a página oficial</td></tr>
        <tr><td>Curva ABC, giro e reposição</td><td>Qualquer assistente com o CSV colado</td><td>R$ 0 no plano gratuito</td></tr>
        <tr><td>Alerta automático no WhatsApp</td><td>Zapier ou Make</td><td>Plano gratuito dos conectores</td></tr>
      </tbody>
    </table>

    <p>Quando o volume crescer (mais de mil itens ou mais de uma loja), um sistema de gestão com IA embutida passa a compensar. Antes de assinar qualquer um, passe pelo <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher ferramenta de IA com segurança</a>, porque a planilha de estoque revela o faturamento do seu negócio. E se você vende online, o artigo sobre <a href="/artigos/como-montar-uma-loja-virtual-em-um-fim-de-semana-usando-ia">montar uma loja virtual com IA</a> mostra como ligar o estoque à vitrine.</p>

    <h2>Erros comuns e quando não confiar na IA</h2>

    <p>O erro número um é pedir previsão com 15 dias de dados. Previsão precisa de pelo menos um ciclo completo (um trimestre, de preferência um ano, para pegar Dia das Mães, Black Friday e Natal). Com menos que isso, use a IA só para organizar e listar parados; a previsão vem depois.</p>

    <ul>
      <li><strong>Não liquidar sem conferir.</strong> A IA pode marcar como parado um item que está reservado ou na vitrine. Olhe a arara antes de baixar o preço.</li>
      <li><strong>Não esquecer o prazo do fornecedor.</strong> Estoque mínimo sem prazo de entrega é chute. Se o fornecedor atrasa, aumente a margem de dias.</li>
      <li><strong>Não colar dados de cliente junto com o estoque.</strong> Nome, CPF e telefone não precisam entrar no prompt. O artigo sobre <a href="/artigos/como-usar-ia-para-reduzir-custos-operacionais-pequenos-negocios">reduzir custos operacionais com IA</a> mostra como separar o que a IA vê.</li>
      <li><strong>Não tratar sugestão como ordem.</strong> A IA sugere o pedido; quem conhece o cliente do bairro é você.</li>
    </ul>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Previsão de demanda para produto perecível (padaria, hortifrúti, floricultura) exige dados diários e revisão toda semana. Se você só atualiza a planilha uma vez por mês, comece pelo controle de parados e deixe a previsão para quando a rotina estiver firme.</p></div>

    <h2>Estoque organizado é o primeiro passo de tudo</h2>

    <p>Quem sabe o que vende e o que encalha decide melhor a compra, a promoção e até o programa de fidelidade, tema do guia sobre <a href="/artigos/como-usar-ia-para-fidelizar-clientes-programa-de-recompensas">fidelizar clientes com IA</a>. E a mesma planilha alimenta a <a href="/artigos/como-fazer-previsao-de-vendas-planejamento-financeiro-com-ia">previsão de vendas e o planejamento financeiro</a> do próximo semestre.</p>

    <p>Comece nesta semana: organize 90 dias de dados, rode o prompt da curva ABC e olhe a lista de parados. Só essa lista já costuma pagar a tarde investida. Os outros guias para aplicar IA na sua loja estão na categoria <a href="/categoria/negocios">Negócios com IA</a>.</p>
  `,
  faq: [
    {
      question: "Dá para usar IA para controlar estoque de graça?",
      answer:
        "Dá. ChatGPT, Claude e Gemini têm plano gratuito que aceita uma planilha exportada em CSV, e o Google Sheets é gratuito com conta Google. Com isso você organiza os registros, roda curva ABC, calcula giro e estoque mínimo sem pagar nada. O plano pago só passa a fazer sentido quando você quer a IA dentro da planilha ou quando o volume de itens cresce muito.",
    },
    {
      question: "Quantos dados preciso para a IA prever a reposição?",
      answer:
        "Para calcular estoque mínimo e sugerir o pedido da quinzena, 30 a 90 dias de entradas e saídas bastam. Para previsão de demanda que considere datas sazonais, como Dia das Mães e Natal, o ideal é ter pelo menos um ano. Com poucos dados, use a IA para organizar a planilha e listar produtos parados, e deixe a previsão para depois.",
    },
    {
      question: "O Gemini no Google Sheets funciona para estoque?",
      answer:
        "Funciona. Segundo a documentação do Google, o Gemini no Planilhas cria tabelas, fórmulas, formatação condicional e análises a partir de um pedido em texto, o que cobre curva ABC e alerta de reposição. O recurso exige um plano Google Workspace ou Google AI elegível; quem não tem pode exportar a planilha e colar no Gemini gratuito pelo navegador.",
    },
    {
      question: "Qual a diferença entre curva ABC e giro de estoque?",
      answer:
        "Curva ABC separa os produtos pelo peso no faturamento: os itens A respondem pela maior parte da receita e merecem mais atenção e capital. Giro mede quantos dias, em média, um produto leva para sair do estoque. Um item pode ser A e girar devagar (caro e lento) ou C e girar rápido (barato e frequente). As duas análises juntas mostram onde o dinheiro está travado.",
    },
    {
      question: "IA para estoque serve para MEI e loja de bairro?",
      answer:
        "Serve, e é justamente onde rende mais, porque o dono faz tudo e não tem tempo de analisar planilha. Uma loja com 100 a 500 itens consegue organizar os dados em uma tarde e manter uma rotina de 30 minutos por semana. Quem fatura perto do teto do MEI, de R$ 81 mil por ano segundo o Portal do Empreendedor, tem ainda mais motivo para não deixar capital parado na prateleira.",
    },
  ],
};
