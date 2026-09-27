import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "nvidia-google-emerald-ai-alianca-energia-data-centers",
  title: "Nvidia, Google e Emerald AI lançam aliança para tornar data centers de IA flexíveis na rede elétrica",
  author: "Bruno Danello",
  summary:
    "A AI Energy Management Alliance reúne as três empresas e mais 18 parceiros para desenvolver data centers capazes de ajustar dinamicamente o consumo de energia conforme as condições da rede elétrica, em troca de conexões mais rápidas à malha de energia — uma instalação piloto de quase 100 megawatts deve entrar em operação na Virgínia ainda este ano.",
  sourceName: "NVIDIA Blog",
  sourceUrl: "https://blogs.nvidia.com/blog/ai-energy-management-alliance/",
  date: "2026-09-18",
  content: `
    <p>A Emerald AI, o Google e a Nvidia anunciaram o lançamento da AI Energy Management Alliance (AEMA), uma coalizão inédita voltada a desenvolver data centers de inteligência artificial capazes de gerenciar dinamicamente o próprio consumo de eletricidade em resposta às condições da rede elétrica. A proposta central é simples: uma instalação que conseguir comprovar que sua demanda de energia pode variar quando a rede estiver sob pressão ganha, em troca, conexões mais rápidas e de menor risco à malha elétrica.</p>

    <p>Segundo as empresas, um data center flexível consegue ajustar seu consumo de energia de várias formas — deslocando cargas de processamento, descarregando baterias, usando geração própria de energia ou respondendo a emergências da rede. A ideia da AEMA é que os data centers de IA passem a ter uma relação simbiótica com a rede elétrica, em vez de apenas extrair energia dela continuamente. Dezoito parceiros já se juntaram às três empresas fundadoras, reunindo provedores de tecnologia, operadoras de data center, geradoras de energia, concessionárias e operadores regionais de rede.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Primeiro piloto ainda em 2026</span>
      <p>Ainda este ano, na Virgínia, a Nvidia, a Digital Realty e a Emerald AI vão ligar o que descrevem como a primeira "fábrica de IA" flexível em potência elétrica do mundo, com quase 100 megawatts de capacidade — projetada para comprovar, na prática, que um data center pode funcionar como uma carga precisa e controlável para a rede elétrica.</p>
    </div>

    <p>A iniciativa reflete uma preocupação crescente do setor: a demanda por capacidade computacional de IA está crescendo mais rápido do que a capacidade das redes elétricas de acompanhar esse ritmo, um gargalo que já discutimos em relação a projetos como o Stargate, da OpenAI. Tornar os data centers mais "flexíveis" no consumo de energia é uma das apostas da indústria para acelerar a expansão da infraestrutura de IA sem sobrecarregar ainda mais redes elétricas já pressionadas em diversas regiões dos Estados Unidos.</p>
  `,
};
