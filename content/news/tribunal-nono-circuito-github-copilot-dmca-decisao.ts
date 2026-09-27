import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "tribunal-nono-circuito-github-copilot-dmca-decisao",
  title: "Tribunal dos EUA decide que Copilot e Codex criam obras novas, não cópias, em primeira decisão de apelação sobre IA generativa e DMCA",
  author: "Bruno Danello",
  summary:
    "Um painel de três juízes do Nono Circuito manteve a rejeição de uma ação de programadores contra GitHub, Microsoft e OpenAI, considerando que o código gerado pelo Copilot e pelo Codex constitui obra nova, não uma cópia da qual se removeu informação de direitos autorais — duas alegações de quebra de contrato sobre licenças open-source seguem em curso.",
  sourceName: "Haynes Boone",
  sourceUrl: "https://www.haynesboone.com/news/alerts/ai-legal-news-ninth-circuit-rejects-dmca-section-1202(b)-theory",
  date: "2026-09-16",
  content: `
    <p>Um painel de três juízes do Nono Circuito de Apelações dos Estados Unidos confirmou, em 16 de setembro, a rejeição de uma ação movida por programadores anônimos contra GitHub, Microsoft e OpenAI, na que é considerada a primeira decisão relevante de um tribunal de apelação sobre responsabilidade de ferramentas de IA generativa sob a Lei de Direitos Autorais do Milênio Digital (DMCA) dos Estados Unidos.</p>

    <h2>O argumento dos programadores e a resposta do tribunal</h2>
    <p>Os autores da ação, desenvolvedores que publicam código aberto, alegavam que o Copilot e o Codex reproduziam trechos do código deles sem atribuição, violando a seção 1202(b) da DMCA — dispositivo voltado a coibir a remoção de informação de gestão de direitos autorais de uma obra já existente. Segundo o juiz Eric Miller, relator do caso, essa seção da lei se aplica a atos contra informações vinculadas a uma obra que já existe, enquanto a reclamação descrevia uma ferramenta que cria "obras novas que nunca continham essa informação".</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">O que ficou de fora da decisão</span>
      <p>O tribunal não decidiu o argumento mais amplo sobre os dados de treinamento em si, porque os próprios advogados dos programadores deixaram de sustentar essa tese perante o tribunal de origem — a corte também recusou considerar uma teoria alternativa sobre remoção de informação durante o treinamento, por entender que ela havia sido abandonada anteriormente no processo.</p>
    </div>

    <h2>Por que isso importa</h2>
    <p>A decisão não encerra o debate jurídico sobre uso de código protegido por direitos autorais no treinamento de IA — duas alegações de quebra de contrato sobre termos de licenças open-source seguem tramitando no tribunal de origem —, mas estabelece um precedente relevante ao distinguir entre gerar uma obra nova a partir de um modelo treinado e efetivamente copiar uma obra removendo sua atribuição original. Para desenvolvedores e empresas que usam ferramentas de programação assistida por IA no dia a dia, o caso reforça como a fronteira legal em torno de direitos autorais e IA generativa segue sendo definida processo a processo, sem uma resposta definitiva ainda sobre o uso de dados de treinamento.</p>
  `,
};
