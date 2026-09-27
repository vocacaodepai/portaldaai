import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "databricks-adquire-row-zero-genie-planilhas",
  title: "Databricks adquire startup de planilhas Row Zero para reforçar seu assistente de IA Genie",
  author: "Bruno Danello",
  summary:
    "A aquisição traz para o Genie, assistente corporativo de IA da Databricks, uma interface de planilha capaz de lidar com bilhões de linhas conectadas a fontes de dados ao vivo e governadas — os termos financeiros do negócio não foram divulgados.",
  sourceName: "Databricks",
  sourceUrl: "https://www.databricks.com/company/newsroom/press-releases/databricks-acquires-row-zero-bringing-live-governed-spreadsheets",
  date: "2026-09-24",
  content: `
    <p>A Databricks anunciou a aquisição da Row Zero, startup de Seattle que constrói uma planilha corporativa pensada para humanos e agentes de IA trabalharem juntos sobre os mesmos dados. Segundo Patrick Wendell, cofundador da Databricks, a compra tem como objetivo reforçar o Genie, o assistente de IA corporativo da empresa, com uma interface de planilha familiar que equipes de negócio já sabem usar.</p>

    <p>Fundada em 2021 por ex-engenheiros da Amazon Web Services, a Row Zero havia captado uma rodada Série A de US$ 10 milhões no ano passado. A ferramenta se conecta diretamente a fontes de dados ao vivo e governadas, com um motor de processamento capaz de lidar com bilhões de linhas em velocidade interativa — diferente de planilhas tradicionais, que costumam travar diante de volumes de dados desse tamanho.</p>

    <div class="callout-box callout-ok">
      <span class="callout-label">De planilha para o assistente, e vice-versa</span>
      <p>Com a integração, o Genie passa a oferecer uma camada de planilha para explorar, modelar e colaborar sobre dados, apoiada na Genie Ontology, no Unity Catalog e no Unity Gateway da Databricks — a empresa também sinalizou que planeja inverter o fluxo tradicional: em vez de começar numa planilha e depois consultar o assistente, o usuário poderá começar perguntando ao Genie e abrir a resposta para edição e colaboração diretamente numa planilha.</p>
    </div>

    <p>Os termos financeiros da aquisição não foram divulgados. O movimento reforça uma tendência mais ampla entre grandes plataformas de dados e IA corporativa: comprar startups menores e especializadas para preencher lacunas específicas de interface e experiência do usuário, em vez de construir cada funcionalidade internamente do zero.</p>
  `,
};
