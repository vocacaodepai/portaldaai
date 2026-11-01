import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "caderno-de-erros-com-ia-estudar-pelo-que-voce-errou-e-nao-repetir-o-erro",
  title: "Caderno de erros com IA: estude pelo que você errou",
  seoTitle: "Caderno de erros com IA: estude pelo que errou",
  category: "iniciantes",
  articleSubcategory: "estudos",
  excerpt:
    "Aprenda a montar um caderno de erros com IA: registrar cada questão errada, achar a causa, criar exercícios do mesmo tipo e revisar em datas certas, sem decorar resposta.",
  metaDescription:
    "Como fazer um caderno de erros com ajuda da IA: tabela de registro, classificação da causa, prompts para gerar exercícios novos, flashcards e revisão semanal para provas e concursos.",
  date: "2026-11-01",
  readTime: 7,
  imageQuery: "student notebook red pen corrections desk",
  seed: 1026,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O caderno de erros guarda cada questão que você errou com a causa do erro (conteúdo, atenção, tempo ou interpretação), porque o tipo de erro indica o que estudar.",
    "A IA ajuda a explicar o raciocínio correto, a classificar a causa e a criar exercícios novos do mesmo tipo, mas o registro e a decisão sobre o que revisar continuam com você.",
    "Revisar o caderno em datas fixas (24 horas, uma semana e um mês) e refazer as questões sem olhar a resposta rende mais do que reler o resumo.",
  ],
  content: `
    <p>Caderno de erros é um registro, em papel ou planilha, de cada questão que você errou, com a causa do erro e a resposta certa explicada com suas palavras. Com IA, você acelera a explicação e a criação de exercícios parecidos. Revise o caderno em datas fixas e refaça as questões sem olhar o gabarito.</p>

    <p>Quem estuda para provas costuma fazer muitas questões, conferir o gabarito e seguir em frente. O erro vira número no placar, e não material de estudo. O caderno muda isso: cada erro é uma pista do que ainda não está firme. Aqui vai o método completo, com tabela, prompts e uma rotina semanal. Ele combina com a prática de <a href="/artigos/testar-se-em-vez-de-reler-pratica-de-recuperacao-com-ia-para-estudar-e-lembrar">testar-se em vez de reler</a>, que trata de puxar a resposta da memória.</p>

    <h2>Por que registrar os erros</h2>

    <p>Um erro tem causas diferentes, e cada uma pede uma correção. Se você errou porque não sabia o conteúdo, precisa estudar o assunto. Se errou por desatenção, precisa de um hábito de leitura. Se errou por falta de tempo, precisa treinar ritmo. Sem registrar, tudo parece "falta de estudo" e a solução é sempre estudar mais do mesmo.</p>

    <p>O caderno também mostra padrões que a memória esconde. Depois de 30 questões erradas, é comum perceber que metade vem de dois ou três temas. Esse mapa vale mais do que mais horas de estudo espalhadas. O guia de <a href="/artigos/como-usar-ia-para-estudar-para-provas-e-concursos">estudar para provas e concursos com IA</a> traz o contexto geral de planejamento.</p>

    <h2>A tabela do caderno de erros</h2>

    <p>Use uma planilha simples, no Google Planilhas ou no Excel, ou um caderno de papel com as mesmas colunas. Menos colunas é melhor: se for trabalhoso, você abandona.</p>

    <table>
      <thead>
        <tr><th>Coluna</th><th>O que escrever</th></tr>
      </thead>
      <tbody>
        <tr><td>Data e origem</td><td>Dia e de onde veio a questão (simulado, lista, prova antiga)</td></tr>
        <tr><td>Assunto</td><td>Tema em poucas palavras, como regra de três ou interpretação de texto</td></tr>
        <tr><td>O que eu respondi e o que era certo</td><td>As duas respostas, lado a lado</td></tr>
        <tr><td>Causa do erro</td><td>Conteúdo, atenção, tempo, interpretação ou chute</td></tr>
        <tr><td>Explicação com minhas palavras</td><td>Duas ou três frases, sem copiar o gabarito</td></tr>
        <tr><td>Próxima revisão</td><td>Data marcada</td></tr>
      </tbody>
    </table>

    <p>A coluna mais importante é a da explicação com as suas palavras. Se você não consegue explicar, ainda não aprendeu. A <a href="/artigos/tecnica-feynman-com-ia-explicar-com-suas-palavras-e-achar-as-falhas-antes-da-prova">técnica Feynman com IA</a> usa exatamente essa ideia para achar as falhas.</p>

    <h2>Como a IA entra no processo</h2>

    <p>A IA é útil em três momentos: entender o erro, classificar a causa e gerar prática nova. Em nenhum deles ela substitui o seu esforço de tentar de novo.</p>

    <h3>1. Entender o raciocínio certo</h3>

    <pre><code>Estou estudando [assunto]. Errei esta questão: [cole o enunciado e as alternativas]. Marquei [letra] e o gabarito é [letra]. Não me dê a resposta pronta de uma vez: primeiro faça 3 perguntas para eu descobrir onde o meu raciocínio saiu do caminho. Depois explique o passo a passo correto em até 120 palavras.</code></pre>

    <h3>2. Classificar a causa</h3>

    <pre><code>Com base no que eu respondi e no que era o certo, indique qual foi a causa mais provável do erro: falta de conteúdo, desatenção, tempo, interpretação do enunciado ou chute. Justifique em uma frase e diga o que devo treinar na próxima semana.</code></pre>

    <h3>3. Criar exercícios do mesmo tipo</h3>

    <pre><code>Crie 5 questões novas no mesmo estilo e nível da que errei, sobre [assunto], com 4 alternativas cada. Não mostre o gabarito: espere eu responder e só depois corrija e explique cada alternativa errada.</code></pre>

    <p>Atenção: a IA pode errar a explicação e inventar questões com gabarito duvidoso. Confira sempre no material oficial, no livro ou com o professor. O texto sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a> mostra como checar. Para questões reais, prefira provas antigas: a <a href="https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/provas-e-gabaritos" target="_blank" rel="noopener noreferrer">página de provas e gabaritos do Inep</a> lista as provas do Enem de 1998 a 2025, e o conteúdo é publicado pelo órgão oficial.</p>

    <h2>Rotina semanal de 40 minutos</h2>

    <p>Um exemplo para quem se prepara para um concurso ou vestibular e faz 20 questões por dia: nesse ritmo, são 140 por semana, e talvez 30 erros. Não dá para revisar tudo com a mesma profundidade, então a rotina abaixo foca no que importa.</p>

    <ol>
      <li><strong>No dia (10 minutos):</strong> registre os erros do dia na tabela, com a causa e a explicação.</li>
      <li><strong>No dia seguinte (10 minutos):</strong> refaça as questões erradas sem olhar a resposta.</li>
      <li><strong>Em 7 dias (10 minutos):</strong> refaça de novo as que ainda erra e peça à IA 3 questões parecidas.</li>
      <li><strong>Em 30 dias (10 minutos):</strong> refaça as que sobraram em um mini simulado.</li>
    </ol>

    <p>As datas são sugestões práticas, não regra científica; ajuste ao seu calendário. O <a href="/artigos/estudar-com-google-agenda-blocos-de-tempo-e-revisao-espacada">guia de estudar com o Google Agenda</a> mostra como marcar essas revisões, e o artigo de <a href="/artigos/flashcards-com-ia-estudar-melhor-notebooklm-e-anki">flashcards com IA</a> explica como transformar erros recorrentes em cartões.</p>

    <h2>Flashcards dos erros que insistem</h2>

    <p>Quando uma regra, fórmula ou conceito aparece errado pela terceira vez, vire um cartão. Na frente, uma pergunta curta; no verso, a resposta com suas palavras. O manual do Anki indica que o botão Again serve para respostas erradas ou esquecidas e que ele costuma ser usado em cerca de 5% a 20% das vezes, enquanto Good deve ser o mais comum; é uma referência útil para saber se seus cartões estão fáceis ou difíceis demais. Os detalhes estão na <a href="https://docs.ankiweb.net/studying.html" target="_blank" rel="noopener noreferrer">documentação oficial do Anki</a>.</p>

    <p>Se você prefere um ambiente guiado, o <a href="/artigos/modo-estudo-do-chatgpt-e-aprendizado-guiado-do-gemini-como-usar">modo de estudo do ChatGPT e o aprendizado guiado do Gemini</a> fazem perguntas em vez de dar a resposta de uma vez, e o <a href="/artigos/hub-do-estudante-do-gemini-cadernos-de-estudo-quiz-e-plano-gratis">hub do estudante do Gemini</a> oferece cadernos e quizzes.</p>

    <h2>Adaptações por tipo de estudo</h2>

    <ul>
      <li><strong>Exatas:</strong> registre o passo em que o cálculo saiu errado, não só o resultado final.</li>
      <li><strong>Humanas e redação:</strong> anote o argumento que faltou e o trecho que a banca esperava. Veja o roteiro de <a href="/artigos/enem-2026-com-ia-plano-de-estudos-e-redacao-ate-a-prova">Enem 2026 com IA</a>.</li>
      <li><strong>Planilhas e programação:</strong> guarde o erro, a mensagem e a correção, como no guia <a href="/artigos/aprender-planilhas-do-zero-com-ia-formulas-erros-e-exercicios">aprender planilhas com IA</a>.</li>
      <li><strong>Leitura de livros e textos:</strong> registre a ideia mal entendida, como no <a href="/artigos/fichamento-de-livro-com-ia-como-estudar-sem-copiar-e-sem-inventar">fichamento de livro com IA</a>.</li>
    </ul>

    <h2>Exemplo: cinco erros de uma semana de matemática e português</h2>

    <p>Marina estuda para um concurso e fez 100 questões em uma semana. Errou 22. Ao registrar, percebeu que 9 eram de porcentagem, 6 de interpretação de texto, 4 de desatenção com o enunciado e 3 de chute. Em vez de estudar tudo de novo, ela dedicou duas noites a porcentagem, pediu à IA 10 exercícios novos do tipo e refez as 9 questões originais sem olhar a resposta. Na semana seguinte, os erros de porcentagem caíram para 3. Os números são ilustrativos, não promessa de resultado.</p>

    <p>O que funcionou foi o diagnóstico, não a ferramenta. A IA economizou tempo na explicação e nos exercícios, mas foi a classificação das causas que mostrou onde investir as horas. Quem tem pouco tempo por dia ganha mais com esse recorte do que com mais questões feitas às cegas.</p>

    <p>Se a causa dominante for a desatenção, mude o hábito: sublinhe o que a questão pede, risque as alternativas claramente erradas e releia o enunciado antes de marcar. Se for tempo, treine com cronômetro em blocos curtos. Se for interpretação, faça resumos de uma linha do enunciado antes de resolver. Cada causa tem um treino próprio, e o caderno mostra qual delas pesa mais.</p>

    <h2>Erros comuns ao montar o caderno</h2>

    <ul>
      <li><strong>Copiar o gabarito sem explicar com as próprias palavras.</strong> Parece estudo, mas não é.</li>
      <li><strong>Registrar tudo.</strong> Erro por distração isolada não precisa de ficha longa; anote em uma linha.</li>
      <li><strong>Pedir à IA para refazer a questão e só ler.</strong> Tente primeiro; peça ajuda depois.</li>
      <li><strong>Confiar cegamente na explicação da IA.</strong> Confira no material oficial.</li>
      <li><strong>Nunca revisar.</strong> Caderno parado é só arquivo; marque as datas.</li>
    </ul>

    <h2>Próximo passo</h2>

    <p>Pegue a última lista de exercícios ou simulado que você fez, escolha os 5 erros mais importantes e preencha a tabela hoje. Amanhã, refaça as questões sem olhar. Para continuar montando sua rotina, a categoria Iniciantes tem outros guias de estudo com IA, e o texto sobre <a href="/artigos/mapa-mental-com-ia-resumir-materia-e-estudar-com-o-gemini-notebook">mapa mental com IA</a> ajuda a organizar a matéria entre uma revisão e outra.</p>
  `,
  faq: [
    {
      question: "O que é um caderno de erros?",
      answer:
        "É um registro das questões que você errou, com a resposta certa explicada com suas palavras e a causa do erro: falta de conteúdo, desatenção, tempo ou interpretação. Serve para direcionar os estudos ao que ainda não está firme, em vez de repetir o que você já domina. Pode ser em papel, planilha ou aplicativo.",
    },
    {
      question: "Como a IA ajuda no caderno de erros?",
      answer:
        "Ela ajuda a entender o raciocínio correto, classificar a causa provável do erro e criar exercícios novos do mesmo tipo. Peça que ela faça perguntas antes de explicar. Mas confira as explicações no material oficial, porque a IA pode errar, e registre você mesmo o erro e a explicação.",
    },
    {
      question: "Com que frequência devo revisar os erros?",
      answer:
        "Uma rotina prática é revisar no dia seguinte, em uma semana e em um mês, refazendo as questões sem olhar a resposta. Essas datas são sugestão, não regra científica. Ajuste ao seu calendário e dê prioridade aos erros que se repetem, transformando-os em flashcards.",
    },
    {
      question: "Preciso de planilha ou posso usar caderno de papel?",
      answer:
        "Qualquer um serve. O importante é manter as mesmas colunas: data, assunto, o que respondeu e o que era certo, causa, explicação com as suas palavras e data da próxima revisão. A planilha facilita filtrar por assunto e encontrar padrões, e o papel favorece a escrita à mão.",
    },
    {
      question: "Onde encontrar questões reais para treinar?",
      answer:
        "Para o Enem, a página de provas e gabaritos do Inep lista as provas de 1998 a 2025. Para concursos, use as provas anteriores da banca organizadora. Prefira questões reais às geradas por IA, e use a IA principalmente para explicar e criar exercícios de apoio com conferência.",
    },
  ],
};
