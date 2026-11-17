import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "chip-no-cerebro-neuralink-interfaces-cerebro-computador-e-neurodireitos",
  title: "Chip no cérebro: o que a Neuralink já faz e o que muda no Brasil",
  seoTitle: "Chip no cérebro: Neuralink, interfaces e neurodireitos",
  excerpt:
    "Chip no cérebro já existe em estudo clínico, só para casos graves. Entenda o que a Neuralink faz, quem pode participar e como o Brasil discute dados neurais.",
  metaDescription:
    "Chip no cérebro em 2026: o que a Neuralink e outras interfaces cérebro-computador já fazem, onde estão os estudos e o que o Brasil propõe para dados neurais.",
  category: "futuro",
  articleSubcategory: "tecnologia-emergente",
  date: "2026-11-17",
  readTime: 9,
  imageQuery: "brain computer interface implant",
  seed: 1224,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O chip no cérebro da Neuralink ainda é um dispositivo experimental: só pessoas com tetraplegia grave, ELA ou perda severa da fala entram nos estudos, todos fora do Brasil.",
    "Interface cérebro-computador é uma família de tecnologias, da touca de eletrodos sem cirurgia ao implante dentro do córtex, e a IA é a peça que traduz sinais elétricos em comandos.",
    "No Brasil já há pesquisa com interfaces não invasivas e projetos de lei que tratam dado neural como dado sensível, mas nenhuma regra específica foi aprovada até agora.",
  ],
  content: `
    <p>Chip no cérebro já é realidade, mas em escala de laboratório: a Neuralink, empresa de Elon Musk, implanta seu dispositivo apenas em voluntários de estudos clínicos, pessoas com tetraplegia grave, ELA ou perda severa da fala, que usam o implante para mover o cursor de um computador ou tentar se comunicar. Não existe venda ao público, nem estudo aberto no Brasil.</p>

    <p>Este guia separa o que já funciona do que ainda é promessa, explica o papel da inteligência artificial nessas interfaces e mostra o que o Congresso brasileiro discute sobre os chamados dados neurais. É o mesmo exercício de pé no chão que fizemos com <a href="/artigos/robos-humanoides-com-ia-quando-chegam-ao-mercado-de-trabalho">robôs humanoides com IA</a> e com a <a href="/artigos/computacao-quantica-e-ia-o-que-ja-existe-e-o-que-muda-para-voce">computação quântica</a>: muita manchete, pouco produto na prateleira.</p>

    <h2>O que é uma interface cérebro-computador?</h2>

    <p>Interface cérebro-computador (BCI, na sigla em inglês) é qualquer sistema que capta a atividade elétrica do cérebro e a transforma em comando para uma máquina. Quando você pensa em mexer a mão, neurônios do córtex motor disparam num padrão reconhecível, mesmo que a mão não se mova por causa de uma lesão. A interface grava esse padrão e um programa aprende a associá-lo a uma ação: mover o cursor para a esquerda, clicar, escolher uma letra.</p>

    <p>É aqui que entra a IA. Os sinais são ruidosos e mudam de pessoa para pessoa e até de um dia para o outro. Modelos de aprendizado de máquina fazem a decodificação, ou seja, aprendem quais padrões correspondem a quais intenções, e se recalibram com o uso. Sem esse decodificador, o implante seria só um gravador de ruído elétrico.</p>

    <p>A ideia não nasceu com a Neuralink. Universidades usam implantes cerebrais em pesquisa há mais de duas décadas, e o Brasil viu uma demonstração famosa na abertura da Copa de 2014, quando um exoesqueleto do projeto Andar de Novo, liderado pelo neurocientista Miguel Nicolelis, foi controlado por sinais captados por uma touca de eletrodos.</p>

    <h2>Os quatro tipos de interface e o quanto cada um invade</h2>

    <p>Nem todo "chip no cérebro" é igual. A diferença principal é onde fica o sensor: quanto mais perto dos neurônios, melhor o sinal, e maior o risco da cirurgia.</p>

    <table>
      <thead>
        <tr><th>Tipo</th><th>Onde fica o sensor</th><th>Exemplo</th><th>Situação em 2026</th></tr>
      </thead>
      <tbody>
        <tr><td>Não invasiva (EEG)</td><td>Touca ou faixa sobre o couro cabeludo</td><td>Pesquisas de reabilitação em universidades</td><td>Sem cirurgia; sinal mais fraco e impreciso</td></tr>
        <tr><td>Superfície do cérebro</td><td>Película de eletrodos sobre o córtex, sem penetrar o tecido</td><td>Layer 7, da Precision Neuroscience</td><td>Liberada pela FDA para uso de até 30 dias</td></tr>
        <tr><td>Endovascular</td><td>Dentro de um vaso sanguíneo perto do córtex motor</td><td>Stentrode, da Synchron</td><td>Em estudo clínico</td></tr>
        <tr><td>Intracortical</td><td>Fios finos inseridos no próprio córtex</td><td>N1, da Neuralink</td><td>Em estudo clínico, só casos graves</td></tr>
      </tbody>
    </table>

    <p>A Precision Neuroscience anunciou em 17 de abril de 2025 a <a href="https://www.biospace.com/press-releases/precision-neuroscience-receives-fda-clearance-for-high-resolution-cortical-electrode-array" rel="noopener noreferrer">liberação 510(k) da FDA para o Layer 7</a>, que permite gravar e estimular a superfície do cérebro por até 30 dias, depois de testes em 37 pacientes. É uso hospitalar temporário, não implante permanente. Pulseiras que leem o punho, como a que acompanha alguns <a href="/artigos/oculos-inteligentes-com-ia-no-brasil-o-que-fazem-custam-e-privacidade">óculos inteligentes com IA</a>, não leem o cérebro: captam sinais elétricos dos músculos, outra tecnologia.</p>

    <h2>O que a Neuralink faz de verdade hoje</h2>

    <p>O implante N1 fica preso ao crânio, é sem fio e recarregável, e se liga a fios finíssimos que um robô cirúrgico (o R1) insere no córtex. O principal estudo, o PRIME, começou em 9 de janeiro de 2024 e está registrado no <a href="https://clinicaltrials.gov/study/NCT06429735" rel="noopener noreferrer">ClinicalTrials.gov como estudo de viabilidade inicial</a>, com centros no Barrow Neurological Institute, em Phoenix, e na Universidade de Miami. O objetivo é controlar dispositivos externos, como computador e braço robótico, só com a intenção de movimento.</p>

    <p>Os critérios de entrada são duros: tetraplegia grave por lesão na medula ou ELA há pelo menos um ano sem melhora, idade entre 22 e 75 anos, expectativa de vida de 12 meses ou mais, um cuidador estável e capacidade de se comunicar em inglês. Fumantes, pessoas com epilepsia mal controlada ou que precisam de ressonância magnética regular ficam de fora.</p>

    <p>O mesmo protocolo foi replicado no Canadá (CAN-PRIME), no Reino Unido (GB-PRIME) e nos Emirados Árabes Unidos (UAE-PRIME). Em outubro de 2025 começou o estudo VOICE (registro NCT07224256), voltado a devolver a capacidade de comunicação para adultos com ELA, esclerose lateral primária, AVC ou lesão medular que perderam a fala e o movimento dos braços. Nenhum desses registros tem centro no Brasil, e todos ainda estão na fase que mede segurança antes de eficácia.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Desconfie de anúncio de "chip da Neuralink à venda" ou de vaga paga para participar de estudo. Estudo clínico sério não cobra do voluntário, e a inscrição oficial é feita pelo site da empresa e pelos centros listados no registro do estudo.</p></div>

    <h2>Pesquisa com interface cérebro-computador no Brasil</h2>

    <p>O Brasil não tem implante cerebral da Neuralink, mas tem pesquisa própria, quase toda com interfaces não invasivas e foco em reabilitação. Dois exemplos registrados no ClinicalTrials.gov mostram a escala real desses trabalhos:</p>

    <ul>
      <li><strong>Instituto Santos Dumont, em Macaíba (RN):</strong> estudo com cerca de 10 pessoas com lesão medular, em que a interface detecta a intenção de mover a perna e aciona estimulação elétrica no músculo da canela para treinar a marcha (registro NCT07768930).</li>
      <li><strong>UFPR e IFPR, no Paraná:</strong> estudo previsto com 30 voluntários saudáveis que usam uma touca de EEG para comandar uma luva robótica chamada Exobots, medindo o esforço mental em três níveis de sensibilidade (registro NCT07922265).</li>
    </ul>

    <p>São números pequenos, típicos de pesquisa acadêmica, e é justamente nesse ponto que o país pode ganhar: reabilitação de lesão medular e AVC, que atinge muita gente e tem fila longa no SUS. Quem acompanha o uso de IA em saúde vê o mesmo movimento na <a href="/noticias/philips-future-health-index-2026-ia-saude-brasil">pesquisa Future Health Index sobre IA na saúde brasileira</a> e nas regras do <a href="/artigos/medicos-e-ia-o-que-a-resolucao-do-cfm-exige-do-medico-e-do-paciente">CFM para médicos que usam IA</a>.</p>

    <h2>Dados neurais e neurodireitos: o que o Brasil discute</h2>

    <p>Atividade cerebral gravada é o dado mais íntimo que existe. Com a IA ficando melhor em decodificar padrões, a preocupação deixa de ser ficção: um sinal captado para mover o cursor pode, em tese, revelar cansaço, atenção ou estado emocional. Por isso surgiu o conceito de neurodireitos, como privacidade mental e liberdade cognitiva.</p>

    <p>Na Câmara, o <a href="https://www.camara.leg.br/proposicoesWeb/fichadetramitacao?idProposicao=2317524" rel="noopener noreferrer">PL 522/2022</a>, do deputado Carlos Henrique Gaguim, altera a LGPD para definir dado neural, classificá-lo como dado pessoal sensível e exigir consentimento específico e destacado, com aviso sobre efeitos físicos, cognitivos e emocionais. O texto também proíbe interfaces que possam ferir a identidade ou a autonomia da pessoa e veda o compartilhamento de dados neurais entre empresas para ganho econômico. Na última movimentação, em 16 de março de 2026, o projeto recebeu outro apensado (PL 6687/2025) e segue aguardando parecer do relator na Comissão de Saúde.</p>

    <p>No Senado, o projeto de atualização do Código Civil (PL 4/2025) traz um capítulo de neurodireitos: privacidade mental, liberdade cognitiva, integridade mental, continuidade da identidade pessoal e proteção contra discriminação por dados cerebrais, segundo a <a href="https://www12.senado.leg.br/radio/1/noticia/2025/10/28/projeto-do-codigo-civil-preve-neurodireitos" rel="noopener noreferrer">Rádio Senado</a>. Lá fora, a Unesco aprovou em novembro de 2025 uma recomendação sobre ética da neurotecnologia, sem força de lei, que pede tratar dados neurais como sensíveis. Enquanto nada é aprovado aqui, vale a regra geral da LGPD para dado de saúde, a mesma lógica que aparece no debate sobre <a href="/artigos/reconhecimento-facial-em-estadios-lgpd-lei-geral-do-esporte-e-direitos-do-torcedor">reconhecimento facial em estádios</a> e na <a href="/artigos/lei-de-ia-no-brasil-o-que-muda-para-quem-usa">lei de IA no Brasil</a>.</p>

    <h2>Como avaliar um aparelho que lê sinais do cérebro</h2>

    <p>O implante está longe do consumidor, mas faixas de meditação, fones com sensor e apps de foco que dizem medir "ondas cerebrais" já aparecem em lojas online. Antes de comprar ou aceitar um termo, passe por esta lista:</p>

    <ul class="checklist">
      <li>O aparelho tem registro na Anvisa quando promete efeito de saúde, como tratar ansiedade ou insônia?</li>
      <li>A política de privacidade diz, com essas palavras, se o sinal cerebral bruto sai do aparelho e vai para a nuvem?</li>
      <li>Dá para apagar o histórico e baixar uma cópia dos seus dados, como prevê a LGPD?</li>
      <li>O app compartilha dados com anunciantes, seguradoras ou "parceiros" sem nome?</li>
      <li>Existe um contato do encarregado de dados (DPO) no Brasil?</li>
      <li>A promessa é específica e mensurável, ou só fala em "turbinar o cérebro"?</li>
    </ul>

    <p>A IA ajuda a ler termos longos sem pular o que importa. Cole a política de privacidade num assistente e use um pedido como este:</p>

    <pre><code>Leia a política de privacidade abaixo de um aparelho que capta sinais do cérebro (EEG). Liste em tópicos: 1) quais dados são coletados, 2) se o sinal bruto vai para a nuvem, 3) com quem é compartilhado, 4) por quanto tempo fica guardado, 5) como pedir exclusão. Cite o trecho exato de cada resposta e diga "não informado" quando o texto não falar do assunto.

[cole aqui a política]</code></pre>

    <p>Para quem tem um familiar com ELA ou lesão medular e quer entender um estudo clínico, outro pedido útil:</p>

    <pre><code>Explique em português simples este registro de estudo clínico do ClinicalTrials.gov: objetivo, fase, quem pode participar, quem não pode, onde ficam os centros e quais riscos o texto menciona. Não invente informação que não esteja no texto e marque o que eu preciso confirmar com o médico.

[cole aqui o texto do registro]</code></pre>

    <p>Confira sempre a resposta contra o documento original: assistentes erram, e o guia de <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">privacidade no uso de IA</a> mostra o que não colar em chatbot.</p>

    <h2>Erros comuns ao falar de chip no cérebro</h2>

    <ul>
      <li><strong>Achar que já dá para comprar.</strong> Nenhuma interface implantável para uso contínuo está à venda ao público; o que existe são estudos clínicos com poucos voluntários em cada centro.</li>
      <li><strong>Confundir controlar com ler pensamento.</strong> O implante decodifica a intenção de movimento ou de fala treinada, não "lê" ideias soltas. A preocupação com privacidade é real, mas por causa do que o dado pode revelar no futuro.</li>
      <li><strong>Tratar promessa de executivo como cronograma.</strong> Prazos anunciados para visão artificial, memória ou "fusão com a IA" mudam com frequência. Vale o que está no registro do estudo.</li>
      <li><strong>Ignorar as opções que já funcionam.</strong> Para quem tem limitação motora hoje, recursos de <a href="/artigos/acessibilidade-com-ia-no-celular-lookout-legenda-ao-vivo-e-be-my-eyes">acessibilidade com IA no celular</a>, controle por voz e por olhar resolvem muita coisa sem cirurgia.</li>
      <li><strong>Esquecer crianças e adolescentes.</strong> Aparelho de "foco" para estudante coleta dado sensível de menor, tema que o <a href="/artigos/eca-digital-e-ia-o-que-muda-para-pais-criancas-chatbots-e-apps">ECA Digital</a> trata com regras mais duras.</li>
    </ul>

    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Se uma decisão sobre você (seguro, emprego, crédito) usar dados de saúde ou de comportamento tratados por algoritmo, a LGPD dá o direito de pedir explicação e revisão. O passo a passo está no guia sobre <a href="/artigos/decisao-automatizada-lgpd-como-pedir-revisao-de-uma-ia">decisão automatizada e LGPD</a>.</p></div>

    <h2>O que esperar nos próximos anos</h2>

    <p>O caminho mais provável é lento e médico. Primeiro, os estudos de viabilidade precisam mostrar segurança por anos, com o implante funcionando sem infecção nem perda de sinal. Depois vêm estudos maiores e, só então, pedidos de aprovação para pacientes fora da pesquisa. Interfaces de superfície e endovasculares podem chegar antes ao hospital, por exigirem cirurgia menos agressiva.</p>

    <p>Para o leitor brasileiro, os sinais a acompanhar são três: um estudo internacional abrindo centro no país, o PL 522/2022 ou o capítulo de neurodireitos do Código Civil avançando no Congresso, e a Anvisa publicando orientação específica para neurotecnologia.</p>

    <p>Chip no cérebro é uma das fronteiras mais sérias da tecnologia: pode devolver comunicação a quem perdeu a fala e, ao mesmo tempo, cria o tipo de dado que mais precisa de proteção. Para acompanhar esse e outros temas que vão mudar a forma como vivemos e trabalhamos, explore a categoria <a href="/categoria/futuro">Futuro da IA</a> do Portal da AI.</p>
  `,
  faq: [
    {
      question: "O chip da Neuralink já está à venda?",
      answer:
        "Não. O implante N1 é um dispositivo experimental, usado apenas em voluntários de estudos clínicos como o PRIME e o VOICE, nos Estados Unidos, Canadá, Reino Unido e Emirados Árabes Unidos. Não há venda ao público nem preço oficial. Qualquer anúncio de compra ou de vaga paga para receber o chip deve ser tratado como golpe.",
    },
    {
      question: "Brasileiro pode participar do estudo da Neuralink?",
      answer:
        "Hoje é difícil. Os registros no ClinicalTrials.gov não têm centro no Brasil e exigem capacidade de se comunicar em inglês e cuidador estável, além de tetraplegia grave por lesão medular ou ELA, ou perda severa da fala no estudo VOICE. Na prática, o voluntário precisa ser acompanhado de perto por um dos centros listados.",
    },
    {
      question: "Chip no cérebro consegue ler pensamentos?",
      answer:
        "Não do jeito que a ficção mostra. O implante grava a atividade de uma região específica, como o córtex motor, e um modelo de IA aprende a associar padrões a intenções treinadas, como mover o cursor ou formar palavras. Ele não acessa ideias soltas ou memórias. O debate de privacidade existe porque esses dados podem revelar mais no futuro.",
    },
    {
      question: "Existe lei no Brasil sobre dados neurais?",
      answer:
        "Ainda não há lei específica aprovada. O PL 522/2022, na Câmara, quer incluir o dado neural como dado sensível na LGPD, com consentimento destacado, e aguarda parecer na Comissão de Saúde. O projeto do novo Código Civil (PL 4/2025) traz um capítulo de neurodireitos. Até lá, valem as regras gerais da LGPD para dados de saúde.",
    },
    {
      question: "Qual a diferença entre interface invasiva e não invasiva?",
      answer:
        "A não invasiva usa sensores sobre o couro cabeludo, como uma touca de EEG, sem cirurgia, mas capta um sinal mais fraco. A invasiva exige cirurgia: pode ficar na superfície do cérebro, dentro de um vaso sanguíneo ou com fios no próprio córtex, como a Neuralink. Quanto mais perto dos neurônios, melhor o sinal e maior o risco.",
    },
  ],
};
