import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "politica-de-uso-de-ia-na-pequena-empresa-regras-simples-para-a-equipe",
  title: "Política de uso de IA na pequena empresa: regras para a equipe",
  seoTitle: "Política de uso de IA na pequena empresa: modelo",
  excerpt:
    "Política de uso de IA na pequena empresa em uma página: o que a equipe pode colar, quais ferramentas valem, quem revisa e o que fazer em caso de vazamento. Com modelo.",
  metaDescription:
    "Política de uso de IA para pequena empresa: modelo de uma página com dados proibidos, ferramentas aprovadas, revisão humana, treinamento e plano para incidentes e LGPD.",
  category: "negocios",
  articleSubcategory: "gestao-e-operacao",
  date: "2026-10-21",
  readTime: 8,
  imageQuery: "small team meeting whiteboard office rules",
  seed: 526,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Uma política de uso de IA para pequena empresa cabe em uma página e responde cinco perguntas: o que pode entrar na ferramenta, qual ferramenta vale, quem revisa, onde registrar e o que fazer se algo vazar.",
    "A regra central é separar dados: informação pública pode ir à IA, dado pessoal de cliente e segredo do negócio só com ferramenta aprovada e regra clara, e senhas e documentos nunca.",
    "A ANPD usa um sandbox de IA e proteção de dados para testar soluções, e os achados do terceiro relatório, publicado em 16/10/2026, apontam práticas que qualquer empresa pode copiar: deixar limites claros, citar fontes e proteger fluxos de dados.",
  ],
  content: `
    <p>Política de uso de IA na pequena empresa é um documento curto, de uma página, que diz à equipe quais ferramentas de IA pode usar, que tipo de informação pode colocar nelas, quem confere o resultado antes de ele chegar ao cliente e o que fazer se algo der errado. Para um negócio de poucas pessoas, o objetivo não é burocracia: é evitar que um funcionário bem-intencionado cole a planilha de clientes numa ferramenta aleatória.</p>
    <p>Quase toda equipe já usa IA, com ou sem regra. A diferença entre regra e improviso aparece no dia em que alguém pergunta "isso pode?" e ninguém sabe responder. Este guia traz um modelo pronto, o raciocínio por trás de cada item e as referências públicas que o sustentam, conferidas em 21/10/2026, para você adaptar à sua realidade e, se houver dado pessoal em jogo, validar com o contador ou o advogado da empresa.</p>

    <h2>Por que uma empresa pequena precisa de política de IA?</h2>
    <p>Porque o risco aparece no uso comum. A pessoa do atendimento cola o histórico de um cliente para pedir um resumo. O financeiro envia uma planilha com CPF para a IA "organizar". O gerente cola um contrato para pedir uma versão mais curta. Nenhum deles tem má intenção, e todos podem estar expondo dado pessoal ou segredo comercial a um serviço que a empresa nunca avaliou.</p>
    <p>O artigo sobre <a href="/artigos/colar-dados-da-empresa-no-chatgpt-o-que-o-funcionario-pode-fazer">o que o funcionário pode colar no ChatGPT</a> mostra a visão de quem trabalha; este aqui é a visão de quem dirige. A política também protege você: se houver um problema, ter regra escrita, treinamento registrado e ferramentas aprovadas mostra que a empresa tomou cuidado razoável.</p>

    <h2>O que os reguladores e as empresas já ensinam</h2>
    <p>A Autoridade Nacional de Proteção de Dados (ANPD) mantém um <a href="https://www.gov.br/anpd/pt-br/assuntos/noticias/anpd-publica-3o-relatorio-parcial-de-monitoramento-do-sandbox-regulatorio-em-ia" target="_blank" rel="noopener noreferrer">sandbox regulatório de IA e proteção de dados</a>, um ambiente supervisionado para testar soluções de IA. O terceiro relatório parcial, publicado em 16/10/2026, diz que os testes verificam controles de segurança e proteção de dados, mas não atestam a conformidade das soluções com a lei. Não é um selo de aprovação, e sim uma fonte de aprendizado.</p>
    <p>O que dá para aproveitar são os pontos que a ANPD destacou nos casos testados: deixar claros os limites da ferramenta para quem a usa, citar as fontes das respostas, proteger os fluxos de dados e revisar o compartilhamento com serviços de terceiros, e explicar decisões automatizadas que afetam pessoas. Para uma pequena empresa, isso vira regras simples: avisar o cliente quando há IA, conferir a resposta, saber para onde o dado vai e dar a um humano a última palavra.</p>

    <h2>Os 5 blocos da política de uma página</h2>
    <h3>1. Quais ferramentas valem</h3>
    <p>Liste as ferramentas aprovadas, com o plano e a conta da empresa. Uma conta pessoal gratuita não é igual a uma conta de empresa: as condições de uso dos dados mudam. A <a href="https://support.google.com/gemini/answer/13594961" target="_blank" rel="noopener noreferrer">página de privacidade dos apps do Gemini</a> avisa, por exemplo, que parte das conversas pode ser lida por revisores humanos e pede para não inserir informação confidencial que você não queira que um revisor veja. Leia a página equivalente de cada ferramenta que a equipe usa e anote a data da leitura.</p>
    <h3>2. O que pode e o que não pode entrar</h3>
    <p>É o bloco mais importante. Use três níveis: verde (pode), amarelo (só em ferramenta aprovada e sem identificar a pessoa) e vermelho (nunca).</p>
    <table>
      <thead>
        <tr><th>Nível</th><th>Tipo de informação</th><th>Exemplos</th></tr>
      </thead>
      <tbody>
        <tr><td>Verde</td><td>Pública ou genérica</td><td>Texto do seu site, ideias de post, rascunho de e-mail sem dados de cliente</td></tr>
        <tr><td>Amarelo</td><td>Interna ou com dado pessoal mínimo</td><td>Resumo de reclamação sem nome e sem CPF, números de vendas sem identificar clientes</td></tr>
        <tr><td>Vermelho</td><td>Sensível ou sigilosa</td><td>Senhas, documentos de identificação, dados bancários, prontuários, contratos fechados, planilha de clientes completa</td></tr>
      </tbody>
    </table>
    <h3>3. Quem revisa</h3>
    <p>Defina que nada gerado por IA vai ao cliente, ao contador ou a um órgão público sem leitura de uma pessoa. Para números, contratos e orientações de saúde ou jurídicas, a revisão é por quem entende do assunto. O guia sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a> explica por que o modelo erra com tanta segurança.</p>
    <h3>4. Onde registrar</h3>
    <p>Crie uma planilha de uma aba com data, pessoa, ferramenta, tarefa e se houve dado de cliente. Serve como memória para auditoria e para descobrir onde a IA está ajudando de fato.</p>
    <h3>5. O que fazer se algo vazar</h3>
    <p>Quem errou avisa na hora, sem medo de punição, porque o tempo de reação importa. A empresa pausa a ferramenta, avalia que dados saíram, troca senhas se for o caso e decide se precisa comunicar clientes ou a ANPD, com orientação do advogado. O <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">checklist de LGPD para pequeno negócio</a> detalha o mapa de dados que sustenta essa decisão.</p>

    <h2>Modelo de política para copiar e adaptar</h2>
    <p>O texto abaixo serve como ponto de partida. Troque os nomes de ferramenta e os exemplos pela sua realidade e leia com o responsável jurídico da empresa antes de distribuir.</p>
    <pre><code>POLÍTICA DE USO DE IA - [Nome da empresa] - versão 1, [data]
1. Ferramentas aprovadas: [lista], sempre com a conta da empresa. Outras ferramentas só com autorização de [responsável].
2. Nunca colocar: senhas, documentos de identificação, dados bancários, planilhas de clientes, contratos fechados, informações de saúde.
3. Só com cuidado: resumos de atendimento sem nome nem CPF; números internos sem identificar clientes.
4. Pode: textos públicos, ideias, rascunhos, tradução de material não confidencial.
5. Revisão: todo conteúdo gerado por IA é lido por uma pessoa antes de sair da empresa. Números e contratos passam por [responsável].
6. Registro: anotar na planilha [link] o uso de IA com dado de cliente.
7. Incidente: avisar [responsável] imediatamente. Ninguém será punido por avisar cedo.
8. Revisão da política: a cada 6 meses.</code></pre>
    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Peça à IA para transformar o modelo em um quadro de 10 linhas para colar na parede ou no canal da equipe. Política que ninguém lê não protege ninguém.</p></div>

    <h2>Como implantar em 30 dias</h2>
    <p>Na primeira semana, mapeie o que a equipe já usa, com uma conversa de 20 minutos e sem julgamento. Na segunda, escolha as ferramentas aprovadas e leia as regras de dados de cada uma. Na terceira, escreva a política e valide com o contador ou o advogado. Na quarta, faça um treinamento de 30 minutos com três exemplos reais e uma regra para dúvida: na dúvida, pergunte antes.</p>
    <p>Quem tem rotina de atendimento pode juntar esse treinamento ao <a href="/artigos/procedimento-operacional-padrao-com-ia-como-documentar-processos">procedimento operacional padrão</a>, e quem contrata gente nova pode incluir a política no <a href="/artigos/como-usar-ia-para-melhorar-onboarding-de-clientes">processo de onboarding</a> da equipe. O guia de <a href="/artigos/gestao-de-equipe-com-ia-escala-e-tarefas-pequeno-negocio">gestão de equipe com IA</a> mostra como distribuir tarefas sem perder o controle.</p>

    <h2>Exemplo: loja de cosméticos com 5 pessoas</h2>
    <p>Uma loja de cosméticos online tem cinco pessoas: duas no atendimento, uma no financeiro, uma no marketing e a dona (cenário hipotético). Depois de 20 minutos de conversa, a dona descobre que o atendimento cola reclamações inteiras, com nome e telefone, numa conta pessoal de chatbot, e que o financeiro pediu à IA para conferir uma planilha de boletos.</p>
    <p>Ela aprova uma ferramenta por conta de empresa, define que reclamação só entra sem nome e telefone, que a planilha de boletos nunca sai do sistema e que os textos de marketing são revisados antes de publicar. Cria a planilha de registro e agenda uma revisão em seis meses. O custo é uma tarde de trabalho, e o risco cai sem proibir a IA. Para entender o que a lei de proteção de dados exige de quem atende clientes, veja o texto sobre <a href="/artigos/adequacao-a-lgpd-como-servico-para-pequenos-negocios-com-ia">adequação à LGPD</a>.</p>

    <h2>Cuidados com agentes e automações</h2>
    <p>A política precisa prever o uso de agentes, que leem e-mails, abrem páginas e executam tarefas. Eles ampliam o risco porque podem agir sem que ninguém olhe cada passo. O guia de <a href="/artigos/prompt-injection-risco-de-ia-que-le-paginas-e-emails">prompt injection</a> explica como um texto escondido numa página ou e-mail pode induzir a IA a fazer algo indevido. Regra simples: agente só com permissão de leitura, e qualquer envio, pagamento ou exclusão exige confirmação humana.</p>
    <p>Também vale cuidar da conta de quem usa. O guia de <a href="/artigos/chave-de-acesso-passkey-como-ativar-e-proteger-sua-conta-de-golpes">chave de acesso e verificação em duas etapas</a> mostra como proteger o login das ferramentas aprovadas. E, se a empresa decide contratar ou cobrar com apoio de IA, leia o que diz a <a href="/artigos/lei-de-ia-no-brasil-o-que-muda-para-quem-usa">lei de IA no Brasil</a> sobre o projeto em tramitação e o guia de <a href="/artigos/decisao-automatizada-lgpd-como-pedir-revisao-de-uma-ia">decisão automatizada na LGPD</a>.</p>

    <h2>Erros comuns</h2>
    <ul class="checklist">
      <li><strong>Proibir tudo.</strong> A equipe usa escondido e o risco continua, sem nenhuma regra.</li>
      <li><strong>Política longa demais.</strong> Passou de duas páginas, ninguém lê.</li>
      <li><strong>Conta pessoal para trabalho.</strong> As regras de uso dos dados mudam, e a empresa perde o controle.</li>
      <li><strong>Não treinar.</strong> Um PDF no e-mail não vira hábito. Faça o encontro de 30 minutos.</li>
      <li><strong>Não revisar.</strong> Ferramentas e regras mudam. Marque a revisão no calendário.</li>
      <li><strong>Punir quem avisa.</strong> Se avisar custa caro, o problema será escondido.</li>
    </ul>
    <p>Comece hoje com o quadro de três níveis (verde, amarelo e vermelho) e mande para a equipe. Depois evolua para a política completa. Mais guias de gestão estão na categoria de <a href="/categoria/negocios">IA para negócios</a>, e o texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">privacidade e IA</a> ajuda a explicar o porquê para a equipe.</p>
  `,
  faq: [
    {
      question: "O que é uma política de uso de IA na empresa?",
      answer:
        "É um documento curto que define quais ferramentas de IA a equipe pode usar, que informações podem ser inseridas, quem revisa o resultado, como registrar o uso e o que fazer em caso de incidente. Em pequena empresa, uma página bem clara costuma bastar para começar.",
    },
    {
      question: "Pequena empresa precisa ter política de IA?",
      answer:
        "Não há exigência específica de um documento com esse nome para todas as empresas, mas a LGPD cobra cuidado com dados pessoais, e ter regras escritas ajuda a mostrar esse cuidado. Se a equipe já usa IA, ter política evita vazamentos por descuido. Confirme exigências do seu setor com o advogado.",
    },
    {
      question: "O que nunca deve ser colado em uma ferramenta de IA?",
      answer:
        "Senhas, documentos de identificação, dados bancários, informações de saúde, contratos fechados e planilhas completas de clientes. Mesmo em ferramentas de empresa, prefira remover nome, CPF e telefone antes de pedir resumo ou análise, e consulte as regras de dados do serviço.",
    },
    {
      question: "Quem deve revisar o texto gerado por IA?",
      answer:
        "Uma pessoa que entenda do assunto, antes de o texto sair da empresa. Para números, contratos, orientações de saúde ou jurídicas, a revisão deve ser de quem tem responsabilidade profissional. A IA pode errar com segurança, então a revisão humana é parte do processo, não um extra.",
    },
    {
      question: "A ANPD aprova ferramentas de IA para empresas?",
      answer:
        "Não. O sandbox regulatório de IA da ANPD testa soluções em ambiente controlado, mas a página do terceiro relatório, publicado em 16/10/2026, diz que os testes ocorrem sem atestar a conformidade com a lei. Os resultados servem de aprendizado, e a responsabilidade pelo uso correto dos dados continua com a empresa.",
    },
  ],
};
