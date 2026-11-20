import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-reduz-prazo-divulgacao-falhas-30-dias-2027",
  title: "Anthropic dá só 30 dias para corrigir falhas graves achadas por IA",
  summary:
    "A partir de 2027, falhas graves achadas pelo Claude serão publicadas 30 dias após o aviso, e não mais 90. Google Project Zero segue o mesmo caminho até 2028.",
  author: "Bruno Danello",
  sourceName: "Anthropic, The Next Web",
  sourceUrl: "https://anthropic.com/research/coordinated-vulnerability-disclosure-timelines",
  date: "2026-11-18",
  publishedAt: "2026-11-18T08:10:00-03:00",
  topic: "seguranca",
  imageQuery: "Anthropic logo",
  content: `
    <p>A Anthropic vai dar muito menos tempo para empresas e projetos de código aberto corrigirem as falhas de segurança que os modelos Claude encontram. Em publicação do seu Frontier Red Team, a equipe que testa os limites dos modelos, a empresa anunciou nesta semana que o prazo de divulgação de vulnerabilidades de gravidade alta e crítica cai de 90 para 30 dias. Para as demais falhas, o prazo passa a ser de 45 dias. As novas regras valem para relatos enviados a partir de 1º de janeiro de 2027. A mudança foi detalhada pela própria Anthropic e repercutida pelo The Next Web.</p>
    <p>Na prática, isso significa que, quando o Claude achar uma brecha séria num software e a Anthropic avisar o responsável, o mundo vai saber dela em um mês, com ou sem correção pronta. A justificativa da empresa é direta: a IA ficou boa demais em achar falhas para que um segredo de três meses ainda faça sentido.</p>

    <h2>O que se sabe</h2>
    <p>A política de divulgação coordenada (conhecida pela sigla em inglês CVD) é o acordo de cavalheiros da segurança digital: quem acha uma falha avisa o fabricante em sigilo, dá um prazo para a correção e só depois torna o problema público. O padrão de 90 dias foi popularizado pelo Google Project Zero e virou referência no setor. A Anthropic seguia esse modelo para as falhas que seus modelos encontram.</p>
    <p>Segundo a publicação da Anthropic, as mudanças são estas:</p>
    <ul>
      <li>Falhas de gravidade alta e crítica: divulgação 30 dias após o aviso, contra 90 antes.</li>
      <li>Demais falhas: 45 dias.</li>
      <li>Se o mantenedor não responder ao primeiro aviso, a empresa diz que vai buscar um coordenador externo de vulnerabilidades depois de 15 dias, e não mais 30.</li>
      <li>Depois que a correção sai, os detalhes técnicos completos são publicados 30 dias depois, e não 45.</li>
      <li>Falhas sob exploração ativa continuam com prazo de 7 dias, sem mudança.</li>
    </ul>
    <p>Relatos que já estiverem em andamento em 1º de janeiro mantêm o prazo antigo. Há um caso especial: falhas graves avisadas há mais de 90 dias e ainda não divulgadas ganham mais 30 dias para os mantenedores, e depois disso passam a ser publicadas no painel da Anthropic sob a regra nova.</p>
    <p>A empresa abre exceções. Software difícil de atualizar, como o de infraestrutura crítica, e falhas que exigem mudar uma especificação técnica ou um padrão da internet podem não ter conserto em 30 ou 45 dias, e nesses casos o prazo será combinado com o fornecedor. A regra também não vale para achados de IA que nenhuma pessoa revisou, como os do OSS Scanner, serviço gratuito da Anthropic que varre periodicamente projetos de código aberto críticos com os modelos mais fortes da empresa.</p>
    <p>O motivo, nas palavras da Anthropic, é que as normas antigas partiam de duas premissas: que correções andam na velocidade humana e que é improvável alguém redescobrir a mesma falha por conta própria. "Nenhuma das duas vale hoje", diz o texto. A empresa afirma que os modelos já ajudam a escrever as correções e que "uma falha que um modelo encontra tem cada vez mais chance de ser encontrada por outro". A Anthropic diz observar uma taxa maior de redescoberta conforme a capacidade dos modelos cresce.</p>
    <p>A Anthropic não está sozinha. Segundo o The Next Web, que cita a SecurityWeek, o Google Project Zero anunciou dias antes que vai publicar falhas 60 dias após o aviso a partir de 2 de fevereiro de 2027, e 30 dias a partir de 3 de janeiro de 2028. Os dois maiores caçadores de falhas com IA estão, portanto, convergindo para o mesmo prazo curto.</p>
    <p>Para amortecer o impacto, a Anthropic lembra que cada relato vem com orientação de correção e, quando possível, com um patch pronto, e que vai combinar um ritmo com os mantenedores antes de mandar grande volume de achados para um mesmo projeto. A empresa também oferece seis meses do Claude Ultra sem custo a mantenedores elegíveis de código aberto e um programa de verificação para quem faz trabalho legítimo de defesa.</p>

    <h2>O que ainda não está confirmado</h2>
    <p>A publicação da Anthropic não traz números: não diz quantas falhas o Claude encontrou, quantas estão abertas hoje nem qual a taxa de correção dentro do prazo atual. Sem esses dados, é difícil medir quantos projetos vão estourar o novo prazo e ter falhas expostas sem correção.</p>
    <p>Também não está claro como a regra das exceções vai funcionar na prática, por exemplo quem decide que um software é "difícil de atualizar", nem como os mantenedores de projetos pequenos, muitas vezes voluntários, vão reagir. A reportagem do The Next Web não traz falas de mantenedores ou especialistas independentes. A própria Anthropic reconhece que prazos mais curtos podem pressionar quem mantém os projetos.</p>
    <p>Por fim, não se sabe se OpenAI e outros laboratórios vão adotar prazos parecidos. Em outubro, a OpenAI publicou um <a href="/noticias/openai-plano-divulgacao-vulnerabilidades-ia-cinco-etapas">plano de cinco etapas para divulgar falhas achadas por IA</a>, sem fixar um prazo tão curto.</p>

    <h2>Por que isso importa para você</h2>
    <p>O contexto explica a pressa. Nas últimas semanas, o Portal da AI noticiou que o Google flagrou um <a href="/noticias/google-agente-ia-transforma-correcoes-em-ataques-sem-humano">agente de IA que lê correções de segurança e monta o ataque sozinho</a>, que pesquisadores mostraram o modelo aberto <a href="/noticias/glm-5-3-exploits-firefox-epoch-ai-brecha-de-patch">GLM 5.3 explorando o Firefox na janela entre a correção e a atualização</a> e que uma falha achada pelo Mythos foi <a href="/noticias/anthropic-mythos-vulnerabilidade-rejetto-hfs-exploracao">explorada por criminosos em 24 horas</a>. Se atacantes também usam IA para achar e explorar falhas, guardar segredo por 90 dias protege menos do que antes.</p>
    <p>Para quem tem empresa, loja virtual ou sistema próprio no Brasil, a consequência é concreta: o intervalo entre uma falha virar pública e alguém tentar explorá-la está encolhendo. Atualizar sistemas, plugins, bibliotecas e servidores "quando der" deixa de ser opção. Vale ter alguém responsável por aplicar correções de segurança em dias, não em meses, e acompanhar os avisos dos fornecedores que você usa, de WordPress a ERP.</p>
    <p>Para desenvolvedores e equipes que mantêm projetos de código aberto, inclusive os muitos brasileiros que contribuem com bibliotecas usadas no mundo todo, a mensagem é que o volume de relatos feitos por IA vai continuar crescendo e com prazo menor. Como mostrou o <a href="/noticias/torvalds-linux-7-4-rc1-patches-ia-modelo-mais-saudavel">caso do kernel Linux 7.4</a>, a mesma IA que acha a falha pode ajudar a corrigi-la, e quem montar esse fluxo primeiro sofre menos.</p>
    <p>A análise do Portal da AI é que a mudança é menos uma escolha da Anthropic e mais um reconhecimento de que o ritmo da segurança mudou. Os 90 dias nasceram num mundo em que achar uma falha grave era trabalho raro e manual. Com modelos achando brechas em escala, o risco de esperar passou a ser maior que o risco de divulgar. Para o usuário comum, o recado é simples: ative atualizações automáticas no celular, no computador e nos apps, porque as correções vão chegar mais rápido e as ameaças também. O <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher ferramenta de IA com segurança</a> ajuda a avaliar os serviços que você usa.</p>
  `,
  faq: [
    {
      question: "O que muda na política de divulgação de falhas da Anthropic?",
      answer:
        "Falhas de gravidade alta e crítica achadas pelos modelos da Anthropic passam a ser divulgadas 30 dias após o aviso ao responsável, e não mais 90. As demais falhas têm 45 dias. Falhas sob exploração ativa seguem com 7 dias.",
    },
    {
      question: "Quando a regra nova começa a valer?",
      answer:
        "Para falhas relatadas a partir de 1º de janeiro de 2027. Relatos que já estiverem em andamento nessa data mantêm o prazo antigo.",
    },
    {
      question: "Por que a Anthropic encurtou o prazo?",
      answer:
        "Segundo a empresa, os modelos de IA ficaram muito melhores em achar falhas e ajudar a corrigi-las, e uma falha que um modelo encontra tem cada vez mais chance de ser achada por outro, inclusive por atacantes.",
    },
  ],
};
