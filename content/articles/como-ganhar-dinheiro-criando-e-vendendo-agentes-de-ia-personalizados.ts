import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "como-ganhar-dinheiro-criando-e-vendendo-agentes-de-ia-personalizados",
  title: "Agentes de IA personalizados: como criar, vender e cobrar",
  seoTitle: "Agentes de IA personalizados: como criar e vender",
  excerpt:
    "Agentes de IA personalizados: quais vendem bem, ferramentas sem código (Make, Zapier, n8n) com preço verificado, prompt pronto, modelos de cobrança e exemplo.",
  metaDescription:
    "Como ganhar dinheiro criando e vendendo agentes de IA personalizados: tipos que vendem, Make, Zapier e n8n com preço verificado, prompt e quanto cobrar.",
  category: "monetizacao",
  date: "2026-09-25",
  updated: "2026-09-27",
  readTime: 8,
  imageQuery: "custom software developer building workflow",
  seed: 82,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Agentes de IA personalizados que vendem resolvem um problema estreito e recorrente de um negócio específico: triagem de e-mail, qualificação de lead, monitor de estoque. Promessa de automatizar tudo não fecha contrato.",
    "Dá para montar sem programar com Make (plano Core a US$ 12/mês), Zapier (Professional a partir de US$ 19,99/mês no anual) ou n8n (versão comunitária gratuita para instalar no próprio servidor, com código-fonte aberto sob licença fair-code e restrições de uso comercial), preços verificados em 27/09/2026.",
    "O preço se justifica pelo que o cliente economiza, não pelas suas horas; projeto fechado mais mensalidade de manutenção é o modelo que protege os dois lados.",
  ],
  content: `
    <p>Criar e vender agentes de IA personalizados virou um serviço com demanda real em pequenas empresas: um agente que faz triagem de e-mails de suporte, outro que qualifica leads no WhatsApp, outro que confere o estoque e avisa o que repor. Este guia mostra o que vale construir, com quais ferramentas, quanto cobrar e como fechar os primeiros clientes sem saber programar.</p>

    <p>A palavra "agente" anda sendo usada para qualquer coisa com IA dentro. Aqui, agente é um sistema que recebe um objetivo, decide os passos, usa ferramentas (e-mail, planilha, CRM) e só chama uma pessoa quando precisa. A diferença para um chatbot ou uma automação fixa está explicada em <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">agente de IA, chatbot ou automação: qual a diferença</a>, e vale ler antes de vender qualquer coisa com esse nome.</p>

    <h2>O que é um agente de IA personalizado e por que empresas pagam por ele?</h2>
    <p>Um agente personalizado é montado para um processo específico de um negócio específico. Ele conhece o catálogo daquela loja, as regras daquele escritório, o tom daquela marca. A OpenAI descreve agentes como sistemas que planejam e completam tarefas usando ferramentas e mantêm contexto entre etapas, na <a href="https://developers.openai.com/api/docs/guides/agents" rel="noopener noreferrer">documentação oficial de agentes</a>. A Anthropic, no guia <a href="https://www.anthropic.com/research/building-effective-agents" rel="noopener noreferrer">Building effective agents</a>, recomenda começar com a solução mais simples possível e só adicionar autonomia quando um fluxo fixo não resolve.</p>
    <p>Empresas pagam porque o dono não tem tempo de aprender Make, n8n ou a API de um modelo, e porque a tarefa se repete todo dia. O valor do serviço está na tradução: você entende o processo, escolhe a ferramenta certa e entrega algo que funciona na segunda-feira de manhã. Quem já entende como <a href="/artigos/agentes-de-ia-o-futuro-do-trabalho-autonomo-explicado">agentes de IA funcionam por dentro</a> sai na frente na hora de explicar isso para o cliente.</p>

    <h2>Que agentes vendem bem (e quais evitar)</h2>
    <p>Os que vendem resolvem um problema estreito, recorrente e mensurável. Os que dão prejuízo prometem "automatizar a empresa inteira".</p>
    <table>
      <thead>
        <tr><th>Agente</th><th>O que faz</th><th>Para quem</th><th>Complexidade</th></tr>
      </thead>
      <tbody>
        <tr><td>Triagem de e-mail</td><td>Lê a caixa de suporte, classifica, responde o simples e encaminha o resto</td><td>Loja virtual, escritório contábil</td><td>Baixa</td></tr>
        <tr><td>Qualificação de lead</td><td>Conversa no WhatsApp ou no site, faz 4 perguntas e agenda com o vendedor</td><td>Imobiliária, clínica, escola de idiomas</td><td>Média</td></tr>
        <tr><td>Monitor de estoque</td><td>Lê a planilha de vendas, projeta a falta e avisa o que repor</td><td>Comércio local com até 500 itens</td><td>Baixa</td></tr>
        <tr><td>Pesquisa de concorrência</td><td>Visita sites definidos toda semana e resume mudanças de preço e oferta</td><td>Restaurante, e-commerce de nicho</td><td>Média</td></tr>
        <tr><td>Cobrança amigável</td><td>Identifica boletos vencidos e envia lembretes no tom da marca</td><td>Academias, cursos, assinaturas</td><td>Média</td></tr>
      </tbody>
    </table>
    <p>Os dois primeiros têm guias próprios aqui no portal: <a href="/artigos/ia-para-email-organizar-caixa-de-entrada-responder-mais-rapido">IA para e-mail</a> e <a href="/artigos/como-criar-chatbot-de-atendimento-para-seu-site-sem-programar">chatbot de atendimento sem programar</a>. O de estoque segue a lógica de <a href="/artigos/como-usar-ia-para-gerenciar-estoque-pequeno-comercio">IA para gerenciar estoque no pequeno comércio</a>. Evite, pelo menos no início, agentes que tomam decisão financeira sozinhos (aprovar reembolso, pagar fornecedor) ou que lidam com dado de saúde: o risco jurídico é seu e do cliente.</p>

    <h2>Ferramentas para montar sem programar</h2>
    <p>Três plataformas cobrem a maioria dos projetos. Preços conferidos nas páginas oficiais em 27/09/2026 e sujeitos a mudança.</p>
    <h3>Make</h3>
    <p>Plano gratuito com 1.000 créditos por mês e plano Core a US$ 12 por mês com 10.000 créditos, segundo a <a href="https://www.make.com/en/pricing" rel="noopener noreferrer">página de preços do Make</a>. Editor visual, bom para quem nunca automatizou nada. É por onde a maioria começa.</p>
    <h3>Zapier</h3>
    <p>Plano gratuito com 100 tarefas por mês; o Professional começa em US$ 19,99 por mês no plano anual, conforme a <a href="https://zapier.com/pricing" rel="noopener noreferrer">página de preços do Zapier</a>. Tem mais integrações prontas e recursos de IA nativos. O guia <a href="/artigos/notion-zapier-e-ia-automatize-seu-negocio-sem-programar">Notion, Zapier e IA sem programar</a> mostra os primeiros fluxos.</p>
    <h3>n8n</h3>
    <p>Tem planos na nuvem e uma versão comunitária gratuita para instalar no próprio servidor (código-fonte aberto sob licença fair-code, com restrições de uso comercial); para valores, consulte a página oficial. Mais técnico, mas costuma ter o melhor custo por execução para agentes que rodam milhares de vezes. Some a isso a assinatura de um modelo (ChatGPT, Claude ou Gemini via API) e uma conta de WhatsApp Business quando o agente conversa com cliente.</p>
    <p>Regra prática: domine uma plataforma. Quem tenta as três entrega devagar em todas.</p>

    <h2>Passo a passo: do primeiro agente ao primeiro cliente</h2>
    <ol>
      <li><strong>Resolva um problema seu.</strong> Monte um agente para algo que você faz toda semana. Vira demonstração e prova de que funciona.</li>
      <li><strong>Entreviste 5 donos de negócio.</strong> Pergunte: "qual tarefa você faz todo dia, sempre do mesmo jeito, e que te consome tempo?". A resposta é o produto. O método está em <a href="/artigos/como-validar-ideia-de-negocio-com-ia-antes-de-investir">validar ideia de negócio com IA antes de investir</a>.</li>
      <li><strong>Escreva o prompt do agente com o cliente na sala.</strong> Regras, exceções, tom, o que ele nunca deve fazer. Use o modelo abaixo.</li>
      <li><strong>Rode em paralelo por 2 semanas.</strong> O agente sugere, a pessoa aprova. Só depois libere ações automáticas.</li>
      <li><strong>Entregue documentação de uma página</strong> e um vídeo de 5 minutos mostrando como pausar o agente.</li>
      <li><strong>Cobre a manutenção.</strong> Integrações quebram, modelos mudam. Isso é receita recorrente para você e proteção para o cliente.</li>
    </ol>
    <pre><code>Você é o assistente de triagem de e-mails da [empresa], que vende [produto] para [público].
Para cada e-mail recebido, classifique em: PEDIDO, DÚVIDA, RECLAMAÇÃO, FINANCEIRO ou OUTRO.
Responda sozinho apenas DÚVIDA, e só quando a resposta estiver na lista de perguntas frequentes abaixo: [cole a FAQ].
Nunca prometa prazo, desconto ou reembolso. Nesses casos, encaminhe para [e-mail humano] com um resumo de 2 linhas.
Tom: direto, educado, sem emoji. Assine como "Equipe [empresa]".</code></pre>

    <h2>Quanto cobrar: três modelos de preço</h2>
    <p>O preço tem de refletir o que o cliente economiza, não as horas que você gastou. Se o agente de triagem poupa 10 horas por semana de um funcionário que custa R$ 25 por hora à empresa, são cerca de R$ 1.000 por mês em tempo liberado; um projeto de R$ 3.000 se paga em três meses, e o dono entende a conta na hora.</p>
    <ul>
      <li><strong>Projeto fechado:</strong> um valor único para construir, testar e entregar o agente configurado. Calcule a partir da economia mensal do cliente (a conta acima) e do seu tempo de construção.</li>
      <li><strong>Mensalidade de manutenção:</strong> 10% a 20% do valor do projeto por mês, cobrindo monitoramento, ajustes e as assinaturas das ferramentas quando você as centraliza.</li>
      <li><strong>Pacote por nicho:</strong> o mesmo agente adaptado para várias clínicas ou lojas, com preço menor e volume maior, como descrito em <a href="/artigos/como-vender-pacotes-de-automacao-de-ia-para-negocios-locais">pacotes de automação para negócios locais</a>.</li>
    </ul>
    <p>Essas faixas são raciocínio de análise, não garantia. O guia de <a href="/artigos/como-precificar-servicos-usando-ia-no-trabalho">precificar serviços usando IA</a> ajuda a montar a proposta com a IA calculando cenários. Formalize desde o primeiro contrato: MEI resolve o começo para a maioria, e um contador diz quando o faturamento pede outro enquadramento.</p>

    <h2>Exemplo brasileiro: agente de qualificação para uma imobiliária</h2>
    <p>Cenário de análise. Uma imobiliária de Goiânia recebe 300 contatos por mês pelo site e responde metade com um dia de atraso. Um prestador monta no Make (plano Core, US$ 12 por mês) um agente que responde no WhatsApp em segundos, pergunta bairro, faixa de preço, prazo e se já tem financiamento aprovado, e agenda a visita direto na agenda do corretor. O modelo de IA entra via API; nesse volume, o custo estimado fica abaixo de R$ 100 por mês, mas o valor exato depende do modelo e do tamanho das conversas, então confira a tabela de preços do provedor.</p>
    <p>Proposta: R$ 4.000 pelo projeto, entregue em 3 semanas, mais R$ 600 mensais de manutenção incluindo as ferramentas. O cliente aceitou porque a conta foi apresentada em leads atendidos no mesmo dia, não em "tecnologia". O material de venda seguiu a estrutura de <a href="/artigos/como-escrever-pitch-de-negocio-com-ia">pitch de negócio com IA</a>: problema, solução, resultado esperado, em uma página. Depois do terceiro cliente parecido, o prestador transformou o fluxo em modelo reutilizável, o caminho descrito em <a href="/artigos/como-ganhar-dinheiro-vendendo-automacoes-prontas-com-ia">vender automações prontas com IA</a>.</p>

    <h2>Erros comuns e limites do serviço</h2>
    <div class="callout-box callout-warn">
      <span class="callout-label">Atenção</span>
      <p>Nunca prometa que o agente "não erra" ou "substitui um funcionário". Modelos erram, e as próprias empresas de IA publicam registros de incidentes; a notícia sobre a <a href="/noticias/openai-divulga-seis-incidentes-agentes-desalinhados">divulgação de seis incidentes com agentes pela OpenAI</a> é um bom exemplo para mostrar ao cliente por que a supervisão humana fica no contrato.</p>
    </div>
    <p>Erros que se repetem: vender antes de ter um caso funcionando; dar ao agente acesso de escrita em tudo (comece só com leitura); não registrar o que ele fez (um log simples em planilha resolve); esquecer a LGPD quando o agente lê dados de clientes; e não combinar por escrito quem paga as assinaturas das ferramentas. Também não use agente onde uma automação fixa basta: se o processo tem sempre os mesmos passos, um fluxo condicional é mais barato, mais previsível e mais fácil de explicar.</p>
    <div class="callout-box callout-tip">
      <span class="callout-label">Dica</span>
      <p>Grave cada entrega. Três vídeos de 2 minutos mostrando agentes rodando valem mais que qualquer certificado, tanto para vender quanto para <a href="/artigos/como-montar-portfolio-de-habilidades-de-ia-para-recrutadores">montar um portfólio de habilidades de IA</a>.</p>
    </div>

    <h2>Por onde começar esta semana</h2>
    <p>Comece pequeno: um agente, um cliente, duas semanas de teste em paralelo. Escolha uma das linhas da tabela, monte a versão para o seu próprio dia a dia no plano gratuito do Make ou do Zapier e marque as 5 conversas com donos de negócio. Quando o segundo cliente aparecer pedindo "aquilo que você fez para o fulano", o serviço existe. Anote em cada projeto quanto tempo levou, o que quebrou e o que o cliente perguntou: esse registro vira a documentação do próximo e a base da sua tabela de preços.</p>
    <p>Para ver como esse trabalho se encaixa com outros serviços de IA e o que combinar quando a agenda encher, a lista de <a href="/artigos/10-formas-de-ganhar-dinheiro-com-inteligencia-artificial">formas de ganhar dinheiro com inteligência artificial</a> é o próximo passo.</p>
  `,
  faq: [
    {
      question: "Preciso saber programar para criar e vender agentes de IA?",
      answer:
        "Não para a maioria dos projetos de pequena empresa. Make, Zapier e n8n montam fluxos com lógica condicional e chamam modelos de IA sem código, e o prompt do agente é escrito em português. Programar ajuda em integrações raras e em volume alto, mas o que mais pesa é entender o processo do cliente e escrever regras claras.",
    },
    {
      question: "Quanto custa montar um agente de IA para um cliente?",
      answer:
        "Em ferramentas, pouco: Make Core custa US$ 12 por mês, Zapier Professional começa em US$ 19,99 por mês no anual (preços verificados em 27/09/2026) e o n8n tem versão comunitária gratuita para instalar no próprio servidor (código-fonte aberto sob licença fair-code, com restrições de uso comercial), mais o uso do modelo de IA via API, que varia com o volume. O custo maior é o seu tempo de construção e teste.",
    },
    {
      question: "Projeto fechado ou mensalidade: como cobrar por um agente de IA?",
      answer:
        "Os dois. Projeto fechado cobre construção, teste e entrega; a mensalidade de manutenção (10% a 20% do projeto, em análise comum) cobre monitoramento, ajustes quando uma integração muda e as assinaturas das ferramentas. Agentes simples e estáveis podem ficar só no projeto; agentes que conversam com cliente pedem manutenção.",
    },
    {
      question: "Agente de IA ou automação simples: qual vender?",
      answer:
        "Se o processo tem sempre os mesmos passos, venda automação: mais barata, previsível e fácil de explicar. Agente faz sentido quando cada caso exige interpretar texto, decidir entre caminhos e usar ferramentas diferentes, como triagem de e-mail ou qualificação de lead. A Anthropic recomenda começar pela solução mais simples e só subir a complexidade quando ela não resolve.",
    },
    {
      question: "Como encontrar os primeiros clientes para agentes de IA?",
      answer:
        "Comece pela própria rede: donos de negócio que você já conhece têm tarefas repetitivas claras. Pergunte qual tarefa fazem todo dia do mesmo jeito, monte um caso pequeno, rode duas semanas em paralelo e grave um vídeo do resultado. Esse primeiro caso com número (horas poupadas, leads atendidos) é o que abre o segundo e o terceiro cliente.",
    },
  ],
  quiz: [
    {
      question: "O que diferencia um agente de IA de uma automação simples?",
      options: [
        "O agente é sempre mais caro",
        "O agente interpreta o contexto, decide entre caminhos e usa ferramentas em várias etapas sem supervisão constante",
        "Não há diferença real entre os dois",
        "O agente só funciona com programação avançada",
      ],
      answer: 1,
      explanation:
        "Uma automação segue um caminho fixo. Um agente avalia o contexto, decide os passos e usa ferramentas, chamando uma pessoa só quando precisa.",
    },
    {
      question: "Qual é uma boa prática ao apresentar um agente de IA para um cliente?",
      options: [
        "Prometer que ele nunca vai errar",
        "Usar o máximo de jargão técnico possível",
        "Ser transparente sobre limitações e manter supervisão humana nas decisões sensíveis",
        "Evitar mostrar exemplos ou casos",
      ],
      answer: 2,
      explanation:
        "Ser claro sobre o que o agente faz e não faz, e manter supervisão humana nas decisões sensíveis, protege a reputação de quem vende e a confiança do cliente.",
    },
  ],
};
