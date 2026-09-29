import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "make-ou-zapier-qual-automacao-com-ia-vale-mais-a-pena",
  title: "Make ou Zapier: qual automação com IA vale mais a pena",
  seoTitle: "Make ou Zapier: qual automação com IA escolher",
  excerpt:
    "Make ou Zapier para automatizar com IA sem programar: comparamos preço, curva de aprendizado e recursos de IA de cada um, com valores verificados.",
  metaDescription:
    "Make ou Zapier: comparativo com preços verificados, tabela de recursos de IA, exemplo real em reais e os erros mais comuns de quem está começando.",
  category: "ferramentas",
  date: "2026-09-28",
  readTime: 9,
  imageQuery: "workflow automation diagram screen",
  seed: 95,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Make cobra por operação e tem plano gratuito mais generoso; Zapier cobra por tarefa e é mais simples para quem nunca automatizou nada.",
    "Os dois já têm construção de fluxo por IA (Maia no Make, Copilot no Zapier) e agentes de IA em beta, com preços e limites verificados em 28/09/2026.",
    "Para quem está começando, o critério que decide não é preço nem IA: é a curva de aprendizado, porque um fluxo mal montado custa mais tempo do que qualquer plano pago.",
  ],
  content: `
    <p>Make ou Zapier é a primeira dúvida de quem quer automatizar tarefas repetitivas com IA sem escrever código. Os dois fazem a mesma promessa: ligar aplicativos que não conversam entre si, poupando o trabalho de copiar dado de um lugar para outro. A diferença está em como cada um cobra, como organiza o fluxo na tela e o quanto a IA já vem embutida.</p>

    <p>Este guia compara os dois de forma direta, com preços conferidos nas páginas oficiais em 28 de setembro de 2026, uma tabela com os pontos que pesam na decisão e um exemplo de negócio brasileiro com números em reais. No fim você sabe por qual dos dois começar.</p>

    <h2>O que Make e Zapier fazem, na prática</h2>

    <p>Os dois são ferramentas de automação sem código: você escolhe um gatilho (algo que acontece num aplicativo, como "novo pedido na loja") e uma sequência de ações que rodam sozinhas depois disso (registrar numa planilha, mandar mensagem no WhatsApp, criar tarefa). Nenhum dos dois decide sozinho o que fazer fora do roteiro montado, o que os diferencia de um agente de IA autônomo. O artigo sobre <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">agente de IA, chatbot ou automação</a> explica essa fronteira.</p>

    <p>O Zapier nasceu em 2011 com lógica linear: gatilho, depois passo 1, passo 2, passo 3, numa lista de cima para baixo. O Make (que já se chamou Integromat) usa um canvas visual, com os módulos ligados por linhas, parecido com um mapa mental. O canvas deixa mais fácil ver um fluxo com ramificações, enquanto a lista do Zapier é mais rápida de montar quando o caminho é reto. Quem já usa o Notion para organizar a base de clientes encontra um passo a passo pronto no guia <a href="/artigos/notion-zapier-e-ia-automatize-seu-negocio-sem-programar">Notion, Zapier e IA</a>.</p>

    <h2>Preço: como cada um cobra e quanto custa de verdade</h2>

    <p>O Zapier cobra por tarefa: cada ação concluída consome uma tarefa, e o gatilho não conta. O Make cobra por operação ("crédito"): cada módulo executado, incluindo o gatilho, consome um crédito. São unidades diferentes, mas dá pra comparar o que cada plano permite fazer.</p>

    <table>
      <thead>
        <tr><th>Plano</th><th>Make</th><th>Zapier</th></tr>
      </thead>
      <tbody>
        <tr><td>Gratuito</td><td>1.000 créditos/mês, cenários ilimitados (só 2 ativos ao mesmo tempo)</td><td>100 tarefas/mês, Zaps limitados a 2 passos</td></tr>
        <tr><td>Primeiro plano pago</td><td>Core: US$ 12/mês no anual, 10 mil créditos</td><td>Professional: US$ 19,99/mês no anual (US$ 29,99 no mensal), a partir de 750 tarefas</td></tr>
        <tr><td>Plano intermediário</td><td>Pro: US$ 21/mês no anual, mesmos 10 mil créditos com execução prioritária e logs completos</td><td>Team: a partir de US$ 69/mês no anual, 2.000 tarefas, até 25 usuários</td></tr>
        <tr><td>Empresarial</td><td>Enterprise: preço sob consulta</td><td>Enterprise: preço sob consulta</td></tr>
      </tbody>
    </table>

    <p>Preços verificados na página oficial do <a href="https://www.make.com/en/pricing" rel="noopener noreferrer">Make</a> e na página oficial do <a href="https://zapier.com/pricing" rel="noopener noreferrer">Zapier</a> em 28/09/2026. No plano Free, o Zapier só permite Zaps de dois passos, o que já deixa de fora quase qualquer fluxo com IA no meio. O Make Free aceita cenários com vários módulos desde o início, o que ajuda quem quer testar antes de pagar qualquer coisa.</p>

    <h2>Curva de aprendizado: qual é mais fácil pra quem nunca automatizou nada</h2>

    <p>Para quem está começando do zero, o Zapier costuma ser mais rápido de entender na primeira hora. A lista vertical de passos segue a lógica de "primeiro isso, depois aquilo", parecida com uma receita, e a maioria dos tutoriais em português usa o Zapier como referência. O Make exige um pouco mais de tempo, porque o canvas mostra módulos, filtros e roteadores ao mesmo tempo, o que assusta quem nunca viu um fluxograma de automação.</p>

    <p>Essa vantagem do Zapier se inverte quando o fluxo cresce. Um processo com três caminhos possíveis (se o pedido for urgente, dúvida ou reclamação) fica mais claro no canvas do Make, com ramificações visíveis, do que numa lista longa de "se isso, então aquilo". Quem já monta fluxos de rotina se beneficia do guia <a href="/artigos/automacao-com-ia-economize-horas-de-trabalho">automação com IA para economizar horas de trabalho</a>, e o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist de como escolher ferramenta de IA com segurança</a> ajuda a decidir antes de conectar contas de verdade.</p>

    <h3>Sinais de que o Zapier é mais fácil para você</h3>

    <ul class="checklist">
      <li>Você nunca montou nenhuma automação antes.</li>
      <li>O fluxo que você precisa é curto, sem muitos "se isso, então aquilo".</li>
      <li>Você quer seguir um tutorial em português passo a passo sem adaptar muita coisa.</li>
    </ul>

    <h3>Sinais de que o Make compensa o esforço extra</h3>

    <ul class="checklist">
      <li>Seu fluxo tem ramificações (categorias diferentes que seguem caminhos diferentes).</li>
      <li>Você quer testar bastante antes de pagar, e precisa de mais de dois passos no gratuito.</li>
      <li>Você lida com muitas execuções por mês e o custo por operação pesa na conta.</li>
    </ul>

    <h2>Recursos de IA: o que cada plataforma já entrega</h2>

    <p>Os dois passaram 2025 e 2026 empurrando IA para dentro do produto, não só como ação a mais no fluxo, mas como forma de montar o fluxo. No <a href="https://www.make.com/en/ai-automation" rel="noopener noreferrer">Make</a>, o assistente Maia permite descrever em linguagem natural o que você quer automatizar e recebe um rascunho de cenário pronto para ajustar. O Make também tem "AI Agents" em beta, que atuam sobre objetivos e dados em tempo real com registro passo a passo do raciocínio, e dá acesso a centenas de aplicativos de IA generativa (Claude, GPT, Gemini) como módulos dentro do cenário.</p>

    <p>No <a href="https://zapier.com/agents" rel="noopener noreferrer">Zapier</a>, o Copilot cumpre o papel do Maia: você conversa e ele monta o Zap. O recurso separado Zapier Agents entrega agentes que atuam em mais de 9 mil aplicativos, cobrados por atividade (não por tarefa), com plano gratuito de 400 atividades por mês. Copilot e AI by Zapier (campos e ações de IA dentro de um Zap comum) já vêm incluídos nos planos pagos, sem custo separado.</p>

    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Geração de fluxo por IA economiza o primeiro rascunho, mas raramente entrega o fluxo pronto para produção. Trate o resultado do Maia ou do Copilot como ponto de partida e revise campo por campo antes de ligar de vez.</p></div>

    <p>Quem ainda hesita entre qual modelo de IA usar dentro do fluxo encontra um comparativo direto em <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini: qual IA escolher</a>. E se o objetivo final é atender clientes automaticamente, o guia <a href="/artigos/como-criar-chatbot-de-atendimento-para-seu-site-sem-programar">como criar chatbot de atendimento sem programar</a> mostra onde o Make ou o Zapier entram nesse tipo de projeto.</p>

    <h2>Para quem serve cada um</h2>

    <p>O Zapier serve melhor quem administra um pequeno negócio sozinho, precisa de resultado rápido e não tem tempo de estudar um canvas antes de automatizar o primeiro processo. É também a escolha mais fácil para seguir um tutorial pronto, porque a maioria foi escrita pensando na interface dele.</p>

    <p>O Make serve melhor quem já automatizou algo antes, lida com fluxos de mais de um caminho ou roda um volume alto de execuções por mês, onde o custo por operação pesa na conta. Também é a escolha mais barata para testar bastante antes de comprometer dinheiro, já que o plano gratuito aceita fluxos completos, não só de dois passos.</p>

    <h2>Exemplo brasileiro: pet shop com entregas e agendamento</h2>

    <p>Cenário ilustrativo, montado para mostrar as contas, não um caso que acompanhamos de perto. Marcos tem um pet shop com serviço de banho e tosa em Curitiba e recebe pedidos de agendamento pelo WhatsApp Business e pelo formulário do site, cerca de 90 por mês. Ele perdia uns 20 minutos por pedido organizando data, horário e disponibilidade numa planilha, quase 30 horas por mês.</p>

    <p>Ele montou o fluxo no Make: o formulário dispara o cenário, um módulo de IA lê a mensagem e extrai serviço, data e horário preferido, um roteador separa "horário livre" de "ocupado" e o Google Agenda recebe o agendamento confirmado ou uma mensagem pedindo novo horário. Cada pedido consome cerca de 4 créditos; 90 pedidos por mês dão perto de 360, dentro dos 1.000 do plano Free. Custo mensal: R$ 0. Ele levou uma tarde para montar e duas noites ajustando o prompt até a IA parar de confundir "sábado de manhã" com "sábado à tarde".</p>

    <p>Se Marcos preferisse o Zapier pela interface mais simples, precisaria do Professional, porque o fluxo tem mais de dois passos: US$ 19,99 por mês no anual (verificado em 28/09/2026), valor que em reais varia com o câmbio do cartão. Com o tempo que sobrou, ele passou a responder agendamentos em uns 5 minutos em vez de 20, e usou parte das horas livres para revisar preços com o guia <a href="/artigos/como-precificar-produtos-e-servicos-com-ia">como precificar produtos e serviços com IA</a> e organizar o estoque com o <a href="/artigos/como-usar-ia-para-gerenciar-estoque-pequeno-comercio">guia de gestão de estoque com IA para pequeno comércio</a>.</p>

    <h2>Erros comuns ao escolher entre Make e Zapier</h2>

    <p>O erro mais comum é escolher pela fama, não pelo fluxo: muita gente entra direto no Zapier por ser o nome mais conhecido e descobre depois que o fluxo com IA não cabe no plano gratuito. O segundo erro é subestimar quantas execuções o negócio gera por mês; quem estima 50 pedidos e recebe 300 estoura a cota e o fluxo para, sem aviso.</p>

    <ul>
      <li><strong>Não monte o fluxo direto em produção.</strong> Teste com cinco a dez casos reais antes de deixar rodando sozinho.</li>
      <li><strong>Não conecte contas inteiras.</strong> Autorize só a planilha, pasta ou base de dados que o fluxo usa, nunca a conta toda.</li>
      <li><strong>Não deixe dado sensível passar pela IA sem necessidade.</strong> CPF, saúde e dado financeiro exigem cuidado extra; o <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">artigo sobre IA e privacidade</a> mostra o que costuma vazar sem a pessoa perceber.</li>
      <li><strong>Não troque de ferramenta por impulso.</strong> Migrar um cenário do Make para o Zapier é refazer boa parte do trabalho, porque a lógica de módulos não é a mesma.</li>
    </ul>

    <h2>Quando nenhum dos dois é o caminho certo</h2>

    <p>Se o processo envolve decisão com dinheiro (aprovar reembolso, assinar contrato, dar desconto), nem Make nem Zapier devem executar essa parte sozinhos: a IA prepara o rascunho, uma pessoa aprova. Se o volume de tarefas repetitivas ainda é baixo (menos de 20 por mês), o tempo de montar e testar o fluxo pode superar o que ele economiza nas primeiras semanas; nesse caso, vale mais aprender o básico de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">prompt engineering</a> e resolver na mão. Depois que o fluxo já roda redondo, dá para pensar em <a href="/artigos/como-ganhar-dinheiro-vendendo-automacoes-prontas-com-ia">vender automações prontas</a> ou montar <a href="/artigos/como-vender-pacotes-de-automacao-de-ia-para-negocios-locais">pacotes de automação para negócios locais</a>.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Fluxo que fala direto com cliente (WhatsApp, e-mail, SMS) precisa de um jeito rápido de pausar. Se o roteador confundir uma categoria e disparar mensagem errada, alguém tem que conseguir desligar em segundos, não em minutos.</p></div>

    <h2>Como decidir hoje</h2>

    <p>Se você nunca automatizou nada, comece pelo Zapier: a curva de aprendizado menor compensa o plano gratuito mais apertado. Se o seu fluxo já nasce com ramificações ou você prevê volume alto de execuções, o Make paga o esforço extra de aprender o canvas logo na primeira fatura que você não vai pagar.</p>

    <p>Os dois têm plano gratuito, então o teste real custa só o seu tempo: monte o mesmo fluxo pequeno nos dois e siga com o que fizer mais sentido. Para o próximo passo, a categoria <a href="/categoria/ferramentas">Ferramentas</a> reúne os outros guias que mostram como ligar IA a cada parte do seu negócio.</p>
  `,
  faq: [
    {
      question: "Make ou Zapier é gratuito?",
      answer:
        "Sim, os dois têm plano gratuito sem cartão de crédito. O Make Free dá 1.000 créditos por mês com cenários de vários passos, mas só dois ativos ao mesmo tempo. O Zapier Free dá 100 tarefas por mês, porém limitadas a Zaps de dois passos, o que deixa de fora a maioria dos fluxos com IA no meio (verificado em 28/09/2026).",
    },
    {
      question: "Make ou Zapier tem mais recursos de IA?",
      answer:
        "Os dois têm geração de fluxo por conversa (Maia no Make, Copilot no Zapier) e agentes de IA em beta. O Make integra mais de 400 aplicativos de IA generativa como módulos dentro do cenário; o Zapier separa os agentes em um produto próprio, cobrado por atividade, com 400 atividades grátis por mês. Nenhum dos dois substitui revisão humana no resultado.",
    },
    {
      question: "Dá para automatizar sem saber programar no Make ou no Zapier?",
      answer:
        "Dá, sim. Os dois funcionam com blocos visuais: você escolhe o gatilho, arrasta as ações e preenche os campos clicando, sem escrever código. Saber lógica básica ajuda a organizar condições mais complexas, mas o fluxo padrão (formulário, IA, registro, aviso) se monta inteiro na interface.",
    },
    {
      question: "Quanto custa automatizar com IA usando Make ou Zapier?",
      answer:
        "Depende do volume. Um negócio pequeno com até 200 execuções por mês costuma caber no Make Free (1.000 créditos) ou precisa do Zapier Professional a partir de US$ 19,99 por mês no anual (verificado em 28/09/2026), já que o Free do Zapier não aceita fluxos com IA no meio. O valor em reais varia com o câmbio e o IOF do cartão usado.",
    },
    {
      question: "Make e Zapier funcionam em português?",
      answer:
        "A interface dos dois é em inglês (o Zapier tem parte traduzida para português em algumas telas). Isso não impede o uso: os prompts de IA dentro do fluxo podem ser escritos em português normalmente, e a maioria dos tutoriais e comunidades brasileiras usa print e explicação em português mesmo com o menu em inglês.",
    },
    {
      question: "Vale a pena migrar do Zapier para o Make ou o contrário?",
      answer:
        "Só quando o motivo é claro: custo por operação subindo demais no Zapier, ou necessidade de fluxos com ramificações que o canvas do Make resolve melhor. Migrar significa remontar o cenário do zero, porque a lógica de módulos não é compatível. Para quem já tem um fluxo funcionando bem, trocar de ferramenta raramente compensa o tempo perdido.",
    },
  ],
};
