import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "creditos-de-api-do-claude-nos-planos-max-e-team-como-resgatar-o-que-cobrem-e-limites",
  title: "Créditos de API do Claude nos planos Max e Team: como resgatar",
  seoTitle: "Créditos de API do Claude (Max e Team): como resgatar",
  excerpt:
    "Veja como resgatar os créditos mensais de API do Claude nos planos Max e Team: valores, passo a passo, o que cobrem, o que não cobrem e quando expiram.",
  metaDescription:
    "Créditos de API do Claude para Max e Team: valores por plano, como vincular a organização no Console, o que cobrem e as regras de expiração.",
  category: "ferramentas",
  date: "2026-10-28",
  readTime: 7,
  imageQuery: "developer laptop code dashboard billing",
  seed: 851,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Assinantes dos planos Max e Team recebem um saldo mensal de créditos para a API do Claude, que se resgata em Configurações > Faturamento no claude.ai, vinculando uma organização do Console.",
    "Os créditos cobrem a API, o Playground do Console, os Managed Agents e o Agent SDK, mas não cobrem o Claude Code interativo, o uso extra do Claude nem o Claude em nuvens de terceiros.",
    "Os créditos não acumulam: o que sobra expira no fim do ciclo de cobrança, e só é possível vincular uma organização do Console por plano.",
  ],
  content: `
    <p>Os créditos de API do Claude nos planos Max e Team são um saldo mensal em dólar que o assinante usa para construir o Claude dentro de aplicativos e agentes próprios, pela API. Eles não aumentam o limite de uso do chat. Para receber, é preciso vincular uma organização do Console em Configurações > Faturamento no claude.ai e aceitar os termos.</p>

    <p>A novidade aparece nas notas de versão do Claude de 7 de outubro de 2026 e está sendo liberada aos poucos. Se você paga o Max para conversar com o Claude e também tem uma ideia de automação, chatbot ou agente, esse saldo pode cobrir os testes sem uma segunda cobrança. Abaixo está o que a página oficial de suporte diz, com valores, passo a passo e as pegadinhas que mais confundem.</p>

    <h2>O que são os créditos mensais de API?</h2>

    <p>Segundo a <a href="https://support.claude.com/en/articles/17154008" target="_blank" rel="noopener noreferrer">página de suporte sobre os créditos mensais de API</a>, consultada em 28/10/2026, assinantes Max e Team ganham um saldo mensal na Plataforma Claude para usar a API em aplicativos e agentes próprios. A confirmação do lançamento está nas <a href="https://support.claude.com/en/articles/12138966-release-notes" target="_blank" rel="noopener noreferrer">notas de versão do Claude</a>, que também citam a liberação gradual ao longo de alguns dias.</p>

    <p>Vale separar duas coisas que costumam se misturar. O plano de assinatura, como o Max, libera o uso do Claude no site e nos aplicativos, com limites próprios. A API é um produto à parte, cobrado por consumo, que programadores e automações usam para chamar o modelo por código. Os créditos de que falamos aqui são um bônus da assinatura que vai para o lado da API. Para entender a diferença entre limites e custo de uso, o texto sobre <a href="/artigos/tokens-e-janela-de-contexto-em-ia-o-que-sao-e-por-que-importam">tokens e janela de contexto</a> ajuda.</p>

    <h2>Quanto cada plano recebe</h2>

    <p>Valores informados na página oficial, verificados em 28/10/2026, em dólares por mês:</p>

    <table>
      <thead>
        <tr><th>Plano</th><th>Crédito mensal de API</th></tr>
      </thead>
      <tbody>
        <tr><td>Max 5x</td><td>US$ 100</td></tr>
        <tr><td>Max 20x</td><td>US$ 200</td></tr>
        <tr><td>Team, assento Standard</td><td>US$ 20 por assento</td></tr>
        <tr><td>Team, assento Premium</td><td>US$ 100 por assento</td></tr>
      </tbody>
    </table>

    <p>Nos planos Team, os créditos de todos os assentos são somados em um único saldo mensal, limitado a US$ 500. Pelo exemplo da própria página, três assentos Standard e dois Premium resultam em US$ 260 por mês. O valor é recalculado a cada depósito, conforme o número de assentos. Planos com desconto, como os de organizações sem fins lucrativos e cientistas, recebem os mesmos valores por tipo de assento.</p>

    <p>Quem não tem direito: os planos Free, Pro e Enterprise ficam de fora. Também é preciso estar no plano elegível há sete dias, com a assinatura ativa e em dia. Preços e regras mudam, então confira a página oficial antes de decidir.</p>

    <h2>Como resgatar, passo a passo</h2>

    <p>O resgate é feito pelo site, mesmo que a assinatura tenha sido contratada no iOS ou no Android. Não é preciso cadastrar cartão na Plataforma Claude.</p>

    <ol>
      <li>Confirme seu papel. No Max, você precisa ser o assinante. No Team, precisa ser Owner ou Primary Owner. No Console, a organização exige papel de Owner, Admin ou Billing.</li>
      <li>No claude.ai, abra Configurações > Faturamento (Max) ou Configurações da organização > Faturamento (dono do Team).</li>
      <li>Na seção "API credits", selecione "Link organization".</li>
      <li>Escolha a organização do Console que vai receber os créditos, ou crie uma nova.</li>
      <li>Leia os termos de créditos suplementares e confirme.</li>
    </ol>

    <p>Depois disso, o saldo aparece na organização escolhida. Entre no Console com o mesmo e-mail do claude.ai. Se aparecer erro ao vincular, a página sugere tentar de novo em algumas horas.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Só é possível vincular uma organização do Console, e cada organização recebe créditos de um único plano. Você não consegue trocar a organização sozinho: a mudança passa pelo suporte. Escolha com calma antes de confirmar.</p></div>

    <h2>O que os créditos cobrem e o que não cobrem</h2>

    <p>Esta é a parte que mais gera engano, porque o nome "Claude" aparece em vários produtos com cobranças diferentes.</p>

    <table>
      <thead>
        <tr><th>Cobre</th><th>Não cobre</th></tr>
      </thead>
      <tbody>
        <tr><td>API do Claude (Messages e Message Batches)</td><td>Claude Code interativo no terminal, na IDE ou na web</td></tr>
        <tr><td>Playground do Console</td><td>Execuções pela GitHub Action do Claude Code, extensão de IDE ou app desktop</td></tr>
        <tr><td>Claude Managed Agents</td><td>Uso extra no Claude, no Claude Code ou no Cowork</td></tr>
        <tr><td>Agent SDK, incluindo <code>claude -p</code> quando você roda com a chave de API da organização vinculada</td><td>Claude na Amazon Bedrock, no Google Cloud Vertex AI ou no Microsoft Foundry</td></tr>
      </tbody>
    </table>

    <p>Um detalhe técnico importante: se você usa <code>claude -p</code> ou o Agent SDK logado com o plano, em vez de uma chave de API, o consumo conta nos limites do plano e não nos créditos. Os créditos também não mudam os limites de uso do Claude, do Claude Code ou do Cowork. Se você tem dúvidas sobre os limites do chat, leia o guia sobre os <a href="/artigos/projetos-no-claude-como-usar-limites-e-memoria-por-projeto">Projetos no Claude</a>.</p>

    <h2>Renovação, expiração e o que acontece quando acaba</h2>

    <p>Os créditos são renovados a cada ciclo de cobrança, pouco depois do pagamento do plano. Em planos anuais, chegam mensalmente. Não há acúmulo: o que não foi usado expira no fim do ciclo. Os créditos mensais são gastos antes de qualquer crédito que você tenha comprado. O saldo e a data de validade aparecem na página de faturamento do Console.</p>

    <p>Todos os que têm chave de API na organização vinculada gastam do mesmo saldo. Se acabar e a organização não tiver créditos comprados nem recarga automática, as requisições à API param até a chegada dos próximos créditos. Segundo a página, o uso nunca é cobrado do plano do claude.ai. Para evitar susto, defina limites de gasto por workspace no Console e distribua uma chave por projeto.</p>

    <h2>Exemplo: o que dá para fazer com US$ 100 por mês</h2>

    <p>Imagine a Camila, que assina o Max 5x e atende três pequenas lojas. Ela quer montar um assistente que lê pedidos e sugere respostas. Com o saldo de US$ 100, pode testar um fluxo de automação na API sem pagar à parte durante a fase de protótipo. O custo real depende do modelo escolhido, do tamanho dos textos e do volume, então o ideal é começar com um modelo pequeno e medir. O texto sobre <a href="/artigos/modelo-pequeno-ou-grande-de-ia-velocidade-custo-e-qualidade-para-quem-usa">modelo pequeno ou grande de IA</a> mostra como pensar nessa escolha, e a notícia sobre o <a href="/noticias/anthropic-lanca-claude-haiku-5-5-mais-barato">Claude Haiku 5.5</a> descreve um modelo pensado para tarefas de alto volume.</p>

    <p>Quem quer ir além e vender esse tipo de solução encontra ideias em <a href="/artigos/como-ganhar-dinheiro-criando-e-vendendo-agentes-de-ia-personalizados">como criar e vender agentes de IA personalizados</a>, no <a href="/artigos/chatbot-de-faq-para-negocio-local-como-servico-escopo-preco-e-manutencao">chatbot de FAQ como serviço</a> e no guia de <a href="/artigos/n8n-para-iniciantes-como-vender-automacoes-com-ia">automações com n8n</a>. Se o seu caso é só ligar apps sem programar, compare antes em <a href="/artigos/make-ou-zapier-qual-automacao-com-ia-vale-mais-a-pena">Make ou Zapier</a>.</p>

    <h2>Para quem esses créditos valem a pena</h2>

    <ul class="checklist">
      <li>Quem já paga Max ou Team e quer prototipar um aplicativo, bot ou automação sem outra conta de API.</li>
      <li>Equipes pequenas que querem testar um agente interno com limite de gasto definido.</li>
      <li>Freelancers de automação que precisam de um ambiente de teste para clientes.</li>
      <li>Quem estuda o assunto e quer entender a <a href="/artigos/mcp-model-context-protocol-o-que-e-e-como-conecta-agentes-de-ia">integração de agentes por MCP</a> na prática.</li>
    </ul>

    <p>Quem só usa o Claude para conversar, escrever e resumir pode ignorar a novidade: ela não melhora o chat. E quem usa o Claude Code todo dia deve lembrar que o uso interativo fica fora dos créditos.</p>

    <h2>Erros comuns</h2>

    <ul class="checklist">
      <li>Achar que o crédito aumenta o limite de mensagens do claude.ai: não aumenta.</li>
      <li>Vincular a organização errada e descobrir depois que só o suporte troca.</li>
      <li>Esperar acúmulo de saldo de um mês para o outro: o que sobra expira.</li>
      <li>Rodar o Agent SDK logado com o plano e imaginar que está gastando crédito de API.</li>
      <li>Compartilhar a chave de API em planilhas ou chats. Trate a chave como senha e leia a <a href="/artigos/politica-de-uso-de-ia-na-pequena-empresa-regras-simples-para-a-equipe">política de uso de IA para a equipe</a> antes de liberar acesso a terceiros.</li>
    </ul>

    <p>Se a sua dúvida é qual assistente escolher antes de assinar qualquer plano, comece pelo comparativo <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini</a> e acompanhe as novidades de produtos na <a href="/categoria/ferramentas">categoria Ferramentas</a>. Para ver como a empresa tem lançado agentes que agem sozinhos, a notícia sobre o <a href="/noticias/anthropic-lanca-claude-duet-agente-pessoal-proativo">Claude Duet</a> é um bom complemento.</p>
  `,
  faq: [
    {
      question: "Quem recebe os créditos de API do Claude?",
      answer:
        "Assinantes dos planos Max e Team com assinatura ativa e em dia há pelo menos sete dias. Os planos Free, Pro e Enterprise não são elegíveis. No Max, quem resgata é o assinante. No Team, o resgate é feito por um Owner ou Primary Owner da organização.",
    },
    {
      question: "Os créditos de API valem para o Claude Code?",
      answer:
        "Não para o Claude Code interativo no terminal, na IDE ou na web, nem para o uso extra do Claude. Valem para a API, o Playground do Console, os Managed Agents e o Agent SDK quando você usa a chave de API da organização vinculada, segundo a página oficial.",
    },
    {
      question: "Os créditos acumulam de um mês para o outro?",
      answer:
        "Não. Segundo a página de suporte, os créditos não acumulam e o saldo não usado expira no fim de cada ciclo de cobrança. Eles são renovados a cada ciclo, pouco depois do pagamento do plano, e os créditos mensais são gastos antes de qualquer crédito comprado.",
    },
    {
      question: "O que acontece quando os créditos acabam?",
      answer:
        "Se a organização tiver créditos comprados ou recarga automática, o uso continua com eles. Sem isso, as requisições à API param até a chegada dos próximos créditos. O uso nunca é cobrado do plano do claude.ai, segundo a página oficial de suporte.",
    },
    {
      question: "Posso trocar a organização do Console depois de vincular?",
      answer:
        "Não por conta própria. A página informa que só uma organização do Console pode ser vinculada e que cada organização recebe créditos de um único plano. Para alterar a vinculação depois de confirmada, é preciso falar com o suporte, por isso vale conferir tudo antes.",
    },
  ],
};
