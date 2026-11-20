import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "pos-venda-com-ia-mensagem-de-acompanhamento-e-pedido-de-avaliacao",
  title: "Pós-venda com IA: mensagens de acompanhamento e avaliação",
  seoTitle: "Pós-venda com IA: mensagens e pedido de avaliação",
  excerpt:
    "Monte um pós-venda com IA em quatro mensagens: agradecimento, entrega, uso e avaliação, seguindo as regras do Google para pedir review sem punição.",
  metaDescription:
    "Pós-venda com IA para pequeno negócio: calendário de mensagens, prompts prontos e as regras do Google para pedir avaliação sem oferecer brinde nem filtrar clientes.",
  category: "negocios",
  articleSubcategory: "retencao-e-experiencia",
  date: "2026-10-21",
  readTime: 7,
  imageQuery: "shop owner packing order thank you card",
  seed: 500,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Um pós-venda simples cabe em quatro mensagens: agradecimento no dia da compra, aviso de entrega, ajuda de uso e pedido de avaliação, cada uma curta e com um único objetivo.",
    "A IA escreve e adapta as mensagens ao tom da loja, mas o envio só deve ir para quem aceitou receber contato, e o texto final precisa passar por você.",
    "O Google proíbe oferecer desconto ou brinde em troca de avaliação e proíbe pedir review só aos clientes satisfeitos, então o pedido tem que ser igual para todos.",
  ],
  content: `
    <p>Pós-venda com IA é o conjunto de mensagens que você envia depois que o cliente compra, escritas e adaptadas com ajuda de um assistente: agradecimento, aviso de entrega, ajuda para usar o produto e pedido de avaliação. O objetivo é resolver problemas cedo, gerar recompra e conseguir avaliações verdadeiras.</p>
    <p>O texto da IA é o de menos. O que faz o pós-venda funcionar é o calendário (quando enviar), o canal certo (só para quem autorizou) e as regras de avaliação, que o Google leva a sério. Este guia monta um sistema pequeno que uma pessoa sozinha consegue manter, com prompts prontos e os erros que mais derrubam o resultado.</p>

    <h2>Por que o pós-venda importa para quem vende pouco?</h2>
    <p>O artigo do <a href="https://www.sebrae-sc.com.br/blog/como-fidelizar-clientes" target="_blank" rel="noopener noreferrer">Sebrae de Santa Catarina sobre fidelização</a>, conferido em 21/10/2026, lista o contato depois da venda entre as estratégias de retenção: confirmar a satisfação, enviar pesquisa, sugerir produto complementar e oferecer suporte rápido. A lógica é simples. Quem já comprou conhece a loja, e falar com ele custa menos que atrair um desconhecido com anúncio.</p>
    <p>Para negócio pequeno, o pós-venda tem um bônus: pega problema antes de virar reclamação pública. Um cliente que não recebeu o pedido e é avisado por você em dois dias reclama menos do que o que precisa te procurar. Esse raciocínio vale também para o atendimento com protocolo e prazo e para quem quer reduzir cancelamento em serviços de assinatura.</p>

    <h2>O calendário de quatro mensagens</h2>
    <p>Comece com poucas mensagens. Cada uma deve ter um objetivo só e ser curta o bastante para ler na tela do celular.</p>
    <table>
      <thead>
        <tr><th>Quando</th><th>Mensagem</th><th>Objetivo</th></tr>
      </thead>
      <tbody>
        <tr><td>Dia da compra</td><td>Agradecimento e confirmação do pedido</td><td>Dar segurança e um contato humano</td></tr>
        <tr><td>Entrega prevista</td><td>Aviso de envio ou entrega</td><td>Evitar a pergunta "cadê meu pedido?"</td></tr>
        <tr><td>3 a 7 dias depois</td><td>Dica de uso e pergunta se deu tudo certo</td><td>Pegar problema cedo</td></tr>
        <tr><td>10 a 15 dias depois</td><td>Pedido de avaliação, igual para todos</td><td>Gerar reviews verdadeiros</td></tr>
      </tbody>
    </table>
    <p>Uma quinta mensagem, de recompra, só entra depois que as quatro estiverem rodando bem. Ela pode sugerir um item complementar ou lembrar o prazo de reposição. Para quem vende produtos de consumo, o <a href="/artigos/como-usar-ia-para-fidelizar-clientes-programa-de-recompensas">programa de recompensas com IA</a> e o <a href="/artigos/programa-de-indicacao-de-clientes-com-ia-pequeno-negocio">programa de indicação</a> são os próximos passos.</p>

    <h2>Prompts para escrever as mensagens com IA</h2>
    <p>Entregue à IA o tom da marca, o produto e uma regra: mensagem curta, sem exagero. Troque os campos entre colchetes.</p>
    <pre><code>Você escreve mensagens de pós-venda para uma loja de [tipo de produto] de pequeno porte. Tom: simpático e direto, sem gírias. Escreva 3 versões de até 40 palavras para o aviso de entrega do pedido de [nome do cliente]. Inclua o prazo [prazo] e o canal [WhatsApp ou e-mail] para tirar dúvidas. Não use travessão nem emojis em excesso.</code></pre>
    <pre><code>Escreva uma mensagem para 5 a 7 dias depois da compra de [produto]. Pergunte se chegou tudo certo e dê uma dica prática de uso em uma frase. Termine convidando a responder esta mensagem se algo não saiu como esperado. Não peça avaliação nesta mensagem.</code></pre>
    <p>Salve as versões que você aprovar como modelos fixos e use os campos entre colchetes para personalizar. O catálogo de respostas rápidas do <a href="/artigos/whatsapp-business-para-pequeno-negocio-catalogo-etiquetas-e-respostas">WhatsApp Business</a> guarda esses textos para você disparar com um atalho. Se o volume crescer, o guia de <a href="/artigos/como-automatizar-atendimento-no-whatsapp-com-ia">automação de atendimento no WhatsApp</a> mostra o próximo nível.</p>

    <h2>Só envie para quem autorizou</h2>
    <p>Mensagem de pós-venda sobre um pedido (confirmação, entrega) é diferente de mensagem de divulgação. Já o pedido de avaliação e a oferta de recompra pedem cuidado com consentimento. O ideal é registrar no checkout que o cliente aceita contato por WhatsApp ou e-mail, como explica o texto de <a href="/artigos/campanha-de-whatsapp-opt-in-lista-e-mensagens-com-ia-sem-risco-de-banimento">campanha de WhatsApp com opt-in</a>. Dê sempre um jeito simples de parar de receber mensagens.</p>
    <p>Guarde só os dados necessários: nome, contato, pedido e data. O <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">checklist de LGPD para pequeno negócio</a> ajuda a revisar o que você coleta, e o guia de <a href="/artigos/email-marketing-com-ia-para-pequenas-empresas-lista-e-regras">e-mail marketing com IA</a> trata do consentimento por e-mail. Não cole lista de clientes inteira num chatbot: use só o primeiro nome e o produto, como mostra o texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">privacidade e IA</a>.</p>

    <h2>Como pedir avaliação sem violar a regra do Google</h2>
    <p>A <a href="https://support.google.com/business/answer/7400114?hl=pt-BR" target="_blank" rel="noopener noreferrer">política de avaliações do Perfil da Empresa no Google</a>, consultada em 21/10/2026, permite pedir que o cliente avalie, desde que reflita uma experiência real e sem influenciar a nota ou o conteúdo. As regras que mais pegam pequeno negócio:</p>
    <ul>
      <li>Oferecer desconto, brinde ou qualquer coisa de valor em troca de avaliação é proibido.</li>
      <li>Pedir avaliação só para quem está satisfeito, ou desencorajar avaliações negativas, é proibido.</li>
      <li>Pedir um conteúdo específico, como "escreva que o atendimento foi ótimo", é proibido.</li>
      <li>Pressionar o cliente a avaliar dentro da loja também é proibido.</li>
    </ul>
    <p>Na prática, o pedido tem que ser o mesmo texto para todos, sem recompensa e sem roteiro. O Google informa que a loja pode compartilhar um link ou QR code de avaliação, e que responder às avaliações exige perfil verificado, segundo a <a href="https://support.google.com/business/answer/3474050" target="_blank" rel="noopener noreferrer">página de ajuda sobre responder avaliações</a>. O guia do <a href="/artigos/perfil-da-empresa-no-google-com-ia-respostas-fotos-e-posts">Perfil da Empresa com IA</a> mostra como organizar as respostas.</p>
    <pre><code>Escreva um pedido de avaliação de até 45 palavras para clientes que compraram [produto] há 10 dias. Agradeça, diga que a opinião ajuda outros clientes e inclua o link [link]. Não ofereça nada em troca, não peça nota específica nem diga como avaliar. O texto vale para qualquer cliente, satisfeito ou não.</code></pre>

    <h2>Exemplo: loja de velas aromáticas com 60 pedidos por mês</h2>
    <p>Imagine uma loja que vende 60 pedidos por mês, com ticket médio de R$ 89 (números de exemplo). A dona configura quatro mensagens no WhatsApp Business: agradecimento, aviso de envio, dica de uso no quinto dia e pedido de avaliação no décimo segundo. Gasta uma tarde para escrever os modelos com a IA e ajusta o tom em duas rodadas.</p>
    <p>No mês seguinte, ela passa 10 minutos por dia respondendo as mensagens que voltam. Dois clientes avisam que o pote chegou trincado antes de reclamar em público, e ela troca os itens. O ganho não vem de número mágico: vem de pegar o problema cedo. Para trocas e devoluções, use a política do artigo sobre <a href="/artigos/troca-e-devolucao-na-loja-online-politica-clara-e-respostas-com-ia">troca e devolução na loja online</a>.</p>

    <h2>Como medir se o pós-venda está funcionando</h2>
    <p>Acompanhe poucas coisas por mês, numa planilha simples: quantos clientes responderam a mensagem de uso, quantos problemas foram resolvidos antes de virar reclamação, quantos pediram troca, quantas avaliações novas chegaram e quantos clientes compraram de novo. Compare mês a mês, sem esperar um salto no primeiro.</p>
    <p>Quando tiver respostas suficientes, use a IA para ler os textos e achar padrões, como no guia de <a href="/artigos/pesquisa-de-satisfacao-com-ia-analisar-respostas-de-clientes">pesquisa de satisfação com IA</a>. Se muitos clientes reclamam da mesma coisa, o problema está no produto ou na embalagem, não na mensagem. O texto sobre reduzir devoluções no e-commerce ajuda nesse diagnóstico.</p>

    <h2>Quando a resposta é um problema</h2>
    <p>Alguns clientes vão responder que algo deu errado. Defina antes quem responde, em quanto tempo e o que pode oferecer: troca, reenvio ou reembolso, dentro da sua política. A IA ajuda a rascunhar uma resposta empática, mas quem decide é você. Responda no mesmo canal em até um dia útil e peça foto do problema se for o caso.</p>
    <p>Se o cliente resolver o problema com você, ele pode avaliar bem depois, mas não peça isso como troca. Registre o caso numa lista simples, com data, causa e solução. Em um mês, essa lista mostra o que precisa mudar na embalagem, na descrição ou no prazo.</p>

    <h2>Erros comuns no pós-venda</h2>
    <ul class="checklist">
      <li><strong>Mensagem longa demais.</strong> Passou de 50 palavras, ninguém lê no celular.</li>
      <li><strong>Pedir avaliação logo na compra.</strong> O cliente ainda não usou o produto.</li>
      <li><strong>Oferecer cupom pela avaliação.</strong> Quebra a regra do Google e pode derrubar as avaliações.</li>
      <li><strong>Mandar só para os clientes felizes.</strong> É seleção proibida, e o resultado perde credibilidade.</li>
      <li><strong>Deixar a IA responder tudo.</strong> Reclamação pede uma pessoa. Veja o guia de <a href="/artigos/como-melhorar-avaliacoes-e-reputacao-online-com-ia">reputação online com IA</a>.</li>
      <li><strong>Esquecer o onboarding.</strong> Em serviço, o começo importa tanto quanto o fim, como no texto de <a href="/artigos/como-usar-ia-para-melhorar-onboarding-de-clientes">onboarding de clientes</a>.</li>
    </ul>
    <p>Comece esta semana com a mensagem mais simples: o aviso de entrega. Quando ela estiver rodando, adicione uma por quinzena. Para mais ideias de retenção, passe pela categoria de <a href="/categoria/negocios">negócios</a>.</p>
  `,
  faq: [
    {
      question: "O que é pós-venda e para que serve?",
      answer:
        "Pós-venda é o contato com o cliente depois da compra. Serve para confirmar que tudo deu certo, resolver problemas cedo, pedir avaliação e incentivar a recompra. Para negócio pequeno, é uma forma barata de manter o cliente, já que falar com quem já comprou custa menos que atrair um novo.",
    },
    {
      question: "Posso dar desconto em troca de avaliação no Google?",
      answer:
        "Não. A política de avaliações do Perfil da Empresa no Google, consultada em 21/10/2026, proíbe oferecer qualquer coisa de valor em troca de avaliação, como desconto, brinde ou pagamento. Você pode pedir a avaliação, desde que o pedido seja honesto e igual para todos os clientes.",
    },
    {
      question: "Posso pedir avaliação só para quem gostou do produto?",
      answer:
        "Não. A política do Google proíbe pedir avaliação seletivamente apenas para clientes satisfeitos e proíbe desencorajar avaliações negativas. Envie o mesmo pedido para todos os clientes de um período, e use as respostas negativas para melhorar o produto ou o atendimento.",
    },
    {
      question: "Quando é o melhor momento para pedir a avaliação?",
      answer:
        "Depois que o cliente teve tempo de usar o produto. Para itens de consumo, de 10 a 15 dias costuma funcionar. Para produtos que exigem montagem ou uso prolongado, espere mais. O ideal é testar com um grupo de clientes e ajustar o prazo conforme o retorno.",
    },
    {
      question: "A IA pode enviar as mensagens sozinha?",
      answer:
        "Pode escrever e, com ferramentas de automação, até enviar, mas é melhor revisar os modelos antes e deixar respostas e reclamações com uma pessoa. Envie só para quem aceitou receber contato e dê uma forma simples de parar de receber as mensagens.",
    },
  ],
};
