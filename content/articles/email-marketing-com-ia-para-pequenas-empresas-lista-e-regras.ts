import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "email-marketing-com-ia-para-pequenas-empresas-lista-e-regras",
  title: "E-mail marketing com IA para pequenas empresas: guia prático",
  seoTitle: "E-mail marketing com IA para pequenas empresas",
  excerpt:
    "E-mail marketing com IA ajuda a escrever campanhas e segmentar a lista, mas exige descadastro fácil e cuidado com spam. Veja o passo a passo para pequenas empresas.",
  metaDescription:
    "Aprenda e-mail marketing com IA para pequenas empresas: como montar a lista, escrever campanhas, segmentar, cumprir regras do Gmail e respeitar a LGPD sem complicar.",
  category: "negocios",
  articleSubcategory: "vendas-e-marketing",
  date: "2026-10-12",
  readTime: 7,
  imageQuery: "small shop owner laptop newsletter",
  seed: 222,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "A IA acelera a escrita de assuntos, textos e variações de e-mail, mas quem decide a oferta, a lista e o momento do envio continua sendo você.",
    "O Google exige descadastro com um clique em e-mails de marketing de remetentes em massa e pede taxa de spam abaixo de 0,30%, e o bom hábito vale mesmo para quem envia pouco.",
    "Lista boa é a de quem pediu para receber: respeite os direitos do titular previstos na LGPD, que a ANPD orienta a exercer junto ao encarregado de dados do agente de tratamento.",
  ],
  content: `
    <p>E-mail marketing com IA funciona assim: você usa o assistente para escrever assuntos, textos e variações de campanha, e define sozinho a oferta, a lista de destinatários e o horário de envio. Para uma pequena empresa, isso corta o tempo de redação, mas não resolve o essencial: ter uma lista de pessoas que pediram para receber e respeitar as regras de envio, como as do Gmail, verificadas em 12/10/2026.</p>
    <p>Este guia mostra o processo do começo ao fim para quem tem um negócio local ou um pequeno e-commerce: como montar e organizar a lista, o que pedir à IA, como segmentar, quais regras seguir para não cair na caixa de spam e como medir o resultado com poucos números.</p>

    <h2>Por que o e-mail ainda vale a pena para quem é pequeno?</h2>
    <p>Rede social depende do algoritmo, e a sua audiência pode sumir da tela de um dia para o outro. A lista de e-mails é sua: você fala direto com quem já demonstrou interesse, sem pagar para aparecer. Para negócios com clientes recorrentes, como salões, clínicas, lojas de roupa, escolas de idiomas e restaurantes, um e-mail por semana com uma oferta clara mantém a marca presente entre uma compra e outra.</p>
    <p>O custo também ajuda. Ferramentas de envio costumam ter plano gratuito ou barato para listas pequenas, mas os limites mudam com frequência, então confira a página do fornecedor antes de contratar. O que pesa de verdade é o seu tempo, e é aí que a IA entra. Se você já pensa em canais como o WhatsApp, veja também como <a href="/artigos/como-automatizar-atendimento-no-whatsapp-com-ia">automatizar o atendimento no WhatsApp com IA</a> e como <a href="/artigos/como-usar-ia-para-vender-mais-no-seu-negocio-local">vender mais no negócio local</a>.</p>

    <h2>Como montar uma lista de e-mails que vale ouro</h2>
    <p>A lista é o ativo. Não compre lista: listas compradas trazem gente que nunca ouviu falar de você, aumentam as reclamações de spam e podem prejudicar a entrega de todos os seus envios. Construa de forma orgânica, com um convite claro e uma razão para a pessoa se inscrever.</p>
    <ul class="checklist">
      <li>Formulário no site ou na bio das redes, com a promessa do que a pessoa vai receber e com que frequência.</li>
      <li>Cadastro no balcão ou no caixa, com autorização explícita de quem preenche.</li>
      <li>Um brinde simples em troca da inscrição, como um guia, um cupom ou uma lista de dicas.</li>
      <li>Um campo para o interesse da pessoa, que será usado na segmentação.</li>
      <li>Link de descadastro visível em todo e-mail, sem truques.</li>
    </ul>
    <p>Quem pede para sair precisa conseguir sair. Isso protege a reputação do seu domínio e respeita os direitos do titular dos dados. Segundo a <a href="https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados" rel="noopener noreferrer" target="_blank">página da ANPD sobre o titular de dados</a> (verificado em 12/10/2026), esses direitos podem ser requeridos ao encarregado de dados do agente de tratamento, e, se não forem atendidos, a pessoa pode fazer uma reclamação à ANPD. Para detalhes sobre o que você pode fazer com os dados, consulte um advogado, e leia <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a>.</p>

    <h2>Regras do Gmail que todo remetente deveria conhecer</h2>
    <p>O Google publica exigências para quem envia e-mails em massa. Segundo a <a href="https://support.google.com/a/answer/81126" rel="noopener noreferrer" target="_blank">página de requisitos para remetentes do Gmail</a>, o grupo de quem manda mais de 5.000 mensagens por dia para contas do Gmail deve configurar SPF, DKIM e DMARC, manter a taxa de spam informada no Postmaster Tools abaixo de 0,30% e oferecer descadastro com um clique, com um link visível no corpo da mensagem, nos e-mails de marketing.</p>
    <p>Uma pequena empresa quase nunca chega a 5.000 envios por dia, então esses requisitos mais duros não se aplicam diretamente. Mesmo assim, servem de régua de boas práticas: o provedor de e-mail que você usa normalmente cuida de SPF e DKIM, e o descadastro fácil protege a sua reputação. Pergunte ao fornecedor da ferramenta se o seu domínio está autenticado antes de disparar a primeira campanha.</p>
    <table>
      <thead><tr><th>Prática</th><th>Por que importa</th></tr></thead>
      <tbody>
        <tr><td>Domínio autenticado (SPF e DKIM)</td><td>Prova que o e-mail vem de você e reduz a chance de ir para o spam</td></tr>
        <tr><td>Descadastro visível</td><td>Evita que o destinatário use o botão de spam em vez de sair</td></tr>
        <tr><td>Taxa de reclamação baixa</td><td>O Google usa 0,30% como limite para remetentes em massa</td></tr>
        <tr><td>Lista só de quem pediu</td><td>Menos reclamações e mais aberturas</td></tr>
      </tbody>
    </table>

    <h2>O que pedir para a IA escrever (com prompts prontos)</h2>
    <p>A IA é boa em gerar rascunhos e variações; você dá o contexto real. Quanto mais específico o comando, melhor o resultado, como mostra o guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">prompts que funcionam</a>.</p>
    <h3>Prompt para a campanha da semana</h3>
    <pre><code>Você é redator de e-mail marketing de um [tipo de negócio] em [cidade]. Escreva um e-mail curto (120 a 150 palavras) para clientes que compraram há mais de 60 dias, com a oferta [descreva a oferta e a validade]. Tom amigável, sem exageros. Dê 5 opções de assunto de até 45 caracteres e um único botão de chamada para ação.</code></pre>
    <h3>Prompt para recuperar clientes inativos</h3>
    <pre><code>Escreva 3 e-mails de reativação para clientes que não compram há 90 dias, com intervalo de 5 dias entre eles. O primeiro lembra o que a pessoa gostou, o segundo traz uma novidade, o terceiro avisa que ela pode sair da lista sem problema. Mantenha cada texto abaixo de 120 palavras.</code></pre>
    <p>Leia sempre antes de enviar. A IA pode inventar prazo, desconto ou detalhe de produto. Troque expressões genéricas por algo que só o seu negócio tem, como o nome de um profissional ou a rua da loja. Para ideias de retenção, veja <a href="/artigos/como-usar-ia-para-reduzir-cancelamento-de-clientes">como reduzir cancelamento de clientes com IA</a> e <a href="/artigos/como-usar-ia-para-fidelizar-clientes-programa-de-recompensas">programa de recompensas</a>.</p>

    <h2>Segmentação simples: mande a mensagem certa para a pessoa certa</h2>
    <p>Segmentar é dividir a lista em grupos pequenos. Você não precisa de um sistema sofisticado. Três grupos já mudam o resultado: clientes novos (primeira compra nos últimos 30 dias), clientes ativos (compraram nos últimos 90 dias) e inativos (mais de 90 dias sem compra). A IA ajuda a escrever uma versão para cada grupo, enquanto você só precisa de uma planilha com data da última compra.</p>
    <p>Exemplo ilustrativo: uma loja de pet shop em Campinas com 800 contatos separa 120 clientes inativos e manda uma sequência de 3 e-mails com um brinde de R$ 15 na próxima compra. Se 5 pessoas voltarem a comprar e gastarem R$ 90 em média, a campanha traz R$ 450 em vendas, valor que cobre o brinde (R$ 75) e o tempo investido. O número é só uma conta de exemplo, e os seus resultados dependem da oferta e da base. Para organizar essa planilha, veja <a href="/artigos/ia-para-planilhas-automatizar-relatorios-excel-sheets">IA para planilhas</a>.</p>

    <h2>Como medir resultado sem se perder em números</h2>
    <p>Acompanhe poucos indicadores, sempre os mesmos. A taxa de abertura mostra se o assunto chamou atenção, embora recursos de privacidade em aplicativos de e-mail possam distorcer esse número. A taxa de cliques mostra interesse real na oferta. As vendas atribuídas à campanha, mesmo que estimadas por um cupom exclusivo, mostram o retorno. A taxa de descadastros e de reclamações mostra se você está exagerando na frequência.</p>
    <p>Teste uma coisa de cada vez: dois assuntos para metade da lista cada, e só depois mude o horário. Anote tudo numa planilha simples. Em dois ou três meses você sabe qual tipo de e-mail funciona, o que vale mais do que qualquer dica genérica. Quem quer ir além pode aprender com a <a href="/artigos/como-ganhar-dinheiro-com-newsletter-usando-ia">newsletter com IA</a> e com o texto de <a href="/artigos/como-usar-ia-para-planejar-marketing-de-pequena-empresa">planejamento de marketing para pequena empresa</a>.</p>

    <h2>Erros comuns em e-mail marketing com IA</h2>
    <ul>
      <li>Enviar o texto da IA sem revisar, com ofertas, prazos ou preços que não existem.</li>
      <li>Comprar lista pronta ou importar contatos que nunca pediram para receber.</li>
      <li>Esconder o link de descadastro ou dificultar a saída.</li>
      <li>Mandar o mesmo e-mail para todo mundo, sem separar novos de inativos.</li>
      <li>Escrever tudo em tom de anúncio, sem ajudar o leitor em nada.</li>
      <li>Colar dados pessoais de clientes dentro do prompt de uma ferramenta de IA.</li>
    </ul>
    <p>Comece com uma campanha por semana, uma lista limpa e um indicador de resultado. Se a sua empresa também atende por proposta, o guia sobre <a href="/artigos/propostas-comerciais-com-ia-como-fechar-mais-contratos">propostas comerciais com IA</a> complementa o funil. Para mais ideias, visite a categoria <a href="/categoria/negocios">Negócios com IA</a>.</p>
  `,
  faq: [
    {
      question: "Posso usar IA para escrever e-mails de marketing?",
      answer:
        "Pode. A IA é útil para gerar rascunhos, assuntos e variações. A revisão final é sua, porque o texto pode trazer promessas, prazos ou preços que não existem. Não coloque dados pessoais de clientes no comando e confira se a oferta descrita é a real antes de enviar.",
    },
    {
      question: "Preciso de autorização para mandar e-mail marketing?",
      answer:
        "O caminho mais seguro é enviar só para quem pediu para receber e oferecer descadastro fácil em todo e-mail. A LGPD protege os dados pessoais e dá direitos ao titular. Como as regras dependem do seu caso, consulte um advogado ou o material da ANPD no gov.br antes de montar a lista.",
    },
    {
      question: "O que é taxa de spam e qual é o limite do Gmail?",
      answer:
        "É a proporção de destinatários que marcam seu e-mail como spam. Segundo o Google, remetentes que enviam mais de 5.000 mensagens por dia ao Gmail devem manter essa taxa, medida no Postmaster Tools, abaixo de 0,30%. Pequenos remetentes também ganham ao mirar nessa referência.",
    },
    {
      question: "Qual a melhor ferramenta de e-mail marketing para pequena empresa?",
      answer:
        "Não existe uma melhor para todos. Compare o limite de contatos do plano gratuito, a facilidade de criar formulários, o suporte em português e a possibilidade de segmentar a lista. Teste com 50 a 100 contatos reais e confira os preços atuais na página oficial de cada ferramenta.",
    },
    {
      question: "Quantos e-mails por semana devo enviar?",
      answer:
        "Para a maioria das pequenas empresas, um por semana é um bom começo, com possibilidade de aumentar se a taxa de descadastro e de reclamação continuar baixa. Mais importante que a frequência é manter regularidade e entregar algo útil, não só ofertas, em cada mensagem.",
    },
  ],
};
