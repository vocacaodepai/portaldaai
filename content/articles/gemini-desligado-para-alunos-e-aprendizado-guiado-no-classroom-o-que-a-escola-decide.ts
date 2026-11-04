import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "gemini-desligado-para-alunos-e-aprendizado-guiado-no-classroom-o-que-a-escola-decide",
  title: "Gemini desligado para alunos: o que muda no Classroom e na escola",
  seoTitle: "Gemini desligado para alunos e Aprendizado Guiado",
  excerpt:
    "O Google vai deixar Gemini, Gemini Notebook e Busca desligados nas contas de alunos até a escola liberar. Veja o que muda e como usar o Aprendizado Guiado.",
  metaDescription:
    "Gemini desligado para alunos até a escola liberar: o que muda nas contas do Workspace for Education, o Aprendizado Guiado no Classroom e o que decidir agora.",
  category: "ferramentas",
  date: "2026-11-04",
  readTime: 8,
  imageQuery: "school administrator laptop meeting teachers",
  seed: 1116,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O Google anunciou em 03/11/2026 que Gemini, Gemini Notebook, Gemini no Classroom e a Busca ficarão totalmente desligados nas contas de alunos do ensino básico até o administrador da escola ligar cada um.",
    "No mesmo anúncio, o Aprendizado Guiado ficou disponível no Google Classroom no mundo todo: o professor passa a atividade e o aluno estuda com um tutor ancorado no material da turma.",
    "A escola não precisa esperar o prazo final: já dá para revisar quem tem acesso hoje, definir uma política por série e testar o Aprendizado Guiado com uma turma piloto.",
  ],
  content: `
    <p>O Google vai deixar o Gemini desligado para alunos do ensino fundamental e médio até que a escola decida ligar. A mudança, anunciada em 3 de novembro de 2026, vale para o Gemini, o Gemini Notebook, o Gemini dentro do Classroom e a própria Busca do Google nas contas de estudante do Workspace for Education.</p>

    <p>No mesmo pacote, o Aprendizado Guiado chegou ao Google Classroom para todos os países: o professor cria uma atividade e o aluno estuda com um tutor que pergunta em vez de entregar a resposta. Este guia explica o que muda, o que ainda não tem data, o que o coordenador e o professor podem fazer desde já e quais cuidados tomar. O resumo do anúncio está na <a href="/noticias/google-desliga-gemini-alunos-escolas-busca-aprendizado-guiado">notícia sobre o Gemini desligado para alunos</a>.</p>

    <h2>O que o Google anunciou</h2>

    <p>O texto oficial, assinado por Chris Phillips, vice-presidente de Educação do Google, diz que o acesso a quatro produtos ficará "totalmente desligado" para contas de alunos do ensino básico até que os administradores escolares liguem cada um explicitamente. A justificativa é dar aos gestores controle para usar a IA em sala "como acharem melhor". Os detalhes de regra e cronograma, segundo o próprio <a href="https://blog.google/products-and-platforms/products/education/ai-learning-era-updates-2026/" target="_blank" rel="noopener noreferrer">blog do Google sobre IA na educação</a>, serão publicados "nos próximos meses", antes de a mudança entrar em vigor.</p>

    <table>
      <thead>
        <tr><th>Produto</th><th>Como fica para alunos</th><th>Situação</th></tr>
      </thead>
      <tbody>
        <tr><td>Gemini (app de conversa)</td><td>Desligado até a escola ligar</td><td>Anunciado, sem data</td></tr>
        <tr><td>Gemini Notebook</td><td>Desligado até a escola ligar</td><td>Anunciado, sem data</td></tr>
        <tr><td>Gemini no Classroom</td><td>Desligado até a escola ligar</td><td>Anunciado, sem data</td></tr>
        <tr><td>Busca do Google</td><td>Desligada até a escola ligar</td><td>Anunciado, sem data</td></tr>
        <tr><td>Aprendizado Guiado no Classroom</td><td>Atividade passada pelo professor</td><td>Disponível desde 03/11/2026</td></tr>
        <tr><td>Aprendizado Guiado na Busca</td><td>Piloto para lição de casa</td><td>Só em escolas dos EUA, a partir de novembro</td></tr>
      </tbody>
    </table>

    <p>É um recuo. Em agosto, o Google tinha ampliado o Gemini no Classroom para alunos de todas as idades, com a aba Gemini ligada por padrão onde o administrador já liberava o acesso, como registra o <a href="https://workspaceupdates.googleblog.com/2026/08/gemini-in-google-classroom-is-expanding-to-users-of-all-ages-with-contextualized-Gemini-starter-prompts-for-students.html" target="_blank" rel="noopener noreferrer">comunicado de agosto do Workspace Updates</a>. Agora a lógica se inverte: nada nasce ligado para o aluno.</p>

    <h2>Por que a Busca entrou no pacote</h2>

    <p>O ponto que mais pesa para a escola é a Busca. Segundo as entrevistas do executivo citadas pela imprensa americana, Busca e IA estão integradas demais para serem separadas. Na prática, a escola que quiser zero IA para os alunos terá de abrir mão também do buscador naquelas contas. Quem liga a Busca leva junto os resumos gerados por IA no topo da página.</p>

    <p>Para uma escola brasileira, isso significa que a decisão não é "IA sim ou não", e sim uma combinação: ligar a Busca e ensinar a desconfiar dos resumos, ou desligar e oferecer outro caminho de pesquisa. O guia sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">como checar se a resposta da IA está certa</a> pode virar material de aula para quem escolher a primeira opção.</p>

    <h2>Aprendizado Guiado no Classroom: o que o professor ganha</h2>

    <p>O Aprendizado Guiado é um modo do Gemini que quebra o problema em etapas e faz perguntas, como um tutor. Até aqui, o aluno podia ligar esse modo por conta própria no app, como mostramos no guia do <a href="/artigos/modo-estudo-do-chatgpt-e-aprendizado-guiado-do-gemini-como-usar">modo estudo do ChatGPT e Aprendizado Guiado do Gemini</a>. A novidade é que o professor agora cria e atribui uma atividade de Aprendizado Guiado dentro do Classroom, e o tutor fica ancorado no material da turma.</p>

    <p>A <a href="https://support.google.com/edu/classroom/answer/15410566?hl=en" target="_blank" rel="noopener noreferrer">central de ajuda do Gemini no Classroom</a> confirma que o professor pode criar e atribuir atividades de Aprendizado Guiado, Gems e cadernos do Gemini Notebook, e que o aluno conclui as atividades atribuídas. O professor recebe indicadores em tempo real de onde a turma está travando. A mesma página lembra que o Gemini pode errar e que o conteúdo gerado deve ser revisado antes de ir para os alunos.</p>

    <h3>Exemplo prático em uma turma</h3>

    <p>A professora Renata dá matemática para o 8º ano numa escola de Curitiba. Ela sobe no Classroom a lista de exercícios de equações do 1º grau e o resumo da aula, cria a atividade de Aprendizado Guiado e pede que cada aluno resolva três problemas com o tutor antes da aula de quinta. No dia seguinte, os indicadores mostram que metade da turma errou ao passar termos de um lado para o outro. Ela abre a aula com esse ponto, em vez de corrigir a lista inteira. O caderno da turma pode ser montado como no guia do <a href="/artigos/gemini-notebook-no-google-classroom-insights-do-professor-e-limites">Gemini Notebook no Classroom</a>.</p>

    <p>Um modelo de instrução para colar na atividade:</p>

    <pre><code>Você vai estudar equações do 1º grau usando só o material desta turma.
Não me dê a resposta final. Faça uma pergunta por vez,
espere minha resposta e me mostre onde errei.
Quando eu acertar três problemas seguidos, proponha um desafio
um pouco mais difícil e me peça para explicar o raciocínio com minhas palavras.</code></pre>

    <h2>O que a escola pode decidir desde já</h2>

    <p>Como o Google ainda não publicou a data, a escola tem tempo, mas não deve esperar o aviso para pensar. O comunicado de agosto já descreve a lógica de controle por grupo ou unidade organizacional: dá para ligar o Gemini no Classroom para um grupo e manter desligado para outro, por exemplo só para o ensino médio. A política pedagógica precisa vir antes do clique no painel.</p>

    <ul class="checklist">
      <li>Levante quem tem acesso hoje: quais séries usam Gemini, Gemini Notebook e Gemini no Classroom.</li>
      <li>Decida por série, não para a escola inteira: o que vale para o 3º ano do médio não precisa valer para o 6º ano.</li>
      <li>Defina o que acontece com a Busca, já que ela não pode ser separada da IA nas contas de aluno.</li>
      <li>Escolha uma turma piloto para testar o Aprendizado Guiado por quatro semanas antes de ampliar.</li>
      <li>Escreva um aviso curto às famílias explicando o que fica ligado, para quê e como os dados são tratados.</li>
      <li>Combine com os professores como a IA entra na avaliação, para não punir quem usou dentro das regras.</li>
    </ul>

    <p>As diretrizes nacionais ajudam a escrever essa política. O guia sobre <a href="/artigos/ia-na-escola-diretrizes-do-mec-e-do-cne-o-que-muda-para-professores-pais-e-alunos">IA na escola e as diretrizes do MEC e do CNE</a> resume o que já está definido no Brasil, e o texto sobre o <a href="/artigos/eca-digital-e-ia-o-que-muda-para-pais-criancas-chatbots-e-apps">ECA Digital e a IA</a> mostra as obrigações com crianças e adolescentes.</p>

    <h2>E para pais e alunos</h2>

    <p>Para a família, a mudança tende a ser invisível no dia a dia até a escola decidir. Se a conta escolar do filho perder o Gemini ou a Busca, a causa provável é a configuração da escola, e não um problema no aparelho. Vale perguntar à coordenação qual é a política, em vez de criar uma conta pessoal para contornar o bloqueio, o que tira o aluno das proteções da conta educacional. A central de ajuda do Google afirma que os dados dos alunos no Gemini do Classroom não são revistos por humanos nem usados para treinar modelos.</p>

    <div class="callout-box">
      <span class="callout-label">Para pais</span>
      <p>O Aprendizado Guiado ajuda quando o aluno responde de verdade às perguntas do tutor. Se a criança só copia, o resultado é o mesmo de colar a resposta. As dicas de <a href="/artigos/licao-de-casa-com-ia-como-ajudar-o-filho-sem-fazer-por-ele">lição de casa com IA sem fazer pelo filho</a> valem aqui também.</p>
    </div>

    <p>Quem estuda por conta própria, fora da conta escolar, continua com as opções pessoais do Google, como o <a href="/artigos/hub-do-estudante-do-gemini-cadernos-de-estudo-quiz-e-plano-gratis">hub do estudante do Gemini</a>, sujeitas às regras de idade do serviço.</p>

    <h2>Limites e o que ainda não se sabe</h2>

    <p>Há pontos em aberto. O Google não informou a data em que as contas passam a nascer desligadas, nem se escolas que já ligaram o Gemini terão o acesso mantido ou zerado. O piloto da Busca com Aprendizado Guiado começa só em escolas selecionadas dos Estados Unidos. E os estudos de ganho de aprendizagem divulgados foram feitos pela própria empresa, com amostra pequena e tempo curto, o que pede cautela antes de usar esses números para justificar compras ou mudanças de currículo.</p>

    <p>Também vale lembrar que a ferramenta não substitui a mediação. Um tutor que pergunta só funciona se o material da turma estiver certo e se o professor acompanhar os indicadores. O guia sobre o <a href="/artigos/gemini-notebook-antigo-notebooklm-o-que-mudou">Gemini Notebook, antigo NotebookLM</a> ajuda a organizar as fontes que alimentam esse tutor.</p>

    <h2>Erros comuns da escola nessa transição</h2>

    <p>O primeiro erro é esperar o Google desligar tudo e só então discutir. Quando as contas mudarem, professores que já usavam a ferramenta ficam sem aviso, e alunos ficam sem Busca no meio de um trabalho. O segundo é decidir pela escola inteira de uma vez, ignorando que as idades e os usos são diferentes. O terceiro é ligar o Aprendizado Guiado e não ler os indicadores, desperdiçando a parte mais útil para o professor.</p>

    <p>O quarto é não falar com as famílias. Uma mensagem de cinco linhas evita boatos e pedidos de exceção. O quinto é confundir conta escolar com conta pessoal: regras, proteção de dados e histórico são diferentes, como explica o texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">o que você entrega à IA sem perceber</a>.</p>

    <h2>Próximo passo</h2>

    <p>Se você é coordenador, marque uma reunião curta com a equipe de TI e dois professores ainda em novembro, levante quem tem acesso hoje e escolha a turma piloto do Aprendizado Guiado. Se é professor, monte uma atividade com uma lista que você já usa e compare com a correção tradicional. Para preparar a turma para a próxima avaliação, o plano de <a href="/artigos/testar-se-em-vez-de-reler-pratica-de-recuperacao-com-ia-para-estudar-e-lembrar">testar-se em vez de reler</a> combina bem com o tutor. Conte para a gente como a sua escola decidiu.</p>
  `,
  faq: [
    {
      question: "O Gemini já está desligado para os alunos?",
      answer:
        "Ainda não. O Google anunciou em 03/11/2026 que Gemini, Gemini Notebook, Gemini no Classroom e Busca ficarão desligados nas contas de alunos do ensino básico até o administrador ligar, mas disse que vai detalhar o cronograma nos próximos meses.",
    },
    {
      question: "Por que a Busca do Google também será desligada?",
      answer:
        "Segundo o Google, a Busca e a IA estão integradas e não podem ser separadas nas contas de alunos. A escola que quiser bloquear toda a IA terá de bloquear também o buscador nessas contas.",
    },
    {
      question: "O que é a atividade de Aprendizado Guiado no Classroom?",
      answer:
        "É uma atividade que o professor cria e atribui no Classroom. O aluno estuda com um tutor do Gemini ancorado no material da turma, que faz perguntas e quebra o problema em etapas, e o professor acompanha indicadores de onde a turma tem dificuldade.",
    },
    {
      question: "O Aprendizado Guiado no Classroom já funciona no Brasil?",
      answer:
        "Sim. O Google informou que o recurso ficou disponível no mundo todo no Classroom a partir de 03/11/2026. Já o piloto do Aprendizado Guiado na Busca começa apenas em escolas selecionadas dos Estados Unidos.",
    },
    {
      question: "Os dados dos alunos são usados para treinar a IA?",
      answer:
        "A central de ajuda do Google afirma que os dados dos alunos no Gemini do Classroom não são revistos por humanos nem usados para treinar modelos. Isso vale para a conta escolar, não para contas pessoais.",
    },
  ],
  quiz: [
    {
      question: "Se a escola quiser bloquear toda a IA nas contas de alunos, o que mais fica bloqueado?",
      options: ["O Gmail", "A Busca do Google", "O Google Drive"],
      answer: 1,
      explanation: "O Google disse que Busca e IA não podem ser separadas nas contas de alunos.",
    },
    {
      question: "Quem cria a atividade de Aprendizado Guiado no Classroom?",
      options: ["O aluno", "O professor", "O Google, automaticamente"],
      answer: 1,
      explanation: "O professor cria e atribui a atividade, ancorada no material da turma.",
    },
  ],
};
