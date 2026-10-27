import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "reativar-clientes-inativos-com-ia-lista-mensagem-e-oferta-sem-incomodar",
  title: "Reativar clientes inativos com IA: lista, mensagem e oferta",
  seoTitle: "Reativar clientes inativos com IA: passo a passo",
  excerpt:
    "Reativar clientes inativos custa menos do que atrair novos. Veja como montar a lista, escrever a mensagem com IA, definir a oferta e respeitar o opt-out.",
  metaDescription:
    "Como reativar clientes inativos com IA no pequeno negócio: separe a lista por tempo sem compra, escreva as mensagens, calcule a oferta e evite bloqueio.",
  category: "negocios",
  articleSubcategory: "retencao-e-experiencia",
  date: "2026-10-23",
  readTime: 7,
  imageQuery: "shop owner reviewing customer list tablet",
  seed: 600,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Reativar cliente inativo é chamar de volta quem já comprou e sumiu, e começa por uma lista separada por tempo sem compra, não por uma mensagem em massa para todo mundo.",
    "A IA ajuda a escrever mensagens curtas e personalizadas por grupo, mas o envio só deve ir para quem deu permissão, e quem pedir para sair precisa ser removido na hora.",
    "A oferta precisa caber na margem: uma conta simples de custo e desconto evita reativar cliente com prejuízo.",
  ],
  content: `
    <p>Reativar clientes inativos é chamar de volta quem já comprou de você e parou de aparecer, com uma mensagem útil e uma razão clara para voltar. O caminho é separar a lista por tempo sem compra, escrever um texto diferente para cada grupo, fazer uma oferta que caiba na margem e respeitar quem não quer receber contato.</p>

    <p>A IA entra no meio desse processo: ela organiza a lista, sugere o motivo do contato e escreve versões curtas da mensagem no tom da sua loja. O que decide o resultado, porém, é a combinação de lista limpa, permissão e oferta honesta. Este guia monta o processo em uma tarde, com exemplo de números, prompts e os erros que levam ao bloqueio.</p>

    <h2>Por que vale reativar antes de buscar clientes novos</h2>

    <p>O blog do <a href="https://www.sebrae-sc.com.br/blog/como-fidelizar-clientes" target="_blank" rel="noopener noreferrer">Sebrae de Santa Catarina sobre fidelização</a>, consultado em 23/10/2026, afirma que manter clientes costuma custar menos do que conquistar novos, porque a empresa precisa de menos gasto com anúncios e marketing. O texto também cita um estudo da Harvard Business School, segundo o qual um aumento de 5% na retenção pode elevar o lucro entre 25% e 95%. É um número atribuído a um estudo antigo e depende do tipo de negócio, então use como direção, não como meta.</p>

    <p>Na prática de uma loja pequena, o raciocínio é concreto. O cliente que já comprou conhece o produto, confia o suficiente para ter pago uma vez e já está na sua base. Anúncio para desconhecido paga a atenção de novo; uma mensagem para quem já te conhece paga só o seu tempo. Por isso a reativação costuma ser a primeira ação de retenção a testar, antes de pensar em programa de pontos, tema do guia sobre <a href="/artigos/como-usar-ia-para-fidelizar-clientes-programa-de-recompensas">fidelizar clientes com programa de recompensas</a>.</p>

    <p>Também é mais barata do que corrigir um problema grave. Se o cliente parou de comprar por causa de uma experiência ruim, a conversa certa é outra, e o texto sobre <a href="/artigos/como-usar-ia-para-reduzir-cancelamento-de-clientes">como reduzir cancelamento de clientes com IA</a> mostra como identificar os sinais.</p>

    <h2>Passo 1: defina quem é inativo e monte a lista</h2>

    <p>Inativo não tem definição única. Para uma loja de roupas, 90 dias sem compra podem ser comuns; para uma cafeteria, 30 dias já é sumiço; para uma assistência técnica, 12 meses talvez seja normal. Olhe o intervalo típico entre duas compras do seu negócio e chame de inativo quem passou cerca de duas vezes esse intervalo sem voltar.</p>

    <p>Exporte do seu sistema, planilha ou caderno de pedidos as colunas nome, contato, data da última compra, produto comprado e valor gasto. Depois separe em três grupos:</p>

    <table>
      <thead>
        <tr><th>Grupo</th><th>Critério (exemplo)</th><th>Objetivo da mensagem</th></tr>
      </thead>
      <tbody>
        <tr><td>Esfriando</td><td>90 a 150 dias sem comprar</td><td>Lembrar com utilidade: reposição, novidade, dica</td></tr>
        <tr><td>Adormecido</td><td>150 a 365 dias</td><td>Oferta com prazo curto e motivo claro</td></tr>
        <tr><td>Perdido</td><td>Mais de 365 dias</td><td>Pedir permissão para continuar ou se despedir</td></tr>
      </tbody>
    </table>

    <p>Se a sua planilha é bagunçada, a IA pode ajudar a limpar duplicados, padronizar telefones e identificar os melhores compradores do grupo, tarefa parecida com a do <a href="/artigos/ia-para-planilhas-automatizar-relatorios-excel-sheets">guia de IA para planilhas</a>. Dados de clientes têm regra: antes de colar a lista inteira em um assistente, remova telefone e sobrenome ou use uma ferramenta que o contrato proteja, como orienta o <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">checklist de LGPD</a>.</p>

    <h2>Passo 2: quem pode receber a mensagem</h2>

    <p>Esse passo evita o maior erro. Uma lista de contatos não equivale a permissão de enviar promoção. A <a href="https://whatsappbusiness.com/policy/" target="_blank" rel="noopener noreferrer">política comercial do WhatsApp Business</a>, consultada em 23/10/2026, diz que você só pode contatar pessoas que forneceram o número e deram permissão (opt-in) para receber suas mensagens, e que você é o responsável pelo método de coleta. A mesma política exige respeitar pedidos de bloqueio e de saída e dar instruções claras de opt-out, além de avisar que o volume de mensagens pode ser limitado se usuários bloquearem ou denunciarem o negócio.</p>

    <p>Na prática: quem comprou e deixou o número para receber o pedido não necessariamente aceitou promoção. Priorize quem já respondeu mensagens suas, quem entrou na lista de transmissão por vontade própria ou quem marcou aceite no cadastro. Para o restante, a opção é o canal em que a pessoa já esperava contato. O artigo sobre <a href="/artigos/campanha-de-whatsapp-opt-in-lista-e-mensagens-com-ia-sem-risco-de-banimento">campanha de WhatsApp com opt-in</a> detalha a montagem da lista, e a <a href="/artigos/email-marketing-com-ia-para-pequenas-empresas-lista-e-regras">página sobre e-mail marketing</a> traz as regras do outro canal.</p>

    <p>A <a href="https://www.gov.br/anpd/pt-br" target="_blank" rel="noopener noreferrer">ANPD</a> reúne as orientações oficiais sobre proteção de dados; em caso de dúvida sobre a base legal do contato, consulte um profissional.</p>

    <h2>Passo 3: escreva a mensagem com IA, por grupo</h2>

    <p>Mensagem de reativação boa é curta, fala de algo útil e termina com uma única ação. Evite "sentimos sua falta" genérico. Use o histórico: o que a pessoa comprou, quando e o que combina com isso agora.</p>

    <pre><code>Você é atendente da loja [nome], que vende [produto]. Escreva 3 versões de mensagem de WhatsApp com até 40 palavras para clientes que compraram [produto] há cerca de [tempo]. Tom: simpático e direto, sem exagero. Cada versão deve ter um motivo útil para falar agora (reposição, novidade ou dica de uso) e uma única pergunta no fim. Inclua no final a frase "Se preferir não receber mensagens, responda SAIR." Não invente desconto nem prazo.</code></pre>

    <p>Para o grupo adormecido, peça uma versão com oferta; para o perdido, uma versão de despedida educada, que pergunta se a pessoa quer continuar recebendo novidades.</p>

    <pre><code>Escreva uma mensagem de despedida para clientes que não compram há mais de um ano. Pergunte se querem continuar recebendo novidades da loja [nome], explique em uma frase o que enviamos (no máximo 2 mensagens por mês) e diga que, sem resposta, não vamos mais entrar em contato. Máximo de 45 palavras.</code></pre>

    <p>Releia sempre antes de enviar e tire qualquer frase que você não diria. Se a loja já faz acompanhamento depois da compra, o texto sobre <a href="/artigos/pos-venda-com-ia-mensagem-de-acompanhamento-e-pedido-de-avaliacao">pós-venda com IA</a> mostra tons que combinam com a reativação, e o <a href="/artigos/whatsapp-business-para-pequeno-negocio-catalogo-etiquetas-e-respostas">guia do WhatsApp Business</a> ensina a usar etiquetas para marcar cada grupo.</p>

    <h2>Passo 4: a oferta precisa caber na margem</h2>

    <p>Desconto sem conta é a forma mais rápida de reativar cliente e perder dinheiro. Antes de prometer qualquer valor, calcule quanto sobra depois do desconto. Exemplo ilustrativo: uma loja de cosméticos vende um kit por R$ 120, com custo de R$ 66 e outras despesas variáveis (taxa de pagamento, embalagem) de R$ 9. A sobra por venda é de R$ 45. Com 15% de desconto, o preço cai para R$ 102 e a sobra para R$ 27. Se a campanha reativar 12 clientes, a loja ganha R$ 324 de sobra, e não R$ 540.</p>

    <p>Para calcular a oferta com segurança, use o raciocínio de <a href="/artigos/markup-ou-margem-qual-usar-para-formar-preco-no-pequeno-negocio">markup e margem</a> e confira o piso no texto sobre <a href="/artigos/ponto-de-equilibrio-com-ia-quanto-vender-para-nao-ter-prejuizo">ponto de equilíbrio</a>. Alternativas que custam menos que desconto: frete grátis acima de um valor, brinde de baixo custo, prazo maior de pagamento ou acesso antecipado a um lançamento. Em datas sazonais, como a <a href="/artigos/black-friday-2026-desconto-sem-prejuizo-para-pequeno-negocio">Black Friday</a> e o <a href="/artigos/natal-2026-como-planejar-estoque-promocoes-e-campanhas-com-ia-na-loja">Natal</a>, a reativação antecipada evita competir só no preço.</p>

    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Teste com 20 a 30 contatos de um grupo antes de enviar para todos. Se poucos responderem ou se vários pedirem para sair, reescreva a mensagem em vez de insistir.</p></div>

    <h2>Passo 5: medir e fechar o ciclo</h2>

    <p>Anote por grupo quantas mensagens foram enviadas, quantas respostas vieram, quantas compras aconteceram e quantos pedidos de saída. A taxa que importa não é de abertura, é de recompra. Se de 40 mensagens saíram 5 compras, você tem 12,5% de reativação naquele grupo, número que serve para comparar a próxima versão.</p>

    <p>Quem respondeu mas não comprou merece uma pergunta curta sobre o motivo, que alimenta um levantamento como o da <a href="/artigos/pesquisa-de-satisfacao-com-ia-analisar-respostas-de-clientes">pesquisa de satisfação com IA</a>. Quem comprou vira cliente ativo e pode receber o convite do <a href="/artigos/programa-de-indicacao-de-clientes-com-ia-pequeno-negocio">programa de indicação</a>. E quem pediu para sair sai da lista no mesmo dia, em todos os canais.</p>

    <p>Um cuidado final: reputação. Cliente reativado que teve experiência ruim antes pode deixar uma avaliação pública. O guia sobre <a href="/artigos/como-melhorar-avaliacoes-e-reputacao-online-com-ia">avaliações e reputação online</a> ajuda a responder sem piorar o clima.</p>

    <h2>Erros comuns</h2>

    <ul>
      <li><strong>Enviar a mesma mensagem para a lista inteira.</strong> Quem comprou há 2 meses e quem comprou há 2 anos precisam de textos diferentes.</li>
      <li><strong>Esquecer o opt-out.</strong> Sem a frase de saída, as denúncias sobem e o número pode ser limitado.</li>
      <li><strong>Prometer desconto sem conta.</strong> Reativar com prejuízo parece sucesso no faturamento e vira problema no caixa.</li>
      <li><strong>Insistir com quem não respondeu.</strong> Uma sequência de no máximo 2 ou 3 contatos, espaçados, respeita a pessoa.</li>
      <li><strong>Deixar a IA inventar condições.</strong> Prazo, valor e regra da promoção vêm de você; o prompt deve proibir a invenção.</li>
    </ul>

    <h2>Próximo passo</h2>

    <p>Abra sua base hoje, calcule o intervalo normal entre compras e separe os três grupos. Escolha o menor deles, escreva uma mensagem com a IA e teste com 20 contatos que deram permissão. Para mais ideias de retenção, volte à <a href="/categoria/negocios">categoria de negócios</a> e escolha o próximo guia.</p>
  `,
  faq: [
    {
      question: "O que é um cliente inativo?",
      answer:
        "É quem já comprou e ficou tempo demais sem voltar, comparado ao intervalo normal de compra do seu negócio. Em loja de roupas pode ser 90 dias, em cafeteria 30, em serviço anual 12 meses. Defina o prazo pelo seu histórico, não por uma regra geral.",
    },
    {
      question: "Posso mandar promoção no WhatsApp para quem já comprou?",
      answer:
        "Só para quem deu permissão para receber suas mensagens. A política do WhatsApp Business exige opt-in, respeito a pedidos de saída e instruções claras de opt-out. Ter o número por causa de uma compra não é a mesma coisa que ter aceitado promoções.",
    },
    {
      question: "Qual desconto devo oferecer para reativar clientes?",
      answer:
        "Depende da sua margem, e a conta vem antes da mensagem. Calcule o que sobra por venda depois do desconto e confira se a campanha ainda cobre as despesas. Alternativas como frete grátis, brinde barato ou acesso antecipado costumam custar menos do que baixar o preço.",
    },
    {
      question: "A IA pode escrever as mensagens de reativação?",
      answer:
        "Pode escrever versões por grupo, no tom da sua loja, desde que você forneça o contexto e proíba a invenção de desconto ou prazo. Revise tudo antes de enviar e evite colar dados pessoais completos da lista em ferramentas sem proteção contratual.",
    },
    {
      question: "Quantas vezes posso contatar o mesmo cliente inativo?",
      answer:
        "Poucas. Uma sequência de dois ou três contatos espaçados, com a opção clara de sair, costuma ser razoável. Se não houver resposta, a melhor atitude é encerrar o contato ou mandar uma última mensagem de despedida perguntando se a pessoa quer continuar na lista.",
    },
  ],
};
