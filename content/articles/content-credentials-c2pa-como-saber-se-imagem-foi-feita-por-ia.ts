import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "content-credentials-c2pa-como-saber-se-imagem-foi-feita-por-ia",
  title: "Content Credentials (C2PA): como saber se a imagem é de IA",
  seoTitle: "Content Credentials C2PA: a imagem é de IA?",
  excerpt:
    "Content Credentials (C2PA) é o selo que registra a origem de uma imagem. Veja como funciona, onde conferir e por que ele ajuda, mas não resolve sozinho.",
  metaDescription:
    "Content Credentials (C2PA) mostra a origem e as edições de uma imagem. Entenda como conferir, o que o selo não garante e o que fazer quando ele não aparece.",
  category: "futuro",
  articleSubcategory: "tecnologia-emergente",
  date: "2026-10-12",
  readTime: 6,
  imageQuery: "magnifying glass photo authenticity",
  seed: 211,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Content Credentials é um padrão aberto da coalizão C2PA que funciona como um rótulo nutricional do conteúdo: mostra a origem e as edições de uma imagem.",
    "A presença do selo ajuda a confiar, mas a ausência não prova que a imagem é falsa, porque muita plataforma e muito arquivo ainda não carregam essa informação.",
    "Na prática, combine o selo com checagem de fonte, busca reversa e bom senso, principalmente em época de eleição e golpes com deepfake.",
  ],
  content: `
    <p>Content Credentials é o nome do padrão técnico, criado pela coalizão C2PA, que anexa a uma imagem, vídeo ou áudio um registro de onde ele veio e de quais edições sofreu. Segundo o <a href="https://c2pa.org/" rel="noopener noreferrer" target="_blank">site da C2PA</a> (verificado em 12/10/2026), funciona como um rótulo nutricional do conteúdo, que qualquer pessoa pode consultar para saber o histórico dele.</p>
    <p>Isso importa porque imagem feita por IA já é difícil de distinguir de foto de verdade. Neste guia você entende como o selo funciona, como conferir uma imagem, o que ele não garante e quais hábitos de checagem continuam necessários quando o selo não aparece.</p>

    <h2>O que é a C2PA e o que são Content Credentials?</h2>
    <p>C2PA significa Coalition for Content Provenance and Authenticity, uma coalizão que oferece um padrão aberto para que editores, criadores e consumidores identifiquem a origem e as edições de conteúdos digitais. Content Credentials é o nome do selo que o consumidor vê. A ideia é parecida com a tabela nutricional de um alimento: você não precisa confiar na embalagem, pode ler o que há dentro.</p>
    <p>Em vez de tentar adivinhar se uma imagem é falsa olhando para os dedos da mão ou o fundo borrado, o padrão inverte o problema. Quem cria ou edita o conteúdo registra o que foi feito, e a ferramenta de leitura mostra esse histórico. Quando uma ferramenta de IA generativa participa do padrão, ela pode registrar que a imagem foi gerada por IA.</p>

    <h2>Como o registro funciona na prática</h2>
    <p>O registro viaja junto com o arquivo e informa, em linhas gerais, quem criou, com qual ferramenta, e que alterações vieram depois. Se alguém recorta a foto, ajusta cor ou usa IA para trocar o fundo, a cadeia de edições pode ser acrescentada. Quem abre depois consegue ver a trilha completa.</p>
    <p>O padrão depende de colaboração: o criador, o programa de edição e a plataforma de publicação precisam suportar a leitura e a gravação. Por isso, o selo aparece em alguns lugares e simplesmente não existe em outros. Ele é uma camada a mais de confiança, não uma barreira mágica contra falsificação.</p>
    <h3>Onde conferir uma imagem</h3>
    <ol>
      <li>Procure um ícone de informações ou do selo de credenciais no canto da imagem, quando a plataforma o mostra.</li>
      <li>Baixe o arquivo original, se possível, em vez de usar uma captura de tela.</li>
      <li>Use uma ferramenta de verificação que leia o padrão. A própria página da C2PA é o ponto de partida para encontrar as ferramentas disponíveis.</li>
      <li>Se o selo mostrar edição com IA, trate a imagem como ilustração, não como registro de um fato.</li>
    </ol>

    <h2>O que o selo não garante</h2>
    <p>Esse é o ponto mais mal entendido. Presença de credenciais indica que há um histórico registrado, mas não prova que o fato retratado é verdadeiro. Uma foto real pode ser usada em contexto falso: a imagem de uma enchente antiga publicada como se fosse de hoje continua autêntica no pixel e enganosa na legenda.</p>
    <p>Do outro lado, ausência de credenciais não significa falsificação. Capturas de tela, reenvios por aplicativo de mensagem e arquivos recomprimidos podem perder o registro. Por isso, sem selo, o correto é tratar a imagem como não verificada, e não como mentira.</p>
    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Nunca decida que algo é falso só porque o selo está ausente, nem que é verdadeiro só porque ele está presente. O selo é um indício, e a checagem de contexto continua sendo sua.</p></div>

    <h2>Por que isso importa para o Brasil</h2>
    <p>A Agência Nacional de Proteção de Dados (ANPD) lista em seu <a href="https://www.gov.br/anpd/pt-br" rel="noopener noreferrer" target="_blank">portal</a> o Radar Tecnológico nº 6, dedicado a deepfakes, o que mostra que o tema entrou na pauta regulatória. Em ano de eleição, o assunto fica ainda mais sensível, e o <a href="/noticias/deepfakes-eleicoes-2026-vigia-lupa-tse">caso das deepfakes nas eleições de 2026</a> reforça por que ter formas de verificar origem é útil.</p>
    <p>Para entender o contexto legal, veja o texto sobre a <a href="/artigos/lei-de-ia-no-brasil-o-que-muda-para-quem-usa">lei de IA no Brasil</a> e o <a href="/artigos/plano-brasileiro-de-ia-pbia-o-que-muda-para-voce">Plano Brasileiro de IA</a>. Já para se proteger no dia a dia, o guia sobre <a href="/artigos/deepfakes-ia-identificar-conteudo-falso-proteger-reputacao">como identificar deepfakes e proteger sua reputação</a> traz o passo a passo complementar.</p>

    <h2>Checklist de verificação em 5 minutos</h2>
    <p>Você não precisa virar perito. Quando uma imagem chamar atenção ou pedir dinheiro, urgência ou compartilhamento, rode esta lista antes de repassar.</p>
    <ul class="checklist">
      <li>Há selo de Content Credentials ou outra indicação de origem? Leia o que ele diz.</li>
      <li>Quem publicou primeiro? Procure o perfil ou veículo original.</li>
      <li>A legenda bate com a data e o local? Busque a imagem em ferramentas de busca reversa.</li>
      <li>Outras fontes confiáveis noticiaram o mesmo fato?</li>
      <li>Tem detalhe estranho: texto ilegível, mãos, sombras, reflexos?</li>
      <li>O conteúdo quer que você aja com pressa, por exemplo transferir dinheiro?</li>
    </ul>
    <p>Para pedir ajuda a um assistente nessa análise, descreva a imagem e peça perguntas de checagem, sem tratar a resposta como sentença. O guia de <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a> explica por que a máquina também erra.</p>
    <pre><code>Vou descrever uma imagem que recebi no WhatsApp: [descrição]. Liste 6 perguntas de checagem que eu devo fazer antes de compartilhar, em ordem de prioridade, e diga quais sinais seriam suspeitos.</code></pre>

    <h2>E se você cria imagens com IA?</h2>
    <p>Se você produz arte ou foto com IA para clientes, ser transparente ajuda a sua reputação. Quando possível, use ferramentas que gravem as credenciais e avise o cliente de que a peça foi gerada ou editada com IA. Isso conversa com o tema de <a href="/artigos/ia-e-direitos-autorais-o-que-criadores-precisam-saber">direitos autorais para criadores</a> e com a rotina de quem <a href="/artigos/como-vender-artes-e-fotos-criadas-com-ia-generativa">vende artes criadas com IA</a>.</p>
    <p>Quem trabalha com loja virtual também deve ter cuidado: fotos de produto geradas por IA precisam representar o item real. O guia sobre <a href="/artigos/fotos-de-produto-para-vender-online-com-ia">fotos de produto com IA</a> mostra os limites, e o de <a href="/artigos/como-criar-imagens-com-ia-guia-passo-a-passo">criar imagens com IA</a> ajuda a começar.</p>

    <h2>Como empresas e criadores podem se preparar</h2>
    <p>Se você publica imagens em nome de uma empresa, comece pelo básico: guarde o arquivo original, registre quem produziu e com quais ferramentas, e mantenha uma política interna dizendo quando a IA pode ser usada. Esse cuidado vale mesmo antes de qualquer selo, porque em uma crise de reputação você precisará provar de onde a imagem veio.</p>
    <p>Quando as ferramentas que você usa passarem a gravar credenciais, ative a opção e preserve o arquivo com o registro, evitando exportar de novo por apps que apagam os metadados. Para uma loja, isso protege a confiança do cliente. Para uma agência, é um diferencial de transparência na hora de entregar o trabalho.</p>
    <p>Para quem consome conteúdo, a postura certa é a de dúvida com método: leia o selo quando existir, confira a fonte quando não existir e adie o compartilhamento quando a imagem tentar provocar raiva ou pressa. Boa parte dos golpes e das campanhas de desinformação depende justamente de você repassar antes de checar.</p>

    <h2>Erros comuns</h2>
    <ul class="checklist">
      <li>Tratar o selo como certificado de verdade do fato.</li>
      <li>Tratar a falta do selo como prova de fraude.</li>
      <li>Verificar uma captura de tela, que quase sempre perde o registro.</li>
      <li>Compartilhar primeiro e checar depois.</li>
      <li>Esquecer de <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">privacidade</a> ao enviar fotos de pessoas para ferramentas de análise.</li>
    </ul>

    <p>Daqui para a frente, a pergunta sobre uma imagem deixa de ser "parece real?" e vira "o que sabemos sobre a origem dela?". Acostume-se a ler credenciais quando existirem e a duvidar com método quando não existirem. Para entender como a máquina enxerga e gera imagens, veja <a href="/artigos/ia-multimodal-o-que-muda-quando-maquina-ve-ouve-fala">IA multimodal</a> e acompanhe a categoria <a href="/categoria/futuro">Futuro da IA</a>.</p>
  `,
  faq: [
    {
      question: "O que é C2PA?",
      answer:
        "C2PA é a Coalition for Content Provenance and Authenticity, uma coalizão que mantém um padrão técnico aberto para registrar a origem e as edições de conteúdos digitais. Ele permite que editores, criadores e leitores consultem o histórico de uma imagem, vídeo ou áudio, algo como um rótulo nutricional do arquivo.",
    },
    {
      question: "Content Credentials prova que uma imagem é verdadeira?",
      answer:
        "Não. O selo mostra o histórico registrado do arquivo, mas não garante que o fato retratado seja verdadeiro nem que a legenda esteja certa. Uma foto autêntica pode ser usada em contexto falso. Use o selo como indício e continue checando fonte, data e local.",
    },
    {
      question: "Se a imagem não tem selo, ela é falsa?",
      answer:
        "Não necessariamente. Muitos arquivos, plataformas e aplicativos ainda não carregam credenciais, e capturas de tela ou reenvios podem apagar o registro. Sem selo, trate a imagem como não verificada e confirme a origem por outros meios, como busca reversa e veículos confiáveis.",
    },
    {
      question: "Como saber se uma imagem foi feita por IA?",
      answer:
        "Combine métodos: procure credenciais de origem, busque o primeiro lugar em que a imagem apareceu, use busca reversa, compare com reportagens confiáveis e observe detalhes estranhos. Nenhum sinal isolado basta, e detectores automáticos também erram, então a decisão deve juntar vários indícios.",
    },
    {
      question: "Quem cria imagens com IA precisa avisar?",
      answer:
        "Em muitos contextos, avisar é a prática mais segura para a reputação e para evitar mal-entendidos com clientes. Em propaganda e política, há regras específicas. Consulte as normas aplicáveis ao seu caso e, na dúvida, informe claramente que a peça foi gerada ou editada com IA.",
    },
  ],
};
