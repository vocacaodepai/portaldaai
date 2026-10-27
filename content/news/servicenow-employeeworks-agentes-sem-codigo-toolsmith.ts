import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "servicenow-employeeworks-agentes-sem-codigo-toolsmith",
  title: "ServiceNow deixa funcionários criarem agentes de IA sem escrever código",
  summary:
    "A empresa atualizou o EmployeeWorks com assistentes montados sem programar e lançou o ToolSmith, que cria ferramentas para agentes a partir de texto.",
  author: "Bruno Danello",
  sourceName: "CXOtoday",
  sourceUrl:
    "https://cxotoday.com/media-coverage/servicenow-debuts-3rd-gen-employee-ai-harness-to-democratize-no-code-enterprise-agentic-workflows",
  date: "2026-10-18",
  publishedAt: "2026-10-18T20:30:00-03:00",
  topic: "mercado-trabalho",
  imageQuery: "ServiceNow logo",
  content: `
    <p>A ServiceNow anunciou, em 16 de outubro, uma atualização grande do EmployeeWorks, a plataforma de experiência do funcionário que, segundo a empresa, agora roda sobre uma terceira geração de "harness" de IA centrado no colaborador. Como informou a <a href="https://cxotoday.com/media-coverage/servicenow-debuts-3rd-gen-employee-ai-harness-to-democratize-no-code-enterprise-agentic-workflows" target="_blank" rel="noopener noreferrer nofollow">CXOtoday</a>, a novidade permite que pessoas sem formação técnica montem seus próprios agentes de IA dentro de regras definidas pelo time de TI, e que desenvolvedores criem as ferramentas usadas por esses agentes com um novo ambiente chamado ToolSmith.</p>

    <p>O anúncio é voltado a grandes empresas, mas aponta para uma tendência que também interessa a quem trabalha por conta própria ou toca um negócio pequeno no Brasil: a criação de agentes está saindo do campo exclusivo de quem programa e indo para as mãos de quem conhece o processo de trabalho. Quem entende de atendimento, vendas ou recursos humanos passa a poder desenhar a automação, em vez de depender de um projeto de desenvolvimento.</p>

    <h2>O que muda no EmployeeWorks</h2>
    <p>O centro da atualização são os chamados Productivity Assistants, assistentes baseados em perfil de função, pensados para pesquisa aprofundada e para tarefas longas. Funcionários sem conhecimento de programação conseguem montar esses assistentes, mas sempre dentro de limites ("guardrails") definidos por administradores. Na prática, a empresa libera a criação, mas controla o que cada agente pode acessar e fazer.</p>
    <p>Dois assistentes já vêm prontos. O Research Assistant responde perguntas combinando fontes internas e externas, respeitando o papel e as permissões de acesso de quem pergunta. O Calendaring Assistant cuida de agendas complexas, reserva de salas e resolução de conflitos de horário. Para a área de recursos humanos, a ServiceNow descreve ainda os assistentes Talent Insights, HR Business Partner e Manager Assistants, que usam em parte integrações com a Findem e a Phenom, empresas de tecnologia para recrutamento.</p>
    <p>Outra peça são os Productivity Routines, agentes que rodam em segundo plano para tarefas previsíveis. O exemplo citado na cobertura é um agente de prospecção de vendas que pesquisa as reuniões marcadas para os próximos dias e já deixa o material de apresentação preparado. Por fim, a ServiceNow apresentou a Conversations API, que leva essas capacidades para aplicativos internos sob medida, quiosques e outras aplicações de IA da própria empresa.</p>

    <h2>ToolSmith: ferramentas criadas a partir de um pedido em texto</h2>
    <p>A segunda novidade é o ToolSmith, um ambiente de desenvolvimento para construir as ferramentas que os agentes usam para agir em outros sistemas. O desenvolvedor descreve o objetivo em linguagem natural e a plataforma cuida da construção. De acordo com a reportagem, o recurso teria sido treinado com mais de 75 mil APIs, consegue puxar registros (logs) para sugerir correções e identifica novas oportunidades de fluxo de trabalho.</p>
    <p>Esse ponto importa porque o gargalo de muitos agentes não é o modelo de linguagem em si, e sim a conexão com os sistemas reais da empresa. Um agente que só conversa é pouco útil; um que consegue abrir um chamado, consultar um cadastro ou reservar uma sala já resolve trabalho de verdade. Ao automatizar a criação dessas ligações, a ServiceNow tenta reduzir o tempo entre a ideia e o agente funcionando. É uma diferença importante em relação a um chatbot comum, assunto que o Portal da AI já explicou em <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">agente de IA, chatbot ou automação: qual a diferença</a>.</p>

    <h2>O que as empresas citadas dizem sobre os resultados</h2>
    <p>A ServiceNow acompanhou o anúncio com falas de executivos e de clientes. Jacqui Canney, diretora de pessoas e de capacitação em IA da empresa, afirmou que "a verdadeira promessa da IA é fechar a distância entre intenção e ação". Bhavin Shah, vice-presidente sênior do grupo de experiência do funcionário, disse que o resultado é "um sistema operacional para a experiência do funcionário".</p>
    <p>Entre os números de clientes, Milad Kruze, diretor de tecnologia do Exército de Salvação da Austrália, relatou que o especialista de IA da organização, chamado Goldie, resolve nove em cada dez perguntas sem precisar escalar para uma pessoa. Matt Robinett, vice-presidente da INRY, empresa do grupo Cprime, citou uma redução de 60% no tempo de envio de solicitações internas e uma taxa de conclusão de 97%. São resultados informados pelas próprias empresas na divulgação, e não uma avaliação independente, então vale tratá-los como indicativos e não como garantia.</p>

    <h2>Disponibilidade e o que ainda não foi informado</h2>
    <p>A cobertura não traz data de lançamento geral nem preços. O texto diz que os Productivity Assistants "estarão disponíveis" para o módulo de entrega de serviços de RH, começando pela área de recursos humanos, e descreve o ToolSmith e a Conversations API como novos. Quem pensa em contratar a solução precisará confirmar prazos e custos diretamente com a ServiceNow, e ainda não há informação sobre oferta específica para o Brasil.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Na prática</span>
      <p>Mesmo sem usar ServiceNow, a lição é transferível: antes de montar qualquer agente, liste a tarefa repetitiva, quais sistemas ela toca e quais limites o agente precisa ter. É exatamente a divisão que a empresa propõe, com o funcionário desenhando o fluxo e a TI definindo as barreiras.</p>
    </div>

    <h2>Por que isso importa para quem usa IA para trabalhar</h2>
    <p>A mensagem de fundo é que a construção de agentes está se tornando uma habilidade de quem conhece o negócio, não só de programadores. Isso conversa com o que o relatório da Workday apontou há poucos dias, quando mostrou que a demanda por habilidades avançadas de IA, como automação e construção de ferramentas, subiu 51% nas vagas. O Portal da AI detalhou esse levantamento em <a href="/noticias/workday-relatorio-ia-nao-reduz-vagas-mas-muda-tudo">relatório da Workday mostra que IA muda as vagas mais do que corta empregos</a>.</p>
    <p>Para o profissional autônomo e o pequeno empreendedor, o recado é prático. Ferramentas que transformam uma descrição em texto em uma automação funcional tendem a chegar também a produtos mais baratos e menores, e quem já sabe mapear seus processos sai na frente. Quem quiser começar agora pode ver como <a href="/artigos/automacao-com-ia-economize-horas-de-trabalho">economizar horas de trabalho com automação e IA</a> e entender <a href="/artigos/como-humanos-e-agentes-de-ia-vao-trabalhar-juntos-no-futuro">como humanos e agentes de IA vão trabalhar juntos no futuro</a>.</p>
    <p>Também há uma oportunidade de renda para quem domina o tema. Montar e configurar agentes para outras pessoas já é um serviço procurado, como mostra o texto sobre <a href="/artigos/como-ganhar-dinheiro-criando-e-vendendo-agentes-de-ia-personalizados">como ganhar dinheiro criando e vendendo agentes de IA personalizados</a>. Quanto mais as plataformas facilitam a criação sem código, mais o diferencial migra do ato de construir para o de entender o problema do cliente e definir limites seguros.</p>

    <h2>Os cuidados que continuam valendo</h2>
    <p>Dar a qualquer funcionário a chance de criar agentes também amplia riscos. Um agente mal configurado pode acessar dados que não deveria ou executar ações sem revisão, e por isso a ServiceNow insiste nos limites definidos por administradores. Casos recentes mostram que o problema não é teórico: o Portal da AI cobriu, por exemplo, a notícia sobre um <a href="/noticias/agente-ia-apaga-temporada-the-challenge-sverige-tv4-backup">agente de IA que apagou uma temporada inteira de um reality show</a>, um lembrete de que automação sem trava de segurança e sem backup cobra seu preço.</p>
    <p>Por isso, ao criar qualquer agente, seja numa plataforma corporativa ou numa ferramenta simples, vale começar com tarefas de baixo risco, dar o menor acesso possível, manter registro do que o agente faz e revisar os resultados antes de ampliar o escopo. A facilidade de construir sem código não elimina a responsabilidade de quem coloca o agente para trabalhar.</p>

    <h2>O que acompanhar daqui para a frente</h2>
    <p>Os próximos passos a observar são a data de disponibilidade geral dos recursos, o preço e se a ServiceNow vai estender esses assistentes além de RH para outras áreas, como vendas e atendimento. Também será interessante ver se os números informados pelos clientes se sustentam em usos mais amplos e se concorrentes que oferecem agentes corporativos respondem com recursos parecidos de criação sem código. Enquanto isso, o movimento mostra para onde o mercado caminha: agentes montados por quem faz o trabalho, com a tecnologia cuidando da parte técnica.</p>
  `,
};
