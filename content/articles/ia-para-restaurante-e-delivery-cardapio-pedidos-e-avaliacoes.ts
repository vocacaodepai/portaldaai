import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "ia-para-restaurante-e-delivery-cardapio-pedidos-e-avaliacoes",
  title: "IA para restaurante e delivery: cardápio, pedidos e avaliações",
  seoTitle: "IA para restaurante e delivery: cardápio e pedidos",
  excerpt:
    "Veja como usar IA para restaurante e delivery: descrições de cardápio, respostas a pedidos, avaliações e equipe, com prompts prontos e exemplo em reais.",
  metaDescription:
    "IA para restaurante e delivery na prática: melhore o cardápio, responda pedidos no WhatsApp, trate avaliações do Google e organize a equipe, com prompts.",
  category: "negocios",
  articleSubcategory: "gestao-e-operacao",
  date: "2026-10-11",
  readTime: 6,
  imageQuery: "restaurant kitchen chef plating",
  seed: 197,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "A IA ajuda restaurante e delivery em quatro frentes: cardápio, atendimento de pedidos, avaliações online e organização da equipe.",
    "O melhor começo é por tarefas repetidas e de baixo risco, como descrições de pratos e respostas a avaliações, sempre com revisão do dono.",
    "Preço, alergênicos e horários nunca devem sair da cabeça da IA: confira tudo antes de publicar, porque erro nesses pontos custa dinheiro e confiança.",
  ],
  content: `
    <p>IA para restaurante e delivery serve para ganhar tempo em quatro tarefas que se repetem todos os dias: escrever o cardápio, responder pedidos, tratar avaliações dos clientes e organizar a escala da equipe. Ela não cozinha nem decide por você, mas tira do dono o trabalho repetitivo para sobrar tempo para a operação.</p>
    <p>Este guia é para quem tem lanchonete, marmitaria, pizzaria ou restaurante pequeno e quer começar sem gastar com sistema caro. Você vai ver o que dá para fazer com um assistente comum, prompts para copiar, um exemplo com números e os cuidados que evitam dor de cabeça com alergênicos, preço e dados de clientes.</p>

    <h2>Onde a IA ajuda de verdade no restaurante?</h2>
    <p>Pequenos negócios já usam IA, principalmente para divulgação. Uma pesquisa do Sebrae com a FGV IBRE e o Google, divulgada pela <a href="https://agenciasebrae.com.br/dados/pequenos-negocios-abracam-a-inteligencia-artificial-para-otimizar-o-tempo-e-inovar/" rel="noopener noreferrer" target="_blank">Agência Sebrae de Notícias</a> em 22/01/2026, aponta marketing e promoção como o principal uso entre micro e pequenas empresas (59%) e entre MEIs (74%). O restaurante pode ir além disso.</p>
    <p>Quatro frentes dão retorno rápido:</p>
    <ul>
      <li>Cardápio: descrições que dão vontade e combos pensados para vender mais.</li>
      <li>Pedidos: respostas padrão para dúvidas de horário, taxa de entrega e prazo.</li>
      <li>Avaliações: respostas educadas e consistentes no Google e nos aplicativos.</li>
      <li>Equipe: escala semanal e checklist de abertura e fechamento.</li>
    </ul>
    <p>Para ver o quadro geral antes de aplicar, vale ler o guia de <a href="/artigos/como-usar-ia-para-vender-mais-no-seu-negocio-local">como usar IA para vender mais no negócio local</a>.</p>

    <h2>Cardápio que vende: descrição, combos e fotos</h2>
    <p>Descrição curta e concreta vende mais que adjetivo solto. Em vez de &quot;delicioso hambúrguer&quot;, diga o que vem no prato, o ponto da carne, o tamanho e com o que acompanha. A IA ajuda a produzir várias versões para você escolher a melhor.</p>
    <pre><code>Reescreva as descrições destes 8 itens do cardápio de uma hamburgueria de bairro, com até 25 palavras cada, citando os ingredientes principais e o tamanho do lanche. Tom: simples e apetitoso. Não invente ingredientes nem preço. Itens: [cole a lista com ingredientes].</code></pre>
    <p>Para combos, peça ideias a partir dos itens que mais saem e dos que têm melhor margem. Para as imagens, fotos reais do seu prato quase sempre convertem melhor do que imagem gerada, e o guia de <a href="/artigos/fotos-de-produto-para-vender-online-com-ia">fotos de produto com IA</a> mostra como melhorar luz e fundo sem enganar o cliente.</p>
    <p>Sobre preço, use a IA para organizar a conta, não para decidir sozinha. O texto sobre <a href="/artigos/como-precificar-produtos-e-servicos-com-ia">como precificar produtos e serviços com IA</a> detalha o raciocínio de custo, margem e preço final.</p>

    <h2>Atendimento de pedidos no WhatsApp</h2>
    <p>Boa parte das mensagens de delivery é repetida: está aberto, qual a taxa, quanto demora, aceitam Pix. Respostas prontas resolvem isso. Escreva com a IA um conjunto de respostas padrão, revise e salve como mensagens rápidas no aplicativo. O passo a passo completo está em <a href="/artigos/como-automatizar-atendimento-no-whatsapp-com-ia">como automatizar o atendimento no WhatsApp com IA</a>.</p>
    <pre><code>Crie 10 respostas curtas e simpáticas para perguntas comuns de clientes de uma pizzaria delivery: horário, taxa de entrega por bairro, prazo, formas de pagamento, troca de sabor, pizza meio a meio e pedido errado. Deixe campos entre colchetes para eu preencher com os dados reais.</code></pre>
    <p>Se o volume de mensagens crescer, avalie um assistente automático. O guia sobre <a href="/artigos/como-criar-chatbot-de-atendimento-para-seu-site-sem-programar">chatbot de atendimento sem programar</a> mostra opções e limites. Nos horários de pico, mantenha uma pessoa por perto para exceções, porque pedido com alergia ou endereço confuso não é tarefa para resposta automática.</p>

    <h2>Avaliações online: responder sem perder o controle</h2>
    <p>Responder avaliações mostra ao cliente que há alguém do outro lado. A <a href="https://support.google.com/business/answer/3474050" rel="noopener noreferrer" target="_blank">ajuda do Perfil da Empresa no Google</a> explica que o negócio precisa estar verificado para responder, que a resposta passa por análise de políticas de conteúdo (normalmente até 10 minutos) e que o cliente é notificado e pode atualizar a avaliação depois. Elogios e críticas merecem resposta.</p>
    <pre><code>Escreva uma resposta educada, em até 60 palavras, a esta avaliação de 2 estrelas de um restaurante: [cole a avaliação]. Peça desculpas pelo que for justo, explique que vamos apurar o caso e convide o cliente a falar conosco pelo WhatsApp [número]. Não ofereça desconto nem admita culpa em detalhes.</code></pre>
    <p>Leia a resposta antes de publicar e ajuste o que não bate com os fatos. Para uma rotina completa de reputação, incluindo como pedir mais avaliações, veja <a href="/artigos/como-melhorar-avaliacoes-e-reputacao-online-com-ia">como melhorar avaliações e reputação online com IA</a>.</p>

    <h2>Estoque, custos e equipe</h2>
    <p>A cozinha perde dinheiro em desperdício e em compra mal planejada. Uma planilha com consumo semanal por insumo, analisada com ajuda da IA, aponta o que sobra e o que falta. O guia de <a href="/artigos/como-usar-ia-para-gerenciar-estoque-pequeno-comercio">IA para gerenciar estoque de pequeno comércio</a> mostra como estruturar os dados, e o de <a href="/artigos/como-usar-ia-para-reduzir-custos-operacionais-pequenos-negocios">reduzir custos operacionais</a> amplia a visão.</p>
    <p>Na equipe, a IA ajuda a montar escala por turno, checklists de abertura e fechamento e treinamento rápido para quem entra. Quem tem funcionários encontra boas ideias em <a href="/artigos/gestao-de-equipe-com-ia-escala-e-tarefas-pequeno-negocio">gestão de equipe com IA</a>. Qualquer escala precisa respeitar a legislação trabalhista e o combinado com cada pessoa, então trate a sugestão da IA como rascunho.</p>

    <h2>Exemplo prático: marmitaria com 40 pedidos por dia</h2>
    <p>Imagine uma marmitaria de bairro em Goiânia que recebe cerca de 40 pedidos por dia, a maioria pelo WhatsApp. A dona gasta, hipoteticamente, 2 horas por dia respondendo as mesmas dúvidas e uma hora semanal respondendo avaliações. Com respostas rápidas e modelos de resposta, o tempo cai para cerca de 1 hora por dia e 20 minutos por semana. É uma simulação para mostrar a lógica, não um resultado medido.</p>
    <table>
      <thead>
        <tr><th>Tarefa</th><th>Antes (por mês)</th><th>Depois (por mês)</th></tr>
      </thead>
      <tbody>
        <tr><td>Respostas repetidas no WhatsApp</td><td>60 horas</td><td>30 horas</td></tr>
        <tr><td>Avaliações online</td><td>4 horas</td><td>1,5 hora</td></tr>
        <tr><td>Texto de cardápio e promoções</td><td>6 horas</td><td>2 horas</td></tr>
        <tr><td>Total</td><td>70 horas</td><td>33,5 horas</td></tr>
      </tbody>
    </table>
    <p>Se a hora da dona vale, na conta dela, R$ 25, a economia seria de cerca de R$ 900 em tempo por mês. O número depende do seu volume e da sua disciplina, e o ganho real vem de usar as horas liberadas em algo que traga venda, como cuidar do cliente fiel e testar combos. Para esse segundo passo, olhe o guia de <a href="/artigos/como-usar-ia-para-fidelizar-clientes-programa-de-recompensas">fidelização com programa de recompensas</a>.</p>

    <h2>Cuidados: alergênicos, preço e dados de clientes</h2>
    <p>Três pontos exigem atenção redobrada. O primeiro é informação de alergênicos e ingredientes: nunca publique o que a IA escreveu sem conferir com a ficha técnica da sua receita. O segundo é preço e promoção, que a IA não conhece e pode inventar. O terceiro são os dados dos clientes, como telefone e endereço, que não devem ser colados em ferramentas sem critério.</p>
    <p>No Brasil, quem trata dados pessoais está sujeito à LGPD, e a <a href="https://www.gov.br/anpd/pt-br" rel="noopener noreferrer" target="_blank">ANPD</a> mantém canais e orientações para cidadãos e empresas. Para escolher ferramenta com critério, use o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist de segurança</a>, e para entender a rotina de marketing completa, o guia de <a href="/artigos/como-usar-ia-para-planejar-marketing-de-pequena-empresa">planejamento de marketing para pequena empresa</a>.</p>

    <h2>Erros comuns</h2>
    <ul class="checklist">
      <li>Publicar descrição com ingrediente errado ou sem aviso de alergênico.</li>
      <li>Deixar a IA responder reclamação grave sem revisão humana.</li>
      <li>Copiar o texto de outro restaurante em vez de usar a identidade do seu.</li>
      <li>Automatizar o atendimento e esquecer de olhar as mensagens que ficam sem resposta.</li>
      <li>Não acompanhar o fluxo de caixa depois de mudar preços e combos, tema do guia de <a href="/artigos/fluxo-de-caixa-com-ia-guia-pequenos-negocios">fluxo de caixa com IA</a>.</li>
    </ul>

    <p>Comece pelo mais simples: reescreva hoje as descrições de cinco pratos e crie dez respostas rápidas para o WhatsApp. Depois de uma semana, meça quanto tempo você poupou e o que os clientes comentaram. Mais ideias para o seu negócio estão na categoria <a href="/categoria/negocios">IA para negócios</a>, e a rotina das redes sociais pode ficar mais leve com o guia de <a href="/artigos/ia-para-redes-sociais-criar-agendar-analisar-posts">IA para redes sociais</a>.</p>
  `,
  faq: [
    {
      question: "Como usar IA em um restaurante?",
      answer:
        "Comece por tarefas repetidas e de baixo risco: descrições de cardápio, respostas padrão para pedidos no WhatsApp, respostas a avaliações e escala da equipe. Use um assistente comum, revise tudo antes de publicar e nunca deixe a IA definir preço ou alergênicos.",
    },
    {
      question: "A IA pode responder pedidos de delivery sozinha?",
      answer:
        "Pode responder dúvidas simples, como horário, taxa e prazo, por meio de mensagens prontas ou de um assistente automático. Pedidos com alergia, endereço confuso ou reclamação devem passar por uma pessoa, porque o erro nesses casos custa caro.",
    },
    {
      question: "Preciso pagar para usar IA no restaurante?",
      answer:
        "Para começar, assistentes com plano gratuito já resolvem descrição de cardápio e respostas prontas. Planos pagos oferecem mais limite de uso e recursos. Confira preços e termos na página oficial de cada ferramenta antes de assinar.",
    },
    {
      question: "Posso responder avaliações do Google com IA?",
      answer:
        "Pode usar a IA para redigir a resposta, desde que você leia, ajuste os fatos e publique pelo seu perfil verificado. O Google analisa as respostas segundo suas políticas de conteúdo, e o cliente é notificado quando você responde.",
    },
    {
      question: "Os dados dos meus clientes estão seguros em ferramentas de IA?",
      answer:
        "Depende da ferramenta e do plano. Evite colar telefone, endereço e dados de pagamento em assistentes sem entender a política de privacidade. A LGPD vale para quem trata dados pessoais, e a ANPD orienta cidadãos e empresas sobre o tema.",
    },
  ],
};
