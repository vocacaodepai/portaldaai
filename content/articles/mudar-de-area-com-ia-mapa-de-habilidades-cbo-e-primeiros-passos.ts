import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "mudar-de-area-com-ia-mapa-de-habilidades-cbo-e-primeiros-passos",
  title: "Mudar de área com IA: mapa de habilidades e primeiros passos",
  seoTitle: "Mudar de área com IA: mapa de habilidades e plano",
  excerpt:
    "Quer mudar de área? Veja como montar um mapa de habilidades com IA, achar a ocupação na CBO, fechar lacunas em 90 dias e se candidatar sem começar do zero.",
  metaDescription:
    "Mudar de área de carreira com IA: inventário de tarefas, mapa de habilidades transferíveis, consulta à CBO, plano de 90 dias, prompts, projeto de prova e erros comuns na transição.",
  category: "carreira",
  articleSubcategory: "mentalidade-e-adaptacao",
  date: "2026-10-29",
  readTime: 8,
  imageQuery: "person planning career notebook window",
  seed: 902,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Mudar de área não é recomeçar do zero: o primeiro passo é listar o que você já faz bem e traduzir essas tarefas para a linguagem da vaga que você quer.",
    "A IA ajuda a montar o mapa de habilidades, a comparar sua experiência com a ocupação desejada e a planejar 90 dias de estudo, mas quem decide o destino e confirma os fatos é você.",
    "A Classificação Brasileira de Ocupações e o Portal Emprega Brasil, ambos do governo federal, ajudam a conferir nomes de ocupações e a encontrar vagas na sua cidade.",
  ],
  content: `
    <p>Para mudar de área com IA, comece listando as tarefas que você já faz bem, peça ao chatbot que as traduza em habilidades transferíveis, compare com 2 ou 3 ocupações-alvo e monte um plano de 90 dias com estudo, um projeto de prova e conversas com quem já trabalha na área. Você não recomeça do zero: reaproveita parte do que sabe e fecha só as lacunas.</p>

    <p>Quem pensa em mudar costuma travar em duas frases: "não tenho experiência na área" e "não sei por onde começar". As duas têm saída prática. Este guia mostra o método em etapas, com prompts, uma tabela de plano e as fontes oficiais para conferir nomes de ocupações e encontrar vagas. Não há promessa de salário ou de recolocação: o resultado depende de mercado, tempo disponível e dos passos que você de fato der.</p>

    <h2>O que muda quando você troca de área</h2>

    <p>A troca é menos radical do que parece. Boa parte do trabalho é transferível: organizar tarefas, atender gente, escrever com clareza, lidar com números, cumprir prazo. O que muda é o vocabulário, as ferramentas e o tipo de prova que o mercado pede. Uma pessoa de atendimento ao cliente que quer ir para operações já domina resolução de problema e comunicação, e precisa aprender processo e indicador.</p>

    <p>A IA entra em três pontos: organizar o que você sabe, comparar com a vaga e planejar o estudo. O guia do <a href="/artigos/mentor-de-carreira-com-ia-prompts-para-decidir-seu-proximo-passo">mentor de carreira com IA</a> traz perguntas para decidir a direção, e o texto sobre <a href="/artigos/como-usar-ia-para-identificar-fechar-lacunas-de-habilidades">como identificar e fechar lacunas de habilidades</a> aprofunda a parte do estudo. A decisão final continua sendo sua, e vale dar atenção ao lado emocional, como mostra o texto sobre <a href="/artigos/como-lidar-pressao-de-ter-que-saber-tudo-de-ia-no-trabalho">lidar com a pressão de ter que saber tudo de IA</a>.</p>

    <h2>Passo 1: inventário de tarefas, não de cargos</h2>

    <p>Cargo esconde o trabalho real. Em vez de escrever "assistente administrativo", liste as tarefas das últimas semanas: conferir notas, montar planilha, atender fornecedor, cobrar prazo, treinar colega. Pegue de 15 a 25 tarefas e, para cada uma, anote o resultado: tempo economizado, erro evitado, cliente atendido. Se você não tem o número exato, descreva a situação, sem inventar.</p>

    <pre><code>Segue minha lista de tarefas reais dos últimos 3 meses no trabalho (cada uma com o resultado, quando existe). Agrupe em 6 a 8 habilidades transferíveis, com um nome simples para cada grupo. Para cada habilidade, escreva uma frase de currículo que use APENAS o que eu informei, sem inventar números, ferramentas ou cargos. Se faltar dado, escreva "preciso de um exemplo".

[cole sua lista aqui]</code></pre>

    <p>O resultado é o seu mapa de habilidades. Revise tudo e corte o que você não sustentaria em uma entrevista. O roteiro de <a href="/artigos/entrevista-comportamental-metodo-star-com-ia-historias-reais-e-resultados">entrevista comportamental com o método STAR</a> mostra como transformar cada item em uma história curta e verdadeira.</p>

    <h2>Passo 2: escolher 2 ou 3 ocupações-alvo e conferir na CBO</h2>

    <p>Não escolha uma ocupação só pelo nome que aparece em redes sociais. A Classificação Brasileira de Ocupações (CBO) é, segundo a <a href="https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/cbo" target="_blank" rel="noopener noreferrer">página do Ministério do Trabalho e Emprego</a>, consultada em 29/10/2026, o catálogo nacional que identifica as ocupações do mercado de trabalho, criado por portaria em 2002. A página indica a busca por título no site da CBO e lembra que a classificação não regula profissões, o que é feito por lei.</p>

    <p>Use a busca para descobrir o nome oficial da ocupação, os sinônimos que as empresas usam e as atividades descritas. Depois, compare essas atividades com o seu inventário. Se 60% ou mais das atividades já fazem sentido para você, a ponte é curta. Se quase nada bate, a mudança é mais longa, e isso não impede, apenas pede um plano maior. Em áreas que mudam rápido, como tecnologia, o texto sobre <a href="/artigos/vagas-de-ia-no-brasil-quais-cargos-contratando-2026">vagas de IA no Brasil</a> mostra os cargos em circulação, e o de <a href="/artigos/carreira-em-ciberseguranca-com-ia-vagas-trilha-e-habilidades">carreira em cibersegurança</a> é um exemplo de trilha detalhada.</p>

    <h2>Passo 3: comparar sua experiência com a vaga</h2>

    <p>Copie 3 anúncios reais da ocupação-alvo, sem dados da empresa, e peça à IA uma tabela de aderência: o que você já tem, o que tem em parte e o que falta.</p>

    <pre><code>Compare meu mapa de habilidades com os 3 anúncios de vaga abaixo. Entregue uma tabela com: requisito, nível de aderência (tenho, tenho em parte, não tenho), evidência que eu poderia mostrar e o que eu precisaria estudar. No fim, liste os 3 requisitos que mais se repetem nos anúncios. Não invente experiência que não está no meu mapa.

Meu mapa: [cole]
Anúncio 1: [cole]
Anúncio 2: [cole]
Anúncio 3: [cole]</code></pre>

    <p>Os requisitos que mais se repetem são o seu alvo de estudo. Se o mesmo item aparece nos três anúncios, ele vale mais do que um curso longo sobre um tema que só uma vaga pede. Para refletir no currículo, o guia de <a href="/artigos/adaptar-curriculo-para-cada-vaga-com-ia-palavras-da-vaga-sem-inventar">adaptar o currículo para cada vaga</a> mostra como usar as palavras da vaga sem exagerar, e o texto sobre <a href="/artigos/curriculo-e-triagem-com-ia-como-recrutadores-filtram-candidatos">currículo e triagem com IA</a> explica como a triagem lê o documento.</p>

    <h2>Passo 4: plano de 90 dias</h2>

    <table>
      <thead>
        <tr><th>Período</th><th>Foco</th><th>Entrega</th></tr>
      </thead>
      <tbody>
        <tr><td>Dias 1 a 15</td><td>Inventário, escolha das 2 ocupações-alvo e conversa com 2 pessoas da área</td><td>Mapa de habilidades e lista de perguntas</td></tr>
        <tr><td>Dias 16 a 45</td><td>Estudo dos 3 requisitos mais repetidos, 5 a 6 horas por semana</td><td>Anotações e exercícios resolvidos</td></tr>
        <tr><td>Dias 46 a 75</td><td>Projeto de prova: um trabalho pequeno e real, que mostre a habilidade</td><td>Página ou arquivo para mostrar</td></tr>
        <tr><td>Dias 76 a 90</td><td>Currículo, LinkedIn e primeiras candidaturas e conversas</td><td>10 candidaturas ou contatos qualificados</td></tr>
      </tbody>
    </table>

    <p>Os números são sugestão de ritmo, não uma regra. Quem trabalha em turno integral e cuida da família pode esticar para 120 dias sem problema: a constância pesa mais do que a velocidade. Para organizar o estudo, o guia de <a href="/artigos/estudar-com-google-agenda-blocos-de-tempo-e-revisao-espacada">estudar com Google Agenda</a> mostra blocos de tempo e revisão espaçada.</p>

    <h2>Exemplo com números: de atendimento para operações</h2>

    <p>Veja um caso fictício, só para ilustrar. Bruna tem 34 anos, 9 anos em atendimento de uma loja e quer migrar para operações de e-commerce. Ela lista 20 tarefas, e a IA agrupa em 7 habilidades: resolução de problema, comunicação escrita, controle de pedidos, relacionamento com fornecedor, uso de planilha, treinamento de colegas e disciplina de prazo. Nos 3 anúncios que ela escolhe, os requisitos repetidos são planilha avançada, indicadores de entrega e conhecimento de plataforma de vendas.</p>

    <p>O plano de Bruna: 6 horas por semana, com um curso gratuito de planilha e um projeto de prova, que é uma planilha de acompanhamento de pedidos atrasados com 3 indicadores. Ela mostra o projeto no LinkedIn e no currículo, e conversa com duas pessoas que já trabalham na área. Não há garantia de vaga, e ela sabe disso: o objetivo dos 90 dias é entrar em processos seletivos com algo concreto para mostrar. Para montar a prova, o texto <a href="/artigos/case-de-portfolio-com-ia-como-transformar-um-projeto-em-historia">case de portfólio com IA</a> ajuda a contar o projeto, e o de <a href="/artigos/como-montar-portfolio-de-habilidades-de-ia-para-recrutadores">portfólio de habilidades para recrutadores</a> mostra onde publicar.</p>

    <h2>Onde procurar vagas e se registrar</h2>

    <p>O <a href="https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/sistema-nacional-de-emprego-sine/portal-emprega-brasil" target="_blank" rel="noopener noreferrer">Portal Emprega Brasil</a>, do Sistema Nacional de Emprego (Sine), permite cadastrar dados pessoais, formação e experiência e buscar vagas no município de residência, pelo portal, pelo aplicativo Carteira Digital ou em uma unidade do Sine, segundo a página oficial consultada em 29/10/2026. Manter o perfil atualizado e indicar outras áreas de qualificação melhora a correspondência com as vagas.</p>

    <p>Além disso, ajuste o LinkedIn com o vocabulário da ocupação-alvo, seguindo o guia do <a href="/artigos/perfil-do-linkedin-com-ia-titulo-sobre-e-palavras-chave-para-recrutadores">perfil do LinkedIn com IA</a>, e treine uma <a href="/artigos/apresentacao-pessoal-de-30-segundos-com-ia-pitch-para-networking-e-linkedin">apresentação pessoal de 30 segundos</a> que explique a mudança sem pedir desculpa: de onde você vem, o que traz e para onde vai.</p>

    <h2>Cuidados financeiros e de rotina</h2>

    <p>Mudar de área pode significar uma fase de salário menor ou de renda irregular. Antes de pedir demissão, calcule quantos meses de despesas você consegue cobrir. O guia de <a href="/artigos/reserva-de-emergencia-para-quem-tem-renda-variavel-orcamento-com-ia-e-inss">reserva de emergência com renda variável</a> ajuda no cálculo, e o de <a href="/artigos/clt-ou-pj-como-comparar-proposta-com-ia-e-planilha">CLT ou PJ</a> mostra como comparar propostas quando o modelo de contratação também muda. Na maioria dos casos, a transição mais segura acontece enquanto você ainda trabalha, usando noites e fins de semana.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Dica</span>
      <p>Pergunte a duas pessoas que já fizeram a mesma troca o que elas fariam diferente. Uma conversa de 20 minutos evita meses de estudo na direção errada.</p>
    </div>

    <h2>Erros comuns na troca de área</h2>

    <ul class="checklist">
      <li>Escolher a área pelo salário ou pela moda, sem ler as atividades reais da ocupação.</li>
      <li>Estudar muitos cursos e não entregar nenhum projeto para mostrar.</li>
      <li>Pedir à IA um currículo "perfeito" e aceitar frases que você não sustenta em uma entrevista.</li>
      <li>Esconder a experiência anterior em vez de transformá-la em vantagem: quem vem de outra área traz um olhar diferente.</li>
      <li>Pedir demissão antes de ter reserva e um plano de candidaturas.</li>
      <li>Desanimar com as primeiras respostas negativas. O texto sobre <a href="/artigos/sindrome-do-impostor-usar-ia-nao-te-torna-menos-capaz">síndrome do impostor</a> e o guia de <a href="/artigos/como-se-recolocar-no-mercado-depois-de-ser-substituido-por-automacao">recolocação depois de uma substituição por automação</a> falam de como lidar com essa fase.</li>
    </ul>

    <p>Hoje, reserve 30 minutos, liste 15 tarefas do seu trabalho e rode o primeiro prompt. Se a mudança der certo, os <a href="/artigos/primeiros-90-dias-no-emprego-novo-com-ia-plano-e-contrato-de-experiencia">primeiros 90 dias no emprego novo</a> serão o próximo capítulo. A categoria de <a href="/categoria/carreira">carreira do Portal da AI</a> reúne os guias seguintes.</p>
  `,
  faq: [
    {
      question: "Como mudar de área de carreira sem experiência?",
      answer:
        "Liste as tarefas que você já faz e traduza em habilidades transferíveis, escolha 2 ou 3 ocupações-alvo, compare com vagas reais e feche as lacunas mais repetidas com estudo e um projeto de prova. A experiência anterior continua valendo, só muda o vocabulário.",
    },
    {
      question: "A IA pode escolher a nova profissão por mim?",
      answer:
        "Ela ajuda a organizar suas habilidades e a comparar com descrições de vaga, mas a escolha envolve gosto, renda, rotina e mercado local. Use as respostas como hipótese, converse com quem já trabalha na área e confira os fatos antes de decidir.",
    },
    {
      question: "O que é a CBO e como consultar?",
      answer:
        "A Classificação Brasileira de Ocupações é o catálogo nacional que identifica as ocupações do mercado de trabalho, criado por portaria em 2002. A página do Ministério do Trabalho indica a busca por título no site da CBO, útil para ver nomes oficiais, sinônimos e atividades.",
    },
    {
      question: "Quanto tempo leva para mudar de área?",
      answer:
        "Depende da distância entre as áreas, do tempo semanal de estudo e do mercado. Um plano de 90 dias, com 5 a 6 horas por semana, serve para entrar em processos seletivos com algo para mostrar, mas não garante vaga. Muita gente leva mais tempo, e tudo bem.",
    },
    {
      question: "Onde procurar vagas de graça?",
      answer:
        "O Portal Emprega Brasil, do Sistema Nacional de Emprego, permite cadastrar seus dados e buscar vagas no seu município pelo portal, pelo app Carteira Digital ou em uma unidade do Sine. Também vale usar o LinkedIn e perguntar a contatos da área.",
    },
  ],
};
