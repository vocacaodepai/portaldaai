import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "ia-na-escola-diretrizes-do-mec-e-do-cne-o-que-muda-para-professores-pais-e-alunos",
  title: "IA na escola: o que o MEC orienta para professores e pais",
  seoTitle: "IA na escola: diretrizes do MEC para professores e pais",
  excerpt:
    "IA na escola já tem documento do MEC e orientação da Unesco: veja o que professores, pais e alunos podem fazer, o que evitar e como se preparar em 2026.",
  metaDescription:
    "IA na escola: entenda o documento do MEC de abril de 2026, a orientação da Unesco e o que muda para professores, pais e alunos, com exemplos e checklist de uso seguro.",
  category: "futuro",
  articleSubcategory: "regulacao-e-etica",
  date: "2026-10-20",
  readTime: 7,
  imageQuery: "teacher classroom students tablet",
  seed: 474,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O MEC lançou em abril de 2026 o documento Inteligência Artificial na Educação Básica, que trata a IA como apoio ao trabalho do professor e pede que todo uso venha acompanhado de ensino crítico sobre a ferramenta.",
    "A Unesco recomenda limite de idade para conversas livres com IA generativa, proteção de dados e preparo dos educadores, e o Brasil já se apoia no marco de competências em IA para professores da própria Unesco.",
    "Pais e professores ganham mais ao combinar regras claras (o que pode, o que precisa ser declarado) com tarefas em que o aluno explica o raciocínio, e não só entrega o resultado.",
  ],
  content: `
    <p>IA na escola deixou de ser tema de debate e virou orientação oficial: em 8 de abril de 2026 o MEC apresentou o documento Inteligência Artificial na Educação Básica, com princípios para o uso pedagógico e ético da tecnologia por estudantes, professores e gestores. A ideia central é que a IA apoie o trabalho do professor, sem substituí-lo, e que todo uso venha com ensino crítico sobre a própria ferramenta.</p>

    <p>Este guia traduz o que se sabe até 20/10/2026 em ações práticas para quem está na sala de aula e para quem acompanha o filho em casa. Ele não é parecer jurídico: normas de educação mudam, e a regra da sua escola ou rede vale mais do que qualquer resumo.</p>

    <h2>O que o MEC publicou sobre IA na educação básica</h2>

    <p>Segundo a <a href="https://www.opovo.com.br/noticias/brasil/2026/04/09/mec-apresenta-documento-para-uso-da-ia-nas-escolas-saiba.html" target="_blank" rel="noopener noreferrer">reportagem do O Povo sobre o lançamento</a>, o documento traz diretrizes, orientações curriculares e princípios para estudantes, professores e gestores. Entre os usos citados para o professor estão correção automatizada, detecção de plágio, criação de materiais didáticos, planos de aula e apresentações, além de apoio ao planejamento e à acessibilidade dos materiais.</p>

    <p>Para a aprendizagem, o texto menciona tutores inteligentes, chatbots educacionais e ambientes personalizados. Para a gestão, fala em análise de dados educacionais e organização de turmas e grades. A matéria também lembra o alinhamento com a LGPD e com o ECA Digital, tema que o portal explicou em <a href="/artigos/eca-digital-e-ia-o-que-muda-para-pais-criancas-chatbots-e-apps">ECA Digital e IA: o que muda para pais, crianças, chatbots e apps</a>.</p>

    <p>Um ponto que o MEC repete: usar IA não basta, é preciso ensinar sobre ela. A secretária de Educação Básica, Kátia Schweickardt, resumiu a postura na frase citada pela reportagem: "Não vamos ter medo, vamos aprender a usar".</p>

    <h2>O que a Unesco recomenda e por que isso importa aqui</h2>

    <p>A <a href="https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research" target="_blank" rel="noopener noreferrer">orientação da Unesco para IA generativa na educação e na pesquisa</a> propõe definir um limite de idade para conversas independentes com plataformas de IA generativa, tornar obrigatória a proteção de dados pessoais e construir marcos de políticas coerentes. A organização também observa que as ferramentas chegam mais rápido do que as regras nacionais.</p>

    <p>Na formação de professores, a reportagem sobre o MEC cita o Marco Referencial de Competências em IA para Professores, de 2024, da Unesco, com cinco dimensões: mentalidade, ética, fundamentos e aplicações, pedagogia e IA para o desenvolvimento profissional. É uma boa régua para a escola montar um plano de capacitação, mesmo sem esperar nova norma.</p>

    <p>O recado para o leitor comum é simples. Onde a regra ainda não existe, a escola e a família precisam criar a sua, com base em princípios parecidos: proteger dados, definir idade e uso, e manter o humano no comando.</p>

    <h2>O que muda para o professor na prática</h2>

    <p>O ganho mais direto está no trabalho que consome tempo fora da sala: preparar atividades, adaptar um texto para um aluno com dificuldade, montar rubricas de correção. Quem já usa assistentes para isso pode começar pelo roteiro do guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">como escrever comandos que funcionam</a>.</p>

    <p>Um prompt de exemplo para plano de aula, que você ajusta ao seu contexto:</p>

    <pre><code>Sou professor de Ciências do 7º ano em escola pública. Crie um plano de aula de 50 minutos sobre cadeias alimentares, com objetivo, atividade de abertura, atividade em duplas, uma pergunta de verificação e uma adaptação para aluno com dificuldade de leitura. Use exemplos do cerrado brasileiro e não invente dados numéricos.</code></pre>

    <p>O cuidado vem depois: leia, corrija e confira fatos. A IA erra com segurança, e o guia sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a> mostra como checar. Nada de colar nome, nota ou laudo de aluno em ferramenta externa, assunto que o <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">guia de privacidade</a> explica.</p>

    <h2>O que muda para pais e responsáveis</h2>

    <p>Em casa, a pergunta deixa de ser "pode usar IA?" e passa a ser "para quê, e o que o meu filho aprende com isso?". Uma regra que funciona: a IA pode explicar, dar exemplo e corrigir, mas quem faz a tarefa é o aluno. O artigo sobre <a href="/artigos/licao-de-casa-com-ia-como-ajudar-o-filho-sem-fazer-por-ele">lição de casa com IA</a> traz o passo a passo.</p>

    <p>Para estudar para prova, vale usar a IA como parceira de treino, com perguntas e correção comentada, como mostra o guia de <a href="/artigos/como-usar-ia-para-estudar-para-provas-e-concursos">estudo para provas e concursos</a>. Se a família contrata reforço, o texto sobre <a href="/artigos/aulas-particulares-com-ia-como-montar-reforco-escolar">aulas particulares com IA</a> ajuda a separar o que a máquina faz do que exige o professor.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Muitos assistentes de IA têm idade mínima nos termos de uso. Antes de liberar para criança, leia as regras do serviço e prefira contas supervisionadas por adulto.</p></div>

    <h2>Quadro de decisão: pode, depende ou evite</h2>

    <table>
      <thead>
        <tr><th>Situação</th><th>Classificação</th><th>Por quê</th></tr>
      </thead>
      <tbody>
        <tr><td>Professor gera rascunho de plano de aula e revisa</td><td>Pode</td><td>Apoio ao planejamento, com revisão humana</td></tr>
        <tr><td>Aluno pede explicação de um conceito e depois resolve sozinho</td><td>Pode</td><td>IA como tutor, não como autora</td></tr>
        <tr><td>Aluno entrega redação inteira feita pela IA sem declarar</td><td>Evite</td><td>Quebra a regra de autoria da escola</td></tr>
        <tr><td>Correção automatizada de provas sem conferência</td><td>Depende</td><td>Exige revisão do professor e transparência de critérios</td></tr>
        <tr><td>Enviar laudo ou dado pessoal do aluno para IA externa</td><td>Evite</td><td>Risco de privacidade e de descumprir a LGPD</td></tr>
        <tr><td>Detector de IA decidindo sozinho se houve fraude</td><td>Evite</td><td>Detectores erram, como explica o texto sobre <a href="/artigos/detector-de-texto-de-ia-funciona-ou-nao-como-saber-se-foi-escrito-por-ia">detector de texto de IA</a></td></tr>
      </tbody>
    </table>

    <h2>Exemplo: escola municipal que cria uma regra de uso em duas semanas</h2>

    <p>Imagine uma escola com 400 alunos do 6º ao 9º ano e 22 professores. A direção reúne a equipe numa tarde de formação e define três regras. Primeira: toda atividade que permitir IA traz no enunciado um aviso, por exemplo "pode usar IA para tirar dúvidas, mas anexe o prompt que usou". Segunda: nenhum dado pessoal de aluno entra em ferramenta externa. Terceira: ao menos uma avaliação por bimestre é feita sem recursos digitais, com explicação oral.</p>

    <p>Na semana seguinte, cada professor escolhe uma tarefa para adaptar. O de História troca "resuma a Revolução Francesa" por "peça à IA um resumo, aponte dois erros ou omissões e explique em voz alta o que corrigiu". O custo em ferramenta pode ser zero (muitos assistentes têm versão gratuita) e o resto são algumas horas de planejamento. O resultado não é garantia de nota melhor, mas dá evidência de que o aluno entendeu.</p>

    <p>Esse tipo de desenho conversa com a ideia de <a href="/artigos/habilidades-humanas-que-a-ia-nao-substitui-no-trabalho">habilidades humanas que a IA não substitui</a>: pensar criticamente, explicar e decidir.</p>

    <h2>Erros comuns ao levar IA para a escola</h2>

    <ul class="checklist">
      <li>Proibir tudo sem explicar, o que empurra o uso para o escondido.</li>
      <li>Liberar tudo sem regra de autoria e de dados.</li>
      <li>Confiar em detector de IA como prova de fraude.</li>
      <li>Usar a ferramenta para corrigir sem ler o resultado.</li>
      <li>Esquecer a formação do professor: sem treino, a regra vira papel.</li>
      <li>Ignorar a conectividade: nem toda escola tem internet estável e equipamento.</li>
    </ul>

    <p>O último ponto importa. A própria reportagem sobre o MEC cita que 71,7% das escolas do país estão conectadas para fins pedagógicos, o que mostra que parte da rede ainda depende de planejamento sem tela.</p>

    <h2>Como acompanhar as normas sem se perder</h2>

    <p>O assunto tem duas camadas. A primeira é o documento orientador do MEC, que serve de referência pedagógica. A segunda são as diretrizes do Conselho Nacional de Educação, que, segundo reportagens e escritórios de advocacia que acompanham o tema, tratam da IA em todos os níveis de ensino e dependem de homologação para ter força normativa. Como não conseguimos abrir o texto oficial na data de verificação (20/10/2026), confira o status no site do CNE e do MEC antes de citar a regra para a sua escola.</p>

    <p>Para o contexto mais amplo de lei, o texto sobre a <a href="/artigos/lei-de-ia-no-brasil-o-que-muda-para-quem-usa">lei de IA no Brasil</a> mostra o que está em discussão no Congresso, e o <a href="/artigos/plano-brasileiro-de-ia-pbia-o-que-muda-para-voce">Plano Brasileiro de IA</a> explica a estratégia do governo. Quer ver como outro lugar reagiu? A notícia sobre a <a href="/noticias/nova-york-moratoria-ia-generativa-escolas-publicas">moratória de IA generativa em escolas públicas de Nova York</a> mostra um caminho bem diferente do brasileiro.</p>

    <p>Se você é professor, comece escolhendo uma única tarefa para adaptar esta semana. Se é pai ou mãe, combine com a escola quais regras valem. E para decidir o que entra na rotina, o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher ferramenta de IA com segurança</a> ajuda.</p>
  `,
  faq: [
    {
      question: "O MEC proibiu IA nas escolas?",
      answer:
        "Não. O documento Inteligência Artificial na Educação Básica, apresentado em abril de 2026, orienta o uso pedagógico e ético da IA, com ensino crítico sobre a ferramenta. A reportagem do O Povo mostra usos previstos para professores, alunos e gestão, sempre com o professor no centro do processo.",
    },
    {
      question: "Meu filho pode usar ChatGPT ou Gemini para estudar?",
      answer:
        "Depende da idade e das regras de cada serviço, que costumam ter idade mínima. A Unesco recomenda definir limite de idade para conversas livres com IA generativa. Em geral, prefira uso acompanhado por adulto, para tirar dúvidas, e peça que a criança explique com as próprias palavras.",
    },
    {
      question: "Professor pode usar IA para corrigir prova?",
      answer:
        "Pode como apoio, desde que revise o resultado e não envie dados pessoais do aluno para ferramentas externas. O MEC cita correção automatizada entre os usos para professores, mas a decisão da nota continua humana. Informe aos alunos os critérios usados na correção.",
    },
    {
      question: "Detector de IA prova que o aluno colou?",
      answer:
        "Não. Detectores de texto de IA erram nos dois sentidos e não devem ser prova única de fraude. Combine conversa com o aluno, pedido de rascunhos e explicação oral do trabalho. Tarefas desenhadas para exigir raciocínio próprio funcionam melhor que vigilância.",
    },
    {
      question: "As diretrizes do CNE já valem?",
      answer:
        "Segundo reportagens e escritórios de advocacia, o parecer do CNE sobre IA na educação depende de homologação do MEC para ter força normativa. Não conseguimos abrir o texto oficial em 20/10/2026, então confira o status nos sites do CNE e do MEC antes de aplicar.",
    },
  ],
};
