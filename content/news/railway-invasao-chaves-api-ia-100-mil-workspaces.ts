import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "railway-invasao-chaves-api-ia-100-mil-workspaces",
  title: "Hacker invade a Railway atrás de chaves de IA e expõe segredos de clientes",
  summary:
    "Relatório da Railway diz que o ataque de 20 a 22/10 buscava chaves de API de IA e pode ter exposto variáveis de até 1,85% dos workspaces, cerca de 100 mil.",
  author: "Bruno Danello",
  sourceName: "Railway",
  sourceUrl: "https://blog.railway.com/p/preliminary-report-october-security-incident",
  date: "2026-10-25",
  publishedAt: "2026-10-25T10:30:00-03:00",
  topic: "seguranca",
  imageQuery: "servidor data center chaves de API",
  content: `
    <p>A Railway, plataforma de nuvem muito usada por desenvolvedores e criadores de apps com IA para publicar sites, bancos de dados e agentes, confirmou que sofreu uma invasão que mirava um alvo bem específico: as chaves de API de provedores de inteligência artificial guardadas pelos clientes. A empresa diz que o ataque durou de 20 a 22 de outubro e que, no pior cenário validado, até 1,85% de todos os workspaces (cerca de 100 mil) tiveram variáveis de ambiente potencialmente comprometidas. Os dados estão no <a href="https://blog.railway.com/p/preliminary-report-october-security-incident" rel="noopener noreferrer nofollow" target="_blank">relatório preliminar publicado pela própria Railway em 22 de outubro</a>, que complementa o <a href="https://blog.railway.com/p/security-disclosure-wednesday-october-21st" rel="noopener noreferrer nofollow" target="_blank">aviso de segurança de 21 de outubro</a>.</p>

    <p>Variáveis de ambiente são o lugar onde quase todo projeto guarda segredos: chave da OpenAI ou da Anthropic, senha de banco de dados, credenciais de registro de imagens, chave de pagamento. Quem tem acesso a elas, na prática, tem acesso à conta de quem as criou, e no caso das chaves de IA, ao saldo e ao limite de uso dessa pessoa.</p>

    <h2>O que a Railway diz que aconteceu</h2>
    <p>Segundo o relatório, a empresa soube às 19h53 UTC de 20 de outubro de uma campanha sustentada e direcionada contra seus serviços. As primeiras investigações indicam que o ataque tentava obter chaves de API de provedores de IA para realizar o que a Railway chama de ataques de destilação, isto é, usar o acesso roubado para extrair o comportamento de modelos de IA pagos.</p>
    <p>A Railway afirma acreditar que o invasor tinha acesso a modelos &quot;abliterated&quot; (versões de modelos com as travas de segurança removidas) e a muito poder de computação, o que teria permitido explorações sofisticadas contra a infraestrutura. A empresa não detalhou as falhas exploradas nem a escala exata, alegando que a investigação segue em andamento e que pretende divulgar tudo de forma responsável depois. A linha do tempo vai das 13h58 UTC de 20 de outubro às 03h32 UTC de 22 de outubro, quando a Railway confirmou que o invasor não tinha mais acesso aos sistemas internos.</p>

    <h2>Como o ataque evoluiu</h2>
    <p>A cronologia publicada mostra um avanço em etapas. Em 20 de outubro, um alerta de latência anormal levou a equipe a identificar uma tentativa de escalada de privilégios na infraestrutura de builds, e as compilações foram interrompidas por segurança. Horas depois, surgiram sinais de que o invasor conseguia ampliar o acesso em várias partes do sistema ao mesmo tempo.</p>
    <p>Na madrugada de 21 de outubro, a equipe percebeu que o atacante havia puxado segredos ainda criptografados, sem conseguir abri-los naquele momento. Mais tarde, segundo a Railway, ele obteve credenciais que davam acesso ao ambiente de integração contínua (CI), onde conseguiu decifrar artefatos com acessos adicionais. Foi então que a empresa encontrou, no banco de dados, a prova de uma consulta não autorizada às variáveis de ambiente criptografadas, das quais um subconjunto foi decifrado.</p>
    <p>Como as chaves usam criptografia em envelope, a Railway diz que não consegue apontar exatamente quais variáveis de cada projeto foram lidas. Os registros dos payloads do atacante mostraram, porém, os nomes das chaves que ele procurava, e foi com base nisso que a empresa avisou os fornecedores às 09h25 UTC de 21 de outubro, antes do comunicado público.</p>

    <h2>Quem foi avisado e quem pode ter sido afetado</h2>
    <p>A Railway trabalhou com GitHub, GitLab, Anthropic, OpenAI, OpenRouter, SpaceXSI, Stripe e outros para revogar as chaves potencialmente comprometidas. Para alguns fornecedores, como GitHub e SpaceXSI, enviou todas as chaves registradas na plataforma, mesmo sem saber se tinham sido atingidas. Por isso, o relatório avisa: receber um e-mail de revogação não significa que a sua credencial foi, de fato, vazada.</p>
    <p>O teto de 1,85% dos workspaces vale para quem teve variáveis potencialmente comprometidas, mas a empresa admite que o número de pessoas afetadas pelos pedidos de revogação foi maior que 100 mil. Os grupos de maior risco, segundo a análise do comportamento do invasor, são:</p>
    <ul>
      <li>workspaces com um número muito grande de variáveis de ambiente;</li>
      <li>ambientes com muitas chaves de IA de diferentes fornecedores.</li>
    </ul>
    <p>A Railway afirma que contas de usuários não foram acessadas, que serviços já em execução continuaram no ar e que apenas novos builds e deploys ficaram pausados. A empresa ainda não descarta que o código-fonte de clientes tenha sido lido, o que só será confirmado no relatório forense final. Contratou uma empresa externa de investigação e acionou as autoridades.</p>

    <h2>O que a empresa já mudou e o que pede aos clientes</h2>
    <p>Entre as medidas listadas estão a troca de todas as chaves internas (duas vezes, depois de confirmar a expulsão do invasor), a reconstrução das ferramentas de infraestrutura a partir de código validado e a antecipação para esta semana de uma nova geração de builders, passando de ambientes multi-inquilino isolados para ambientes de inquilino único. A empresa também criou uma função para revogar em massa permissões de aplicativos conectados, e revogou todos os tokens de acesso da Railway por precaução.</p>
    <p>Para os clientes, a recomendação é direta: quem se cadastrou antes de 21 de outubro deve revogar e recriar todas as variáveis sensíveis guardadas na plataforma. A Railway também sugere remover o acesso público a bancos de dados, conferir os registros de auditoria do GitHub e dos registros de imagens como o Docker Hub, e reconectar o GitHub e recriar credenciais de CLI e CI para voltar a fazer deploys. A empresa publicou guias específicos para conferir uso inesperado em OpenAI, Anthropic e OpenRouter, que seguem o mesmo roteiro: revogar a chave, trocar a variável na Railway, fazer um novo deploy e olhar o painel de uso à procura de consumo que você não gerou.</p>

    <h2>Por que isso importa para você</h2>
    <p>Mesmo que você nunca tenha ouvido falar da Railway, o caso é um aviso para quem constrói ou vende qualquer coisa com IA. Chaves de API de modelos viraram alvo de alto valor: elas dão acesso direto a crédito, a modelos caros e, em alguns casos, a dados de clientes. Quem publica um app, um bot ou uma automação em qualquer nuvem guarda esses segredos num único lugar, e o ataque à Railway mostra que o risco não está só no seu código, mas também na plataforma que o hospeda.</p>
    <p>Na prática, vale fazer hoje o que a empresa recomenda: se você usa a Railway, troque as chaves; se usa outra nuvem, confira quais chaves de IA estão guardadas lá e defina um limite de gasto em cada provedor. Quem presta serviço para clientes deve avisá-los caso as chaves deles estejam num projeto seu. Sobre o contexto do problema, o Portal da AI já mostrou como um <a href="/noticias/agente-atacante-modo-skynet-sequestra-modelos-expostos-symantec">agente de IA atacante sequestra modelos expostos</a>, como uma <a href="/noticias/litellm-pypi-versao-comprometida-rouba-credenciais-ia">versão comprometida do LiteLLM roubava credenciais de IA</a> e por que <a href="/noticias/terra-security-correcoes-seguranca-falham-ia-atacantes">correções de segurança falham dez vezes mais em 2026</a>.</p>
    <p>Para se proteger de forma geral, veja o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher uma ferramenta de IA com segurança</a> e o guia de <a href="/artigos/gerenciador-de-senhas-como-escolher-comecar-e-usar-com-seguranca">gerenciador de senhas</a>. Se você sonha em <a href="/artigos/como-ganhar-dinheiro-criando-e-vendendo-agentes-de-ia-personalizados">ganhar dinheiro criando e vendendo agentes de IA</a>, incluir boas práticas de segredos e rotação de chaves no pacote é um diferencial que o cliente entende e valoriza.</p>
    <p>O relatório é preliminar e o próprio texto avisa que haverá um acompanhamento quando a investigação terminar. Até lá, os números, a escala e a possível leitura de código-fonte podem mudar.</p>

    <div class="callout-box"><span class="callout-label">Fonte original</span>Relatório preliminar da <a href="https://blog.railway.com/p/preliminary-report-october-security-incident" rel="noopener noreferrer nofollow" target="_blank">Railway</a>, de 22 de outubro de 2026.</div>
  `,
};
