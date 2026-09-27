import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "proofpoint-lanca-sistema-unificado-seguranca-dados-agentes-ia",
  title: "Proofpoint lança sistema que une segurança de dados e de agentes de IA numa só ferramenta",
  author: "Bruno Danello",
  summary:
    "O Proofpoint Agentic Data and AI Security promete fechar uma lacuna comum nas empresas: ferramentas de IA que enxergam a intenção do agente mas não o acesso a dados sensíveis, e ferramentas de dados que enxergam o dado mas não a intenção — segundo a empresa, 87% das organizações já usam assistentes de IA além da fase piloto, mas só 48% confiam que detectariam uma violação.",
  sourceName: "Proofpoint",
  sourceUrl: "https://www.proofpoint.com/us/newsroom/press-releases/proofpoint-breaks-down-divide-between-data-security-and-ai-security",
  date: "2026-09-22",
  content: `
    <p>A Proofpoint anunciou o Agentic Data and AI Security, um sistema que a empresa descreve como o primeiro do setor a tratar segurança de dados e segurança de IA como um único risco conectado, em vez de duas ferramentas separadas. A ideia parte de um problema comum em empresas que já adotaram assistentes e agentes de IA: ferramentas voltadas à IA costumam enxergar a intenção de um agente, mas não o que ele está acessando; já ferramentas de proteção de dados enxergam informações sensíveis, mas não entendem a intenção por trás do acesso. Segundo a Proofpoint, essa visão parcial deixa riscos importantes passarem despercebidos.</p>

    <p>O sistema permite que empresas liberem agentes de IA para acessar apenas os dados necessários para cada tarefa específica, com base na intenção declarada, e traduz políticas de negócio já existentes em controles aplicados em tempo real. Três agentes autônomos operam continuamente: um de detecção automática, um de investigação instantânea e um de otimização de proteção — buscando acompanhar o ritmo de um risco que cresce junto com o uso corporativo de IA.</p>

    <div class="callout-box callout-warn">
      <span class="callout-label">Confiança não acompanha a adoção</span>
      <p>Segundo relatório da própria Proofpoint sobre risco humano e de IA em 2026, 87% das organizações já levaram assistentes de IA além da fase de piloto — mas 52% delas não têm confiança de que seus controles atuais conseguiriam detectar uma violação de segurança causada por esse uso.</p>
    </div>

    <h2>Segurança tenta acompanhar a adoção acelerada</h2>
    <p>O lançamento reforça uma tendência que já vínhamos acompanhando por aqui: conforme agentes de IA ganham mais autonomia para acessar sistemas e dados corporativos, cresce também a corrida por ferramentas capazes de monitorar e conter esse acesso antes que vire um incidente de segurança. Para quem avalia como adotar ferramentas de IA com mais segurança no trabalho, vale revisitar nosso <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher uma ferramenta de IA com segurança</a>.</p>
  `,
};
