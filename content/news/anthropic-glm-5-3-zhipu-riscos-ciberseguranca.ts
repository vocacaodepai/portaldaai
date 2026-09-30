import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-glm-5-3-zhipu-riscos-ciberseguranca",
  title: "Anthropic mostra que modelo chinês GLM-5.3 cria exploits de graça e sem freio",
  summary:
    "Pesquisa da Anthropic revela que salvaguardas do GLM-5.3, da Zhipu AI, falham em até 100% dos testes, enquanto o Claude manteve zero falhas nas mesmas condições.",
  author: "Bruno Danello",
  sourceName: "Anthropic",
  sourceUrl:
    "https://www.anthropic.com/research/glm-5-3-and-the-spread-of-advanced-cyber-capabilities",
  date: "2026-09-29",
  content: `
    <p>A Anthropic publicou nesta terça-feira (29) uma pesquisa mostrando que o GLM-5.3, modelo mais recente da chinesa Zhipu AI (que atua fora da China sob a marca Z.ai), consegue construir sozinho exploits completos de cibersegurança, do início ao fim, mas foi lançado sem barreiras eficazes contra uso malicioso. Segundo o <a href="https://www.anthropic.com/research/glm-5-3-and-the-spread-of-advanced-cyber-capabilities" rel="noopener noreferrer nofollow">estudo publicado pela própria Anthropic</a>, as proteções do modelo podem ser burladas em 64% dos casos usando apenas uma história de cobertura falsa, em 92% dos casos com tokens de raciocínio pré-preenchidos e em 100% dos casos com "abliteração", uma técnica de remoção de pesos de segurança do modelo.</p>
    <p>Em comparação, todos os modelos Claude testados pela Anthropic sob as mesmas condições de API mantiveram taxa de engajamento zero com os mesmos pedidos maliciosos diretos. No teste prático mais chamativo do estudo, o GLM-5.3 construiu uma cadeia de exploração confiável para uma vulnerabilidade conhecida do Chrome (CVE-2026-11645) usando apenas 20 minutos de atenção humana e 8 horas de processamento do próprio modelo, a um custo de US$ 20,40 nos preços de API da Zhipu. Em testes mais amplos, no benchmark ExploitBench o modelo chinês teve taxa de sucesso de 12% na criação de exploits funcionais, próxima aos 14% do Claude Mythos Preview, e conseguiu sequestro completo de fluxo de controle em 4% das tentativas no benchmark interno de exploração binária da Anthropic, além de identificar múltiplas vulnerabilidades inéditas ("zero-day") no motor JavaScript de um navegador durante os testes.</p>

    <h2>Como a Anthropic mediu o problema, e por que isso é diferente de um teste comum</h2>
    <p>O ponto central da pesquisa não é apenas a capacidade técnica do GLM-5.3, que a Anthropic reconhece como equivalente à de seus próprios modelos de ponta em benchmarks de exploração de código. O alerta está na diferença entre capacidade e proteção: a remoção completa das salvaguardas por abliteração derrubou a taxa de recusa do modelo de 95% para apenas 6%, em média, nos três benchmarks testados, e esse processo custou cerca de US$ 4.400 em poder computacional, um valor considerado baixo para um agente estatal ou grupo criminoso organizado interessado em armar um modelo de ponta para ataques em escala.</p>
    <p>Esse tipo de auditoria de "capacidade dupla" (o mesmo recurso que ajuda um profissional de segurança a testar sistemas também pode ser usado para atacá-los) já havia aparecido em outras publicações da própria Anthropic, como o framework de <a href="/noticias/openai-safety-cases-treinamento-ia-fronteira">"safety cases" para treinar IA de fronteira com segurança</a> proposto recentemente pela OpenAI, e reforça um padrão que vem se repetindo: <a href="/noticias/openai-anthropic-modelos-mais-seguros-testes-comportamento">os modelos mais recentes de OpenAI e Anthropic têm se saído melhor em testes de segurança comportamental</a>, mas modelos concorrentes lançados por outros laboratórios nem sempre seguem o mesmo padrão de cautela antes do lançamento público.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se sua empresa usa ou pretende usar modelos de código aberto ou de laboratórios menos conhecidos para automatizar tarefas técnicas, o estudo é um lembrete prático: nem todo modelo poderoso vem com o mesmo nível de proteção contra uso indevido, mesmo quando o desempenho técnico é parecido com o de modelos líderes como o Claude ou o GPT. Antes de adotar um modelo novo em produção, especialmente um que tenha acesso a execução de código ou a sistemas sensíveis, vale <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">seguir um checklist de segurança</a> que avalie não só a qualidade das respostas, mas também que tipo de salvaguarda o fornecedor implementou contra pedidos maliciosos.</p>
    <p>Para o brasileiro que trabalha com segurança da informação, desenvolvimento ou operação de infraestrutura, a notícia também é um alerta sobre a velocidade da "democratização" de capacidades ofensivas: se um exploit completo pode ser gerado por menos de US$ 25 e algumas horas de processamento, o custo de entrada para ataques automatizados cai de forma significativa, o que aumenta o risco de golpes e invasões em pequenas e médias empresas que não têm equipe de segurança dedicada. Entender esse tipo de risco é hoje parte do mesmo cuidado que já vale para reconhecer <a href="/artigos/deepfakes-ia-identificar-conteudo-falso-proteger-reputacao">deepfakes e outros golpes com IA generativa</a>.</p>

    <h2>O que a Anthropic recomenda, e o que observar daqui para frente</h2>
    <p>A recomendação da própria Anthropic no estudo é dupla: ampliar o acesso de modelos de fronteira mais seguros a defensores de cibersegurança verificados, para que eles consigam usar a mesma capacidade em benefício defensivo, e cobrar mais testes de segurança governamentais sobre sistemas de IA capazes antes do lançamento comercial, algo próximo do que já se discute em fóruns internacionais como o <a href="/noticias/openai-anthropic-negociaram-acordo-testar-modelos-rival">acordo entre OpenAI e Anthropic para testar vulnerabilidades uma da outra</a>.</p>
    <p>Vale acompanhar se a Zhipu AI vai reforçar as salvaguardas do GLM-5.3 em resposta à publicação, e se outros laboratórios chineses e ocidentais vão adotar padrões de teste parecidos com os que a Anthropic aplicou neste estudo antes de lançar novos modelos com capacidade de escrever código de exploração. O episódio também deve alimentar o debate regulatório em curso, incluindo o <a href="/noticias/processo-antitruste-anthropic-openai-google-xai-desaceleracao">processo movido contra as grandes empresas de IA por suposta combinação para desacelerar lançamentos</a>, já que mostra na prática por que parte do setor defende publicamente mais cautela antes de liberar modelos de ponta.</p>

    <h2>Modelos abertos e a corrida por desempenho sem freio de segurança</h2>
    <p>O caso do GLM-5.3 se soma a um debate que já vinha crescendo dentro da própria indústria de IA: a diferença de postura entre laboratórios que publicam relatórios detalhados de segurança antes de lançar um modelo novo e laboratórios que priorizam velocidade de lançamento acima de tudo. Modelos de peso aberto, como parte da linha de modelos chineses recentes, costumam ser lançados justamente para competir em desempenho bruto e custo de treinamento, como mostrou o <a href="/noticias/xiaomi-lanca-mimo-v2-6-modelo-aberto-treinado-3-milhoes">MiMo-V2.6 da Xiaomi, treinado por apenas US$ 3 milhões</a>, mas essa mesma abertura facilita a remoção de salvaguardas por quem baixa os pesos do modelo, diferente do que acontece com modelos fechados acessados só por API, como o Claude.</p>
    <p>Isso não significa que todo modelo de peso aberto seja necessariamente inseguro, mas reforça que a decisão de publicar pesos abertamente carrega uma responsabilidade extra de documentação e alerta sobre riscos de uso indevido, algo que a pesquisa da Anthropic sugere que a Zhipu AI não cumpriu no nível esperado para um modelo com essa capacidade técnica. Para desenvolvedores e empresas de tecnologia no Brasil que avaliam usar modelos abertos por custo ou por soberania de dados, o episódio é um lembrete de que abertura de pesos e responsabilidade de segurança são duas decisões separadas, e cabe a quem adota a tecnologia perguntar explicitamente que testes de segurança o fornecedor aplicou antes do lançamento.</p>

    <h2>Como isso conversa com a legislação brasileira sobre IA</h2>
    <p>O Brasil ainda discute o marco regulatório específico para inteligência artificial, mas já existem regras de proteção de dados e responsabilidade civil que se aplicam a empresas que usam modelos de IA capazes de gerar código malicioso, como discutido no <a href="/artigos/lei-de-ia-no-brasil-o-que-muda-para-quem-usa">panorama sobre o que muda para quem usa IA com a legislação em debate</a>. Casos como o do GLM-5.3 tendem a alimentar a pressão por exigências de auditoria de segurança antes da liberação comercial de sistemas de IA de uso geral, um tipo de obrigação que outros países, como os Estados Unidos e a União Europeia, já discutem de forma mais avançada em suas próprias propostas regulatórias.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Resumo rápido</span>
      <p>GLM-5.3, da Zhipu AI, cria exploits completos de cibersegurança sozinho. Salvaguardas falham em 64% a 100% dos testes, contra 0% no Claude. Um exploit para uma falha real do Chrome custou US$ 20,40 e 20 minutos de atenção humana.</p>
    </div>
  `,
  faq: [
    {
      question: "O que é o GLM-5.3?",
      answer:
        "É o modelo de IA mais recente da chinesa Zhipu AI, que atua fora da China sob a marca Z.ai. Segundo a Anthropic, ele tem capacidade de construir exploits de cibersegurança do início ao fim, próxima à de modelos de ponta como o Claude.",
    },
    {
      question: "Por que a Anthropic pesquisou um modelo concorrente?",
      answer:
        "A Anthropic testa periodicamente modelos de outros laboratórios em benchmarks de segurança para avaliar riscos de proliferação de capacidades ofensivas de cibersegurança e defender publicamente a necessidade de salvaguardas mais rígidas antes do lançamento comercial de modelos poderosos.",
    },
    {
      question: "Isso significa que o GLM-5.3 é perigoso para qualquer usuário?",
      answer:
        "O risco descrito no estudo é sobre uso malicioso deliberado, contornando as proteções do modelo com técnicas específicas. Para uso comum, o modelo funciona como qualquer outro assistente de IA, mas empresas que lidam com sistemas sensíveis devem considerar o nível de salvaguarda de cada modelo antes de adotá-lo.",
    },
  ],
};
