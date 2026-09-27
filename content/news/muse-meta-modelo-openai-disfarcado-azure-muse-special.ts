import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "muse-meta-modelo-openai-disfarcado-azure-muse-special",
  title: "Pesquisador encontra indícios de que o Muse, da Meta, usa em segredo um modelo da OpenAI por trás dos bastidores",
  author: "Bruno Danello",
  summary:
    "Uma sessão de subagente do Muse foi encontrada roteada para um modelo chamado 'azure/muse-special', com marcas técnicas — como o formato de criptografia e de IDs de chamada de ferramenta — que apontam para um modelo real da OpenAI rodando por trás da marca da Meta, ao lado do modelo próprio da empresa, batizado de 'Avocado'.",
  sourceName: "mouse.dev",
  sourceUrl: "https://mouse.dev/blog/muse-special/",
  date: "2026-09-26",
  content: `
    <p>Um pesquisador de segurança que investigava o funcionamento interno do Muse, assistente de IA de propósito geral da Meta, encontrou uma sessão de subagente roteada para um modelo identificado internamente como "azure/muse-special" — nome que, segundo a análise, esconde na verdade um modelo da OpenAI rodando por trás da marca da Meta, ao lado do modelo desenvolvido internamente pela empresa, apelidado de "Avocado".</p>

    <h2>As evidências técnicas</h2>
    <p>A assinatura encontrada na resposta do modelo trazia a tag "gpt_responses_v1" e um payload criptografado começando com "gAAAAA" — padrão característico usado pela OpenAI. Os IDs de chamada de ferramenta também seguiam o formato "call_" seguido de 24 caracteres alfanuméricos, outra marca registrada da forma como a OpenAI estrutura esse tipo de identificador. Juntos, esses detalhes técnicos levaram pesquisadores a concluir que o modelo "muse-special" é, muito provavelmente, um modelo da OpenAI ou parte da API Responses da própria OpenAI.</p>

    <div class="callout-box callout-warn">
      <span class="callout-label">Por que isso chama atenção</span>
      <p>A Meta vem investindo publicamente há dois anos na narrativa de que seus próprios modelos de IA são capazes de competir de igual para igual com os das concorrentes. Se a empresa está de fato roteando parte do tráfego de produção do Muse para um modelo de um concorrente direto, isso sugere uma aposta interna mais cautelosa sobre a própria tecnologia do que a imagem pública projetada pela empresa.</p>
      </div>

    <h2>Por que isso importa</h2>
    <p>A descoberta chega na mesma semana em que outros pesquisadores de segurança relataram falhas distintas no Muse, incluindo uma vulnerabilidade zero-day no aplicativo para macOS e um caso em que o assistente foi induzido, com poucos comandos, a expor todo o sistema de arquivos de sua máquina virtual interna. Somados, os episódios reforçam um ponto que já discutimos em nosso texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade: o que você entrega sem perceber</a>: por trás da interface polida de um assistente de IA, usuários raramente sabem ao certo qual modelo está processando seus dados, nem quão bem protegida está essa infraestrutura.</p>
  `,
};
