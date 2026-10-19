import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "accenture-limita-gasto-claude-29-dolares-por-funcionario",
  title: "Accenture limita a US$ 29 por mês o gasto de cada funcionário com Claude",
  summary:
    "A Accenture passou a bancar só US$ 29 mensais de uso do Claude por pessoa. Quem gasta mais precisa cobrar de um projeto, e alguns já pagavam até US$ 1.000.",
  author: "Bruno Danello",
  sourceName: "404 Media",
  sourceUrl:
    "https://404media.co/accenture-tells-employees-they-can-now-spend-only-29-on-claude-per-month",
  date: "2026-10-19",
  publishedAt: "2026-10-19T13:27:00-03:00",
  topic: "negocios",
  imageQuery: "Accenture headquarters",
  content: `
    <p>A Accenture, uma das maiores consultorias do mundo, colocou um teto no quanto cada funcionário pode gastar com o Claude usando o orçamento central da empresa. Segundo a reportagem do <a href="https://404media.co/accenture-tells-employees-they-can-now-spend-only-29-on-claude-per-month" target="_blank" rel="noopener noreferrer nofollow">404 Media</a>, que teve acesso a um comunicado interno, a regra vale desde 1º de outubro de 2026: a empresa paga até US$ 29 por pessoa a cada mês, e o que passar disso precisa ser cobrado de um projeto ou de uma equipe. Segundo o mesmo relato, houve gente que chegava a gastar de US$ 500 a US$ 1.000 por mês.</p>

    <p>O caso chama atenção porque a Accenture tem cerca de 799 mil funcionários e vem apostando alto em IA. O contraste entre incentivar o uso e limitar a conta é o ponto central da história, e ele mostra uma fase nova do mercado: depois da corrida para liberar ferramentas de IA para todo mundo, as empresas começam a olhar a fatura.</p>

    <h2>O que diz o comunicado interno</h2>
    <p>O aviso, intitulado "Claude Enterprise Users: Important Updates to Licensing and Usage Costs", explica que todos os custos passam a ser baseados em uso. Isso significa que, em vez de uma licença com consumo livre, cada token processado pelo modelo vira despesa, e a empresa decidiu cobrir só uma parcela fixa por pessoa.</p>

    <p>Quem ultrapassa os US$ 29 precisa informar uma WBS, sigla em inglês para Work Breakdown Structure, o código de orçamento que a Accenture usa para identificar um projeto ou uma equipe. Na prática, o custo extra deixa de ser da empresa como um todo e passa a pesar no caixa de quem está entregando o trabalho ao cliente. O texto também avisa que informar uma WBS e ter uma licença não garante acesso por tempo indeterminado ao Claude: as licenças são revisadas de tempos em tempos e podem ser redistribuídas.</p>

    <h2>Planos, reações e acesso cortado</h2>
    <p>De acordo com o 404 Media, os planos Premium incluem o equivalente a US$ 250 em tokens por semana, enquanto muitos funcionários estão no plano General, mais limitado. Por causa disso, alguns querem migrar para o Premium justamente para que os projetos deles não arquem com o excesso.</p>

    <p>Os relatos de funcionários, ouvidos pela publicação, dão uma ideia da escala. Um deles disse usar mais de US$ 500 por mês. Outro, que trabalha pesado com o Claude Code em ferramentas de IA para vários clientes, afirmou gastar normalmente entre US$ 500 e US$ 1.000 mensais. Um terceiro contou que o acesso dele foi simplesmente revogado. Em nota, uma porta-voz da Accenture disse que a empresa disponibiliza IA para todas as suas pessoas e que continuará combinando a ferramenta certa com o trabalho certo, sem comentar os números.</p>

    <h2>Uma tendência maior do que a Accenture</h2>
    <p>A reportagem lembra que a Accenture não está sozinha. Segundo o 404 Media, a Microsoft definiu orçamentos de IA para as suas divisões em agosto, engenheiros da Atlassian trabalham dentro de um limite de gasto com IA, e o diretor de tecnologia da Uber afirmou que a era do gasto sem freio está acabando. Já cobrimos movimento parecido aqui: a <a href="/noticias/microsoft-meta-reduzem-uso-claude-anthropic-custos">Microsoft e a Meta reduzindo o uso do Claude por causa de custos</a> e a projeção da <a href="/noticias/gartner-custo-agentes-ia-quintuplica-2028">Gartner de que o custo dos agentes de IA pode quintuplicar até 2028</a>.</p>

    <p>A lógica por trás é simples. Ferramentas de programação com agentes, como o Claude Code, consomem muito mais tokens do que um chat comum, porque leem arquivos inteiros, tentam, erram e tentam de novo. Uma pessoa que usa isso o dia todo pode custar centenas de dólares por mês sozinha. Multiplicado por milhares de funcionários, vira uma linha relevante do orçamento, e o financeiro passa a exigir justificativa.</p>

    <h2>A ironia fica por conta do discurso</h2>
    <p>O 404 Media destacou um detalhe incômodo: uma pesquisa da própria Accenture indica que 82% de mais de 3 mil executivos ouvidos pretendem aumentar o investimento em IA. Ao mesmo tempo, a empresa investiu em setembro na Within, plataforma de agentes de IA. Ou seja, o discurso para o cliente é de expansão, enquanto o orçamento interno aperta. Isso não é necessariamente uma contradição: pode ser apenas o ajuste de quem sai do entusiasmo inicial e passa a medir retorno por projeto.</p>

    <p>Vale a cautela de sempre com o relato: boa parte dos números vem de mensagens de funcionários citadas pela reportagem, e a Accenture não confirmou valores individuais. O que está documentado é a regra dos US$ 29 e o mecanismo da cobrança por WBS, descritos no comunicado interno.</p>

    <h2>Por que isso importa para você</h2>
    <p>Mesmo que você nunca trabalhe numa multinacional, a lição vale para o seu bolso. Quem usa IA para trabalhar, seja como autônomo, dono de pequeno negócio ou profissional de agência, precisa saber quanto cada tarefa consome. Uma assinatura fixa esconde o custo, mas o uso por API ou por créditos mostra a conta real. Se você vende serviços feitos com IA, embuta o custo de ferramenta no preço, em vez de descobrir no fim do mês que a margem sumiu.</p>

    <p>Algumas práticas ajudam a controlar o gasto sem perder qualidade: usar modelos menores para tarefas simples, reservar o modelo mais caro para o que realmente exige raciocínio, evitar mandar arquivos enormes sem necessidade e revisar o prompt antes de rodar uma automação longa. O guia de <a href="/artigos/como-usar-ia-para-reduzir-custos-operacionais-pequenos-negocios">como usar IA para reduzir custos operacionais em pequenos negócios</a> mostra caminhos práticos, e o texto sobre <a href="/artigos/automacao-com-ia-economize-horas-de-trabalho">automação com IA para economizar horas de trabalho</a> ajuda a calcular se a economia de tempo paga o consumo.</p>

    <p>Também vale entender a diferença entre um chat e um agente que executa tarefas em sequência, porque é o segundo que costuma explodir a fatura. Veja <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">a diferença entre agente de IA, chatbot e automação</a> antes de contratar. E se estiver em dúvida sobre qual ferramenta compensa mais para o seu caso, o comparativo <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini: qual IA escolher</a> ajuda a decidir.</p>

    <p>Para quem é funcionário, a mensagem é outra: o uso de IA no trabalho está virando métrica. Saber mostrar o que você entregou com a ferramenta, e quanto isso custou, tende a pesar mais do que apenas usar muito. Quem consegue justificar o gasto com resultado fica em vantagem quando a empresa decidir quem mantém a licença.</p>

    <h2>O que observar a seguir</h2>
    <ul>
      <li>Se outras consultorias e grandes empresas adotarem tetos parecidos, com cobrança por projeto em vez de verba central.</li>
      <li>Como a Anthropic e concorrentes reagem, com planos corporativos de preço previsível ou franquias maiores.</li>
      <li>Se o corte reduz a produtividade relatada pelas equipes que mais usavam o Claude Code.</li>
      <li>Se a Accenture explica publicamente os critérios para manter ou retirar licenças.</li>
    </ul>

    <p>O recado do episódio é que IA no trabalho deixou de ser só uma questão de acesso e virou uma questão de orçamento. Quem entende isso antes, e aprende a medir custo e resultado de cada uso, sai na frente tanto como profissional quanto como empreendedor.</p>
  `,
};
