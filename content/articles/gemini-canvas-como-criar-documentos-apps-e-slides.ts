import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "gemini-canvas-como-criar-documentos-apps-e-slides",
  title: "Gemini Canvas: como criar documentos, apps e slides com IA",
  seoTitle: "Gemini Canvas: o que é e como usar passo a passo",
  excerpt:
    "Gemini Canvas é o espaço do Gemini para criar documentos, slides, quizzes e mini apps conversando. Veja como abrir, o que dá para fazer, exportar e os limites.",
  metaDescription:
    "Gemini Canvas explicado: como abrir, criar documentos, slides e apps sem programar, editar com Select & ask, exportar para Google Docs e os cuidados ao compartilhar.",
  category: "ferramentas",
  date: "2026-10-12",
  readTime: 7,
  imageQuery: "laptop screen app prototype design workspace",
  seed: 228,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O Canvas é um espaço dentro do Gemini onde você conversa e vê o resultado ao lado: documento, slides, quiz, página web ou mini app, com edição direta e salvamento automático.",
    "Dá para exportar documentos para o Google Docs e slides para o Google Slides ou PDF, e transformar um relatório do Deep Research em página, quiz ou áudio.",
    "Ao compartilhar um app criado no Canvas, quem tem o link pode ver e editar os dados dele: não coloque informação sensível ou de clientes.",
  ],
  content: `
    <p>O Gemini Canvas é um espaço dentro do Gemini, o assistente do Google, em que você descreve o que quer e o resultado aparece ao lado da conversa, pronto para editar: um documento, uma apresentação, um quiz, uma página web ou um mini aplicativo. Segundo a página oficial, ele está disponível para todos os usuários do Gemini, e você ativa pela opção Canvas abaixo da caixa de texto.</p>

    <p>Este guia mostra como abrir o Canvas, o que cada tipo de criação entrega, um passo a passo com prompts prontos, como editar e exportar, quais são os limites e os cuidados ao compartilhar, e em que casos vale mais usar outra ferramenta. As informações vêm das páginas oficiais do Google, consultadas em 12/10/2026, e a interface pode mudar.</p>

    <h2>O que é o Gemini Canvas</h2>

    <p>Na conversa comum com uma IA, a resposta fica em um balão de texto e, para ajustar, você pede de novo. No Canvas, o conteúdo ocupa uma área própria, ao lado do chat, onde você edita diretamente e também pede mudanças em linguagem natural. A <a href="https://support.google.com/gemini/answer/16047321?hl=en&co=GENIE.Platform%3DDesktop" rel="noopener noreferrer">página de ajuda do Gemini</a> informa que as alterações são salvas automaticamente e que dá para voltar a versões anteriores ou seguintes.</p>

    <p>O Canvas serve para três grandes famílias de tarefa. A primeira é escrever: documentos longos, com ajuste de tom e tamanho. A segunda é apresentar: slides, infográficos e páginas web. A terceira é construir: aplicativos simples e códigos, inclusive em Python. Se você já usa o Gemini para outras tarefas, o guia do <a href="/artigos/gemini-no-gmail-escrever-e-responder-emails-mais-rapido">Gemini no Gmail</a> e o do <a href="/artigos/gemini-no-chrome-o-que-faz-requisitos-e-como-ativar">Gemini no Chrome</a> mostram outros pontos do mesmo ecossistema.</p>

    <p>Vale saber que o Canvas não é um recurso separado do plano: segundo a <a href="https://gemini.google/overview/canvas/" rel="noopener noreferrer">página de visão geral</a>, ele está disponível a todos, e assinantes dos planos Google AI Pro e Ultra têm acesso com o modelo Gemini 3 e janela de contexto de 1 milhão de tokens para projetos maiores. Para entender qual plano compensa, veja o comparativo <a href="/artigos/google-ai-plus-pro-ou-ultra-qual-plano-do-gemini-escolher">Google AI Plus, Pro ou Ultra</a>.</p>

    <h2>Como abrir e começar, passo a passo</h2>

    <ol>
      <li>Acesse gemini.google.com e entre com a sua conta Google.</li>
      <li>Na versão para computador, clique em Adicionar arquivos e escolha Canvas. No celular, a opção aparece abaixo da caixa de texto.</li>
      <li>Escreva o que você quer. Se tiver material de apoio, anexe arquivos ou imagens junto ao pedido.</li>
      <li>Envie e espere o conteúdo aparecer na área do Canvas.</li>
      <li>Peça ajustes pela caixa de texto ou edite direto no painel.</li>
    </ol>

    <p>O resultado depende muito do pedido. Quanto mais claro for o objetivo, o público e o formato, melhor a primeira versão. O guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">prompt engineering</a> tem a base para escrever instruções que funcionam, e vale o mesmo aqui.</p>

    <h3>Prompt para um documento</h3>

    <pre><code>Crie no Canvas um guia de boas-vindas de 1 página para clientes novos de uma loja de bicicletas. Tom amigável e direto. Seções: como funciona a garantia, como agendar revisão e dúvidas frequentes. Deixe espaços entre colchetes para eu preencher telefone e endereço.</code></pre>

    <h3>Prompt para um mini app</h3>

    <pre><code>Crie no Canvas um app simples para calcular o preço de venda de um produto. Campos: custo, imposto em percentual, comissão em percentual e margem desejada em percentual. Mostre o preço sugerido e o lucro em reais. Interface limpa, em português.</code></pre>

    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Peça sempre uma primeira versão curta e simples, teste, e só depois peça novas funções. Pedidos grandes demais costumam gerar erros mais difíceis de achar.</p></div>

    <h2>O que dá para criar</h2>

    <p>De acordo com a documentação oficial, o Canvas cria documentos de texto (com suporte a LaTeX para equações), apps e códigos, apresentações de slides, quizzes, infográficos, páginas web e Audio Overviews gerados a partir de um documento. A tabela resume os usos mais úteis para quem trabalha com IA no dia a dia.</p>

    <table>
      <thead>
        <tr><th>Tipo</th><th>Exemplo prático</th><th>Para quem ajuda</th></tr>
      </thead>
      <tbody>
        <tr><td>Documento</td><td>Proposta, roteiro, política interna, e-mail longo</td><td>Autônomos e pequenas empresas</td></tr>
        <tr><td>Slides</td><td>Apresentação de resultados ou aula</td><td>Profissionais e professores</td></tr>
        <tr><td>Quiz</td><td>Revisão de matéria a partir do seu resumo</td><td>Estudantes</td></tr>
        <tr><td>Página web</td><td>Página simples de apresentação de um serviço</td><td>Quem vende serviços</td></tr>
        <tr><td>Mini app</td><td>Calculadora de preço, checklist, painel de acompanhamento</td><td>Donos de negócio</td></tr>
      </tbody>
    </table>

    <p>A página de visão geral cita ainda usos como painéis de acompanhamento de equipe, controles de clientes e simuladores de preço para propostas. Depois de rodar o Deep Research, o botão Criar transforma o relatório em página web, infográfico, quiz ou áudio. Se a intenção é estudar, combine com o <a href="/artigos/gemini-notebook-antigo-notebooklm-o-que-mudou">Gemini Notebook</a>; se é montar apresentação, compare com o fluxo de <a href="/artigos/como-criar-apresentacoes-e-slides-profissionais-com-ia">slides profissionais com IA</a> e com a análise <a href="/artigos/gamma-ou-canva-qual-ia-cria-apresentacao-melhor">Gamma ou Canva</a>.</p>

    <h2>Editando, ajustando e exportando</h2>

    <p>Em documentos, a barra de ferramentas permite formatar títulos, negrito e listas, alterar o tamanho e o tom do texto e pedir sugestões de edição. O recurso Select &amp; ask deixa você marcar um trecho e pedir só aquela mudança, o que evita reescrever o texto inteiro. Em apps, há a visualização do código, um console para ver erros e histórico de alterações recentes.</p>

    <p>Para levar o trabalho para fora, o Compartilhar e exportar gera um link e permite exportar documentos para o Google Docs e slides para o Google Slides ou PDF. O código Python pode seguir para o Colab. Segundo a ajuda oficial, documentos com LaTeX podem ser exportados em PDF, mas o LaTeX copiado aparece como código sem renderizar.</p>

    <p>Uma rotina eficiente: crie o rascunho no Canvas, peça uma versão enxuta, exporte para o Google Docs, faça a revisão final e só então envie ao cliente. Para tarefas que se repetem, como relatórios semanais, vale combinar com as dicas de <a href="/artigos/ia-para-planilhas-automatizar-relatorios-excel-sheets">IA para planilhas</a>.</p>

    <h2>Exemplo: dono de uma loja pequena monta uma calculadora de preço</h2>

    <p>Imagine uma loja de acessórios com 120 produtos, cuja dona costumava calcular preço de venda na calculadora do celular. Ela pede o app do prompt acima ao Canvas, testa com três produtos conhecidos e confere o resultado manualmente. Para um item com custo de R$ 40, imposto de 6%, comissão de maquininha de 3% e margem desejada de 30%, o app indica o preço dividindo o custo por 1 menos a soma dos percentuais (0,06 + 0,03 + 0,30 = 0,39), o que dá aproximadamente R$ 65,57.</p>

    <p>O ponto importante é a conferência: ela refez a conta à mão antes de usar o app e só depois passou a usá-lo no dia a dia. O tempo de criação foi de alguns minutos, sem programar. Para ir além de uma conta simples, o guia sobre <a href="/artigos/como-precificar-produtos-e-servicos-com-ia">como precificar produtos e serviços com IA</a> traz a lógica por trás dos percentuais. Esse tipo de ferramenta de uso próprio também é o primeiro degrau de ideias maiores, como as de <a href="/artigos/micro-saas-com-ia-ganhar-dinheiro-sem-programar">micro-SaaS com IA</a>, mas apps feitos no Canvas servem melhor a uso interno e a protótipos.</p>

    <h2>Limites e cuidados ao compartilhar</h2>

    <p>A documentação oficial traz avisos que merecem atenção. Qualquer pessoa com o link público de um app pode ver e editar os dados dele. Links compartilhados abrem apenas em gemini.google.com, e não no aplicativo do Gemini para celular. Adicionar recursos de IA a um app exige ter 18 anos ou mais, e criar conteúdo a partir de um documento não está disponível para menores. Além disso, se a Atividade do Gemini estiver ligada, o conteúdo copiado de um Canvas compartilhado é salvo nela.</p>

    <p>Na prática, trate o link como público. Não coloque nomes, telefones, valores de clientes ou dados de saúde em um app compartilhado. Na dúvida sobre o que a IA guarda e o que você entrega, leia o guia de <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a> e aprenda a <a href="/artigos/apagar-historico-do-gemini-e-usar-chat-temporario">apagar o histórico e usar o chat temporário do Gemini</a>.</p>

    <p>Outro limite é o erro. Código e texto gerados por IA podem conter falhas, números inventados ou cálculos errados. Teste com casos que você já conhece a resposta e revise tudo que sai com o seu nome, como explica o texto sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a>. E lembre que o Google reorganiza recursos com frequência, como mostra a notícia sobre o <a href="/noticias/google-encerra-gemini-gems-migra-skills">fim do Gemini Gems</a>: guarde cópia do que for importante fora da ferramenta.</p>

    <h2>Erros comuns e quando usar outra ferramenta</h2>

    <ul>
      <li><strong>Pedir tudo de uma vez:</strong> comece pequeno e evolua em etapas.</li>
      <li><strong>Não testar o app:</strong> confira cálculos e botões com valores conhecidos.</li>
      <li><strong>Compartilhar com dados reais:</strong> use dados fictícios em demonstrações.</li>
      <li><strong>Usar o Canvas para tudo:</strong> para um site completo com domínio próprio, veja o guia de <a href="/artigos/como-criar-landing-pages-e-sites-simples-com-ia">landing page e sites com IA</a>.</li>
      <li><strong>Não comparar alternativas:</strong> o texto <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini: qual escolher</a> ajuda a decidir qual assistente combina com cada tarefa.</li>
    </ul>

    <p>Abra o Canvas hoje e faça um teste com um problema real e pequeno, como uma calculadora ou um checklist da sua rotina. Se o resultado ajudar, você ganha uma ferramenta própria em minutos, e o hábito de pedir, testar e ajustar serve para qualquer outra IA que você venha a usar.</p>
  `,
  faq: [
    {
      question: "O Gemini Canvas é gratuito?",
      answer:
        "Segundo a página oficial do Google, o Canvas está disponível para todos os usuários do Gemini. Assinantes dos planos Google AI Pro e Ultra têm acesso com o Gemini 3 e janela de contexto maior, para projetos grandes. Preços e limites mudam, então consulte a página oficial antes de assinar.",
    },
    {
      question: "Como abrir o Canvas no Gemini?",
      answer:
        "No computador, entre em gemini.google.com, clique em Adicionar arquivos e escolha Canvas abaixo da caixa de texto. No celular, a opção também aparece abaixo da caixa de texto. Depois escreva o pedido, envie e edite o resultado no painel ao lado da conversa.",
    },
    {
      question: "Dá para exportar o que criei no Canvas?",
      answer:
        "Sim. Documentos podem ir para o Google Docs, slides para o Google Slides ou PDF e código Python para o Colab, conforme a plataforma. Também é possível copiar o conteúdo como texto ou gerar um link de compartilhamento pela opção Compartilhar e exportar.",
    },
    {
      question: "É seguro compartilhar um app criado no Canvas?",
      answer:
        "Com cuidado. Segundo a documentação oficial, qualquer pessoa com o link público de um app pode ver e editar os dados dele. Por isso, nunca use informações de clientes, saúde ou finanças em apps compartilhados e prefira dados fictícios em demonstrações.",
    },
    {
      question: "Canvas substitui o Google Docs ou o Canva?",
      answer:
        "Não exatamente. O Canvas é um espaço de criação assistida por IA dentro do Gemini, bom para rascunhos, protótipos e apps simples. Para edição colaborativa avançada você exporta para o Google Docs, e para design de identidade visual o Canva ainda é mais completo.",
    },
  ],
};
