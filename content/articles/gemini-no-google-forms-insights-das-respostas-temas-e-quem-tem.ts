import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "gemini-no-google-forms-insights-das-respostas-temas-e-quem-tem",
  title: "Gemini no Google Forms: insights das respostas, temas e quem tem",
  seoTitle: "Gemini no Google Forms: insights e temas das respostas",
  excerpt:
    "Gemini no Google Forms agora gera insights das respostas com próximos passos: veja quem tem, o mínimo de respostas, como usar e quando conferir os números.",
  metaDescription:
    "Insights úteis do Gemini no Google Forms: o que mudou, planos com acesso, mínimo de 12 respostas, resumos e temas, passo a passo e cuidados com os dados.",
  category: "ferramentas",
  date: "2026-11-16",
  readTime: 8,
  imageQuery: "online survey form laptop",
  seed: 1217,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O Google Forms ganhou os insights úteis do Gemini: na aba Respostas, a IA analisa todas as perguntas, cruza respostas entre elas e sugere próximos passos, calculando os números com código Python.",
    "O recurso exige pelo menos 12 respostas e 3 perguntas, não funciona em formulário com modo teste ligado e chega aos planos Business Standard e Plus, Enterprise, Education Plus e planos pessoais do Google AI como Pro e Ultra.",
    "Os resumos de perguntas abertas e a separação em temas continuam úteis para quem tem poucas respostas, mas nada disso é salvo sozinho: copie o resultado e confira os números antes de decidir.",
  ],
  content: `
    <p>O Gemini no Google Forms agora vai além de resumir texto: ele gera "insights úteis" a partir de todas as respostas do formulário, com tendências, cruzamento entre perguntas e próximos passos recomendados. O recurso fica na aba Respostas e começou a chegar às contas em novembro de 2026, nos planos pagos do Workspace e do Google AI.</p>

    <p>Para quem faz pesquisa de satisfação, inscrição de evento ou formulário de pedido, isso muda o trabalho de abrir a planilha e montar tabela por tabela. Este guia mostra o que o recurso faz, quem tem acesso, como usar, os três modos de análise disponíveis e os cuidados antes de levar a conclusão da IA para uma reunião.</p>

    <h2>O que são os insights úteis do Gemini no Google Forms?</h2>

    <p>Segundo o <a href="https://workspaceupdates.googleblog.com/2026/11/get-actionable-insights-with-gemini-in-Google-Forms.html" target="_blank" rel="noopener noreferrer">anúncio oficial no blog de novidades do Google Workspace</a>, publicado em 5 de novembro de 2026, o recurso usa o Gemini para analisar as respostas, encontrar tendências e recomendar próximos passos. A diferença técnica que importa: o Gemini escreve e roda código Python sobre os dados, então contagens, porcentagens e comparações vêm das respostas reais, e não de uma estimativa do modelo.</p>

    <p>O resultado vem em três blocos, conforme a <a href="https://support.google.com/docs/answer/16231981?hl=pt-BR" target="_blank" rel="noopener noreferrer">central de ajuda do Google sobre resumos e análises no Forms</a>:</p>

    <ul>
      <li><strong>Síntese executiva:</strong> os pontos principais em poucas linhas.</li>
      <li><strong>Análise avançada e correlações:</strong> como as respostas de uma pergunta se relacionam com outra (por exemplo, quem deu nota baixa também reclamou de prazo?).</li>
      <li><strong>Próximos passos recomendados:</strong> ações sugeridas a partir do que apareceu.</li>
    </ul>

    <p>Na prática, é o que antes exigia exportar para a planilha, criar uma <a href="/artigos/tabela-dinamica-no-google-planilhas-passo-a-passo-e-formato-compacto-com-ia">tabela dinâmica no Google Planilhas</a> e escrever o resumo na mão.</p>

    <h2>Quem tem acesso e quando chega</h2>

    <p>A lista de planos do anúncio é esta:</p>

    <table>
      <thead>
        <tr><th>Tipo de conta</th><th>Planos com o recurso</th></tr>
      </thead>
      <tbody>
        <tr><td>Empresas (Workspace Business)</td><td>Business Standard e Business Plus</td></tr>
        <tr><td>Grandes empresas</td><td>Enterprise Standard e Enterprise Plus</td></tr>
        <tr><td>Educação</td><td>Education Plus e os complementos Google AI Pro for Education e Teaching and Learning</td></tr>
        <tr><td>Conta pessoal</td><td>Planos do Google AI citados no anúncio, como Pro e Ultra</td></tr>
      </tbody>
    </table>

    <p>Business Starter e contas gratuitas não aparecem na lista. Se você está decidindo qual assinatura pessoal faz sentido, o comparativo <a href="/artigos/google-ai-plus-pro-ou-ultra-qual-plano-do-gemini-escolher">Google AI Plus, Pro ou Ultra</a> ajuda; para preços atualizados, consulte a página oficial de planos do Google, porque os valores mudam.</p>

    <p>O lançamento é gradual. Em domínios com lançamento rápido, começou em 2 de novembro de 2026; nos de lançamento programado (o padrão de muitas empresas), começa em 19 de novembro de 2026. Nos dois casos, o Google avisa que o recurso pode levar até 15 dias para aparecer. No Workspace, o Gemini no painel lateral depende de os recursos inteligentes e a personalização estarem ativados para o usuário, o que o administrador controla no Admin Console.</p>

    <h2>Como gerar insights das respostas, passo a passo</h2>

    <ol>
      <li>Abra o formulário no Google Forms e clique na aba <strong>Respostas</strong>.</li>
      <li>Procure a seção de insights úteis e clique em <strong>Gerar insights</strong>.</li>
      <li>Leia a síntese, as correlações e os próximos passos.</li>
      <li>Clique na seta de <strong>Etapas da análise</strong> para ver como o Gemini chegou aos números.</li>
      <li>Se o resultado não ajudou, use <strong>Tentar de novo</strong> ou marque <strong>Sugestão ruim</strong>.</li>
    </ol>

    <h3>Requisitos que travam o botão</h3>

    <ul class="checklist">
      <li>O formulário precisa de pelo menos 12 respostas e 3 perguntas.</li>
      <li>Não funciona com as configurações de teste (quiz) ativadas.</li>
      <li>Não funciona se o formulário estiver ligado a uma planilha que você não tem permissão para abrir.</li>
    </ul>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>A central de ajuda avisa que os resumos gerados não ficam salvos. Se a análise for usada numa reunião ou num relatório, copie o texto na hora. Se chegarem respostas novas, gere de novo.</p></div>

    <h2>Os outros dois recursos de IA no Forms: resumos e temas</h2>

    <p>Os insights são a novidade, mas o Forms já tinha dois recursos do Gemini que continuam úteis, principalmente para formulários pequenos.</p>

    <h3>Resumo de perguntas abertas</h3>

    <p>Para perguntas de texto livre, o resumo aparece sozinho no bloco de resumo de cada pergunta, a partir de 3 respostas e até 200. Não vale para perguntas diretas como nome e endereço, nem para respostas de teste. Dá para clicar em "Tentar de novo", "Copiar" ou "Atualizar com as respostas mais recentes".</p>

    <h3>Separação em temas</h3>

    <p>Na mesma pergunta aberta, o botão "Ver porcentagens do tema" agrupa as respostas por assunto. Dá para ajustar as categorias em "Modificar temas" e, ao clicar de novo, o Forms cria uma nova planilha com gráfico de pizza e o tema de cada resposta. A ajuda indica que funciona melhor entre 8 e 200 respostas, e os temas usam as funções de IA do Planilhas, que têm limites próprios (o guia do <a href="/artigos/fill-with-gemini-no-planilhas-do-google-fontes-por-celula-e-limite-de-3-mil-celulas">Fill with Gemini no Planilhas</a> explica esse tipo de limite).</p>

    <p>Sobre o idioma: a <a href="https://support.google.com/docs/answer/14925782?hl=pt-BR" target="_blank" rel="noopener noreferrer">página de idiomas do Gemini no Workspace</a> lista o português entre os idiomas dos resumos automáticos de texto no Forms, mas não detalha os insights úteis. Faça um teste com o seu formulário antes de depender do recurso em português.</p>

    <h2>Exemplo: pesquisa pós-Black Friday de uma loja de roupas</h2>

    <p>Imagine uma loja de roupas em Belo Horizonte que manda, depois da Black Friday, um formulário com 5 perguntas para quem comprou: nota de 0 a 10, canal de compra (loja, Instagram, site), se recebeu no prazo, o que faria voltar a comprar e um campo aberto de comentários. Em uma semana, chegam 64 respostas.</p>

    <p>Sem IA, a dona gastaria uma tarde montando filtros. Com os insights, ela clica em "Gerar insights" e recebe algo como: a maior parte das notas baixas vem de pedidos do site, quase sempre junto com "não recebi no prazo", e quem comprou na loja física cita atendimento como motivo para voltar. A sugestão de próximo passo: revisar o prazo prometido no site e mandar cupom de retorno para quem teve atraso.</p>

    <p>Antes de agir, ela abre "Etapas da análise" e confere a conta: quantas notas abaixo de 7 vieram do site. Se o número bate com o que ela vê no resumo do Forms, a decisão tem base. O guia de <a href="/artigos/pesquisa-de-satisfacao-com-ia-analisar-respostas-de-clientes">pesquisa de satisfação com IA</a> mostra como montar as perguntas para que a análise faça sentido, e o artigo sobre <a href="/artigos/cliente-da-black-friday-como-fazer-voltar-depois-da-promocao-com-ia">fazer o cliente da Black Friday voltar</a> ajuda no passo seguinte.</p>

    <h2>Prompts para ir além do que o Forms entrega</h2>

    <p>A central de ajuda não descreve um jeito de fazer perguntas de acompanhamento sobre os insights dentro do Forms. Se você quiser aprofundar, copie a síntese e use o Gemini (ou outro assistente) com prompts como estes:</p>

    <pre><code>Abaixo está a síntese de uma pesquisa com 64 clientes de uma loja de roupas. Transforme em um plano de ação para as próximas 2 semanas, com no máximo 5 ações, quem faz cada uma e como medir se deu certo. Não invente números que não estão no texto.</code></pre>

    <pre><code>Com base nestes insights da pesquisa, escreva uma mensagem curta de WhatsApp para os clientes que reclamaram de atraso na entrega: peça desculpas, explique o que mudou e ofereça um cupom de 10% válido até 15 de dezembro. Tom simpático, sem exagero.</code></pre>

    <p>Para respostas por e-mail, o <a href="/artigos/gemini-no-gmail-escrever-e-responder-emails-mais-rapido">Gemini no Gmail</a> faz o rascunho dentro da caixa de entrada.</p>

    <h2>Erros comuns e cuidados com os dados</h2>

    <ul>
      <li><strong>Tratar a recomendação como decisão.</strong> O próprio Google avisa que os recursos do Gemini podem sugerir informações imprecisas e não devem substituir orientação profissional. Use como ponto de partida.</li>
      <li><strong>Tirar conclusão de pouca gente.</strong> Doze respostas liberam o botão, mas uma correlação com tão pouca base pode ser acaso. Quanto mais respostas, mais confiável.</li>
      <li><strong>Pergunta mal feita.</strong> Se o formulário mistura duas coisas numa pergunta só, a IA não separa. Revise as perguntas antes de enviar; o guia sobre <a href="/artigos/testar-demanda-antes-de-lancar-com-google-trends-formulario-e-ia">testar demanda com formulário e IA</a> traz exemplos de perguntas objetivas.</li>
      <li><strong>Esquecer a LGPD.</strong> Formulário com nome, telefone e e-mail é tratamento de dados pessoais. Peça só o que precisa e saiba responder se alguém pedir exclusão, como explica o guia sobre <a href="/artigos/cliente-pediu-para-apagar-seus-dados-como-responder-pela-lgpd-no-pequeno-negocio">cliente que pede para apagar seus dados</a>.</li>
      <li><strong>Colocar informação sensível no feedback.</strong> A ajuda orienta usuários de empresa a não incluir dados pessoais ou confidenciais ao avaliar uma sugestão.</li>
    </ul>

    <p>Quem quer entender que dados a IA do Google usa e como controlar isso pode ler sobre <a href="/artigos/treino-de-ia-com-suas-conversas-como-desligar-no-gemini-e-no-claude">como desligar o treino com suas conversas no Gemini</a> e sobre as <a href="/artigos/instrucoes-personalizadas-do-gemini-no-workspace-onde-valem-e-como-gerenciar">instruções personalizadas do Gemini no Workspace</a>.</p>

    <h2>Vale a pena usar?</h2>

    <p>Para quem já tem um plano compatível, vale testar no próximo formulário com mais de 12 respostas. O ganho maior aparece em pesquisas com várias perguntas fechadas e uma ou duas abertas, porque o cruzamento entre elas é o que mais dá trabalho na mão. Para formulário de pedido ou inscrição, como os do guia de <a href="/artigos/formulario-de-pedido-e-orcamento-como-servico-google-forms-planilha-e-aviso-com-ia">formulário de pedido e orçamento</a>, os insights ajudam menos: ali a planilha e os avisos automáticos continuam sendo o centro.</p>

    <p>Se o seu plano não tem o recurso, exportar as respostas e pedir a análise a um assistente ainda funciona, com o cuidado de não colar dados pessoais. O comparativo <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini</a> ajuda a escolher, e a categoria <a href="/categoria/ferramentas">Ferramentas</a> reúne as outras novidades do Gemini e do Workspace.</p>
  `,
  faq: [
    {
      question: "O Gemini no Google Forms é gratuito?",
      answer:
        "Os insights úteis não aparecem para contas gratuitas. O anúncio do Google lista os planos Business Standard e Plus, Enterprise Standard e Plus, Education Plus, complementos de educação e planos pessoais do Google AI, como Pro e Ultra. Business Starter também ficou fora da lista. Consulte a página oficial de planos para o preço atual.",
    },
    {
      question: "Quantas respostas o formulário precisa para gerar insights?",
      answer:
        "Pelo menos 12 respostas e 3 perguntas. Abaixo disso, o botão Gerar insights não funciona. Os resumos automáticos de perguntas abertas aparecem a partir de 3 respostas, até 200, e a separação em temas funciona melhor entre 8 e 200 respostas, segundo a central de ajuda do Google.",
    },
    {
      question: "Os insights do Google Forms funcionam em português?",
      answer:
        "A página oficial de idiomas do Gemini no Workspace lista o português para os resumos automáticos de texto no Forms, mas não traz uma lista específica para os insights úteis. Como o lançamento ainda está em andamento, teste com um formulário real em português antes de usar o resultado numa decisão importante.",
    },
    {
      question: "Por que o botão Gerar insights não aparece no meu Forms?",
      answer:
        "Pode ser o lançamento gradual, que leva até 15 dias e começa em 19 de novembro de 2026 para domínios com lançamento programado. Também trava se o formulário tiver menos de 12 respostas, menos de 3 perguntas, modo teste ligado, planilha vinculada sem acesso ou recursos inteligentes desativados pelo administrador.",
    },
    {
      question: "Os resumos do Gemini ficam salvos no formulário?",
      answer:
        "Não. A central de ajuda avisa que os resumos gerados não são salvos. Copie o texto se precisar guardar e gere de novo quando chegarem respostas novas. A separação em temas é a exceção prática, porque cria uma planilha nova com o gráfico e o tema de cada resposta.",
    },
  ],
};
