import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "formulario-de-pedido-e-orcamento-como-servico-google-forms-planilha-e-aviso-com-ia",
  title: "Formulário de pedido como serviço: Google Forms, planilha e IA",
  seoTitle: "Formulário de pedido como serviço com Google Forms",
  excerpt:
    "Veja como vender formulário de pedido e orçamento para pequenos negócios com Google Forms e Planilhas: escopo, preço de referência, LGPD e o papel da IA.",
  metaDescription:
    "Formulário de pedido como serviço: monte Google Forms ligado à planilha, defina escopo e preço de referência, cuide da LGPD e use IA para perguntas e resumos.",
  category: "monetizacao",
  articleSubcategory: "automacao-e-agentes",
  date: "2026-10-27",
  readTime: 7,
  imageQuery: "small business owner laptop spreadsheet orders",
  seed: 832,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Um formulário de pedido ou orçamento ligado a uma planilha tira o cliente do vai e vem de mensagens soltas e é um serviço que um iniciante consegue entregar com ferramentas gratuitas do Google.",
    "O Google Forms permite enviar as respostas para uma planilha, limitar a uma resposta por pessoa, personalizar a mensagem de confirmação e publicar ou despublicar o formulário.",
    "A IA ajuda a escrever perguntas, resumir pedidos e responder o cliente, mas o dono do negócio decide o preço, o prazo e o que pode ser prometido, e os dados do cliente seguem a LGPD.",
  ],
  content: `
    <p>Formulário de pedido como serviço é a montagem, para um pequeno negócio, de um formulário online (por exemplo no Google Forms) ligado a uma planilha, para que pedidos e pedidos de orçamento cheguem completos e organizados. Quem entrega isso cobra pela configuração e por uma pequena manutenção mensal, usando ferramentas gratuitas do Google e uma IA para acelerar o texto.</p>

    <p>A dor do cliente é concreta: a confeiteira recebe pedido por áudio, a marcenaria recebe medida pela metade, o prestador de serviço esquece quem pediu o quê. Neste guia você vê o que entregar, como montar passo a passo, que faixa de preço faz sentido como referência, o cuidado com os dados dos clientes e como a IA entra sem prometer o que não pode. Nada aqui garante renda: o resultado depende de achar clientes e entregar bem.</p>

    <h2>O que é e por que pequenos negócios pagam por isso</h2>

    <p>O formulário de pedido faz as perguntas certas, na ordem certa, para todo cliente: nome, contato, o que quer, quantidade, data de entrega, endereço e observações. As respostas caem numa planilha, uma linha por pedido. O dono deixa de reler conversas de WhatsApp para descobrir o que foi combinado. Para o cliente final, fica claro o que precisa informar.</p>

    <p>É um serviço de baixa complexidade técnica, mas com valor de organização. Funciona para confeitarias, marcenarias, lojas de encomenda, eletricistas, fotógrafos, salões e profissionais liberais. Se você já tem experiência com planilhas, combina com o serviço de <a href="/artigos/limpeza-e-padronizacao-de-planilhas-como-servico-pacote-preco-e-lgpd-com-ia">limpeza e padronização de planilhas</a>, e quem quer ir além na automação pode olhar o <a href="/artigos/google-apps-script-com-ia-servico-de-automacao-para-sheets-e-gmail">Google Apps Script com IA</a>.</p>

    <h2>O que o Google Forms faz de verdade</h2>

    <p>A <a href="https://support.google.com/docs/answer/6281888?hl=pt-BR" target="_blank" rel="noopener noreferrer">página de ajuda do Google Forms</a>, consultada em 27/10/2026, explica que você cria o formulário em forms.google.com, no Planilhas ou no Drive, edita perguntas, publica e envia a quem vai responder. As respostas podem virar gráficos ou ser abertas no Planilhas.</p>

    <p>Outra <a href="https://support.google.com/docs/answer/2917686?hl=pt-BR" target="_blank" rel="noopener noreferrer">página oficial sobre respostas</a> mostra que, na aba Respostas, você escolhe um destino para as respostas, criando uma planilha nova ou usando uma existente. Dá para ver o resumo ou cada resposta individualmente, e desvincular a planilha depois, mantendo os dados já gravados.</p>

    <p>Uma terceira página, sobre <a href="https://support.google.com/docs/answer/2839588?hl=pt-BR" target="_blank" rel="noopener noreferrer">publicar e compartilhar</a>, lista configurações úteis para esse serviço: limitar a uma resposta por pessoa, permitir que o respondente edite a resposta, mostrar resumo e personalizar a mensagem de confirmação. Também permite gerar link com respostas preenchidas e inserir o formulário num site.</p>

    <h2>Passo a passo para entregar o serviço</h2>

    <ol>
      <li><strong>Entenda o pedido típico.</strong> Peça ao dono 5 pedidos recentes e veja o que faltou em cada um.</li>
      <li><strong>Liste as perguntas essenciais.</strong> De 8 a 12 campos, no máximo. Cada campo extra derruba o preenchimento.</li>
      <li><strong>Monte o formulário.</strong> Use respostas curtas, múltipla escolha e lista suspensa quando possível, para a planilha ficar limpa.</li>
      <li><strong>Ligue à planilha.</strong> Escolha o destino das respostas e crie colunas extras ao lado: status, valor, data de entrega confirmada.</li>
      <li><strong>Configure a mensagem de confirmação.</strong> Diga o que acontece depois: "Recebemos seu pedido e respondemos em até 1 dia útil".</li>
      <li><strong>Publique e teste.</strong> Preencha 3 pedidos de teste, um deles com erro de propósito.</li>
      <li><strong>Entregue um manual de uma página.</strong> Mostre como ver pedidos, mudar status e pausar o formulário.</li>
    </ol>

    <p>Para decidir como o pedido chega ao cliente por mensagem, o guia de <a href="/artigos/whatsapp-business-para-pequeno-negocio-catalogo-etiquetas-e-respostas">WhatsApp Business para pequeno negócio</a> mostra respostas rápidas e etiquetas que complementam o formulário.</p>

    <h2>Onde a IA ajuda e onde não ajuda</h2>

    <p>A IA acelera três partes: escrever as perguntas, resumir os pedidos e redigir respostas ao cliente. Para pedir isso bem, vale conhecer o <a href="/artigos/ia-para-orcamentos-e-cotacoes-responder-clientes-rapido">guia de IA para orçamentos e cotações</a>. Prompts para usar com o dono do negócio:</p>

    <pre><code>Sou prestador de serviço e vou montar um formulário de pedido para uma confeitaria que vende bolos por encomenda. Liste de 8 a 10 perguntas, em ordem, para o cliente responder sem precisar de conversa depois. Indique quais devem ser obrigatórias e quais devem ser lista de opções. Não invente preços.</code></pre>

    <pre><code>Resuma este pedido em até 3 linhas para a equipe de produção: quantidade, data, restrições e o que ainda precisa ser confirmado. Se faltar informação, liste as perguntas para o cliente.

Pedido: (cole aqui, sem CPF nem endereço completo)</code></pre>

    <p>A IA não decide preço nem prazo. Ela também pode inventar um campo que não faz sentido para o ramo, então teste o formulário como se fosse o cliente. Um exemplo de fluxo parecido está no serviço de <a href="/artigos/confirmacao-de-consultas-e-lembretes-como-servico-google-agenda-whatsapp-e-ia">confirmação de consultas e lembretes</a>.</p>

    <h2>LGPD: o formulário coleta dados pessoais</h2>

    <p>Nome, telefone e endereço são dados pessoais. A <a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm" target="_blank" rel="noopener noreferrer">Lei Geral de Proteção de Dados</a> define dado pessoal como informação relacionada a pessoa natural identificada ou identificável, e traz entre os princípios a finalidade (propósitos legítimos, específicos e informados) e a necessidade (limitar ao mínimo necessário).</p>

    <p>Na prática, isso vira regra de projeto: pergunte só o que o pedido exige, escreva no formulário para que o dado será usado, restrinja quem acessa a planilha e não peça CPF, data de nascimento ou documento sem necessidade. O <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">checklist de LGPD para pequeno negócio</a> detalha o que revisar. Não cole dados de clientes em ferramentas de IA sem anonimizar.</p>

    <h2>Quanto cobrar: faixa de referência, não tabela</h2>

    <p>Não existe preço oficial para esse serviço. Os valores abaixo são exemplos para você pensar o escopo e não tabela de mercado, e devem ser ajustados à sua região, ao seu tempo e ao tamanho do cliente.</p>

    <table>
      <thead>
        <tr><th>Pacote</th><th>O que inclui</th><th>Referência de lógica de preço</th></tr>
      </thead>
      <tbody>
        <tr><td>Básico</td><td>Formulário com até 10 campos, planilha ligada, mensagem de confirmação</td><td>Valor fixo pelo tempo de 3 a 4 horas de trabalho</td></tr>
        <tr><td>Completo</td><td>Básico mais colunas de status, painel simples e manual em PDF</td><td>Valor fixo pelo tempo de 6 a 8 horas</td></tr>
        <tr><td>Manutenção</td><td>Ajustes, backup e suporte de dúvidas</td><td>Mensalidade pequena e previsível</td></tr>
      </tbody>
    </table>

    <p>Para calcular sua hora de forma realista, o texto sobre <a href="/artigos/como-precificar-servicos-usando-ia-no-trabalho">precificar serviços com IA</a> ajuda. Para formalizar mensalidade e suporte, veja o modelo de <a href="/artigos/retainer-de-automacao-mensalidade-suporte-e-contrato-para-freelancer">retainer de automação</a>.</p>

    <h2>Exemplo: confeitaria com 12 pedidos por semana</h2>

    <p>Uma confeitaria recebe, em média, 12 pedidos por semana pelo WhatsApp e perde uns 15 minutos em cada para fechar tamanho, sabor, data e retirada. Com o formulário, o cliente responde tudo em 2 minutos e o pedido cai na planilha com status "novo". A dona dedica uns 5 minutos por pedido a confirmar e responder. Em teoria, a economia seria de cerca de 2 horas por semana (12 pedidos vezes 10 minutos), mas esse número é uma conta de exemplo e muda conforme o negócio.</p>

    <p>O ponto que importa para você é o seguinte: o valor do serviço está em tirar o retrabalho do dono, e não na tecnologia. Mostre o antes e o depois com os pedidos reais dele. Se quiser ampliar a venda, o texto sobre <a href="/artigos/como-vender-pacotes-de-automacao-de-ia-para-negocios-locais">pacotes de automação para negócios locais</a> traz argumentos.</p>

    <h2>Erros comuns</h2>

    <ul class="checklist">
      <li>Formulário com 25 perguntas: o cliente desiste e volta para o WhatsApp.</li>
      <li>Campo de texto livre onde caberia lista de opções, o que deixa a planilha bagunçada.</li>
      <li>Planilha compartilhada com "qualquer pessoa com o link" sem necessidade.</li>
      <li>Prometer "automação com IA" sem definir o que muda no dia a dia do dono.</li>
      <li>Não testar com pedido errado, com campo vazio ou com acento e símbolo.</li>
      <li>Entregar sem manual e depois virar suporte de graça.</li>
    </ul>

    <h2>Como achar os primeiros clientes</h2>

    <p>Comece pelo comércio que você conhece: o salão do bairro, a oficina, a loja de encomendas. Mostre um formulário de demonstração pronto, com dois pedidos de exemplo. Plataformas como o 99Freelas também aceitam esse tipo de serviço, e o guia de <a href="/artigos/conseguir-clientes-no-99freelas-com-ia-perfil-proposta-e-preco">clientes no 99Freelas com IA</a> mostra como montar perfil e proposta. Para fechar com segurança, use uma proposta clara, como no texto de <a href="/artigos/propostas-comerciais-com-ia-como-fechar-mais-contratos">propostas comerciais com IA</a>.</p>

    <p>Se a ideia é automatizar além do formulário, compare <a href="/artigos/make-ou-zapier-qual-automacao-com-ia-vale-mais-a-pena">Make ou Zapier</a> antes de prometer integrações pagas. Veja mais ideias de serviços para vender na <a href="/categoria/monetizacao">categoria Monetização</a>.</p>
  `,
  faq: [
    {
      question: "Como ligar o Google Forms a uma planilha?",
      answer:
        "Abra o formulário, entre na aba Respostas e use a opção de selecionar o destino das respostas. Você pode criar uma planilha nova ou escolher uma existente. Segundo a ajuda do Google, é possível desvincular depois sem perder os dados já gravados.",
    },
    {
      question: "O Google Forms é gratuito?",
      answer:
        "O Google Forms pode ser usado com uma conta Google pessoal sem cobrança direta pelo serviço em si. Alguns recursos mudam conforme o tipo de conta, especialmente em contas de trabalho. Confirme na página oficial o que a sua conta oferece antes de prometer algo ao cliente.",
    },
    {
      question: "Formulário de pedido precisa seguir a LGPD?",
      answer:
        "Sim, quando coleta dados de pessoas, como nome, telefone e endereço. A lei traz princípios como finalidade e necessidade: peça só o que o pedido exige e informe para que o dado será usado. Restrinja o acesso à planilha e evite pedir documentos sem motivo.",
    },
    {
      question: "Dá para usar IA para criar as perguntas do formulário?",
      answer:
        "Dá, e acelera bastante. Descreva o tipo de negócio, peça de 8 a 10 perguntas em ordem e marque as obrigatórias. Depois teste como se fosse o cliente, porque a IA pode sugerir campos que não fazem sentido para o ramo. Preços e prazos continuam sendo decisão do dono.",
    },
    {
      question: "Quanto cobrar por um formulário de pedido?",
      answer:
        "Não há tabela oficial. Calcule o tempo de entrega, some o suporte inicial e adicione uma mensalidade pequena de manutenção, se o cliente quiser. Ajuste ao tamanho do negócio e à sua região. Evite prometer ganhos ao cliente, porque o formulário organiza pedidos, mas não gera vendas sozinho.",
    },
  ],
};
