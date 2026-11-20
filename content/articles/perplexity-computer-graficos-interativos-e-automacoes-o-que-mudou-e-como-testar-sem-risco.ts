import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "perplexity-computer-graficos-interativos-e-automacoes-o-que-mudou-e-como-testar-sem-risco",
  title: "Perplexity Computer: gráficos no chat e automações, como testar",
  seoTitle: "Perplexity Computer: gráficos interativos e Automations",
  excerpt:
    "Perplexity Computer ganhou gráficos interativos no chat e Automations que rodam sozinhas. Veja o que as notas de versão dizem, o que não dizem e como testar sem risco.",
  metaDescription:
    "Perplexity Computer com gráficos interativos e Automations: o que as notas de 5/10/2026 confirmam, o que ficou em aberto e um teste seguro em 4 passos para o seu trabalho.",
  category: "ferramentas",
  date: "2026-10-31",
  readTime: 6,
  imageQuery: "stock market chart screen laptop",
  seed: 982,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Segundo as notas de versão de 5 de outubro de 2026, o Perplexity Computer passou a mostrar gráficos interativos e explicações em 3D dentro da conversa, e ganhou as Automations, que rodam trabalho recorrente por horário ou por evento.",
    "Os gráficos financeiros usam a biblioteca aberta Lightweight Charts, da TradingView, com velas, volume e médias móveis; as notas não dizem quais planos têm acesso a cada recurso.",
    "O jeito seguro de começar é uma automação de baixo risco, com aprovação humana antes de qualquer ação que envie, pague ou apague algo, e conferência dos números que o gráfico mostra.",
  ],
  content: `
    <p>O Perplexity Computer é o agente da Perplexity que pesquisa, monta relatórios e executa tarefas em várias etapas, e as notas de versão de 5 de outubro de 2026 trouxeram duas novidades para ele: gráficos interativos dentro da conversa e as Automations, rotinas que rodam sozinhas por horário ou quando algo acontece em um app conectado. Este guia separa o que está confirmado do que ficou em aberto.</p>

    <p>Quem usa o Perplexity só para pesquisar talvez nem note a mudança. Quem acompanha investimentos, preços de fornecedores ou prazos de clientes pode ganhar tempo, desde que teste do jeito certo. As informações abaixo vêm do registro oficial de alterações da empresa, consultado em 31/10/2026, e podem mudar sem aviso.</p>

    <h2>O que o Perplexity Computer mudou em 5 de outubro de 2026?</h2>
    <p>O <a href="https://www.perplexity.ai/changelog" target="_blank" rel="noopener noreferrer">registro de alterações da Perplexity</a> traz, na entrada de 5/10/2026, o título "Automations, inline visualizations, and GPT-6.1 Sol". Em português claro, são três coisas: rotinas automáticas, visualizações dentro da conversa e a chegada do modelo GPT-6.1 Sol para assinantes pagos elegíveis.</p>
    <p>A mesma entrada cita outros itens, como o modelo Claude Opus 5.5, geração de vídeo e habilidades de negócios curadas pela Amex. Nada disso muda o dia a dia de quem só pergunta e lê respostas. O que interessa para a maioria é o que o agente passa a fazer sem você pedir de novo, e o que ele mostra de forma interativa.</p>
    <p>Um ponto de honestidade: a página não informa quais planos têm cada recurso nem os limites de uso. Antes de pagar por qualquer coisa por causa deste texto, abra o app e veja o que aparece na sua conta. O guia sobre <a href="/artigos/perplexity-notebooklm-ia-de-pesquisa-estudar-mais-rapido">Perplexity e NotebookLM</a> ajuda a entender onde cada ferramenta se encaixa.</p>

    <h2>Como funcionam os gráficos interativos no chat</h2>
    <p>Antes, um pedido como "mostre a variação desta ação nos últimos seis meses" voltava como texto e talvez uma imagem. Agora, segundo as notas, as conversas do Computer podem exibir gráficos interativos e explicações em 3D. Os gráficos financeiros usam a <a href="https://www.tradingview.com/lightweight-charts/" target="_blank" rel="noopener noreferrer">Lightweight Charts</a>, biblioteca gratuita e de código aberto da TradingView, com velas (candlesticks), barras de volume e médias móveis.</p>
    <p>Isso importa por um motivo simples: gráfico que você consegue ampliar e percorrer é mais fácil de conferir do que um parágrafo cheio de números. Mas gráfico bonito não é gráfico correto. O dado vem de uma fonte que o agente escolheu, e você precisa saber qual foi.</p>
    <h3>Como conferir o que o gráfico mostra</h3>
    <ul class="checklist">
      <li>Peça a fonte do dado e a data da última atualização, e abra a fonte por conta própria.</li>
      <li>Compare dois ou três pontos do gráfico com a página oficial (por exemplo, o site da bolsa ou do banco central).</li>
      <li>Desconfie de escala cortada: confira onde o eixo vertical começa.</li>
      <li>Trate o gráfico como apoio à análise, não como recomendação de compra ou venda.</li>
    </ul>
    <p>O texto sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a> mostra como checar números que a ferramenta apresenta com muita segurança.</p>

    <h2>O que são as Automations e para que servem</h2>
    <p>Segundo as notas de versão, o Computer agora pode tocar trabalho contínuo, por agenda ou quando algo acontece em apps conectados. As automações podem usar Memória, Habilidades (Skills) e conectores, partir do que rodou antes e pausar para revisão antes de ações importantes. Os exemplos da própria página são acompanhar anúncios novos contra um orçamento, montar um plano de recuperação quando um fornecedor avisa atraso e cobrar um cliente que não respondeu.</p>
    <p>Na prática, isso muda a pergunta. Em vez de "o que eu peço hoje?", passa a ser "o que eu quero que alguém vigie por mim?". A cobertura de lançamento no Portal da AI, sobre as <a href="/noticias/perplexity-computer-automations-slack-gmail">Automations no Slack e no Gmail</a>, descreve o desenho geral. Já o <a href="/noticias/perplexity-decisions-api-probabilidades-sim-nao">Decisions API da Perplexity</a> mostra outra frente da empresa, voltada a desenvolvedores.</p>

    <table>
      <thead>
        <tr><th>Situação</th><th>Serve para automação?</th><th>Cuidado</th></tr>
      </thead>
      <tbody>
        <tr><td>Resumo semanal de preços de fornecedores</td><td>Sim</td><td>Conferir a fonte dos preços</td></tr>
        <tr><td>Lembrete de cliente que não respondeu</td><td>Sim, com rascunho</td><td>Aprovar o texto antes do envio</td></tr>
        <tr><td>Pagamento ou transferência</td><td>Não</td><td>Nunca sem decisão humana</td></tr>
        <tr><td>Apagar ou arquivar e-mails</td><td>Só em teste</td><td>Começar por uma pasta de teste</td></tr>
      </tbody>
    </table>

    <h2>Um exemplo com números para um pequeno negócio</h2>
    <p>Cenário ilustrativo, para mostrar o raciocínio. Uma loja de materiais de construção em Goiânia compra cimento e argamassa de três fornecedores e define que não paga mais de R$ 38 pelo saco de 50 kg. Hoje, alguém abre três sites toda segunda-feira, o que toma uns 20 minutos por semana, cerca de 17 horas por ano.</p>
    <p>Com uma automação, a loja pediria um resumo toda segunda às 8h, listando só os itens que passaram do teto de R$ 38. O agente não compra nada: apenas avisa. O ganho é pequeno em horas, mas grande em atenção, porque o dono para de conferir o que está dentro da faixa. Se um preço sair do padrão, ele recebe o aviso e decide.</p>
    <p>Quem quer ir além e vender esse tipo de rotina para clientes encontra o caminho no guia de <a href="/artigos/como-vender-pacotes-de-automacao-de-ia-para-negocios-locais">pacotes de automação de IA para negócios locais</a>, e a comparação com ferramentas clássicas está em <a href="/artigos/make-ou-zapier-qual-automacao-com-ia-vale-mais-a-pena">Make ou Zapier</a>.</p>

    <h2>Teste seguro em 4 passos</h2>
    <ol>
      <li>Escolha uma tarefa de leitura, sem efeito colateral: resumir, listar, comparar.</li>
      <li>Conecte só o app necessário e confira as permissões que você está liberando.</li>
      <li>Rode por duas semanas com revisão humana de cada resultado, anotando erros.</li>
      <li>Só depois pense em ações que enviam mensagem ou mexem em arquivos, sempre com pausa para aprovação.</li>
    </ol>
    <p>Um prompt de partida, para colar no Computer e adaptar:</p>
    <pre><code>Toda segunda-feira às 8h, consulte os sites A, B e C e liste só os produtos
cujo preço passou de R$ 38. Mostre a fonte e a data de cada preço.
Não envie mensagens, não compre nada e não altere arquivos.
Se algum site não abrir, avise em vez de estimar o valor.</code></pre>
    <p>Para definir o que liberar e o que travar, o guia de <a href="/artigos/permissoes-de-agentes-de-ia-o-que-liberar-o-que-travar-e-quando-pedir-aprovacao">permissões de agentes de IA</a> traz um roteiro. E para entender a diferença entre rotina fixa e agente que interpreta, veja <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">agente de IA, chatbot ou automação</a>.</p>

    <h2>Riscos que pedem atenção</h2>
    <p>Um agente que lê páginas e e-mails pode ser enganado por instruções escondidas no conteúdo, problema explicado em <a href="/artigos/prompt-injection-risco-de-ia-que-le-paginas-e-emails">prompt injection</a>. Quanto mais conectores você liga, maior a superfície de risco. Há também a privacidade: dados de clientes que passam pelo agente exigem as mesmas regras de qualquer outro tratamento, conforme o <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">checklist de LGPD para pequeno negócio</a>.</p>
    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Gráfico de ativo financeiro não é conselho de investimento. Se a decisão envolve dinheiro seu, confira o dado na fonte oficial e, em caso de dúvida, fale com um profissional habilitado.</p></div>

    <h2>Erros comuns ao começar</h2>
    <ul>
      <li>Ligar todos os apps de uma vez, sem saber qual automação precisa de qual acesso.</li>
      <li>Aceitar o gráfico sem abrir a fonte do dado.</li>
      <li>Deixar a automação enviar mensagens sem revisão nas primeiras semanas.</li>
      <li>Assinar um plano maior por causa de um recurso cuja disponibilidade não foi confirmada na sua conta.</li>
      <li>Esquecer de revisar o que a automação guarda na memória.</li>
    </ul>
    <p>Antes de adotar qualquer ferramenta nova, vale passar pelo <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher ferramenta de IA com segurança</a> e comparar o custo com o <a href="/artigos/orcamento-de-ia-no-pequeno-negocio-quanto-gastar-com-assinaturas-e-quando-subir-de-plano">orçamento de IA no pequeno negócio</a>.</p>

    <p>As novidades do Computer valem o teste para quem já vive de pesquisa e acompanhamento, desde que a primeira automação seja de leitura e o primeiro gráfico seja conferido na fonte. Se você ainda está decidindo qual assistente usar, o comparativo <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini</a> é um bom ponto de partida, e a categoria de ferramentas do Portal da AI acompanha o que muda em cada uma.</p>
  `,
  faq: [
    {
      question: "O que é o Perplexity Computer?",
      answer:
        "É o agente da Perplexity que pesquisa, escreve e executa tarefas em várias etapas, indo além de uma resposta de busca. Segundo as notas de versão, ele ganhou gráficos interativos na conversa e as Automations. Veja na sua conta o que está liberado, porque a página oficial não detalha planos.",
    },
    {
      question: "O que são as Automations do Perplexity?",
      answer:
        "São rotinas que o Computer executa sozinho, por horário ou quando algo acontece em um app conectado. Segundo as notas de 5/10/2026, elas podem usar memória, habilidades e conectores, aproveitar execuções anteriores e pausar para revisão antes de ações importantes.",
    },
    {
      question: "Os gráficos do Perplexity são confiáveis?",
      answer:
        "O formato é interativo, mas a confiabilidade depende da fonte do dado, que o agente escolhe. Peça a fonte e a data, compare dois ou três pontos com o site oficial e não trate o gráfico como recomendação de investimento.",
    },
    {
      question: "Preciso pagar para usar as Automations?",
      answer:
        "As notas de versão não dizem quais planos incluem as Automations nem os limites de uso. Só o modelo GPT-6.1 Sol aparece como disponível para assinantes pagos elegíveis. Confira dentro do app, na sua conta, antes de contratar.",
    },
    {
      question: "Como testar uma automação sem correr risco?",
      answer:
        "Comece por uma tarefa de leitura, como resumir preços ou prazos, conectando só o app necessário. Revise cada resultado por duas semanas e proíba, no próprio prompt, enviar mensagens, pagar ou apagar arquivos sem a sua aprovação.",
    },
  ],
};
