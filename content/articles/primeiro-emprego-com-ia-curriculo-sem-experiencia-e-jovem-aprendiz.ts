import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "primeiro-emprego-com-ia-curriculo-sem-experiencia-e-jovem-aprendiz",
  title: "Primeiro emprego com IA: currículo sem experiência e aprendiz",
  seoTitle: "Primeiro emprego com IA: currículo sem experiência",
  excerpt:
    "Primeiro emprego com IA: monte currículo sem experiência, transforme projetos em resultados, entenda o Jovem Aprendiz e treine a conversa com o recrutador.",
  metaDescription:
    "Primeiro emprego com IA: prompts para currículo sem experiência, como valorizar projetos e voluntariado, o que o Ministério do Trabalho diz do Jovem Aprendiz.",
  category: "carreira",
  articleSubcategory: "curriculo-e-portfolio",
  date: "2026-10-15",
  readTime: 8,
  imageQuery: "young person first job resume desk",
  seed: 342,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Currículo sem experiência se monta com o que você já fez: projetos escolares, voluntariado, cursos e tarefas do dia a dia, descritos com ação e resultado reais, sem inventar nada.",
    "A IA ajuda a organizar, reescrever e treinar, mas quem escolhe os fatos é você: texto inventado cai na primeira pergunta da entrevista.",
    "Segundo o Ministério do Trabalho, o Jovem Aprendiz é uma política pública para jovens de 14 a 24 anos, exige matrícula em curso de aprendizagem profissional e é contratado por empresas de médio e grande porte.",
  ],
  content: `
    <p>Para montar um primeiro currículo com IA sem ter experiência de trabalho, liste o que você já fez na escola, em cursos, em projetos e em tarefas de casa ou voluntariado, descreva cada item com uma ação e um resultado verdadeiro, e peça à IA para organizar e corrigir o texto, nunca para inventar o que não aconteceu.</p>

    <p>Esse é o grande nó de quem busca o primeiro emprego: as vagas pedem experiência, e a experiência só vem trabalhando. A saída não é fingir um histórico, e sim mostrar capacidade com o que existe. Neste guia você vê como levantar o material, os prompts que funcionam, o que o Ministério do Trabalho diz sobre o programa Jovem Aprendiz, como preparar a primeira conversa com o recrutador e os erros que derrubam candidatos iniciantes. Se o seu objetivo é ter a IA como habilidade no currículo, o texto sobre <a href="/artigos/como-colocar-habilidades-de-ia-no-curriculo">como colocar habilidades de IA no currículo</a> complementa este.</p>

    <h2>O que entra em um currículo sem experiência</h2>

    <p>Recrutador de vaga de entrada sabe que você não tem histórico profissional. Ele procura sinais de responsabilidade, vontade de aprender e capacidade de concluir tarefas. Esses sinais aparecem em lugares que muita gente ignora:</p>

    <ul class="checklist">
      <li>Projetos e trabalhos escolares com apresentação, em grupo ou sozinho.</li>
      <li>Voluntariado, igreja, grêmio, time esportivo, evento do bairro.</li>
      <li>Cursos online e presenciais, mesmo curtos, com carga horária e nome da instituição.</li>
      <li>Tarefas reais: ajudar um parente em um comércio, cuidar de uma página de rede social, organizar uma rifa.</li>
      <li>Ferramentas que você domina, como planilha, editor de texto, editor de vídeo, atendimento pelo WhatsApp.</li>
    </ul>

    <p>O segredo é a descrição. "Ajudei no comércio do meu tio" não diz nada. "Organizei o estoque de camisetas em planilha e avisei quando o tamanho M acabou" mostra iniciativa. A diferença entre os dois textos é o que a IA pode ajudar a transformar, desde que você forneça o fato.</p>

    <h2>Como usar a IA sem inventar nada</h2>

    <p>Use a IA como editora, não como autora. O fluxo é simples: você escreve um rascunho bruto, a IA reorganiza em frases curtas com verbo de ação, e você confere linha por linha se tudo é verdade. Se quiser aprofundar a técnica de pedir bem, o guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">como escrever comandos que funcionam</a> ajuda, e a lista de <a href="/artigos/melhores-ias-para-criar-curriculo-e-carta-de-apresentacao">melhores IAs para currículo e carta de apresentação</a> compara as opções.</p>

    <h3>Prompt 1: levantar o material</h3>

    <pre><code>Tenho 18 anos e nunca trabalhei com carteira assinada. Vou te contar atividades que já fiz (escola, cursos, voluntariado, ajuda em casa). Faça perguntas, uma de cada vez, para descobrir o que eu fiz, com que ferramentas, quantas pessoas ou quantos itens estavam envolvidos e qual foi o resultado. Não invente nada e não complete lacunas por mim.</code></pre>

    <h3>Prompt 2: transformar em tópicos de currículo</h3>

    <pre><code>Com base nas respostas abaixo, escreva 3 tópicos de currículo para uma vaga de auxiliar administrativo, cada um com até 20 palavras, começando com verbo no passado. Use só informações que eu dei. Se faltar número ou resultado, deixe entre colchetes para eu preencher. Respostas: [cole aqui]</code></pre>

    <h3>Prompt 3: revisar o texto final</h3>

    <pre><code>Revise este currículo de primeiro emprego. Aponte erros de português, frases vagas e informações que um recrutador poderia duvidar. Não adicione experiências novas nem reescreva o que está correto.</code></pre>

    <h2>Exemplo prático (cenário hipotético)</h2>

    <p>Lucas, 18 anos, terminou o ensino médio e nunca trabalhou. Ele organizou, com amigos, um campeonato de futebol do bairro. Na conversa com a IA, listou fatos: 8 times, 64 jogadores inscritos, tabela de jogos feita em planilha, avisos pelo WhatsApp e cobrança de uma taxa simples de inscrição para pagar o juiz. O texto do currículo ficou assim:</p>

    <ul>
      <li>Organizei campeonato de bairro com 8 times e 64 jogadores, com tabela de jogos em planilha.</li>
      <li>Comuniquei datas e mudanças pelo WhatsApp, reduzindo faltas por falta de aviso.</li>
      <li>Controlei as inscrições e o pagamento do árbitro, com prestação de contas aos participantes.</li>
    </ul>

    <p>Os números aqui são fictícios, criados só para ilustrar o formato. O ponto é o método: ação, contexto e resultado verdadeiro. Note que a frase sobre "reduzir faltas" só deve entrar se isso realmente aconteceu, e por isso o prompt 2 manda deixar colchetes quando falta resultado.</p>

    <h2>Estrutura simples de currículo para quem está começando</h2>

    <table>
      <thead>
        <tr><th>Seção</th><th>O que colocar</th><th>Dica</th></tr>
      </thead>
      <tbody>
        <tr><td>Cabeçalho</td><td>Nome, cidade, telefone, e-mail profissional</td><td>E-mail com seu nome, sem apelidos</td></tr>
        <tr><td>Objetivo</td><td>1 frase com a área ou vaga</td><td>Mude conforme a vaga</td></tr>
        <tr><td>Formação</td><td>Escola, curso, ano de conclusão</td><td>Inclua cursos curtos</td></tr>
        <tr><td>Atividades e projetos</td><td>3 a 5 tópicos com ação e resultado</td><td>Priorize o que combina com a vaga</td></tr>
        <tr><td>Habilidades</td><td>Ferramentas e idiomas que você realmente usa</td><td>Não liste o que não sabe</td></tr>
      </tbody>
    </table>

    <p>Uma página basta. Para entender como os filtros de seleção leem o documento, vale ver o texto sobre <a href="/artigos/curriculo-e-triagem-com-ia-como-recrutadores-filtram-candidatos">currículo e triagem com IA</a>, e para organizar um conjunto de provas de habilidade, o de <a href="/artigos/como-montar-portfolio-de-habilidades-de-ia-para-recrutadores">portfólio de habilidades para recrutadores</a>.</p>

    <h2>Jovem Aprendiz: o que diz o Ministério do Trabalho</h2>

    <p>Para quem tem entre 14 e 24 anos, o programa Jovem Aprendiz é uma porta de entrada. A <a href="https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/aprendizagem-profissional" target="_blank" rel="noopener noreferrer">página oficial do Ministério do Trabalho e Emprego</a> descreve a aprendizagem profissional como uma política pública de inclusão de adolescentes e jovens de 14 a 24 anos, e informa que, para pessoas com deficiência, não há limite de idade. A mesma página afirma que empresas de grande e médio porte podem contratar esses jovens e que a contratação exige que o jovem esteja matriculado em curso de aprendizagem profissional.</p>

    <p>Em outras palavras, o caminho passa por uma entidade formadora, e não só por enviar currículo para a empresa. Os detalhes de duração do contrato, jornada e remuneração não aparecem na página, que remete ao Manual da Aprendizagem. Antes de decidir, consulte esse manual e as vagas da sua cidade, porque as regras têm exceções. Se a empresa pedir currículo, use o mesmo método deste guia, adaptando ao curso que você está fazendo.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Programa de aprendizagem sério não cobra taxa de inscrição do jovem. Se alguém pedir pagamento para garantir vaga, desconfie e procure o Ministério do Trabalho ou a escola. O guia de <a href="/artigos/como-usar-ia-para-checar-mensagem-suspeita-e-evitar-golpes">como checar mensagem suspeita</a> ajuda a identificar golpes.</p></div>

    <h2>Treinar a primeira conversa com o recrutador</h2>

    <p>A página <a href="https://grow.google/certificates/interview-warmup/" target="_blank" rel="noopener noreferrer">How to Prepare for an Interview</a>, do Grow with Google, lembra quatro tipos de pergunta: "fale sobre você" (a ideia é um discurso de 30 a 60 segundos), perguntas comportamentais, situacionais e de personalidade. Para as comportamentais, a página recomenda o método STAR: situação, tarefa, ação e resultado, com detalhes específicos. A página cita o Gemini Live como forma de simular entrevista em tempo real.</p>

    <p>Quem for treinar por voz deve conferir os requisitos na <a href="https://support.google.com/gemini/answer/15274899?hl=pt-BR" target="_blank" rel="noopener noreferrer">página de ajuda do Gemini Live</a>, que informa, por exemplo, que o recurso não está disponível na versão web do Gemini. O passo a passo completo está no guia de <a href="/artigos/como-se-preparar-para-entrevistas-de-emprego-usando-ia">como se preparar para entrevistas com IA</a>. Para o primeiro emprego, ensaie três respostas curtas: quem você é, por que quer a vaga e uma situação em que você resolveu um problema. O mesmo vale para o <a href="/artigos/networking-com-ia-mensagens-para-recrutadores-e-indicacoes">networking com IA</a>: uma mensagem objetiva para conhecidos que possam indicar vaga.</p>

    <h2>Erros comuns de quem busca o primeiro emprego</h2>

    <ul>
      <li>Inventar experiência ou cargo. A primeira pergunta de verificação derruba o candidato.</li>
      <li>Usar o mesmo currículo para toda vaga, sem adaptar o objetivo e os tópicos.</li>
      <li>Colar dados pessoais sensíveis, como CPF e endereço completo, em ferramentas de IA. O texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a> mostra o que evitar.</li>
      <li>Deixar o texto "perfeito demais", com frases de IA que você não saberia explicar numa conversa.</li>
      <li>Não revisar telefone e e-mail, o que impede o recrutador de falar com você.</li>
      <li>Desanimar depois de poucas respostas. O <a href="/artigos/plano-de-carreira-com-ia-metas-de-90-dias">plano de carreira com metas de 90 dias</a> ajuda a manter o ritmo.</li>
    </ul>

    <h2>Seu próximo passo</h2>

    <p>Reserve 40 minutos hoje: escreva dez atividades que você já fez, use o prompt 1 para a IA fazer perguntas e monte três tópicos com o prompt 2. Depois peça a alguém de confiança para ler e dizer se faz sentido. Se você sente que a insegurança atrapalha, leia o texto sobre <a href="/artigos/sindrome-do-impostor-usar-ia-nao-te-torna-menos-capaz">síndrome do impostor</a>. Para mais caminhos, visite a categoria <a href="/categoria/carreira">Carreira</a>.</p>
  `,
  faq: [
    {
      question: "Como fazer currículo sem experiência usando IA?",
      answer:
        "Liste atividades reais de escola, cursos, voluntariado e tarefas do dia a dia, descreva cada uma com ação e resultado verdadeiros e peça à IA para organizar em tópicos curtos. Revise tudo e remova qualquer frase que você não consiga explicar numa entrevista.",
    },
    {
      question: "A IA pode inventar experiência no meu currículo?",
      answer:
        "Pode, se você pedir ou deixar lacunas abertas, e isso é um erro grave. Instrua a IA a usar só os fatos que você deu e a deixar colchetes quando faltar informação. Recrutador faz perguntas de verificação, e uma mentira descoberta pode custar a vaga.",
    },
    {
      question: "Qual a idade do Jovem Aprendiz?",
      answer:
        "Segundo a página do Ministério do Trabalho e Emprego, a aprendizagem profissional é voltada a adolescentes e jovens de 14 a 24 anos, e não há limite de idade para pessoas com deficiência. Cada programa pode ter requisitos próprios. Consulte o Manual da Aprendizagem e a entidade formadora da sua cidade.",
    },
    {
      question: "Todo mundo pode ser Jovem Aprendiz?",
      answer:
        "Não automaticamente. Pela página do Ministério do Trabalho, a contratação exige matrícula em curso de aprendizagem profissional, e o programa é para empresas de médio e grande porte. Verifique a idade, a escolaridade pedida e as vagas abertas na sua região antes de se candidatar.",
    },
    {
      question: "Preciso pagar para entrar em programa de aprendiz?",
      answer:
        "Programa sério não deve cobrar do jovem para garantir vaga. Se pedirem pagamento, desconfie e confirme a entidade no Ministério do Trabalho ou na escola. Não envie documentos nem dados pessoais a quem você não conseguiu verificar, e nunca pague taxa por promessa de contratação.",
    },
  ],
  quiz: [
    {
      question: "Qual é o papel da IA ao montar o primeiro currículo?",
      options: [
        "Inventar experiências para preencher o texto",
        "Organizar e revisar fatos verdadeiros que você forneceu",
        "Escolher a vaga no seu lugar",
      ],
      answer: 1,
      explanation:
        "A IA deve atuar como editora: organiza, corrige e sugere formato, mas os fatos precisam ser seus e verdadeiros.",
    },
    {
      question: "O que a contratação de Jovem Aprendiz exige, segundo o Ministério do Trabalho?",
      options: [
        "Matrícula em curso de aprendizagem profissional",
        "Diploma de ensino superior",
        "Pagamento de taxa de inscrição",
      ],
      answer: 0,
      explanation:
        "A página do MTE diz que a contratação exige que o jovem esteja matriculado em curso de aprendizagem profissional.",
    },
  ],
};
