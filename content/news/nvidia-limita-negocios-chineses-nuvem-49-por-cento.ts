import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "nvidia-limita-negocios-chineses-nuvem-49-por-cento",
  title: "Nvidia manda nuvens limitarem a 49% os clientes chineses, diz o FT",
  summary:
    "Segundo o Financial Times, a Nvidia pediu a parceiros de data center que vendam ao menos 51% dos serviços a empresas não chinesas. A regra vale só para contratos novos.",
  author: "Bruno Danello",
  sourceName: "Financial Times, The Next Web",
  sourceUrl: "https://thenextweb.com/news/nvidia-cloud-partners-cap-china-business",
  date: "2026-11-03",
  publishedAt: "2026-11-03T07:40:00-03:00",
  imageQuery: "Nvidia headquarters Santa Clara",
  coverImage: {
    url: "/images/covers/nvidia-limita-negocios-chineses-nuvem-49-por-cento.webp",
    width: 1280,
    height: 783,
    credit: "Coolcaesar (CC BY-SA 4.0) / Wikimedia Commons",
    creditUrl: "https://commons.wikimedia.org/wiki/File%3ANVIDIA%20Headquarters.jpg",
  },
  topic: "regulacao",
  content: `
    <p>A Nvidia mandou parceiros de nuvem limitarem a 49% a fatia de clientes chineses nos seus serviços de computação para IA. A informação é do Financial Times, publicada nesta terça-feira (3) e repercutida pelo site The Next Web. Na prática, os provedores de data center que usam chips da Nvidia teriam de destinar ao menos 51% da capacidade a empresas de fora da China. A regra, segundo a reportagem, vale apenas para contratos novos e os acordos já existentes não seriam afetados.</p>

    <p>A Nvidia não confirmou nem negou a medida quando a agência AFP pediu comentário. A empresa respondeu com uma frase de posicionamento: "Os Estados Unidos não podem vencer a corrida da IA a menos que a infraestrutura de IA americana vença no mundo todo". Traduzimos livremente do inglês. O argumento da empresa é que a política americana incentiva provedores de nuvem a construir seus serviços sobre tecnologia dos EUA.</p>

    <h2>O que o Financial Times reportou</h2>
    <p>De acordo com cinco pessoas com conhecimento do assunto, ouvidas pelo jornal, a exigência foi comunicada de forma verbal, por meio das equipes de vendas e dos times regionais da Nvidia, e não por escrito. Esse detalhe importa: sem documento, não há texto público para consultar, e cada parceiro pode ter ouvido uma versão ligeiramente diferente da regra. A reportagem também diz que a Nvidia nunca havia imposto uma restrição desse tipo antes.</p>

    <p>Os números aparecem de duas formas na cobertura. O título fala em teto de 49% para o negócio com a China, e o texto descreve o piso de 51% para clientes não chineses. São o mesmo limite visto de lados opostos. Como a ordem não é pública, os detalhes de como a fatia seria medida, por receita, por capacidade instalada ou por número de clientes, não foram esclarecidos nas fontes que consultamos.</p>

    <h2>Por que a Nvidia estaria fazendo isso</h2>
    <p>Muitas empresas chinesas de IA alugam capacidade de computação em provedores de nuvem fora da China para treinar seus modelos. Esse caminho existe porque os Estados Unidos restringem desde 2022 a venda dos chips mais avançados da Nvidia ao país. Washington tenta há anos fechar também essa rota indireta, e a medida reportada agora seria uma forma de a própria fabricante limitar o acesso sem esperar uma nova lei.</p>

    <p>O pano de fundo inclui o contrabando. Segundo a reportagem do The Next Web, mesmo com as restrições os chips chegam à China por vias ilegais. No início de 2026, vários funcionários seniores da Super Micro foram acusados de contrabandear cerca de US$ 2,5 bilhões em servidores de IA da Nvidia para o país. Do outro lado, há um ano Pequim proibiu chips de IA estrangeiros em data centers financiados pelo Estado, para favorecer fornecedores locais, entre eles a fabricante de memória CXMT.</p>

    <h2>A reação de Pequim</h2>
    <p>Questionada sobre o assunto, a porta-voz do Ministério das Relações Exteriores da China, Mao Ning, disse não ter conhecimento da reportagem. Ela afirmou que Pequim espera que todas as partes ofereçam um ambiente de negócios "justo, transparente e não discriminatório" para empresas de todos os países. Foi uma resposta protocolar, sem anúncio de retaliação.</p>

    <h2>O que isso muda no jogo dos chips</h2>
    <p>A Nvidia é a empresa mais valiosa do mundo e a principal fornecedora da expansão da infraestrutura de IA. Seu papel vai além de vender chips: ela também participa do financiamento de data centers, como mostrou o Portal da AI em <a href="/noticias/nvidia-avalia-avalizar-divida-nscale-data-center-anthropic-virginia-ocidental">Nvidia avalia avalizar dívida da Nscale em data center para a Anthropic</a>. Uma regra de teto para clientes chineses daria à fabricante mais uma alavanca para influenciar onde a infraestrutura fica e quem tem acesso a ela.</p>

    <p>O tema vem esquentando nas últimas semanas. Em setembro, a China sinalizou que deixaria ByteDance e Alibaba comprarem chips da Nvidia, como contamos em <a href="/noticias/china-libera-bytedance-alibaba-comprar-chips-nvidia">China sinaliza que vai deixar ByteDance e Alibaba comprarem chips da Nvidia</a>. Em outubro, Pequim publicou um rascunho para controlar a exportação de modelos e agentes de IA, tema da notícia <a href="/noticias/china-controle-exportacao-ia-modelos-agentes-rascunho-catalogo">China propõe barrar a exportação de modelos e agentes de IA de ponta</a>. E do lado americano, o Tesouro propôs vetar certos investimentos em IA de ponta na China, caso detalhado em <a href="/noticias/eua-tesouro-regra-investimento-exterior-ia-china-coins-act">Tesouro dos EUA propõe vetar investimento em IA de ponta na China</a>. A medida da Nvidia se soma a esse conjunto de movimentos dos dois lados.</p>

    <h2>O que ainda não está claro</h2>
    <p>Há pontos em aberto. A Nvidia não confirmou a regra, então tudo depende das cinco fontes anônimas do Financial Times. Não se sabe quais provedores receberam a orientação, a partir de quando ela vale nem como seria fiscalizada. Também não está claro se um contrato novo de um cliente chinês já existente conta como novo, nem se haveria punição, como corte de fornecimento, para quem passar do teto. Enquanto a empresa não falar publicamente, a informação deve ser lida como reportagem de fonte única, e não como política oficial.</p>

    <div class="callout-box callout-warn">
      <span class="callout-label">Leia com cautela</span>
      <p>A Nvidia não confirmou a medida. O que está acima vem do Financial Times, com base em cinco fontes anônimas, e da repercussão do The Next Web. Se a empresa divulgar a regra por escrito, os detalhes podem mudar.</p>
    </div>

    <h2>Por que isso importa para você</h2>
    <p>Mesmo longe da disputa entre Washington e Pequim, a decisão mexe com a cadeia que entrega as ferramentas de IA que você usa. Se os provedores de nuvem precisarem reservar mais capacidade para clientes fora da China, a oferta de computação para os demais, incluindo empresas e desenvolvedores brasileiros que alugam GPU, pode ficar mais disputada ou, ao contrário, mais folgada, dependendo de como a regra for aplicada. O efeito no preço de API e de assinaturas não é direto nem imediato, mas a disponibilidade de chips é um dos fatores que definem quanto custa rodar um modelo.</p>

    <p>Para quem trabalha ou empreende com IA, a lição prática é não depender de um único fornecedor de modelo ou de nuvem. Se você quer entender como montar um negócio com agentes sem amarrar tudo a uma só plataforma, vale ler <a href="/artigos/agentes-de-ia-o-futuro-do-trabalho-autonomo-explicado">agentes de IA e o futuro do trabalho autônomo</a> e <a href="/artigos/como-ganhar-dinheiro-criando-e-vendendo-agentes-de-ia-personalizados">como ganhar dinheiro criando e vendendo agentes de IA personalizados</a>. Acompanhe também a negociação de chips entre EUA e China, porque ela costuma aparecer no preço e na oferta de serviços meses depois.</p>

    <p>Fonte da apuração: <a href="https://thenextweb.com/news/nvidia-cloud-partners-cap-china-business" rel="noopener noreferrer nofollow">The Next Web</a>, citando o Financial Times.</p>
  `,
  faq: [
    {
      question: "O que a Nvidia teria pedido aos parceiros de nuvem?",
      answer:
        "Segundo o Financial Times, que os provedores de data center vendam ao menos 51% dos serviços a empresas não chinesas, o que limita a 49% o negócio com clientes da China. A regra valeria só para contratos novos.",
    },
    {
      question: "A Nvidia confirmou a regra?",
      answer:
        "Não. A empresa não confirmou nem negou quando a agência AFP pediu comentário e respondeu apenas que os EUA precisam que sua infraestrutura de IA vença no mundo todo.",
    },
    {
      question: "Por que o limite é para a China?",
      answer:
        "Porque empresas chinesas alugam computação de nuvens fora do país para treinar modelos, rota que Washington tenta fechar desde que restringiu a venda dos chips mais avançados, em 2022.",
    },
  ],
};
