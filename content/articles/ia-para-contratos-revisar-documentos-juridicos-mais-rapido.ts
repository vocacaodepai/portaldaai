import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "ia-para-contratos-revisar-documentos-juridicos-mais-rapido",
  title: "IA para contratos: como revisar documentos jurídicos rápido",
  seoTitle: "IA para contratos: revisar documentos jurídicos rápido",
  excerpt:
    "IA para contratos ajuda a entender cláusulas, separar riscos e chegar preparado ao advogado. Veja ferramentas, prompts prontos e o que nunca colar na IA.",
  metaDescription:
    "IA para contratos: aprenda a revisar documentos jurídicos com ChatGPT, Claude ou Gemini, com prompts prontos, checklist de dados sensíveis e limites claros.",
  category: "ferramentas",
  date: "2026-09-25",
  updated: "2026-09-27",
  readTime: 9,
  imageQuery: "contract document review desk pen",
  seed: 84,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "IA para contratos serve para a primeira leitura: traduzir juridiquês, separar cláusulas de risco e montar a lista de perguntas para o advogado.",
    "Antes de colar qualquer contrato, apague CPF, endereço, dados bancários e nomes de terceiros, e prefira ferramentas que não usam seu texto para treinar modelos.",
    "Contrato de imóvel, sociedade ou propriedade intelectual continua exigindo revisão humana; a IA prepara a conversa, não assina por você.",
  ],
  sources: [
    {
      label: "Anthropic: uso de dados de produtos comerciais no treinamento",
      url: "https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training",
    },
    {
      label: "Anthropic: uso de conversas de usuários (Free, Pro, Max) no treinamento",
      url: "https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training",
    },
    {
      label: "Google: central de privacidade dos apps Gemini",
      url: "https://support.google.com/gemini/answer/13594961",
    },
    {
      label: "Planalto: Lei 13.709/2018 (LGPD), texto compilado",
      url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm",
    },
  ],
  content: `
    <p>IA para contratos funciona assim: você cola o texto (ou envia o PDF), pede um resumo em português simples, uma lista separada das cláusulas de risco e as perguntas que deve levar ao advogado. Em dez minutos você sai de "não entendi nada" para "sei exatamente onde está o problema". Ela não substitui o advogado, mas faz a primeira leitura por você.</p>

    <p>Este guia mostra quais ferramentas aceitam documento, o que apagar antes de colar, três prompts prontos e um exemplo com valores reais de um contrato de prestação de serviço. Também explica em que situações a IA atrapalha mais do que ajuda. A lógica é a mesma de quem usa a <a href="/artigos/ia-para-reunioes-transcricao-resumo-ata-automatica">IA para transcrever e resumir reuniões</a>: a máquina organiza a informação, a decisão continua sua.</p>

    <h2>O que a IA faz bem (e mal) em um contrato</h2>
    <p>O ponto forte é tradução. Um contrato de 14 páginas em juridiquês vira um resumo de uma página com cada cláusula explicada na prática: quanto você paga, quando pode sair, o que acontece se atrasar. A IA também é boa em comparação: ela conhece milhares de contratos parecidos e aponta quando um prazo de exclusividade ou uma multa está fora do que costuma aparecer em acordos do mesmo tipo.</p>

    <p>O ponto fraco é o que não está escrito. A IA lê o documento, não a lei específica do seu estado, a jurisprudência recente ou o histórico da outra parte. Ela também pode inventar um artigo de lei com cara de verdadeiro, então qualquer citação legal que aparecer na resposta precisa ser conferida em uma ferramenta de pesquisa com fontes, como as comparadas no guia de <a href="/artigos/perplexity-notebooklm-ia-de-pesquisa-estudar-mais-rapido">Perplexity e NotebookLM</a>, ou direto com um profissional.</p>

    <p>A conta é simples: use a IA para entender, listar e perguntar. Não use para decidir sozinho em contrato de alto valor. Um dos erros mais comuns de quem começa a usar IA é tratar a resposta como parecer final, e em contrato esse erro custa caro.</p>

    <h2>Qual ferramenta usar para revisar contratos com IA</h2>
    <p>Qualquer assistente de uso geral resolve a leitura básica. A diferença está em três pontos: aceita PDF, quanto texto cabe de uma vez e o que a empresa faz com o que você envia. O comparativo abaixo resume o que vale para o leitor comum. Preços mudam com frequência, então consulte a página oficial de cada uma antes de assinar.</p>

    <table>
      <thead>
        <tr>
          <th>Ferramenta</th>
          <th>Aceita PDF</th>
          <th>Uso do seu texto para treino</th>
          <th>Melhor para</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ChatGPT (Free, Plus)</td>
          <td>Sim</td>
          <td>Depende da configuração de dados da conta; confira nas opções de privacidade</td>
          <td>Resumo rápido e contraproposta</td>
        </tr>
        <tr>
          <td>Claude (Free, Pro, Team)</td>
          <td>Sim</td>
          <td>Nos planos comerciais (Team, Enterprise, API), não usa por padrão, <a href="https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training" rel="noopener noreferrer">segundo a política da Anthropic</a>. Nos planos Free e Pro, o uso das conversas para treino depende da opção de melhoria do modelo nas <a href="https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training" rel="noopener noreferrer">configurações de privacidade</a>; confira e desligue antes de colar o contrato</td>
          <td>Contratos longos, leitura cláusula a cláusula</td>
        </tr>
        <tr>
          <td>Gemini (app)</td>
          <td>Sim</td>
          <td>A <a href="https://support.google.com/gemini/answer/13594961" rel="noopener noreferrer">central de privacidade do Gemini</a> avisa que revisores humanos podem ler conversas e pede para não inserir informação confidencial</td>
          <td>Quem já vive no Google Drive</td>
        </tr>
        <tr>
          <td>NotebookLM</td>
          <td>Sim</td>
          <td>Trabalha só com os documentos que você sobe e cita a página de cada resposta</td>
          <td>Comparar duas versões do mesmo contrato</td>
        </tr>
      </tbody>
    </table>

    <p>Se você ainda não escolheu um assistente principal, o comparativo <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini</a> mostra qual se sai melhor em português e em documentos longos. E a <a href="/artigos/chatgpt-plus-vale-a-pena-review-2026">análise do ChatGPT Plus</a> ajuda a decidir se o plano pago compensa só para esse tipo de tarefa (na maioria dos casos, o gratuito dá conta de um contrato por vez).</p>

    <h2>Passo a passo: da leitura ao resumo de riscos</h2>
    <h3>1. Limpe o documento</h3>
    <p>Abra o contrato e substitua CPF, RG, endereço, dados bancários e nomes de terceiros por marcadores como [CONTRATANTE] e [CONTA]. Isso leva cinco minutos e resolve a maior parte do risco de privacidade, tema que o artigo sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">o que você entrega sem perceber ao usar IA</a> detalha.</p>

    <h3>2. Peça o resumo executivo</h3>
    <p>Comece pelo panorama: objeto, valor, prazo, forma de pagamento, rescisão, multa. Só depois entre nos detalhes. Pedir "analise este contrato" de cara gera uma resposta genérica; o guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">prompt engineering</a> explica por que perguntas específicas rendem respostas melhores.</p>

    <h3>3. Separe as cláusulas de risco</h3>
    <p>Peça uma lista só com o que costuma gerar briga: rescisão, multa, exclusividade, propriedade intelectual, confidencialidade, reajuste e foro. Para cada item, o que ela significa na prática e se está acima ou abaixo do comum.</p>

    <h3>4. Monte a lista de perguntas</h3>
    <p>Feche pedindo cinco perguntas objetivas para levar ao advogado ou à outra parte. Você chega na reunião com pauta pronta e paga por menos horas de consulta.</p>

    <h2>Prompts prontos para revisar contrato</h2>
    <p>Os três prompts abaixo cobrem o fluxo inteiro. Cole o contrato já anonimizado no lugar indicado e ajuste o tipo de acordo (prestação de serviço, aluguel, fornecimento, parceria).</p>

    <pre><code>Você é um analista de contratos. Leia o contrato abaixo (prestação de serviço de design) e faça um resumo executivo de no máximo 15 linhas, em português simples, cobrindo: objeto, valor e forma de pagamento, prazo, como cada parte pode encerrar, multas e obrigações que eu assumo. Não invente nada que não esteja no texto.

[COLE O CONTRATO AQUI]</code></pre>

    <pre><code>Agora liste separadamente as cláusulas de risco para mim, o CONTRATADO: rescisão, multa, exclusividade, propriedade intelectual, confidencialidade, reajuste e foro. Para cada uma: (1) o que diz, (2) o que significa na prática, (3) se está acima, dentro ou abaixo do que costuma aparecer em contratos desse tipo, (4) o número da cláusula.</code></pre>

    <pre><code>Com base nessa análise, escreva 5 perguntas objetivas para eu levar a um advogado e um e-mail curto e educado para a outra parte pedindo ajuste na cláusula de exclusividade, propondo prazo de 3 meses em vez de 12 e explicando o motivo.</code></pre>

    <p>O terceiro prompt aproveita a mesma técnica de clareza que aparece no guia de <a href="/artigos/como-escrever-pitch-de-negocio-com-ia">pitch de negócio com IA</a>: dizer o que você quer, por quê, e propor uma alternativa concreta em vez de só reclamar.</p>

    <h2>Exemplo brasileiro: o contrato de R$ 18 mil da designer</h2>
    <p>Cenário comum entre freelancers: uma designer de Curitiba recebe um contrato de R$ 18.000 por quatro meses de trabalho para uma agência. O documento tem 11 páginas. Ela cola o texto anonimizado no Claude gratuito e usa os três prompts acima. O resumo sai em dois minutos e a lista de riscos aponta duas coisas: exclusividade de 12 meses (ela não poderia atender outros clientes do mesmo setor por um ano depois do fim do contrato) e multa de 30% do valor total por rescisão antecipada, sem a mesma multa para a agência.</p>

    <p>Com a lista de perguntas na mão, ela marca uma consulta avulsa de uma hora com uma advogada, que confirma os dois pontos e sugere reduzir a exclusividade para 3 meses e igualar a multa dos dois lados. A agência aceita. Sem a IA, ela provavelmente teria assinado sem ler a cláusula 9 até o fim, como faz a maioria de quem trabalha por conta própria. Esse cuidado é parte do que o artigo sobre <a href="/artigos/freelancer-na-era-da-ia-como-se-tornar-insubstituivel">freelancer na era da IA</a> chama de profissionalizar a relação com o cliente.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Dica</span>
      <p>Peça sempre o número da cláusula junto com cada risco apontado. Na hora de negociar, "cláusula 9.2" pesa mais do que "aquela parte da exclusividade", e você confere no documento original se a IA leu certo.</p>
    </div>

    <h2>Dados sensíveis e LGPD: o que apagar antes de colar</h2>
    <p>Contrato é cheio de dado pessoal. A <a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm" rel="noopener noreferrer">LGPD (Lei 13.709/2018)</a>, no artigo 5º, define dado pessoal como qualquer informação relacionada a pessoa identificável e trata como sensível o que envolve saúde, biometria, religião, opinião política, entre outros. Se o contrato é de um cliente seu, você responde pelo que faz com os dados dele. A regra prática: a IA precisa das cláusulas, não das pessoas.</p>

    <ul class="checklist">
      <li>Troquei CPF, RG e CNPJ por marcadores como [CPF] e [CNPJ]</li>
      <li>Apaguei endereço completo, telefone e e-mail das partes</li>
      <li>Removi dados bancários e números de conta</li>
      <li>Substituí nomes de terceiros (testemunhas, sócios, dependentes) por [TESTEMUNHA 1]</li>
      <li>Conferi se a ferramenta usa o texto para treinar modelos e desliguei essa opção quando possível</li>
      <li>Mantive valores, prazos e o texto das cláusulas, que são o que importa para a análise</li>
    </ul>

    <p>Antes de conectar qualquer ferramenta nova a documentos de clientes, passe pelo <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist de segurança para escolher ferramenta de IA</a>. Escritórios que lidam com volume alto já contratam plataformas específicas, como mostra a notícia sobre a <a href="/noticias/harvey-capta-550-milhoes-15-6-bilhoes-ia-juridica">captação de US$ 550 milhões da Harvey</a>, mas para o pequeno negócio o assistente comum com o texto anonimizado resolve.</p>

    <h2>Quando não usar IA para contratos</h2>
    <p>Há situações em que a primeira leitura pela IA cria falsa segurança. Nestes casos, vá direto ao advogado ou use a IA só para preparar perguntas, nunca para decidir:</p>

    <ul>
      <li><strong>Compra, venda ou aluguel de imóvel.</strong> Envolve registro, matrícula, certidões e leis locais que não estão no contrato.</li>
      <li><strong>Contrato social e entrada ou saída de sócio.</strong> Erro aqui vira processo de anos.</li>
      <li><strong>Cessão de propriedade intelectual de obra ou software.</strong> Uma palavra muda quem é dono do que você criou.</li>
      <li><strong>Acordo trabalhista, rescisão ou demissão.</strong> A legislação muda e a IA pode citar regra desatualizada.</li>
      <li><strong>Documento em outro idioma com valor alto.</strong> Tradução automática de termo jurídico é o lugar clássico de erro.</li>
    </ul>

    <div class="callout-box callout-bad">
      <span class="callout-label">Nunca faça</span>
      <p>Nunca assine contrato de alto valor com base só na resposta da IA, e nunca cole documento com dados de terceiros sem anonimizar. Os dois erros são os mais frequentes e os mais caros.</p>
    </div>

    <p>Também não faz sentido pedir para a IA "gerar um contrato do zero" e usar sem revisão. Ela produz um rascunho razoável, mas cláusulas de foro, reajuste e rescisão precisam de alguém que conheça o seu caso. Se você presta serviço para pequenas empresas, o guia de <a href="/artigos/como-vender-consultoria-de-ia-para-pequenas-empresas">consultoria de IA para pequenas empresas</a> mostra como oferecer essa preparação de documentos como parte do pacote, sempre com um advogado parceiro na retaguarda.</p>

    <h2>Da análise à negociação</h2>
    <p>O maior ganho aparece depois da leitura. Com a lista de riscos e o número das cláusulas, você escreve uma contraproposta clara em dez minutos, ou pede para a IA redigir o e-mail e ajusta o tom. Para quem recebe muitos contratos por e-mail, vale combinar essa rotina com a <a href="/artigos/ia-para-email-organizar-caixa-de-entrada-responder-mais-rapido">organização da caixa de entrada com IA</a>, criando um modelo de resposta padrão para "recebi o contrato, tenho três pontos a ajustar".</p>

    <p>Quem está abrindo empresa e vai assinar vários acordos em sequência (fornecedor, plataforma, parceiro) ganha ainda mais: o roteiro para <a href="/artigos/como-criar-um-negocio-digital-usando-ia-do-zero">criar um negócio digital usando IA do zero</a> encaixa essa revisão logo antes de cada assinatura. Se algum termo do contrato ainda soar estranho depois de tudo isso, o <a href="/artigos/dicionario-de-inteligencia-artificial-termos-essenciais">dicionário de IA do Portal</a> e uma consulta rápida a um advogado fecham a conta. Explore a categoria de ferramentas para ver outros usos práticos do mesmo assistente que você já tem no celular.</p>
  `,
  faq: [
    {
      question: "IA para contratos substitui o advogado?",
      answer:
        "Não. A IA faz a primeira leitura: traduz o juridiquês, separa cláusulas de risco e monta as perguntas certas. Contrato de imóvel, sociedade, propriedade intelectual ou de valor alto continua exigindo revisão de um advogado antes da assinatura. O ganho real é chegar à consulta com pauta pronta e pagar por menos horas.",
    },
    {
      question: "É seguro colar um contrato no ChatGPT ou no Claude?",
      answer:
        "É seguro se você anonimizar antes: troque CPF, endereço, dados bancários e nomes de terceiros por marcadores e mantenha só as cláusulas, valores e prazos. Confira também a política de dados da ferramenta. A Anthropic não usa dados de planos comerciais para treino por padrão; no Claude Free e Pro, isso depende da opção de melhoria do modelo nas configurações de privacidade, então confira e desligue antes de colar. No Gemini, o Google avisa que revisores humanos podem ler conversas.",
    },
    {
      question: "Qual a melhor IA para revisar contrato em português?",
      answer:
        "ChatGPT, Claude e Gemini leem PDF e resumem bem em português. Claude costuma lidar melhor com documentos longos lidos cláusula a cláusula; NotebookLM é útil para comparar duas versões do mesmo contrato citando a página. Para um contrato por vez, o plano gratuito de qualquer uma dá conta; consulte a página oficial para limites e preços atuais.",
    },
    {
      question: "Como pedir para a IA achar cláusulas de risco?",
      answer:
        "Peça uma lista separada com rescisão, multa, exclusividade, propriedade intelectual, confidencialidade, reajuste e foro. Para cada uma, o que diz, o que significa na prática, se está acima ou abaixo do comum e o número da cláusula. Pedido genérico como analise este contrato gera resposta genérica; pedido específico gera lista útil.",
    },
    {
      question: "A IA pode inventar artigo de lei na análise do contrato?",
      answer:
        "Pode. Modelos de linguagem às vezes citam artigos ou decisões com cara de verdadeiros que não existem. Trate qualquer citação legal como hipótese: confira em ferramenta de pesquisa com fontes, no texto oficial da lei no Planalto ou com o advogado. Use a IA para entender o contrato, não para embasar argumento jurídico sozinho.",
    },
  ],
  quiz: [
    {
      question: "Qual é o uso mais seguro de IA na análise de contratos?",
      options: [
        "Assinar o contrato direto com base na resposta da IA",
        "Usar a IA para entender o documento e se preparar antes de uma revisão jurídica de verdade",
        "Ignorar cláusulas que a IA não conseguiu explicar",
        "Nunca usar IA para esse tipo de tarefa",
      ],
      answer: 1,
      explanation:
        "A IA é útil como ferramenta de preparação e entendimento inicial, mas contratos importantes devem sempre passar por revisão jurídica humana antes de serem assinados.",
    },
    {
      question: "O que fazer antes de colar um contrato com dados sensíveis em uma ferramenta de IA?",
      options: [
        "Nada, todas as ferramentas são seguras",
        "Anonimizar CPF, endereço, dados bancários e nomes de terceiros e verificar a política de dados da ferramenta",
        "Compartilhar o contrato em redes sociais também",
        "Remover apenas o título do documento",
      ],
      answer: 1,
      explanation:
        "A IA precisa das cláusulas, valores e prazos, não das pessoas. Trocar dados pessoais por marcadores resolve a maior parte do risco, e a política de dados da ferramenta diz o que acontece com o que você envia.",
    },
  ],
};
