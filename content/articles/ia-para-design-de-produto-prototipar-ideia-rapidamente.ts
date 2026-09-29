import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "ia-para-design-de-produto-prototipar-ideia-rapidamente",
  title: "IA para design de produto: como prototipar uma ideia em um dia",
  seoTitle: "IA para design de produto: prototipar uma ideia rápido",
  excerpt:
    "IA para design de produto: transforme uma ideia em protótipo clicável ou render de objeto físico em uma tarde, com Lovable, v0, Figma Make e prompts prontos.",
  metaDescription:
    "IA para design de produto sem programar nem desenhar: guia com Lovable, v0 e Figma Make, preços verificados, prompts e exemplo brasileiro com números.",
  category: "ferramentas",
  date: "2026-09-21",
  updated: "2026-09-27",
  readTime: 9,
  imageQuery: "product prototype design sketch",
  seed: 61,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Prototipar com IA serve para descobrir cedo se a ideia faz sentido para o cliente, quando corrigir ainda custa uma tarde e não um orçamento.",
    "Para produto digital, Lovable, v0 e Figma Make geram telas clicáveis a partir de um texto; para produto físico, geradores de imagem criam renders para validar antes de fabricar.",
    "O protótipo de IA acelera a exploração, mas não substitui teste com gente real nem, no físico, ergonomia, material e segurança.",
  ],
  content: `
    <p>IA para design de produto é usar geradores de interface e de imagem para sair da ideia na cabeça e chegar a algo que dá para mostrar, clicar e criticar em poucas horas. Para um app, isso significa telas funcionais geradas a partir de um texto. Para um objeto físico, significa renders realistas antes de gastar com molde ou fornecedor.</p>

    <p>Este guia mostra qual caminho escolher (digital ou físico), um passo a passo para chegar a um protótipo clicável em uma tarde, prompts prontos, os preços verificados de Lovable, v0 e Figma Make, um exemplo brasileiro com números e os limites que um protótipo de IA não ultrapassa. Não exige saber programar nem desenhar.</p>

    <h2>O que é prototipar com IA (e o que não é)</h2>

    <p>Um protótipo é uma versão barata do produto que existe só para responder perguntas: o cliente entende? consegue usar? pagaria? Antes da IA, chegar nessa versão exigia designer, ferramenta de prototipação e alguns dias. Hoje ferramentas como o <a href="https://docs.lovable.dev/introduction" rel="noopener noreferrer">Lovable</a> geram, a partir de uma descrição em português, uma aplicação com telas, banco de dados e login, com código editável por trás.</p>

    <p>O que a IA não faz é decidir o que o produto deve ser. Se você descreve mal o problema e o público, ela devolve uma tela bonita para um problema que ninguém tem. Por isso o primeiro passo deste guia não é abrir ferramenta nenhuma, é escrever o problema. Quem já passou por <a href="/artigos/como-validar-ideia-de-negocio-com-ia-antes-de-investir">validar uma ideia de negócio com IA</a> reconhece a ordem: primeiro a pergunta, depois o protótipo, depois o cliente.</p>

    <p>Vale também não confundir protótipo com produto final. O Lovable, o v0 e o Figma Make entregam algo que funciona o bastante para testar, e em muitos casos o suficiente para lançar uma versão inicial. Mas a decisão de manter, reescrever ou contratar alguém vem depois do teste, não antes.</p>

    <h2>Digital ou físico: qual caminho e qual ferramenta</h2>

    <p>A escolha depende do que você quer mostrar. Produto digital pede algo clicável; produto físico pede algo que pareça real na foto. A tabela resume as opções mais acessíveis para quem está começando.</p>

    <table>
      <thead>
        <tr><th>Ferramenta</th><th>Tipo de produto</th><th>O que gera</th><th>Preço (verificado em 27/09/2026)</th></tr>
      </thead>
      <tbody>
        <tr><td>Lovable</td><td>Digital (app, site, sistema)</td><td>Aplicação completa a partir de texto, com telas, banco e login, publicável em um link</td><td>Plano gratuito com 5 créditos de construção por dia (até 30 por mês); planos pagos: consulte a página oficial</td></tr>
        <tr><td>v0 (Vercel)</td><td>Digital (interface, landing, dashboard)</td><td>Telas e apps a partir de prompt, wireframe ou mockup, com deploy imediato</td><td>Free US$ 0 (US$ 5 em créditos por mês, 7 mensagens por dia); Plus US$ 30/mês; Business US$ 100 por usuário/mês</td></tr>
        <tr><td>Figma Make</td><td>Digital (protótipo interativo)</td><td>Protótipos e apps a partir de prompt, aproveitando o design que já existe no Figma</td><td>Só em planos pagos; Professional US$ 16/mês por assento completo</td></tr>
        <tr><td>ChatGPT, Gemini ou Canva (imagem)</td><td>Físico (objeto, embalagem, móvel)</td><td>Renders e variações visuais a partir de descrição ou esboço fotografado</td><td>Planos gratuitos geram imagens com limite; consulte a página oficial de cada um</td></tr>
      </tbody>
    </table>

    <p>Os valores em dólar acima foram conferidos nas páginas oficiais de <a href="https://v0.app/pricing" rel="noopener noreferrer">preços do v0</a>, <a href="https://www.figma.com/pricing/" rel="noopener noreferrer">planos do Figma</a> e <a href="https://lovable.dev/pricing" rel="noopener noreferrer">planos do Lovable</a>, e mudam com o câmbio e com o tempo. Antes de assinar qualquer uma, passe pelo <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher ferramenta de IA com segurança</a>, principalmente se o protótipo vai receber dados de clientes reais.</p>

    <h2>Passo a passo: do problema ao protótipo clicável em uma tarde</h2>

    <h3>1. Escreva o problema em cinco linhas (30 minutos)</h3>

    <p>Quem tem o problema, em que momento ele aparece, como a pessoa resolve hoje, o que dói nessa solução e o que o seu produto faz de diferente. Sem essas cinco linhas, o prompt sai vago e a tela sai genérica. Se travar, o <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">guia de prompt engineering</a> mostra como transformar uma ideia solta em um pedido estruturado.</p>

    <h3>2. Gere a primeira versão (1 hora)</h3>

    <p>Cole o problema no Lovable ou no v0 com o prompt abaixo. Peça só as três telas principais. Protótipo com dez telas na primeira rodada vira bagunça.</p>

    <pre><code>Crie um protótipo de aplicativo web em português para [público]
que resolve [problema] no momento em que [situação].
Gere só 3 telas: (1) tela inicial com a ação principal,
(2) tela onde a pessoa executa a ação, (3) tela de confirmação.
Use texto real, não "lorem ipsum". Nomes, valores e datas brasileiros.
Visual simples, um botão principal por tela, fonte grande, sem menu lateral.
Ao final, liste as decisões que você tomou sem eu ter pedido.</code></pre>

    <p>A última linha é a mais útil: a ferramenta vai listar o que inventou (cores, campos, fluxo), e você corrige antes de mostrar para alguém.</p>

    <h3>3. Mostre para cinco pessoas (2 horas)</h3>

    <p>Abra o link no celular de cinco pessoas do público e peça: "tente fazer [a ação principal] sem eu ajudar". Anote onde travam e o que perguntam. Não explique. Se três das cinco travam no mesmo lugar, o problema é o protótipo, não as pessoas.</p>

    <h3>4. Ajuste e repita (1 hora)</h3>

    <p>Volte à ferramenta com o segundo prompt e gere a versão 2. Duas rodadas em um dia costumam resolver os erros grosseiros. A partir daí, se a ideia envolve vender online, o guia de <a href="/artigos/como-montar-uma-loja-virtual-em-um-fim-de-semana-usando-ia">montar uma loja virtual em um fim de semana</a> segue exatamente deste ponto.</p>

    <pre><code>Nos testes, 3 de 5 pessoas travaram na tela 2 porque não entenderam [o que].
Reescreva essa tela com uma instrução de uma frase no topo,
reduza os campos para os 3 obrigatórios e mova [campo] para depois da confirmação.
Não mude as outras telas. Me mostre o antes e depois em texto.</code></pre>

    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Grave a tela do celular durante o teste (o próprio celular grava). Rever 5 vídeos de 2 minutos mostra mais do que qualquer relatório, e ajuda a escrever o prompt de correção com precisão.</p></div>

    <h2>Protótipo de produto físico: renders antes de fabricar</h2>

    <p>Para objeto físico, o protótipo de IA é uma imagem convincente o suficiente para perguntar "você compraria isso por R$ X?". Fotografe um esboço em papel ou descreva o objeto e peça variações a um gerador de imagens. Os modelos atuais são multimodais, ou seja, aceitam foto como entrada e devolvem imagem coerente com o que viram, e o artigo sobre <a href="/artigos/ia-multimodal-o-que-muda-quando-maquina-ve-ouve-fala">IA multimodal</a> explica o que isso muda na prática.</p>

    <pre><code>Gere um render realista de produto para catálogo: [objeto], em [material],
cor [cor], sobre fundo branco, iluminação de estúdio, ângulo de 3/4.
Mostre 3 variações lado a lado: (a) versão básica, (b) com [detalhe],
(c) em [outra cor]. Mantenha as proporções iguais nas três.
Sem texto na imagem, sem logo.</code></pre>

    <p>Use os renders em uma enquete no Instagram, em um post no grupo do bairro ou em uma <a href="/artigos/como-criar-landing-pages-e-sites-simples-com-ia">landing page simples feita com IA</a> com botão de "avise-me quando lançar". Cadastros de e-mail são a resposta mais honesta que um render consegue arrancar. Para a identidade visual da embalagem, o guia de <a href="/artigos/ia-para-design-de-logotipo-marca-simples-profissional">design de logotipo com IA</a> cobre a parte de marca, e <a href="/artigos/canva-capcut-e-ia-artes-e-videos-sem-saber-design">Canva com IA</a> resolve o material de divulgação.</p>

    <p>Limite claro: render não testa ergonomia, encaixe, resistência nem segurança. Uma garrafa térmica linda no render pode não vedar. O render responde "tem interesse?"; o protótipo físico responde "funciona?".</p>

    <h2>Exemplo brasileiro: agendamento para um fisioterapeuta em Recife</h2>

    <p>Imagine Rafael, fisioterapeuta com consultório em Recife, atendendo 60 pacientes por mês. Ele recebe um orçamento de R$ 15 mil por um app de agendamento com lembretes. Antes de fechar, decide prototipar. Em uma tarde de sábado, no plano gratuito do Lovable, ele descreve o problema (paciente esquece a sessão, remarcação por WhatsApp toma 1 hora por dia da secretária) e gera três telas: escolher horário, confirmar, receber lembrete.</p>

    <p>Na semana seguinte, mostra o link para 12 pacientes na recepção. Sete dizem que usariam. Cinco perguntam "mas não dá para fazer pelo WhatsApp mesmo?". Esse dado muda tudo: o que os pacientes querem não é um app, é um lembrete automático no canal que já usam. Rafael troca o projeto por um fluxo de lembretes por WhatsApp, que um <a href="/artigos/como-criar-chatbot-de-atendimento-para-seu-site-sem-programar">chatbot de atendimento sem programar</a> resolve com custo mensal de dezenas de reais, não milhares.</p>

    <p>Custo do protótipo: zero em ferramenta, uma tarde de trabalho, 12 conversas de dois minutos. Economia: o orçamento de R$ 15 mil não foi gasto na direção errada. Quem quer transformar essa habilidade em serviço encontra em <a href="/artigos/como-criar-um-negocio-digital-usando-ia-do-zero">criar um negócio digital com IA do zero</a> o caminho seguinte.</p>

    <h2>Erros comuns e quando o protótipo de IA não basta</h2>

    <p>O erro mais caro é se apaixonar pela primeira tela. A IA gera algo bonito em dois minutos e a beleza convence quem criou; o teste com cinco pessoas existe para desfazer esse encanto. O segundo é testar com amigos e família, que elogiam para não magoar. Teste com quem tem o problema e não te conhece.</p>

    <p>O terceiro erro é colocar dados reais de clientes em um protótipo público. Protótipo é para dados de exemplo; se precisa de dados reais, ele já virou produto e precisa de cuidado com privacidade. O quarto é pular do protótipo para o lançamento sem decidir quem vai manter o código gerado: as ferramentas entregam código de verdade, mas alguém precisa cuidar dele quando quebrar.</p>

    <p>Existem casos em que o protótipo de IA não é o caminho certo. Produto físico que envolve segurança (brinquedo, item elétrico, alimento) precisa de protótipo real e de norma. Produto digital que lida com saúde, dinheiro ou dados sensíveis precisa de gente experiente desde o começo. E ideia que depende de uma tecnologia que ainda não existe não se prototipa, se pesquisa. Nesses três casos, use a IA para <a href="/artigos/como-escrever-pitch-de-negocio-com-ia">escrever o pitch</a> e conversar com quem entende, não para gerar telas.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Render de IA em anúncio de produto que ainda não existe precisa deixar isso claro ("imagem ilustrativa, em desenvolvimento"). Vender com foto de algo que não foi fabricado vira problema de consumidor, não de design.</p></div>

    <p>IA para design de produto reduz a distância entre a ideia e a primeira reação do cliente de semanas para uma tarde, e isso muda a pergunta de "será que dá certo?" para "o que os cinco primeiros testes me disseram?". Escolha uma ideia que está parada, escreva as cinco linhas do problema e gere as três telas hoje. Para continuar montando o seu kit, a categoria de <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">Ferramentas</a> compara os assistentes que vão escrever os prompts com você.</p>
  `,
  faq: [
    {
      question: "Dá para prototipar um app com IA sem saber programar?",
      answer:
        "Dá. Ferramentas como Lovable, v0 e Figma Make recebem uma descrição em português e geram telas funcionais com código por trás, publicáveis em um link para testar no celular. Você não precisa ler o código para mostrar o protótipo a clientes. Saber programar passa a importar depois, quando o protótipo vira produto e alguém precisa manter e corrigir o que foi gerado.",
    },
    {
      question: "Qual a melhor ferramenta de IA para prototipar produto?",
      answer:
        "Depende do que você quer mostrar. Para app ou sistema completo, o Lovable gera telas, banco e login de uma vez. Para interfaces, landing pages e dashboards, o v0 é rápido e tem plano gratuito. Para quem já desenha no Figma, o Figma Make aproveita o design existente, mas só existe nos planos pagos. Para objeto físico, geradores de imagem como ChatGPT, Gemini e Canva criam renders.",
    },
    {
      question: "Prototipar com IA é gratuito?",
      answer:
        "Dá para fazer o primeiro protótipo sem pagar. O Lovable oferece 5 créditos de construção por dia (até 30 por mês) no plano gratuito, e o v0 tem plano Free com US$ 5 em créditos mensais e limite de 7 mensagens por dia, conforme verificado em 27/09/2026. O Figma Make exige plano pago. Para uso contínuo, consulte a página oficial de cada ferramenta.",
    },
    {
      question: "Protótipo feito com IA serve para produto físico?",
      answer:
        "Serve para a etapa de interesse: renders realistas gerados a partir de descrição ou de esboço fotografado ajudam a perguntar ao público se compraria e por quanto. Não serve para testar ergonomia, encaixe, resistência ou segurança. Depois que o render confirma interesse, um protótipo físico real continua necessário, principalmente em itens que envolvem normas, como brinquedos e produtos elétricos.",
    },
    {
      question: "Quanto tempo leva para prototipar uma ideia com IA?",
      answer:
        "Uma tarde para a primeira rodada: cerca de 30 minutos para escrever o problema, 1 hora para gerar as três telas principais, 2 horas para testar com cinco pessoas do público e 1 hora para ajustar. Duas rodadas em um dia costumam resolver os erros grosseiros. O que consome mais tempo não é a ferramenta, é conseguir as cinco pessoas certas para testar.",
    },
  ],
};
