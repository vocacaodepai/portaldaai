import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "como-criar-apresentacoes-e-slides-profissionais-com-ia",
  title: "Apresentações com IA: como criar slides profissionais em minutos",
  seoTitle: "Apresentações com IA: slides profissionais em minutos",
  excerpt:
    "Apresentações com IA: monte roteiro, gere os slides no Gemini, Copilot, Gamma ou Canva e revise em minutos, com prompts prontos e um exemplo brasileiro.",
  metaDescription:
    "Apresentações com IA: aprenda a criar slides profissionais em minutos com Gemini no Slides, Copilot no PowerPoint, Gamma e Canva, com prompts prontos e custo.",
  category: "ferramentas",
  date: "2026-09-15",
  updated: "2026-09-27",
  readTime: 9,
  imageQuery: "presentation slides business screen",
  seed: 31,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "A IA resolve as duas partes lentas de uma apresentação: transformar ideia em roteiro de slides e aplicar um visual coerente sem saber design.",
    "Gemini no Google Slides e Copilot no PowerPoint geram a apresentação inteira a partir de um pedido em texto; Gamma e Canva fazem o mesmo fora dessas suítes.",
    "O fluxo que funciona é roteiro primeiro, slides depois e revisão sempre: apresentação boa tem um tópico por slide e menos texto do que a IA sugere.",
  ],
  content: `
    <p>Criar apresentações com IA é o caminho mais curto entre "preciso apresentar isso na quinta" e um conjunto de slides que dá para mostrar sem vergonha. A IA monta o roteiro a partir da sua ideia, escreve o título de cada slide, sugere o visual e ainda gera as imagens. O que antes tomava uma noite passa a caber em uma hora, com a maior parte do tempo gasta em revisão.</p>

    <p>Este guia mostra o fluxo em quatro passos, compara as ferramentas que geram slides sozinhas (Gemini no Google Slides, Copilot no PowerPoint, Gamma e Canva), traz três prompts prontos, um exemplo brasileiro com as contas e os erros que entregam uma apresentação com cara de máquina. Serve para proposta comercial, aula, relatório mensal e pitch.</p>

    <h2>O que a IA resolve em uma apresentação (e o que não resolve)</h2>

    <p>Apresentação ruim nasce de dois problemas: conteúdo desorganizado e visual improvisado. A IA ataca os dois. Na estrutura, ela transforma um texto solto, uma ata de reunião ou um documento de 20 páginas em uma sequência lógica de 8 a 12 slides, com um tópico por slide e títulos curtos. No visual, aplica um layout coerente, escolhe paleta e tipografia e gera imagens para ilustrar ideias abstratas.</p>

    <p>O que ela não resolve: saber o que a sua audiência precisa ouvir. A IA não conhece o cliente que vai receber a proposta nem o chefe que odeia gráfico de pizza. Ela também tende a encher o slide de texto, porque texto é o que ela produz melhor. Por isso o fluxo deste guia começa pelo roteiro e termina na revisão, nunca no botão "gerar".</p>

    <p>Se você ainda está decidindo qual assistente usar para a parte de texto, o comparativo <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini</a> ajuda a escolher. Para a parte visual, o guia de <a href="/artigos/canva-capcut-e-ia-artes-e-videos-sem-saber-design">Canva, CapCut e IA</a> cobre o básico de design que a apresentação vai reaproveitar.</p>

    <h2>Quais ferramentas geram slides com IA?</h2>

    <p>Existem dois caminhos. O primeiro é usar a IA que já vem dentro da sua suíte de escritório: Gemini no Google Slides ou Copilot no PowerPoint. O segundo é usar uma ferramenta feita para isso, como Gamma ou Canva, e exportar para PowerPoint ou PDF no fim. A tabela abaixo resume; preços e limites mudam com frequência, então consulte a página oficial antes de assinar.</p>

    <table>
      <thead>
        <tr><th>Ferramenta</th><th>Como gera</th><th>Melhor para</th><th>Custo para começar</th></tr>
      </thead>
      <tbody>
        <tr><td>Gemini no Google Slides</td><td>Um pedido em texto vira apresentação editável</td><td>Quem já trabalha no Google Workspace</td><td>Exige plano Google Workspace ou Google AI elegível</td></tr>
        <tr><td>Copilot no PowerPoint</td><td>Modo agente monta roteiro e slides a partir do pedido ou de um arquivo</td><td>Empresas no Microsoft 365</td><td>Exige licença com Copilot; consulte a página oficial</td></tr>
        <tr><td>Gamma</td><td>Texto ou documento vira apresentação com layout pronto</td><td>Pitch, aula e proposta rápida</td><td>Consulte a página oficial</td></tr>
        <tr><td>Canva (Magic Design)</td><td>Prompt gera modelos de apresentação para editar</td><td>Quem quer controle visual e marca própria</td><td>Consulte a página oficial</td></tr>
        <tr><td>ChatGPT ou Claude + qualquer editor</td><td>Gera roteiro e texto dos slides; você monta no editor</td><td>Quem quer custo zero e controle total</td><td>R$ 0 no plano gratuito</td></tr>
      </tbody>
    </table>

    <h3>Gemini no Google Slides</h3>

    <p>Segundo a <a href="https://support.google.com/docs/answer/14206696?hl=pt-BR" rel="noopener noreferrer">documentação do Google</a>, o recurso "Peça ao Gemini" cria uma apresentação totalmente editável no Slides com um único comando, e você pode apontar uma apresentação antiga como referência de estilo. Ele depende de um plano elegível: a <a href="https://workspace.google.com/pricing" rel="noopener noreferrer">página de planos do Workspace</a> mostra que o Business Starter não inclui Gemini no Slides, e que a partir do Standard entra o acesso ampliado. Para pessoa física, o <a href="https://gemini.google/subscriptions/" rel="noopener noreferrer">Google AI Pro</a> custa US$ 19,99 por mês (verificado em 27/09/2026).</p>

    <h3>Copilot no PowerPoint</h3>

    <p>A <a href="https://support.microsoft.com/en-us/copilot-powerpoint" rel="noopener noreferrer">página de suporte da Microsoft</a> descreve dois jeitos: dentro do PowerPoint, o modo agente do Copilot faz perguntas sobre público e tom, monta um esboço e gera os slides; fora dele, você pede ao Microsoft Copilot "crie uma apresentação sobre" e ele entrega o arquivo no OneDrive. Ele também cria a apresentação a partir de um documento do Word, o que é útil para quem já tem a proposta escrita.</p>

    <h2>Passo a passo: da ideia ao slide final em uma hora</h2>

    <p>O fluxo abaixo funciona com qualquer ferramenta da tabela. A ordem importa: quem começa pelo visual passa a hora inteira trocando cor de fundo e termina sem argumento. O guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">prompt engineering</a> explica por que os prompts dão contexto antes do pedido.</p>

    <ol>
      <li><strong>Defina objetivo e público em uma frase.</strong> "Convencer o dono da padaria a contratar meu serviço de redes sociais" é um objetivo. "Falar sobre marketing" não é.</li>
      <li><strong>Peça o roteiro, não os slides.</strong> Cole o prompt abaixo no ChatGPT, Claude ou Gemini e revise a ordem dos tópicos antes de qualquer visual.</li>
      <li><strong>Gere os slides.</strong> Cole o roteiro aprovado na ferramenta de slides (Gemini, Copilot, Gamma ou Canva) e peça um tópico por slide.</li>
      <li><strong>Corte texto.</strong> Regra prática: no máximo 25 palavras por slide. O resto vai para as anotações do apresentador.</li>
      <li><strong>Revise com olho de audiência.</strong> Leia cada slide perguntando "o que o cliente ganha com isso?". Slide que não responde sai.</li>
      <li><strong>Ensaie uma vez em voz alta.</strong> Onde você travar, o slide está confuso.</li>
    </ol>

    <pre><code>Você é consultor de apresentações. Preciso apresentar [tema] para [público: cliente, chefe, turma].
Objetivo: [o que a audiência deve decidir ou fazer ao final].
Tempo de fala: [X] minutos.
Monte um roteiro de 8 a 12 slides. Para cada slide, entregue:
1) Título de até 8 palavras.
2) A única ideia do slide, em uma frase.
3) Que tipo de apoio visual usar (gráfico, foto, ícone, só texto).
Não escreva o texto completo dos slides ainda.</code></pre>

    <pre><code>Aprovei o roteiro abaixo. Agora escreva o conteúdo de cada slide com no máximo 25 palavras, em frases curtas, sem adjetivos vazios.
Depois, para cada slide, escreva de 3 a 5 frases de anotação para eu falar em voz alta.
Termine com um slide de encerramento que peça uma ação clara ao público.

[cole o roteiro]</code></pre>

    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Peça para a IA gerar a apresentação a partir de um documento seu (proposta, ata, relatório) em vez de um pedido genérico. O Copilot e o Gemini aceitam arquivo como base, e o resultado sai com os seus números, não com exemplos inventados.</p></div>

    <h2>Exemplo brasileiro: proposta comercial em 50 minutos</h2>

    <p>Cenário ilustrativo, montado para mostrar o tempo e o custo (não é um caso que acompanhamos). Diego presta serviço de gestão de redes sociais em Fortaleza e precisava de uma proposta em slides para uma rede de três academias. Antes, ele levava uma noite inteira montando no PowerPoint e ainda achava o resultado amador.</p>

    <p>Desta vez ele escreveu o objetivo em uma frase, colou o primeiro prompt no Claude gratuito e recebeu um roteiro de 10 slides em dois minutos. Trocou a ordem de dois tópicos, pediu o texto dos slides com o segundo prompt e colou tudo no Gamma, que aplicou layout, ícones e uma imagem por slide.</p>

    <p>Tempo total: 50 minutos, sendo 30 de revisão e ensaio. Custo: R$ 0, usando os planos gratuitos do Claude e do Gamma (limites do gratuito mudam; consulte a página oficial). O ganho não foi só o tempo: a proposta chegou com um slide de investimento claro e um pedido de decisão no final, coisa que a versão feita de madrugada nunca tinha. Quem vende serviço assim encontra mais sobre a estrutura do argumento no guia de <a href="/artigos/como-escrever-pitch-de-negocio-com-ia">como escrever um pitch com IA</a>.</p>

    <h2>Imagens, gráficos e narração: o que mais a IA pode gerar</h2>

    <p>Slide sem imagem cansa, e imagem de banco de fotos genérica cansa mais. Gemini, Copilot e Gamma geram imagens a partir de uma descrição, e o ChatGPT faz o mesmo para você baixar e inserir. Descreva a cena com detalhe ("balcão de padaria, luz da manhã, sem pessoas, estilo fotografia") e evite pedir rosto de gente real. O guia de <a href="/artigos/ia-para-criadores-de-conteudo-videos-textos-e-artes">IA para criadores de conteúdo</a> mostra como escrever esses pedidos.</p>

    <p>Para gráficos, o caminho mais seguro é gerar na planilha e colar: o Gemini no Sheets e o Copilot no Excel criam gráfico a partir dos dados reais, como explica o artigo sobre <a href="/artigos/ia-para-planilhas-automatizar-relatorios-excel-sheets">IA para planilhas</a>. Gráfico desenhado pela IA a partir de um número solto pode sair com escala errada, e ninguém quer descobrir isso na frente do cliente.</p>

    <p>Se a apresentação vai ser gravada em vez de apresentada ao vivo, dá para ir além: narração com voz sintética, tema do guia de <a href="/artigos/ia-para-audio-criar-podcasts-e-narracoes-profissionais">IA para áudio</a>, ou um <a href="/artigos/ia-para-video-criar-avatar-digital-que-fala-por-voce">avatar digital que fala por você</a>. E quem dá aula ou vende curso monta a apresentação uma vez e reaproveita em vídeo, como mostra o guia sobre <a href="/artigos/como-criar-e-vender-curso-online-usando-ia">criar e vender curso online com IA</a>.</p>

    <h2>Erros comuns ao criar slides com IA</h2>

    <p>O erro mais visível é entregar o slide do jeito que a IA gerou: parágrafo inteiro em cada tela, título genérico ("Introdução", "Nossos diferenciais") e imagem sem relação com a fala. Os erros abaixo aparecem em quase toda primeira apresentação gerada.</p>

    <ul>
      <li><strong>Número inventado no slide.</strong> A IA completa dados que faltam com estimativa plausível. Todo número precisa vir de uma fonte sua ou sair do slide.</li>
      <li><strong>Colar dado sigiloso de cliente na ferramenta.</strong> Proposta com faturamento do cliente ou contrato anexado merece uma passada no <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist de segurança para ferramentas de IA</a>.</li>
      <li><strong>Vinte slides para dez minutos.</strong> Um slide por minuto de fala já é muito. Corte pela metade.</li>
      <li><strong>Visual bonito, argumento fraco.</strong> Gamma e Canva deixam tudo bonito, inclusive uma proposta sem pedido de decisão. Revise o conteúdo antes de admirar o layout.</li>
      <li><strong>Assinar plano antes de testar.</strong> Rode o fluxo inteiro no gratuito por duas apresentações. O artigo <a href="/artigos/ia-gratis-ou-paga-o-que-vale-a-pena">IA grátis ou paga</a> mostra quando o limite começa a doer de verdade.</li>
    </ul>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Apresentação gerada por IA com logotipo e nome de uma empresa que não é sua pode configurar uso indevido de marca. Use a identidade visual do seu negócio; o guia de <a href="/artigos/ia-para-design-de-logotipo-marca-simples-profissional">IA para design de logotipo</a> mostra como criar uma simples e registrável.</p></div>

    <h2>Saber montar apresentação com IA virou habilidade vendável</h2>

    <p>Muita gente paga para não aprender isso. Consultores, professores e pequenos empresários precisam de proposta, aula e relatório toda semana e não têm tempo para aprender Gamma ou dominar o Copilot. Quem domina o fluxo deste guia pode oferecer o serviço, como mostra o passo a passo de <a href="/artigos/como-vender-consultoria-de-ia-para-pequenas-empresas">vender consultoria de IA para pequenas empresas</a>, ou usar isso para se tornar a <a href="/artigos/como-se-tornar-referencia-em-ia-na-empresa-sem-ser-do-ti">referência em IA na própria empresa</a>.</p>

    <p>Comece pela próxima apresentação que você precisa fazer: escreva o objetivo em uma frase, rode o primeiro prompt e monte os slides no gratuito. Se o resultado for melhor do que o de sempre, você já sabe o que fazer com a hora que sobrou. Os outros testes e comparativos de ferramentas estão na categoria <a href="/categoria/ferramentas">Ferramentas</a>.</p>
  `,
  faq: [
    {
      question: "Qual a melhor IA para criar apresentações de graça?",
      answer:
        "Para custo zero, a combinação mais segura é gerar roteiro e texto no ChatGPT, Claude ou Gemini gratuitos e montar os slides no Google Slides ou no Canva gratuito. Gamma e Canva têm versões gratuitas com limite de gerações por IA, que muda com frequência, então consulte a página oficial. Gemini no Slides e Copilot no PowerPoint exigem plano pago.",
    },
    {
      question: "O Gemini cria apresentação no Google Slides?",
      answer:
        "Cria. Segundo a documentação do Google, o recurso Peça ao Gemini gera uma apresentação totalmente editável no Slides a partir de um único comando, e aceita uma apresentação antiga como referência de estilo. O recurso depende de um plano Google Workspace ou Google AI elegível; o plano Business Starter do Workspace não inclui Gemini no Slides, e o Google AI Pro para pessoa física custa US$ 19,99 por mês (verificado em 27/09/2026).",
    },
    {
      question: "Como usar o Copilot para fazer slides no PowerPoint?",
      answer:
        "Dentro do PowerPoint, abra uma apresentação nova, clique no ícone do Copilot, escolha adicionar conteúdo e o modo agente, e descreva a apresentação. O Copilot pergunta sobre público e tom, monta um esboço e gera os slides, que você refina conversando. Também dá para pedir ao Microsoft Copilot que crie a apresentação a partir de um documento do Word. É preciso ter licença do Microsoft 365 com Copilot.",
    },
    {
      question: "Quantos slides uma apresentação feita com IA deve ter?",
      answer:
        "A IA tende a gerar mais slides e mais texto do que o necessário. Uma regra prática: no máximo um slide por minuto de fala e até 25 palavras por slide, com o resto nas anotações do apresentador. Para uma proposta comercial de 10 minutos, 8 a 10 slides bastam. Corte tudo que não responde a pergunta que a audiência tem.",
    },
    {
      question: "Posso colar dados do cliente na IA para montar a proposta?",
      answer:
        "Depende da ferramenta e dos termos de uso. Dados públicos e o seu próprio conteúdo não têm problema. Faturamento, contrato e informação sigilosa do cliente só devem entrar em ferramenta cujos termos você leu e que não usa o conteúdo para treinar modelos. Na dúvida, troque o dado real por um placeholder e preencha no editor depois.",
    },
  ],
};
