import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "sora-2-da-openai-precos-limites-como-usar",
  title: "Sora 2 da OpenAI: preços, limites e como usar em 2026",
  seoTitle: "Sora 2 da OpenAI: preços e como usar em 2026",
  excerpt:
    "Sora 2 é a IA de vídeo da OpenAI, mas desde janeiro de 2026 só funciona em conta paga. Veja planos, custo por vídeo e como usar sem gastar à toa.",
  metaDescription:
    "Sora 2 da OpenAI: como funciona em 2026, por que o acesso gratuito acabou, quanto custa cada vídeo e como escolher entre ChatGPT Plus e Pro para usar a ferramenta.",
  category: "ferramentas",
  date: "2026-10-04",
  readTime: 7,
  imageQuery: "ai video generation editing screen",
  seed: 143,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Desde 10 de janeiro de 2026, o acesso gratuito ao Sora 2 foi encerrado; só assinantes do ChatGPT Plus (US$ 20/mês) ou Pro (US$ 200/mês) conseguem gerar vídeo pela ferramenta.",
    "O Plus dá cerca de 1.000 créditos por mês, suficiente para aproximadamente 50 vídeos em 480p; resoluções maiores consomem mais créditos por vídeo gerado.",
    "Para quem usa a API em vez do app, o custo gira em torno de US$ 0,10 por segundo em 720p, o que coloca um vídeo de 10 segundos perto de US$ 1, valor que sobe bastante na versão Pro.",
  ],
  content: `
    <p>Sora 2 é a ferramenta de geração de vídeo por IA da OpenAI, que cria clipes curtos a partir de texto ou imagem. Desde 10 de janeiro de 2026, o acesso gratuito foi encerrado por decisão da própria empresa, que citou sobrecarga de servidor; hoje só quem assina o ChatGPT Plus ou o Pro consegue gerar vídeo pela ferramenta, cada plano com uma cota de créditos mensal diferente.</p>

    <p>Este guia explica os planos disponíveis, quanto custa gerar vídeo pela API para quem precisa de uso programático e como decidir se vale assinar para usar o Sora 2 hoje. Quem já compara ferramentas de vídeo por IA pode conferir também o guia <a href="/artigos/runway-ou-pika-qual-ia-de-video-escolher">Runway ou Pika: qual IA de vídeo escolher</a>, e quem quer entender o ChatGPT de forma mais ampla encontra a análise completa em <a href="/artigos/chatgpt-plus-vale-a-pena-review-2026">ChatGPT Plus vale a pena em 2026</a>.</p>

    <h2>O que mudou em janeiro de 2026</h2>

    <p>Até o fim de 2025, o Sora 2 permitia um número limitado de gerações gratuitas por dia direto no aplicativo. Segundo reportagem reunida pela <a href="https://help.apiyi.com/en/openai-sora-2-policy-change-plus-pro-only-en.html" rel="noopener noreferrer">Apiyi sobre a mudança de política do Sora 2</a>, a OpenAI encerrou esse acesso gratuito a partir das 4h do dia 10 de janeiro de 2026, justificando a decisão com a frase atribuída à empresa: as GPUs estavam "derretendo" com a demanda, e a prioridade passou a ser garantir acesso estável para quem paga. Antes da mudança, o limite gratuito era de cerca de 6 gerações por dia, segundo a mesma fonte.</p>

    <p>Na prática, isso significa que, desde então, criar qualquer vídeo ou imagem pelo Sora exige uma assinatura paga do ChatGPT, seja o plano Plus ou o Pro. Quem usava o Sora só esporadicamente e sem custo precisa agora decidir se o uso justifica a assinatura ou se vale mais a pena recorrer a uma ferramenta concorrente com plano gratuito ainda ativo. Esse tipo de mudança de política também mostra por que vale sempre comparar plano antes de assinar, tema do guia <a href="/artigos/ia-gratis-ou-paga-o-que-vale-a-pena">IA grátis ou paga: o que vale a pena</a>.</p>

    <h2>Planos e créditos: Plus x Pro</h2>

    <table>
      <thead>
        <tr><th>Plano</th><th>Preço mensal</th><th>Créditos de vídeo</th><th>O que inclui</th></tr>
      </thead>
      <tbody>
        <tr><td>Plus</td><td>US$ 20</td><td>~1.000 créditos/mês</td><td>Acesso ao Sora 2 padrão (não Pro)</td></tr>
        <tr><td>Pro</td><td>US$ 200</td><td>~10.000 créditos/mês</td><td>Acesso prioritário, modo relaxado ilimitado durante a madrugada e Sora 2 Pro</td></tr>
      </tbody>
    </table>

    <p>Segundo a mesma reportagem da Apiyi, cada vídeo de 5 segundos em 1080p consome cerca de 200 créditos, um vídeo de 5 segundos em 720p consome cerca de 100 créditos, e um vídeo de 5 segundos em 480p consome cerca de 20 créditos. Isso coloca a cota do Plus em torno de 50 vídeos curtos em 480p por mês, bem menos se a resolução escolhida for mais alta. O plano Pro multiplica essa cota por dez e ainda libera o modo relaxado sem limite durante a madrugada, segundo a mesma fonte.</p>

    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Se o seu uso é esporádico (poucos vídeos por mês, para post em rede social ou teste de ideia), o plano Plus já cobre. O Pro só compensa para quem produz vídeo em volume alto e constante, como agência ou criador que publica todos os dias.</p></div>

    <h2>Custo pela API, para quem programa em vez de usar o app</h2>

    <p>Para desenvolvedores que integram o Sora 2 em outro produto via API, o custo é cobrado por segundo de vídeo gerado, não por crédito de assinatura. Segundo a mesma fonte, o Sora 2 padrão custa cerca de US$ 0,10 por segundo em 720p, o que coloca um vídeo de 10 segundos perto de US$ 1. O Sora 2 Pro, voltado para quem precisa de qualidade maior, custa mais por segundo conforme a resolução sobe, chegando perto de US$ 3 para um vídeo comparável de 10 segundos.</p>

    <h2>Como usar o Sora 2 na prática</h2>

    <h3>1. Escreva o prompt descrevendo cena, câmera e movimento</h3>
    <p>Prompts que funcionam melhor descrevem não só o que aparece na cena, mas também o tipo de movimento de câmera e a duração da ação, porque o modelo responde melhor a instrução de cinematografia do que a adjetivo solto.</p>

    <pre><code>Cena de 8 segundos, câmera em movimento lento de aproximação (dolly in), mostrando um café pequeno e iluminado ao amanhecer, vapor subindo de uma xícara sobre o balcão, tom caloroso e realista, sem texto na tela.</code></pre>

    <h3>2. Gere em resolução baixa antes de gastar crédito em resolução alta</h3>
    <p>Teste a ideia em 480p primeiro, que consome menos crédito, e só regenere em 1080p depois de confirmar que o resultado está no caminho certo. Isso evita gastar a cota mensal inteira testando variações da mesma cena.</p>

    <h3>3. Edite e finalize fora da ferramenta</h3>
    <p>O Sora 2 entrega o clipe bruto; cortar, juntar cenas e adicionar trilha sonora continua sendo trabalho de um editor de vídeo externo, como mostra o guia <a href="/artigos/canva-capcut-e-ia-artes-e-videos-sem-saber-design">Canva, CapCut e IA: artes e vídeos sem saber design</a>, que cobre essa etapa de finalização. Para quem já narra ou dubla o vídeo depois de editado, o guia <a href="/artigos/ganhar-dinheiro-dublando-videos-com-ia-vozes-sinteticas">ganhar dinheiro dublando vídeos com IA</a> mostra o passo seguinte dessa produção.</p>

    <h2>Para quem vale a pena hoje</h2>

    <p>Vale a pena para criadores de conteúdo que já produzem vídeo em volume e querem testar formatos novos sem contratar equipe de filmagem, e para pequenos negócios que precisam de material visual para anúncio ou rede social sem orçamento para produção tradicional, tema relacionado ao guia <a href="/artigos/ia-para-criadores-de-conteudo-videos-textos-e-artes">IA para criadores de conteúdo: vídeos, textos e artes</a>. Não vale a pena para quem só quer experimentar uma vez por curiosidade, já que o fim do plano gratuito tornou isso uma despesa mensal para um uso pontual, situação em que uma ferramenta concorrente com camada gratuita ainda ativa resolve melhor.</p>

    <p>Quem cria vídeo curto para rede social como fonte de renda, tema do guia <a href="/artigos/como-ganhar-dinheiro-criando-videos-curtos-com-ia">vídeos curtos com IA: como ganhar dinheiro produzindo Reels</a>, deve calcular se o custo mensal da assinatura cabe no retorno esperado antes de depender só do Sora 2 para a produção. E para quem já usa avatar digital em vídeo, o guia <a href="/artigos/ia-para-video-criar-avatar-digital-que-fala-por-voce">IA para vídeo: como criar um avatar digital que fala por você</a> mostra uma alternativa que não depende de gerar cena completa do zero.</p>

    <h2>Erros comuns ao usar o Sora 2</h2>

    <p>O erro mais comum é gerar direto em resolução alta sem testar a ideia antes, o que consome crédito rápido sem necessidade. O segundo é assinar o plano Pro sem calcular se o volume de uso realmente justifica os US$ 200 mensais, quando o Plus já cobraria a maior parte dos casos. O terceiro é esperar realismo perfeito em toda cena gerada; o modelo ainda comete erro visível em detalhes como mãos, texto na tela e física de objetos, então vale sempre revisar o resultado antes de publicar.</p>

    <ul class="checklist">
      <li>Não gere em 1080p direto; teste a ideia em resolução menor primeiro.</li>
      <li>Não assine o plano Pro sem comparar o custo com o volume real de vídeos que você produz.</li>
      <li>Não publique sem revisar detalhe visual (mãos, texto, objetos) que a IA ainda erra com frequência.</li>
      <li>Não use o Sora 2 para conteúdo que dependa de identidade visual exata de marca sem checar o resultado antes.</li>
    </ul>

    <h2>Alternativas se o custo não fizer sentido</h2>

    <p>Quem não quer pagar assinatura só para gerar vídeo por IA pode comparar outras ferramentas com camada gratuita mais generosa, como mostra o guia <a href="/artigos/runway-ou-pika-qual-ia-de-video-escolher">Runway ou Pika: qual IA de vídeo escolher</a>. E quem está decidindo entre investir em vídeo por IA ou em outro tipo de ferramenta para o negócio pode revisar o panorama geral no guia <a href="/artigos/ia-gratis-ou-paga-o-que-vale-a-pena">IA grátis ou paga: o que vale a pena</a> antes de assinar qualquer plano novo. Quem ainda está decidindo entre as IAs generalistas mais conhecidas pode revisar o comparativo em <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini: qual IA escolher</a>, e quem quer entender o cenário mais amplo da IA multimodal que torna ferramentas como o Sora possíveis encontra a base em <a href="/artigos/ia-multimodal-o-que-muda-quando-maquina-ve-ouve-fala">IA multimodal: o que muda quando a máquina vê, ouve e fala</a>.</p>
  `,
  faq: [
    {
      question: "O Sora 2 ainda é gratuito?",
      answer:
        "Não. Desde 10 de janeiro de 2026, o acesso gratuito foi encerrado pela OpenAI. Hoje só assinantes do ChatGPT Plus ou Pro conseguem gerar vídeo ou imagem pela ferramenta.",
    },
    {
      question: "Quanto custa gerar um vídeo no Sora 2?",
      answer:
        "Pelo app, o custo é em créditos: cerca de 20 créditos para 480p, 100 para 720p e 200 para 1080p em um clipe de 5 segundos. Pela API, o padrão gira perto de US$ 0,10 por segundo em 720p, cerca de US$ 1 para 10 segundos de vídeo.",
    },
    {
      question: "Vale mais a pena o plano Plus ou o Pro para usar o Sora 2?",
      answer:
        "O Plus (US$ 20/mês) já cobre quem usa a ferramenta esporadicamente, com cerca de 1.000 créditos mensais. O Pro (US$ 200/mês) só compensa para quem produz vídeo em volume alto, já que dá dez vezes mais créditos e modo relaxado ilimitado durante a madrugada.",
    },
    {
      question: "O Sora 2 funciona em português?",
      answer:
        "Sim, é possível escrever o prompt em português e a ferramenta interpreta a cena descrita. O resultado visual não depende do idioma do prompt, então a qualidade do vídeo final é a mesma.",
    },
    {
      question: "Dá para usar o Sora 2 para vídeo comercial de pequeno negócio?",
      answer:
        "Dá, mas vale revisar os termos de uso da OpenAI antes de publicar conteúdo comercial gerado pela ferramenta, além de checar sempre o resultado visual antes de divulgar, porque a IA ainda comete erro em detalhes pequenos.",
    },
  ],
};
