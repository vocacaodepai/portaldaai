import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "data-centers-de-ia-e-energia-no-brasil-redata-conta-de-luz-e-o-que-esperar",
  title: "Data centers de IA e energia no Brasil: Redata e conta de luz",
  seoTitle: "Data centers de IA e energia: Redata e sua conta de luz",
  excerpt:
    "Data centers de IA e energia no Brasil: o que a lei do Redata exige, quanto um prompt gasta e se a sua conta de luz corre risco, com fontes oficiais.",
  metaDescription:
    "Entenda como os data centers de IA usam energia, o que muda com a lei do Redata no Brasil, quanto gasta um prompt do Gemini e o que esperar da conta de luz.",
  category: "futuro",
  articleSubcategory: "tecnologia-emergente",
  date: "2026-10-24",
  readTime: 7,
  imageQuery: "data center server racks corridor",
  seed: 616,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "A Agência Internacional de Energia projeta que o consumo elétrico dos data centers do mundo mais que dobre até 2030, chegando a cerca de 945 TWh, com a IA como principal motor.",
    "A lei do Redata, sancionada em 15/09/2026, suspende tributos por cinco anos sobre equipamentos, mas exige energia limpa ou renovável, reserva de 10% da capacidade para o mercado brasileiro e regras ainda por regulamentar.",
    "Um prompt de texto mediano no Gemini gasta 0,24 Wh segundo o Google, uma fração mínima da sua conta de luz, e o impacto real está na soma de milhões de usuários, imagens, vídeos e treinamento.",
  ],
  content: `
    <p>Os data centers de IA são os galpões cheios de servidores que treinam e rodam modelos como o ChatGPT e o Gemini, e consomem muita eletricidade. Segundo a Agência Internacional de Energia (IEA), o consumo elétrico dos data centers do mundo deve mais que dobrar até 2030, com a inteligência artificial como principal motor desse crescimento.</p>

    <p>No Brasil, o assunto ganhou lei própria em setembro de 2026: o Redata, regime de incentivo fiscal para atrair esses galpões ao país. Este guia explica quanto a IA realmente gasta de energia, o que a nova lei exige, quais gargalos existem e o que isso muda (ou não) na sua conta de luz. Tudo com números de fontes abertas e com o aviso de que várias regras ainda dependem de regulamentação.</p>

    <h2>Por que a IA consome tanta energia?</h2>

    <p>Todo pedido que você faz a um assistente de IA roda em chips especializados dentro de um data center. Esses chips ficam ligados o dia inteiro, esquentam e precisam de refrigeração, o que também gasta energia e, em muitos projetos, água. Treinar um modelo novo exige meses de milhares de chips trabalhando juntos, e depois cada resposta (a chamada inferência) repete o trabalho em escala de milhões de pessoas.</p>

    <p>Segundo um resumo da <a href="https://www.publicpower.org/periodical/article/electricity-demand-data-centers-worldwide-set-more-double-2030-iea" rel="noopener noreferrer" target="_blank">associação americana de energia pública sobre o relatório Energy and AI da IEA</a> (verificado em 24/10/2026), a demanda global dos data centers deve mais que dobrar e chegar a cerca de 945 terawatts-hora em 2030. A demanda dos data centers otimizados para IA deve mais que quadruplicar no mesmo período. Nos Estados Unidos, esses galpões respondem por quase metade do crescimento da demanda elétrica até 2030.</p>

    <p>O dado importa para entender a escala, mas vem com incerteza: a própria IEA trabalha com cenários, e o ritmo real depende de quão rápido a IA se espalha e de quão eficientes ficam os chips e os modelos. Para entender por que cada resposta pesa tanto, vale conhecer o conceito de <a href="/artigos/tokens-e-janela-de-contexto-em-ia-o-que-sao-e-por-que-importam">tokens e janela de contexto</a>: quanto mais texto o modelo lê e escreve, mais cálculo ele faz.</p>

    <h2>Quanto de energia gasta um prompt?</h2>

    <p>O Google publicou uma medição própria: segundo o <a href="https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference" rel="noopener noreferrer" target="_blank">blog do Google Cloud sobre o impacto ambiental da inferência</a> (verificado em 24/10/2026), o prompt de texto mediano do app Gemini usa 0,24 Wh de energia, emite 0,03 g de CO2 equivalente e consome 0,26 mL de água, cerca de cinco gotas. A empresa compara a energia a menos de nove segundos de TV ligada.</p>

    <p>Faça a conta em casa. Se você mandasse 100 prompts por dia durante 30 dias, seriam 3.000 prompts e cerca de 720 Wh, ou 0,72 kWh no mês. Pelo exemplo do <a href="/artigos/conta-de-luz-com-ia-como-entender-bandeira-tarifaria-e-consumo">guia da conta de luz com IA</a>, um chuveiro de 5.500 W usado 30 minutos por dia gasta cerca de 82,5 kWh por mês. Ou seja, o seu uso pessoal de texto pesa muito menos que um banho quente.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Leia com cuidado</span><p>O próprio Google informa que o número é uma análise de maio de 2025, cobre só prompts de texto do app Gemini e não foi verificado por terceiros independentes. Geração de imagem, vídeo e o treinamento dos modelos não entram nessa conta e gastam bem mais.</p></div>

    <h2>O que é o Redata e o que a lei exige?</h2>

    <p>O Redata (Regime Especial de Tributação para Serviços de Datacenter) foi sancionado em 15/09/2026. De acordo com a <a href="https://www.gov.br/fazenda/pt-br/assuntos/noticias/2026/setembro/regime-especial-de-tributacao-para-servicos-de-datacenter-e-sancionado" rel="noopener noreferrer" target="_blank">notícia do Ministério da Fazenda</a> (verificado em 24/10/2026), a lei vale para data centers de armazenamento, processamento e gestão de dados, incluindo nuvem, computação de alto desempenho e treinamento e inferência de modelos de IA. O texto passou antes pela Câmara e pelo Senado como PL 278/2026. A <a href="/noticias/lula-sanciona-redata-incentivo-fiscal-data-centers-ia">cobertura da sanção</a> traz o resumo do dia.</p>

    <table>
      <thead><tr><th>Ponto</th><th>O que diz a lei, segundo a Fazenda</th></tr></thead>
      <tbody>
        <tr><td>Incentivo</td><td>Cinco anos de suspensão de tributos na compra de componentes eletrônicos e outros produtos de TIC, nacionais ou importados</td></tr>
        <tr><td>Reserva para o Brasil</td><td>Pelo menos 10% da capacidade efetiva de processamento, armazenamento e manuseio de dados voltada ao mercado interno</td></tr>
        <tr><td>Energia</td><td>Toda a demanda contratada atendida por contratos ou autoprodução com fontes limpas ou renováveis, como solar, eólica e hidrelétrica</td></tr>
        <tr><td>Água</td><td>Equipamentos de refrigeração com índice de eficiência hídrica de no máximo 0,05 litro por kWh</td></tr>
        <tr><td>Contrapartida</td><td>Investimento no Brasil equivalente a 2% do valor dos produtos comprados com o benefício, além de pesquisa com universidades e empresas nacionais</td></tr>
        <tr><td>Entrada no regime</td><td>Autorização do Ministério da Fazenda e regularidade com tributos federais</td></tr>
      </tbody>
    </table>

    <p>A própria Fazenda informa que os critérios de sustentabilidade serão definidos em regulamento, sem prazo divulgado. Até lá, o regime não está pleno na prática.</p>

    <h2>O gargalo é a energia, não o terreno</h2>

    <p>Atrair o galpão é a parte fácil. Segundo uma <a href="https://www.mobiletime.com.br/noticias/27/08/2026/ascenty-data-redata/" rel="noopener noreferrer" target="_blank">reportagem do Mobile Time de agosto de 2026</a> (verificado em 24/10/2026), parques eólicos e solares levam de 18 a 24 meses para ficar prontos, e por isso as geradoras precisam começar as obras cedo. A mesma matéria registra o alerta de executivos do setor de que a demora na votação deixou projetos de grandes empresas de nuvem em espera, com risco de irem para outros países.</p>

    <p>Também há debate sobre os detalhes: um sócio de energia de escritório de advocacia ouvido pela reportagem pediu ajustes nas definições de energia renovável e de autoprodução, e levantou dúvidas sobre a capacidade de processar dados dentro do país. São opiniões de participantes do mercado, não decisões oficiais. O ponto para o leitor comum é que a conta só fecha se geração e rede de transmissão crescerem junto com os galpões.</p>

    <h2>O que muda na sua conta de luz?</h2>

    <p>Hoje, nada direto. A lei do Redata trata de tributos de equipamentos, não da tarifa residencial, e nenhuma das fontes consultadas afirma que a conta de luz das famílias vai subir ou cair por causa dos data centers. O que existe é uma discussão de quem paga a expansão da rede, e isso depende da regulação do setor elétrico, que ainda vai se desenhar.</p>

    <p>O que você pode fazer é acompanhar três sinais: a regulamentação do Redata, as decisões da Aneel sobre conexão de grandes consumidores e a bandeira tarifária mensal. Para saber ler a sua fatura e identificar onde está o seu consumo, o <a href="/artigos/conta-de-luz-com-ia-como-entender-bandeira-tarifaria-e-consumo">passo a passo da conta de luz</a> é um bom começo, e o texto sobre <a href="/artigos/lei-de-ia-no-brasil-o-que-muda-para-quem-usa">a lei de IA no Brasil</a> mostra o outro lado da regulação, o do uso da tecnologia.</p>

    <h2>Como a IA pode gastar menos energia</h2>

    <p>A eficiência é uma parte da resposta. A mesma publicação do Google afirma que o prompt mediano ficou 33 vezes mais eficiente em energia entre maio de 2024 e maio de 2025, com respostas de maior qualidade, por ganhos de software e de hardware. É um dado da própria empresa, mas aponta o caminho: modelos menores e mais bem treinados fazem a mesma tarefa com menos cálculo.</p>

    <ul class="checklist">
      <li>Para tarefas simples, use modelos menores ou rápidos em vez do modo de raciocínio mais pesado, como explica o texto sobre <a href="/artigos/modos-de-raciocinio-em-ia-quando-ligar-o-pensar-e-quando-nao-vale">modos de raciocínio em IA</a>.</li>
      <li>Rode a IA no próprio aparelho quando der: <a href="/artigos/ia-no-celular-sem-internet-gemini-nano-e-privacidade">IA no celular sem internet</a> evita a ida ao data center.</li>
      <li>Evite regenerar imagens e vídeos por capricho: são os pedidos mais pesados do dia a dia.</li>
      <li>Escreva pedidos claros e completos, porque tentar de novo dez vezes gasta dez vezes mais.</li>
    </ul>

    <p>Modelos abertos também entram nessa conversa, já que empresas podem rodar versões enxutas em servidores próprios. O guia sobre <a href="/artigos/ia-codigo-aberto-o-que-muda-para-quem-usa">IA de código aberto</a> explica os prós e contras.</p>

    <h2>Erros comuns ao falar de IA e energia</h2>

    <ul>
      <li><strong>Usar um número isolado como verdade final.</strong> Os 0,24 Wh valem para um prompt de texto mediano do Gemini, não para qualquer IA ou qualquer tarefa.</li>
      <li><strong>Misturar treino e uso.</strong> Treinar um modelo gasta muito de uma vez, e usar gasta pouco por pedido, mas em escala enorme.</li>
      <li><strong>Achar que o Redata já está em plena vigência.</strong> A lei existe, mas depende de regulamentação para funcionar por inteiro.</li>
      <li><strong>Culpar a IA pela conta de luz de casa.</strong> Chuveiro, ar-condicionado e geladeira pesam mais, e as fontes consultadas não ligam o Redata a aumento de tarifa.</li>
      <li><strong>Ignorar a água.</strong> Refrigeração também consome água, e a lei já fixa um limite de eficiência hídrica.</li>
    </ul>

    <h2>Oportunidades para quem trabalha com tecnologia</h2>

    <p>Mais data centers significam demanda por eletricistas, engenheiros, técnicos de refrigeração, especialistas em energia renovável e gestores de projeto. Quem já está em tecnologia pode olhar o mapa de <a href="/artigos/vagas-de-ia-no-brasil-quais-cargos-contratando-2026">vagas de IA no Brasil</a>, e o <a href="/artigos/plano-brasileiro-de-ia-pbia-o-que-muda-para-voce">Plano Brasileiro de IA</a> ajuda a entender para onde vai o investimento público. Para ver como a infraestrutura se conecta com outras tecnologias, leia também sobre <a href="/artigos/computacao-quantica-e-ia-o-que-ja-existe-e-o-que-muda-para-voce">computação quântica e IA</a>.</p>

    <p>Quer acompanhar os próximos capítulos? Siga a categoria de <a href="/categoria/futuro">futuro da IA</a> e compare o seu uso com o de quem escolhe entre <a href="/artigos/ia-gratis-ou-paga-o-que-vale-a-pena">IA grátis ou paga</a>, lembrando que nenhuma resposta custa zero de energia.</p>
  `,
  faq: [
    {
      question: "Data centers de IA gastam muita energia?",
      answer:
        "Sim, e a tendência é de alta. A Agência Internacional de Energia projeta que o consumo elétrico dos data centers do mundo mais que dobre até 2030, chegando a cerca de 945 TWh, com a IA como principal motor. Cada prompt individual gasta pouco, mas a soma de milhões de pedidos e do treinamento de modelos pesa.",
    },
    {
      question: "Quanto de energia um prompt de IA gasta?",
      answer:
        "Segundo o Google, o prompt de texto mediano do app Gemini usa 0,24 Wh, emite 0,03 g de CO2 equivalente e consome 0,26 mL de água, com dados de maio de 2025. O número não vale para imagem, vídeo ou treinamento, e a empresa diz que ele não foi verificado por terceiros.",
    },
    {
      question: "O que é o Redata?",
      answer:
        "É o Regime Especial de Tributação para Serviços de Datacenter, sancionado em 15/09/2026. Ele suspende por cinco anos tributos na compra de equipamentos de data center, em troca de energia limpa ou renovável, reserva de 10% da capacidade para o mercado brasileiro e outras contrapartidas, e ainda depende de regulamentação.",
    },
    {
      question: "O Redata vai aumentar a minha conta de luz?",
      answer:
        "As fontes oficiais consultadas não ligam o Redata a aumento de tarifa residencial. A lei trata de tributos sobre equipamentos e de contrapartidas ambientais. A discussão sobre quem paga a expansão da rede pertence à regulação do setor elétrico, que ainda será definida, então vale acompanhar as decisões da Aneel.",
    },
    {
      question: "Usar IA no celular gasta menos energia que usar na nuvem?",
      answer:
        "Depende. Modelos que rodam no aparelho evitam a ida ao data center e podem funcionar sem internet, mas usam a bateria do celular e têm limite de capacidade. Para tarefas simples costumam bastar, e para tarefas pesadas o app envia o pedido à nuvem. Não há um número único que valha para todos os casos.",
    },
  ],
};
