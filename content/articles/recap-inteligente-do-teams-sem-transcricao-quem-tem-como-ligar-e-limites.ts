import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "recap-inteligente-do-teams-sem-transcricao-quem-tem-como-ligar-e-limites",
  title: "Recap inteligente do Teams sem transcrição: quem tem e limites",
  seoTitle: "Recap do Teams sem transcrição: quem tem e limites",
  excerpt:
    "O Teams agora gera resumo com Copilot sem guardar gravação nem transcrição. Veja quem pode usar, como ligar, onde o resumo fica salvo e o que o administrador controla.",
  metaDescription:
    "Recap inteligente do Teams sem salvar transcrição: exige licença do Copilot, vale só para reuniões agendadas, guarda o resumo em Word no OneDrive e tem prazo de expiração.",
  category: "ferramentas",
  date: "2026-11-01",
  readTime: 6,
  imageQuery: "video meeting laptop notes office",
  seed: 1022,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O recap inteligente do Teams sem salvar transcrição gera um resumo da reunião com o Copilot sem guardar gravação nem transcrição permanente, e vale só para reuniões agendadas.",
    "Precisa de licença do Microsoft Copilot e de uma política de reunião com o Copilot ligado; o organizador liga ou desliga em Opções da reunião, e o resumo fica como documento Word somente leitura no OneDrive dele.",
    "O administrador controla a expiração dos resumos (padrão de 120 dias) e pode desligar o recap inteiro pela política de reunião, o que vale para todas as reuniões.",
  ],
  content: `
    <p>O recap inteligente do Teams sem salvar transcrição é um modo em que o Copilot resume a reunião sem que a gravação ou a transcrição fiquem guardadas depois do encontro. Segundo a documentação da Microsoft, atualizada em 26/10/2026, o organizador precisa de licença do Copilot, e o resumo aparece na aba Recap para quem também tem licença.</p>

    <p>A novidade resolve um impasse comum: empresas que proíbem gravar reuniões por motivo de compliance ficavam sem resumo automático. Agora existe um meio-termo. Este guia explica quem pode usar, como ligar, onde o resumo fica e o que o administrador consegue travar. Se você ainda está decidindo como registrar reuniões em geral, o guia de <a href="/artigos/ia-para-reunioes-transcricao-resumo-ata-automatica">IA para reuniões: transcrição, resumo e ata automática</a> dá o panorama.</p>

    <h2>O que é o recap inteligente sem transcrição</h2>

    <p>No recap inteligente tradicional, o Teams grava ou transcreve a conversa e usa esse material para montar resumo, tópicos e tarefas. Esse material fica guardado. No modo novo, o Copilot gera o resumo mesmo com gravação e transcrição desligadas, e nenhuma transcrição ou gravação é salva como parte da experiência.</p>

    <p>Durante a geração, a Microsoft informa que os dados da fala ficam temporariamente num cache gerenciado pelo serviço de recap, sem acesso dos participantes, e que esse cache é apagado em até um dia. O que sobra é só o resumo, armazenado como documento Word somente leitura na pasta Meetings do OneDrive do organizador.</p>

    <p>Detalhe importante: o recurso vale para reuniões agendadas. Chamadas e reuniões instantâneas não geram esse tipo de resumo. A fonte é a página <a href="https://learn.microsoft.com/microsoftteams/intelligent-recap-without-saving-transcripts" target="_blank" rel="noopener noreferrer">Intelligent recap in Teams meetings without saving transcripts</a>, no Microsoft Learn, e a explicação para o usuário final está na <a href="https://support.microsoft.com/teams/meetings/use-intelligent-recap-microsoft-teams-meetings-without-transcription" target="_blank" rel="noopener noreferrer">página de suporte da Microsoft</a>.</p>

    <h2>Quem pode usar e o que é preciso</h2>

    <p>A regra é direta: o recurso fica disponível automaticamente para quem tem licença do Microsoft Copilot e está numa política de reunião do Teams com o Copilot habilitado. Não há botão extra para o administrador ligar. Quem já usa o Copilot em reuniões tende a encontrar a opção sem fazer nada.</p>

    <ul class="checklist">
      <li>O organizador da reunião precisa ter licença do Copilot para gerar o resumo.</li>
      <li>Quem quer ler o resumo na aba Recap também precisa de licença do Copilot.</li>
      <li>Os participantes precisam ser da mesma organização do organizador; convidados e pessoas de fora não acessam.</li>
      <li>A reunião tem de ser agendada, não uma chamada rápida.</li>
      <li>A política de reunião do usuário precisa estar com o Copilot ligado.</li>
    </ul>

    <p>Sobre preço, a documentação consultada não traz valor. Para saber quanto custa a licença no Brasil, consulte a página oficial do Microsoft 365 Copilot; o texto sobre <a href="/artigos/microsoft-copilot-vale-a-pena-preco-2026">se o Microsoft Copilot vale a pena</a> ajuda a pesar custo e uso antes de contratar.</p>

    <h2>Como ligar e desligar na reunião</h2>

    <p>Segundo a Microsoft, o organizador com licença liga ou desliga o recurso em Opções da reunião, antes do encontro. Durante a reunião, organizadores, coorganizadores e apresentadores com licença podem alternar o recurso pelos controles da própria reunião.</p>

    <h3>Passo a passo prático para o organizador</h3>

    <ol>
      <li>Agende a reunião normalmente no calendário do Teams.</li>
      <li>Abra Opções da reunião e procure a configuração do recap inteligente sem transcrição.</li>
      <li>Deixe gravação e transcrição desligadas se a política da empresa exigir.</li>
      <li>Avise os participantes de que haverá um resumo gerado por IA, como boa prática de transparência.</li>
      <li>Depois da reunião, abra a aba Recap, confira o resumo e corrija o que estiver impreciso antes de compartilhar.</li>
    </ol>

    <p>Os nomes exatos dos menus podem variar conforme a versão do Teams e a liberação gradual na sua conta, então confirme na tela. Se o resumo vai virar ata, a leitura humana continua obrigatória: o guia de <a href="/artigos/ata-de-reuniao-como-servico-resumo-tarefas-e-envio-automatico-com-ia">ata de reunião com IA</a> mostra um roteiro de revisão em três passos.</p>

    <h2>Onde o resumo fica e quem pode apagar</h2>

    <p>O resumo é salvo como arquivo Word somente leitura no OneDrive do organizador, dentro da pasta Meetings. O organizador pode excluir o resumo tanto pela aba Recap quanto pelo próprio documento no OneDrive; apagar em um lugar apaga nos dois.</p>

    <p>Para o administrador, há duas camadas de proteção. Os resumos são compatíveis com a busca de conteúdo (eDiscovery) e com a retenção legal (legal hold) do Microsoft Purview, o que interessa a empresas sob auditoria. E existe prazo de validade: por padrão, o documento expira em 120 dias.</p>

    <h3>Exemplo numa clínica com 12 pessoas</h3>

    <p>Imagine uma clínica odontológica em Campinas que proíbe gravar reuniões porque a conversa cita pacientes. A gerente agenda a reunião semanal de 30 minutos, mantém a gravação desligada e liga o recap sem transcrição. No fim, o resumo lista decisões e tarefas. Como a clínica define 30 dias de expiração, o documento some sozinho depois, sem acúmulo de arquivos sobre pacientes. O exemplo é ilustrativo; os números são escolhidos pela clínica, não recomendação da Microsoft.</p>

    <h2>O que o administrador controla</h2>

    <p>A Microsoft informa que não existe uma política separada só para o recap sem transcrição. Para impedir o uso mantendo o Copilot ligado, é preciso desligar o recap inteligente na política de reunião, com o parâmetro AllowIntelligentRecap em falso no comando Set-CsTeamsMeetingPolicy. Atenção: isso desliga o recap inteligente de todas as reuniões, inclusive as que têm transcrição.</p>

    <table>
      <thead>
        <tr><th>Controle</th><th>Onde fica</th><th>Efeito</th></tr>
      </thead>
      <tbody>
        <tr><td>Expiração do resumo</td><td>Centro de administração do Teams, política de reunião, seção AI memory and archive</td><td>De 1 a 9999 dias, ou -1 para nunca expirar (padrão: 120 dias)</td></tr>
        <tr><td>Desligar o recap</td><td>Política de reunião, parâmetro AllowIntelligentRecap</td><td>Desliga o recap para todas as reuniões</td></tr>
        <tr><td>Ligar o Copilot em reuniões</td><td>Política de reunião com Copilot habilitado</td><td>Condição para o recurso aparecer</td></tr>
      </tbody>
    </table>

    <p>Quem administra o Microsoft 365 de uma empresa pequena pode fazer isso pelo painel, sem comando. Em dúvida, peça apoio ao suporte do Microsoft 365 ou a quem cuida de TI.</p>

    <h2>Privacidade, LGPD e boas práticas</h2>

    <p>Sem transcrição guardada, o risco de vazamento de um arquivo de gravação cai. Mas continua existindo um resumo, que é dado da empresa e pode conter informação pessoal. Se a reunião trata de cliente ou paciente, aplique as mesmas regras de qualquer documento: acesso restrito e prazo de guarda curto. O guia sobre <a href="/artigos/cliente-pediu-para-apagar-seus-dados-como-responder-pela-lgpd-no-pequeno-negocio">pedido de exclusão de dados pela LGPD</a> mostra como tratar esse tipo de pedido.</p>

    <p>Outras práticas simples:</p>

    <ul class="checklist">
      <li>Avise os participantes antes de ligar o recurso.</li>
      <li>Não use o resumo como única prova de uma decisão importante; registre por escrito o que foi combinado.</li>
      <li>Revise nomes, valores e prazos, porque resumos de IA erram detalhes.</li>
      <li>Defina um prazo de expiração curto para reuniões sensíveis.</li>
      <li>Treine a equipe a não colar dados sigilosos em ferramentas fora do contrato da empresa, como explica o texto sobre <a href="/artigos/colar-dados-da-empresa-no-chatgpt-o-que-o-funcionario-pode-fazer">colar dados da empresa no ChatGPT</a>.</li>
    </ul>

    <h2>Equivalentes no Google e erros comuns</h2>

    <p>Quem usa Google Workspace tem caminhos parecidos: o <a href="/artigos/resumo-de-reuniao-no-google-chat-quem-tem-como-funciona-e-limites">resumo de reunião no Google Chat</a>, os <a href="/artigos/proximos-passos-no-google-meet-email-de-acompanhamento-e-tarefas-depois-da-reuniao">próximos passos no Google Meet</a> e a <a href="/artigos/traducao-de-fala-no-google-meet-63-idiomas-quem-tem-e-limites">tradução de fala no Meet</a>. Cada um tem requisitos e planos próprios.</p>

    <ul>
      <li><strong>Achar que o recurso vale para qualquer reunião.</strong> Só reuniões agendadas geram o resumo.</li>
      <li><strong>Supor que os convidados externos veem o resumo.</strong> Só quem é da organização e tem licença acessa.</li>
      <li><strong>Esperar uma política exclusiva.</strong> Não existe: desligar o recap afeta todas as reuniões.</li>
      <li><strong>Esquecer a expiração.</strong> O documento some em 120 dias por padrão; salve o que for essencial em outro lugar.</li>
      <li><strong>Confiar sem revisar.</strong> O resumo é rascunho, não ata.</li>
    </ul>

    <h2>Próximo passo</h2>

    <p>Antes de ligar para todo mundo, teste numa reunião interna de baixo risco, abra a aba Recap e compare o resumo com suas anotações. Se a equipe já usa o Copilot em outras tarefas, veja também o caso de <a href="/artigos/copilot-para-financas-no-excel-conciliacao-lancamentos-e-quem-tem-acesso">Copilot para finanças no Excel</a> e o guia do <a href="/artigos/copilot-cowork-o-que-e-quem-pode-usar-e-quanto-custa">Copilot Cowork</a>. A categoria de ferramentas traz as novidades mais recentes.</p>
  `,
  faq: [
    {
      question: "O recap do Teams sem transcrição grava a reunião?",
      answer:
        "Não. Segundo a documentação da Microsoft, nenhuma gravação nem transcrição é salva nessa experiência. Durante a geração, os dados da fala ficam num cache temporário do serviço, sem acesso dos participantes, que é apagado em até um dia. O que permanece é o resumo, em um arquivo Word no OneDrive do organizador.",
    },
    {
      question: "Quem precisa de licença do Copilot para usar o recap sem transcrição?",
      answer:
        "O organizador precisa de licença do Microsoft Copilot para gerar o resumo, e os participantes que quiserem ler o resumo na aba Recap também precisam ter licença. Além disso, a política de reunião do Teams do usuário deve estar com o Copilot habilitado. Convidados de fora da organização não têm acesso.",
    },
    {
      question: "O recap sem transcrição funciona em chamadas e reuniões instantâneas?",
      answer:
        "Não. Segundo a Microsoft, o resumo sem transcrição é gerado apenas para reuniões agendadas. Chamadas e reuniões criadas na hora não entram. Se você quer resumo nesses casos, precisa usar o recap inteligente com transcrição, se a política da sua empresa permitir.",
    },
    {
      question: "Quanto tempo o resumo da reunião fica guardado?",
      answer:
        "Por padrão, o documento Word com o resumo expira em 120 dias. O administrador pode mudar o prazo no centro de administração do Teams, de 1 a 9999 dias, ou escolher -1 para nunca expirar. O organizador também pode apagar o resumo antes, pela aba Recap ou pelo OneDrive.",
    },
    {
      question: "Como o administrador desliga o recap inteligente no Teams?",
      answer:
        "Não há política exclusiva para o modo sem transcrição. É preciso desligar o recap inteligente na política de reunião, pelo parâmetro AllowIntelligentRecap em falso no PowerShell. Isso mantém o Copilot ligado, mas desativa o recap em todas as reuniões, com ou sem transcrição.",
    },
  ],
};
