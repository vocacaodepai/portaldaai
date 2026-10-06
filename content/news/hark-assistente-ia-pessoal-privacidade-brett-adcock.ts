import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "hark-assistente-ia-pessoal-privacidade-brett-adcock",
  title: "Brett Adcock lança Hark, assistente de IA que promete não vender seus dados",
  summary:
    "A Hark Pro acessa e-mail, calendário e cartão de crédito para agir por conta própria, mas aposta na privacidade como diferencial frente a rivais como o Muse.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/10/06/hark-releases-an-ai-personal-assistant-with-a-focus-on-privacy/",
  date: "2026-10-06",
  publishedAt: "2026-10-06T16:40:00-03:00",
  imageQuery: "Brett Adcock portrait",
  topic: "lancamentos",
  content: `
    <p>A startup Hark lançou nesta terça-feira (6) o Hark Pro, um "sistema operacional" de assistente pessoal por inteligência artificial que promete executar tarefas digitais em nome do usuário sem transformar seus dados em matéria-prima para publicidade. Segundo reportagem do <a href="https://techcrunch.com/2026/10/06/hark-releases-an-ai-personal-assistant-with-a-focus-on-privacy/" target="_blank" rel="noopener noreferrer nofollow">TechCrunch</a>, o produto é comandado por Brett Adcock, fundador serial já conhecido por empreendimentos anteriores em robótica e automação, e por Abidur Chowdhury, ex-designer da Apple responsável pela interface do novo assistente.</p>

    <p>A proposta do Hark Pro é dar acesso amplo a e-mail, calendário, arquivos do computador e até cartões de crédito do usuário para que a IA sugira e execute ações de forma proativa, como aprovar despesas, responder mensagens ou reservar uma viagem, sem esperar um comando explícito a cada passo. Para isso, a empresa afirma ter treinado um modelo próprio voltado especificamente para uso de computador, o que, segundo Chowdhury, torna o sistema "mais rápido e mais barato" nesse tipo de tarefa do que recorrer a um modelo de linguagem genérico de propósito geral.</p>

    <h2>Como o Hark Pro tenta se diferenciar de rivais como o Muse, da Meta</h2>
    <p>O discurso central do lançamento é a privacidade. Chowdhury declarou ao TechCrunch que a empresa "não está aqui para vender anúncios ou roubar seus dados", numa comparação direta com assistentes de agentes que já tropeçaram justamente nesse ponto. O Portal da AI já noticiou como um <a href="/noticias/pesquisador-exporta-6gb-arquivos-agente-muse-meta">pesquisador conseguiu exportar 6,8 GB de arquivos internos do agente Muse, da Meta</a>, só com comandos de chat, episódio que reforçou o temor de que assistentes com acesso amplo a dados pessoais e corporativos se tornem um risco de segurança caso não sejam bem protegidos.</p>
    <p>Na comparação direta com o Muse, feita pelo próprio cofundador da Hark, a aposta não é necessariamente ser mais rápido, mas entregar um resultado melhor, "de ponta a ponta". A interface do Hark Pro ocupa a tela cheia do dispositivo, com um chat central e painéis personalizáveis ao redor, e mostra, numa pequena janela, os passos que o agente está dando durante a navegação pela web, uma forma explícita de tentar gerar confiança mostrando o que a IA está fazendo em segundo plano, algo que a maioria dos concorrentes, segundo a reportagem, executa sem exibir na própria interface.</p>

    <figure>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/Brett_Adcock_01.jpg" alt="Brett Adcock, fundador da Hark" />
      <figcaption>Foto: Brett Adcock / Wikimedia Commons (CC BY-SA 4.0)</figcaption>
    </figure>

    <h2>Quem é Brett Adcock e por que o nome dele pesa no mercado</h2>
    <p>Adcock não é um nome novo no ecossistema de startups de tecnologia profunda: ele já apareceu em reportagens do Portal da AI por outro projeto, a Figure AI, fabricante de robôs humanoides que divulgou resultados relevantes sobre <a href="/noticias/figure-ai-helix-2-5-zero-shot-30-casas">generalização de tarefas domésticas sem treinamento prévio no local</a>. A entrada dele num segmento diferente, de assistentes pessoais de software, mostra como fundadores que já levantaram capital e construíram equipe em uma frente de IA aplicada estão expandindo para outras frentes da mesma onda, em vez de ficar restritos a um único nicho.</p>
    <p>Segundo o modelo de negócios descrito na reportagem, o Hark Pro tem uma camada gratuita de acesso, voltada a atrair o maior número possível de usuários, e uma assinatura paga para quem usa o assistente com intensidade maior, embora a empresa não tenha detalhado valores específicos da cobrança. A Hark também já sinalizou um plano mais ambicioso para 2027: lançar um dispositivo de hardware nativo de IA, descrito pela empresa como "um produto que nunca existiu antes", sem detalhes concretos do que seria até o momento.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para quem já usa um assistente de IA no dia a dia, seja para organizar agenda, filtrar e-mail ou automatizar tarefas repetitivas, como descrevemos no guia sobre <a href="/artigos/como-configurar-primeiro-assistente-de-ia-pessoal">como configurar seu primeiro assistente de IA pessoal</a>, o lançamento do Hark Pro reforça uma tendência que só deve se intensificar: dar a uma IA acesso direto a e-mail, calendário, arquivos e até informações de pagamento virou condição básica para que ela realmente "aja" em seu nome, em vez de apenas responder perguntas. Isso levanta a régua do que vale considerar antes de instalar qualquer assistente desse tipo, independentemente de quem o fabrica: quais dados ele acessa, onde ficam armazenados e se existe algum mecanismo de auditoria do que a IA fez enquanto operava sozinha.</p>
    <p>O próprio texto do Portal da AI sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade: o que você entrega sem perceber</a> explica por que esse tipo de concessão de acesso tende a crescer sem que o usuário perceba todo o alcance do que está sendo compartilhado, e o caso do Muse mostra que mesmo empresas com times de segurança grandes e orçamento robusto já falharam nesse ponto. Promessas de privacidade como a da Hark, por mais que sejam bem-vindas, ainda dependem de verificação prática: histórico recente de vazamentos e falhas em agentes de IA sugere que vale esperar auditorias independentes e relatos de uso real antes de confiar dados financeiros e arquivos sensíveis a qualquer assistente recém-lançado, por mais que o discurso de marketing seja convincente.</p>

    <h2>O dilema entre conveniência e exposição de dados em agentes autônomos</h2>
    <p>O lançamento também expõe uma tensão que acompanha toda a corrida por assistentes de IA mais autônomos: quanto mais acesso uma IA tem a dados pessoais e financeiros, maior é o potencial de conveniência, mas também maior é a superfície de risco em caso de falha de segurança, uso indevido ou simples erro do modelo ao interpretar um comando. Chowdhury reconheceu esse dilema na própria entrevista, ao citar preocupações sobre o "fator de estranhamento" ("creep factor") que pode surgir se dispositivos futuros, como câmeras vestíveis, passarem a registrar e processar continuamente o ambiente ao redor do usuário, algo que a própria empresa já planeja para o produto de hardware de 2027.</p>
    <p>A aposta da Hark de competir pela confiança do usuário, em vez de competir apenas por velocidade ou número de tarefas automatizadas, é também uma resposta indireta à pressão regulatória e de reputação que gigantes como Meta e Google enfrentam quando o assunto é uso de dados pessoais para publicidade segmentada. Resta saber se esse discurso vai se sustentar à medida que a base de usuários crescer e a empresa precisar, eventualmente, buscar formas de monetização além da assinatura paga de "usuários pesados".</p>

    <h2>O que observar daqui para frente</h2>
    <p>Vale acompanhar se a Hark vai publicar políticas de privacidade detalhadas e auditáveis sobre como os dados de e-mail, calendário e cartão de crédito dos usuários são armazenados e processados, além de observar se pesquisadores de segurança independentes vão testar o produto em busca de falhas parecidas com as já encontradas em agentes concorrentes. Também é um indicador importante acompanhar a adesão real de usuários ao longo das próximas semanas, já que promessas de privacidade tendem a atrair early adopters preocupados com esse tema, mas a adoção em massa normalmente depende mais de conveniência prática do dia a dia do que do discurso institucional de lançamento.</p>
    <p>Por fim, o anúncio do futuro dispositivo de hardware nativo de IA para 2027 merece atenção: se a Hark realmente lançar um aparelho físico dedicado ao assistente, a empresa estará competindo diretamente com iniciativas de hardware de IA de outras gigantes do setor, num mercado que ainda não encontrou um formato de consenso para esse tipo de produto fora do celular e do computador tradicional.</p>
  `,
};
