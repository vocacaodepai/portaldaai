import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "google-floresta-finlandia-data-center-investigacao",
  title: "Finlândia investiga Google por desmatar floresta antes de laudo ambiental",
  summary:
    "Órgão finlandês apura se a Google derrubou mais de 300 hectares de floresta para data centers de IA sem concluir a avaliação de impacto ambiental exigida.",
  author: "Bruno Danello",
  sourceName: "The Star (Malásia)",
  sourceUrl:
    "https://www.thestar.com.my/tech/tech-news/2026/10/05/finnish-town-braces-for-change-from-google-data-centres",
  date: "2026-10-05",
  publishedAt: "2026-10-07T08:40:00-03:00",
  imageQuery: "Google logo",
  topic: "regulacao",
  content: `
    <p>A Agência de Licenciamento e Supervisão da Finlândia (LVV, na sigla finlandesa) abriu uma apuração para saber se a Google derrubou mais de 300 hectares de floresta no norte do país antes de concluir a avaliação de impacto ambiental exigida por lei para o projeto. Segundo reportagem do <a href="https://www.thestar.com.my/tech/tech-news/2026/10/05/finnish-town-braces-for-change-from-google-data-centres" rel="noopener noreferrer nofollow" target="_blank">The Star</a>, publicada em 5 de outubro, o desmatamento ocorre no município de Muhos e em outras três localidades (Kajaani, Vaala e Hamina), onde a empresa constrói um complexo de data centers avaliado em 13 bilhões de euros, o maior investimento da Google na Europa.</p>

    <p>A lei finlandesa exige avaliação de impacto ambiental obrigatória para desmatamentos acima de 200 hectares, e a Tuike Finland Oy (TFO), empresa local que representa a Google no projeto, já havia ultrapassado esse limite enquanto o processo de avaliação ainda corria. A Associação Finlandesa para a Conservação da Natureza pediu formalmente que as operações fossem suspensas até que a situação de conformidade com a lei fosse esclarecida, mas a LVV, até a publicação da reportagem, havia apenas pedido explicações à TFO, sem determinar parada das obras.</p>

    <figure>
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Finnish_forest_in_October.jpg" alt="Floresta finlandesa típica em outubro, com árvores e vegetação do tipo afetado pelo desmatamento questionado" />
      <figcaption>Foto: Olga1969 / Wikimedia Commons (CC BY 4.0)</figcaption>
    </figure>

    <h2>Um projeto que já estava em avaliação desde maio</h2>
    <p>O corte de árvores no terreno começou em março de 2026. Em abril, a Google pediu uma isenção da avaliação de impacto ambiental, e em maio o projeto entrou formalmente no procedimento de avaliação, que segue em curso. Apesar disso, segundo a reportagem, o desmatamento continuou durante todo o verão europeu, e imagens de satélite mostram áreas que deveriam estar protegidas já completamente niveladas, o equivalente a cerca de 420 campos de futebol.</p>
    <p>O porta-voz da Google, Sondre Ronander, defendeu que "as atividades de corte de árvores ocorreram em conformidade com as exigências da Lei Florestal" finlandesa, e a empresa afirma que o terreno foi corretamente levantado antes das escavadeiras entrarem em ação, para evitar dano a áreas de alto valor ambiental. Já a presidente do conselho de conservação local, Hanna Halmeenpaa, argumenta o contrário: para ela, "as operações neste canteiro de obras deveriam ser suspensas" enquanto não houver clareza sobre a legalidade do procedimento.</p>
    <p>O caso ecoa outras disputas recentes entre big techs e comunidades locais em torno da expansão acelerada de infraestrutura de inteligência artificial. Nos Estados Unidos, por exemplo, a Oracle já havia invocado <a href="/noticias/oracle-force-majeure-data-center-stargate-novo-mexico">força maior para atrasar um data center do projeto Stargate no Novo México</a>, e a Amazon precisou encerrar acordos de confidencialidade que escondiam detalhes de negociações com comunidades vizinhas a seus data centers, como mostrou o <a href="/noticias/aws-amazon-fim-nda-data-centers-bilhao-comunidades">fim dos NDAs da AWS relatado pelo Portal da AI</a>. No Brasil, o movimento segue direção diferente: o governo federal sancionou a lei Redata, que oferece incentivo fiscal para atrair data centers de IA ao país, como já noticiamos na <a href="/noticias/lula-sanciona-redata-incentivo-fiscal-data-centers-ia">sanção da Redata por Lula</a>.</p>

    <h2>Por que isso importa para quem trabalha e empreende com IA no Brasil</h2>
    <p>O episódio na Finlândia interessa ao leitor brasileiro por um motivo direto: mostra o outro lado da corrida por infraestrutura de IA que sustenta ferramentas como Gemini, ChatGPT e Claude no dia a dia de quem usa essas plataformas para trabalhar. Cada novo data center de ponta é uma peça da capacidade computacional que permite treinar e operar modelos cada vez mais potentes, mas esse crescimento físico tem custo ambiental e social que nem sempre acompanha o ritmo dos lançamentos de produto. Quando um país como a Finlândia, conhecido pela regulação ambiental rigorosa, questiona se uma das maiores empresas de tecnologia do mundo cumpriu as próprias regras, isso é um sinal de que a expansão de infraestrutura de IA está testando os limites de fiscalização mesmo em lugares com instituições fortes.</p>
    <p>Para quem usa produtos Google no Brasil, como Gemini, Google Cloud ou Workspace, o caso também serve de termômetro sobre a sustentabilidade do crescimento dessas empresas: já tratamos aqui de como a <a href="/noticias/google-cloud-gemini-dados-brasil-outubro">Google Cloud ampliou a oferta do Gemini com dados hospedados no Brasil</a>, parte da mesma estratégia de expansão de infraestrutura que hoje gera atrito na Finlândia. Episódios de desmatamento questionado, combinados a outros problemas de licenciamento ambiental em data centers pelo mundo, podem se traduzir em atrasos de obras, custos extras de compliance e até pressão de investidores e reguladores por mais transparência, o que no fim das contas afeta o ritmo de expansão de capacidade computacional disponível para empresas e desenvolvedores que dependem dessas nuvens.</p>

    <h2>O apetite por energia e terra que vem com a IA</h2>
    <p>O caso finlandês também ilustra uma tensão que vem se repetindo em várias partes do mundo: data centers de IA consomem enormes quantidades de energia e exigem grandes extensões de terra, o que frequentemente choca com metas de conservação ambiental e com comunidades locais. Não é coincidência que empresas como Nvidia e Google já tenham buscado parcerias específicas para equacionar esse problema, como mostrou a <a href="/noticias/nvidia-google-emerald-ai-alianca-energia-data-centers">aliança da Nvidia e Google com a Emerald AI voltada a gestão de energia em data centers</a>. Na Finlândia, soma-se ainda a reação popular: segundo a reportagem do The Star, uma petição pedindo regras mais estritas de consumo de energia para data centers reuniu mais de 50 mil assinaturas em apenas três dias, o suficiente para forçar uma revisão do tema no parlamento do país.</p>
    <p>O prefeito de Muhos, Kimmo Hinno, resumiu o impacto local dizendo que o projeto "vai mudar completamente a situação de todo o município", em referência tanto aos empregos e investimentos que a Google promete trazer quanto às transformações na paisagem e no uso da terra que já estão em curso. É esse equilíbrio entre benefício econômico e custo ambiental que está sob escrutínio agora pela LVV, e que deve pautar debates parecidos em outros países que também correm para atrair investimento em infraestrutura de IA, incluindo o Brasil.</p>

    <div class="callout-box">
      <span class="callout-label">O que fica diferente a partir de hoje</span>
      <p>A apuração aberta pela LVV ainda não suspendeu as obras da Google na Finlândia, mas formaliza um questionamento que até agora vinha só de organizações ambientais e da imprensa local. Se a agência concluir que a Tuike Finland de fato desmatou acima do limite legal sem a avaliação de impacto ambiental concluída, o caso pode se tornar referência para como reguladores de outros países tratam a corrida por data centers de IA, inclusive em discussões sobre licenciamento ambiental que também avançam no Brasil junto com os incentivos fiscais da Redata.</p>
    </div>

    <p>Nas próximas semanas, três pontos valem acompanhamento: o desfecho formal da avaliação de impacto ambiental que segue em curso desde maio; se a LVV decide de fato ordenar a suspensão das obras pedida pela Associação Finlandesa para a Conservação da Natureza; e como a petição com mais de 50 mil assinaturas se desdobra na revisão parlamentar sobre consumo de energia de data centers. Para quem acompanha o setor de IA a partir do Brasil, o episódio reforça que a infraestrutura por trás das ferramentas de inteligência artificial que usamos no trabalho todos os dias carrega implicações ambientais e regulatórias que crescem na mesma velocidade dos lançamentos de modelo que costumam ocupar as manchetes.</p>
  `,
};
