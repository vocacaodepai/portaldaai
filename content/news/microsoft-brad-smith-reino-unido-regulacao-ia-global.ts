import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "microsoft-brad-smith-reino-unido-regulacao-ia-global",
  title: "Presidente da Microsoft diz que Reino Unido deve liderar regras de IA",
  summary:
    "Brad Smith defendeu regras globais de segurança de IA, apontou o Reino Unido como líder e propôs notificação de invasões, auditoria externa e kill switches.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/10/12/microsoft-president-says-uk-is-best-placed-to-drive-ai-regulation/",
  date: "2026-10-12",
  publishedAt: "2026-10-12T13:22:45-03:00",
  imageQuery: "Brad Smith Microsoft",
  topic: "regulacao",
  content: `
    <p>O presidente da Microsoft, Brad Smith, afirmou que chegou a hora de criar regras globais de segurança para a inteligência artificial e que o Reino Unido, e não os Estados Unidos nem a União Europeia, está mais bem posicionado para liderar esse esforço. A declaração foi dada em um podcast da BBC e relatada por Rebecca Bellan, do <a href="https://techcrunch.com/2026/10/12/microsoft-president-says-uk-is-best-placed-to-drive-ai-regulation/" rel="noopener noreferrer nofollow">TechCrunch</a>, em 12 de outubro de 2026.</p>
    <p>Smith descreveu a IA como uma tecnologia de duplo uso, "uma arma e uma ferramenta", que coloca em risco a cibersegurança global. Ele também comparou a supervisão do setor com a de produtos comuns: segundo ele, as empresas de IA têm menos fiscalização do que fabricantes de produtos de consumo como leite e máquinas de lavar. Este texto resume o que foi dito, o contexto que a reportagem apresenta e, em trechos identificados como análise própria, o que isso pode significar para quem usa IA no Brasil.</p>

    <figure><img src="https://upload.wikimedia.org/wikipedia/commons/1/13/Brad_Smith_-_Microsoft_-_01.jpg" alt="Brad Smith, presidente da Microsoft, em evento"><figcaption>Foto: Web Summit / Wikimedia Commons (CC BY 2.0)</figcaption></figure>

    <h2>Por que o Reino Unido, segundo Smith</h2>
    <p>O argumento central do executivo é institucional. O AI Security Institute (AISI), órgão britânico lançado em 2023, recebe acesso a modelos dos principais laboratórios dos Estados Unidos antes do lançamento e é apontado como líder em testes de segurança de IA. Para Smith, isso dá ao país uma posição de credibilidade técnica que outros governos ainda não construíram.</p>
    <p>Ele foi além e disse que o Reino Unido pode regular de formas que os Estados Unidos não conseguem. A frase citada pela reportagem é que, em Washington, as pessoas não olham para Londres como olham para Bruxelas, e que isso é uma força. Em outras palavras, uma regra vinda de Londres enfrenta menos resistência política em Washington do que uma regra vinda da União Europeia.</p>
    <p>O papel do AISI, porém, sofreu pressão recente. De acordo com a reportagem, o presidente Donald Trump alertou contra organizações "globalistas", e a Politico informou em setembro que a Casa Branca pediu à OpenAI e à Anthropic que segurassem novos modelos dos testadores britânicos até a revisão dos Estados Unidos. Já tratamos desse pedido em <a href="/noticias/casa-branca-pede-openai-anthropic-segurar-modelos-reino-unido">nossa cobertura sobre a Casa Branca e os testadores do Reino Unido</a>. Na segunda-feira, segundo a Reuters, o AISI confirmou que ainda pode acessar e testar os modelos mais recentes.</p>

    <h2>O contexto: incidentes, desaceleração e o pacto voluntário</h2>
    <p>A fala de Smith vem depois de um período de preocupação com a segurança da tecnologia. A reportagem lembra que Dario Amodei, da Anthropic, e Sam Altman, da OpenAI, pediram uma desaceleração após incidentes em que agentes de IA saíram do controle. Um desses episódios aparece em <a href="/noticias/agentes-openai-15-incidentes-seguranca-investigacao">nossa matéria sobre incidentes de segurança com agentes da OpenAI</a>.</p>
    <p>No mês passado, Trump recebeu líderes da OpenAI, Anthropic, Nvidia, AMD, SpaceX, Meta e Google, que assinaram um documento descrito como "moralmente vinculante" para trabalhar com "auditores independentes" na avaliação de segurança e das capacidades dos modelos. Os detalhes do encontro estão em <a href="/noticias/acordo-seguranca-ia-casa-branca-trump">nossa cobertura do acordo voluntário na Casa Branca</a>.</p>
    <p>Smith chamou o documento de "bom passo", mas insuficiente. O motivo, na visão dele, é que medidas voluntárias só vinculam as "boas empresas". Em suas palavras, são as empresas menos responsáveis que preocupam. Esse é o ponto de virada do raciocínio: sem obrigação legal, quem mais precisa de supervisão é justamente quem pode ficar de fora.</p>

    <h2>As três propostas de Smith</h2>
    <p>Segundo a reportagem, o executivo apresentou medidas concretas. Parte delas é descrita pela autora como preferências que ele pareceu expressar, e não como um projeto de lei fechado. A tabela abaixo organiza as propostas e inclui, como análise própria, o que cada uma poderia mudar na prática.</p>
    <table>
      <thead>
        <tr><th>Proposta</th><th>O que Smith defendeu</th><th>O que poderia mudar (análise própria)</th></tr>
      </thead>
      <tbody>
        <tr><td>Notificação de invasão</td><td>Obrigação legal de avisar uma organização quando o sistema dela for violado por agentes de IA fora de controle</td><td>Empresas passariam a ser informadas de incidentes, em vez de descobrir tarde</td></tr>
        <tr><td>Avaliadores externos</td><td>Aprovação de avaliadores externos antes do lançamento de um produto de IA</td><td>Lançamentos poderiam depender de testes independentes, como em outros setores</td></tr>
        <tr><td>Kill switches</td><td>Apoio a mecanismos que pausem ou desacelerem a IA se humanos perderem o controle</td><td>Fornecedores teriam de projetar formas de interromper sistemas em operação</td></tr>
      </tbody>
    </table>
    <p>O fecho da fala, citado pela reportagem, foi um pedido de tom: "Vamos falar com calma, talvez até baixo, mas com firmeza, e começar a reunir as pessoas". Smith não detalhou, nos trechos relatados, como esse grupo seria formado nem qual órgão teria autoridade para aplicar as regras.</p>

    <h2>Por que isso importa para você</h2>
    <p>Como análise própria: o debate sobre regras globais parece distante, mas chega ao dia a dia de quem usa IA no trabalho. No Brasil, a discussão legislativa segue em torno do Marco Legal da IA, o PL 2.338/2023, que <a href="/noticias/marco-legal-ia-congresso-trump-xi-descarta-regulacao">tratamos em nossa matéria sobre o Congresso e a recusa de regras globais entre Trump e Xi</a>. A fala de Smith não altera esse projeto e não diz nada sobre o Brasil, mas mostra que parte da própria indústria já aceita a ideia de obrigações legais, o que tende a pesar no debate.</p>
    <p>Para empresas e profissionais brasileiros que usam agentes de IA, três pontos merecem atenção, todos como leitura própria da proposta e não como exigência atual:</p>
    <ul>
      <li><strong>Auditoria externa:</strong> ao escolher uma ferramenta, vale perguntar se o fornecedor passa por testes independentes. O guia de <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">como escolher uma ferramenta de IA com segurança</a> traz um checklist para isso.</li>
      <li><strong>Notificação de incidentes:</strong> se agentes ganham acesso a e-mails, arquivos e sistemas, é importante saber o que cada um acessa e ter um plano para avisar clientes caso algo dê errado. O texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">o que você entrega à IA sem perceber</a> ajuda a mapear esse risco.</li>
      <li><strong>Kill switches:</strong> quem deixa agentes trabalharem sozinhos deve manter uma forma simples de pausar a automação. O artigo sobre <a href="/artigos/agentes-de-ia-o-futuro-do-trabalho-autonomo-explicado">agentes de IA e o trabalho autônomo</a> explica como esses sistemas funcionam.</li>
    </ul>
    <p>Vale registrar uma ressalva de leitura: Smith fala como presidente de uma das maiores empresas de tecnologia do mundo, com interesses próprios no formato das regras. A reportagem relata as declarações, mas não traz uma avaliação independente de que as propostas seriam suficientes ou viáveis.</p>

    <h2>O que observar a seguir</h2>
    <p>O primeiro ponto é o destino do AISI. A confirmação de que o instituto ainda acessa os modelos mais recentes reduz a incerteza, mas o episódio mostra como o acesso depende de decisões políticas. O segundo é se as propostas de Smith saem do discurso e chegam a um texto legal, em Londres ou em outro lugar. O terceiro é a reação dos demais laboratórios: a reportagem não traz posicionamento de OpenAI, Anthropic ou Google sobre as três medidas.</p>
    <p>Por fim, acompanhe como o tema conversa com a segurança de voz e agentes no dia a dia. A discussão sobre transparência e avisos ao usuário também aparece em <a href="/noticias/voz-ia-sem-momento-chatgpt-polyai-otter-humanx">nossa matéria sobre voz com IA e o HumanX</a>. Por ora, o fato confirmado é o que Smith disse no podcast da BBC: regras globais de segurança de IA são necessárias, voluntariedade não basta, e o Reino Unido seria o melhor candidato para puxar a conversa.</p>
  `,
  faq: [
    {
      question: "O que Brad Smith disse sobre a regulação de IA?",
      answer:
        "Em um podcast da BBC, o presidente da Microsoft disse que é hora de criar regras globais de segurança de IA, que a tecnologia é uma arma e uma ferramenta e que o Reino Unido está mais bem posicionado para liderar.",
    },
    {
      question: "Quais medidas Smith propôs?",
      answer:
        "Notificação obrigatória quando um sistema for violado por agentes de IA fora de controle, aprovação de avaliadores externos antes do lançamento de produtos de IA e apoio a kill switches que pausem ou desacelerem a IA se humanos perderem o controle.",
    },
    {
      question: "O que é o AI Security Institute do Reino Unido?",
      answer:
        "É um órgão britânico lançado em 2023 que recebe acesso a modelos dos principais laboratórios dos Estados Unidos antes do lançamento e é apontado como líder em testes de segurança de IA.",
    },
  ],
};
