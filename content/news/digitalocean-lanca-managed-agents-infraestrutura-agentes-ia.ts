import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "digitalocean-lanca-managed-agents-infraestrutura-agentes-ia",
  title: "DigitalOcean lança 'Managed Agents' para rodar agentes de IA sem gerenciar infraestrutura",
  author: "Bruno Danello",
  summary:
    "O novo serviço, em prévia pública, combina ambiente de execução isolado, acesso controlado a mais de 16 mil ferramentas e inferência para mais de 75 modelos numa única plataforma — cobrando só pelo tempo em que o agente está realmente ativo.",
  sourceName: "DigitalOcean",
  sourceUrl: "https://www.digitalocean.com/blog/managed-agents-public-preview",
  date: "2026-09-22",
  content: `
    <p>A DigitalOcean anunciou em 22 de setembro a prévia pública do Managed Agents, um conjunto de serviços que promete simplificar a infraestrutura necessária para rodar agentes de IA em produção — sem que times de desenvolvimento precisem construir e manter essa infraestrutura por conta própria.</p>

    <p>O serviço reúne três componentes: um ambiente de execução isolado (Harness Runtime), que combina microVMs com ferramentas embutidas e sandbox para código; um gateway de ações (Action Gateway), que dá acesso controlado a mais de 16 mil ferramentas de mais de 500 provedores por meio de um endpoint gerenciado; e um motor de inferência (Inference Engine), que conecta os agentes a mais de 75 modelos, incluindo Nemotron 3 Ultra, Kimi K3, GLM 5.3, Claude Fable 5.1 e GPT-6 Astra.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Como funciona a cobrança</span>
      <p>O preço é baseado em uso ativo: US$ 0,044 por vCPU-hora e US$ 0,0095 por GB-hora de memória. A empresa não cobra taxa de CPU enquanto o agente espera resposta de um modelo ou resultado de uma ferramenta — cada sessão "pausa" quando fica ociosa.</p>
    </div>

    <h2>Por que isso importa</h2>
    <p>O lançamento reflete uma tendência maior no mercado de infraestrutura de IA: conforme mais empresas adotam <a href="/artigos/agentes-de-ia-o-futuro-do-trabalho-autonomo-explicado">agentes de IA autônomos</a> no dia a dia, cresce a demanda por plataformas que abstraem a complexidade técnica de rodar esses agentes com segurança — combinando execução, acesso a ferramentas externas e escolha de modelo em um único lugar, em vez de exigir que cada equipe monte essa peça por peça. Esse tipo de infraestrutura gerenciada segue a mesma lógica que já discutimos em <a href="/artigos/notion-zapier-e-ia-automatize-seu-negocio-sem-programar">Notion, Zapier e IA: automatize seu negócio sem programar</a> — reduzir a barreira técnica para quem quer aplicar IA na prática, só que voltado a desenvolvedores que constroem agentes mais sofisticados.</p>
  `,
};
