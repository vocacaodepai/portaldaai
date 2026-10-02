import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "arxiv-limita-submissoes-papers-ia",
  title: "arXiv limita autores a 2 artigos por mês após avalanche gerada por IA",
  summary:
    "Novo teto temporário do repositório científico tenta conter papers finos e 'salami' que moderadores ligam ao uso maciço de IA generativa.",
  author: "Bruno Danello",
  sourceName: "arXiv (blog oficial)",
  sourceUrl: "https://blog.arxiv.org/2026/10/01/updated-rate-limit-policy/",
  date: "2026-10-01",
  content: `
    <p>O arXiv, principal repositório de artigos científicos usado por pesquisadores de inteligência artificial, física, matemática e outras áreas, passou a limitar nesta quinta-feira (1º) cada autor a no máximo dois envios por mês, com um teto adicional de três submissões ativas simultâneas a qualquer momento. Segundo o <a href="https://blog.arxiv.org/2026/10/01/updated-rate-limit-policy/" rel="noopener noreferrer nofollow">anúncio oficial no blog do arXiv</a>, a medida é temporária e vale para todas as categorias da plataforma, enquanto a equipe de moderação desenvolve ferramentas melhores e novas práticas para lidar com a era dos autores assistidos por IA.</p>
    <p>A decisão chega depois de um crescimento explosivo nos envios: de 9.869 submissões em setembro de 2016 para 40.363 em setembro de 2026, segundo os números divulgados pelo próprio arXiv. Os moderadores, que trabalham voluntariamente, relataram um aumento de "papers finos" (thin papers, com escopo raso) e "papers salami", em que um único trabalho é fatiado em várias submissões menores só para multiplicar a contagem de publicações. A categoria de inteligência artificial (cs.AI) teve alta de 6 vezes em dois anos, o maior salto entre todas as áreas do repositório.</p>

    <h2>Como funciona o novo limite</h2>
    <p>As duas regras rodam em paralelo e são independentes entre si. Mesmo que um pesquisador ainda não tenha usado sua cota mensal de dois envios, ele não pode ter mais de três submissões ativas ao mesmo tempo, somando as que estão em espera, em moderação ou já publicadas recentemente. Artigos rejeitados contam para o limite mensal, uma forma de desincentivar o envio de material de baixa qualidade só para "testar a sorte" com os moderadores. Já artigos apagados antes da publicação oficial não entram na conta. O limite recai sobre quem submete o trabalho, não sobre todos os coautores, o que significa que um mesmo grupo de pesquisa ainda pode publicar mais de dois artigos por mês, desde que distribua as submissões entre pessoas diferentes da equipe.</p>
    <p>O arXiv não proibiu o uso de IA generativa para redigir ou revisar textos, como fizeram outras publicações científicas em medidas mais radicais. A aposta aqui é de contenção pela quantidade: ao encarecer o custo de inundar a plataforma com volume, a plataforma espera reduzir o incentivo para gerar dezenas de manuscritos por mês com apoio de modelos de linguagem, prática que se popularizou à medida que ferramentas como o <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, o Claude e o Gemini</a> se tornaram capazes de redigir rascunhos acadêmicos inteiros em minutos.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você trabalha com pesquisa, pós-graduação ou qualquer atividade que dependa de publicar ou acompanhar o que sai no arXiv, o efeito prático é imediato: menos ruído na timeline de novos papers, mas também menos espaço para "testar" ideias em público rapidamente. Quem usa o repositório para se manter atualizado sobre IA ganha um filtro extra de qualidade, já que o teto deve reduzir o volume de material raso que hoje precisa ser descartado manualmente. Ferramentas de curadoria e resumo de artigos científicos, como o <a href="/artigos/perplexity-notebooklm-ia-de-pesquisa-estudar-mais-rapido">Perplexity e o NotebookLM para pesquisa</a>, continuam úteis para separar o que vale a pena ler em meio ao volume que ainda vai circular.</p>
    <p>Para quem empreende ou presta serviço escrevendo e revisando textos com apoio de IA, o episódio é um recado sobre limites práticos: usar IA para acelerar produção de conteúdo tem valor até o ponto em que a quantidade passa a prejudicar a credibilidade do que é entregue. O mesmo cuidado vale fora da academia, seja ao revisar textos para clientes ou ao montar portfólio próprio, como já discutimos no guia sobre <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">como escolher ferramenta de IA com segurança</a>.</p>

    <h2>Um padrão que se repete em outras plataformas</h2>
    <p>O arXiv não é o primeiro espaço a reagir ao volume de conteúdo gerado por IA com regras de limite em vez de proibição total. Editoras científicas, bancos de currículo e até redes sociais profissionais vêm testando mecanismos parecidos: cotas, verificação de autoria humana e revisão mais rígida antes da publicação. A diferença é que, no caso do arXiv, a decisão afeta diretamente o ritmo de divulgação de pesquisa em IA, já que boa parte dos papers mais citados sobre modelos de linguagem, segurança e agentes autônomos é publicada ali antes de passar por revisão por pares formal, muitas vezes meses antes de aparecer em uma conferência ou revista científica tradicional.</p>
    <p>Vale observar que a própria IA que gera o problema também é usada para mitigá-lo: o arXiv sinalizou que vai investir em ferramentas automatizadas de triagem para identificar papers salami e conteúdo de baixa originalidade com mais eficiência do que o olho humano dos moderadores. Enquanto essas ferramentas não maturam, o teto de dois envios por mês funciona como uma solução de curto prazo, e a própria publicação do arXiv deixou claro que a política pode ser revista conforme os resultados dos próximos meses.</p>

    <h2>O que observar nos próximos meses</h2>
    <p>Três sinais vão mostrar se a medida está funcionando como o arXiv espera. O primeiro é o volume mensal de submissões em categorias ligadas a IA, como cs.AI, cs.LG e cs.CL: se a curva de crescimento de 6 vezes em dois anos começar a desacelerar, a cota terá cumprido seu papel de conter o excesso sem sufocar pesquisa legítima. O segundo é o tempo de resposta dos moderadores voluntários, hoje sobrecarregados, já que o próprio anúncio cita a sobrecarga como motivação central da mudança. O terceiro é a reação da comunidade acadêmica: pesquisadores que publicam com frequência legítima, por trabalharem em grupos grandes com muitos subprojetos em paralelo, podem pressionar por exceções ou por um sistema de cotas por laboratório em vez de por autor individual.</p>
    <p>Para quem acompanha o setor de fora da academia, o episódio também serve de termômetro sobre até onde a produção em massa assistida por IA consegue ir antes de provocar uma resposta institucional. O mesmo dilema já apareceu em escolas, editoras de notícias e marketplaces de conteúdo: ganhos de produtividade reais convivem com o risco de afogar a curadoria humana em volume. Quem constrói negócio em torno de geração de conteúdo com IA, seja texto científico, seja material de marketing, tende a lidar cada vez mais com esse tipo de limite de plataforma, e vale estudar como funciona a camada de revisão e triagem de cada canal antes de depender dele para publicar em escala, como também recomendamos no guia sobre <a href="/artigos/agentes-de-ia-o-futuro-do-trabalho-autonomo-explicado">o futuro do trabalho autônomo com agentes de IA</a>.</p>
  `,
  faq: [
    {
      question: "O limite vale para todos os coautores de um artigo?",
      answer:
        "Não. O teto de dois envios por mês e três submissões ativas recai sobre a pessoa que submete o trabalho na plataforma, não sobre cada coautor. Um grupo de pesquisa pode distribuir submissões entre integrantes diferentes.",
    },
    {
      question: "Artigos rejeitados contam para o limite mensal?",
      answer:
        "Sim. Segundo o arXiv, submissões rejeitadas também consomem a cota mensal, justamente para desincentivar o envio de material de baixa qualidade só para tentar a publicação.",
    },
    {
      question: "O arXiv proibiu o uso de inteligência artificial para escrever papers?",
      answer:
        "Não. A medida não proíbe o uso de IA generativa na redação ou revisão de textos; ela limita apenas a quantidade de submissões por autor, como forma de reduzir o volume de papers finos ou fatiados artificialmente.",
    },
  ],
};
