import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "amazon-abre-seller-central-agentes-ia-claude-beta",
  title: "Amazon abre o Seller Central para agentes de IA externos, começando pelo Claude",
  author: "Bruno Danello",
  summary:
    "Na conferência Amazon Accelerate, a empresa lançou um plugin em beta nos EUA que conecta dados de vendedores — estoque, preços, listagens e métricas — ao Claude e ao assistente próprio Amazon Quick, permitindo gerenciar uma loja inteira por fora do Seller Central, com mudanças de preço ou listagem ainda sujeitas à aprovação do vendedor.",
  sourceName: "Amazon",
  sourceUrl: "https://www.aboutamazon.com/news/innovation-at-amazon/seller-assistant-plugin-amazon-quick-claude",
  date: "2026-09-23",
  content: `
    <p>A Amazon anunciou, durante sua conferência de vendedores Amazon Accelerate, em Seattle, a abertura das APIs do Seller Central para agentes de IA externos, começando por um plugin em beta nos Estados Unidos que conecta a inteligência do Seller Assistant ao Claude, da Anthropic, e ao Amazon Quick, assistente próprio da empresa. O plugin leva cerca de um minuto para ser configurado, sem necessidade de programação, e dá ao agente de IA acesso a listagens, níveis de estoque e métricas de desempenho e vendas do vendedor.</p>

    <p>Com essa integração, um vendedor pode pedir ao Claude para analisar o desempenho de um produto ou sugerir ajustes de preço e listagem diretamente pela conversa — mas qualquer mudança efetiva de preço ou conteúdo de listagem continua exigindo aprovação explícita do vendedor antes de ser aplicada. A Amazon também lançou novos fluxos de trabalho automatizados para o Seller Assistant, capazes de monitorar o negócio 24 horas por dia e reagir quando condições predefinidas pelo vendedor acontecem.</p>

    <div class="callout-box callout-ok">
      <span class="callout-label">Humano ainda decide</span>
      <p>Mesmo com acesso ampliado a dados e a capacidade de propor mudanças, o desenho do sistema mantém o vendedor no controle final: sugestões de preço ou listagem geradas pela IA não são aplicadas automaticamente, precisam de aprovação manual antes de valer.</p>
    </div>

    <h2>Mais uma grande plataforma abrindo as portas para agentes externos</h2>
    <p>O movimento da Amazon segue uma tendência maior de grandes plataformas de comércio abrindo seus sistemas para que agentes de IA de terceiros ajudem a gerenciar operações do dia a dia — reduzindo a necessidade de o lojista abrir manualmente cada painel separado. Para quem está montando ou já roda uma loja virtual, vale revisitar nosso guia de <a href="/artigos/como-montar-uma-loja-virtual-em-um-fim-de-semana-usando-ia">como montar uma loja virtual em um fim de semana usando IA</a>.</p>
  `,
};
