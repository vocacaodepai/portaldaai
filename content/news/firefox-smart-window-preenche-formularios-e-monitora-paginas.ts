import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "firefox-smart-window-preenche-formularios-e-monitora-paginas",
  title: "Firefox ganha IA que preenche formulários e vigia páginas por você",
  summary:
    "O Smart Window do Firefox agora preenche formulários com dados das suas abas e monitora páginas atrás de promoções e vagas. Beta só nos EUA e Canadá.",
  author: "Bruno Danello",
  sourceName: "Mozilla, The Verge",
  sourceUrl: "https://www.theverge.com/ai-artificial-intelligence/1019551/firefox-smart-window-ai-fill-forms",
  date: "2026-10-27",
  publishedAt: "2026-10-27T16:45:00-03:00",
  topic: "lancamentos",
  imageQuery: "Firefox browser logo",
  content: `
    <p>A Mozilla atualizou nesta terça-feira (27) o Smart Window, a experiência de navegação com inteligência artificial do Firefox, com dois recursos novos: preencher formulários da web a partir das informações das abas que você escolher e vigiar páginas em busca de mudanças, como uma promoção ou uma vaga nova. A novidade foi publicada no blog da própria Mozilla e noticiada pelo The Verge. Esta matéria é uma análise própria a partir desses relatos; o crédito das fontes está no fim do texto.</p>

    <p>O Smart Window é opcional: só quem decide usar o recurso passa a ter a IA dentro do navegador. As duas funções chegam primeiro ao beta do Smart Window no computador, em inglês, para usuários dos Estados Unidos e do Canadá. A Mozilla diz que elas chegam a outros mercados nos próximos meses, sem data fechada para o Brasil.</p>

    <h2>Como funciona o preenchimento com IA</h2>
    <p>A ideia é aproveitar o que já está aberto no seu navegador. A Mozilla dá como exemplo uma candidatura de emprego: o formulário pede o histórico profissional, e o Smart Window pode puxar essas informações do seu portfólio online ou do seu perfil profissional, desde que a página esteja numa aba. Também pode servir para rascunhar a resposta de perguntas abertas, do tipo &quot;conte sobre uma situação em que você...&quot;, ou para preencher uma minibiografia em inscrição de evento.</p>

    <p>Para usar, basta clicar em um campo do formulário. Se a página tiver pelo menos quatro campos de texto que o Smart Window consiga ajudar a preencher, aparece a opção &quot;Fill from sources&quot; (preencher a partir de fontes) no menu, com uma página de origem recomendada. Você pode abrir o ícone de lápis para editar as fontes, trocando ou adicionando abas. Depois de escolher, o navegador gera sugestões, e você revisa tudo antes de preencher. A Mozilla afirma que o Smart Window não envia o formulário por você e que o texto pode ser editado antes.</p>

    <p>O preenchimento tradicional do Firefox continua separado. Dados salvos, como nome e endereço, seguem sendo inseridos pelo autopreenchimento comum, sem depender de modelos de IA. A função nova, por enquanto, só funciona em campos de texto: a empresa estuda suportar menus suspensos e formulários em PDF, além de formas de salvar e gerenciar as informações geradas para formulários futuros. Hoje, nenhum dado de preenchimento gerado é guardado.</p>

    <h2>O que acontece com seus dados</h2>
    <p>Este é o ponto que mais merece atenção. Segundo a Mozilla, quando você usa o recurso, as informações das páginas de origem escolhidas são compartilhadas com o Gemini 3.1 Flash Lite, o modelo do Google usado para detectar os campos e extrair o que for relevante das abas. A escolha de modelo que você faz para o chat do Smart Window não muda por causa disso, e os valores de autofill salvos permanecem no seu aparelho.</p>

    <p>Na prática, isso significa que um currículo, um perfil ou qualquer página que você marcar como fonte sai do computador e passa por um modelo de uma terceira empresa. A Mozilla deixa a escolha com o usuário: você seleciona quais abas entram e pode tirar as que não quer. Mesmo assim, vale tratar a lista de fontes como uma decisão de privacidade, e não como um detalhe de conveniência.</p>

    <h2>O novo modo de vigiar páginas</h2>
    <p>A segunda novidade é o monitoramento. Você digita &quot;/watch&quot; no chat do Smart Window, descreve o que procura, indica as páginas e escolhe se o Firefox deve checar diariamente ou toda semana. Os exemplos da Mozilla são um item entrando em promoção e uma vaga nova com determinado cargo ou nome de empresa que você acompanha.</p>

    <p>Os limites são claros. Cada tarefa pode acompanhar até cinco páginas, e é possível manter até 15 tarefas ativas ao mesmo tempo, com opção de editar, pausar ou apagar. As checagens só acontecem enquanto o navegador está aberto, ou seja, não é um serviço que roda em segundo plano na nuvem. Quando há uma correspondência, o aviso aparece no botão Tasks da barra de ferramentas e, se você ativar as notificações do desktop, também como alerta na tela. Se passarem 60 dias sem mudança que combine com o pedido, a tarefa é pausada; aos 90 dias, o Firefox para de checar de vez.</p>

    <p>Para identificar as mudanças que combinam com o que você pediu, a Mozilla informa que o monitoramento usa o modelo Qwen, da Alibaba, também sem alterar o modelo que você escolheu para o chat. É um detalhe técnico, mas relevante: dois recursos do mesmo navegador usam dois fornecedores diferentes de IA.</p>

    <h2>Onde isso se encaixa na briga dos navegadores com IA</h2>
    <p>O movimento faz parte de uma corrida que já cobrimos aqui. A Perplexity levou o <a href="/noticias/perplexity-comet-navegador-ia-disponivel-todos-usuarios-ios">Comet a todos os usuários</a>, a Opera propôs o <a href="/noticias/opera-webai-padrao-web-ia-local-navegador">WebAI para rodar IA local no navegador</a> e startups como a <a href="/noticias/strada-automacao-navegador-portais-seguradoras-sem-api">Strada</a> automatizam tarefas em portais que não têm API. A aposta do Firefox é mais cautelosa: IA opcional, passo a passo visível, revisão humana antes de enviar e limites explícitos de uso.</p>

    <p>Essa cautela é coerente com a imagem da Mozilla, mas também revela o estágio do mercado. Agentes que agem sozinhos no navegador ainda geram desconfiança, principalmente em formulários, onde um erro pode virar uma candidatura com dado errado ou uma inscrição indevida. Deixar a decisão final com o usuário reduz o risco, ao custo de menos automação.</p>

    <h2>Por que isso importa para você</h2>
    <p>Mesmo que o recurso ainda não esteja disponível em português nem no Brasil, ele mostra para onde vai o dia a dia de quem procura emprego, compra online ou toca um pequeno negócio:</p>
    <ul>
      <li><strong>Candidaturas mais rápidas, mas que exigem revisão.</strong> Preencher o histórico profissional com IA economiza tempo, porém o texto gerado pode errar datas e cargos. Antes de enviar qualquer coisa, confira com o seu currículo. O guia sobre <a href="/artigos/adaptar-curriculo-para-cada-vaga-com-ia-palavras-da-vaga-sem-inventar">como adaptar o currículo para cada vaga com IA sem inventar</a> vale também para formulários.</li>
      <li><strong>Caça a vagas e promoções no piloto automático.</strong> Monitorar até cinco páginas por tarefa ajuda a não perder uma vaga nova ou uma queda de preço. Se você está em transição de carreira, pode combinar isso com a preparação do <a href="/artigos/como-se-preparar-para-entrevistas-de-emprego-usando-ia">roteiro de entrevistas com IA</a>.</li>
      <li><strong>Privacidade vira escolha ativa.</strong> Dar abas como fonte significa enviar o conteúdo delas a um modelo externo. Nada de usar páginas com dados de clientes, documentos ou informações sensíveis. O texto <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade: o que você entrega sem perceber</a> ajuda a revisar esse hábito.</li>
      <li><strong>Atenção à LGPD em negócios.</strong> Quem lida com dados de terceiros precisa saber para onde eles vão. O <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">checklist de LGPD para pequenos negócios que usam IA</a> é um bom ponto de partida antes de liberar qualquer ferramenta nova na equipe.</li>
    </ul>

    <div class="callout-box callout-tip">
      <span class="callout-label">Dica prática</span>
      <p>Se você puder testar o Smart Window, comece com formulários de baixo risco, como a inscrição em um evento, e use como fonte só páginas públicas, como o seu portfólio. Compare sempre o resultado com o original antes de enviar e evite usar o recurso em formulários de banco, governo ou saúde.</p>
    </div>

    <h2>O que observar a seguir</h2>
    <p>O primeiro ponto é a chegada a mais países e idiomas: a Mozilla fala em &quot;próximos meses&quot;, sem citar o português. O segundo é a evolução do recurso, com suporte a menus suspensos e PDFs, que são justamente o formato de muitos formulários de emprego e de serviços públicos. O terceiro é a reação dos usuários à ideia de enviar o conteúdo das abas a modelos do Google e da Alibaba, mesmo de forma opcional. Por enquanto, o essencial é este: o Firefox passou a oferecer, em beta e em inglês, uma IA que ajuda a preencher formulários e a vigiar páginas, com revisão humana, limites de uso e a escolha das fontes na mão do usuário.</p>
  `,
};
