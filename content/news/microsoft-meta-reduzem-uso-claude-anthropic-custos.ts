import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "microsoft-meta-reduzem-uso-claude-anthropic-custos",
  title: "Microsoft e Meta reduzem uso interno do Claude da Anthropic por causa do custo",
  summary:
    "Microsoft cortou cerca de um terço do orçamento previsto com a Anthropic e a Meta reduziu à metade os funcionários com acesso ao Claude Code, segundo reportagem.",
  author: "Bruno Danello",
  sourceName: "PYMNTS",
  sourceUrl:
    "https://www.pymnts.com/news/artificial-intelligence/2026/microsoft-meta-steer-staff-from-anthropic-claude-in-house-ai/",
  date: "2026-10-05",
  publishedAt: "2026-10-06T02:35:00-03:00",
  topic: "negocios",
  imageQuery: "Satya Nadella portrait",
  content: `
    <p>Microsoft e Meta reduziram o uso interno do Claude, modelo de IA da Anthropic, como parte de um esforço para cortar custos e empurrar funcionários para ferramentas próprias, segundo reportagem do site <a href="https://www.pymnts.com/news/artificial-intelligence/2026/microsoft-meta-steer-staff-from-anthropic-claude-in-house-ai/" target="_blank" rel="noopener noreferrer nofollow">PYMNTS</a> publicada em 5 de outubro, que cita informações originalmente levantadas pelo site The Information. A mudança marca um recuo relevante numa parceria que, até pouco tempo atrás, parecia só crescer.</p>

    <p>Segundo o levantamento, a Microsoft havia projetado gastar pelo menos US$ 1 bilhão em tecnologia da Anthropic neste ano, mas essa previsão já foi cortada em mais de um terço. A liderança da empresa passou a pedir que equipes de engenharia reduzissem o uso do Claude Code e migrassem para o GitHub Copilot CLI, ferramenta da própria Microsoft. A Meta seguiu caminho parecido: o número de funcionários com acesso ao Claude Code caiu de 60 mil para 30 mil, com a empresa incentivando o uso de alternativas internas batizadas de Muse Code e MetaCode.</p>

    <figure>
      <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/MS-Exec-Nadella-Satya-2017-08-31-22_%28cropped%29.jpg" alt="Satya Nadella, CEO da Microsoft" />
      <figcaption>Foto: Brian Smale e Microsoft / Wikimedia Commons (CC BY-SA 4.0)</figcaption>
    </figure>

    <h2>Por que o custo virou o centro da conversa</h2>
    <p>O motivo apontado pela reportagem é simples: preço por uso. Ferramentas de IA de ponta, como o Claude Code, cobram por quantidade de tokens processados, e o custo por engenheiro varia de US$ 500 a US$ 2 mil por mês dependendo da intensidade de uso. Multiplicado por milhares de funcionários, esse valor rapidamente se transforma numa linha de orçamento difícil de justificar quando a empresa também mantém equipes próprias desenvolvendo modelos concorrentes.</p>
    <p>O movimento acontece num momento em que o mercado de IA corporativa está em plena guerra de preços: a própria Anthropic e a OpenAI vêm <a href="/noticias/anthropic-openai-guerra-precos-opus-5-5-gpt-6-sol-luna">brigando por espaço com modelos cada vez mais baratos</a>, como o Claude Opus 5.5 e o GPT-6 Sol. Segundo o Ramp AI Index, pesquisa de agosto de 2026, o 1% das empresas americanas que mais gastam com IA já pagam uma mediana de US$ 7.400 por funcionário ao ano, enquanto a empresa mediana paga pouco mais de US$ 12, uma distância que mostra como o custo de IA de ponta ainda é alto demais para ser padrão em toda a força de trabalho, mesmo em big techs.</p>
    <p>Apesar do corte de orçamento, a Microsoft não abandonou a Anthropic. O Claude continua disponível pelo Copilot CLI e dentro da parceria mais ampla via Microsoft Foundry, que inclui um investimento de até US$ 5 bilhões na própria Anthropic. Um porta-voz da Microsoft confirmou ao The Information que a empresa está "direcionando funcionários para o GitHub Copilot", mas ressaltou que "engenheiros ainda podem optar por outros modelos" quando necessário. A Meta não comentou o assunto. A Anthropic também não deu resposta oficial até a publicação da reportagem.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para quem usa IA no trabalho ou vende serviços de IA no Brasil, esse recuo de duas das maiores clientes corporativas da Anthropic é um sinal prático: mesmo empresas com caixa bilionário estão questionando se vale pagar o preço do modelo mais avançado para todo mundo, todo o tempo, ou se faz mais sentido reservar a ferramenta cara para tarefas que realmente exigem esse nível de qualidade. É o mesmo cálculo que pequenos negócios e freelancers precisam fazer na ponta, e que já discutimos em detalhe no texto sobre <a href="/artigos/como-usar-ia-para-reduzir-custos-operacionais-pequenos-negocios">como reduzir custos operacionais usando IA sem perder qualidade</a>.</p>
    <p>Também mostra que "qual IA usar" não é uma decisão que se toma uma vez e esquece. Grandes empresas estão trocando de ferramenta conforme o preço muda, algo que vale replicar em escala menor: revisar periodicamente se o plano pago de um assistente de IA ainda compensa, ou se um modelo mais barato (ou gratuito) resolve a mesma tarefa sem perda sensível de qualidade. Nosso <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher ferramenta de IA com segurança</a> cobre justamente esse tipo de avaliação, incluindo custo.</p>

    <h2>Um padrão que já apareceu antes</h2>
    <p>Não é a primeira vez que uma big tech reduz dependência de um fornecedor de IA externo depois de um período de adoção acelerada. A própria Microsoft passou por um processo parecido com a OpenAI ao longo dos últimos anos, equilibrando o uso do GPT com o desenvolvimento de modelos próprios sob a marca MAI. A diferença agora é a velocidade: a Microsoft liberou o Claude Code para milhares de funcionários em dezembro de 2025 e, menos de seis meses depois, já estava cancelando a maioria das licenças: um ciclo de adoção e recuo bem mais rápido do que o histórico costuma mostrar.</p>
    <p>Esse ritmo acelerado também aparece em outras frentes da relação entre as duas empresas. A Microsoft já havia <a href="/noticias/microsoft-copilot-cobranca-uso-brasil-fora">mudado a forma de cobrança do Copilot por uso</a> em alguns mercados, e vem testando continuamente onde cada modelo (próprio ou de terceiros) rende mais por dólar investido. O recém-relançado Copilot como "super app", com a frente <a href="/noticias/microsoft-relanca-copilot-super-app-agentes-autopilot">Autopilot anunciada em setembro</a>, é parte dessa mesma estratégia de internalizar cada vez mais capacidade de IA em vez de depender de parceiros externos.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Na prática</span>
      <p>Isso não significa que o Claude ficou pior ou que a parceria Microsoft-Anthropic terminou, ela continua valendo bilhões de dólares. O recado é sobre uso em escala: quando uma ferramenta de IA vira padrão para milhares de pessoas, o custo por token processado passa a pesar tanto quanto a qualidade da resposta.</p>
    </div>

    <h2>O que observar daqui para a frente</h2>
    <p>Vale acompanhar se outras empresas grandes seguem o mesmo movimento de reduzir dependência de modelos de terceiros conforme desenvolvem alternativas internas competitivas, um padrão que, se confirmado, pressiona ainda mais a Anthropic, a OpenAI e o Google a baixar preços para reter clientes corporativos. Para a Anthropic especificamente, a notícia chega num momento sensível: a empresa está em processo de preparar uma oferta pública inicial nos próximos meses, e qualquer sinal de enfraquecimento de receita corporativa tende a ser observado de perto por investidores.</p>
    <p>Do lado de quem usa essas ferramentas no dia a dia, a lição prática é testar diferentes modelos para a mesma tarefa de tempos em tempos. O que hoje exige o modelo mais caro do mercado pode, em poucos meses, ser resolvido por uma opção mais barata, e empresas do tamanho da Microsoft e da Meta, com equipes inteiras dedicadas a medir esse tipo de coisa, já estão fazendo exatamente essa conta.</p>
  `,
};
