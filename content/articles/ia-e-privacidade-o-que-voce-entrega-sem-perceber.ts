import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "ia-e-privacidade-o-que-voce-entrega-sem-perceber",
  title: "IA e privacidade: o que você entrega sem perceber ao usar",
  seoTitle: "IA e privacidade: o que você entrega sem perceber",
  excerpt:
    "IA e privacidade: veja o que ChatGPT, Gemini e Claude guardam das suas conversas, onde desligar o uso para treino e o que a LGPD garante a você no Brasil.",
  metaDescription:
    "IA e privacidade: o que ChatGPT, Gemini e Claude guardam das suas conversas, como desligar o uso para treino de modelo e quais direitos a LGPD garante.",
  category: "futuro",
  date: "2026-09-19",
  updated: "2026-09-27",
  readTime: 9,
  imageQuery: "privacy data security laptop",
  seed: 50,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Toda conversa com IA fica guardada no servidor da empresa e, dependendo da configuração, pode ser lida por revisores e usada para treinar o modelo seguinte.",
    "Gemini e Claude têm uma chave de ajuste que desliga o uso das conversas para treino; a LGPD garante o direito de acesso, correção e eliminação dos seus dados.",
    "O risco real está no hábito: colar dado de cliente, senha ou contrato em conta pessoal gratuita. Um checklist de dois minutos resolve a maior parte dos casos.",
  ],
  content: `
    <p>IA e privacidade andam juntas desde a primeira mensagem que você manda para o ChatGPT, o Gemini ou o Claude. O texto que você digita, o arquivo que anexa e o horário em que usa ficam guardados no servidor da empresa e, dependendo da configuração da sua conta, podem ser lidos por revisores humanos e usados para treinar o próximo modelo.</p>

    <p>Este guia mostra o que cada ferramenta guarda, onde fica a chave que desliga o uso das conversas para treino, o que a LGPD garante a você e um checklist para continuar usando IA sem entregar dado de cliente, senha ou contrato. Nada aqui pede que você pare de usar. Pede que você use como quem sabe o que está fazendo.</p>

    <h2>O que uma ferramenta de IA guarda quando você conversa com ela?</h2>

    <p>Três coisas, basicamente. A primeira é o conteúdo: cada pergunta, cada resposta, cada PDF, planilha ou foto que você anexa. Se você já usou uma <a href="/artigos/ia-multimodal-o-que-muda-quando-maquina-ve-ouve-fala">IA multimodal</a> para descrever uma imagem ou transcrever um áudio, aquele arquivo passou pelo servidor da empresa e, em geral, ficou lá associado à sua conta.</p>

    <p>A segunda é o metadado: quando você usou, com que frequência, de que aparelho e de que cidade. Sozinho parece inofensivo; junto com o conteúdo, monta um retrato preciso da sua rotina.</p>

    <p>A terceira é a mais delicada: o uso das conversas para melhorar o modelo. No plano pessoal, gratuito ou pago, a maioria das ferramentas vem com esse uso ligado ou pergunta na primeira vez. Isso vale para as três grandes, e a comparação de <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude e Gemini</a> mostra que a diferença entre elas está menos no que coletam e mais em como deixam você controlar isso.</p>

    <h2>Onde fica a chave que desliga o treino em cada ferramenta</h2>

    <p>O caminho muda de tempos em tempos, então o que vale é saber o nome do ajuste e conferir na central de ajuda oficial. O que segue foi conferido nas páginas das empresas em 27/09/2026.</p>

    <h3>Gemini (Google)</h3>

    <p>A página oficial sobre a <a href="https://support.google.com/gemini/answer/13594961" rel="noopener noreferrer">Atividade nos apps Gemini</a> diz que uma parte das conversas é revisada por pessoas (funcionários e prestadores treinados), que essas conversas são desvinculadas da conta antes de irem para os prestadores e que, com o ajuste "Manter atividade" desligado, as conversas futuras não aparecem no histórico nem são usadas para treinar os modelos. Há também o chat temporário, que já nasce fora do treino. A exclusão automática padrão é de 18 meses, ajustável para 3 ou 36.</p>

    <h3>Claude (Anthropic)</h3>

    <p>A central de privacidade da Anthropic explica que as conversas de contas pessoais só entram no treino <a href="https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training" rel="noopener noreferrer">se você permitir na configuração de melhoria do modelo</a>, além de revisões de segurança e programas com adesão explícita. Chats no modo incógnito ficam fora do treino mesmo com a opção ligada.</p>

    <h3>ChatGPT (OpenAI)</h3>

    <p>O ajuste fica na área de controles de dados da conta. A página de ajuda da OpenAI não abriu na nossa conferência, então confirme o caminho exato na central de ajuda oficial. O chat temporário existe e não entra no histórico.</p>

    <table>
      <thead>
        <tr><th>Ferramenta</th><th>Nome do ajuste</th><th>Modo sem histórico</th><th>Conferido em</th></tr>
      </thead>
      <tbody>
        <tr><td>Gemini</td><td>Manter atividade (Atividade nos apps Gemini)</td><td>Chat temporário</td><td>27/09/2026</td></tr>
        <tr><td>Claude</td><td>Melhoria do modelo (configurações de privacidade)</td><td>Chat incógnito</td><td>27/09/2026</td></tr>
        <tr><td>ChatGPT</td><td>Controles de dados</td><td>Chat temporário</td><td>consulte a página oficial</td></tr>
      </tbody>
    </table>

    <h2>O que a LGPD garante a você</h2>

    <p>A Lei Geral de Proteção de Dados vale para qualquer empresa que trate dados de pessoas no Brasil, inclusive as de IA com sede fora do país. O <a href="https://www2.camara.leg.br/legin/fed/lei/2018/lei-13709-14-agosto-2018-787077-publicacaooriginal-156212-pl.html" rel="noopener noreferrer">artigo 18 da Lei 13.709/2018</a> lista o que você pode pedir a quem guarda seus dados: confirmação de que existe tratamento, acesso aos dados, correção, eliminação do que foi tratado com base no seu consentimento, portabilidade, informação sobre com quem os dados foram compartilhados e revogação do consentimento.</p>

    <p>Na prática, isso significa que você pode pedir a exclusão do histórico e da conta, e a empresa precisa ter um canal para isso. As três grandes têm a opção de apagar conversas e excluir a conta dentro das configurações. Se o pedido não for atendido, a reclamação vai para a <a href="https://www.gov.br/anpd/pt-br" rel="noopener noreferrer">ANPD</a>, o órgão que fiscaliza a lei, pelo sistema Fala.BR.</p>

    <p>Detalhe que muita gente ignora: a LGPD protege os dados de terceiros que você cola na ferramenta. Se você anexa um contrato com nome, CPF e endereço de um cliente para a IA revisar, você virou responsável por aquele tratamento. O guia de <a href="/artigos/ia-para-contratos-revisar-documentos-juridicos-mais-rapido">IA para revisar contratos</a> mostra como fazer isso com os dados pessoais tarjados antes do envio.</p>

    <h2>Cenários de risco que acontecem todo dia</h2>

    <p>Pense numa contadora de Campinas com 12 clientes pequenos. Ela cola a folha de pagamento de um deles (nome, CPF, salário, endereço de 18 funcionários) no ChatGPT gratuito da conta pessoal para pedir um resumo de encargos. Levou dois minutos e economizou uma hora. Só que aquele arquivo agora está no histórico de uma conta com senha fraca, sem verificação em duas etapas, e com o uso para treino ligado. O cliente nunca autorizou nada disso. Se a conta vazar, o problema é dela, com multa prevista na LGPD e perda do contrato.</p>

    <p>Cenário dois: o dono de uma loja usa <a href="/artigos/ia-para-reunioes-transcricao-resumo-ata-automatica">IA para transcrever reuniões</a> com a equipe e com fornecedores. As atas ficam num serviço gratuito que ninguém leu o termo de uso. Ali tem preço de compra, margem e nome de quem vai ser desligado.</p>

    <p>Cenário três: alguém organiza o acervo da família com <a href="/artigos/ia-para-organizar-fotos-arquivos-menos-bagunca-digital">IA para organizar fotos e arquivos</a> e, no meio, sobem RG, comprovante de residência e extrato bancário. Ou conecta a IA à caixa de e-mail e dá acesso de leitura a tudo. Nenhum desses casos é sobre tecnologia ruim. É sobre hábito.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Agentes que acessam arquivos e apps por você ampliam o alcance de qualquer erro. Em setembro, um pesquisador conseguiu <a href="/noticias/pesquisador-exporta-6gb-arquivos-agente-muse-meta">exportar 6,8 GB de arquivos internos do agente Muse, da Meta, só com comandos de chat</a>. Se um agente tem a chave da sua conta, a permissão dele é a sua permissão.</p></div>

    <h2>Checklist e prompts para usar IA sem entregar demais</h2>

    <p>Dá para resolver a maior parte do problema em dez minutos de configuração e um hábito novo. O <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist antes de assinar uma ferramenta de IA</a> cobre a parte contratual; este aqui cobre o uso diário.</p>

    <ul class="checklist">
      <li>Desligue o uso das conversas para treino em cada ferramenta que você usa e anote a data em que conferiu.</li>
      <li>Ative a verificação em duas etapas na conta de IA, igual você faz no banco.</li>
      <li>Separe conta pessoal de conta de trabalho. Dado de cliente só entra em plano de empresa, com contrato que exclua treino.</li>
      <li>Antes de colar qualquer texto, troque nome, CPF, telefone e valor real por marcadores como [CLIENTE], [CPF] e [VALOR].</li>
      <li>Use chat temporário ou incógnito para assunto sensível de uma vez só.</li>
      <li>Apague o histórico a cada mês ou configure exclusão automática no menor prazo que a ferramenta oferecer.</li>
      <li>Leia ao menos a seção "como usamos seus dados" da política antes de conectar a IA ao e-mail, ao Drive ou ao WhatsApp.</li>
    </ul>

    <p>Os prompts abaixo ajudam a manter o hábito sem perder velocidade. O primeiro faz a própria IA revisar o que você está prestes a enviar:</p>

    <pre><code>Antes de responder, liste todos os dados pessoais ou sigilosos que aparecem no texto abaixo (nomes, CPF, CNPJ, telefone, e-mail, endereço, valores, senhas). Não responda ao pedido ainda. Só me diga o que eu deveria substituir por marcadores.

Texto: [cole aqui]</code></pre>

    <p>O segundo serve para trabalhar com dados fictícios que se comportam como os reais:</p>

    <pre><code>Crie uma tabela fictícia com 10 clientes de uma loja de roupas em Belo Horizonte, com nome, cidade, valor da última compra em reais e data. Os dados devem ser inventados, mas realistas, para eu testar uma análise sem usar informação verdadeira.</code></pre>

    <p>O terceiro é para quando você precisa da análise, mas o dado sensível não pode sair da sua máquina:</p>

    <pre><code>Vou descrever a estrutura de uma planilha sem colar os dados: colunas Cliente, Valor, Vencimento e Status. Me dê a fórmula do Google Sheets que soma o Valor de todas as linhas com Status "atrasado" e vencimento há mais de 30 dias.</code></pre>

    <p>O terceiro prompt resolve o problema sem dado real, o mesmo raciocínio de quem usa <a href="/artigos/como-usar-ia-para-organizar-financas-pessoais">IA para organizar as finanças pessoais</a>: a ferramenta precisa da lógica, não do seu extrato.</p>

    <h2>Erros comuns que ninguém percebe</h2>

    <p>O erro mais frequente é achar que o plano pago resolve. Pagar mensalidade em conta pessoal não muda, por padrão, a regra de uso para treino; a diferença está no plano de empresa e no contrato. A comparação entre <a href="/artigos/ia-gratis-ou-paga-o-que-vale-a-pena">IA grátis ou paga</a> explica o que cada nível realmente entrega.</p>

    <p>O segundo erro é conectar tudo por conveniência. Extensões de navegador que "leem a página para você", apps que pedem acesso ao microfone o tempo inteiro e agentes de compra que guardam seu cartão exigem cuidado redobrado. O texto sobre <a href="/artigos/agentes-de-ia-comprando-por-voce-comercio">agentes de IA comprando por você</a> mostra por que a permissão de pagamento é a mais delicada de todas.</p>

    <p>O terceiro é confundir privacidade com segurança contra fraude. Sua foto e sua voz publicadas em rede social podem virar matéria-prima de golpe, mesmo que você nunca tenha usado IA. O guia sobre <a href="/artigos/deepfakes-ia-identificar-conteudo-falso-proteger-reputacao">deepfakes e como proteger sua reputação</a> trata desse lado. E o quarto erro é o clássico de quem está começando: colar tudo, aceitar tudo e nunca voltar ao menu de configurações, um dos <a href="/artigos/5-erros-comuns-de-quem-esta-comecando-a-usar-ia">5 erros comuns de quem está começando a usar IA</a>.</p>

    <h2>Quando não usar IA de jeito nenhum</h2>

    <p>Há situações em que a resposta certa é não enviar, mesmo com tudo configurado. Dados de saúde de terceiros, informação de menores, processo judicial sob sigilo, segredo industrial de cliente com cláusula de confidencialidade e qualquer senha ou chave de acesso. Nesses casos, ou a empresa contrata um plano corporativo com contrato de tratamento de dados assinado, ou o trabalho é feito sem IA.</p>

    <p>Isso não é paranoia. Uma <a href="/noticias/pesquisa-reuters-ipsos-73-por-cento-desconfia-ia">pesquisa Reuters/Ipsos de setembro de 2026</a> mostrou que 73% dos americanos acham que as empresas de IA não fazem o suficiente para evitar desastres. A desconfiança é sinal de que a regra de ouro continua valendo: você é responsável pelo que entrega, não a ferramenta.</p>

    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Anote a data em que conferiu cada ajuste de privacidade. As empresas mudam menus e padrões com frequência; reconferir a cada trimestre leva cinco minutos.</p></div>

    <p>Usar IA com consciência é o cuidado que você já tem com e-mail, planilha na nuvem e aplicativo do banco, aplicado a uma ferramenta nova. Configure as chaves, separe as contas, tire o dado real antes de colar. Depois disso, aproveite. Para entender como esse cuidado vai evoluir quando os agentes assumirem mais tarefas, leia <a href="/artigos/como-humanos-e-agentes-de-ia-vao-trabalhar-juntos-no-futuro">como humanos e agentes de IA vão trabalhar juntos</a> e acompanhe a categoria <a href="/categoria/futuro">Futuro do Trabalho</a>.</p>
  `,
  faq: [
    {
      question: "O ChatGPT usa minhas conversas para treinar a IA?",
      answer:
        "Em contas pessoais, o uso das conversas para melhorar o modelo costuma vir ligado por padrão e pode ser desativado na área de controles de dados. Como o caminho exato muda com o tempo, confira na central de ajuda oficial da OpenAI. O chat temporário é uma alternativa para conversas que você não quer no histórico.",
    },
    {
      question: "Como desligar o uso das conversas para treino no Gemini?",
      answer:
        "Na página de Atividade nos apps Gemini, desligue o ajuste Manter atividade. A partir daí, segundo a página oficial do Google, as conversas futuras não aparecem no histórico nem são usadas para treinar os modelos. Você também pode usar o chat temporário e ajustar a exclusão automática para 3, 18 ou 36 meses.",
    },
    {
      question: "A LGPD vale para empresas de IA que ficam fora do Brasil?",
      answer:
        "Sim. A Lei 13.709/2018 se aplica a qualquer tratamento de dados de pessoas localizadas no Brasil, independentemente de onde a empresa está sediada. O artigo 18 garante direitos como acesso, correção, eliminação e revogação do consentimento. Se a empresa não atender ao pedido, a reclamação pode ser levada à ANPD.",
    },
    {
      question: "Posso colar dados de clientes na IA para trabalhar mais rápido?",
      answer:
        "Só em plano de empresa, com contrato que exclua o uso para treino, e mesmo assim com o mínimo necessário. Em conta pessoal, troque nome, CPF, telefone e valores por marcadores antes de colar. Você responde pela LGPD pelos dados de terceiros que envia, e o cliente não autorizou que a informação dele fosse parar num servidor de IA.",
    },
    {
      question: "Chat temporário ou incógnito é realmente privado?",
      answer:
        "Ele não entra no histórico nem no treino, segundo as páginas oficiais do Google e da Anthropic, mas ainda passa pelo servidor da empresa e pode ser retido por um período curto por razões de segurança. Serve para reduzir rastro, não para enviar senha ou dado sigiloso. Para isso, a regra continua sendo não enviar.",
    },
    {
      question: "Pagar o plano Pro melhora a privacidade?",
      answer:
        "Não por padrão. O plano pago individual costuma dar mais uso e recursos, mas a regra de treino continua sendo a da conta pessoal, e é você quem precisa desligar. A diferença de privacidade aparece nos planos de empresa (Team, Enterprise), que trazem contrato e exclusão de treino. Confira as condições na página oficial de cada plano.",
    },
  ],
  quiz: [
    {
      question: "Qual é a atitude mais segura antes de colar um contrato de cliente numa IA de conta pessoal?",
      options: [
        "Pagar o plano Pro para garantir sigilo",
        "Trocar nome, CPF e valores por marcadores como [CLIENTE] e [VALOR]",
        "Usar o navegador em modo anônimo",
      ],
      answer: 1,
      explanation:
        "O plano pago individual não muda a regra de treino e o modo anônimo do navegador não afeta o que o servidor guarda. Retirar o dado real antes de enviar é o que reduz o risco de verdade.",
    },
    {
      question: "Segundo a LGPD, o que você pode exigir de uma empresa que guarda seus dados?",
      options: [
        "Somente que ela responda um e-mail",
        "Acesso, correção, eliminação e revogação do consentimento",
        "Nada, porque a empresa é estrangeira",
      ],
      answer: 1,
      explanation:
        "O artigo 18 da Lei 13.709/2018 lista esses direitos, e a lei vale para qualquer empresa que trate dados de pessoas no Brasil, mesmo com sede no exterior.",
    },
  ],
};
