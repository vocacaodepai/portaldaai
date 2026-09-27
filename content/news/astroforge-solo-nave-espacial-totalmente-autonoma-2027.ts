import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "astroforge-solo-nave-espacial-totalmente-autonoma-2027",
  title: "AstroForge vai lançar em 2027 a primeira missão espacial totalmente autônoma, pilotada por IA",
  author: "Bruno Danello",
  summary:
    "A empresa de mineração de asteroides desenvolveu o Solo, um modelo de IA baseado em transformers que vai controlar a sonda Autonomy-1 do início ao fim da missão sem receber um único comando da Terra — um teste que precede o uso do sistema na sonda de mineração DeepSpace-2.",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/09/22/astroforge-is-putting-ai-in-command-of-its-next-spacecraft/",
  date: "2026-09-22",
  content: `
    <p>A AstroForge, startup americana de mineração de asteroides, anunciou que sua próxima sonda, batizada de Autonomy-1, será a primeira missão espacial da história a completar toda a sua operação sem receber um único comando enviado da Terra depois da separação do veículo de lançamento. Quem vai pilotar a sonda é o Solo, um modelo de IA desenvolvido internamente pela empresa e baseado em arquitetura transformer — a mesma família de tecnologia por trás dos grandes modelos de linguagem, adaptada aqui para lidar com navegação, rastreamento e tomada de decisão a bordo, sem esperar por instruções de controladores humanos.</p>

    <p>A Autonomy-1 vai ao espaço a bordo do primeiro voo do foguete Nova Pathfinder, da Stoke Space, servindo como demonstração completa do Solo em órbita da Terra. Antes disso, porém, o sistema já vai voar em "modo sombra" na DeepSpace-2 — a sonda de mineração de asteroides da AstroForge com lançamento previsto para o quarto trimestre de 2026 — processando dados reais da espaçonave sem que suas decisões cheguem a ser executadas, uma forma de validar o comportamento do modelo antes de confiar a ele o controle total de uma missão.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Por que não usar comando remoto?</span>
      <p>Missões distantes da Terra sofrem com atraso de comunicação — o sinal de rádio leva tempo para ir e voltar, o que torna o controle manual em tempo real inviável para decisões rápidas. Um sistema autônomo capaz de reagir sozinho a imprevistos reduz esse gargalo, mas também levanta a aposta: qualquer erro do modelo não tem como ser corrigido a tempo por um operador humano.</p>
    </div>

    <h2>Mais um passo da IA saindo do computador</h2>
    <p>O projeto da AstroForge se soma a um movimento mais amplo de modelos de IA assumindo tarefas que exigem operar no mundo físico sem supervisão constante — a mesma lógica por trás de avanços recentes em robótica industrial e agentes autônomos. Para quem quer entender melhor os conceitos por trás desse tipo de sistema, vale conferir nosso <a href="/artigos/dicionario-de-inteligencia-artificial-termos-essenciais">dicionário de inteligência artificial</a>.</p>
  `,
};
