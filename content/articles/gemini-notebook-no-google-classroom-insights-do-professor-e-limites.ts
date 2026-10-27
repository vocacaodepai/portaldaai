import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "gemini-notebook-no-google-classroom-insights-do-professor-e-limites",
  title: "Gemini Notebook no Classroom: insights do professor e limites",
  seoTitle: "Gemini Notebook no Classroom: insights e limites",
  excerpt:
    "Gemini Notebook no Google Classroom: veja como o professor atribui o caderno, o que os resumos de insights mostram, o que o aluno vê e o que o admin controla.",
  metaDescription:
    "Gemini Notebook no Google Classroom: o professor atribui o caderno, vê resumos de insights e conversas dos alunos, e o admin libera o compartilhamento. Veja quem tem e os limites.",
  category: "ferramentas",
  date: "2026-10-25",
  readTime: 7,
  imageQuery: "teacher classroom laptop students learning",
  seed: 704,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O professor pode atribuir um Gemini Notebook pelo Google Classroom e, a partir de 19/10/2026, ver um resumo de insights sobre como os alunos usaram o caderno, além das conversas individuais.",
    "O recurso é para contas Google Workspace for Education (Fundamentals, Standard e Plus) e só funciona se o administrador da escola ligar o Gemini Notebook para professores e alunos.",
    "O aluno é avisado de que o professor enxerga as conversas, os insights são gerados por IA e não servem para dar nota, e o caderno atribuído aceita até 50 fontes.",
  ],
  content: `
    <p>O Gemini Notebook no Google Classroom permite que o professor atribua um caderno de estudo à turma e, agora, também veja um resumo gerado por IA de como os alunos conversaram com ele. O Google anunciou a novidade em 19/10/2026, para escolas com Google Workspace for Education, e ela só funciona quando o administrador da escola liga o recurso.</p>

    <p>Quem já conhece o caderno do <a href="/artigos/gemini-notebook-antigo-notebooklm-o-que-mudou">Gemini Notebook, o antigo NotebookLM</a> vai reconhecer a base: o professor reúne fontes (documentos, links, arquivos do Drive) e o aluno conversa com o caderno para tirar dúvidas sobre aquele material. A novidade desta semana é o lado do professor: um painel de insights, as transcrições das conversas e novos controles de compartilhamento para o administrador. Este guia explica cada peça, quem tem acesso e onde estão os limites.</p>

    <h2>O que é o Gemini Notebook dentro do Classroom</h2>

    <p>No Classroom, o professor cria ou escolhe um caderno e o anexa a uma tarefa ou a um material, como faria com um PDF ou um vídeo. O aluno abre o caderno numa nova aba e conversa com ele: as respostas partem das fontes que o professor escolheu, e não da internet inteira. Também dá para usar os itens que o professor já gerou, como visões gerais em áudio, guias de estudo e perguntas frequentes.</p>

    <p>Segundo a <a href="https://support.google.com/edu/classroom?p=teacher_notebook_gems" target="_blank" rel="noopener noreferrer">página de ajuda do Classroom para professores</a> (consultada em 25/10/2026), o caminho é: abrir a turma, ir em Atividades, clicar em Criar e escolher Gemini Notebook. Também é possível anexar um caderno já existente pelo botão Anexar de uma tarefa. O professor pode colar o endereço de um caderno público ou de um que ele possa editar, ou criar um novo já com os materiais da turma como fontes.</p>

    <p>Para quem usa a ferramenta no dia a dia fora da escola, o guia sobre <a href="/artigos/gemini-notebook-no-app-gemini-como-criar-e-consultar-cadernos-por-conversa">como criar e consultar cadernos pelo app Gemini</a> mostra a versão pessoal. A versão do Classroom é a mesma ideia, com camada de turma e de administração por cima.</p>

    <h2>O que o professor passa a ver: os resumos de insights</h2>

    <p>A novidade central são os resumos de insights. Conforme o <a href="https://workspaceupdates.googleblog.com/2026/10/teacher-led-gemini-notebook-in-google-Classroom-now-offers-insight-summaries-for-educators-and-updated-sharing-settings-for-admins-including-trusted-domains.html" target="_blank" rel="noopener noreferrer">anúncio no blog Workspace Updates</a>, o Gemini produz para o professor um panorama de como os alunos interagiram com o caderno atribuído. O painel traz três coisas.</p>

    <ul>
      <li><strong>Resumo geral de engajamento:</strong> uma visão de quanto e como a turma usou o caderno.</li>
      <li><strong>Temas comuns:</strong> exemplos de dúvidas frequentes, pontos em que a turma vai bem e áreas que pedem mais apoio.</li>
      <li><strong>Conversas individuais:</strong> a transcrição do chat de cada aluno, para o professor dar contexto e conferir se o resumo da IA está correto.</li>
    </ul>

    <p>Na prática, o professor de 7º ano que atribuiu um caderno sobre frações pode abrir o painel antes da aula seguinte e descobrir que várias perguntas giram em torno de transformar fração em decimal. Isso orienta os dez primeiros minutos da aula. É um exemplo ilustrativo, não um resultado medido, mas mostra o uso pretendido: o resumo aponta onde olhar, e a transcrição confirma.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>A ajuda do Classroom afirma que os insights são gerados por IA e não se destinam à avaliação. Use como pista para a aula, nunca como nota. O guia sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a> explica por que um resumo automático pode errar.</p></div>

    <h2>O que o aluno vê e o que fica registrado</h2>

    <p>O aluno abre o caderno pela publicação na aba Atividades ou pelo atalho Ferramentas de aprendizagem da turma. Segundo a <a href="https://support.google.com/edu/classroom?p=student_notebook_gems" target="_blank" rel="noopener noreferrer">página de ajuda para estudantes</a>, ele pode conversar com o caderno e usar os itens que o professor gerou. O Google informa que o aluno recebe um aviso dentro do caderno atribuído dizendo que as conversas ali ficam visíveis ao professor.</p>

    <p>Alguns detalhes que pais e professores costumam perguntar:</p>

    <ul class="checklist">
      <li>O aluno não adiciona nem edita fontes e não gera novos itens: quem monta o material é o professor.</li>
      <li>O professor só vê conversas de cadernos atribuídos, nunca de cadernos que o aluno criou por conta própria.</li>
      <li>Se o aluno apaga uma conversa no caderno atribuído, ela some da visão do professor, mas a escola ainda pode consultar atividade de contas pelo Google Vault, conforme a política dela.</li>
      <li>As transcrições dependem de a atividade do Gemini estar ligada, segundo a página de ajuda do professor.</li>
    </ul>

    <p>Vale conversar com a turma sobre isso no primeiro dia. Transparência evita o aluno achar que o caderno é um espaço privado, tema próximo do guia <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade: o que você entrega sem perceber</a>.</p>

    <h2>Quem tem acesso e como o administrador libera</h2>

    <p>Os insights estão disponíveis para o Google Workspace for Education nas edições Fundamentals, Standard e Plus. O Google informa que a liberação para domínios de Lançamento Rápido e Lançamento Programado começou em 19/10/2026 e que a visibilidade pode levar de um a três dias. Usuários do Gemini LTI (a integração com outros sistemas de ensino) recebem nas próximas semanas, sem data definida. O post não detalha idiomas.</p>

    <table>
      <thead>
        <tr><th>Quem</th><th>O que precisa estar ligado</th></tr>
      </thead>
      <tbody>
        <tr><td>Professor</td><td>Gemini Notebook ligado no grupo ou unidade organizacional dele, conta Workspace for Education</td></tr>
        <tr><td>Aluno</td><td>Gemini Notebook ligado no grupo ou unidade dele; conta pessoal não acessa cadernos do Classroom</td></tr>
        <tr><td>Administrador</td><td>Permissão de configurações do Gemini no console de administração</td></tr>
      </tbody>
    </table>

    <p>O compartilhamento externo vem desligado por padrão. Pelo <a href="https://knowledge.workspace.google.com/admin/generative-ai/gemini-notebook/manage-gemini-notebook-sharing-settings" target="_blank" rel="noopener noreferrer">guia de configuração do Gemini Notebook</a>, o administrador acessa IA generativa, Gemini Notebook, e escolhe entre desligado, domínios permitidos ou ligado. A nova opção de domínios confiáveis deixa professores e alunos de escolas parceiras criarem e atribuírem cadernos entre si. A mudança pode levar até 24 horas para valer. Quem administra também deve conhecer o <a href="/artigos/menu-personalizar-do-gemini-skills-apps-e-controle-para-admins">menu Personalizar do Gemini</a>, que concentra outros controles.</p>

    <h2>Limites que o professor precisa conhecer</h2>

    <p>Antes de montar a primeira turma, confira as restrições listadas na ajuda do Classroom:</p>

    <ul>
      <li>Cada caderno aceita até 50 documentos como fonte.</li>
      <li>Alterações feitas pelo professor valem para todas as turmas em que o caderno foi compartilhado.</li>
      <li>Apagar a publicação no Classroom não tira o acesso dos alunos: é preciso mudar o compartilhamento no próprio Gemini Notebook.</li>
      <li>Criar e editar só funciona na versão web, embora os alunos possam abrir o caderno no navegador do celular.</li>
      <li>Os insights não são combinados entre turmas diferentes.</li>
    </ul>

    <p>Também há um limite que não está na tela: a qualidade do caderno depende das fontes. Se o material estiver desatualizado ou errado, as respostas herdam o problema. Revise o conteúdo como revisaria uma apostila.</p>

    <h2>Como usar bem: um roteiro de uma semana</h2>

    <p>Uma sugestão para o professor que quer testar sem virar a rotina de cabeça para baixo. Na segunda, escolha um tema curto e reúna de cinco a dez fontes confiáveis. Na terça, gere um guia de estudo e uma lista de perguntas frequentes dentro do caderno e confira cada resposta com o livro didático. Na quarta, atribua o caderno como material de apoio, não como tarefa com nota. Na sexta, abra os insights, anote os dois temas mais comuns e use-os na revisão da semana seguinte.</p>

    <p>Dois prompts úteis para a conversa de teste, que o professor pode digitar ele mesmo antes de liberar:</p>

    <pre><code>Explique este assunto para um aluno do 7º ano em 5 frases, usando só as fontes do caderno.</code></pre>

    <pre><code>Quais três perguntas um aluno com dificuldade faria sobre este material? Responda cada uma citando a fonte.</code></pre>

    <p>Para turmas maiores, combine o caderno com outros formatos do mesmo ecossistema, como o <a href="/artigos/mapa-mental-com-ia-resumir-materia-e-estudar-com-o-gemini-notebook">mapa mental</a> e o <a href="/artigos/resumo-em-video-no-gemini-notebook-formatos-estilos-e-limites">resumo em vídeo</a>, que ajudam alunos com estilos de estudo diferentes.</p>

    <h2>Erros comuns e quando não usar</h2>

    <p>O primeiro erro é tratar o insight como diagnóstico. Ele resume o que a IA entendeu das conversas, e a própria ajuda do Google orienta conferir as transcrições. O segundo é atribuir o caderno sem avisar a turma e as famílias de que as conversas são visíveis. O terceiro é usar fontes sem direito de uso: materiais comprados ou protegidos pedem cuidado, tema do guia sobre <a href="/artigos/ia-e-direitos-autorais-o-que-criadores-precisam-saber">IA e direitos autorais</a>.</p>

    <p>Não vale usar o recurso quando a escola não tem uma política de IA, quando a idade dos alunos exige regras específicas (o <a href="/artigos/eca-digital-e-ia-o-que-muda-para-pais-criancas-chatbots-e-apps">ECA Digital</a> trata de crianças e apps) ou quando o objetivo é substituir a explicação do professor. As <a href="/artigos/ia-na-escola-diretrizes-do-mec-e-do-cne-o-que-muda-para-professores-pais-e-alunos">diretrizes do MEC e do CNE</a> reforçam que a IA apoia e o professor conduz.</p>

    <p>Quem estuda por conta própria pode aproveitar a mesma lógica com o <a href="/artigos/modo-estudo-do-chatgpt-e-aprendizado-guiado-do-gemini-como-usar">modo estudo do ChatGPT e o aprendizado guiado do Gemini</a>. E se você é pai ou mãe, o guia da <a href="/artigos/licao-de-casa-com-ia-como-ajudar-o-filho-sem-fazer-por-ele">lição de casa com IA</a> ajuda a conversar sobre o uso em casa. Para ver mais lançamentos do tipo, passe pela categoria de ferramentas do Portal da AI.</p>
  `,
  faq: [
    {
      question: "O Gemini Notebook no Classroom é gratuito?",
      answer:
        "O recurso faz parte do Google Workspace for Education nas edições Fundamentals, Standard e Plus, mas só aparece se o administrador da escola ligar o Gemini Notebook para professores e alunos. O Google não detalha preço separado no anúncio. Consulte a secretaria ou o administrador de TI da sua escola.",
    },
    {
      question: "O professor consegue ler as conversas dos alunos com o caderno?",
      answer:
        "Sim, nos cadernos atribuídos pelo Classroom. O professor vê o resumo de insights e as transcrições individuais, e o aluno recebe um aviso dentro do caderno. Conversas em cadernos que o aluno criou por conta própria não ficam visíveis para o professor.",
    },
    {
      question: "Posso usar o Gemini Notebook do Classroom com uma conta pessoal?",
      answer:
        "Não. A página de ajuda do Classroom informa que contas pessoais não acessam cadernos atribuídos pela plataforma. É preciso uma conta Google Workspace for Education, com o Gemini Notebook liberado pelo administrador para professores e alunos.",
    },
    {
      question: "Os insights servem para dar nota ao aluno?",
      answer:
        "Não. A ajuda do Classroom diz que os insights são gerados por IA e não se destinam à avaliação. Eles indicam temas e dúvidas comuns para orientar a aula, e o professor deve conferir as transcrições antes de tirar qualquer conclusão sobre um aluno.",
    },
    {
      question: "Quantas fontes cabem em um caderno atribuído?",
      answer:
        "Até 50 documentos por caderno, segundo a página de ajuda para professores. O aluno não adiciona nem edita fontes, e qualquer mudança feita pelo professor vale para todas as turmas em que aquele caderno foi compartilhado.",
    },
  ],
};
