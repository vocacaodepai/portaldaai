import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "resumo-de-reuniao-no-google-chat-quem-tem-como-funciona-e-limites",
  title: "Resumo de reunião no Google Chat: quem tem, como funciona",
  seoTitle: "Resumo de reunião no Google Chat: quem tem e limites",
  excerpt:
    "Resumo de reunião no Google Chat: o cartão com decisões, tarefas e links das notas do Gemini no Meet. Veja quem tem, como aparece e o que o admin controla.",
  metaDescription:
    "Entenda o resumo de reunião no Google Chat (meeting recaps): requisitos, planos com acesso, datas de lançamento, controles do administrador e cuidados com privacidade.",
  category: "ferramentas",
  date: "2026-10-24",
  readTime: 7,
  imageQuery: "video call team notes laptop kitchen table",
  seed: 635,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O Google Chat passou a postar sozinho, no espaço ligado à reunião, um cartão com resumo, decisões, tarefas com responsável e links para as notas, a gravação e a transcrição.",
    "O cartão só aparece se o recurso Fazer anotações para mim (Take notes for me) estiver ativo no Google Meet e se existir uma conversa do Chat associada à reunião.",
    "Segundo o Google, o recurso vem ligado por padrão para organizações com Gemini para Workspace, não tem configuração para o usuário comum e não é postado quando o anfitrião envia as notas só para anfitriões e coanfitriões.",
  ],
  content: `
    <p>O resumo de reunião no Google Chat (meeting recaps, no nome em inglês) é um cartão que o Chat publica sozinho, na conversa ligada à chamada, assim que a reunião do Google Meet termina. Ele traz um resumo curto, as decisões, as tarefas com responsável e links para as notas do Gemini, a gravação e a transcrição.</p>
    <p>A novidade resolve um problema conhecido de quem trabalha em equipe: a reunião acaba, o documento de notas fica perdido no Drive e ninguém lembra quem ficou de fazer o quê. Este guia explica, com base no anúncio oficial do Workspace Updates (conferido em 24/10/2026), quem tem o recurso, como ele funciona, o que o administrador controla e como aproveitar numa equipe pequena.</p>

    <h2>O que é o resumo de reunião no Google Chat?</h2>
    <p>No <a href="https://workspaceupdates.googleblog.com/2026/10/follow-through-on-your-meeting-tasks-with-meeting-recaps-in-Google-Chat.html" target="_blank" rel="noopener noreferrer">anúncio de 19/10/2026</a>, o Google descreve o recurso como uma forma de levar a equipe do planejamento à ação. O cartão de resumo aparece no espaço do Chat associado à reunião e reúne quatro blocos:</p>
    <ul>
      <li><strong>Resumo da reunião:</strong> visão geral dos principais assuntos discutidos e das conclusões.</li>
      <li><strong>Links diretos:</strong> acesso com um clique ao documento de notas do Gemini, à gravação e à transcrição.</li>
      <li><strong>Decisões:</strong> as conclusões e os acordos firmados na chamada.</li>
      <li><strong>Tarefas:</strong> próximos passos com responsáveis definidos, para que cada pessoa saiba o que é dela.</li>
    </ul>
    <p>Quem entrou atrasado ou faltou consegue se atualizar sem ler uma transcrição inteira. Isso complementa o que o <a href="/artigos/ia-para-reunioes-transcricao-resumo-ata-automatica">guia de transcrição, resumo e ata automática</a> já mostra para quem usa outras ferramentas de reunião.</p>

    <h2>O que precisa estar ligado para o cartão aparecer</h2>
    <p>O recurso depende de duas condições, e ambas precisam existir ao mesmo tempo. A primeira: o Fazer anotações para mim (Take notes for me) precisa estar ativo durante a chamada do Meet. A segunda: precisa existir uma conversa do Chat associada àquela reunião. Sem uma das duas, nada é postado.</p>
    <p>A <a href="https://support.google.com/meet/answer/14754931" target="_blank" rel="noopener noreferrer">página de ajuda do Meet sobre as anotações</a> informa que o recurso exige uma edição elegível do Google Workspace ou um plano de IA do Google, que ele funciona com um idioma por vez e que, com o gerenciamento de anfitrião ligado, só os anfitriões ligam ou desligam as anotações. O administrador também pode exigir consentimento explícito dos participantes antes de recursos como esse.</p>
    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Se o anfitrião configurar Enviar notas para (Send notes to) como "Somente anfitriões e coanfitriões", o cartão de resumo não é postado no chat do grupo. Quem organiza reuniões com clientes deve decidir isso antes de começar.</p></div>

    <h2>Quem tem acesso e quando chega</h2>
    <p>Segundo o Google, a disponibilidade vale para Business Standard e Business Plus, Enterprise Standard e Enterprise Plus, além do Frontline Plus. Domínios no canal Rapid Release começaram a receber o recurso de forma gradual em 16/10/2026, com até 15 dias para todos verem. Domínios no canal Scheduled Release começam em 27/10/2026, também com até 15 dias.</p>
    <table>
      <thead>
        <tr><th>Item</th><th>O que o Google informou</th></tr>
      </thead>
      <tbody>
        <tr><td>Planos</td><td>Business Standard e Plus; Enterprise Standard e Plus; Frontline Plus</td></tr>
        <tr><td>Rapid Release</td><td>Início em 16/10/2026, gradual</td></tr>
        <tr><td>Scheduled Release</td><td>Início em 27/10/2026, gradual</td></tr>
        <tr><td>Padrão para organizações</td><td>Ligado, se houver Gemini para Workspace</td></tr>
        <tr><td>Configuração do usuário</td><td>Não existe</td></tr>
      </tbody>
    </table>
    <p>Conta pessoal gratuita não aparece na lista. Para quem usa o Gemini fora do Workspace de empresa, o guia dos <a href="/artigos/google-ai-plus-pro-ou-ultra-qual-plano-do-gemini-escolher">planos Google AI Plus, Pro e Ultra</a> ajuda a entender o que cada assinatura inclui.</p>

    <h2>Como o cartão aparece no dia a dia</h2>
    <p>O usuário comum não precisa fazer nada depois da reunião. O cartão chega ao espaço do Chat associado, e o Google diz que ele é entregue em silêncio: a conversa não fica em negrito e não ganha o aviso de não lida no menu. A ideia é não atrapalhar quem já saiu da chamada e voltou a outro trabalho.</p>
    <h3>Apagar um cartão</h3>
    <p>Qualquer participante da conversa pode apagar o cartão em Mais opções (os três pontos) e depois Excluir. Segundo o Google, apagar o cartão tira o resumo do chat, mas o documento de notas continua guardado no Google Drive. Ou seja, o risco de perder o registro é pequeno, e o risco de expor um resumo errado ou delicado fica sob controle de quem participa.</p>
    <h3>Um exemplo de uso</h3>
    <p>Imagine uma clínica de fisioterapia com seis pessoas e plano Business Standard (cenário hipotético). Toda segunda-feira, às 8h30, a coordenadora faz uma reunião de 20 minutos pelo Meet com as anotações ligadas. Ao terminar, o espaço "Equipe Clínica" recebe o cartão: decisões sobre a agenda da semana e três tarefas, cada uma com um nome. Na terça, quem faltou abre o cartão, lê em dois minutos e abre as notas só se precisar do detalhe. O ganho é de organização, não de mágica: se a reunião foi confusa, o resumo também será.</p>

    <h2>Controles do administrador e privacidade</h2>
    <p>Para administradores, o Google diz que o recurso vem ligado por padrão em organizações com Gemini para Google Workspace e que respeita as políticas existentes de Fazer anotações para mim e do Gemini. Na prática, quem já bloqueou as anotações para um grupo de usuários não terá cartão para esse grupo.</p>
    <p>Três cuidados valem antes de ligar sem pensar. O primeiro é avisar a equipe e os convidados externos de que a reunião é gravada e resumida, algo que o <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">checklist de LGPD para pequenos negócios</a> trata com mais calma. O segundo é definir o que não entra em reunião com anotações, como dados de saúde, salários e negociações sigilosas, tema do guia sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">privacidade e IA</a>. O terceiro é lembrar que o resumo é feito por IA e pode errar nomes, prazos e responsáveis, o que o texto sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a> explica bem.</p>

    <h2>Como combinar com o resto do Workspace</h2>
    <p>O cartão vira mais útil quando se encaixa em uma rotina. O <a href="/artigos/ask-gemini-no-google-chat-o-que-faz-quem-tem-e-limites">Ask Gemini no Google Chat</a> permite perguntar sobre conversas e arquivos, e o <a href="/artigos/traducao-de-fala-no-google-meet-63-idiomas-quem-tem-e-limites">recurso de tradução de fala no Meet</a> ajuda quando há participantes que falam outro idioma. Para tarefas repetidas depois da reunião, como mandar um e-mail de acompanhamento, os <a href="/artigos/agentes-no-workspace-studio-servico-de-automacao-para-pequenas-empresas">agentes do Workspace Studio</a> podem entrar.</p>
    <p>Quem já usa notebooks para organizar material também pode juntar as notas da reunião ao <a href="/artigos/gemini-notebook-no-app-gemini-como-criar-e-consultar-cadernos-por-conversa">Gemini Notebook no app Gemini</a>, perguntando ao caderno o que foi decidido em várias reuniões do mesmo projeto. E se a sua empresa usa o ecossistema da Microsoft, o <a href="/artigos/copilot-cowork-o-que-e-quem-pode-usar-e-quanto-custa">Copilot Cowork</a> é o caminho paralelo.</p>

    <h2>Prompt para conferir o resumo antes de cobrar alguém</h2>
    <p>Como o cartão é gerado por IA, confira antes de cobrar tarefas. Um jeito simples é colar o texto do cartão no Gemini, junto com suas anotações pessoais, e pedir uma checagem:</p>
    <pre><code>Compare o resumo da reunião abaixo com as minhas anotações. Liste (1) decisões que aparecem só em um dos dois textos, (2) tarefas sem responsável ou sem prazo e (3) qualquer nome ou data que pareça trocado. Não invente nada que não esteja nos textos.</code></pre>
    <pre><code>Reescreva as tarefas do resumo em uma lista com três colunas: tarefa, responsável e prazo sugerido. Marque com (confirmar) tudo o que o texto não deixa claro.</code></pre>
    <p>Essa checagem leva poucos minutos e evita o clássico "eu nunca disse que faria isso". Para reuniões longas, vale também anotar à mão o que foi dito sobre números, valores e prazos.</p>

    <h2>Erros comuns ao adotar o recurso</h2>
    <ul class="checklist">
      <li><strong>Achar que todo mundo tem.</strong> O acesso depende de plano, de o Gemini estar ligado na organização e do canal de lançamento do domínio.</li>
      <li><strong>Esquecer de ligar as anotações.</strong> Sem Fazer anotações para mim ativo na chamada, não existe cartão.</li>
      <li><strong>Mandar as notas só para anfitriões.</strong> Nesse caso o cartão não é postado no chat do grupo.</li>
      <li><strong>Tratar o resumo como ata oficial.</strong> Para decisões com valor jurídico ou financeiro, confirme por escrito com os envolvidos.</li>
      <li><strong>Deixar tarefa sem dono.</strong> Se o cartão trouxe uma tarefa sem responsável, atribua uma pessoa no mesmo dia.</li>
    </ul>

    <h2>Vale a pena ligar na sua equipe?</h2>
    <p>Para equipes que se reúnem toda semana e perdem tempo cobrando "o que ficou combinado", o recurso tende a compensar, porque o resumo chega no lugar onde a conversa já acontece. Para reuniões com muita informação sensível, o melhor é começar com um grupo pequeno e testar por duas semanas. Anote quantas tarefas do cartão foram feitas no prazo e quantas precisaram de correção.</p>
    <p>Para um serviço pago a partir disso, o texto sobre <a href="/artigos/ata-de-reuniao-como-servico-resumo-tarefas-e-envio-automatico-com-ia">ata de reunião como serviço</a> mostra como montar o pacote. E para acompanhar as próximas novidades do Google e de outras plataformas, passe pela categoria de <a href="/categoria/ferramentas">ferramentas de IA</a> do Portal da AI.</p>
  `,
  faq: [
    {
      question: "O que é o resumo de reunião no Google Chat?",
      answer:
        "É um cartão que o Google Chat posta sozinho no espaço associado à reunião do Meet, com resumo, decisões, tarefas com responsáveis e links para as notas do Gemini, a gravação e a transcrição. Ele ajuda quem faltou ou entrou atrasado a se atualizar rapidamente.",
    },
    {
      question: "Como ativar o resumo de reunião no Chat?",
      answer:
        "O usuário não tem configuração própria. Segundo o Google, o cartão aparece sozinho quando Fazer anotações para mim está ativo no Meet e existe uma conversa do Chat associada. Para administradores, o recurso vem ligado por padrão em organizações com Gemini para Workspace.",
    },
    {
      question: "Quem tem direito ao resumo de reunião no Google Chat?",
      answer:
        "Pelo anúncio de 19/10/2026: Business Standard e Plus, Enterprise Standard e Plus e Frontline Plus. O lançamento é gradual: domínios Rapid Release começaram em 16/10/2026 e domínios Scheduled Release começam em 27/10/2026, com até 15 dias para todos verem.",
    },
    {
      question: "Por que o cartão de resumo não apareceu na minha reunião?",
      answer:
        "As causas mais comuns são anotações desligadas na chamada, ausência de conversa do Chat associada, plano sem o recurso, lançamento que ainda não chegou ao seu domínio ou notas enviadas só para anfitriões e coanfitriões, caso em que o cartão não é postado no chat do grupo.",
    },
    {
      question: "Dá para apagar o cartão de resumo do chat?",
      answer:
        "Sim. Qualquer participante da conversa pode abrir Mais opções (três pontos) e escolher Excluir. Segundo o Google, isso remove o resumo do chat, mas o documento de notas original continua salvo no Google Drive.",
    },
  ],
};
