import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "voz-ia-sem-momento-chatgpt-polyai-otter-humanx",
  title: "PolyAI e Otter dizem que a voz com IA ainda não teve seu momento ChatGPT",
  summary:
    "No HumanX, executivos da PolyAI e da Otter apontaram os gargalos da voz com IA: reconhecimento de fala, raciocínio rápido, voz expressiva e aviso ao usuário.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/10/11/these-execs-think-voice-ai-hasnt-reached-its-chatgpt-moment-yet/",
  date: "2026-10-11",
  publishedAt: "2026-10-11T11:35:00-03:00",
  imageQuery: "Otter.ai logo",
  topic: "negocios",
  content: `
    <p>Dois executivos de empresas de voz com inteligência artificial afirmaram que o setor ainda não viveu o seu "momento ChatGPT", segundo reportagem de Ivan Mehta publicada pelo <a href="https://techcrunch.com/2026/10/11/these-execs-think-voice-ai-hasnt-reached-its-chatgpt-moment-yet/" rel="noopener noreferrer nofollow">TechCrunch</a> em 11 de outubro de 2026. Shawn Wen, diretor de tecnologia da PolyAI, empresa de voz para atendimento corporativo, e Alex Gay, diretor de marketing da Otter, conhecida pelas transcrições de reuniões, falaram no palco do HumanX, conferência realizada em setembro de 2026.</p>
    <p>A reportagem abre com um contraste: investidores colocam bilhões de dólares em startups de voz, de fabricantes de modelos a serviços de atendimento, anotadores de reunião e ferramentas de ditado, e novos modelos e ferramentas costumam prometer conversas quase humanas. Para os dois executivos, a realidade ainda não acompanha o discurso. Este texto resume o que cada um disse e acrescenta, em trechos identificados como análise própria, o que isso pode significar para quem trabalha com atendimento, reuniões e conteúdo em áudio no Brasil.</p>

    <h2>O que disse o CTO da PolyAI</h2>
    <p>Shawn Wen reconheceu um avanço técnico importante: segundo ele, o setor chegou ao marco de desenvolver modelos full-duplex, isto é, modelos capazes de falar enquanto escutam, como acontece numa conversa entre pessoas. Mesmo assim, ele sustenta que a voz com IA ainda não teve o seu momento ChatGPT, o ponto em que a tecnologia deixa de ser curiosidade e vira uso de massa.</p>
    <p>O próximo desafio apontado por ele é o raciocínio rápido. Para a conversa soar natural, o modelo precisa buscar respostas e raciocinar sem pausas incômodas. Wen também falou de atendimento ao cliente: o agente de voz não deve soar robótico e precisa passar ao cliente a confiança de que o problema pode ser resolvido. Ele espera que quem liga participe nas duas ou três primeiras trocas, ganhe confiança e, se o problema for resolvido, deixe de querer falar com uma pessoa.</p>
    <p>Outro gargalo citado foi o reconhecimento automático de fala (ASR, na sigla em inglês). Segundo Wen, esses modelos frequentemente deixam passar palavras-chave importantes, o que enfraquece a captura do contexto completo da conversa. Ele disse ainda que, em ambientes corporativos, quem liga deve ser avisado de forma clara de que está falando com uma IA.</p>

    <h2>O que disse o CMO da Otter</h2>
    <p>Alex Gay descreveu a transcrição como base, e não como fim. Segundo ele, identificar quem está falando, captar a intenção e transformar a conversa em texto enriquecido com o conhecimento da organização são passos rumo à automação. A Otter, afirmou, nunca teve a transcrição como objetivo final, e sim como alicerce para recursos de produtividade.</p>
    <p>Gay também chamou atenção para o efeito dominó dos erros: uma transcrição errada se espalha por todas as ações seguintes, e ações erradas corroem a confiança na plataforma. Por isso, melhorar o modelo de reconhecimento de fala é, nas palavras da reportagem, crítico. Ele indicou ainda que os idiomas são uma área em que os modelos de voz precisam evoluir.</p>
    <p>A empresa também trabalha em gêmeos digitais, versões de uma pessoa que poderiam representá-la em reuniões. Para Gay, eles precisam de vozes emocionalmente expressivas para ter utilidade; sem isso, um avatar vira "apenas um chatbot de perguntas e respostas". Em transparência, ele disse que a Otter quer avisar todos os participantes quando uma reunião está sendo gravada, mesmo que o robô da empresa não esteja presente.</p>
    <table>
      <thead>
        <tr><th>Tema</th><th>O que foi dito</th><th>Quem disse</th></tr>
      </thead>
      <tbody>
        <tr><td>Estado atual</td><td>Já existem modelos full-duplex, mas falta o momento ChatGPT</td><td>Shawn Wen, PolyAI</td></tr>
        <tr><td>Próximo desafio</td><td>Raciocínio rápido para conversas naturais</td><td>Shawn Wen, PolyAI</td></tr>
        <tr><td>Reconhecimento de fala</td><td>Palavras-chave importantes se perdem; erros se propagam</td><td>Wen e Alex Gay</td></tr>
        <tr><td>Voz expressiva</td><td>Gêmeos digitais precisam de emoção na voz</td><td>Alex Gay, Otter</td></tr>
        <tr><td>Transparência</td><td>Avisar quem liga que é IA e avisar que a reunião é gravada</td><td>Wen e Gay</td></tr>
      </tbody>
    </table>
    <p>Vale registrar o que a reportagem não traz: não há valores de mercado, métricas de produto nem números de adoção, além da menção a "bilhões de dólares" investidos no setor e da regra prática das duas ou três primeiras trocas da conversa. As falas são de executivos de empresas que vendem esse tipo de tecnologia, o que pede leitura cuidadosa.</p>

    <h2>O que isso muda para quem atende clientes</h2>
    <p>Como análise própria, e não como fato reportado, o recado mais útil para pequenos negócios brasileiros é o do tempo de adaptação. Se a própria PolyAI diz que o cliente precisa de duas ou três trocas para ganhar confiança, um atendimento por voz mal configurado perde a pessoa logo no início. Quem pensa em automatizar ligações ou mensagens de voz deve testar primeiro com poucos casos, medir quantas conversas terminam resolvidas e deixar sempre um caminho fácil para falar com uma pessoa.</p>
    <p>Quem já automatiza o atendimento por texto pode começar pelo básico. O guia sobre <a href="/artigos/como-ia-esta-mudando-atendimento-ao-cliente">como a IA está mudando o atendimento ao cliente</a> mostra o panorama, e o passo a passo de <a href="/artigos/como-automatizar-atendimento-no-whatsapp-com-ia">como automatizar o atendimento no WhatsApp com IA</a> ajuda a testar o conceito antes de investir em voz.</p>

    <h2>Por que isso importa para você que usa reuniões e áudio</h2>
    <p>O alerta de Alex Gay sobre erros de transcrição vale para qualquer pessoa que resume reuniões com IA: um nome ou um valor transcrito errado vira tarefa errada e, depois, decisão errada. Uma prática simples, também como análise própria, é conferir números, datas e nomes antes de enviar o resumo para o time ou para o cliente, e avisar os participantes quando houver gravação.</p>
    <p>Para quem vive de áudio, o tema se conecta com o mercado de serviços. O texto sobre <a href="/artigos/como-ganhar-dinheiro-com-transcricao-e-legendagem-usando-ia">como ganhar dinheiro com transcrição e legendagem usando IA</a> mostra que a revisão humana continua sendo o diferencial de quem cobra por esse trabalho, e o guia do <a href="/artigos/assistente-de-voz-com-ia-como-usar-no-dia-a-dia">assistente de voz com IA no dia a dia</a> reúne usos mais simples para começar.</p>

    <h2>Voz sintética, avisos e golpes</h2>
    <p>O pedido de transparência dos dois executivos tem um lado de segurança. À medida que as vozes artificiais ficam mais naturais, aumenta a dificuldade de distinguir uma pessoa de uma máquina, e isso já aparece em fraudes. Cobrimos um caso de <a href="/noticias/golpe-voz-ia-clonada-pix-compra-veiculo-familiar">golpe com voz clonada por IA envolvendo Pix</a>, e a evolução das ferramentas de voz aparece em <a href="/noticias/elevenlabs-lanca-v4-clonagem-voz-90-idiomas">o lançamento da versão 4 do ElevenLabs com clonagem de voz</a>. Avisar quando há IA na linha, como propõem Wen e Gay, é uma medida que protege o cliente e a reputação da empresa.</p>
    <p>Para quem desenvolve ou contrata soluções, a recomendação prática, de novo como análise, é incluir desde o início uma frase de abertura que identifique o atendente como IA, registrar quando a conversa é gravada e manter um canal humano de escalonamento.</p>

    <h2>O que observar a seguir</h2>
    <p>Três pontos merecem acompanhamento. O primeiro é se o raciocínio rápido, apontado como o próximo desafio, chega aos produtos comerciais, já que ele determina se as conversas ficam naturais. O segundo é a qualidade do reconhecimento de fala em português brasileiro, tema que a reportagem toca ao mencionar idiomas, mas sem detalhar o caso do Brasil. O terceiro é a evolução dos concorrentes: o lançamento recente de <a href="/noticias/microsoft-lanca-voz-ia-tempo-real-transcricao">uma voz de IA em tempo real com transcrição pela Microsoft</a> mostra que as grandes empresas também disputam esse espaço.</p>
    <p>Por ora, o fato confirmado é o que foi dito no palco do HumanX e relatado pelo TechCrunch: dois executivos do setor consideram que a voz com IA avançou, mas ainda depende de melhor reconhecimento de fala, raciocínio mais rápido, vozes expressivas e avisos claros ao usuário antes de ter um uso de massa.</p>
  `,
  faq: [
    {
      question: "O que significa dizer que a voz com IA ainda não teve seu momento ChatGPT?",
      answer:
        "Segundo o CTO da PolyAI, Shawn Wen, a tecnologia já tem modelos full-duplex, mas ainda não chegou ao ponto de adoção em massa que o ChatGPT representou para o texto.",
    },
    {
      question: "Quais são os principais gargalos citados?",
      answer:
        "Reconhecimento de fala que perde palavras-chave, raciocínio rápido para conversas naturais, vozes expressivas para avatares e aviso claro de que o usuário fala com uma IA ou está sendo gravado.",
    },
    {
      question: "A reportagem traz números de mercado?",
      answer:
        "Não. Além da menção a bilhões de dólares investidos em startups de voz, não há valores, métricas de produto ou dados de adoção.",
    },
  ],
};
