import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "litellm-pypi-versao-comprometida-rouba-credenciais-ia",
  title: "Versão do LiteLLM no PyPI foi invadida e roubava chaves de IA",
  summary:
    "O pacote LiteLLM 1.107.0 no PyPI trazia um ladrão de credenciais e uma porta dos fundos; quem instalou essa versão deve trocar senhas e chaves de IA.",
  author: "Bruno Danello",
  sourceName: "SafeDep",
  sourceUrl: "https://safedep.io/litellm-pypi-compromise-credential-stealer-backdoor/",
  date: "2026-10-22",
  publishedAt: "2026-10-22T10:48:00-03:00",
  topic: "seguranca",
  imageQuery: "Python programming language logo",
  content: `
    <p>A versão 1.107.0 do LiteLLM, biblioteca muito usada para conectar aplicativos a vários modelos de inteligência artificial, foi publicada no PyPI, o repositório oficial de pacotes Python, com um programa que rouba credenciais e abre uma porta dos fundos no computador. A análise foi publicada pela empresa de segurança <a href="https://safedep.io/litellm-pypi-compromise-credential-stealer-backdoor/" target="_blank" rel="noopener noreferrer nofollow">SafeDep</a>, que afirma que o próprio LiteLLM confirmou o comprometimento em um relatório de incidente. O código-fonte no GitHub do projeto, segundo a análise, não continha o trecho malicioso: ele só estava nos arquivos distribuídos.</p>

    <h2>O que aconteceu e quais versões foram afetadas</h2>
    <p>De acordo com a SafeDep, a versão afetada é a <strong>litellm 1.107.0</strong> no PyPI, além das imagens Docker com as tags v1.107.0, latest, main-latest e main-stable. As imagens carregaram o código malicioso entre 11h46 e 14h20 no horário UTC de 21 de outubro de 2026, ou seja, entre 8h46 e 11h20 em Brasília. A análise lista como limpas as versões 1.106.2, 1.107.0rc1 e 1.107.0rc2, e também os pacotes auxiliares litellm-proxy-extras e litellm-enterprise nas versões que a 1.107.0 usa.</p>
    <p>Pela linha do tempo da SafeDep, os sete arquivos de instalação (para Linux, macOS e Windows) foram enviados ao PyPI por volta das 11h40 UTC, e o PyPI removeu a versão às 13h23 UTC. Ou seja, a versão ficou disponível por cerca de uma hora e quarenta minutos. Quem instalou ou atualizou o LiteLLM nesse intervalo, ou baixou as imagens Docker citadas, pode estar afetado.</p>

    <h2>Como o invasor chegou até a publicação</h2>
    <p>O relato atribuído ao LiteLLM, reproduzido pela SafeDep, diz que o invasor tinha as credenciais da linha de comando do GitHub de três desenvolvedores, que provavelmente foram obtidas dos registros de uma instalação interna do LiteLLM exposta à internet. Com o token de um dono da organização, o atacante teria driblado a proteção da branch principal e apontado o processo privado de publicação para um repositório de nome parecido. Uma segunda credencial passou pela etapa de aprovação, e o processo oficial construiu, assinou e publicou os arquivos adulterados.</p>
    <p>Esse detalhe importa por um motivo simples: a assinatura e o canal oficial não garantiram que o conteúdo era seguro. O ataque usou as próprias engrenagens de publicação do projeto, e não um pacote falso com nome parecido, que é o golpe mais conhecido.</p>

    <h2>O que o código malicioso fazia</h2>
    <p>Segundo a SafeDep, a versão instalava três arquivos extras na pasta de pacotes do Python: <code>cook.pth</code>, <code>cook.py</code> e <code>sitecustomize.py</code>. Como o Python carrega esses arquivos sempre que um programa é iniciado, o código rodava mesmo em processos que nunca usaram o LiteLLM, como o próprio pip, editores de código e rotinas de integração contínua.</p>
    <p>O primeiro componente é um ladrão de credenciais. A análise afirma que ele procura, entre outras coisas:</p>
    <ul>
      <li>senhas salvas em navegadores e histórico de navegação;</li>
      <li>chaves SSH, histórico de comandos e arquivos de chaves e certificados na pasta do usuário;</li>
      <li>credenciais de nuvem (AWS, Azure e Google Cloud), configurações de Kubernetes e Docker e tokens do GitHub;</li>
      <li>segredos de ferramentas de automação, como Jenkins, GitLab e Terraform;</li>
      <li>tokens e configurações de ferramentas de IA para programar, entre elas Claude Code, Cursor, Windsurf, Copilot, Gemini CLI, Codex e Aider;</li>
      <li>variáveis de ambiente e, no caso do servidor proxy do LiteLLM, as chaves de provedores de IA guardadas no banco de dados.</li>
    </ul>
    <p>Os dados são criptografados e enviados a um endereço controlado pelo invasor. O segundo componente é uma porta dos fundos: segundo a SafeDep, um processo escondido acorda a cada hora, consulta um repositório do atacante no GitHub para descobrir um endereço, roda de novo o ladrão e baixa e executa um código adicional. A conta no GitHub usada para isso já tinha sido apagada às 13h40 UTC, então o processo, hoje, não encontra mais para onde se conectar. Mas a SafeDep ressalva que máquinas que rodaram o processo antes disso podem ter recebido e executado código extra, e que não foi possível recuperar o que esse código fazia.</p>

    <h2>O que fazer se você usa o LiteLLM</h2>
    <p>A análise da SafeDep não traz uma lista própria de providências e remete ao relatório de incidente do LiteLLM. Pelos indícios que ela descreve, o caminho lógico é este:</p>
    <ol>
      <li>Verificar qual versão está instalada com <code>pip show litellm</code> e confirmar se alguma máquina, contêiner ou rotina de CI baixou a 1.107.0 ou as imagens Docker citadas.</li>
      <li>Procurar os três arquivos citados na pasta de pacotes do Python e o arquivo-marcador mencionado pela SafeDep em <code>/tmp</code>.</li>
      <li>Tratar como comprometida toda máquina em que o ladrão rodou: trocar chaves SSH, senhas, tokens do GitHub, credenciais de nuvem e chaves de API de provedores de IA.</li>
      <li>Voltar para uma versão apontada como limpa (1.106.2, por exemplo) ou para uma versão posterior que o LiteLLM confirme como segura.</li>
    </ol>
    <p>O Portal da AI não conseguiu abrir o relatório do próprio LiteLLM, e o que está aqui se apoia na análise da SafeDep. Se o seu projeto usa a biblioteca, vale conferir o aviso oficial do projeto antes de agir em produção.</p>

    <h2>Contexto: ferramentas de IA concentram segredos</h2>
    <p>O LiteLLM costuma ficar no meio do caminho entre aplicativos e modelos de vários fornecedores, e por isso concentra chaves valiosas. Esse perfil já tinha chamado atenção no Pwn2Own Irlanda, quando pesquisadores demonstraram falhas inéditas nele, como contamos na notícia sobre os <a href="/noticias/pwn2own-irlanda-32-zero-days-openai-codex-litellm">32 zero-days do evento</a>. Alguns dias antes, o OpenCode também pediu que usuários trocassem chaves após uma invasão, assunto da notícia sobre o <a href="/noticias/opencode-vazamento-chaves-api-openai-anthropic-usuarios">vazamento de chaves de API no OpenCode</a>. O padrão se repete: quanto mais chaves de IA ficam juntas em uma ferramenta, mais atraente ela é para quem ataca.</p>

    <h2>Por que isso importa para você</h2>
    <p>Mesmo quem não programa pode ser tocado por esse tipo de incidente. Muitos aplicativos, automações e agentes que você contrata ou monta dependem de bibliotecas como essa, e uma chave de IA roubada vira conta de cobrança no seu cartão ou acesso a dados de clientes. Se você usa ou vende automações com IA, ou trabalha com vibe coding, algumas práticas reduzem o risco: fixar a versão das dependências em vez de aceitar sempre a mais nova, esperar algumas horas antes de atualizar uma biblioteca crítica, guardar chaves de API com limite de gasto e rotacioná-las com frequência, e não manter segredos em registros ou painéis expostos.</p>
    <p>Para escolher ferramentas com mais critério, veja o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher ferramenta de IA com segurança</a>. Quem está começando a criar software com IA encontra os riscos principais em <a href="/artigos/vibe-coding-para-nao-programadores-carreira-e-riscos">vibe coding para não programadores</a>, e quem conecta agentes a ferramentas externas deve entender o <a href="/artigos/mcp-model-context-protocol-o-que-e-e-como-conecta-agentes-de-ia">MCP e como ele conecta agentes de IA</a>, porque cada conexão é também uma porta de acesso.</p>

    <h2>O que ainda não se sabe</h2>
    <p>A SafeDep não conseguiu recuperar o endereço do servidor do invasor, então não se sabe quantas máquinas receberam o código adicional nem o que ele fez. Também não há, na análise, número de downloads da versão adulterada. Em incidentes desse tipo, o estrago costuma aparecer só depois, quando as credenciais roubadas começam a ser usadas. Por isso, a recomendação mais segura é trocar as credenciais agora, e não esperar sinais de uso indevido.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Fonte original</span>
      <p>Análise técnica da SafeDep sobre o comprometimento do LiteLLM 1.107.0, com linha do tempo, indicadores e lista de arquivos: <a href="https://safedep.io/litellm-pypi-compromise-credential-stealer-backdoor/" target="_blank" rel="noopener noreferrer nofollow">safedep.io</a>.</p>
    </div>
  `,
};
