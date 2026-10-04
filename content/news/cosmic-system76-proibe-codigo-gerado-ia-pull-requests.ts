import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "cosmic-system76-proibe-codigo-gerado-ia-pull-requests",
  title: "COSMIC, do System76, proíbe código gerado por IA em contribuições ao projeto",
  summary:
    "Ambiente de desktop Linux passou a exigir que colaboradores confirmem não ter usado conteúdo de IA em código, comentários ou descrições, após sobrecarga de revisão com submissões de baixa qualidade.",
  author: "Bruno Danello",
  sourceName: "Linuxiac",
  sourceUrl: "https://linuxiac.com/cosmic-stops-accepting-llm-generated-content-in-pull-requests/",
  date: "2026-10-02",
  content: `
    <p>O COSMIC, ambiente de desktop Linux desenvolvido pela System76 e usado por padrão no Pop!_OS, passou a proibir qualquer conteúdo gerado por inteligência artificial nas contribuições enviadas ao projeto. A mudança, registrada no modelo oficial de pull request do repositório <a href="https://github.com/pop-os/cosmic-epoch/blob/master/.github/PULL_REQUEST_TEMPLATE.md" target="_blank" rel="noopener noreferrer nofollow">cosmic-epoch no GitHub</a>, exige que quem envia uma contribuição confirme explicitamente que ela não contém "conteúdo gerado por LLM, incluindo código-fonte, comentários e descrições do pull request". Pull requests sem essa confirmação podem ser fechados sem revisão, segundo reportagem do <a href="https://linuxiac.com/cosmic-stops-accepting-llm-generated-content-in-pull-requests/" target="_blank" rel="noopener noreferrer nofollow">Linuxiac</a> publicada em 2 de outubro.</p>

    <p>Jeremy Soller, engenheiro da System76 e um dos principais mantenedores do COSMIC, explicou que a decisão não nasceu de uma rejeição filosófica à IA, mas de um problema prático de sobrecarga de trabalho. Segundo ele, o projeto passou a receber um volume bem maior de submissões de contribuidores de primeira viagem usando assistentes de IA, mas boa parte desse conteúdo não tinha relação com o que a equipe já havia planejado desenvolver e, por isso, tinha taxa de aceitação baixa, consumindo tempo de revisão que poderia ir para mudanças relevantes.</p>

    <h2>O que o novo modelo de contribuição exige</h2>
    <p>Além de declarar que não usou conteúdo gerado por LLM, quem abre um pull request no COSMIC agora também precisa certificar que entende de fato as mudanças que está propondo, que consegue responder a comentários de revisão sobre elas, que testou a própria contribuição e que está de acordo com o Developer Certificate of Origin, o termo padrão usado por projetos de código aberto para comprovar que o autor tem o direito de submeter aquele código. É uma régua mais rígida do que a adotada por outros projetos: em vez de pedir apenas a divulgação de que IA foi usada, o COSMIC optou por banir esse uso por completo nas submissões de código, comentários e texto descritivo.</p>
    <p>Vale notar que a proibição é específica para conteúdo generativo dentro das contribuições em si. O projeto continua permitindo o uso de IA de forma não generativa, como ferramentas de análise estática para encontrar bugs, e o repositório cosmic-flatpak, que empacota aplicativos de terceiros, segue com regras próprias, já que depende de manifestos mantidos pelos projetos upstream de cada aplicativo.</p>

    <h2>Um problema que já apareceu em outros projetos grandes de código aberto</h2>
    <p>O COSMIC não é o primeiro projeto a lidar com esse tipo de sobrecarga: tanto o kernel Linux quanto o Ubuntu já relataram aumento expressivo de submissões de baixa qualidade geradas por IA nos últimos meses, mas em ambos os casos a resposta foi tentar separar contribuições de IA bem-feitas das malfeitas, em vez de banir a prática inteira. A decisão do COSMIC de ir direto para a proibição total marca uma posição mais dura entre os ambientes de desktop Linux relevantes, e deve reabrir o debate sobre até que ponto times de código aberto mantidos por poucas pessoas conseguem absorver o volume de contribuições que ferramentas como o <a href="/noticias/claude-code-mods-typescript-personalizar">Claude Code</a> e o GitHub Copilot tornaram fácil de gerar.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">O gargalo não é gerar código, é revisar código</span>
      <p>O caso do COSMIC resume um padrão que vem se repetindo em projetos de código aberto: ferramentas de IA baixaram o custo de escrever uma contribuição, mas não baixaram o custo de revisar se ela está correta, testada e alinhada com o rumo do projeto. Quando a geração fica muito mais barata que a revisão, o gargalo migra para quem mantém o projeto, não para quem contribui.</p>
    </div>

    <h2>Por que isso importa para você</h2>
    <p>Se você trabalha com programação, ou gerencia alguém que programa com apoio de IA, o episódio do COSMIC é um alerta prático sobre como usar essas ferramentas sem virar fardo para quem recebe o seu trabalho. Gerar um pull request inteiro com um assistente de IA sem entender profundamente o que ele faz, sem testar e sem conseguir responder perguntas de revisão é exatamente o comportamento que esse tipo de projeto está passando a rejeitar, e a mesma lógica vale dentro de uma empresa: entregar um código, um relatório ou uma proposta comercial gerada por IA sem revisão própria tende a gerar mais trabalho de correção para quem recebe do que economiza para quem entregou.</p>
    <p>Para quem usa IA para programar no dia a dia, vale menos focar em "quanto código a IA consegue gerar" e mais em como validar esse código antes de submeter: rodar os testes, entender cada trecho alterado e conseguir explicar a decisão técnica por trás dele. Quem está escolhendo entre diferentes ferramentas de IA para codificação, e quer entender o que muda de uma para outra, pode acompanhar nossa cobertura de atualizações de ferramentas como o GitHub Copilot e o Codex, que também vêm passando por mudanças relevantes neste ano, incluindo uma <a href="/noticias/tribunal-nono-circuito-github-copilot-dmca-decisao">decisão judicial recente sobre direitos autorais no código gerado por essas ferramentas</a>.</p>

    <h2>O que pode vir a seguir</h2>
    <p>É provável que mais projetos de código aberto mantidos por equipes pequenas sigam o mesmo caminho do COSMIC nos próximos meses, adotando regras explícitas de contribuição em vez de confiar apenas na boa vontade de quem submete. Para empresas e times que usam IA para programar, a lição prática é formalizar algo parecido internamente, antes que a pressão externa force uma regra mais rígida: deixar claro quando o uso de IA é bem-vindo, quando precisa de revisão extra e quando simplesmente não é aceitável entregar sem que uma pessoa tenha testado e entendido o resultado de ponta a ponta. Quem não tem esse tipo de critério definido corre o risco de descobrir o limite da mesma forma que os contribuidores rejeitados pelo COSMIC descobriram: com o trabalho simplesmente fechado sem revisão.</p>
  `,
};
