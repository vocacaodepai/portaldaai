import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "contas-a-pagar-e-a-receber-em-planilha-vencimentos-coloridos-e-rotina-semanal-com-ia",
  title: "Contas a pagar e a receber em planilha: vencimentos e rotina com IA",
  seoTitle: "Contas a pagar e a receber em planilha com IA",
  excerpt:
    "Monte uma planilha de contas a pagar e a receber com status em lista, vencimentos coloridos e rotina semanal de 20 minutos, usando a IA para criar as fórmulas.",
  metaDescription:
    "Contas a pagar e a receber em planilha: colunas, lista suspensa de status, cores automáticas para vencidas e a vencer, resumo semanal e prompts de IA para o pequeno negócio.",
  category: "negocios",
  articleSubcategory: "financas-e-precificacao",
  date: "2026-10-29",
  readTime: 8,
  imageQuery: "calendar calculator invoices small shop",
  seed: 914,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Uma planilha de contas a pagar e a receber precisa de poucas colunas: descrição, valor, vencimento, status e forma de pagamento, com lista suspensa no status para evitar erro de digitação.",
    "A formatação condicional do Google Planilhas, com fórmula personalizada, pinta de vermelho o que venceu e de amarelo o que vence nos próximos 7 dias, sem você precisar procurar.",
    "A IA ajuda a escrever as fórmulas e a revisar a rotina semanal de 20 minutos, mas os números do banco e das notas continuam sendo conferidos por você.",
  ],
  content: `
    <p>Para controlar contas a pagar e a receber em planilha, crie uma aba com descrição, valor, vencimento, status e forma de pagamento, coloque uma lista suspensa no status e use a formatação condicional para pintar o que está vencido ou perto de vencer. Reserve 20 minutos por semana para atualizar e olhar o resumo. Simples assim, e de graça no Google Planilhas.</p>

    <p>Muito pequeno negócio perde dinheiro não por falta de venda, mas por esquecimento: o boleto do fornecedor que venceu, o cliente que ficou de pagar e ninguém cobrou, a mensalidade que passou batida. A planilha não é sofisticada, porém dá visão de quanto entra e sai nos próximos 30 dias, que é a pergunta que mais importa no caixa. Este guia mostra o modelo passo a passo, as fórmulas, os prompts para a IA ajudar, um exemplo com números de uma loja de 6 mil reais por mês de contas e os erros mais frequentes.</p>

    <h2>Por que separar a pagar e a receber (e o que isso resolve)</h2>

    <p>Quem mistura tudo em um extrato bancário vê o passado. Quem separa o que ainda vai pagar e o que ainda vai receber enxerga o futuro próximo: se na quinta-feira vencem R$ 2.400 e só entram R$ 900, dá tempo de agir, seja renegociando prazo, cobrando um cliente ou segurando uma compra. Esse olhar é o coração do <a href="/artigos/fluxo-de-caixa-com-ia-guia-pequenos-negocios">fluxo de caixa</a>, e a planilha é a versão mais barata de fazê-lo.</p>

    <p>Também ajuda a separar o dinheiro da empresa do pessoal, assunto do texto sobre <a href="/artigos/retirada-fixa-do-dono-pro-labore-e-conta-separada-no-pequeno-negocio">retirada fixa do dono e conta separada</a>. Se a empresa tem capital apertado, vale ler sobre o <a href="/artigos/capital-de-giro-do-pequeno-negocio-como-calcular-com-ia-e-quando-pedir-credito">capital de giro</a>, porque é aí que a falta de controle de vencimentos mais dói.</p>

    <h2>Colunas da planilha: o mínimo que funciona</h2>

    <p>Crie uma aba chamada Contas, com uma linha por lançamento. Mais colunas viram trabalho; menos colunas viram dúvida. Este é o mínimo:</p>

    <table>
      <thead>
        <tr><th>Coluna</th><th>Exemplo</th><th>Para quê</th></tr>
      </thead>
      <tbody>
        <tr><td>A: Tipo</td><td>Pagar ou Receber</td><td>Separar entradas e saídas</td></tr>
        <tr><td>B: Descrição</td><td>Fornecedor de embalagens, parcela 2/3</td><td>Saber do que se trata</td></tr>
        <tr><td>C: Valor</td><td>R$ 850,00</td><td>Somar o que sai e o que entra</td></tr>
        <tr><td>D: Vencimento</td><td>06/11/2026</td><td>Ordenar e colorir</td></tr>
        <tr><td>E: Status</td><td>Pendente, Pago, Recebido</td><td>Esconder o que já foi resolvido</td></tr>
        <tr><td>F: Forma</td><td>Pix, boleto, cartão</td><td>Conferir com o extrato</td></tr>
      </tbody>
    </table>

    <p>Se você ainda está pegando o jeito com fórmulas, o guia de <a href="/artigos/aprender-planilhas-do-zero-com-ia-formulas-erros-e-exercicios">planilhas do zero com IA</a> é um bom reforço antes de seguir.</p>

    <h2>Lista suspensa no status: acabou o erro de digitação</h2>

    <p>Quem digita "pago", "Pago", "PAGO" e "pg" na mesma coluna estraga qualquer soma. A solução é uma lista suspensa. Segundo a <a href="https://support.google.com/docs/answer/186103?hl=pt-BR" target="_blank" rel="noopener noreferrer">Central de Ajuda do Google Docs</a>, consultada em 29/10/2026, você seleciona as células, vai em Dados, Validação de dados e Adicionar regra, ou usa Inserir, Menu suspenso, e define as opções à mão ou a partir de um intervalo de células. Em opções avançadas dá para escolher o estilo, como ícone de seta ou chip, e decidir se entradas fora da lista são rejeitadas ou só geram aviso.</p>

    <p>Para esta planilha, três opções bastam: Pendente, Pago e Recebido. Se um dia precisar de Negociando ou Atrasado, é só editar a regra em Dados, Validação de dados. Anote que a seleção de vários itens na mesma célula não funciona no celular, segundo a mesma página, mas aqui você só precisa de uma opção por linha.</p>

    <h2>Cores automáticas para vencidas e a vencer</h2>

    <p>A formatação condicional pinta a linha sozinha. A <a href="https://support.google.com/docs/answer/78413?hl=pt-BR" target="_blank" rel="noopener noreferrer">página oficial</a>, consultada em 29/10/2026, explica o caminho: selecione o intervalo, abra Formatar, Formatação condicional, e em "Formatar células se" escolha "A fórmula personalizada é". A fórmula pode usar outras células, e o cifrão trava a coluna para a regra valer na linha inteira. A página também avisa que as regras são avaliadas na ordem da lista, e a primeira verdadeira define a formatação, então arraste as regras para colocar a mais importante no topo.</p>

    <p>Com a planilha em português, selecione A2:F500 e crie duas regras. A primeira, em vermelho claro, para vencidas e não resolvidas:</p>

    <pre><code>=E($E2="Pendente"; $D2&lt;HOJE())</code></pre>

    <p>A segunda, em amarelo, para as que vencem nos próximos 7 dias:</p>

    <pre><code>=E($E2="Pendente"; $D2&gt;=HOJE(); $D2&lt;=HOJE()+7)</code></pre>

    <p>Dependendo da configuração regional da sua conta, o separador pode ser vírgula em vez de ponto e vírgula, e os nomes das funções podem aparecer em inglês. Se a fórmula der erro, peça à IA para adaptar à sua configuração. Linhas pagas ou recebidas ficam sem cor, e o olho vai direto ao que importa.</p>

    <h2>Resumo semanal: quanto sai e quanto entra em 30 dias</h2>

    <p>Numa segunda aba chamada Resumo, use somas condicionais para responder: quanto tenho a pagar nos próximos 7 e 30 dias, quanto tenho a receber, e quanto está vencido e ainda aberto. A fórmula de soma com mais de um critério resolve:</p>

    <pre><code>=SOMASES(Contas!C:C; Contas!A:A; "Pagar"; Contas!E:E; "Pendente"; Contas!D:D; "&lt;="&amp;HOJE()+30)</code></pre>

    <p>Repita trocando "Pagar" por "Receber". A diferença entre as duas é o saldo projetado de 30 dias antes de contar vendas novas. É uma projeção simples, que não substitui o <a href="/artigos/dre-simples-com-ia-ler-o-lucro-do-pequeno-negocio-mes-a-mes">DRE simples</a>, que mostra lucro, mas responde bem à pergunta de caixa. Para conferir com o banco, o guia de <a href="/artigos/conciliacao-bancaria-com-ia-pequeno-negocio-guia">conciliação bancária com IA</a> traz o método.</p>

    <h2>Prompts para a IA montar e revisar a planilha</h2>

    <p>A IA é boa para escrever fórmulas e revisar a estrutura. Não cole extratos com nomes de clientes reais; use exemplos ou valores sem identificação.</p>

    <pre><code>Estou montando uma planilha de contas a pagar e a receber no Google Planilhas em português do Brasil. Colunas: A Tipo, B Descrição, C Valor, D Vencimento (data), E Status (Pendente, Pago, Recebido), F Forma. Escreva: 1) a fórmula personalizada de formatação condicional para linhas pendentes vencidas; 2) a fórmula para pendentes que vencem em 7 dias; 3) a fórmula de soma dos valores a pagar pendentes nos próximos 30 dias. Use ponto e vírgula como separador e explique cada parte em uma frase.</code></pre>

    <pre><code>Aqui estão 12 lançamentos fictícios da minha planilha (sem nomes reais). Aponte inconsistências: datas fora de ordem, valores repetidos, status que não bate com a data e linhas sem forma de pagamento. Não altere os dados, só liste os problemas.</code></pre>

    <p>Quem usa o celular para lançar contas pode ver o guia do <a href="/artigos/gemini-no-google-planilhas-no-iphone-e-android-como-usar-e-limites">Gemini no Google Planilhas no iPhone e no Android</a>, e para guardar comprovantes e boletos, o texto sobre <a href="/artigos/escanear-documentos-no-celular-recibos-garantias-e-contas-com-ia">escanear documentos no celular</a> ajuda a organizar as imagens.</p>

    <h2>Exemplo com números: uma loja de roupas</h2>

    <p>Considere uma loja fictícia, com contas fixas de R$ 6.000 por mês: aluguel de R$ 1.800, folha de R$ 2.200, fornecedores de R$ 1.500 e outros de R$ 500. Em uma segunda-feira, a dona abre a planilha e vê três linhas vermelhas e duas amarelas. Soma dos vencidos: R$ 640 (uma conta de energia e uma parcela de fornecedor). Vencem em 7 dias: R$ 2.200 (a folha) e R$ 480 (um boleto). Entradas previstas: R$ 1.350 de parcelas de clientes.</p>

    <p>A conclusão é visível em 1 minuto: nesta semana saem R$ 3.320 e entram R$ 1.350, uma diferença de R$ 1.970 que precisa ser coberta por vendas ou por uma conversa com o fornecedor. Ela liga para o fornecedor e negocia as parcelas, usando as ideias de <a href="/artigos/como-usar-ia-para-negociar-melhor-com-fornecedores">negociação com fornecedores</a>, e cobra os clientes em atraso com mensagens do guia de <a href="/artigos/ia-para-cobranca-e-inadimplencia-pequeno-negocio">cobrança e inadimplência</a>. Os valores do exemplo são inventados para ilustrar; a sua realidade terá outros números.</p>

    <h2>Rotina de 20 minutos por semana</h2>

    <ul class="checklist">
      <li>Segunda de manhã: marcar como Pago ou Recebido o que foi resolvido na semana anterior.</li>
      <li>Lançar as novas contas e vendas parceladas, com valor e vencimento.</li>
      <li>Olhar as linhas vermelhas e amarelas e decidir uma ação para cada.</li>
      <li>Conferir o Resumo e anotar o saldo projetado de 7 e 30 dias.</li>
      <li>Uma vez por mês, comparar o total pago com o extrato do banco.</li>
    </ul>

    <p>Quando as cobranças são recorrentes, como mensalidades, o <a href="/artigos/pix-automatico-para-pequeno-negocio-cobrar-mensalidades-com-ia">Pix Automático</a> reduz o trabalho de cobrar. Para ver como o caixa do dia conversa com essa planilha, leia o passo a passo do <a href="/artigos/fechamento-de-caixa-diario-na-loja-conferir-pix-cartao-e-dinheiro-com-planilha-e-ia">fechamento de caixa diário</a>.</p>

    <h2>Erros comuns</h2>

    <p>O mais comum é lançar só o que já foi pago, o que transforma a planilha em extrato e tira o poder de prever. Em seguida vêm as datas digitadas como texto, que o Planilhas não reconhece como data e quebram as cores. Também é frequente esquecer parcelas futuras, esquecer impostos e taxas de cartão, ou deixar a rotina para o fim do mês, quando já é tarde. Outro erro é confiar cegamente na fórmula escrita pela IA: teste com 3 linhas de exemplo antes de aplicar em tudo.</p>

    <p>Comece hoje com uma aba e as seis colunas. Em duas semanas você terá a visão do mês seguinte, e o planejamento de 2027 do <a href="/artigos/planejamento-2027-do-pequeno-negocio-metas-orcamento-e-calendario-com-ia">pequeno negócio</a> fica bem mais fácil. A categoria de <a href="/categoria/negocios">negócios do Portal da AI</a> reúne os próximos passos.</p>
  `,
  faq: [
    {
      question: "Como fazer uma planilha de contas a pagar e a receber no Google Planilhas?",
      answer:
        "Crie as colunas tipo, descrição, valor, vencimento, status e forma de pagamento, adicione uma lista suspensa no status e use a formatação condicional com fórmula personalizada para colorir o que está vencido. Depois monte uma aba de resumo com somas condicionais por período.",
    },
    {
      question: "Como pintar automaticamente as contas vencidas no Planilhas?",
      answer:
        "Selecione o intervalo, abra Formatar, Formatação condicional e escolha a fórmula personalizada. Uma regra possível, em português, é verificar se o status é Pendente e se a data é menor que HOJE(). As regras são avaliadas em ordem, e a primeira verdadeira define a cor.",
    },
    {
      question: "Planilha serve ou preciso de um sistema de gestão?",
      answer:
        "Para um negócio com poucas dezenas de lançamentos por mês, a planilha serve bem e custa nada. Quando houver muitas notas, estoque e vários usuários, um sistema com emissão de nota e conciliação passa a compensar. Comece simples e migre quando o volume pedir.",
    },
    {
      question: "A IA pode preencher a planilha por mim?",
      answer:
        "Ela ajuda a escrever fórmulas, revisar a estrutura e apontar inconsistências, mas não deve receber extratos com dados de clientes. Os lançamentos e a conferência com o banco continuam sendo seus, porque um valor errado na planilha vira decisão errada no caixa.",
    },
    {
      question: "Com que frequência devo atualizar a planilha?",
      answer:
        "Uma rotina semanal de cerca de 20 minutos costuma bastar para um negócio pequeno: marcar o que foi pago, lançar novas contas, olhar as linhas coloridas e conferir o resumo. Uma vez por mês, compare o total com o extrato do banco.",
    },
  ],
};
