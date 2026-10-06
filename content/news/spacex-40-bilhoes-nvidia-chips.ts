import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "spacex-40-bilhoes-nvidia-chips",
  title: "SpaceX busca levantar US$ 40 bilhões para comprar chips da Nvidia",
  summary:
    "A empresa de Elon Musk negocia com a Apollo uma captação de US$ 10 bi em empréstimos e US$ 30 bi em dívida para financiar GPUs, segundo o Financial Times.",
  author: "Bruno Danello",
  sourceName: "MarketScreener (Reuters)",
  sourceUrl:
    "https://www.marketscreener.com/news/spacex-seeks-40-billion-to-buy-nvidia-chips-ft-reports-ce785dd9df8cf525",
  date: "2026-10-06",
  publishedAt: "2026-10-06T20:30:00-03:00",
  topic: "negocios",
  imageQuery: "SpaceX Falcon 9 rocket launch pad",
  content: `
    <p>A SpaceX está buscando levantar US$ 40 bilhões para comprar chips da Nvidia, segundo reportagem do Financial Times publicada nesta terça-feira (6 de outubro) e <a href="https://www.marketscreener.com/news/spacex-seeks-40-billion-to-buy-nvidia-chips-ft-reports-ce785dd9df8cf525" rel="noopener noreferrer nofollow">reproduzida pela Reuters</a>. A estrutura do financiamento prevê cerca de US$ 10 bilhões em empréstimos bancários e US$ 30 bilhões em dívida com grau de investimento, com a gestora Apollo Global Management liderando a operação e ajudando a distribuir os títulos entre investidores.</p>
    <p>Segundo pessoas com conhecimento do assunto ouvidas pelo Financial Times, o fundo de títulos Pimco está entre os credores em negociação para financiar a transação, que deve ser concluída em 2027. Nem a SpaceX, nem a Apollo, nem a Nvidia, nem a Pimco responderam de imediato aos pedidos de comentário da Reuters até a publicação da reportagem original.</p>

    <h2>Da "empresa de foguetes" à corrida por poder computacional</h2>
    <p>A notícia confirma um movimento que a SpaceX já vinha sinalizando desde que incorporou a xAI, de Elon Musk, em um negócio avaliado em cerca de US$ 1 trilhão para a parte de foguetes e satélites e US$ 250 bilhões para a parte de inteligência artificial. Musk tem defendido publicamente que unir as duas empresas acelera planos de data centers orbitais, que usariam infraestrutura baseada no espaço para sustentar a próxima geração de computação de IA. Cobrimos recentemente como a <a href="/noticias/xai-colossus-2-dobra-chips-nvidia-memphis">xAI planeja dobrar o número de chips Nvidia no supercomputador Colossus 2, em Memphis</a>, e como a própria SpaceX passou a se chamar <a href="/noticias/spacexai-rebrand-spacexsi-super-intelligence">SpaceXSI após o rebranding que uniu as duas marcas</a>.</p>
    <p>Comprar GPUs de ponta da Nvidia em escala de dezenas de bilhões de dólares deixou de ser exclusividade das grandes nuvens como Microsoft, Google e Amazon. Companhias de outros setores, da aeroespacial à de defesa, vêm se financiando diretamente para acumular capacidade de computação, apostando que o acesso a chips de IA será tão estratégico quanto o acesso a energia ou a satélites. A Nvidia, de seu lado, já havia revelado participação de cerca de US$ 21 bilhões em ações da SpaceX, convertida quando a xAI foi incorporada à empresa de foguetes, o que torna a fabricante de chips simultaneamente fornecedora e acionista relevante do comprador.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para quem usa ferramentas de IA no dia a dia ou vende serviços baseados em modelos de linguagem, operações como essa ajudam a explicar por que a disputa por capacidade de computação segue tão acirrada, mesmo com tantos modelos novos sendo lançados por semana. Quanto mais empresas como SpaceX, Oracle e Anthropic se endividam para garantir chips com anos de antecedência, mais a Nvidia consegue manter preços altos e prazos de entrega longos, o que impacta diretamente o custo de acesso a GPUs para quem aluga infraestrutura de nuvem para treinar ou rodar seus próprios modelos.</p>
    <p>Há também um sinal de alerta que vale observar: analistas de mercado vêm chamando atenção para o volume crescente de dívida contraída por empresas de IA para financiar chips, como mostramos na cobertura sobre o <a href="/noticias/broadcom-emprestimo-42-bilhoes-anthropic-chips-tpu">empréstimo de US$ 42 bilhões que a Anthropic negocia com a Broadcom para TPUs</a> e sobre o <a href="/noticias/anthropic-financiamento-60-bilhoes-chips-broadcom-google">financiamento de US$ 60 bilhões da Anthropic envolvendo Broadcom e Google</a>. Quanto mais essas captações se acumulam em forma de dívida, maior o risco de que uma eventual desaceleração na demanda por IA generativa cause uma onda de reavaliação de ativos e contratos, algo que empreendedores e investidores brasileiros expostos a ações ou fundos ligados ao setor de IA deveriam acompanhar com atenção.</p>

    <h2>Um padrão que se repete entre as gigantes de IA</h2>
    <p>A SpaceX não é a primeira a recorrer a esse tipo de estrutura. A Oracle já havia batido recorde com um <a href="/noticias/oracle-backlog-664-bilhoes-nuvem-ia">backlog de US$ 664 bilhões em contratos de nuvem para IA</a>, enquanto a Amazon fechou um acordo de leaseback de <a href="/noticias/amazon-8-bilhoes-chips-nvidia-leaseback">US$ 8 bilhões em chips Nvidia</a> para expandir capacidade sem comprometer caixa de imediato. A própria OpenAI, segundo reportagens recentes, também está em conversas para captar recursos adicionais e <a href="/noticias/openai-busca-30-bilhoes-adia-ipo-2027">adiar seu IPO para 2027</a> enquanto negocia mais investimento. O padrão comum entre essas operações é claro: em vez de esperar o fluxo de caixa orgânico crescer, as maiores apostadoras em IA generativa estão se antecipando via dívida e parcerias financeiras, numa corrida que pressupõe que a demanda por computação vai continuar subindo nos próximos anos.</p>
    <p>Esse tipo de engenharia financeira, em que uma empresa levanta dívida especificamente marcada para comprar hardware de um único fornecedor, tem uma vantagem clara para quem empresta: o próprio chip, que mantém valor de revenda relativamente alto, pode servir de garantia da operação. Por isso bancos e fundos como a Pimco têm se mostrado dispostos a financiar esse tipo de compra em volumes cada vez maiores, mesmo quando a empresa tomadora, como é o caso da SpaceX, ainda não tem um histórico longo de geração de caixa recorrente ligado especificamente à parte de inteligência artificial do negócio.</p>

    <h2>O que observar nos próximos meses</h2>
    <p>Vale observar nos próximos meses se a avaliação de crédito BBB da SpaceX, a segunda faixa mais baixa dentro do grau de investimento, segue permitindo que fundos de pensão e seguradoras comprem essa dívida sem resistência, e se operações desse tamanho continuam sendo bem recebidas pelo mercado financeiro ou passam a gerar mais cautela entre investidores institucionais preocupados com o nível de endividamento acumulado pelo setor de IA como um todo. Também é importante acompanhar se a Nvidia, que já aparece como acionista relevante da própria SpaceX, vai anunciar condições especiais de fornecimento para esse pedido específico, dado o relacionamento cada vez mais entrelaçado entre fabricante de chips e seus maiores clientes.</p>
    <p>Por fim, fica a pergunta sobre o ritmo: se o financiamento de US$ 40 bilhões realmente se concretizar como descrito, com fechamento previsto para 2027, ele se somará a outras captações bilionárias do setor anunciadas só neste segundo semestre de 2026, reforçando a tese de que a corrida por chips de IA segue sem sinais de desaceleração, pelo menos entre as empresas com acesso a crédito de grau de investimento.</p>
  `,
  faq: [
    {
      question: "Quanto a SpaceX está buscando levantar para comprar chips da Nvidia?",
      answer:
        "US$ 40 bilhões no total, divididos entre cerca de US$ 10 bilhões em empréstimos bancários e US$ 30 bilhões em dívida com grau de investimento, segundo reportagem do Financial Times.",
    },
    {
      question: "Quem está liderando esse financiamento?",
      answer:
        "A gestora Apollo Global Management lidera a operação e vai ajudar a distribuir a dívida entre investidores. O fundo de títulos Pimco está entre os credores em negociação.",
    },
    {
      question: "Quando a transação deve ser concluída?",
      answer:
        "A expectativa, segundo o Financial Times, é que o negócio seja concluído em 2027.",
    },
  ],
};
