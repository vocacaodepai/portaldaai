import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "musk-spacex-cobre-erros-compra-grok-bot",
  title: "Musk promete cobrir erros do Grok Bot, mas os termos de uso dizem o oposto",
  summary:
    "Depois de pedir que usuários mandem foto do cartão ao agente, Musk disse que a SpaceX ressarce falhas de compra ou vazamentos, mas os termos de uso isentam a empresa.",
  author: "Bruno Danello",
  sourceName: "The Next Web",
  sourceUrl: "https://thenextweb.com/news/musk-grok-bot-credit-card-spacex-make-you-whole",
  date: "2026-10-19",
  publishedAt: "2026-10-19T20:27:00-03:00",
  topic: "negocios",
  imageQuery: "Elon Musk portrait",
  content: `
    <p>Elon Musk prometeu publicamente, em uma resposta no X, que a SpaceX vai "deixar você inteiro" se o Grok Bot errar uma compra ou vazar o cartão de crédito de alguém. A promessa, segundo a <a href="https://thenextweb.com/news/musk-grok-bot-credit-card-spacex-make-you-whole" target="_blank" rel="noopener noreferrer nofollow">cobertura do The Next Web</a>, veio depois de um usuário dizer que o agente reservou um voo para ele após receber a foto do seu cartão. O problema é que o texto dos termos de uso da própria empresa diz algo bem diferente, e é essa distância entre o post e o contrato que interessa a quem pensa em deixar um agente de IA gastar dinheiro por conta própria.</p>

    <h2>O que Musk disse e como a história começou</h2>
    <p>O Grok Bot é um agente de IA da SpaceXSI (nome atual da antiga SpaceXAI) lançado em agosto. Ele entra em aplicativos e sites em nome do usuário para concluir tarefas. Não está no plano gratuito: começa na assinatura Premium de US$ 30 por mês da X Subscription, que estreou em 12 de outubro e reúne SuperGrok, Cursor Pro e X Premium+. Esses três itens custavam juntos cerca de US$ 90 por mês antes do pacote, como mostramos em <a href="/noticias/spacexsi-assinatura-x-grok-cursor">SpaceXSI reúne X Premium, Grok e Cursor em uma só assinatura</a>.</p>
    <p>No sábado, Musk postou que qualquer pessoa pode fotografar o cartão de crédito, jogar a imagem no chat e deixar o Grok encontrar e comprar o que precisa. Um usuário respondeu que a Amazon estava bloqueando o agente, e Musk disse que o Grok "vai achar outro jeito de comprar", citando que o bot havia comprado Lego diretamente no site da Lego. No domingo, ele pediu ao Grok Bot que pesquisasse e encomendasse kits de Lego Star Wars para crianças pequenas. Esse post passou de 27 milhões de visualizações. Segundo o Mashable, citado pelo The Next Web, os cinco conjuntos chegaram na terça-feira e o pedido somou US$ 241,34.</p>
    <p>Na quinta-feira, um usuário contou no X que o Grok Bot havia reservado um voo para ele depois de receber a foto do cartão. Foi nessa resposta que Musk escreveu que, se o Grok Bot cometer um erro de compra ou vazar o cartão (o que, segundo ele, "nunca aconteceu ainda"), a SpaceX vai ressarcir. Ele não detalhou o que a promessa cobre. De acordo com a Business Insider, a SpaceX não respondeu ao pedido de comentário.</p>

    <h2>O que os termos de uso realmente dizem</h2>
    <p>Os termos da SpaceXSI foram atualizados em 12 de outubro e preveem que o Grok pode executar "Ações Agênticas" em nome do usuário, inclusive com instituições financeiras. Na mesma seção, o texto afirma: "Não somos responsáveis pelo Conteúdo do Usuário nem pelas Ações Agênticas". Ou seja, no papel, quem responde por uma compra errada feita pelo agente é você, e não a empresa.</p>
    <p>Uma nota da comunidade no X também chamou atenção para outros pontos. A xAI orienta usuários a não colocar informações pessoais nos prompts, e uma foto de cartão contém exatamente esse tipo de dado. A mesma nota diz que os termos do Grok Bot permitem à SpaceXSI armazenar dados e credenciais do usuário em sua nuvem e que transações financeiras exigem revisão humana. Houve ainda quem apontasse que Musk expôs o e-mail do Grok Bot, um endereço de entrega e o número do pedido de Lego; ele respondeu que o endereço já era público e é onde sua equipe de segurança recebe correspondência.</p>

    <div class="callout-box callout-warn">
      <span class="callout-label">Post não é contrato</span>
      <p>Uma promessa em rede social não tem regras de elegibilidade, prazo de reclamação nem limite de valor. Até que a SpaceXSI publique uma política formal ou altere os termos, vale o que está escrito nos termos de uso.</p>
    </div>

    <h2>A tensão com a Amazon e com outros varejistas</h2>
    <p>O bloqueio mencionado pelos usuários não é isolado. Em setembro, a Amazon já havia impedido o agente Muse, da Meta, de comprar no site sem autorização, alegando que o agente não se identifica e aparenta guardar credenciais de clientes, caso que contamos em <a href="/noticias/amazon-bloqueia-agente-ia-muse-meta-compras">Amazon bloqueia agente de IA Muse, da Meta, de fazer compras</a>. O Grok Bot tenta contornar a barreira indo a lojas que não bloqueiam, como o site da Lego. Isso mostra que não existe, hoje, um padrão aceito entre varejistas e criadores de agentes sobre como um robô deve se identificar e como a compra deve ser autorizada.</p>
    <p>Também já vimos que o Grok Bot pode se conectar a conta bancária, cartão e investimentos, tema da notícia <a href="/noticias/grok-bot-conecta-conta-bancaria-cartao-investimentos">Grok Bot conecta conta bancária, cartão e investimentos</a>. Quanto mais acesso o agente recebe, maior a conta que alguém terá de pagar quando algo der errado. Por isso a discussão sobre quem arca com o prejuízo deixou de ser teórica.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você é autônomo, tem uma loja pequena ou usa IA para tocar a rotina, a tentação de entregar o cartão a um agente para ele comprar passagem, material ou assinatura é real, porque economiza tempo. Mas a lição prática desta semana é simples: antes de dar acesso financeiro a qualquer agente, leia a cláusula de responsabilidade, não o post do fundador.</p>
    <p>Algumas medidas reduzem o risco. Use um cartão virtual com limite baixo e validade curta, em vez do cartão principal. Peça sempre aprovação humana antes da compra final. Nunca mande foto de cartão por chat quando houver um jeito de cadastrar o meio de pagamento em um cofre do próprio app. E guarde comprovantes e capturas de tela, porque, se precisar contestar uma cobrança com o banco, é isso que vai sustentar o seu pedido. Para entender o cenário maior, vale ler <a href="/artigos/agentes-de-ia-comprando-por-voce-comercio">agentes de IA comprando por você: o novo comércio</a> e o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher ferramenta de IA com segurança</a>.</p>
    <p>No Brasil, o Código de Defesa do Consumidor e a regra de contestação de compra não reconhecida pelo cartão continuam valendo, mas nada disso foi pensado para uma compra que você mesmo autorizou, ainda que por meio de um robô. É um terreno ainda sem jurisprudência clara, e quem opera uma pequena empresa precisa tratar o agente como um funcionário novo: acesso limitado, valor máximo por compra e conferência dos gastos. Para entender a diferença entre automações simples e agentes que decidem sozinhos, o guia <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">agente de IA, chatbot ou automação: qual a diferença</a> ajuda a calibrar o nível de confiança.</p>

    <h2>O que observar daqui para frente</h2>
    <p>Há três pontos a acompanhar. Primeiro, se a SpaceXSI transformar a promessa em política escrita, com critérios, teto e canal de pedido, o que mudaria o cálculo de risco para o usuário. Segundo, se os termos de 12 de outubro serão revistos para refletir o que o dono da empresa disse. Terceiro, se outros varejistas seguirão o caminho da Amazon e bloquearão o agente, o que limitaria onde ele consegue comprar. Até lá, o que existe é um contrato que isenta a empresa e uma promessa informal que depende da boa vontade de quem a fez.</p>
    <p>A notícia também lembra que a venda de assinaturas de IA agora traz um componente financeiro novo: o produto não é só conversa, é um agente com poder de gasto. Para o consumidor brasileiro, que paga em real e muitas vezes usa cartão internacional com IOF, errar uma compra tem custo extra, e a promessa de ressarcimento de uma empresa americana teria de ser exercida em outro idioma e outra jurisdição. Conferir esse detalhe antes de ativar o recurso é parte do cuidado básico.</p>

    <div class="callout-box">
      <span class="callout-label">Fonte original</span>
      <p>Reportagem do The Next Web, que cita a Business Insider e o Mashable: <a href="https://thenextweb.com/news/musk-grok-bot-credit-card-spacex-make-you-whole" target="_blank" rel="noopener noreferrer nofollow">Musk says SpaceX will cover Grok Bot purchase mistakes and leaked cards</a>.</p>
    </div>
  `,
};
