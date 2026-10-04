import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "google-pausa-bug-bounty-ia-slop",
  title: "Google pausa bug bounty de código aberto por excesso de IA",
  summary:
    "Programa que paga por falhas em software livre parou de aceitar relatos de vulnerabilidade em produtos após enxurrada de denúncias falsas geradas por IA.",
  author: "Bruno Danello",
  sourceName: "Tom's Hardware",
  sourceUrl:
    "https://www.tomshardware.com/tech-industry/artificial-intelligence/google-suspends-part-of-the-oss-vrp-bug-bounty-program-due-to-an-influx-of-invalid-ai-submissions-product-vulnerability-submissions-ended-october-1",
  date: "2026-10-01",
  content: `
    <p>O Google suspendeu, a partir de 1º de outubro, o recebimento de relatos de vulnerabilidade em produtos dentro do seu Open Source Software Vulnerability Reward Program (OSS VRP), o programa de recompensas que paga pesquisadores de segurança por encontrarem falhas em softwares de código aberto usados pela empresa. Segundo reportagem da <a href="https://www.tomshardware.com/tech-industry/artificial-intelligence/google-suspends-part-of-the-oss-vrp-bug-bounty-program-due-to-an-influx-of-invalid-ai-submissions-product-vulnerability-submissions-ended-october-1" target="_blank" rel="noopener noreferrer nofollow">Tom's Hardware</a>, a causa foi uma enxurrada de relatos gerados por ferramentas de IA que descreviam falhas de segurança inexistentes, o chamado "AI slop": textos bem escritos, com aparência técnica convincente, mas que na prática eram alucinações sem nenhum risco real.</p>

    <p>A pausa vale só para submissões de falhas em produtos do próprio Google; relatos sobre vulnerabilidades na cadeia de suprimentos de software (supply chain) continuam sendo aceitos normalmente, e quem já havia enviado um relato antes de 1º de outubro não é afetado. Em um post oficial na rede X, o Google disse que vai reformular essa parte do programa e prometeu uma atualização até o primeiro trimestre de 2027, enquanto isso recomendou que pesquisadores de segurança migrem para outros programas de recompensa da própria empresa.</p>

    <h2>Por que os relatos de IA viraram um problema para quem corrige bugs</h2>
    <p>O OSS VRP existe desde 2022 e paga, dependendo da gravidade, valores que podem passar de dez mil dólares por falha confirmada em projetos de código aberto mantidos ou usados pelo Google. O problema é que, com a popularização de agentes de IA capazes de escanear código automaticamente e redigir relatórios de segurança em segundos, aumentou também o volume de denúncias que parecem plausíveis à primeira vista, mas que na análise técnica se revelam erros de interpretação do modelo ou simplesmente inexistentes. Engenheiros do Google e mantenedores de projetos de código aberto passaram a gastar mais tempo filtrando manualmente essas submissões do que efetivamente corrigindo falhas reais, o que inverteu a lógica original do programa, criado justamente para liberar tempo de quem desenvolve software.</p>
    <p>O caso do Google não é isolado. O projeto curl, uma das bibliotecas de código aberto mais usadas do mundo, encerrou seu próprio programa de recompensas por um motivo parecido depois de uma sequência de relatos gerados por IA que consumiam o tempo da equipe sem apontar nenhum risco concreto. A diferença é a escala: por envolver um programa administrado por uma das maiores empresas de tecnologia do planeta, a pausa do Google chamou atenção justamente por mostrar que nem a infraestrutura de segurança de uma gigante como ela está imune ao volume de conteúdo de baixa qualidade que ferramentas de IA generativa conseguem produzir em escala.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para quem usa IA no trabalho, seja para programar, revisar código ou simplesmente redigir relatórios técnicos, o episódio é um alerta prático: a mesma capacidade que torna um agente de IA útil para encontrar padrões suspeitos em código também o torna capaz de produzir conclusões erradas com uma aparência de certeza que engana até revisores experientes. Isso vale tanto para quem usa IA para caçar vulnerabilidades quanto para quem a usa em qualquer tarefa que exija precisão técnica, da análise financeira ao suporte ao cliente. O ponto central não é que a IA seja inútil para esse tipo de trabalho, é que o resultado dela continua exigindo verificação humana antes de qualquer decisão, pagamento ou publicação, algo que já discutimos em detalhe no <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">guia de como escolher uma ferramenta de IA com segurança</a>.</p>
    <p>Para empresas brasileiras que mantêm ou contribuem com projetos de código aberto, ou que têm seus próprios programas internos de recompensa por bugs, o caso do Google serve de modelo de resposta: em vez de simplesmente fechar a porta para relatos de IA, bem mais comum é adicionar uma etapa extra de triagem, como pedir prova de conceito reproduzível ou limitar o número de submissões por pesquisador em um período, retomando um pouco do controle de qualidade sem descartar de vez quem usa IA de forma responsável para apoiar a caça a falhas.</p>

    <h2>Um padrão que vai muito além de segurança</h2>
    <p>O episódio também se encaixa numa tendência maior que o <a href="/noticias/quatro-modelos-topo-lancados-mesma-semana-fadiga">Portal da AI já vinha acompanhando</a>: o volume cada vez maior de conteúdo gerado por IA está sobrecarregando sistemas pensados para um ritmo humano de produção, de publicações acadêmicas a relatórios de segurança. Pesquisas citadas por veículos internacionais chegaram a apontar que mais de 30% do texto disponível na internet já é gerado por IA, uma proporção que cresce rápido e que torna cada vez mais necessário ter algum tipo de filtro, humano ou automatizado, antes que qualquer conteúdo gerado por máquina chegue a uma decisão real, seja ela técnica, financeira ou editorial.</p>
    <p>Esse movimento ajuda a explicar também por que empresas como OpenAI e Anthropic vêm investindo tanto em avaliações externas de segurança antes de lançar modelos mais capazes, como mostrou a <a href="/noticias/openai-abre-avaliacoes-seguranca-terceiros-durante-treinamento">decisão da OpenAI de abrir avaliações a terceiros durante o treinamento</a>: quanto mais autônomos ficam os agentes de IA, maior o risco de eles produzirem, em escala, conclusões erradas que parecem corretas. O mesmo raciocínio vale para quem usa agentes de IA no dia a dia de um negócio: automatizar uma tarefa não elimina a necessidade de supervisão, só muda onde ela precisa acontecer.</p>

    <h2>O que observar daqui para frente</h2>
    <p>O Google prometeu uma atualização sobre o futuro do OSS VRP até o primeiro trimestre de 2027, o que deve incluir algum mecanismo de triagem mais rígido para separar relatos legítimos de alucinações de IA. Até lá, pesquisadores de segurança que dependiam desse programa específico precisam buscar alternativas, como o Cloud VRP da própria empresa, que continua aceitando relatos sobre produtos do Google Cloud. Vale observar se outras gigantes de tecnologia com programas semelhantes, como Microsoft e Meta, vão seguir o mesmo caminho nos próximos meses, o que sinalizaria que o problema de relatórios gerados por IA de baixa qualidade deixou de ser uma exceção pontual e passou a exigir resposta estrutural da indústria inteira.</p>

    <div class="callout-box">
      <span class="callout-label">Resumo rápido</span>
      <p>O Google suspendeu, em 1º de outubro, o recebimento de relatos de vulnerabilidade em produtos no seu programa de bug bounty de código aberto (OSS VRP), depois de ser inundado por denúncias falsas geradas por IA. A pausa deve durar até o primeiro trimestre de 2027, quando a empresa promete anunciar um novo formato para o programa.</p>
    </div>
  `,
  faq: [
    {
      question: "O que é o OSS VRP do Google?",
      answer:
        "É o Open Source Software Vulnerability Reward Program, o programa de recompensas em dinheiro que o Google mantém desde 2022 para pesquisadores que encontram falhas de segurança em softwares de código aberto usados pela empresa.",
    },
    {
      question: "Por que o Google pausou o programa?",
      answer:
        "Porque recebeu um volume alto de relatos de vulnerabilidade gerados por ferramentas de IA que pareciam plausíveis, mas na prática eram alucinações sem nenhuma falha real, consumindo o tempo de engenheiros que precisavam filtrar cada submissão manualmente.",
    },
    {
      question: "A pausa afeta todo tipo de relato de segurança?",
      answer:
        "Não. A suspensão vale só para relatos de vulnerabilidade em produtos do Google. Relatos sobre a cadeia de suprimentos de software (supply chain) continuam sendo aceitos normalmente, assim como submissões enviadas antes de 1º de outubro.",
    },
  ],
};
