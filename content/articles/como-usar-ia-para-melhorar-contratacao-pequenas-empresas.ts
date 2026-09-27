import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "como-usar-ia-para-melhorar-contratacao-pequenas-empresas",
  title: "Contratação com IA em pequenas empresas: guia da vaga à decisão",
  seoTitle: "Contratação com IA em pequenas empresas: guia prático",
  excerpt:
    "Veja como usar IA para melhorar a contratação em pequenas empresas: descrever a vaga, triar currículos com critérios claros e preparar entrevistas melhores.",
  metaDescription:
    "Guia de contratação com IA para pequenas empresas: descrição da vaga, triagem de currículos com critérios objetivos, roteiro de entrevista, custos e LGPD.",
  category: "negocios",
  date: "2026-09-24",
  updated: "2026-09-27",
  readTime: 9,
  imageQuery: "job interview hiring office resumes",
  seed: 78,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "A IA acelera as etapas mecânicas da contratação (descrever a vaga, organizar currículos, montar roteiro de entrevista), mas a decisão de quem avança continua sendo sua.",
    "Triagem só funciona com critérios objetivos escritos antes de abrir o primeiro currículo, e sempre com revisão humana de quem ficou de fora.",
    "Dados de candidato são dados pessoais: colete só o necessário, anonimize antes de colar em qualquer ferramenta e descarte após o processo.",
  ],
  sources: [
    { label: "Sebrae SC: contratação de colaboradores", url: "https://www.sebrae-sc.com.br/blog/contratacao-de-colaboradores-dicas-para-encontrar-o-ideal" },
    { label: "gov.br: buscar trabalhador no Sine", url: "https://www.gov.br/pt-br/servicos/buscar-trabalhador-no-sistema-nacional-de-emprego-sine" },
    { label: "Notion: planos e preços", url: "https://www.notion.com/pricing" },
    { label: "Serpro: o que muda com a LGPD", url: "https://www.serpro.gov.br/lgpd/menu/a-lgpd/o-que-muda-com-a-lgpd" },
  ],
  content: `
    <p>Contratação com IA em pequenas empresas não significa deixar um algoritmo escolher quem entra. Significa usar o assistente nas etapas que comem o tempo do dono: escrever a descrição da vaga, organizar 60 currículos por critérios que você definiu, montar o roteiro de entrevista e comparar candidatos com a mesma régua. A decisão continua humana, mas chega mais cedo e com menos achismo.</p>

    <p>O problema é conhecido. O <a href="https://www.sebrae-sc.com.br/blog/contratacao-de-colaboradores-dicas-para-encontrar-o-ideal" rel="noopener noreferrer">Sebrae SC</a> lista as dores do pequeno negócio na hora de contratar: dificuldade de achar gente qualificada, burocracia e custo alto, e rotatividade depois da admissão. Na empresa grande há um RH para isso; na pequena, é o dono entre um cliente e outro, e o processo acaba rápido demais, com poucos critérios. É exatamente aí que a IA devolve horas, na linha do que mostra <a href="/artigos/como-times-pequenos-competem-com-grandes-empresas-usando-ia">como times pequenos competem com grandes empresas usando IA</a>.</p>

    <h2>Onde a IA ajuda na contratação (e onde não deve entrar)?</h2>
    <p>Pense no processo como cinco etapas: definir a vaga, divulgar, triar, entrevistar e decidir. A IA rende muito nas três primeiras e na preparação da quarta. Na quinta, ela organiza a comparação, mas não decide. Essa divisão importa porque o risco não está em usar a ferramenta, e sim em usá-la no lugar errado: descartar gente por uma palavra que faltou no currículo ou aceitar uma "nota" que ninguém sabe explicar.</p>
    <table>
      <thead>
        <tr>
          <th>Etapa</th>
          <th>Onde a IA ajuda</th>
          <th>O que continua humano</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Definir a vaga</td>
          <td>Transformar suas anotações em descrição clara, com responsabilidades e requisitos separados</td>
          <td>Decidir salário, jornada e o que é obrigatório de verdade</td>
        </tr>
        <tr>
          <td>Divulgar</td>
          <td>Adaptar o texto para LinkedIn, Instagram, grupos de WhatsApp e Sine</td>
          <td>Escolher onde publicar e responder dúvidas</td>
        </tr>
        <tr>
          <td>Triar currículos</td>
          <td>Organizar por critérios objetivos e apontar o que falta em cada um</td>
          <td>Ler os aprovados e revisar quem ficou de fora</td>
        </tr>
        <tr>
          <td>Entrevistar</td>
          <td>Roteiro de perguntas e escala de avaliação por resposta</td>
          <td>Conduzir a conversa e perceber o que não está no papel</td>
        </tr>
        <tr>
          <td>Decidir</td>
          <td>Consolidar notas e comparar candidatos lado a lado</td>
          <td>Escolher, negociar e fazer a proposta</td>
        </tr>
      </tbody>
    </table>
    <p>Antes de escolher a ferramenta, vale passar pelo <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist de segurança para escolher uma ferramenta de IA</a>: currículo tem dado pessoal, e nem toda plataforma trata isso direito.</p>

    <h2>Passo 1: descrever a vaga com clareza</h2>
    <p>Vaga mal descrita atrai candidato errado e afasta o certo. O Sebrae SC recomenda desenhar o perfil em termos de conhecimentos, habilidades e atitudes antes de divulgar, em vez de copiar uma descrição genérica da internet. A IA faz esse trabalho em minutos se você der matéria-prima real: o que a pessoa vai fazer na segunda-feira de manhã, com quem vai falar, o que acontece se ela errar.</p>
    <pre><code>Você é consultor de RH para pequenas empresas. Vou descrever de forma informal uma vaga da minha [tipo de negócio, cidade]. Transforme em uma descrição de vaga com:
1) Título simples (sem inglês desnecessário)
2) 5 a 7 responsabilidades no dia a dia
3) Requisitos OBRIGATÓRIOS (no máximo 4) e DESEJÁVEIS (separados)
4) Faixa salarial, jornada e benefícios
5) Um parágrafo sobre como é trabalhar aqui, sem clichê
Não invente benefícios que eu não citei. Anotações: [colar]</code></pre>
    <p>A regra de ouro é limitar os obrigatórios a quatro. Cada requisito a mais elimina candidatos bons que aprenderiam em duas semanas. O próprio Sebrae SC sugere valorizar disposição para aprender acima de diploma quando a função permite treinamento interno. Para divulgar sem custo, o serviço <a href="https://www.gov.br/pt-br/servicos/buscar-trabalhador-no-sistema-nacional-de-emprego-sine" rel="noopener noreferrer">buscar trabalhador no Sine</a> é gratuito para o empregador e exige conta gov.br nível prata ou ouro; a IA adapta o mesmo texto para o formato de cada canal.</p>

    <h2>Passo 2: triar currículos com critérios objetivos</h2>
    <p>Aqui mora o maior ganho de tempo e o maior risco. O ganho: em vez de abrir 60 PDFs, você cola os currículos (sem nome, telefone, endereço e foto) e pede uma tabela com os critérios obrigatórios marcados como atende, atende em parte ou não atende. O risco: tratar essa tabela como decisão. Ela é um mapa para você ler primeiro os mais aderentes, e depois passar o olho nos "não atende" para conferir se a IA não entendeu errado uma experiência descrita de outro jeito.</p>
    <pre><code>Vou colar até 10 currículos anonimizados, separados por ###. Os critérios obrigatórios da vaga são: [critério 1], [critério 2], [critério 3], [critério 4].
Monte uma tabela com uma linha por currículo e uma coluna por critério, preenchendo com ATENDE, EM PARTE ou NÃO ATENDE e uma evidência curta tirada do texto.
Não atribua nota geral e não faça ranking. Ao final, liste os currículos em que você teve dúvida e por quê.</code></pre>
    <p>O prompt proíbe ranking de propósito. Nota única esconde o raciocínio e induz a escolher pelo número. Tabela por critério mantém a decisão com você. Vale lembrar que o candidato também usa IA: muita gente monta o currículo com o mesmo tipo de ferramenta, e conhecer o outro lado, descrito em <a href="/artigos/como-colocar-habilidades-de-ia-no-curriculo">habilidades de IA no currículo</a> e em <a href="/artigos/como-montar-portfolio-de-habilidades-de-ia-para-recrutadores">portfólio para recrutadores</a>, ajuda a separar quem escreve bem de quem faz bem.</p>
    <div class="callout-box callout-bad">
      <span class="callout-label">Nunca faça</span>
      <p>Nunca use idade, gênero, estado civil, bairro, foto ou nome de escola como critério de triagem, direto ou disfarçado. Além de ser discriminação, a IA replica e amplifica esse filtro em todos os currículos seguintes.</p>
    </div>

    <h2>Passo 3: preparar entrevistas com a mesma régua para todos</h2>
    <p>Entrevista improvisada gera decisão por simpatia. O antídoto é um roteiro fixo: as mesmas seis a oito perguntas para todos os candidatos, com uma descrição prévia do que seria resposta forte, média ou fraca. A IA monta isso a partir da descrição da vaga, e você ajusta com situações reais do seu negócio (o cliente que reclama, o fornecedor que atrasa, o caixa que não fecha).</p>
    <p>Durante a entrevista, use uma ferramenta de transcrição para não depender da memória; o guia de <a href="/artigos/ia-para-reunioes-transcricao-resumo-ata-automatica">IA para reuniões e ata automática</a> mostra as opções, e vale avisar o candidato que a conversa está sendo gravada. Depois, cole a transcrição e o roteiro no assistente e peça a avaliação por pergunta, com a escala que você definiu antes. Quem quiser entender como o candidato se preparou pode ler <a href="/artigos/como-se-preparar-para-entrevistas-de-emprego-usando-ia">como se preparar para entrevistas usando IA</a>: as respostas ensaiadas ficam mais fáceis de reconhecer.</p>
    <h3>Comparando candidatos sem viés de "gostei da pessoa"</h3>
    <p>Com duas ou três avaliações prontas, peça uma tabela lado a lado por critério, e só depois olhe sua impressão geral. Se a impressão e a tabela divergem muito, é sinal de investigar: às vezes a tabela pegou algo que você deixou passar, às vezes você percebeu algo que o roteiro não mede. Os dois valem, mas o registro escrito é o que permite explicar a decisão daqui a seis meses.</p>

    <h2>Exemplo brasileiro: a clínica que contratou uma recepcionista em 12 dias</h2>
    <p>Pense numa clínica odontológica em Campinas com dois dentistas e uma gerente que também cuida das contratações. A vaga de recepcionista, com salário de R$ 2.400 mais vale-transporte e refeição, recebeu 74 currículos em cinco dias entre o Sine, um post no Instagram e grupos de bairro. Sem IA, a gerente lia isso em duas noites; com o prompt de triagem no plano gratuito de um assistente, ela anonimizou os arquivos e recebeu a tabela por critério em uma hora.</p>
    <p>Vinte e um currículos atendiam aos quatro obrigatórios (atendimento presencial, agenda em sistema, comunicação escrita clara e disponibilidade de horário). Ela revisou os 53 restantes por amostragem e resgatou dois que descreviam a experiência de outro jeito. Entrevistou oito pessoas com o mesmo roteiro de sete perguntas, gravou com consentimento, e usou a IA para pontuar por critério. A vaga fechou no 12º dia, contra cerca de um mês do processo anterior.</p>
    <p>Para organizar o fluxo, a clínica usou o Notion no plano gratuito, com a triagem, o roteiro e as notas num quadro simples; o plano Plus custa US$ 10 por membro ao mês (verificado em 27/09/2026 na <a href="https://www.notion.com/pricing" rel="noopener noreferrer">página de preços</a>) e só faz sentido se o processo virar rotina. Quem quiser automatizar a entrada de currículos e os lembretes de retorno encontra o passo a passo em <a href="/artigos/notion-zapier-e-ia-automatize-seu-negocio-sem-programar">Notion, Zapier e IA sem programar</a>.</p>

    <h2>Erros comuns e quando não usar IA na contratação</h2>
    <p>O primeiro erro é começar a triagem sem critérios escritos. Sem eles, a IA inventa os próprios, e você não sabe por que alguém foi cortado. O segundo é pedir nota ou ranking: parece objetivo, mas esconde o raciocínio. O terceiro é usar a ferramenta para dispensar o retorno aos candidatos. Uma mensagem curta e gentil para quem não passou custa dois minutos com ajuda da IA e protege a reputação do negócio, na linha do que mostra <a href="/artigos/ia-para-email-organizar-caixa-de-entrada-responder-mais-rapido">IA para responder e-mails mais rápido</a>.</p>
    <h3>LGPD e dados de candidatos</h3>
    <p>Currículo é um pacote de dados pessoais. Pela LGPD, você precisa informar para que os dados serão usados, guardar só o necessário e descartar quando o processo terminar; a página do <a href="https://www.serpro.gov.br/lgpd/menu/a-lgpd/o-que-muda-com-a-lgpd" rel="noopener noreferrer">Serpro sobre a LGPD</a> resume os direitos do titular e a possibilidade de multa de até 2% do faturamento, limitada a R$ 50 milhões. Na prática: anonimize antes de colar em qualquer assistente, não use ferramenta que treina com os dados enviados e apague os arquivos dos não contratados após 30 dias. Quem quer entender o que as ferramentas guardam encontra o detalhe em <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a>.</p>
    <h3>Quando o processo não precisa de IA</h3>
    <p>Se você recebeu cinco currículos, leia os cinco. Se a vaga é para alguém da sua confiança direta (sócio operacional, gerente que vai assinar contrato), o peso da conversa é tão grande que a triagem automática pouco ajuda. E se você não tem tempo nem para escrever quatro critérios, o problema não é ferramenta: é definir a vaga primeiro.</p>

    <p>Contratar com IA em pequena empresa é trocar noites lendo currículo por uma tarde definindo critérios e um roteiro que vale para todos. Comece pela descrição da vaga com o primeiro prompt deste guia e siga as etapas na ordem. Depois da assinatura do contrato, o trabalho continua: o roteiro de <a href="/artigos/como-usar-ia-para-melhorar-onboarding-de-clientes">onboarding com IA</a> se adapta bem aos primeiros dias do novo funcionário, e a revisão de contrato de trabalho fica mais rápida com as dicas de <a href="/artigos/ia-para-contratos-revisar-documentos-juridicos-mais-rapido">IA para revisar documentos jurídicos</a>, sempre com um contador ou advogado dando a palavra final.</p>
  `,
  faq: [
    {
      question: "A IA pode substituir a entrevista de emprego?",
      answer:
        "Não. A IA prepara o roteiro de perguntas, define a escala de avaliação e organiza as notas depois, mas a conversa e a decisão continuam com você. Encaixe com a equipe, comunicação e disposição para aprender aparecem na conversa, não numa tabela gerada por assistente.",
    },
    {
      question: "É seguro usar IA para triar currículos sem discriminar candidatos?",
      answer:
        "É seguro quando você escreve os critérios antes, anonimiza os currículos, proíbe ranking e revisa quem ficou de fora. O risco está em usar idade, gênero, bairro ou foto como filtro, mesmo de forma indireta, e em aceitar uma nota geral que ninguém consegue explicar.",
    },
    {
      question: "Pequena empresa precisa de processo formal de contratação?",
      answer:
        "Precisa de um processo simples e repetível: quatro critérios obrigatórios, um roteiro de entrevista igual para todos e registro escrito da decisão. Isso cabe numa página e evita o custo de contratar errado, que inclui treinamento perdido, desligamento e um novo processo do zero.",
    },
    {
      question: "Qual ferramenta de IA usar para contratar em pequena empresa?",
      answer:
        "Um assistente de chat generalista (ChatGPT, Claude ou Gemini) no plano gratuito resolve a descrição da vaga, a triagem por critérios e o roteiro de entrevista. Para organizar o fluxo, o Notion gratuito serve. Plataformas de recrutamento pagas só compensam se você contrata todo mês.",
    },
    {
      question: "Posso colar currículos no ChatGPT ou no Claude?",
      answer:
        "Só depois de remover nome, telefone, e-mail, endereço e foto. Currículo é dado pessoal protegido pela LGPD, então informe a finalidade ao candidato, use ferramenta que não treina com o que você envia e apague os arquivos de quem não foi contratado quando o processo terminar.",
    },
  ],
  quiz: [
    {
      question: "Qual é o papel mais indicado da IA na triagem de currículos?",
      options: [
        "Decidir sozinha quem é contratado",
        "Organizar candidatos por critérios objetivos definidos antes, com revisão humana depois",
        "Substituir a entrevista completamente",
        "Dar uma nota geral para cada candidato sem explicar",
      ],
      answer: 1,
      explanation:
        "A IA organiza a comparação por critério e aponta evidências, mas quem lê os aprovados, revisa os cortados e decide continua sendo você.",
    },
    {
      question: "Por que investir cuidado no processo de contratação vale a pena, mesmo em uma pequena empresa?",
      options: [
        "Porque contratar errado custa treinamento perdido, desligamento e um novo processo do zero",
        "Porque não existe custo em contratar errado",
        "Porque a IA sempre acerta a decisão final",
        "Porque contratar rápido é sempre melhor que contratar bem",
      ],
      answer: 0,
      explanation:
        "Um processo simples com critérios e roteiro fixo leva algumas horas a mais e evita meses de prejuízo com uma contratação errada.",
    },
  ],
};
