import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "case-de-portfolio-com-ia-como-transformar-um-projeto-em-historia",
  title: "Case de portfolio com IA: transforme um projeto em história",
  seoTitle: "Case de portfolio com IA: modelo passo a passo",
  excerpt:
    "Case de portfolio com IA: como transformar um projeto de trabalho em uma história com problema, ação e resultado, sem inventar números nem expor a empresa.",
  metaDescription:
    "Case de portfolio com IA para qualquer profissão: estrutura em cinco partes, prompts para organizar anotações, como medir resultado sem inventar e onde publicar.",
  category: "carreira",
  articleSubcategory: "curriculo-e-portfolio",
  date: "2026-10-19",
  readTime: 7,
  imageQuery: "professional presenting project notes laptop",
  seed: 473,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Um bom case de portfolio conta uma história curta: contexto, problema, o que você fez, resultado e aprendizado, e serve para qualquer profissão, não só design e programação.",
    "A IA ajuda a organizar anotações e a lapidar o texto, mas os fatos e os números precisam ser seus e verdadeiros, e dados confidenciais da empresa não devem ser colados em ferramentas públicas.",
    "Três cases bem contados valem mais do que dez projetos listados, e publicá-los em um link simples, como uma página do Notion, já basta para começar.",
  ],
  content: `
    <p>Um case de portfolio é a história de um projeto seu contada em cinco partes: contexto, problema, o que você fez, resultado e aprendizado. A IA ajuda a organizar as anotações e a deixar o texto claro, mas quem fornece os fatos e os números é você. Com três cases bem contados, já dá para mostrar a recrutadores como você trabalha.</p>

    <p>Muita gente tem boas entregas e nenhum material para mostrar. O currículo lista tarefas, e o recrutador não sabe se você fez a diferença. Neste guia você vê a estrutura de um case, prompts para transformar anotações soltas em texto, um exemplo brasileiro com números, cuidados com sigilo e os erros que derrubam a credibilidade.</p>

    <h2>O que é um case de portfolio e para quem serve</h2>
    <p>É um texto curto, de uma a duas páginas, que prova uma habilidade por meio de uma situação real. Serve para profissionais de marketing, atendimento, vendas, finanças, educação, operações, dados e tecnologia. Quem faz um relatório que economizou horas, uma campanha que trouxe clientes ou um processo que reduziu erros tem material para um case.</p>
    <p>Ele complementa o currículo, não o substitui. O texto de <a href="/artigos/curriculo-e-triagem-com-ia-como-recrutadores-filtram-candidatos">currículo e triagem com IA</a> explica como os filtros leem seu documento, e o case entra depois, como prova de que as palavras do currículo são verdadeiras. Se você está no começo da carreira, o guia de <a href="/artigos/primeiro-emprego-com-ia-curriculo-sem-experiencia-e-jovem-aprendiz">primeiro emprego com IA</a> mostra como usar projetos de estudo e voluntariado como matéria-prima.</p>

    <h2>A estrutura em cinco partes</h2>
    <p>Um roteiro simples, parecido com o método SAR (situação, ação, resultado), evita textos longos e sem foco:</p>
    <ol>
      <li><strong>Contexto (2 a 3 linhas):</strong> onde você estava, qual era o seu papel e quanto tempo durou.</li>
      <li><strong>Problema:</strong> o que não funcionava e por que isso importava para o negócio.</li>
      <li><strong>O que você fez:</strong> as decisões que foram suas, em 3 a 5 passos, incluindo as ferramentas.</li>
      <li><strong>Resultado:</strong> o que mudou, com números quando existirem, ou com evidência qualitativa, como um elogio do gestor.</li>
      <li><strong>Aprendizado:</strong> o que você faria diferente, que mostra maturidade.</li>
    </ol>
    <p>Comece o texto com uma linha-resumo: projeto, seu papel e o principal resultado. Quem lê com pressa precisa entender isso em cinco segundos. Mantenha entre três e cinco cases, para que cada um tenha espaço e o conjunto seja fácil de percorrer.</p>

    <h2>Como juntar o material antes de escrever</h2>
    <p>O erro mais comum é abrir a IA e pedir "escreva um case". Sem fatos, ela inventa. Antes de qualquer prompt, reúna as anotações:</p>
    <ul class="checklist">
      <li>Datas de início e fim e o seu papel exato.</li>
      <li>O problema inicial com os números que você tinha (tempo gasto, erros, custo, vendas).</li>
      <li>As etapas que você executou, na ordem.</li>
      <li>Os números depois da mudança e como foram medidos.</li>
      <li>E-mails, mensagens ou avaliações que comprovem o resultado, guardados com você.</li>
    </ul>
    <p>Se não existem números, descreva a mudança sem inventar. "O relatório que levava uma tarde passou a sair em uma hora" é uma afirmação verificável pelo seu gestor. "Aumentei a eficiência em 300%" sem base é uma frase que derruba a confiança. O guia de <a href="/artigos/como-usar-ia-para-identificar-fechar-lacunas-de-habilidades">lacunas de habilidades</a> ajuda a perceber quais competências cada projeto realmente prova.</p>

    <h2>Prompts para transformar anotações em texto</h2>
    <p>Cole suas anotações, já sem dados confidenciais, e peça organização. Primeiro prompt:</p>
    <pre><code>Você é editor de portfólios profissionais. Com base APENAS nas anotações abaixo, monte um case com cinco partes: contexto, problema, o que eu fiz, resultado e aprendizado.
Regras: não invente números, datas, ferramentas ou nomes. Se faltar uma informação, escreva [FALTA: o que preciso informar].
Tom claro, em primeira pessoa, frases curtas.
Anotações: [cole aqui]</code></pre>
    <p>Segundo prompt, para encontrar fragilidades:</p>
    <pre><code>Leia o case abaixo como um recrutador cético. Liste: 1) afirmações sem prova; 2) trechos vagos; 3) três perguntas que você faria numa entrevista sobre esse projeto. Sugira como eu posso responder a cada pergunta com fatos que eu já tenho.</code></pre>
    <p>O segundo prompt serve também de treino para entrevistas, assunto do guia <a href="/artigos/como-se-preparar-para-entrevistas-de-emprego-usando-ia">como se preparar para entrevistas de emprego usando IA</a>. Sempre releia o resultado: a IA tende a suavizar o texto e a exagerar resultados. Para saber a hora certa de desconfiar, o texto sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a> traz um método de checagem. E se quiser melhorar seus pedidos, o guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">prompt engineering</a> tem boas práticas.</p>

    <h2>Cuidado com sigilo e dados da empresa</h2>
    <p>Um case só vale se você puder mostrá-lo. Antes de publicar, confirme se o contrato ou a política da empresa permite divulgar o projeto. Troque nomes de clientes por descrições genéricas ("uma rede regional de farmácias"), arredonde ou transforme valores em proporções e remova dados pessoais. Colar relatórios internos em uma IA pública também pode violar regras da empresa: leia o guia <a href="/artigos/colar-dados-da-empresa-no-chatgpt-o-que-o-funcionario-pode-fazer">o que o funcionário pode colar no ChatGPT</a> antes de começar, e o texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a> para entender o que cada ferramenta guarda.</p>
    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Em caso de dúvida, peça autorização ao gestor por escrito e mostre a versão anonimizada. Em geral, a conversa fortalece a relação e evita problemas depois.</p></div>

    <h2>Exemplo: analista de atendimento que reduziu o tempo de resposta</h2>
    <p>Camila trabalha no atendimento de uma loja virtual de médio porte. Suas anotações dizem: o tempo médio da primeira resposta no e-mail era de 14 horas; ela criou 12 modelos de resposta, organizou etiquetas por tipo de pedido e sugeriu um fluxo com revisão humana; três meses depois, o tempo médio caiu para 5 horas, medido pelo painel da ferramenta de atendimento, e a nota de satisfação subiu de 4,1 para 4,5 em uma escala de 5.</p>
    <p>O case dela fica assim, em resumo: contexto (analista, equipe de 6 pessoas, 3 meses), problema (resposta demorada e clientes reclamando em público), ação (modelos, etiquetas e revisão humana, com as ferramentas usadas), resultado (14 horas para 5 horas e 4,1 para 4,5, ambos com origem citada) e aprendizado (faltou medir os casos que voltaram para atendimento humano). Os números aqui são ilustrativos. Em um case seu, só entram dados que você possa comprovar.</p>
    <p>Esse tipo de história também mostra uso responsável de IA no trabalho, assunto valorizado hoje. O guia de <a href="/artigos/como-colocar-habilidades-de-ia-no-curriculo">habilidades de IA no currículo</a> e o de <a href="/artigos/como-montar-portfolio-de-habilidades-de-ia-para-recrutadores">portfólio de habilidades de IA para recrutadores</a> aprofundam como destacar esse ponto sem exagero.</p>

    <h2>Onde publicar e como compartilhar</h2>
    <p>Você não precisa de site próprio. Uma página do Notion publicada na web resolve: segundo a <a href="https://www.notion.com/help/public-pages-and-web-publishing" target="_blank" rel="noopener noreferrer">central de ajuda do Notion</a>, basta abrir Compartilhar, escolher Publicar e gerar o link, e há uma opção de deixar o site encontrável por buscadores. Outra alternativa é um PDF em uma pasta do Google Drive; o <a href="https://support.google.com/drive/answer/2494822" target="_blank" rel="noopener noreferrer">suporte do Google Drive</a> explica como compartilhar por link com permissão só de visualização.</p>
    <p>No LinkedIn, use a seção Destaques para fixar os links dos seus melhores cases. Um <a href="https://canaltech.com.br/carreira/como-fazer-um-portfolio-no-linkedin/" target="_blank" rel="noopener noreferrer">guia do Canaltech</a> descreve o caminho: adicionar seção, escolher o conteúdo recomendado e incluir posts, artigos, links ou fotos. Os menus podem mudar com o tempo, então confira como está na sua conta. Para dar mais visibilidade, combine isso com o que o guia de <a href="/artigos/como-construir-autoridade-em-ia-no-linkedin-sem-ser-tecnico">autoridade no LinkedIn</a> sugere, e use os links em mensagens a recrutadores seguindo o <a href="/artigos/networking-com-ia-mensagens-para-recrutadores-e-indicacoes">guia de networking com IA</a>.</p>

    <h2>Erros comuns ao montar um case</h2>
    <ul>
      <li>Contar a história do time inteiro e não deixar claro o que foi sua decisão.</li>
      <li>Listar ferramentas sem explicar o problema que resolviam.</li>
      <li>Usar números inventados ou sem origem. Um recrutador pode perguntar como você mediu.</li>
      <li>Escrever textos longos demais. Se não cabe em duas páginas, corte.</li>
      <li>Publicar informações confidenciais ou nomes de clientes sem autorização.</li>
      <li>Aceitar o texto da IA sem reler. Frases genéricas como "entreguei resultados incríveis" não provam nada.</li>
    </ul>

    <h2>Próximos passos</h2>
    <p>Escolha agora um único projeto dos últimos dois anos, separe as anotações da lista acima e rode o primeiro prompt. Em uma tarde você tem um case publicado. Quando tiver três, revise o currículo e o perfil para apontarem para eles. Se você estiver planejando uma mudança maior, o <a href="/artigos/plano-de-carreira-com-ia-metas-de-90-dias">plano de carreira com IA em metas de 90 dias</a> ajuda a organizar o calendário. Siga explorando a categoria Carreira do Portal para os próximos passos.</p>
  `,
  quiz: [
    {
      question: "Qual parte do case mostra o que mudou depois do seu trabalho?",
      options: ["Contexto", "Resultado", "Aprendizado"],
      answer: 1,
      explanation:
        "O resultado é a parte que traz a mudança, com números que você consiga comprovar ou com evidência qualitativa, como um elogio do gestor.",
    },
    {
      question: "O que fazer quando faltam números do projeto?",
      options: [
        "Pedir à IA que sugira números realistas",
        "Descrever a mudança de forma verificável, sem inventar",
        "Deixar o resultado em branco",
      ],
      answer: 1,
      explanation:
        "Descrever a mudança de forma verificável (por exemplo, de uma tarde para uma hora) mantém a credibilidade. Números inventados derrubam a confiança do recrutador.",
    },
  ],
  faq: [
    {
      question: "O que é um case de portfolio?",
      answer:
        "É um texto curto que conta um projeto seu em cinco partes: contexto, problema, o que você fez, resultado e aprendizado. Ele prova uma habilidade por meio de uma situação real e complementa o currículo, mostrando a recrutadores como você pensa e trabalha, em qualquer profissão.",
    },
    {
      question: "Posso usar IA para escrever meu case?",
      answer:
        "Pode, para organizar anotações e lapidar a redação, desde que os fatos e números sejam seus e verdadeiros. Peça à IA para não inventar dados e marcar o que falta. Releia tudo, porque ela tende a exagerar resultados, e nunca cole informações confidenciais da empresa em ferramentas públicas.",
    },
    {
      question: "Quantos cases devo ter no portfólio?",
      answer:
        "Entre três e cinco costuma ser um bom número. Poucos cases bem contados são mais fortes do que uma lista longa de projetos rasos, e facilitam a leitura de quem tem pouco tempo. Escolha os que mostram habilidades próximas da vaga que você quer.",
    },
    {
      question: "Posso mostrar um projeto feito para uma empresa onde trabalhei?",
      answer:
        "Depende do contrato e da política da empresa. Confirme antes, de preferência por escrito, e publique uma versão anonimizada, sem nome de clientes, dados pessoais e valores confidenciais. Se não houver permissão, use um projeto parecido de estudo ou voluntariado.",
    },
    {
      question: "Preciso de um site para publicar meus cases?",
      answer:
        "Não. Uma página publicada no Notion, um PDF compartilhado por link no Google Drive e a seção Destaques do LinkedIn já funcionam bem. O importante é o link abrir sem pedir login e o conteúdo ser fácil de ler no celular.",
    },
  ],
};
