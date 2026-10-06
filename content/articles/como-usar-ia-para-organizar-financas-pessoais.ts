import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "como-usar-ia-para-organizar-financas-pessoais",
  title: "Organizar finanças pessoais com IA: guia sem planilha complicada",
  seoTitle: "Organizar finanças pessoais com IA: guia prático",
  excerpt:
    "Organizar finanças pessoais com IA em 20 minutos por mês: categorize o extrato, monte um orçamento simples e veja onde o dinheiro some, sem app pago.",
  metaDescription:
    "Organizar finanças pessoais com IA sem planilha complicada: prompts prontos para categorizar o extrato, montar orçamento e cortar gastos invisíveis.",
  category: "iniciantes",
  articleSubcategory: "vida-pratica",
  date: "2026-09-23",
  updated: "2026-09-27",
  readTime: 8,
  imageQuery: "personal finance budget app phone",
  seed: 71,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Organizar finanças pessoais com IA se resume a três pedidos: categorizar o extrato, propor limites por categoria e apontar gastos recorrentes que você esqueceu.",
    "O plano gratuito de ChatGPT, Claude ou Gemini dá conta da tarefa; o que muda o resultado é limpar o extrato antes de colar e usar um prompt com formato de saída definido.",
    "Extrato é dado sensível: tire número de conta, cartão e nome completo, desligue o uso das conversas para treinamento e nunca cole senha ou código de acesso.",
  ],
  content: `
    <p>Organizar finanças pessoais com IA é a saída para quem já tentou planilha, desistiu na terceira aba e hoje só sabe que o dinheiro acaba antes do mês. Você cola o extrato limpo em um assistente como ChatGPT, Claude ou Gemini, pede para categorizar, e em minutos tem o retrato do mês em linguagem normal, sem fórmula.</p>

    <p>O tamanho do problema explica por que vale tentar: em abril de 2026, a Serasa contava <a href="https://www.serasa.com.br/imprensa/5-em-cada-10-brasileiros-adultos-estao-inadimplentes-no-brasil-aponta-serasa/" rel="noopener noreferrer">83,3 milhões de inadimplentes, 50,81% da população adulta</a>, com dívida média de R$ 6.814 por pessoa. Quase sempre a conta estoura não por um gasto grande, mas por dezenas de pequenos que ninguém enxerga. É exatamente isso que a IA é boa em mostrar.</p>

    <h2>O que a IA faz pelas suas finanças (e o que não faz)</h2>
    <p>A IA faz três coisas bem. Categoriza: transforma 60 linhas de extrato em oito categorias com total em cada uma. Compara: mostra quanto cada categoria pesa na renda e onde o padrão fugiu do normal. Sugere: propõe um limite por categoria para você guardar uma porcentagem definida. Tudo isso em um prompt de cinco linhas.</p>

    <p>O que ela não faz: não sabe do imprevisto de saúde, da parcela do carro do seu irmão, nem da sua tolerância a cortar lazer. Também não acessa seu banco, então a qualidade do resultado depende do extrato que você cola. E não substitui educação financeira de base: o Banco Central oferece um <a href="https://www.gov.br/pt-br/servicos/aprender-a-administrar-suas-financas-pessoais" rel="noopener noreferrer">curso gratuito de gestão de finanças pessoais</a>, com cerca de 20 horas em sete módulos, que combina bem com a rotina deste guia.</p>

    <p>Quem ainda está escolhendo o assistente encontra no <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">comparativo entre ChatGPT, Claude e Gemini</a> o que muda entre eles. Para essa tarefa, os três planos gratuitos resolvem; a diferença aparece só se você quiser anexar PDF grande todo mês.</p>

    <h2>Passo a passo: do extrato ao orçamento em 20 minutos</h2>

    <h3>1. Exporte e limpe o extrato (5 minutos)</h3>
    <p>Quase todo banco e cartão exporta o mês em CSV, OFX ou PDF. Abra o arquivo, apague as colunas com número de conta, agência, nome completo e número do cartão, e deixe só data, descrição e valor. Se preferir, copie as linhas de uma vez e cole em um bloco de notas antes de mandar para a IA. Esse cuidado é o mesmo que o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist de segurança para ferramentas de IA</a> recomenda para qualquer dado pessoal.</p>

    <h3>2. Peça a categorização (5 minutos)</h3>
    <pre><code>Vou colar abaixo os lançamentos do meu cartão e da minha conta no mês de [mês].
Classifique cada linha em uma destas categorias: moradia, alimentação em casa, alimentação fora, transporte, saúde, assinaturas, lazer, educação, dívidas e parcelas, outros.
Entregue: (1) uma tabela com categoria, total em R$ e porcentagem da renda de R$ [valor]; (2) a lista de todas as assinaturas e cobranças recorrentes que você identificar, com valor; (3) as 5 maiores compras isoladas do mês.
Se uma descrição for ambígua, pergunte em vez de chutar.
Lançamentos:
[cole aqui]</code></pre>

    <h3>3. Peça o orçamento (5 minutos)</h3>
    <pre><code>Com base na tabela acima e na minha renda líquida de R$ [valor], proponha um limite mensal por categoria para eu conseguir guardar [10]% da renda.
Regras: não corte moradia nem dívidas; corte primeiro assinaturas que não usei no mês e alimentação fora.
Para cada limite, escreva uma frase explicando de onde veio o número.
Termine com 3 ações concretas para o próximo mês, cada uma com o valor que economiza.</code></pre>

    <h3>4. Revise e anote a decisão (5 minutos)</h3>
    <p>Leia a proposta, ajuste o que não cabe na sua vida e anote três metas para o mês seguinte. O <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">guia de prompt engineering</a> explica por que definir formato de saída e regras ("não corte moradia") deixa a resposta tão mais útil do que um "me ajuda com meu orçamento".</p>

    <h2>Exemplo: renda de R$ 3.200 e 47 lançamentos no mês</h2>
    <p>Cenário ilustrativo. Carla, auxiliar administrativa em Recife, recebe R$ 3.200 líquidos e nunca sobra nada. Ela exporta o extrato do cartão e da conta em CSV, apaga as colunas de identificação e cola 47 linhas no plano gratuito do ChatGPT com o prompt de categorização. O resultado sai em uma tabela como esta.</p>

    <table>
      <thead>
        <tr>
          <th>Categoria</th>
          <th>Total no mês</th>
          <th>Parcela da renda</th>
          <th>Limite proposto pela IA</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Moradia (aluguel, luz, internet)</td>
          <td>R$ 1.380</td>
          <td>43%</td>
          <td>R$ 1.380 (manter)</td>
        </tr>
        <tr>
          <td>Alimentação em casa</td>
          <td>R$ 540</td>
          <td>17%</td>
          <td>R$ 500</td>
        </tr>
        <tr>
          <td>Alimentação fora e delivery</td>
          <td>R$ 410</td>
          <td>13%</td>
          <td>R$ 220</td>
        </tr>
        <tr>
          <td>Transporte</td>
          <td>R$ 290</td>
          <td>9%</td>
          <td>R$ 290 (manter)</td>
        </tr>
        <tr>
          <td>Assinaturas e recorrentes</td>
          <td>R$ 214</td>
          <td>7%</td>
          <td>R$ 90</td>
        </tr>
        <tr>
          <td>Lazer e outros</td>
          <td>R$ 366</td>
          <td>11%</td>
          <td>R$ 300</td>
        </tr>
      </tbody>
    </table>

    <p>A surpresa foi a linha de assinaturas: R$ 214 por mês em seis serviços, dois deles sem uso nos últimos 60 dias (um app de treino e um streaming de música duplicado). Somando o corte de assinaturas com a redução do delivery, a IA propôs R$ 314 de folga, o que cobre a meta de guardar 10% da renda (R$ 320) quase por inteiro. O delivery, aliás, é o gasto mais fácil de reduzir quando existe cardápio da semana, e o guia sobre <a href="/artigos/como-usar-ia-para-planejar-refeicoes-e-economizar-no-mercado">planejar refeições com IA</a> mostra como fazer isso na mesma conversa.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Dica</span>
      <p>Peça para a IA marcar todo lançamento que se repetiu nos últimos três meses com o mesmo valor. É o jeito mais rápido de achar assinatura esquecida, seguro embutido em conta e "teste grátis" que virou cobrança.</p>
    </div>

    <h2>Segurança: o que nunca colar em uma IA</h2>
    <p>Extrato é um dos dados mais sensíveis que você tem. As regras são poucas e não têm exceção. Nunca cole senha, código de acesso, número completo de cartão, CVV ou token de aplicativo, em nenhuma ferramenta, por nenhum motivo: nada disso é necessário para categorizar gasto. Nunca envie o PDF inteiro do extrato sem apagar os dados de identificação.</p>

    <p>Também vale entender o que a ferramenta faz com o texto. O Google avisa que conversas no Gemini podem ser <a href="https://support.google.com/gemini/answer/13594961" rel="noopener noreferrer">revisadas por pessoas e usadas para melhorar o serviço</a>, e pede que você não insira informação confidencial; dá para desligar isso na configuração de atividade. A Anthropic informa na <a href="https://www.anthropic.com/privacy" rel="noopener noreferrer">política de privacidade do Claude</a> que pode usar conversas para treinar modelos, a menos que você desative nas configurações da conta. Faça esse ajuste antes do primeiro extrato.</p>

    <div class="callout-box callout-bad">
      <span class="callout-label">Nunca faça</span>
      <p>Nunca dê a uma IA acesso direto à sua conta bancária, seja por senha, seja por extensão de navegador de origem duvidosa que promete "conectar seu banco". Exporte o arquivo você mesmo e cole só o que precisa. O texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a> mostra o que mais você entrega sem perceber nessas conexões.</p>
    </div>

    <h2>Transformando em rotina mensal</h2>
    <p>O ganho não vem da primeira análise, vem da quinta. Reserve 20 minutos no primeiro sábado de cada mês, sempre no mesmo chat ou projeto, para que a IA compare com o mês anterior. Um lembrete no celular resolve; quem gosta de sistema pode encaixar isso na <a href="/artigos/como-usar-ia-para-criar-rotina-diaria-produtiva">rotina produtiva com IA</a> ou configurar o <a href="/artigos/como-configurar-primeiro-assistente-de-ia-pessoal">assistente pessoal</a> com instruções fixas sobre suas categorias e sua meta.</p>

    <ul class="checklist">
      <li>Exportei o extrato e apaguei conta, cartão e nome</li>
      <li>Desliguei o uso das conversas para treinamento na ferramenta</li>
      <li>Colei o extrato com o prompt de categorização</li>
      <li>Pedi o orçamento com meta de poupança e regras de corte</li>
      <li>Anotei 3 ações para o mês e marquei o próximo sábado</li>
    </ul>

    <p>Quando o mês começa a sobrar, dois caminhos se abrem. O primeiro é usar a mesma técnica para gastos grandes planejados, como o guia de <a href="/artigos/como-usar-ia-para-planejar-viagens-sem-perder-horas-pesquisando">planejar viagens com IA</a> faz com o orçamento de férias. O segundo é olhar para o lado da renda: as <a href="/artigos/10-formas-de-ganhar-dinheiro-com-inteligencia-artificial">formas reais de ganhar dinheiro com IA</a> listam serviços que dá para começar sem investimento, sem promessa de valor fixo.</p>

    <h2>Erros comuns de quem começa</h2>
    <p>O erro mais frequente é colar o extrato bruto e aceitar a primeira categorização. A IA vai chutar em descrição ambígua ("PAG*JOAO SILVA" pode ser o mecânico ou o churrasco) e você fecha o mês com número errado. Peça para ela perguntar quando não souber e revise as linhas maiores. O <a href="/artigos/5-erros-comuns-de-quem-esta-comecando-a-usar-ia">guia dos 5 erros de iniciante em IA</a> detalha esse hábito de conferir antes de confiar.</p>

    <p>O segundo erro é tratar a proposta de orçamento como sentença. Se o limite de alimentação fora ficou em R$ 220 e você sabe que não vai cumprir, ajuste para R$ 300 e corte em outro lugar. Orçamento que não cabe na vida real dura duas semanas. O terceiro é pagar ferramenta antes da hora: o <a href="/artigos/ia-gratis-ou-paga-o-que-vale-a-pena">guia sobre IA grátis ou paga</a> mostra que o plano pago só faz sentido quando você quer anexar arquivos grandes ou manter projetos com memória, e mesmo assim consulte a página oficial para o preço atual. Quem já domina a rotina e quer um controle mais visual pode migrar o resultado para uma aba simples usando as ideias de <a href="/artigos/ia-para-planilhas-automatizar-relatorios-excel-sheets">IA para planilhas</a>.</p>

    <div class="callout-box callout-warn">
      <span class="callout-label">Atenção</span>
      <p>A IA não substitui orientação profissional quando há dívida em atraso ou negociação com banco. Nesses casos, use a análise para entender o tamanho do problema e procure os canais oficiais de renegociação. Se a ferramenta usar algum termo técnico que você não conhece, como "token" ou "contexto", o <a href="/artigos/dicionario-de-inteligencia-artificial-termos-essenciais">dicionário de IA</a> explica os principais em uma linha.</p>
    </div>

    <p>Comece hoje com o extrato do mês passado e o primeiro prompt. Se em 20 minutos você descobrir uma assinatura esquecida, o método já se pagou. Os outros guias da categoria <a href="/categoria/iniciantes">Para Iniciantes</a> mostram como levar a mesma lógica para o resto da rotina.</p>
  `,
  faq: [
    {
      question: "Preciso pagar ChatGPT ou outra IA para organizar minhas finanças?",
      answer:
        "Não. O plano gratuito de ChatGPT, Claude ou Gemini categoriza extrato, propõe orçamento e encontra gastos recorrentes sem custo. O plano pago só passa a fazer diferença se você quiser anexar PDFs grandes todo mês ou manter um projeto com memória das análises anteriores. Antes de assinar, confira o preço e os limites atuais na página oficial da ferramenta.",
    },
    {
      question: "É seguro colar meu extrato bancário em uma IA?",
      answer:
        "É razoavelmente seguro se você apagar antes número de conta, agência, cartão e nome completo, deixando só data, descrição e valor. Também desative nas configurações o uso das conversas para treinamento, opção que Gemini e Claude oferecem. Nunca cole senha, código de acesso ou CVV, e nunca dê a uma ferramenta acesso direto à conta.",
    },
    {
      question: "Qual IA é melhor para finanças pessoais: ChatGPT, Claude ou Gemini?",
      answer:
        "Para categorizar extrato e montar orçamento, os três entregam resultado parecido no plano gratuito. O que muda o resultado é o prompt: pedir tabela, lista de recorrentes e regras de corte. Se você usa muito o Google Drive, o Gemini facilita anexar arquivos; se prefere textos longos e revisão cuidadosa, Claude costuma agradar. Teste com um mês em cada um.",
    },
    {
      question: "A IA consegue prever meus gastos do mês que vem?",
      answer:
        "Ela consegue projetar com base no histórico que você colou: se três meses mostram R$ 400 de delivery, ela vai estimar algo próximo. Mas não prevê imprevisto, aumento de conta nem mudança de hábito. Use a projeção como alerta, não como certeza, e revise o número real no fim do mês para a estimativa seguinte melhorar.",
    },
    {
      question: "Como fazer a IA achar assinaturas que eu esqueci?",
      answer:
        "Cole dois ou três meses de extrato e peça para ela listar todo lançamento que se repete com o mesmo valor ou a mesma descrição. Inclua no pedido apps, streaming, seguros e serviços cobrados no cartão. Depois marque quais você usou nos últimos 30 dias. O que sobrar é candidato a cancelamento, e a própria IA pode calcular quanto isso libera por ano.",
    },
  ],
  quiz: [
    {
      question: "O que você NUNCA deve colar numa ferramenta de IA ao organizar finanças?",
      options: [
        "O valor de um lançamento",
        "A categoria de um gasto",
        "Senha, CVV ou número completo de cartão",
        "A data de uma compra",
      ],
      answer: 2,
      explanation:
        "Dados de acesso como senha, CVV e número completo de cartão nunca são necessários para categorizar gasto ou montar orçamento. Data, descrição e valor bastam para a análise.",
    },
    {
      question: "Por que repetir a análise todo mês, no mesmo chat ou projeto?",
      options: [
        "Para deixar a IA mais inteligente",
        "Para comparar com o mês anterior e criar o hábito que muda o resultado",
        "Para reduzir o número de categorias",
        "Para evitar usar o aplicativo do banco",
      ],
      answer: 1,
      explanation:
        "Uma análise isolada tem pouco efeito. É a comparação mês a mês, no mesmo lugar, que revela padrão, mostra se a meta foi cumprida e sustenta o hábito ao longo do tempo.",
    },
  ],
};
