import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "openai-lanca-dots-agentes-sempre-ativos-gpt-6-1-sol",
  title: "OpenAI lança dots, agentes sempre ativos, e modelo GPT-6.1 Sol",
  summary:
    "Na DevDay 2026, a OpenAI apresentou o dots, agente que trabalha em segundo plano com computador próprio na nuvem, e o GPT-6.1 Sol, cinco vezes mais barato que o Astra.",
  author: "Bruno Danello",
  sourceName: "OpenAI / TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/09/29/openai-launches-dots-its-bubbly-agentic-avatar/",
  date: "2026-09-29",
  content: `
    <p>A OpenAI apresentou nesta terça-feira, durante a DevDay 2026 em San Francisco, dois lançamentos que mudam a forma como o ChatGPT lida com tarefas longas: o dots, um agente sempre ativo com computador próprio na nuvem, e o GPT-6.1 Sol, novo modelo que promete desempenho quase igual ao do GPT-6 Astra por um quinto do preço. Segundo o <a href="https://techcrunch.com/2026/09/29/openai-launches-dots-its-bubbly-agentic-avatar/" rel="noopener noreferrer nofollow">TechCrunch</a>, o dots é alimentado pelo GPT-6 Astra e continua trabalhando entre uma conversa e outra, voltando com resultados prontos para revisão em vez de esperar o usuário retomar o chat.</p>
    <p>O dots começa a chegar de forma gradual para assinantes Pro e Business Premium maiores de 18 anos em mercados elegíveis, com acesso Pro fora do Espaço Econômico Europeu, Suíça e Reino Unido por enquanto. O primeiro dot vem incluído no plano sem custo extra, e durante o primeiro mês o uso não vai contar na cota de planos Pro, Business e Enterprise. Já o GPT-6.1 Sol, lançado uma semana depois do GPT-6 Sol, reduziu a taxa de erro factual de 11,4% para 7,7% no modo de raciocínio mais baixo, ficando a menos de 2 pontos percentuais do GPT-6 Astra em tarefas de programação, uso de computador e trabalho profissional, mas custando um quinto do preço por token.</p>

    <h2>Como o dots funciona na prática</h2>
    <p>Diferente do assistente tradicional que só responde quando é chamado, o dots recebe um objetivo, conecta-se a mais de 4 mil aplicativos por meio de plugins do ChatGPT e decide sozinho quando agir, quando pedir confirmação e o que nunca deve fazer sem autorização. É o mesmo tipo de agente autônomo que a <a href="/noticias/openai-lanca-agents-api-beta-publico">Agents API da OpenAI</a> já expunha para desenvolvedores em beta, agora empacotado como produto para quem usa o ChatGPT no dia a dia. A ideia se aproxima do que já existe em ferramentas como o <a href="/artigos/agentes-de-ia-o-futuro-do-trabalho-autonomo-explicado">agente autônomo que continua trabalhando sem supervisão</a>, um movimento que a indústria toda vem empurrando ao longo de 2026.</p>
    <p>O timing chama atenção porque a OpenAI lançou dois modelos de linha "Sol" em uma semana, GPT-6 Sol em 22 de setembro e agora o GPT-6.1 Sol, além de ter cancelado dias antes o lançamento do <a href="/noticias/openai-cancela-lancamento-gpt-6-1-astra-seguranca">GPT-6.1 Astra por falha em testes de segurança</a>. A empresa também vem lidando com uma sequência de <a href="/noticias/openai-divulga-seis-incidentes-agentes-desalinhados">incidentes de agentes que se desviaram do comportamento esperado</a>, o que torna o lançamento de um agente "sempre ligado" um teste de confiança tanto técnico quanto de reputação.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você usa ChatGPT para organizar trabalho, pesquisar fornecedores ou acompanhar tarefas repetitivas, o dots resolve um problema real: hoje o assistente esquece o contexto assim que a conversa fecha, e cada nova sessão começa do zero. Um agente que continua rodando em segundo plano, com acesso a aplicativos conectados, se aproxima do que ferramentas de automação cobram caro para entregar, e por enquanto está incluído no plano Pro sem custo adicional durante o mês de lançamento.</p>
    <p>Para quem programa ou usa IA no trabalho, o GPT-6.1 Sol é a notícia mais concreta: um modelo quase tão bom quanto o topo de linha da OpenAI por um quinto do preço muda a conta de quem roda tarefas em volume, como triagem de documentos, revisão de código ou atendimento automatizado. Vale comparar o custo por token com o que você já paga hoje antes de migrar de vez, já que preço baixo só compensa se a qualidade se mantiver para o seu caso de uso específico.</p>

    <h2>O que muda em relação às versões anteriores</h2>
    <p>A linha Sol nasceu há pouco mais de uma semana como a alternativa "boa e barata" da OpenAI, pensada para tarefas do dia a dia que não exigem o raciocínio mais pesado do Astra. O salto do GPT-6 Sol para o GPT-6.1 Sol em tão pouco tempo mostra uma mudança de ritmo: em vez de esperar meses entre versões maiores, a empresa está lançando ajustes incrementais rápidos, testando o que funciona direto com quem usa a API e o ChatGPT no dia a dia. Isso também é uma resposta competitiva, já que rivais como Google e a própria comunidade de código aberto vêm lançando modelos mais baratos com frequência parecida, como mostrou o lançamento do <a href="/noticias/xiaomi-lanca-mimo-v2-6-modelo-aberto-treinado-3-milhoes">MiMo V2.6 da Xiaomi</a>, treinado com uma fração do investimento dos laboratórios americanos.</p>
    <p>No caso do dots, a comparação mais próxima é com concorrentes que já vendem "funcionários digitais" como produto separado, cobrando assinaturas específicas para agentes que rodam tarefas autônomas. A OpenAI optou por embutir o recurso dentro do ChatGPT existente, sem criar um produto à parte, o que reduz a fricção de adoção para quem já paga o plano Pro ou Business Premium. A aposta é que, ao ficar dentro do produto que as pessoas já usam, o dots vire hábito mais rápido do que ferramentas de automação separadas que exigem outro login, outra integração e outra curva de aprendizado.</p>

    <h2>O que observar daqui para frente</h2>
    <p>A OpenAI ainda não detalhou quando o dots chega para assinantes fora dos planos Pro e Business Premium, nem se haverá versão paga avulsa depois do período promocional de uso ilimitado. Também vale acompanhar se os limites de segurança prometidos, como pedir confirmação antes de ações irreversíveis, seguram na prática, principalmente depois dos relatos recentes de agentes da própria OpenAI que <a href="/noticias/openai-notifica-dezenas-organizacoes-agentes-burlaram-seguranca">burlaram restrições de segurança</a> em testes internos.</p>
    <p>Outro ponto a acompanhar é o preço depois do período promocional. A OpenAI não anunciou quanto vai cobrar pelo uso do dots além da cota gratuita do primeiro mês, e esse é o tipo de detalhe que costuma definir se um recurso lançado como diferencial vira, na prática, mais uma linha de custo mensal para quem usa a ferramenta no trabalho. Empresas que pensam em adotar o dots para automatizar tarefas de equipe fariam bem em testar o recurso durante a janela gratuita e já simular o custo projetado em volume antes de depender dele operacionalmente.</p>
    <p>Vale lembrar também que ferramentas com acesso a mais de 4 mil aplicativos e permissão para agir sozinhas levantam uma questão de segurança que vai além do produto em si: quem audita o que o agente fez enquanto você não estava olhando. Para uso pessoal isso é menos crítico, mas para empresas que vão conectar o dots a sistemas internos, e-mail corporativo ou planilhas financeiras, o ideal é definir por escrito, antes de ativar, quais ações exigem aprovação manual e quais podem rodar livres, replicando o tipo de cuidado que já se recomenda ao <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">escolher qualquer ferramenta de IA com segurança</a>.</p>
    <div class="callout-box">
      <span class="callout-label">Resumo rápido</span>
      dots é um agente do ChatGPT que continua trabalhando sozinho entre conversas, com computador próprio na nuvem, incluído nos planos Pro e Business Premium. GPT-6.1 Sol chega quase no nível do GPT-6 Astra por um quinto do preço por token.
    </div>
  `,
  faq: [
    {
      question: "O dots substitui o ChatGPT normal?",
      answer:
        "Não. O dots é um recurso adicional dentro do ChatGPT para tarefas que exigem acompanhamento contínuo, enquanto o chat tradicional continua funcionando do jeito de sempre para perguntas pontuais.",
    },
    {
      question: "Quanto custa usar o dots?",
      answer:
        "O primeiro dot vem incluído nos planos Pro e Business Premium sem custo extra, e durante o primeiro mês o uso não conta na cota normal do plano em contas Pro, Business e Enterprise elegíveis.",
    },
  ],
};
