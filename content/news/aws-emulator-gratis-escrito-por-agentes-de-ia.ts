import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "aws-emulator-gratis-escrito-por-agentes-de-ia",
  title: "AWS lança emulador grátis da nuvem escrito só por agentes de IA",
  summary:
    "O AWS Emulator simula a nuvem da Amazon no computador para testes. Segundo a empresa, milhares de agentes de IA escreveram o código, sem revisão humana.",
  author: "Bruno Danello",
  sourceName: "Amazon, Help Net Security",
  sourceUrl: "https://www.aboutamazon.com/news/aws/how-autonomous-ai-agents-built-aws-emulator",
  date: "2026-11-12",
  publishedAt: "2026-11-12T09:26:00-03:00",
  topic: "lancamentos",
  imageQuery: "Amazon Web Services logo",
  content: `
    <p>A Amazon Web Services (AWS), maior empresa de computação em nuvem do mundo, lançou nesta quarta-feira (11 de novembro) o AWS Emulator, uma ferramenta gratuita que reproduz o comportamento dos serviços da AWS no próprio computador do desenvolvedor, num servidor de testes ou numa esteira de integração contínua. O produto em si é útil, mas o que chamou a atenção do mercado foi a forma como ele foi feito: segundo a empresa, todo o código foi escrito por agentes autônomos de inteligência artificial, e nenhum engenheiro da equipe escreveu ou revisou uma linha sequer.</p>
    <p>A afirmação é de Matthew Goldberg, engenheiro principal sênior da AWS, que assinou o texto de lançamento publicado no site da Amazon. Nele, Goldberg diz que milhares de agentes escreveram o emulador e que centenas deles continuam trabalhando ao mesmo tempo na base de código. Na cobertura do site Help Net Security, Goldberg aparece explicando que a equipe só conseguiu chegar a esse ponto porque montou regras e verificações que dão aos agentes espaço para trabalhar sozinhos com segurança.</p>

    <h2>O que é o AWS Emulator e para que serve</h2>
    <p>Quem desenvolve software para a nuvem da Amazon costuma testar o código direto na AWS, o que exige conta, cria recursos de verdade e pode gerar cobrança. Um emulador resolve parte desse problema: ele finge ser a AWS. O programador aponta a linha de comando da AWS ou o kit de desenvolvimento (SDK) da sua linguagem para o endereço local do emulador, e o código acredita que está conversando com a nuvem real. Dá para criar uma fila de mensagens, enviar e receber mensagens, apagar a fila e testar chamadas que envolvem vários serviços ao mesmo tempo, tudo sem sair da máquina.</p>
    <p>De acordo com a documentação no GitHub, o emulador pode ser usado de quatro jeitos: como habilidade instalada num agente de programação com IA (pela linha de comando da AWS, a partir da versão 2.35.0), como pacote para Linux que roda como processo local, dentro de um contêiner Docker no Windows, no macOS ou no Linux, e no chamado modo embutido, em que ele roda dentro dos testes de um programa escrito em Rust. Não há interface gráfica. A ferramenta é gratuita, e o usuário só paga pelos recursos que usar quando, de fato, publicar a aplicação na AWS.</p>
    <p>O código foi publicado no GitHub, no repositório aws/aws-emulator, sob a dedicação CC0, que coloca a obra em domínio público. A Amazon também abriu o conjunto de testes de fidelidade, aqueles que medem o quanto o emulador se comporta igual à nuvem real, e promete divulgar uma nota de fidelidade por serviço a cada nova versão. Um detalhe curioso: o repositório aceita relatos de erro, mas não aceita contribuições de código de fora, o que faz sentido num projeto em que quem programa são os próprios agentes.</p>

    <h2>Como os agentes construíram o emulador</h2>
    <p>Goldberg conta que tudo começou como um experimento de fim de semana. Ele se inspirou numa demonstração anterior de pesquisadores da Anthropic, que haviam mostrado agentes de IA construindo um compilador da linguagem C. Usando o Kiro, o agente de programação da própria AWS, ele pediu que a IA escrevesse testes pela linha de comando, conferisse esses testes contra a AWS real e depois criasse uma versão em memória que passasse em todos eles. A primeira versão do Amazon SQS, o serviço de filas, saiu de um único pedido em cerca de 15 minutos. O ponto de partida foram os 438 modelos de API que a AWS publica para descrever seus serviços.</p>
    <p>Transformar esse rascunho num produto levou bem mais tempo, e a empresa não informou a duração total. A estrutura que ficou é dividida em três equipes de agentes, cada uma com uma tarefa bem definida, porque, segundo a AWS, agentes funcionam melhor com tarefas específicas:</p>
    <ul>
      <li><strong>Escritores de testes:</strong> criam testes a partir das especificações públicas das APIs e confirmam o resultado esperado rodando contra a AWS de verdade. Já são dezenas de milhares de testes, que podem ser repetidos sem contato com a nuvem.</li>
      <li><strong>Caçadores de problemas:</strong> rodam esses testes contra o emulador, registram cada diferença de comportamento e agrupam falhas que parecem ter a mesma causa.</li>
      <li><strong>Consertadores:</strong> cada agente pega um único problema, faz a correção e envia a mudança para uma espécie de portão de aprovação.</li>
    </ul>
    <p>Esse portão é onde mora o controle de qualidade. Antes de entrar no código principal, cada mudança precisa compilar e passar por revisões feitas por outros agentes, que checam padrões de código, segurança e se a alteração piorou a fidelidade em algum ponto. O que não passa volta para ser refeito. Segundo a AWS, o processo corrige milhares de problemas por dia. Tudo o que os agentes registraram fica visível no repositório, separado em duas pastas: o que já funciona e o que ainda não funciona.</p>
    <p>O papel dos humanos, portanto, mudou de lugar. A equipe não escreveu o código, mas desenhou as regras do jogo: a especificação, a referência (a AWS real), os testes de fidelidade e os critérios do portão de aprovação. O próprio texto de Goldberg traz um exemplo de por que essas regras importam: numa versão anterior, os agentes chegaram a escrever do zero um interpretador de Python inteiro para simular o AWS Lambda, e precisaram ser orientados a reaproveitar bibliotecas que já existiam.</p>

    <h2>Os limites que a própria Amazon admite</h2>
    <p>A AWS é clara ao dizer o que o emulador não faz. Ele não serve para rodar sistemas em produção e não serve para testes de segurança, porque não avalia as políticas de acesso (IAM) do jeito que a nuvem real avalia. Todos os recursos ficam só na memória e somem quando o emulador é desligado. A documentação recomenda usar uma única região e uma única conta por instância, já que os recursos não são separados por região nem por conta. A fidelidade varia de serviço para serviço, e a comparação é feita contra a região US West (Oregon), com exceção dos serviços globais, comparados com US East (N. Virginia). A empresa também diz que não testou a ferramenta para uso prolongado nem para testes de carga.</p>
    <p>Outro ponto que merece atenção: por padrão, o emulador envia à AWS dados anônimos de uso e de erros. Segundo a documentação, ele não manda o conteúdo das requisições, código, credenciais nem dados pessoais, e a coleta pode ser desligada por uma opção na linha de comando, por variável de ambiente ou no arquivo de configuração. Para compilar a partir do código-fonte, a exigência é pesada: Linux, Rust, compilador C, ao menos 100 GB de disco e uma máquina com vários núcleos. Quem só quer usar pode baixar o pacote pronto ou rodar em Docker.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para quem programa ou tem uma pequena empresa de software no Brasil, o ganho imediato é prático: testar aplicações que usam a AWS sem abrir conta, sem criar recursos pagos e sem esperar a rede. Isso barateia protótipos, acelera esteiras de testes e reduz o risco de deixar um recurso esquecido gerando conta em dólar no fim do mês. Ferramentas parecidas já existiam no mercado, mas esta é oficial, gratuita e mantida pela própria Amazon.</p>
    <p>O recado maior, porém, é sobre como o software passa a ser feito. Até agora, a maioria das empresas usava assistentes de código com um humano revisando tudo. A AWS está dizendo que, num produto público, com milhares de testes servindo de referência, dá para tirar o humano da revisão linha a linha e colocá-lo no desenho das regras. É a mesma discussão que aparece no nosso texto sobre <a href="/artigos/ia-vai-substituir-programadores-o-que-muda-ate-2030">se a IA vai substituir programadores até 2030</a>: o trabalho não some, mas muda para quem sabe especificar, medir e auditar o que os agentes entregam.</p>
    <p>Isso não significa que qualquer equipe possa fazer o mesmo amanhã. O método da AWS só funcionou porque havia uma referência perfeita para comparar (a própria nuvem) e uma bateria enorme de testes automáticos. Na maioria dos projetos, essa régua não existe pronta, e soltar agentes sem limites é arriscado, como mostram casos recentes de <a href="/noticias/aws-loom-falha-critica-agentes-ia">falhas críticas envolvendo agentes de IA</a>. Antes de dar mais autonomia a um agente, vale entender <a href="/artigos/permissoes-de-agentes-de-ia-o-que-liberar-o-que-travar-e-quando-pedir-aprovacao">o que liberar, o que travar e quando pedir aprovação</a>. E, para quem quer usar o emulador junto com assistentes de programação, o formato de habilidade instalável segue a lógica explicada em <a href="/artigos/agent-skills-padrao-aberto-o-que-sao-skills-de-agentes-de-ia-e-por-que-importam">o que são skills de agentes de IA</a>.</p>
    <p>A disputa entre as grandes empresas também fica mais clara. A OpenAI vem levando o Codex para ambientes na nuvem e para a revisão automática de código, como mostramos na cobertura do <a href="/noticias/openai-codex-ambientes-nuvem-revisao-codigo-devday">DevDay da OpenAI</a>. Com o AWS Emulator, a Amazon mostra que também quer ser vista como empresa que já usa agentes em escala dentro de casa, e não só como fornecedora de servidores para quem treina modelos.</p>
  `,
  faq: [
    {
      question: "O AWS Emulator é pago?",
      answer:
        "Não. A ferramenta é gratuita e o código está no GitHub sob a dedicação CC0, em domínio público. O usuário só paga pelos recursos que usar quando publicar a aplicação na AWS de verdade.",
    },
    {
      question: "Posso usar o AWS Emulator para testar a segurança da minha aplicação?",
      answer:
        "Não. A própria AWS diz que o emulador não avalia políticas de acesso (IAM) como a nuvem real e não deve ser usado em produção nem em testes de segurança. Ele serve para desenvolvimento e testes de integração.",
    },
    {
      question: "Nenhum humano participou da criação do emulador?",
      answer:
        "Segundo a AWS, nenhum engenheiro escreveu ou revisou o código. Os humanos desenharam as regras: a especificação, os testes de fidelidade contra a AWS real e o portão de aprovação pelo qual cada mudança dos agentes precisa passar.",
    },
  ],
};
