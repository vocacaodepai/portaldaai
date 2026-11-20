import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "ia-vibe-coders-tv-inteligente-sem-anuncios-claude-code",
  title: "Programadores usam IA para tirar anúncios e rastreio de smart TVs",
  summary:
    "Projetos abertos como dumbtv e cleanyourtv usam agentes de IA, como o Claude Code, para tirar anúncios e bloatware de TVs, mas há risco de travar o aparelho.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/10/19/people-are-using-ai-to-make-their-smart-tvs-dumb-again/",
  date: "2026-10-20",
  publishedAt: "2026-10-20T05:35:00-03:00",
  imageQuery: "smart TV remote control living room",
  topic: "seguranca",
  content: `
    <p>Um movimento curioso está crescendo entre quem programa com ajuda de IA: usar agentes de código para deixar a TV inteligente "burra" de novo, ou seja, sem anúncios na tela inicial, sem aplicativos pré-instalados que ninguém pediu e com menos coleta de dados. A tendência foi descrita pelo <a href="https://techcrunch.com/2026/10/19/people-are-using-ai-to-make-their-smart-tvs-dumb-again/" rel="noopener noreferrer nofollow">TechCrunch</a> em reportagem publicada em 19 de outubro de 2026, e mostra uma aplicação bem prática da chamada programação por intuição, em que a pessoa descreve o que quer e o agente faz o trabalho técnico.</p>

    <p>A ideia por trás dos projetos é simples. Em vez de aprender comandos de baixo nível para mexer no sistema do aparelho, o usuário aponta um agente de IA para um repositório público e pede que ele identifique a TV na rede, desative o que for desnecessário e instale uma tela inicial mais limpa. O resultado, segundo os autores, é uma TV que faz o que o dono pagou para ela fazer: abrir os aplicativos de streaming e as entradas HDMI, e mais nada.</p>

    <h2>Os projetos que estão circulando</h2>
    <p>O primeiro citado é o dumbtv, publicado no GitHub por Muzzammil Yasin Sabuwala. Ele contou ao TechCrunch que se cansou dos anúncios e de não conseguir chegar direto ao conteúdo que queria. O projeto foi testado de ponta a ponta em uma Fire TV Edition e em aparelhos com Android TV ou Google TV das marcas Sony, TCL, Philips, Hisense e Xiaomi, além do Nvidia Shield. Para escrever e validar as instruções, ele usou modelos da Anthropic e o DeepSeek V4.1 Flash, e diz que pretende manter o projeto e ampliar o suporte a outros modelos.</p>
    <p>O segundo é o cleanyourtv, criado por Gathin T. com o Claude Code depois de ele ver a quantidade de anúncios na TV dos pais. O programa procura a TV pela rede Wi-Fi, remove o bloatware do Android TV ou do Google TV e troca o iniciador de aplicativos por um visual parecido com o da Apple TV. No caso dele, saíram 25 pacotes da Xiaomi. Segundo o autor, alguns milhares de pessoas rodaram o mesmo comando em suas TVs em apenas dois dias, em marcas como Xiaomi, TCL, Sony, Fire TV e LG, e até em um projetor.</p>
    <p>Há também experimentos individuais. Ryan Doyle enviou ao Claude Code o modelo da própria TV e perguntou se era possível "hackear" o aparelho; ele conta que conseguiu remover anúncios e bloatware, acelerar a interface e personalizar o protetor de tela. Mihir Gupta desativou 25 aplicativos inúteis e trocou um iniciador de 192 MB por um próprio, de 83 MB, com papéis de parede rotativos.</p>

    <h2>Como a técnica funciona e por que ela não exige root</h2>
    <p>De acordo com a reportagem, o agente identifica a TV na rede local, desativa ou remove pacotes e instala um iniciador alternativo. O método não exige acesso de superusuário (root) e, segundo os autores, as mudanças podem ser revertidas para o padrão de fábrica. É justamente por não mexer no núcleo do sistema que a abordagem ficou acessível a quem não é especialista.</p>
    <p>O pano de fundo é o negócio de dados das TVs conectadas. Muitos aparelhos usam o reconhecimento automático de conteúdo (ACR), tecnologia que identifica o que está passando na tela por capturas de imagem, áudio ou impressão digital do conteúdo. Esses dados alimentam publicidade, e os fabricantes ganham dinheiro com eles. A reportagem observa que, se esses atalhos de limpeza se popularizarem, podem incomodar a indústria de anúncios em smart TVs.</p>

    <table>
      <thead>
        <tr><th>Projeto</th><th>Autor</th><th>O que faz</th></tr>
      </thead>
      <tbody>
        <tr><td>dumbtv</td><td>Muzzammil Yasin Sabuwala</td><td>Agente configura a TV sem anúncios; testado em Fire TV, Sony, TCL, Philips, Hisense, Xiaomi e Nvidia Shield</td></tr>
        <tr><td>cleanyourtv</td><td>Gathin T.</td><td>Remove bloatware, troca o iniciador e foi usado por alguns milhares de pessoas em dois dias</td></tr>
        <tr><td>Experimentos pessoais</td><td>Ryan Doyle, Mihir Gupta</td><td>Limpeza de apps, interface mais leve e tela inicial própria</td></tr>
      </tbody>
    </table>

    <h2>Os riscos que a própria reportagem aponta</h2>
    <p>Nada disso é seguro por padrão. Todos os projetos são descritos como trabalhos em andamento, testados aos poucos por usuários que sugerem correções. Os resultados são mistos: alguns usuários relataram que o Claude se recusou a atender pedidos simples como "hackear minha TV" e exigiu instruções mais elaboradas. Houve quem travou uma Android TV durante o processo e quem ficou preso no meio da configuração de uma Fire TV.</p>
    <p>O risco mais importante, porém, não está só no aparelho. Mandar um agente de IA executar comandos na sua rede a partir de instruções de um repositório público é dar permissão a um programa para agir por você. Se o texto do repositório for alterado por alguém mal-intencionado, o agente pode fazer algo que você não queria. A reportagem lembra que não discute a revisão de segurança desses roteiros nem o acesso à rede que os agentes exigem. Casos recentes, como a falha <a href="/noticias/plugin4shell-falha-agentes-ia-codigo-claude-code-codex-copilot-gemini">Plugin4Shell em agentes de programação</a> e a vulnerabilidade de <a href="/noticias/agentes-ia-injecao-prompt-cabecalhos-http-sites">injeção de instruções em cabeçalhos HTTP</a>, mostram que agentes que leem conteúdo externo são alvo real de ataques.</p>
    <p>Para quem prefere não usar agentes, o texto cita alternativas conhecidas de iniciadores para Android TV, como ATV Launcher, Projectivy Launcher e FLauncher, que trocam a tela inicial sem automação por IA.</p>

    <h2>Por que isso importa para você</h2>
    <p>No Brasil, quase toda casa tem uma smart TV, e boa parte dos modelos populares roda Android TV ou Google TV com anúncios na tela inicial. Isso torna o assunto relevante para o consumidor comum, mas também mostra um uso real da IA para resolver um incômodo sem pagar por software. Se você é curioso, vale entender o que está em jogo antes de copiar qualquer comando. Nosso guia sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade: o que você entrega sem perceber</a> explica por que dados de uso valem dinheiro, e o checklist para <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">escolher uma ferramenta de IA com segurança</a> serve de régua antes de dar acesso a qualquer agente.</p>
    <p>Para quem trabalha ou quer trabalhar com tecnologia, há uma oportunidade menos óbvia. Projetos como esses mostram como um problema cotidiano vira ferramenta aberta em poucos dias, com gente que nem é programadora profissional. O artigo sobre <a href="/artigos/vibe-coding-para-nao-programadores-carreira-e-riscos">vibe coding para não programadores, carreira e riscos</a> detalha o que dá para construir assim e onde mora o perigo. E, se a ideia é transformar esse tipo de habilidade em renda, o conteúdo sobre <a href="/artigos/ia-para-mei-tarefas-que-voce-pode-automatizar">tarefas que um MEI pode automatizar com IA</a> mostra caminhos mais seguros do que mexer em aparelhos de terceiros.</p>

    <div class="callout-box">
      <span class="callout-label">Para levar</span>
      <p>Antes de rodar qualquer roteiro de IA na sua TV ou roteador, leia o que ele faz, teste em um aparelho que você possa perder e saiba como voltar ao padrão de fábrica. Mexer no software do aparelho pode anular a garantia, e um erro pode deixar a TV inutilizável.</p>
    </div>

    <h2>O que acompanhar daqui para frente</h2>
    <p>Dois pontos merecem atenção nas próximas semanas. O primeiro é a resposta dos fabricantes: se a prática crescer, é provável que atualizações de sistema tentem reinstalar aplicativos removidos ou bloquear iniciadores alternativos, o que pode transformar o caso em uma disputa técnica contínua. O segundo é a qualidade dos próprios projetos, que ainda são experimentais e dependem de testes da comunidade para ficar confiáveis em mais modelos de TV.</p>
    <p>Também é preciso ter cuidado com as expectativas. Os números de adoção vêm dos próprios autores, que dizem que alguns milhares de pessoas usaram o comando em dois dias, e não há medição independente. Os relatos de sucesso convivem com relatos de aparelhos travados, e o TechCrunch não tratou de questões legais ou de garantia. Em outras palavras, a reportagem mostra uma tendência real e interessante, não um método comprovado para o público geral.</p>
    <p>Se você decidir testar, uma boa prática é seguir uma lista curta: faça uma anotação dos aplicativos que existem hoje na TV, mantenha o controle remoto original por perto, não conceda ao agente acesso a outros dispositivos da rede e prefira projetos com histórico de testes no seu modelo exato. Se qualquer passo parecer exigir mais permissão do que o necessário, pare. A conveniência de uma tela inicial sem anúncios não compensa expor a rede da casa.</p>
    <p>Por fim, o episódio é mais um exemplo de como agentes de código deixaram de ser apenas ferramentas para profissionais e passaram a resolver irritações do dia a dia. A mesma capacidade que limpa uma TV pode, mal usada, causar estragos, e por isso a regra de ouro continua valendo: quanto mais poder se dá a um agente, mais atenção se deve ao que ele vai executar.</p>
  `,
  faq: [
    {
      question: "Como a IA tira anúncios de uma smart TV?",
      answer: "Um agente de IA, como o Claude Code, identifica a TV na rede local, remove ou desativa pacotes desnecessários e instala um iniciador alternativo. Segundo o TechCrunch, o método não exige root e pode ser revertido ao padrão de fábrica.",
    },
    {
      question: "É seguro usar projetos como dumbtv e cleanyourtv?",
      answer: "São projetos em andamento, com relatos de TVs travadas e de agentes que erram. Além disso, dar a um agente permissão para agir na sua rede exige cuidado. Teste só em aparelho que você possa perder e leia o roteiro antes.",
    },
  ],
};
