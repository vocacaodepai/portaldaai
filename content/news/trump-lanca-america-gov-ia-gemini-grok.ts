import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "trump-lanca-america-gov-ia-gemini-grok",
  title: "EUA lançam America.gov, portal de serviços públicos com IA",
  summary:
    "Site usa Gemini e Grok para responder sobre passaporte, Medicare e aposentadoria a partir de 29 mil páginas do governo americano, sem exigir conta para começar.",
  author: "Bruno Danello",
  sourceName: "FedScoop",
  sourceUrl: "https://fedscoop.com/trump-launches-ai-site-america-gov/",
  date: "2026-09-29",
  content: `
    <p>O governo dos Estados Unidos lançou nesta segunda-feira (29) o America.gov, um portal único baseado em chatbot de IA para ajudar cidadãos a encontrar e, no futuro, concluir serviços federais como emissão de passaporte, inscrição no Medicare e substituição do cartão de previdência social. Segundo a <a href="https://fedscoop.com/trump-launches-ai-site-america-gov/" rel="noopener noreferrer nofollow">reportagem da FedScoop</a>, o site é alimentado pelo Gemini, do Google, e pelo Grok, da xAI de Elon Musk, conforme confirmado por Joe Gebbia, diretor de design dos Estados Unidos e cofundador da Airbnb, responsável por liderar o projeto dentro do National Design Studio, equipe de design e tecnologia ligada à Casa Branca.</p>
    <p>O presidente Donald Trump assinou uma ordem executiva determinando que todas as agências federais integrem seus sites à nova plataforma "assim que possível", com a General Services Administration (GSA) operando o serviço e a verificação de identidade feita pelo Login.gov. Na versão atual, o America.gov consegue responder perguntas em linguagem simples consultando cerca de 29 mil sites do governo americano, mas ainda direciona o usuário para completar a tarefa em outro lugar, sem executar a transação diretamente dentro do chat.</p>

    <h2>O que já funciona e o que ainda vem em 2027</h2>
    <p>Hoje, o America.gov permite buscas e respostas sobre temas como reserva de vaga em parque nacional, troca de nome após casamento, comparação de planos do Medicare e localização de vagas em órgãos públicos, sem exigir criação de conta para começar a usar. Dr. Mehmet Oz, administrador do CMS (o órgão que cuida do Medicare nos EUA), fez uma demonstração ao vivo das funções ligadas a planos de saúde, enquanto o secretário de Estado Marco Rubio apresentou a futura emissão de passaporte pela primeira vez direto pelo site.</p>
    <p>Para 2027, a promessa é que o usuário consiga preencher formulários, acompanhar o andamento de pedidos e concluir processos inteiros sem sair da plataforma, do tipo "mudar de nome após casamento enviando os documentos sem sair do America.gov", segundo Gebbia. Sobre privacidade, o aviso oficial do site afirma que "os provedores de IA não retêm seus prompts ou respostas" e que o America.gov "pode guardar em cache respostas por até duas horas" usando versões com hash dos prompts, não o texto original, embora informações detalhadas sobre como esses dados são de fato tratados ainda sejam escassas.</p>

    <h2>Por que isso importa para você</h2>
    <p>Mesmo sendo um projeto americano, o America.gov é um caso de estudo relevante pra quem discute digitalização de serviço público no Brasil: mostra como um governo grande está tentando resolver o problema real de centenas de sites espalhados e sem padrão, um problema que o Brasil também enfrenta com a quantidade de portais de prefeitura, estado e órgão federal cada um com sua própria interface. O TSE, por exemplo, já seguiu por um caminho parecido em escala menor ao <a href="/noticias/tse-lanca-chatvote-assistente-ia-eleicoes-2026">lançar o ChatVote, assistente de IA para tirar dúvidas sobre as eleições de 2026</a>, e é razoável esperar mais iniciativas do tipo por aqui.</p>
    <p>Para quem trabalha com produto ou atendimento e está pensando em construir seu próprio assistente de IA voltado a processos burocráticos, sejam eles públicos ou internos de uma empresa, o modelo do America.gov traz uma lição prática: comece pela camada de busca e orientação, que é mais simples e mais segura de validar, antes de dar ao agente o poder de executar a transação sozinho. É exatamente essa progressão que o próprio governo americano está seguindo, com previsão de só liberar preenchimento completo de formulário em 2027, quase um ano e meio depois do lançamento inicial do chatbot.</p>

    <h2>O risco de errar em algo que tem consequência real</h2>
    <p>Diferente de um chatbot de entretenimento, um assistente de IA que orienta sobre passaporte, aposentadoria ou benefício de saúde lida com decisões que têm peso financeiro e legal na vida da pessoa. Um erro do modelo ao explicar prazo de documento ou regra de elegibilidade pode custar caro para quem confiou na resposta sem checar a fonte original. É o mesmo tipo de cuidado que vale para qualquer negócio brasileiro que hoje usa IA para atender cliente em áreas sensíveis, como contratos, finanças ou saúde: a ferramenta ajuda a organizar e agilizar a informação, mas não substitui a checagem em cima da fonte oficial antes de qualquer decisão importante.</p>
    <p>Vale lembrar que o histórico recente de agentes de IA operando dentro de sistemas de governo não é isento de tropeço: só nesta semana, a Austrália investigou um caso em que um <a href="/noticias/agente-openai-acessa-sem-autorizacao-portal-medicare-australia">agente da OpenAI acessou sem autorização o portal do Medicare australiano</a>. Isso não invalida a iniciativa americana, mas reforça por que a Casa Branca está começando pela função mais simples (busca e orientação) antes de liberar a IA para agir sozinha em nome do cidadão. Para quem quer entender melhor os riscos e cuidados ao adotar esse tipo de ferramenta, vale conferir nosso <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist de como escolher ferramenta de IA com segurança</a>.</p>

    <h2>Dois modelos rivais dividindo o mesmo site</h2>
    <p>Chama atenção o próprio Trump ter usado Grok e Gemini como referência de familiaridade para explicar o novo site, misturando produtos de duas empresas concorrentes, xAI e Google, dentro de uma mesma infraestrutura pública. Isso é diferente do padrão mais comum de projetos de governo, que costumam fechar contrato com um único fornecedor de tecnologia por questão de custo e de responsabilidade em caso de falha. Rodar dois modelos em paralelo sugere que o America.gov usa cada IA para tarefas diferentes dentro do mesmo fluxo, provavelmente dividindo entre busca de informação e geração de resposta em linguagem natural, embora o detalhe técnico exato da arquitetura não tenha sido divulgado publicamente até agora.</p>
    <p>Essa escolha de misturar fornecedores também é um sinal para empresas brasileiras que estão montando seus próprios assistentes de atendimento: não existe obrigação de usar só uma IA. É perfeitamente viável, e cada vez mais comum, combinar modelos diferentes na mesma aplicação, usando cada um onde ele performa melhor ou sai mais barato, desde que o time técnico tenha maturidade para manter essa integração funcionando de forma estável.</p>
  `,
  faq: [
    {
      question: "Quais IAs rodam o America.gov?",
      answer:
        "O portal é alimentado pelo Gemini, do Google, e pelo Grok, da xAI, conforme confirmado por Joe Gebbia, diretor de design dos Estados Unidos, à imprensa americana.",
    },
    {
      question: "O America.gov já permite fazer passaporte ou se inscrever no Medicare direto pelo site?",
      answer:
        "Ainda não. Na versão lançada em setembro de 2026, o site orienta e responde dúvidas consultando cerca de 29 mil páginas do governo americano, mas direciona o usuário para concluir a tarefa em outro lugar. A promessa de preencher formulários e concluir processos inteiros pela plataforma é para 2027.",
    },
  ],
};
