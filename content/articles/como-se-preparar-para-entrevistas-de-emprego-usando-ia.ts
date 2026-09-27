import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "como-se-preparar-para-entrevistas-de-emprego-usando-ia",
  title: "Entrevista de emprego com IA: como se preparar sem soar decorado",
  seoTitle: "Entrevista de emprego com IA: como se preparar",
  excerpt:
    "Como se preparar para entrevista de emprego usando IA: pesquise a empresa, simule perguntas em voz alta e estruture respostas sem decorar texto pronto.",
  metaDescription:
    "Guia para se preparar para entrevistas de emprego usando IA: prompts prontos, simulação por voz no Gemini e no Claude e um plano de 5 dias com custo zero.",
  category: "carreira",
  date: "2026-09-24",
  updated: "2026-09-27",
  readTime: 9,
  imageQuery: "job interview preparation resume confidence",
  seed: 80,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "A IA entra como treinador de entrevista: pesquisa a empresa, simula perguntas em voz alta e aponta o que faltou na sua resposta, sem escrever o roteiro por você.",
    "Gemini Live e o modo de voz do Claude fazem simulação falada de graça; o método STAR organiza suas histórias e os prompts deste guia cobrem cada etapa.",
    "O erro que mais derruba candidato é decorar resposta gerada; o plano de 5 dias mostra como treinar raciocínio e chegar com números e perguntas próprias.",
  ],
  sources: [
    { label: "Grow with Google: guia de preparação para entrevistas", url: "https://grow.google/certificates/interview-warmup/" },
    { label: "Ajuda do Gemini: Gemini Live", url: "https://support.google.com/gemini/answer/15274899" },
    { label: "Anthropic: modo de voz do Claude", url: "https://support.claude.com/en/articles/11101966-using-voice-mode-on-claude-mobile-apps" },
    { label: "Claude: planos e preços", url: "https://claude.com/pricing" },
  ],
  content: `
    <p>Como se preparar para entrevistas de emprego usando IA se resume a três usos: pesquisar a empresa e a vaga em minutos, simular a conversa em voz alta com um assistente que pergunta e devolve feedback, e estruturar suas histórias sem decorar texto pronto. Este guia traz o passo a passo, os prompts e as ferramentas gratuitas.</p>

    <p>O ponto de partida é entender que a IA entra como treinador, não como roteirista. Quem chega na entrevista repetindo uma resposta gerada palavra por palavra soa artificial, e recrutador experiente percebe. Quem usa a ferramenta para treinar raciocínio, antecipar perguntas e ganhar repertório sobre a empresa chega mais calmo e mais claro. A diferença entre os dois é o método, e é disso que este texto trata.</p>

    <h2>Por que usar IA para se preparar para uma entrevista?</h2>
    <p>Preparação boa sempre existiu: ler sobre a empresa, treinar com um amigo, anotar perguntas prováveis. O problema é que isso consome horas que a maioria não tem. A IA comprime esse tempo: um resumo da empresa sai em dez minutos e a simulação pode acontecer às 23h, sozinho, no celular.</p>
    <p>Do outro lado da mesa a mudança também aconteceu: muitas empresas usam IA para filtrar currículos, agendar conversas e montar roteiros, como descreve o guia sobre <a href="/artigos/como-usar-ia-para-melhorar-contratacao-pequenas-empresas">IA na contratação em pequenas empresas</a>. Se o recrutador usa IA para selecionar, faz sentido o candidato usar IA para se preparar.</p>
    <p>O Grow with Google, programa de capacitação da própria Google, recomenda usar o Gemini Live para simular uma entrevista em tempo real e receber feedback estruturado sobre as respostas (<a href="https://grow.google/certificates/interview-warmup/" rel="noopener noreferrer">guia de preparação do Grow with Google</a>). A palavra que importa é "simular": o ensaio serve para você falar melhor com suas próprias palavras.</p>

    <h2>Passo 1: pesquisar a empresa e a vaga em 20 minutos</h2>
    <p>Antes de treinar qualquer resposta, cole a descrição da vaga no assistente e peça uma leitura crítica. O objetivo é descobrir o que a empresa realmente quer (às vezes escondido atrás de "perfil dinâmico" e "visão de dono") e quais perguntas essa descrição sugere. Junte com informações públicas: site institucional, página de carreiras, notícias recentes, perfil da liderança no LinkedIn.</p>
    <pre><code>Aqui está a descrição de uma vaga de [cargo] na empresa [nome], do setor [setor]:
[cole a descrição]

1. Liste as 5 competências que a empresa mais valoriza nesse texto, em ordem de importância.
2. Para cada uma, sugira 2 perguntas que um entrevistador provavelmente faria.
3. Aponte 3 informações sobre a empresa que eu deveria pesquisar antes da entrevista e por quê.
Responda em português, de forma direta.</code></pre>
    <p>Um cuidado de privacidade: não cole no assistente dados internos de empregadores anteriores nem documentos confidenciais. O artigo sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">o que você entrega sem perceber ao usar IA</a> explica o que acontece com o que você digita.</p>
    <p>Se a vaga menciona ferramentas de IA como requisito, o momento de organizar exemplos concretos é agora. O texto sobre <a href="/artigos/como-colocar-habilidades-de-ia-no-curriculo">habilidades de IA no currículo</a> mostra como descrever isso sem inflar, e o guia de <a href="/artigos/como-montar-portfolio-de-habilidades-de-ia-para-recrutadores">portfólio de habilidades de IA</a> ajuda a ter algo para mostrar se pedirem.</p>

    <h2>Passo 2: simular a entrevista em voz alta</h2>
    <p>Ler uma resposta na tela e falar a mesma resposta são coisas diferentes. Em voz alta aparecem as travas, os "tipo assim", as histórias que não têm fim. Por isso a simulação mais útil é por voz, com o assistente fazendo uma pergunta de cada vez e comentando depois.</p>
    <h3>Ferramentas que fazem isso de graça</h3>
    <table>
      <thead>
        <tr>
          <th>Ferramenta</th>
          <th>Como funciona para simulação</th>
          <th>Custo e limites</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Gemini Live (app Gemini)</td>
          <td>Conversa por voz, com interrupção e feedback no meio</td>
          <td>Conta Google pessoal, app para Android; gratuito com limites, consulte a página oficial</td>
        </tr>
        <tr>
          <td>Claude (modo de voz)</td>
          <td>Conversa falada em todos os planos, inclusive o gratuito; português em beta</td>
          <td>Plano Free custa US$ 0 e o Pro US$ 20 por mês (verificado em 27/09/2026 na <a href="https://claude.com/pricing" rel="noopener noreferrer">página oficial</a>)</td>
        </tr>
        <tr>
          <td>ChatGPT (modo de voz)</td>
          <td>Simulação parecida, por voz, no aplicativo</td>
          <td>Consulte a página oficial para planos e limites atuais</td>
        </tr>
      </tbody>
    </table>
    <p>A ajuda do Gemini confirma que o Gemini Live serve para praticar apresentações em voz alta e aceita interrupção no meio da fala (<a href="https://support.google.com/gemini/answer/15274899" rel="noopener noreferrer">Gemini Live, Ajuda do Gemini</a>). A Anthropic informa que o modo de voz do Claude está em todos os planos, inclusive o gratuito, com idiomas além do inglês em beta (<a href="https://support.claude.com/en/articles/11101966-using-voice-mode-on-claude-mobile-apps" rel="noopener noreferrer">modo de voz do Claude</a>). Para escolher o assistente, o comparativo <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini</a> resolve.</p>
    <pre><code>Você é um recrutador experiente entrevistando um candidato para a vaga de [cargo] na empresa [nome].
Faça UMA pergunta por vez e espere minha resposta.
Depois de cada resposta, dê um feedback curto: o que ficou claro, o que ficou vago e uma sugestão de melhoria.
Comece com "Me conte sobre você" e depois avance para perguntas comportamentais e técnicas ligadas à vaga.
Não escreva a resposta ideal por mim.</code></pre>

    <h2>Passo 3: estruturar respostas com o método STAR sem decorar</h2>
    <p>STAR é a sigla para Situação, Tarefa, Ação e Resultado. É o que recrutadores esperam em perguntas do tipo "me conte sobre uma vez em que...". O erro comum é pedir para a IA escrever a resposta pronta. O uso certo é o contrário: você conta a história do seu jeito, e a IA aponta qual parte da estrutura ficou faltando.</p>
    <pre><code>Vou te contar uma experiência profissional do meu jeito. Não reescreva a história.
Organize o que eu disse nos quatro blocos do método STAR (Situação, Tarefa, Ação, Resultado), aponte qual bloco ficou fraco ou ausente e me faça 2 perguntas para eu completar a informação que falta, principalmente números e prazos.
Minha história: [conte com suas palavras]</code></pre>
    <p>Repita o exercício com três ou quatro histórias diferentes: um problema que você resolveu, um conflito, um erro que virou aprendizado, um resultado com número. Depois treine contar cada uma de forma ligeiramente diferente. Para escrever pedidos mais precisos nesse tipo de exercício, o guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">prompt engineering</a> mostra como dar contexto e regra ao assistente.</p>
    <div class="callout-box callout-bad">
      <span class="callout-label">Nunca faça</span>
      <p>Nunca leve uma resposta gerada pela IA decorada palavra por palavra, principalmente sobre a sua própria experiência. Além de soar ensaiado, a primeira pergunta de aprofundamento ("e o que você faria diferente?") derruba o roteiro e deixa a falta de autenticidade evidente.</p>
    </div>

    <h2>Perguntas para o entrevistador, pretensão salarial e vaga de IA</h2>
    <p>Entrevista é conversa de mão dupla. Ter duas ou três perguntas boas na manga mostra interesse e ajuda você a avaliar se a vaga faz sentido. Peça sugestões ao assistente e escolha as que você realmente quer saber: como o time mede sucesso nos primeiros seis meses, por que a vaga abriu, qual o maior desafio de quem entra.</p>
    <p>Pretensão salarial merece preparo à parte. Use a IA para organizar argumentos e faixas, nunca para inventar números: consulte pesquisas salariais e anúncios de vagas parecidas antes. O artigo sobre <a href="/artigos/como-negociar-salario-melhor-sabendo-usar-ia">negociar salário sabendo usar IA</a> detalha como transformar habilidade com ferramentas em argumento quando a proposta chegar.</p>
    <p>Quando a vaga pede "familiaridade com IA", prepare-se para perguntas práticas: qual ferramenta você usa, para quê, com que resultado. Se a dúvida é como se posicionar, o texto sobre <a href="/artigos/especialista-em-nicho-de-ia-ou-generalista-o-que-vale-mais">especialista em nicho de IA ou generalista</a> ajuda a escolher o discurso, e o guia para <a href="/artigos/como-usar-ia-para-identificar-fechar-lacunas-de-habilidades">identificar e fechar lacunas de habilidades</a> mostra o que estudar antes da entrevista se algum requisito ainda falta.</p>

    <h2>Um plano de 5 dias: exemplo com números</h2>
    <p>Imagine Camila, analista de marketing em Curitiba, convidada para entrevista de coordenadora numa empresa de e-commerce, salário anunciado de R$ 7.500. Ela tem cinco dias, trabalha em horário comercial e não quer gastar nada: usa o app Gemini gratuito e o Claude Free, 40 minutos por noite.</p>
    <ol>
      <li><strong>Dia 1 (40 min):</strong> cola a descrição da vaga, pede a análise de competências e perguntas prováveis e lê o site da empresa.</li>
      <li><strong>Dia 2 (40 min):</strong> escolhe quatro histórias profissionais e roda o exercício STAR em cada uma, anotando os números que faltavam (por exemplo, "campanha que reduziu o custo por lead de R$ 18 para R$ 11 em três meses").</li>
      <li><strong>Dia 3 (40 min):</strong> primeira simulação por voz, dez perguntas. Percebe que enrola na pergunta "por que quer sair do emprego atual".</li>
      <li><strong>Dia 4 (40 min):</strong> segunda simulação, agora pedindo perguntas difíceis e uma sobre pretensão salarial. Define a faixa que vai falar: R$ 7.500 a R$ 8.500, com base em três anúncios semelhantes.</li>
      <li><strong>Dia 5 (20 min):</strong> só revisa as três perguntas que vai fazer ao entrevistador e dorme cedo.</li>
    </ol>
    <p>Custo total: R$ 0 e pouco mais de três horas. O ganho é chegar sabendo o que a empresa valoriza, com quatro histórias organizadas e sem susto na pergunta de salário. Esse tipo de preparo importa ainda mais para quem está voltando ao mercado, situação que o guia para <a href="/artigos/como-se-recolocar-no-mercado-depois-de-ser-substituido-por-automacao">quem foi substituído por automação</a> trata em detalhe.</p>

    <h2>Erros comuns ao usar IA na preparação</h2>
    <ul class="checklist">
      <li>Decorar respostas prontas em vez de treinar o raciocínio (o mais frequente).</li>
      <li>Confiar na IA para fatos sobre a empresa sem conferir no site oficial: assistentes erram datas, nomes e produtos.</li>
      <li>Treinar só por escrito e nunca em voz alta.</li>
      <li>Colar informações confidenciais de empregos anteriores no prompt.</li>
      <li>Pedir "a resposta ideal" sobre motivação, que só funciona quando é sua.</li>
      <li>Inventar número de resultado porque a IA sugeriu que "ficaria mais forte". Recrutador pergunta como você mediu.</li>
    </ul>
    <p>Há também um erro emocional: sentir que usar IA para se preparar é trapaça. Não é; é o mesmo que estudar com um livro, só que disponível a qualquer hora. Quem sente esse peso vai se reconhecer no texto sobre <a href="/artigos/sindrome-do-impostor-usar-ia-nao-te-torna-menos-capaz">síndrome do impostor ao usar IA</a>.</p>
    <div class="callout-box callout-tip">
      <span class="callout-label">Dica</span>
      <p>Grave a simulação (o celular grava a tela com áudio) e ouça no dia seguinte: ritmo, muletas verbais e respostas longas demais aparecem na hora.</p>
    </div>

    <h2>Quando a IA não resolve</h2>
    <p>A IA não substitui uma conversa com alguém que trabalha na empresa: uma mensagem de dez minutos vale mais que dez simulações. Ela também não resolve falta de requisito: se a vaga exige uma certificação ou experiência que você não tem, o assistente ajuda a montar o plano de estudo, não a esconder a lacuna. Em teste prático, o treino é fazer o teste.</p>
    <p>Por fim, a IA não decide se a vaga é boa para você. Ela organiza informação; a leitura sobre cultura, chefia e momento de carreira continua sendo sua, sobretudo se a entrevista faz parte de uma <a href="/artigos/como-migrar-de-carreira-para-area-de-ia">migração de carreira</a>. O mapa de <a href="/artigos/empregos-que-a-ia-vai-transformar-como-se-preparar">empregos que a IA vai transformar</a> ajuda a enxergar para onde o cargo caminha antes de aceitar.</p>

    <p>Preparação boa é método: pesquisa curta, simulação em voz alta, histórias estruturadas e perguntas suas. Faça os cinco dias do plano com uma ferramenta gratuita e chegue na sala com quatro histórias prontas. Os outros guias da categoria <a href="/categoria/carreira">Carreira</a> mostram o que fazer depois de contratado.</p>
  `,
  faq: [
    {
      question: "É trapaça usar IA para treinar respostas de entrevista?",
      answer:
        "Não. Usar IA para se preparar é uma forma de estudo e ensaio, parecida com treinar com um mentor ou fazer simulação com um amigo. O que importa é chegar na entrevista real respondendo com suas próprias palavras e histórias verdadeiras. O problema só aparece quando a pessoa decora um texto gerado ou inventa resultados que a ferramenta sugeriu.",
    },
    {
      question: "Qual IA é melhor para simular entrevista de emprego?",
      answer:
        "Qualquer assistente com modo de voz serve: Gemini Live no app Gemini, o modo de voz do Claude (disponível em todos os planos, com português em beta) e o ChatGPT. O que faz diferença é o prompt: peça uma pergunta por vez, feedback curto depois de cada resposta e proíba a ferramenta de escrever a resposta ideal por você.",
    },
    {
      question: "Como evitar que minhas respostas soem decoradas?",
      answer:
        "Treine o raciocínio, não o texto. Conte sua história do seu jeito, peça para a IA apontar o que faltou no método STAR (situação, tarefa, ação, resultado) e repita a mesma experiência em versões ligeiramente diferentes, sempre em voz alta. Quem tem só uma versão memorizada trava quando a pergunta vem de outro ângulo.",
    },
    {
      question: "Devo dizer na entrevista que usei IA para me preparar?",
      answer:
        "Não é necessário, do mesmo modo que ninguém menciona ter estudado com um livro. Se a vaga pede familiaridade com IA, aí sim vale contar como você usa as ferramentas no trabalho, com exemplo concreto e resultado. Nesse caso a preparação vira parte da resposta, não algo a esconder.",
    },
    {
      question: "Quanto custa se preparar para entrevista com IA?",
      answer:
        "Pode custar zero. Gemini e Claude têm planos gratuitos com modo de voz, e o plano de cinco dias deste guia usa apenas esses recursos. Planos pagos, como o Claude Pro a US$ 20 por mês (verificado em 27/09/2026), fazem sentido só se você esbarrar nos limites de uso diário, o que é raro em uma semana de preparação.",
    },
  ],
  quiz: [
    {
      question: "Qual é o maior risco de usar IA para preparar respostas de entrevista?",
      options: [
        "Chegar mais preparado do que o esperado",
        "Decorar a resposta gerada palavra por palavra e soar artificial",
        "Pesquisar demais sobre a empresa",
        "Preparar perguntas para o entrevistador",
      ],
      answer: 1,
      explanation:
        "Decorar respostas prontas geradas pela IA costuma soar ensaiado, e a primeira pergunta de aprofundamento derruba o roteiro. O ideal é treinar o raciocínio (método STAR) e falar com as próprias palavras.",
    },
    {
      question: "Por que treinar a simulação em voz alta, e não só por escrito?",
      options: [
        "Porque a IA só entende comandos de voz",
        "Porque falar revela travas, muletas verbais e respostas longas que a leitura esconde",
        "Porque o recrutador vai pedir a gravação",
        "Porque escrever é proibido nas ferramentas gratuitas",
      ],
      answer: 1,
      explanation:
        "Ler uma resposta e falar a mesma resposta são coisas diferentes. A simulação por voz, com feedback depois de cada pergunta, mostra o que precisa melhorar antes da entrevista real.",
    },
  ],
};
