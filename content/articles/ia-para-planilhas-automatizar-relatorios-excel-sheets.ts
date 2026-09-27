import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "ia-para-planilhas-automatizar-relatorios-excel-sheets",
  title: "IA para planilhas: como automatizar relatórios no Excel e Sheets",
  seoTitle: "IA para planilhas: relatórios automáticos no Excel e Sheets",
  excerpt:
    "IA para planilhas: aprenda a criar fórmulas, limpar dados e gerar relatórios no Excel e no Google Sheets com Copilot, Gemini e ChatGPT, com prompts prontos.",
  metaDescription:
    "IA para planilhas: veja como automatizar relatórios no Excel e no Google Sheets com Copilot, Gemini e ChatGPT, o que cada plano libera e prompts para copiar.",
  category: "ferramentas",
  date: "2026-09-13",
  updated: "2026-09-27",
  readTime: 9,
  imageQuery: "spreadsheet data analysis screen",
  seed: 22,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "IA para planilhas resolve quatro tarefas que tomam tempo: escrever fórmulas em português, limpar dados, resumir a tabela em texto e gerar gráficos por comando.",
    "Copilot no Excel é um complemento pago ao Microsoft 365 e o Gemini no Sheets pede plano Workspace ou Google AI elegível; para relatório simples, um chat gratuito com upload do arquivo já dá conta.",
    "O ganho vem da repetição: arrume o cabeçalho, monte uma aba de resumo, salve o prompt e rode o mesmo fluxo toda semana, conferindo os três números que importam.",
  ],
  sources: [
    {
      label: "Microsoft: primeiros passos com o Copilot no Excel",
      url: "https://support.microsoft.com/en-us/office/get-started-with-copilot-in-excel-d7110502-0334-4b4f-a175-a73abdfc118a",
    },
    {
      label: "Microsoft Learn: opções de licença do Microsoft 365 Copilot",
      url: "https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-licensing",
    },
    {
      label: "Google: usar o Gemini no Google Sheets",
      url: "https://support.google.com/docs/answer/14218565",
    },
    {
      label: "Google Workspace: planos e preços",
      url: "https://workspace.google.com/pricing",
    },
  ],
  content: `
    <p>IA para planilhas é o uso de assistentes como o Copilot no Excel, o Gemini no Google Sheets ou o ChatGPT para criar fórmulas, limpar dados e montar relatórios a partir de um pedido escrito em português. O relatório semanal que tomava uma tarde inteira vira uma rotina de poucos minutos, desde que o processo esteja bem montado.</p>

    <p>Este guia mostra o que cada ferramenta faz de verdade, o que dá para usar sem pagar, prompts prontos para copiar e um cenário de loja brasileira que troca o fechamento manual por um fluxo com IA. No fim, a lista dos erros que fazem o número sair errado, porque relatório errado em reunião custa caro.</p>

    <h2>O que a IA faz dentro de uma planilha?</h2>

    <p>Quatro tarefas concentram quase todo o ganho. A primeira é escrever fórmulas: você descreve o cálculo ("some as vendas de setembro só da loja do centro") e recebe a fórmula pronta, sem decorar PROCV, SOMASES ou ÍNDICE. A segunda é limpar dados: separar nome e sobrenome, padronizar datas, achar duplicados e apontar células vazias.</p>

    <p>A terceira é resumir: a IA lê a tabela e devolve um texto com totais, variações e destaques, pronto para colar em um e-mail ou em uma <a href="/artigos/como-criar-apresentacoes-e-slides-profissionais-com-ia">apresentação de slides feita com IA</a>. A quarta é gerar gráficos e tabelas dinâmicas a partir de uma frase. A página oficial do <a href="https://support.microsoft.com/en-us/office/get-started-with-copilot-in-excel-d7110502-0334-4b4f-a175-a73abdfc118a" rel="noopener noreferrer">Copilot no Excel</a> lista exatamente isso: fórmulas, resumos, gráficos, tabelas dinâmicas, ordenação, filtros e formatação condicional a partir de perguntas sobre os dados, no Excel para Windows, Mac e web.</p>

    <p>O que a IA não faz é conhecer o seu negócio. Ela não sabe que a coluna "Val" é valor líquido e não bruto, nem que a aba "Old" está desatualizada. Esse contexto é você quem dá, e é o que separa um relatório útil de um número bonito e errado. Se ainda está começando com assistentes, o <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">comparativo entre ChatGPT, Claude e Gemini</a> ajuda a escolher a base antes de pensar em planilha.</p>

    <h2>Copilot no Excel, Gemini no Sheets ou ChatGPT: qual usar?</h2>

    <p>A escolha depende de onde a planilha já mora. Quem vive no Excel tende a preferir o Copilot; quem usa Google Workspace vai de Gemini; quem só precisa analisar um arquivo de vez em quando resolve com um chat de IA e o upload do arquivo.</p>

    <table>
      <thead>
        <tr><th>Ferramenta</th><th>Onde roda</th><th>Ponto forte</th><th>Custo</th></tr>
      </thead>
      <tbody>
        <tr><td>Copilot no Excel</td><td>Excel para Windows, Mac e web</td><td>Fórmulas, gráficos e tabelas dinâmicas dentro do arquivo</td><td>Complemento pago ao Microsoft 365; consulte a página oficial</td></tr>
        <tr><td>Gemini no Google Sheets</td><td>Sheets no navegador</td><td>Criar tabelas e fórmulas por comando, resumir arquivos do Drive</td><td>Exige plano Workspace ou Google AI elegível; consulte a página oficial</td></tr>
        <tr><td>ChatGPT, Claude ou Gemini (chat)</td><td>Navegador ou app, com upload do arquivo</td><td>Análise exploratória e texto de resumo</td><td>Planos gratuitos com limites; consulte a página oficial</td></tr>
      </tbody>
    </table>

    <p>Dois detalhes de licença enganam muita gente. No lado da Microsoft, a <a href="https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-licensing" rel="noopener noreferrer">página de licenciamento do Copilot</a> deixa claro que o Copilot completo é um complemento vendido à parte para planos como Microsoft 365 Business Basic, Standard e Premium; o que vem incluso sem custo extra é o Copilot Chat, que responde perguntas na web mas não trabalha dentro do Excel do mesmo jeito. No lado do Google, a <a href="https://support.google.com/docs/answer/14218565" rel="noopener noreferrer">ajuda oficial do Gemini no Sheets</a> diz que o recurso pede um plano Google Workspace ou Google AI elegível, e a <a href="https://workspace.google.com/pricing" rel="noopener noreferrer">página de preços do Workspace</a> mostra o plano Starter com acesso limitado ao Gemini nos apps; Sheets com Gemini entra a partir do Standard.</p>

    <p>Antes de assinar qualquer um, vale passar pelo <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist de segurança para escolher ferramenta de IA</a> e pela discussão sobre <a href="/artigos/ia-gratis-ou-paga-o-que-vale-a-pena">quando compensa pagar por IA</a>. Para relatório mensal de um negócio pequeno, o plano gratuito de um chat costuma dar conta no começo.</p>

    <h2>Passo a passo: do dado solto ao relatório automático</h2>

    <p>O segredo não é o prompt genial. É montar a planilha de um jeito que a IA entenda e repetir o mesmo pedido toda semana.</p>

    <ol>
      <li><strong>Escolha uma planilha recorrente.</strong> Vendas, caixa, estoque ou atendimento. Comece por uma só: a que mais toma tempo.</li>
      <li><strong>Arrume a estrutura.</strong> Uma linha por registro, cabeçalho na primeira linha, sem células mescladas, sem totais no meio dos dados. Peça à IA para sugerir a estrutura se a atual estiver bagunçada.</li>
      <li><strong>Peça as fórmulas em português.</strong> Descreva o cálculo com os nomes das colunas. Cole a fórmula, teste em três linhas e confira na calculadora.</li>
      <li><strong>Crie a aba "Resumo".</strong> Totais, comparativo com o período anterior e os cinco maiores itens. É essa aba que vira o relatório.</li>
      <li><strong>Salve o prompt de resumo.</strong> Guarde o texto do pedido em uma célula ou em um documento. Toda semana, mesmo pedido, mesmo formato de saída.</li>
    </ol>

    <p>Quem quer ir além e disparar o relatório sozinho, sem abrir a planilha, pode ligar o Sheets a uma automação. O guia de <a href="/artigos/notion-zapier-e-ia-automatize-seu-negocio-sem-programar">Notion, Zapier e IA sem programar</a> mostra como conectar planilha, e-mail e IA em um fluxo só, e o artigo sobre <a href="/artigos/automacao-com-ia-economize-horas-de-trabalho">automação com IA no dia a dia</a> ajuda a decidir o que vale automatizar primeiro.</p>

    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Renomeie as colunas antes de pedir qualquer coisa. "Valor líquido (R$)" em vez de "Val" evita metade dos erros de interpretação.</p></div>

    <h2>Prompts prontos para planilhas</h2>

    <p>Os três prompts abaixo funcionam no Copilot, no Gemini e em qualquer chat com upload de arquivo. Troque os nomes das colunas pelos seus. As técnicas do <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">guia de prompt engineering</a> valem aqui: contexto, formato de saída e exemplo.</p>

    <h3>Fórmula sem decorar sintaxe</h3>

    <pre><code>Tenho uma planilha com as colunas Data (A), Loja (B), Produto (C), Quantidade (D) e Valor líquido (E). Escreva uma fórmula para o Google Sheets que some o Valor líquido de setembro de 2026 apenas da loja "Centro". Explique cada parte da fórmula em uma linha.</code></pre>

    <h3>Limpeza de dados</h3>

    <pre><code>Analise a aba "Clientes". Liste: 1) linhas duplicadas pelo campo CPF; 2) telefones fora do padrão (DD) 9XXXX-XXXX; 3) e-mails sem arroba. Não altere nada ainda, só me mostre a lista com o número da linha.</code></pre>

    <h3>Resumo executivo</h3>

    <pre><code>Com base na aba "Vendas", escreva um resumo de até 120 palavras para o dono da loja, em português do Brasil: faturamento do mês, variação em relação ao mês anterior em porcentagem, os 3 produtos mais vendidos e o dia mais fraco. Use tom direto e não invente dados que não estejam na planilha.</code></pre>

    <p>A última frase do terceiro prompt é a mais importante. Sem ela, o modelo tende a completar lacunas com números plausíveis. Se o tema é previsão, e não só resumo, o artigo sobre <a href="/artigos/como-fazer-previsao-de-vendas-planejamento-financeiro-com-ia">previsão de vendas e planejamento financeiro com IA</a> mostra como pedir projeções com margem de erro declarada.</p>

    <h2>Exemplo brasileiro: a loja que fecha o mês em 20 minutos</h2>

    <p>Cenário montado para ilustrar, com números realistas para uma loja de roupas de bairro em Curitiba. Faturamento de R$ 45 mil por mês, dois funcionários, cerca de 1.200 vendas registradas no mês em uma planilha do Google Sheets exportada do sistema de PDV.</p>

    <p>Antes: a dona gastava uma manhã inteira por mês, umas 5 horas, montando o fechamento. Somar por categoria, comparar com o mês anterior, listar o que mais vendeu e mandar o resumo para o contador e para o sócio. Errava a fórmula com frequência e refazia tudo.</p>

    <p>Depois: ela criou a aba "Resumo" com fórmulas geradas pelo Gemini no Sheets (plano Business Standard do Workspace; valor na página oficial) e salvou o prompt de resumo executivo. O fechamento passou a levar cerca de 20 minutos: exportar o PDV, colar na aba de dados, rodar o prompt, conferir três números na calculadora e enviar. São umas 4,5 horas por mês de volta, mais de 50 horas por ano, o que costuma pagar a assinatura com folga.</p>

    <p>O mesmo esquema serve para o <a href="/artigos/como-usar-ia-para-gerenciar-estoque-pequeno-comercio">controle de estoque no pequeno comércio</a> e para quem quer <a href="/artigos/como-usar-ia-para-reduzir-custos-operacionais-pequenos-negocios">reduzir custos operacionais</a> sem contratar. Em casa, o princípio é idêntico: uma planilha de gastos com uma aba de resumo, como no guia de <a href="/artigos/como-usar-ia-para-organizar-financas-pessoais">finanças pessoais com IA</a>.</p>

    <h2>Erros comuns e quando não usar</h2>

    <p>Os erros mais frequentes não são de IA, são de processo. Estes cinco aparecem em quase toda planilha que dá problema.</p>

    <ul>
      <li><strong>Confiar sem conferir.</strong> A IA erra em cálculo encadeado e em coluna ambígua. Trate o resultado como rascunho avançado: confira os três números que importam na calculadora antes de enviar.</li>
      <li><strong>Mandar dado sensível para fora.</strong> CPF de cliente, salário de funcionário e dados bancários não devem subir para um chat gratuito. O artigo sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a> explica o que acontece com o que você envia.</li>
      <li><strong>Planilha com célula mesclada e total no meio.</strong> A IA vai contar o total como se fosse um registro e dobrar o faturamento.</li>
      <li><strong>Pedido vago.</strong> "Analisa isso aí" gera resposta genérica. Diga qual pergunta o relatório precisa responder.</li>
      <li><strong>Trocar de ferramenta toda semana.</strong> O ganho vem da repetição do mesmo fluxo, com o mesmo prompt.</li>
    </ul>

    <p>Quando não usar: fechamento fiscal, folha de pagamento e qualquer cálculo que vai para a Receita ou para um contrato. Nesses casos, a planilha com IA serve para preparar e conferir, e o número final sai do sistema oficial ou do contador. Também não vale a pena em planilhas de 10 linhas: você gasta mais tempo explicando do que fazendo.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Relatório gerado por IA precisa de uma pessoa responsável pelo número. Se você assina, você confere.</p></div>

    <h2>Para onde a IA nas planilhas está indo</h2>

    <p>As ferramentas estão se aproximando da planilha, não o contrário. A <a href="/noticias/databricks-adquire-row-zero-genie-planilhas">compra da Row Zero pela Databricks</a> para reforçar o assistente Genie mostra que até as empresas de dados apostam na planilha como interface da IA. Isso significa que o fluxo descrito aqui tende a ficar mais simples, não mais complexo, nos próximos meses.</p>

    <p>Para quem presta serviço, organizar planilhas de pequenos negócios virou produto. Muito dono de loja pagaria para não montar o fechamento sozinho, e o artigo sobre <a href="/artigos/como-ganhar-dinheiro-vendendo-automacoes-prontas-com-ia">vender automações prontas com IA</a> mostra como empacotar e cobrar por isso. O mesmo fluxo que economiza suas 4 horas por mês vale dinheiro na mão de quem ainda faz na mão.</p>

    <p>Comece hoje com a planilha que mais te toma tempo: arrume o cabeçalho, peça uma fórmula, monte a aba de resumo e salve o prompt. Na próxima semana, o relatório sai em minutos. Para outras ferramentas que valem o teste, a categoria <a href="/categoria/ferramentas">Ferramentas</a> reúne os guias e comparativos do Portal da AI.</p>
  `,
  faq: [
    {
      question: "IA para planilhas funciona no Excel gratuito?",
      answer:
        "Só em parte. O Copilot completo dentro do Excel é um complemento pago ao Microsoft 365, segundo a página de licenciamento da Microsoft. Sem ele, o caminho é usar um chat de IA gratuito: você sobe o arquivo ou cola a tabela, pede a fórmula ou o resumo e volta para o Excel para aplicar. Funciona bem para relatórios simples.",
    },
    {
      question: "O Gemini no Google Sheets é gratuito?",
      answer:
        "Não no plano Starter do Workspace nem em qualquer conta. A ajuda oficial do Google diz que o Gemini no Sheets exige um plano Google Workspace ou Google AI elegível, e a página de preços mostra o Starter com acesso limitado ao Gemini nos apps. Os valores mudam; consulte a página oficial antes de assinar.",
    },
    {
      question: "A IA pode errar as fórmulas da planilha?",
      answer:
        "Pode, principalmente em cálculos encadeados, colunas com nomes ambíguos e planilhas com totais no meio dos dados. Por isso o fluxo do guia inclui testar a fórmula em três linhas e conferir os números principais na calculadora. Trate o resultado como rascunho avançado e mantenha uma pessoa responsável pelo número final.",
    },
    {
      question: "Qual o melhor prompt para gerar relatório de vendas com IA?",
      answer:
        "O que descreve as colunas, define o formato da saída e proíbe inventar dados. Exemplo: informe as colunas, peça faturamento do mês, variação em porcentagem, três produtos mais vendidos e o dia mais fraco, em até 120 palavras, e feche com a instrução de não usar dados fora da planilha. Salve o prompt e repita toda semana.",
    },
    {
      question: "Posso subir a planilha de clientes com CPF para o ChatGPT?",
      answer:
        "Não é recomendado em conta gratuita ou pessoal. Dados pessoais como CPF, salário e informações bancárias pedem conta corporativa com política de dados clara, ou anonimização antes do envio (troque o CPF por um código). Para relatório, quase sempre dá para remover as colunas sensíveis sem perder o resultado.",
    },
  ],
};
