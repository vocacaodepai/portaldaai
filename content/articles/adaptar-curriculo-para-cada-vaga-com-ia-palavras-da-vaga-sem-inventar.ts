import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "adaptar-curriculo-para-cada-vaga-com-ia-palavras-da-vaga-sem-inventar",
  title: "Adaptar currículo para cada vaga com IA sem inventar nada",
  seoTitle: "Adaptar currículo para cada vaga com IA sem inventar",
  excerpt:
    "Aprenda a adaptar o currículo para cada vaga com IA: extrair palavras da descrição, reorganizar sua experiência real, prompts prontos e erros que derrubam candidatos.",
  metaDescription:
    "Como adaptar currículo para cada vaga com IA: leia a descrição, extraia palavras-chave, ajuste resumo e experiências reais, use prompts prontos e evite inventar competências.",
  category: "carreira",
  articleSubcategory: "curriculo-e-portfolio",
  date: "2026-10-25",
  readTime: 6,
  imageQuery: "person editing resume laptop desk",
  seed: 718,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Adaptar o currículo é reorganizar sua experiência real com as palavras da vaga: leia a descrição, extraia requisitos e traga para cima o que combina, sem acrescentar competência que você não tem.",
    "O melhor método é manter um currículo base e gerar versões curtas por vaga, nomeando cada arquivo e anotando para onde foi enviado.",
    "A IA serve para comparar a vaga com o seu currículo e sugerir ajustes, mas você revisa cada linha, porque modelos podem inventar números e experiências que parecem verdadeiros.",
  ],
  content: `
    <p>Para adaptar o currículo a cada vaga com IA, cole a descrição da vaga e o seu currículo base, peça que a IA liste os requisitos e mostre o que combina e o que falta, e depois reescreva só o resumo e os destaques com as palavras da vaga. Tudo precisa ser verdadeiro: a IA reorganiza o que você fez, nunca cria experiência.</p>

    <p>Mandar o mesmo currículo para dez vagas diferentes é o erro mais comum de quem procura emprego. Muitas empresas usam sistemas que ordenam candidatos por semelhança com a vaga, e o recrutador gasta poucos segundos por currículo. Este guia mostra um método de 20 minutos por vaga, com prompts prontos e os limites que você não deve ultrapassar.</p>

    <h2>Por que um currículo único perde para um adaptado</h2>

    <p>O <a href="https://www.bne.com.br/blog/como-usar-palavras-chave-no-curriculo/" target="_blank" rel="noopener noreferrer">blog do BNE (Banco Nacional de Empregos)</a> explica que muitas empresas usam sistemas de acompanhamento de candidatos (ATS) que classificam currículos pelas palavras-chave relevantes, e que um profissional qualificado pode passar despercebido sem elas. A recomendação é extrair do anúncio as habilidades, certificações, tecnologias e competências comportamentais pedidas e usar essas expressões, de forma natural, no resumo, na experiência e na lista de habilidades.</p>

    <p>Se a vaga pede "gestão de projetos" e o seu currículo diz "coordenação de entregas", você pode estar fazendo o mesmo trabalho com outro nome. Adaptar é traduzir a sua experiência para o vocabulário de quem vai ler, desde que o conteúdo seja o mesmo. Para entender como a triagem funciona por dentro, veja o guia de <a href="/artigos/curriculo-e-triagem-com-ia-como-recrutadores-filtram-candidatos">como recrutadores filtram candidatos</a>.</p>

    <p>Também ajuda lembrar que o texto será lido por pessoas. Palavra-chave sem resultado concreto ao lado não convence ninguém, e o BNE reforça que as palavras precisam vir acompanhadas de realizações claras.</p>

    <h2>O método em cinco passos</h2>

    <ol>
      <li>Mantenha um currículo base completo, com todas as experiências, resultados e cursos.</li>
      <li>Leia a vaga e marque os 8 a 12 requisitos principais.</li>
      <li>Compare: o que você já fez, o que fez parecido e o que não fez.</li>
      <li>Reescreva o resumo e reordene os destaques para a vaga, usando as palavras dela onde forem verdadeiras.</li>
      <li>Salve com nome claro e anote a vaga e a data de envio.</li>
    </ol>

    <p>O <a href="https://www.alura.com.br/artigos/ia-para-fazer-curriculo" target="_blank" rel="noopener noreferrer">guia da Alura sobre IA para fazer currículo</a> sugere esse mesmo desenho: colar a vaga, pedir à IA as habilidades e palavras-chave, comparar com o currículo e gerar variações a partir de uma versão base, dando um nome claro a cada uma. O passo 3 é o que impede o exagero. Se um requisito não tem nada parecido na sua história, deixe de fora e considere se vale se candidatar.</p>

    <h2>Prompts para adaptar sem inventar</h2>

    <p>Troque os trechos entre colchetes. Para a primeira etapa, peça a análise antes de qualquer reescrita.</p>

    <pre><code>Abaixo estão a descrição de uma vaga e o meu currículo. 1) Liste os requisitos da vaga por ordem de importância. 2) Para cada requisito, diga se o meu currículo mostra isso claramente, parcialmente ou não mostra, citando o trecho. 3) Não sugira nenhuma experiência que não esteja no currículo. Vaga: [cole aqui]. Currículo: [cole aqui].</code></pre>

    <p>Na segunda etapa, peça a reescrita limitada ao que é verdadeiro.</p>

    <pre><code>Reescreva o meu resumo profissional em até 4 linhas para esta vaga, usando as palavras da descrição apenas quando o meu currículo comprovar. Mantenha todos os números e datas exatamente como estão. Se faltar dado, escreva [completar] em vez de inventar.</code></pre>

    <p>Por fim, use a IA como revisora antes de enviar.</p>

    <pre><code>Revise o currículo adaptado e aponte: 1) frases que parecem exagero; 2) palavras da vaga repetidas demais; 3) qualquer informação que não esteja no currículo original.</code></pre>

    <p>Se o seu perfil tem projetos de IA, o guia sobre <a href="/artigos/como-colocar-habilidades-de-ia-no-curriculo">habilidades de IA no currículo</a> mostra como descrevê-las com resultado. Quem prefere comparar ferramentas encontra opções em <a href="/artigos/melhores-ias-para-criar-curriculo-e-carta-de-apresentacao">melhores IAs para currículo e carta de apresentação</a>.</p>

    <h2>Exemplo prático com números</h2>

    <p>Marina trabalha há quatro anos em atendimento numa loja de Porto Alegre e se candidata a uma vaga de analista de customer success. O anúncio pede "relacionamento com clientes", "indicadores de satisfação" e "uso de CRM". O currículo base dela diz "atendimento ao cliente e resolução de problemas".</p>

    <table>
      <thead><tr><th>Antes</th><th>Depois (adaptado, verdadeiro)</th></tr></thead>
      <tbody>
        <tr><td>Atendimento ao cliente e resolução de problemas</td><td>Relacionamento com clientes: atendimento de cerca de 40 contatos por dia por chat e telefone</td></tr>
        <tr><td>Pesquisa de satisfação</td><td>Indicadores de satisfação: aplicação mensal de pesquisa e relatório de notas para o gestor</td></tr>
        <tr><td>Sistema da loja</td><td>Uso de CRM para registrar histórico de clientes e retornos</td></tr>
      </tbody>
    </table>

    <p>Repare que nada foi inventado: Marina só deu nome de mercado ao que já fazia e trouxe números reais que estavam fora do currículo. O requisito que ela não cumpre, como experiência com uma ferramenta específica, fica de fora e entra na carta, na entrevista ou em um curso. Os dados do exemplo são fictícios, apenas para ilustrar.</p>

    <h2>Onde ajustar além do resumo</h2>

    <p>O resumo e os três primeiros destaques de cada experiência são o que o recrutador lê primeiro, então comece por eles. Depois ajuste a lista de habilidades, ordenando as mais pedidas na frente, e o título do currículo, que pode refletir o cargo da vaga se for coerente com o que você já fez.</p>

    <p>O LinkedIn precisa conversar com o currículo: se um diz uma coisa e o outro diz outra, isso levanta dúvida. O guia de <a href="/artigos/perfil-do-linkedin-com-ia-titulo-sobre-e-palavras-chave-para-recrutadores">perfil do LinkedIn com IA</a> mostra como alinhar. Quem quer evidência concreta pode montar um <a href="/artigos/case-de-portfolio-com-ia-como-transformar-um-projeto-em-historia">case de portfólio</a> e linkar na candidatura.</p>

    <p>Para quem está começando, o artigo <a href="/artigos/primeiro-emprego-com-ia-curriculo-sem-experiencia-e-jovem-aprendiz">primeiro emprego com IA</a> traz adaptações específicas. E se há buraco entre empregos, veja <a href="/artigos/lacuna-no-curriculo-como-explicar-na-entrevista-com-ajuda-de-ia">como explicar a lacuna</a>.</p>

    <h2>Mensagem ao recrutador e carta curta</h2>

    <p>O currículo adaptado fica melhor quando vem com uma mensagem curta. Em três ou quatro linhas, diga a vaga, o ponto da sua experiência que mais combina com ela e um resultado real. A IA pode rascunhar, e você corta o que soar genérico. Mensagem copiada de modelo, igual para todas as vagas, tem pouco efeito.</p>

    <pre><code>Escreva uma mensagem de 4 linhas para um recrutador sobre a vaga de [cargo] na [empresa]. Use apenas estes fatos sobre mim: [liste 3 fatos verdadeiros]. Tom profissional e direto, sem elogios exagerados à empresa e sem frases como "sou apaixonado por desafios".</code></pre>

    <p>Quando a vaga pedir carta de apresentação, mantenha uma página no máximo, com o motivo do interesse, uma história curta que prove uma competência e o que você pretende entregar. Se a empresa pedir salário pretendido, pesquise a faixa antes. Guarde uma cópia de tudo o que enviou, porque na entrevista o recrutador pode citar uma frase do seu texto, e você precisa lembrar o que disse.</p>

    <h2>Erros comuns e limites éticos</h2>

    <ul class="checklist">
      <li>Colar a lista inteira de palavras da vaga no fim do currículo (o BNE alerta que o excesso é fácil de detectar e prejudica a credibilidade).</li>
      <li>Aceitar um número que a IA sugeriu sem conferir. Segundo a Alura, o risco de a IA inventar detalhes que parecem corretos é real, e a regra é nunca deixar que ela invente experiências, números ou competências.</li>
      <li>Colar documentos pessoais, endereço completo ou dados sensíveis em ferramentas online, conforme alerta o mesmo guia. O artigo sobre <a href="/artigos/colar-dados-da-empresa-no-chatgpt-o-que-o-funcionario-pode-fazer">dados da empresa no ChatGPT</a> amplia esse cuidado para informações do empregador atual.</li>
      <li>Esquecer de revisar datas e cargos: o <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">guia de alucinação de IA</a> traz um roteiro de checagem.</li>
      <li>Não conseguir defender na entrevista o que está no papel. Treine com o método do <a href="/artigos/entrevista-comportamental-metodo-star-com-ia-historias-reais-e-resultados">método STAR</a>.</li>
    </ul>

    <p>Monte hoje o seu currículo base, escolha uma vaga real e aplique o método uma vez. Na segunda vaga o processo já leva metade do tempo. Para ver onde há demanda, consulte as <a href="/artigos/vagas-de-ia-no-brasil-quais-cargos-contratando-2026">vagas de IA no Brasil</a> e, quando a oferta chegar, o guia de <a href="/artigos/como-negociar-salario-melhor-sabendo-usar-ia">negociação de salário com IA</a>.</p>
  `,
  faq: [
    {
      question: "Preciso mudar o currículo para cada vaga?",
      answer:
        "Não precisa refazer tudo. Mantenha um currículo base e ajuste o resumo, os destaques e a ordem das habilidades conforme os requisitos de cada vaga. Esse ajuste leva cerca de 20 minutos e aumenta a chance de o seu perfil combinar com o que o recrutador e o sistema de triagem procuram.",
    },
    {
      question: "O que é ATS no currículo?",
      answer:
        "ATS é a sigla em inglês para sistema de acompanhamento de candidatos. Segundo o BNE, muitas empresas usam esse tipo de software para classificar currículos pelas palavras-chave relevantes. Por isso, vale usar no texto, de forma natural, as expressões que aparecem na descrição da vaga e que você realmente domina.",
    },
    {
      question: "Posso usar IA para adaptar meu currículo?",
      answer:
        "Pode, e é um bom uso, desde que você revise tudo. A IA ajuda a extrair requisitos, comparar com o currículo e reescrever trechos. O guia da Alura alerta para nunca deixar a IA inventar experiências, números ou competências, e para não colar dados pessoais sensíveis em ferramentas online.",
    },
    {
      question: "Quantas palavras-chave devo colocar no currículo?",
      answer:
        "Não existe número mágico. O BNE recomenda evitar o excesso de palavras-chave, porque isso pode prejudicar a credibilidade. Use as expressões da vaga que forem verdadeiras e sempre junto de uma realização concreta, como resultado, prazo ou volume de trabalho.",
    },
    {
      question: "E se eu não cumpro todos os requisitos da vaga?",
      answer:
        "É comum. Não invente o que falta. Destaque o que você cumpre, mostre experiências parecidas e deixe claro que quer aprender o resto. Em alguns casos vale se candidatar mesmo assim, em outros é melhor investir antes em um curso ou projeto que cubra a lacuna.",
    },
  ],
  quiz: [
    {
      question: "O que fazer com um requisito da vaga que você não cumpre?",
      options: [
        "Escrever no currículo que você tem a experiência",
        "Deixar de fora e preparar uma resposta honesta",
        "Pedir à IA para criar um projeto fictício",
      ],
      answer: 1,
      explanation:
        "Adaptar é reorganizar o que é verdadeiro. Um requisito que você não cumpre pode ser tratado na carta ou na entrevista, sem inventar nada.",
    },
    {
      question: "Qual é o melhor ponto de partida para adaptar o currículo?",
      options: [
        "Um currículo base completo",
        "Copiar o currículo de outra pessoa",
        "Uma lista de palavras copiadas da vaga",
      ],
      answer: 0,
      explanation:
        "Com um currículo base completo, cada versão por vaga seleciona e reordena informações reais, sem perder nada importante.",
    },
  ],
};
