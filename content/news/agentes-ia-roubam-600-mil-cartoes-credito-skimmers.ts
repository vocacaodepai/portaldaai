import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "agentes-ia-roubam-600-mil-cartoes-credito-skimmers",
  title: "Criminoso usa agentes de IA para roubar 600 mil cartões de crédito de mais de cem lojas online",
  author: "Bruno Danello",
  summary:
    "Segundo pesquisadores de segurança, um único operador orquestrou agentes de IA de código aberto — rodando modelos como DeepSeek, Kimi e uma versão mais antiga do Claude — para instalar 'skimmers' de dados de pagamento em pelo menos 119 sites, incluindo uma rede hoteleira da Fortune 500 e uma grande companhia aérea dos EUA, a um custo médio de US$ 25 por empresa atacada.",
  sourceName: "BleepingComputer",
  sourceUrl: "https://www.bleepingcomputer.com/news/security/malicious-ai-agents-steal-600k-credit-cards-infect-100-plus-sites-with-skimmers/",
  date: "2026-09-22",
  content: `
    <p>Pesquisadores de segurança identificaram uma campanha criminosa em andamento desde pelo menos julho, na qual um único operador usa frameworks de agentes de IA de código aberto para atacar centenas de lojas online em escala e roubar dados de cartão de crédito. Em apenas cinco dias, o atacante comprometeu ao menos 27 empresas e lançou mais de cem ataques; no total, a campanha já soma pelo menos 119 sites comprometidos e mais de 600 mil registros de cartão de crédito roubados, incluindo uma rede hoteleira da lista Fortune 500 e uma grande companhia aérea americana.</p>

    <p>Três frameworks de orquestração de agentes de IA disponíveis publicamente — Strix, Cairn e Hermes — formaram a espinha dorsal da operação, cada um responsável por uma etapa diferente da cadeia de ataque. Os modelos usados para conduzir os ataques incluíam os sistemas chineses DeepSeek e Kimi, além do Claude Opus 4.6, uma versão mais antiga do modelo de ponta da Anthropic. Segundo pesquisadores, rodar um ataque de skimmer orientado por agentes de IA custa em média apenas US$ 25 por empresa alvo — uma conta de OpenRouter usada na operação gastou pouco mais de US$ 7 mil ao longo de quatro semanas, com o custo total da campanha estimado entre US$ 12 mil e US$ 18 mil.</p>

    <div class="callout-box callout-bad">
      <span class="callout-label">Baixo custo, alto alcance</span>
      <p>O operador, aparentemente de origem chinesa, deu instruções breves aos agentes sobre os objetivos da operação e deixou que eles cuidassem do resto — incluindo técnicas como inserir código malicioso em arquivos JavaScript legítimos, envenenar conteúdo de CDN e caches de servidor, alterar implantações Kubernetes e usar tarefas agendadas para restaurar o skimmer sempre que ele era removido.</p>
    </div>

    <h2>Crime cibernético cada vez mais barato e automatizado</h2>
    <p>O caso ilustra como agentes de IA de código aberto, combinados com modelos relativamente acessíveis, já reduzem drasticamente o custo e a habilidade técnica necessários para conduzir ataques em escala industrial — uma tendência que reforça a importância de escolher e configurar com cuidado qualquer ferramenta de IA usada no ambiente de trabalho. Vale revisitar nosso <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher uma ferramenta de IA com segurança</a>.</p>
  `,
};
