import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "apple-testa-limite-diario-siri-ai-icloud-mais-uso",
  title: "Apple testa limite diário na Siri AI e dá mais uso a quem paga iCloud+",
  summary:
    "No beta do iOS 27.3, a Apple põe teto diário nos recursos mais pesados da Siri AI e do Apple Intelligence e libera de 2 a 20 vezes mais uso no iCloud+ pago.",
  author: "Bruno Danello",
  sourceName: "MacRumors, The Verge",
  sourceUrl: "https://www.macrumors.com/2026/11/16/apple-icloud-paid-siri-ai-upgrade/",
  date: "2026-11-17",
  publishedAt: "2026-11-17T09:11:00-03:00",
  topic: "lancamentos",
  imageQuery: "Apple Siri iPhone",
  content: `
    <p>A Apple começou a testar um limite diário de uso para os recursos mais pesados da Siri AI e do Apple Intelligence. A novidade apareceu no segundo beta do iOS 27.3, do iPadOS 27.3 e do macOS 27.3, liberado a desenvolvedores nesta segunda-feira, 16 de novembro, e foi detalhada pelo site MacRumors e confirmada pelo The Verge. Comandos simples continuam livres, mas pedidos que dependem do processamento em nuvem da Apple passam a ter uma cota por aparelho. Quem quiser mais precisa de um plano pago do iCloud+.</p>
    <p>Para o leitor brasileiro, a mudança chega num momento sensível: a Siri AI ganhou português há poucas semanas, com o <a href="/noticias/apple-ios-27-2-siri-ai-portugues-memoria-apps-excluidos">iOS 27.2</a>, e muita gente ainda está começando a usar a assistente nova. É a primeira vez que a Apple desenha com clareza uma régua de uso de IA ligada à assinatura, no mesmo caminho que ChatGPT, Gemini e Claude já seguem há tempo.</p>

    <h2>O que se sabe</h2>
    <p>Segundo o MacRumors, todo aparelho Apple recebe uma cota gratuita diária para os recursos que rodam nos servidores da empresa. Quatro categorias entram na conta, e cada uma tem um limite próprio:</p>
    <ul>
      <li>pedidos à Siri AI com várias etapas e contexto pessoal, como perguntar a que horas é preciso sair de casa para chegar a tempo a um compromisso;</li>
      <li>ferramentas de geração e edição de imagem, como o Image Playground e as opções de IA do app Fotos (Limpar, Estender e reenquadramento espacial);</li>
      <li>atalhos e automações do app Atalhos que usam os modelos de nuvem da Apple (AFM Cloud e AFM Cloud Pro);</li>
      <li>apps de terceiros que usam os modelos da Apple no Private Cloud Compute, a nuvem privada da empresa.</li>
    </ul>
    <p>Comandos básicos, de um pedido só, seguem disponíveis mesmo depois de a cota acabar. Os exemplos citados são "programar um timer de 30 minutos" ou "mandar mensagem dizendo que estou a caminho". A cota gratuita é por aparelho, não por conta, não acumula de um dia para o outro e é zerada por volta da meia-noite no fuso de quem usa.</p>
    <p>Quem assina o iCloud+ ganha mais uso sem pagar nada a mais pelo plano. Os valores citados são os preços nos Estados Unidos: o plano de 200 GB (US$ 2,99 por mês) dá até 2 vezes o limite; o de 2 TB (US$ 9,99), até 5 vezes; o de 6 TB (US$ 29,99), até 10 vezes; e o de 12 TB (US$ 59,99), até 20 vezes. O plano de 50 GB fica de fora. Em família, os aparelhos gastam primeiro a própria cota gratuita e depois puxam de um saldo compartilhado, por ordem de chegada.</p>
    <p>A Apple vai avisar quando o usuário estiver perto do limite e quando ele for atingido. A partir daí, a pessoa escolhe entre assinar ou subir de plano do iCloud+ ou esperar a renovação no dia seguinte. Segundo o MacRumors, não há planos, por enquanto, de vender uso além do que o plano de 12 TB oferece.</p>
    <p>O movimento não é isolado. O The Verge lembra que, na semana passada, a Apple pôs no Logic Pro uma opção de "comprar mais uso" para o assistente do app, com pacotes avulsos de US$ 49,99 que devem chegar ainda neste mês a outros apps do Apple Creator Studio, incluindo Final Cut Pro, Pixelmator Pro, Pages, Keynote e Numbers. É a mesma lógica de cobrar pela IA conforme o uso, aplicada agora ao sistema inteiro. Os apps de terceiros entram nessa conta porque a Apple <a href="/noticias/apple-siri-ai-aberta-todos-desenvolvedores-app-intents-skills">abriu a Siri AI e seus modelos a qualquer desenvolvedor</a> neste mesmo ciclo do iOS 27.3.</p>

    <h2>O que ainda não está confirmado</h2>
    <p>A Apple não divulgou quantos pedidos cabem na cota gratuita de cada categoria. Segundo o MacRumors, os limites dependem do tipo de recurso, da complexidade do pedido e da demanda nos servidores, e podem mudar com o tempo. A expectativa é que a empresa use o período de testes para calibrar os números e evitar que as pessoas batam no teto rápido demais. Ou seja, o que aparece hoje no beta não é necessariamente o que vai chegar à versão final.</p>
    <p>Também não há data para o iOS 27.3 sair para todo mundo, nem confirmação de como a régua vai funcionar fora dos Estados Unidos. Os planos do iCloud+ existem no Brasil, com preços próprios em reais, mas nenhuma das reportagens detalha se os multiplicadores serão os mesmos aqui. Até a Apple publicar a documentação oficial, vale tratar os números como o que são: parte de um teste com desenvolvedores.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você usa a Siri AI ou as ferramentas de imagem do iPhone só de vez em quando, provavelmente nada muda: o timer, o lembrete e a mensagem rápida seguem sem limite. A diferença aparece para quem passou a usar a assistente como ferramenta de trabalho, com pedidos longos que cruzam e-mail, agenda e mensagens, ou para quem edita muitas fotos com IA, cria imagens para redes sociais ou roda automações no app Atalhos ao longo do dia.</p>
    <p>A análise do Portal da AI é que a Apple está transformando o iCloud+, que até aqui era vendido como espaço de armazenamento, em assinatura de IA. Para quem já paga o plano de 200 GB ou 2 TB, a notícia é boa: ganha mais uso sem gastar mais. Para quem não paga, a Apple cria um motivo novo para assinar. Na conta do pequeno empreendedor que usa o iPhone para atender clientes e produzir conteúdo, a pergunta deixa de ser só "quanto espaço eu preciso" e passa a ser "quanta IA eu uso por dia".</p>
    <p>Na prática, três passos ajudam a se preparar. Primeiro, observe quanto você usa os recursos de nuvem hoje: se você raramente pede tarefas de várias etapas à Siri, a cota gratuita deve bastar. Segundo, se já paga iCloud+ para guardar fotos, confira qual é o seu plano, porque o de 50 GB não dá uso extra. Terceiro, não assine nada por impulso antes de a versão final sair com os números oficiais, já que os limites ainda estão em teste. Se a IA já é central no seu trabalho, compare com o que outras assinaturas entregam, como mostramos no <a href="/artigos/chatgpt-plus-vale-a-pena-review-2026">review do ChatGPT Plus</a>, e veja se o iPhone é mesmo o lugar onde você mais precisa de IA ilimitada.</p>
    <p>Vale lembrar também que a Apple segue ajustando a estratégia de IA país a país: na China, por exemplo, o <a href="/noticias/apple-intelligence-china-dezembro-ios-27-3-qwen-alibaba">Apple Intelligence chega em dezembro com modelos da Alibaba</a>. Acompanharemos quando a régua de limites for oficializada para o Brasil.</p>
  `,
  faq: [
    {
      question: "A Siri vai deixar de funcionar quando eu atingir o limite?",
      answer:
        "Não. Comandos simples, de um pedido só, como programar um timer ou mandar uma mensagem curta, continuam disponíveis sem limite. A cota vale só para pedidos de várias etapas que usam a nuvem da Apple, ferramentas de imagem com IA, automações que usam os modelos de nuvem e apps de terceiros que usam esses modelos.",
    },
    {
      question: "Quanto uso a mais cada plano do iCloud+ dá?",
      answer:
        "Segundo o MacRumors, no beta do iOS 27.3 o plano de 200 GB dá até 2 vezes o limite, o de 2 TB até 5 vezes, o de 6 TB até 10 vezes e o de 12 TB até 20 vezes. O plano de 50 GB não dá uso extra, e o preço dos planos não muda.",
    },
    {
      question: "Essas regras já valem no Brasil?",
      answer:
        "Ainda não. Por enquanto os limites aparecem só no beta do iOS 27.3 para desenvolvedores, a Apple não divulgou os números da cota gratuita e não há confirmação de como a régua vai funcionar fora dos Estados Unidos.",
    },
  ],
};
