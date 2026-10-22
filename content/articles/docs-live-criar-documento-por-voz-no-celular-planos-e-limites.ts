import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "docs-live-criar-documento-por-voz-no-celular-planos-e-limites",
  title: "Docs Live no Google Docs: criar documento por voz no celular",
  seoTitle: "Docs Live no Google Docs: documento por voz",
  excerpt:
    "O Docs Live deixa você ditar ideias no app do Google Docs e receber um documento estruturado. Veja quem tem acesso, o passo a passo, os limites e o idioma.",
  metaDescription:
    "Docs Live no Google Docs para celular: planos com acesso, passo a passo do Criar com voz, exemplos de pedido, limite de idioma e cuidados, conforme avisos do Google.",
  category: "ferramentas",
  date: "2026-10-22",
  readTime: 7,
  imageQuery: "woman speaking phone document desk",
  seed: 533,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Segundo o Google, o Docs Live chegou ao app do Google Docs para Android e iOS em 21/10/2026 e monta um documento estruturado a partir da sua fala, puxando contexto de Gmail, Chat, Drive e web.",
    "O acesso depende do plano: Workspace Business e Enterprise (Standard e Plus), Google AI Pro e Ultra e alguns complementos de educação, e a página de ajuda informa que a função está em disponibilidade limitada.",
    "A página de ajuda do Google diz que o recurso funciona só em inglês por enquanto, então para escrever em português vale tratar o Docs Live como novidade para acompanhar, não como ferramenta de rotina.",
  ],
  content: `
    <p>O Docs Live é um recurso do app do Google Docs para celular que permite criar um documento estruturado falando com o Gemini, sem digitar. Você descreve o que precisa, ele monta um plano, mostra o rascunho e deixa você ajustar por voz. O Google anunciou a novidade em 21/10/2026 para Android e iOS.</p>
    <p>A promessa é pegar a ideia no momento em que ela aparece, na saída de uma reunião ou no trajeto para casa. Antes de empolgar, há um detalhe que muda tudo para quem escreve em português: a própria página de ajuda do Google informa que, por ora, o recurso funciona apenas em inglês. Este guia explica o que é, quem tem acesso, como usar e como aproveitar a ideia mesmo enquanto o idioma não chega.</p>

    <h2>O que é o Docs Live e o que ele faz</h2>
    <p>Segundo o <a href="https://workspaceupdates.googleblog.com/2026/10/create-structured-documents-using-just-your-voice-with-Docs-Live-in-Google-Docs-on-mobile.html" target="_blank" rel="noopener noreferrer">aviso do blog de novidades do Google Workspace</a>, o Docs Live funciona como um parceiro de escrita com as mãos livres. Em vez de você digitar parágrafo por parágrafo, fala o objetivo e o Gemini organiza o texto em seções. Os exemplos do Google são atualizações de projeto, propostas de funcionalidade, apresentações para clientes, planos de evento e roteiros de fala.</p>
    <p>O diferencial é o contexto. O Gemini pode consultar o seu Gmail, o Chat, arquivos do Drive e a web para que o rascunho reflita o que você realmente tem em mãos, em vez de um texto genérico. Isso se parece com o que já existe no <a href="/artigos/gemini-canvas-como-criar-documentos-apps-e-slides">Gemini Canvas</a>, só que pensado para o celular e para a voz.</p>
    <p>Vale separar o Docs Live de outras vozes do ecossistema. Ele não é o mesmo que o ditado do teclado nem o mesmo que conversar com o <a href="/artigos/gemini-live-com-camera-e-tela-como-usar-no-celular">Gemini Live com câmera e tela</a>. Aqui o resultado final é um documento do Google Docs, que você pode editar depois no computador como qualquer outro arquivo.</p>

    <h2>Quem tem acesso ao Docs Live</h2>
    <p>Pelo aviso do Google, conferido em 22/10/2026, a função está disponível nestes grupos:</p>
    <table>
      <thead>
        <tr><th>Tipo de conta</th><th>Planos com acesso</th></tr>
      </thead>
      <tbody>
        <tr><td>Google Workspace Business</td><td>Standard e Plus</td></tr>
        <tr><td>Google Workspace Enterprise</td><td>Standard e Plus</td></tr>
        <tr><td>Conta pessoal</td><td>Google AI Pro e Ultra</td></tr>
        <tr><td>Educação</td><td>Google AI Pro for Education</td></tr>
        <tr><td>Complemento</td><td>AI Expanded Access</td></tr>
      </tbody>
    </table>
    <p>Para administradores, o recurso vem ligado por padrão para quem já tem o Gemini no Docs habilitado. Quem administra uma conta de trabalho controla isso no painel, como explica o <a href="/artigos/menu-personalizar-do-gemini-skills-apps-e-controle-para-admins">guia do menu Personalizar do Gemini</a>. Se você ainda está decidindo qual assinatura vale a pena, o comparativo de <a href="/artigos/google-ai-plus-pro-ou-ultra-qual-plano-do-gemini-escolher">planos Google AI Plus, Pro e Ultra</a> ajuda a enxergar a diferença.</p>
    <p>A página de ajuda acrescenta que a liberação é limitada, só para o app de celular, e que quem participa do programa de testadores do Google Workspace Experiments também pode ter acesso. Se o botão não aparecer na sua conta, atualize o app e espere alguns dias antes de concluir que algo está errado.</p>

    <h2>Passo a passo para criar um documento por voz</h2>
    <p>O caminho abaixo vem da <a href="https://support.google.com/docs/answer/17256297" target="_blank" rel="noopener noreferrer">página de ajuda oficial do Google Docs</a>, que mostra as telas do Android. Os nomes dos botões podem mudar conforme a versão do app:</p>
    <ol>
      <li>Abra o app do Google Docs e toque em Inserir, no canto inferior direito, depois em Criar com voz.</li>
      <li>Descreva o documento que você quer, falando de forma natural.</li>
      <li>Se quiser, adicione arquivos de referência do Drive, do Gmail, do Chat ou da web.</li>
      <li>Revise o plano que o Gemini gerou e peça mudanças, se for o caso.</li>
      <li>Toque em Avançar ou diga "Show me the draft" para ver o rascunho.</li>
      <li>Continue ajustando por voz: acrescente, remova ou reorganize seções.</li>
      <li>Toque em Concluído para gerar o documento final.</li>
    </ol>
    <p>Repare na etapa do plano. O Docs Live mostra a estrutura antes de escrever o texto, o que evita descobrir só no fim que o Gemini entendeu outra coisa. É o mesmo princípio de bons prompts: quanto mais claro o objetivo, melhor o resultado, como mostra o guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">comandos que funcionam</a>.</p>

    <h2>O limite que importa: idioma e disponibilidade</h2>
    <p>A página de ajuda do Google, consultada em 22/10/2026, informa que o Docs Live aceita apenas inglês e está em disponibilidade limitada, somente no celular. Ela também não traz limites numéricos, como tamanho máximo do documento ou número de pedidos por dia. Isso significa que qualquer promessa de "sem limites" ou "em português" que você encontrar por aí não tem base na documentação oficial.</p>
    <p>Na prática, quem escreve em português tem três caminhos. O primeiro é esperar a chegada do idioma, acompanhando o <a href="https://workspaceupdates.googleblog.com/2026/10/create-structured-documents-using-just-your-voice-with-Docs-Live-in-Google-Docs-on-mobile.html" target="_blank" rel="noopener noreferrer">blog de novidades do Workspace</a>. O segundo é usar o recurso em inglês, se o seu trabalho já pede documentos nesse idioma. O terceiro é aplicar a mesma lógica com ferramentas que já funcionam em português, como o ditado do teclado do celular e o <a href="/artigos/gemini-no-gmail-escrever-e-responder-emails-mais-rapido">Gemini no Gmail</a>.</p>
    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>O texto sobre idioma e disponibilidade reflete a página de ajuda do Google na data de verificação. Recursos de IA do Google costumam ganhar idiomas e planos aos poucos, então confira a página antes de decidir pagar por uma assinatura só por causa do Docs Live.</p></div>

    <h2>Exemplos de pedidos que funcionam bem</h2>
    <p>Mesmo que o idioma seja uma barreira hoje, vale treinar a forma de pedir, porque o raciocínio vale para qualquer assistente de voz. Um bom pedido tem objetivo, público, tamanho e fonte de contexto. Veja três modelos (escritos em português para você adaptar quando o idioma chegar, ou traduzir para usar agora):</p>
    <pre><code>Crie um resumo de projeto de uma página para meu chefe, com situação atual, riscos e próximos passos. Use as notas da reunião de ontem que estão no Drive.</code></pre>
    <pre><code>Monte uma proposta para um cliente de padaria que quer um site simples. Inclua escopo, prazo de 15 dias e valor de R$ 1.800, em tom direto.</code></pre>
    <pre><code>Escreva o roteiro de uma apresentação de 5 minutos sobre o resultado do mês, com abertura, três pontos e fechamento.</code></pre>
    <p>Para quem vende serviços, o segundo exemplo mostra o encaixe natural: uma primeira versão da proposta nasce em minutos e depois você refina no computador, seguindo o modelo do artigo sobre <a href="/artigos/propostas-comerciais-com-ia-como-fechar-mais-contratos">propostas comerciais com IA</a>. O valor de R$ 1.800 é só um exemplo de pedido, não uma tabela de preços.</p>

    <h2>Docs Live, ditado, assistente de voz e Canvas: qual usar</h2>
    <p>Existem várias formas de falar com o celular, e confundir uma com outra gera frustração. O ditado transcreve exatamente o que você diz, sem organizar nada. Os <a href="/artigos/assistente-de-voz-com-ia-como-usar-no-dia-a-dia">assistentes de voz</a> respondem perguntas e executam comandos curtos. Os <a href="/artigos/comandos-de-voz-com-ia-no-computador-windows-e-mac">comandos de voz no computador</a> controlam o sistema. O Docs Live fica no meio do caminho: ele escuta, organiza e entrega um documento.</p>
    <table>
      <thead>
        <tr><th>Necessidade</th><th>Melhor opção</th></tr>
      </thead>
      <tbody>
        <tr><td>Anotar a fala palavra por palavra</td><td>Ditado do teclado</td></tr>
        <tr><td>Perguntar algo rápido ou criar lembrete</td><td>Assistente de voz</td></tr>
        <tr><td>Transformar ideias soltas em documento estruturado</td><td>Docs Live (quando disponível no seu idioma)</td></tr>
        <tr><td>Resumir e registrar uma reunião</td><td>Ferramenta de <a href="/artigos/ia-para-reunioes-transcricao-resumo-ata-automatica">transcrição e ata</a></td></tr>
      </tbody>
    </table>

    <h2>Cuidados com privacidade e erros comuns</h2>
    <p>Como o Docs Live pode consultar Gmail, Chat e Drive, ele exige cuidado com o que entra no documento. Revise o rascunho antes de compartilhar, porque um trecho de e-mail confidencial pode aparecer sem você perceber. O artigo sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">privacidade e IA</a> detalha o que costuma ficar exposto, e quem usa a ferramenta no trabalho deve seguir a <a href="/artigos/politica-de-uso-de-ia-na-pequena-empresa-regras-simples-para-a-equipe">política de uso de IA</a> da empresa.</p>
    <h3>Erros que mais atrapalham</h3>
    <ul class="checklist">
      <li>Falar sem objetivo claro e esperar que o Gemini adivinhe o público e o tamanho.</li>
      <li>Pular a revisão do plano e só descobrir o desvio no documento pronto.</li>
      <li>Compartilhar o arquivo sem conferir se algum dado de cliente ou de colega entrou no texto.</li>
      <li>Assinar um plano só por causa de uma função que ainda não atende o seu idioma.</li>
      <li>Tratar o rascunho como versão final, sem checar números, nomes e datas.</li>
    </ul>

    <h2>Vale a pena agora?</h2>
    <p>Para quem trabalha em inglês e já tem um plano elegível, o Docs Live é um atalho interessante para tirar a primeira versão de um documento da cabeça. Para quem escreve em português, a decisão racional é acompanhar e não mudar de plano por causa dele. A boa notícia é que a lógica de pedir com objetivo, público e tamanho já melhora qualquer resultado hoje.</p>
    <p>Se você quer mais novidades de ferramentas explicadas sem enrolação, continue pela categoria de <a href="/categoria/ferramentas">ferramentas de IA</a> e releia o guia do <a href="/artigos/gemini-no-google-planilhas-no-iphone-e-android-como-usar-e-limites">Gemini no Google Planilhas no celular</a>, que mostra a mesma regra de checar plano e idioma antes de procurar o botão.</p>
  `,
  faq: [
    {
      question: "O Docs Live funciona em português?",
      answer:
        "Pela página de ajuda do Google, consultada em 22/10/2026, o recurso funciona apenas em inglês e está em disponibilidade limitada. O Google pode ampliar idiomas depois, então vale acompanhar o blog de novidades do Workspace antes de contar com ele em português.",
    },
    {
      question: "Quem pode usar o Docs Live?",
      answer:
        "O aviso do Google lista Workspace Business e Enterprise (Standard e Plus), Google AI Pro e Ultra, Google AI Pro for Education e o complemento AI Expanded Access. A liberação é gradual, então o botão pode demorar a aparecer mesmo em planos elegíveis.",
    },
    {
      question: "O Docs Live funciona no computador?",
      answer:
        "Os avisos do Google tratam o recurso como parte do app do Google Docs para celular, em Android e iOS. O documento criado pode ser aberto e editado depois no computador, como qualquer arquivo do Docs, mas a criação por voz acontece no app móvel.",
    },
    {
      question: "O Docs Live é gratuito?",
      answer:
        "Não há versão gratuita informada. O acesso depende de um plano elegível, como Workspace Business ou Enterprise ou os planos pessoais Google AI Pro e Ultra. Preços variam por plano e país, então consulte a página oficial do Google antes de assinar.",
    },
    {
      question: "O Gemini lê meus e-mails ao usar o Docs Live?",
      answer:
        "O Google informa que o Gemini pode usar contexto de Gmail, Chat, Drive e web para montar o rascunho. Você escolhe o que anexar como referência, mas convém revisar o texto final para garantir que nenhum dado sensível foi parar no documento.",
    },
  ],
};
