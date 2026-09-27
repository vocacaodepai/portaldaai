import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "pilgrim-capta-25-milhoes-biosseguranca-thiel-anthropic",
  title: "Startup de biossegurança Pilgrim capta US$ 25 milhões com apoio pessoal de Thiel e pesquisadores da Anthropic",
  author: "Bruno Danello",
  summary:
    "A rodada, liderada pela Buckley Ventures, avalia a Pilgrim em US$ 150 milhões e teve participação pessoal de Peter Thiel, Fred Ehrsam e dos pesquisadores de segurança da Anthropic Logan Graham e Sholto Douglas. A empresa combina sensores de ar com sequenciamento genômico no dispositivo 'Argus' para detectar ameaças biológicas, sob um acordo de biovigilância com o CDC dos EUA.",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/09/23/pilgrim-raises-25m-to-build-ai-powered-biosecurity-sensors/",
  date: "2026-09-23",
  content: `
    <p>A Pilgrim, startup de biossegurança que usa inteligência artificial para detectar ameaças biológicas antes que se espalhem, levantou uma rodada seed de US$ 25 milhões liderada pela Buckley Ventures, avaliando a empresa em US$ 150 milhões. Chama atenção a lista de investidores pessoais: Peter Thiel, o cofundador da Coinbase Fred Ehrsam e dois pesquisadores de segurança da própria Anthropic, Logan Graham e Sholto Douglas, participaram da rodada como pessoas físicas — um sinal de que o tema de biossegurança ligada a IA já atrai capital de fora do universo tradicional de venture capital em saúde.</p>

    <h2>Como funciona o dispositivo Argus</h2>
    <p>O produto central da Pilgrim é o "Argus", um dispositivo que combina amostragem contínua do ar com sequenciamento genômico, processado por modelos de IA treinados para reconhecer padrões associados a patógenos emergentes ou agentes biológicos manipulados. A proposta é reduzir o tempo entre a liberação de um agente biológico no ambiente e sua detecção, hoje medido em dias, para uma janela de horas.</p>

    <div class="callout-box callout-ok">
      <span class="callout-label">Parceria com o CDC</span>
      <p>A empresa já opera sob um acordo de biovigilância com o CDC (Centro de Controle e Prevenção de Doenças dos Estados Unidos), o que dá à tecnologia um primeiro cliente institucional de peso antes mesmo de uma expansão comercial mais ampla.</p>
    </div>

    <h2>Por que investidores de IA estão de olho em biossegurança</h2>
    <p>A entrada de nomes ligados à segurança de modelos de IA, como Graham e Douglas, reflete uma preocupação que já discutimos em <a href="/noticias/altman-amodei-conselho-seguranca-onu-riscos-ia">como líderes do setor vêm tratando riscos catastróficos ligados à IA em fóruns como a ONU</a>: a mesma capacidade que torna modelos de IA úteis para design biológico também levanta o risco de uso indevido, e ferramentas de detecção como a da Pilgrim são vistas como parte da resposta defensiva a esse risco, não apenas como mais uma aposta de biotecnologia.</p>
  `,
};
