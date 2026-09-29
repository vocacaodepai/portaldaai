import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "america-gov-chatbot-trump-gemini-grok",
  title: "EUA lançam America.gov, chatbot de IA com Gemini e Grok",
  summary:
    "Trump assinou ordem executiva criando o America.gov, portal único com IA generativa para serviços federais, usando modelos do Google e da xAI de Musk.",
  author: "Bruno Danello",
  sourceName: "FedScoop",
  sourceUrl: "https://fedscoop.com/trump-launches-ai-site-america-gov/",
  date: "2026-09-29",
  content: `
    <p>O governo dos Estados Unidos lançou nesta terça-feira (29) o America.gov, um chatbot de inteligência artificial que promete funcionar como "porta de entrada única" para os serviços do governo federal americano. Segundo a <a href="https://fedscoop.com/trump-launches-ai-site-america-gov/" rel="noopener noreferrer nofollow">reportagem do FedScoop</a>, o site reúne informações de cerca de 29 mil páginas de agências federais e responde em linguagem natural a pedidos como agendar acampamento em parque nacional, tirar passaporte para um filho ou repor cartão da Previdência Social.</p>
    <p>De acordo com declarações de Joe Gebbia, diretor de design dos EUA e cofundador do Airbnb, à CNBC, a ferramenta é alimentada pelo Gemini, do Google, e pelo Grok, da xAI de Elon Musk. O presidente Donald Trump assinou uma ordem executiva durante o evento de lançamento, batizado de "Hello, America", determinando que a Administração de Serviços Gerais (GSA), o National Design Studio e o Escritório de Administração e Orçamento (OMB) façam do America.gov o "ponto único de entrada" para os serviços cobertos pelo governo, com integração ao sistema de identidade Login.gov.</p>

    <h2>Como surgiu e quem participou</h2>
    <p>Segundo Trump, o projeto começou "quase no primeiro dia" do seu governo e teve como engenheiro líder Edward Coristine, o jovem conhecido como "Big Balls" que integrou o extinto Departamento de Eficiência Governamental (DOGE). O presidente também agradeceu publicamente a Elon Musk, criador do DOGE, por ter "visualizado a transformação do governo pela tecnologia" e trazido a equipe responsável pelo projeto, mesmo com Musk tendo deixado o grupo antes do fim de seu mandato original.</p>
    <p>O America.gov é a etapa mais ambiciosa de uma série de iniciativas de IA que o governo Trump já vinha aplicando na máquina pública, como o programa OneGov, que oferece serviços de IA a agências a custo quase zero, e o USAi, que dá acesso a vários modelos de linguagem de uma vez. O evento reuniu nomes como a ex-porta-voz da Casa Branca Karoline Leavitt, o secretário de Estado Marco Rubio, o administrador do Medicare e Medicaid Mehmet Oz, além de Jensen Huang, CEO da Nvidia, e o próprio Musk em painel à tarde. Por enquanto, o chatbot apenas orienta o usuário sobre onde encontrar cada serviço; a promessa é que, a partir de 2027, seja possível completar processos inteiros dentro da própria plataforma, como trocar de nome após casamento sem sair do site.</p>

    <h2>Por que isso importa para você</h2>
    <p>O America.gov é um caso concreto do que analistas vêm chamando de "IA de governo": em vez de cada país construir seu próprio modelo do zero, aproveitar modelos comerciais já prontos para automatizar o atendimento ao cidadão. O Brasil já testa isso em escala menor, como mostra o lançamento do <a href="/noticias/tse-lanca-chatvote-assistente-ia-eleicoes-2026">ChatVote do TSE</a> para tirar dúvidas sobre as Eleições 2026. Quem presta serviço para o setor público ou quer vender solução de atendimento via IA para prefeituras e órgãos brasileiros tem aqui um modelo de referência de como estruturar esse tipo de projeto, da integração de dados de múltiplas fontes até o aviso de privacidade explicando o que a IA guarda ou não guarda do usuário.</p>
    <p>Também chama atenção o detalhe comercial da história: dois modelos rivais, Gemini e Grok, dividindo um mesmo produto oficial do governo americano. Isso mostra que, na prática, comprador grande está cada vez mais disposto a misturar fornecedores de IA em vez de apostar só num, algo que empresas brasileiras também podem replicar ao montar seus próprios fluxos de atendimento, como explica o guia sobre <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">diferença entre agente de IA, chatbot e automação</a>.</p>

    <h2>O que ainda falta esclarecer</h2>
    <p>O FedScoop aponta que, apesar do discurso de "privado por padrão" repetido por Gebbia, ainda não está claro como a tecnologia por trás do America.gov foi contratada, nem os termos dos acordos com Google e xAI para uso dos modelos em dados de cidadãos. O aviso de privacidade do site diz que os "provedores de IA não retêm" os prompts e respostas dos usuários, mas admite que o próprio America.gov pode guardar em cache por até duas horas um hash do pedido feito, mesmo sem armazenar o texto literal da pergunta.</p>
    <p>Esse tipo de ressalva é o que qualquer empresa ou órgão público que for adotar IA generativa em atendimento ao público precisa deixar claro desde o início, sob risco de gerar desconfiança depois. Vale acompanhar como o caso evolui, porque a discussão sobre retenção de dados em chatbots de IA usados por governos tende a se repetir em outros países à medida que projetos parecidos avançam, inclusive discussões que já giram em torno de como laboratórios de IA como OpenAI, Google e Anthropic lidam com <a href="/noticias/altman-laboratorios-ia-orgao-padroes-sem-governo">padrões de segurança sem depender de regulação governamental</a>.</p>

    <h2>O que observar daqui pra frente</h2>
    <p>O America.gov também serve como termômetro de um movimento maior: governos deixando de tratar IA generativa como projeto piloto isolado e passando a colocá-la no centro do atendimento ao cidadão, com orçamento e ordem executiva dedicados. Isso pressiona fornecedores de tecnologia para o setor público a terem produto pronto para escala nacional, não só demonstração, e cria um precedente que outros países costumam observar de perto antes de desenhar seus próprios projetos, algo que já apareceu no episódio em que agentes de IA usados pelo próprio governo americano <a href="/noticias/openai-pausa-treinamento-agentes-sites-governo-eua">fugiram do roteiro dentro de sites oficiais e levaram a OpenAI a pausar um treinamento</a>.</p>
    <p>Para quem trabalha com automação e atendimento no Brasil, vale ficar de olho em três pontos que devem se repetir em projetos parecidos por aqui: primeiro, a integração de múltiplas fontes de dados oficiais numa única base de conhecimento, o que exige organização e manutenção constante para a IA não responder com informação desatualizada; segundo, o desenho de avisos de privacidade claros sobre o que fica salvo e por quanto tempo, ponto sensível quando o usuário está falando com o governo sobre documento pessoal; terceiro, o plano de expansão gradual, do simples "onde encontro esse serviço" até a conclusão de processos inteiros dentro do chat, caminho que reduz risco de lançar algo ambicioso demais de uma vez e quebrar a confiança do usuário logo na largada.</p>
    <p>Fica também um lembrete prático para quem monta chatbot de atendimento em negócio próprio, seja para clientes ou para uso interno: combinar mais de um modelo de IA no mesmo produto, como fez o America.gov ao misturar Gemini e Grok, é uma estratégia cada vez mais comum para equilibrar custo, velocidade e qualidade de resposta conforme o tipo de pergunta. Quem está decidindo entre montar isso do zero ou usar uma plataforma pronta pode aproveitar o passo a passo de <a href="/artigos/como-criar-chatbot-de-atendimento-para-seu-site-sem-programar">como criar um chatbot de atendimento sem programar</a> como ponto de partida.</p>
  `,
  faq: [
    {
      question: "O America.gov substitui os sites das agências federais dos EUA?",
      answer: "Não totalmente. Por enquanto ele funciona como um ponto de busca e orientação que direciona o usuário ao serviço certo; a promessa é que, a partir de 2027, seja possível concluir processos inteiros direto na plataforma.",
    },
    {
      question: "Quais modelos de IA rodam por trás do America.gov?",
      answer: "Segundo declarações do diretor de design dos EUA à CNBC, a plataforma usa o Gemini, do Google, e o Grok, da xAI de Elon Musk.",
    },
  ],
};
