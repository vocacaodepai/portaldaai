import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "copilot-cowork-no-edge-tarefas-em-sites-logados-aprovacoes-e-riscos",
  title: "Copilot Cowork no Edge: tarefas em sites logados e como liberar",
  seoTitle: "Copilot Cowork no Edge: como usar em sites logados",
  excerpt:
    "O Copilot Cowork agora usa o Edge do seu computador para agir em sites onde você já está logado. Veja requisitos, como o admin libera, aprovações e riscos.",
  metaDescription:
    "Copilot Cowork no navegador Edge: o que faz em sites logados, requisitos, versão mínima, como o administrador ativa, quando devolve o controle e cuidados.",
  category: "ferramentas",
  date: "2026-11-10",
  readTime: 8,
  imageQuery: "Microsoft Edge browser logo",
  seed: 1169,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O Copilot Cowork, agente do Microsoft 365, passou a usar o Microsoft Edge instalado no seu computador para navegar, preencher formulários e concluir tarefas em sites onde você já está logado.",
    "O recurso vem desligado: o administrador da empresa precisa liberar o acesso ao navegador, e você precisa usar o Cowork na web pelo Edge, com a mesma conta de trabalho e versão 152 ou mais nova.",
    "Senhas, cookies e sessões ficam no seu computador, e o agente para e devolve o controle em senha, código de verificação e CAPTCHA, mas ações sensíveis ainda pedem sua aprovação e sua revisão.",
  ],
  content: `
    <p>O Copilot Cowork no Edge é a novidade que deixa o agente do Microsoft 365 trabalhar dentro do navegador do seu computador, usando os sites em que você já está logado. Ele abre uma aba escondida, navega, preenche formulários e conclui a tarefa enquanto você acompanha pela conversa.</p>

    <p>A Microsoft listou o recurso nas notas de versão do Microsoft 365 Copilot de 4 de novembro de 2026, e a página de ajuda foi atualizada no dia anterior. Este guia explica o que muda, o que é preciso para funcionar, como o administrador libera, quando o agente devolve o controle e os cuidados antes de deixar uma IA clicar por você. As informações foram conferidas na documentação oficial em 10/11/2026.</p>

    <h2>O que é o Cowork usando o navegador local</h2>

    <p>O Cowork é o agente da Microsoft que executa tarefas de várias etapas no Microsoft 365, como mandar e-mail, marcar reunião e montar documentos. O guia sobre o <a href="/artigos/copilot-cowork-o-que-e-quem-pode-usar-e-quanto-custa">Copilot Cowork, quem pode usar e quanto custa</a> explica a base. Até aqui, quando a tarefa dependia de um site externo, o agente travava ou mandava você fazer a parte da web na mão.</p>

    <p>Agora, segundo a <a href="https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-local-browser" target="_blank" rel="noopener noreferrer">página oficial sobre o navegador local no Cowork</a>, quando ele precisa de um site, abre uma aba escondida no Edge do seu computador e trabalha ali. Como a aba roda na sua cópia do Edge, ela usa o seu login único, os cookies e as sessões abertas. A Microsoft resume assim: o agente tem exatamente o mesmo acesso aos sites que você tem, nem mais nem menos.</p>

    <p>Na prática, dá para pedir coisas como lançar um reembolso de despesas no sistema da empresa, preencher um cadastro num portal de fornecedor ou buscar um voo e deixar a reserva pronta. Você acompanha o andamento por avisos curtos na conversa, como "abrindo o site" ou "preenchendo o formulário".</p>

    <h2>Requisitos: quem consegue usar agora</h2>

    <p>A lista de exigências é curta, mas todas precisam estar certas ao mesmo tempo. Se uma falhar, o Cowork segue com as partes da tarefa que não dependem do navegador e avisa que não tem acesso à ferramenta de navegação.</p>

    <ul class="checklist">
      <li>A empresa já usa o Cowork, que depende do Microsoft 365 Copilot e de cobrança por uso.</li>
      <li>O administrador ligou o acesso ao navegador para a organização ou para o seu grupo.</li>
      <li>Você usa o Cowork na web, pelo endereço copilot.cloud.microsoft.com, dentro do Edge.</li>
      <li>O Edge está na versão 152.0.4191.53 ou mais nova. Ele não precisa ser o navegador padrão.</li>
      <li>Você está logado no Edge com a mesma conta de trabalho ou escola usada no Cowork.</li>
      <li>Você não está numa janela InPrivate nem num perfil de convidado, que não guardam as sessões.</li>
    </ul>

    <p>Ficam de fora, por enquanto, o aplicativo de desktop do Copilot, o celular e outros navegadores, como Chrome e Firefox. Se você pedir uma tarefa de navegação pelo app de desktop, o Cowork responde que isso só roda na versão web. Quem procura um agente que funcione em outro navegador pode comparar com a <a href="/artigos/chatgpt-no-chrome-extensao-oficial-abas-permissoes-e-cuidados">extensão oficial do ChatGPT no Chrome</a> e o <a href="/artigos/gemini-no-chrome-o-que-faz-requisitos-e-como-ativar">Gemini no Chrome</a>.</p>

    <h2>Como o administrador libera o recurso</h2>

    <p>O acesso ao navegador vem desligado por padrão. Quem cuida do Microsoft 365 da empresa precisa ativar no centro de administração. O caminho descrito pela Microsoft, com os nomes em inglês do painel, é este:</p>

    <ol>
      <li>Entrar no Microsoft 365 admin center e abrir <strong>Copilot</strong>, depois <strong>Settings</strong>.</li>
      <li>Clicar em <strong>View All</strong> e abrir <strong>Cowork settings</strong>.</li>
      <li>Em <strong>Allow browser access</strong>, marcar a opção que permite ao Cowork usar o Microsoft Edge para fazer tarefas em nome dos usuários.</li>
      <li>Se quiser começar pequeno, limitar o recurso a grupos de segurança ou a pessoas específicas.</li>
    </ol>

    <p>Existe ainda uma política do próprio Edge para controlar em quais instalações do navegador o Cowork pode agir, disponível desde o Edge 152, lançado na semana de 24 de agosto de 2026. Para uma empresa pequena, a dica é liberar primeiro para duas ou três pessoas, testar por algumas semanas e só depois ampliar. O guia sobre <a href="/artigos/permissoes-de-agentes-de-ia-o-que-liberar-o-que-travar-e-quando-pedir-aprovacao">permissões de agentes de IA</a> ajuda a decidir o que abrir.</p>

    <h2>Como funciona uma tarefa, passo a passo</h2>

    <p>Não há comando especial. Você descreve a tarefa e o Cowork decide quando precisa do navegador. Na primeira vez, aparece um aviso de consentimento na conversa (em inglês, o botão é "I understand"). Sem essa confirmação, o navegador fica desligado e o agente diz quais etapas pulou. A sua confirmação fica guardada no Edge do seu computador, não no Cowork.</p>

    <h3>Durante a tarefa</h3>
    <p>Quando falta uma informação que não está na página, como qual cartão corporativo você usou, o Cowork pergunta no chat e espera a resposta. Para ações que enviam dados pessoais ou têm consequência, ele mostra um cartão de aprovação, e você escolhe aprovar uma vez ou rejeitar. A aba fica escondida e só aparece quando você pede para ver ou quando o agente precisa da sua mão.</p>

    <h3>Quando ele devolve o controle</h3>
    <p>O Cowork pausa e mostra a aba em quatro situações: CAPTCHA ou verificação humana, pedido de senha, código de autenticação em dois fatores e conta bloqueada ou que exige troca de senha. Você resolve, e ele continua. Se a tarefa for interrompida porque você fechou a aba, o computador dormiu ou a internet caiu, ela fica pausada. Basta voltar à conversa e escrever "continue".</p>

    <p>Um exemplo de pedido bem escrito:</p>

    <pre><code>No portal de fornecedores da empresa X, onde já estou logado no Edge, atualize meu cadastro com o novo endereço que está no e-mail do contador de ontem. Antes de enviar o formulário, me mostre todos os campos alterados e espere minha aprovação. Não mexa em dados bancários.</code></pre>

    <h2>Segurança e privacidade: o que fica no seu computador</h2>

    <p>Segundo a Microsoft, a sessão, os cookies e as credenciais ficam na sua cópia local do Edge e não são enviados aos servidores do Cowork. O agente também herda todas as restrições que a empresa já aplica ao navegador, como filtro de sites, acesso condicional e regras de prevenção de perda de dados do Microsoft Purview. Se um site estiver bloqueado, o Cowork diz qual etapa travou e sugere o caminho manual.</p>

    <p>Isso resolve uma parte do problema, mas não toda. Um agente que lê páginas pode ser enganado por instruções escondidas no próprio site, o risco explicado no texto sobre <a href="/artigos/prompt-injection-risco-de-ia-que-le-paginas-e-emails">prompt injection em páginas e e-mails</a>. E, como ele usa o seu login, tudo o que fizer sai no seu nome. Por isso a <a href="https://learn.microsoft.com/en-us/copilot/cowork/cowork-faq" target="_blank" rel="noopener noreferrer">página de perguntas frequentes do Cowork</a> destaca os pedidos de aprovação antes de ações sensíveis e informa que tarefas de navegador também contam no consumo cobrado da empresa.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Proteja a conta antes de dar mais poder a ela. Ative chave de acesso ou autenticação em dois fatores, como mostra o guia de <a href="/artigos/chave-de-acesso-passkey-como-ativar-e-proteger-sua-conta-de-golpes">passkey para proteger sua conta</a>, e evite deixar o Edge logado em banco pessoal no mesmo perfil de trabalho.</p></div>

    <h2>Quando vale usar e quando não vale</h2>

    <table>
      <thead>
        <tr><th>Tarefa</th><th>Vale delegar?</th><th>Por quê</th></tr>
      </thead>
      <tbody>
        <tr><td>Preencher reembolso de despesas com recibos do Outlook</td><td>Sim</td><td>Repetitiva, com dados já no Microsoft 365 e revisão fácil</td></tr>
        <tr><td>Atualizar cadastro em portal de fornecedor</td><td>Sim, com aprovação</td><td>Você confere os campos antes do envio</td></tr>
        <tr><td>Pesquisar preços e montar uma comparação</td><td>Sim</td><td>Só leitura, sem compromisso</td></tr>
        <tr><td>Fazer pagamento ou transferência</td><td>Não</td><td>Erro custa dinheiro e é difícil desfazer</td></tr>
        <tr><td>Mudar senha, e-mail de recuperação ou dados bancários</td><td>Não</td><td>O próprio Cowork devolve esse tipo de etapa para você</td></tr>
      </tbody>
    </table>

    <p>Um exemplo de conta simples: se uma analista gasta 15 minutos para lançar cada reembolso e faz 20 por mês, são 5 horas mensais em tarefa repetitiva. Se o agente prepara tudo e ela só revisa em 3 minutos por item, o tempo cai para 1 hora. A economia real depende de quantas tarefas travam em CAPTCHA ou login e do custo de consumo do Cowork na sua empresa, então meça por um mês antes de concluir.</p>

    <h2>Erros comuns ao começar</h2>

    <ul>
      <li><strong>Usar outro navegador e achar que o recurso não existe.</strong> Só funciona com o Cowork aberto na web dentro do Edge.</li>
      <li><strong>Abrir em janela InPrivate.</strong> Sem as sessões salvas, o agente não consegue entrar nos sites.</li>
      <li><strong>Aprovar o cartão sem ler.</strong> A aprovação existe para você conferir os dados, não para ser clicada no automático.</li>
      <li><strong>Pedir tarefas vagas.</strong> Diga o site, o que alterar, o que não tocar e quando parar para revisão.</li>
      <li><strong>Liberar para a empresa inteira de uma vez.</strong> Comece com um grupo pequeno e registre os erros.</li>
    </ul>

    <p>Se algo sair errado, o texto sobre <a href="/artigos/quando-o-agente-de-ia-erra-quem-responde-cdc-contrato-e-o-que-fazer">quem responde quando o agente de IA erra</a> ajuda a entender o que fazer. Para quem usa o Copilot no dia a dia, vale ver também como ele <a href="/artigos/copilot-no-outlook-organizar-a-caixa-de-entrada-por-comando-regras-e-limites">organiza a caixa de entrada do Outlook</a> e como funciona o <a href="/artigos/copilot-para-financas-no-excel-conciliacao-lancamentos-e-quem-tem-acesso">Copilot para finanças no Excel</a>.</p>

    <h2>Como o recurso se compara ao resto do mercado</h2>

    <p>A Microsoft não está sozinha nessa corrida. A Anthropic juntou chat e agente num só produto, como mostra o guia sobre o <a href="/artigos/claude-cowork-e-chat-viram-um-so-claude-o-que-muda-quem-tem-acesso-e-como-testar">Claude com Cowork e chat unificados</a>, e a Perplexity também ampliou o seu agente, tema do texto sobre o <a href="/artigos/perplexity-computer-graficos-interativos-e-automacoes-o-que-mudou-e-como-testar-sem-risco">Perplexity Computer</a>. A diferença do Cowork é morar dentro do Microsoft 365, com as regras de segurança que a empresa já configurou.</p>

    <p>Se a sua empresa já paga o Microsoft 365 Copilot, peça ao responsável de TI um teste controlado com uma tarefa repetitiva e um grupo pequeno. Se ainda está escolhendo ferramenta, o ponto de partida é entender o <a href="/artigos/microsoft-copilot-superapp-o-que-muda-e-como-usar-de-graca">novo Microsoft Copilot e o que dá para usar de graça</a>. Para acompanhar as próximas novidades, siga a categoria <a href="/categoria/ferramentas">Ferramentas</a>.</p>
  `,
  faq: [
    {
      question: "O Copilot Cowork funciona no Chrome?",
      answer:
        "Ainda não para tarefas de navegação. Segundo a Microsoft, o Cowork só usa o navegador local quando está aberto na web dentro do Microsoft Edge. Em outro navegador, ele faz as etapas que não dependem de site, como puxar recibos do Outlook, e avisa que não tem acesso à ferramenta de navegação. O app de desktop e o celular também não fazem essas tarefas.",
    },
    {
      question: "O Cowork vê minhas senhas salvas no Edge?",
      answer:
        "A Microsoft diz que credenciais, cookies e tokens de sessão ficam no seu computador e não são enviados aos servidores do Cowork. O agente usa as sessões já abertas, mas para e devolve o controle quando aparece pedido de senha, código de dois fatores, CAPTCHA ou conta bloqueada. Mesmo assim, tudo o que ele faz sai no seu nome, então revise antes de aprovar.",
    },
    {
      question: "Como ativar o navegador no Copilot Cowork?",
      answer:
        "Quem ativa é o administrador do Microsoft 365, no admin center, em Copilot, Settings, View All e Cowork settings, marcando a opção de acesso ao navegador. Depois, você precisa usar o Cowork na web pelo Edge 152 ou mais novo, logado com a mesma conta de trabalho, e confirmar o aviso de consentimento na primeira tarefa.",
    },
    {
      question: "O Copilot Cowork é gratuito?",
      answer:
        "Não. O Cowork faz parte do Microsoft 365 Copilot para empresas e usa cobrança por consumo, e as tarefas de navegador também entram nessa conta, segundo a Microsoft. O administrador acompanha o uso no centro de administração e pode definir limites por pessoa ou grupo. Para uso pessoal, o caminho é o Microsoft Copilot comum, que tem recursos diferentes.",
    },
    {
      question: "O Cowork pode fazer pagamento em site por mim?",
      answer:
        "Segundo a Microsoft, ações que enviam dados pessoais ou têm consequência pedem aprovação num cartão na conversa, e verificações como senha e código são devolvidas para você. A recomendação deste guia é não delegar pagamentos, transferências nem mudança de dados bancários: o erro custa caro e é difícil de desfazer.",
    },
  ],
};
