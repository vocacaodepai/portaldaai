import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "como-colocar-habilidades-de-ia-no-curriculo",
  title: "Habilidades de IA no currículo: como descrever e se destacar",
  seoTitle: "Habilidades de IA no currículo: como descrever",
  excerpt:
    "Habilidades de IA no currículo: aprenda a trocar 'sei usar ChatGPT' por uma linha com tarefa, ferramenta e resultado, e a sustentar isso na entrevista.",
  metaDescription:
    "Habilidades de IA no currículo: a fórmula tarefa, ferramenta e resultado, onde colocar, prompts para reescrever experiências e erros que eliminam candidatos.",
  category: "carreira",
  date: "2026-09-13",
  updated: "2026-09-27",
  readTime: 9,
  imageQuery: "resume interview job application",
  seed: 23,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Habilidade de IA no currículo só vale quando vem com tarefa, ferramenta e resultado medido (tempo, volume, erro ou dinheiro).",
    "Segundo a Microsoft, 66% dos líderes não contratariam alguém sem habilidades de IA e 71% prefeririam um candidato menos experiente que as tenha.",
    "Na entrevista, o que convence é um caso real de antes e depois, incluindo o que a IA errou e como você corrigiu.",
  ],
  content: `
    <p>Habilidades de IA no currículo entram do mesmo jeito que qualquer outra competência que o recrutador leva a sério: com uma tarefa concreta, a ferramenta usada e o resultado medido. "Conhecimento em inteligência artificial" ou "uso ChatGPT" não diz nada. "Reduzi de 4 horas para 40 minutos a montagem do relatório semanal usando ChatGPT e Google Sheets" diz tudo.</p>

    <p>Este guia mostra o que as empresas realmente procuram, a fórmula para escrever cada linha, onde colocar no currículo e no LinkedIn, prompts para reescrever suas experiências, um exemplo brasileiro com números e os erros que fazem o candidato parecer modista em vez de competente.</p>

    <h2>O que são habilidades de IA no currículo (e por que "sei usar ChatGPT" não conta)</h2>

    <p>Habilidade de IA, para quem contrata, não é saber que o ChatGPT existe. É saber aplicar uma ferramenta de IA em uma tarefa da função, com critério para conferir o que sai. Três camadas costumam aparecer nas vagas: usar (escrever bons pedidos, revisar respostas), integrar (ligar IA a planilha, e-mail, CRM) e decidir (saber quando não usar, cuidar de dados sensíveis).</p>

    <p>O peso disso cresceu rápido. O <a href="https://www.microsoft.com/en-us/worklab/work-trend-index/ai-at-work-is-here-now-comes-the-hard-part" rel="noopener noreferrer">Work Trend Index 2024 da Microsoft</a>, com 31 mil trabalhadores em 31 países, mostra que 66% dos líderes não contratariam alguém sem habilidades de IA, e 71% prefeririam um candidato menos experiente com essas habilidades a um mais experiente sem elas. Do lado das empresas, o <a href="https://hai.stanford.edu/ai-index/2025-ai-index-report" rel="noopener noreferrer">AI Index 2025 de Stanford</a> registra que 78% das organizações usavam IA em 2024, contra 55% no ano anterior.</p>

    <p>Isso significa que a pergunta "você usa IA?" já está respondida com sim por quase todo mundo. A pergunta que diferencia é "para quê, com que resultado e com que cuidado". Se você sente que "precisa saber tudo de IA" para competir, o texto sobre <a href="/artigos/como-lidar-pressao-de-ter-que-saber-tudo-de-ia-no-trabalho">lidar com a pressão de saber tudo de IA</a> ajuda a colocar a régua no lugar certo: profundidade em duas ou três tarefas vale mais do que superficialidade em vinte ferramentas.</p>

    <h2>Quais habilidades de IA os recrutadores procuram</h2>

    <p>A tabela abaixo cruza o que aparece nas descrições de vaga com a forma de provar no currículo.</p>

    <table>
      <thead>
        <tr><th>Habilidade</th><th>Como aparece na vaga</th><th>Como provar no currículo</th></tr>
      </thead>
      <tbody>
        <tr><td>Escrever prompts que funcionam</td><td>"Familiaridade com ferramentas de IA generativa"</td><td>Tarefa recorrente que você padronizou com um prompt e o ganho de tempo medido</td></tr>
        <tr><td>Análise de dados com IA</td><td>"Perfil analítico", "Excel avançado"</td><td>Relatório ou dashboard que passou a ser gerado com IA e planilha, com frequência e volume</td></tr>
        <tr><td>Automação de rotina</td><td>"Melhoria de processos", "otimização"</td><td>Fluxo que você montou (Zapier, Make, Copilot) e horas por semana economizadas</td></tr>
        <tr><td>Revisão crítica do que a IA produz</td><td>"Atenção a detalhes", "senso crítico"</td><td>Processo de conferência que você criou e taxa de erro antes e depois</td></tr>
        <tr><td>Uso responsável</td><td>"LGPD", "confidencialidade"</td><td>Política ou checklist de dados que você aplicou ao usar IA na equipe</td></tr>
      </tbody>
    </table>

    <p>A segunda linha merece atenção: vagas administrativas e financeiras raramente escrevem "IA", mas pedem análise. Quem mostra que usa <a href="/artigos/ia-para-planilhas-automatizar-relatorios-excel-sheets">IA para automatizar relatórios no Excel e no Sheets</a> responde ao pedido sem precisar da palavra da moda. O mesmo vale para quem transformou reuniões em atas com <a href="/artigos/ia-para-reunioes-transcricao-resumo-ata-automatica">transcrição e resumo automático</a>: isso é "organização e comunicação", habilidade que toda vaga pede.</p>

    <p>Vale também saber que a triagem do outro lado usa IA. Muitas empresas pequenas já aplicam <a href="/artigos/como-usar-ia-para-melhorar-contratacao-pequenas-empresas">IA no processo de contratação</a> para ler currículos, então uma linha com números e palavras da vaga passa pelo filtro; uma frase vaga não passa.</p>

    <h2>A fórmula para escrever cada linha: tarefa, ferramenta, resultado</h2>

    <p>Cada experiência com IA no currículo cabe em uma frase com três partes. Tarefa: o que você fazia e para quem. Ferramenta: qual IA e com o que ela foi combinada. Resultado: um número (tempo, volume, erro, dinheiro) ou uma consequência verificável.</p>

    <h3>Antes e depois</h3>

    <ul>
      <li><strong>Antes:</strong> "Uso IA para agilizar tarefas do dia a dia."</li>
      <li><strong>Depois:</strong> "Padronizei com ChatGPT as respostas a 120 e-mails de clientes por semana, cortando o tempo médio de resposta de 2 dias para 4 horas, com revisão manual de cada mensagem."</li>
      <li><strong>Antes:</strong> "Conhecimento em Copilot e automação."</li>
      <li><strong>Depois:</strong> "Montei no Copilot um fluxo que consolida 6 planilhas de filiais em um relatório mensal, liberando 8 horas por mês da equipe financeira."</li>
    </ul>

    <p>Repare em dois detalhes. O número não precisa ser enorme; precisa ser real e defensável em entrevista. E a frase "com revisão manual" mostra a habilidade de revisar o que a IA produz, que aparece na tabela acima e que muita gente esquece de declarar.</p>

    <h3>Prompt para reescrever suas experiências</h3>

    <pre><code>Você é recrutador sênior. Vou descrever de forma solta uma tarefa em que usei IA no trabalho.
Reescreva em uma frase de currículo com esta estrutura:
verbo de ação + tarefa + ferramenta usada + resultado com número.
Se faltar um número, me faça uma pergunta para eu estimar com honestidade,
em vez de inventar. Não use adjetivos.

Minha descrição: [conte o que você fez, quanto tempo levava antes e depois]</code></pre>

    <p>Quem já mede resultados assim tem material para <a href="/artigos/como-negociar-salario-melhor-sabendo-usar-ia">negociar salário sabendo usar IA</a>: a mesma frase que entra no currículo entra na conversa de aumento.</p>

    <h2>Onde colocar no currículo e no LinkedIn</h2>

    <p>Habilidade de IA não ganha uma seção separada chamada "Inteligência Artificial". Ela entra dentro das experiências, como qualquer outro resultado. A seção de competências pode listar as ferramentas (ChatGPT, Copilot, Gemini, Zapier), mas a prova fica nos bullets de cada emprego.</p>

    <ul class="checklist">
      <li>Resumo profissional (3 linhas): uma menção ao uso de IA ligada ao resultado principal da carreira.</li>
      <li>Em cada experiência: no máximo 2 bullets com IA, sempre com número. O resto continua sendo o seu trabalho normal.</li>
      <li>Competências: ferramentas por nome, sem nota de "avançado" ou "intermediário".</li>
      <li>Cursos: só os com carga horária e certificado; curso de 2 horas não entra.</li>
      <li>LinkedIn: o mesmo texto nas experiências, mais um post por mês mostrando um caso real.</li>
      <li>Portfólio: um link para 2 ou 3 exemplos (prompt, planilha, fluxo) que o recrutador possa abrir.</li>
    </ul>

    <p>O guia sobre <a href="/artigos/como-montar-portfolio-de-habilidades-de-ia-para-recrutadores">portfólio de habilidades de IA para recrutadores</a> mostra como montar essa página em uma tarde, e o texto sobre <a href="/artigos/como-construir-autoridade-em-ia-no-linkedin-sem-ser-tecnico">autoridade em IA no LinkedIn sem ser técnico</a> ensina o formato de post que funciona para quem não é da área.</p>

    <h2>Exemplo brasileiro: analista administrativa em Belo Horizonte</h2>

    <p>Considere Mariana, analista administrativa em uma distribuidora de Belo Horizonte, salário de R$ 3.400. Toda sexta ela gastava 4 horas montando o relatório de pedidos da semana: exportava do sistema, limpava no Excel e escrevia o resumo para a diretoria. Em março, com o ChatGPT gratuito e o Google Sheets, ela criou um prompt fixo que lê a exportação e devolve o resumo no formato que a chefe gosta. Tempo novo: 40 minutos, incluindo a conferência dos totais.</p>

    <p>No currículo, isso virou: "Automatizei com ChatGPT e Google Sheets o relatório semanal de pedidos (média de 380 pedidos por semana), reduzindo o tempo de produção de 4 horas para 40 minutos e eliminando os erros de soma apontados pela diretoria." Ao se candidatar a uma vaga de coordenação em outra empresa, com faixa de R$ 5.200, ela levou a planilha e o prompt impressos para a entrevista e mostrou o antes e depois em cinco minutos.</p>

    <p>O que sustenta esse exemplo não é a ferramenta, é o registro: ela anotou o tempo antes de mudar o processo. Se você ainda não mede nada, comece esta semana. Sem medida, o guia de <a href="/artigos/como-usar-ia-para-identificar-fechar-lacunas-de-habilidades">identificar lacunas de habilidades com IA</a> ajuda a escolher qual tarefa automatizar primeiro para ter um número em 30 dias.</p>

    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Guarde um "diário de resultados" no celular: data, tarefa, ferramenta, tempo antes, tempo depois, o que deu errado. Três meses disso rendem cinco bullets de currículo e todas as respostas de entrevista.</p></div>

    <h2>Como sustentar na entrevista</h2>

    <p>Na entrevista, a habilidade de IA se prova com um caso contado em quatro passos: o problema, o que você tentou, o que a IA errou e como você corrigiu, o resultado. O terceiro passo é o que separa candidatos, porque mostra que você revisa em vez de copiar e colar. Prepare dois casos, um de sucesso e um em que a IA não serviu e você fez de outro jeito.</p>

    <pre><code>Você é o entrevistador de uma vaga de [cargo]. Faça 5 perguntas difíceis
sobre como eu uso IA no trabalho, incluindo uma sobre privacidade de dados
e uma sobre um caso em que a IA errou. Depois de cada resposta minha,
avalie de 1 a 5 e diga o que faltou de concreto. Comece pela primeira pergunta.</code></pre>

    <p>Esse ensaio pode ser feito no próprio ChatGPT ou no Claude, e o guia de <a href="/artigos/como-se-preparar-para-entrevistas-de-emprego-usando-ia">preparação para entrevistas com IA</a> traz um roteiro completo de simulação. Se bater a sensação de que usar IA "é trapaça", o texto sobre <a href="/artigos/sindrome-do-impostor-usar-ia-nao-te-torna-menos-capaz">síndrome do impostor na era da IA</a> responde a isso com calma: a competência está em decidir o que pedir e em conferir o que volta.</p>

    <p>Um dado ajuda a dimensionar o momento. O <a href="https://economicgraph.linkedin.com/research/work-change-report" rel="noopener noreferrer">Work Change Report do LinkedIn</a> projeta que, até 2030, 70% das habilidades usadas na maioria dos empregos vão mudar, com a IA como principal motor. Entrevistador que sabe disso quer ver capacidade de aprender, não domínio de uma ferramenta que pode ser trocada no ano que vem.</p>

    <h2>Erros comuns que eliminam candidatos</h2>

    <p>Listar dez ferramentas sem nenhum resultado. Colocar "especialista em IA" depois de dois meses de uso. Inventar porcentagem redonda (40%, 50%) que desmonta na primeira pergunta. Copiar o currículo inteiro do ChatGPT sem editar, o que produz texto genérico que o recrutador reconhece em segundos. Esconder o uso de IA por medo de parecer preguiçoso, quando a pesquisa da Microsoft mostra o contrário.</p>

    <p>Há também o erro de contexto: descrever um uso de IA que viola a política da empresa anterior, como colar dados de clientes em um chat público. Isso soa como risco, não como habilidade. Se você usou IA com dados sensíveis, descreva o cuidado que tomou, e se não tomou nenhum, não conte.</p>

    <div class="callout-box callout-bad"><span class="callout-label">Nunca faça</span><p>Nunca declare uma habilidade de IA que você não consegue demonstrar ao vivo em dez minutos. Entrevistador que pede "me mostra como você faria" é cada vez mais comum, e a demonstração que trava vale menos do que a linha que nunca foi escrita.</p></div>

    <p>Habilidades de IA no currículo são resultados com número, não nomes de ferramenta. Escolha uma tarefa da sua rotina, meça o tempo hoje, aplique IA por 30 dias e escreva a frase com tarefa, ferramenta e resultado. Depois, o próximo passo é decidir onde aprofundar, e o artigo sobre <a href="/artigos/especialista-em-nicho-de-ia-ou-generalista-o-que-vale-mais">especialista em nicho de IA ou generalista</a> ajuda a escolher; para quem quer ir além do emprego atual, <a href="/artigos/freelancer-na-era-da-ia-como-se-tornar-insubstituivel">tornar-se insubstituível como freelancer</a> segue a mesma lógica de prova por resultado.</p>
  `,
  faq: [
    {
      question: "Como colocar habilidades de IA no currículo?",
      answer:
        "Dentro de cada experiência, como bullet com três partes: a tarefa que você fazia, a ferramenta de IA usada (ChatGPT, Copilot, Gemini, Zapier) e o resultado medido em tempo, volume, erro ou dinheiro. Exemplo: 'Automatizei com ChatGPT e Sheets o relatório semanal, de 4 horas para 40 minutos'. A seção de competências lista as ferramentas por nome, mas a prova fica nos resultados.",
    },
    {
      question: "Vale a pena colocar ChatGPT no currículo?",
      answer:
        "Vale, desde que venha acompanhado de um uso concreto e de um resultado. Só o nome da ferramenta, na lista de competências, não diferencia ninguém, porque quase todo candidato já usa. Segundo o Work Trend Index 2024 da Microsoft, 66% dos líderes não contratariam alguém sem habilidades de IA, então o ponto não é se declarar, é como provar.",
    },
    {
      question: "Preciso de curso ou certificado de IA para colocar no currículo?",
      answer:
        "Não é obrigatório. Recrutadores valorizam mais um caso real com número do que um certificado de curso curto. Cursos entram quando têm carga horária relevante e certificado verificável. Se você não tem resultado ainda, o caminho mais rápido é escolher uma tarefa da sua rotina, medir o tempo hoje, aplicar IA por 30 dias e registrar a diferença.",
    },
    {
      question: "Como falar de IA na entrevista de emprego?",
      answer:
        "Conte um caso em quatro passos: o problema, o que você tentou com IA, o que a ferramenta errou e como você corrigiu, e o resultado final. O passo do erro é o que mais convence, porque mostra senso crítico. Leve dois casos preparados, um de sucesso e um em que a IA não serviu, e esteja pronto para demonstrar ao vivo se pedirem.",
    },
    {
      question: "Habilidades de IA no currículo servem para vagas que não são de tecnologia?",
      answer:
        "Servem, e é onde mais pesam. Vagas administrativas, financeiras, de vendas e de atendimento raramente escrevem 'IA' na descrição, mas pedem análise, organização e melhoria de processos. Um bullet mostrando relatório automatizado, atendimento padronizado ou ata gerada com IA responde a esses pedidos com prova concreta, sem depender da palavra da moda.",
    },
  ],
  quiz: [
    {
      question: "Qual destas linhas está no formato certo para o currículo?",
      options: [
        "Conhecimento avançado em ChatGPT, Gemini e Copilot",
        "Automatizei com ChatGPT e Sheets o relatório semanal de pedidos, de 4 horas para 40 minutos, com conferência manual dos totais",
        "Apaixonado por inteligência artificial e inovação",
      ],
      answer: 1,
      explanation:
        "A segunda opção tem tarefa, ferramenta e resultado medido, além de mostrar que o trabalho foi revisado. As outras duas só citam ferramentas ou adjetivos.",
    },
    {
      question: "Na entrevista, qual parte do seu caso com IA mais convence o entrevistador?",
      options: [
        "A lista de ferramentas que você testou",
        "O que a IA errou e como você corrigiu",
        "A porcentagem mais alta que você conseguir citar",
      ],
      answer: 1,
      explanation:
        "Mostrar o erro e a correção prova senso crítico, que é a habilidade que separa quem usa IA com critério de quem copia e cola.",
    },
  ],
};
