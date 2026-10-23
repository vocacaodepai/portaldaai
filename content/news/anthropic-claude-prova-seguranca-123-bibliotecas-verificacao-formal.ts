import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-claude-prova-seguranca-123-bibliotecas-verificacao-formal",
  title: "Claude prova a segurança de 123 bibliotecas abertas e acha centenas de bugs",
  summary:
    "Anthropic usou o Claude para provar que 239 pontos de entrada de 123 bibliotecas abertas não travam, e o modelo achou centenas de bugs pelo caminho.",
  author: "Bruno Danello",
  sourceName: "Anthropic",
  sourceUrl: "https://www.anthropic.com/research/formal-verification",
  date: "2026-10-23",
  publishedAt: "2026-10-23T10:35:00-03:00",
  topic: "seguranca",
  imageQuery: "Anthropic logo",
  content: `
    <p>A Anthropic publicou nesta quinta-feira (22) uma pesquisa em que o Claude escreveu provas matemáticas de segurança para mais de 100 bibliotecas de código aberto usadas no mundo real. Segundo o <a href="https://www.anthropic.com/research/formal-verification" target="_blank" rel="noopener noreferrer nofollow">texto da própria Anthropic</a>, assinado pelo time de Frontier Red Team em parceria com a empresa Theorem, foram 239 pontos de entrada em 123 bibliotecas do projeto OSS-Fuzz, do Google, provados livres de travamentos para qualquer entrada de até 64 MB. Durante o trabalho, o modelo também encontrou centenas de bugs que tinham sobrevivido a anos de testes.</p>

    <h2>O que é verificação formal e por que quase ninguém usa</h2>
    <p>Verificação formal é a técnica de provar, com matemática, que um programa obedece a regras definidas. Em vez de testar milhares de casos e torcer para não faltar nenhum, a prova garante que a regra vale para todos os casos possíveis. O problema sempre foi o custo. A Anthropic lembra que o kernel seL4 levou cerca de dois anos-pessoa para ser implementado e cerca de 20 para ser verificado. Por isso a técnica ficou restrita a sistemas críticos, como o software de aviões da Airbus.</p>
    <p>A tese do artigo é que modelos de linguagem estão baixando esse custo o suficiente para a técnica importar em segurança. O contexto é de alerta: a própria Anthropic cita que mais de mil vulnerabilidades do kernel do Linux foram divulgadas recentemente, mesmo em um software muito testado.</p>

    <h2>Como a Anthropic fez</h2>
    <p>O método tem quatro passos. Primeiro, testes de fuzzing já existentes no OSS-Fuzz viraram especificações: a regra passou a ser que o teste nunca trava, seja qual for a entrada abaixo de 64 MB. Segundo, cada biblioteca foi compilada para RISC-V e modelada com a semântica do Linux e do processador desenvolvida pela Theorem, de modo que a prova vale para o binário e não apenas para o código-fonte. Terceiro, o Claude escreveu as provas na linguagem Rocq, e o verificador de provas Rocq conferiu cada uma contra a especificação. Quarto, quando o modelo esbarrava em um travamento real, ele corrigia o código, regerava a especificação e seguia provando.</p>
    <p>Esse último passo traz um risco que os autores admitem: o modelo poderia reescrever o código só para escapar do erro, o chamado reward hacking. Para reduzir isso, a equipe penalizou correções, deu pontos extras por documentar quais entradas cada correção altera e auditou os patches.</p>

    <h2>Os números do estudo</h2>
    <p>O esforço principal levou algumas semanas. As provas somam cerca de 180 milhões de linhas de Rocq, com provas típicas de 600 mil linhas para binários de mediana de 18 mil instruções. Algumas provas exigiram centenas de milhões de tokens. Em 36 tarefas pequenas de verificação, o Opus 5.5 resolveu metade usando cerca de 40% menos tokens que o Opus 5. Quando os agentes compartilharam provas prontas, gastaram 17% menos tokens que agentes isolados, e alguns tiveram sucesso onde a tentativa solo havia falhado.</p>
    <p>Em outro experimento, um interpretador de Python escrito em Rust, verificado contra a semântica do CPython, bateu com o original em 99,95% de 1,7 milhão de programas aleatórios. O Claude também escreveu uma especificação formal da RFC 1950 e provou que a implementação de zlib do kernel do Linux a cumpre no nível do binário, repetindo o feito para cerca de outras seis bibliotecas. Em um leitor de PDF, uma tentativa de verificação revelou em uma semana tantos bugs de segurança quanto costumam ser reportados em um ano.</p>

    <h2>Que tipo de bug apareceu</h2>
    <p>Entre os exemplos, há um contador que estoura para baixo em um descompressor, ativado só por entradas de cerca de 20 MB com um layout raro, o que leva a uma escrita fora dos limites. Há uma leitura fora dos limites em um decodificador de imagens que exige uma entrada de 64 MB e mais de 2 GB de memória, e outra que só ocorre com uma sequência específica de chamadas em dois acessos ao mesmo arquivo. O Claude também redescobriu a CVE-2026-56132 na biblioteca libexpat e achou um erro de lógica em que um recurso de restrição de arquivos nem sempre era aplicado, sem nenhum travamento envolvido. Um dos bugs estava latente havia mais de uma década em um aplicativo muito usado. Fuzzers dificilmente acham esse tipo de falha porque costumam mutar entradas limitadas a cerca de 1 MB.</p>

    <h2>As limitações que a própria Anthropic aponta</h2>
    <p>O texto insiste que verificado formalmente não significa sem bugs. O verificador de provas não consegue confirmar que a especificação reflete a realidade, e a confiança recai sobre o verificador Rocq, os modelos formais de RISC-V e do sistema operacional, o compilador OCaml e o hardware. As provas cobrem binários RISC-V estáticos, de uma só thread, ligados à biblioteca musl, enquanto a maior parte dos servidores reais usa x86 ou ARM com glibc dinâmica. Elas também cobrem apenas erros de memória detectáveis pelo AddressSanitizer, só alguns pontos de entrada por biblioteca, e não tratam de corrupção causada por quem chama a biblioteca de forma errada. O custo em tokens segue alto, embora os autores esperem queda.</p>
    <p>A Anthropic vai publicar um subconjunto das provas, a semântica de RISC-V e do sistema operacional e as especificações dos testes que não conseguiu provar. Reteve as provas que poderiam expor bugs ainda sem correção. A Theorem se ofereceu para rodar o processo em outros projetos de código aberto e publicou uma skill do Claude para quem quiser começar.</p>

    <h2>Por que isso importa para você</h2>
    <p>Mesmo que você nunca vá escrever uma prova em Rocq, o resultado afeta o que roda no seu computador e nos servidores que você usa. Bibliotecas como zlib, expat e decodificadores de imagem estão dentro de navegadores, aplicativos, plugins e ferramentas de automação. Se a IA ajuda a limpar essas peças básicas, a base sobre a qual você monta seu negócio com IA fica mais sólida. Para escolher ferramentas com critério, veja o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher ferramenta de IA com segurança</a>.</p>
    <p>Há também uma lição de método. O estudo mostra que a IA rende mais quando recebe um verificador objetivo, no caso o checador de provas, que diz se o trabalho está certo ou errado. Quem usa agentes de código no dia a dia ganha o mesmo efeito ao exigir testes automáticos antes de aceitar uma mudança, tema que tocamos em <a href="/artigos/ia-vai-substituir-programadores-o-que-muda-ate-2030">IA vai substituir programadores? O que muda até 2030</a>. A conta fica clara: o modelo propõe, uma checagem independente decide.</p>
    <p>Para quem pensa em carreira, a demanda por gente que entende de segurança e de IA tende a crescer, como detalha o guia de <a href="/artigos/carreira-em-ciberseguranca-com-ia-vagas-trilha-e-habilidades">carreira em cibersegurança com IA</a>. E, como a IA também ajuda atacantes, a corrida entre quem acha e quem corrige falhas só acelera. Já cobrimos o caso em que a <a href="/noticias/anthropic-mythos-vulnerabilidade-rejetto-hfs-exploracao">IA da Anthropic achou uma falha crítica e hackers a exploraram em 24 horas</a> e o estudo em que as <a href="/noticias/terra-security-correcoes-seguranca-falham-ia-atacantes">correções de segurança falham dez vezes mais em 2026</a>. Para saber o que você entrega às ferramentas, leia também <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a>.</p>

    <h2>O que observar daqui para frente</h2>
    <p>O ponto central é se outros grupos conseguem reproduzir o resultado e se o custo por prova cai a ponto de caber em projetos pequenos. Também vale acompanhar quais provas e especificações a Anthropic de fato liberará, e se mantenedores de bibliotecas adotarão a verificação como parte da rotina de lançamento. Enquanto isso, a recomendação prática continua a mesma: mantenha tudo atualizado e trate provas e testes como complemento, nunca como garantia absoluta.</p>

    <div class="callout-box">
      <span class="callout-label">Fonte original</span>
      <p>Pesquisa publicada pela <a href="https://www.anthropic.com/research/formal-verification" target="_blank" rel="noopener noreferrer nofollow">Anthropic</a>. Os números e as conclusões são dos autores e não foram verificados de forma independente.</p>
    </div>
  `,
};
