import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "plano-de-carreira-com-ia-metas-de-90-dias",
  title: "Plano de carreira com IA: metas de 90 dias para crescer",
  seoTitle: "Plano de carreira com IA: metas de 90 dias",
  excerpt:
    "Monte um plano de carreira com IA em metas de 90 dias: diagnóstico, prioridades e acompanhamento semanal, com prompts prontos para copiar.",
  metaDescription:
    "Veja como montar um plano de carreira com IA em ciclos de 90 dias: diagnóstico da posição atual, metas priorizadas e acompanhamento semanal, com exemplo real.",
  category: "carreira",
  articleSubcategory: "desenvolvimento-de-habilidades",
  date: "2026-10-07",
  readTime: 8,
  imageQuery: "career planning notebook calendar office desk",
  seed: 174,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Um ciclo de 90 dias é curto o bastante para manter o foco e longo o bastante para mostrar progresso real, e a IA ajuda a transformar uma meta vaga de carreira em passos semanais concretos.",
    "O plano funciona melhor quando começa por um diagnóstico honesto da posição atual (o que já domina, o que falta, o que o mercado pede), não por uma lista de metas copiada de outra pessoa.",
    "Revisão a cada 30 dias dentro do ciclo evita que o plano fique esquecido no documento: a IA ajuda a ajustar prioridade quando a semana não saiu como previsto.",
  ],
  content: `
    <p>Montar um plano de carreira com IA em ciclos de 90 dias resolve o problema de quem sabe que precisa evoluir, mas nunca transforma essa intenção em ação concreta na semana. Em vez de uma meta anual vaga como "crescer na carreira", o ciclo curto força prioridade: o que fazer nos próximos três meses que realmente move a agulha.</p>

    <p>Este guia mostra como usar um assistente de IA para diagnosticar a posição atual, definir de 2 a 3 metas por ciclo e acompanhar o progresso semana a semana, com o prompt exato para cada etapa e um exemplo de plano real de 90 dias.</p>

    <h2>Por que 90 dias funciona melhor que meta anual</h2>

    <p>Meta de um ano inteiro é fácil de adiar, porque janeiro parece distante de dezembro e qualquer semana perdida passa despercebida. Um ciclo de 90 dias tem o tamanho certo: curto o bastante para manter o senso de urgência, longo o bastante para mostrar resultado visível, como terminar um curso, liderar um projeto pequeno ou fechar uma certificação. Esse princípio aparece também em quem já usa IA para <a href="/artigos/como-usar-ia-para-criar-rotina-diaria-produtiva">criar uma rotina diária produtiva</a>: ciclo curto com revisão frequente rende mais do que plano longo sem checkpoint.</p>

    <h2>Passo 1: diagnóstico honesto da posição atual</h2>

    <p>Antes de definir qualquer meta, é preciso saber onde você está. Pule esse passo e o plano vira uma lista de desejos desconectada da realidade do seu cargo e do seu mercado.</p>

    <pre><code>Vou te passar informações sobre minha posição atual na carreira. Cargo: [cargo atual]. Tempo na empresa ou na função: [tempo]. Principais responsabilidades: [liste 3 a 5]. Onde quero chegar em 1 a 2 anos: [cargo ou área desejada]. Com base nisso, aponte 3 lacunas prováveis entre onde estou e onde quero chegar, considerando habilidade técnica, habilidade de relacionamento e reputação dentro da empresa. Seja direto, sem elogio vazio.</code></pre>

    <p>Peça para o assistente ser direto porque a tendência natural de qualquer IA generativa é suavizar a resposta. Se a lacuna apontada parecer óbvia demais ou genérica, peça para aprofundar com outra pergunta: "por que essa lacuna importa especificamente para a posição de [cargo desejado]?". Quem já leu o guia de <a href="/artigos/como-usar-ia-para-identificar-fechar-lacunas-de-habilidades">identificar e fechar lacunas de habilidades</a> reconhece esse primeiro passo como a base de qualquer plano de desenvolvimento.</p>

    <h2>Passo 2: escolher de 2 a 3 metas, não dez</h2>

    <p>O erro mais comum é tentar atacar todas as lacunas ao mesmo tempo. Um ciclo de 90 dias sustenta de 2 a 3 metas bem trabalhadas, não uma lista de dez intenções que nunca saem do papel.</p>

    <pre><code>Com base nas lacunas que identificamos, sugira de 2 a 3 metas realistas para os próximos 90 dias, priorizando o que trará mais impacto na minha posição atual. Para cada meta, defina um resultado concreto e verificável ao final do ciclo (não um objetivo vago como "melhorar"), e quebre em etapas mensais.</code></pre>

    <p>Um exemplo de meta concreta: "liderar a apresentação de um projeto para a diretoria até o fim do ciclo" é verificável; "melhorar minha comunicação" não é. O guia <a href="/artigos/como-montar-portfolio-de-habilidades-de-ia-para-recrutadores">montar portfólio de habilidades de IA para recrutadores</a> usa a mesma lógica de meta verificável aplicada à busca de emprego.</p>

    <h3>Equilibrando habilidade técnica e posicionamento</h3>

    <p>Nem toda meta precisa ser sobre aprender uma ferramenta nova. Quem já domina a parte técnica do cargo pode priorizar posicionamento, como aparecer mais em reuniões estratégicas ou documentar resultados que hoje ficam invisíveis. O guia <a href="/artigos/como-se-tornar-referencia-em-ia-na-empresa-sem-ser-do-ti">se tornar referência em IA na empresa</a> mostra como esse tipo de meta de visibilidade se constrói em paralelo à parte técnica.</p>

    <h2>Passo 3: quebrar cada meta em tarefa semanal</h2>

    <p>Meta de 90 dias sem divisão semanal vira intenção de novo. Peça ao assistente para transformar cada meta em tarefa concreta por semana, algo que você consiga marcar como feito ou não feito.</p>

    <pre><code>Transforme a meta "[cole a meta definida no passo 2]" em um plano semana a semana para as próximas 12 semanas. Cada semana deve ter de 1 a 3 tarefas concretas, com tempo estimado em horas. Marque quais semanas dependem de aprovação ou agenda de outra pessoa (gestor, colega), para eu me planejar com antecedência.</code></pre>

    <div class="callout-box callout-tip">
      <span class="callout-label">Dica</span>
      <p>Guarde esse plano semanal num documento ou numa conversa fixa com a IA, e cole lá também os compromissos da semana de trabalho. Pedir para o assistente apontar conflito de agenda antes que ele aconteça evita abandonar o plano na primeira semana cheia.</p>
    </div>

    <h2>Exemplo real: analista buscando a vaga de coordenador em 90 dias</h2>

    <p>Uma analista de marketing em São Paulo, há 2 anos no cargo, quer a vaga de coordenação que deve abrir no time em 6 meses. O diagnóstico com a IA apontou três lacunas: pouca visibilidade fora do próprio time, nenhuma experiência formal liderando pessoas e lacuna em leitura de dados de performance de campanha. As metas do primeiro ciclo de 90 dias ficaram assim: assumir a liderança informal de um projeto com 2 pessoas do time, apresentar um relatório de performance de campanha direto para a diretoria uma vez no trimestre, e concluir um curso curto de leitura de dados (Google Analytics ou equivalente). Ao final dos 90 dias, ela tinha um resultado concreto para citar em qualquer conversa sobre promoção, em vez de apenas "tenho interesse em crescer".</p>

    <p>Esse tipo de resultado concreto é o que facilita depois a conversa sobre <a href="/artigos/como-negociar-salario-melhor-sabendo-usar-ia">negociar salário</a> ou sobre posição: quem chega com fato específico negocia melhor do que quem só expressa intenção.</p>

    <h2>Revisão a cada 30 dias dentro do ciclo</h2>

    <p>Marque uma revisão no meio e no fim do ciclo, não só no fim. Semanas atrasam, prioridade do trabalho muda, e o plano precisa se ajustar sem virar motivo de culpa.</p>

    <pre><code>Estamos no dia [número] do ciclo de 90 dias. Aqui está o que consegui fazer até agora: [liste o que foi concluído e o que ficou para trás]. Ajuste o plano das próximas semanas considerando esse progresso real, priorizando o que ainda é possível entregar até o fim do ciclo.</code></pre>

    <p>Essa revisão periódica segue o mesmo espírito do guia sobre <a href="/artigos/avaliacao-de-desempenho-no-trabalho-como-ia-ajuda-a-se-destacar">avaliação de desempenho no trabalho</a>: quem chega à conversa formal com a empresa já tendo revisado o próprio progresso tem muito mais argumento concreto do que quem só lembra da meta na hora da avaliação anual.</p>

    <p>Sobre a ferramenta: o plano gratuito de ChatGPT, Claude ou Gemini já atende quem usa a IA só para esse planejamento mensal. O Claude Pro custa 20 dólares por mês, segundo a <a href="https://claude.com/pricing" rel="noopener noreferrer">página oficial de planos</a> (verificado em 07/10/2026), e o Google AI Pro custa 19,99 dólares por mês, segundo a <a href="https://gemini.google/subscriptions/" rel="noopener noreferrer">página oficial de assinaturas do Gemini</a> (verificado em 07/10/2026). Assinar um plano pago só faz diferença para quem já usa a IA todos os dias para outras tarefas do trabalho.</p>

    <div class="callout-box callout-warn">
      <span class="callout-label">Atenção</span>
      <p>Não cole informação confidencial da empresa (dado financeiro, nome de cliente, estratégia não divulgada) no prompt para montar o plano. Fale em termos gerais sobre o projeto, sem detalhe que a empresa considere sigiloso.</p>
    </div>

    <h2>Erros comuns ao montar plano de carreira com IA</h2>

    <ul>
      <li><strong>Pular o diagnóstico e ir direto para a meta.</strong> Sem saber onde está, a meta sai desconectada da realidade do cargo.</li>
      <li><strong>Definir mais de 3 metas por ciclo.</strong> O foco se dissolve e nenhuma meta avança de verdade em 90 dias.</li>
      <li><strong>Meta vaga sem resultado verificável.</strong> "Ser mais proativo" não dá para marcar como feito; "liderar um projeto até o fim do ciclo" dá.</li>
      <li><strong>Não revisar no meio do ciclo.</strong> Sem ajuste no dia 30 ou 45, o plano original perde contato com a realidade da semana de trabalho.</li>
      <li><strong>Guardar o plano só na cabeça.</strong> Sem documento ou conversa fixa para consultar, a meta se perde entre as tarefas do dia a dia.</li>
    </ul>

    <h2>Checklist para o primeiro ciclo de 90 dias</h2>

    <ul class="checklist">
      <li>Diagnóstico honesto da posição atual, com lacunas específicas apontadas</li>
      <li>De 2 a 3 metas escolhidas, cada uma com resultado verificável ao final do ciclo</li>
      <li>Plano semana a semana, com tarefa concreta e tempo estimado</li>
      <li>Revisão marcada no meio do ciclo (dia 30 ou 45) para ajustar prioridade</li>
      <li>Resultado do ciclo registrado por escrito, para usar em avaliação ou negociação futura</li>
    </ul>

    <p>O mesmo método de diagnóstico, meta curta e revisão semanal funciona também para quem está em transição de carreira: o guia <a href="/artigos/como-migrar-de-carreira-para-area-de-ia">migrar de carreira para a área de IA</a> usa a lógica de ciclo curto para quem está trocando de área, não só subindo de cargo. Vale revisar também as <a href="/artigos/vagas-de-ia-no-brasil-quais-cargos-contratando-2026">vagas de IA no Brasil</a> para calibrar se a meta do ciclo está alinhada com o que o mercado pede, e considerar se alguma das <a href="/artigos/certificacoes-de-ia-que-valem-a-pena-para-a-carreira">certificações de IA que valem a pena</a> entra como uma das metas do próximo ciclo. Quem sente que o cargo exige saber tudo de uma vez pode ler antes o guia sobre <a href="/artigos/especialista-em-nicho-de-ia-ou-generalista-o-que-vale-mais">especialista em nicho ou generalista</a> para escolher melhor onde focar. Comece o próximo ciclo na segunda-feira que vem, com uma meta só, e veja o que 90 dias de foco realmente mudam.</p>
  `,
  faq: [
    {
      question: "Por que usar ciclo de 90 dias em vez de meta anual de carreira?",
      answer:
        "Um ciclo de 90 dias é curto o bastante para manter o senso de urgência e longo o bastante para mostrar resultado visível, como concluir um curso ou liderar um projeto. Meta anual costuma ser adiada porque o prazo parece distante; o ciclo curto força prioridade imediata.",
    },
    {
      question: "Quantas metas devo colocar em um ciclo de 90 dias?",
      answer:
        "De 2 a 3 metas bem trabalhadas rendem mais do que uma lista de dez intenções. O foco em poucas metas permite quebrar cada uma em tarefa semanal concreta, o que é o que de fato move o progresso dentro do ciclo.",
    },
    {
      question: "A IA sabe quais habilidades valem mais na minha área?",
      answer:
        "Ela ajuda a organizar o raciocínio a partir do que você informa sobre seu cargo e objetivo, mas não substitui a leitura de vagas reais do seu mercado. Use a IA para estruturar o diagnóstico e confirme a lacuna comparando com vagas abertas para o cargo que você quer.",
    },
    {
      question: "Como evitar que o plano de carreira seja esquecido depois de criado?",
      answer:
        "Marcando revisão no meio do ciclo (por volta do dia 30 ou 45) e guardando o plano num documento ou conversa fixa com a IA, para consultar junto com a agenda da semana. Sem esse hábito de revisão, o plano perde contato com a realidade do dia a dia.",
    },
    {
      question: "Esse método funciona para quem quer trocar de área, não só subir de cargo?",
      answer:
        "Funciona, com o mesmo diagnóstico inicial e ciclo de metas curtas, mudando o foco para as lacunas da nova área em vez da atual. A diferença fica mais no conteúdo das metas do que no método de planejamento em si.",
    },
  ],
};
