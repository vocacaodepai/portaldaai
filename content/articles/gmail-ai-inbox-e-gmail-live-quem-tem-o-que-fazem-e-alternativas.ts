import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "gmail-ai-inbox-e-gmail-live-quem-tem-o-que-fazem-e-alternativas",
  title: "Gmail AI Inbox e Gmail Live: quem tem acesso e o que fazem",
  seoTitle: "Gmail AI Inbox e Gmail Live: acesso e o que fazem",
  excerpt:
    "Gmail AI Inbox lista tarefas e prazos do e-mail e o Gmail Live responde por voz. Veja quem tem acesso, por que só vale nos EUA e o que usar no Brasil.",
  metaDescription:
    "Gmail AI Inbox e Gmail Live: o que cada um faz, planos e datas confirmados pelo Google, a restrição ao inglês dos EUA e o que usar no Brasil por enquanto.",
  category: "ferramentas",
  date: "2026-10-18",
  readTime: 7,
  imageQuery: "person reading email laptop morning",
  seed: 397,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O Gmail AI Inbox extrai tarefas, entregas e prazos dos seus e-mails e resume conversas longas; começou a chegar em 12/10/2026 a contas pagas do Workspace.",
    "O Gmail Live é uma busca por voz no app de celular que responde com base na sua caixa de entrada e mostra de quais e-mails tirou cada resposta.",
    "Os dois, por enquanto, só aparecem para usuários nos Estados Unidos com o idioma em inglês (EUA): no Brasil, o caminho é o Gemini no Gmail e a pesquisa normal.",
  ],
  content: `
    <p>O Gmail AI Inbox é um espaço dentro do Gmail que usa a IA do Google para transformar e-mails em uma lista de tarefas sugeridas, com entregas e prazos, e para resumir conversas longas. Em 15 de outubro de 2026 o Google anunciou a chegada dele a contas pagas do Workspace, junto com o Gmail Live, uma busca por voz que responde perguntas sobre a sua caixa de entrada.</p>

    <p>A parte que muita gente vai perder na manchete: os dois recursos estão, por enquanto, restritos a usuários nos Estados Unidos com o idioma em inglês (EUA). Neste guia você vê o que cada um faz, quem tem acesso, o que o Google não explicou e o que dá para fazer hoje, no Brasil, para chegar perto do mesmo resultado.</p>

    <h2>O que é o Gmail AI Inbox</h2>

    <p>Segundo o <a href="https://workspaceupdates.googleblog.com/2026/10/gmails-ai-inbox-is-rolling-out-to-paid-Workspace-users.html" target="_blank" rel="noopener noreferrer">anúncio oficial no blog de atualizações do Workspace</a>, o AI Inbox ajuda o usuário a se atualizar sobre o trabalho prioritário. Ele faz duas coisas. A primeira são as tarefas sugeridas: o Gmail lê as conversas e puxa ações, entregas e prazos que parecem pendentes. A segunda é a área "Topics to catch up on", que resume os principais assuntos de conversas com muitas mensagens, incluindo decisões recentes e mudanças de status.</p>

    <p>Na prática, é o que um assistente faria ao ler a sua caixa de entrada antes de você: em vez de abrir 40 e-mails para descobrir que o fornecedor pediu uma resposta até sexta, você vê a tarefa pronta. Para abrir, o Google diz que o usuário elegível encontra o AI Inbox no menu do Gmail no computador ou no aplicativo do celular.</p>

    <h3>O que ele não é</h3>

    <p>O AI Inbox não responde e-mails sozinho nem executa a tarefa. Ele sugere. A decisão de aceitar, ignorar ou corrigir continua com você, e uma sugestão pode estar errada: IA que lê texto pode confundir um prazo citado de passagem com um prazo seu. Trate a lista como rascunho e confira no e-mail de origem antes de agir, o mesmo cuidado do guia sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">como checar se a resposta da IA está certa</a>.</p>

    <h2>O que é o Gmail Live</h2>

    <p>O <a href="https://workspaceupdates.googleblog.com/2026/10/gmail-live-is-rolling-out-to-paid-Workspace-users.html" target="_blank" rel="noopener noreferrer">Gmail Live</a> é uma experiência de busca por voz nos apps de Gmail para Android e iOS. Você toca na entrada "Live" da barra de pesquisa, fala uma pergunta, como o status de um pedido ou o portão de embarque de um voo, e o Gemini responde em voz alta com base nos seus e-mails. Cada resposta traz um cartão com os e-mails usados, para você conferir a origem. Na primeira vez, o app pede permissão para usar o microfone, e dá para escolher a voz.</p>

    <p>É a mesma ideia dos <a href="/artigos/assistente-de-voz-com-ia-como-usar-no-dia-a-dia">assistentes de voz com IA do dia a dia</a>, mas ligada ao seu conteúdo pessoal, e não à internet. Esse é o motivo de a pergunta de privacidade pesar mais aqui do que num assistente comum, tema que o texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">privacidade e IA</a> detalha.</p>

    <h2>Quem tem acesso: planos, datas e idioma</h2>

    <p>Os dois anúncios trazem listas de edições diferentes. A tabela resume o que o Google confirmou em 15/10/2026.</p>

    <table>
      <thead>
        <tr><th>Item</th><th>Gmail AI Inbox</th><th>Gmail Live</th></tr>
      </thead>
      <tbody>
        <tr><td>Onde roda</td><td>Gmail no computador e no app</td><td>Apps de Gmail para Android e iOS</td></tr>
        <tr><td>Quem recebe</td><td>Business e Enterprise (Starter, Standard, Plus), Frontline Plus e AI Pro for Education</td><td>Mesmas edições Workspace, mais complementos Gemini e os planos de consumidor Google AI Plus, Pro e Ultra</td></tr>
        <tr><td>Início</td><td>12/10 (Rapid Release) e 26/10 (Scheduled Release)</td><td>15/10, nos dois tipos de domínio</td></tr>
        <tr><td>Chegada ao usuário</td><td>Gradual, até 15 dias</td><td>Gradual, até 15 dias</td></tr>
        <tr><td>Controle do administrador</td><td>Nenhum</td><td>Ligado por padrão onde há Gemini; respeita configurações de recursos inteligentes</td></tr>
        <tr><td>Idioma e país</td><td>Inglês (EUA), usuários nos EUA</td><td>Inglês (EUA), usuários nos EUA</td></tr>
      </tbody>
    </table>

    <p>Um detalhe: o post do AI Inbox diz que as edições Starter e Education receberiam o recurso "nos próximos meses", mas a lista de disponibilidade inclui Starter. Como o texto do Google tem essa inconsistência, não prometa a data a ninguém e confira a sua conta.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>O Google não publicou data para português do Brasil. Se o seu Gmail não mostra os recursos, não é erro de configuração: eles ainda não foram liberados para o seu idioma e país.</p></div>

    <h2>Por que isso importa para o pequeno negócio</h2>

    <p>Quem toca uma loja ou presta serviço recebe pedido, boleto, orçamento e reclamação na mesma caixa. Um recurso que lista pendências com prazo ajuda a não deixar um orçamento morrer por esquecimento, a mesma dor que aparece em <a href="/artigos/ia-para-orcamentos-e-cotacoes-responder-clientes-rapido">responder orçamentos e cotações rápido</a>. Já o Gmail Live é útil para quem está na rua e quer saber, sem digitar, qual foi o último valor combinado com um cliente.</p>

    <p>A pergunta que cada dono de negócio precisa fazer antes de ligar qualquer IA no e-mail é o que há na caixa: dados de clientes, documentos, CPF. O <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">checklist de LGPD para quem usa IA</a> ajuda a decidir o que pode ser lido por uma ferramenta e o que deve ficar de fora.</p>

    <h2>O que fazer no Brasil enquanto não chega</h2>

    <p>Dá para chegar perto do resultado com o que já existe. Veja três caminhos, do mais simples ao mais trabalhoso.</p>

    <h3>1. Gemini dentro do Gmail</h3>

    <p>Se a sua conta tem Gemini no Gmail, peça resumos de conversas e rascunhos de resposta. O guia de <a href="/artigos/gemini-no-gmail-escrever-e-responder-emails-mais-rapido">Gemini no Gmail</a> mostra o passo a passo. Um prompt útil para a manhã:</p>

    <pre><code>Resuma os e-mails não lidos desta semana em uma lista: assunto, o que pedem de mim e prazo, se houver. Marque os que exigem resposta hoje.</code></pre>

    <h3>2. Marcadores e filtros do próprio Gmail</h3>

    <p>Crie marcadores como "Responder hoje" e "Aguardando cliente" e use filtros por remetente. Não tem IA, mas é a base que faz qualquer automação funcionar depois, e funciona em português hoje.</p>

    <h3>3. Automação própria</h3>

    <p>Quem sabe um pouco de planilha pode montar uma rotina que lista e-mails com a palavra "prazo" em uma aba. O texto sobre <a href="/artigos/google-apps-script-com-ia-servico-de-automacao-para-sheets-e-gmail">Google Apps Script com IA para Sheets e Gmail</a> explica o caminho. Para organizar a rotina em torno disso, veja <a href="/artigos/como-usar-ia-para-criar-rotina-diaria-produtiva">como criar uma rotina diária produtiva com IA</a>.</p>

    <h2>Como decidir se vale ligar a IA na sua caixa de entrada</h2>

    <p>Antes de ativar qualquer recurso que leia seus e-mails, faça três perguntas. A primeira: o que há de sensível na caixa? Contratos, dados de saúde, documentos de clientes e senhas enviadas por engano pedem mais cuidado. A segunda: quem mais tem acesso à conta? Em contas compartilhadas, um recurso de voz pode revelar informação a quem estiver por perto. A terceira: o ganho compensa o risco? Para quem recebe poucos e-mails por dia, a lista de tarefas pouco muda a rotina; para quem recebe centenas, pode poupar bastante tempo.</p>

    <p>Uma boa prática é testar por uma semana, anotar quantas sugestões estavam certas e só então decidir se continua. Se o recurso errar prazos com frequência, o custo de conferir tudo anula o benefício. Num negócio com equipe, combine uma regra simples: a IA sugere, uma pessoa confirma, e nada de pagamento ou resposta a cliente sai sem revisão humana.</p>

    <h2>Riscos e erros comuns</h2>

    <ul class="checklist">
      <li>Confiar na lista de tarefas sem abrir o e-mail original: o prazo pode ser de outra pessoa.</li>
      <li>Ligar a IA numa conta com dados sensíveis sem rever as permissões de recursos inteligentes.</li>
      <li>Ignorar e-mails suspeitos: uma IA que lê a caixa pode ser enganada por texto malicioso, o que o artigo sobre <a href="/artigos/prompt-injection-risco-de-ia-que-le-paginas-e-emails">prompt injection</a> explica.</li>
      <li>Esquecer que golpe por e-mail continua existindo: use o roteiro de <a href="/artigos/como-usar-ia-para-checar-mensagem-suspeita-e-evitar-golpes">checagem de mensagem suspeita</a>.</li>
      <li>Esperar que o recurso resolva sozinho uma caixa desorganizada.</li>
    </ul>

    <h2>Como acompanhar a chegada</h2>

    <p>O Google costuma ampliar idiomas aos poucos. Acompanhe o blog de atualizações do Workspace e as notas de versão do Gemini. Quem quer entender o movimento maior, de assistentes que agem por você, encontra contexto em <a href="/artigos/agente-de-ia-pessoal-gemini-spark-o-que-delegar-e-o-que-nao">agente de IA pessoal Gemini Spark</a> e em <a href="/artigos/gemini-4-argon-e-modo-tarefas-quem-tem-acesso-e-o-que-esperar">Gemini 4 Argon e modo tarefas</a>. Se está em dúvida entre pagar ou não, o texto <a href="/artigos/ia-gratis-ou-paga-o-que-vale-a-pena">IA grátis ou paga</a> ajuda a decidir.</p>

    <p>Enquanto o AI Inbox e o Gmail Live não chegam em português, comece pelo básico: marcadores, filtros e um resumo semanal pelo Gemini. Quando os recursos forem liberados, você já terá a caixa organizada para tirar proveito deles. Para seguir nessa linha, veja mais guias na categoria <a href="/categoria/ferramentas">Ferramentas</a>.</p>
  `,
  faq: [
    {
      question: "O Gmail AI Inbox já funciona no Brasil?",
      answer:
        "Não há confirmação. O Google informa que o recurso está disponível só para usuários nos Estados Unidos com o idioma em inglês (EUA). Não foi divulgada data para português do Brasil, então o recurso pode não aparecer na sua conta mesmo que ela seja paga.",
    },
    {
      question: "O Gmail AI Inbox é grátis?",
      answer:
        "O anúncio trata de contas pagas do Workspace, nas edições Business, Enterprise, Frontline Plus e AI Pro for Education. O post não cita preço. Para contas pessoais gratuitas, não há informação no texto oficial; consulte a página do seu plano.",
    },
    {
      question: "O que é o Gmail Live?",
      answer:
        "É uma busca por voz nos apps de Gmail para Android e iOS. Você fala uma pergunta, o Gemini responde em voz alta com base nos seus e-mails e mostra um cartão com os e-mails usados. No primeiro uso, o app pede permissão para o microfone.",
    },
    {
      question: "O administrador do Workspace pode desligar o AI Inbox?",
      answer:
        "Segundo o Google, não há controle de administrador para o AI Inbox. Já o Gmail Live vem ligado por padrão em organizações com Gemini e respeita as configurações de recursos inteligentes e personalização definidas pelo administrador.",
    },
    {
      question: "Como resumir e-mails com IA enquanto o recurso não chega?",
      answer:
        "Use o Gemini no Gmail, se a sua conta tiver, e peça um resumo dos e-mails não lidos com assunto, pedido e prazo. Complemente com marcadores como Responder hoje. Revise sempre o e-mail original antes de agir sobre uma sugestão da IA.",
    },
  ],
};
