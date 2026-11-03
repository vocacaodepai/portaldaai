import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "google-desliga-gemini-alunos-escolas-busca-aprendizado-guiado",
  title: "Google vai desligar o Gemini para alunos até a escola liberar o uso",
  summary:
    "Gemini, Gemini Notebook e a Busca ficarão desligados nas contas escolares de alunos até o administrador ativar. Quem recusar a IA perde também a Busca.",
  author: "Bruno Danello",
  sourceName: "Google, TechCrunch, The Verge, The Next Web",
  sourceUrl: "https://blog.google/products-and-platforms/products/education/ai-learning-era-updates-2026/",
  date: "2026-11-03",
  publishedAt: "2026-11-03T14:25:00-03:00",
  imageQuery: "Google Classroom Chromebook students",
  topic: "lancamentos",
  content: `
    <p>O Google anunciou nesta terça-feira (3) uma mudança importante na forma como suas ferramentas de inteligência artificial chegam às escolas. O Gemini, o Gemini Notebook (o antigo NotebookLM), o Gemini dentro do Google Classroom e a própria Busca do Google vão ficar totalmente desligados nas contas de alunos do ensino fundamental e médio até que o administrador da escola decida ligar cada um deles. Na prática, a empresa troca o modelo de "ligado por padrão" pelo de "desligado até a escola autorizar".</p>

    <p>O anúncio foi feito por Chris Phillips, vice-presidente e gerente-geral de Educação do Google, em um texto no blog oficial da empresa, e repercutiu no mesmo dia no TechCrunch, no The Verge e no The Next Web. O detalhe que mais chamou atenção não está no blog, mas em entrevistas que Phillips deu ao The New York Times e ao site Chalkbeat: não será possível desligar só a IA e manter a Busca funcionando. Escola que não quiser nenhuma IA terá de abrir mão também do buscador.</p>

    <h2>O que muda nas contas de alunos</h2>
    <p>Segundo o Google, a decisão veio depois de conversas com escolas, professores, pesquisadores e formuladores de políticas públicas. A empresa diz que vai detalhar as regras e o cronograma "nos próximos meses", antes de a mudança entrar em vigor, para que as redes de ensino tenham tempo de se preparar. As reportagens indicam que a virada deve acontecer ao longo do próximo ano letivo.</p>

    <p>Os quatro produtos que passam a nascer desligados para alunos são:</p>
    <ul>
      <li><strong>Gemini:</strong> o assistente de conversa do Google;</li>
      <li><strong>Gemini Notebook:</strong> a ferramenta de cadernos de estudo que resume e organiza fontes enviadas pelo usuário;</li>
      <li><strong>Gemini no Classroom:</strong> o assistente integrado à plataforma onde professores passam e corrigem tarefas;</li>
      <li><strong>Google Busca:</strong> o buscador, que hoje já vem com respostas geradas por IA no topo da página.</li>
    </ul>

    <p>A inclusão da Busca nessa lista é o ponto central. Phillips disse ao New York Times que "Busca e IA estão profundamente integradas". Por isso, se a escola optar por restringir a IA por completo, o aluno vai ver uma mensagem informando que a Busca não está disponível naquela conta. Ao Chalkbeat, ele foi mais direto: se a escola não se sente confortável e quer simplesmente a IA desligada, a escolha é não ter a Busca.</p>

    <figure>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Byrd_Chromebooks_%2833378719486%29.jpg/1280px-Byrd_Chromebooks_%2833378719486%29.jpg" alt="Alunos usando Chromebooks em sala de aula de uma escola pública" loading="lazy" />
      <figcaption>Foto: Virginia Department of Education / Wikimedia Commons (CC BY 2.0)</figcaption>
    </figure>

    <h2>Um recuo depois de ligar a IA para todos</h2>
    <p>A mudança chega poucos meses depois de o Google ter feito o caminho oposto. Neste ano, a empresa ativou o Gemini por padrão dentro do Google Classroom, plataforma usada por mais de 150 milhões de professores e alunos no mundo, segundo o The Verge. Muitas redes de ensino foram pegas de surpresa. Grandes distritos dos Estados Unidos, como Nova York e Los Angeles, passaram a limitar o uso de IA por estudantes, e parlamentares americanos cobraram a empresa no mês passado sobre os possíveis danos de colocar seus produtos de IA nas escolas.</p>

    <p>O pano de fundo inclui ainda uma crítica pesada da Common Sense Media, organização americana que avalia tecnologia para crianças. Em julho, ela classificou a Busca com IA do Google como um "risco inaceitável" para estudantes. Como a IA não pode ser separada da Busca, esse problema continua de pé para quem mantiver o buscador ligado. O TechCrunch resume o dilema: um professor pode não querer que o aluno use o resumo de IA da Busca para fazer o trabalho, mas quase certamente quer que ele consiga pesquisar fontes. Com o novo modelo, essas duas coisas vêm juntas.</p>

    <p>É um recado sobre o peso do Google na educação. Com Chromebooks, Classroom e as contas do Google Workspace for Education espalhados por escolas do mundo todo, a empresa define, na prática, o que dá ou não para desligar. A escola ganha o controle formal de ligar ou não a IA, mas o preço de recusar é alto.</p>

    <h2>Aprendizado Guiado chega ao Classroom e à Busca</h2>
    <p>No mesmo pacote de anúncios, o Google ampliou o Aprendizado Guiado (Guided Learning), um modo do Gemini que, em vez de entregar a resposta pronta, faz perguntas e quebra o problema em etapas, como um tutor. A ideia, segundo a empresa, é estimular o que chama de "esforço produtivo": o aluno é desafiado sem ficar tão perdido a ponto de desistir.</p>

    <ul>
      <li><strong>No Google Classroom:</strong> o recurso já está disponível no mundo todo desde esta terça. O professor passa uma atividade de Aprendizado Guiado ancorada no material da turma, e o aluno estuda com um tutor que se limita àquele conteúdo. O professor acompanha as conversas e recebe indicadores de onde a turma tem mais dificuldade.</li>
      <li><strong>Na Busca:</strong> um piloto começa ainda este mês em algumas escolas dos Estados Unidos. Quando o sistema perceber que o aluno procura ajuda com lição de casa, como ao colar um problema de física ou pedir ajuda com uma resenha de livro, a Busca vai conduzir o raciocínio passo a passo em vez de mostrar a resposta direto.</li>
    </ul>

    <p>Para sustentar a aposta, o Google divulgou dois estudos próprios. Em um teste controlado com mais de 300 estudantes da Universidade de Tóquio, quem estudou estatística por meio período só com recursos comuns da internet melhorou a nota em 5,3 pontos percentuais; quem também usou o Aprendizado Guiado melhorou 8,1 pontos, ganho cerca de 1,5 vez maior. O outro estudo foi um piloto de quatro semanas em três escolas de ensino médio do Reino Unido, com avaliação positiva dos professores. Vale lembrar que são pesquisas conduzidas pela própria empresa, com amostra pequena e tempo curto.</p>

    <h2>E no Brasil?</h2>
    <p>O anúncio não traz um cronograma por país, e o piloto da Busca é só nos Estados Unidos. Mas a nova regra de controle vale para contas escolares de alunos do Google, e o Google Workspace for Education é muito usado por redes públicas e escolas particulares brasileiras. Ou seja, a tendência é que gestores de TI de escolas daqui também tenham de decidir, nos próximos meses, se ligam ou não cada ferramenta de IA, sabendo que desligar tudo significa ficar sem a Busca.</p>

    <p>Há ainda uma novidade direta para o país: no mesmo dia, o Google informou que vai levar ao Brasil, nos próximos meses, o Google AI Educator Series, um curso gratuito e sob demanda para professores aprenderem a usar IA em sala, que já existe nos EUA, na Índia, na Coreia, na Malásia, nas Filipinas e no Reino Unido. O tema conversa com o debate local sobre regras de uso de IA nas escolas, que já tratamos no guia sobre <a href="/artigos/ia-na-escola-diretrizes-do-mec-e-do-cne-o-que-muda-para-professores-pais-e-alunos">as diretrizes do MEC e do CNE para IA na escola</a>, e com a <a href="/noticias/nova-york-moratoria-ia-generativa-escolas-publicas">moratória de IA generativa nas escolas públicas de Nova York</a>.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você é <strong>pai ou mãe</strong>, vale perguntar à escola do seu filho como ela vai configurar as contas de alunos quando a mudança chegar. A decisão pode ir de "nenhuma IA e nenhuma Busca" a "tudo ligado". O <a href="/artigos/eca-digital-e-ia-o-que-muda-para-pais-criancas-chatbots-e-apps">ECA Digital e as regras para chatbots e apps</a> ajudam a entender o que já é exigido das plataformas no Brasil.</p>

    <p>Se você é <strong>professor ou coordenador</strong>, o Aprendizado Guiado no Classroom já pode ser testado e muda a lógica da tarefa: em vez de proibir a IA, você passa uma atividade em que ela é obrigada a ensinar, não a responder. Nosso guia sobre <a href="/artigos/gemini-notebook-no-google-classroom-insights-do-professor-e-limites">o Gemini Notebook no Google Classroom</a> mostra o que o professor enxerga e quais são os limites dessas ferramentas.</p>

    <p>E se você trabalha com <strong>educação como negócio</strong>, seja com reforço escolar, cursos ou material didático, a mensagem do Google é clara: a próxima disputa não é sobre se o aluno usa IA, mas sobre qual IA ensina de verdade. Quem monta <a href="/artigos/aulas-particulares-com-ia-como-montar-reforco-escolar">aulas particulares com apoio de IA</a> ou <a href="/artigos/como-usar-ia-para-estudar-para-provas-e-concursos">métodos de estudo com IA</a> deve se posicionar do lado do "tutor que faz pensar", porque é para lá que as escolas e as próprias big techs estão indo.</p>

    <p>Por fim, a mudança mostra um limite que vale também para empresas: quando a IA está embutida no produto principal, como na Busca, "desligar a IA" deixa de ser uma opção isolada. O controle existe, mas no formato de pacote, e quem decide o pacote é o fornecedor.</p>
  `,
};
