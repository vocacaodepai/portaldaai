import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "trump-amodei-jantar-casa-branca-desaceleracao-ia",
  title: "Trump recebe Amodei na Casa Branca e rejeita pedido de desaceleração da IA",
  author: "Bruno Danello",
  summary:
    "Trump jantou com o CEO da Anthropic e disse que os EUA lideram a China por até 18 meses em IA, dias antes de reunião com outros CEOs do setor na Casa Branca.",
  sourceName: "CNBC",
  sourceUrl: "https://www.cnbc.com/2026/09/28/trump-ai-tech-lunch.html",
  date: "2026-09-29",
  content: `
    <p>O presidente dos Estados Unidos, Donald Trump, recebeu o CEO da Anthropic, Dario Amodei, para um jantar privado na Casa Branca no domingo (27 de setembro), no primeiro encontro individual entre os dois. Segundo a <a href="https://www.cnbc.com/2026/09/28/trump-ai-tech-lunch.html" target="_blank" rel="noopener noreferrer nofollow">CNBC</a>, o jantar aconteceu poucos dias antes de uma reunião maior nesta terça-feira (29), organizada por Trump e pelo presidente da Câmara dos Deputados, Mike Johnson, com a presença confirmada de nomes como Mark Zuckerberg (Meta), Sundar Pichai (Google), Greg Brockman (OpenAI) e Jensen Huang (Nvidia).</p>

    <p>Em entrevista dada à véspera do jantar, à margem do torneio de golfe Presidents Cup, Trump rejeitou qualquer ideia de reduzir o ritmo de desenvolvimento da IA americana enquanto o país compete com a China. "Estamos cerca de um ano, talvez um ano e meio à frente da China. Não existe ninguém em terceiro lugar. É só nós e a China. Estamos liderando por bastante", disse o presidente, segundo a reportagem do site <a href="https://www.technology.org/2026/09/28/trump-amodei-white-house-dinner-ai-slowdown-china/" target="_blank" rel="noopener noreferrer nofollow">Technology.org</a>. Para ele, qualquer nova regulação "abriria a porta para Pequim assumir a liderança".</p>

    <h2>De farpas públicas a jantar a portas fechadas</h2>
    <p>A relação entre os dois já foi mais tensa. Em fevereiro, Trump criticou publicamente a Anthropic por se recusar a remover salvaguardas de segurança em trabalhos de IA para o Pentágono. No início deste mês, o presidente chegou a debochar do pedido de Amodei por mais controles de segurança em rede social. Amodei, por sua vez, faltou ao jantar de Estado organizado para a visita do presidente chinês Xi Jinping na semana anterior, por conflito de agenda, e Trump o convidou pessoalmente para o encontro de domingo.</p>
    <p>O convite acontece duas semanas depois de Amodei publicar o ensaio "We Must Pace the Frontier" (algo como "Precisamos regular o ritmo da fronteira"), no qual defendeu que as empresas de IA deveriam desacelerar de propósito o avanço de capacidade dos modelos para dar tempo a testes de segurança independentes acompanharem o progresso. A proposta de Amodei tem três frentes: avaliadores externos com acesso contínuo aos modelos de fronteira, padrões de segurança compartilhados entre as principais empresas de países democráticos, e coordenação internacional mais ampla. A Anthropic já cumpriu a primeira frente por conta própria.</p>

    <div class="callout-box callout-warn">
      <span class="callout-label">O pedido de Amodei ganhou apoio rápido</span>
      <p>Horas depois do ensaio, Sam Altman, da OpenAI, declarou concordar com a ideia de "regular o ritmo da fronteira", chamando o tema de assunto recorrente em discussões internas da empresa. Elon Musk respondeu apenas "Dario está certo". Executivos do Google DeepMind, da Microsoft e da xAI também já pediram desaceleração no desenvolvimento de sistemas mais capazes, mesmo com a Casa Branca resistindo à ideia.</p>
    </div>

    <h2>Por que isso importa para você</h2>
    <p>Essa disputa entre acelerar e desacelerar o desenvolvimento de IA não é só política de bastidor em Washington: ela define, na prática, qual velocidade de lançamento de modelos e recursos você vai continuar vendo nos próximos meses. Se o governo americano seguir priorizando a corrida com a China acima de qualquer pausa voluntária, como Trump deixou claro no jantar, a tendência é de lançamentos ainda mais frequentes de novos modelos das grandes empresas americanas, o que também aumenta a chance de falhas de segurança chegarem ao mercado antes de serem plenamente testadas, como já vimos em <a href="/noticias/agentes-openai-15-incidentes-seguranca-investigacao">incidentes recentes de agentes da OpenAI</a> e em episódios da própria Anthropic.</p>
    <p>Para quem usa ou revende ferramentas de IA no Brasil, o recado prático é acompanhar de perto os avisos de segurança de cada fornecedor e não tratar "lançou rápido" como sinônimo de "testou o suficiente". Vale a pena reler nosso <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist de como escolher ferramenta de IA com segurança</a> antes de colocar qualquer modelo novo em produção no seu negócio.</p>

    <h2>O que esperar da reunião desta terça-feira</h2>
    <p>O encontro de terça-feira na Casa Branca deve reunir executivos de praticamente todas as grandes empresas de IA americanas em um único evento, com painéis sobre inteligência artificial, energia e espaço, segundo a CNBC. Para líderes como Amodei, que ficou de fora do jantar de Estado com a China na semana anterior, a reunião é também uma chance de reduzir o atrito com o governo Trump em meio a um debate sobre segurança que só cresce: só nas últimas semanas, um ex-pesquisador da Anthropic renunciou publicamente alertando sobre riscos extremos da tecnologia, e outro executivo da própria empresa estimou em mais de 10% a chance de um cenário catastrófico dentro de dez anos.</p>
    <p>Vale lembrar que, apesar do discurso público de cautela, OpenAI e Anthropic lançaram novos modelos na mesma semana em que seus CEOs defenderam publicamente desacelerar o ritmo do setor, o que mostra a distância entre o discurso e a prática competitiva das duas empresas. Já cobrimos como o <a href="/noticias/anthropic-lanca-claude-sonnet-5-5">lançamento do Claude Sonnet 5.5</a> seguiu esse mesmo padrão de corrida acelerada entre concorrentes, apesar dos pedidos de cautela feitos publicamente pelas próprias empresas envolvidas.</p>

    <h2>O padrão que se repete a cada encontro em Washington</h2>
    <p>Esse ciclo entre pedido público de desaceleração e lançamento competitivo de novos modelos não é um episódio isolado: aconteceu com o próprio ensaio de Amodei, se repetiu quando Altman declarou apoio à ideia dias depois de a OpenAI anunciar atualização de modelo, e volta a aparecer agora, com o jantar na Casa Branca antecedendo em poucos dias a reunião com praticamente todos os grandes nomes do setor reunidos num único evento. Para quem acompanha o mercado de IA de fora dos Estados Unidos, o sinal mais consistente não está nas declarações de cautela, mas na cadência real de lançamentos, que segue apertada independentemente do que cada CEO diz em público sobre desacelerar.</p>
  `,
  faq: [
    {
      question: "O que Dario Amodei pediu no ensaio 'We Must Pace the Frontier'?",
      answer: "Amodei defendeu que as empresas de IA desacelerem de propósito o avanço de capacidade dos modelos, com três medidas: avaliadores externos com acesso contínuo aos modelos, padrões de segurança compartilhados entre as principais empresas de países democráticos, e mais coordenação internacional.",
    },
    {
      question: "Trump concordou em desacelerar o desenvolvimento de IA nos EUA?",
      answer: "Não. No jantar e em entrevista anterior, Trump disse que os EUA lideram a China em IA por até um ano e meio e que uma nova regulação daria a liderança a Pequim, rejeitando qualquer ideia de desaceleração voluntária.",
    },
    {
      question: "Quem mais participa da reunião com Trump na Casa Branca?",
      answer: "Além de Dario Amodei, estão confirmados Mark Zuckerberg (Meta), Sundar Pichai (Google), Greg Brockman (OpenAI) e Jensen Huang (Nvidia), em um evento com painéis sobre inteligência artificial, energia e espaço.",
    },
  ],
};
