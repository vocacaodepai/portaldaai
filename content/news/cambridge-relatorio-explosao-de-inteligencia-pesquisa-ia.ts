import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "cambridge-relatorio-explosao-de-inteligencia-pesquisa-ia",
  title: "Cientistas de Cambridge e de grandes labs alertam sobre 'explosão de inteligência'",
  summary:
    "Relatório assinado por nomes da OpenAI, Anthropic, Microsoft e Meta, além de Hinton e Bengio, pede supervisão obrigatória sobre pesquisa de IA feita por IA.",
  author: "Bruno Danello",
  sourceName: "Cambridge Programme on AI Science & Policy (CASP)",
  sourceUrl: "https://casp.ac/reports/intelligence-explosion",
  date: "2026-09-28",
  content: `
    <p>Um grupo de 21 pesquisadores e executivos ligados a laboratórios de ponta publicou nesta segunda-feira (28) um relatório de política pública alertando que automatizar a pesquisa de inteligência artificial com a própria IA pode gerar uma "explosão de inteligência" difícil de controlar. Segundo o <a href="https://casp.ac/reports/intelligence-explosion" rel="noopener noreferrer nofollow">relatório publicado pelo Cambridge Programme on AI Science & Policy (CASP)</a>, da Universidade de Cambridge, assinam o documento o cientista-chefe da OpenAI, Jakub Pachocki, o cofundador da Anthropic, Jack Clark, o diretor científico da Microsoft, Eric Horvitz, a vice-presidente de pesquisa em IA da Meta, Dawn Song, e os vencedores do prêmio Turing Geoffrey Hinton e Yoshua Bengio.</p>
    <p>O grupo estima que, uma vez que a IA alcance desempenho de nível especialista em pesquisa de IA, o poder computacional de um laboratório pode substituir milhões de pesquisadores humanos, gerando uma aceleração de cerca de 10 vezes no progresso da IA em aproximadamente 18 meses. Como evidência do ritmo atual, citam que a própria Anthropic revelou que sistemas de IA já respondem por 26% da sua pesquisa e desenvolvimento interno, contra 1% em março deste ano.</p>

    <h2>Contexto</h2>
    <p>O relatório pede quatro medidas concretas: relatórios obrigatórios sobre nível de automação e ritmo de avanço de capacidade, auditores independentes dentro dos laboratórios (nos moldes da fiscalização bancária ou nuclear), um "limite de velocidade" para o crescimento de capacidade com mecanismos para interromper experimentos de alto risco, e redes isoladas fisicamente da internet para parte da pesquisa automatizada. O pedido chega poucos dias depois de <a href="/noticias/bill-gates-pede-legislacao-federal-ia-eua">Bill Gates defender uma lei federal de IA nos EUA</a> e da criação de um <a href="/noticias/google-openai-anthropic-cortejam-sriram-krishnan-orgao-padroes">órgão de autorregulação entre as próprias empresas do setor</a>, mostrando que a pressão por supervisão vem tanto de fora quanto de dentro dos laboratórios.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para quem usa IA no dia a dia, isso não muda nada agora, é debate de política pública de longo prazo. Mas o dado concreto (26% da P&D da Anthropic já feita por IA) mostra algo prático: o ritmo de lançamento de novidades tende a acelerar, não desacelerar, porque as próprias empresas estão usando IA pra construir a próxima IA mais rápido.</p>
    <p>Para quem empreende com IA, o alerta central do relatório (que o processo pode escapar da supervisão humana) reforça por que vale manter processo próprio de checagem em qualquer automação que você usa ou vende, em vez de confiar cegamente que "a empresa por trás resolve isso". O <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist de segurança na hora de escolher ferramenta de IA</a> continua valendo, principalmente pra quem constrói negócio em cima de ferramentas que evoluem rápido demais pra acompanhar de perto.</p>
  `,
  faq: [
    {
      question: "'Explosão de inteligência' significa que a IA vai virar consciente ou fugir do controle amanhã?",
      answer: "Não. É um cenário de médio prazo discutido pelos pesquisadores, baseado na ideia de que IA pesquisando e melhorando outra IA pode acelerar o progresso além da capacidade humana de supervisionar em tempo real, não um evento repentino previsto para um prazo específico.",
    },
    {
      question: "As empresas concordam entre si sobre como lidar com esse risco?",
      answer: "Há convergência entre pesquisadores e alguns executivos de laboratórios sobre a necessidade de supervisão, mas não há consenso político: o governo Trump já rejeitou publicamente qualquer proposta de controle internacional centralizado da IA.",
    },
  ],
};
