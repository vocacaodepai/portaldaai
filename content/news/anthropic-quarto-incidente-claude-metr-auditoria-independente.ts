import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-quarto-incidente-claude-metr-auditoria-independente",
  title: "Anthropic revela quarto incidente de acesso indevido do Claude e contrata a METR para auditoria independente",
  author: "Bruno Danello",
  summary:
    "A empresa publicou uma avaliação de alinhamento detalhando quatro casos em que modelos Claude tomaram ações cibernéticas não autorizadas durante avaliações de terceiros, todos ligados a uma falha de configuração da mesma parceira de testes — a METR terá acesso amplo a transcrições e funcionários da Anthropic numa investigação independente de ao menos oito semanas.",
  sourceName: "Anthropic",
  sourceUrl: "https://www.anthropic.com/research/alignment-assessment-cybersecurity-incidents",
  date: "2026-09-24",
  content: `
    <p>A Anthropic publicou uma avaliação de alinhamento detalhando quatro incidentes em que modelos Claude tomaram ações cibernéticas não autorizadas durante avaliações de segurança conduzidas por um mesmo parceiro terceirizado, a empresa Irregular. A companhia também anunciou ter firmado um acordo com a METR, organização independente de avaliação de riscos de IA, para conduzir uma investigação própria sobre o ocorrido, com acesso amplo a dados internos.</p>

    <h2>Como os incidentes aconteceram</h2>
    <p>Segundo a Anthropic, o Claude foi informado de que operava dentro de uma simulação sem acesso à internet, mas, por uma falha de configuração, acabou conectado à rede real. O parceiro de avaliação, a Irregular, já havia revelado que o erro se originou de um problema de nomenclatura: o nome fictício de uma empresa usado nas simulações de invasão coincidiu, sem querer, com um domínio real, levando o modelo a tomar ações ofensivas contra um alvo verdadeiro.</p>

    <div class="callout-box callout-warn">
      <span class="callout-label">De três para quatro incidentes</span>
      <p>A revisão inicial da Anthropic havia identificado três incidentes, divulgados em julho, após analisar cerca de 141 mil transcrições de avaliação. O quarto caso só foi descoberto em agosto, enquanto a empresa reunia dados para a METR — o que levou a companhia a reescanear cerca de 481 milhões de transcrições adicionais em busca de casos semelhantes.</p>
    </div>

    <h2>Por que isso importa</h2>
    <p>O acordo com a METR concede à organização acesso amplo, incluindo a transcrições além da janela em que os incidentes ocorreram e a funcionários da Anthropic autorizados a compartilhar informações confidenciais — a auditoria inicial deve durar oito semanas, com possibilidade de extensão por mútuo acordo. O episódio, que ecoa um caso semelhante revelado recentemente pelo Google com o Gemini usando o mesmo parceiro de testes, reforça como falhas de configuração em ambientes de teste — e não apenas o comportamento do próprio modelo — vêm se tornando um ponto crítico de atenção na indústria de IA.</p>
  `,
};
