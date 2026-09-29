import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "como-montar-portfolio-de-habilidades-de-ia-para-recrutadores",
  title: "Portfólio de habilidades de IA: como convencer recrutadores",
  seoTitle: "Portfólio de habilidades de IA para recrutadores",
  excerpt:
    "Portfólio de habilidades de IA: o que incluir, como documentar um caso de antes e depois com números, onde publicar de graça e o que recrutadores olham.",
  metaDescription:
    "Monte um portfólio de habilidades de IA que recrutadores levam a sério: 4 tipos de prova, prompts prontos, exemplo brasileiro e onde publicar de graça.",
  category: "carreira",
  date: "2026-09-19",
  updated: "2026-09-27",
  readTime: 9,
  imageQuery: "portfolio resume laptop showcase",
  seed: 54,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Um portfólio de habilidades de IA funciona quando mostra problema, o que você fez com a ferramenta e o resultado em número, não uma lista de apps que você conhece.",
    "Três casos bem documentados, um prompt comentado e um projeto pequeno publicado bastam; Notion, GitHub Pages e a seção Destaques do LinkedIn hospedam tudo de graça.",
    "Nunca publique dados reais de cliente ou da empresa: troque por dados fictícios equivalentes e diga isso no próprio caso.",
  ],
  content: `
    <p>Um portfólio de habilidades de IA é uma página, ou um PDF de poucas folhas, com dois a quatro casos reais em que você usou ChatGPT, Claude, Gemini ou uma automação para resolver um problema de trabalho, com o antes, o depois e o número que mudou. É a diferença entre dizer "sei usar IA" e provar isso em cinco minutos de leitura.</p>

    <p>Este guia mostra o que entra no portfólio, como documentar um caso do zero, onde publicar sem gastar nada, prompts para montar e revisar o material, e os erros que fazem recrutador fechar a aba. Serve para quem está buscando vaga, para quem quer promoção e para quem trabalha como freelancer e precisa fechar cliente.</p>

    <h2>Por que o currículo sozinho não convence mais</h2>

    <p>Quase todo currículo hoje traz a linha "domínio de ferramentas de IA". Quando todo mundo escreve a mesma coisa, a frase deixa de ter valor. O recrutador precisa de algo que só você pode mostrar: uma situação concreta, uma decisão sua e um resultado. Essa lógica de traduzir ferramenta em resultado é a mesma do guia sobre <a href="/artigos/como-colocar-habilidades-de-ia-no-curriculo">como colocar habilidades de IA no currículo</a>, só que aqui ela vira material visual.</p>

    <p>O peso disso na contratação não é intuição. O <a href="https://www.microsoft.com/en-us/worklab/work-trend-index/ai-at-work-is-here-now-comes-the-hard-part" rel="noopener noreferrer">Work Trend Index 2024 da Microsoft</a>, pesquisa com 31 mil pessoas em 31 países, registrou que 66% dos líderes ouvidos não contratariam alguém sem habilidades de IA, e 71% preferem um candidato menos experiente que saiba usar IA a um mais experiente que não saiba. Já o <a href="https://economicgraph.linkedin.com/research/work-change-report" rel="noopener noreferrer">Work Change Report do LinkedIn</a> projeta que 70% das habilidades usadas na maioria dos empregos vão mudar até 2030.</p>

    <p>Ou seja: o recrutador quer contratar quem usa IA, mas não tem como medir isso em uma entrevista de 40 minutos. O portfólio resolve o problema dele, não só o seu. E se a sensação de "não sou técnico o bastante para isso" aparecer, o texto sobre <a href="/artigos/sindrome-do-impostor-usar-ia-nao-te-torna-menos-capaz">síndrome do impostor na era da IA</a> ajuda a colocar as coisas no lugar: usar bem a ferramenta é a habilidade, não construir a ferramenta.</p>

    <h2>O que colocar no portfólio: quatro tipos de prova</h2>

    <p>Um portfólio bom tem poucas peças, e cada uma responde a uma pergunta que o recrutador faria. Os quatro formatos abaixo servem para quase qualquer profissão.</p>

    <h3>1. Caso de antes e depois</h3>

    <p>É a peça principal. Um problema real (relatório que levava três horas, e-mails que ficavam sem resposta, planilha que quebrava toda semana), o que você fez com IA e o resultado medido. Quem trabalha com relatórios encontra material pronto no guia de <a href="/artigos/ia-para-planilhas-automatizar-relatorios-excel-sheets">IA para planilhas</a>.</p>

    <h3>2. Prompt comentado</h3>

    <p>Um prompt que você usa de verdade, com o texto completo e uma explicação de por que cada parte existe (contexto, formato de saída, restrições). Mostra que você não digita "faz um texto aí" e aceita a primeira resposta. O artigo de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">prompt engineering</a> tem a estrutura que faz um prompt funcionar.</p>

    <h3>3. Projeto pequeno publicado</h3>

    <p>Uma landing page, uma automação que manda resumo por e-mail, uma apresentação gerada e revisada por você. Não precisa ser grande, precisa existir e ter link. Dá para fazer um site simples em uma tarde seguindo o guia de <a href="/artigos/como-criar-landing-pages-e-sites-simples-com-ia">landing pages com IA</a>, e uma apresentação decente com as ferramentas do texto sobre <a href="/artigos/como-criar-apresentacoes-e-slides-profissionais-com-ia">slides profissionais com IA</a>.</p>

    <h3>4. Critério de escolha</h3>

    <p>Meio parágrafo explicando por que você usa uma ferramenta e não outra para cada tarefa. Recrutador sênior gosta disso porque mostra julgamento. O comparativo <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini</a> ajuda a formar essa opinião com base.</p>

    <h2>Passo a passo para documentar um caso de antes e depois</h2>

    <p>A maioria trava aqui porque nunca mediu nada. O processo abaixo serve para casos passados (você reconstrói a medida com honestidade) e para casos novos.</p>

    <ol>
      <li><strong>Escolha uma tarefa repetitiva</strong> que você já faz. Quanto mais chata, melhor: é onde a IA rende mais e onde o número fica mais claro.</li>
      <li><strong>Meça o antes</strong>: quanto tempo leva, quantos erros aparecem, quantas idas e vindas com o chefe. Se for um caso antigo, escreva "estimativa" e explique como chegou nela.</li>
      <li><strong>Descreva o que você fez</strong> em três frases: ferramenta e plano, o prompt ou fluxo, o que você revisou à mão.</li>
      <li><strong>Meça o depois</strong> com a mesma régua do antes. Tempo por semana, taxa de erro, prazo de entrega.</li>
      <li><strong>Mostre a evidência</strong>: captura de tela do prompt, do resultado e da planilha, sempre com dados fictícios ou anonimizados.</li>
      <li><strong>Feche com o que aprendeu</strong>, inclusive o que não funcionou. Isso é o que diferencia de um anúncio.</li>
    </ol>

    <p>Se você ainda não tem nenhum caso, o caminho é criar um nas próximas duas semanas. O guia sobre <a href="/artigos/como-usar-ia-para-identificar-fechar-lacunas-de-habilidades">identificar e fechar lacunas de habilidades</a> ajuda a escolher a tarefa que mais vale a pena atacar primeiro na sua área.</p>

    <h2>Exemplo brasileiro: o portfólio da Camila em dez dias</h2>

    <p>Camila, 29 anos, assistente administrativa em uma distribuidora de Campinas, queria migrar para uma vaga de analista de operações que pedia "familiaridade com IA". Em dez dias, com o plano gratuito do ChatGPT e uma conta gratuita do Notion, montou três peças.</p>

    <p>Caso 1: o fechamento semanal de pedidos levava 2h30 toda sexta. Ela criou um prompt que lê o export da planilha e devolve o resumo por transportadora, revisado por ela em 20 minutos. Economia declarada: cerca de 2 horas por semana, ou perto de 8 horas por mês, medidas com o relógio durante três semanas. Caso 2: um prompt comentado para responder e-mails de cobrança de fornecedores, com o tom da empresa. Caso 3: uma página no Notion com o passo a passo do processo, publicada como projeto.</p>

    <p>Custo total: zero reais. Tempo investido: cerca de 12 horas fora do expediente. Na entrevista, o gestor abriu o link do Notion e passou metade da conversa perguntando sobre o caso 1. Ela conseguiu a vaga com aumento de R$ 900 no salário, e o portfólio virou argumento na conversa, como descreve o texto sobre <a href="/artigos/como-negociar-salario-melhor-sabendo-usar-ia">negociar salário sabendo usar IA</a>. O caso é ilustrativo, montado a partir de situações comuns em vagas administrativas; os números servem de referência de escala, não de promessa.</p>

    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Se você só tiver um caso, publique com um caso. Um portfólio de uma peça bem documentada é melhor que nenhum, e você adiciona a segunda no mês seguinte.</p></div>

    <h2>Onde publicar de graça</h2>

    <p>O lugar importa menos que o conteúdo, mas precisa abrir no celular do recrutador sem login e sem download. As quatro opções abaixo são gratuitas para esse uso, com preços e limites conferidos nas páginas oficiais em 27/09/2026.</p>

    <table>
      <thead>
        <tr><th>Opção</th><th>Custo</th><th>Melhor para</th><th>Limitação</th></tr>
      </thead>
      <tbody>
        <tr><td>Notion (Publicar na web)</td><td>Grátis no plano free, páginas ilimitadas e um domínio notion.site</td><td>Quem quer montar em uma tarde, sem código</td><td>SEO e domínio próprio só no plano pago</td></tr>
        <tr><td>GitHub Pages</td><td>Sem custo para sites públicos a partir de um repositório</td><td>Quem já mexe com HTML ou quer aprender</td><td>Precisa criar conta e subir arquivos</td></tr>
        <tr><td>LinkedIn, seção Destaques</td><td>Grátis</td><td>Links e PDFs no topo do perfil</td><td>Formato engessado, não substitui a página</td></tr>
        <tr><td>PDF anexado ao currículo</td><td>Grátis</td><td>Processos que pedem anexo</td><td>Não atualiza depois de enviado</td></tr>
      </tbody>
    </table>

    <p>A <a href="https://www.notion.com/help/public-pages-and-web-publishing" rel="noopener noreferrer">central de ajuda do Notion</a> confirma que o plano gratuito publica páginas ilimitadas na web com um domínio notion.site; a <a href="https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages" rel="noopener noreferrer">documentação do GitHub Pages</a> descreve o serviço, que publica um site estático direto do repositório. Publique no Notion primeiro e coloque o link nos Destaques do LinkedIn. Quem quiser ir além e transformar o portfólio em presença pública encontra o roteiro em <a href="/artigos/como-construir-autoridade-em-ia-no-linkedin-sem-ser-tecnico">como construir autoridade em IA no LinkedIn</a>.</p>

    <h2>Prompts para montar e revisar o portfólio</h2>

    <p>Use a IA para estruturar e criticar o material, não para inventar casos. O primeiro prompt organiza um caso a partir das suas anotações; o segundo faz o papel de recrutador chato.</p>

    <pre><code>Você é um editor de portfólios profissionais. Vou descrever uma tarefa que eu fazia manualmente e como passei a fazer com IA. Organize em: Problema (2 frases), O que fiz (3 frases, citando ferramenta e plano), Resultado (com os números que eu informar, sem inventar nenhum), O que aprendi (2 frases). Se faltar algum número, me pergunte em vez de estimar.

Minhas anotações: [cole aqui]</code></pre>

    <pre><code>Aja como um recrutador sênior da área de [sua área], cético com candidatos que dizem "sei usar IA". Leia o caso abaixo e responda: 1) quais afirmações você não acreditaria sem evidência; 2) que pergunta faria na entrevista para testar se eu fiz isso de verdade; 3) o que cortaria por ser enrolação. Seja direto.

Caso: [cole aqui]</code></pre>

    <p>Rode o segundo prompt em cada caso antes de publicar. Se a IA apontar uma afirmação sem evidência, ou você consegue a evidência ou tira a afirmação. Esse exercício também prepara para as perguntas reais, na linha do guia sobre <a href="/artigos/como-se-preparar-para-entrevistas-de-emprego-usando-ia">se preparar para entrevistas usando IA</a>.</p>

    <h2>Erros comuns que fazem o recrutador fechar a aba</h2>

    <ul>
      <li><strong>Lista de ferramentas sem caso.</strong> "Uso ChatGPT, Gemini, Canva e Notion" não é portfólio, é inventário. Cada ferramenta citada precisa aparecer dentro de um caso.</li>
      <li><strong>Dados reais da empresa ou de clientes.</strong> Nome de fornecedor, valor de contrato, planilha com CPF. Além de risco jurídico, mostra falta de critério, o oposto do que você quer provar. O texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a> explica o que vaza sem a pessoa perceber.</li>
      <li><strong>Número sem régua.</strong> "Ganhei muito tempo" não diz nada. "De 2h30 para 20 minutos, medido em três semanas" diz tudo.</li>
      <li><strong>Texto gerado e não revisado.</strong> O recrutador reconhece parágrafo de IA sem edição. Se o portfólio sobre IA parece escrito por IA sem cuidado, a mensagem é a errada.</li>
      <li><strong>Portfólio genérico demais.</strong> Quem quer vaga de marketing mostra caso de marketing. A discussão sobre <a href="/artigos/especialista-em-nicho-de-ia-ou-generalista-o-que-vale-mais">especialista ou generalista em IA</a> ajuda a decidir o recorte.</li>
    </ul>

    <div class="callout-box callout-bad"><span class="callout-label">Nunca faça</span><p>Nunca descreva um resultado que não aconteceu. Uma pergunta bem feita na entrevista derruba o caso inventado, e junto com ele toda a sua credibilidade no processo.</p></div>

    <h2>Como usar o portfólio depois de pronto</h2>

    <p>Portfólio guardado não serve. Coloque o link no cabeçalho do currículo, na seção Destaques do LinkedIn e na assinatura do e-mail de candidatura. Na entrevista, quando surgir a pergunta sobre IA, responda com o caso e ofereça abrir a página. Dentro da empresa, o mesmo material sustenta um pedido de promoção ou o papel de <a href="/artigos/como-se-tornar-referencia-em-ia-na-empresa-sem-ser-do-ti">referência em IA sem ser do TI</a>.</p>

    <p>Reserve 30 minutos por mês para revisar: um caso novo entra, o mais fraco sai, os números se atualizam. Em seis meses você terá um material que poucos candidatos na sua área conseguem apresentar. Comece hoje com um caso e, se quiser mais ideias para a próxima etapa, a categoria <a href="/categoria/carreira">Carreira</a> reúne os outros guias sobre vaga, promoção e negociação usando IA.</p>
  `,
  faq: [
    {
      question: "O que colocar em um portfólio de habilidades de IA?",
      answer:
        "Dois a quatro casos de antes e depois com problema, o que você fez com a ferramenta e o resultado em número; um prompt comentado que você usa de verdade; um projeto pequeno com link (site, automação, apresentação); e meio parágrafo explicando por que escolhe cada ferramenta. Evite listas de apps sem caso e capturas de tela soltas.",
    },
    {
      question: "Preciso saber programar para ter portfólio de IA?",
      answer:
        "Não. A maior parte dos casos que recrutadores valorizam vem de tarefas comuns: relatórios, e-mails, planilhas, atendimento, apresentações. O que conta é mostrar critério e resultado medido. Programar ajuda em vagas técnicas, mas para funções administrativas, comerciais ou de marketing um caso bem documentado no Notion vale mais que código.",
    },
    {
      question: "Onde hospedar um portfólio de IA de graça?",
      answer:
        "No Notion, cujo plano gratuito publica páginas ilimitadas com domínio notion.site; no GitHub Pages, que publica um site estático a partir de um repositório; ou como PDF anexado ao currículo. Coloque o link na seção Destaques do LinkedIn e no cabeçalho do currículo para o recrutador abrir sem login e sem download.",
    },
    {
      question: "Posso usar dados da empresa onde trabalho no portfólio?",
      answer:
        "Não use dados reais de clientes, fornecedores, contratos ou pessoas. Recrie o caso com dados fictícios equivalentes, mantenha a estrutura e os resultados e escreva no próprio caso que os dados foram substituídos. Isso protege você juridicamente e mostra ao recrutador que você tem critério com informação sensível.",
    },
    {
      question: "Quantos casos um portfólio de IA precisa ter?",
      answer:
        "Entre dois e quatro. Um único caso bem documentado já é melhor que nenhum e pode ser publicado hoje. Mais de quatro dispersa a atenção do recrutador, que costuma abrir a página no celular e ler por poucos minutos. Troque o caso mais fraco quando um novo entrar, em vez de acumular.",
    },
  ],
  quiz: [
    {
      question: "Qual destas peças mais convence um recrutador em um portfólio de IA?",
      options: [
        "Uma lista com todas as ferramentas de IA que você já usou",
        "Um caso de antes e depois com problema, o que você fez e o resultado medido",
        "Uma captura de tela de uma conversa longa com o ChatGPT",
      ],
      answer: 1,
      explanation:
        "O recrutador quer ver julgamento e resultado. Um caso com número e evidência responde à pergunta que ele faria; lista de ferramentas e prints soltos não.",
    },
    {
      question: "O que fazer com dados reais de clientes ao montar um caso?",
      options: [
        "Publicar, porque prova que o caso é verdadeiro",
        "Substituir por dados fictícios equivalentes e avisar isso no caso",
        "Borrar só o nome e manter o resto",
      ],
      answer: 1,
      explanation:
        "Dados reais expõem você e a empresa. Recriar o caso com dados fictícios preserva a estrutura e o resultado sem risco, e demonstra critério.",
    },
  ],
};
