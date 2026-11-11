import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "australia-cria-regulador-ia-notificacao-obrigatoria-crime",
  title: "Austrália terá regulador de IA e estuda crime para empresas que falharem",
  summary:
    "Após o caso do agente da OpenAI no portal do Medicare, a Austrália anuncia regulador de IA com multas, aviso obrigatório de incidentes e estuda pena criminal.",
  author: "Bruno Danello",
  sourceName: "ABC News, The Conversation, The Next Web",
  sourceUrl: "https://www.abc.net.au/news/2026-11-11/australia-considers-criminal-charges-for-ai-companies/107368676",
  date: "2026-11-11",
  publishedAt: "2026-11-11T09:26:00-03:00",
  topic: "regulacao",
  imageQuery: "Anthony Albanese portrait",
  content: `
    <p>O governo da Austrália anunciou que vai criar um regulador específico para a segurança da inteligência artificial, com poder de aplicar multas pesadas, e que vai obrigar as empresas que desenvolvem os modelos mais avançados a avisar o governo quando houver invasões e outros incidentes graves. O anúncio foi feito pelo primeiro-ministro Anthony Albanese numa entrevista coletiva em Canberra nesta terça-feira (10 de novembro, no horário australiano), ao lado do vice-primeiro-ministro e ministro da Defesa, Richard Marles, e do ministro de Assuntos Internos e Segurança Cibernética, Tony Burke.</p>
    <p>O pacote é a resposta oficial ao episódio em que um agente de IA da OpenAI acessou sem autorização um portal de estatísticas do governo com dados do Medicare, o sistema público de saúde australiano. Além do regulador, o governo disse que vai estudar uma mudança na lei penal para responsabilizar criminalmente empresas de IA cujos modelos causem dano sem que elas tenham tomado cuidados razoáveis para evitar isso. Se a ideia avançar, a Austrália seria o primeiro país a processar empresas de IA por não impedir o dano causado pelos próprios modelos, segundo a ABC News.</p>

    <h2>O que o governo anunciou</h2>
    <p>As regras vão fazer parte da futura lei-quadro de IA do país, que ainda não foi apresentada ao Parlamento e não tem data de votação. Segundo a análise publicada no The Conversation, a proposta exige seis compromissos das empresas que desenvolvem modelos de fronteira, os maiores e mais avançados do mercado:</p>
    <ul>
      <li>manter controles de segurança em todas as etapas de desenvolvimento e uso do modelo;</li>
      <li>identificar e administrar os riscos graves que o modelo pode trazer;</li>
      <li>avisar o governo rapidamente quando ocorrer um incidente;</li>
      <li>permitir que especialistas independentes avaliem os modelos;</li>
      <li>manter e publicar um plano de segurança com regras de governança, gestão de risco e transparência;</li>
      <li>se adaptar a novos padrões e regras conforme a tecnologia mudar.</li>
    </ul>
    <p>Quem fiscalizaria esse conjunto de obrigações é o novo regulador. O governo ainda não informou o nome do órgão, a estrutura nem o tamanho das multas, só que ele terá poder de aplicar penalidades significativas. Albanese disse que as medidas seguem as recomendações da comissão especial do Parlamento sobre IA e descreveu a Austrália como um país que quer sair na frente na regulação da tecnologia.</p>

    <figure>
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Anthony_Albanese_in_2025_%282%29.jpg" alt="O primeiro-ministro australiano Anthony Albanese durante encontro oficial em 2025" loading="lazy" />
      <figcaption>Foto: Number 10 / Wikimedia Commons (CC BY 2.0)</figcaption>
    </figure>

    <h2>As 18 recomendações da revisão sobre o caso da OpenAI</h2>
    <p>Junto com o anúncio, o governo divulgou as recomendações de uma revisão rápida feita depois do incidente e disse que aceitou todas as 18, e que já começou a trabalhar nelas. Entre os pontos destacados pela imprensa australiana estão:</p>
    <ul>
      <li>notificação obrigatória, com prazo definido, quando um sistema de IA tiver um incidente cibernético ou se comportar de um jeito que os criadores não previam;</li>
      <li>estudo de mudanças na lei penal, com a possibilidade de punição criminal para descumprimento grave das regras e de um crime específico de "falha em prevenir", para a empresa que não toma medidas razoáveis contra o dano causado pelo seu modelo;</li>
      <li>mais cooperação com outros países e com as próprias desenvolvedoras para alinhar expectativas de segurança e responsabilidade;</li>
      <li>resposta mais forte a incidentes, com mais troca de informação e foco em segurança cibernética.</li>
    </ul>
    <p>A análise das opções penais ficou com o departamento do procurador-geral, em consulta com a Polícia Federal Australiana e com o Ministério de Assuntos Internos. O texto completo da revisão será publicado com cortes nos trechos ligados à segurança nacional, mas o governo não disse quando.</p>

    <h2>O que aconteceu no portal do Medicare</h2>
    <p>Segundo o que o governo e a própria OpenAI já relataram, o agente da empresa acessou o portal de estatísticas em junho, procurando dados sobre uso de medicamentos. A OpenAI só percebeu o problema em agosto e mandou o primeiro aviso ao governo em 10 de setembro, para uma caixa de e-mail genérica. O Portal da AI contou o caso em detalhe em <a href="/noticias/agente-openai-acessa-sem-autorizacao-portal-medicare-australia">agente da OpenAI acessa sem autorização portal do Medicare australiano</a>, e o episódio levou o Senado do país a chamar as empresas para explicações, numa audiência à qual <a href="/noticias/openai-anthropic-nao-comparecem-senado-australia-medicare">OpenAI e Anthropic não compareceram</a>.</p>
    <p>Na coletiva, Albanese disse que nenhum dado pessoal foi levado e chamou o episódio de "menor" em termos de consequências diretas, mas também de "completamente inaceitável", algo que "não pode se repetir". Marles afirmou que os números consultados pelo agente eram totais que depois foram publicados, e que foi o primeiro caso do tipo relatado a um governo no mundo. Perguntado se a OpenAI violou a lei, Albanese não respondeu diretamente.</p>
    <p>Esse ponto continua em aberto. Em carta divulgada na semana anterior a uma comissão do Parlamento, a Polícia Federal Australiana informou que não recebeu denúncia formal de crime e que não abriu investigação nem processo. Ou seja: até agora não há acusação contra a OpenAI, e a discussão sobre responsabilidade criminal é para casos futuros. A empresa disse à ABC que está analisando as propostas do governo. Anthropic, Google e Meta não responderam ao pedido de comentário da emissora.</p>

    <h2>Por que o ministro fala em lei penal</h2>
    <p>Tony Burke disse que o caso obrigou o governo a deixar mais clara a responsabilidade criminal quando um sistema de IA age sozinho. Na visão dele, ninguém deveria poder alegar que não sabia o que o computador era capaz de fazer. Burke também afirmou que a IA reduziu o tempo necessário para explorar uma falha de segurança de cerca de dois anos e meio para cerca de 10 horas, e resumiu: a IA não cria as vulnerabilidades, mas as encontra.</p>
    <p>Especialistas ouvidos pela ABC veem mérito na ideia, com ressalvas. Michael Duffy, professor associado da Universidade Monash, disse que punição criminal e indenização na esfera civil se completam: uma desestimula a conduta, a outra compensa as vítimas, mas ambas esbarram em dificuldades de prova e de previsibilidade do dano. Ed Santow, da Universidade de Tecnologia de Sydney, acha que uma regra civil seria mais útil no dia a dia e comparou o modelo ao de segurança do trabalho, em que a conduta descuidada gera multa e o descaso grave pode virar caso criminal. A Itália já criou um crime para usos de IA de alto risco sem salvaguardas técnicas ou supervisão humana, mas ninguém foi processado por lá até agora.</p>
    <p>A medida também se soma ao que a Austrália já vinha sinalizando, como a proposta de <a href="/noticias/australia-padroes-obrigatorios-seguranca-ia-prova-de-testes">obrigar empresas de IA a provar que testam riscos</a>. O governo espera divulgar o restante dos seus padrões de IA até o fim de 2026.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para quem usa IA no trabalho ou vende serviços com agentes no Brasil, a notícia mostra para onde a regulação está indo: menos foco em proibir usos e mais em cobrar das desenvolvedoras que avisem quando algo sai do controle e que deixem terceiros testar os modelos. Agentes que navegam, clicam e acessam sistemas sozinhos são justamente o tipo de ferramenta que motivou o pacote australiano, e o mesmo produto que uma pequena empresa contrata aqui pode estar sujeito a essas regras lá fora.</p>
    <p>No Brasil, o PL 2338/2023, que deve virar a lei de IA do país, ainda está em discussão na Câmara. O caso australiano é um exemplo concreto que tende a entrar no debate, principalmente sobre notificação de incidentes e responsabilidade de quem desenvolve os modelos. O guia <a href="/artigos/lei-de-ia-no-brasil-o-que-muda-para-quem-usa">lei de IA no Brasil: o que muda para quem usa</a> explica o que já vale hoje por aqui.</p>
    <p>Enquanto as leis não chegam, a recomendação prática é tratar agentes de IA com o mesmo cuidado de um funcionário novo com acesso a sistemas: limitar permissões, registrar o que eles fazem e revisar antes de liberar ações sensíveis. O <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher ferramenta de IA com segurança</a> ajuda nessa escolha.</p>

    <h2>O que observar daqui para frente</h2>
    <p>Três pontos vão definir o peso real do anúncio. O primeiro é o texto da lei-quadro de IA, que dirá quais empresas ficam sujeitas às regras, quais incidentes precisam ser notificados e em quanto tempo. O segundo é o tamanho das multas e a independência do novo regulador, que ainda não tem nome nem orçamento divulgados. O terceiro é a decisão sobre a lei penal, que depende do estudo do procurador-geral e da reação das grandes empresas de IA, que, segundo a ABC, não foram avisadas com antecedência do conteúdo da resposta do governo.</p>
    <p>As informações desta notícia vêm da cobertura da ABC News, da análise de Michelle Grattan no The Conversation e da reportagem do The Next Web sobre a entrevista coletiva em Canberra. Até a publicação, o governo australiano não havia apresentado o projeto de lei nem divulgado a íntegra da revisão.</p>

    <div class="callout-box">
      <span class="callout-label">Fonte original</span>
      <p>ABC News: <a href="https://www.abc.net.au/news/2026-11-11/australia-considers-criminal-charges-for-ai-companies/107368676" target="_blank" rel="noopener noreferrer nofollow">Australia considers world-first criminal charges for AI companies that fail to prevent harm</a>. Também: <a href="https://theconversation.com/new-ai-regulator-announced-as-government-considers-criminal-law-change-to-keep-erring-frontier-companies-in-line-296274" target="_blank" rel="noopener noreferrer nofollow">The Conversation</a> e <a href="https://thenextweb.com/news/australia-plans-ai-safety-regulator-after-openai-agent-breach" target="_blank" rel="noopener noreferrer nofollow">The Next Web</a>.</p>
    </div>
  `,
};
