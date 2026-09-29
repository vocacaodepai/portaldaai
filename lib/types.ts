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
      "Produtos de eletrônicos testados e comparados com apoio de IA, com nota por critério e link direto para comprar.",
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

export type Article = {
  slug: string;
  title: string;
  /** Título curto para a tag <title> (até ~60 caracteres). Padrão: title. */
  seoTitle?: string;
  excerpt: string;
  /** Meta description (120-160 caracteres). Padrão: excerpt. */
  metaDescription?: string;
  category: Category;
  date: string; // ISO (AAAA-MM-DD)
  /** Data da última atualização editorial (AAAA-MM-DD). */
  updated?: string;
  /** Minutos de leitura declarados; o site recalcula pelo texto (ver readingTime). */
  readTime: number;
  imageQuery: string;
  seed: number;
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
  /** Perguntas frequentes exibidas em acordeão ao fim da matéria. */
  faq?: NewsFaqItem[];
  /** Quiz curto pra fixar o aprendizado, exibido ao fim da matéria. */
  quiz?: NewsQuizQuestion[];
};
