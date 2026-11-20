import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "planilha-conectada-ao-bigquery-com-gemini-perguntas-em-linguagem-natural-e-paineis",
  title: "Gemini no Planilhas com BigQuery: perguntas e painéis prontos",
  seoTitle: "Gemini no Planilhas com BigQuery: como usar e limites",
  excerpt:
    "O Gemini no Google Planilhas agora analisa dados do BigQuery em linguagem natural: veja quem tem, como conectar, o que perguntar e os limites antes de confiar.",
  metaDescription:
    "Gemini no Google Planilhas com BigQuery: quem tem acesso, como conectar via Planilhas conectadas, exemplos de perguntas, painéis atualizáveis e os limites a conhecer.",
  category: "ferramentas",
  date: "2026-10-25",
  readTime: 6,
  imageQuery: "analyst dashboard laptop charts",
  seed: 714,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O Gemini no Google Planilhas passou a responder perguntas sobre dados do BigQuery em linguagem natural, rodando a consulta na base completa e não só nas linhas visíveis na planilha.",
    "Para usar, a planilha precisa estar conectada ao BigQuery pelas Planilhas conectadas e quem pergunta precisa ter permissão de consulta nos dados.",
    "O painel que o Gemini monta (fórmulas de banco de dados, tabelas dinâmicas e gráficos) pode atualizar sozinho, mas a resposta continua exigindo revisão humana.",
  ],
  content: `
    <p>O Gemini no Google Planilhas com BigQuery permite fazer perguntas em português sobre uma base de dados enorme e receber a resposta dentro da planilha. Segundo o <a href="https://workspaceupdates.googleblog.com/2026/10/analyze-bigquery-data-using-natural-language-with-Gemini-in-Google-Sheets.html" target="_blank" rel="noopener noreferrer">anúncio do Google Workspace Updates</a>, as consultas rodam na base completa do BigQuery, e não apenas no que está visível na planilha.</p>

    <p>A novidade começou a chegar em 19 de outubro de 2026, de forma gradual. Ela interessa a quem já guarda vendas, estoque ou campanhas no BigQuery e vive pedindo relatório a alguém da área técnica. Este guia mostra quem tem acesso, como conectar, o que perguntar e onde estão os limites.</p>

    <h2>O que muda com o Gemini no Planilhas conectado ao BigQuery</h2>

    <p>Até agora, o Gemini no Planilhas trabalhava sobre o que estava na própria planilha. O <a href="/artigos/gemini-no-google-planilhas-no-iphone-e-android-como-usar-e-limites">Gemini no Planilhas para iPhone e Android</a> segue essa lógica: tabelas, fórmulas, gráficos e resumos de arquivos. Com a conexão ao BigQuery, o assistente passa a consultar o banco inteiro por trás da planilha.</p>

    <p>O Google descreve três usos. O primeiro é perguntar em linguagem natural, como "qual foi o total de vendas na região Sul no terceiro trimestre". O segundo é continuar a conversa para comparar resultados e achar o que causou uma variação. O terceiro é pedir um painel: o Gemini mostra um plano para você revisar e depois cria uma aba nova com objetos conectados e atualizáveis, entre eles fórmulas de banco de dados, tabelas dinâmicas e gráficos.</p>

    <p>Na prática, o que muda é quem consegue olhar o dado. Quem sabe SQL continua tendo vantagem, mas quem só domina planilha ganha um caminho para consultar uma base grande sem pedir ajuda para cada pergunta.</p>

    <h2>Quem tem acesso e como está o lançamento</h2>

    <p>Conforme o anúncio (consultado em 25/10/2026), o recurso vale para os planos Business Standard e Plus, Enterprise Standard e Plus do Google Workspace, para assinantes de Google AI Pro e Ultra, para o complemento Google AI Pro for Education e para o AI Expanded Access. Para comparar os planos de consumo, veja o <a href="/artigos/google-ai-plus-pro-ou-ultra-qual-plano-do-gemini-escolher">guia dos planos Google AI</a>.</p>

    <table>
      <thead><tr><th>Item</th><th>O que o Google informa</th></tr></thead>
      <tbody>
        <tr><td>Início do lançamento</td><td>19 de outubro de 2026, gradual</td></tr>
        <tr><td>Tempo para aparecer</td><td>Até 15 dias de visibilidade</td></tr>
        <tr><td>Padrão</td><td>Ligado por padrão</td></tr>
        <tr><td>Controle do administrador</td><td>Não há</td></tr>
        <tr><td>Pré-requisito</td><td>Planilha conectada ao BigQuery</td></tr>
      </tbody>
    </table>

    <p>O ponto que merece atenção do TI é o último da lista de configuração: não existe chave de administrador para desligar isso. O controle real fica nas permissões do BigQuery, que continuam valendo para cada pessoa.</p>

    <h2>Como conectar a planilha ao BigQuery, passo a passo</h2>

    <p>O Gemini só entra em cena depois que a planilha está ligada ao banco por meio das Planilhas conectadas. A <a href="https://support.google.com/docs/answer/9702507" target="_blank" rel="noopener noreferrer">página de ajuda do Google sobre dados do BigQuery no Planilhas</a> lista os requisitos: acesso ao Google Cloud, acesso ao BigQuery, um projeto com faturamento configurado (ou um ambiente de teste, o sandbox) e as permissões do conjunto de dados.</p>

    <ol>
      <li>Abra uma planilha no Google Planilhas com a conta que tem acesso ao projeto.</li>
      <li>Use a opção de dados para conectar ao BigQuery e escolha o projeto, o conjunto de dados e a tabela.</li>
      <li>Aguarde a criação da tabela conectada e confira se as colunas aparecem.</li>
      <li>Abra o painel lateral do Gemini e escreva sua primeira pergunta.</li>
    </ol>

    <p>Detalhe importante da mesma página: a planilha não altera os dados do BigQuery. Você só lê. O acesso fica registrado nos logs de auditoria do Google Cloud, e o VPC Service Controls pode bloquear a conexão se a organização não liberar as consultas das Planilhas conectadas.</p>

    <h2>Perguntas e prompts para testar no Gemini</h2>

    <p>Exemplo brasileiro: uma loja de material de construção em Campinas exporta pedidos para o BigQuery todo dia. A dona quer saber, sem esperar o analista, quais categorias perderam venda em setembro. Ela abre a planilha conectada e escreve o prompt abaixo.</p>

    <pre><code>Qual foi o faturamento por categoria em setembro de 2026 e como ele se compara a agosto? Mostre só as categorias que caíram e informe a variação em reais e em percentual.</code></pre>

    <p>Depois, em vez de abrir uma nova consulta, ela continua a conversa para achar a causa.</p>

    <pre><code>Dentro da categoria que mais caiu, quais produtos explicam a queda? Liste os cinco maiores e diga quantos pedidos tiveram em cada mês.</code></pre>

    <p>Por fim, pede o painel. O Gemini apresenta um plano e só cria a aba depois da revisão.</p>

    <pre><code>Monte um painel mensal com faturamento por categoria, ticket médio por pedido e os dez produtos mais vendidos. Use tabelas dinâmicas e gráficos que atualizem quando os dados mudarem.</code></pre>

    <p>Quem está começando em fórmulas e tabelas dinâmicas pode treinar antes com o guia de <a href="/artigos/aprender-planilhas-do-zero-com-ia-formulas-erros-e-exercicios">planilhas do zero com IA</a>.</p>

    <h2>Painéis que se atualizam e o que o Gemini não faz sozinho</h2>

    <p>A promessa de painel atualizável é o ponto mais útil para quem monta relatório todo mês. As fórmulas de banco de dados, as tabelas dinâmicas e os gráficos criados ficam ligados ao BigQuery, e o anúncio cita atualizações agendadas para manter os números em dia.</p>

    <p>Mas há limites gerais do Gemini no Planilhas descritos na <a href="https://support.google.com/docs/answer/14356410" target="_blank" rel="noopener noreferrer">página de ajuda do Google sobre colaborar com o Gemini</a>. As sugestões podem ser imprecisas, e o Google pede revisão antes de depender delas. O histórico da conversa se perde ao recarregar a página, então vale inserir na planilha o que for importante. Gráficos gerados no chat nem sempre ficam ligados à fonte de dados, ao contrário dos objetos do painel conectado.</p>

    <p>Se você presta serviço de relatórios para outras empresas, o <a href="/artigos/dashboard-para-pequeno-negocio-com-ia-servico-pacotes-e-entrega">guia de dashboard como serviço</a> mostra como transformar isso em pacote com escopo e preço.</p>

    <h2>Erros comuns e cuidados antes de confiar no resultado</h2>

    <p>O maior risco é aceitar um número que parece certo e não é. O Gemini interpreta a pergunta e escreve a consulta por você, e uma pergunta ambígua gera uma consulta que responde outra coisa. "Vendas" pode ser pedido feito, pedido pago ou pedido entregue, e a diferença muda o resultado.</p>

    <ul class="checklist">
      <li>Defina na pergunta o período, a métrica e o filtro (pedidos pagos, por exemplo).</li>
      <li>Compare uma resposta do Gemini com um total que você já conhece antes de usar o painel.</li>
      <li>Confira se a tabela conectada tem os campos certos, porque o assistente só enxerga o que foi conectado.</li>
      <li>Peça para o Gemini explicar como chegou ao número e leia a explicação.</li>
      <li>Guarde a consulta ou o plano quando o resultado for virar decisão de compra ou de preço.</li>
    </ul>

    <p>O <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">guia sobre alucinação de IA</a> traz um método simples de checagem que serve aqui. Se a base tiver dados de clientes, cuide também da privacidade: o <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">checklist de LGPD para pequenos negócios</a> mostra o que revisar. Em arquivos compartilhados ou externos, o conteúdo gerado pelo Gemini pode ficar visível para pessoas de fora da sua organização, segundo a ajuda do Google.</p>

    <h2>Quando usar e quando ficar na planilha comum</h2>

    <p>Se os seus dados cabem numa planilha de poucas mil linhas, o BigQuery é exagero. Nesse caso o Gemini no Planilhas comum, o <a href="/artigos/fluxo-de-caixa-com-ia-guia-pequenos-negocios">fluxo de caixa com IA</a> e o <a href="/artigos/dre-simples-com-ia-ler-o-lucro-do-pequeno-negocio-mes-a-mes">DRE simples</a> resolvem. O BigQuery passa a compensar quando os dados vêm de sistemas diferentes, crescem todo dia ou já estão na nuvem do Google, e quando mais de uma pessoa precisa olhar a mesma fonte.</p>

    <p>Também vale ter regras de uso. Defina quem pode conectar planilhas a bases de dados e quem revisa os painéis antes de irem para a diretoria. As <a href="/artigos/instrucoes-personalizadas-do-gemini-no-workspace-onde-valem-e-como-gerenciar">instruções personalizadas do Gemini no Workspace</a> ajudam a padronizar o tom e o formato das respostas, mas não substituem a revisão de números.</p>

    <p>Para o próximo passo, abra uma planilha conectada a uma tabela pequena, faça três perguntas cujo resultado você já sabe e só depois peça um painel. Se quiser entender o ecossistema ao redor, veja também o <a href="/artigos/ask-gemini-no-google-chat-o-que-faz-quem-tem-e-limites">Ask Gemini no Google Chat</a>.</p>
  `,
  faq: [
    {
      question: "O Gemini no Google Planilhas funciona com BigQuery?",
      answer:
        "Sim. Depois que a planilha é conectada ao BigQuery pelas Planilhas conectadas, o Gemini responde perguntas em linguagem natural e as consultas rodam na base completa. O recurso começou a ser liberado em 19 de outubro de 2026, de forma gradual, e pode levar até 15 dias para aparecer.",
    },
    {
      question: "Quem tem o Gemini com BigQuery no Planilhas?",
      answer:
        "Segundo o Google, vale para Business Standard e Plus, Enterprise Standard e Plus, Google AI Pro e Ultra, Google AI Pro for Education e AI Expanded Access. A informação foi consultada em 25/10/2026 e pode mudar, então confirme na página oficial do seu plano.",
    },
    {
      question: "O administrador consegue desligar esse recurso?",
      answer:
        "O anúncio informa que o recurso vem ligado por padrão e que não há controle de administrador específico para ele. O acesso aos dados continua limitado pelas permissões e funções do BigQuery de cada usuário, e as consultas ficam registradas nos logs de auditoria do Google Cloud.",
    },
    {
      question: "O Gemini pode alterar os dados do BigQuery?",
      answer:
        "Não. A página de ajuda do Google sobre dados do BigQuery no Planilhas informa que não é possível alterar os dados do BigQuery a partir da planilha. Você consulta, analisa e visualiza, e a escrita de dados continua sendo feita pelas ferramentas do próprio BigQuery.",
    },
    {
      question: "Preciso saber SQL para usar?",
      answer:
        "Não é obrigatório, porque você escreve a pergunta em português e o Gemini monta a consulta. Mas conhecer o básico de filtros e agrupamentos ajuda a escrever perguntas claras e a perceber quando o resultado não faz sentido, o que continua sendo responsabilidade de quem usa.",
    },
  ],
};
