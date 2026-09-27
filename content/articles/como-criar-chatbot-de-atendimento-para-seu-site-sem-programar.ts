import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "como-criar-chatbot-de-atendimento-para-seu-site-sem-programar",
  title: "Chatbot de atendimento para site sem programar: guia completo",
  seoTitle: "Chatbot de atendimento no site sem programar: guia",
  excerpt:
    "Chatbot de atendimento para site sem programar: compare Tidio, Chatbase e Botpress, siga o passo a passo, veja preços em reais e evite os erros mais comuns.",
  metaDescription:
    "Monte um chatbot de atendimento para o seu site sem programar: ferramentas com plano gratuito, passo a passo, prompts prontos, custo em reais e exemplo real.",
  category: "negocios",
  date: "2026-09-17",
  updated: "2026-09-27",
  readTime: 8,
  imageQuery: "chatbot website customer service",
  seed: 42,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Tidio, Chatbase e Botpress têm plano gratuito e treinam o robô com o seu FAQ ou com o próprio site, sem uma linha de código.",
    "O trabalho de verdade está na base de conhecimento: 15 a 20 perguntas com respostas curtas, valores e prazos reais.",
    "Todo chatbot precisa de uma saída para humano e de revisão semanal nas primeiras semanas; sem isso, ele piora com o tempo.",
  ],
  sources: [
    { label: "Tidio: página oficial de preços", url: "https://www.tidio.com/pricing/" },
    { label: "Chatbase: página oficial de preços", url: "https://www.chatbase.co/pricing" },
    { label: "Botpress: página oficial de preços", url: "https://botpress.com/pricing" },
  ],
  content: `
    <p>Criar um chatbot de atendimento para o seu site sem programar deixou de ser promessa. Hoje você sobe o conteúdo do seu FAQ em uma ferramenta como Tidio, Chatbase ou Botpress, ajusta o tom das respostas, cola um trecho de código pronto na página e o assistente começa a responder clientes em poucas horas, 24 horas por dia.</p>

    <p>Este guia mostra o caminho inteiro: o que um chatbot resolve de verdade, qual ferramenta escolher, o passo a passo de configuração, quanto custa em reais, um exemplo com números e os erros que fazem o cliente desistir da conversa. Não precisa de programador nem de agência, só de uma tarde e do seu conhecimento sobre o próprio negócio.</p>

    <h2>O que um chatbot de atendimento resolve (e o que não resolve)</h2>
    <p>Um chatbot bem configurado assume a parte repetitiva do atendimento: horário de funcionamento, formas de pagamento, prazo de entrega, política de troca, status de pedido quando integrado ao sistema. Ele também qualifica o visitante antes de passar para uma pessoa, coletando nome, telefone e o motivo do contato. E direciona para a página certa do site, o que complementa quem já usa IA para <a href="/artigos/como-usar-ia-para-vender-mais-no-seu-negocio-local">vender mais no negócio local</a>.</p>
    <p>O que ele não resolve: reclamação de cliente irritado, negociação de desconto, caso fora do padrão. Nessas horas a melhor resposta do robô é "vou chamar alguém da equipe". Vale entender a diferença entre <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">agente de IA, chatbot e automação</a> antes de escolher, porque muita ferramenta vende "agente" quando entrega um FAQ com cara nova.</p>
    <p>A mudança de fundo está descrita em <a href="/artigos/como-ia-esta-mudando-atendimento-ao-cliente">como a IA está mudando o atendimento ao cliente</a>: o volume de perguntas simples migra para a máquina, e a equipe humana fica com o que exige julgamento. Para um negócio pequeno, isso significa responder às 23h sem pagar hora extra e sem perder a venda para quem respondeu primeiro.</p>

    <h2>Qual ferramenta escolher sem programar</h2>
    <p>Três opções cobrem a maioria dos casos. Todas têm plano gratuito, treinam com o conteúdo do seu site ou com arquivos e geram um widget que você cola na página. Os valores abaixo foram verificados em 27/09/2026 nas páginas oficiais de preços da <a href="https://www.tidio.com/pricing/" rel="noopener noreferrer">Tidio</a>, da <a href="https://www.chatbase.co/pricing" rel="noopener noreferrer">Chatbase</a> e da <a href="https://botpress.com/pricing" rel="noopener noreferrer">Botpress</a>. A cobrança é em dólar, então o valor em reais muda com a cotação e com o imposto do cartão.</p>
    <table>
      <thead>
        <tr><th>Ferramenta</th><th>Plano gratuito</th><th>Primeiro plano pago</th><th>Melhor para</th></tr>
      </thead>
      <tbody>
        <tr><td>Tidio (Lyro AI)</td><td>50 conversas por mês</td><td>Starter a partir de US$ 24,17/mês; Lyro avulso a partir de US$ 32,50/mês com 50 conversas de IA</td><td>Loja virtual que quer chat ao vivo e robô no mesmo painel</td></tr>
        <tr><td>Chatbase</td><td>50 créditos de mensagem por mês e 1 agente (apagado após 14 dias sem uso)</td><td>Hobby: US$ 40/mês, 700 créditos e 2 agentes</td><td>Quem quer treinar com PDF e URL do site em 10 minutos</td></tr>
        <tr><td>Botpress</td><td>25 conversas por mês e 3 agentes</td><td>Plus: US$ 150/mês no plano anual, 250 conversas</td><td>Fluxos com etapas, condições e integrações</td></tr>
      </tbody>
    </table>
    <p>Se o seu atendimento acontece no WhatsApp e não no site, o raciocínio é parecido, mas a ferramenta muda; o guia sobre <a href="/artigos/como-vender-pacotes-de-automacao-de-ia-para-negocios-locais">pacotes de automação para negócios locais</a> lista as opções mais usadas nesse canal. Antes de assinar qualquer uma, passe pelo <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist de segurança para escolher ferramenta de IA</a>: onde os dados ficam, se dá para exportar as conversas e o que acontece com o histórico se você cancelar.</p>

    <h2>Passo a passo: do FAQ ao chatbot no ar</h2>
    <h3>1. Monte a base de conhecimento</h3>
    <p>Liste as 15 a 20 perguntas que mais chegam por WhatsApp, Instagram e e-mail. Escreva cada resposta como você falaria com o cliente, em duas ou três frases, com valores e prazos reais. Esse documento é o cérebro do robô: se a resposta estiver vaga ali, o chatbot vai responder vago. Um prompt no ChatGPT, Claude ou Gemini ajuda a organizar o material bruto:</p>
    <pre><code>Vou colar abaixo as mensagens que meus clientes mandam com mais frequência. Agrupe em perguntas únicas, escreva uma resposta curta e direta para cada uma, em português do Brasil, com tom simpático e sem enrolação. Onde faltar informação (preço, prazo, endereço), deixe entre colchetes para eu preencher.

Mensagens:
[cole aqui]</code></pre>
    <h3>2. Crie o agente e defina o tom</h3>
    <p>Na ferramenta, crie o agente, suba o documento (ou aponte a URL do site) e escreva as instruções de comportamento. Aqui entra o que o <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">guia de prompt engineering</a> chama de papel, contexto e limite. Um modelo que funciona bem:</p>
    <pre><code>Você é o assistente virtual da [nome da empresa]. Responda apenas com base na base de conhecimento fornecida. Use português do Brasil, frases curtas e tom cordial. Nunca invente preço, prazo ou promoção. Se não souber a resposta ou se o cliente pedir para falar com uma pessoa, diga: "Vou chamar alguém da equipe para te ajudar" e peça nome e telefone.</code></pre>
    <h3>3. Configure a passagem para humano</h3>
    <p>Defina o que acontece quando o robô não sabe: abrir um formulário, encaminhar para o WhatsApp da loja ou avisar a equipe por e-mail. Sem essa saída, o cliente fica preso em um loop de "não entendi" e vai embora com uma impressão pior do que se não houvesse chatbot nenhum.</p>
    <h3>4. Teste com perguntas reais e publique</h3>
    <p>Peça para três pessoas de fora da empresa fazerem dez perguntas cada, do jeito que escreveriam no celular. Corrija as respostas ruins na base de conhecimento, não no prompt. Depois cole o código do widget no site; quem montou a página com IA encontra esse passo no guia para <a href="/artigos/como-criar-landing-pages-e-sites-simples-com-ia">criar landing pages e sites simples com IA</a>.</p>

    <h2>Exemplo brasileiro: pousada com 12 quartos em Ubatuba</h2>
    <p>Pense em uma pousada com 12 quartos que recebe, na alta temporada, cerca de 40 mensagens por dia. Metade pergunta a mesma coisa: aceita pet, tem café da manhã, qual o valor da diária em janeiro, como chegar de ônibus. A dona responde tudo sozinha e perde reservas à noite porque só vê as mensagens na manhã seguinte, quando o hóspede já fechou em outro lugar.</p>
    <p>Um cenário realista de implantação: base de conhecimento com 18 perguntas escrita em uma tarde, Chatbase no plano Hobby (US$ 40 por mês, algo em torno de R$ 220 com o dólar a R$ 5,50, para efeito de conta) e o widget no site da pousada. Os 700 créditos mensais dão uma média de 23 mensagens por dia; como cada resposta consome ao menos um crédito, e mais quando se escolhe um modelo avançado, vale acompanhar o consumo no painel nas primeiras semanas. O robô responde as dúvidas simples e coleta nome, datas e telefone de quem quer reservar; a dona recebe só os pedidos qualificados.</p>
    <p>O ganho não é mágico. Se ela recuperar duas reservas por mês que antes esfriavam de madrugada, com diária de R$ 350 e estadias de três noites, são R$ 2.100 de receita a mais contra uma assinatura de cerca de R$ 220. É o mesmo raciocínio de <a href="/artigos/como-usar-ia-para-reduzir-custos-operacionais-pequenos-negocios">reduzir custos operacionais com IA</a>: a conta precisa fechar em reais, não em promessa de ferramenta.</p>

    <h2>Quanto custa e o que muda de plano para plano</h2>
    <p>Dá para começar sem gastar nada: Tidio oferece 50 conversas por mês, Chatbase 50 créditos e Botpress 25 conversas (verificado em 27/09/2026). Para uma loja pequena testando a ideia, isso basta por duas ou três semanas. O limite aparece justamente quando o chatbot funciona: as conversas passam do teto e as respostas simplesmente param até o mês virar.</p>
    <p>O que você compra no plano pago é volume, mais agentes, remoção da marca da ferramenta e integrações com WhatsApp, CRM ou planilha. Antes de subir de plano, meça: quantas conversas por dia o robô fez no último mês? Que porcentagem terminou sem chamar humano? Se ele resolve menos de 40% sozinho, o problema é a base de conhecimento, não o plano.</p>
    <p>Considere também a privacidade: o chatbot vai receber nome, telefone e, às vezes, CPF do cliente. Leia <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">o que você entrega sem perceber ao usar IA</a>, avise na página que a conversa é registrada e não peça dado que você não precisa. Empresas grandes já operam com agentes especializados por função, como mostra a <a href="/noticias/salesforce-lanca-sete-agentes-ia-agentforce">Salesforce com os sete agentes do Agentforce</a>; para o pequeno negócio, um agente bem treinado no FAQ já entrega a maior parte do ganho.</p>

    <h2>Erros comuns que fazem o cliente desistir</h2>
    <ul class="checklist">
      <li>Querer que o robô resolva tudo. Sem saída para humano, a conversa vira frustração e o cliente some.</li>
      <li>Treinar com o site inteiro sem revisar. Página antiga com preço de 2024 vira resposta errada hoje.</li>
      <li>Deixar o chatbot inventar. Se a instrução não proíbe, ele completa com o que parece plausível.</li>
      <li>Não ler as conversas. As perguntas que ele errou na semana são a lista de tarefas da segunda-feira.</li>
      <li>Esconder que é um robô. Diga logo no início; a maioria aceita bem, desde que exista uma pessoa por trás.</li>
      <li>Ignorar quem escreve em outro idioma. Turista pergunta em inglês e espanhol; veja <a href="/artigos/como-atender-clientes-em-varios-idiomas-usando-ia">como atender em vários idiomas com IA</a>.</li>
    </ul>
    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Chatbot não substitui pós-venda. Cliente que já comprou e teve problema quer gente. Use o robô para triagem e deixe o <a href="/artigos/como-usar-ia-para-melhorar-onboarding-de-clientes">onboarding de novos clientes</a> e a resolução de problemas com a equipe.</p></div>

    <h2>Como medir se o chatbot está funcionando</h2>
    <p>Três números bastam no primeiro trimestre. Taxa de resolução: conversas encerradas sem chamar humano divididas pelo total (acima de 50% é bom sinal para um FAQ). Taxa de captura: quantos visitantes deixaram contato pelo robô. E tempo de primeira resposta da equipe nos casos transferidos, porque não adianta o chatbot responder em dois segundos se o humano demora um dia.</p>
    <p>Revise a base toda semana nas primeiras quatro semanas, depois a cada mês. Um chatbot abandonado piora: promoções vencem, preços mudam e ele continua repetindo o que aprendeu em setembro. Esse cuidado pesa na reputação, tema de <a href="/artigos/como-melhorar-avaliacoes-e-reputacao-online-com-ia">melhorar avaliações e reputação online com IA</a>, e ajuda a <a href="/artigos/como-usar-ia-para-reduzir-cancelamento-de-clientes">reduzir cancelamentos</a> quando o negócio é por assinatura.</p>
    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Exporte as conversas uma vez por mês. Elas mostram, nas palavras do cliente, o que falta no seu site, no seu produto e no seu preço.</p></div>

    <p>Monte a base de conhecimento hoje, publique no plano gratuito e ajuste por duas semanas antes de pagar qualquer assinatura. Se quiser ir além do atendimento, a categoria <a href="/categoria/negocios">Negócios com IA</a> reúne guias de vendas, estoque, precificação e retenção pensados para o pequeno negócio brasileiro.</p>
  `,
  faq: [
    {
      question: "Chatbot de atendimento para site é gratuito?",
      answer:
        "Dá para começar sem pagar. Em 27/09/2026, Tidio oferecia 50 conversas por mês no plano gratuito, Chatbase 50 créditos de mensagem com um agente e Botpress 25 conversas com três agentes. O limite aparece quando o robô passa a ser usado de verdade; aí o primeiro plano pago custa a partir de US$ 24,17 na Tidio e US$ 40 na Chatbase. Consulte as páginas oficiais antes de assinar.",
    },
    {
      question: "Preciso saber programar para criar um chatbot no meu site?",
      answer:
        "Não. As ferramentas atuais funcionam em três etapas: você sobe um documento ou informa a URL do site, escreve as instruções de comportamento em português e copia um trecho de código pronto para colar na página. Quem usa WordPress, Wix ou Shopify encontra plugin ou campo próprio para isso. O trabalho real é escrever bem as respostas do FAQ.",
    },
    {
      question: "Chatbot com IA funciona em português?",
      answer:
        "Sim. Tidio, Chatbase e Botpress usam modelos de linguagem que respondem em português do Brasil. O que define a qualidade é a base de conhecimento: se as respostas estiverem escritas em português claro, com valores e prazos, o robô responde nesse tom. Vale escrever na instrução inicial que ele deve usar português do Brasil e frases curtas.",
    },
    {
      question: "Quanto tempo leva para colocar um chatbot no ar?",
      answer:
        "Uma tarde para escrever a base de conhecimento com 15 a 20 perguntas, uma hora para criar o agente e colar o widget, e duas semanas de ajuste lendo as conversas reais. O erro mais comum é pular a etapa de teste com pessoas de fora da empresa e publicar respostas que só fazem sentido para quem trabalha lá.",
    },
    {
      question: "Chatbot ou atendimento humano: qual é melhor para negócio pequeno?",
      answer:
        "Os dois, com papéis diferentes. O chatbot cobre horário de funcionamento, preços, prazos e captura de contato fora do expediente. A pessoa cuida de reclamação, negociação e pós-venda. A configuração mais importante é a passagem para humano: quando o robô não sabe, ele deve dizer isso e coletar nome e telefone, nunca insistir em resposta genérica.",
    },
  ],
};
