/**
 * Tipos compartilhados do conteúdo editorial.
 * Os artigos vivem em content/articles/<slug>.ts (um arquivo por artigo) e
 * são reunidos pelo índice gerado em content/articles/index.ts.
 */
export type FaqItem = { question: string; answer: string };

export type QuizQuestion = {
  question: string;
  options: string[];
  answer: number; // índice da opção correta
  explanation: string;
};

export const categories = [
  {
    slug: "iniciantes",
    label: "Para Iniciantes",
    description:
      "Guias do zero para quem está começando a usar inteligência artificial no dia a dia, sem jargão técnico.",
  },
  {
    slug: "monetizacao",
    label: "Monetização",
    description:
      "Formas reais de ganhar dinheiro com IA: freelas, produtos digitais, conteúdo, serviços e renda extra.",
  },
  {
    slug: "negocios",
    label: "Negócios com IA",
    description:
      "Como aplicar IA em pequenos negócios para vender mais, atender melhor e gastar menos tempo em tarefas repetitivas.",
  },
  {
    slug: "ferramentas",
    label: "Ferramentas",
    description:
      "Testes, comparativos e reviews das ferramentas de IA que valem seu tempo e seu dinheiro.",
  },
  {
    slug: "carreira",
    label: "Carreira",
    description:
      "Como usar IA para conseguir emprego, crescer na profissão e continuar relevante no mercado.",
  },
  {
    slug: "futuro",
    label: "Futuro do Trabalho",
    description:
      "Tendências, profissões que vão mudar e o que fazer hoje para se preparar para o que vem aí.",
  },
  {
    slug: "ai-indica",
    label: "AI Indica",
    description:
      "Reviews com apoio de IA e link direto para comprar, com nota por critério, produtos e ferramentas indicadas de verdade.",
  },
] as const;

export type Category = (typeof categories)[number]["slug"];

/** Dados estruturados de um review de ferramenta (artigos com kind: "review"). */
export type ReviewData = {
  /** Nome da ferramenta avaliada. */
  tool: string;
  /** Nota final de 0 a 10, com uma casa decimal. */
  score: number;
  /** Critérios avaliados, cada um com nota de 0 a 10. */
  criteria: { label: string; score: number }[];
  pros: string[];
  cons: string[];
  /** Preço em texto, ex.: "Grátis" ou "US$ 20/mês". */
  price: string;
  /** Para quem a ferramenta é ideal, em uma frase. */
  bestFor: string;
  /** Site oficial da ferramenta, ou link de compra/afiliado para produtos físicos (https). */
  url: string;
  /** Quantos dias a ferramenta foi testada antes do review. */
  testedDays?: number;
  /** Se há links de afiliado no artigo (exibe o aviso). Padrão: false. */
  affiliate?: boolean;
  /** Texto do botão principal. Padrão: "Conhecer {tool}". */
  ctaLabel?: string;
};

/**
 * Taxonomia de produto, usada só pelo filtro de `/categoria/ai-indica` (não
 * confundir com `categories` acima, que é a categoria editorial do artigo).
 * Cada `productSubcategories` aponta pra um `category` daqui.
 */
export const productCategories = [
  { slug: "cozinha", label: "Cozinha" },
  { slug: "casa-inteligente", label: "Casa Inteligente" },
  { slug: "seguranca", label: "Segurança" },
  { slug: "audio-video", label: "Áudio e Vídeo" },
  { slug: "informatica", label: "Informática e Acessórios" },
  { slug: "saude-bem-estar", label: "Saúde e Bem-estar" },
] as const;

export type ProductCategory = (typeof productCategories)[number]["slug"];

export const productSubcategories = [
  { slug: "cafeteira", label: "Cafeteira", category: "cozinha" },
  { slug: "air-fryer", label: "Air Fryer", category: "cozinha" },
  { slug: "chaleira", label: "Chaleira", category: "cozinha" },
  { slug: "liquidificador", label: "Liquidificador", category: "cozinha" },
  { slug: "sanduicheira", label: "Sanduicheira", category: "cozinha" },
  { slug: "torradeira", label: "Torradeira", category: "cozinha" },
  { slug: "multiprocessador", label: "Multiprocessador", category: "cozinha" },
  { slug: "panela-pressao", label: "Panela de Pressão", category: "cozinha" },
  { slug: "lampada-inteligente", label: "Lâmpada Inteligente", category: "casa-inteligente" },
  { slug: "robo-aspirador", label: "Robô Aspirador", category: "casa-inteligente" },
  { slug: "tomada-inteligente", label: "Tomada Inteligente", category: "casa-inteligente" },
  { slug: "roteador-wifi", label: "Roteador Wi-Fi", category: "casa-inteligente" },
  { slug: "umidificador", label: "Umidificador", category: "casa-inteligente" },
  { slug: "ventilador", label: "Ventilador", category: "casa-inteligente" },
  { slug: "lavadora-alta-pressao", label: "Lavadora de Alta Pressão", category: "casa-inteligente" },
  { slug: "fechadura-digital", label: "Fechadura Digital", category: "seguranca" },
  { slug: "camera-seguranca", label: "Câmera de Segurança", category: "seguranca" },
  { slug: "webcam", label: "Webcam", category: "audio-video" },
  { slug: "caixa-de-som", label: "Caixa de Som", category: "audio-video" },
  { slug: "fone-bluetooth", label: "Fone Bluetooth", category: "audio-video" },
  { slug: "microfone", label: "Microfone", category: "audio-video" },
  { slug: "carregador", label: "Carregador", category: "informatica" },
  { slug: "mouse", label: "Mouse", category: "informatica" },
  { slug: "power-bank", label: "Power Bank", category: "informatica" },
  { slug: "ssd-externo", label: "SSD Externo", category: "informatica" },
  { slug: "teclado", label: "Teclado", category: "informatica" },
  { slug: "impressora-etiquetas", label: "Impressora de Etiquetas", category: "informatica" },
  { slug: "hub-usb-c", label: "Hub USB-C", category: "informatica" },
  { slug: "balanca-inteligente", label: "Balança Inteligente", category: "saude-bem-estar" },
  { slug: "smartwatch", label: "Smartwatch", category: "saude-bem-estar" },
] as const;

export type ProductSubcategory = (typeof productSubcategories)[number]["slug"];

export type Article = {
  slug: string;
  title: string;
  /** Título curto para a tag <title> (até ~60 caracteres). Padrão: title. */
  seoTitle?: string;
  excerpt: string;
  /** Meta description (120-160 caracteres). Padrão: excerpt. */
  metaDescription?: string;
  category: Category;
  /** Taxonomia de produto (só artigos de `category: "ai-indica"`), para o filtro em /categoria/ai-indica. */
  productCategory?: ProductCategory;
  productSubcategory?: ProductSubcategory;
  /**
   * Nota editorial de 0 a 10 (uma casa decimal) do produto recomendado,
   * usada pra mostrar o selo de nota no card de todo artigo `ai-indica`,
   * comparativo ou review único. Em `kind: "review"`, normalmente igual a
   * `review.score`; em comparativo (`kind: "guia"`), é a nota do produto
   * que a gente indica no fim do texto (não existe campo `review` nesse
   * caso, por comparar mais de um produto).
   */
  productScore?: number;
  date: string; // ISO (AAAA-MM-DD)
  /** Data da última atualização editorial (AAAA-MM-DD). */
  updated?: string;
  /** Minutos de leitura declarados; o site recalcula pelo texto (ver readingTime). */
  readTime: number;
  imageQuery: string;
  seed: number;
  /**
   * Foto real do produto (self-hosted em /public/images/products), usada no lugar do
   * banco de imagens só para reviews de produto físico (categoria ai-indica).
   */
  coverImage?: { url: string; width: number; height: number; credit: string; creditUrl: string };
  content: string; // HTML
  /** Tipo do artigo. Padrão: "guia". */
  kind?: "guia" | "review";
  /** Voz autoral do blog. Padrão: Bruno Danello, exceto quando informado. */
  author?: string;
  /** Resumo em 3 pontos exibido logo após a capa. */
  keyPoints?: string[];
  /** Dados do review (só para kind: "review"). */
  review?: ReviewData;
  /** Perguntas frequentes exibidas em acordeão ao fim do artigo. */
  faq?: FaqItem[];
  /** Quiz curto pra fixar o aprendizado, exibido ao fim do artigo. */
  quiz?: QuizQuestion[];
};

export type NewsFaqItem = FaqItem;
export type NewsQuizQuestion = QuizQuestion;

/** Tópicos de notícia, usados só pelo filtro em /noticias (não confundir com `categories` dos artigos). */
export const newsTopics = [
  { slug: "lancamentos", label: "Lançamentos" },
  { slug: "regulacao", label: "Regulação" },
  { slug: "mercado-trabalho", label: "Mercado de trabalho" },
  { slug: "seguranca", label: "Segurança" },
  { slug: "negocios", label: "Negócios" },
] as const;

export type NewsTopic = (typeof newsTopics)[number]["slug"];

export type NewsItem = {
  slug: string;
  title: string;
  /** Resumo curto (também vira meta description, cortada em ~158 caracteres). */
  summary: string;
  author: string;
  sourceName: string;
  sourceUrl: string;
  date: string; // ISO (AAAA-MM-DD)
  /**
   * Texto completo da notícia (HTML), escrito a partir da fonte e exibido em
   * /noticias/[slug]. Opcional só nas notícias antigas; todo item novo deve ter.
   */
  content?: string;
  /**
   * Texto livre descrevendo a foto da capa (ex.: "Sam Altman portrait",
   * "OpenAI logo"), passado pela mesma cascata do CoverImage (Wikimedia
   * Commons primeiro). Opcional: notícia sem imageQuery não mostra capa,
   * mantendo o comportamento antigo.
   */
  imageQuery?: string;
  /** Tópico usado só pelo filtro em /noticias. Opcional nas notícias antigas. */
  topic?: NewsTopic;
  /** Perguntas frequentes exibidas em acordeão ao fim da matéria. */
  faq?: NewsFaqItem[];
  /** Quiz curto pra fixar o aprendizado, exibido ao fim da matéria. */
  quiz?: NewsQuizQuestion[];
};
