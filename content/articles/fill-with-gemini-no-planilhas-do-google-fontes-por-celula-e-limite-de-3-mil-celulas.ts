import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "fill-with-gemini-no-planilhas-do-google-fontes-por-celula-e-limite-de-3-mil-celulas",
  title: "Fill with Gemini no Planilhas: fontes por célula e limites",
  seoTitle: "Fill with Gemini no Planilhas: fontes e limites",
  excerpt:
    "Fill with Gemini agora mostra a fonte da web em cada célula e aceita pedidos de até 3.000 células. Veja quem tem, como usar a função AI e onde ela falha.",
  metaDescription:
    "Fill with Gemini no Planilhas do Google: citações por célula, limite de 3.000 células por pedido, planos com acesso, como usar a função AI e cuidados para conferir.",
  category: "ferramentas",
  date: "2026-10-28",
  readTime: 7,
  imageQuery: "spreadsheet laptop data table closeup",
  seed: 882,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Desde 28/10/2026 o Google informa que o Fill with Gemini mostra, em cada célula, as fontes da web usadas e aceita pedidos de até 3.000 células.",
    "O recurso depende de plano: Business Standard e Plus, Enterprise Standard e Plus, Google AI Pro e Ultra, entre outros, com liberação gradual desde 20/10/2026.",
    "A função AI da planilha devolve só texto, não vê o resto do arquivo e pode errar, então a fonte por célula serve para conferir, não para dispensar a conferência.",
  ],
  content: `
    <p>O Fill with Gemini é o recurso do Planilhas Google que preenche várias células de uma vez a partir de uma instrução em texto, e agora ele mostra a fonte da web usada em cada célula. Segundo o <a href="https://workspaceupdates.googleblog.com/2026/10/fill-with-gemini-now-provides-cell-level-citations-for-web-sources-and-supports-larger-requests.html" target="_blank" rel="noopener noreferrer">anúncio do Google Workspace Updates</a> de 28/10/2026, o limite por pedido subiu para 3.000 células.</p>

    <p>Parece detalhe, mas muda o uso prático. Quem montava lista de fornecedores, descrição de produtos ou classificação de respostas tinha de aceitar o texto da IA sem saber de onde veio. Agora cada célula pode ser auditada. Este guia explica o que mudou, quem tem acesso, como usar a função AI e quais limites continuam valendo.</p>

    <h2>O que mudou no Fill with Gemini</h2>

    <p>O anúncio lista três mudanças. A primeira é a atribuição de fontes por célula: quando a função AI busca informação na web, o Gemini passa a indicar os endereços usados para aquela célula específica, e não só para o conjunto. A segunda é desempenho: o Google fala em processamento mais rápido e resultados mais consistentes de uma célula para outra. A terceira é o tamanho do pedido, que chegou a 3.000 células.</p>

    <p>As citações aparecem no Planilhas na web. O Google também cita um estudo interno com 95 participantes, em inglês, em que a tarefa de 500 células foi até 55 vezes mais rápida que o preenchimento manual. Esse número vem da própria empresa, com prompts em inglês, então trate como referência de potencial, não como promessa para o seu caso em português.</p>

    <p>Se você ainda não usa o Gemini dentro das planilhas, o guia sobre o <a href="/artigos/gemini-no-google-planilhas-no-iphone-e-android-como-usar-e-limites">Gemini no Google Planilhas no iPhone e no Android</a> mostra o básico e os limites no celular.</p>

    <h2>Quem tem acesso e quando chega</h2>

    <p>De acordo com o mesmo anúncio, consultado em 28/10/2026, o recurso vale para estes planos:</p>

    <table>
      <thead>
        <tr><th>Tipo</th><th>Planos citados</th></tr>
      </thead>
      <tbody>
        <tr><td>Empresas</td><td>Business Standard e Business Plus</td></tr>
        <tr><td>Corporativo</td><td>Enterprise Standard e Enterprise Plus</td></tr>
        <tr><td>Pessoa física</td><td>Google AI Pro e Google AI Ultra</td></tr>
        <tr><td>Educação</td><td>Google AI Pro for Education</td></tr>
        <tr><td>Complementos</td><td>AI Expanded Access</td></tr>
      </tbody>
    </table>

    <p>A liberação é gradual e começou em 20/10/2026, tanto para domínios em Rapid Release quanto em Scheduled Release. O Google avisa que o recurso pode levar até 15 dias para aparecer. Para administradores, o recurso vem ligado por padrão para quem já tem o Gemini no Planilhas habilitado. Se você está em dúvida entre os planos pessoais, o comparativo <a href="/artigos/google-ai-plus-pro-ou-ultra-qual-plano-do-gemini-escolher">Google AI Plus, Pro ou Ultra</a> ajuda a decidir, e o texto sobre o <a href="/artigos/menu-personalizar-do-gemini-skills-apps-e-controle-para-admins">menu Personalizar e o controle para admins</a> explica o lado de quem administra o domínio.</p>

    <h2>Como usar a função AI passo a passo</h2>

    <p>A <a href="https://support.google.com/docs/answer/15877199" target="_blank" rel="noopener noreferrer">página de ajuda da função AI</a>, consultada em 28/10/2026, descreve a sintaxe: AI("instrução", intervalo opcional). O intervalo é a parte da planilha a que a instrução se refere, e o Google recomenda informá-lo para melhorar a qualidade. A função =Gemini() funciona do mesmo jeito.</p>

    <ol>
      <li>Abra o Planilhas e digite a função em uma célula, ou use Inserir, Função, AI.</li>
      <li>Selecione a célula (ou o intervalo de células) com a função.</li>
      <li>Clique em Gerar e inserir. Para refazer, clique em Atualizar e inserir.</li>
      <li>Para ver as fontes da web de uma resposta, passe o mouse sobre o conteúdo e clique em Fontes.</li>
    </ol>

    <p>O botão Ask Gemini, no canto superior direito, abre o painel de conversa do Gemini no Planilhas. É por ele que o Google orienta o início do uso. Exemplos do próprio Google incluem gerar um slogan, resumir temas de um texto, classificar um e-mail como spam ou não e classificar o sentimento de uma mensagem como positivo, negativo ou neutro.</p>

    <h2>Um exemplo com números: lista de 400 produtos</h2>

    <p>Imagine a Camila, dona de uma loja de utilidades domésticas, com 400 produtos em uma planilha. Na coluna A está o nome do item, na B a categoria e na C ela quer uma frase curta de descrição para o anúncio. Em vez de escrever 400 frases, ela monta uma instrução e aplica à coluna. Em um plano que tenha o recurso, o pedido de 400 células cabe no limite de 3.000, mas o limite de geração por execução pode ser outro, como explicado adiante.</p>

    <pre><code>=AI("Escreva uma descrição de até 18 palavras para anúncio, em português do Brasil, sem prometer resultado e sem citar preço", A2)</code></pre>

    <p>Para a coluna de classificação de atendimento, o uso é parecido:</p>

    <pre><code>=AI("Classifique a mensagem do cliente como elogio, dúvida, reclamação ou pedido de troca. Responda só com uma dessas palavras.", D2)</code></pre>

    <p>Depois, a Camila separa uma amostra de 20 linhas e confere uma por uma antes de publicar. Esse hábito vale tempo: é rápido revisar 20 linhas e evita colocar um erro repetido 400 vezes no site. Para organizar o cadastro inteiro, o guia de <a href="/artigos/cadastro-de-produtos-para-loja-virtual-com-ia-servico-pacote-e-preco">cadastro de produtos para loja virtual com IA</a> traz um fluxo completo.</p>

    <h2>Limites que continuam valendo</h2>

    <p>A mesma página de ajuda lista restrições que o anúncio de 3.000 células não apaga. As respostas são só texto. A função enxerga apenas a instrução e o intervalo que você informa, não a planilha inteira nem outros arquivos do Drive. Não há como desfazer ou refazer a saída, só regenerar. Também não é possível usar a função aninhada dentro de outra, como dentro de um SE. E, segundo a página, apenas as primeiras 350 células AI selecionadas são geradas por execução.</p>

    <p>Existem ainda limites de curto e longo prazo; se bater no de longo prazo, a orientação é esperar 24 horas. A função não funciona quando o Planilhas é acessado por Box, Dropbox ou Egnyte. A mensagem "função AI não disponível" pode indicar plano sem acesso, bloqueio do administrador ou idioma sem suporte.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção aos dois números</span><p>O anúncio fala em até 3.000 células por pedido, e a página de ajuda fala em 350 células AI geradas por execução. Os textos têm datas diferentes e o Google não explica a relação entre os dois. Teste no seu plano com um lote pequeno antes de contar com o número maior.</p></div>

    <h2>Fonte por célula não é prova de que está certo</h2>

    <p>Ter o endereço da fonte ao lado do texto é um avanço, porque permite checar. Mas existem armadilhas. A fonte pode ser antiga, pode ser um site de baixa qualidade ou pode dizer algo diferente do que a IA resumiu. A própria Central de Ajuda do Gemini no Planilhas, em <a href="https://support.google.com/docs/answer/14218565" target="_blank" rel="noopener noreferrer">Collaborate with Gemini in Google Sheets</a>, avisa que o Gemini pode sugerir informações incorretas ou inadequadas e que não se deve tratar o resultado como conselho médico, jurídico ou financeiro.</p>

    <p>Um método simples: para dados que vão para o cliente, como preço, prazo, norma ou especificação, abra a fonte de pelo menos uma amostra e compare. Para dados internos, como classificação de mensagens, confira linhas ao acaso. O texto sobre o <a href="/artigos/prompt-injection-risco-de-ia-que-le-paginas-e-emails">risco de prompt injection</a> lembra que páginas lidas pela IA podem conter instruções escondidas, o que é mais um motivo para não aceitar a resposta no escuro.</p>

    <h2>Privacidade e arquivos compartilhados</h2>

    <p>A página de ajuda do Gemini no Planilhas informa que as conversas feitas no Planilhas não ficam salvas na Atividade do Gemini e que apagar o histórico do Planilhas não remove o que estiver guardado lá. Também alerta que, em arquivos compartilhados ou externos, o conteúdo adicionado pelo Gemini pode ser visto por pessoas fora do seu domínio.</p>

    <p>Na prática, não coloque na instrução nem no intervalo dados pessoais de clientes, documentos ou senhas sem necessidade. Se a planilha tem CPF, telefone ou endereço, avalie se é preciso mandar essas colunas para a IA. O <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher ferramenta de IA com segurança</a> serve de roteiro para essa decisão.</p>

    <h2>Quando usar e quando fazer na mão ou com fórmula</h2>

    <p>A função AI é boa para texto e classificação em volume: descrições, categorias, rascunhos de resposta, extração de uma informação de um texto curto. Para conta, a fórmula tradicional segue melhor, porque é exata, grátis e pode ser auditada. Se você quer entender fórmulas antes de entregar o trabalho para a IA, veja <a href="/artigos/aprender-planilhas-do-zero-com-ia-formulas-erros-e-exercicios">aprender planilhas do zero com IA</a> e o guia de <a href="/artigos/ia-para-planilhas-automatizar-relatorios-excel-sheets">IA para planilhas e relatórios automáticos</a>.</p>

    <p>Quem presta serviço de organização de dados pode usar o recurso para ganhar tempo, desde que revise e deixe claro ao cliente que a IA ajudou. O texto sobre <a href="/artigos/limpeza-e-padronizacao-de-planilhas-como-servico-pacote-preco-e-lgpd-com-ia">limpeza e padronização de planilhas como serviço</a> trata de pacote, preço e LGPD. E se a sua planilha vem de um banco de dados, leia como <a href="/artigos/planilha-conectada-ao-bigquery-com-gemini-perguntas-em-linguagem-natural-e-paineis">conectar a planilha ao BigQuery com o Gemini</a>.</p>

    <h2>Erros comuns</h2>

    <ul class="checklist">
      <li>Aplicar a função em 3.000 células sem testar 20 antes.</li>
      <li>Aceitar a fonte indicada sem abrir o link.</li>
      <li>Pedir cálculo à IA quando uma fórmula resolve com exatidão.</li>
      <li>Esquecer de definir o formato da resposta (uma palavra, uma frase de até 18 palavras).</li>
      <li>Enviar colunas com dados pessoais sem necessidade.</li>
      <li>Compartilhar o arquivo com gente de fora sem revisar o que o Gemini escreveu.</li>
    </ul>

    <p>Abra uma cópia da sua planilha, escolha uma coluna que hoje você preenche na mão e teste 20 linhas com a função AI. Se funcionar, amplie aos poucos. Para ver o que mais o Gemini faz com planilhas e dados, o guia do <a href="/artigos/grafico-de-caixa-no-google-planilhas-box-plot-quartis-e-outliers">gráfico de caixa no Google Planilhas</a> é um próximo passo e o de <a href="/artigos/google-apps-script-com-ia-servico-de-automacao-para-sheets-e-gmail">Google Apps Script com IA</a> mostra como automatizar o restante.</p>
  `,
  faq: [
    {
      question: "O que é o Fill with Gemini no Planilhas Google?",
      answer:
        "É o recurso que preenche várias células de uma vez a partir de uma instrução em texto, usando a função AI do Planilhas. Segundo o Google, em 28/10/2026 ele passou a mostrar as fontes da web usadas em cada célula e a aceitar pedidos de até 3.000 células.",
    },
    {
      question: "Fill with Gemini é grátis?",
      answer:
        "O Google lista planos pagos: Business Standard e Plus, Enterprise Standard e Plus, Google AI Pro e Ultra, Google AI Pro for Education e AI Expanded Access. O anúncio não cita plano gratuito. Verifique no seu Planilhas se o recurso apareceu, pois a liberação é gradual e pode levar até 15 dias.",
    },
    {
      question: "Qual o limite de células do Fill with Gemini?",
      answer:
        "O anúncio de 28/10/2026 fala em até 3.000 células por pedido. A página de ajuda da função AI informa que só as primeiras 350 células AI selecionadas são geradas por execução. Os números têm datas diferentes, então teste um lote pequeno no seu plano para saber o que vale.",
    },
    {
      question: "Como ver as fontes da web de uma célula?",
      answer:
        "Segundo a Central de Ajuda do Google, passe o mouse sobre o conteúdo gerado pela função AI e clique em Fontes. As citações por célula aparecem no Planilhas na web. Abra os links de uma amostra, porque a fonte pode ser antiga ou dizer algo diferente do resumo da IA.",
    },
    {
      question: "A função AI funciona em português?",
      answer:
        "A página de ajuda diz que a mensagem de função indisponível pode aparecer quando o idioma do Planilhas não é compatível, mas não lista os idiomas. O estudo de velocidade citado pelo Google usou prompts em inglês. Teste com instruções em português e revise uma amostra antes de aplicar em volume.",
    },
  ],
};
