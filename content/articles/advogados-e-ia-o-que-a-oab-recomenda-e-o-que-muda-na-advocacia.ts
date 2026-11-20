import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "advogados-e-ia-o-que-a-oab-recomenda-e-o-que-muda-na-advocacia",
  title: "Advogados e IA: o que a OAB recomenda e o que muda na prática",
  seoTitle: "Advogados e IA: o que a OAB recomenda e o que muda",
  excerpt:
    "Advogados e IA: veja o que a Recomendação 001/2024 da OAB pede, quais tarefas a IA ajuda a fazer e onde o profissional responde sozinho pelo erro.",
  metaDescription:
    "Advogados e IA: entenda a Recomendação 001/2024 da OAB, a regra do CNJ para tribunais, o que a IA faz bem na advocacia e quais erros custam caro ao advogado.",
  category: "futuro",
  articleSubcategory: "trabalho-e-profissoes",
  date: "2026-10-20",
  readTime: 7,
  imageQuery: "lawyer desk law books laptop",
  seed: 479,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "A Recomendação 001/2024 do Conselho Federal da OAB orienta o uso de IA generativa em quatro eixos: legislação aplicável, confidencialidade e privacidade, prática jurídica ética e comunicação sobre o uso da ferramenta.",
    "A IA entra bem em tarefas de apoio, como resumir processo, organizar cronologia e preparar rascunho, mas a verificação e a assinatura continuam sendo do advogado.",
    "Quem usa a ferramenta sem checar precedentes e citações assume o risco sozinho: dizer que a IA errou não afasta a responsabilidade profissional.",
  ],
  content: `
    <p>Advogados e IA podem andar juntos desde que a ferramenta fique no papel de assistente e o profissional fique com a decisão e a assinatura. A Recomendação 001/2024 do Conselho Federal da OAB, aprovada em 11 de novembro de 2024, não proíbe a tecnologia: ela pede cuidado com a lei, com o sigilo do cliente, com a ética e com a transparência sobre o uso.</p>

    <p>Este texto é um guia de leitura sobre o assunto, não parecer jurídico nem orientação de conduta para um caso concreto. Se você é advogado, estagiário, cliente de escritório ou estudante de Direito, a ideia é entender o que já foi dito oficialmente, onde a IA ajuda de verdade e onde ela cria problema. Quem trabalha em outra área também aproveita: a lógica de "a máquina rascunha, o humano responde" vale para <a href="/artigos/empregos-que-a-ia-vai-transformar-como-se-preparar">todos os empregos que a IA vai transformar</a>.</p>

    <h2>O que diz a Recomendação 001/2024 da OAB sobre IA generativa</h2>

    <p>Segundo a <a href="https://www.ibet.com.br/oab-aprova-recomendacoes-para-o-uso-de-inteligencia-artificial-na-advocacia/" target="_blank" rel="noopener noreferrer">reprodução de nota da Conjur publicada pelo IBET</a>, conferida em 20/10/2026, o Conselho Federal aprovou as recomendações em 11/11/2024. O texto foi preparado pelo Observatório Nacional de Cibersegurança, Inteligência Artificial e Proteção de Dados da entidade e se organiza em quatro diretrizes:</p>

    <ul>
      <li>Legislação aplicável ao uso da IA generativa.</li>
      <li>Confidencialidade e privacidade das informações do cliente.</li>
      <li>Prática jurídica ética.</li>
      <li>Comunicação sobre o uso de IA generativa.</li>
    </ul>

    <p>O relator, Francisco Queiroz Caputo Neto, explicou que a OAB não pode criar sanções por conta própria, porque isso é matéria de reserva legal. A função da recomendação é alertar o advogado para regras que já existem, como o Código de Ética e Disciplina. Na prática, o documento funciona como régua de conduta: quem a ignora fica mais exposto se algo der errado.</p>

    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Leia o texto oficial da recomendação no site da OAB antes de montar a política de IA do seu escritório. Este guia resume o que a imprensa jurídica e as seccionais publicaram, e a redação exata pode trazer detalhes que mudam um procedimento.</p></div>

    <h2>E o Judiciário? A regra do CNJ para tribunais</h2>

    <p>O outro lado da mesa também tem regra. De acordo com a <a href="https://www2.oabrs.org.br/jornalDaOrdem/gt-sobre-o-uso-etico-da-ia-oab-rs-discute-novas-diretrizes-do-cnj/51416" target="_blank" rel="noopener noreferrer">cobertura da OAB/RS</a>, a Resolução 615/2025 do CNJ trata de sistemas de IA nos tribunais com foco em transparência, responsabilidade, segurança e ética. Entre os princípios estão respeito aos direitos fundamentais, proteção de dados pessoais, supervisão humana contínua e regras para decisões automatizadas. Os tribunais também precisam divulgar quais sistemas de IA usam.</p>

    <p>Para o advogado, o ponto prático é saber que o juízo pode estar usando ferramentas de apoio e que a supervisão humana é princípio dos dois lados. Quem entende a regra consegue questionar um uso inadequado e, ao mesmo tempo, evita levar para a petição um atalho que o próprio sistema de justiça trata com desconfiança. Para o cidadão comum, o artigo sobre <a href="/artigos/decisao-automatizada-lgpd-como-pedir-revisao-de-uma-ia">decisão automatizada e a LGPD</a> mostra o direito de pedir revisão quando uma máquina decide.</p>

    <h2>Onde a IA ajuda o advogado de verdade</h2>

    <p>O ganho está nas tarefas de apoio, em que o resultado pode ser conferido rápido por quem conhece o caso. Pense em um escritório pequeno de direito do consumidor, com uma advogada e uma estagiária, que recebe 30 documentos de um cliente em PDF. A IA ajuda a montar a cronologia dos fatos, listar pedidos possíveis e apontar contradições entre documentos. O trabalho jurídico começa depois, na conferência de cada item contra o processo.</p>

    <table>
      <thead>
        <tr><th>Tarefa</th><th>Ajuda da IA</th><th>O que o advogado confere</th></tr>
      </thead>
      <tbody>
        <tr><td>Resumo de processo longo</td><td>Alta</td><td>Datas, valores e nomes contra os autos</td></tr>
        <tr><td>Cronologia dos fatos</td><td>Alta</td><td>Cada evento com o documento de origem</td></tr>
        <tr><td>Rascunho de contrato padrão</td><td>Média</td><td>Cláusulas, foro e adequação ao caso</td></tr>
        <tr><td>Pesquisa de jurisprudência</td><td>Baixa a média</td><td>Existência e teor de cada precedente</td></tr>
        <tr><td>Peça processual final</td><td>Só como rascunho</td><td>Tudo, antes de assinar</td></tr>
      </tbody>
    </table>

    <p>O guia sobre <a href="/artigos/ia-para-contratos-revisar-documentos-juridicos-mais-rapido">revisão de contratos com IA</a> detalha o fluxo de leitura de cláusulas, e o texto sobre <a href="/artigos/como-usar-ia-para-resumir-pdfs-artigos-e-textos-longos">como resumir PDFs e textos longos</a> serve de base para a rotina de leitura de processo.</p>

    <h2>Dois prompts que respeitam sigilo e deixam a decisão com você</h2>

    <p>Um bom comando pede estrutura e mostra as fontes, em vez de pedir a resposta pronta. Antes de colar qualquer documento, remova nomes, CPFs e dados que identifiquem as partes, ou use uma ferramenta contratada com garantia de confidencialidade.</p>

    <pre><code>Você é assistente de um escritório de advocacia. Com base apenas no texto abaixo, monte uma cronologia em tabela (data, fato, trecho do documento onde aparece). Se faltar informação, escreva "não consta" em vez de supor. Não cite leis nem precedentes.</code></pre>

    <pre><code>Liste os pontos do rascunho abaixo que dependem de verificação humana: números de processo, citações de lei, nomes de tribunais e valores. Para cada ponto, diga como conferir em fonte oficial. Não invente referências.</code></pre>

    <p>O segundo comando não resolve o problema, mas cria uma lista de conferência. Para entender por que esse cuidado importa, o guia sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a> explica como a máquina produz texto plausível sem garantia de verdade.</p>

    <h2>O erro que custa caro: citação e precedente inventados</h2>

    <p>A coluna de Ana Flávia Sales no <a href="https://www.em.com.br/colunistas/direito-simples-assim/2026/07/amp/7469585-quando-a-inteligencia-artificial-erra-quem-responde-e-o-advogado.html" target="_blank" rel="noopener noreferrer">Estado de Minas</a>, de 29/07/2026, resume o risco: sistemas generativos produzem texto provável, não fato verificado, e podem inventar número de processo, atribuir voto a ministro ou criar decisão que não existe. Segundo o texto, tribunais brasileiros já identificaram precedentes falsos e aplicaram consequências como multa por litigância de má-fé e envio do caso à OAB.</p>

    <p>A mesma coluna lembra que dizer que a IA errou não tira o dever de verificar, e que, pela Recomendação 001/2024, o conteúdo gerado deve passar por revisão humana integral. O cliente que não sabia do erro, em geral, não deve arcar com ele. Por isso a regra de ouro é simples: nenhuma citação vai para a peça sem ser aberta na base oficial do tribunal ou no texto da lei.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Citação real tirada de contexto também é problema. Leia o precedente inteiro, confirme se o tema é o mesmo e se ele ainda vale, antes de usar em favor do cliente.</p></div>

    <p>A imprensa de tecnologia também acompanha o assunto: a notícia sobre a <a href="/noticias/citeproof-ferramenta-verifica-citacoes-falsas-ia-advogados">ferramenta que verifica citações falsas de IA</a> mostra que o mercado já criou produtos só para esse tipo de conferência, e o <a href="/noticias/google-estudo-advogados-ia-experiencia-juniores-seniores">estudo do Google sobre advogados e IA</a> discute como juniores e seniores usam a tecnologia de forma diferente.</p>

    <h2>Sigilo, LGPD e o que contar ao cliente</h2>

    <p>O documento do cliente tem sigilo profissional e dados pessoais. A segunda diretriz da OAB trata de confidencialidade e privacidade, e a quarta de comunicação sobre o uso. Em termos práticos, vale ter regras escritas no escritório: quais ferramentas são aprovadas, que dados nunca entram em chat aberto e quem faz a revisão final.</p>

    <p>Segundo a coluna do Estado de Minas, o consentimento genérico do cliente não equivale a um aval amplo: o ideal é explicar para que a IA será usada, quais os benefícios, os limites e os riscos, incluindo como a plataforma guarda ou reutiliza dados. O guia de <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">LGPD para quem usa IA</a> traz o checklist de dados que serve de ponto de partida, e o texto sobre <a href="/artigos/colar-dados-da-empresa-no-chatgpt-o-que-o-funcionario-pode-fazer">colar dados da empresa no ChatGPT</a> mostra o raciocínio de risco. Para escolher a ferramenta, use o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist de segurança</a>.</p>

    <h2>O que muda na carreira jurídica</h2>

    <p>O mercado deve valorizar quem une conhecimento do caso, julgamento e domínio da ferramenta. Tarefas repetitivas de leitura e triagem ficam mais rápidas, e o diferencial passa a ser estratégia, negociação, empatia com o cliente e responsabilidade por cada afirmação. Em vez de "a IA vai substituir o advogado", a pergunta útil é "qual parte do meu dia pode virar rascunho conferido".</p>

    <p>Quem quer se preparar pode começar por três hábitos: aprender a <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">escrever comandos que funcionam</a>, treinar as <a href="/artigos/habilidades-humanas-que-a-ia-nao-substitui-no-trabalho">habilidades humanas que a IA não substitui</a> e acompanhar as <a href="/artigos/profissoes-que-vao-surgir-por-causa-da-ia">profissões que vão surgir por causa da IA</a>, como a de especialista em conformidade e governança de IA. Para o debate regulatório geral, o resumo da <a href="/artigos/lei-de-ia-no-brasil-o-que-muda-para-quem-usa">lei de IA no Brasil</a> ajuda a situar o tema.</p>

    <h2>Erros comuns de quem começa a usar IA na advocacia</h2>

    <ul class="checklist">
      <li>Colar a petição inicial com nome e CPF das partes em um chat gratuito.</li>
      <li>Copiar ementa ou número de processo sem abrir a fonte oficial.</li>
      <li>Usar a mesma ferramenta pessoal para todos os clientes, sem regra de acesso.</li>
      <li>Deixar o estagiário usar IA sem política escrita nem revisão de um sócio.</li>
      <li>Não avisar o cliente de que a IA apoia parte do trabalho.</li>
      <li>Culpar a ferramenta quando o erro aparece, em vez de corrigir o processo de revisão.</li>
    </ul>

    <h2>Por onde começar sem se expor</h2>

    <p>Escolha uma tarefa pequena, como resumir um documento já sem dados pessoais, e compare o resultado com a sua leitura. Anote onde a IA acertou e onde errou, escreva uma política de uma página com as ferramentas aprovadas e defina quem revisa. Depois amplie aos poucos. A tecnologia muda rápido, mas a regra central da OAB continua: a responsabilidade é humana. Se quiser seguir o tema, leia também o guia sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">o que você entrega à IA sem perceber</a> e acompanhe a categoria Futuro do Portal da AI.</p>
  `,
  faq: [
    {
      question: "A OAB proíbe advogado de usar IA?",
      answer:
        "Não. A Recomendação 001/2024, aprovada pelo Conselho Federal em 11/11/2024, orienta o uso de IA generativa, mas não o proíbe. Ela pede atenção à legislação, ao sigilo, à ética e à comunicação com o cliente. Por ser recomendação, não cria sanção própria, mas serve de alerta para as regras do Código de Ética e Disciplina.",
    },
    {
      question: "Advogado pode usar o ChatGPT para fazer petição?",
      answer:
        "Pode usar como apoio de rascunho, desde que revise tudo. A responsabilidade pela peça é do advogado que assina, e a IA pode inventar leis, citações e precedentes. Antes de protocolar, confira cada referência em fonte oficial e evite inserir dados identificáveis das partes em ferramentas sem garantia de confidencialidade.",
    },
    {
      question: "O advogado precisa avisar o cliente que usou IA?",
      answer:
        "A quarta diretriz da recomendação trata da comunicação sobre o uso de IA generativa. Pela leitura de comentaristas, convém explicar ao cliente a finalidade, os benefícios, os limites e os riscos, em vez de depender de uma cláusula genérica. Confira o texto oficial e, em dúvida, consulte a seccional da sua OAB.",
    },
    {
      question: "O juiz pode usar IA para decidir?",
      answer:
        "A Resolução 615/2025 do CNJ regula o uso de IA no Judiciário com princípios como supervisão humana contínua, transparência e proteção de dados, e exige que os tribunais divulguem os sistemas que usam. A decisão continua sendo responsabilidade humana. Para detalhes de cada ferramenta, consulte a página do tribunal.",
    },
    {
      question: "A IA vai substituir o advogado?",
      answer:
        "As tarefas repetitivas de leitura, triagem e rascunho tendem a ficar mais rápidas, e isso muda a rotina e a forma de cobrar. Estratégia, julgamento, relação com o cliente e responsabilidade profissional continuam humanos. Quem aprende a usar a ferramenta com método tende a ganhar tempo, não a perder espaço.",
    },
  ],
};
