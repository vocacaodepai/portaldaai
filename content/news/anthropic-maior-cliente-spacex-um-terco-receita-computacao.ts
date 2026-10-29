import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-maior-cliente-spacex-um-terco-receita-computacao",
  title: "Anthropic é o maior cliente da SpaceX, com um terço da receita",
  summary:
    "A Anthropic seria o misterioso Cliente B da SpaceX, com 34,5% da receita do trimestre, à frente do governo dos EUA. A fonte é a Bloomberg, via The Next Web.",
  author: "Bruno Danello",
  sourceName: "The Next Web, Bloomberg",
  sourceUrl: "https://thenextweb.com/news/anthropic-spacex-largest-customer-customer-b",
  date: "2026-10-29",
  publishedAt: "2026-10-29T19:22:00-03:00",
  topic: "negocios",
  imageQuery: "SpaceX Starship launch",
  content: `
    <p>A Anthropic, empresa por trás do Claude, é o maior cliente da SpaceX. Segundo reportagem publicada nesta quinta-feira, 29 de outubro de 2026, pelo The Next Web com base em informações da Bloomberg, a empresa de IA é o cliente que o balanço da SpaceX chama apenas de "Cliente B" e que respondeu por cerca de 34,5% da receita do terceiro trimestre. Com isso, a Anthropic passa à frente do governo dos Estados Unidos, que por muito tempo foi a principal fonte de dinheiro da fabricante de foguetes.</p>

    <p>A identificação do cliente não veio de um anúncio. A Bloomberg afirma ter confirmado a informação com uma pessoa familiar ao assunto. A Anthropic não quis comentar e a SpaceX não respondeu ao pedido da reportagem. Ou seja, o dado é uma identificação jornalística, e não uma confirmação oficial das duas empresas.</p>

    <h2>O que a Anthropic compra da SpaceX</h2>
    <p>O que a Anthropic leva da SpaceX não são foguetes nem internet por satélite, e sim poder de computação. A divisão de IA da empresa, hoje chamada Super Intelligence, aluga capacidade em data centers em Memphis, no Tennessee, e a Anthropic usa esse espaço para treinar e rodar o Claude. É a mesma região dos supercomputadores que o portal já mostrou na notícia sobre o <a href="/noticias/xai-colossus-2-dobra-chips-nvidia-memphis">Colossus 2 dobrando chips da Nvidia em Memphis</a>.</p>

    <p>Os números do contrato já tinham aparecido no pedido de abertura de capital da Anthropic. Como contamos na cobertura do <a href="/noticias/anthropic-protocola-s-1-publico-nasdaq-ant-receita-16-bilhoes">S-1 da Anthropic na Nasdaq</a>, a empresa pode gastar até US$ 120,5 bilhões em computação com a SpaceX em contratos que vão até 2029. Isso dá algo como US$ 3,1 bilhões por mês a partir de dezembro, quando a capacidade contratada deve estar toda entregue. A novidade desta quinta é ligar esse contrato ao balanço da SpaceX e mostrar o tamanho dele dentro da receita da fornecedora.</p>

    <h2>Uma dependência perigosa para a SpaceX</h2>
    <p>Quando um único cliente responde por mais de um terço do faturamento, o risco para quem vende é grande. E o contrato tem uma peculiaridade: segundo a reportagem, a Anthropic poderá cancelar com 90 dias de aviso a partir do início de 2027. Em outras palavras, a SpaceX construiu capacidade para atender um cliente que pode sair com três meses de antecedência.</p>

    <p>Do lado do negócio, os números são fortes. A unidade de IA da SpaceX teria dado lucro pela primeira vez no último trimestre, e a receita total da empresa subiu 161%. A SpaceX também aluga computação ao Google, que pagaria cerca de US$ 920 milhões por mês, segundo o texto. Ou seja, dois clientes de IA já pesam muito no caixa de uma empresa que nasceu vendendo lançamentos espaciais.</p>

    <p>Esse movimento ajuda a entender uma declaração de Elon Musk. Ele defende que a SpaceX, com Starlink e lançamentos como negócios paralelos, é mais segura do que as chamadas "neoclouds", empresas que alugam computação de IA e dependem de crédito para crescer. Em publicação na rede X, Musk escreveu que o mercado de dívida praticamente fechou o financiamento para companhias sem uma receita relevante independente dos data centers de IA. A leitura do dono da SpaceX é que ter outras fontes de receita deixa a empresa menos exposta se o crédito encarecer ou se um cliente grande for embora.</p>

    <h2>Por que a Anthropic aluga em vez de construir</h2>
    <p>Para a Anthropic, a conta é de velocidade. Treinar e servir modelos como o Claude exige uma quantidade enorme de chips, energia e terreno, e construir tudo isso do zero leva anos. Alugar capacidade pronta de quem já tem data center funcionando é um atalho. A empresa também vem diversificando fornecedores: o portal já noticiou o <a href="/noticias/broadcom-emprestimo-42-bilhoes-anthropic-chips-tpu">empréstimo de US$ 42 bilhões ligado a chips TPU para a Anthropic</a>, o que mostra uma estratégia de comprar computação de várias frentes ao mesmo tempo.</p>

    <p>Há também uma ironia que vale registrar. A SpaceX é a empresa de Elon Musk, cujo laboratório de IA, o antigo xAI e hoje parte da SpaceX Super Intelligence, concorre diretamente com o Claude. Mesmo assim, uma concorrente vira a maior fornecedora de infraestrutura da Anthropic. Na corrida da IA, a falta de computação é tão grave que rivais acabam fazendo negócio entre si, e quem tem chips sobrando ou prédios prontos passa a ter poder de barganha.</p>

    <h2>O que ainda não se sabe</h2>
    <p>Alguns pontos seguem em aberto. Nenhuma das duas empresas confirmou publicamente que o "Cliente B" é a Anthropic. Também não está claro quanto da capacidade contratada já está funcionando hoje, nem se a Anthropic pretende usar a cláusula de saída depois de 2027. O pedido de abertura de capital da Anthropic ainda está em análise, e os números podem ser detalhados ou ajustados até a estreia na bolsa. Vale tratar o percentual de 34,5% como a melhor estimativa atual, e não como um dado auditado e confirmado pelas partes.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você usa o Claude para trabalhar, o recado prático é que o produto depende de uma cadeia de infraestrutura cada vez mais concentrada. Preço, limites de uso e velocidade das respostas passam por contratos como esse. Quando a computação sobra, os planos tendem a ficar mais generosos; quando falta, aparecem filas, cortes de limite e aumento de preço. Os recentes movimentos de concorrentes para ampliar limites, como o que contamos sobre <a href="/noticias/openai-dobra-limites-pro-100-500-codex-work">a OpenAI dobrando limites nos planos Pro</a>, mostram como essa disputa chega ao bolso de quem assina.</p>

    <p>Para quem empreende ou trabalha por conta própria com IA, vale não depender de uma única ferramenta. Ter um plano B, como outro modelo ou outro assistente que você já testou, evita ficar parado se um serviço mudar regras, preço ou disponibilidade. A mesma lógica de risco que preocupa a SpaceX, depender demais de um cliente, vale para quem depende demais de um fornecedor de IA. Acompanhe também o andamento do IPO da Anthropic, porque os documentos públicos têm revelado detalhes de custos e contratos que ajudam a entender para onde os preços das assinaturas podem caminhar.</p>

    <p>Este texto é análise nossa a partir da reportagem do The Next Web, que cita a Bloomberg, o balanço trimestral da SpaceX e o pedido de abertura de capital da Anthropic. A identificação do cliente não foi confirmada oficialmente pelas empresas.</p>
  `,
};
