import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "prompt-engineering-como-escrever-comandos-que-funcionam",
  title: "Prompt Engineering: Como Escrever Comandos que Funcionam",
  seoTitle: "Prompt engineering: guia prático em português",
  excerpt:
    "Prompt engineering explicado sem jargão: a estrutura de um bom prompt, seis técnicas que mudam a resposta, exemplos prontos para copiar e os erros que estragam tudo.",
  metaDescription:
    "Prompt engineering sem jargão: aprenda a estrutura de um bom prompt, seis técnicas que mudam a resposta do ChatGPT, Claude e Gemini, e copie exemplos prontos.",
  category: "ferramentas",
  date: "2026-09-03",
  updated: "2026-09-27",
  readTime: 8,
  imageQuery: "typing keyboard writing text",
  seed: 5,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Prompt engineering é saber pedir: quem a IA deve ser, o que fazer, para quem, em que formato e o que evitar.",
    "As documentações da OpenAI, Anthropic e Google concordam em três pontos: instruções claras, exemplos e tarefas divididas em etapas.",
    "Um prompt bom raramente sai de primeira. Peça uma versão, ajuste o que não gostou e salve o que funcionou para reutilizar.",
  ],
  sources: [
    { label: "OpenAI: guia de prompt engineering", url: "https://developers.openai.com/api/docs/guides/prompt-engineering" },
    { label: "Anthropic: visão geral de prompt engineering", url: "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview" },
    { label: "Google: estratégias de prompt para o Gemini", url: "https://ai.google.dev/gemini-api/docs/prompting-strategies" },
    { label: "Google Workspace: guia para escrever prompts eficazes", url: "https://workspace.google.com/resources/ai/writing-effective-prompts/" },
  ],
  content: `
    <p>Prompt engineering é a habilidade de escrever o pedido (o prompt) de um jeito que o ChatGPT, o Claude ou o Gemini entendam exatamente o que você quer: quem eles devem ser, qual é a tarefa, para quem é, em que formato responder e o que evitar. Não é programação. É clareza por escrito, com um pouco de método.</p>

    <p>A diferença entre uma resposta genérica e uma resposta pronta para usar quase sempre está no pedido, não na ferramenta. Este guia mostra a estrutura de um bom prompt, seis técnicas que mudam o resultado, exemplos brasileiros para copiar e os erros que fazem a maioria achar que "a IA não serve para nada".</p>

    <h2>O que é prompt engineering (e por que o nome assusta)?</h2>

    <p>O nome em inglês dá a impressão de coisa de engenheiro. Na prática, é o que um bom gestor faz quando delega: explica o contexto, define a entrega, dá um exemplo e combina o prazo. A IA responde ao que recebe. Pedido vago, resposta vaga. Pedido com contexto e formato, resposta que dá para usar.</p>

    <p>As três maiores empresas do setor publicam guias sobre isso e dizem coisas parecidas. O <a href="https://developers.openai.com/api/docs/guides/prompt-engineering" rel="noopener noreferrer">guia da OpenAI</a> recomenda instruções explícitas, exemplos de entrada e saída e dividir tarefas complexas em subtarefas. A <a href="https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview" rel="noopener noreferrer">documentação da Anthropic</a> lista clareza, exemplos, definição de papel e encadeamento de prompts. O <a href="https://ai.google.dev/gemini-api/docs/prompting-strategies" rel="noopener noreferrer">guia do Google para o Gemini</a> pede instruções específicas, exemplos, contexto e formato de resposta definido, e lembra que o processo é iterativo.</p>

    <p>Ou seja: não existe segredo escondido. Existe um método simples que pouca gente aplica com disciplina. Se termos como "modelo", "token" e "contexto" ainda embolam, o <a href="/artigos/dicionario-de-inteligencia-artificial-termos-essenciais">dicionário de inteligência artificial</a> resolve em uma leitura.</p>

    <h2>A estrutura de um prompt que funciona</h2>

    <p>O guia do <a href="https://workspace.google.com/resources/ai/writing-effective-prompts/" rel="noopener noreferrer">Google Workspace</a> resume um bom prompt em quatro partes: persona, tarefa, contexto e formato. Eu acrescento uma quinta, restrições, porque é onde a maioria dos prompts falha. Você não precisa usar as cinco toda vez, mas quando a resposta vem ruim, quase sempre falta uma delas.</p>

    <table>
      <thead>
        <tr><th>Parte</th><th>O que responde</th><th>Exemplo</th></tr>
      </thead>
      <tbody>
        <tr><td>Persona</td><td>Quem a IA deve ser</td><td>"Você é um contador que atende MEIs"</td></tr>
        <tr><td>Tarefa</td><td>O que fazer, com verbo claro</td><td>"Escreva um e-mail de cobrança"</td></tr>
        <tr><td>Contexto</td><td>Situação, público, o que já existe</td><td>"Cliente atrasou 15 dias, é bom pagador, valor R$ 450"</td></tr>
        <tr><td>Formato</td><td>Como entregar</td><td>"Até 6 linhas, assunto incluído, sem saudação formal"</td></tr>
        <tr><td>Restrições</td><td>O que evitar</td><td>"Sem ameaça, sem juros, sem a palavra 'inadimplente'"</td></tr>
      </tbody>
    </table>

    <p>Repare que o contexto carrega números. "Cliente atrasou" é fraco; "atrasou 15 dias, valor R$ 450, bom pagador" muda o tom da resposta. A IA não adivinha o que você não escreveu. Quem começou a usar essas ferramentas há pouco costuma tropeçar justamente nisso, e os <a href="/artigos/5-erros-comuns-de-quem-esta-comecando-a-usar-ia">5 erros comuns de quem está começando com IA</a> mostram como evitar.</p>

    <h2>Prompt fraco versus prompt forte: o caso da padaria</h2>

    <p>Prompt fraco: "Escreva um post sobre marketing." A resposta vai ser um texto genérico sobre a importância das redes sociais que serve para qualquer negócio do planeta e, por isso, não serve para nenhum.</p>

    <pre><code>Você é responsável pelo Instagram de uma padaria de bairro em Belo Horizonte.
Escreva um post anunciando um pão de fermentação natural novo, R$ 18 a unidade,
disponível só de sexta a domingo a partir das 7h.
Formato: até 5 linhas, tom leve e direto, uma pergunta para gerar comentário
e uma chamada para reservar pelo WhatsApp no final.
Evite: emojis em excesso, a palavra "artesanal", promessas de saúde.</code></pre>

    <p>Esse segundo prompt tem persona, tarefa, contexto com números, formato e restrições. A resposta sai pronta para publicar, com no máximo um ajuste. E ele vira um molde: troque o produto e o preço e use toda semana. É assim que nascem os pacotes que o artigo sobre <a href="/artigos/como-ganhar-dinheiro-criando-prompts-e-templates-de-ia">como ganhar dinheiro criando prompts e templates</a> descreve.</p>

    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Guarde seus prompts que funcionaram em um documento ou no Notion, com nome e data. Em três meses você terá uma biblioteca própria que vale mais do que qualquer curso de prompts.</p></div>

    <h2>Seis técnicas que mudam a resposta</h2>

    <h3>1. Peça várias versões</h3>
    <p>"Me dê três versões com tons diferentes" gera opções e ajuda você a perceber o que gosta. Escolher entre três é mais fácil do que corrigir uma.</p>

    <h3>2. Peça para a IA perguntar antes</h3>
    <p>Termine o prompt com "antes de responder, me faça até três perguntas sobre o que faltar entender". Isso reduz muito o retrabalho em tarefas com várias partes, como uma <a href="/artigos/como-criar-apresentacoes-e-slides-profissionais-com-ia">apresentação de slides</a> ou um <a href="/artigos/como-escrever-pitch-de-negocio-com-ia">pitch de negócio</a>.</p>

    <h3>3. Dê exemplos do que você quer</h3>
    <p>Cole um texto seu e diga "escreva no mesmo tom deste exemplo". Os três guias oficiais chamam isso de exemplos "few-shot" e o colocam entre as técnicas mais eficientes.</p>

    <h3>4. Divida em etapas</h3>
    <p>Em vez de "faça meu plano de conteúdo do mês", peça primeiro os temas, depois aprove, depois peça os textos de um tema. Cada resposta alimenta a próxima. A documentação da Anthropic chama isso de encadeamento de prompts.</p>

    <h3>5. Trave o formato</h3>
    <p>"Responda em tabela com as colunas X, Y e Z" ou "lista numerada, um item por linha". Formato fixo é o que permite reaproveitar a resposta em uma <a href="/artigos/ia-para-planilhas-automatizar-relatorios-excel-sheets">planilha</a> ou em uma <a href="/artigos/automacao-com-ia-economize-horas-de-trabalho">automação</a>.</p>

    <h3>6. Peça o raciocínio quando a tarefa envolve conta ou decisão</h3>
    <p>"Mostre o cálculo passo a passo antes da resposta final" reduz erro em precificação, comparação e análise. Para pesquisa com fontes, ferramentas como o <a href="/artigos/perplexity-notebooklm-ia-de-pesquisa-estudar-mais-rapido">Perplexity e o NotebookLM</a> já mostram de onde tiraram cada informação.</p>

    <h2>Exemplo brasileiro: corretor de imóveis e 30 anúncios por semana</h2>

    <p>Cenário ilustrativo para mostrar o método (não é um caso que acompanhamos). Rafael é corretor autônomo em Recife e publica cerca de 30 anúncios por semana em portais e no Instagram. Cada texto levava uns 20 minutos, entre olhar as fotos, lembrar do diferencial e escrever. Dez horas por semana só em texto de anúncio.</p>

    <p>Ele montou um prompt padrão no plano gratuito do Gemini e passou a preencher só os dados do imóvel. O texto sai em segundos e ele gasta uns 5 minutos revisando e ajustando. Se a conta fechar, são cerca de 7 horas por semana de volta, sem gastar nada além do tempo de montar o prompt uma vez.</p>

    <pre><code>Você é redator de anúncios imobiliários para um corretor em Recife.
Escreva o anúncio do imóvel abaixo para portal e uma versão curta para Instagram.
Dados: apartamento de 2 quartos, 62 m2, Boa Viagem, R$ 420 mil, andar alto,
varanda, 1 vaga, condomínio R$ 680, a 400 m da praia. Público: casal jovem.
Formato do portal: título de até 60 caracteres + 4 parágrafos curtos.
Formato do Instagram: até 4 linhas + chamada para agendar visita.
Evite: "oportunidade única", "imperdível", superlativos e informação
que não esteja nos dados acima.</code></pre>

    <p>A última restrição ("informação que não esteja nos dados") é a mais importante de todas. Sem ela, a IA inventa piscina e academia. Quem vende algo com IA na rotina, como mostra o guia sobre <a href="/artigos/como-usar-ia-para-vender-mais-no-seu-negocio-local">vender mais no negócio local</a>, precisa dessa trava em todo prompt.</p>

    <h2>Erros comuns em prompts (e quando prompt nenhum resolve)</h2>

    <p>O erro mais frequente é tratar a IA como buscador: uma frase curta e esperar milagre. O segundo é o oposto, um parágrafo de dez linhas sem dizer o formato da resposta. O terceiro é aceitar a primeira resposta em vez de dizer "ficou longo demais, corte pela metade e tire a introdução".</p>

    <ul>
      <li><strong>Não dar o contexto que só você tem.</strong> Preço, prazo, público, cidade. A IA não sabe nada do seu negócio.</li>
      <li><strong>Pedir duas coisas diferentes na mesma frase.</strong> Separe em dois prompts ou numere as tarefas.</li>
      <li><strong>Confiar em número ou lei sem conferir.</strong> A IA erra data, valor e artigo de lei com a mesma confiança com que acerta. Confira na fonte.</li>
      <li><strong>Colar dado sensível de cliente.</strong> CPF, contrato completo, dado de saúde. Anonimize antes.</li>
    </ul>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Prompt nenhum resolve pergunta sobre fato recente ou específico demais (o saldo da sua conta, a lei municipal da sua cidade). Nesses casos, forneça o documento no prompt ou use uma ferramenta que pesquise com fontes. Prompt engineering melhora a forma da resposta; não cria informação que o modelo não tem.</p></div>

    <h2>Prompt engineering vale dinheiro?</h2>

    <p>Vale, mas não do jeito que os anúncios de curso prometem. Ninguém paga R$ 10 mil por mês para "engenheiro de prompt" iniciante. O que paga é a combinação: alguém que entende de contabilidade, imóveis ou marketing e entrega o dobro em menos tempo porque sabe pedir. O ganho aparece no seu trabalho atual primeiro. Quem quer vender isso como serviço encontra caminhos realistas no artigo sobre <a href="/artigos/como-ganhar-dinheiro-ensinando-ia-para-iniciantes">ensinar IA para iniciantes</a>.</p>

    <p>Também não precisa pagar para aprender. Os planos gratuitos do ChatGPT, Claude e Gemini são suficientes para praticar tudo deste guia; o comparativo <a href="/artigos/ia-gratis-ou-paga-o-que-vale-a-pena">IA grátis ou paga</a> explica quando o plano pago compensa. Comece hoje: pegue o último pedido que você fez a uma IA e reescreva com as cinco partes da tabela. Depois explore a categoria <a href="/categoria/ferramentas">Ferramentas</a> para aplicar o método em e-mail, planilha e redes sociais.</p>
  `,
  faq: [
    {
      question: "O que é prompt engineering em português simples?",
      answer:
        "É a prática de escrever pedidos claros para ferramentas de IA como ChatGPT, Claude e Gemini. Um bom prompt diz quem a IA deve ser, qual é a tarefa, o contexto (público, números, situação), o formato da resposta e o que evitar. Não envolve programar; envolve organizar o pedido do mesmo jeito que você explicaria uma tarefa para um colega novo.",
    },
    {
      question: "Prompt engineering funciona igual no ChatGPT, Claude e Gemini?",
      answer:
        "Os princípios são os mesmos e os guias oficiais das três empresas recomendam instruções claras, exemplos, contexto e formato definido. As diferenças estão em detalhes: o Claude responde bem a seções marcadas, o Gemini integra com Gmail e Docs, o ChatGPT tem recursos como GPTs personalizados. Um prompt bem estruturado funciona nos três com ajustes pequenos.",
    },
    {
      question: "Qual o tamanho ideal de um prompt?",
      answer:
        "Não existe número mágico. O guia do Google Workspace recomenda ser breve e específico, e isso resume bem: inclua tudo o que a IA não tem como saber (contexto, números, formato, restrições) e corte o que é enfeite. Um prompt de cinco linhas com essas partes rende mais do que um parágrafo de quinze linhas sem formato definido.",
    },
    {
      question: "Precisa de curso para aprender prompt engineering?",
      answer:
        "Não. As documentações da OpenAI, Anthropic e Google são gratuitas e cobrem o essencial, e os planos gratuitos das ferramentas bastam para praticar. O que faz diferença é repetição: escrever, ver a resposta, ajustar e guardar o que funcionou. Um curso pode acelerar, mas desconfie de qualquer um que prometa salário ou renda garantida por saber escrever prompts.",
    },
    {
      question: "Dá para ganhar dinheiro com prompt engineering?",
      answer:
        "Dá, mas geralmente como parte de outro serviço: redação, marketing, consultoria, suporte. O que o mercado paga é resultado entregue com mais qualidade e menos tempo, não o prompt em si. Algumas pessoas vendem pacotes de prompts e templates ou ensinam iniciantes; as faixas de preço variam muito e dependem do nicho, do público e da sua reputação.",
    },
  ],
  quiz: [
    {
      question: "Qual parte do prompt costuma faltar quando a resposta vem genérica?",
      options: ["O cumprimento inicial", "O contexto com números e público", "A assinatura no final"],
      answer: 1,
      explanation: "A IA não sabe preço, prazo, cidade nem público do seu negócio. Sem contexto concreto, ela responde para o mundo inteiro e não serve para você.",
    },
    {
      question: "O que fazer quando a tarefa tem várias partes (plano do mês, apresentação longa)?",
      options: ["Pedir tudo em uma frase só", "Dividir em etapas e aprovar cada uma", "Aumentar o tamanho do prompt até caber tudo"],
      answer: 1,
      explanation: "Encadear prompts (temas, depois aprovação, depois textos) rende mais do que um pedido gigante, e é o que as documentações oficiais recomendam.",
    },
  ],
};
