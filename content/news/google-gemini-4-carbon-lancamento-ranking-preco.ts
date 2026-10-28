import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "google-gemini-4-carbon-lancamento-ranking-preco",
  title: "Google lança o Gemini 4 Carbon, líder de ranking, duas semanas após o Argon",
  summary:
    "O Gemini 4 Carbon chega com 59 pontos no índice da Artificial Analysis, mesmo preço do Argon e acesso inicial restrito a especialistas em segurança.",
  author: "Bruno Danello",
  sourceName: "The Decoder, Google DeepMind",
  sourceUrl:
    "https://the-decoder.com/google-deepmind-releases-gemini-4-carbon-just-two-weeks-after-argon-with-gains-across-the-board/",
  date: "2026-10-28",
  publishedAt: "2026-10-28T16:24:00-03:00",
  topic: "lancamentos",
  imageQuery: "Google DeepMind logo",
  content: `
    <p>O Google DeepMind lançou nesta quarta-feira (28) o Gemini 4 Carbon, apenas duas semanas depois do Gemini 4 Argon. Segundo a reportagem do The Decoder, o novo modelo assumiu o primeiro lugar no índice de inteligência v5 da Artificial Analysis, com 59 pontos, contra 50 do Argon. É um salto grande para um intervalo tão curto entre versões, e ele vem acompanhado de uma decisão de distribuição incomum: o acesso começa fechado.</p>
    <p>O Carbon foi pensado para trabalho de engenharia longo, de vários dias, em que o modelo precisa tentar caminhos, errar, voltar atrás e continuar sem supervisão constante. Equipes internas do Google relataram que ele consegue sair de becos sem saída sozinho em execuções de múltiplos dias. Para quem usa IA no trabalho, isso importa porque o ponto fraco dos agentes até aqui tem sido perder o fio da meada em tarefas compridas.</p>

    <h2>O que os rankings mostram</h2>
    <p>Na Artificial Analysis, o Carbon (versão high) fica em primeiro no índice geral e em primeiro lugar em quatro das nove avaliações que compõem a nota. No índice de agentes de código, também chegou a 59 pontos, subindo de 50, mas ainda fica atrás do Claude Opus 5.5, que marca 62. Em tarefas de trabalho do conhecimento (AA-Briefcase), foi de 1.483 para 1.609 pontos Elo, embora ainda fique atrás de Kimi K3.1 Pro, Muse Wonder e Grok 4.7.</p>
    <p>No Vals AI, o Carbon registra 70,36% de acerto, em segundo lugar, logo atrás do Claude Sonnet 5.5 (70,85%) e à frente do Opus 5.5 (70,18%). O custo por teste foi de cerca de US$ 10,51, com pouco menos de 48 minutos de execução, mais barato e mais rápido que os dois modelos da Anthropic nesse ranking. Ele lidera ainda os testes de finanças e de pesquisa jurídica, onde cita cerca de 45% mais fontes que o Argon.</p>
    <p>Na Arena.ai, o Carbon lidera o ranking de texto com 1.528 pontos, contra 1.520 do Argon. Na Agent Arena, fica em segundo lugar, atrás do Opus 5.5 Max e à frente do GPT-6 Astra Max, com a maior pontuação de capacidade de seguir instruções do usuário (steerability) e um custo mediano por tarefa de US$ 1,80, cerca de 72% menor que o do Opus 5.5 Max. Já na parte de desenvolvimento web, ficou em quarto lugar.</p>
    <p>Nem tudo melhorou. A taxa de alucinação medida pela Artificial Analysis subiu de 4% para 11%, embora a precisão das respostas tenha crescido de 48% para 58%. A própria reportagem destaca que, mesmo com a alta, a taxa continua entre as mais baixas do ranking. Tarefas de finanças e impostos levam mais que o dobro do tempo do Argon, e a pesquisa jurídica passa de 50 minutos por tarefa. O Carbon também gera 2,3 vezes mais tokens de raciocínio que o Argon.</p>

    <h2>Segurança: o motivo do acesso restrito</h2>
    <p>O Google destaca resultados fortes em cibersegurança. No SEC-bench Pro, que mede a descoberta autônoma de vulnerabilidades, o Carbon fez 88,2%, a maior nota entre os modelos testados. No CWE-bench, que avalia a escrita de correções, chegou a 71,0%. E no ExploitGym, que mede a capacidade de transformar uma falha em exploração funcional, marcou 54,8% com dez horas de execução. A empresa afirma ainda que o ataque de injeção de prompt indireta do benchmark da Gray Swan caiu de 0,7% no Argon para 0,0%. Alguns dos números do Google são de testes internos, que não foram verificados por terceiros.</p>
    <p>Por causa dessa capacidade, o lançamento é gradual. O Google participa do programa voluntário de testes pré-lançamento do governo dos Estados Unidos, e os primeiros a receber acesso são especialistas selecionados em cibersegurança, a partir desta semana. Depois, o acesso se amplia a parceiros de confiança pelo programa Fairwind. Desenvolvedores, empresas e consumidores só entram mais tarde, depois do retorno desses grupos e do ajuste das proteções de segurança. A reportagem não informa datas para essas etapas.</p>

    <h2>Preço</h2>
    <p>O preço promocional é de US$ 2 por milhão de tokens de entrada e US$ 10 por milhão de tokens de saída, igual ao do Argon, com 95% de desconto sobre o preço da entrada em cache. Esse valor já embute um desconto promocional de 50% que vale até o fim de 2026. O preço de tabela usado pela Artificial Analysis é de US$ 4 e US$ 20 por milhão, e nessa conta o custo por tarefa fica em US$ 7,76 para o Carbon, quase igual aos US$ 7,68 do Argon e cerca de 23% abaixo dos US$ 10,04 do Opus 5.5. Como o Carbon gasta menos tokens de saída por tarefa que o modelo da Anthropic (123 mil contra 173 mil), a conta final tende a ser menor mesmo com o raciocínio mais longo.</p>
    <p>Na prática, é bom lembrar que o preço promocional acaba em janeiro e que, para volume alto, o que decide é o custo por tarefa concluída, não o preço por milhão de tokens. A diferença de uso de tokens entre modelos pode inverter o ranking de custo, como mostram os números acima.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para quem trabalha com IA no Brasil, a notícia mostra que o ritmo de lançamentos segue acelerado: duas versões de um mesmo modelo em 14 dias. Isso torna arriscado fechar contratos longos ou montar fluxos que dependam de um único fornecedor. Vale testar com os próprios casos de uso antes de trocar de modelo, porque a liderança em ranking nem sempre se traduz em ganho no seu trabalho. Nosso guia sobre <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">como escolher uma ferramenta de IA com segurança</a> ajuda a montar esse teste, e a comparação entre <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude e Gemini</a> mostra os pontos fortes de cada um.</p>
    <p>Quem já usa o Argon pode ler o que mudou naquele lançamento em <a href="/noticias/google-gemini-4-argon-lancamento-preco">Gemini 4 Argon: lançamento e preço</a> e no explicativo sobre <a href="/artigos/gemini-4-argon-e-modo-tarefas-quem-tem-acesso-e-o-que-esperar">modo tarefas e quem tem acesso</a>. Para comparar com a concorrência, veja o <a href="/noticias/anthropic-lanca-claude-opus-5-5-mais-barato-rapido">lançamento do Claude Opus 5.5</a>, que ainda lidera em código, e a notícia sobre os <a href="/noticias/openai-lanca-gpt-6-sol-luna-corta-precos-pela-metade">novos preços do GPT-6</a>.</p>
    <p>Outro ponto é a segurança. Um modelo que acha e corrige falhas melhor também pode ser usado para explorá-las, e a decisão do Google de começar por especialistas indica que as empresas de IA estão tratando essa classe de modelos com mais cautela. Para quem tem site, loja ou sistema próprio, a recomendação prática é manter as dependências atualizadas, já que a descoberta automática de falhas deve crescer.</p>

    <h2>O que observar daqui para frente</h2>
    <p>Três pontos merecem acompanhamento. O primeiro é a data de abertura para desenvolvedores e consumidores, ainda não divulgada. O segundo é se os resultados internos do Google, como os de correção de segurança, se confirmam em avaliações independentes. O terceiro é a resposta da Anthropic e da OpenAI, que mantêm a liderança em código e em tarefas de agente e devem reagir em semanas, não em meses. Até o Carbon chegar ao público, o Argon segue como o modelo mais avançado do Google disponível para uso geral.</p>
    <div class="callout-box">
      <span class="callout-label">Fonte original</span>
      <p>Informações do The Decoder, de 28 de outubro de 2026, com dados divulgados pelo Google DeepMind, Artificial Analysis, Vals AI e Arena.ai. Resultados internos do Google não foram verificados de forma independente.</p>
    </div>
  `,
};
