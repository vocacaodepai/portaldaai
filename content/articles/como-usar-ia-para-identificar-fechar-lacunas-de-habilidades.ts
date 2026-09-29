import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "como-usar-ia-para-identificar-fechar-lacunas-de-habilidades",
  title: "Lacunas de habilidades: como usar IA para mapear e fechar",
  seoTitle: "Lacunas de habilidades: como mapear e fechar com IA",
  excerpt:
    "Use IA para identificar lacunas de habilidades na carreira: compare vaga e currículo, monte um plano de 90 dias e prove o que aprendeu com prompts prontos.",
  metaDescription:
    "Guia para usar IA e identificar lacunas de habilidades: comparar vaga com currículo, priorizar o que estudar, plano de 90 dias com cursos gratuitos e prompts.",
  category: "carreira",
  date: "2026-09-26",
  updated: "2026-09-27",
  readTime: 8,
  imageQuery: "skill development learning path career growth",
  seed: 90,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Lacuna de habilidade é a distância entre o que a vaga pede e o que você já faz; a IA transforma essa distância numa lista de três colunas: tenho, tenho em parte, não tenho.",
    "O plano funciona quando prioriza o que está parcialmente coberto e cabe em 90 dias, com cursos gratuitos e um projeto prático por habilidade.",
    "A análise da IA é ponto de partida, não veredito: valide com uma pessoa da área e registre o progresso no currículo e no portfólio.",
  ],
  content: `
    <p>Identificar lacunas de habilidades com IA é um exercício de comparação: você coloca a descrição da vaga (ou do cargo que quer) de um lado, seu currículo do outro, e pede para o assistente listar o que já tem, o que tem em parte e o que falta. O resultado troca a sensação vaga de "preciso estudar mais" por uma lista curta, com ordem de prioridade e prazo.</p>

    <p>Esse exercício ficou urgente. O <a href="https://hai.stanford.edu/ai-index/2025-ai-index-report" rel="noopener noreferrer">AI Index 2025 da Universidade Stanford</a> registra que 78% das organizações pesquisadas usavam IA em 2024, contra 55% no ano anterior, e aponta que a IA tende a reduzir a diferença de desempenho entre profissionais quando é bem usada. Ou seja: a régua das vagas mudou rápido, e quem mapeia a própria lacuna antes do recrutador sai na frente. Se a pressão de acompanhar tudo te trava, o texto sobre <a href="/artigos/como-lidar-pressao-de-ter-que-saber-tudo-de-ia-no-trabalho">a pressão de saber tudo de IA no trabalho</a> ajuda a separar o que importa do que é ruído.</p>

    <h2>O que é uma lacuna de habilidade (e o que não é)?</h2>
    <p>Lacuna de habilidade é a diferença mensurável entre o que uma função exige e o que você entrega hoje. "Não sei Excel avançado" é uma lacuna; "sou ruim com tecnologia" é uma sensação. A primeira tem curso, projeto e prazo; a segunda só gera ansiedade. O trabalho da IA é justamente converter sensações em itens verificáveis.</p>
    <p>Existem três tipos que pedem tratamento diferente. A lacuna técnica (ferramenta, linguagem, método) fecha com estudo e prática. A lacuna de experiência (nunca liderou projeto, nunca atendeu cliente grande) fecha com exposição: assumir uma frente pequena, fazer voluntariado. A lacuna de comunicação (não sabe apresentar resultado, não escreve bem) fecha com repetição e feedback, e é a que mais gente ignora.</p>
    <p>O que não é lacuna: requisito decorativo. Muitas vagas listam dez itens e o gestor se importa com três, e a IA ajuda a inferir quais são pela ordem e pelo detalhamento do texto. Quem está pensando em mudar de área encontra em <a href="/artigos/como-migrar-de-carreira-para-area-de-ia">migrar de carreira para a área de IA</a> o mesmo método aplicado a uma transição maior.</p>

    <h2>Passo 1: comparar a vaga com o seu currículo</h2>
    <p>Abra um chat novo, cole a descrição da vaga e depois o seu currículo atualizado, sem CPF, endereço e telefone. Se você usa o Claude, crie um projeto para guardar currículo e instruções fixas; a página oficial sobre <a href="https://support.claude.com/en/articles/9517075-what-are-projects" rel="noopener noreferrer">Projetos do Claude</a> explica que a conta gratuita cria até cinco e os planos pagos liberam mais capacidade. Depois use este prompt:</p>
    <pre><code>Você é um recrutador experiente da área de [área]. Abaixo estão a descrição de uma vaga e o meu currículo.
1) Liste cada requisito da vaga em uma tabela com três colunas: TENHO (com a evidência do currículo), TENHO EM PARTE (o que falta para ficar completo) e NÃO TENHO.
2) Aponte quais 3 requisitos parecem mais decisivos para o gestor, pela ordem e pelo detalhamento do texto.
3) Diga, em uma frase, qual é a lacuna que mais pesa contra mim hoje.
Seja direto e não invente experiências que não estão no currículo.

VAGA: [colar]
CURRÍCULO: [colar]</code></pre>
    <p>Repita com três vagas parecidas. O que aparece na coluna "não tenho" nas três é lacuna real; o que aparece em uma só pode ser peculiaridade daquela empresa. O cruzamento também mostra como descrever o que você já faz, tema do guia sobre <a href="/artigos/como-colocar-habilidades-de-ia-no-curriculo">habilidades de IA no currículo</a>.</p>
    <div class="callout-box callout-warn">
      <span class="callout-label">Atenção</span>
      <p>A IA avalia texto, não pessoa. Ela pode superestimar uma habilidade porque você escreveu bem, ou subestimar porque você resumiu demais. Trate a tabela como rascunho e valide com alguém que já ocupa o cargo antes de montar o plano.</p>
    </div>

    <h2>Passo 2: priorizar o que fechar primeiro</h2>
    <p>A tentação é atacar a coluna "não tenho". O caminho mais curto costuma ser a coluna "tenho em parte": já existe base, falta profundidade, e isso fecha em semanas em vez de meses. Ordene por dois critérios: impacto na candidatura (aparece nas três vagas?) e esforço (quantas horas até ter algo para mostrar?).</p>
    <table>
      <thead>
        <tr>
          <th>Situação</th>
          <th>Abordagem sem plano</th>
          <th>Abordagem com IA</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Vaga exige habilidade nova</td>
          <td>Fazer vários cursos genéricos ao acaso</td>
          <td>Estudar só o recorte que a vaga pede e criar um projeto para provar</td>
        </tr>
        <tr>
          <td>Promoção interna</td>
          <td>Esperar o gestor apontar o que falta</td>
          <td>Mapear a lacuna antes e chegar na conversa com plano pronto</td>
        </tr>
        <tr>
          <td>Mudança de área</td>
          <td>Recomeçar do zero e descartar a experiência anterior</td>
          <td>Listar o que já é transferível e fechar só o que falta</td>
        </tr>
        <tr>
          <td>Recolocação após demissão</td>
          <td>Candidatar-se a tudo e estudar nada</td>
          <td>Escolher 3 vagas-alvo e fechar a lacuna comum a elas</td>
        </tr>
      </tbody>
    </table>
    <p>Quem passou por corte e precisa voltar rápido ao mercado encontra o roteiro de recolocação em <a href="/artigos/como-se-recolocar-no-mercado-depois-de-ser-substituido-por-automacao">substituído por automação: como se recolocar</a>. E a dúvida entre aprofundar em um nicho ou cobrir mais frentes tem resposta em <a href="/artigos/especialista-em-nicho-de-ia-ou-generalista-o-que-vale-mais">especialista ou generalista: o que vale mais</a>.</p>

    <h2>Passo 3: montar um plano de 90 dias com cursos gratuitos</h2>
    <p>Plano bom cabe na agenda real (quem trabalha 8 horas estuda 5 a 7 horas por semana, não 20), termina em algo que dá para mostrar e usa recurso que não pesa no bolso. Para tecnologia e produtividade, o Ministério do Trabalho mantém o <a href="https://www.gov.br/trabalho-e-emprego/pt-br/servicos/trabalhador/qualificacao-profissional/caminho-digital" rel="noopener noreferrer">Caminho Digital</a>, com a Escola do Trabalhador 4.0 oferecendo cursos gratuitos de tecnologia e produtividade em parceria com a Microsoft, inclusive em inteligência artificial. Peça o plano assim:</p>
    <pre><code>Com base nesta lacuna: [colar a linha da tabela], monte um plano de 90 dias.
Restrições: tenho 6 horas por semana, prefiro cursos gratuitos ou até R$ 100 no total, e preciso terminar com um projeto que eu possa mostrar numa entrevista.
Divida em 3 blocos de 30 dias. Para cada bloco: o que estudar, quantas horas, qual entrega concreta e como eu mesmo vou verificar que aprendi.
Não inclua nada que não seja necessário para essa lacuna específica.</code></pre>
    <p>O ponto central do prompt é a entrega concreta por bloco. Aprender "Power BI" não fecha lacuna; construir um painel com dados públicos e explicar as decisões fecha. Esse material vai para o <a href="/artigos/como-montar-portfolio-de-habilidades-de-ia-para-recrutadores">portfólio de habilidades de IA</a>, onde o recrutador confere se a coluna "tenho" é verdadeira. Para render mais, combine o plano com as técnicas de <a href="/artigos/perplexity-notebooklm-ia-de-pesquisa-estudar-mais-rapido">Perplexity e NotebookLM para estudar mais rápido</a> e reserve horário fixo, como no guia de <a href="/artigos/como-usar-ia-para-criar-rotina-diaria-produtiva">rotina diária produtiva com IA</a>.</p>

    <h2>Exemplo brasileiro: da assistente administrativa à analista de dados júnior</h2>
    <p>Pense numa assistente administrativa em Belo Horizonte, salário de R$ 2.900, que quer uma vaga de analista de dados júnior anunciada na faixa de R$ 4.200 a R$ 5.000. Ela cola três vagas e o currículo no Claude Pro (US$ 20 por mês, verificado em 27/09/2026 na <a href="https://claude.com/pricing" rel="noopener noreferrer">página de preços</a>; o plano gratuito também serve para começar). A tabela mostra: Excel intermediário (tem em parte), SQL básico (não tem), Power BI (não tem), comunicação de resultados (tem, por conta dos relatórios mensais que já faz).</p>
    <p>O plano de 90 dias fica assim: primeiro mês, Excel avançado nos cursos gratuitos de produtividade da Escola do Trabalhador 4.0 e fundamentos de dados em curso gratuito, custo zero, entrega um relatório de vendas fictício com tabela dinâmica. Segundo mês, SQL básico em curso gratuito, entrega cinco consultas resolvidas num banco público e documentadas. Terceiro mês, Power BI na versão gratuita para desktop, entrega um painel com dados abertos do IBGE publicado no LinkedIn. Custo total: R$ 0 em cursos e US$ 40 em dois meses de Claude Pro, se ela optar pelo plano pago.</p>
    <p>Ao final, o currículo muda de "conhecimento em Excel" para "relatórios com tabela dinâmica, consultas SQL e painel em Power BI (links no portfólio)". A candidatura passa a ter provas, e a conversa de salário fica mais fácil, como mostra o guia sobre <a href="/artigos/como-negociar-salario-melhor-sabendo-usar-ia">negociar salário melhor sabendo usar IA</a>. Nenhuma promessa de vaga em 90 dias: o plano só garante que ela deixa de cair na triagem por falta de evidência.</p>

    <h2>Como validar o progresso sem se enganar</h2>
    <p>Fechar uma lacuna é diferente de terminar um curso. A validação precisa vir de fora do seu próprio julgamento e de fora da IA. Use este checklist ao final de cada bloco de 30 dias:</p>
    <ul class="checklist">
      <li>Consigo explicar a habilidade em duas frases para alguém que não é da área</li>
      <li>Tenho uma entrega concreta (arquivo, painel, código, texto) com link público ou anexo</li>
      <li>Uma pessoa que já trabalha com isso olhou a entrega e apontou o que faltou</li>
      <li>Simulei uma entrevista sobre o tema e respondi sem consultar nada</li>
      <li>Atualizei o currículo e o perfil com a evidência, não só com o nome do curso</li>
    </ul>
    <p>A simulação de entrevista é o teste mais barato: peça cinco perguntas técnicas sobre a habilidade, responda em voz alta e depois peça avaliação, como no roteiro de <a href="/artigos/como-se-preparar-para-entrevistas-de-emprego-usando-ia">como se preparar para entrevistas usando IA</a>. Se travar, a lacuna ainda está aberta, e tudo bem: volte um bloco.</p>
    <div class="callout-box callout-ok">
      <span class="callout-label">Sinal de que fechou</span>
      <p>Você consegue dizer, sem enrolar, "eu faço X, já fiz Y com isso, e ainda não domino Z". Quem fala assim numa entrevista passa mais confiança do que quem lista dez cursos.</p>
    </div>

    <h2>Erros comuns e quando o método não serve</h2>
    <p>O erro mais frequente é colar um currículo desatualizado e concluir que "falta tudo". A IA só enxerga o que está escrito, então reescreva o currículo com o que você faz de verdade, com números, antes de comparar. O segundo erro é atacar cinco lacunas ao mesmo tempo: o plano vira lista de desejos e nada termina. Três lacunas por trimestre é o teto realista para quem trabalha.</p>
    <p>O terceiro erro é confundir certificado com habilidade. Recrutador experiente pergunta "me conta um projeto em que você usou isso", e o certificado não responde. Por isso cada bloco termina em entrega. Quem sente que usar IA para estudar "não conta" precisa ler <a href="/artigos/sindrome-do-impostor-usar-ia-nao-te-torna-menos-capaz">síndrome do impostor: usar IA não te torna menos capaz</a>: a ferramenta organiza o caminho, mas quem anda é você.</p>
    <p>O método serve menos em dois casos. Profissões reguladas (medicina, direito, engenharia) têm requisitos formais que nenhum plano de 90 dias substitui; ali a IA organiza o estudo para a prova, não pula etapa. E quando a lacuna é de experiência, como "nunca liderou equipe", curso não resolve: o caminho é pedir uma frente pequena no trabalho atual, conforme o roteiro de <a href="/artigos/como-se-tornar-referencia-em-ia-na-empresa-sem-ser-do-ti">virar referência em IA na empresa sem ser do TI</a>.</p>

    <p>Mapear lacunas de habilidades com IA leva uma tarde: três vagas, um currículo honesto, uma tabela de três colunas e um plano de 90 dias com entregas. Escolha a vaga que você quer daqui a seis meses e rode o primeiro prompt hoje. Para ver quais funções vão pedir mais preparo, o panorama de <a href="/artigos/empregos-que-a-ia-vai-transformar-como-se-preparar">empregos que a IA vai transformar</a> mostra onde a régua está subindo mais rápido, e <a href="/artigos/profissoes-que-vao-surgir-por-causa-da-ia">profissões que vão surgir com a IA</a> lista as portas novas que estão se abrindo.</p>
  `,
  faq: [
    {
      question: "A IA consegue avaliar se estou pronto para uma vaga?",
      answer:
        "Ela consegue comparar o texto da vaga com o texto do seu currículo e apontar o que falta, o que já é bastante útil. O que ela não faz é medir sua habilidade real nem prever a decisão do recrutador. Use a análise como rascunho e confirme com alguém da área antes de montar o plano.",
    },
    {
      question: "Preciso fechar todas as lacunas antes de me candidatar?",
      answer:
        "Não. Poucas vagas exigem 100% dos requisitos, e o gestor costuma se importar com três ou quatro itens. Foque no que aparece em várias vagas e no que está parcialmente coberto. Candidatura com plano de desenvolvimento claro e uma entrega para mostrar conta a favor mesmo com lacunas abertas.",
    },
    {
      question: "Esse método funciona para qualquer área ou só para tecnologia?",
      answer:
        "Funciona para qualquer área em que a vaga descreve requisitos: vendas, administração, saúde, educação, marketing. O que muda é o tipo de entrega que prova a habilidade. Em profissões reguladas, o método organiza o estudo, mas não substitui os requisitos formais de registro ou prova.",
    },
    {
      question: "Quais cursos gratuitos usar para fechar lacunas de habilidades?",
      answer:
        "Para tecnologia e produtividade, a Escola do Trabalhador 4.0, do programa Caminho Digital do Ministério do Trabalho, oferece cursos gratuitos em parceria com a Microsoft, inclusive em inteligência artificial. Combine com a versão gratuita das ferramentas que a vaga pede e um projeto próprio por habilidade.",
    },
    {
      question: "Quanto tempo leva para fechar uma lacuna de habilidade?",
      answer:
        "Uma lacuna parcial, em que você já tem base, costuma fechar em 30 a 60 dias com 5 a 7 horas semanais. Uma lacuna completa, do zero, leva um trimestre ou mais. Lacunas de experiência, como liderar equipe, dependem de oportunidade prática e não de estudo, então o prazo varia.",
    },
  ],
  quiz: [
    {
      question: "Qual é a primeira etapa para identificar lacunas de habilidade com apoio de IA?",
      options: [
        "Fazer vários cursos aleatórios sem nenhum critério",
        "Comparar a descrição de vagas-alvo com o currículo atual e separar em tenho, tenho em parte e não tenho",
        "Ignorar completamente as exigências da vaga",
        "Esperar o recrutador apontar o que falta",
      ],
      answer: 1,
      explanation:
        "A comparação entre vaga e currículo, repetida com três vagas parecidas, mostra quais requisitos são lacuna real e quais são peculiaridade de uma empresa só.",
    },
    {
      question: "Por que priorizar a coluna 'tenho em parte' antes da coluna 'não tenho'?",
      options: [
        "Porque a IA sempre erra na coluna 'não tenho'",
        "Porque uma lacuna parcial já tem base e fecha em semanas, gerando prova mais rápido",
        "Porque habilidades novas nunca valem a pena",
        "Porque recrutadores não olham requisitos completos",
      ],
      answer: 1,
      explanation:
        "Lacunas parciais exigem profundidade, não começo do zero. Fechá-las primeiro gera entregas para o portfólio em menos tempo e melhora a candidatura enquanto o resto do plano anda.",
    },
  ],
};
