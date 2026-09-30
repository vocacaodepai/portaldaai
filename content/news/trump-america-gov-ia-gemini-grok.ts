import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "trump-america-gov-ia-gemini-grok",
  title: "Governo dos EUA lança America.gov, portal de serviços com Gemini e Grok",
  summary:
    "Chatbot único reúne cerca de 29 mil sites federais para tarefas como passaporte e Seguro Social, e Trump assinou decreto tornando o portal obrigatório.",
  author: "Bruno Danello",
  sourceName: "FedScoop",
  sourceUrl: "https://fedscoop.com/trump-launches-ai-site-america-gov/",
  date: "2026-09-29",
  content: `
    <p>O governo dos Estados Unidos lançou nesta terça-feira (29) o America.gov, um portal único baseado em chatbot de inteligência artificial para atendimento de serviços federais. Segundo a <a href="https://fedscoop.com/trump-launches-ai-site-america-gov/" rel="noopener noreferrer nofollow">reportagem da FedScoop</a>, a plataforma consolida informações de cerca de 29 mil sites do governo americano e responde perguntas sobre qualquer necessidade ligada a serviços públicos, desde repor um cartão de Seguro Social até reservar vaga em parque nacional.</p>
    <p>O lançamento aconteceu em um evento batizado de "Hello, America", no Andrew W. Mellon Auditorium, em Washington, com a presença do presidente Donald Trump, do vice-presidente JD Vance, de secretários como Pete Hegseth (Defesa), Howard Lutnick (Comércio) e Marco Rubio (Estado), além de nomes da indústria de tecnologia como Jensen Huang (Nvidia), Tom Brown (Anthropic) e Elon Musk. Joe Gebbia, cofundador do Airbnb e hoje diretor de design do governo americano, apresentou os detalhes técnicos do projeto.</p>

    <h2>Como funciona e o que muda com o decreto</h2>
    <p>O America.gov abre direto em uma interface de chat, em que o usuário digita ou fala o que precisa e a ferramenta busca a resposta varrendo o conteúdo dos sites federais em tempo real. Por trás do chatbot estão o Gemini, do Google, e o Grok, da xAI de Elon Musk, uma combinação pouco comum já que as duas empresas normalmente competem por contratos de governo. No mesmo evento, Trump assinou uma ordem executiva determinando que todas as agências federais integrem seus sites ao America.gov "assim que possível", com apoio da GSA (Administração de Serviços Gerais), do escritório nacional de design e do OMB (Escritório de Orçamento da Casa Branca), incluindo verificação de identidade via Login.gov. A previsão é que, até o início de 2027, o portal também permita concluir formulários e solicitações inteiras dentro da própria conversa, sem precisar navegar por outros sites.</p>

    <h2>Por que isso importa para você</h2>
    <p>O caso serve de vitrine de tamanho real para um problema que empresas brasileiras também enfrentam: informação espalhada em dezenas de sistemas diferentes, difícil de achar, que vira motivo comum de reclamação de cliente. O modelo do America.gov (um único ponto de entrada em linguagem natural que varre bases de conteúdo já existentes) é exatamente o tipo de solução que pequenos negócios e órgãos públicos brasileiros também podem copiar em escala menor, sem depender de licitação bilionária: um chatbot que responde consultando o site institucional, o catálogo de produtos ou o manual de atendimento já existente.</p>
    <p>Também chama atenção a decisão de misturar Gemini e Grok num mesmo produto público, o que mostra que, na prática, quem compra tecnologia de IA está cada vez mais escolhendo o modelo por tarefa específica, e não travando com um fornecedor só. Essa lógica de "modelo certo para cada função" é a mesma que orienta empresas que somam ferramentas como <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">um checklist de segurança na hora de escolher qual IA usar</a> em vez de apostar tudo em um único produto.</p>

    <h2>Riscos e o que observar a seguir</h2>
    <p>Colocar dados sensíveis como Seguro Social e passaporte dentro de um assistente de IA reacende a discussão sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">o que se entrega sem perceber ao usar ferramentas de IA</a>, ainda mais em um serviço que promete, a partir de 2027, concluir processos completos por dentro do chat. Do lado da regulação, o movimento contrasta com propostas como o pacote de leis da <a href="/noticias/nyc-council-projetos-lei-regulacao-ia-kill-switch-denuncia">Câmara de Vereadores de Nova York, que quer exigir "kill switch" obrigatório em sistemas de IA</a>: enquanto cidades discutem travas de segurança, o governo federal já opera um chatbot de IA como porta de entrada para dados pessoais de milhões de cidadãos. Vale acompanhar se o mesmo modelo de "assistente único para tudo" aparece por aqui, como já testou o Tribunal Superior Eleitoral com o <a href="/noticias/tse-lanca-chatvote-assistente-ia-eleicoes-2026">ChatVote para dúvidas sobre as eleições de 2026</a>.</p>

    <div class="callout-box">
      <span class="callout-label">Ponto de atenção</span>
      Concentrar identidade, passaporte e Seguro Social em um único chatbot cria também um alvo único e valioso para golpistas: sites falsos imitando o America.gov já são esperados por especialistas em segurança digital, um padrão que também aparece por aqui sempre que um serviço público ganha popularidade, como já aconteceu com apps de banco e portais de benefício do INSS.
    </div>

    <h2>Uma disputa incomum entre concorrentes</h2>
    <p>Chama atenção o fato de Google e xAI, normalmente rivais na disputa por contratos públicos e por espaço no mercado de assistentes de IA, dividirem a mesma infraestrutura em um projeto do porte do America.gov. Isso indica que, para tarefas de atendimento em larga escala, o critério de escolha deixou de ser "qual empresa é parceira" e passou a ser "qual modelo resolve melhor essa tarefa específica", com Gemini e Grok provavelmente dividindo funções diferentes dentro do mesmo fluxo de atendimento, como responder perguntas gerais de um lado e processar formulários mais estruturados de outro.</p>
    <p>O caso também ilustra até onde chega hoje a confiança de um governo em fornecedores privados de IA para operar infraestrutura crítica de atendimento ao cidadão. Diferente de sistemas anteriores, mantidos internamente por cada agência, o America.gov depende diretamente da disponibilidade e da qualidade dos modelos de duas empresas privadas, o que levanta a pergunta óbvia sobre o que acontece com o atendimento público se um dos dois provedores tiver uma instabilidade, um aumento de preço ou uma mudança de política de uso justamente quando milhões de pessoas dependem do portal para renovar um documento ou agendar um serviço essencial.</p>
    <p>Para quem acompanha o setor público brasileiro, o lançamento também serve de referência de prazo: mesmo um governo com orçamento bilionário e acesso direto aos executivos das principais empresas de IA levou meses de preparação até colocar o portal no ar, e ainda assim escolheu abrir com um conjunto limitado de serviços antes de prometer a etapa mais ambiciosa, a de concluir processos inteiros pelo chat, só para 2027. É um lembrete de que substituir um site institucional por um assistente de IA funcional é um projeto de médio prazo, não uma troca de fim de semana, mesmo quando a tecnologia por trás já está pronta e disponível no mercado.</p>
  `,
  faq: [
    {
      question: "O que é o America.gov?",
      answer: "É um portal único de serviços do governo dos Estados Unidos, com interface de chatbot de inteligência artificial, que reúne informações de cerca de 29 mil sites federais para tarefas como emitir passaporte, repor Seguro Social ou reservar parque nacional.",
    },
    {
      question: "Quais modelos de IA o America.gov usa?",
      answer: "O portal usa o Gemini, do Google, e o Grok, da xAI de Elon Musk, combinados no mesmo chatbot.",
    },
    {
      question: "O que muda com o decreto assinado por Trump?",
      answer: "A ordem executiva determina que todas as agências federais americanas integrem seus sites ao America.gov, com verificação de identidade via Login.gov, e prevê que até o início de 2027 o portal permita concluir formulários e solicitações completas dentro do próprio chat.",
    },
  ],
};
