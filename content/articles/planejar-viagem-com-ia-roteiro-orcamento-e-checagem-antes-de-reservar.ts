import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "planejar-viagem-com-ia-roteiro-orcamento-e-checagem-antes-de-reservar",
  title: "Planejar viagem com IA: roteiro, orçamento e checagem",
  seoTitle: "Planejar viagem com IA: roteiro e orçamento",
  excerpt:
    "Aprenda a planejar viagem com IA: peça roteiro por bairro, monte orçamento em três cenários, use prompts prontos e confira preços e horários antes de reservar.",
  metaDescription:
    "Planejar viagem com IA no Gemini ou ChatGPT: prompts prontos para roteiro, orçamento e checklist, exemplo com números em reais e como checar tudo antes de reservar.",
  category: "iniciantes",
  articleSubcategory: "vida-pratica",
  date: "2026-10-23",
  readTime: 7,
  imageQuery: "traveler map suitcase planning",
  seed: 572,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "A IA é boa para montar a primeira versão do roteiro, agrupar passeios por região e calcular orçamento, desde que você informe datas, verba e estilo de viagem.",
    "Preço, horário de funcionamento e documentação podem estar desatualizados ou errados na resposta: tudo isso precisa ser conferido em fonte oficial antes de pagar.",
    "A reserva continua sendo feita por você: o Gemini, segundo a página oficial, redireciona para a finalização e não conclui a compra sozinho.",
  ],
  content: `
    <p>Para planejar uma viagem com IA, diga ao assistente destino, datas, verba, quem viaja e o ritmo que você quer, e peça um roteiro por bairro, um orçamento em três cenários e um checklist de documentos. A IA entrega um rascunho em minutos. O que ela não entrega é garantia de que preço, horário e regra de entrada estão certos: isso você confere antes de reservar.</p>

    <p>Este guia mostra a ordem que funciona, com prompts prontos para copiar, um exemplo de fim de semana com números em reais e uma lista de checagem para não cair em furo nem em golpe. Serve para o Gemini, o ChatGPT ou qualquer assistente de conversa.</p>

    <h2>O que a IA faz bem e mal no planejamento de viagem</h2>

    <p>A página do Gemini sobre <a href="https://gemini.google/br/discover/ai-trip-planner/" target="_blank" rel="noopener noreferrer">planejamento de viagem</a> descreve o que o produto se propõe a fazer: procurar voos e hotéis em serviços do Google, montar itinerários agrupados por bairro e ajustar planos durante a viagem. A mesma página avisa que a disponibilidade varia por país, que alguns recursos são para maiores de 18 anos e que as respostas devem ser sempre checadas.</p>

    <p>Na prática, a IA vai bem em três tarefas: organizar (distribuir atrações por dia e região), comparar (hotel perto do centro contra hotel barato e afastado) e lembrar (checklist de mala e documentos). Vai mal em dado que muda rápido: preço de passagem, horário de museu em feriado, regra de visto, fechamento por obra. Trate o resultado como esboço de um amigo bem-informado, nunca como agência.</p>

    <h2>Passo a passo para montar o plano</h2>

    <p>O guia do <a href="https://canaltech.com.br/apps/como-usar-o-gemini-para-criar-roteiros-e-orcamentos-de-viagem/" target="_blank" rel="noopener noreferrer">Canaltech sobre roteiros e orçamentos com o Gemini</a> sugere uma sequência lógica, e ela funciona em qualquer ferramenta:</p>

    <ol>
      <li>Peça que a IA faça perguntas antes de montar o plano (datas, verba, estilo, restrições).</li>
      <li>Defina limites de transporte e hospedagem: preço máximo, número de escalas, região.</li>
      <li>Peça o roteiro por dia, com bairros e horários-chave para refeição e pausa.</li>
      <li>Peça o orçamento em tabela, por categoria e por dia.</li>
      <li>Peça o checklist de mala e documentos.</li>
    </ol>

    <p>Mantenha tudo na mesma conversa, para a IA não perder o contexto. Se você ainda está pegando o jeito de pedir, o guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">como escrever comandos que funcionam</a> ajuda a fazer pedidos mais claros.</p>

    <h2>Prompts prontos para copiar</h2>

<pre><code>Aja como um agente de viagens. Antes de montar o roteiro, me faça todas as perguntas necessárias sobre datas, verba, quem viaja, ritmo e restrições. Faça uma pergunta por vez.</code></pre>

<pre><code>Monte um roteiro de 3 dias em [cidade], para [número] pessoas, com verba total de R$ [valor]. Agrupe as atrações por bairro, deixe a tarde do último dia livre e indique um plano B para chuva. Marque com asterisco tudo que eu preciso confirmar (horário, preço, reserva).</code></pre>

<pre><code>Transforme esse roteiro em uma tabela de orçamento com três cenários: econômico, equilibrado e confortável. Separe transporte, hospedagem, alimentação, passeios e imprevistos (10%). Diga quais números são estimativas.</code></pre>

    <p>O pedido para marcar o que precisa de confirmação é o mais valioso: ele obriga a IA a separar o que ela sabe do que está supondo. Se quiser guardar o orçamento organizado, passe a tabela para uma planilha, como mostra o texto sobre <a href="/artigos/ia-para-planilhas-automatizar-relatorios-excel-sheets">IA para planilhas</a>.</p>

    <h2>Exemplo: fim de semana de 3 dias para uma família de 3</h2>

    <p>Digamos que a família Souza, de Belo Horizonte, queira passar um feriado de três dias no litoral do Rio de Janeiro, de carro, com verba de R$ 3.000 para tudo. Os valores abaixo são um exemplo didático para mostrar a conta, não preços reais de nenhum lugar.</p>

    <table>
      <thead><tr><th>Item</th><th>Econômico</th><th>Equilibrado</th><th>Confortável</th></tr></thead>
      <tbody>
        <tr><td>Combustível e pedágio (ida e volta)</td><td>R$ 700</td><td>R$ 700</td><td>R$ 700</td></tr>
        <tr><td>Hospedagem (2 noites)</td><td>R$ 600</td><td>R$ 1.000</td><td>R$ 1.500</td></tr>
        <tr><td>Alimentação (3 dias)</td><td>R$ 600</td><td>R$ 800</td><td>R$ 1.100</td></tr>
        <tr><td>Passeios</td><td>R$ 200</td><td>R$ 300</td><td>R$ 500</td></tr>
        <tr><td>Imprevistos (10%)</td><td>R$ 210</td><td>R$ 280</td><td>R$ 380</td></tr>
        <tr><td>Total</td><td>R$ 2.310</td><td>R$ 3.080</td><td>R$ 4.180</td></tr>
      </tbody>
    </table>

    <p>A tabela já entrega uma decisão: o cenário equilibrado estoura a verba em R$ 80, então a família escolhe o econômico ou corta um passeio. Esse tipo de conta rápida é o melhor uso da IA. Cada número, porém, precisa ser trocado pelo valor real depois da pesquisa nos sites de hospedagem e no seu trajeto.</p>

    <h2>Use o celular durante a viagem</h2>

    <p>Segundo a página do Gemini, ele pode ajudar a ajustar o plano quando algo muda, como um lugar fechado ou chuva, e buscar alternativas no Google Maps. Quem quer explorar esse lado pode ver como funcionam os <a href="/artigos/apps-conectados-do-gemini-agenda-maps-e-youtube-como-usar">apps conectados do Gemini</a>, e o <a href="/artigos/gemini-live-com-camera-e-tela-como-usar-no-celular">Gemini Live com câmera</a> traduz placas e cardápios em viagem. Antes de ligar essas conexões, leia o que cada uma pode ver da sua conta no texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">privacidade e IA</a>.</p>

    <h2>Como checar tudo antes de reservar</h2>

    <ul class="checklist">
      <li>Preço e disponibilidade: confirme direto no site da companhia aérea, do hotel ou da locadora, não na resposta da IA.</li>
      <li>Horário e dia de funcionamento: abra a página oficial do passeio ou o Google Maps, olhando o dia exato da visita.</li>
      <li>Documentos: viagem ao exterior exige checar passaporte, visto e regras sanitárias em fonte oficial do país de destino.</li>
      <li>Prestadores de turismo: guias, agências e hospedagens podem ser consultados no <a href="https://cadastur.turismo.gov.br/" target="_blank" rel="noopener noreferrer">Cadastur, do Ministério do Turismo</a>, o sistema de cadastro de prestadores do setor.</li>
      <li>Avaliações: leia as mais recentes e as piores, não só a nota.</li>
      <li>Cancelamento: veja a política antes de pagar e guarde o comprovante.</li>
    </ul>

    <p>Quando uma resposta parecer boa demais, desconfie. O guia sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a> mostra como pedir a fonte e testar a resposta.</p>

    <h2>Erros comuns e golpes de viagem</h2>

    <p>O primeiro erro é aceitar o roteiro apertado: IA tende a encaixar muita coisa por dia. Peça folga de duas horas e uma tarde livre. O segundo é reservar por link que apareceu em anúncio ou em mensagem de desconhecido. Golpe de hospedagem com preço muito baixo e pagamento por Pix para pessoa física é conhecido, e o texto sobre <a href="/artigos/como-usar-ia-para-checar-mensagem-suspeita-e-evitar-golpes">como checar mensagem suspeita</a> mostra sinais de alerta. Se cair em um, siga o passo a passo do <a href="/artigos/golpe-do-pix-o-que-fazer-nas-primeiras-horas-med-e-uso-de-ia">golpe do Pix nas primeiras horas</a>.</p>

    <p>O terceiro erro é pagar sem comparar. As dicas de <a href="/artigos/comprar-na-black-friday-comparar-precos-evitar-golpe-e-arrependimento">comparar preços e evitar arrependimento</a> valem também para passagem e hotel. E proteja as contas que guardam suas reservas com <a href="/artigos/chave-de-acesso-passkey-como-ativar-e-proteger-sua-conta-de-golpes">chave de acesso</a>.</p>

    <h2>Qual assistente usar?</h2>

    <p>Qualquer um serve para o rascunho. A diferença está na integração: o Gemini conversa com serviços do Google, como Maps e busca de hotéis e voos, enquanto outros assistentes dependem do que você cola na conversa. Se ainda está escolhendo, veja o comparativo <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini</a>. A versão gratuita costuma bastar para um roteiro simples; planos pagos, como os explicados em <a href="/artigos/google-ai-plus-pro-ou-ultra-qual-plano-do-gemini-escolher">Google AI Plus, Pro ou Ultra</a>, só valem se você usa muito.</p>

    <p>Na próxima viagem, comece pelo primeiro prompt desta página, deixe a IA fazer as perguntas e guarde o orçamento em planilha. Depois, passe um dia conferindo cada item marcado com asterisco. Esse trabalho de conferência é o que transforma um rascunho bonito em uma viagem sem susto.</p>
  `,
  faq: [
    {
      question: "A IA consegue montar um roteiro de viagem completo?",
      answer:
        "Consegue montar um bom rascunho: dias, bairros, passeios, refeições e plano B para chuva. O que ela não garante é a precisão de preço, horário e regra de entrada. Use o roteiro como ponto de partida e confirme cada item em fonte oficial.",
    },
    {
      question: "O Gemini reserva voo e hotel sozinho?",
      answer:
        "Segundo a página oficial do Gemini sobre planejamento de viagem, ele ajuda a procurar e comparar opções, mas redireciona para a finalização da reserva em vez de concluir a compra sozinho. Você revisa os dados e paga no site do fornecedor.",
    },
    {
      question: "Posso confiar no preço que a IA informa?",
      answer:
        "Não como valor final. Preços de passagem e hospedagem mudam por data, demanda e disponibilidade. Use a IA para estimar e comparar cenários, depois consulte o valor atual no site da companhia ou do hotel antes de decidir.",
    },
    {
      question: "Como saber se uma agência ou guia é regular?",
      answer:
        "Uma consulta útil é o Cadastur, sistema do Ministério do Turismo em que prestadores do setor se cadastram. Pesquise pelo nome ou CNPJ, confira se o serviço bate com o cadastro e desconfie de quem pede pagamento adiantado por Pix para pessoa física.",
    },
    {
      question: "Vale usar IA para viagem ao exterior?",
      answer:
        "Vale para organizar roteiro e orçamento. Para passaporte, visto, vacinas e seguro, use apenas fontes oficiais do país de destino e do governo brasileiro, porque regras mudam e um erro pode impedir o embarque.",
    },
  ],
};
