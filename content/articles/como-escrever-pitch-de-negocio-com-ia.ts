import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "como-escrever-pitch-de-negocio-com-ia",
  title: "Pitch de negócio com IA: como escrever para investidor ou sócio",
  seoTitle: "Pitch de negócio com IA: guia para investidores",
  excerpt:
    "Pitch de negócio com IA: estruture os cinco blocos que investidor e sócio esperam, simule perguntas difíceis e treine a versão de 30 segundos com prompts.",
  metaDescription:
    "Pitch de negócio com IA: aprenda a estruturar problema, solução, mercado, modelo e tração, simular perguntas de investidor e treinar a versão de 30 segundos.",
  category: "negocios",
  articleSubcategory: "vendas-e-marketing",
  date: "2026-09-14",
  updated: "2026-09-27",
  readTime: 9,
  imageQuery: "pitch presentation startup meeting",
  seed: 29,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Um pitch de negócio com IA nasce de cinco blocos (problema, solução, mercado, modelo de negócio e tração) e cabe em 3 a 5 minutos, a duração que o Sebrae recomenda.",
    "A IA organiza, corta e simula as perguntas difíceis; os números, os clientes e a história continuam sendo seus, e todo dado citado precisa de fonte real.",
    "Investimento-anjo no Brasil começa em R$ 10 mil por investidor e costuma ficar entre R$ 400 mil e R$ 1,5 milhão por startup, segundo a Anjos do Brasil.",
  ],
  content: `
    <p>Escrever um pitch de negócio com IA é usar ChatGPT, Claude ou Gemini para transformar uma ideia solta em uma apresentação de 3 a 5 minutos com cinco blocos claros: problema, solução, mercado, modelo de negócio e tração. A IA não inventa o negócio nem os números. Ela organiza o que você já sabe, corta o excesso e faz o papel do investidor chato antes da reunião de verdade.</p>

    <p>Este guia mostra a estrutura que investidor, sócio em potencial e até gerente de banco esperam ouvir, três prompts prontos para cada etapa, um exemplo brasileiro com valores, os erros que derrubam a maioria dos pitches e os casos em que a IA atrapalha mais do que ajuda. Serve tanto para quem busca R$ 50 mil de um conhecido quanto para quem vai apresentar em uma rodada de anjos.</p>

    <h2>O que é um pitch e o que investidor espera ouvir?</h2>

    <p>Pitch é uma apresentação curta e objetiva para despertar interesse de investidor, sócio ou cliente. O <a href="https://blog.rn.sebrae.com.br/pitch/" rel="noopener noreferrer">guia de pitch do Sebrae RN</a> recomenda 3 a 5 minutos e cinco elementos: a oportunidade (o problema), o mercado-alvo, a solução, os diferenciais e o que você está pedindo. O mesmo guia lembra que a forma de apresentar pesa tanto quanto o conteúdo e que não existe fórmula única: o pitch muda conforme quem ouve.</p>

    <p>Quem ouve também tem um perfil. Segundo a <a href="https://anjosdobrasil.net/o-que-e-investidor-anjo/" rel="noopener noreferrer">Anjos do Brasil</a>, investidor-anjo é uma pessoa física que coloca dinheiro próprio em startups em estágio inicial em troca de participação minoritária, com aportes individuais a partir de R$ 10 mil e rodadas em grupo que costumam ficar entre R$ 400 mil e R$ 1,5 milhão por empresa. Esse investidor quer entender, em minutos, por que o problema é real, por que você é a pessoa certa e como o dinheiro volta.</p>

    <p>Antes do pitch existe uma etapa que muita gente pula: confirmar que o problema existe fora da sua cabeça. O guia de <a href="/artigos/como-validar-ideia-de-negocio-com-ia-antes-de-investir">validar uma ideia de negócio com IA</a> cobre isso. Pitch bom de ideia não validada é só um bom texto.</p>

    <h2>Os cinco blocos do pitch (e quanto tempo cada um leva)</h2>

    <table>
      <thead>
        <tr><th>Bloco</th><th>O que responde</th><th>Tempo sugerido em 4 minutos</th></tr>
      </thead>
      <tbody>
        <tr><td>Problema</td><td>Qual dor real, de quem, e quanto ela custa hoje</td><td>45 segundos</td></tr>
        <tr><td>Solução</td><td>Como você resolve, sem detalhe técnico</td><td>45 segundos</td></tr>
        <tr><td>Mercado</td><td>Quantas pessoas ou empresas têm essa dor e quanto gastam</td><td>40 segundos</td></tr>
        <tr><td>Modelo de negócio</td><td>Como o dinheiro entra: preço, margem, recorrência</td><td>40 segundos</td></tr>
        <tr><td>Tração e pedido</td><td>O que já aconteceu (clientes, receita, lista de espera) e quanto você quer, para fazer o quê</td><td>70 segundos</td></tr>
      </tbody>
    </table>

    <p>Repare que a tração e o pedido levam mais tempo do que a solução. Investidor experiente já viu centenas de soluções; o que ele não viu é a sua prova de que alguém paga por ela. Se ainda não há receita, a prova pode ser uma lista de espera com nomes, um piloto com três clientes ou um contrato assinado com desconto. Para o bloco de mercado, o guia de <a href="/artigos/como-usar-ia-para-monitorar-concorrencia-tomar-decisoes-melhores">monitorar a concorrência com IA</a> ajuda a mapear quem já vende algo parecido e a que preço, e o artigo sobre <a href="/artigos/como-times-pequenos-competem-com-grandes-empresas-usando-ia">como times pequenos competem com grandes empresas</a> dá argumentos para a pergunta "e se um grande copiar?".</p>

    <h2>Passo a passo: como a IA ajuda em cada etapa</h2>

    <h3>1. Do texto solto para os cinco blocos</h3>

    <p>Grave um áudio de cinco minutos explicando o negócio para um amigo, transcreva (o próprio celular faz isso) e cole na IA com o prompt abaixo. A saída vem organizada nos blocos, com lacunas marcadas onde faltou informação. A estrutura segue o que a <a href="https://developers.openai.com/api/docs/guides/prompt-engineering" rel="noopener noreferrer">documentação de prompts da OpenAI</a> chama de identidade, instruções, exemplo e contexto.</p>

    <pre><code>Você é um investidor-anjo experiente que já ouviu centenas de pitches no Brasil. Abaixo está a transcrição de uma explicação informal do meu negócio. Reorganize o conteúdo em cinco blocos: problema, solução, mercado, modelo de negócio, tração e pedido. Use só o que está no texto. Onde faltar informação, escreva [FALTA: o que falta]. Frases curtas, sem adjetivos, sem inventar número. No fim, liste as três perguntas que você faria antes de investir.

Transcrição:
[cole aqui]</code></pre>

    <h3>2. Do rascunho para a versão enxuta</h3>

    <p>Com os blocos preenchidos, peça cortes: "reduza cada bloco para no máximo três frases" e "troque toda frase que começa com 'nós acreditamos' por um fato". Se algum número apareceu sem origem, é a hora de buscar a fonte ou tirar. Para pesquisa de mercado com referência, o guia de <a href="/artigos/perplexity-notebooklm-ia-de-pesquisa-estudar-mais-rapido">Perplexity, NotebookLM e IA de pesquisa</a> mostra como achar dado com link e não com achismo.</p>

    <h3>3. Simule a rodada de perguntas</h3>

    <p>Essa é a parte em que a IA mais rende. Peça um interrogatório e responda em voz alta, como se fosse a reunião. A mesma técnica funciona em <a href="/artigos/como-se-preparar-para-entrevistas-de-emprego-usando-ia">entrevistas de emprego com IA</a>, e o princípio é igual: quem já respondeu a pergunta difícil em casa não trava na sala.</p>

    <pre><code>Assuma o papel de um investidor cético. Leia o pitch abaixo e me faça uma pergunta difícil por vez, esperando a minha resposta antes da próxima. Foque em: por que agora, por que eu, como você adquire cliente e a que custo, o que acontece se um concorrente grande copiar, e para onde vai cada real do investimento. Depois de 8 perguntas, me diga quais respostas ficaram fracas e por quê.

Pitch:
[cole aqui]</code></pre>

    <h3>4. A versão de 30 segundos</h3>

    <p>Sócio em potencial e investidor raramente ouvem a versão completa na primeira conversa. Peça: "escreva uma versão de 30 segundos (até 70 palavras) que uma pessoa de fora do meu setor entenda, sem jargão, terminando com o que eu peço". Leia em voz alta com o cronômetro ligado.</p>

    <h2>Exemplo brasileiro: R$ 150 mil para uma marca de cosméticos em Recife</h2>

    <p>Imagine uma empreendedora do Recife com uma marca de cosméticos naturais que fatura R$ 18 mil por mês vendendo pelo Instagram e em duas lojas parceiras, com margem bruta perto de 55%. Ela quer R$ 150 mil de um investidor-anjo para registrar três produtos na Anvisa, produzir um lote maior e contratar uma pessoa de vendas. O pitch dela fica assim, em números: problema (consumidora que quer produto natural com procedência e não encontra a preço acessível), solução (linha própria com fórmula registrada), mercado (concorrentes locais e nacionais mapeados com preço médio), modelo (venda direta e revenda com margens distintas), tração (14 meses de venda, 320 clientes recorrentes) e pedido (R$ 150 mil por uma participação a negociar, com uso do dinheiro detalhado em três linhas).</p>

    <p>O que a IA fez nesse processo: organizou o áudio dela em blocos em 10 minutos, cortou o texto pela metade, gerou 24 perguntas de investidor em três rodadas e montou a versão de 30 segundos. O que a IA não fez: os 14 meses de venda, a planilha de margem e a lista de clientes. Para a planilha, o guia de <a href="/artigos/como-fazer-previsao-de-vendas-planejamento-financeiro-com-ia">previsão de vendas e planejamento financeiro com IA</a> mostra como projetar 24 meses sem inventar crescimento, e o de <a href="/artigos/ia-para-planilhas-automatizar-relatorios-excel-sheets">IA para planilhas</a> ajuda a montar a tabela que vai no anexo. Os valores aqui são um cenário ilustrativo, não um caso real.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Investidor confere número. Tamanho de mercado, crescimento do setor e ticket médio precisam vir com fonte (IBGE, associação do setor, pesquisa nomeada). Se a IA trouxe um dado que você não consegue rastrear até a origem, ele sai do pitch.</p></div>

    <h2>Do texto para a apresentação e a fala</h2>

    <p>O pitch escrito vira dois materiais: os slides e a sua fala. Para os slides, a regra é um bloco por slide, uma frase por slide, um número grande quando houver número. O guia de <a href="/artigos/como-criar-apresentacoes-e-slides-profissionais-com-ia">criar apresentações e slides com IA</a> mostra como gerar o deck a partir do texto em menos de uma hora. Para a fala, grave-se no celular e peça à IA para transcrever e apontar vícios: "então", "tipo", frases que não terminam.</p>

    <p>Se a apresentação for enviada em vídeo, como pedem alguns programas de aceleração, o artigo sobre <a href="/artigos/ia-para-video-criar-avatar-digital-que-fala-por-voce">avatar digital com IA</a> explica quando isso faz sentido e quando o investidor quer ver você, não um avatar (quase sempre a segunda opção). Para ajustar o preço do produto que aparece no bloco de modelo de negócio, o guia de <a href="/artigos/como-precificar-produtos-e-servicos-com-ia">precificar produtos e serviços com IA</a> evita o erro clássico de apresentar margem que não fecha.</p>

    <h2>Erros comuns em pitches escritos com IA</h2>

    <ul>
      <li><strong>Falar de funcionalidade, não de problema.</strong> Quem ouve quer saber por que aquilo importa. Detalhe técnico só se perguntarem.</li>
      <li><strong>Deixar o texto com cara de IA.</strong> "Solução inovadora e disruptiva que revoluciona o mercado" derruba a credibilidade na primeira linha. Peça para a IA cortar todo adjetivo e leia em voz alta.</li>
      <li><strong>Número sem fonte.</strong> "Mercado de R$ 50 bilhões" sem link é o convite para a primeira pergunta constrangedora.</li>
      <li><strong>Pedir dinheiro sem dizer para quê.</strong> "Buscamos R$ 200 mil" precisa vir com "para X, Y e Z, que nos levam a tal resultado em tantos meses".</li>
      <li><strong>Tração escondida.</strong> Três clientes pagantes valem mais do que dez slides de visão. Coloque o que já aconteceu no começo do bloco final, não no fim.</li>
      <li><strong>Um pitch para todo mundo.</strong> Sócio quer saber o que vai fazer no dia a dia; investidor quer saber como o dinheiro volta; banco quer garantia. A IA gera as três versões em minutos, a partir do mesmo texto.</li>
    </ul>

    <h2>Quando não usar IA no pitch</h2>

    <p>Há três momentos em que a IA sai da sala. O primeiro é a história de origem: por que você, por que esse problema. Isso tem que ser contado com as suas palavras, mesmo que imperfeitas, porque investidor de estágio inicial aposta na pessoa. O segundo são os números: a IA pode formatar e conferir contas, mas a origem de cada valor é a sua planilha e a sua fonte, nunca uma estimativa gerada. O terceiro é o acordo em si: valuation, participação e cláusulas passam por advogado e contador. A IA ajuda a entender o vocabulário, como mostra o guia de <a href="/artigos/ia-para-contratos-revisar-documentos-juridicos-mais-rapido">IA para contratos</a>, mas não assina por você.</p>

    <p>Também vale um alerta sobre confidencialidade: não cole no chat dados de clientes identificáveis, contratos com terceiros nem informação que você não mostraria em uma reunião aberta.</p>

    <p>Um bom pitch é o começo de uma conversa, não o fim. Escreva o rascunho hoje com o primeiro prompt, rode o interrogatório amanhã e teste a versão de 30 segundos com alguém que não conhece o seu setor. Se a pessoa consegue repetir o que você faz e o que você pede, o pitch está pronto. Para o que vem depois do sim, a categoria <a href="/negocios">Negócios com IA</a> tem o caminho, e o guia de <a href="/artigos/como-criar-um-negocio-digital-usando-ia-do-zero">criar um negócio digital com IA do zero</a> mostra o que fazer com o dinheiro que entrou.</p>
  `,
  faq: [
    {
      question: "Quanto tempo deve ter um pitch de negócio?",
      answer:
        "Entre 3 e 5 minutos na versão completa, segundo o guia de pitch do Sebrae RN, e cerca de 30 segundos na versão de elevador, para a primeira conversa. Divida o tempo em cinco blocos (problema, solução, mercado, modelo e tração com pedido) e reserve a maior fatia para a tração e o pedido, que é o que o investidor menos viu em outros pitches.",
    },
    {
      question: "A IA pode escrever meu pitch sozinha?",
      answer:
        "Ela escreve um texto, mas não um pitch que convence. O que faz um pitch funcionar são os seus números, os seus clientes e a sua história, e a IA não tem acesso a nada disso a menos que você forneça. Use a IA para organizar, cortar, simular perguntas e gerar versões para públicos diferentes. Os fatos e as fontes continuam sendo responsabilidade sua.",
    },
    {
      question: "Qual IA é melhor para escrever pitch: ChatGPT, Claude ou Gemini?",
      answer:
        "As três dão conta com o plano gratuito. O Claude costuma seguir bem instruções de formato e tom em textos longos, o ChatGPT tem mais recursos em volta, como voz para treinar a fala, e o Gemini se integra ao Google Slides. O resultado depende mais do prompt e do material que você fornece do que da ferramenta escolhida.",
    },
    {
      question: "Quanto um investidor-anjo investe no Brasil?",
      answer:
        "Segundo a Anjos do Brasil, o aporte individual começa em R$ 10 mil por investidor, e as rodadas em grupo costumam ficar entre R$ 400 mil e R$ 1,5 milhão por startup, em troca de participação minoritária. Além do dinheiro, o anjo costuma trazer experiência e rede de contatos, então o pitch deve mostrar também onde essa ajuda seria usada.",
    },
    {
      question: "Pitch para sócio é diferente de pitch para investidor?",
      answer:
        "Sim. O investidor quer saber como o dinheiro volta e em quanto tempo; o sócio quer saber o que vai fazer no dia a dia, como será a divisão de trabalho e de participação, e por que vale mais a pena entrar do que ser contratado. A estrutura dos cinco blocos serve para os dois, mas o bloco final (pedido) muda por completo.",
    },
    {
      question: "Preciso de slides para fazer um pitch?",
      answer:
        "Nem sempre. Em uma primeira conversa informal, a versão falada de 30 segundos a 2 minutos basta. Para rodada de anjos, programa de aceleração ou reunião marcada, sim: um slide por bloco, uma frase por slide, um número grande quando houver número. O texto do pitch vem antes dos slides, e a IA gera o deck a partir dele em menos de uma hora.",
    },
  ],
};
