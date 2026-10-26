import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "medicos-e-ia-o-que-a-resolucao-do-cfm-exige-do-medico-e-do-paciente",
  title: "Médicos e IA: o que a Resolução CFM 2.454/2026 exige",
  seoTitle: "Médicos e IA: o que a Resolução CFM 2.454 exige",
  excerpt:
    "Médicos e IA têm regras desde 26/08/2026: o paciente deve ser informado, o uso vai ao prontuário e o diagnóstico não pode ser dado só pela máquina. Veja o que muda.",
  metaDescription:
    "Médicos e IA: entenda a Resolução CFM 2.454/2026, em vigor desde 26/08/2026, com regras de informação ao paciente, prontuário, risco, dados e responsabilidade.",
  category: "futuro",
  articleSubcategory: "trabalho-e-profissoes",
  date: "2026-10-26",
  readTime: 7,
  imageQuery: "doctor stethoscope tablet patient consultation",
  seed: 815,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "A Resolução CFM nº 2.454/2026 vale desde 26/08/2026 e trata a IA como apoio: a decisão clínica continua sendo do médico, que responde pelos próprios atos.",
    "O paciente deve ser informado quando a IA for apoio relevante ao seu cuidado, pode recusar, e o uso entra no prontuário. Comunicar diagnóstico, prognóstico ou tratamento só por IA, sem mediação humana, é vedado.",
    "Instituições precisam avaliar o risco dos sistemas (baixo, médio, alto ou inaceitável) e quem desenvolve IA própria cria uma Comissão de IA e Telemedicina; os dados seguem a LGPD.",
  ],
  content: `
    <p>Médicos e IA agora têm uma regra nacional: a Resolução CFM nº 2.454/2026, do Conselho Federal de Medicina, publicada em 27/02/2026 e em vigor desde 26/08/2026. Ela permite usar IA como apoio, mas mantém a decisão clínica com o médico, exige informar o paciente, pede registro no prontuário e proíbe que a máquina comunique sozinha diagnóstico ou tratamento.</p>

    <p>Se você é paciente, a regra explica o que perguntar na consulta. Se é médico, dono de clínica ou trabalha com tecnologia em saúde, ela define o que checar antes de adotar uma ferramenta. Este texto resume o que foi confirmado em fontes públicas, conferidas em 26/10/2026, e deixa claro o que não é aconselhamento jurídico: o texto oficial da resolução é a referência, e cada caso pede a leitura de um profissional.</p>

    <h2>O que é a Resolução CFM 2.454/2026</h2>

    <p>Segundo a <a href="https://portal.cfm.org.br/noticias/regras-sobre-uso-da-ia-na-medicina-entram-em-vigor-no-dia-26-de-agosto/" target="_blank" rel="noopener noreferrer">notícia do próprio CFM sobre a entrada em vigor</a>, as regras passaram a valer em 26 de agosto de 2026 e alcançam também modelos, sistemas e aplicações de IA que já estavam em desenvolvimento ou em uso nas instituições médicas nessa data. Ou seja, não é só para ferramentas novas: o que já roda na clínica ou no hospital precisa se enquadrar.</p>

    <p>O núcleo é simples de explicar. A IA é ferramenta de apoio, não substituta do médico. Quem decide é o profissional, que pode acolher ou rejeitar a sugestão do sistema. O CFM também descreve que o médico pode recusar sistemas sem validação científica adequada, sem a certificação regulatória pertinente ou que contrariem princípios éticos, técnicos ou legais.</p>

    <p>A resolução se soma a outras normas, como a LGPD, e conversa com o debate maior sobre a regulação de IA no país. Para o quadro geral, o texto sobre a <a href="/artigos/lei-de-ia-no-brasil-o-que-muda-para-quem-usa">lei de IA no Brasil</a> ajuda a entender o que vem de lei e o que vem de conselho profissional.</p>

    <h2>O que muda para o paciente</h2>

    <p>A <a href="https://www.demarest.com.br/cfm-publica-resolucao-que-regulamenta-o-uso-de-inteligencia-artificial-na-medicina/" target="_blank" rel="noopener noreferrer">análise do escritório Demarest</a>, de março de 2026, resume três direitos práticos. O primeiro é ser informado quando a IA for usada como apoio relevante ao seu cuidado. O segundo é poder recusar essa tecnologia. O terceiro é que diagnósticos, prognósticos ou decisões terapêuticas não podem ser comunicados por IA sem mediação humana.</p>

    <p>Na prática, isso muda o que vale a pena perguntar no consultório. Algumas perguntas úteis:</p>

    <ul class="checklist">
      <li>Vocês usam alguma IA para analisar meu exame ou sugerir diagnóstico?</li>
      <li>Quem confere o resultado antes de ele chegar a mim?</li>
      <li>Posso pedir que minha consulta não passe por esse sistema?</li>
      <li>Meus dados ficam armazenados onde e por quanto tempo?</li>
    </ul>

    <p>Atenção ao que a norma não promete. Ela fala em recusa informada, não em um direito de exigir qualquer tratamento sem IA em qualquer caso, e a aplicação detalhada depende do texto oficial e da fiscalização. Se você teve um problema, o caminho é procurar a ouvidoria da instituição e o Conselho Regional de Medicina do seu estado, além de, se for o caso, um advogado.</p>

    <h2>O que muda para o médico</h2>

    <p>Para o profissional, as obrigações descritas nas fontes consultadas são claras. O médico deve exercer julgamento crítico sobre o que a IA recomenda, manter-se informado sobre as finalidades, limitações e riscos do sistema, e usar somente ferramentas com padrões mínimos de segurança da informação. Também deve registrar no prontuário o uso de IA como apoio à decisão e respeitar a recusa do paciente.</p>

    <p>Existe ainda um ponto de proteção. De acordo com o CFM, a responsabilização é indevida por falhas atribuíveis exclusivamente ao sistema de IA, desde que o uso tenha sido diligente, crítico e ético. Ou seja, quem usa a ferramenta com cuidado e documenta tem uma defesa melhor do que quem segue a máquina às cegas. A parte da responsabilidade é delicada: o médico continua respondendo pelos próprios atos, e o limite entre falha do sistema e falha de uso é terreno para análise caso a caso.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Este texto é informativo e não substitui a leitura do texto oficial da resolução nem a orientação jurídica. Para decisões de compra de sistemas ou mudança de rotina na clínica, confirme com o jurídico e com o Conselho Regional de Medicina.</p></div>

    <h2>Os níveis de risco e o que as instituições precisam fazer</h2>

    <p>Hospitais, clínicas e outras instituições precisam fazer uma avaliação preliminar do risco dos sistemas de IA. Segundo o CFM e a Demarest, a classificação vai de baixo a médio, alto e inaceitável. A lógica é proporcional: quanto maior o potencial de dano ao paciente, mais auditoria, monitoramento e validação.</p>

    <table>
      <thead>
        <tr><th>Nível</th><th>Ideia geral</th><th>Exemplo plausível</th></tr>
      </thead>
      <tbody>
        <tr><td>Baixo</td><td>Pouca ou nenhuma influência em diagnóstico ou tratamento</td><td>Agendamento automático, chatbot informativo</td></tr>
        <tr><td>Médio</td><td>Apoia a decisão, com supervisão humana ativa</td><td>Sistema que sugere hipóteses ao médico</td></tr>
        <tr><td>Alto</td><td>Potencial de dano físico ou psíquico relevante</td><td>Leitura de exame que influencia conduta</td></tr>
        <tr><td>Inaceitável</td><td>Categoria prevista pela norma</td><td>Sem exemplo definido nas fontes consultadas</td></tr>
      </tbody>
    </table>

    <p>Os exemplos são ilustrativos, para facilitar a leitura, e não uma lista oficial de cada categoria. Instituições que desenvolvem sistemas próprios devem criar uma Comissão de IA e Telemedicina, segundo o CFM. Quem só compra e usa software de terceiros deve exigir do fornecedor documentação de segurança, validação e regulatório. Para a parte de agenda e confirmação, o texto sobre <a href="/artigos/ia-para-clinica-e-consultorio-agenda-confirmacao-e-lgpd">IA para clínica e consultório</a> mostra o que costuma ser de baixo risco.</p>

    <h2>Dados do paciente: LGPD e cuidado com ferramentas gerais</h2>

    <p>A resolução exige que os dados usados no desenvolvimento e na operação de sistemas de IA sigam a LGPD e as normas de segurança da informação em saúde. Isso pesa em um erro comum: o profissional, com pressa, cola o prontuário ou o exame de um paciente em um chatbot genérico para pedir uma opinião. O CFM fala em vedar o uso de ferramentas sem padrões mínimos de segurança, e dado de saúde é dado sensível.</p>

    <p>Para um panorama do risco, vale ler o guia de <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade: o que você entrega sem perceber</a> e o texto sobre <a href="/artigos/colar-dados-da-empresa-no-chatgpt-o-que-o-funcionario-pode-fazer">colar dados da empresa no ChatGPT</a>, que vale para qualquer setor. Quem atende em clínica pequena pode aproveitar o <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">checklist de LGPD para pequeno negócio que usa IA</a> e, quando uma decisão automatizada afeta uma pessoa, o guia de <a href="/artigos/decisao-automatizada-lgpd-como-pedir-revisao-de-uma-ia">como pedir revisão de uma decisão automatizada</a>.</p>

    <h2>Exemplo: uma clínica pequena que quer usar IA na rotina</h2>

    <p>Imagine uma clínica com três médicos e uma recepcionista. A dona quer usar IA em três frentes: confirmar consultas por mensagem, resumir o histórico antes do atendimento e sugerir hipóteses de exame. Pela lógica da norma, a primeira frente tende a ser de baixo risco. As outras duas pedem mais cuidado: o resumo só deve ser usado se o médico conferir o original, e a sugestão de hipótese precisa de validação e registro no prontuário.</p>

    <p>Um roteiro prático, sem prometer que cobre todos os pontos da norma, seria este: listar cada ferramenta, anotar o que ela faz com dados, classificar o risco de forma preliminar, definir quem confere os resultados, incluir uma frase de aviso ao paciente e guardar a prova do registro. Um prompt útil para organizar isso, usando dados fictícios e sem nenhum dado real:</p>

    <pre><code>Sou gestor de uma clínica com 3 médicos. Vou listar as ferramentas de IA que queremos usar. Para cada uma, monte uma tabela com: o que faz, que dados usa, quem confere o resultado, risco preliminar (baixo, médio ou alto) e o que precisamos perguntar ao fornecedor. Não invente exigências legais: deixe como "verificar no texto oficial" o que depender da norma.</code></pre>

    <p>O resultado é rascunho de trabalho, não parecer jurídico. A conferência com o texto da resolução e com um advogado de saúde segue necessária.</p>

    <h2>O que isso diz sobre o futuro da profissão</h2>

    <p>A resolução reforça um padrão que aparece em outras áreas: a IA entra como apoio, e a responsabilidade e o contato humano continuam com o profissional. O mesmo debate acontece com <a href="/artigos/advogados-e-ia-o-que-a-oab-recomenda-e-o-que-muda-na-advocacia">advogados e a OAB</a> e com <a href="/artigos/contabilidade-e-ia-o-que-muda-para-contadores-e-como-se-preparar">contadores</a>. Em saúde, a barreira é mais alta porque o erro pode machucar alguém.</p>

    <p>Para o profissional, a conclusão prática é que saber usar IA com critério vira parte da competência. Para entender onde a IA costuma errar, o guia de <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a> e o texto sobre <a href="/artigos/vies-em-ia-o-que-e-exemplos-e-como-perceber-na-pratica">viés em IA</a> são boas leituras. E para ver a mudança de forma ampla, há o artigo sobre <a href="/artigos/empregos-que-a-ia-vai-transformar-como-se-preparar">empregos que a IA vai transformar</a>.</p>

    <h2>Erros comuns ao interpretar a norma</h2>

    <ul class="checklist">
      <li>Achar que a norma proíbe IA na medicina: ela regula e exige cuidados, não proíbe o uso como apoio.</li>
      <li>Achar que a IA pode dar o diagnóstico ao paciente: a comunicação sem mediação humana é vedada.</li>
      <li>Ignorar o prontuário: o uso de IA como apoio à decisão deve ser registrado.</li>
      <li>Colar dados de pacientes em ferramentas sem padrão de segurança.</li>
      <li>Tratar a classificação de risco como detalhe: ela define o nível de auditoria e monitoramento.</li>
      <li>Copiar um resumo de blog, inclusive este, em vez de ler o texto oficial e pedir orientação profissional.</li>
    </ul>

    <p>A norma ainda vai render interpretações, e a fiscalização cabe aos Conselhos Regionais de Medicina. Acompanhe as notícias do CFM, releia o texto quando for mudar a rotina e leia mais sobre o tema na <a href="/categoria/futuro">categoria Futuro</a>. Antes de contratar qualquer sistema para a clínica, peça por escrito o que ele faz, com quais dados e quem responde quando ele erra.</p>
  `,
  faq: [
    {
      question: "O que diz a Resolução CFM 2.454/2026?",
      answer:
        "Ela regula o uso de IA na medicina: a IA é apoio, a decisão clínica é do médico, o paciente deve ser informado e pode recusar, o uso entra no prontuário e a comunicação de diagnóstico ou tratamento não pode ser delegada à máquina sem mediação humana. Instituições avaliam o risco dos sistemas.",
    },
    {
      question: "Desde quando valem as regras de IA na medicina?",
      answer:
        "Segundo o CFM, as regras entraram em vigor em 26 de agosto de 2026. A resolução foi publicada no Diário Oficial da União em 27 de fevereiro de 2026. A norma vale também para sistemas já em uso ou em desenvolvimento nas instituições médicas nessa data.",
    },
    {
      question: "O médico pode usar o ChatGPT para atender pacientes?",
      answer:
        "A norma não proíbe IA como apoio, mas exige julgamento crítico, segurança da informação compatível com dados sensíveis e registro no prontuário. Colar dados identificáveis de pacientes em ferramenta sem padrões mínimos de segurança é o ponto de maior risco. Em caso de dúvida, consulte o jurídico e o CRM.",
    },
    {
      question: "O paciente pode recusar que a IA seja usada na consulta?",
      answer:
        "De acordo com as fontes consultadas, o paciente deve ser informado sobre o uso de IA como apoio relevante e tem direito de recusa, que deve ser respeitado. A forma exata de aplicar isso em cada situação depende do texto oficial da resolução e da orientação do Conselho Regional.",
    },
    {
      question: "A IA pode dar o diagnóstico ao paciente?",
      answer:
        "Não sem mediação humana. A resolução veda delegar à IA a comunicação de diagnósticos, prognósticos ou decisões terapêuticas ao paciente. A máquina pode apoiar o raciocínio do médico, mas a conversa com o paciente e a decisão final continuam sendo do profissional.",
    },
  ],
};
