import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "chatgpt-claude-gemini-qual-ia-escolher",
  title: "ChatGPT, Claude ou Gemini: qual IA escolher para cada uso",
  seoTitle: "ChatGPT, Claude ou Gemini: qual IA escolher",
  excerpt:
    "ChatGPT, Claude ou Gemini: compare o que cada IA faz melhor, quanto custam os planos pagos (com preço verificado) e teste as três com os mesmos prompts.",
  metaDescription:
    "ChatGPT, Claude ou Gemini: veja qual IA escolher para escrever, analisar documentos e trabalhar no Google, com preços verificados e prompts de teste.",
  category: "ferramentas",
  date: "2026-09-01",
  updated: "2026-09-27",
  readTime: 8,
  imageQuery: "computer screen chatbot conversation",
  seed: 3,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "ChatGPT, Claude e Gemini resolvem as mesmas tarefas básicas; a diferença aparece em documentos longos, integração com o Google e ecossistema de extras.",
    "Os planos pagos ficam na faixa de US$ 17 a US$ 20 por mês (Claude e Gemini verificados em 27/09/2026); para o ChatGPT, consulte a página oficial.",
    "Teste as três com a mesma tarefa real do seu dia antes de assinar qualquer plano: o gratuito de cada uma dá conta de decidir.",
  ],
  sources: [
    { label: "Claude: planos e preços", url: "https://claude.com/pricing" },
    { label: "Google Gemini: planos Google AI", url: "https://gemini.google/subscriptions/" },
    { label: "OpenAI: guia oficial de prompt engineering", url: "https://developers.openai.com/api/docs/guides/prompt-engineering" },
    { label: "Claude: como criar e gerenciar Projetos", url: "https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects" },
  ],
  content: `
    <p>ChatGPT, Claude ou Gemini: qual IA escolher depende menos de qual é "a melhor" e mais do que você faz no dia a dia. As três escrevem, resumem, traduzem e respondem perguntas em português com qualidade parecida. A diferença aparece quando você cola um contrato de 40 páginas, precisa mexer no Gmail ou quer gerar imagem e áudio no mesmo lugar.</p>

    <p>Este guia compara as três nas tarefas que o leitor do Portal da AI mais faz: escrever para cliente, organizar planilha, estudar um assunto e revisar documento. Traz os preços dos planos pagos com data de verificação, um exemplo brasileiro com as contas na mesa e três prompts para você rodar nas três ferramentas e decidir sozinho.</p>

    <h2>Qual é a diferença de verdade entre ChatGPT, Claude e Gemini?</h2>

    <p>Por trás de cada uma existe um modelo de linguagem treinado por uma empresa diferente: OpenAI (ChatGPT), Anthropic (Claude) e Google (Gemini). Os modelos são atualizados a cada poucos meses, e o que era vantagem clara de uma vira empate na versão seguinte. Só em setembro de 2026 a <a href="/noticias/anthropic-openai-guerra-precos-opus-5-5-gpt-6-sol-luna">guerra de preços entre Anthropic e OpenAI</a> mudou o custo das versões mais potentes das duas em questão de dias.</p>

    <p>Por isso a comparação útil não é "qual modelo é mais inteligente" e sim "qual produto encaixa na minha rotina". Três perguntas resolvem a maior parte dos casos. Onde estão os seus arquivos e e-mails (Google, Microsoft ou espalhados)? Você trabalha com textos longos ou com mensagens curtas? Você precisa de imagem, áudio e vídeo ou só de texto?</p>

    <h2>ChatGPT: o canivete suíço com mais extras</h2>

    <p>O ChatGPT é o mais conhecido e o que tem mais coisa em volta: geração de imagem, voz, GPTs personalizados, memória entre conversas e uma loja de assistentes prontos. Para quem quer um aplicativo só que faça um pouco de tudo, é a escolha mais fácil de justificar. A versão gratuita atende bem quem usa para redigir e-mail, revisar texto e tirar dúvidas.</p>

    <p>O ponto fraco, na nossa leitura, é a tentação de acumular recursos sem dominar nenhum. A própria <a href="https://developers.openai.com/api/docs/guides/prompt-engineering" rel="noopener noreferrer">documentação de prompts da OpenAI</a> recomenda estruturar o pedido em quatro blocos (identidade, instruções, exemplos e contexto), e quem aplica isso tira mais da versão gratuita do que quem paga e escreve pedidos de uma linha.</p>

    <h3>Para quem o ChatGPT serve melhor</h3>

    <p>Criadores de conteúdo que alternam texto, imagem e roteiro no mesmo fluxo, como mostra o guia de <a href="/artigos/ia-para-criadores-de-conteudo-videos-textos-e-artes">IA para criadores de conteúdo</a>. Pessoas que querem montar um <a href="/artigos/como-configurar-primeiro-assistente-de-ia-pessoal">assistente pessoal com instruções fixas</a> e reutilizar. E quem gosta de testar novidade cedo, porque a OpenAI costuma lançar recursos novos primeiro no ChatGPT.</p>

    <h2>Claude: documentos longos e texto com menos cara de máquina</h2>

    <p>O Claude é a aposta de quem trabalha com muito texto: contratos, relatórios, teses, código. Ele aceita arquivos grandes e mantém o fio da conversa em documentos extensos sem perder o começo. O recurso de Projetos permite criar uma pasta com instruções e arquivos fixos, e, segundo a <a href="https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects" rel="noopener noreferrer">central de ajuda da Anthropic</a>, está disponível inclusive na conta gratuita, com limite de cinco projetos.</p>

    <p>Muita gente relata que o texto do Claude soa mais natural em português e menos "assistente virtual". Tratamos isso como percepção, não como medida: a diferença é sutil e depende do prompt. O que dá para afirmar é que ele segue instruções de formato e tom com consistência, o que ajuda quem produz textos para cliente todo dia.</p>

    <h3>Para quem o Claude serve melhor</h3>

    <p>Quem revisa contratos e documentos, como no guia de <a href="/artigos/ia-para-contratos-revisar-documentos-juridicos-mais-rapido">IA para contratos</a>. Redatores, consultores e professores que escrevem textos longos. E quem quer analisar planilha exportada em CSV com perguntas em linguagem natural. Para acompanhar as versões, a notícia sobre o <a href="/noticias/anthropic-lanca-claude-fable-5-1-mythos-5-1">lançamento do Claude Fable 5.1</a> resume o que mudou.</p>

    <h2>Gemini: para quem vive dentro do Google</h2>

    <p>Se o seu dia acontece no Gmail, Google Docs, Sheets e Drive, o Gemini tem uma vantagem que nenhum modelo compensa: ele já está lá dentro. Resumir uma thread de e-mail, criar fórmula na planilha ou gerar apresentação no Slides sem copiar e colar nada muda o ritmo do trabalho. O guia de <a href="/artigos/ia-para-email-organizar-caixa-de-entrada-responder-mais-rapido">IA para e-mail</a> e o de <a href="/artigos/ia-para-planilhas-automatizar-relatorios-excel-sheets">IA para planilhas</a> mostram esses fluxos passo a passo.</p>

    <p>O Gemini também é forte em busca: por ser do Google, ele consulta a web em tempo real com mais naturalidade. Para pesquisa mais profunda, vale comparar com as ferramentas do artigo sobre <a href="/artigos/perplexity-notebooklm-ia-de-pesquisa-estudar-mais-rapido">Perplexity e NotebookLM</a>, que são feitas para isso. E quem quer entender por que as IAs passaram a ver, ouvir e falar ao mesmo tempo encontra a explicação em <a href="/artigos/ia-multimodal-o-que-muda-quando-maquina-ve-ouve-fala">IA multimodal</a>.</p>

    <h3>Para quem o Gemini serve melhor</h3>

    <p>Donos de pequeno negócio que já usam o Google Workspace, estudantes com tudo no Drive e quem quer o plano pago mais barato de entrada: a página oficial lista o Google AI Plus a US$ 4,99 por mês (verificado em 27/09/2026), com o dobro de uso do gratuito.</p>

    <h2>Quanto custa cada uma: tabela de planos</h2>

    <p>Todas têm plano gratuito bom o bastante para decidir. Os valores abaixo foram conferidos nas páginas oficiais em 27/09/2026 e são cobrados em dólar, então o valor em reais muda com o câmbio e com o IOF do seu cartão. Para o ChatGPT, a OpenAI não nos deixou verificar a página de preços na data, então consulte a página oficial antes de assinar.</p>

    <table>
      <thead>
        <tr><th>Ferramenta</th><th>Gratuito</th><th>Plano pago de entrada</th><th>Plano avançado</th></tr>
      </thead>
      <tbody>
        <tr><td>ChatGPT (OpenAI)</td><td>Sim</td><td>Consulte a página oficial</td><td>Consulte a página oficial</td></tr>
        <tr><td>Claude (Anthropic)</td><td>Sim</td><td>Pro: US$ 17/mês no anual ou US$ 20 no mensal</td><td>Max: a partir de US$ 100/mês</td></tr>
        <tr><td>Gemini (Google)</td><td>Sim</td><td>Google AI Plus: US$ 4,99/mês; Google AI Pro: US$ 19,99/mês</td><td>Google AI Ultra: a partir de US$ 99,99/mês</td></tr>
      </tbody>
    </table>

    <p>Fontes: <a href="https://claude.com/pricing" rel="noopener noreferrer">página de preços do Claude</a> e <a href="https://gemini.google/subscriptions/" rel="noopener noreferrer">página de assinaturas do Gemini</a>. Antes de pagar, leia o artigo <a href="/artigos/ia-gratis-ou-paga-o-que-vale-a-pena">IA grátis ou paga: o que vale a pena</a>, que mostra quando o limite do plano gratuito começa a atrapalhar de verdade.</p>

    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Assine um plano só depois de bater no limite do gratuito duas vezes na mesma semana. Se isso não acontece, o plano pago vai pagar por capacidade que você não usa.</p></div>

    <h2>Exemplo brasileiro: consultora que escolheu duas, não uma</h2>

    <p>Cenário ilustrativo, montado para mostrar o raciocínio (não é um caso que acompanhamos). Renata é consultora de RH em Belo Horizonte e atende oito empresas pequenas. Ela escreve políticas internas, revisa contratos de prestação de serviço e responde uns 60 e-mails por dia no Gmail.</p>

    <p>Ela rodou os mesmos três prompts (abaixo) nas versões gratuitas por duas semanas. Para e-mail e planilha, o Gemini venceu por conveniência: não precisava sair do Gmail. Para a política de 30 páginas e os contratos, o Claude segurou melhor o contexto e devolveu um texto que precisava de menos ajuste.</p>

    <p>Decisão: Claude Pro no plano anual (US$ 17 por mês; em reais, depende do câmbio do dia e do IOF do cartão) e Gemini no gratuito. Custo total abaixo de US$ 20 por mês para dois assistentes, cada um no que faz melhor. Se ela precisar gerar imagem para uma apresentação, usa o ChatGPT gratuito. Ninguém obriga você a escolher uma só.</p>

    <h2>Três prompts para testar as três com a mesma tarefa</h2>

    <p>A única comparação que importa é com o seu trabalho real. Cole os prompts abaixo nas três, com os mesmos dados, e anote qual resposta você usaria sem editar. Troque o que está entre colchetes. O guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">prompt engineering</a> explica por que cada bloco existe.</p>

    <pre><code>Você é assistente de uma [tipo de negócio] em [cidade].
Escreva um e-mail para [cliente] explicando [situação: atraso, reajuste, nova proposta].
Tom: cordial e direto, no máximo 120 palavras, sem pedir desculpas mais de uma vez.
Termine com uma pergunta que facilite a resposta do cliente.</code></pre>

    <pre><code>Segue um documento de [tipo: contrato, política, relatório].
Liste, em tópicos curtos:
1) As 5 obrigações mais importantes de cada parte.
2) Qualquer prazo, multa ou valor citado, com o trecho exato.
3) Três pontos que um leigo deveria perguntar antes de assinar.
Não invente nada que não esteja no texto. Se não houver, diga "não consta".

[cole o documento]</code></pre>

    <pre><code>Tenho uma planilha com as colunas [data, produto, quantidade, valor].
Me diga, em português simples:
1) Quais 3 produtos mais venderam no último mês e quanto.
2) Qual dia da semana vende menos.
3) Uma sugestão de ação para o produto que caiu mais em relação ao mês anterior.
Mostre as contas que você fez.

[cole os dados]</code></pre>

    <h2>Erros comuns ao escolher uma IA</h2>

    <p>O erro mais caro é trocar de ferramenta a cada semana sem aprender a pedir direito em nenhuma. O resultado depende mais do prompt do que da marca. Os <a href="/artigos/5-erros-comuns-de-quem-esta-comecando-a-usar-ia">5 erros comuns de quem está começando</a> detalham isso; abaixo, os que aparecem mais nessa decisão.</p>

    <ul>
      <li><strong>Escolher pelo ranking da semana.</strong> Os modelos trocam de posição a cada lançamento. Escolha pelo produto que encaixa na rotina.</li>
      <li><strong>Colar dado de cliente sem ler os termos.</strong> CPF, dados de saúde e contratos sigilosos merecem uma passada no artigo sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a> e no <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist de segurança antes de assinar</a>.</li>
      <li><strong>Confiar em número que a IA cita.</strong> As três inventam estatística com cara de verdade. Peça a fonte e confira.</li>
      <li><strong>Pagar dois planos pelo mesmo uso.</strong> Se as duas fazem a mesma coisa para você, uma é desperdício.</li>
    </ul>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Nenhuma das três substitui advogado, contador ou médico. Use para preparar a conversa com o profissional, não para dispensar a conversa.</p></div>

    <p>Resumo da decisão: se você vive no Google, comece pelo Gemini. Se trabalha com documentos longos e texto que precisa soar humano, comece pelo Claude. Se quer imagem, voz e extras no mesmo lugar, comece pelo ChatGPT. Em todos os casos, rode os três prompts acima no plano gratuito antes de pagar qualquer coisa.</p>

    <p>A escolha de hoje não é para sempre. Volte a este comparativo a cada lançamento grande e revise a assinatura a cada seis meses. Os outros testes e comparativos do portal ficam na categoria <a href="/categoria/ferramentas">Ferramentas</a>.</p>
  `,
  faq: [
    {
      question: "ChatGPT, Claude ou Gemini: qual é o melhor em português?",
      answer:
        "Os três escrevem e entendem português do Brasil com qualidade parecida para e-mail, resumo e texto do dia a dia. Muita gente percebe o texto do Claude como mais natural, mas isso é percepção, não medida. O jeito honesto de decidir é rodar o mesmo prompt nas três versões gratuitas com um texto seu e ver qual resposta você usaria sem editar.",
    },
    {
      question: "Qual IA é gratuita: ChatGPT, Claude ou Gemini?",
      answer:
        "As três têm plano gratuito com limite de uso por dia ou por período. O gratuito atende bem quem usa para redigir, revisar e tirar dúvidas. O plano pago passa a fazer sentido quando você bate no limite com frequência ou precisa de arquivos maiores e recursos como geração de imagem em volume. Teste o gratuito por duas semanas antes de assinar.",
    },
    {
      question: "Quanto custa o Claude Pro e o Gemini pago?",
      answer:
        "Segundo as páginas oficiais, verificadas em 27/09/2026, o Claude Pro custa US$ 17 por mês no plano anual ou US$ 20 no mensal, e o Google AI Plus custa US$ 4,99 por mês, com o Google AI Pro a US$ 19,99. A cobrança é em dólar, então o valor em reais varia com o câmbio e o IOF. Para o ChatGPT, consulte a página oficial da OpenAI.",
    },
    {
      question: "Posso usar ChatGPT, Claude e Gemini ao mesmo tempo?",
      answer:
        "Pode, e muita gente faz isso: uma ferramenta paga para a tarefa principal e as outras no plano gratuito para o que elas fazem melhor. O cuidado é não pagar dois planos pelo mesmo uso. Se as duas assinaturas resolvem a mesma tarefa para você, cancele uma e reavalie em seis meses.",
    },
    {
      question: "Gemini ou ChatGPT para quem usa Gmail e Google Docs?",
      answer:
        "Para quem trabalha dentro do Google Workspace, o Gemini leva vantagem porque já aparece no Gmail, no Docs, no Sheets e no Slides sem copiar e colar. O ChatGPT continua útil para imagem, voz e assistentes personalizados. Se a maior parte do seu dia é e-mail e planilha, comece pelo Gemini e adicione o ChatGPT só se sentir falta de algo.",
    },
  ],
};
