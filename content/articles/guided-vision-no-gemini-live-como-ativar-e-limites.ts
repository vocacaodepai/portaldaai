import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "guided-vision-no-gemini-live-como-ativar-e-limites",
  title: "Guided Vision no Gemini Live: como ativar e quais os limites",
  seoTitle: "Guided Vision no Gemini Live: como ativar e limites",
  excerpt:
    "Guided Vision no Gemini Live descreve o que a câmera do Android enxerga por voz. Veja como ativar, para que serve, onde falha e quais cuidados tomar ao usar.",
  metaDescription:
    "Guided Vision no Gemini Live usa a câmera do Android para descrever rótulos, objetos e cores por voz. Veja como ativar, atalhos, requisitos e o que ele não faz.",
  category: "ferramentas",
  date: "2026-10-19",
  readTime: 7,
  imageQuery: "smartphone camera pointing at medicine label",
  seed: 437,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O Guided Vision é um recurso do Gemini Live para Android que usa a câmera do celular e descreve o ambiente por voz, pensado para pessoas cegas ou com baixa visão.",
    "Para ligar, é preciso habilitar a opção nas configurações do perfil do app Gemini ou criar um atalho de acessibilidade no Android, com TalkBack ou botões de volume.",
    "O próprio Google avisa que ele erra e que não substitui bengala, auxílio de mobilidade nem serve para navegação ou detecção de obstáculos.",
  ],
  content: `
    <p>O Guided Vision no Gemini Live é um recurso para Android em que você abre a câmera do celular e o Gemini descreve, por voz e em tempo real, o que aparece nela: rótulos, objetos, cores, ambientes. Ele foi anunciado pelo Google em 1º de outubro de 2026 e foi pensado para pessoas cegas ou com baixa visão, mas qualquer um pode ajudar um familiar a usá-lo.</p>

    <p>A diferença para uma conversa comum com a IA é a orientação ativa: se a câmera está alta demais, torta ou perto demais, o Gemini fala o que ajustar. Neste guia você vê como ligar o recurso, quais atalhos existem, em que situações ele ajuda, onde ele falha e que cuidados valem na prática. Quem já conhece o <a href="/artigos/gemini-live-com-camera-e-tela-como-usar-no-celular">Gemini Live com câmera e tela</a> vai reconhecer a base, mas aqui o foco é acessibilidade.</p>

    <h2>O que é o Guided Vision e para quem ele foi feito</h2>
    <p>Segundo o <a href="https://blog.google/innovation-and-ai/products/gemini-app/guided-vision-gemini-live/" target="_blank" rel="noopener noreferrer">anúncio do Google</a>, o Guided Vision transforma o Gemini em um parceiro visual conversacional. Você compartilha a câmera durante uma sessão do Gemini Live, e a IA descreve o entorno, responde perguntas de acompanhamento e dá dicas faladas para você enquadrar o que quer ver. É a parte "guiada" do nome: o assistente não só descreve, ele ajuda a posicionar o aparelho.</p>
    <p>O público principal são pessoas cegas, com baixa visão ou que precisam de ajuda visual no dia a dia. O Google afirma que o desenvolvimento envolveu essas comunidades, com testes que incluíram pessoas de países como Índia, Brasil, Singapura, Indonésia e Japão, e uma parceria com a Aira, empresa de assistência visual, cujos especialistas ajudaram com regras de segurança. O texto não informa preço nem plano exigido, então não presuma que haja cobrança extra: confira no seu app.</p>
    <p>Essa é uma aplicação concreta da <a href="/artigos/ia-multimodal-o-que-muda-quando-maquina-ve-ouve-fala">IA multimodal</a>, que combina imagem, voz e texto na mesma conversa. Para muita gente é o primeiro uso realmente útil dessa tecnologia, bem longe de gerar imagens ou resumir textos.</p>

    <h2>O que o Guided Vision faz na prática</h2>
    <p>O Google lista alguns usos centrais. Vale transformar cada um numa situação do seu cotidiano.</p>
    <ul>
      <li><strong>Ler textos pequenos:</strong> rótulos de alimentos, mostradores de eletrodomésticos, cardápio de restaurante com pouca luz.</li>
      <li><strong>Achar objetos:</strong> um fone que caiu, o pote certo de tempero na prateleira.</li>
      <li><strong>Identificar cores e padrões:</strong> se duas peças de roupa combinam, qual camisa é a azul.</li>
      <li><strong>Dar uma visão geral:</strong> como está organizada uma mesa ou um cômodo desconhecido.</li>
    </ul>
    <p>Pense num exemplo: você está na cozinha e quer saber o prazo de validade de uma lata. Com o Guided Vision ligado, você aponta a câmera e pergunta "o que está escrito aqui?". Se o texto está cortado, o assistente pede para você afastar o celular ou inclinar para cima. Depois você pode perguntar se há outra data impressa no fundo. O ganho é a conversa contínua, sem precisar tirar uma foto e ouvir uma descrição fixa.</p>
    <p>Para ler texto em tela ou traduzir o que a câmera enxerga sem falar com o assistente, existem alternativas como o <a href="/artigos/google-tradutor-no-celular-camera-conversa-e-modo-offline">Google Tradutor com câmera</a> e o <a href="/artigos/circle-to-search-pesquisar-e-traduzir-o-que-esta-na-tela">Circle to Search</a>. O Guided Vision é o que une câmera e diálogo por voz com foco em quem precisa de apoio visual.</p>

    <h2>Requisitos: aparelho, app e atualização</h2>
    <p>De acordo com o Google, o recurso chegou em 1º de outubro de 2026 para aparelhos Android compatíveis, com Android 9 ou mais recente. A empresa diz que ele funciona onde o Gemini Live é compatível e não lista países nem idiomas específicos. Também pede que você mantenha o app Gemini e o sistema atualizados. Como o lançamento é gradual, a opção pode demorar a aparecer no seu celular.</p>
    <p>Pela <a href="https://support.google.com/gemini/answer/15274899" target="_blank" rel="noopener noreferrer">página de ajuda do Gemini</a>, o Gemini Live está disponível no app móvel, não na versão web, e exige estar conectado à sua conta do Google com acesso aos apps do Gemini. Em contas de trabalho ou escola, o administrador pode limitar o que funciona. Uma lista rápida antes de começar:</p>
    <ul class="checklist">
      <li>Celular Android com Android 9 ou superior.</li>
      <li>App Gemini e Google App atualizados na loja.</li>
      <li>Conta pessoal do Google conectada ao Gemini.</li>
      <li>Fone de ouvido ou volume alto, caso esteja em local barulhento.</li>
    </ul>

    <h2>Como ativar o Guided Vision passo a passo</h2>
    <p>Há três caminhos descritos pelo Google. Escolha o que combina com a sua rotina.</p>
    <h3>Pelo app Gemini</h3>
    <ol>
      <li>Abra o app Gemini e entre nas configurações do perfil.</li>
      <li>Ative a opção "Use Guided Vision in Live" (o nome pode aparecer em português no seu aparelho).</li>
      <li>Abra o Gemini Live e toque para compartilhar a câmera.</li>
    </ol>
    <h3>Por atalho de acessibilidade do Android</h3>
    <p>Em Configurações, vá a Acessibilidade, depois a Assistência visual e escolha Guided Vision. Dali você pode definir um atalho: botão flutuante, deslizar dois dedos ou apertar as duas teclas de volume. É a forma mais rápida para quem usa o recurso todos os dias.</p>
    <h3>Pelo TalkBack</h3>
    <p>Para quem usa o leitor de tela, um toque com três dedos abre o menu do TalkBack, onde dá para escolher o Guided Vision. A <a href="https://support.google.com/accessibility/android/answer/6283677" target="_blank" rel="noopener noreferrer">ajuda do Android sobre o TalkBack</a> explica o básico do leitor de tela e como começar a usá-lo.</p>
    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Se você está ajudando um familiar, configure o atalho com ele ao lado e treine em objetos que ele já conhece, como a caixa do remédio de sempre. Assim ele aprende o tipo de resposta antes de depender da ferramenta em uma situação importante.</p></div>

    <h2>Perguntas que funcionam bem com a câmera aberta</h2>
    <p>O assistente responde melhor quando a pergunta é específica. Em vez de "o que é isso?", diga o objetivo. Alguns modelos de fala para testar:</p>
    <pre><code>Leia em voz alta o texto desta embalagem e diga se aparece
a data de validade.</code></pre>
    <pre><code>Estou procurando a chave de casa em cima desta mesa. Diga
onde ela está em relação ao copo e me ajude a posicionar a câmera.</code></pre>
    <pre><code>Estas duas camisas combinam? Descreva a cor e o desenho de cada uma.</code></pre>
    <p>Pergunte de novo se a resposta parecer estranha. Pedir "leia só a linha de baixo" ou "me diga as cores uma a uma" costuma dar mais precisão do que uma pergunta genérica. O mesmo raciocínio dos <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">comandos bem escritos</a> vale para voz: contexto e objetivo claros melhoram o resultado.</p>

    <h2>Limites e cuidados: o que o Google avisa</h2>
    <p>O texto do Google é direto: como toda IA generativa, o Guided Vision pode errar. A empresa diz também que ele não é dispositivo médico, nem auxílio de mobilidade, nem substituto da bengala branca. Ele não foi feito para navegação, orientação de trajeto seguro ou detecção de obstáculos. Isso significa: nunca use o recurso para atravessar rua, descer escada ou desviar de buracos.</p>
    <p>Um erro de leitura em medicamento, por exemplo, pode ser perigoso. Trate a descrição como primeira pista e confirme com outra pessoa, com a bula ou com o farmacêutico quando houver risco. O texto sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a> mostra como checar uma resposta que parece segura e pode estar errada. Outro cuidado é com o ambiente: em locais escuros, com reflexo ou texto muito pequeno, a leitura tende a piorar.</p>
    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Dose de remédio, validade crítica, valores em dinheiro e sinalização de trânsito pedem confirmação humana ou outra fonte. Use o Guided Vision como apoio, não como única checagem.</p></div>

    <h2>Privacidade: o que a câmera mostra para a IA</h2>
    <p>Compartilhar a câmera significa enviar imagens do seu entorno para processamento. Evite apontar para documentos com dados pessoais, telas de banco, crachás, receitas com nome completo ou fotos de outras pessoas sem que elas saibam. A página de ajuda do Gemini informa que a câmera desliga quando você coloca o Live em espera, sai do app ou o celular bloqueia a tela, e não volta sozinha, o que reduz o risco de ficar transmitindo sem querer.</p>
    <p>Reveja também o que fica guardado. O guia sobre <a href="/artigos/apagar-historico-do-gemini-e-usar-chat-temporario">apagar o histórico do Gemini e usar chat temporário</a> mostra como controlar as conversas, e o texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">privacidade e IA</a> ajuda a pensar no que não deve ir para a câmera. Se a ideia é usar algo parecido sem enviar imagem para a nuvem, veja como funciona a <a href="/artigos/ia-no-celular-sem-internet-gemini-nano-e-privacidade">IA no celular sem internet</a>, que tem limites bem diferentes.</p>

    <h2>Alternativas e quando o Guided Vision não resolve</h2>
    <p>Se você não tem Android, não tem o recurso liberado ou precisa de algo mais confiável, há outros caminhos. O <a href="/artigos/assistente-de-voz-com-ia-como-usar-no-dia-a-dia">assistente de voz com IA</a> resolve muitas tarefas sem câmera, como ler mensagens e criar lembretes. Os óculos com câmera prometem algo parecido, mas trazem riscos próprios: o texto sobre <a href="/artigos/oculos-inteligentes-com-ia-no-brasil-o-que-fazem-custam-e-privacidade">óculos inteligentes com IA no Brasil</a> detalha o que eles fazem e custam, e a <a href="/noticias/meta-oculos-ray-ban-gravaram-conversas-sem-frase-ativacao">notícia sobre óculos que gravaram conversas</a> mostra por que privacidade importa. Para organizar fotos e arquivos depois, o guia de <a href="/artigos/ia-para-organizar-fotos-arquivos-menos-bagunca-digital">organização digital com IA</a> é outra via.</p>
    <p>Em serviços de assistência humana por vídeo, como o da Aira citada pelo Google, uma pessoa treinada descreve o ambiente. Isso nem sempre está disponível e pode ter custo, mas é a escolha mais segura quando o erro custa caro. A melhor combinação costuma ser o Guided Vision para as pequenas tarefas e ajuda humana para o que é crítico.</p>

    <h2>Erros comuns ao usar o recurso</h2>
    <ul>
      <li>Confiar na leitura sem conferir quando o assunto é saúde, dinheiro ou segurança.</li>
      <li>Segurar o celular muito perto do rótulo, o que desfoca o texto.</li>
      <li>Perguntar de forma vaga, sem dizer o que se quer descobrir.</li>
      <li>Usar em lugar escuro sem acender a luz.</li>
      <li>Esquecer de atualizar o app e achar que o recurso não existe.</li>
      <li>Apontar a câmera para dados de terceiros sem pensar na privacidade.</li>
    </ul>

    <h2>Vale testar já?</h2>
    <p>Se você tem Android compatível, vale abrir as configurações do Gemini e conferir se a opção já apareceu, mesmo que não precise dela hoje: ajudar um familiar a configurar costuma ser o melhor uso. Para saber quais planos trazem os recursos mais novos do assistente, leia o guia <a href="/artigos/google-ai-plus-pro-ou-ultra-qual-plano-do-gemini-escolher">Google AI Plus, Pro ou Ultra: qual plano do Gemini escolher</a>, lembrando que o Google não informou plano para o Guided Vision. Volte à categoria de ferramentas do Portal da AI para acompanhar o que muda no Gemini, no ChatGPT e nos outros assistentes.</p>
  `,
  faq: [
    {
      question: "O que é o Guided Vision do Gemini?",
      answer:
        "É um recurso do Gemini Live para Android que usa a câmera do celular e descreve o ambiente por voz, em tempo real. O Google o apresentou em 1º de outubro de 2026 para pessoas cegas ou com baixa visão. Ele responde perguntas e orienta como posicionar a câmera, mas pode errar.",
    },
    {
      question: "Como ativar o Guided Vision no celular?",
      answer:
        "Abra as configurações do perfil no app Gemini e ative a opção de usar o Guided Vision no Live. Depois abra o Gemini Live e compartilhe a câmera. Também há atalhos em Configurações, Acessibilidade, Assistência visual, e um acesso pelo menu do TalkBack com toque de três dedos.",
    },
    {
      question: "O Guided Vision funciona no iPhone?",
      answer:
        "O anúncio do Google fala em aparelhos Android com Android 9 ou superior e não menciona iPhone. Por isso, a informação confirmada é só para Android. Se isso mudar, a empresa deve comunicar no blog oficial e nas páginas de ajuda do Gemini.",
    },
    {
      question: "O Guided Vision é pago ou exige plano do Gemini?",
      answer:
        "O texto do Google não menciona preço nem plano exigido. Como a liberação é gradual, o mais seguro é conferir no seu app se a opção apareceu. Antes de assinar qualquer plano por causa dele, confirme a exigência na página oficial, porque ela pode mudar.",
    },
    {
      question: "Posso usar o Guided Vision para me locomover na rua?",
      answer:
        "Não. O Google diz que o recurso não é auxílio de mobilidade nem substituto da bengala branca e que não serve para navegação, trajeto seguro ou detecção de obstáculos. Use-o para ler rótulos, achar objetos e identificar cores, nunca para atravessar rua ou evitar riscos.",
    },
  ],
};
