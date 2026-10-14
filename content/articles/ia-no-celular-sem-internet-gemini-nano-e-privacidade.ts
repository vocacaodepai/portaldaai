import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "ia-no-celular-sem-internet-gemini-nano-e-privacidade",
  title: "IA no celular sem internet: como funciona e o que muda",
  seoTitle: "IA no celular sem internet: Gemini Nano e privacidade",
  excerpt:
    "IA no celular sem internet já existe: veja como o Gemini Nano e modelos do aparelho funcionam, o que ganham em privacidade e onde ainda ficam limitados.",
  metaDescription:
    "IA no celular sem internet roda no aparelho: veja como funciona o Gemini Nano, o que muda na privacidade, que tarefas ela faz bem e quais são os limites.",
  category: "futuro",
  articleSubcategory: "tecnologia-emergente",
  date: "2026-10-14",
  readTime: 7,
  imageQuery: "smartphone chip processor circuit closeup",
  seed: 283,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "IA no dispositivo roda o modelo dentro do celular: o texto que você digita não precisa viajar até um servidor, e o recurso funciona mesmo sem sinal.",
    "O preço dessa privacidade e dessa velocidade é o tamanho: modelos de aparelho são menores, resumem e reescrevem bem, mas raciocinam e pesquisam pior que os da nuvem.",
    "Nem todo recurso de IA do seu celular é local: muitos misturam processamento no aparelho e na nuvem, e vale saber qual é qual antes de enviar dados sensíveis.",
  ],
  content: `
    <p>IA no celular sem internet significa que o modelo de inteligência artificial está instalado dentro do aparelho e processa o que você pede ali mesmo, sem enviar o texto, a foto ou o áudio para um servidor. É assim que funcionam recursos como resumir uma conversa, reescrever uma mensagem ou transcrever um áudio com o celular em modo avião.</p>

    <p>Essa mudança é uma das mais importantes da próxima fase da IA, porque mexe com três coisas que o usuário comum percebe: privacidade, velocidade e custo. Neste guia você vê como a tecnologia funciona, o que ela já faz bem, onde ela ainda perde para os modelos da nuvem e como descobrir se um recurso do seu telefone é mesmo local. Se os termos soarem novos, o <a href="/artigos/dicionario-de-inteligencia-artificial-termos-essenciais">dicionário de inteligência artificial</a> ajuda.</p>

    <h2>O que é IA no dispositivo (on-device)</h2>

    <p>Quando você usa um assistente de IA no navegador ou no aplicativo, a pergunta vai pela internet até um data center, onde um modelo enorme gera a resposta e a devolve. Na IA no dispositivo, o modelo fica guardado no próprio celular e roda no processador do aparelho. A documentação do Google para desenvolvedores descreve o <a href="https://developer.android.com/ai/gemini-nano" target="_blank" rel="noopener noreferrer">Gemini Nano</a> exatamente assim: um modelo de IA generativa que roda diretamente no dispositivo, sem conexão de rede nem envio de dados para a nuvem.</p>

    <p>No Android, o Gemini Nano roda dentro do AICore, um serviço do sistema que usa o hardware do aparelho e mantém o modelo atualizado. O aplicativo que quer usar o recurso não precisa baixar um arquivo gigante: ele pede ao sistema. No ecossistema da Apple, a ideia é parecida. Em material técnico publicado pela empresa, a <a href="https://machinelearning.apple.com/research/introducing-apple-foundation-models" target="_blank" rel="noopener noreferrer">Apple descreve um modelo de cerca de 3 bilhões de parâmetros</a> que roda no aparelho e um modelo maior, em servidores próprios, para tarefas mais pesadas.</p>

    <h2>O que ela já faz bem hoje</h2>

    <p>Modelos pequenos não substituem os grandes, mas cobrem um bloco inteiro de tarefas do dia a dia. As ML Kit GenAI APIs do Google, que usam o Gemini Nano, listam o que o modelo local entrega: <a href="https://developers.google.com/ml-kit/genai" target="_blank" rel="noopener noreferrer">resumir artigos e conversas, revisar gramática e ortografia, reescrever mensagens curtas em outro tom, descrever imagens e transcrever áudio</a>. Parte desses recursos ainda está em fase beta ou alfa, segundo a própria documentação.</p>

    <p>Na prática, isso aparece como o botão de resumo em uma conversa longa, a sugestão de reescrita em um teclado, a transcrição de uma gravação de voz e a descrição automática de uma foto. Se você usa o <a href="/artigos/assistente-de-voz-com-ia-como-usar-no-dia-a-dia">assistente de voz com IA</a> ou o <a href="/artigos/circle-to-search-pesquisar-e-traduzir-o-que-esta-na-tela">Circle to Search</a>, já usa uma mistura desses recursos, às vezes sem saber qual parte é local e qual vai para a nuvem.</p>

    <ul class="checklist">
      <li>Resumo de conversas, notícias e e-mails longos</li>
      <li>Correção e reescrita de mensagens curtas</li>
      <li>Transcrição de áudio e notas de voz</li>
      <li>Descrição de imagens para acessibilidade</li>
      <li>Respostas rápidas e sugestões dentro de aplicativos</li>
    </ul>

    <h2>Privacidade: o que realmente muda</h2>

    <p>O ganho central é que o texto não precisa sair do aparelho. Segundo a documentação do Android, os prompts são executados localmente, sem chamadas a servidores, e o AICore isola cada requisição e não armazena os dados de entrada nem as saídas depois do processamento. O AICore também não tem acesso direto à internet: os downloads do modelo passam por um aplicativo companheiro de código aberto chamado Private Compute Services.</p>

    <p>Isso reduz um risco que o texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">privacidade em IA</a> descreve: o de entregar, sem perceber, conversas, documentos e dados pessoais a um serviço externo. Para um resumo de mensagem que fala de saúde ou de dinheiro, processar no aparelho é uma escolha melhor do que mandar para a nuvem. Mas atenção ao limite da promessa: privacidade no processamento não é privacidade total. Aplicativos podem guardar o que você digita por conta própria, e outros recursos do mesmo celular continuam usando a internet.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>"IA no celular" não quer dizer "IA local". Muitos recursos decidem sozinhos se processam no aparelho ou na nuvem, conforme a tarefa. Leia a tela de permissões e a política de privacidade do aplicativo antes de colocar dados sensíveis.</p></div>

    <h2>Os limites: tamanho, bateria e qualidade</h2>

    <p>Modelos de aparelho precisam caber na memória e não podem drenar a bateria. Por isso são pequenos. A documentação do Google lembra que a velocidade depende do hardware e que o sistema impõe cotas por aplicativo e só permite a inferência com o app em primeiro plano. Há também diferença entre aparelhos: as APIs de resumo, revisão e reescrita funcionam em uma lista de modelos que inclui linhas Pixel e Galaxy recentes e alguns de outras marcas, e celulares de entrada ou mais antigos podem ficar de fora.</p>

    <p>Outro limite é a janela de contexto, a quantidade de texto que o modelo consegue considerar de uma vez. Modelos pequenos têm janelas menores, o que explica por que um resumo de um documento de 80 páginas costuma ir para a nuvem. O guia sobre <a href="/artigos/tokens-e-janela-de-contexto-em-ia-o-que-sao-e-por-que-importam">tokens e janela de contexto</a> mostra por que isso pesa. E, como qualquer modelo, o local também erra: a regra do guia de <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a> vale tanto para o aparelho quanto para a nuvem.</p>

    <table>
      <thead>
        <tr><th>Critério</th><th>IA no aparelho</th><th>IA na nuvem</th></tr>
      </thead>
      <tbody>
        <tr><td>Internet</td><td>Funciona sem sinal</td><td>Precisa de conexão</td></tr>
        <tr><td>Privacidade do texto</td><td>Fica no aparelho durante o processamento</td><td>Vai para um servidor</td></tr>
        <tr><td>Tamanho do modelo</td><td>Pequeno</td><td>Muito grande</td></tr>
        <tr><td>Tarefas difíceis e textos longos</td><td>Mais limitado</td><td>Melhor desempenho</td></tr>
        <tr><td>Custo por uso</td><td>Sem custo de servidor por chamada</td><td>Plano pago ou limite de uso</td></tr>
        <tr><td>Aparelhos compatíveis</td><td>Lista restrita</td><td>Qualquer aparelho com internet</td></tr>
      </tbody>
    </table>

    <h2>Um exemplo no dia a dia, com números</h2>

    <p>Considere uma consultora que viaja duas vezes por mês de ônibus intermunicipal, com sinal ruim em trechos de até 40 minutos. Ela grava notas de voz de reuniões e quer transcrever e resumir antes de chegar. Com um aparelho compatível, o app de notas pode transcrever no próprio celular, e o resumo em tópicos também. Quando ela chega e conecta ao Wi-Fi, usa o modelo da nuvem para montar a ata formal. O processo mistura os dois mundos: local para o rascunho e para o que é sensível, nuvem para o que exige qualidade. Para o fluxo de reuniões, o guia de <a href="/artigos/ia-para-reunioes-transcricao-resumo-ata-automatica">IA para reuniões</a> detalha a segunda metade.</p>

    <p>Um teste simples para saber o que é local no seu aparelho: ative o modo avião e repita a tarefa. Se o recurso continuar funcionando, ele roda no celular. Se pedir conexão, vai para a nuvem. Não é um teste de segurança, só uma pista rápida.</p>

    <pre><code>Resuma esta conversa em 5 tópicos curtos, destacando datas, valores em R$ e o que cada pessoa ficou de fazer. Se alguma informação não estiver no texto, escreva "não informado".</code></pre>

    <h2>Para onde isso vai: agentes e memória no próprio aparelho</h2>

    <p>A tendência é que o celular rode modelos locais cada vez maiores e que a divisão de trabalho com a nuvem fique automática: o aparelho cuida do que é rápido e sensível, e a nuvem entra só para o que pede mais força. Isso conversa com dois temas que o Portal da AI já acompanha: a <a href="/artigos/memoria-longa-em-ia-assistente-que-lembra-de-voce">memória longa em assistentes</a>, que fica mais aceitável para o usuário se os dados pessoais permanecem no aparelho, e a <a href="/artigos/ia-multimodal-o-que-muda-quando-maquina-ve-ouve-fala">IA multimodal</a>, em que o celular vê, ouve e fala sem precisar de rede.</p>

    <p>Há também um efeito econômico. Quando o processamento é local, não existe custo de servidor por chamada, o que abre espaço para aplicativos gratuitos e para recursos que antes só existiam em planos pagos, tema do texto sobre <a href="/artigos/ia-gratis-ou-paga-o-que-vale-a-pena">IA grátis ou paga</a>. E modelos abertos, como mostra o guia de <a href="/artigos/ia-codigo-aberto-o-que-muda-para-quem-usa">IA de código aberto</a>, ajudam a empurrar essa mudança.</p>

    <p>Do lado da regulação, o debate no Brasil sobre privacidade e responsabilidade, descrito em <a href="/artigos/lei-de-ia-no-brasil-o-que-muda-para-quem-usa">lei de IA no Brasil</a>, tende a favorecer soluções que mantêm os dados com o usuário. Isso não resolve tudo, mas muda o ponto de partida da conversa.</p>

    <h2>Erros comuns ao confiar na IA do celular</h2>

    <ul>
      <li><strong>Achar que tudo é local.</strong> Confirme com o teste do modo avião e com a política do app.</li>
      <li><strong>Usar para tarefas grandes.</strong> Documentos longos e raciocínio complexo pedem modelos maiores.</li>
      <li><strong>Esquecer o histórico.</strong> O que o aplicativo guarda é outra questão. Veja como limpar em <a href="/artigos/apagar-historico-do-gemini-e-usar-chat-temporario">apagar histórico do Gemini e usar chat temporário</a>.</li>
      <li><strong>Comprar aparelho só pela promessa.</strong> Confira a lista oficial de recursos compatíveis do modelo exato antes de pagar mais por IA.</li>
    </ul>

    <p>A IA no celular sem internet não elimina a nuvem, mas muda quem decide o que sai do seu aparelho. Antes de trocar de telefone ou de aplicativo, use o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher ferramenta de IA com segurança</a> e faça o teste do modo avião nos recursos que você mais usa. Dados sensíveis merecem o caminho mais curto possível.</p>
  `,
  faq: [
    {
      question: "IA no celular funciona sem internet?",
      answer:
        "Os recursos que usam modelos no aparelho, como o Gemini Nano no Android, funcionam sem conexão, porque a inferência é local. Outros recursos de IA do mesmo celular usam a nuvem e precisam de internet. Um teste rápido é ativar o modo avião e repetir a tarefa.",
    },
    {
      question: "O que é o Gemini Nano?",
      answer:
        "É o modelo de IA generativa do Google feito para rodar diretamente em celulares Android, por meio do serviço de sistema AICore. Ele alimenta recursos como resumo, revisão de texto, reescrita, descrição de imagens e transcrição, segundo a documentação oficial para desenvolvedores.",
    },
    {
      question: "IA no aparelho é mais privada que na nuvem?",
      answer:
        "No processamento, sim: o texto não precisa ser enviado a um servidor, e a documentação do Android diz que o AICore não armazena entradas e saídas. Mas o aplicativo pode guardar dados por conta própria e outros recursos do celular usam a nuvem, então leia as permissões.",
    },
    {
      question: "Qualquer celular roda IA local?",
      answer:
        "Não. Os recursos dependem de hardware compatível. As APIs do Google listam linhas Pixel e Galaxy recentes e alguns modelos de outras marcas, e a lista varia por recurso. Aparelhos de entrada ou antigos podem ficar sem esses recursos. Consulte a documentação do fabricante.",
    },
    {
      question: "A IA do celular substitui o ChatGPT ou o Gemini?",
      answer:
        "Para tarefas curtas como resumir, reescrever e transcrever, o modelo local resolve. Para textos longos, pesquisa, raciocínio em várias etapas e trabalhos complexos, os modelos da nuvem continuam melhores. A tendência é a divisão automática entre os dois conforme a tarefa.",
    },
  ],
};
