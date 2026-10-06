import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "como-ganhar-dinheiro-criando-prompts-e-templates-de-ia",
  title: "Ganhar dinheiro criando prompts e templates de IA: guia real",
  seoTitle: "Como ganhar dinheiro vendendo prompts e templates de IA",
  excerpt:
    "Veja como ganhar dinheiro criando prompts e templates de IA: o que vende de verdade, como montar e testar um pacote, onde vender e quanto sobra após taxas.",
  metaDescription:
    "Como ganhar dinheiro criando prompts e templates de IA: formatos que vendem, passo a passo do pacote, taxas de Hotmart e Gumroad e exemplo com números.",
  category: "monetizacao",
  articleSubcategory: "produtos-digitais",
  date: "2026-09-18",
  updated: "2026-09-27",
  readTime: 8,
  imageQuery: "digital templates marketplace laptop",
  seed: 48,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Prompt solto não vende; o que vende é um pacote para uma tarefa específica de um nicho, com instruções de uso, exemplos de resultado e teste feito por outra pessoa.",
    "Na Hotmart a taxa inicial é de 9,9% mais R$ 2,49 por venda aprovada e no Gumroad é de 10% mais US$ 0,50 na venda direta (ambas verificadas em 27/09/2026), então produto barato demais mal cobre a taxa.",
    "A faixa realista para quem começa sem audiência é de algumas vendas por mês, entre R$ 27 e R$ 97 cada; o que muda esse número é nicho, prova de resultado e canal de divulgação.",
  ],
  content: `
    <p>Ganhar dinheiro criando prompts e templates de IA é possível, mas não do jeito que os anúncios prometem. Ninguém paga por um prompt de três linhas que aparece de graça em qualquer post. As pessoas pagam por um pacote que resolve uma tarefa chata de um nicho específico, com instruções de uso, exemplos do resultado e a garantia de que alguém já testou antes delas. É produto digital, e segue as regras de produto digital.</p>

    <p>Este guia mostra o que vende de verdade, como montar e testar um pacote, onde vender e quanto fica no seu bolso depois das taxas, com um exemplo brasileiro em reais. Também mostra quando não vale a pena entrar nesse mercado. Se você já usa IA no trabalho e resolveu um problema repetitivo com um prompt bem feito, você já tem a matéria-prima.</p>

    <h2>O que é um prompt vendável (e por que alguém pagaria)?</h2>
    <p>Um prompt vendável tem quatro partes: papel e contexto ("você é um contador que atende MEI"), instruções claras de formato e limite, exemplos do que é um bom resultado e um roteiro de como adaptar para cada caso. É exatamente o que a documentação oficial recomenda: o <a href="https://developers.openai.com/api/docs/guides/prompt-engineering" rel="noopener noreferrer">guia de prompt engineering da OpenAI</a> fala em instruções explícitas, exemplos e contexto organizado em seções, e a <a href="https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview" rel="noopener noreferrer">visão geral da Anthropic</a> começa dizendo que antes de escrever é preciso definir critério de sucesso e uma forma de testar. Quem não domina essa base deve passar primeiro pelo guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">prompt engineering que funciona</a>.</p>
    <p>O comprador paga por três coisas: tempo (ele não quer aprender a escrever prompt), consistência (funciona na décima vez, não só na primeira) e conhecimento do nicho (o prompt sabe o que um nutricionista precisa, por exemplo). Se o seu pacote não entrega pelo menos duas dessas três, ele é um post gratuito com preço.</p>

    <h2>Quais formatos vendem de verdade</h2>
    <p>O mercado se divide em quatro formatos. Os preços abaixo são faixas observadas em plataformas brasileiras, não promessa; o valor certo depende do nicho e da prova de resultado que você consegue mostrar.</p>
    <table>
      <thead>
        <tr><th>Formato</th><th>O que é</th><th>Faixa comum</th><th>Esforço</th></tr>
      </thead>
      <tbody>
        <tr><td>Prompt único de nicho</td><td>Uma tarefa, um profissional (ex.: laudo para fisioterapeuta)</td><td>R$ 9 a R$ 27</td><td>Baixo, mas difícil de vender sozinho</td></tr>
        <tr><td>Pacote temático</td><td>15 a 40 prompts para um processo completo</td><td>R$ 27 a R$ 97</td><td>Médio, é o formato mais comum</td></tr>
        <tr><td>Template operacional</td><td>Prompts mais planilha, checklist e fluxo (Notion, Sheets)</td><td>R$ 67 a R$ 197</td><td>Alto, exige documentação</td></tr>
        <tr><td>Assistente configurado</td><td>GPT personalizado, Projeto do Claude ou Gem pronto para uso</td><td>R$ 97 a R$ 297</td><td>Alto, vira serviço</td></tr>
      </tbody>
    </table>
    <p>O último formato é a fronteira com outro negócio: quando o prompt vira um assistente configurado com arquivos e regras, você está no território descrito em <a href="/artigos/como-ganhar-dinheiro-criando-e-vendendo-agentes-de-ia-personalizados">como vender agentes de IA personalizados</a>. E quando o template inclui automação entre ferramentas, entra no que o artigo sobre <a href="/artigos/como-ganhar-dinheiro-vendendo-automacoes-prontas-com-ia">vender automações prontas com IA</a> detalha. Escolha um formato só para começar.</p>

    <h2>Passo a passo para montar um pacote que funciona</h2>
    <p>Siga a ordem. O erro clássico é começar pela capa no Canva.</p>
    <h3>1. Escolha uma tarefa que você já resolveu</h3>
    <p>Não invente nicho. Pegue o problema que você mesmo resolveu com IA no trabalho: relatório semanal, resposta de orçamento, roteiro de aula, descrição de produto. Quanto mais específico o público (dentista, corretor, professora de reforço), mais fácil vender e menos concorrência.</p>
    <h3>2. Estruture o prompt com a própria IA</h3>
    <pre><code>Você é um especialista em prompt engineering. Vou colar um prompt que
uso no trabalho e funciona razoavelmente. Reescreva-o em quatro blocos:
papel e contexto, instruções (com formato e limites), dois exemplos de
resultado bom e uma seção "como adaptar" com os campos entre colchetes
que o usuário deve preencher. Público do prompt: [profissão].
Prompt original: [cole aqui]</code></pre>
    <h3>3. Teste em pelo menos dois modelos</h3>
    <p>Rode o prompt no ChatGPT, no Claude e no Gemini, com o plano gratuito de cada um, e anote onde o resultado varia. O comparativo <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini</a> explica as diferenças de comportamento. Um pacote que só funciona em um modelo perde metade dos compradores.</p>
    <h3>4. Peça para alguém do nicho usar sem a sua ajuda</h3>
    <pre><code>Você é um [profissão] que nunca usou IA. Leia as instruções abaixo e
tente executar o prompt. Liste tudo que ficou confuso, cada campo que
você não saberia preencher e o que esperaria receber e não recebeu.
Instruções e prompt: [cole aqui]</code></pre>
    <p>Esse segundo prompt simula um usuário leigo, mas não substitui uma pessoa real. Mande para dois conhecidos do nicho e peça um print do resultado. Esses prints viram a prova social da página de vendas.</p>
    <h3>5. Documente e empacote</h3>
    <p>Um PDF ou página no Notion com: para quem é, o que resolve, como usar em cinco passos, os prompts, exemplos de resultado e uma seção de erros comuns. Sem essa documentação, o reembolso vem rápido.</p>

    <h2>Onde vender e quanto fica no seu bolso</h2>
    <p>Existem marketplaces internacionais só de prompts, mas para o público brasileiro as plataformas de produto digital costumam converter melhor, porque o comprador já confia no checkout e paga em reais. As taxas fazem diferença em produto barato:</p>
    <ul>
      <li><strong>Hotmart:</strong> 9,9% mais R$ 2,49 por venda aprovada na faixa inicial de faturamento, segundo a <a href="https://internal-pages.hotmart.com/pt-br/taxa-hotmart" rel="noopener noreferrer">página oficial de taxas</a> (verificado em 27/09/2026). Em um produto de R$ 27, sobram cerca de R$ 21,84.</li>
      <li><strong>Gumroad:</strong> 10% mais US$ 0,50 por venda direta pelo seu link, conforme a <a href="https://gumroad.com/pricing" rel="noopener noreferrer">página de preços</a> (verificado em 27/09/2026). Vendas que vêm da vitrine interna da plataforma pagam 30%.</li>
      <li><strong>Sua própria página:</strong> checkout via Pix ou link de pagamento, sem comissão de plataforma, mas sem tráfego pronto. O guia de <a href="/artigos/como-criar-landing-pages-e-sites-simples-com-ia">landing pages simples com IA</a> mostra como montar a página em uma tarde.</li>
    </ul>
    <p>Preços e faixas de taxa mudam; confira a página oficial antes de definir o seu preço. Uma regra prática: abaixo de R$ 19, a taxa fixa come uma fatia grande e o produto vira brinde. Use prompts baratos como isca gratuita e cobre pelo pacote completo.</p>
    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Ofereça o pacote também como bônus de um produto maior, como um ebook ou minicurso. O artigo sobre <a href="/artigos/como-vender-ebooks-e-guias-criados-com-ia">vender ebooks criados com IA</a> mostra como estruturar essa oferta combinada, que costuma valer mais do que os dois produtos separados.</p></div>

    <h2>Exemplo brasileiro com números</h2>
    <p>Cenário ilustrativo, com valores típicos. Uma nutricionista de Recife usa IA há um ano para montar planos alimentares e textos para pacientes. Ela transforma isso em "Pacote Consultório: 30 prompts para nutricionistas", com documentação em PDF e três vídeos curtos de tela.</p>
    <ul>
      <li>Tempo de produção: cerca de 12 horas, entre estruturar, testar em dois modelos e documentar.</li>
      <li>Custo direto: zero em ferramentas (planos gratuitos) e cerca de R$ 60 em capa e mockup no Canva pago por um mês.</li>
      <li>Preço: R$ 47 na Hotmart. Depois da taxa da faixa inicial, sobram perto de R$ 39,86 por venda.</li>
      <li>Divulgação: posts no Instagram profissional e um grupo de WhatsApp de colegas de faculdade, sem anúncio pago.</li>
      <li>Resultado no cenário: 18 vendas no primeiro mês, cerca de R$ 717 líquidos; nos meses seguintes, entre 6 e 12 vendas.</li>
    </ul>
    <p>Repare no que sustenta o número: nicho fechado, prova de que ela mesma usa e um canal onde já havia confiança. Sem esses três, o mesmo produto costuma vender uma ou duas unidades. A renda cresce quando o pacote vira porta de entrada para algo recorrente, como a <a href="/artigos/como-transformar-conhecimento-em-comunidade-paga-com-ia">comunidade paga gerenciada com IA</a> ou um <a href="/artigos/como-criar-e-vender-curso-online-usando-ia">curso online criado com IA</a>.</p>

    <h2>Como divulgar sem ter audiência</h2>
    <p>O produto pronto sem canal de venda não vende. Três caminhos baratos funcionam para quem começa do zero:</p>
    <ol>
      <li><strong>Mostrar o resultado, não o prompt.</strong> Publique o antes e depois de uma tarefa real do nicho. O guia sobre <a href="/artigos/como-construir-autoridade-em-ia-no-linkedin-sem-ser-tecnico">construir autoridade em IA no LinkedIn</a> tem um roteiro de posts para quem não é da área técnica.</li>
      <li><strong>Uma newsletter curta para o nicho.</strong> Um prompt gratuito por semana constrói lista e confiança; o artigo sobre <a href="/artigos/como-ganhar-dinheiro-com-newsletter-usando-ia">newsletter com IA</a> explica a mecânica e como monetizar depois.</li>
      <li><strong>Conteúdo em vídeo curto.</strong> Gravação de tela de 40 segundos mostrando o prompt em ação, agendada com as ferramentas do guia de <a href="/artigos/ia-para-redes-sociais-criar-agendar-analisar-posts">IA para redes sociais</a>.</li>
    </ol>
    <p>Reserve pelo menos o mesmo tempo que gastou produzindo para divulgar. Quem produz em 12 horas e divulga em 1 costuma concluir que "prompt não vende", quando o problema foi distribuição.</p>

    <h2>Erros comuns e quando não vale a pena</h2>
    <p>Alguns erros aparecem em quase todo primeiro lançamento, e há situações em que o formato simplesmente não compensa.</p>
    <ul class="checklist">
      <li>Vender prompt genérico ("100 prompts para marketing"). Concorre com conteúdo gratuito e perde.</li>
      <li>Não testar em outro modelo nem com outra pessoa. Reembolso garantido.</li>
      <li>Prometer resultado ("dobre suas vendas"). Além de desonesto, gera denúncia na plataforma.</li>
      <li>Ignorar que os modelos mudam. Numa <a href="/noticias/quatro-modelos-topo-lancados-mesma-semana-fadiga">única semana de setembro quatro modelos de ponta foram lançados</a>; um prompt afinado demais para uma versão pode quebrar na próxima. Revise o pacote a cada atualização relevante.</li>
      <li>Copiar prompt de terceiros e revender. Além do problema ético, o comprador acha o original de graça.</li>
    </ul>
    <p>Quando não vale a pena: se você não usa IA no dia a dia em nenhum nicho específico, não tem canal algum de divulgação e quer resultado no primeiro mês. Nesse caso, uma alternativa mais direta é <a href="/artigos/como-ganhar-dinheiro-testando-e-avaliando-ferramentas-de-ia">ganhar dinheiro testando e avaliando ferramentas de IA</a>, que exige menos produto e mais consistência.</p>
    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Renda com produto digital é irregular: meses bons alternam com meses de zero venda. Trate os primeiros pacotes como aprendizado e como porta de entrada para serviços, consultoria ou curso, não como salário.</p></div>

    <p>Prompts e templates são o produto digital mais rápido de criar para quem já usa IA no trabalho, e o mais fácil de errar quando se pula o teste e a documentação. Escolha um nicho, monte um pacote, teste com gente de verdade e dedique metade do esforço a divulgar. Para ver esse formato ao lado de outros caminhos e escolher o que combina com o seu perfil, siga pelo guia das <a href="/artigos/10-formas-de-ganhar-dinheiro-com-inteligencia-artificial">10 formas de ganhar dinheiro com inteligência artificial</a>.</p>
  `,
  faq: [
    {
      question: "Vender prompts de IA ainda dá dinheiro em 2026?",
      answer:
        "Dá, mas não para prompt solto e genérico, que concorre com conteúdo gratuito. O que segue vendendo é pacote de nicho com documentação, exemplos de resultado e teste feito por outra pessoa, na faixa de R$ 27 a R$ 97. A renda costuma ser irregular e cresce quando o pacote vira porta de entrada para serviço, curso ou comunidade.",
    },
    {
      question: "Quanto custa vender prompts na Hotmart ou no Gumroad?",
      answer:
        "Na Hotmart, a taxa da faixa inicial é de 9,9% mais R$ 2,49 por venda aprovada; no Gumroad, 10% mais US$ 0,50 por venda direta e 30% nas vendas vindas da vitrine interna. Os dois valores foram conferidos nas páginas oficiais em 27/09/2026 e podem mudar, então confira antes de definir o preço. Em produto abaixo de R$ 19, a taxa fixa pesa demais.",
    },
    {
      question: "Preciso ser especialista em IA para criar templates vendáveis?",
      answer:
        "Não. Precisa ser bom no nicho, não em IA. O comprador paga pelo conhecimento de quem entende o trabalho dele (nutricionista, corretor, professor) traduzido em prompts que funcionam de forma consistente. A parte técnica se aprende com os guias oficiais da OpenAI e da Anthropic e com a própria IA ajudando a estruturar o prompt em blocos.",
    },
    {
      question: "Como proteger meus prompts de cópia depois de vender?",
      answer:
        "Não dá para impedir cópia de texto. O que protege o negócio é o que não se copia: a documentação, os exemplos de resultado, as atualizações quando os modelos mudam e a sua reputação no nicho. Venda o pacote como algo vivo, com versão nova a cada atualização relevante, e o comprador prefere pagar a você do que procurar uma cópia desatualizada.",
    },
    {
      question: "Prompt vendável funciona em português ou só em inglês?",
      answer:
        "Funciona em português e é uma vantagem: a maior parte dos pacotes à venda no mundo está em inglês, e o profissional brasileiro quer instruções, exemplos e termos do seu mercado (MEI, Pix, CRM local). Teste o prompt nos três modelos principais com o plano gratuito e mantenha os exemplos de saída em português para o comprador ver o resultado real.",
    },
  ],
};
