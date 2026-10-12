import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "meta-muse-wonder-primeiro-modelo-fronteira",
  title: "Meta lança Muse Wonder, primeiro modelo de fronteira, com foco em memória",
  summary:
    "A Meta lançou o Muse Wonder e o Muse Wonder Full, seus primeiros modelos de fronteira, com foco em memória ativa. O Wonder custa US$ 4 por milhão de tokens.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/10/12/meta-releases-its-first-frontier-model-muse-wonder/",
  date: "2026-10-12",
  publishedAt: "2026-10-12T15:23:05-03:00",
  topic: "lancamentos",
  imageQuery: "Alexandr Wang",
  content: `
    <p>A Meta lançou nesta segunda-feira o Muse Wonder e o Muse Wonder Full, os primeiros modelos de fronteira da empresa, criados pelo Meta Superintelligence Lab. De acordo com a <a href="https://techcrunch.com/2026/10/12/meta-releases-its-first-frontier-model-muse-wonder/" target="_blank" rel="noopener noreferrer nofollow">TechCrunch</a>, os dois são maiores e mais capazes do que o Muse Spark, modelo leve que a companhia havia apresentado antes, e se saem melhor em tarefas complexas, como programação.</p>

    <p>Segundo a reportagem de Russell Brandom, o Muse Wonder é acessado pela Meta Model API, enquanto o Muse Wonder Full fica restrito a assinantes do Muse Code e não é servido por API. Os dois modelos vão alimentar o agente Muse, o assistente que a Meta vem expandindo para diferentes dispositivos.</p>

    <h2>O que a Meta diz que os modelos fazem</h2>
    <p>Nos testes e no model card publicados pela própria Meta, os modelos Wonder alcançam resultados comparáveis aos do Fable 5.1 e do GPT-6 Astra. São números divulgados pela empresa, e não uma avaliação independente, o que vale lembrar sempre que um laboratório apresenta o próprio desempenho.</p>

    <p>O ponto que a Meta mais destaca é a chamada memória ativa, a capacidade de reter e sintetizar informações sobre o usuário ao longo de períodos longos. No MemoryBench, teste que mede esse tipo de habilidade, a Meta afirma que o Muse Wonder pontua acima do Fable, do Opus e do Astra. A cientista Kavya Kopparapu resumiu a aposta: "We put a tremendous amount of effort into making sure your model can remember what's important to you", ou seja, houve um esforço enorme para que o modelo lembre do que é importante para a pessoa.</p>

    <p>No blog oficial, a Meta apresenta os dois modelos como parte de uma estratégia de crescimento por etapas: "Together, they mark the next step on our scaling ladder and a major leap toward personal superintelligence", algo como "juntos, eles marcam o próximo degrau da nossa escada de escala e um grande salto rumo à superinteligência pessoal".</p>

    <h2>Contexto: a reestruturação da IA da Meta</h2>
    <p>O Muse Wonder é o primeiro modelo de fronteira da Meta desde que Alexandr Wang reestruturou a área de inteligência artificial da empresa, em agosto de 2025. Desde então, a companhia lançou o Muse Spark, pensado para ser leve e responder com baixa latência, e o agente Muse, que já ganhou versões para computador e outras plataformas. Nós acompanhamos parte dessa trajetória, como na cobertura sobre o <a href="/noticias/meta-lanca-muse-for-mac-agente-executa-acoes-computador">Muse for Mac, agente que executa ações no computador</a>, e sobre o <a href="/noticias/meta-muse-spark-matematica-seis-artigos-problemas-abertos">desempenho do Muse Spark em matemática</a>.</p>

    <p>Segundo a TechCrunch, os modelos foram treinados no data center Prometheus, no centro de Ohio, que entrou em operação em 2026. A infraestrutura própria de treinamento é uma peça central da disputa entre os grandes laboratórios, e o lançamento mostra o primeiro resultado visível desse investimento no topo da linha de modelos da Meta.</p>

    <p>A comparação com a concorrência também aparece no preço. A própria reportagem coloca o custo do Muse Wonder na mesma faixa do GPT-6 Sol e do Opus 5.5, modelos que já tratamos aqui em <a href="/noticias/openai-lanca-gpt-6-sol-luna-corta-precos-pela-metade">OpenAI lança GPT-6 Sol e Luna</a> e <a href="/noticias/anthropic-lanca-claude-opus-5-5-mais-barato-rapido">Anthropic lança o Claude Opus 5.5</a>.</p>

    <h2>Preço e acesso: Wonder e Wonder Full</h2>
    <p>As duas versões chegam por caminhos diferentes. O quadro abaixo resume o que a TechCrunch informou.</p>

    <table>
      <thead>
        <tr>
          <th>Modelo</th>
          <th>Onde acessar</th>
          <th>Preço informado</th>
          <th>Para quem</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Muse Wonder</td>
          <td>Meta Model API</td>
          <td>US$ 4,00 por milhão de tokens de entrada e US$ 20,00 por milhão de tokens de saída</td>
          <td>Desenvolvedores e empresas que integram o modelo por API</td>
        </tr>
        <tr>
          <td>Muse Wonder Full</td>
          <td>Apenas para assinantes do Muse Code, sem API</td>
          <td>Sem preço por token divulgado, pois não é servido por API</td>
          <td>Quem assina o Muse Code</td>
        </tr>
      </tbody>
    </table>

    <p>Token é a unidade em que os modelos cobram o uso: o preço de entrada vale para o texto que você envia, e o de saída para o que o modelo responde. Como a saída custa cinco vezes mais, tarefas que geram respostas longas pesam mais na conta do que as que apenas leem documentos.</p>

    <p>Vale reforçar o que a reportagem informa e o que ela não informa. Os dois modelos alimentam o agente Muse, mas a matéria não detalha a disponibilidade por país, então não há como afirmar, por enquanto, quando ou como o acesso funcionará no Brasil.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para quem usa IA no trabalho ou toca um negócio, há três leituras práticas deste lançamento.</p>

    <p>A primeira é a memória ativa. Hoje, boa parte da frustração com assistentes vem de ter de repetir o contexto a cada conversa. Se um modelo realmente retém e sintetiza o que importa para o usuário por longos períodos, o ganho aparece em tarefas contínuas, como acompanhar um projeto ou manter o tom de comunicação de uma marca. O resultado no MemoryBench é da própria Meta, então o teste de verdade será o uso do dia a dia. Quem quiser entender o conceito pode começar pelo nosso guia sobre <a href="/artigos/memoria-longa-em-ia-assistente-que-lembra-de-voce">memória longa em IA e assistentes que lembram de você</a>. Memória também levanta a questão do que fica guardado sobre você, tema que explicamos em <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade: o que você entrega sem perceber</a>.</p>

    <p>A segunda é o custo por token na hora de escolher um modelo. Com o Muse Wonder na mesma faixa de preço do GPT-6 Sol e do Opus 5.5, segundo a TechCrunch, a decisão deixa de ser só sobre quem é mais barato e passa a depender do tipo de tarefa. Antes de assinar ou integrar qualquer modelo, vale estimar quantos tokens de entrada e de saída o seu uso gera e testar com um caso real. Nosso comparativo <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini: qual IA escolher</a> ajuda a montar esse critério.</p>

    <p>A terceira é não depender de um único fornecedor. A entrada de mais um laboratório de peso com modelo na mesma faixa de desempenho e de preço aumenta as opções. Para quem constrói processos em cima de IA, manter o fluxo de trabalho flexível, de modo que seja possível trocar de modelo sem refazer tudo, protege contra mudanças de preço, de regra ou de disponibilidade. Se o seu interesse é automatizar tarefas, também vale entender <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">a diferença entre agente de IA, chatbot e automação</a>.</p>

    <h2>O que observar a seguir</h2>
    <p>Alguns pontos ainda estão em aberto e merecem acompanhamento nas próximas semanas.</p>

    <ul>
      <li>Testes independentes: os resultados citados vêm do model card da Meta, e comparações feitas por terceiros dirão se o desempenho se sustenta fora do ambiente da empresa.</li>
      <li>A memória ativa na prática: como o agente Muse usa o recurso e que controle o usuário terá sobre o que fica guardado.</li>
      <li>Acesso e preços: se a Meta ampliará o acesso ao Wonder Full além dos assinantes do Muse Code e como o preço do Wonder se comportará diante da reação dos concorrentes.</li>
      <li>Disponibilidade internacional: quando e como o Muse Wonder chegará a mercados como o brasileiro.</li>
      <li>Próximos degraus: a Meta descreve o lançamento como o próximo degrau da sua escada de escala, o que sugere que novos modelos podem vir na sequência.</li>
    </ul>

    <p>Por ora, o recado do lançamento é que a Meta entrou de vez na disputa pelos modelos mais avançados, com uma aposta clara em memória e um preço que a coloca lado a lado com os principais rivais.</p>
  `,
  faq: [
    {
      question: "O que é o Muse Wonder da Meta?",
      answer:
        "É o primeiro modelo de fronteira da Meta, criado pelo Meta Superintelligence Lab. É maior e mais capaz do que o Muse Spark, modelo leve da empresa, e tem foco em memória ativa. Chegou junto com o Muse Wonder Full.",
    },
    {
      question: "Quanto custa usar o Muse Wonder?",
      answer:
        "Pela Meta Model API, o Muse Wonder custa US$ 4,00 por milhão de tokens de entrada e US$ 20,00 por milhão de tokens de saída, valor parecido com o do GPT-6 Sol ou do Opus 5.5, segundo a TechCrunch.",
    },
    {
      question: "Qual a diferença entre Muse Wonder e Muse Wonder Full?",
      answer:
        "O Muse Wonder é acessado pela Meta Model API. O Muse Wonder Full é limitado a assinantes do Muse Code e não é servido por API. Os dois vão alimentar o agente Muse.",
    },
  ],
};
