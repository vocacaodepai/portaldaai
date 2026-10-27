import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "china-controle-exportacao-ia-modelos-agentes-rascunho-catalogo",
  title: "China propõe barrar a exportação de modelos e agentes de IA de ponta",
  summary:
    "Pequim publicou rascunho que põe 23 tecnologias de IA, de grandes modelos a agentes, sob controle de exportação. Uso por API e código aberto ficam de fora.",
  author: "Bruno Danello",
  sourceName: "Forkast",
  sourceUrl:
    "https://forkast.news/china-proposes-export-controls-on-23-ai-technologies-including-ai-agents/",
  date: "2026-10-19",
  publishedAt: "2026-10-19T05:30:00-03:00",
  topic: "regulacao",
  imageQuery: "Beijing skyline",
  content: `
    <p>A China deu o primeiro passo para controlar a saída de tecnologia de inteligência artificial do país. Segundo reportagem da <a href="https://forkast.news/china-proposes-export-controls-on-23-ai-technologies-including-ai-agents/" target="_blank" rel="noopener noreferrer nofollow">Forkast</a>, o Ministério do Comércio e o Ministério da Ciência e Tecnologia publicaram na sexta-feira (16) o Anúncio nº 48 de 2026, um rascunho de revisão do catálogo de tecnologias de exportação proibida ou restrita. A lista tem 40 tecnologias, e 23 delas pertencem à pilha de IA: grandes modelos de linguagem, agentes, clusters de computação e métodos de projeto de chips.</p>

    <h2>O que o rascunho propõe</h2>
    <p>De acordo com a Forkast e com o site de análise Dealroom, o conjunto total de 40 itens cobre também energia solar e biomedicina, e se divide em 14 tecnologias de exportação proibida e 26 que exigiriam licença. Na parte de IA, o texto mira pesos e código-fonte de modelos acima de certos limites. As reportagens citam modelos com cerca de 2 trilhões de parâmetros ou que estejam entre os dez melhores do mundo em avaliações de desempenho e segurança. Para agentes, o controle recairia sobre os desenhados para ambientes sensíveis, como defesa nacional e infraestrutura crítica de informação.</p>
    <p>A Forkast descreve a medida como a primeira proposta de Pequim para controles de exportação de tecnologia de IA, ou seja, para o que sai da China, e não para o que entra. Até aqui, o grosso das restrições entre os dois lados do Pacífico vinha dos Estados Unidos, que limitam a venda de chips avançados. Agora o movimento é o inverso: o governo chinês passa a se reservar o direito de decidir quem pode receber os modelos mais capazes feitos no país.</p>

    <h2>O que fica de fora</h2>
    <p>O rascunho traz exceções importantes. Tecnologias que já são públicas, por meio de código aberto ou de artigos acadêmicos, ficam excluídas das restrições. O acesso por API e por software como serviço também é isento, o que, segundo a Forkast, permite que empresas como DeepSeek e Alibaba continuem atendendo clientes do mundo todo por interfaces de nuvem. Em análise publicada na segunda-feira (19), o autor do boletim Ctrl+AI+Reg lembra que, para o Ministério do Comércio, usar um modelo restrito por API, aplicativo ou site não conta como exportar a tecnologia, mas implantá-lo no exterior, em servidores próprios, entra na gestão de exportação.</p>
    <p>Há ainda uma regra provisória. Segundo a Forkast, a exigência de registro prévio para transferências de tecnologia ao exterior, como cessão de propriedade, licenciamento de propriedade intelectual e mudança de controle para um grupo estrangeiro, passou a valer em 16 de outubro e alcança também negócios ainda pendentes. O catálogo final fica em consulta pública até 15 de novembro de 2026, e os limites exatos ainda podem mudar até lá. Os números de parâmetros e de ranking vêm de reportagens secundárias, e o texto oficial é o que vale.</p>

    <h2>As perguntas que ficam em aberto</h2>
    <p>O boletim Ctrl+AI+Reg diz que o anúncio levanta mais dúvidas do que respostas. Não está claro como as regras se aplicam a modelos restritos implantados no exterior nos servidores de uma empresa, nem a agentes que cumpram os critérios de agente mesmo quando o modelo por trás não atinja os limites de modelo. Também não está claro como a regra trata a IA chinesa de código aberto. Empresas chinesas que montem e operem os próprios centros de computação fora do país poderiam se beneficiar de um licenciamento facilitado, que o ministério chama de "registrar e seguir", mas o processo detalhado não foi publicado.</p>
    <p>Segundo a Forkast, o impacto mais imediato é para operações de fusão e aquisição entre fronteiras e para colaborações de hardware, principalmente as que envolvem ferramentas de projeto de chips e fornecedoras de automação de design eletrônico.</p>

    <h2>O contexto: modelos chineses abertos ganharam espaço</h2>
    <p>A proposta chega num momento em que modelos chineses ocupam um lugar central entre os abertos. O Portal da AI mostrou há pouco que os <a href="/noticias/open-weight-71-por-cento-tokens-vercel-china-controle-exportacao">modelos abertos já somam 71,5% dos tokens</a> em dados da Vercel, numa notícia que já citava a proposta chinesa de controles de exportação. Também cobrimos o <a href="/noticias/xiaomi-lanca-mimo-v2-6-modelo-aberto-treinado-3-milhoes">MiMo-V2.6, da Xiaomi</a>, treinado por cerca de US$ 3 milhões, e o deputado americano Ro Khanna, que cobrou das big techs informações sobre <a href="/noticias/khanna-pesos-modelos-ia-seguranca-china">tentativas da China de roubar pesos de modelos</a>. Os pesos de um modelo viraram assunto de segurança nacional nos dois países.</p>
    <p>Outro pano de fundo é o fluxo de chips. O governo chinês também mexeu há pouco na compra de chips da Nvidia por empresas locais, como mostra a notícia sobre a <a href="/noticias/china-libera-bytedance-alibaba-comprar-chips-nvidia">mudança nas regras para ByteDance e Alibaba</a>, e a corrida entre os dois países passou a incluir quem controla a tecnologia nos dois extremos, do hardware ao modelo pronto.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para quem usa IA no Brasil para trabalhar, empreender ou ganhar dinheiro, o efeito prático imediato tende a ser pequeno, e a razão está nas exceções. Se você acessa modelos chineses por API, por aplicativo ou por site, o rascunho não os considera exportação, e o que já foi aberto ao público continua livre. O impacto mais provável aparece em dois lugares: no futuro dos modelos abertos mais poderosos, que podem deixar de ser publicados se passarem dos limites, e em empresas brasileiras que pensem em rodar um modelo chinês nos próprios servidores ou em contratar uma versão sob licença.</p>
    <p>Vale tratar a notícia como um sinal de risco de fornecedor, e não como motivo de pânico. Quem monta fluxos de trabalho em cima de um único modelo, seja chinês, americano ou de qualquer outro país, fica exposto a mudanças de política, preço ou acesso. O <a href="/artigos/ia-codigo-aberto-o-que-muda-para-quem-usa">guia sobre IA de código aberto</a> ajuda a entender o que você ganha e o que arrisca ao depender de pesos abertos, e o comparativo <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini</a> serve de base para ter uma alternativa pronta. Para empresas pequenas, a regra de bolso do texto sobre <a href="/artigos/como-usar-ia-para-reduzir-custos-operacionais-pequenos-negocios">como usar IA para reduzir custos operacionais</a> continua valendo: evite amarrar o negócio a um único fornecedor e mantenha o processo documentado, para trocar de ferramenta sem parar a operação.</p>

    <h2>O que acompanhar daqui para frente</h2>
    <p>O ponto central é a consulta pública até 15 de novembro, quando o ministério deve ajustar os limites e detalhar o que conta como exportação de um modelo implantado fora da China. Também vale observar se Washington responde com novas medidas, se empresas como DeepSeek e Alibaba comentam o efeito sobre os lançamentos abertos e se o processo de "registrar e seguir" sai do papel. Até lá, o recado para quem depende de IA é simples: o mapa de quem pode vender e comprar tecnologia de ponta está sendo redesenhado dos dois lados, e a notícia ainda é um rascunho, não uma regra final.</p>
  `,
};
