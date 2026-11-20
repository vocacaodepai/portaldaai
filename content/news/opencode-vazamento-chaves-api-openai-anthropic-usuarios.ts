import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "opencode-vazamento-chaves-api-openai-anthropic-usuarios",
  title: "OpenCode confirma invasão e pede que usuários troquem chaves de IA",
  summary:
    "A ferramenta de código aberto OpenCode admitiu acesso indevido a um sistema antigo e pediu que usuários revoguem chaves da OpenAI e da Anthropic guardadas lá.",
  author: "Bruno Danello",
  sourceName: "Notebookcheck",
  sourceUrl: "https://www.notebookcheck.net/OpenCode-hacked-users-urged-to-revoke-their-API-keys.1426957.0.html",
  date: "2026-10-18",
  publishedAt: "2026-10-18T01:23:00-03:00",
  imageQuery: "cybersecurity padlock keyboard",
  topic: "seguranca",
  content: `
    <p>O OpenCode, ferramenta de código aberto para programar com ajuda de inteligência artificial, confirmou uma invasão e passou a avisar usuários por e-mail de que chaves de provedores externos guardadas em seus espaços de trabalho podem ter sido expostas, segundo reportagem do <a href="https://www.notebookcheck.net/OpenCode-hacked-users-urged-to-revoke-their-API-keys.1426957.0.html" rel="noopener noreferrer nofollow" target="_blank">Notebookcheck</a> publicada neste sábado (17). Entre as chaves possivelmente afetadas estão as da OpenAI e as da Anthropic.</p>

    <p>No e-mail, a empresa afirma que alguém obteve acesso não autorizado a um sistema antigo que ela estava em processo de desativar. O OpenCode diz que 1,4% dos usuários do seu Console foram atingidos, um subconjunto das contas que tinham provedores externos conectados, e que todos os afetados foram notificados. Quem não recebeu o aviso, segundo a empresa, não foi impactado. O incidente, diz o comunicado, ainda está em andamento e a empresa trabalha com Anthropic, OpenAI e Google para contê-lo.</p>

    <h2>O que são essas chaves e por que o vazamento custa dinheiro</h2>
    <p>O OpenCode funciona com modelos de vários provedores, e o usuário conecta a ferramenta às suas contas usando as próprias chaves de API. Uma chave de API é uma senha que autoriza um programa a fazer pedidos a um serviço de IA e a cobrar o uso na conta do dono. Quem consegue uma chave alheia pode fazer requisições às custas do titular, sem precisar de login nem de senha.</p>

    <p>É exatamente o que usuários relatam. Segundo o Notebookcheck, houve gente nas redes sociais e no Reddit contando cobranças que não reconhece. Um usuário falou em 400 dólares em gastos não autorizados numa conta da Anthropic. Outro disse que o consumo na Google chegou a cerca de 200 euros e que o projeto foi suspenso por abuso. Um comentarista afirmou ter recebido alertas de uso da OpenAI e da Anthropic antes mesmo de o OpenCode comunicar a invasão, o que sugere que os provedores perceberam o movimento incomum antes da ferramenta avisar.</p>

    <h2>O que o OpenCode pede que os usuários façam</h2>
    <p>A orientação da empresa é direta. Quem foi afetado deve revogar as chaves dos provedores, gerar novas, atualizar todos os aplicativos que usam as chaves antigas e revisar o histórico de uso em busca de atividade fora do normal. O OpenCode também ligou o episódio a um ataque de destilação em larga escala, técnica em que as respostas de um modelo de IA são coletadas em massa para treinar outro. A reportagem não detalha como uma coisa levou à outra, e a empresa diz que a investigação continua.</p>

    <p>Houve ainda um efeito colateral de acesso. Usuários contam que as chaves do próprio serviço do OpenCode expiraram e que o login por Google ou GitHub retornou o erro "Unable to start social login". Uma pessoa conseguiu entrar e gerar uma chave nova depois de várias tentativas, e outra disse que a chave nova ainda não funcionava. Ou seja, mesmo quem quer seguir a orientação pode encontrar atrito para fazê-lo.</p>

    <h2>Contexto: segredos esquecidos são o elo fraco</h2>
    <p>O caso tem um traço em comum com outros que o Portal da AI acompanhou nas últimas semanas: o problema não foi um golpe sofisticado contra um modelo de IA, e sim credenciais guardadas em lugar frágil. A invasão atingiu um sistema legado que estava para ser desligado, justamente o tipo de ambiente que sai do radar de manutenção e segue guardando segredos. Algo parecido apareceu quando a agência de segurança da Índia relatou que agentes de IA chegaram a dados porque encontraram chaves e permissões soltas, como mostramos em <a href="/noticias/cert-in-india-agentes-ia-varios-provedores-acessam-dados">Índia diz que agentes de IA de vários laboratórios acessaram dados</a>.</p>

    <p>Também vale lembrar que ferramentas de programação com IA vivem de acesso: leem seu código, rodam comandos e se conectam a contas pagas. Quanto mais você delega, mais chaves circulam. Para quem quer entender melhor esse tipo de ferramenta antes de confiar segredos a ela, o guia <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">como escolher uma ferramenta de IA com segurança</a> traz um roteiro de perguntas que vale fazer.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você é freelancer, dono de agência, desenvolvedor autônomo ou simplesmente alguém que testou uma ferramenta de código com IA ligando a própria conta da OpenAI ou da Anthropic, este incidente é um lembrete concreto de que a chave de API é dinheiro. Diferente de uma senha de rede social, ela não precisa de segundo fator para ser usada, e o prejuízo aparece na fatura do cartão. Para quem cobra de clientes e repassa o custo de IA, uma cobrança indevida ainda pode virar um problema de caixa e de confiança.</p>

    <p>Mesmo que você não use o OpenCode, vale aproveitar a notícia para uma faxina rápida. A lista abaixo leva menos de meia hora e reduz bastante o estrago caso qualquer ferramenta que você usa seja invadida no futuro.</p>

    <ul>
      <li><strong>Veja se recebeu o e-mail do OpenCode.</strong> Se usou o Console da ferramenta com chaves de provedores, confira a caixa de entrada e o spam. Segundo a empresa, quem não foi avisado não foi afetado.</li>
      <li><strong>Revogue e troque as chaves.</strong> Nos painéis da OpenAI, da Anthropic e do Google, apague a chave antiga e crie outra. Depois atualize os projetos que dependiam dela.</li>
      <li><strong>Defina um teto de gasto.</strong> Os provedores permitem limites mensais e alertas de uso. Com um teto baixo, uma chave vazada não consegue gerar uma conta enorme.</li>
      <li><strong>Use uma chave por ferramenta.</strong> Assim, se uma delas vazar, você revoga só aquela, sem derrubar o resto do seu trabalho.</li>
      <li><strong>Olhe o consumo.</strong> Abra o histórico de uso dos últimos dias. Picos em horários em que você não trabalhou são sinal de alerta.</li>
    </ul>

    <div class="callout-box">
      <span class="callout-label">Atenção</span>
      <p>Troque a chave pelo painel oficial do provedor, nunca por link recebido por e-mail. Golpistas costumam aproveitar notícias de vazamento para mandar mensagens falsas pedindo "verificação" da chave. Se estiver em dúvida, entre direto no site do provedor.</p>
    </div>

    <h2>O que acompanhar daqui para frente</h2>
    <p>O próprio OpenCode diz que o incidente segue em andamento, então números e detalhes podem mudar. Ainda não está claro por quanto tempo as chaves ficaram acessíveis, quantas contas sofreram cobrança indevida nem se os provedores vão reembolsar os gastos. O que se sabe, até aqui, vem do comunicado da empresa e de relatos de usuários, e vale tratar os valores individuais como testemunhos, não como balanço oficial.</p>

    <p>Para quem programa com ajuda de IA sem ser da área, o episódio reforça um ponto do nosso texto sobre <a href="/artigos/vibe-coding-para-nao-programadores-carreira-e-riscos">vibe coding para não programadores</a>: a facilidade de montar um projeto com assistentes de IA não elimina os cuidados básicos com acessos. E como golpistas tendem a pegar carona em qualquer notícia de vazamento, também ajuda saber <a href="/artigos/como-usar-ia-para-checar-mensagem-suspeita-e-evitar-golpes">como usar IA para checar mensagens suspeitas</a> antes de clicar em qualquer link que peça sua chave.</p>

    <p>A fonte original do caso, a reportagem do Notebookcheck, reúne os relatos de usuários e o resumo do comunicado do OpenCode. Para quem usa a ferramenta, a orientação prática é uma só: se recebeu o aviso, aja hoje, porque cada hora com uma chave vazada ativa é uma hora em que alguém pode gastar o seu orçamento de IA.</p>
  `,
  faq: [
    {
      question: "Quem foi afetado pela invasão ao OpenCode?",
      answer:
        "Segundo o OpenCode, 1,4% dos usuários do Console, entre as contas que tinham provedores externos conectados. Todos os afetados receberam e-mail; quem não recebeu, diz a empresa, não foi impactado.",
    },
    {
      question: "O que devo fazer se recebi o aviso?",
      answer:
        "Revogue as chaves dos provedores, crie novas, atualize os aplicativos que usavam as antigas e confira o histórico de uso em busca de gastos que você não reconhece.",
    },
    {
      question: "Uma chave de API vazada pode gerar cobrança?",
      answer:
        "Sim. Quem tem a chave pode fazer requisições ao serviço de IA e o custo é cobrado na conta do titular, por isso os provedores recomendam tetos de gasto e uma chave por ferramenta.",
    },
  ],
};
