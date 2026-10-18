import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "google-brin-gemini-ajuda-construir-proximo-gemini-relatorio-seguranca",
  title: "Brin diz que o Gemini já ajuda a construir o próximo Gemini",
  summary:
    "Sergey Brin diz que o Google já entrou na esteira da IA que se aperfeiçoa, mas o relatório do DeepMind vê risco baixo e só 11,9% dos pull requests delegados.",
  author: "Bruno Danello",
  sourceName: "The Next Web",
  sourceUrl: "https://thenextweb.com/news/sergey-brin-gemini-recursive-self-improvement-safety-report",
  date: "2026-10-18",
  publishedAt: "2026-10-18T17:30:00-03:00",
  topic: "seguranca",
  imageQuery: "Sergey Brin portrait",
  content: `
    <p>O cofundador do Google, Sergey Brin, disse que a empresa está "começando a subir na esteira" do autoaperfeiçoamento recursivo, a ideia de que a inteligência artificial ajuda a construir a próxima geração de IA. A informação foi publicada no sábado (17) pelo <a href="https://thenextweb.com/news/sergey-brin-gemini-recursive-self-improvement-safety-report" target="_blank" rel="noopener noreferrer nofollow">The Next Web</a>, em texto de Ana Maria Constantin que parte de uma reportagem original da Business Insider. Ao mesmo tempo, o relatório de segurança do Gemini 4 Argon, publicado pelo Google DeepMind neste mês, afirma que o risco ligado a esse tipo de automação é "atualmente baixo".</p>

    <p>Os dois fatos parecem puxar para lados opostos, e é justamente isso que torna a notícia útil. De um lado, um dos fundadores do Google diz que o ciclo já começou. Do outro, o documento técnico da própria empresa mostra números que indicam que a automação da pesquisa de IA ainda depende muito de gente.</p>

    <h2>O que Brin disse</h2>
    <p>Segundo o Next Web, Brin falou durante uma mesa-redonda sobre o Gemini 4 Argon, cujo vídeo o Google publicou na quarta-feira (14). Participaram também Josh Woodward, Tulsee Doshi e Melvin Johnson. Brin usou a sigla RSI, de recursive self-improvement, para dizer que o Google está "começando a entrar nessa esteira". Como exemplo, citou os modelos Flash anteriores: pesquisadores e o próprio modelo passaram a trabalhar juntos na versão seguinte.</p>

    <p>Ele também afirmou que, quando o público assistisse ao vídeo, o Google já estaria "alguns modelos à frente" internamente. A fonte não detalha quais seriam esses modelos nem quando chegariam ao mercado, então vale tratar a frase como declaração de intenção e não como cronograma. O Argon, vale lembrar, foi aberto ao público nesta mesma semana, segundo o Next Web, depois de começar restrito a defensores cibernéticos, como mostramos na <a href="/noticias/google-gemini-4-argon-lancamento-preco">cobertura do lançamento do Gemini 4 Argon</a>.</p>

    <h2>O que diz o relatório de segurança do DeepMind</h2>
    <p>O contraponto está no relatório de segurança e proteção do Gemini 4 Argon, um PDF do Google DeepMind publicado em outubro de 2026. De acordo com o Next Web, o documento não encontrou "aceleração significativa de ponta a ponta" da pesquisa e do desenvolvimento de IA, seja ela conduzida por IA ou não. A avaliação do risco de pesquisa de IA feita por IA é de que ele é "atualmente baixo". Para chegar a essa conclusão, o Google ouviu 12 líderes e pesquisadores seniores.</p>

    <p>Os números do relatório, repassados pela fonte, mostram um quadro misto:</p>

    <ul>
      <li><strong>Mais de 75% do código de produção</strong> no Google DeepMind já é escrito por IA.</li>
      <li>A fatia de pull requests (propostas de alteração de código) <strong>totalmente delegados à IA</strong> subiu de 7,5% em abril para 11,9% em setembro.</li>
      <li>Cerca de <strong>88% dos pull requests</strong> ainda exigem orientação humana repetida ou código escrito por pessoas.</li>
      <li>Humanos continuam escolhendo as direções de pesquisa, desenhando experimentos e diagnosticando problemas de treinamento.</li>
      <li>O Argon resolve cerca de <strong>metade dos desafios</strong> do teste interno de pesquisa em IA do Google. Automatizar tudo exigiria uma nota quase perfeita.</li>
    </ul>

    <p>O Google também acompanha o progresso com um índice interno de 92 benchmarks. A taxa de melhoria passou de 0,091 ponto por mês antes de 1º de abril de 2026 para 0,118 ponto por mês depois dessa data. Para o relatório, a diferença não é estatisticamente significativa. O Argon fica acima da tendência, mas o Google atribui isso a mais investimento e mais poder de computação no treinamento, não a uma aceleração causada pela própria IA.</p>

    <h2>Outras vozes e o contexto político</h2>
    <p>O Next Web cita Vihan Jain, que co-lidera o trabalho de RSI e IA para ciência no Gemini, no Google DeepMind. Em uma publicação no X, ele escreveu que o modelo está embutido na própria evolução e que a mudança de pedir chips para pedir cota do Argon sinaliza um novo estágio do que chamou de "volante" do RSI.</p>

    <p>Na mesma semana, segundo a fonte, saiu um relatório da Gladstone AI com entrevistas de pesquisadores da Anthropic, da OpenAI e do Google DeepMind. A maioria dos entrevistados espera que o RSI comece em um prazo de 3 a 12 meses, possivelmente antes, caso o governo dos Estados Unidos não intervenha ou não haja desaceleração. A reportagem lembra ainda que, no mês passado, o deputado americano Ro Khanna disse planejar um projeto de lei para proibir IA que melhora a si mesma, e que a OpenAI pediu que os EUA liderem os padrões globais sobre o tema. Sobre outra frente legislativa, o Portal da AI já noticiou o <a href="/noticias/sanders-casar-projeto-lei-banir-superinteligencia-ia">projeto de Sanders e Casar para banir a superinteligência</a>.</p>

    <h2>Por que isso importa para quem trabalha com IA no Brasil</h2>
    <p>Mesmo sem efeito direto nos planos que você paga hoje, a notícia ajuda a calibrar expectativas. Se mais de 75% do código de produção no DeepMind já vem de IA, mas só 11,9% dos pull requests são totalmente delegados, o retrato real é de assistência intensa com supervisão humana, não de máquinas trabalhando sozinhas. Isso vale também para freelancers, agências e pequenas empresas que usam IA para programar ou automatizar processos: o ganho vem de tarefas bem delimitadas, com revisão de quem entende do assunto.</p>

    <p>Alguns pontos práticos, tirando lições do que o próprio relatório mostra:</p>

    <ul>
      <li><strong>Delegue por partes.</strong> Mesmo no Google, a maior parte das alterações de código precisa de ajustes humanos. Divida tarefas grandes em etapas que você consiga conferir.</li>
      <li><strong>Mantenha a decisão com você.</strong> Escolher o que construir e diagnosticar o que deu errado continua sendo trabalho humano, segundo o relatório.</li>
      <li><strong>Desconfie de promessas de "empresa autônoma".</strong> Declarações de executivos descrevem uma direção, não o estado atual das ferramentas.</li>
      <li><strong>Escolha ferramentas com critério.</strong> Antes de colocar dados de clientes em um agente, siga o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher ferramenta de IA com segurança</a>.</li>
    </ul>

    <p>Para entender o que o novo modelo oferece a quem usa o Gemini, veja <a href="/artigos/gemini-4-argon-e-modo-tarefas-quem-tem-acesso-e-o-que-esperar">Gemini 4 Argon e Modo Tarefas: quem tem acesso e o que esperar</a>. Se a dúvida é como agentes mudam o trabalho, leia <a href="/artigos/agentes-de-ia-o-futuro-do-trabalho-autonomo-explicado">agentes de IA e o futuro do trabalho autônomo</a> e <a href="/artigos/como-humanos-e-agentes-de-ia-vao-trabalhar-juntos-no-futuro">como humanos e agentes vão trabalhar juntos</a>.</p>

    <h2>O que ainda está em aberto</h2>
    <p>A primeira dúvida é a de método. O relatório diz não ter encontrado aceleração significativa, mas o próprio índice mostra a taxa de melhoria subindo de 0,091 para 0,118 ponto por mês. O texto qualifica a diferença como não significativa do ponto de vista estatístico, o que não é o mesmo que provar que nada mudou. Com apenas 12 pessoas ouvidas, também é difícil saber o quanto a avaliação reflete o conjunto da empresa.</p>

    <p>A segunda é a distância entre o discurso e o dado. Brin fala em estar "alguns modelos à frente" internamente, enquanto o relatório descreve um processo em que humanos ainda guiam quase 9 em cada 10 alterações de código. As duas coisas podem ser verdadeiras ao mesmo tempo, mas o público só tem acesso aos números do relatório, e todos eles vêm do próprio Google.</p>

    <p>A terceira é a política. Com a expectativa, citada pela Gladstone AI, de que o RSI comece em até 12 meses e com propostas de lei em discussão nos EUA, é provável que cada novo relatório de segurança passe a ser lido também como argumento regulatório. Para o leitor brasileiro, o que importa por ora é acompanhar o ritmo real de entrega dos modelos e separar o que é anúncio do que já aparece nas ferramentas que você usa no dia a dia.</p>

    <p>Vale registrar, por fim, o que a reportagem não informa: o Next Web não traz detalhes de preço, de disponibilidade no Brasil nem de prazo para os modelos internos citados por Brin. Qualquer decisão de compra ou de migração de fluxo de trabalho deve esperar por dados publicados oficialmente pelo Google.</p>
  `,
};
