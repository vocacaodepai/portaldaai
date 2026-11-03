import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "42ai-sai-do-anonimato-62-milhoes-modelo-comportamento-humano",
  title: "42AI sai do anonimato com US$ 62,5 milhões e prevê decisões humanas",
  summary:
    "A startup israelense diz que seu modelo de comportamento prevê como operadores reagem ao mercado. Já atende 10 corretoras, mas levanta dúvidas de privacidade.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/11/02/42ai-comes-out-of-stealth-with-62-5m-and-a-world-model-that-can-predict-human-behavior/",
  date: "2026-11-03",
  publishedAt: "2026-11-03T00:40:00-03:00",
  topic: "negocios",
  imageQuery: "bolsa de valores operadores telas gráficos",
  content: `
    <p>A 42AI, startup de Israel, saiu do modo furtivo na segunda-feira (2 de novembro) anunciando US$ 62,5 milhões em capital semente e um produto que ela chama de "modelo de mundo comportamental". A promessa é estimar a probabilidade de uma pessoa tomar determinada decisão em cada situação. Segundo a <a href="https://techcrunch.com/2026/11/02/42ai-comes-out-of-stealth-with-62-5m-and-a-world-model-that-can-predict-human-behavior/" target="_blank" rel="noopener noreferrer nofollow">TechCrunch</a>, a tecnologia já é usada por 10 grandes corretoras para prever como seus clientes operadores reagem a momentos de volatilidade.</p>

    <h2>De onde veio o dinheiro</h2>
    <p>O detalhe mais curioso do anúncio é a origem do capital. Os US$ 62,5 milhões vieram dos próprios fundadores e do Infinity Group, empresa fundada por Amir Gal-Or, presidente do conselho e cofundador, ao longo de três anos. Ou seja, não é uma rodada tradicional de fundos de risco. A empresa afirma que pretende captar mais dinheiro e não divulgou avaliação. O diretor-executivo é Amit Gal-Or, e o diretor de tecnologia é Ehud Ezra.</p>

    <h2>Como o modelo funciona</h2>
    <p>Segundo a reportagem, o sistema reúne dados que as corretoras já têm: processos de cadastro e identificação do cliente, atendimento, ligações de suporte (tom de voz, sentimento e frequência), transferências de dinheiro, histórico de operações e condições de mercado. Essas observações são convertidas em representações matemáticas de traços de comportamento. Esses traços alimentam um modelo de mundo baseado em transformers, que devolve probabilidades para as decisões possíveis em diferentes cenários. Um modelo de linguagem separado explica, em texto, por que a previsão saiu daquele jeito.</p>
    <p>A empresa diz que passou três anos combinando pesquisa em psicologia, neurociência e genética. O time estudou milhares de pessoas com avaliações psicológicas e cenários de comportamento, e depois somou bases de governo e biobancos com mais de 2 milhões de pessoas. Hoje, os conjuntos de dados dos clientes cobrem cerca de 30 milhões de pessoas. Entre os conselheiros estão especialistas em psicologia e estresse pós-traumático e Dan Shechtman, Nobel de Química de 2011. O treinamento recompensa o modelo por preservar as tendências de fundo de cada pessoa: segundo Ezra, se alguém avesso a risco é simulado como alguém que corre riscos, "o alvo está errado".</p>

    <div class="callout-box">
      <span class="callout-label">Em números</span>
      <p>US$ 62,5 milhões de capital semente, 10 corretoras como clientes, receita na casa dos sete dígitos, 98% de acurácia declarada e F1 entre 0,8 e 0,85 para direção e volume de operações. Todos os números de desempenho são da própria empresa.</p>
    </div>

    <h2>O que a empresa afirma sobre desempenho</h2>
    <p>O número que mais chama atenção é a acurácia de 98%, mas o próprio diretor-executivo explicou que ele mede se o fluxo de operações cai dentro de uma faixa prevista, e não se cada operação individual foi adivinhada. Para direção e volume das operações, ele cita um F1 entre 0,8 e 0,85. As corretoras usam as previsões para gerenciar liquidez, exigências de margem e exposição de hedge. Gal-Or afirmou que uma delas teria ganhado cerca de US$ 30 milhões em valor adicional com hedge dinâmico. A receita é de "sete dígitos", sem cifra exata, e a cobrança é uma taxa fixa ou um percentual do valor que a plataforma ajuda a gerar.</p>
    <p>Nenhum desses resultados foi verificado de forma independente, e a reportagem se baseia nas declarações dos fundadores. O próprio Gal-Or admitiu um "teto natural": o sistema não enxerga tudo o que uma pessoa vive, e a precisão cai quando falta contexto, como o conselho de um amigo ou de um colega antes de uma operação. Ezra acrescentou que o modelo precisa ser treinado com regras e contexto de cada novo setor.</p>

    <h2>Privacidade e o risco de uso contra o cliente</h2>
    <p>É aqui que a notícia fica delicada. A empresa afirma que não precisa de dados que identifiquem pessoas e que "o modelo nunca sabe quem é a pessoa". A reportagem observa, porém, que o sistema parece montar perfis comportamentais individuais a partir da atividade ligada do cliente. Há também um risco apontado: corretoras poderiam usar as previsões para explorar os próprios clientes, por exemplo antecipando erros de operadores amadores. Ezra chamou a preocupação de "válida", e os fundadores citaram regulação, monitoramento e um comitê interno de ética, sem explicar o que impediria um cliente de usar a tecnologia contra quem ela perfila. Gal-Or respondeu: "nós somos a solução para esse problema".</p>
    <p>Esse tipo de debate não é novo. Já mostramos como assistentes e ferramentas de IA coletam dados sensíveis em <a href="/noticias/google-politica-privacidade-gmail-fotos-anuncios-personal-intelligence">Google muda política: Gmail e Fotos podem influenciar anúncios</a>, e como a conexão de IA com dinheiro real levanta riscos próprios em <a href="/noticias/chatgpt-finances-gratis-plaid-privacidade">ChatGPT Finances grátis, com Plaid e questões de privacidade</a>. A diferença aqui é que o alvo não é só entender o usuário, mas prever e antecipar o que ele fará.</p>

    <h2>Para onde a empresa quer ir</h2>
    <p>A 42AI diz estar explorando jogos, prevenção a fraudes e cibersegurança. A ambição de longo prazo é ajudar robôs e agentes de IA a entender pessoas. Isso conversa com uma tendência mais ampla: agentes que agem em nome do usuário precisam de algum modelo de como as pessoas decidem. O tema aparece em nossa cobertura de agentes que compram, negociam e operam contas, como em <a href="/artigos/agentes-de-ia-comprando-por-voce-comercio">agentes de IA comprando por você: o novo comércio</a>.</p>

    <h2>Por que isso importa para você</h2>
    <p>Mesmo que você nunca use uma corretora israelense, a ideia por trás da 42AI chega perto do dia a dia. Bancos, plataformas de investimento, varejistas e aplicativos já tentam prever o que você vai fazer: se vai cancelar uma assinatura, se vai comprar de novo, se vai entrar em pânico e vender um ativo. Com IA, essas previsões ficam mais precisas e mais baratas de produzir.</p>
    <p>Algumas atitudes práticas ajudam. Leia as políticas de privacidade de corretoras e aplicativos financeiros, em especial a parte sobre uso de dados de atendimento e de comportamento, e lembre que a Lei Geral de Proteção de Dados dá a você o direito de saber como seus dados são tratados e de questionar decisões automatizadas. Se você opera na bolsa, tenha regras próprias, como limites de perda e horários para operar, porque quem tem plano é menos previsível para qualquer modelo. E, se você empreende e pensa em usar IA para prever o comportamento dos seus clientes, defina antes o que é aceitável: previsão para atender melhor é uma coisa, previsão para tirar vantagem é outra, e pode virar problema jurídico e de reputação. O <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher ferramenta de IA com segurança</a> traz perguntas úteis antes de contratar qualquer solução desse tipo.</p>

    <h2>O que observar daqui para frente</h2>
    <p>O primeiro ponto é se alguma corretora ou o regulador vai confirmar publicamente o uso e os resultados, já que hoje os números vêm da própria 42AI. O segundo é como os fundadores vão responder à pergunta mais incômoda, a de como evitar o uso predatório da previsão. O terceiro é se a empresa conseguirá levar o modelo a outros setores, onde não há a mesma riqueza de dados que uma corretora possui. Até lá, trate a notícia como um sinal de para onde a IA comportamental caminha, não como prova de que prever pessoas com 98% de precisão seja possível.</p>

    <div class="callout-box">
      <span class="callout-label">Fonte original</span>
      <p>Reportagem da TechCrunch: <a href="https://techcrunch.com/2026/11/02/42ai-comes-out-of-stealth-with-62-5m-and-a-world-model-that-can-predict-human-behavior/" target="_blank" rel="noopener noreferrer nofollow">42AI comes out of stealth with $62.5M and a world model that can predict human behavior</a>.</p>
    </div>
  `,
};
