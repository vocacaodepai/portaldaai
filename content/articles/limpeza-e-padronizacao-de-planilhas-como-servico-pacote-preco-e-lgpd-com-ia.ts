import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "limpeza-e-padronizacao-de-planilhas-como-servico-pacote-preco-e-lgpd-com-ia",
  title: "Limpeza de planilhas como serviço: pacote, preço e LGPD",
  seoTitle: "Limpeza de planilhas como serviço com IA",
  excerpt:
    "Veja como oferecer limpeza e padronização de planilhas de clientes com IA: o que entregar, como montar o pacote, como cobrar e como cuidar dos dados pessoais.",
  metaDescription:
    "Limpeza e padronização de planilhas como serviço freelancer: escopo, passo a passo no Google Planilhas com IA, exemplo de pacote, cobrança e cuidados com a LGPD.",
  category: "monetizacao",
  articleSubcategory: "freelance-servicos",
  date: "2026-10-25",
  readTime: 7,
  imageQuery: "messy spreadsheet cleanup freelancer laptop",
  seed: 639,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Limpar e padronizar planilha é um serviço simples de vender: o cliente já tem a bagunça, e você entrega uma base única, sem duplicatas, com datas, telefones e nomes no mesmo formato.",
    "A IA ajuda a descobrir os problemas, sugerir fórmulas e escrever as regras de padronização, mas as decisões sobre o que apagar ou juntar precisam ser conferidas por uma pessoa.",
    "Planilha de cliente quase sempre tem dados pessoais, então combine por escrito o que você pode ver, onde trabalha e o que apaga ao final, conforme a LGPD.",
  ],
  content: `
    <p>Limpeza e padronização de planilhas é um serviço de freelancer em que você recebe uma base de dados bagunçada, como lista de clientes, estoque ou financeiro, e devolve uma versão organizada: sem linhas repetidas, com datas, telefones e nomes no mesmo formato e com colunas que fazem sentido. Com a IA, o trabalho de descobrir os problemas e escrever as regras fica bem mais rápido.</p>

    <p>É um nicho concreto porque quase todo pequeno negócio tem uma planilha assim: três pessoas digitaram o mesmo cliente de três jeitos, o telefone ora tem DDD ora não tem, e ninguém sabe qual versão vale. Este guia mostra o escopo do serviço, o passo a passo no Google Planilhas, um pacote de exemplo, como cobrar sem prometer o que não dá para cumprir e os cuidados com dados de terceiros.</p>

    <h2>O que o cliente compra de verdade</h2>

    <p>O cliente não compra "limpeza de planilha". Ele compra a certeza de que pode fazer uma campanha, uma cobrança ou um fechamento de mês sem errar por causa de dado ruim. Por isso a entrega precisa ser descrita pelo resultado, e não pela tarefa.</p>

    <ul>
      <li><strong>Base única:</strong> uma versão final da planilha, sem registros duplicados.</li>
      <li><strong>Formato padrão:</strong> datas no mesmo formato, telefones com DDD, nomes sem espaços sobrando, categorias sem variações de escrita.</li>
      <li><strong>Colunas com regra:</strong> listas suspensas e validações para o erro não voltar.</li>
      <li><strong>Relatório do que mudou:</strong> uma aba curta dizendo quantas linhas foram unidas, corrigidas ou apagadas.</li>
    </ul>

    <p>Quem já domina o básico de fórmulas sai na frente. Se você ainda está aprendendo, o roteiro de <a href="/artigos/aprender-planilhas-do-zero-com-ia-formulas-erros-e-exercicios">aprender planilhas do zero com IA</a> é um bom começo, e o guia de <a href="/artigos/ia-para-planilhas-automatizar-relatorios-excel-sheets">IA para planilhas</a> mostra o que a IA consegue automatizar.</p>

    <h2>Passo a passo no Google Planilhas</h2>

    <p>Faça sempre uma cópia da planilha original antes de mexer. Essa é a primeira regra do serviço e deve estar no contrato. O Google descreve as ferramentas de limpeza na <a href="https://support.google.com/docs/answer/6325535?hl=pt-BR" target="_blank" rel="noopener noreferrer">página de ajuda para dividir texto, remover duplicatas e cortar espaços</a>: no menu Dados, em Limpeza de dados, ficam as opções de remover duplicatas e cortar espaços em branco, e há o recurso de dividir texto em colunas.</p>

    <ol>
      <li><strong>Diagnóstico:</strong> olhe 50 linhas e liste os problemas (duplicatas, espaços, maiúsculas e minúsculas, formatos de data, campos vazios).</li>
      <li><strong>Cortar espaços:</strong> selecione o intervalo e use Dados, Limpeza de dados, Cortar espaços em branco.</li>
      <li><strong>Padronizar texto:</strong> use fórmulas como MAIÚSCULA, MINÚSCULA e PRI.MAIÚSCULA numa coluna auxiliar para nomes e e-mails.</li>
      <li><strong>Separar dados:</strong> use Dividir texto em colunas quando houver "Nome - Cidade" no mesmo campo.</li>
      <li><strong>Remover duplicatas:</strong> escolha as colunas que definem um registro repetido, como e-mail ou CPF, e não só o nome.</li>
      <li><strong>Validar:</strong> aplique validação de dados nas colunas para limitar as respostas ao formato certo.</li>
    </ol>

    <p>A ajuda do Google avisa um ponto que pode causar prejuízo: valores idênticos são tratados como duplicados mesmo que a capitalização, a formatação ou as fórmulas sejam diferentes. Ou seja, duas pessoas com o mesmo nome podem ser tratadas como uma só se você escolher só a coluna de nome. Conferir antes de apagar é parte do trabalho.</p>

    <h2>Onde a IA entra e onde ela atrapalha</h2>

    <p>A IA é boa para três coisas: apontar padrões de erro numa amostra, escrever a fórmula ou regra que corrige o erro e explicar a fórmula para o cliente. Ela é ruim para decidir sozinha quem é duplicado, porque pode juntar "Ana Souza" de São Paulo com "Ana Souza" do Recife. O guia sobre o <a href="/artigos/gemini-no-google-planilhas-no-iphone-e-android-como-usar-e-limites">Gemini no Google Planilhas</a> mostra o que o assistente do próprio app faz.</p>

    <p>Prompt para o diagnóstico, usando uma amostra sem dados reais (troque nomes e números por exemplos fictícios do mesmo formato):</p>

    <pre><code>Abaixo estão 15 linhas de exemplo de uma planilha de clientes, com dados fictícios no mesmo formato da original. Liste os tipos de inconsistência que você vê (datas, telefones, nomes, duplicatas prováveis). Para cada tipo, sugira uma fórmula do Google Planilhas que corrija e diga o risco de errar. Não invente dados.</code></pre>

    <p>Prompt para a fórmula:</p>

    <pre><code>Na coluna C tenho telefones em formatos como "(11) 98888-7777", "11988887777" e "+55 11 98888 7777". Escreva uma fórmula do Google Planilhas que deixe todos no formato 11988887777, apenas números, e explique em linguagem simples o que cada parte faz.</code></pre>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Não cole a base real do cliente numa IA sem autorização dele e sem saber como a ferramenta trata os dados. Para diagnóstico, use amostra com dados trocados. Teste a fórmula na planilha real, dentro do ambiente combinado.</p></div>

    <h2>LGPD: dados de clientes que não são seus</h2>

    <p>Nome, telefone, e-mail e CPF são dados pessoais. Segundo o <a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" target="_blank" rel="noopener noreferrer">texto da Lei Geral de Proteção de Dados (Lei 13.709/2018)</a>, o tratamento deve seguir princípios como finalidade, necessidade e segurança, que pedem usar o mínimo de dados necessário e proteger contra acesso indevido. Na prática do freelancer, isso vira cláusulas simples no contrato.</p>

    <ul class="checklist">
      <li>Descrever que dados você vai acessar e para qual finalidade (limpar e padronizar, nada mais).</li>
      <li>Trabalhar numa cópia dentro do Drive do cliente, quando possível, em vez de baixar para o seu computador.</li>
      <li>Não repassar a base a terceiros nem usar para outra coisa, como marketing próprio.</li>
      <li>Apagar as cópias que estiverem com você ao fim do projeto e confirmar por escrito.</li>
      <li>Avisar o cliente de qualquer incidente, como perda de acesso ou vazamento.</li>
    </ul>

    <p>A <a href="https://www.gov.br/anpd/pt-br" target="_blank" rel="noopener noreferrer">página da ANPD</a> reúne informações oficiais e o canal de comunicação de incidentes. Se você quiser transformar a privacidade em outro serviço, veja o guia de <a href="/artigos/adequacao-a-lgpd-como-servico-para-pequenos-negocios-com-ia">adequação à LGPD como serviço</a> e o checklist de <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">LGPD para o pequeno negócio que usa IA</a>.</p>

    <h2>Como montar o pacote e cobrar</h2>

    <p>Defina o pacote pelo tamanho e pela sujeira da base, não pelas horas. Uma forma comum é três níveis. Os valores abaixo são um exemplo ilustrativo para você montar a sua conta, não uma tabela de mercado verificada nem promessa de ganho.</p>

    <table>
      <thead>
        <tr><th>Pacote</th><th>Escopo</th><th>Prazo</th><th>Exemplo de preço</th></tr>
      </thead>
      <tbody>
        <tr><td>Básico</td><td>Até 1.000 linhas, 1 aba, duplicatas e formatação</td><td>2 dias úteis</td><td>R$ 150</td></tr>
        <tr><td>Padrão</td><td>Até 5.000 linhas, até 3 abas, validação e aba de relatório</td><td>4 dias úteis</td><td>R$ 400</td></tr>
        <tr><td>Completo</td><td>Várias fontes unificadas, regras de entrada e treinamento de 30 min</td><td>7 dias úteis</td><td>R$ 800</td></tr>
      </tbody>
    </table>

    <p>Para chegar ao seu preço, some o tempo estimado, o valor da sua hora e uma margem para revisões, e confira com o guia de <a href="/artigos/como-precificar-produtos-e-servicos-com-ia">como precificar produtos e serviços com IA</a>. Escreva no contrato quantas rodadas de ajuste estão incluídas (uma ou duas) e o que conta como serviço extra, como juntar uma nova planilha depois de entregue.</p>

    <h2>Exemplo de projeto de ponta a ponta</h2>

    <p>Imagine uma loja de material de construção com uma lista de 2.300 clientes, montada por quatro atendentes em cinco anos. O diagnóstico acha 310 linhas prováveis de duplicata, telefones em cinco formatos e cidades escritas de várias formas. O freelancer cria a cópia, corta os espaços, padroniza os telefones com fórmula, junta as duplicatas com e-mail ou CPF iguais e marca em outra coluna os 40 casos duvidosos, que o dono revisa. A entrega inclui a aba de relatório com o antes e depois e uma coluna de origem para cada linha unida.</p>

    <p>Depois disso, o cliente pode enviar uma campanha sem repetir mensagem para a mesma pessoa, e você pode propor o próximo passo: um painel simples, como o do guia <a href="/artigos/dashboard-para-pequeno-negocio-com-ia-servico-pacotes-e-entrega">dashboard para pequeno negócio com IA</a>, ou uma manutenção mensal nos moldes do <a href="/artigos/retainer-de-automacao-mensalidade-suporte-e-contrato-para-freelancer">retainer de automação</a>.</p>

    <h2>Onde achar clientes</h2>

    <p>Comece por quem você conhece: lojas do bairro, clínicas, escolas de curso livre, associações. Mostre um antes e depois com dados fictícios, em vez de dados de cliente. Plataformas de freelas também funcionam, e o guia sobre <a href="/artigos/conseguir-clientes-no-99freelas-com-ia-perfil-proposta-e-preco">conseguir clientes no 99Freelas com IA</a> ajuda com o perfil e a proposta. Um serviço vizinho, com a mesma lógica, é o de <a href="/artigos/cadastro-de-produtos-para-loja-virtual-com-ia-servico-pacote-e-preco">cadastro de produtos para loja virtual</a>.</p>

    <h2>Erros comuns</h2>

    <ul>
      <li>Trabalhar na planilha original e perder a versão antiga.</li>
      <li>Remover duplicatas só pelo nome e juntar pessoas diferentes.</li>
      <li>Prometer "100% limpo" quando a origem do dado continua errada.</li>
      <li>Não deixar regras de entrada, o que faz a bagunça voltar em um mês.</li>
      <li>Colar dados reais em ferramentas de IA sem autorização.</li>
    </ul>

    <p>Quer ver outras formas de transformar o que você sabe em serviço? A categoria <a href="/categoria/monetizacao">Monetização</a> reúne os guias mais recentes, e o de <a href="/artigos/organizacao-de-arquivos-no-drive-como-servico-pacote-e-preco-com-ia">organização de arquivos no Drive como serviço</a> combina bem com este.</p>
  `,
  faq: [
    {
      question: "Quanto cobrar por limpeza de planilha?",
      answer:
        "Depende do número de linhas, de quão bagunçada está a base e do prazo. Uma forma segura é fechar pacotes por faixa de linhas e deixar claro o que conta como serviço extra. Calcule sua hora, some o tempo estimado e uma margem para revisões. Valores de exemplo servem de ponto de partida, não de tabela.",
    },
    {
      question: "Preciso saber programar para limpar planilhas?",
      answer:
        "Não. Para a maior parte dos casos bastam as ferramentas de limpeza do Google Planilhas e fórmulas básicas, como cortar espaços, padronizar texto e remover duplicatas. A IA ajuda a escrever e explicar fórmulas, mas você precisa testar cada uma na base real e conferir o resultado.",
    },
    {
      question: "Posso colar a planilha do cliente no ChatGPT ou no Gemini?",
      answer:
        "Só com autorização expressa do cliente e depois de entender como a ferramenta trata os dados. O caminho mais seguro é usar uma amostra com dados trocados para o diagnóstico e aplicar as fórmulas na planilha real. Planilhas de clientes costumam ter dados pessoais protegidos pela LGPD.",
    },
    {
      question: "O que a LGPD exige de quem presta esse serviço?",
      answer:
        "A lei prevê princípios como finalidade, necessidade e segurança no tratamento de dados pessoais. Na prática, combine por escrito quais dados você acessa e para quê, proteja os arquivos, não use a base para outra finalidade e apague as cópias ao final. Em caso de dúvida jurídica, consulte um advogado.",
    },
    {
      question: "Como evitar apagar registros que não eram duplicados?",
      answer:
        "Trabalhe numa cópia, escolha para remover duplicatas as colunas que identificam de verdade uma pessoa, como e-mail ou CPF, e não só o nome. A ajuda do Google lembra que valores idênticos contam como duplicados. Marque os casos duvidosos em uma coluna e peça que o cliente confirme.",
    },
  ],
};
