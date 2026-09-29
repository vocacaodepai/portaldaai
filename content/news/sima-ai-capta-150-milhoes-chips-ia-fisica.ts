import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "sima-ai-capta-150-milhoes-chips-ia-fisica",
  title: "SiMa.ai capta US$ 150 milhões para chips de IA em robôs e drones",
  summary:
    "A startup, fundada pelo ex-COO da Groq, chega a US$ 1,45 bilhão de valor em rodada Série C liderada pela Fidelity, apostando em chips mais baratos que os da Nvidia.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/09/28/physical-ai-chip-developer-sima-ai-hits-1-45b-valuation/",
  date: "2026-09-28",
  content: `
    <p>A SiMa.ai, startup americana que desenvolve chips para rodar inteligência artificial diretamente dentro de robôs, drones e câmeras, fechou em 28 de setembro uma rodada Série C de US$ 150 milhões, elevando sua avaliação para US$ 1,45 bilhão. A rodada foi liderada pela Fidelity Management & Research Company e pela Amplify, com participação de fundos como Alter Venture Partners, Dell Technologies Capital, Maverick Capital, Point72, StepStone Group e novos investidores, incluindo AllianceBernstein, Baron Capital, J.P. Morgan e o estado americano de Michigan, segundo reportagem do <a href="https://techcrunch.com/2026/09/28/physical-ai-chip-developer-sima-ai-hits-1-45b-valuation/" target="_blank" rel="noopener noreferrer nofollow">TechCrunch</a>.</p>

    <p>Com a nova rodada, o total captado pela empresa desde a fundação chega a US$ 500 milhões. A SiMa.ai foi fundada em 2018 por Krishna Rangasayee, que antes ocupou o cargo de diretor de operações (COO) da fabricante de chips Groq, uma das concorrentes mais conhecidas da Nvidia no mercado de processadores para inteligência artificial.</p>

    <h2>O que é "IA física" e por que ela precisa de chip próprio</h2>
    <p>A categoria em que a SiMa.ai atua, chamada de "IA física" (physical AI), reúne máquinas que precisam sentir o ambiente ao redor e agir em tempo real sem depender de uma conexão constante com a nuvem: robôs industriais, drones autônomos, câmeras de segurança inteligentes e, cada vez mais, robôs humanoides. Diferente de um data center, onde há energia e espaço praticamente ilimitados para rodar modelos grandes, esses dispositivos operam com bateria limitada e exigem resposta imediata, então rodar o modelo de IA localmente, no próprio chip do dispositivo, em vez de mandar dado para um servidor remoto e esperar resposta, é essencial tanto para velocidade quanto para economia de energia.</p>

    <p>É nesse nicho que a SiMa.ai se posiciona como alternativa às GPUs da Nvidia, oferecendo, segundo a empresa, latência menor e chips mais baratos para esse tipo de aplicação específica. O mercado de IA física tem atraído investimento pesado em 2026: empresas como a <a href="/noticias/tekever-capta-580-milhoes-drones-ia-avaliacao-6-4-bilhoes">Tekever, que capta rodadas bilionárias com drones movidos a IA</a>, e a <a href="/noticias/unix-ai-expande-globalmente-prepara-ipo-robos-humanoides">Unix AI, que se prepara para um IPO no setor de robôs humanoides</a>, mostram que o interesse de investidores vai muito além dos grandes modelos de linguagem que dominam as manchetes.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para quem empreende ou presta serviço fora do universo de chatbots e assistentes de texto, esse tipo de rodada de investimento é um sinal de para onde o dinheiro de IA está indo além do software: hardware especializado para rodar modelos fora da nuvem, em dispositivos físicos, é uma aposta cada vez mais concreta. Isso abre espaço prático para negócios que integram sensores, câmeras e pequenos robôs com inteligência embarcada, sem depender de internet estável ou de custo recorrente de nuvem para cada operação.</p>

    <p>Também é um lembrete de que o mercado de IA não se resume à disputa entre <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude e Gemini</a>. Boa parte do investimento e da inovação real está acontecendo em infraestrutura invisível ao usuário final, como chips, sensores e sistemas embarcados, que sustentam aplicações de IA em fábricas, veículos autônomos e equipamentos de campo. Quem acompanha esse mercado de perto tende a identificar oportunidades de negócio antes que elas cheguem ao consumidor comum.</p>

    <h2>O que observar daqui para frente</h2>
    <p>Vale acompanhar se a SiMa.ai vai conseguir avançar contra concorrentes maiores e mais estabelecidos no mercado de chips para IA embarcada, incluindo linhas específicas da própria Nvidia voltadas a robótica e veículos autônomos. A empresa também disse à imprensa que pretende usar parte do dinheiro para expandir a atuação em humanoides, automotivo e drones, três setores que já vêm crescendo em ritmo acelerado, com players como a <a href="/noticias/china-desacelera-ipos-robos-humanoides-unitree">chinesa Unitree no segmento de robôs humanoides</a> e fabricantes de drones de uso comercial e militar disputando espaço global. Para quem investe ou presta consultoria em tecnologia, esse tipo de rodada costuma ser um bom termômetro de qual será o próximo ciclo de hype depois dos grandes modelos de linguagem.</p>
  `,
  faq: [
    {
      question: "O que a SiMa.ai faz?",
      answer:
        "A empresa desenvolve chips e software que permitem que robôs, drones, câmeras e outros dispositivos rodem inteligência artificial diretamente no próprio equipamento, sem depender de conexão constante com a nuvem.",
    },
    {
      question: "Quanto a SiMa.ai vale agora?",
      answer:
        "Após a rodada Série C de US$ 150 milhões, anunciada em 28 de setembro de 2026 e liderada pela Fidelity e pela Amplify, a empresa passou a valer US$ 1,45 bilhão, com um total de US$ 500 milhões captados desde a fundação em 2018.",
    },
    {
      question: "Como a SiMa.ai se diferencia da Nvidia?",
      answer:
        "A empresa posiciona seus chips como opção mais barata e de menor latência para aplicações específicas de IA embarcada, como robôs e drones, em vez de competir diretamente com as GPUs de propósito geral usadas para treinar grandes modelos em data centers, que é o principal foco da Nvidia.",
    },
  ],
};
