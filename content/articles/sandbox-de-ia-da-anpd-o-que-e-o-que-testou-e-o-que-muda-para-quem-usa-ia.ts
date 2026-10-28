import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "sandbox-de-ia-da-anpd-o-que-e-o-que-testou-e-o-que-muda-para-quem-usa-ia",
  title: "Sandbox de IA da ANPD: o que é, o que testou e o que muda",
  seoTitle: "Sandbox de IA da ANPD: o que é e o que testou",
  excerpt:
    "Entenda o sandbox regulatório de IA da ANPD: o que é, as três soluções testadas no 3º relatório e o que isso muda para quem usa IA com dados pessoais.",
  metaDescription:
    "Sandbox de IA da ANPD explicado: o que é, quem participa, o que o 3º relatório parcial encontrou e como seus direitos de titular seguem valendo.",
  category: "futuro",
  articleSubcategory: "regulacao-e-etica",
  date: "2026-10-28",
  readTime: 7,
  imageQuery: "data protection law gavel laptop",
  seed: 848,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O sandbox de IA da ANPD é um ambiente de teste controlado, feito com a USP, em que o regulador aprende sobre riscos e benefícios da IA antes de criar regras, sem multar quem participa.",
    "O 3º relatório parcial, divulgado em 16/10/2026, avaliou três soluções (finanças, mobilidade e saúde) e não funciona como selo de conformidade com a LGPD.",
    "Enquanto não há regra específica de IA, os direitos de titular da LGPD, como pedir explicação e revisão de decisões automatizadas, continuam valendo para você.",
  ],
  content: `
    <p>O sandbox de IA da ANPD é um ambiente experimental e controlado, conduzido pela Autoridade Nacional de Proteção de Dados com o Centro de Inteligência Artificial e Aprendizado de Máquina da USP. Nele, empresas testam soluções de IA com supervisão do regulador, que usa o que aprende para orientar regras futuras. A participação não gera multa nem funciona como certificado.</p>

    <p>Em 16/10/2026, a ANPD publicou o 3º relatório parcial de monitoramento desse sandbox, com os testes de três soluções reais. A notícia parece distante do dia a dia, mas mostra como o Brasil está construindo, na prática, as regras de uso de IA com dados pessoais. Este texto explica o que é o sandbox, o que o relatório encontrou, o que ele não significa e o que você, como usuário ou dono de negócio, pode fazer agora.</p>

    <h2>O que é um sandbox regulatório de IA?</h2>

    <p>Sandbox, em tradução livre, é uma caixa de areia: um espaço em que se pode testar sem o risco de quebrar o mundo real. Em regulação, é um programa em que o órgão responsável acompanha uma empresa testando uma tecnologia nova, dentro de limites combinados. A empresa ganha orientação. O regulador ganha evidência para decidir como escrever regras que funcionem.</p>

    <p>Segundo a <a href="https://www.gov.br/anpd/pt-br/assuntos/noticias/anpd-publica-3o-relatorio-parcial-de-monitoramento-do-sandbox-regulatorio-em-ia" target="_blank" rel="noopener noreferrer">página da ANPD sobre o 3º relatório</a>, consultada em 28/10/2026, o Sandbox Regulatório em Inteligência Artificial e Proteção de Dados é supervisionado pela Agência e realizado com o CIAAM/USP. O objetivo é conhecer riscos e benefícios da IA e produzir evidências que podem orientar futuras diretrizes. A mesma página informa que o programa não restringe as empresas participantes nem tem efeito sancionador.</p>

    <p>Isso importa para entender a natureza do exercício: não é fiscalização, é aprendizado. Quem participa abre informações técnicas e de governança para a ANPD e para a universidade, e em troca recebe recomendações específicas. Para o público, o valor está em ver, antes da lei, quais perguntas o regulador considera importantes.</p>

    <h2>O que o 3º relatório parcial testou</h2>

    <p>O relatório cobre três soluções baseadas em IA, selecionadas pelo Edital nº 2/2025 da Superintendência de Inovação Tecnológica da ANPD. Cada uma representa um setor em que dados pessoais são especialmente sensíveis.</p>

    <table>
      <thead>
        <tr><th>Empresa</th><th>Setor</th><th>Dados em foco</th><th>O que o relatório descreve</th></tr>
      </thead>
      <tbody>
        <tr><td>Metatext</td><td>Financeiro</td><td>Operações financeiras</td><td>Revisão da documentação e dos fluxos de dados de um sistema que detecta fraude e bloqueia transações suspeitas</td></tr>
        <tr><td>Synapse AI</td><td>Mobilidade</td><td>Localização</td><td>Em uso simulado, nenhuma informação pessoal sem proteção no tráfego de dados; algoritmo de estimativa de multidão não identificou pessoas nas imagens de teste</td></tr>
        <tr><td>Prevvine Tecnologia</td><td>Saúde</td><td>Dados de saúde</td><td>Ferramenta de apoio à decisão clínica testada com 30 casos simulados; melhorias previstas em avisos de limite e indicação das fontes</td></tr>
      </tbody>
    </table>

    <p>Repare no cuidado dos termos. Os testes de mobilidade foram simulados, e os de saúde usaram casos simulados, não pacientes reais. O próprio relatório, segundo a página da ANPD, afirma que o trabalho não certifica que as soluções cumprem a lei. É um retrato de um momento do desenvolvimento, não uma aprovação.</p>

    <h2>Os três pontos que mais interessam a quem usa IA</h2>

    <h3>1. Explicar decisões automatizadas</h3>

    <p>No caso financeiro, o próximo ciclo vai testar proteção de dados pessoais, mecanismos de alerta e formas de explicar a pessoas afetadas por que uma operação foi bloqueada. Se você já teve um Pix barrado ou um cartão travado "por segurança", sabe como a falta de explicação irrita. O sandbox trata justamente de como dizer isso com clareza. O guia sobre <a href="/artigos/decisao-automatizada-lgpd-como-pedir-revisao-de-uma-ia">como pedir revisão de uma decisão automatizada</a> mostra o que você pode exigir hoje.</p>

    <h3>2. Avisar o limite da ferramenta</h3>

    <p>No caso da saúde, a melhoria prevista é deixar mais claros os limites da ferramenta, principalmente em emergências, e indicar as fontes usadas nas respostas. É a mesma lógica que aparece no texto sobre <a href="/artigos/perguntar-sintomas-e-exames-para-ia-o-que-pode-e-o-que-nao-pode">perguntar sintomas e exames para a IA</a>: a resposta só é útil se você sabe até onde confiar nela. Para o lado de quem atende, a <a href="/artigos/medicos-e-ia-o-que-a-resolucao-do-cfm-exige-do-medico-e-do-paciente">resolução do CFM sobre médicos e IA</a> complementa o quadro.</p>

    <h3>3. Provar o que a empresa diz</h3>

    <p>A avaliação separou três coisas: o que a empresa declarou, o que documentou e o que a equipe do sandbox realmente verificou. Para o leitor, a lição é prática. Quando um fornecedor de IA diz que "protege seus dados", a pergunta útil é: onde isso está documentado e quem conferiu? O checklist em <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">como escolher uma ferramenta de IA com segurança</a> ajuda a transformar essa pergunta em rotina.</p>

    <h2>Isso é uma lei? O que muda na prática</h2>

    <p>Não. O sandbox não cria obrigação nova nem substitui lei. Ele produz evidência. As obrigações que valem hoje continuam sendo as da LGPD, e a discussão sobre uma lei geral de IA segue em paralelo, como explica o guia sobre a <a href="/artigos/lei-de-ia-no-brasil-o-que-muda-para-quem-usa">lei de IA no Brasil</a>. A diretriz nacional de fomento aparece no texto sobre o <a href="/artigos/plano-brasileiro-de-ia-pbia-o-que-muda-para-voce">Plano Brasileiro de IA</a>.</p>

    <p>O que muda é a previsibilidade. Empresas que acompanham o sandbox já sabem onde o regulador está olhando: segurança dos dados, transparência, explicabilidade e supervisão humana. Quem desenvolve ou contrata IA e se prepara para essas perguntas tende a sofrer menos quando as regras ficarem mais firmes.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Participar do sandbox não é selo de conformidade. Desconfie de qualquer anúncio que use "aprovado pela ANPD" para vender uma ferramenta de IA: a própria autoridade diz que o programa não certifica as soluções.</p></div>

    <h2>Seus direitos de titular já valem hoje</h2>

    <p>A página da ANPD sobre os <a href="https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados/direito-dos-titulares" target="_blank" rel="noopener noreferrer">direitos dos titulares</a>, consultada em 28/10/2026, lista, entre outros, confirmar se existe tratamento, acessar os dados, corrigi-los, pedir anonimização ou eliminação do que for excessivo, retirar o consentimento e solicitar a revisão de decisões tomadas apenas com tratamento automatizado, além de pedir explicação sobre os critérios usados.</p>

    <p>Quanto a prazos, a mesma página diz que a confirmação e o acesso devem ser atendidos imediatamente e que pedidos sobre origem dos dados, critérios e finalidade têm prazo de até 15 dias. Para os demais, o prazo será definido em regulamento da ANPD. Se o controlador não atender, a página institucional sobre <a href="https://www.gov.br/anpd/pt-br/canais_atendimento/cidadao-titular-de-dados/denuncia-peticao-de-titular-referente-lgpd" target="_blank" rel="noopener noreferrer">petição de titular e denúncia</a> explica o caminho: primeiro você procura a própria empresa, guarda protocolos e mensagens, e só depois peticiona à ANPD, sem anonimato. A autoridade analisa petições em conjunto e, em geral, não responde individualmente.</p>

    <p>Um exemplo concreto: Marina teve um limite de crédito reduzido por um aplicativo e recebeu só a frase "análise automática". Ela escreve ao encarregado de dados, pede a explicação dos critérios e a revisão por uma pessoa, e guarda o número de protocolo. Se não houver resposta, esse registro é a prova que a ANPD exige.</p>

    <h2>Modelo de mensagem para pedir explicação</h2>

    <p>Você pode usar uma IA para redigir o pedido, mas revise e envie por conta própria. Não cole documentos pessoais no chat sem necessidade, como alerta o texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">privacidade e IA</a>.</p>

    <pre><code>Escreva uma mensagem curta e educada para o encarregado de dados de uma empresa. Contexto: meu limite de crédito foi reduzido por uma análise automática. Peço, com base na LGPD: (1) confirmação de que houve decisão automatizada; (2) explicação dos critérios e procedimentos usados; (3) revisão por uma pessoa. Peça resposta por escrito e número de protocolo. Não invente fatos: use apenas [DATA] e [NOME DO PRODUTO].</code></pre>

    <h2>E se você é dono de negócio ou profissional?</h2>

    <p>Quem usa IA para atender clientes, analisar currículos ou cobrar inadimplentes está do lado do controlador de dados. Três hábitos reduzem risco: mapear quais dados a ferramenta recebe, avisar o cliente quando uma decisão for automatizada e manter um canal humano para contestação. O passo a passo está no <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">checklist de LGPD para pequeno negócio que usa IA</a> e na <a href="/artigos/politica-de-uso-de-ia-na-pequena-empresa-regras-simples-para-a-equipe">política de uso de IA para a equipe</a>. Clínicas e consultórios, que lidam com dado de saúde, devem ler também o texto sobre <a href="/artigos/ia-para-clinica-e-consultorio-agenda-confirmacao-e-lgpd">agenda, confirmação e LGPD</a>.</p>

    <h2>Erros comuns ao ler esse tipo de notícia</h2>

    <ul class="checklist">
      <li>Tratar o sandbox como lei ou como autorização para qualquer uso.</li>
      <li>Concluir que as três soluções foram aprovadas: o relatório descreve testes, não certifica.</li>
      <li>Achar que, sem lei específica de IA, "vale tudo": a LGPD já se aplica a dados pessoais tratados por IA.</li>
      <li>Reclamar à ANPD antes de procurar a empresa: o caminho começa no controlador.</li>
      <li>Ignorar vieses e falhas: a revisão humana existe porque a IA erra, como mostram os guias sobre <a href="/artigos/vies-em-ia-o-que-e-exemplos-e-como-perceber-na-pratica">viés em IA</a> e sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a>.</li>
    </ul>

    <h2>O que acompanhar daqui para frente</h2>

    <p>Segundo a ANPD, no quarto ciclo as empresas devem executar os testes planejados e demonstrar que cumpriram as condições definidas nas etapas anteriores. Vale acompanhar também outros temas em que a autoridade atua, como deepfakes e proteção de dados: a regulação do tema nas eleições está no guia sobre <a href="/artigos/deepfake-nas-eleicoes-2026-regras-do-tse-rotulagem-e-multas">deepfake nas eleições 2026</a>. E, se você foi vítima de golpe digital, o primeiro passo é outro: veja o que fazer nas primeiras horas em <a href="/artigos/golpe-do-pix-o-que-fazer-nas-primeiras-horas-med-e-uso-de-ia">golpe do Pix e MED</a>.</p>

    <p>Para continuar entendendo como a IA vai ser regulada e o que isso muda na sua vida e no seu trabalho, acompanhe a <a href="/categoria/futuro">categoria Futuro</a> do Portal da AI.</p>
  `,
  faq: [
    {
      question: "O que é o sandbox regulatório de IA da ANPD?",
      answer:
        "É um ambiente experimental e controlado, supervisionado pela ANPD e realizado com o CIAAM/USP, em que empresas testam soluções de IA. O objetivo é conhecer riscos e benefícios e gerar evidências para futuras orientações. Segundo a página da ANPD, o programa não restringe as participantes nem tem efeito sancionador.",
    },
    {
      question: "Quais empresas aparecem no 3º relatório do sandbox?",
      answer:
        "O 3º relatório parcial, publicado em 16/10/2026, trata de três soluções: Metatext, no setor financeiro, Synapse AI, em mobilidade, e Prevvine Tecnologia, em saúde. Elas foram selecionadas pelo Edital nº 2/2025 e passaram por testes de segurança e de proteção de dados pessoais.",
    },
    {
      question: "Participar do sandbox significa que a ferramenta está de acordo com a LGPD?",
      answer:
        "Não. A ANPD informa que os testes não certificam que as soluções cumprem a lei. O relatório descreve o que foi verificado em cada ciclo e recomenda melhorias. Por isso, não use o sandbox como argumento de venda nem como garantia de conformidade.",
    },
    {
      question: "Posso pedir a revisão de uma decisão tomada por IA?",
      answer:
        "Sim. Entre os direitos de titular listados pela ANPD está o de solicitar a revisão de decisões tomadas apenas com tratamento automatizado e de pedir explicação dos critérios usados. Comece pelo canal da própria empresa, guarde o protocolo e, se não houver resposta, avalie a petição à ANPD.",
    },
    {
      question: "Já existe uma lei específica de IA no Brasil?",
      answer:
        "O debate sobre uma lei geral de IA segue em andamento e o guia do Portal da AI sobre o tema reúne o contexto. Enquanto isso, a LGPD já protege os dados pessoais tratados por sistemas de IA, e a ANPD usa o sandbox para preparar orientações futuras.",
    },
  ],
};
