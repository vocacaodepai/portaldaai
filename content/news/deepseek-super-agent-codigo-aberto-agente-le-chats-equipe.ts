import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "deepseek-super-agent-codigo-aberto-agente-le-chats-equipe",
  title: "DeepSeek abre o código do Super-Agent, que lê o chat da equipe",
  summary:
    "A DeepSeek publicou no GitHub, com licença MIT, um protótipo de agente de programação que acompanha conversas de equipe e propõe soluções sem ser chamado.",
  author: "Bruno Danello",
  sourceName: "The Next Web, Bloomberg, South China Morning Post",
  sourceUrl: "https://thenextweb.com/news/deepseek-super-agent-open-source-coding-agent",
  date: "2026-11-01",
  publishedAt: "2026-11-01T09:35:00-03:00",
  topic: "lancamentos",
  imageQuery: "DeepSeek logo",
  content: `
    <p>A DeepSeek, laboratório chinês de inteligência artificial, liberou neste fim de semana o código do Super-Agent, um agente experimental de programação pensado para trabalhar dentro de uma equipe de software, e não apenas ao lado de uma pessoa. A informação foi publicada na manhã deste domingo, 1º de novembro de 2026, pelo The Next Web, que cita reportagens da Bloomberg e do South China Morning Post, além da documentação do próprio projeto. O código está no GitHub, sob licença MIT, com o nome dsh-superagent.</p>
    <p>A própria DeepSeek trata o material como protótipo de pesquisa e diz que ele não é um produto oficial da empresa. Mesmo assim, o lançamento chama atenção porque mira de frente uma categoria que hoje é dominada por ferramentas como o Claude Code, da Anthropic, e porque vem de um laboratório que costuma abrir seu trabalho ao público.</p>

    <h2>O que o Super-Agent faz</h2>
    <p>Segundo o The Next Web, a equipe que desenvolve as ferramentas de agentes da DeepSeek descreveu o desenho do projeto em uma publicação no WeChat, no sábado. A ideia central é um agente que fica de olho nos grupos de conversa de uma equipe e, ao notar um problema de programação, sugere uma solução sem que ninguém precise chamá-lo. A Bloomberg, por meio da repórter Debby Wu, apresentou o projeto como uma resposta ao Claude Code.</p>
    <p>No protótipo publicado, o agente trabalha sobre um único repositório do GitHub e também consegue escutar o Feishu, o aplicativo de mensagens corporativas da ByteDance. Quando uma pessoa autorizada pede um trabalho, o agente abre uma tarefa em uma sessão própria e responde na mesma conversa de origem, por exemplo com um pull request, que é a proposta de alteração de código que a equipe pode revisar e aprovar. Um painel na web lista o que depende de uma decisão humana.</p>

    <h2>A filosofia: gastar pouca atenção humana</h2>
    <p>De acordo com o South China Morning Post, repórter Ben Jiang, o objetivo é poupar as pessoas de coordenar vários agentes de IA e de ficar vigiando cada um deles. O manual do projeto no GitHub resume o princípio como minimizar a atenção humana exigida e maximizar o valor entregue. Um documento de filosofia do projeto vai além e diz que o agente só deve agir quando for chamado ou quando uma regra da própria equipe permitir, justamente porque um agente que age em nome de um time inteiro pode desperdiçar a atenção de todos.</p>
    <p>Essa ressalva é importante. Um agente que lê conversas e se oferece para ajudar sozinho parece conveniente, mas pode virar ruído se interromper a equipe a toda hora. O desenho da DeepSeek tenta equilibrar os dois lados com permissões explícitas: quem pode pedir tarefas, em que situações o agente pode se manifestar sem convite e o que fica na fila de revisão humana.</p>

    <h2>O que ainda é protótipo</h2>
    <p>O The Next Web destaca que o código público difere da versão interna usada pela DeepSeek. O arquivo de apresentação do projeto avisa que algumas ideias descritas no texto de apresentação ainda não foram implementadas. A empresa também orienta quem for testar a revisar e adaptar o código antes de executá-lo. Em outras palavras, não se trata de um produto pronto para instalar e confiar, e sim de uma base para quem quiser estudar ou construir algo parecido.</p>
    <p>O contexto, segundo a reportagem, é uma sequência de movimentos da DeepSeek em programação. A Bloomberg informou que a empresa montou, no início de 2026, uma equipe dedicada a competir com as ferramentas americanas de código. Em agosto, a DeepSeek lançou uma prévia de um rival do Claude Code, um aplicativo de agente hoje em prévia pública que cuida de código, documentos e planilhas. Já tratamos de outra peça desse quebra-cabeça em <a href="/noticias/deepseek-abre-codigo-ferramentas-chips-huawei">nossa cobertura sobre a abertura de código de ferramentas da DeepSeek</a>.</p>

    <h2>Agentes em equipe nem sempre rendem mais</h2>
    <p>O The Next Web lembra um estudo de janeiro, o CooperBench, publicado no arXiv, que mediu o desempenho de agentes de programação trabalhando em equipe. A taxa de sucesso média ficou cerca de 30% menor do que quando o mesmo agente trabalhava sozinho. O estudo não testou o agente da DeepSeek, portanto não dá para concluir nada sobre ele. Mas o resultado ajuda a ler o lançamento com cautela: coordenar vários agentes, ou um agente servindo vários humanos, é um problema difícil e ainda mal resolvido.</p>
    <p>A Anthropic chegou a uma conclusão parecida por outro caminho. Em <a href="/noticias/anthropic-um-agente-so-vence-varios-subagentes-kit-migracao">Anthropic recomenda trocar vários subagentes por um agente só</a>, mostramos que, em muitos casos, um único agente bem configurado supera um grupo deles. O Super-Agent tenta atacar a mesma dor, a de gastar tempo gerenciando agentes, com uma abordagem diferente: um agente que mora no chat da equipe.</p>

    <h2>A disputa em torno das ferramentas de código</h2>
    <p>O lançamento acontece em um momento de muita movimentação no setor. Segundo o The Next Web, na quarta-feira anterior, durante o GitHub Universe, o GitHub mostrou um aplicativo do Copilot que executa trabalho de agentes em vários repositórios ao mesmo tempo, em sessões paralelas. Sobre o assunto, vale ler também <a href="/noticias/github-copilot-fusion-escolhe-modelo-agentes-40-por-cento-prs">GitHub lança o Copilot Fusion, que escolhe o modelo de IA de cada tarefa</a> e <a href="/noticias/google-android-studio-traga-seu-proprio-agente-claude-codex">Android Studio deixa usar Claude e Codex como agentes dentro do IDE</a>. O padrão é claro: todo mundo quer ser a camada em que o agente de código vive.</p>
    <p>No caso da DeepSeek, há ainda o pano de fundo geopolítico. Segundo o The Next Web, no mês passado agências civis federais dos Estados Unidos foram orientadas a remover a DeepSeek de seus sistemas, assunto que cobrimos em <a href="/noticias/dhs-proibe-deepseek-orgaos-federais-civis-eua">DHS proíbe DeepSeek em órgãos federais civis dos EUA</a>. A Bloomberg também informou que a empresa captou cerca de US$ 15 bilhões antes de uma listagem planejada. Ou seja, o laboratório tem dinheiro para investir em ferramentas de programação, mesmo sob restrições nos Estados Unidos.</p>

    <h2>O que não dá para afirmar ainda</h2>
    <p>Não há, até aqui, avaliação independente do Super-Agent. Não se sabe como ele se comporta em repositórios grandes, qual modelo ele usa por padrão nem quanto custa rodá-lo. Também não há dados públicos de adoção. O que existe é o código aberto, a documentação e a descrição do projeto pela própria equipe, repercutidas por veículos que acompanham a empresa. Quem decidir testar deve fazê-lo em um repositório isolado, sem credenciais sensíveis, e deve ler as permissões antes de conectar o agente a qualquer canal de conversa real.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você trabalha com programação, automação ou presta serviços para pequenas empresas, o recado é que os agentes de código estão saindo do terminal e entrando no lugar onde a equipe conversa. Isso muda o que se pode vender e o que se deve proteger: um agente que lê o chat pode ajudar a resolver problemas mais rápido, mas também enxerga informações que talvez não devesse. Antes de adotar qualquer ferramenta desse tipo, defina quem pode acioná-la, em quais canais ela escuta e o que ela pode alterar sem revisão.</p>
    <p>Para quem não programa, o ponto prático é outro: ferramentas abertas e gratuitas como esta pressionam os preços das alternativas pagas e tornam mais barato montar fluxos próprios. Nossos guias <a href="/artigos/agentes-de-ia-o-futuro-do-trabalho-autonomo-explicado">Agentes de IA e o futuro do trabalho autônomo</a> e <a href="/artigos/permissoes-de-agentes-de-ia-o-que-liberar-o-que-travar-e-quando-pedir-aprovacao">Permissões de agentes de IA: o que liberar, o que travar e quando pedir aprovação</a> ajudam a decidir até onde dar autonomia a um agente. E, se você quer entender como esses agentes se conectam a outras ferramentas, leia <a href="/artigos/mcp-model-context-protocol-o-que-e-e-como-conecta-agentes-de-ia">MCP: o que é e como conecta agentes de IA</a>.</p>
    <p>Por fim, lembre que o Super-Agent é um protótipo. Acompanhe a evolução do repositório antes de apostar nele em um projeto de cliente. Se a ferramenta amadurecer, ela pode virar uma opção barata e controlável para equipes pequenas; se não, serve ao menos como exemplo de como pensar permissões e atenção humana ao desenhar agentes. Voltaremos ao tema quando houver testes independentes.</p>
  `,
};
