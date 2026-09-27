import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "ia-para-reunioes-transcricao-resumo-ata-automatica",
  title: "IA para reuniões: transcrição, resumo e ata automática",
  seoTitle: "IA para reuniões: transcrição, resumo e ata automática",
  excerpt:
    "Veja como usar IA para reuniões: transcrever no Meet, Teams ou Zoom, gerar resumo e ata automática com responsáveis e prazos, sem ferir a LGPD.",
  metaDescription:
    "IA para reuniões na prática: qual ferramenta escolher, passo a passo da primeira ata automática, prompts prontos e o que a LGPD exige antes de gravar.",
  category: "ferramentas",
  date: "2026-09-23",
  updated: "2026-09-27",
  readTime: 9,
  imageQuery: "meeting transcription notes laptop",
  seed: 74,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "IA para reuniões já vem embutida no Google Meet, no Microsoft Teams e no Zoom, e existe em aplicativos separados como o Otter.ai, com planos gratuitos limitados.",
    "A ata boa nasce de um prompt que separa decisões, ações com responsável e prazo, e pontos em aberto, seguido de revisão humana de nomes e números.",
    "Gravar reunião é tratar dado pessoal: avise todo mundo antes, escolha ferramenta com política de retenção clara e apague a gravação depois da ata.",
  ],
  sources: [
    {
      label: "Google: Fazer anotações para mim no Google Meet (Ajuda do Google Meet)",
      url: "https://support.google.com/meet/answer/14754931",
    },
    {
      label: "Microsoft: Usar o Copilot em reuniões do Microsoft Teams (Suporte da Microsoft)",
      url: "https://support.microsoft.com/en-us/office/use-copilot-in-microsoft-teams-meetings-0bf9dd3c-96f7-44e2-8bb8-790bedf066b1",
    },
    {
      label: "Otter.ai: planos e preços (página oficial)",
      url: "https://otter.ai/pricing",
    },
    {
      label: "ANPD: perguntas frequentes sobre a LGPD (gov.br)",
      url: "https://www.gov.br/anpd/pt-br/acesso-a-informacao/perguntas-frequentes",
    },
  ],
  content: `
    <p>IA para reuniões é o conjunto de ferramentas que grava a conversa, transcreve quem disse o quê, resume os pontos principais e monta a ata com decisões, responsáveis e prazos. Hoje isso já vem embutido no Google Meet, no Microsoft Teams e no Zoom, e também em aplicativos separados, como o Otter.ai, que entram na reunião como mais um participante.</p>

    <p>Este guia mostra qual opção faz sentido em cada caso, o passo a passo da primeira ata automática, os prompts que transformam transcrição bagunçada em documento útil e o que a LGPD exige antes de apertar o botão de gravar. Sem promessa de mágica: a IA erra nome, troca quem falou e precisa de revisão.</p>

    <h2>O que a IA para reuniões faz de verdade?</h2>
    <p>São três produtos diferentes, e confundi-los é o erro mais comum de quem começa. A <strong>transcrição</strong> é o texto literal, com quem falou e em que minuto. Serve para buscar uma frase exata depois e para alimentar a IA; ninguém lê 45 minutos de transcrição inteira.</p>
    <p>O <strong>resumo</strong> é a versão de 10 linhas para quem não participou: assunto, discussão, decisão. A <strong>ata</strong> é o documento de cobrança: cada ação com responsável e data, cada decisão com quem aprovou, cada pendência com data de retorno. O resumo informa; a ata cobra.</p>
    <p>As plataformas de vídeo entregam os três com um clique e qualidade razoável. O ganho real aparece quando você passa a transcrição por um prompt seu, e quem domina o básico de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">como escrever comandos que funcionam</a> tira muito mais disso do que quem aceita o resumo padrão.</p>

    <h2>Meet, Teams, Zoom ou aplicativo separado: qual escolher</h2>
    <p>Regra prática: use o que já vem no plano que a empresa paga. Aplicativo separado só vale quando as reuniões pulam de plataforma (hoje Meet, amanhã o Teams do cliente) ou quando faltam minutos no plano gratuito. Antes de assinar, passe pelo <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist de segurança para escolher ferramenta de IA</a>: gravação de reunião não pode parar em servidor desconhecido.</p>
    <table>
      <thead>
        <tr>
          <th>Ferramenta</th>
          <th>Onde a ata aparece</th>
          <th>Português</th>
          <th>O que é preciso</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Google Meet (Gemini, "Fazer anotações para mim")</td>
          <td>Documento no Google Docs, na pasta Meet do Drive do organizador</td>
          <td>Sim, está na lista oficial de idiomas</td>
          <td>Edição elegível do Workspace ou plano Google AI (consulte a página oficial)</td>
        </tr>
        <tr>
          <td>Microsoft Teams (Copilot)</td>
          <td>Painel do Copilot, com quem disse o quê e itens de ação sugeridos</td>
          <td>Sim</td>
          <td>Licença Copilot (complemento); para usar depois da reunião, transcrição ligada</td>
        </tr>
        <tr>
          <td>Zoom (AI Companion)</td>
          <td>Resumo enviado ao anfitrião, compartilhável por e-mail e chat</td>
          <td>Sim</td>
          <td>Limites variam por plano; consulte a página oficial</td>
        </tr>
        <tr>
          <td>Otter.ai (aplicativo separado)</td>
          <td>Painel próprio com transcrição, resumo e ações</td>
          <td>Confirme antes de assinar</td>
          <td>Basic gratuito com 300 minutos/mês; Pro a US$ 16,99/mês ou US$ 8,33/mês no anual (verificado em 27/09/2026)</td>
        </tr>
      </tbody>
    </table>
    <p>A <a href="https://support.google.com/meet/answer/14754931" rel="noopener noreferrer">página de ajuda do Google Meet</a> confirma que o documento de notas vai para o Drive do organizador logo após a reunião, e a <a href="https://support.microsoft.com/en-us/office/use-copilot-in-microsoft-teams-meetings-0bf9dd3c-96f7-44e2-8bb8-790bedf066b1" rel="noopener noreferrer">documentação do Copilot em reuniões</a> avisa que, sem transcrição ligada, ele funciona só durante a chamada. Os planos do Otter estão na <a href="https://otter.ai/pricing" rel="noopener noreferrer">página de preços oficial</a>; o guia sobre <a href="/artigos/ia-gratis-ou-paga-o-que-vale-a-pena">IA grátis ou paga</a> ajuda a decidir se vale pagar.</p>

    <h2>Passo a passo: da gravação à primeira ata automática</h2>
    <p>O fluxo funciona nas quatro ferramentas; só muda onde fica o botão.</p>
    <ol>
      <li><strong>Avise na pauta.</strong> Escreva no convite: "Esta reunião será gravada e transcrita por IA para gerar a ata; quem preferir não ser gravado, me avise." Repita em voz alta no início.</li>
      <li><strong>Ligue transcrição e notas juntas.</strong> No Meet, ative "Fazer anotações para mim" ao entrar. No Teams, inicie a transcrição antes de abrir o Copilot. No Zoom, ative o resumo do AI Companion como anfitrião.</li>
      <li><strong>Fale os nomes.</strong> "Então, Carla, você fecha o orçamento até sexta?" vira ação com responsável e prazo sem esforço.</li>
      <li><strong>Feche com um resumo verbal.</strong> Os últimos dois minutos ("ficou combinado que...") são o trecho que a IA mais aproveita.</li>
      <li><strong>Passe a transcrição pelo seu prompt.</strong> Cole o texto no ChatGPT, no Gemini ou no Claude com um dos modelos da próxima seção. Em reuniões longas, o <a href="/artigos/perplexity-notebooklm-ia-de-pesquisa-estudar-mais-rapido">NotebookLM</a> aceita a transcrição como fonte e responde perguntas sobre ela.</li>
      <li><strong>Revise e envie.</strong> Confira nomes, números e datas, envie a ata e jogue as ações no gerenciador de tarefas; o guia de <a href="/artigos/notion-zapier-e-ia-automatize-seu-negocio-sem-programar">Notion, Zapier e IA</a> mostra como automatizar essa parte.</li>
    </ol>
    <div class="callout-box callout-tip">
      <span class="callout-label">Dica</span>
      <p>Comece pela reunião de alinhamento semanal: é recorrente, tem as mesmas pessoas e gera o histórico mais útil. Em três semanas você sabe se a ferramenta acerta os nomes do time.</p>
    </div>

    <h2>Prompts que transformam transcrição em ata útil</h2>
    <p>O resumo automático das plataformas é genérico de propósito. Estes três prompts entregam o formato que você vai usar de fato; cole a transcrição no lugar indicado.</p>
    <p><strong>Ata em três blocos</strong> (serve para quase toda reunião interna):</p>
    <pre><code>Você é secretário de reunião. Escreva a ata da transcrição abaixo em três blocos:
1) Decisões tomadas (uma frase cada, com quem aprovou).
2) Ações pendentes: tabela com ação, responsável e prazo (sem prazo dito, escreva "a definir").
3) Pontos em aberto para a próxima reunião.
Não invente nada. Nome ambíguo, marque com [confirmar].
Transcrição:
[cole aqui]</code></pre>
    <p><strong>Resumo para quem não participou</strong> (para o chefe ou o cliente):</p>
    <pre><code>Resuma a reunião abaixo em no máximo 8 linhas para quem não participou e tem 1 minuto. Comece pelo que ficou decidido, depois o contexto, depois o que se espera dessa pessoa. Tom direto, sem adjetivos. Transcrição:
[cole aqui]</code></pre>
    <p><strong>Auditoria de compromissos</strong> (para a reunião seguinte):</p>
    <pre><code>Compare a ata anterior com a transcrição de hoje. Liste cada ação da ata e classifique como concluída, em andamento ou não mencionada, citando o trecho que justifica. Ata anterior:
[cole aqui]
Transcrição de hoje:
[cole aqui]</code></pre>
    <p>O terceiro prompt impede a reunião de virar repetição da anterior. Quem quer cobrar entregas de cliente sem parecer chato encontra a mesma lógica no guia de <a href="/artigos/como-usar-ia-para-melhorar-onboarding-de-clientes">onboarding de clientes com IA</a>.</p>

    <h2>Exemplo brasileiro: escritório de contabilidade com seis pessoas</h2>
    <p>Imagine um escritório contábil em Curitiba, com dois sócios e quatro analistas, que faz quatro reuniões de cliente por semana, de 45 minutos, pelo Google Meet. O sócio que conduz gasta uns 20 minutos depois de cada uma redigindo o e-mail de "o que ficou combinado": 80 minutos por semana, mais de 5 horas por mês, do profissional mais caro da casa.</p>
    <p>O escritório já paga o Google Workspace (o valor varia por edição; consulte a página oficial). Ativa as notas com Gemini, avisa os clientes no convite e passa a transcrição pelo prompt de ata em três blocos. Sobra a revisão de nomes e valores, uns 5 minutos por reunião: o tempo cai de 80 para 20 minutos semanais e o e-mail sai no mesmo dia, com ações e prazos.</p>
    <p>Sem Workspace pago, o caminho seria o Otter.ai Pro anual, abaixo de US$ 10 por mês por usuário (verificado em 27/09/2026). A conta fecha em qualquer cenário: a hora do sócio vale mais do que a assinatura, e as horas liberadas seguem a lógica de <a href="/artigos/como-usar-ia-para-trabalhar-menos-horas-sem-perder-renda">trabalhar menos horas sem perder renda</a>: redação vira atendimento.</p>
    <p>Um cuidado: reunião contábil é cheia de CNPJ, valor de folha e informação fiscal, e pede as mesmas precauções de quem usa IA para <a href="/artigos/ia-para-contratos-revisar-documentos-juridicos-mais-rapido">revisar contratos e documentos jurídicos</a>: política de dados clara e gravação apagada depois da ata.</p>

    <h2>LGPD e consentimento: o que fazer antes de gravar</h2>
    <p>Voz é dado pessoal. A <a href="https://www.gov.br/anpd/pt-br/acesso-a-informacao/perguntas-frequentes" rel="noopener noreferrer">página de perguntas frequentes da ANPD</a> explica que dado pessoal é qualquer informação relacionada a pessoa identificada ou identificável, e que o tratamento precisa de uma base legal, como o consentimento ou o legítimo interesse. Numa empresa pequena, o caminho seguro tem quatro partes.</p>
    <ul class="checklist">
      <li>Aviso escrito no convite e verbal no início, com a opção de a pessoa pedir para não ser gravada.</li>
      <li>Política de privacidade que diga onde a gravação fica, por quanto tempo e se o áudio treina modelos.</li>
      <li>Gravação e transcrição apagadas depois que a ata foi revisada e enviada, salvo exigência contratual.</li>
      <li>Ata compartilhada só com quem precisa; transcrição bruta nunca circula fora do time.</li>
    </ul>
    <p>Com cliente, pergunte se ele concorda, de preferência por escrito, e ofereça anotar à mão. O artigo sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">o que você entrega sem perceber ao usar IA</a> mostra por que uma transcrição guarda mais do que parece: nomes de terceiros, valores, endereços e opiniões.</p>
    <div class="callout-box callout-warn">
      <span class="callout-label">Atenção</span>
      <p>Aplicativo que entra na reunião como participante (o robô do Otter e similares) aparece na lista de presença. Se você não avisou, o cliente descobre sozinho, e a conversa sobre confiança começa errada.</p>
    </div>

    <h2>Erros comuns e quando não usar</h2>
    <p>Estes problemas aparecem em quase todo time que adota IA para reuniões; nenhum é motivo para desistir, todos pedem revisão.</p>
    <ul>
      <li><strong>Confiar em nome e número sem conferir.</strong> A IA troca "Renata" por "Renato" e "15 mil" por "50 mil" sem piscar. Ata que vai para o cliente pede leitura humana.</li>
      <li><strong>Reunião com todo mundo falando junto.</strong> A transcrição vira sopa e a ata atribui decisões a quem não as tomou. Quem conduz precisa organizar a fala.</li>
      <li><strong>Mandar a transcrição bruta em vez da ata.</strong> Ninguém lê 12 páginas; envie o resumo e arquive a transcrição.</li>
      <li><strong>Gravar entrevista de emprego sem consentimento explícito.</strong> Candidato é a pessoa mais vulnerável da sala; o guia de <a href="/artigos/como-usar-ia-para-melhorar-contratacao-pequenas-empresas">IA na contratação em pequenas empresas</a> mostra onde a IA ajuda sem passar por cima disso.</li>
      <li><strong>Deixar o robô entrar em toda reunião automaticamente.</strong> A integração com a agenda é prática, mas coloca gravador em conversa que não deveria ter.</li>
    </ul>
    <p>Quando não usar: feedback difícil, demissão, negociação salarial, tema de saúde e qualquer reunião em que alguém pediu para não ser gravado. Anote à mão os combinados e pronto. Ata automática é para reunião de trabalho recorrente, não para conversa em que a confiança é o assunto.</p>
    <div class="callout-box callout-bad">
      <span class="callout-label">Nunca faça</span>
      <p>Nunca use ferramenta gratuita desconhecida em reunião com contrato, dado financeiro ou informação estratégica sem ler a política de privacidade. O "grátis" costuma ser pago com o seu áudio.</p>
    </div>

    <h2>Depois da ata: automação e acompanhamento</h2>
    <p>A ata pronta é o começo do ciclo. Com as ações em tabela, você as joga numa planilha de acompanhamento e cruza o prometido com o entregue; o guia de <a href="/artigos/ia-para-planilhas-automatizar-relatorios-excel-sheets">IA para planilhas</a> mostra como montar esse controle. Se a reunião era de resultado ou projeto, o mesmo resumo vira base para <a href="/artigos/como-criar-apresentacoes-e-slides-profissionais-com-ia">slides de apresentação</a> em minutos.</p>
    <p>As plataformas estão puxando esse ciclo para dentro delas: a Microsoft <a href="/noticias/microsoft-relanca-copilot-super-app-agentes-autopilot">relançou o Copilot como um super app com agentes</a> que acompanham tarefas depois da reunião. Vale conhecer, mas quem decide o que entra na ata e para quem ela vai é você, não o agente.</p>
    <p>Para virar rotina, encaixe a reunião num fluxo maior de <a href="/artigos/automacao-com-ia-economize-horas-de-trabalho">automação com IA para economizar horas de trabalho</a>: gravação, ata, tarefa criada e lembrete de prazo, sem ninguém copiar e colar. Comece pela reunião semanal e meça quantos minutos de redação sumiram.</p>
  `,
  faq: [
    {
      question: "IA para reuniões funciona em português?",
      answer:
        "Sim, nas principais plataformas. A página oficial do Google Meet lista o português entre os idiomas do recurso de anotações com Gemini, e o Copilot do Teams e o AI Companion do Zoom também trabalham em português. Em aplicativos separados, como o Otter.ai, confirme o suporte ao idioma na página oficial antes de assinar, porque nem todos transcrevem português com a mesma qualidade.",
    },
    {
      question: "Preciso avisar que a reunião será gravada e transcrita por IA?",
      answer:
        "Precisa. Voz e fala são dados pessoais e a LGPD exige uma base legal para o tratamento, sendo o consentimento a mais simples de aplicar numa empresa pequena. Escreva o aviso no convite, repita no início da reunião e ofereça a opção de a pessoa não ser gravada. Com cliente, peça a concordância por escrito.",
    },
    {
      question: "Qual a diferença entre transcrição, resumo e ata de reunião?",
      answer:
        "A transcrição é o texto literal, com quem falou e quando, útil para buscar frases exatas. O resumo tem 8 a 10 linhas e serve para quem não participou. A ata é o documento de cobrança, com decisões, ações, responsável e prazo. A IA gera os três, mas a ata só fica boa com um prompt específico e revisão humana.",
    },
    {
      question: "Ata automática de reunião é gratuita?",
      answer:
        "Depende do que você já paga. No Google Meet e no Teams, o recurso vem com edições ou licenças específicas do Workspace e do Microsoft 365, então confira o seu plano. O Otter.ai tem plano Basic gratuito com 300 minutos por mês (verificado em 27/09/2026), suficiente para testar em reuniões curtas antes de assinar o Pro.",
    },
    {
      question: "A IA erra muito na transcrição de reunião?",
      answer:
        "Erra em pontos previsíveis: nomes parecidos, números falados rápido, siglas e momentos em que várias pessoas falam juntas. Por isso a ata precisa de conferência antes de ir para o cliente. Falar os nomes em voz alta, organizar a fala e fechar a reunião com um resumo verbal reduzem bastante os erros.",
    },
    {
      question: "Quando não usar IA para gravar uma reunião?",
      answer:
        "Em conversas de feedback difícil, demissão, negociação salarial, temas de saúde e sempre que alguém pedir para não ser gravado. Também evite ferramentas gratuitas desconhecidas em reuniões com contrato, dado financeiro ou informação estratégica sem ler a política de privacidade. Nesses casos, anote à mão os combinados.",
    },
  ],
  quiz: [
    {
      question: "Qual é a divisão recomendada para uma ata de reunião gerada por IA?",
      options: [
        "Só a transcrição completa",
        "Decisões tomadas, ações com responsável e prazo, e pontos em aberto",
        "Apenas a lista de quem participou",
        "Só a duração da reunião",
      ],
      answer: 1,
      explanation:
        "Separar a ata em decisões, ações com responsável e prazo, e pontos em aberto facilita a leitura de quem não participou e transforma o documento em ferramenta de cobrança.",
    },
    {
      question: "O que verificar antes de usar uma ferramenta de transcrição em reunião com dado sensível?",
      options: [
        "O preço da ferramenta",
        "A política de privacidade e o que acontece com a gravação depois da ata",
        "Se a ferramenta é conhecida no mercado de games",
        "A cor da interface do aplicativo",
      ],
      answer: 1,
      explanation:
        "Gravação de reunião é dado pessoal. Antes de usar em reunião sensível, confira onde a gravação fica, por quanto tempo e se pode ser apagada depois que a ata foi enviada.",
    },
  ],
};
