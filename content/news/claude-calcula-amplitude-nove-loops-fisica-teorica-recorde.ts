import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "claude-calcula-amplitude-nove-loops-fisica-teorica-recorde",
  title: "Claude calcula amplitude de espalhamento de nove loops e supera recorde de física teórica de 2023",
  author: "Bruno Danello",
  summary:
    "Físicos da Anthropic pediram ao Claude que calculasse a amplitude de espalhamento de seis partículas na teoria N=4 super-Yang-Mills em nove loops — um loop além do recorde de oito loops publicado em 2023 pelo físico Lance Dixon, que levou duas semanas verificando o resultado antes de confirmá-lo correto.",
  sourceName: "Anthropic",
  sourceUrl: "https://www.anthropic.com/research/yes-claude-can-do-nine-loops",
  date: "2026-09-25",
  content: `
    <p>Dois físicos da Anthropic, Liam Fitzpatrick e Siddharth Mishra-Sharma, relataram que o Claude calculou a amplitude de espalhamento de seis partículas (conhecida como "hexágono") na teoria N=4 super-Yang-Mills planar em nove loops — um loop além do recorde de oito loops publicado em 2023 pelo físico Lance Dixon, do SLAC e da Universidade Stanford.</p>

    <h2>Um desafio lançado publicamente</h2>
    <p>O físico Matt von Hippel havia lançado, em 7 de agosto, um desafio público pedindo que empresas de IA tentassem resolver um dos problemas mais difíceis em aberto no campo de amplitudes de espalhamento: calcular a supergravidade N=8 em sete loops, ou encontrar a amplitude de seis partículas em N=4 super-Yang-Mills em nove loops. Depois de perguntar ao próprio Claude qual dos dois problemas ele teria mais chance de resolver, os pesquisadores deram um comando simples: calcular a amplitude hexágono de seis partículas em N=4 SYM planar em nove loops.</p>

    <div class="callout-box callout-ok">
      <span class="callout-label">Como o cálculo foi feito</span>
      <p>O Claude chegou ao resultado por dois caminhos diferentes — o método de bootstrap original e uma abordagem indireta via fator de forma —, usando cerca de uma semana de processamento em 96 processadores, a um custo entre US$ 1 mil e US$ 2 mil para cada um dos dois métodos.</p>
    </div>

    <h2>Por que isso importa</h2>
    <p>O físico Lance Dixon, autor do recorde anterior, passou duas semanas verificando o resultado produzido pelo Claude antes de confirmar que estava correto. O episódio se soma a outros casos recentes em que empresas de IA usam seus próprios modelos para acelerar pesquisa científica de ponta — como já vimos com a Anthropic ao anunciar avanços do Claude em pesquisa biológica autônoma — e reforça como modelos de linguagem já conseguem contribuir de forma concreta em áreas de física teórica consideradas extremamente especializadas, mesmo sem terem sido treinados especificamente para esse tipo de cálculo.</p>
  `,
};
