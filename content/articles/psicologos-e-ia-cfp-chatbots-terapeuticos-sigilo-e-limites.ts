import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "psicologos-e-ia-cfp-chatbots-terapeuticos-sigilo-e-limites",
  title: "Psicólogos e IA: o que o CFP orienta sobre chatbots e sigilo",
  seoTitle: "Psicólogos e IA: o que o CFP orienta e o que muda",
  excerpt:
    "Psicólogos e IA: veja o que o CFP orienta sobre chatbots terapêuticos, sigilo e LGPD, o que já é permitido e como o paciente pode usar a IA sem correr risco.",
  metaDescription:
    "O que o CFP diz sobre psicólogos e IA: nota de 2025, guias de dezembro, crítica ao uso no SUS, a lei de Illinois e um checklist prático para o consultório.",
  category: "futuro",
  articleSubcategory: "trabalho-e-profissoes",
  date: "2026-11-11",
  readTime: 9,
  imageQuery: "therapist office armchair notebook",
  seed: 1177,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O CFP afirma, em nota de julho de 2025, que a IA não substitui o juízo técnico e ético do psicólogo e que usar ferramenta de terceiros não tira a responsabilidade de quem atende.",
    "Tarefas administrativas, como agenda e lembretes, são o uso mais seguro; transcrição de sessão e hipótese diagnóstica exigem consentimento, LGPD e supervisão crítica do profissional.",
    "Para o paciente, chatbot pode ajudar a organizar ideias entre sessões, mas não faz escuta clínica, não maneja crise e não deve receber dados sensíveis sem cuidado.",
  ],
  content: `
    <p>Psicólogos e IA já convivem no consultório: agenda automática, lembrete de sessão, transcrição e até aplicativos que se vendem como "terapeuta de bolso". O Conselho Federal de Psicologia (CFP) respondeu com uma nota de posicionamento em 2025 e dois guias em dezembro do mesmo ano. A mensagem central é que a IA pode apoiar, mas não decide nem substitui a escuta clínica.</p>

    <p>Este texto explica o que o CFP disse, o que já está liberado na prática, onde moram os riscos de sigilo e LGPD, o que outros lugares estão proibindo e o que muda para quem atende e para quem faz terapia. No fim, há um checklist para o consultório e os erros mais comuns.</p>

    <h2>O que o CFP disse sobre inteligência artificial na psicologia?</h2>

    <p>Em julho de 2025, o conselho publicou a <a href="https://site.cfp.org.br/cfp-divulga-posicionamento-sobre-inteligencia-artificial-no-contexto-da-pratica-psicologica/" target="_blank" rel="noopener noreferrer">nota de posicionamento sobre IA na prática psicológica</a>. O texto define IA como sistemas que simulam comportamentos inteligentes, mas lembra que eles não têm compreensão, consciência nem julgamento ético. Daí vem a posição principal: a ferramenta pode organizar informações, mas não deve agir sozinha em decisões que exigem julgamento profissional.</p>

    <p>A nota também deixa claro um ponto que pesa no dia a dia: usar uma ferramenta feita por terceiros não isenta o psicólogo da responsabilidade ética e técnica. Cabe a ele avaliar segurança, vieses, limites e riscos do que usa. Qualquer coleta ou análise de dados psicológicos com apoio de IA precisa de consentimento livre, informado e transparente, dentro da LGPD.</p>

    <p>Sobre chatbots terapêuticos, o conselho registra preocupação com serviços automatizados sem mediação humana qualificada e defende regulamentação. A lógica é parecida com a de outras profissões regulamentadas: os <a href="/artigos/medicos-e-ia-o-que-a-resolucao-do-cfm-exige-do-medico-e-do-paciente">médicos com a resolução do CFM</a> e os <a href="/artigos/advogados-e-ia-o-que-a-oab-recomenda-e-o-que-muda-na-advocacia">advogados com as recomendações da OAB</a> também ficaram com a decisão final na mão do profissional.</p>

    <h2>Os guias de dezembro de 2025: um para psicólogos, outro para o público</h2>

    <p>Em 19 de dezembro de 2025, o CFP <a href="https://site.cfp.org.br/cfp-lanca-cartilhas-destacando-a-inteligencia-artificial-na-psicologia" target="_blank" rel="noopener noreferrer">lançou duas publicações</a> feitas pelo seu grupo de trabalho interno sobre IA. A primeira, "Inteligência Artificial na Psicologia: guia para uma prática ética e responsável", é voltada à categoria. Ela busca ajudar o profissional a tomar decisões informadas sobre ferramentas, proteger quem usa serviços psicológicos e manter a prática alinhada ao Código de Ética.</p>

    <p>A segunda, "Chatbots, Inteligência Artificial e sua Saúde Mental", fala com o público geral. Dividida em sete partes, trata de riscos ocultos dessas ferramentas, segurança nas redes, direitos na saúde mental digital e o futuro do cuidado. Na divulgação, o conselheiro federal Virgílio Bastos resumiu o tom: a IA é "um caminho sem volta, com profundos impactos para a nossa categoria e a sociedade".</p>

    <p>Na prática, isso significa que o tema saiu da fase de debate e entrou na de orientação. Quem atende não pode mais dizer que não sabia o que o conselho espera, e quem é paciente ganhou um material oficial para entender o que um chatbot pode e não pode fazer.</p>

    <h2>O que já é permitido e o que exige cuidado no consultório</h2>

    <p>A própria nota do CFP lista usos que já existem: automação de agendamento, lembretes e prontuários, transcrição de sessões, análise de linguagem emocional, sugestão de hipóteses diagnósticas e apoio em serviços do SUS e do SUAS. Eles não têm o mesmo peso. A tabela abaixo organiza por nível de risco, a partir dos critérios da nota.</p>

    <table>
      <thead>
        <tr><th>Uso</th><th>Nível de risco</th><th>O que fazer antes</th></tr>
      </thead>
      <tbody>
        <tr><td>Agenda, confirmação e lembrete de sessão</td><td>Baixo</td><td>Não incluir motivo da consulta na mensagem</td></tr>
        <tr><td>Texto de divulgação e materiais educativos</td><td>Baixo</td><td>Revisar e seguir as regras de publicidade da profissão</td></tr>
        <tr><td>Transcrição ou resumo de sessão</td><td>Alto</td><td>Consentimento por escrito e ferramenta com contrato de dados</td></tr>
        <tr><td>Sugestão de hipótese diagnóstica</td><td>Alto</td><td>Supervisão crítica: a IA sugere, o psicólogo decide</td></tr>
        <tr><td>Chatbot que conversa com o paciente sozinho</td><td>Muito alto</td><td>Evitar: a escuta clínica não é delegável</td></tr>
      </tbody>
    </table>

    <p>O uso administrativo segue a mesma lógica de qualquer <a href="/artigos/ia-para-clinica-e-consultorio-agenda-confirmacao-e-lgpd">clínica ou consultório que usa IA na agenda</a>: a mensagem de lembrete diz dia e hora, nunca o motivo. Já a transcrição pede mais cautela que numa <a href="/artigos/ia-para-reunioes-transcricao-resumo-ata-automatica">reunião de trabalho</a>, porque o conteúdo é dado de saúde, classificado como sensível pela LGPD.</p>

    <h2>Sigilo e LGPD: onde a IA pode vazar o que o paciente contou</h2>

    <p>O sigilo é o centro da relação terapêutica, e a nota do CFP fala em "fragilização da confidencialidade". O risco é concreto: quando um trecho de sessão é colado num chatbot comum, ele sai do consultório e vai para o servidor de uma empresa, com regras de retenção e de treinamento que o paciente nunca aceitou. Vale entender <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">o que você entrega sem perceber</a> antes de colar qualquer coisa.</p>

    <p>Para quem atende, três cuidados resolvem boa parte do problema. Primeiro, consentimento explícito e por escrito para qualquer gravação ou transcrição, com opção real de recusar. Segundo, preferir ferramentas com contrato de tratamento de dados e opção de não usar o conteúdo para treino. Terceiro, anonimizar: nome, cidade, empresa e detalhes que identificam a pessoa não entram no prompt.</p>

    <p>A LGPD ainda garante ao titular o direito de pedir revisão de decisões tomadas só por máquina, tema do guia sobre <a href="/artigos/decisao-automatizada-lgpd-como-pedir-revisao-de-uma-ia">decisão automatizada e LGPD</a>. Em saúde mental, isso reforça a regra do CFP: nenhuma conclusão clínica deve sair de um sistema sem passar pelo profissional.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Desligar o histórico ou usar o modo temporário do chatbot reduz o que fica salvo, mas não transforma uma ferramenta comum em prontuário. Dado de paciente não vai para conta pessoal de IA.</p></div>

    <h2>Chatbots terapêuticos: o que Illinois proibiu e o que o CFP criticou no SUS</h2>

    <p>Fora do Brasil, a regulação já chegou. Em agosto de 2025, o governo de Illinois, nos Estados Unidos, <a href="https://idfpr.illinois.gov/news/2025/gov-pritzker-signs-state-leg-prohibiting-ai-therapy-in-il.html" target="_blank" rel="noopener noreferrer">sancionou a lei Wellness and Oversight for Psychological Resources Act</a>. Ela proíbe usar IA para prestar serviços de saúde mental e tomar decisões terapêuticas, mas permite o uso em tarefas administrativas e de apoio a profissionais licenciados. É praticamente a mesma linha que o CFP traçou na nota.</p>

    <p>Aqui, o debate ganhou um caso concreto em setembro de 2025, quando o CFP <a href="https://site.cfp.org.br/cfp-alerta-para-riscos-de-proposta-de-uso-de-inteligencia-artificial-em-saude-mental-no-sus/" target="_blank" rel="noopener noreferrer">alertou para riscos da proposta e-Saúde Mental no SUS</a>, uma plataforma digital de diagnóstico e apoio na atenção primária. O conselho argumentou que aliança terapêutica, manejo de crise e avaliação de risco não podem ser delegados a algoritmos, que software desse tipo precisa de aprovação da Anvisa pela RDC 657/2022 e que a resposta deveria ser ampliar equipes, não usar tecnologia como paliativo.</p>

    <p>O movimento acompanha outras regras sobre chatbots, como a <a href="/noticias/ny-hochul-lei-chatbots-criancas-verificacao-idade">lei de Nova York que impede chatbots de se passarem por humanos com crianças</a> e o <a href="/artigos/eca-digital-e-ia-o-que-muda-para-pais-criancas-chatbots-e-apps">ECA Digital no Brasil</a>. Do lado das empresas, a OpenAI chegou a lançar um <a href="/noticias/openai-lanca-mentalhealthbench-avaliar-ia-saude-mental">benchmark para medir como a IA lida com saúde mental</a>, sinal de que o tema virou prioridade também para quem faz os modelos.</p>

    <h2>Exemplo prático: um consultório pequeno usando IA sem cruzar a linha</h2>

    <p>Pense numa psicóloga autônoma em Curitiba que atende 22 pacientes por semana, entre presencial e on-line. Ela gastava cerca de 3 horas semanais confirmando horários e respondendo perguntas sobre valor e formas de pagamento. Com uma agenda on-line e mensagens automáticas de confirmação 24 horas antes, esse tempo cai para algo perto de 1 hora, sem nenhuma informação clínica circulando.</p>

    <p>Para escrever um texto educativo para o Instagram sobre ansiedade no fim de ano, ela usa um assistente de IA, revisa cada frase e confere se nada soa como promessa de cura. O que ela não faz: colar anotações de sessão no chat, pedir hipótese diagnóstica com dados reais ou indicar um aplicativo de "terapia por IA" a paciente em sofrimento. Um prompt seguro para esse uso:</p>

    <pre><code>Sou psicóloga e quero um texto educativo de 150 palavras para o Instagram sobre como lidar com a ansiedade nas festas de fim de ano. Público: adultos leigos. Não prometa cura, não sugira diagnóstico, não use termos alarmistas e termine convidando a pessoa a procurar um profissional se o sofrimento for intenso ou persistente.</code></pre>

    <p>Para revisar a própria rotina, outro prompt útil, sem dado de paciente nenhum:</p>

    <pre><code>Liste as tarefas administrativas de um consultório de psicologia com 20 pacientes por semana que podem ser automatizadas sem envolver informação clínica. Para cada uma, diga o risco de privacidade e o cuidado mínimo para manter o sigilo.</code></pre>

    <h2>O que muda para quem faz terapia e usa chatbot</h2>

    <p>Muita gente já desabafa com o ChatGPT, o Gemini ou a <a href="/artigos/meta-ai-no-whatsapp-o-que-faz-privacidade-e-como-usar">Meta AI no WhatsApp</a>. A cartilha do CFP para o público existe justamente por isso. O uso razoável é como caderno de apoio: organizar o que você quer levar para a sessão, entender um conceito ou escrever o que está sentindo para clarear as ideias.</p>

    <p>O que o chatbot não faz é escuta clínica. Ele não percebe sinais de risco como um profissional, não acompanha sua história ao longo de meses com responsabilidade ética e pode concordar com tudo o que você diz. Em crise, a orientação é procurar ajuda humana: o CVV atende pelo telefone 188, e emergências vão para o SAMU, no 192.</p>

    <ul class="checklist">
      <li>Pacientes: use a IA para organizar ideias, não como substituta da terapia</li>
      <li>Pacientes: não conte detalhes que identificam você ou outras pessoas</li>
      <li>Psicólogos: consentimento por escrito antes de qualquer gravação</li>
      <li>Psicólogos: ferramenta com contrato de dados e sem treino com o conteúdo</li>
      <li>Psicólogos: a IA sugere, a decisão clínica é sempre sua</li>
    </ul>

    <h2>Erros comuns de psicólogos e pacientes com IA</h2>

    <ul>
      <li><strong>Colar trecho de sessão em conta pessoal de chatbot:</strong> é o erro mais grave, porque tira o dado sensível do controle do consultório.</li>
      <li><strong>Achar que a ferramenta assume a culpa:</strong> o CFP é claro que a responsabilidade continua com o profissional, como acontece <a href="/artigos/quando-o-agente-de-ia-erra-quem-responde-cdc-contrato-e-o-que-fazer">quando um agente de IA erra</a> em qualquer outra área.</li>
      <li><strong>Gravar sem consentimento real:</strong> o "aceito" escondido na ficha de cadastro não é consentimento informado.</li>
      <li><strong>Divulgar app de IA como terapia:</strong> o conselho critica justamente o serviço sem mediação humana qualificada.</li>
      <li><strong>Paciente trocar a sessão pelo chatbot:</strong> a ferramenta pode ser apoio, mas não acompanha, não maneja crise e não responde eticamente pelo cuidado.</li>
    </ul>

    <p>Psicólogos e IA vão continuar se encontrando, e as regras ainda estão em construção no Brasil. Para o profissional, o caminho é usar a tecnologia no administrativo, com cuidado redobrado no clínico; para o paciente, usar como apoio e nunca como substituto. Para acompanhar como outras profissões estão lidando com a mesma mudança, veja o que mudou para <a href="/artigos/jornalismo-e-ia-o-que-muda-para-quem-produz-noticia-e-para-quem-publica">jornalistas</a> e explore a categoria Futuro do Portal da AI.</p>
  `,
  faq: [
    {
      question: "O CFP proíbe psicólogos de usar inteligência artificial?",
      answer:
        "Não. A nota de posicionamento de julho de 2025 não proíbe o uso, mas afirma que a IA não substitui o juízo técnico e ético do psicólogo. Tarefas administrativas são o uso mais simples; atividades complexas, como sugestão de hipótese diagnóstica, devem ficar sob supervisão crítica do profissional, com consentimento e respeito à LGPD.",
    },
    {
      question: "Chatbot pode substituir a terapia com psicólogo?",
      answer:
        "Não. O CFP afirma que a escuta clínica não pode ser substituída por respostas automatizadas e critica serviços sem mediação humana qualificada. Um chatbot pode ajudar a organizar ideias entre sessões ou explicar conceitos, mas não maneja crise, não avalia risco como um profissional e não responde eticamente pelo cuidado.",
    },
    {
      question: "O psicólogo pode gravar e transcrever a sessão com IA?",
      answer:
        "Só com cuidado redobrado. O conteúdo da sessão é dado de saúde, sensível pela LGPD, e o CFP exige consentimento livre, informado e transparente para qualquer processamento com IA. Na prática, isso pede autorização por escrito, opção real de recusar, ferramenta com contrato de dados e nenhum uso do conteúdo para treinar o modelo.",
    },
    {
      question: "Quais guias o CFP publicou sobre IA?",
      answer:
        "Em dezembro de 2025, o CFP lançou dois materiais: o guia Inteligência Artificial na Psicologia, para uma prática ética e responsável, voltado aos profissionais, e a cartilha Chatbots, Inteligência Artificial e sua Saúde Mental, para o público geral. Antes disso, em julho de 2025, já havia publicado uma nota de posicionamento sobre o tema.",
    },
    {
      question: "Algum lugar já proibiu terapia feita por IA?",
      answer:
        "Sim. Em agosto de 2025, o estado de Illinois, nos Estados Unidos, sancionou uma lei que proíbe usar IA para prestar serviços de saúde mental e tomar decisões terapêuticas. O uso em tarefas administrativas e de apoio a profissionais licenciados continua permitido. No Brasil, ainda não há lei específica sobre o tema.",
    },
  ],
};
