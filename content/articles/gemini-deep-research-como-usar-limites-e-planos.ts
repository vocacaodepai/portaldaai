import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "gemini-deep-research-como-usar-limites-e-planos",
  title: "Gemini Deep Research: como usar, limites e planos em 2026",
  seoTitle: "Gemini Deep Research: como usar, limites e planos",
  excerpt:
    "Gemini Deep Research monta relatórios com fontes em 5 a 10 minutos. Veja o passo a passo, o que muda entre planos, os limites e como conferir o resultado.",
  metaDescription:
    "Gemini Deep Research: aprenda a ativar, editar o plano de pesquisa, escolher fontes, entender os limites por plano e conferir o relatório antes de usar.",
  category: "ferramentas",
  date: "2026-10-13",
  readTime: 7,
  imageQuery: "researcher reading reports laptop library",
  seed: 233,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O Deep Research do Gemini cria um plano de pesquisa, navega em várias fontes e entrega um relatório em geral em 5 a 10 minutos, que você pode exportar para o Google Docs.",
    "Todos os usuários usam o modelo Thinking nos relatórios; os planos Google AI Pro e Ultra têm limites maiores e acesso ao modelo Pro, e a página oficial não informa o número exato.",
    "O relatório não dispensa conferência: abra as fontes citadas e desconfie de números sem origem, pois a IA pode errar ou interpretar mal uma página.",
  ],
  content: `
    <p>O Gemini Deep Research é o modo do Gemini que faz pesquisa em várias etapas: você escreve a pergunta, ele monta um plano, consulta fontes e entrega um relatório organizado, que costuma levar de 5 a 10 minutos. Serve para estudo, trabalho e decisões de compra, mas o resultado precisa ser conferido antes de virar base de qualquer decisão.</p>

    <p>Se você já usa o Gemini só para perguntas rápidas, este recurso funciona diferente: em vez de uma resposta imediata, é um relatório que você revisa e edita. Abaixo estão o passo a passo atualizado, as fontes que ele aceita, o que muda de plano para plano, prompts prontos e os cuidados que evitam usar uma informação errada.</p>

    <h2>O que é o Deep Research e quando vale usar</h2>

    <p>Segundo a <a href="https://support.google.com/gemini/answer/15719111" target="_blank" rel="noopener noreferrer">página de ajuda do Gemini Apps</a>, o Deep Research gera relatórios a partir de um plano de pesquisa que você pode ajustar. A geração costuma levar de 5 a 10 minutos, podendo demorar mais em relatórios complexos, e você pode sair do chat e ser notificado quando terminar.</p>

    <p>Vale usar quando a pergunta tem muitos lados: comparar ferramentas, entender uma regra nova, levantar o cenário de um mercado ou preparar um trabalho. Para uma dúvida simples, o chat normal é mais rápido. Para pesquisa em seus próprios arquivos ou PDFs, o <a href="/artigos/gemini-notebook-antigo-notebooklm-o-que-mudou">NotebookLM</a> é uma alternativa, e o guia de <a href="/artigos/perplexity-notebooklm-ia-de-pesquisa-estudar-mais-rapido">IA de pesquisa para estudar mais rápido</a> compara as opções.</p>

    <h2>Passo a passo para ativar</h2>

    <ol>
      <li>Acesse gemini.google.com no computador e entre com sua conta Google.</li>
      <li>Clique em "Adicionar arquivos" e depois em "Deep Research".</li>
      <li>Em "Fontes", escolha onde pesquisar. A Pesquisa Google já vem marcada e pode ser desmarcada.</li>
      <li>Digite a pergunta e clique em "Enviar".</li>
      <li>Revise o plano de pesquisa e, se quiser, clique em "Editar plano".</li>
      <li>Clique em "Iniciar pesquisa" e, quando terminar, em "Abrir" para ler o relatório.</li>
    </ol>

    <p>Os requisitos informados pelo Google incluem ter 18 anos ou mais, estar conectado ao Gemini Apps e manter a configuração Keep Activity ativada para encontrar relatórios anteriores. Informações verificadas em 13/10/2026; os nomes de botões podem mudar. Quem tem dúvida sobre privacidade deve ler antes <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">o que a IA guarda das suas conversas</a>.</p>

    <h2>Fontes que o Deep Research aceita</h2>

    <p>A mesma página lista as fontes: Pesquisa Google (padrão), Gmail e Drive (desde que o Google Workspace esteja conectado ao Gemini Apps), arquivos enviados e blocos de anotações do NotebookLM. Há um detalhe: gráficos, diagramas e simuladores não ficam disponíveis quando serviços do Workspace são usados como fonte.</p>

    <p>Na prática, para uma pesquisa pública, deixe só a Pesquisa Google. Para analisar contratos, planilhas ou relatórios internos, envie os arquivos e não marque e-mails que contenham dados de terceiros sem necessidade. Se a pesquisa envolve concorrentes, o roteiro de <a href="/artigos/como-usar-ia-para-monitorar-concorrencia-tomar-decisoes-melhores">monitoramento de concorrência com IA</a> mostra como transformar o relatório em decisão.</p>

    <h2>Limites e diferenças entre planos</h2>

    <p>De acordo com o Google, todos os usuários podem usar o modelo Thinking nos relatórios, enquanto Google AI Pro e Google AI Ultra podem usar o modelo Pro, para relatórios de maior qualidade. Existem limites de pesquisas por dia e de pesquisas simultâneas, e o app avisa quantas restam. Assinantes Pro e Ultra têm limites maiores, mas a página não informa números exatos. O Ultra inclui visuais e animações nos relatórios.</p>

    <p>A <a href="https://support.google.com/gemini/answer/16275805" target="_blank" rel="noopener noreferrer">página de limites de uso do Gemini Apps</a> acrescenta que os limites são baseados em computação, renovam a cada 5 horas até um limite semanal e variam por plano: AI Plus tem 2 vezes o padrão, AI Pro 4 vezes e AI Ultra de 5 a 20 vezes o limite do Pro. O Google avisa que os limites podem mudar sem aviso. Para escolher plano, o texto <a href="/artigos/google-ai-plus-pro-ou-ultra-qual-plano-do-gemini-escolher">Google AI Plus, Pro ou Ultra</a> detalha, e o de <a href="/artigos/ia-gratis-ou-paga-o-que-vale-a-pena">IA grátis ou paga</a> ajuda a decidir se compensa pagar.</p>

    <table>
      <thead>
        <tr><th>Plano</th><th>Modelo no Deep Research</th><th>Limite</th></tr>
      </thead>
      <tbody>
        <tr><td>Sem plano</td><td>Thinking</td><td>Limites padrão diários</td></tr>
        <tr><td>Google AI Pro</td><td>Pro</td><td>Maior que o padrão; número não divulgado</td></tr>
        <tr><td>Google AI Ultra</td><td>Pro, com visuais e animações</td><td>Ainda maior; número não divulgado</td></tr>
      </tbody>
    </table>

    <h2>Prompts que funcionam melhor</h2>

    <p>Quanto mais claro o objetivo, melhor o plano. Informe quem é você, para quê o relatório serve, o período e o formato desejado. O guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">como escrever comandos que funcionam</a> ajuda a refinar.</p>

    <pre><code>Quero decidir qual plano de ferramenta de IA contratar para um escritório de contabilidade com 4 pessoas no Brasil. Compare 3 opções, com recursos, preço em reais ou dólar com a data da consulta, privacidade de dados e limites. Cite as fontes de cada informação e destaque o que está incerto.</code></pre>

    <pre><code>Pesquise o que mudou nos últimos 12 meses sobre [TEMA] no Brasil. Entregue: resumo de 10 linhas, linha do tempo, pontos de discordância entre as fontes e uma lista de links oficiais. Não use blogs sem autoria.</code></pre>

    <h2>Como conferir o relatório antes de usar</h2>

    <p>Relatório longo passa sensação de segurança, o que é um risco. Abra as fontes das três a cinco afirmações mais importantes, veja se a página realmente diz aquilo e cheque datas. Desconfie de número sem link, de fonte secundária que cita outra e de ferramenta que "parece oficial". O texto sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a> traz um roteiro de checagem em 5 passos.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Não use o relatório como parecer jurídico, médico ou financeiro. Ele resume fontes; a decisão exige profissional e documento oficial.</p></div>

    <p>Depois de conferir, é possível, segundo o Google, gerar um Audio Overview (resumo em áudio) no painel Canvas, criar visualizações, compartilhar, exportar para o Google Docs ou copiar o texto. O guia do <a href="/artigos/gemini-canvas-como-criar-documentos-apps-e-slides">Gemini Canvas</a> mostra como transformar o relatório em documento ou apresentação.</p>

    <h2>Exemplos de uso no dia a dia</h2>

    <ul>
      <li><strong>Estudante:</strong> levantar panorama de um tema e listar leituras para aprofundar.</li>
      <li><strong>Freelancer:</strong> pesquisar o mercado de um nicho antes de montar proposta, como em <a href="/artigos/ganhar-dinheiro-com-pesquisa-de-mercado-para-pequenas-empresas-usando-ia">pesquisa de mercado com IA</a>.</li>
      <li><strong>Dono de negócio:</strong> comparar fornecedores ou checar a viabilidade de uma ideia, com o apoio da <a href="/artigos/como-validar-ideia-de-negocio-com-ia-antes-de-investir">validação de ideia de negócio</a>.</li>
      <li><strong>Profissional:</strong> resumir material longo, junto ao guia de <a href="/artigos/como-usar-ia-para-resumir-pdfs-artigos-e-textos-longos">resumo de PDFs</a>.</li>
    </ul>

    <h2>Deep Research ou chat normal: qual escolher</h2>

    <p>Use o chat normal para dúvidas rápidas, reescrever textos e tarefas curtas. Use o Deep Research quando a resposta depender de várias fontes e você aceitar esperar alguns minutos. Como os limites são contados por dia, guarde o recurso para perguntas que valem o relatório, como uma decisão de compra, um trabalho acadêmico ou um levantamento de mercado que você levaria horas para fazer à mão. Uma boa prática é fazer uma pergunta preliminar no chat, descobrir os termos certos e só então abrir a pesquisa profunda com o tema bem delimitado.</p>

    <h2>Erros comuns</h2>

    <ul>
      <li><strong>Pergunta vaga:</strong> "fale sobre IA" gera relatório genérico; delimite tema, país e período.</li>
      <li><strong>Pular a edição do plano:</strong> é a etapa mais barata para corrigir o rumo.</li>
      <li><strong>Copiar o relatório sem conferir:</strong> cheque fontes e datas.</li>
      <li><strong>Marcar Gmail e Drive sem necessidade:</strong> misture só o que for preciso.</li>
      <li><strong>Gastar o limite diário em testes:</strong> comece com perguntas bem pensadas.</li>
    </ul>

    <p>Para comparar o Gemini com outros assistentes, leia <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">qual IA escolher</a> e as <a href="/artigos/gemini-3-vale-a-pena-novidades-precos-comparacao-chatgpt">novidades e preços do Gemini 3</a>. Teste o Deep Research com uma pergunta real do seu dia e compare o relatório com o que você já sabia.</p>
  `,
  faq: [
    {
      question: "O Gemini Deep Research é gratuito?",
      answer:
        "Segundo o Google, todos os usuários podem usar o Deep Research com o modelo Thinking, com limites diários. Os planos Google AI Pro e Ultra têm limites maiores e acesso ao modelo Pro. Os limites podem mudar sem aviso, então consulte a página oficial.",
    },
    {
      question: "Quanto tempo leva um relatório do Deep Research?",
      answer:
        "Em geral de 5 a 10 minutos, podendo demorar mais em relatórios complexos, segundo a ajuda do Gemini. Você pode sair do chat enquanto ele trabalha e será notificado quando o relatório estiver pronto para abrir.",
    },
    {
      question: "Quais fontes o Deep Research usa?",
      answer:
        "A Pesquisa Google vem ativada por padrão. Também é possível incluir Gmail e Drive, se o Google Workspace estiver conectado ao Gemini Apps, além de arquivos enviados e blocos de anotações do NotebookLM. Gráficos não aparecem se serviços do Workspace forem fonte.",
    },
    {
      question: "Posso editar o plano de pesquisa?",
      answer:
        "Sim. Depois de enviar a pergunta, o Gemini mostra um plano e você pode ajustá-lo em Editar plano antes de clicar em Iniciar pesquisa. É a forma mais barata de corrigir o foco, o período e as fontes antes de gastar um dos seus relatórios diários.",
    },
    {
      question: "Posso confiar no relatório do Deep Research?",
      answer:
        "Use como ponto de partida, não como verdade final. Abra as fontes das afirmações principais, confira datas e números e desconfie de dados sem link. Para decisões jurídicas, médicas ou financeiras, procure um profissional ou documento oficial.",
    },
  ],
};
