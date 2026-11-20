import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "atendimento-fora-do-horario-mensagem-de-ausencia-e-retorno-organizado-com-ia",
  title: "Atendimento fora do horário: mensagem de ausência e retorno",
  seoTitle: "Atendimento fora do horário: ausência e retorno",
  excerpt:
    "Veja como configurar mensagem de ausência no WhatsApp Business, escrever textos que seguram o cliente e organizar o retorno do dia seguinte com ajuda de IA.",
  metaDescription:
    "Atendimento fora do horário no pequeno negócio: configure a mensagem de ausência no WhatsApp Business, use prompts de IA e crie uma fila de retorno sem perder cliente.",
  category: "negocios",
  articleSubcategory: "atendimento",
  date: "2026-10-23",
  readTime: 7,
  imageQuery: "shop owner phone evening desk",
  seed: 574,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "A mensagem de ausência avisa o cliente que você viu o contato, diz quando responde e oferece um caminho para urgências, o que reduz a desistência de quem chegou à noite.",
    "No WhatsApp Business, o caminho é Configurações, Ferramentas comerciais, Mensagem de ausência, com opções de envio sempre, fora do horário ou em horário programado.",
    "A IA ajuda a escrever textos por tipo de cliente e a montar a fila de retorno da manhã, mas a mensagem precisa prometer só o prazo que o negócio cumpre.",
  ],
  content: `
    <p>O atendimento fora do horário no pequeno negócio se resolve com uma mensagem de ausência clara e uma rotina de retorno na manhã seguinte. A mensagem diz que o contato foi recebido, informa quando a resposta chega e dá um caminho para urgências. A rotina garante que cada conversa da noite vire resposta antes do meio-dia.</p>

    <p>Quem manda mensagem às 21h quer saber se foi ouvido. Se ninguém responde, uma parte desiste e procura o concorrente. Neste guia você configura a mensagem no WhatsApp Business, usa a IA para escrever variações, monta a fila de retorno e vê os erros que fazem a automação atrapalhar em vez de ajudar.</p>

    <h2>Por que a mensagem de ausência importa</h2>

    <p>A página do <a href="https://whatsappbusiness.com/products/business-app/" target="_blank" rel="noopener noreferrer">WhatsApp Business</a> descreve que o aplicativo permite cumprimentar as pessoas assim que elas iniciam a conversa e responder mensagens mesmo quando você está ausente. É a base do atendimento fora do horário: o cliente recebe uma resposta imediata, mesmo que seja só para dizer quando virá a resposta de verdade.</p>

    <p>Isso não substitui atender. A mensagem de ausência compra tempo e evita a sensação de abandono. Para dúvidas repetitivas, o guia sobre <a href="/artigos/como-automatizar-atendimento-no-whatsapp-com-ia">como automatizar atendimento no WhatsApp com IA</a> vai além, e o texto sobre o <a href="/artigos/whatsapp-business-para-pequeno-negocio-catalogo-etiquetas-e-respostas">WhatsApp Business para pequeno negócio</a> cobre catálogo, etiquetas e respostas rápidas.</p>

    <h2>Como configurar no WhatsApp Business</h2>

    <p>O passo a passo descrito pelo <a href="https://zenvia.com/blog/mensagem-de-ausencia/" target="_blank" rel="noopener noreferrer">blog da Zenvia</a> segue este caminho. Os nomes de menu podem mudar conforme a versão do aplicativo, então confira no seu celular.</p>

    <ol>
      <li>Abra o WhatsApp Business e vá em Configurações.</li>
      <li>Toque em Ferramentas comerciais e escolha Mensagem de ausência.</li>
      <li>Ative o envio da mensagem de ausência.</li>
      <li>Escreva o texto, com o horário de atendimento e, se precisar, um contato alternativo.</li>
      <li>Escolha quando enviar: sempre, só fora do horário de atendimento ou em horário programado.</li>
      <li>Escolha os destinatários: todos os contatos, todos exceto alguns, ou só contatos selecionados.</li>
      <li>Salve e teste mandando uma mensagem de outro número fora do horário.</li>
    </ol>

    <p>Defina também o horário de funcionamento no perfil comercial, para o cliente ver os dias e horas antes de chamar. Se a mensagem não dispara, o blog sugere verificar a conexão com a internet e reiniciar o aplicativo.</p>

    <h2>O que escrever: modelo de mensagem que segura o cliente</h2>

    <p>Uma boa mensagem de ausência é curta e tem quatro partes: agradecimento, horário de atendimento, prazo de resposta e caminho para urgência. O blog da Zenvia recomenda manter o texto objetivo e incluir horário, prazo estimado, contato urgente e links úteis. Um exemplo:</p>

<pre><code>Olá! Obrigado pelo contato com a Padaria Bom Pão. Nosso atendimento é de segunda a sábado, das 7h às 19h. Recebemos sua mensagem e respondemos amanhã até as 10h. Para encomendas de bolo, o cardápio está em nosso catálogo. Urgência de retirada: ligue (00) 0000-0000.</code></pre>

    <p>Repare no prazo concreto, "até as 10h", em vez de "em breve". E só prometa o que você cumpre: se às 10h a loja ainda estiver sem ninguém, a promessa vira motivo de reclamação.</p>

    <h3>Variações por tipo de negócio</h3>

    <ul>
      <li>Loja virtual: avise que pedidos feitos fora do horário entram na fila da manhã e indique onde acompanhar o pedido.</li>
      <li>Prestador de serviço (clínica, estúdio, oficina): ofereça o link de agendamento, como no guia de <a href="/artigos/agenda-online-para-negocio-de-servico-menos-faltas-com-google-agenda-e-ia">agenda online com IA</a>.</li>
      <li>Restaurante e delivery: informe o horário das entregas e o cardápio do dia.</li>
    </ul>

    <h2>Usando a IA para escrever e adaptar as mensagens</h2>

    <p>A IA acelera a escrita, mas precisa dos fatos do seu negócio. Cole horário, prazo e regras reais e peça variações:</p>

<pre><code>Escreva 3 versões de mensagem de ausência para o WhatsApp Business de uma [tipo de negócio] em [cidade]. Dados: atendimento de [dias e horas], resposta até [horário] do próximo dia útil, urgência pelo telefone [número]. Tom: [simpático e direto]. Máximo de 45 palavras cada. Não invente promoção nem prazo.</code></pre>

<pre><code>Reescreva a mensagem abaixo para um cliente que reclama de atraso. Seja empático, não ofereça compensação, diga que um atendente humano responde até as 10h e peça o número do pedido.</code></pre>

    <p>Leia o resultado antes de salvar. Se o texto prometer "resposta em 5 minutos" ou desconto que você não deu, corte. Para quem quer ir além do texto fixo, os guias sobre <a href="/artigos/como-criar-chatbot-de-atendimento-para-seu-site-sem-programar">chatbot para o site</a> e sobre <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">agente, chatbot ou automação</a> explicam as opções.</p>

    <h2>A fila de retorno: o que fazer na manhã seguinte</h2>

    <p>A mensagem de ausência só funciona se o retorno acontece. Monte uma rotina de 20 minutos ao abrir:</p>

    <ol>
      <li>Liste todas as conversas da noite e marque com etiqueta (urgente, orçamento, dúvida, pós-venda).</li>
      <li>Responda primeiro as urgentes e os pedidos de orçamento, que esfriam mais rápido.</li>
      <li>Use respostas rápidas para as dúvidas repetidas e personalize a primeira linha com o nome.</li>
      <li>Registre o que ficou pendente e o prazo prometido.</li>
    </ol>

    <p>Dá para pedir à IA que organize as conversas coladas em uma tabela:</p>

<pre><code>Segue o texto de 12 conversas de ontem à noite, sem dados pessoais. Monte uma tabela com: assunto, urgência (alta, média, baixa), próxima ação e sugestão de resposta curta. Ordene da mais urgente para a menos urgente.</code></pre>

    <div class="callout-box callout-warn"><span class="callout-label">Cuidado com dados</span><p>Ao colar conversas em uma IA, retire nome completo, CPF, endereço e telefone. O checklist de <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">LGPD para pequeno negócio que usa IA</a> mostra o que pode e o que não pode ir para a ferramenta.</p></div>

    <h2>Exemplo com números: uma loja de roupas online</h2>

    <p>Imagine uma loja de roupas com atendimento das 9h às 18h, que recebe cerca de 15 mensagens por dia, 5 delas depois das 18h. Sem mensagem de ausência, essas 5 ficam sem resposta até a manhã seguinte. Com a mensagem, o cliente sabe que a resposta vem até as 10h. Se a dona gasta 20 minutos na fila de retorno, ela responde as 5 em cerca de 4 minutos cada, antes de abrir o caixa.</p>

    <p>Os números são hipotéticos e servem para dimensionar a rotina. Meça o seu: conte por uma semana quantas mensagens chegam fora do horário e quanto tempo cada uma leva. É com esse dado que você decide se basta a mensagem de ausência ou se vale ter um chatbot, como discute o texto do <a href="https://blog.rn.sebrae.com.br/chatbot-para-atendimento-ao-cliente/" target="_blank" rel="noopener noreferrer">Sebrae sobre chatbots no atendimento</a>, que recomenda uma transição suave para um atendente humano nos casos complexos.</p>

    <h2>Erros comuns no atendimento fora do horário</h2>

    <ul class="checklist">
      <li>Mensagem de ausência ligada o tempo todo: o cliente que fala em pleno expediente recebe aviso de que você não está.</li>
      <li>Prazo vago ("em breve") ou irreal ("em 5 minutos") que não é cumprido.</li>
      <li>Texto longo demais: ninguém lê parágrafo de 10 linhas no celular.</li>
      <li>Nenhum caminho para urgência: quem precisa de ajuda de verdade fica sem saída.</li>
      <li>Esquecer o retorno: a mensagem automática sem resposta humana piora a imagem.</li>
      <li>Mandar propaganda na mensagem de ausência: para campanha, siga o guia de <a href="/artigos/campanha-de-whatsapp-opt-in-lista-e-mensagens-com-ia-sem-risco-de-banimento">campanha de WhatsApp com opt-in</a>.</li>
    </ul>

    <p>Depois do atendimento, vale fechar o ciclo com o <a href="/artigos/pos-venda-com-ia-mensagem-de-acompanhamento-e-pedido-de-avaliacao">pós-venda com IA</a> e medir a experiência com uma <a href="/artigos/pesquisa-de-satisfacao-com-ia-analisar-respostas-de-clientes">pesquisa de satisfação</a>. Para visão geral do tema, leia como a <a href="/artigos/como-ia-esta-mudando-atendimento-ao-cliente">IA está mudando o atendimento ao cliente</a>.</p>

    <h2>Comece hoje</h2>

    <p>Ative a mensagem de ausência hoje à noite, escreva um texto com prazo que você cumpre e reserve 20 minutos amanhã cedo para a fila de retorno. Depois de uma semana, compare quantos contatos viraram venda ou agendamento. Se o volume noturno crescer, o guia de <a href="/artigos/sac-com-ia-protocolo-prazo-de-resposta-e-quando-chamar-humano">SAC com IA, protocolo e prazo de resposta</a> mostra o próximo passo.</p>
  `,
  faq: [
    {
      question: "Como colocar mensagem de ausência no WhatsApp Business?",
      answer:
        "Abra Configurações, toque em Ferramentas comerciais e escolha Mensagem de ausência. Ative o envio, escreva o texto, defina quando enviar (sempre, fora do horário ou programado) e escolha os destinatários. Os nomes de menu podem variar conforme a versão do aplicativo.",
    },
    {
      question: "Mensagem de ausência e saudação são a mesma coisa?",
      answer:
        "Não. A saudação recebe quem inicia uma conversa, e a mensagem de ausência responde quando você não está disponível. O WhatsApp Business oferece as duas ferramentas. Use a saudação para boas-vindas e a ausência para informar horário e prazo de retorno.",
    },
    {
      question: "O que escrever na mensagem de ausência?",
      answer:
        "Agradeça o contato, informe o horário de atendimento, diga quando haverá resposta e dê um caminho para urgências. Mantenha o texto curto e sem promessas que o negócio não cumpre. Evite colocar propaganda ou promoção nessa mensagem.",
    },
    {
      question: "A IA pode responder o cliente fora do horário sozinha?",
      answer:
        "Pode, com um chatbot, mas nem todo negócio precisa. Para dúvidas simples e repetitivas, ajuda. Para reclamações e casos complexos, o Sebrae recomenda uma transição suave para um atendente humano. Comece com mensagem de ausência e evolua conforme o volume.",
    },
    {
      question: "Posso colar conversas de clientes na IA para organizar o retorno?",
      answer:
        "Só com cuidado. Retire nome completo, CPF, endereço, telefone e qualquer dado sensível antes de colar, e use apenas ferramentas que você confia. Dados de clientes são tratados pela LGPD, então defina regras claras para a equipe sobre o que pode ir para a IA.",
    },
  ],
};
