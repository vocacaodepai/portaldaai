import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "google-lanca-satelite-tpu-project-suncatcher-espaco",
  title: "Google vai lançar satélite com TPUs em órbita para testar data centers de IA no espaço",
  author: "Bruno Danello",
  summary:
    "O satélite experimental do Project Suncatcher, carregando quatro TPUs e alimentado por painéis solares de cerca de 1 quilowatt, decola em 1º de outubro a bordo de um foguete Falcon 9 da SpaceX, para medir como os chips resistem às forças de lançamento, à radiação e às variações térmicas extremas da órbita baixa da Terra.",
  sourceName: "Data Center Dynamics",
  sourceUrl: "https://www.datacenterdynamics.com/en/news/project-suncatcher-google-to-launch-tpus-into-orbit-with-planet-labs-envisions-1km-arrays-of-81-satellite-compute-clusters/",
  date: "2026-09-24",
  content: `
    <p>O Google vai lançar, em 1º de outubro, um satélite experimental carregando quatro unidades de processamento tensorial (TPUs) — chips próprios usados para treinar e rodar modelos de IA — como parte do Project Suncatcher, programa de pesquisa que explora a viabilidade de longo prazo de instalar data centers de aprendizado de máquina em órbita baixa da Terra. O satélite, batizado de MVP, decola a bordo de um foguete Falcon 9 da SpaceX, na missão de carona Transporter-18, partindo da Base da Força Espacial de Vandenberg, na Califórnia.</p>

    <p>O equipamento carrega o equivalente à capacidade computacional de um único servidor de data center, alimentado por painéis solares que fornecem cerca de 1 quilowatt de energia. A missão tem como objetivo medir como o hardware resiste às forças de lançamento — que podem chegar a até 10 vezes a força da gravidade sobre o satélite como um todo, e entre 50 e 100 vezes sobre componentes individuais como os chips TPU —, além de radiação e variações térmicas extremas do ambiente espacial.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Uma aposta de longo prazo</span>
      <p>O Google vai fazer parceria com a Planet Labs no Project Suncatcher, com planos de lançar dois satélites adicionais até o início de 2027 para explorar o potencial de clusters maiores de computação em órbita — a empresa já imagina arranjos de até 81 satélites organizados em um formato de cerca de 1 quilômetro de extensão.</p>
    </div>

    <h2>Data centers saindo da Terra?</h2>
    <p>A iniciativa do Google ilustra até que ponto a demanda por infraestrutura de IA está levando grandes empresas de tecnologia a considerar alternativas cada vez mais ambiciosas para resolver gargalos de energia e espaço físico — mesmo que, por enquanto, o projeto ainda esteja na fase de prova de conceito, longe de uma aplicação comercial viável.</p>
  `,
};
