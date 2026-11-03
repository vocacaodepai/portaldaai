import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "apple-siri-ai-aberta-todos-desenvolvedores-app-intents-skills",
  title: "Apple abre a Siri AI para qualquer app e cria skills que juntam ações",
  summary:
    "No beta do iOS 27.3, qualquer app pode se integrar à Siri AI via App Intents e criar skills com várias ações. Envio à App Store só na primavera dos EUA.",
  author: "Bruno Danello",
  sourceName: "Apple Developer, The Verge",
  sourceUrl: "https://developer.apple.com/news/?id=gdk2umrf",
  date: "2026-11-03",
  publishedAt: "2026-11-03T17:23:00-03:00",
  imageQuery: "Apple Siri iPhone",
  topic: "lancamentos",
  content: `
    <p>A Apple abriu a Siri AI, a nova versão com inteligência artificial da sua assistente de voz, para qualquer desenvolvedor de aplicativos. O anúncio foi feito nesta terça-feira (3) no portal da Apple para desenvolvedores, junto com as primeiras versões beta do iOS 27.3, do iPadOS 27.3, do macOS 27.3 e do visionOS 27.3. Na prática, um app de entrega, de banco, de reserva de restaurante ou de transporte poderá deixar que a Siri AI execute tarefas dentro dele a partir de um pedido em linguagem natural, inclusive em português.</p>

    <p>A novidade vem em formato de prévia para desenvolvedores, a chamada Developer Preview. Isso quer dizer que, por enquanto, só quem instala o beta e programa para as plataformas da Apple consegue testar. Segundo a empresa, a chegada aos usuários comuns está prevista para daqui a alguns meses, e o envio de apps com essa integração para a App Store só será aberto na primavera do hemisfério norte, estação que vai de março a junho, sem data exata. O site The Verge também destacou o anúncio e lembrou que, até agora, a Apple tinha liberado apenas um conjunto menor de recursos da Siri AI a terceiros.</p>

    <h2>O que muda para os aplicativos</h2>
    <p>A integração usa o App Intents, a estrutura que a Apple já oferece para que apps exponham ações e conteúdo ao sistema, a mesma que hoje alimenta os Atalhos e a Siri tradicional. A diferença é que, com a prévia, qualquer app pode levar essas ações para a Siri AI e aproveitar os recursos novos da assistente. A Apple cita quatro deles: o entendimento do contexto pessoal do usuário, a percepção do que está na tela, a compreensão de linguagem natural e a capacidade de executar ações personalizadas criadas pelo próprio desenvolvedor.</p>

    <p>Os exemplos dados pela empresa são bem cotidianos: verificar uma entrega, reservar uma mesa ou fazer um pedido. O usuário não precisa decorar comandos fixos, basta pedir com as próprias palavras. Segundo a documentação citada pelo The Verge, a pessoa também não precisará dizer o nome do app quando ele estiver aberto na tela, quando houver uma Atividade ao Vivo em andamento ou quando a conversa com a Siri AI já for sobre aquele app.</p>

    <p>A Apple deu um exemplo com um app de corrida por aplicativo. A pessoa pede um carro, acompanha a chegada pela Atividade ao Vivo na tela de bloqueio e, enquanto espera, diz algo como "Siri, muda o endereço de embarque", sem abrir o app nem repetir o nome do serviço. A assistente entende o contexto e chama a ação certa dentro do aplicativo.</p>

    <h2>Skills: várias ações num pedido só</h2>
    <p>A segunda novidade é o que a Apple chama de skills. Elas permitem que o desenvolvedor ensine a Siri AI a combinar várias ações em uma única experiência, para pedidos mais complexos. Em vez de o usuário encadear passos manualmente, como abrir o app, buscar um produto, escolher uma opção e confirmar, o app pode descrever esse fluxo inteiro como uma skill, e a assistente executa tudo a partir de um pedido só.</p>

    <p>O nome lembra um movimento parecido de outras empresas de IA. A Anthropic, por exemplo, transformou em padrão aberto as Agent Skills, pacotes de instruções que ensinam agentes a fazer tarefas específicas, assunto que explicamos em <a href="/artigos/agent-skills-padrao-aberto-o-que-sao-skills-de-agentes-de-ia-e-por-que-importam">o que são skills de agentes de IA e por que importam</a>. A Apple não diz que as suas skills seguem esse padrão: pelo que foi descrito, são uma camada própria construída sobre o App Intents.</p>

    <p>Há ainda um terceiro ajuste, mais técnico. A Siri AI agora consegue mostrar qualquer item que o app tenha registrado no índice semântico do Spotlight, a busca interna do sistema, e não só os que se encaixavam nos formatos predefinidos pela Apple. Para o usuário, isso significa que a assistente pode encontrar uma receita salva, um pedido antigo ou um documento dentro de um app de terceiros mesmo que ele não seja de uma categoria que a Apple já conhecia.</p>

    <h2>Os apps da própria Apple vão na frente</h2>
    <p>A Apple informou que já começou a levar esses recursos para os próprios aplicativos: Calendário, Arquivos, Finder, Diário, Mail, Mapas, Mensagens, Música, Notas, Fotos, Pré-Visualização, Lembretes, Safari, Atalhos e Tempo. Os exemplos citados são achar uma cafeteria visitada na semana passada ou arquivar arquivos que não são abertos há mais de um ano. Segundo a empresa, o usuário pode perguntar à própria Siri AI o que ela consegue fazer em cada app.</p>

    <p>Para quem programa, a Apple vai fazer sessões de perguntas com engenheiros, as Apple Intelligence Group Labs, nos dias 4 e 5 de novembro, e prometeu publicar mais detalhes sobre os termos e as políticas de uso das experiências feitas com a Siri AI. Esse é um ponto em aberto: a empresa ainda não disse quais regras os apps terão de seguir nem se haverá algum tipo de cobrança ou de revisão específica.</p>

    <h2>Os limites que continuam valendo</h2>
    <p>O aviso traz ressalvas importantes. A Siri AI exige um aparelho compatível com a Apple Intelligence, o que deixa de fora iPhones mais antigos, e precisa estar configurada em um dos idiomas aceitos: inglês, francês, japonês, coreano, português e espanhol. A Apple diz que em breve vai incluir chinês tradicional, norueguês, turco e vietnamita. O português chegou à assistente no iOS 27.2, como mostramos em <a href="/noticias/apple-ios-27-2-siri-ai-portugues-memoria-apps-excluidos">iOS 27.2 chega com Siri AI em português e memória de conversas</a>.</p>

    <p>A assistente segue indisponível na União Europeia no iPhone, no iPad e no Apple Watch, e não pode ser usada por menores de 13 anos. A Apple também lembra que recursos que dependem de modelos rodando nos servidores dela, incluindo a própria Siri AI, têm limites diários de uso, que variam conforme a complexidade do pedido e a demanda do sistema. A empresa afirma que um acesso ampliado a esses recursos será oferecido mediante pagamento no futuro, sem dizer quando nem quanto vai custar.</p>

    <p>O anúncio se soma a outros passos recentes da Apple para abrir o sistema à IA, como a <a href="/noticias/apple-assistente-ia-pages-keynote-numbers-mcp">chegada de um assistente de IA ao Pages, Keynote e Numbers, com abertura ao MCP</a>, e às declarações da empresa sobre <a href="/noticias/apple-resultado-parekh-apps-ia-terceiros-app-store">oportunidades com apps de IA de terceiros na App Store</a>.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você tem ou desenvolve um aplicativo para iPhone, a janela entre agora e a abertura da App Store, prevista para a primavera dos EUA, é o momento de pensar quais tarefas do seu app fazem sentido por voz e por linguagem natural. Quem já usa App Intents para os Atalhos sai na frente, porque a base técnica é a mesma. Para um pequeno negócio com app próprio, como delivery, agendamento ou loja, ser chamado direto pela assistente pode virar uma porta de entrada nova, já que o cliente faz o pedido sem precisar abrir o aplicativo. Ao mesmo tempo, vale esperar os termos de uso que a Apple prometeu antes de investir pesado, e lembrar que só quem tem aparelho compatível vai ver a novidade. Se a ideia é transformar isso em serviço, a criação de integrações e agentes para outras empresas já é um caminho de renda que explicamos em <a href="/artigos/como-ganhar-dinheiro-criando-e-vendendo-agentes-de-ia-personalizados">como ganhar dinheiro criando e vendendo agentes de IA personalizados</a>. E, para entender a diferença entre um assistente que só responde e um que age por você, veja <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">agente de IA, chatbot ou automação: qual a diferença</a>.</p>
  `,
};
