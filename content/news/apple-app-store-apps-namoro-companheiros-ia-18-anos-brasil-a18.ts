import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "apple-app-store-apps-namoro-companheiros-ia-18-anos-brasil-a18",
  title: "Apple exige 18+ para apps de namoro e companheiros de IA na App Store",
  summary:
    "A partir de 16/11, apps com namoro ou companheiro de IA romântico terão classificação mínima de 18 anos na App Store. No Brasil, a nota será A18.",
  author: "Bruno Danello",
  sourceName: "Apple Developer, TechCrunch",
  sourceUrl: "https://developer.apple.com/news/?id=yxkh08us",
  date: "2026-11-03",
  publishedAt: "2026-11-03T13:28:00-03:00",
  imageQuery: "Apple App Store logo",
  topic: "regulacao",
  content: `
    <p>A Apple vai mudar a forma como classifica por idade os aplicativos da App Store, e a mudança pega em cheio os companheiros virtuais com inteligência artificial. Em aviso publicado na segunda-feira (2) no portal de desenvolvedores, a empresa informou que, a partir de 16 de novembro de 2026, o questionário de classificação etária do App Store Connect, o painel onde os criadores de apps cadastram seus produtos, vai ganhar duas perguntas novas. Uma delas trata de recursos de namoro e de relacionamento, e inclui de forma explícita o companheiro virtual que conversa com o usuário em tom sexual ou romântico. Todo app que marcar esse item passa a ter classificação mínima de 18 anos.</p>

    <p>A mudança foi destacada nesta terça-feira (3) pelo TechCrunch, que lembrou que a maior parte dos grandes serviços de namoro já é restrita a adultos. O alvo mais sensível, segundo o site, são os aplicativos de companhia com IA, como Character.AI e Replika, que permitem criar amigos, namorados e outros personagens e costumam atrair um público mais jovem. O aviso da Apple também traz um trecho específico sobre o Brasil, o que torna a notícia mais concreta para quem desenvolve ou usa apps por aqui.</p>

    <h2>O que muda na prática</h2>
    <p>As duas novas declarações que o desenvolvedor terá de fazer são estas:</p>
    <ul>
      <li><strong>Localização compartilhada:</strong> se o app compartilha a localização real do usuário com outra pessoa ou com um grupo.</li>
      <li><strong>Namoro e relacionamentos:</strong> se o app tem recursos que criam conexões de namoro ou de relacionamento entre pessoas reais, ou se oferece um companheiro virtual que envolve o usuário em conteúdo sexual ou romântico.</li>
    </ul>

    <p>A Apple diz que as perguntas servem para que a classificação etária reflita os recursos reais de cada app e esteja de acordo com as regras locais de cada país. As respostas passam a ser exigidas sempre que o desenvolvedor enviar uma atualização ou mexer no questionário de classificação a partir de 16 de novembro. Para quem não atualizar nada, há um prazo final: todos os apps da loja precisam ter essas declarações preenchidas até 12 de janeiro de 2027.</p>

    <p>O peso das duas perguntas é diferente. Marcar namoro e relacionamentos leva o app para a faixa de 18 anos ou mais. Já a localização compartilhada, segundo a Apple, pode não alterar a idade mínima em algumas regiões. Em outras palavras, um app de transporte ou de entrega que mostra o trajeto para um contato não vira automaticamente um produto adulto, mas um chatbot que flerta com o usuário vira.</p>

    <h2>O recado para os apps de companhia com IA</h2>
    <p>O ponto mais importante do texto da Apple é que ele não se limita a aplicativos de encontros entre pessoas. A definição cobre de forma literal o companheiro virtual com conteúdo sexual ou romântico, que é exatamente o modelo de negócio de boa parte dos apps de personagens de IA. O TechCrunch lembra que, até o meio de 2025, os principais apps de companhia com IA já somavam 220 milhões de downloads na App Store e no Google Play, e cita também os companheiros animados em 3D que a xAI lançou em 2025 com a opção de destravar recursos adultos.</p>

    <p>Na prática, esses aplicativos terão de escolher um caminho. Quem mantiver o modo romântico ou adulto vai aparecer na loja como app para maiores de 18 anos, o que tende a afastar o público adolescente e a esbarrar nos controles parentais configurados nos aparelhos de menores. Quem quiser continuar com uma classificação mais baixa precisará tirar ou travar esse tipo de conversa. A Apple não detalhou no aviso como vai conferir se o que o desenvolvedor declarou bate com o que o app de fato entrega.</p>

    <p>A mudança chega depois de a Apple expandir pelo mundo sua tecnologia de checagem de idade, em fevereiro de 2026, e de lançar novos controles para pais e recursos de proteção infantil em junho, segundo o TechCrunch. O tema também está em alta nos tribunais e nas assembleias dos EUA. O Portal da AI já noticiou que <a href="/noticias/ny-hochul-lei-chatbots-criancas-verificacao-idade">Nova York proibiu chatbots de se passarem por humanos com crianças</a> e que o <a href="/noticias/texas-processa-openai-altman-chatgpt-menores">Texas processa a OpenAI e Sam Altman por riscos do ChatGPT a menores</a>. O próprio setor de companhia virtual passa por turbulência: a <a href="/noticias/character-ai-falencia-disney">Character.AI pediu falência nos EUA e vendeu parte dos ativos à Disney</a>.</p>

    <h2>O trecho sobre o Brasil</h2>
    <p>O aviso da Apple cita o Brasil nominalmente. Pelas regras locais de classificação indicativa, a localização compartilhada exige a nota A16 (não recomendado para menores de 16 anos), e namoro e relacionamentos exigem a nota A18 (não recomendado para menores de 18). Ou seja, aqui os apps de companhia romântica com IA terão a classificação mais alta da tabela, e mesmo recursos de localização ganham uma faixa etária própria, coisa que, segundo a Apple, pode não acontecer em outros mercados.</p>

    <p>Há uma saída prevista para casos específicos. Se o desenvolvedor achar que o app merece uma nota menor no Brasil, por exemplo um aplicativo de localização feito para pais acompanharem os filhos, ele pode pedir uma classificação oficial diretamente ao Ministério da Justiça e Segurança Pública (MJSP), responsável pela classificação indicativa no país. Depois de verificada, essa nota oficial passa a aparecer na App Store brasileira.</p>

    <p>O movimento conversa com o ECA Digital (Lei 15.211/2025), em vigor desde março, que cobra de plataformas e de lojas de aplicativos mecanismos mais confiáveis para proteger crianças e adolescentes. Explicamos o que essa lei muda para famílias e para quem cria produtos em <a href="/artigos/eca-digital-e-ia-o-que-muda-para-pais-criancas-chatbots-e-apps">ECA Digital e IA: o que muda para pais, crianças, chatbots e apps</a>. A Apple não diz no aviso que a mudança foi feita por causa da lei brasileira, mas o ajuste às notas A16 e A18 mostra que a empresa está alinhando a loja às exigências locais.</p>

    <h2>O que ainda não está claro</h2>
    <p>O aviso é curto e deixa perguntas sem resposta. A Apple não explica se assistentes de IA de uso geral, como os grandes chatbots, precisarão marcar o item de namoro caso permitam conversas românticas em algum modo, nem se a regra alcança personagens criados pelo próprio usuário dentro de apps que não têm esse foco. Também não há informação sobre o que acontece com apps já classificados para 12 ou 16 anos que não responderem até 12 de janeiro. Por fim, a regra vale só para a App Store: o Google Play tem política própria, e quem distribui nas duas lojas terá de cumprir as duas.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você desenvolve ou vende um app com chatbot, personagem ou assistente de IA, reserve um tempo antes de 16 de novembro para revisar o que o produto realmente faz. Um modo de namorado virtual ou um personagem que flerta pode jogar o app inteiro para a faixa de 18 anos, e para A18 no Brasil, com impacto direto em downloads, anúncios e no público que você consegue alcançar. Se a ideia é atender adolescentes, separe ou desligue esses recursos. Se o app compartilha localização e é voltado a famílias, vale conhecer o caminho do pedido de classificação ao MJSP. Para quem só usa esses apps, ou tem filhos que usam, a mudança deve deixar mais visível na loja quais aplicativos de IA são feitos para adultos, mas não substitui o controle parental do aparelho. Quem pensa em criar um produto com IA nesse mercado pode começar pelo nosso guia de <a href="/artigos/10-formas-de-ganhar-dinheiro-com-inteligencia-artificial">formas de ganhar dinheiro com inteligência artificial</a>, levando em conta essas regras de classificação desde o início do projeto.</p>
  `,
};
