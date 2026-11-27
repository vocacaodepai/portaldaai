import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "openai-corrige-cobranca-gpt-6-2-limite-acaba-mais-rapido",
  title: "OpenAI corrige erro no GPT-6.2 e limite do plano acaba mais rápido",
  summary:
    "A OpenAI corrigiu um desconto indevido no GPT-6.2 Astra e Sol. Agora o limite do plano acaba até 40% mais rápido. Veja o que muda e como usar o reset.",
  author: "Bruno Danello",
  sourceName: "BleepingComputer, InfoWorld, OpenAI",
  sourceUrl: "https://www.bleepingcomputer.com/news/artificial-intelligence/openai-warns-gpt-62-astra-will-hit-usage-limits-40-percent-faster-because-it-fixed-a-bug/",
  date: "2026-11-27",
  publishedAt: "2026-11-27T08:24:00-03:00",
  topic: "lancamentos",
  imageQuery: "ChatGPT OpenAI smartphone",
  content: `
    <p>Quem usa o GPT-6.2 no ChatGPT Work ou no Codex vai ver o limite do plano acabar mais depressa. Na quinta-feira, 26 de novembro, a OpenAI informou que um erro de cobrança no lançamento descontava menos do que deveria no uso do GPT-6.2 Astra e do GPT-6.2 Sol. A falha foi corrigida, e o mesmo trabalho agora consome uma fatia maior da cota.</p>
    <p>O aviso foi publicado no X por Tibo Sottiaux, que trabalha no ChatGPT e no Codex, e reproduzido por BleepingComputer e InfoWorld. Em comparação com a semana anterior, segundo ele, o usuário chega ao limite 40% mais rápido no Astra e 25% mais rápido no Sol.</p>

    <h2>O que se sabe</h2>
    <p>Na frase citada pela InfoWorld, Sottiaux escreveu: "We made a billing mistake at the launch of GPT-6.2 that incorrectly discounted GPT-6.2 Astra and Sol usage for most users". Em português: houve um erro de cobrança no lançamento que aplicou um desconto indevido ao uso dos dois modelos para a maioria dos usuários.</p>
    <p>Segundo a BleepingComputer, a empresa não vai cobrar a diferença do que foi consumido a menos por causa da falha. Como pedido de desculpas, anunciou um reset guardado para todos os assinantes dos planos Go, Plus, Pro e Business. Os planos Enterprise e Edu não aparecem na lista da compensação.</p>
    <p>A mudança atinge o Astra e o Sol da versão 6.2, enquanto os outros modelos mantêm o cálculo de antes, de acordo com a BleepingComputer. A OpenAI afirma que os dois continuam rendendo mais que os antecessores, GPT-6 Astra e GPT-6.1 Sol. Eles foram apresentados em 17 de novembro, como contamos em <a href="/noticias/openai-lanca-gpt-6-2-astra-sol-preco-claude-fable">OpenAI lança GPT-6.2 Astra e Sol</a>.</p>

    <figure><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Hand_holding_smartphone_with_ChatGPT_and_OpenAI_text_%2852917312010%29.jpg/1280px-Hand_holding_smartphone_with_ChatGPT_and_OpenAI_text_%2852917312010%29.jpg" alt="Mão segurando um celular com os nomes ChatGPT e OpenAI na tela" loading="lazy" /><figcaption>Foto: Jernej Furman / Wikimedia Commons (CC BY 2.0)</figcaption></figure>

    <h2>Quanto trabalho passa a caber no plano</h2>
    <p>A InfoWorld chama atenção para uma ambiguidade: não está claro se "40% mais rápido" quer dizer consumo 1,4 vez maior ou uma cota que dura 40% menos. Na leitura do Portal da AI, a primeira é a mais direta para a frase "chegar ao limite 40% mais rápido", e ela dá a seguinte conta aproximada.</p>
    <table>
      <thead>
        <tr><th>Modelo</th><th>Antes da correção</th><th>Depois, pela nossa conta</th></tr>
      </thead>
      <tbody>
        <tr><td>GPT-6.2 Astra</td><td>10 tarefas parecidas</td><td>cerca de 7</td></tr>
        <tr><td>GPT-6.2 Sol</td><td>10 tarefas parecidas</td><td>cerca de 8</td></tr>
      </tbody>
    </table>
    <p>É uma simplificação. O consumo real varia com o tamanho do contexto, o nível de raciocínio, as ferramentas usadas e o cache, e a própria OpenAI avisa que tarefas parecidas podem gastar quantidades diferentes.</p>
    <p>Na página de preços consultada em 27 de novembro, a empresa estima que os planos Plus e Business padrão comportam, a cada janela de cinco horas, de 6 a 50 mensagens locais no GPT-6.2 Astra e de 17 a 180 no GPT-6.2 Sol. A página diz que não são limites fixos, que pode haver teto semanal e que os planos Pro não têm hoje a janela de cinco horas. Ela não informa se essas faixas já refletem a correção.</p>
    <p>Para quem compra créditos, a tabela oficial lista o Astra a 200 créditos por milhão de tokens de entrada e 1.000 por milhão de tokens de saída. O Sol sai por 50 e 250, um quarto do valor. A API tem preço separado, e os relatos citados aqui não mencionam mudança nela.</p>

    <h2>Como funciona o reset de compensação</h2>
    <p>O reset guardado é uma recarga de uso que fica salva na conta até você decidir ativá-la. A BleepingComputer encontrou o item na própria conta, no caminho Configurações, Uso e Reset, com validade de um mês. A central de ajuda da OpenAI não fixa um prazo geral: manda conferir a data e o horário de vencimento mostrados na conta.</p>
    <p>A mesma página traz regras que valem a leitura antes de clicar:</p>
    <ul>
      <li>Receber o reset não recarrega nada. É preciso ativar.</li>
      <li>Ele só pode ser usado quando pelo menos uma das cotas cobertas está com menos de 80% disponível.</li>
      <li>No Go, o reset completo restaura a cota mensal. No Plus e no Business padrão, as cotas de cinco horas e semanal. Nos planos Pro, a semanal.</li>
      <li>Limites separados, como geração de imagem, envio de arquivos e voz no chat comum, não mudam.</li>
      <li>O reset não vira dinheiro nem crédito de API.</li>
    </ul>
    <p>A recomendação prática é guardar a recarga para um dia em que o limite travar uma entrega, sem deixar passar a data de vencimento. Ativar com a cota quase cheia desperdiça o benefício, e a regra dos 80% já impede parte desse erro.</p>

    <h2>O que ainda não está confirmado</h2>
    <p>A causa do erro não foi explicada. Segundo a InfoWorld, a publicação de Sottiaux não diz o que provocou o desconto, quais usuários foram beneficiados nem quais são as taxas de medição corrigidas. O veículo informa que a OpenAI não respondeu de imediato a um pedido de comentário.</p>
    <p>Os relatos também não dizem se o GPT-6.2 usado na aba de conversa comum, liberado depois do lançamento, é afetado. As notas de versão do ChatGPT consultadas não trazem registro da correção, e o texto original no X não pôde ser aberto por nós: as frases citadas aqui são as publicadas pelos veículos.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você paga uma assinatura em dólar para trabalhar, o preço da mensalidade não precisa subir para o plano render menos. O que muda é quanto serviço cada ciclo entrega. Quem montou a rotina da última semana em cima do Astra, com relatórios, planilhas ou código para clientes, calibrou a expectativa em um medidor que estava errado a seu favor.</p>
    <p>O primeiro ajuste é usar o Sol como padrão e deixar o Astra para a tarefa em que o resultado do Sol não bastar. Pela tabela de créditos, o Sol custa um quarto. O segundo é conferir o painel de uso por alguns dias antes de prometer prazo ou volume a um cliente. O terceiro é cortar desperdício: enviar só os arquivos necessários, abrir conversa nova quando o assunto mudar e escrever o pedido completo de uma vez, como mostra o guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">como escrever comandos que funcionam</a>.</p>
    <p>Vale acompanhar junto a <a href="/noticias/openai-une-chat-e-work-orcamento-unico-tokens-chatgpt">fusão de Chat e Work num medidor único</a>, que começou a ser liberada a parte dos assinantes Pro. Com as duas mudanças próximas, fica mais difícil saber se um limite estourado veio do modelo, da nova conta ou do seu volume. Anote o que consumiu a cota esta semana e compare na próxima.</p>
    <p>Se a assinatura ficou apertada, não faça o upgrade no impulso. Releia a análise sobre se o <a href="/artigos/chatgpt-plus-vale-a-pena-review-2026">ChatGPT Plus vale a pena</a>, teste as suas tarefas reais nas alternativas do comparativo <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini</a> e decida pelo custo de cada entrega pronta. Quem precisa de muito mais volume encontra o histórico recente das cotas maiores em <a href="/noticias/openai-dobra-limites-pro-100-500-codex-work">limites dos planos Pro 100 e Pro 500</a>.</p>
  `,
  faq: [
    {
      question: "Por que o limite do GPT-6.2 está acabando mais rápido?",
      answer:
        "A OpenAI disse ter corrigido um erro de cobrança do lançamento, que descontava menos do que deveria no GPT-6.2 Astra e no Sol. Comparado com a semana anterior, o usuário chega ao limite 40% mais rápido no Astra e 25% mais rápido no Sol.",
    },
    {
      question: "Quem ganha o reset de uso da OpenAI?",
      answer:
        "Segundo o anúncio reproduzido pela BleepingComputer, os assinantes dos planos Go, Plus, Pro e Business recebem um reset guardado. Ele precisa ser ativado, tem data de vencimento mostrada na conta e só funciona quando uma cota coberta está com menos de 80% disponível.",
    },
    {
      question: "A OpenAI vai cobrar o uso que foi descontado a menos?",
      answer:
        "Não. De acordo com a BleepingComputer, a empresa afirmou que não vai cobrar dos usuários a diferença de consumo causada pelo erro. A correção vale para o uso daqui em diante.",
    },
  ],
};
