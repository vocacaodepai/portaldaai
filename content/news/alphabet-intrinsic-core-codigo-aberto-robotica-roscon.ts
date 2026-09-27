import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "alphabet-intrinsic-core-codigo-aberto-robotica-roscon",
  title: "Alphabet abre o código do Intrinsic Core, sua plataforma de robótica industrial",
  author: "Bruno Danello",
  summary:
    "A Intrinsic, unidade de robótica da Alphabet, liberou como código aberto sob licença Apache 2.0 o núcleo de sua plataforma de robótica — compatível com o ROS e com módulos de controle, planejamento de movimento e integração de sensores — durante a ROSCon 2026, em Toronto.",
  sourceName: "Intrinsic",
  sourceUrl: "https://www.intrinsic.ai/blog/posts/introducing-intrinsic-core",
  date: "2026-09-22",
  content: `
    <p>A Intrinsic, unidade de robótica da Alphabet, anunciou durante a ROSCon 2026, em Toronto, a liberação como código aberto do Intrinsic Core — o núcleo de sua plataforma de robótica industrial, compatível com o ROS (Robot Operating System) e distribuído sob a licença permissiva Apache 2.0. Segundo a empresa, o pacote inclui o Intrinsic Control, um framework de controle em tempo real agnóstico em relação ao hardware, além de módulos de estimativa de posição (construído sobre o FoundationPose, da Nvidia), planejamento de movimento e de preensão, simulação, calibração e drivers para integração de sensores e hardware de terceiros.</p>

    <p>A proposta é reduzir a complexidade historicamente associada à programação de robôs industriais, oferecendo um ambiente de software pré-configurado que roda localmente, sem depender de nuvem. O código já está disponível no GitHub da Intrinsic.</p>

    <div class="callout-box callout-ok">
      <span class="callout-label">Código aberto acelera o setor</span>
      <p>Ao liberar componentes centrais da própria infraestrutura, a Intrinsic segue um movimento comum entre grandes empresas de tecnologia: abrir ferramentas de base para atrair desenvolvedores e padronizar o ecossistema ao seu redor, em vez de manter tudo fechado — uma aposta em volume e adoção no lugar de controle total sobre a pilha de software.</p>
    </div>

    <h2>Robótica física como nova fronteira da IA</h2>
    <p>O anúncio reforça como a corrida por inteligência artificial deixou de se concentrar só em modelos de linguagem e passou a incluir também a chamada "IA física" — sistemas que precisam perceber, planejar e agir no mundo real, não apenas gerar texto ou imagem. Para quem quer entender melhor como a automação impulsionada por IA já está mudando rotinas de trabalho, vale revisitar nosso texto sobre <a href="/artigos/automacao-com-ia-economize-horas-de-trabalho">como usar automação com IA para economizar horas de trabalho</a>.</p>
  `,
};
