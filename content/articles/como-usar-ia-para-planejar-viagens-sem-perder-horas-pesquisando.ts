import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "como-usar-ia-para-planejar-viagens-sem-perder-horas-pesquisando",
  title: "IA para planejar viagens: como montar roteiro sem perder horas",
  seoTitle: "IA para planejar viagens: roteiro sem perder horas",
  excerpt:
    "Use IA para planejar viagens: roteiro dia a dia, orçamento estimado e apoio no celular, com 3 prompts prontos e o que conferir na fonte oficial.",
  metaDescription:
    "Aprenda a usar IA para planejar viagens: roteiro por dia, orçamento estimado, documentos e apoio durante a viagem, com prompts prontos e exemplo em reais.",
  category: "iniciantes",
  date: "2026-09-26",
  updated: "2026-09-27",
  readTime: 9,
  imageQuery: "travel planning map laptop suitcase",
  seed: 86,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Um assistente de IA monta o esqueleto da viagem (roteiro, orçamento aproximado, lista de bagagem) em uma conversa de 20 minutos, e você gasta o tempo que sobra decidindo o que importa.",
    "Preço de passagem, regra de visto e vacina obrigatória nunca vêm da IA: confira no Google Flights, no site da companhia e nas páginas oficiais do gov.br.",
    "O segredo está no contexto: destino, datas, orçamento, ritmo e quem viaja. Com isso, o roteiro sai em tabela por dia, com tempo de deslocamento e plano B para chuva.",
  ],
  content: `
    <p>Usar IA para planejar viagens resolve o problema clássico de quem viaja: vinte abas abertas, três planilhas e um roteiro que muda toda hora. Com um assistente como ChatGPT, Claude ou Gemini, você monta o esqueleto da viagem em uma conversa de 20 minutos e gasta o tempo que sobra decidindo o que importa de verdade: para onde ir, quanto gastar e o que não pode faltar.</p>

    <p>Este guia mostra o que a IA faz bem nessa tarefa (roteiro, estimativa de custo, lista de bagagem, apoio durante a viagem), o que ela faz mal (preço de passagem, regra de visto, horário de atração) e os prompts exatos para copiar. Vale tanto para o fim de semana em Campos do Jordão quanto para os 15 dias na Europa.</p>

    <h2>O que a IA consegue fazer ao planejar uma viagem (e o que não consegue)</h2>

    <p>Um assistente de IA generativa escreve a partir do que aprendeu em textos: guias, blogs, fóruns, sites de turismo. Ele é bom em organizar e combinar informação que existe em abundância (o que fazer em Lisboa, quanto tempo separar para o Pelourinho). Ele é ruim em qualquer coisa que muda toda semana: tarifa aérea, diária de hotel, horário de museu, exigência de visto. O <a href="/artigos/o-que-e-inteligencia-artificial-guia-completo">guia sobre o que é inteligência artificial</a> explica por que isso acontece; aqui basta guardar a regra: a IA rascunha, você confere.</p>

    <table>
      <thead>
        <tr>
          <th>Tarefa</th>
          <th>Dá para confiar na IA?</th>
          <th>Onde conferir</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Montar roteiro dia a dia</td>
          <td>Sim, como rascunho</td>
          <td>Site oficial de cada atração (horário e ingresso)</td>
        </tr>
        <tr>
          <td>Estimar orçamento diário</td>
          <td>Sim, como ordem de grandeza</td>
          <td>Preços reais nos sites de reserva</td>
        </tr>
        <tr>
          <td>Preço de passagem e hotel</td>
          <td>Não</td>
          <td>Google Flights, site da companhia, plataforma de reserva</td>
        </tr>
        <tr>
          <td>Visto, vacina e documentos</td>
          <td>Não</td>
          <td>Consulado do país e páginas do gov.br</td>
        </tr>
        <tr>
          <td>Lista de bagagem e checklist</td>
          <td>Sim</td>
          <td>Previsão do tempo da semana</td>
        </tr>
        <tr>
          <td>Traduzir cardápio, placa ou conversa</td>
          <td>Sim</td>
          <td>Bom senso em frases importantes (alergia, remédio)</td>
        </tr>
      </tbody>
    </table>

    <h2>Passo 1: dar o contexto certo antes de pedir qualquer roteiro</h2>

    <p>O erro mais comum é abrir o chat e digitar "monte um roteiro de 5 dias em Salvador". A resposta vai ser genérica porque o pedido é genérico. A IA não sabe se você viaja com criança de 3 anos, se odeia acordar cedo ou se o orçamento é de R$ 3 mil ou R$ 12 mil. Quem já leu o <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">guia de prompt engineering</a> conhece o princípio: quanto mais contexto, melhor a resposta.</p>

    <p>Antes de pedir o roteiro, mande um único parágrafo com tudo o que importa. Copie e preencha:</p>

    <pre><code>Vou viajar para [destino] de [data de ida] a [data de volta], saindo de [cidade]. Somos [quantas pessoas e idades]. Orçamento total de R$ [valor], já incluindo passagem e hospedagem. Ritmo: [tranquilo / intenso]. Gostamos de [praia, história, gastronomia, natureza, vida noturna]. Não gostamos de [museus longos, trilhas pesadas, acordar antes das 8h]. Vamos ficar hospedados em [bairro ou região, se já souber]. Guarde essas informações e me confirme que entendeu antes de sugerir qualquer coisa.</code></pre>

    <p>A última frase evita que o assistente saia despejando um roteiro antes de você terminar de explicar. Qualquer um dos três assistentes principais faz isso bem; o comparativo <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini</a> ajuda a escolher, e a versão gratuita de qualquer um basta para uma viagem pontual.</p>

    <h2>Passo 2: o roteiro dia a dia, em tabela</h2>

    <p>Com o contexto salvo, peça o roteiro em formato de tabela. Texto corrido é ruim de revisar; tabela mostra na hora quando um dia ficou pesado demais ou quando você atravessa a cidade três vezes.</p>

    <pre><code>Monte um roteiro dia a dia em formato de tabela com as colunas: dia, período (manhã, tarde, noite), atividade, bairro, tempo estimado de deslocamento a partir da atividade anterior e custo aproximado por pessoa em reais. Agrupe atividades por região para evitar deslocamento desnecessário. Inclua uma sugestão de almoço e jantar por dia dentro do orçamento. Para cada dia, dê uma alternativa caso chova. Ao final, liste 3 coisas que você acha que eu deveria cortar por falta de tempo.</code></pre>

    <h3>Ajustando o roteiro sem recomeçar</h3>

    <p>A vantagem do chat é a iteração. "Troque o dia 3 pelo dia 5", "tire o museu e coloque uma praia mais perto do hotel", "esse dia ficou com 4 horas de deslocamento, reorganize". Cada ajuste leva segundos. Se quiser as respostas com link para a fonte, ferramentas de pesquisa como as do guia de <a href="/artigos/perplexity-notebooklm-ia-de-pesquisa-estudar-mais-rapido">Perplexity e NotebookLM</a> mostram de onde veio cada sugestão, o que ajuda a confirmar horário de funcionamento.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Dica</span>
      <p>Quando o roteiro estiver pronto, peça: "liste todas as atrações do roteiro com o nome oficial para eu conferir horário e ingresso no site de cada uma". Você faz a checagem em 15 minutos e evita chegar em porta fechada.</p>
    </div>

    <h2>Orçamento: um exemplo real de 5 dias em Salvador</h2>

    <p>Um casal de Campinas quer passar 5 dias em Salvador em novembro, com R$ 6.000 no total. Com o contexto do passo 1, o assistente devolve algo assim: passagem aérea para dois na faixa de R$ 1.800 a R$ 2.400, hospedagem de 4 noites entre R$ 220 e R$ 300 a diária em pousada no Rio Vermelho, alimentação de R$ 150 a R$ 200 por dia para os dois, mais R$ 400 de transporte por aplicativo e R$ 300 de passeios. A conta fecha em algo entre R$ 4.600 e R$ 5.800.</p>

    <p>Esses números são um esqueleto, não uma cotação. O passo seguinte é abrir o <a href="https://support.google.com/travel/answer/6235879" rel="noopener noreferrer">acompanhamento de preços do Google Flights</a>, que manda e-mail quando a tarifa do trecho cai ou tende a subir, e conferir a diária nas plataformas de reserva. Se a passagem real vier em R$ 3.200, você já sabe que precisa cortar uma noite ou trocar a pousada, em vez de descobrir isso na volta.</p>

    <pre><code>Com base no roteiro que montamos, faça uma tabela de orçamento com as categorias: passagem, hospedagem, alimentação, transporte local, passeios e reserva para imprevistos (10%). Para cada categoria, dê uma faixa de valor em reais (mínimo e máximo) e explique em uma frase o que faz o valor ir para o teto. Some tudo e compare com meu orçamento de R$ 6.000.</code></pre>

    <p>Quem já usa o assistente para <a href="/artigos/como-usar-ia-para-organizar-financas-pessoais">organizar as finanças pessoais</a> pode colar a planilha de gastos da última viagem: a estimativa fica calibrada no seu padrão de consumo, não na média da internet.</p>

    <h2>Documentos, visto e vacina: aqui a IA só aponta o caminho</h2>

    <p>Regras de entrada em outros países mudam com frequência e variam pela nacionalidade. A IA pode responder com a regra do ano passado sem avisar. Use o assistente para montar a lista do que verificar, e verifique cada item na fonte oficial.</p>

    <ul class="checklist">
      <li>Passaporte válido pelo prazo que o país de destino exige (muitos pedem 6 meses além da data de volta). No Brasil, a emissão do passaporte comum custa R$ 257,25 e leva de 6 a 10 dias úteis após o atendimento, segundo a <a href="https://www.gov.br/pt-br/servicos/obter-passaporte-comum-para-brasileiro" rel="noopener noreferrer">página oficial do serviço no gov.br</a> (verificado em 27/09/2026).</li>
      <li>Visto ou autorização eletrônica: confira no site do consulado do país.</li>
      <li>Vacina: o <a href="https://www.gov.br/saude/pt-br/vacinacao/vacinacao-para-os-viajantes" rel="noopener noreferrer">Ministério da Saúde</a> orienta tomar a vacina de febre amarela pelo menos 10 dias antes da viagem para áreas com recomendação, e emitir o Certificado Internacional de Vacinação (CIVP) quando o país de destino exige.</li>
      <li>Seguro viagem: alguns destinos exigem cobertura mínima. Confirme no consulado.</li>
    </ul>

    <div class="callout-box callout-warn">
      <span class="callout-label">Atenção</span>
      <p>Não cole foto do passaporte, número de cartão ou dados de reserva no chat. Nada disso é necessário para planejar, e o artigo sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a> mostra o que acontece com o que você digita.</p>
    </div>

    <h2>Durante a viagem: o assistente no bolso</h2>

    <p>A parte que mais surpreende quem usa IA para planejar viagens pela primeira vez acontece depois do embarque. Voo atrasou e você perdeu a conexão: cole a mensagem da companhia e peça as opções. Cardápio em italiano: tire uma foto e peça a tradução com sugestão de prato sem glúten.</p>

    <p>O guia sobre <a href="/artigos/ia-multimodal-o-que-muda-quando-maquina-ve-ouve-fala">IA multimodal</a> explica o que os modelos já fazem com foto, voz e texto ao mesmo tempo, e por que isso muda a viagem mais do que o planejamento.</p>

    <h3>Configurando antes de sair de casa</h3>

    <p>Instale o aplicativo do assistente, faça login e teste o modo de voz ainda em casa. Cole o roteiro final em uma conversa fixa para consultar sem sinal de internet estável. Quem seguiu o passo a passo de <a href="/artigos/como-configurar-primeiro-assistente-de-ia-pessoal">como configurar um assistente de IA pessoal</a> já tem isso pronto; para viagens a outro país, treinar frases básicas com o método de <a href="/artigos/como-usar-ia-para-aprender-um-novo-idioma-todos-os-dias">aprender idioma com IA todo dia</a> nas duas semanas anteriores faz diferença no balcão do hotel.</p>

    <p>Sobre custo: o plano gratuito do Claude existe e o Pro custa US$ 20 por mês, segundo a <a href="https://claude.com/pricing" rel="noopener noreferrer">página oficial de planos</a> (verificado em 27/09/2026); ChatGPT e Gemini também têm versão gratuita, consulte a página oficial de cada um para limites atuais. Para uma viagem por ano, o gratuito resolve. Quem viaja a trabalho todo mês pode olhar o guia <a href="/artigos/ia-gratis-ou-paga-o-que-vale-a-pena">IA grátis ou paga</a> antes de assinar.</p>

    <h2>Erros comuns ao usar IA para planejar viagens</h2>

    <p>Alguns tropeços se repetem em quase toda primeira tentativa. A lista abaixo economiza pelo menos uma frustração:</p>

    <ul>
      <li><strong>Tratar estimativa como cotação.</strong> A faixa de preço da IA serve para decidir se a viagem cabe no bolso, não para reservar. Reserva se faz no site da companhia ou na plataforma.</li>
      <li><strong>Pedir sem contexto.</strong> Roteiro genérico é sintoma de pedido genérico. Volte ao passo 1.</li>
      <li><strong>Aceitar atração fechada.</strong> Museu fechado na segunda, praia sem acesso na alta temporada, restaurante que mudou de endereço. Confira os nomes oficiais.</li>
      <li><strong>Roteiro geograficamente impossível.</strong> Se o dia tem quatro bairros distantes, peça para reagrupar por região. O modelo aceita de bom grado.</li>
      <li><strong>Esperar que a IA reserve por você.</strong> Agentes que compram e reservam sozinhos estão aparecendo, como mostra o texto sobre <a href="/artigos/agentes-de-ia-comprando-por-voce-comercio">agentes de IA comprando por você</a>, mas na prática hoje a compra ainda é sua.</li>
    </ul>

    <p>São versões de viagem dos <a href="/artigos/5-erros-comuns-de-quem-esta-comecando-a-usar-ia">5 erros comuns de quem está começando a usar IA</a>: contexto na entrada, checagem na saída.</p>

    <h2>Checklist final antes de fechar a viagem</h2>

    <ul class="checklist">
      <li>Contexto completo salvo na conversa (datas, orçamento, ritmo, quem viaja)</li>
      <li>Roteiro em tabela, agrupado por região, com plano B para chuva</li>
      <li>Nome oficial de cada atração conferido no site (horário e ingresso)</li>
      <li>Passagem e hospedagem cotadas em site real, não na estimativa</li>
      <li>Passaporte, visto e vacina confirmados no consulado e no gov.br</li>
      <li>Assistente instalado no celular, com o roteiro final colado em uma conversa fixa</li>
    </ul>

    <p>Planejar viagem é só um dos usos em que a IA devolve horas para a sua semana. O mesmo método de dar contexto e pedir tabela funciona para <a href="/artigos/como-usar-ia-para-planejar-refeicoes-e-economizar-no-mercado">planejar as refeições da semana</a> e para montar uma <a href="/artigos/como-usar-ia-para-criar-rotina-diaria-produtiva">rotina diária mais produtiva</a>. Comece pela próxima viagem, mesmo que seja o feriado prolongado, e veja quanto tempo sobra.</p>
  `,
  faq: [
    {
      question: "A IA consegue reservar passagens e hotéis sozinha?",
      answer:
        "Na prática, ainda não para a maioria das pessoas. Os assistentes generalistas pesquisam, comparam e montam o roteiro, mas a compra acontece no site da companhia aérea ou na plataforma de reserva. Agentes que executam a compra estão surgindo, porém exigem cadastro e ainda são exceção. Use a IA para decidir e o site oficial para pagar.",
    },
    {
      question: "Posso confiar na IA para saber se preciso de visto?",
      answer:
        "Não como fonte final. Regras de visto mudam com frequência e dependem da sua nacionalidade, e o modelo pode responder com a regra antiga sem avisar. Peça à IA a lista do que verificar e confirme cada item no site do consulado do país de destino e nas páginas do gov.br antes de comprar a passagem.",
    },
    {
      question: "Qual IA é melhor para planejar viagens: ChatGPT, Claude ou Gemini?",
      answer:
        "Os três montam roteiro e orçamento bem quando recebem contexto completo. A diferença aparece em detalhes: alguns têm busca na web mais integrada, o que ajuda a confirmar horários. Para uma viagem pontual, a versão gratuita de qualquer um resolve. Teste o mesmo prompt nos três e fique com o que responder melhor sobre o seu destino.",
    },
    {
      question: "Vale a pena usar IA para uma viagem curta de fim de semana?",
      answer:
        "Vale, principalmente para agrupar atrações por região e evitar deslocamento desnecessário, que é o que mais consome tempo em viagem curta. Em 10 minutos você tem um roteiro de dois dias em tabela, com sugestão de restaurante e plano B para chuva. O ganho é maior justamente quando não há tempo para errar.",
    },
    {
      question: "A IA sabe o preço atual de passagem e hotel?",
      answer:
        "Não. Ela dá uma faixa aproximada baseada no que aprendeu, útil para saber se a viagem cabe no orçamento. O preço real muda todo dia e precisa ser conferido em ferramentas como o acompanhamento de preços do Google Flights e nas plataformas de hospedagem. Trate a estimativa como ordem de grandeza, nunca como cotação.",
    },
  ],
  quiz: [
    {
      question: "Qual é o principal cuidado ao usar IA para documentação de viagem internacional?",
      options: [
        "Confiar na resposta da IA e comprar a passagem",
        "Confirmar visto, vacina e validade do passaporte no consulado e no gov.br",
        "Não pesquisar documentação antes de viajar",
        "Perguntar em fóruns de viagem sem checar fontes oficiais",
      ],
      answer: 1,
      explanation:
        "Regras de entrada mudam com frequência e a IA pode responder com informação antiga. A lista de verificação pode vir do assistente, mas a confirmação vem do consulado e das páginas oficiais.",
    },
    {
      question: "Qual formato facilita mais a revisão de um roteiro gerado por IA?",
      options: [
        "Um texto corrido sem divisões",
        "Uma tabela por dia, com período, atividade, bairro e tempo de deslocamento",
        "Uma lista sem ordem cronológica",
        "Uma frase resumindo a viagem inteira",
      ],
      answer: 1,
      explanation:
        "A tabela mostra na hora quando um dia ficou pesado ou quando você cruza a cidade várias vezes, e permite ajustar com um pedido curto.",
    },
  ],
};
