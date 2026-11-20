import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "ferramenta-mapa-do-gemini-como-usar-no-celular-e-limites",
  title: "Ferramenta Mapa do Gemini: como usar no celular e limites",
  seoTitle: "Ferramenta Mapa do Gemini: como usar no celular",
  excerpt:
    "A ferramenta Mapa do Gemini deixa você anexar uma área do mapa ao pedido. Veja o passo a passo no celular, prompts úteis, limites e cuidados com localização.",
  metaDescription:
    "Ferramenta Mapa do Gemini: onde fica no app, como marcar uma área com Explorar esta área, prompts para bairro, ponto comercial e passeio, e o que ela não faz.",
  category: "ferramentas",
  date: "2026-10-23",
  readTime: 7,
  imageQuery: "person holding smartphone city map street",
  seed: 614,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "A ferramenta Mapa do Gemini fica no carrossel de anexos do app (depois de Fotos, Câmera, Avatar, Arquivos, Drive e Notebooks), abre um mapa ao vivo e anexa ao pedido a área que você escolheu.",
    "Ela existe só no celular (Android e iOS), segundo a 9to5Google; a reportagem não cita limite de uso, plano exigido nem lista de regiões, então vale conferir no seu app.",
    "Use para perguntas ligadas a um lugar, como bairro, ponto comercial e passeio, e confirme horário, endereço e preço no Google Maps antes de sair de casa, porque o chat pode errar.",
  ],
  content: `
    <p>A ferramenta Mapa do Gemini é uma opção do app do Gemini no celular que abre um mapa ao vivo, deixa você ajustar a área que quer explorar e anexa essa região ao seu pedido. Em vez de digitar o nome do bairro e torcer para a IA entender, você marca o lugar no mapa e escreve a pergunta em cima dele.</p>

    <p>O recurso apareceu em reportagens em outubro de 2026 e, segundo a 9to5Google, já está amplamente liberado. Este guia mostra onde encontrar a opção, o passo a passo, prompts para situações reais (mudança, ponto comercial, passeio, almoço), o que o recurso não promete e os cuidados com localização e privacidade. As informações foram conferidas em 23/10/2026 nas reportagens e na página de ajuda do Google citadas ao longo do texto.</p>

    <h2>O que é a ferramenta Mapa do Gemini</h2>

    <p>É um dos itens do carrossel de anexos que aparece quando você toca no botão de mais, na caixa de mensagem do app. A <a href="https://9to5google.com/2026/10/02/gemini-app-map-tool/" target="_blank" rel="noopener noreferrer">9to5Google, em reportagem de 02/10/2026</a>, descreve o Mapa como a última opção do carrossel, depois de Fotos, Câmera, Avatar, Arquivos, Drive e Notebooks. Ao tocar nele, abre-se um mapa ao vivo centrado na sua localização, com uma área circular de foco.</p>

    <p>A ideia é simples: a pergunta deixa de ser vaga. "Quais restaurantes ficam por aqui?" não diz o que é "aqui". Com o mapa anexado, o pedido carrega a região, e a resposta tende a ficar mais ligada ao lugar. A <a href="https://www.androidauthority.com/gemini-app-map-tool-3718688/" target="_blank" rel="noopener noreferrer">Android Authority</a> informa que o recurso foi visto pela primeira vez em fevereiro e agora está amplamente liberado, em Android e iOS.</p>

    <p>Não confunda com os apps conectados do Gemini, que ligam a IA ao Google Maps, à Agenda e ao YouTube para consultar dados dessas contas. O guia sobre <a href="/artigos/apps-conectados-do-gemini-agenda-maps-e-youtube-como-usar">apps conectados do Gemini</a> explica essa outra via. Aqui, o ponto é mais direto: você escolhe visualmente a área e anexa ao pedido.</p>

    <h2>Passo a passo no celular</h2>

    <p>Segundo a 9to5Google, o fluxo é este:</p>

    <ol>
      <li>Abra o app do Gemini no Android ou no iPhone.</li>
      <li>Toque no botão de mais, perto da caixa de mensagem, e role o carrossel até <strong>Mapa</strong>, a última opção.</li>
      <li>Um mapa ao vivo abre centrado na sua posição, com um círculo marcando a área de foco.</li>
      <li>Aproxime ou afaste com os dedos para ajustar o tamanho da área.</li>
      <li>Para outro lugar, toque na lupa no canto superior direito e busque o endereço ou o nome do bairro.</li>
      <li>Toque em <strong>Explorar esta área</strong> (no app em inglês, "Explore this area"). A caixa de mensagem passa a mostrar "Map Area" (área do mapa).</li>
      <li>Escreva sua pergunta e envie.</li>
    </ol>

    <p>A Android Authority acrescenta que há um X, do lado oposto à lupa, para sair do mapa sem anexar nada. Os nomes dos botões podem aparecer em português ou em inglês, conforme o idioma do aparelho e a versão do app, e podem mudar com atualizações.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Só no celular</span><p>A 9to5Google informa que a opção não está disponível na versão web do Gemini. Se você não achar o Mapa no computador, é esperado. Procure no app do celular, e atualize o app se o carrossel não mostrar a opção.</p></div>

    <h2>O que perguntar: quatro situações práticas</h2>

    <p>Como a ferramenta anexa uma região, as melhores perguntas são as que dependem de um lugar. Os prompts abaixo são sugestões, e nenhum depende de recurso além do descrito nas reportagens.</p>

    <h3>1. Conhecer um bairro antes de se mudar</h3>

    <pre><code>Com base na área do mapa que anexei, me ajude a montar uma lista de perguntas para avaliar este bairro antes de alugar um apartamento aqui: transporte, mercado, farmácia, escola, barulho à noite e segurança. Diga o que eu devo verificar presencialmente e em quais fontes oficiais, sem afirmar nada que você não tenha como confirmar.</code></pre>

    <p>Pedir uma lista de verificação é melhor do que pedir um veredito. A IA não sabe, por exemplo, se a rua tem barulho de bar na sexta-feira. Para segurança, procure dados oficiais e converse com moradores.</p>

    <h3>2. Pensar em um ponto comercial</h3>

    <pre><code>Estou avaliando abrir uma [tipo de negócio] nesta área do mapa. Liste os tipos de negócio vizinhos que costumam gerar fluxo de pessoas, o que eu devo observar em um dia de semana e em um sábado, e 8 perguntas para fazer ao dono do imóvel antes de assinar. Não dê estimativa de faturamento.</code></pre>

    <p>A última frase é um cuidado importante: nenhuma ferramenta de chat tem como prever o faturamento de um ponto. O guia de <a href="/artigos/como-validar-ideia-de-negocio-com-ia-antes-de-investir">validação de ideia de negócio com IA</a> propõe testes baratos antes de gastar com aluguel.</p>

    <h3>3. Montar um passeio ou um dia de viagem</h3>

    <pre><code>Quero passar 4 horas a pé nesta área do mapa com uma criança de 7 anos. Sugira um roteiro com 3 paradas, pausas para lanche e um plano B se chover. Mostre o que preciso conferir (horário, ingresso, fechamento) em cada parada antes de ir.</code></pre>

    <p>Quem planeja viagem encontra mais método no guia de <a href="/artigos/planejar-viagem-com-ia-roteiro-orcamento-e-checagem-antes-de-reservar">planejar viagem com IA</a>, e o Mapa entra como atalho para dar contexto geográfico ao pedido.</p>

    <h3>4. Decidir onde comer ou onde resolver as tarefas do dia</h3>

    <pre><code>Estou nesta área do mapa e tenho 1 hora livre. Sugira como organizar em ordem uma ida à farmácia, ao banco e um almoço rápido, e me diga como confirmar o horário de funcionamento de cada um.</code></pre>

    <h2>Mapa do Gemini ou Google Maps: quem faz o quê</h2>

    <table>
      <thead>
        <tr><th>Tarefa</th><th>Melhor ferramenta</th><th>Por quê</th></tr>
      </thead>
      <tbody>
        <tr><td>Conferir horário, telefone e avaliações de um lugar</td><td>Google Maps</td><td>É a fonte do perfil do local, que o dono mantém atualizado</td></tr>
        <tr><td>Traçar rota e ver o trânsito em tempo real</td><td>Google Maps</td><td>Foi feito para navegação</td></tr>
        <tr><td>Organizar ideias e perguntas sobre uma região</td><td>Mapa do Gemini</td><td>Combina a área escolhida com uma conversa em linguagem natural</td></tr>
        <tr><td>Comparar opções e montar roteiro de meio dia</td><td>Mapa do Gemini</td><td>Ajuda a estruturar, mas as informações finais devem ser conferidas</td></tr>
        <tr><td>Decidir onde pegar o ônibus agora</td><td>Google Maps</td><td>Depende de dado ao vivo</td></tr>
      </tbody>
    </table>

    <p>A regra de bolso: use o Gemini para pensar e o Google Maps para confirmar. Se a conversa citar um lugar, abra-o no Maps e confira o horário, o endereço e as avaliações recentes antes de se deslocar. Se o dono do local mantém o perfil em dia, como no guia de <a href="/artigos/perfil-da-empresa-no-google-com-ia-respostas-fotos-e-posts">Perfil da Empresa no Google</a>, essa informação está no Maps.</p>

    <h2>Limites e o que as reportagens não dizem</h2>

    <p>As matérias consultadas não trazem limite diário de uso, plano obrigatório nem lista de países onde o Mapa funciona. A 9to5Google diz apenas que a liberação é ampla, e a Android Authority também não especifica quem recebe. Por isso, não prometa a ninguém que o recurso vai aparecer no aparelho dele. Se a opção não estiver no carrossel, verifique estas hipóteses, nesta ordem:</p>

    <ul class="checklist">
      <li>O app do Gemini está atualizado na loja de aplicativos?</li>
      <li>Você está no app do celular, e não no navegador do computador?</li>
      <li>A conta é pessoal ou de trabalho/escola? Contas de trabalho às vezes têm recursos controlados pelo administrador, tema do guia sobre o <a href="/artigos/menu-personalizar-do-gemini-skills-apps-e-controle-para-admins">menu Personalizar do Gemini</a>.</li>
      <li>A liberação gradual pode ainda não ter chegado à sua conta; tente de novo em alguns dias.</li>
    </ul>

    <p>Outro limite é a qualidade da resposta. A IA conversa bem, mas pode citar um lugar que fechou, errar uma distância ou inventar um detalhe. O texto sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a> mostra como checar. E a reportagem não explica quais dados do mapa o Gemini efetivamente lê; trate a ferramenta como apoio de conversa, não como fonte de verdade geográfica.</p>

    <h2>Localização e privacidade</h2>

    <p>O mapa abre centrado na sua posição, e isso pede atenção. A <a href="https://support.google.com/gemini/answer/13275745" target="_blank" rel="noopener noreferrer">página de ajuda do Google sobre o uso dos apps do Gemini</a> explica que o Gemini pode usar a sua localização para dar respostas mais relevantes, seja a localização geral, seja a precisa do aparelho se você permitir, e mostra como verificar e atualizar essa permissão na versão web. As configurações do app de celular ficam em artigo separado, na central de ajuda do Google.</p>

    <p>Na prática: antes de anexar a área onde você mora ou trabalha a uma conversa, lembre que a pergunta e a região ficam no histórico. Se não quiser isso, use o recurso em modo de conversa temporária ou apague a atividade depois, como mostra o guia para <a href="/artigos/apagar-historico-do-gemini-e-usar-chat-temporario">apagar o histórico do Gemini e usar o chat temporário</a>. Para entender o que mais você entrega aos assistentes sem notar, vale ler <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a>.</p>

    <h2>Erros comuns ao usar o Mapa</h2>

    <ul>
      <li><strong>Marcar uma área enorme.</strong> Quanto maior a região, mais genérica a resposta. Comece com poucos quarteirões.</li>
      <li><strong>Tratar a lista da IA como oficial.</strong> Ela é um ponto de partida. Confirme tudo no perfil do lugar.</li>
      <li><strong>Esquecer de dizer o que você quer.</strong> "Map Area" sozinho não é pergunta. Diga a tarefa, o tempo e as restrições.</li>
      <li><strong>Pedir dados em tempo real.</strong> Trânsito, fila e lotação mudam a cada minuto; use o app de navegação.</li>
      <li><strong>Compartilhar a área da sua casa sem pensar.</strong> Se a conversa for compartilhada com alguém, o endereço vai junto.</li>
    </ul>

    <h2>Uma mudança vizinha: o arroba no lugar da barra</h2>

    <p>A mesma reportagem da 9to5Google registra que, na versão beta 17.63 do app do Google, a barra usada para chamar skills está sendo trocada pelo arroba, símbolo que já serve para os apps conectados. É uma mudança em teste e separada do Mapa, e pode demorar ou mudar até chegar a todos. Para quem usa skills e conectores no dia a dia, vale acompanhar o guia sobre as <a href="/artigos/gemini-gems-viram-skills-o-que-muda-e-como-migrar">Gems que viram skills</a>.</p>

    <h2>Próximo passo</h2>

    <p>Abra o app do Gemini agora, toque no mais, procure o Mapa no fim do carrossel e faça um teste simples com um lugar que você conhece bem, como o seu bairro. Compare a resposta com o que você sabe, anote o que a IA acertou e o que errou e só depois use em decisões novas. Para ver outras novidades do Gemini, como a visão guiada, leia o texto sobre o <a href="/artigos/guided-vision-no-gemini-live-como-ativar-e-limites">Guided Vision no Gemini Live</a> ou visite a <a href="/categoria/ferramentas">categoria de ferramentas</a>.</p>
  `,
  faq: [
    {
      question: "Onde fica a ferramenta Mapa no Gemini?",
      answer:
        "Segundo a 9to5Google, fica no carrossel de anexos do app do Gemini no celular, aberto pelo botão de mais. É a última opção, depois de Fotos, Câmera, Avatar, Arquivos, Drive e Notebooks. Ao tocar nela, abre-se um mapa ao vivo com uma área circular que você pode ajustar.",
    },
    {
      question: "O Mapa do Gemini funciona no computador?",
      answer:
        "Segundo a 9to5Google, a opção não está disponível na versão web. A ferramenta aparece no app do Gemini para Android e iOS. Se você não encontrar no navegador, abra o app do celular e confira se ele está atualizado.",
    },
    {
      question: "A ferramenta Mapa do Gemini é grátis?",
      answer:
        "As reportagens consultadas não citam plano exigido nem limite de uso. Dizem apenas que o recurso está amplamente liberado. Como as regras de planos mudam, confira no próprio app e na página oficial do Google antes de supor que existe cobrança ou restrição na sua conta.",
    },
    {
      question: "O que significa Explorar esta área?",
      answer:
        "É o botão que anexa ao seu pedido a região visível no mapa. Depois de tocar nele, a caixa de mensagem mostra Map Area, e você escreve a pergunta sobre aquele lugar. O Gemini passa a ter a região como referência para responder.",
    },
    {
      question: "O Gemini usa minha localização quando eu abro o Mapa?",
      answer:
        "O mapa abre centrado na sua posição, e a página de ajuda do Google diz que o Gemini pode usar sua localização geral ou, se você permitir, a precisa para respostas mais relevantes. Revise as permissões do aparelho e do app, e evite anexar áreas sensíveis, como sua casa, em conversas que serão compartilhadas.",
    },
  ],
};
