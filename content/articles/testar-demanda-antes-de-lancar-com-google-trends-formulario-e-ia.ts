import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "testar-demanda-antes-de-lancar-com-google-trends-formulario-e-ia",
  title: "Testar demanda antes de lançar: Google Trends, formulário e IA",
  seoTitle: "Testar demanda antes de lançar: Trends e formulário",
  excerpt:
    "Veja como testar a demanda antes de lançar um produto ou serviço com Google Trends, um formulário curto e IA, e como decidir se segue, ajusta ou desiste.",
  metaDescription:
    "Testar demanda antes de lançar: passo a passo com Google Trends, formulário de interesse e IA para ler respostas, com critério de decisão e erros comuns a evitar.",
  category: "negocios",
  articleSubcategory: "lancamento-e-estrategia",
  date: "2026-11-02",
  readTime: 8,
  imageQuery: "notebook charts coffee planning",
  seed: 1035,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Testar demanda é reunir sinais de que há gente querendo o que você vai vender, antes de gastar com estoque, equipamento ou anúncio.",
    "O Google Trends mostra interesse relativo de busca por região e período, não o número de compradores, e tem filtros e ruído que pedem cautela na leitura.",
    "Defina antes de olhar os dados qual resultado faz você seguir, ajustar ou desistir; assim a IA ajuda a organizar as respostas sem confirmar o que você já queria ouvir.",
  ],
  content: `
    <p>Testar demanda antes de lançar é checar, com poucos gastos, se existem pessoas procurando e dispostas a pagar pelo que você pretende vender. Uma boa verificação combina três fontes: o interesse de busca no Google Trends, as respostas de um formulário curto enviado a quem pode comprar e uma pequena venda piloto. A IA entra para organizar e resumir, não para decidir.</p>

    <p>Quem abre um negócio costuma gastar primeiro (estoque, ponto, anúncio) e descobrir a demanda depois. Inverter a ordem custa algumas horas e evita prejuízo grande. Este guia mostra o passo a passo, com um exemplo numérico, prompts prontos, os limites do Google Trends e os erros que mais enganam quem testa. Dados conferidos em 02/11/2026.</p>

    <h2>O que significa testar demanda</h2>

    <p>Demanda não é "achar que vai vender". É evidência de que um grupo de pessoas tem o problema, conhece soluções parecidas e aceita pagar um preço que cobre seus custos. Os sinais mais fracos são elogios de amigos e curtidas. Os mais fortes são dinheiro e compromisso: pré-pedidos, reservas e vendas reais, ainda que pequenas.</p>

    <p>O teste funciona em camadas. Primeiro você olha o que as pessoas procuram (Trends). Depois pergunta diretamente a quem seria cliente (formulário). Por fim, oferece uma versão mínima e vê quem compra (piloto). Cada camada custa mais e informa mais. Se a primeira já mostrar que ninguém procura nada parecido na sua região, você economizou as outras duas. Este texto complementa o guia de <a href="/artigos/como-validar-ideia-de-negocio-com-ia-antes-de-investir">validar ideia de negócio com IA antes de investir</a>, com foco em dados de busca.</p>

    <h2>Passo 1: ler o Google Trends sem se enganar</h2>

    <p>O Trends compara termos de busca ao longo do tempo e por região. Segundo a <a href="https://support.google.com/trends/answer/4365533" target="_blank" rel="noopener noreferrer">ajuda oficial do Google</a>, o gráfico usa uma amostra de buscas anonimizadas e escala os valores de 0 a 100 em relação à participação do termo nas buscas do local e do período. Ou seja, mede popularidade relativa, não quantidade de pesquisas. Dois lugares com a mesma nota podem ter volumes totais muito diferentes.</p>

    <p>A mesma página avisa que o Trends não é espelho perfeito: filtra buscas feitas por poucas pessoas, repetições do mesmo usuário em pouco tempo e buscas de produtos do Google, e adiciona ruído estatístico por privacidade, mais visível em termos pouco buscados. Por isso, um pico isolado não prova nada. Para comparar, a <a href="https://support.google.com/trends/answer/4359550" target="_blank" rel="noopener noreferrer">página sobre comparação de termos</a> informa que dá para comparar até 8 grupos de termos e definir país ou região para cada um, e que erros de grafia, sinônimos e plural não retornam resultados uns dos outros.</p>

    <h3>Como montar a busca</h3>

    <ol>
      <li>Liste 3 a 5 formas como o cliente falaria: "marmita fit", "marmita congelada", "comida congelada".</li>
      <li>Compare os termos no Trends, filtrando seu estado e os últimos 12 meses.</li>
      <li>Observe a tendência (sobe, cai, oscila com a estação) e as regiões com mais interesse.</li>
      <li>Anote o que o gráfico não responde: preço, concorrência e vontade de comprar de você.</li>
    </ol>

    <h2>Passo 2: o formulário curto de interesse</h2>

    <p>Monte um formulário no Google Forms com no máximo 6 perguntas e envie a quem se parece com seu cliente: vizinhos do bairro, grupos de condomínio, clientes de outro negócio seu. Evite perguntar "você compraria?", porque as pessoas dizem sim por educação. Pergunte sobre comportamento real e peça um compromisso pequeno.</p>

    <table>
      <thead>
        <tr><th>Pergunta</th><th>Por que perguntar</th></tr>
      </thead>
      <tbody>
        <tr><td>Quando foi a última vez que você comprou algo assim?</td><td>Mede hábito real</td></tr>
        <tr><td>Quanto pagou e onde?</td><td>Mostra preço de referência e concorrente</td></tr>
        <tr><td>O que mais incomoda hoje?</td><td>Revela o problema que você resolveria</td></tr>
        <tr><td>Por R$ 24, você reservaria uma unidade de teste?</td><td>Testa preço específico</td></tr>
        <tr><td>Deixe seu WhatsApp se quiser ser avisado</td><td>Mede interesse com ação concreta</td></tr>
      </tbody>
    </table>

    <p>Como o formulário coleta contato, avise para que os dados serão usados e use só o necessário. O <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">checklist de LGPD para pequeno negócio</a> orienta nisso. Uma lista de interessados também prepara o caminho para a <a href="/artigos/pre-venda-e-lista-de-espera-com-ia-lancar-produto-pequeno">pré-venda e a lista de espera</a>.</p>

    <h2>Passo 3: definir o critério antes de olhar os números</h2>

    <p>Esta é a etapa que mais protege o seu dinheiro. Escreva, antes de abrir as respostas, o que faria você seguir, ajustar ou parar. Exemplo de regra: com 40 respostas, se pelo menos 12 (30%) disserem que reservariam uma unidade a R$ 24 e deixarem contato, segue para um piloto; entre 6 e 11, ajusta oferta ou preço; abaixo de 6, para ou muda o público. Os números são só um modelo, e você deve calibrá-los pelo seu negócio e pelo seu risco.</p>

    <p>Sem critério prévio, é comum olhar os mesmos dados e enxergar o que se quer. O mesmo vale para a IA: se você pedir uma análise já dizendo que a ideia é boa, o resultado tende a concordar, problema explicado no texto sobre a <a href="/artigos/bajulacao-da-ia-por-que-o-chatbot-concorda-com-tudo-e-como-pedir-opiniao-honesta">bajulação da IA</a>.</p>

    <h2>Passo 4: usar a IA para ler as respostas</h2>

    <p>Exporte as respostas do formulário para uma planilha, remova nomes e telefones e cole as respostas abertas no assistente. Veja dois prompts úteis.</p>

    <pre><code>Abaixo estão respostas abertas de um formulário sobre marmita congelada.
Agrupe em temas, conte quantas respostas caem em cada tema e cite 2 frases
literais por tema. Não interprete além do que está escrito.
Respostas: [cole aqui, sem nomes nem telefones]</code></pre>

    <pre><code>Com base nos temas acima, liste 5 motivos pelos quais essas pessoas
poderiam NÃO comprar de um negócio novo, mesmo dizendo que têm interesse.
Aponte o que eu deveria testar para confirmar cada motivo.</code></pre>

    <p>O segundo prompt pede o contraponto de propósito. Para a análise de opiniões em escala, o guia de <a href="/artigos/pesquisa-de-satisfacao-com-ia-analisar-respostas-de-clientes">pesquisa de satisfação com IA</a> traz outros modelos, e o texto sobre <a href="/artigos/ganhar-dinheiro-com-pesquisa-de-mercado-para-pequenas-empresas-usando-ia">pesquisa de mercado com IA</a> mostra como aprofundar.</p>

    <h2>Um exemplo com números</h2>

    <p>Cenário ilustrativo: Lana quer vender marmitas congeladas em Curitiba. No Trends, compara três formas de busca no Paraná nos últimos 12 meses e vê qual termo é mais usado. Depois envia o formulário em dois grupos de condomínio e recebe 40 respostas. Das 40, 14 (35%) dizem que reservariam uma unidade a R$ 24 e deixam contato. Pela regra que escreveu, ela segue para o piloto.</p>

    <p>No piloto, Lana oferece 20 marmitas a R$ 24, com prazo de 5 dias. Se vender todas, o faturamento é de R$ 480. Se o custo por unidade for de R$ 14, sobram R$ 200 antes de embalagem, entrega e do tempo dela. Esses números são hipotéticos e servem para mostrar a conta: o objetivo do piloto não é lucro, e sim descobrir quem compra, por quê e se repete. Para precificar com cuidado depois, veja o guia de <a href="/artigos/plano-de-negocios-com-ia-canvas-passo-a-passo">plano de negócios com IA no Canvas</a>.</p>

    <h2>Erros comuns ao testar demanda</h2>

    <ul class="checklist">
      <li>Confundir interesse de busca com compradores: o Trends não informa quantas pessoas pagariam.</li>
      <li>Perguntar só para amigos e família, que tendem a dizer o que você quer ouvir.</li>
      <li>Usar termos que o cliente não usa, como o nome técnico em vez do popular.</li>
      <li>Ignorar sazonalidade: um mês de pico pode enganar quem olha só 30 dias.</li>
      <li>Não olhar a concorrência: demanda alta com muita oferta igual pede diferencial. O texto sobre <a href="/artigos/como-usar-ia-para-monitorar-concorrencia-tomar-decisoes-melhores">monitorar a concorrência com IA</a> ajuda aqui.</li>
      <li>Mudar o critério depois de ver os resultados.</li>
    </ul>

    <h2>Depois do teste: seguir, ajustar ou parar</h2>

    <p>Se o critério foi atingido, avance por etapas: nome e marca, perfil no Google, canais de venda. O guia de <a href="/artigos/nome-e-marca-do-pequeno-negocio-busca-no-inpi-dominio-e-ia">nome e marca com busca no INPI</a> evita retrabalho, e o de <a href="/artigos/perfil-da-empresa-no-google-com-ia-respostas-fotos-e-posts">perfil da empresa no Google</a> ajuda a ser achado. Se o resultado ficou no meio, mude uma variável por vez: preço, público ou formato de entrega. Se ficou abaixo do mínimo, parar rápido também é um bom resultado, porque custou horas e não milhares de reais.</p>

    <p>Para colocar o aprendizado no calendário, o <a href="/artigos/planejamento-2027-do-pequeno-negocio-metas-orcamento-e-calendario-com-ia">planejamento de 2027 do pequeno negócio</a> mostra como transformar testes em metas. Escolha hoje o produto que você quer testar, escreva o critério de decisão e monte o formulário. O primeiro teste leva uma tarde.</p>
  `,
  faq: [
    {
      question: "O Google Trends mostra quantas pessoas pesquisam um termo?",
      answer:
        "Não. Segundo a ajuda do Google, o gráfico mostra interesse relativo, em escala de 0 a 100, a partir de uma amostra de buscas. Não informa volume absoluto nem quantos compradores existem. Use para comparar termos, épocas e regiões, e complemente com formulário e piloto.",
    },
    {
      question: "Quantas respostas preciso no formulário de interesse?",
      answer:
        "Não existe número mágico. Para um teste local, algo entre 30 e 50 respostas de pessoas parecidas com seu cliente já ajuda a ver padrões. O mais importante é definir antes o critério de decisão e alcançar o público certo, não só amigos e familiares.",
    },
    {
      question: "Posso testar demanda sem gastar dinheiro?",
      answer:
        "Dá para começar sem custo: Google Trends, Google Forms e conversas com possíveis clientes são gratuitos. O gasto aparece no piloto, que deve ser pequeno e com prazo curto. Evite comprar estoque grande ou pagar anúncio antes de ter algum sinal de compra.",
    },
    {
      question: "A IA pode dizer se meu negócio vai dar certo?",
      answer:
        "Não. A IA ajuda a organizar respostas, achar padrões e listar riscos, mas não prevê vendas. Ela também tende a concordar com quem pergunta, então peça o contraponto e use dados reais coletados com clientes como base para decidir.",
    },
    {
      question: "O que fazer se o teste de demanda der resultado fraco?",
      answer:
        "Mude uma coisa por vez: público, preço, oferta ou canal, e repita o teste. Se a rejeição for consistente mesmo assim, considere parar. Perder algumas horas num teste custa muito menos do que abrir o negócio e descobrir depois que faltava cliente.",
    },
  ],
};
