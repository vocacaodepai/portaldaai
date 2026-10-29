import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "deepseek-moonshot-treinaram-modelos-com-gpt-6-astra",
  title: "DeepSeek e Moonshot treinaram novos modelos com o GPT-6 Astra",
  summary:
    "Segundo a The Information, o Kimi K3.1 Pro e a versão atualizada do DeepSeek V4.1 Flash usaram muito o GPT-6 Astra da OpenAI no treino. Entenda o que muda.",
  author: "Bruno Danello",
  sourceName: "The Next Web, The Information",
  sourceUrl: "https://thenextweb.com/news/deepseek-moonshot-gpt-6-astra-distillation",
  date: "2026-10-29",
  publishedAt: "2026-10-29T06:30:00-03:00",
  topic: "negocios",
  imageQuery: "DeepSeek logo",
  content: `
    <p>Duas das empresas chinesas de IA que mais chamam atenção do mercado, a DeepSeek e a Moonshot AI, teriam usado de forma pesada o GPT-6 Astra, da OpenAI, para treinar os modelos que lançaram nas últimas semanas. A informação é do site The Information, que falou com pessoas com conhecimento direto do assunto e foi publicada na quarta-feira (28). O jornal de tecnologia The Next Web repercutiu a reportagem e deixou claro que não conseguiu confirmar o caso de forma independente, o que vale como ressalva para tudo o que se segue.</p>

    <p>Os modelos citados são o Kimi K3.1 Pro, da Moonshot, lançado na semana passada, e uma versão atualizada do DeepSeek V4.1 Flash, que chegou em 17 de outubro. Ambos tiveram bons resultados nas avaliações divulgadas pelas próprias desenvolvedoras. A Moonshot afirma, por exemplo, que o Kimi K3.1 Pro superou o GPT-6 Astra em um teste de programação. Nenhum desses números foi verificado por avaliadores independentes até agora.</p>

    <h2>O que a reportagem afirma, e o que ainda não está provado</h2>
    <p>O ponto central é que as duas chinesas teriam se apoiado fortemente nas respostas de um modelo americano de ponta para ensinar os seus. Essa prática costuma ser chamada de destilação: em vez de aprender apenas com texto bruto da internet, o modelo novo aprende com as respostas de um modelo mais capaz, copiando boa parte do comportamento por uma fração do custo de pesquisa original.</p>
    <p>É importante separar duas coisas. A reportagem é baseada em fontes anônimas e nem a DeepSeek nem a Moonshot, até onde a cobertura mostra, confirmaram o uso. Também não há, neste momento, uma decisão de tribunal ou de órgão regulador dizendo que algo ilegal aconteceu. O que existe é um relato jornalístico que, se confirmado, reforça uma suspeita antiga da indústria: a de que parte do avanço rápido dos modelos chineses vem de aprender com os modelos americanos.</p>

    <h2>Um histórico que já tinha acusações</h2>
    <p>Esta não é a primeira vez que a Moonshot aparece nesse tipo de história. Em 30 de setembro, a própria OpenAI disse que pessoas ligadas à desenvolvedora do Kimi tinham conduzido, em julho, uma campanha coordenada para extrair o raciocínio oculto por trás das respostas dos seus modelos. Nós cobrimos o caso na época, na notícia sobre a <a href="/noticias/openai-moonshot-destilacao-raciocinio-chatgpt">extração do raciocínio oculto do ChatGPT</a>. Antes disso, a Anthropic já havia descrito, no seu <a href="/noticias/anthropic-relatorio-uso-indevido-ia-setembro-2026">relatório de uso indevido de setembro</a>, outro episódio envolvendo a mesma empresa.</p>
    <p>Do lado da DeepSeek, o V4.1 Flash foi apresentado como uma alternativa mais barata aos modelos americanos, tema que já tratamos em <a href="/noticias/deepseek-v4-1-flash-mantem-v4-pro">DeepSeek V4.1 Flash mantém o V4 Pro</a>. O preço baixo é justamente o que torna o assunto sensível: se a economia vem, em parte, de aproveitar o trabalho caro de outro laboratório, o debate sobre concorrência justa ganha um novo capítulo.</p>

    <h2>Um dilema para os laboratórios americanos</h2>
    <p>A reportagem resume o problema com uma ideia simples: os mesmos modelos que os laboratórios oferecem aos usuários podem servir de material de treino para concorrentes que querem correr atrás. Quanto melhor o modelo e quanto mais aberto o acesso por API, mais fácil é coletar respostas em grande escala. Fechar a porta demais prejudica clientes legítimos; deixá-la aberta demais facilita a cópia.</p>
    <p>Isso ajuda a explicar a pressão por controles mais rígidos de acesso, monitoramento de padrões suspeitos de uso e regras formais. No Congresso dos EUA, por exemplo, já houve cobrança por informações sobre espionagem e segurança envolvendo modelos chineses, como mostramos na notícia sobre o <a href="/noticias/khanna-pesos-modelos-ia-seguranca-china">pedido do deputado Ro Khanna</a>. Um relato como este tende a alimentar esse tipo de discussão.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para quem usa IA no trabalho ou para empreender no Brasil, a notícia tem efeito prático indireto, mas real. Primeiro, ela mexe com preço. Modelos chineses baratos e capazes pressionam os preços de todo o mercado, e isso beneficia quem paga por API ou assinatura. Se a vantagem de custo depender de aprender com modelos americanos, uma restrição futura de acesso pode mudar essa equação e encarecer ferramentas que hoje parecem uma pechincha.</p>
    <p>Segundo, ela mexe com risco. Quem constrói um produto ou um fluxo de trabalho em cima de um modelo precisa saber que o fornecedor pode ser alvo de bloqueios, disputas de propriedade intelectual ou restrições governamentais. Já houve restrição ao uso da DeepSeek em órgãos públicos dos EUA, e nada impede que empresas privadas tomem decisões parecidas. Se o seu negócio depende de um único fornecedor, vale ter um plano B testado, e o nosso guia <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">como escolher uma ferramenta de IA com segurança</a> ajuda a montar essa avaliação.</p>
    <p>Terceiro, ela lembra que desempenho divulgado pela própria empresa não é o mesmo que desempenho comprovado. Tanto a Moonshot quanto a DeepSeek apresentaram resultados fortes, mas sem verificação independente. Antes de trocar a ferramenta que você usa por outra mais barata, teste com as suas tarefas reais, compare a qualidade das respostas e veja o que a empresa faz com os dados que você envia. Para uma comparação prática entre as opções mais conhecidas, veja também <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini: qual IA escolher</a>.</p>

    <h2>O que observar daqui para frente</h2>
    <p>Há alguns sinais a acompanhar nos próximos dias. O primeiro é se a OpenAI vai comentar publicamente o caso ou anunciar novas medidas de bloqueio, já que a empresa tem histórico de divulgar relatórios sobre abuso dos seus modelos. O segundo é se a DeepSeek ou a Moonshot vão responder, negando ou explicando como treinaram os modelos. O terceiro é se algum avaliador independente vai testar os dois modelos e mostrar se o desempenho se sustenta fora dos testes das próprias empresas.</p>
    <p>Também vale ficar de olho em reações políticas. Qualquer relato de que modelos americanos alimentam o avanço chinês tende a ser usado por quem defende restrições mais duras de exportação e de acesso, e por quem prefere regras mais leves para não atrapalhar a indústria. Em ambos os casos, o resultado pode afetar o preço e a disponibilidade das ferramentas que chegam ao mercado brasileiro.</p>
    <p>Por enquanto, o que se pode dizer com segurança é pouco: existe uma reportagem com fontes anônimas, duas empresas com resultados ainda não verificados e um histórico de acusações que torna o relato plausível, mas não comprovado. Tratar o caso com essa cautela evita tanto o alarmismo quanto a ingenuidade. Para o usuário comum, a recomendação é simples: acompanhe, não dependa de um fornecedor só e confira sempre o que cada ferramenta promete contra o que ela entrega.</p>
    <div class="callout-box">
      <span class="callout-label">Resumo rápido</span>
      A The Information diz que o Kimi K3.1 Pro, da Moonshot, e o DeepSeek V4.1 Flash atualizado usaram muito o GPT-6 Astra, da OpenAI, no treino. O caso não foi confirmado de forma independente, e os resultados dos modelos ainda não foram verificados por terceiros.
    </div>
  `,
};
