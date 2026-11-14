import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "reconhecimento-facial-em-estadios-lgpd-lei-geral-do-esporte-e-direitos-do-torcedor",
  title: "Reconhecimento facial no estádio: o que a lei exige do torcedor",
  seoTitle: "Reconhecimento facial no estádio: lei, LGPD e direitos",
  excerpt:
    "Reconhecimento facial no estádio virou regra para entrar no jogo: veja o que a Lei Geral do Esporte exige, o que a ANPD cobrou dos clubes e seus direitos.",
  metaDescription:
    "Entenda o reconhecimento facial em estádios: quem precisa cadastrar o rosto, o que a ANPD apontou em 23 clubes, o caso das crianças e como pedir seus dados.",
  category: "futuro",
  articleSubcategory: "regulacao-e-etica",
  date: "2026-11-14",
  readTime: 8,
  imageQuery: "football stadium turnstile fans",
  seed: 1201,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "A Lei Geral do Esporte exige identificação biométrica dos espectadores em arenas com mais de 20 mil lugares, e o cadastro do rosto é condição de entrada para quem tem mais de 16 anos.",
    "A ANPD fiscalizou 23 clubes em 2025 e apontou falta de transparência, consentimento pedido de forma inadequada e dúvidas sobre o uso de dados de crianças e adolescentes.",
    "O torcedor pode exigir informação clara sobre finalidade, prazo de guarda e compartilhamento dos dados biométricos, e a IA ajuda a ler a política de privacidade e redigir o pedido ao clube.",
  ],
  content: `
    <p>Reconhecimento facial no estádio é o sistema de IA que compara o seu rosto, cadastrado na compra do ingresso, com a imagem captada na catraca. Pela Lei Geral do Esporte, ele é obrigatório nas arenas com mais de 20 mil lugares, e quem tem mais de 16 anos só entra no jogo depois de cadastrar a biometria.</p>

    <p>A tecnologia promete fila menor e menos cambismo, mas trata um dado sensível: o seu rosto. Este guia mostra o que a lei exige, o que a Autoridade Nacional de Proteção de Dados (ANPD) encontrou nos clubes, os pontos de atenção com crianças e erros do algoritmo, e como exercer seus direitos pela LGPD.</p>

    <h2>O que a lei exige no reconhecimento facial em estádios?</h2>

    <p>A Lei nº 14.597, de 14 de junho de 2023, conhecida como Lei Geral do Esporte, tem dois artigos que importam aqui. O artigo 148 diz que o controle de acesso às arenas com capacidade para mais de 20 mil pessoas deve contar com monitoramento por imagem das catracas, identificação biométrica dos espectadores e uma central técnica de informações. O prazo para implantar foi de até dois anos a partir da entrada em vigor da lei.</p>

    <p>O artigo 158, inciso XII, completa a regra: para o espectador com mais de 16 anos, estar cadastrado no sistema biométrico é condição de acesso e permanência no estádio. Quem não cumpre pode ser impedido de entrar ou retirado do local. A transcrição dos dois artigos aparece na <a href="https://www.gov.br/anpd/pt-br/centrais-de-conteudo/documentos-tecnicos-orientativos/nota-tecnia-5_2025_fis_cgf_versao-publica_ocultado.pdf/@@download/file" target="_blank" rel="noopener noreferrer">Nota Técnica nº 5/2025 da ANPD</a>, que analisou o tema a fundo.</p>

    <p>Para a lei de proteção de dados, isso tem uma consequência prática. Como o cadastro cumpre uma obrigação legal, o clube não precisa do seu consentimento para coletar a biometria. Em troca, precisa ser transparente sobre o que faz com ela. Esse é o ponto em que muitos clubes falharam.</p>

    <h2>Como o sistema funciona da compra à catraca</h2>

    <p>O caminho costuma ser o mesmo. Você cria conta na plataforma de ingressos do clube ou da empresa que vende as entradas, tira uma selfie pelo celular e o sistema gera um modelo matemático do seu rosto. No dia do jogo, a câmera da catraca capta sua imagem e um algoritmo de visão computacional confere se ela bate com o cadastro ligado ao ingresso.</p>

    <p>Há dois usos diferentes que vale separar. O primeiro é a verificação de identidade: confirmar que quem entra é o dono do ingresso, o que ajuda contra cambismo e ingresso falso. O segundo é a identificação em massa, em que as imagens são comparadas com listas de pessoas procuradas ou impedidas de frequentar estádios, como no projeto Estádio Seguro, firmado em 2023 entre a CBF e os ministérios da Justiça e do Esporte.</p>

    <p>O segundo uso envolve compartilhamento com órgãos públicos e pede regras mais rígidas. Se quiser entender como esse tipo de sistema toma decisões sozinho, o guia sobre <a href="/artigos/decisao-automatizada-lgpd-como-pedir-revisao-de-uma-ia">decisão automatizada e revisão pela LGPD</a> explica o direito de pedir explicação.</p>

    <h2>O que a ANPD encontrou nos clubes de futebol</h2>

    <p>Em fevereiro de 2025, a ANPD informou ter encontrado <a href="https://www.gov.br/anpd/pt-br/assuntos/noticias/anpd-fiscaliza-uso-de-sistema-de-reconhecimento-facial-na-venda-de-ingressos-e-na-entrada-de-estadios-por-23-clubes-de-futebol" target="_blank" rel="noopener noreferrer">indícios de irregularidades em 23 clubes</a>, entre eles Flamengo, Palmeiras, Grêmio, Bahia e Santos. A autoridade deu 20 dias úteis para que os clubes publicassem nas plataformas de ingresso informações adequadas sobre o cadastro biométrico, pediu relatórios de impacto à proteção de dados e exigiu justificativa de como o uso de dados de crianças e adolescentes atende ao melhor interesse desse grupo.</p>

    <p>A nota técnica detalha os problemas. Muitos clubes pediam consentimento do torcedor mesmo sem precisar, e de forma inválida, no estilo "pegue ou deixe": quem recusasse não comprava o ingresso. Na maioria dos sites analisados, faltavam informações básicas, como a finalidade específica da coleta, o prazo de guarda dos dados, o compartilhamento com terceiros e órgãos públicos e com quem os dados seriam divididos.</p>

    <p>A ANPD já vinha olhando para IA e dados pessoais de forma mais ampla, como mostra o <a href="/artigos/sandbox-de-ia-da-anpd-o-que-e-o-que-testou-e-o-que-muda-para-quem-usa-ia">sandbox de IA da ANPD</a>. O caso dos estádios é um dos exemplos mais concretos de fiscalização sobre tecnologia que o cidadão comum usa toda semana.</p>

    <h2>Crianças, adolescentes e erros do algoritmo</h2>

    <p>A lei só obriga o cadastro de quem tem mais de 16 anos, mas muitos clubes passaram a coletar o rosto de crianças. Um levantamento do grupo O Panóptico, ligado ao CESeC, divulgado em 2024 pela <a href="https://agenciabrasil.ebc.com.br/esportes/noticia/2024-08/estudo-ve-violacao-em-reconhecimento-facial-de-criancas-nos-estadios" target="_blank" rel="noopener noreferrer">Agência Brasil</a>, contou 20 estádios com reconhecimento facial e cerca de 30 mil crianças de 2 a 14 anos entre 210 mil torcedores cadastrados.</p>

    <p>O mesmo relatório lembra um estudo de 2018 que encontrou taxa de erro de 34,7% para mulheres negras em sistemas comerciais de análise facial, contra no máximo 0,8% para homens brancos, e cita o caso de um torcedor detido por engano numa final do Campeonato Sergipano em 2024. Esse tipo de distorção é o que o guia sobre <a href="/artigos/vies-em-ia-o-que-e-exemplos-e-como-perceber-na-pratica">viés em IA</a> explica com outros exemplos.</p>

    <p>A ANPD também mostrou que leva a sério a biometria de menores fora do futebol. Em agosto de 2026, o <a href="https://www.gov.br/anpd/pt-br/centrais-de-conteudo/documentos-tecnicos-orientativos/despacho-decisorio-2-2026-sfi_educacao_parana.pdf/@@display-file/file" target="_blank" rel="noopener noreferrer">Despacho Decisório nº 2/2026</a> mandou suspender o reconhecimento facial usado para registrar a frequência de alunos da rede estadual do Paraná. O tema conversa com o <a href="/artigos/eca-digital-e-ia-o-que-muda-para-pais-criancas-chatbots-e-apps">ECA Digital e o que muda para pais e crianças</a> e com as <a href="/artigos/ia-na-escola-diretrizes-do-mec-e-do-cne-o-que-muda-para-professores-pais-e-alunos">diretrizes de IA na escola</a>.</p>

    <h2>O que a lei exige e o que ela não exige</h2>

    <table>
      <thead>
        <tr><th>Situação</th><th>Exigido pela lei?</th><th>O que observar</th></tr>
      </thead>
      <tbody>
        <tr><td>Cadastro facial de maior de 16 anos em arena com mais de 20 mil lugares</td><td>Sim</td><td>O clube não precisa pedir consentimento, mas precisa informar com clareza</td></tr>
        <tr><td>Cadastro facial de criança ou adolescente até 16 anos</td><td>Não pela regra do art. 158</td><td>A ANPD pediu que os clubes justifiquem o melhor interesse do menor</td></tr>
        <tr><td>Uso do rosto para marketing ou outras finalidades</td><td>Não</td><td>Finalidade nova exige base legal própria e aviso claro</td></tr>
        <tr><td>Compartilhamento com órgãos de segurança</td><td>Depende do acordo e da base legal</td><td>O clube deve dizer com quem compartilha e por quê</td></tr>
        <tr><td>Prazo de guarda dos dados</td><td>Deve ser informado</td><td>Política sem prazo é sinal de alerta</td></tr>
      </tbody>
    </table>

    <h2>Seus direitos como torcedor e como usar IA para exercê-los</h2>

    <p>A LGPD garante que você saiba quem trata seus dados, para quê, por quanto tempo e com quem eles são compartilhados. Também permite pedir confirmação e acesso aos dados, correção e informação sobre compartilhamento. A eliminação pode ser limitada enquanto durar a obrigação legal, mas o clube precisa explicar o motivo.</p>

    <ul class="checklist">
      <li>Procure a política de privacidade no site de ingressos e veja se ela fala de biometria em seção própria</li>
      <li>Confira se há finalidade, prazo de guarda e lista de quem recebe os dados</li>
      <li>Ache o contato do encarregado de dados (DPO) do clube</li>
      <li>Para menores de 16, pergunte se o cadastro é obrigatório naquele estádio ou só uma opção</li>
      <li>Guarde print das telas e protocolo de qualquer pedido</li>
    </ul>

    <p>Políticas de privacidade são longas, e aqui a IA ajuda. Cole o texto público em um assistente e use um pedido como este:</p>

    <pre><code>Abaixo está a política de privacidade do site de ingressos do meu clube. Responda em tópicos curtos, citando o trecho de onde tirou cada resposta: 1) quais dados biométricos são coletados; 2) para quais finalidades; 3) por quanto tempo ficam guardados; 4) com quem são compartilhados, inclusive órgãos públicos; 5) qual o contato do encarregado de dados. Se algum ponto não estiver no texto, escreva "não informado".
Política: [cole aqui]</code></pre>

    <p>Com o resultado, peça ajuda para escrever a solicitação ao clube:</p>

    <pre><code>Escreva um pedido formal e educado ao encarregado de dados de um clube de futebol, com base na LGPD, pedindo: confirmação de que tratam meus dados biométricos, cópia desses dados, finalidade, prazo de guarda e lista de quem recebe as informações. Inclua espaço para nome, CPF parcial e número do cadastro. Máximo 150 palavras.</code></pre>

    <p>Não cole documentos pessoais no assistente: o guia sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">o que você entrega à IA sem perceber</a> mostra os cuidados. Se o clube não responder, dá para reclamar pelo caminho do <a href="/artigos/reclamar-de-empresa-com-ia-consumidor-gov-br-passo-a-passo">consumidor.gov.br com ajuda da IA</a> ou enviar petição à ANPD.</p>

    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>A conta no site de ingressos agora guarda o seu rosto. Use senha forte e, se a plataforma oferecer, chave de acesso. O guia de <a href="/artigos/chave-de-acesso-passkey-como-ativar-e-proteger-sua-conta-de-golpes">passkey para proteger contas de golpes</a> mostra como ativar.</p></div>

    <h2>Erros comuns e o que vem pela frente</h2>

    <p>O erro mais comum é aceitar qualquer termo na pressa de comprar o ingresso e nunca mais olhar a política. Outro é cadastrar o rosto de uma criança sem perguntar se aquilo é obrigatório naquele estádio. Um terceiro é confundir verificação de identidade com vigilância: o clube pode conferir quem você é na catraca, mas usar seu rosto para outras finalidades exige regra própria e aviso claro.</p>

    <p>No Congresso, o projeto de lei de IA (PL 2338/2023) segue em discussão, e as regras para sistemas que identificam pessoas pelo rosto estão entre os pontos sensíveis, tema do guia sobre a <a href="/artigos/lei-de-ia-no-brasil-o-que-muda-para-quem-usa">lei de IA no Brasil</a>. Câmeras com reconhecimento também estão chegando a outros objetos do dia a dia, como mostra o texto sobre <a href="/artigos/oculos-inteligentes-com-ia-no-brasil-o-que-fazem-custam-e-privacidade">óculos inteligentes com IA</a>. Saber o que a lei permite hoje ajuda a cobrar limites amanhã.</p>

    <p>O reconhecimento facial veio para ficar nas arenas grandes, e o torcedor que conhece seus direitos consegue usar a tecnologia sem abrir mão do controle sobre o próprio rosto. Leia a política do seu clube antes do próximo jogo e acompanhe outros temas de regulação e ética na categoria <a href="/categoria/futuro">Futuro</a>.</p>
  `,
  faq: [
    {
      question: "Reconhecimento facial no estádio é obrigatório?",
      answer:
        "Sim, nas arenas com capacidade para mais de 20 mil pessoas. A Lei Geral do Esporte exige identificação biométrica dos espectadores nesses locais e torna o cadastro condição de entrada para quem tem mais de 16 anos. Em estádios menores, o clube pode adotar o sistema por escolha própria, mas sem essa obrigação legal.",
    },
    {
      question: "Criança precisa cadastrar o rosto para entrar no estádio?",
      answer:
        "A lei exige o cadastro biométrico só de quem tem mais de 16 anos. Mesmo assim, vários clubes passaram a cadastrar crianças, e a ANPD pediu que eles justificassem como esse uso atende ao melhor interesse dos menores. Antes de cadastrar um filho, pergunte ao clube se é obrigatório naquele estádio e como os dados são guardados.",
    },
    {
      question: "O clube pode usar meu rosto para outras coisas?",
      answer:
        "O cadastro é feito para cumprir a Lei Geral do Esporte, ou seja, para controlar o acesso à arena. Qualquer outra finalidade, como marketing, precisa de base legal própria na LGPD e de aviso claro ao torcedor. Por isso vale ler a política de privacidade e conferir quais finalidades estão listadas.",
    },
    {
      question: "Posso pedir para o clube apagar minha biometria?",
      answer:
        "Você pode pedir, mas o clube pode manter os dados enquanto durar a obrigação legal, desde que explique o motivo e o prazo. Em todo caso, a LGPD garante o direito de saber quais dados são tratados, para qual finalidade, por quanto tempo e com quem são compartilhados. Faça o pedido por escrito ao encarregado de dados.",
    },
    {
      question: "Como reclamar se o clube não responder meu pedido sobre dados?",
      answer:
        "Guarde o protocolo e os prints do pedido. Se não houver resposta, você pode registrar reclamação no consumidor.gov.br, quando o clube ou a empresa de ingressos estiver cadastrada, e enviar petição à ANPD pelo site do gov.br, que é o caminho próprio para questões de proteção de dados pessoais.",
    },
  ],
};
