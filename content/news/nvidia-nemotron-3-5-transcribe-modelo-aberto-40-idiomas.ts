import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "nvidia-nemotron-3-5-transcribe-modelo-aberto-40-idiomas",
  title: "Nvidia lança o Nemotron 3.5 Transcribe, transcritor aberto em 40 idiomas",
  summary:
    "Modelo gratuito de 30 bilhões de parâmetros transcreve até uma hora de áudio, separa oito vozes e roda em um único chip, segundo a Nvidia e o TechCrunch.",
  author: "Bruno Danello",
  sourceName: "TechCrunch, Nvidia",
  sourceUrl:
    "https://techcrunch.com/2026/10/28/voice-ai-in-vogue-nvidia-releases-new-open-transcription-model/",
  date: "2026-10-28",
  publishedAt: "2026-10-28T13:40:00-03:00",
  imageQuery: "Nvidia headquarters Santa Clara",
  topic: "lancamentos",
  content: `
    <p>A Nvidia lançou nesta quarta-feira, 28 de outubro de 2026, o Nemotron 3.5 Transcribe, um modelo de transcrição de voz em texto com pesos abertos e uso gratuito. A informação é do TechCrunch, que publicou a nota assinada por Julie Bort, e o modelo já aparece na página da Nvidia no Hugging Face com o nome NVIDIA-Nemotron-3.5-Transcribe-30B-A4B. É mais um passo na corrida dos modelos de voz, que ganhou ritmo em outubro.</p>

    <p>Para quem trabalha com reuniões, entrevistas, aulas, podcasts ou atendimento por áudio, a notícia é relevante porque um transcritor aberto, de grande porte e que roda em hardware próprio muda a conta de custo de muitos serviços que hoje cobram por minuto de áudio.</p>

    <h2>O que a Nvidia entregou</h2>
    <p>O Nemotron 3.5 Transcribe tem 30 bilhões de parâmetros e, segundo o TechCrunch, transcreve áudio em até 40 idiomas. Ele também traduz de 31 idiomas para o inglês e do inglês para esses idiomas. Gravações de até uma hora podem ser processadas, e o modelo consegue distinguir até oito pessoas falando, o que é útil para atas de reunião e entrevistas com mais de um participante.</p>

    <table>
      <thead>
        <tr><th>Característica</th><th>O que foi informado</th></tr>
      </thead>
      <tbody>
        <tr><td>Nome</td><td>Nemotron 3.5 Transcribe (30B-A4B)</td></tr>
        <tr><td>Tamanho</td><td>30 bilhões de parâmetros</td></tr>
        <tr><td>Idiomas</td><td>Transcrição em até 40; tradução de e para o inglês em 31</td></tr>
        <tr><td>Duração máxima</td><td>Gravações de até 1 hora</td></tr>
        <tr><td>Vozes distintas</td><td>Até 8 falantes</td></tr>
        <tr><td>Acesso</td><td>Pesos abertos e gratuitos, no Hugging Face</td></tr>
        <tr><td>Limitação</td><td>Só áudio gravado, não funciona em transmissão ao vivo</td></tr>
      </tbody>
    </table>

    <p>A limitação é importante: o modelo trabalha com arquivos gravados, não com áudio em tempo real. O TechCrunch cita isso como o principal ponto fraco. Quem precisa de legenda ao vivo em uma chamada ou de um agente de voz que responde na hora ainda precisa de outras soluções, como as dos modelos de tempo real que vêm surgindo.</p>

    <h2>Onde ele roda</h2>
    <p>Segundo a reportagem, o modelo cabe em um único chip. A Nvidia cita desde o Jetson AGX Thor, controlador usado em robótica, e o DGX Spark, máquina compacta que também equipa notebooks novos, até os chips Blackwell de data center. Para uma empresa, isso quer dizer que a transcrição pode ficar dentro da própria infraestrutura, sem enviar o áudio de clientes para um serviço externo. Em áreas como saúde, jurídico e finanças, onde a privacidade pesa, esse ponto costuma ser decisivo.</p>

    <p>A Nvidia afirma que o modelo supera concorrentes em vários testes, entre eles o Open ASR Leaderboard, ranking de reconhecimento de fala mantido pelo Hugging Face. A reportagem não traz as notas, e a afirmação vem da própria fabricante, sem verificação independente. Vale testar com o seu tipo de áudio, principalmente com sotaques e ruído de fundo, antes de trocar de ferramenta.</p>

    <h2>Conjunto de dados e adaptação ao seu setor</h2>
    <p>No mesmo dia a Nvidia também lançou a versão 2 do Granary, seu conjunto de dados de fala de código aberto. Junto com as ferramentas NeMo Speech, os desenvolvedores podem adaptar modelos ao vocabulário específico de cada setor e idioma, como termos médicos, jurídicos ou técnicos. Segundo o TechCrunch, os usos mais claros são transcrição de reuniões de negócios e transcrição médica, duas das aplicações de IA mais consolidadas no ambiente de trabalho.</p>

    <h2>O contexto: mês agitado para a voz</h2>
    <p>O Nemotron 3.5 Transcribe se junta a outros modelos de voz abertos da Nvidia, como o Parakeet, de 1,1 bilhão de parâmetros, menor e mais leve. A reportagem lembra que, em outubro, a Mistral lançou o Voxtral 3, a ElevenLabs apresentou o Realtime para agentes de voz e a Salesforce soltou o Launa-Omni. Já registramos movimentos parecidos aqui, como o <a href="/noticias/elevenlabs-lanca-eleven-realtime-agentes-de-voz">Eleven Realtime da ElevenLabs</a> e a <a href="/noticias/microsoft-lanca-voz-ia-tempo-real-transcricao">voz de IA em tempo real e transcrição da Microsoft</a>.</p>

    <h2>Por que isso importa para você</h2>
    <p>Transcrição virou serviço básico, e ferramentas abertas pressionam os preços para baixo. Se você faz atas de reunião, legendas, resumos de aula ou transcrição de entrevistas para clientes, o custo por hora de áudio tende a cair e a qualidade tende a subir. Para freelancers, a consequência é dupla: o trabalho puramente braçal de digitar áudio perde valor, mas sobra espaço para quem entrega revisão, formatação, resumo e organização do conteúdo.</p>
    <p>Para pequenas empresas e profissionais autônomos, o efeito prático costuma aparecer em duas frentes. A primeira é o preço das ferramentas prontas, que dependem de modelos como esse por baixo e tendem a repassar a economia, ou a perder clientes para quem repassar. A segunda é a possibilidade de montar um fluxo próprio: receber o arquivo de áudio, transcrever, separar quem falou o quê, resumir com outro modelo e entregar o resultado pronto ao cliente. Quem aprende a montar esse tipo de esteira cedo ganha vantagem competitiva, mesmo sem ser programador, usando plataformas de automação que já conectam esses passos.</p>
    <p>Alguns cuidados antes de apostar no modelo:</p>
    <ul>
      <li>Teste com áudio real em português, já que a reportagem confirma 40 idiomas, mas não detalha a qualidade em cada um.</li>
      <li>Lembre que um modelo de 30 bilhões de parâmetros exige uma máquina potente ou um serviço de nuvem que o hospede.</li>
      <li>Verifique a licença na página do modelo antes de usar de forma comercial, pois a reportagem fala apenas em pesos abertos e gratuitos.</li>
      <li>Para ao vivo, continue usando soluções de tempo real, porque este modelo só processa gravações.</li>
    </ul>
    <p>Quer ver o que já funciona hoje sem montar nada? Veja o guia das <a href="/artigos/melhores-ias-para-transcrever-audio-e-video-em-portugues">melhores IAs para transcrever áudio e vídeo em português</a>, o passo a passo de <a href="/artigos/ia-para-reunioes-transcricao-resumo-ata-automatica">IA para reuniões, com transcrição, resumo e ata automática</a> e a ideia de <a href="/artigos/como-ganhar-dinheiro-com-transcricao-e-legendagem-usando-ia">ganhar dinheiro com transcrição e legendagem usando IA</a>.</p>
  `,
};
