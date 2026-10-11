import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "mentor-de-carreira-com-ia-prompts-para-decidir-seu-proximo-passo",
  title: "Mentor de carreira com IA: 7 prompts para decidir o rumo",
  seoTitle: "Mentor de carreira com IA: 7 prompts prontos",
  excerpt:
    "Use a IA como mentor de carreira: 7 prompts prontos para mapear habilidades, comparar caminhos, preparar conversas e montar um plano de ação em 30 dias.",
  metaDescription:
    "Mentor de carreira com IA: 7 prompts para diagnóstico, comparação de caminhos, plano de 30 dias e conversa com o gestor, e os limites que você deve respeitar.",
  category: "carreira",
  articleSubcategory: "desenvolvimento-de-habilidades",
  date: "2026-10-11",
  readTime: 6,
  imageQuery: "mentor mentee conversation coffee office",
  seed: 199,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "A IA funciona bem como mentor de carreira quando você dá contexto real e pede perguntas, comparações e planos, em vez de uma resposta pronta sobre o que fazer da vida.",
    "O LinkedIn projeta que 70% das habilidades usadas na maioria dos empregos vão mudar até 2030, e a pesquisa da Microsoft mostra que a maioria dos profissionais sente a necessidade de ter habilidades em IA.",
    "A decisão final é sua: use a IA para organizar o raciocínio, confirme fatos com pessoas e fontes reais e não compartilhe dados sensíveis do trabalho.",
  ],
  content: `
    <p>Dá para usar a IA como mentor de carreira se você a tratar como um interlocutor que faz perguntas, compara caminhos e monta planos, e não como um oráculo. Com bons prompts, ela ajuda a mapear o que você sabe, comparar duas opções de emprego, preparar uma conversa difícil e transformar uma decisão vaga em um plano de 30 dias.</p>
    <p>Este guia traz sete prompts prontos, um exemplo com números e os limites que você deve respeitar. A IA não conhece seu mercado local, seu chefe nem seu momento de vida, e é você quem decide. O objetivo aqui é organizar o pensamento, não terceirizar a escolha.</p>

    <h2>Por que usar a IA como mentora de carreira agora?</h2>
    <p>O trabalho está mudando rápido. O <a href="https://economicgraph.linkedin.com/research/work-change-report" rel="noopener noreferrer" target="_blank">relatório Work Change do LinkedIn</a> projeta que 70% das habilidades usadas na maioria dos empregos vão mudar até 2030, com a IA como um dos motores. A mesma página informa que, desde 2022, a velocidade com que membros adicionam novas habilidades ao perfil aumentou 140%.</p>
    <p>Do lado das empresas, o <a href="https://www.microsoft.com/en-us/worklab/work-trend-index/ai-at-work-is-here-now-comes-the-hard-part" rel="noopener noreferrer" target="_blank">Work Trend Index 2024, da Microsoft</a>, indica que 76% dos profissionais dizem precisar de habilidades em IA para se manter competitivos e que 66% dos líderes não contratariam alguém sem elas. São números de uma pesquisa global, não do Brasil, mas indicam a direção. Mentoria humana continua valiosa e nem todo mundo tem acesso a ela, e é aí que a IA entra como apoio, como no guia de <a href="/artigos/plano-de-carreira-com-ia-metas-de-90-dias">plano de carreira com IA e metas de 90 dias</a>.</p>

    <h2>Como conversar com a IA para ela mentorar de verdade</h2>
    <p>Três regras mudam a qualidade da resposta. Primeiro, dê contexto: cargo, tempo de experiência, área, salário aproximado (se quiser), cidade e o que incomoda hoje. Segundo, peça que a IA faça perguntas antes de responder. Terceiro, peça opções com prós e contras, não um veredito. O guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">comandos que funcionam</a> explica por que isso melhora o resultado.</p>
    <p>Antes de começar, escreva um parágrafo sobre você e guarde para colar nos prompts. Troque nomes de empresas, chefes e colegas por termos genéricos, como &quot;minha empresa&quot; e &quot;meu gestor&quot;. Essa higiene simples evita expor dados que não precisam sair do seu controle, tema do texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">privacidade ao usar IA</a>.</p>

    <p>Faça sessões curtas, de 20 a 30 minutos, com um objetivo por conversa. Ao final de cada uma, peça um resumo de cinco linhas com as decisões e as próximas ações e cole em um documento seu. Assim você constrói um diário de carreira que mostra a evolução do seu pensamento e evita repetir a mesma discussão toda vez que abrir um chat novo.</p>

    <h2>Os 7 prompts</h2>
    <h3>1. Diagnóstico de habilidades</h3>
    <pre><code>Atue como mentor de carreira. Sou [cargo], com [X] anos de experiência em [área]. Antes de dar qualquer conselho, me faça 8 perguntas, uma por vez, para entender minhas habilidades, o que gosto de fazer e o que me desgasta. Depois resuma meu perfil em 5 linhas.</code></pre>
    <h3>2. Lacunas para o cargo que quero</h3>
    <pre><code>Quero chegar a [cargo-alvo]. Com base no meu perfil acima, liste as 5 habilidades que mais me faltam, em ordem de impacto, e um jeito barato de começar a treinar cada uma.</code></pre>
    <h3>3. Comparação de dois caminhos</h3>
    <pre><code>Estou entre [opção A] e [opção B]. Compare as duas em uma tabela com critérios: remuneração provável, aprendizado, risco, flexibilidade e encaixe com meu perfil. Aponte o que eu preciso descobrir antes de decidir.</code></pre>
    <h3>4. Conversa com o gestor</h3>
    <pre><code>Quero pedir uma promoção ao meu gestor. Meus resultados no último semestre: [liste fatos]. Monte um roteiro de conversa de 10 minutos, com abertura, três argumentos e uma resposta para a objeção &quot;não há orçamento agora&quot;.</code></pre>
    <h3>5. Perguntas para uma pessoa real</h3>
    <pre><code>Quero entrevistar alguém que já trabalha como [cargo-alvo]. Crie 10 perguntas que revelem o dia a dia real, o que ninguém conta no anúncio da vaga e o que essa pessoa faria diferente.</code></pre>
    <h3>6. Plano de 30 dias</h3>
    <pre><code>Transforme minha decisão de [objetivo] em um plano de 30 dias com 1 ação por semana, no máximo 4 horas semanais, e um jeito simples de medir se estou avançando.</code></pre>
    <h3>7. Revisão crítica</h3>
    <pre><code>Leia o plano acima como um cético. Quais premissas podem estar erradas? O que eu poderia estar ignorando? Dê 5 perguntas desconfortáveis que eu deveria me fazer.</code></pre>

    <h2>Exemplo: de analista administrativo a analista de dados</h2>
    <p>Imagine o Rafael, analista administrativo em Recife, com 6 anos de empresa e salário de R$ 3.800. Ele quer migrar para dados, mas não sabe por onde começar. No prompt 1, a IA descobre que ele gosta de planilhas e detesta tarefas repetitivas. No prompt 2, aponta três lacunas: SQL básico, visualização de dados e portfólio. No prompt 6, monta um plano de 30 dias com 4 horas por semana.</p>
    <p>Em seguida, ele usa o prompt 5 para conversar com dois analistas que encontra no LinkedIn. O resultado não é emprego novo em 30 dias, e sim clareza: ele sabe o que estudar e o que perguntar. É uma ilustração de método, sem promessa de salário ou de prazo. O guia de <a href="/artigos/como-usar-ia-para-identificar-fechar-lacunas-de-habilidades">como identificar e fechar lacunas de habilidades</a> aprofunda a etapa 2, e o de <a href="/artigos/como-migrar-de-carreira-para-area-de-ia">migrar de carreira para a área de IA</a> serve a quem mira tecnologia.</p>

    <h2>Preparar entrevistas, currículo e negociação</h2>
    <p>O mentor de IA também ajuda nas três fases concretas de uma mudança. No currículo, peça uma revisão com foco em resultados, com números reais que você mesmo forneceu. O guia de <a href="/artigos/como-colocar-habilidades-de-ia-no-curriculo">habilidades de IA no currículo</a> mostra como apresentar isso. Na entrevista, simule perguntas e treine respostas com a ajuda de <a href="/artigos/como-se-preparar-para-entrevistas-de-emprego-usando-ia">como se preparar para entrevistas usando IA</a>.</p>
    <p>Na negociação, o prompt 4 é um bom ponto de partida, e o guia de <a href="/artigos/como-negociar-salario-melhor-sabendo-usar-ia">como negociar salário melhor sabendo usar IA</a> traz argumentos e cuidados. Em todos os casos, nunca invente conquista: a IA pode embelezar texto, mas o que está no papel precisa ser verdade e defensável numa conversa.</p>

    <h2>Limites: onde a IA não substitui uma pessoa</h2>
    <p>A IA não sabe quanto o mercado da sua cidade paga, não conhece a cultura de uma empresa e pode soar convincente mesmo errando. Salário, vagas abertas e exigências de certificação devem ser conferidos em fontes atuais. Conselhos sobre decisões grandes, como pedir demissão, merecem conversa com alguém de confiança, e o texto sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a> mostra como checar o que ela diz.</p>
    <p>Há ainda a dimensão emocional. Quem sente que está ficando para trás pode se beneficiar do guia sobre <a href="/artigos/sindrome-do-impostor-usar-ia-nao-te-torna-menos-capaz">síndrome do impostor</a> e do texto sobre <a href="/artigos/habilidades-humanas-que-a-ia-nao-substitui-no-trabalho">habilidades humanas que a IA não substitui</a>. Uma conversa com um mentor humano, com alguém da sua área ou com um profissional de carreira continua insubstituível para o que é pessoal.</p>

    <h2>Erros comuns</h2>
    <ul class="checklist">
      <li>Pedir &quot;o que devo fazer da minha vida&quot; sem dar contexto.</li>
      <li>Aceitar a primeira resposta sem pedir alternativas e contra-argumentos.</li>
      <li>Colar dados confidenciais da empresa, de clientes ou de colegas.</li>
      <li>Confiar em números de salário e de vagas que a IA apresentou sem fonte.</li>
      <li>Fazer plano grande demais, que não cabe nas horas livres da semana.</li>
      <li>Usar a IA para evitar a conversa difícil em vez de prepará-la.</li>
    </ul>

    <p>Escolha hoje um prompt, de preferência o 1, e dedique 20 minutos a ele. Depois, escolha uma ação da semana e cumpra. Para avançar em direção ao mercado, veja as <a href="/artigos/certificacoes-de-ia-que-valem-a-pena-para-a-carreira">certificações de IA que valem a pena</a> e, para ganhar visibilidade, o guia de <a href="/artigos/como-construir-autoridade-em-ia-no-linkedin-sem-ser-tecnico">autoridade em IA no LinkedIn</a>. Mais conteúdo está na categoria <a href="/categoria/carreira">Carreira com IA</a>.</p>
  `,
  faq: [
    {
      question: "A IA pode ser um mentor de carreira?",
      answer:
        "Pode ajudar como apoio: faz perguntas, compara caminhos, prepara conversas e monta planos. Mas não conhece seu mercado local nem sua empresa, e pode errar com confiança. Use como ferramenta de reflexão e confirme fatos com pessoas e fontes reais.",
    },
    {
      question: "Quais prompts usar para planejar a carreira?",
      answer:
        "Comece pedindo que a IA faça perguntas sobre você, depois peça lacunas de habilidades para o cargo desejado, uma comparação entre dois caminhos e um plano de 30 dias com ações semanais. Por fim, peça uma revisão crítica do plano.",
    },
    {
      question: "É seguro colocar dados do meu trabalho na IA?",
      answer:
        "Evite dados confidenciais, nomes de clientes e informações sigilosas da empresa. Troque nomes por termos genéricos e siga a política da sua empresa. Leia também as configurações de privacidade da ferramenta que você usa.",
    },
    {
      question: "A IA pode dizer qual salário devo pedir?",
      answer:
        "Pode ajudar a organizar argumentos, mas não deve ser sua única fonte de valores. Pesquise faixas em fontes atuais, converse com profissionais da área e use a IA para estruturar o roteiro da negociação, não para definir o número.",
    },
    {
      question: "Vale mais a pena usar IA ou um mentor humano?",
      answer:
        "Os dois se complementam. A IA está disponível a qualquer hora e ajuda a organizar ideias; o mentor humano traz experiência real, rede de contatos e visão do mercado. Use a IA para chegar mais preparado às conversas com pessoas.",
    },
  ],
};
