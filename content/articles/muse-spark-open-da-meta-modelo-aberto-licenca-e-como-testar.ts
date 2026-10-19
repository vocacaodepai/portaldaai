import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "muse-spark-open-da-meta-modelo-aberto-licenca-e-como-testar",
  title: "Muse Spark Open da Meta: licença, hardware e como testar",
  seoTitle: "Muse Spark Open da Meta: licença e como testar",
  excerpt:
    "Muse Spark Open é o modelo aberto da Meta com 816 bilhões de parâmetros. Veja a licença, o hardware que exige e como testar por API sem comprar máquina.",
  metaDescription:
    "Muse Spark Open, modelo aberto da Meta: o que a licença permite, quanta memória pede, onde baixar e como testar por API sem comprar hardware, passo a passo.",
  category: "ferramentas",
  date: "2026-10-19",
  readTime: 8,
  imageQuery: "server racks data center corridor",
  seed: 472,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O Muse Spark Open tem pesos abertos para baixar, mas rodar em casa exige cerca de 700 GB de memória de vídeo na versão mais enxuta, então o caminho realista é testar por API.",
    "A licença Muse Model permite usar, ajustar e redistribuir, com exigências como exibir o aviso Built with Muse Spark Open e acordo separado para quem vende o modelo como serviço acima de US$ 20 milhões de receita anual.",
    "Os resultados de desempenho divulgados são da própria Meta e ainda não foram confirmados por testes independentes, então vale validar com uma tarefa sua antes de migrar qualquer rotina.",
  ],
  content: `
    <p>O Muse Spark Open é o modelo de pesos abertos da Meta, com 816 bilhões de parâmetros, janela de contexto de 1 milhão de tokens e licença própria que libera uso, ajuste e redistribuição com condições. Dá para baixar os arquivos, mas a maioria das pessoas vai testá-lo por API, porque rodar localmente pede centenas de gigabytes de memória.</p>

    <p>A Meta anunciou o modelo em 15 de outubro de 2026, segundo a <a href="https://techcrunch.com/2026/10/15/meta-launches-an-open-weight-model-that-runs-on-macs/" target="_blank" rel="noopener noreferrer">reportagem da TechCrunch</a>, e a <a href="/noticias/meta-muse-spark-open-modelo-aberto-816-bilhoes-mac">cobertura do lançamento</a> já está no Portal. Este guia é o complemento prático: o que a licença diz, quanto hardware ele pede, onde baixar, como testar sem gastar com máquina e quando ele não faz sentido para você.</p>

    <h2>O que é o Muse Spark Open</h2>
    <p>Segundo o <a href="https://research.meta.ai/blog/muse-spark-open" target="_blank" rel="noopener noreferrer">blog de pesquisa da Meta</a>, o Muse Spark Open é um modelo do tipo mistura de especialistas: são 816 bilhões de parâmetros no total, mas apenas 42 bilhões ficam ativos para cada token gerado. Na prática, isso ajuda na velocidade, porque só uma parte da rede trabalha a cada palavra. Ele é multimodal, aceita texto, imagem, vídeo e áudio na entrada e responde em texto.</p>
    <p>A Meta o descreve como voltado a tarefas longas, engenharia de software complexa e raciocínio em várias etapas. O <a href="https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B" target="_blank" rel="noopener noreferrer">cartão do modelo no Hugging Face</a> informa que ele foi treinado com dados de mais de 100 idiomas, mas avisa que o desempenho pode cair fora dos idiomas mais fortes. Ou seja: antes de assumir que o português vai funcionar bem, teste com textos seus.</p>
    <p>Se você ainda está se situando na diferença entre modelo aberto e fechado, o guia sobre <a href="/artigos/ia-codigo-aberto-o-que-muda-para-quem-usa">IA de código aberto e o que muda para quem usa</a> explica o conceito sem jargão. E o termo janela de contexto, que aparece várias vezes aqui, está detalhado em <a href="/artigos/tokens-e-janela-de-contexto-em-ia-o-que-sao-e-por-que-importam">tokens e janela de contexto</a>.</p>

    <h2>O que a licença Muse Model permite</h2>
    <p>Os pesos saem sob a Muse Model License, que a Meta chama de licença com termos comerciais limitados. O texto completo fica atrás de um login no Hugging Face, mas o cartão do modelo resume os pontos principais. Eis o que consta, verificado em 19/10/2026:</p>
    <ul>
      <li>Permite usar, modificar, ajustar, destilar e redistribuir o modelo, sujeito a condições.</li>
      <li>Trabalhos derivados precisam exibir de forma visível o aviso "Built with Muse Spark Open".</li>
      <li>Empresas que oferecem o modelo como serviço por API e têm receita bruta anual acima de US$ 20 milhões precisam avisar a Meta e assinar um acordo separado.</li>
      <li>Há uma política de uso anexa que proíbe atividades ilegais, armas e enganação.</li>
      <li>O software vem "como está", sem garantias, e a Meta não assume responsabilidade.</li>
    </ul>
    <p>Para uma pessoa física, um freelancer ou uma pequena empresa, esses limites dificilmente travam o uso. Para quem pretende revender o modelo como produto, vale ler a licença inteira e, se o negócio for relevante, consultar um advogado. Este texto resume o que a Meta publicou e não substitui a leitura do documento.</p>
    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Pesos abertos não são o mesmo que código aberto no sentido estrito. A licença define o que pode ser feito, e os termos do Muse Spark Open incluem condições de atribuição e de uso comercial em escala.</p></div>

    <h2>Quanto hardware ele pede</h2>
    <p>Aqui está o ponto que separa curiosidade de uso real. O cartão do modelo cita cerca de 700 GB de memória de vídeo para a versão compactada em NVFP4 e cerca de 2 TB para a versão em BF16. A Meta também diz que ele roda em dois Mac Studio com chip M5 Ultra, cada um com até 512 GB de memória unificada, usando a biblioteca <a href="https://github.com/ml-explore/mlx-lm" target="_blank" rel="noopener noreferrer">MLX LM</a>, voltada a processadores da Apple.</p>
    <p>Nenhum desses cenários cabe em um notebook comum de 16 ou 32 GB. Mesmo para uma empresa pequena, comprar essa estrutura só para testar um modelo raramente se paga. A comparação com opções para o celular, como as descritas em <a href="/artigos/ia-no-celular-sem-internet-gemini-nano-e-privacidade">IA no celular sem internet</a>, mostra a distância entre os dois extremos: modelos minúsculos que cabem no bolso e modelos gigantes que pedem uma sala de servidores.</p>

    <h3>Tabela rápida de caminhos para usar</h3>
    <table>
      <thead>
        <tr><th>Caminho</th><th>Custo inicial</th><th>Para quem serve</th></tr>
      </thead>
      <tbody>
        <tr><td>Rodar localmente (NVFP4 ou BF16)</td><td>Máquinas de alto custo, centenas de GB de memória</td><td>Laboratórios e empresas com infraestrutura própria</td></tr>
        <tr><td>API de um provedor hospedado</td><td>Pagamento por uso, sem hardware</td><td>Quem quer testar ou integrar em produto</td></tr>
        <tr><td>Nuvem dos grandes (SageMaker, Model Garden, Foundry)</td><td>Conta na nuvem e cobrança por uso</td><td>Equipes de tecnologia de empresas médias</td></tr>
        <tr><td>Ignorar e usar um assistente pronto</td><td>Grátis ou plano mensal</td><td>A maioria das pessoas</td></tr>
      </tbody>
    </table>

    <h2>Onde baixar e onde testar por API</h2>
    <p>Pelo blog da Meta, os pesos estão no Hugging Face e também em catálogos de três nuvens: Amazon SageMaker AI, Google Cloud Model Garden e Microsoft Foundry Models. Para uso hospedado por API, a empresa cita Baseten, Fireworks AI, Groq, Modal, Nebius, OpenRouter e Together AI. Preços e disponibilidade no Brasil variam por provedor e mudam com frequência, então consulte a página de cada um no dia em que for testar.</p>
    <p>A vantagem de existir vários provedores para os mesmos pesos é a concorrência: você pode comparar custo por milhão de tokens e trocar de fornecedor sem reescrever o projeto. Quem já mexe com automações e agentes encontra no guia do <a href="/artigos/mcp-model-context-protocol-o-que-e-e-como-conecta-agentes-de-ia">protocolo MCP</a> uma forma de ligar um modelo a ferramentas do dia a dia.</p>

    <h2>Como testar em 20 minutos, sem comprar máquina</h2>
    <ol>
      <li>Escolha um provedor da lista oficial que aceite seu cartão e tenha crédito de teste ou cobrança por uso.</li>
      <li>Crie uma chave de API e defina um limite de gasto baixo, por exemplo R$ 20, para não ter surpresa na fatura.</li>
      <li>Separe três tarefas reais suas: um resumo de documento longo, uma revisão de código ou planilha e uma resposta a cliente em português.</li>
      <li>Rode as mesmas tarefas no Muse Spark Open e no assistente que você já usa, e compare qualidade, tempo e custo.</li>
      <li>Anote onde errou. Uma comparação com a sua própria régua vale mais do que qualquer gráfico de lançamento.</li>
    </ol>
    <p>Um prompt útil para a comparação:</p>
    <pre><code>Você vai receber um relatório de 20 páginas sobre o meu negócio.
Entregue: 1) resumo em 8 linhas; 2) três riscos que o texto menciona; 3) duas perguntas que um sócio deveria fazer.
Cite o trecho do relatório que sustenta cada ponto. Se algo não estiver no texto, diga que não está.</code></pre>
    <p>Esse tipo de pedido ajuda a medir também a taxa de invenção, tema do guia sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a>. Se o modelo citar trechos que não existem, descarte-o para aquela tarefa.</p>

    <h2>Exemplo brasileiro: escritório de contabilidade com 12 clientes</h2>
    <p>Imagine um escritório pequeno que resume contratos e extratos para os clientes. Hoje paga um plano de assistente pronto e cola documentos manualmente. Uma pessoa de tecnologia do escritório monta um teste de uma semana via API com 30 documentos reais já anonimizados, compara com o plano atual e mede três coisas: acertos nos resumos, tempo por documento e custo total do teste.</p>
    <p>Se o modelo aberto empatar em qualidade e o custo por API ficar menor, o escritório considera migrar apenas essa rotina. Se perder em português ou inventar valores, mantém o que já usa. Em nenhum dos dois cenários o escritório precisou comprar hardware, e é essa lógica de teste curto e barato que vale para você também. Antes de enviar dados de clientes a qualquer provedor, passe pelo <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">checklist de LGPD para pequenos negócios</a>.</p>

    <h2>Erros comuns ao avaliar um modelo aberto</h2>
    <ul class="checklist">
      <li>Confiar nos gráficos do lançamento. Os números divulgados são da própria Meta, e a TechCrunch deixa claro que não foram verificados de forma independente.</li>
      <li>Esquecer o idioma. O modelo é multilíngue, mas o próprio cartão avisa que nem todos os idiomas foram avaliados.</li>
      <li>Enviar dados sensíveis para um provedor sem ler a política de retenção.</li>
      <li>Ignorar a licença antes de colocar o modelo em um produto que será vendido.</li>
      <li>Comparar só preço por token e esquecer o tempo da sua equipe para configurar tudo.</li>
    </ul>

    <h2>Quando não vale a pena</h2>
    <p>Se você usa IA para escrever e-mails, resumir textos ou estudar, um assistente pronto resolve melhor e mais barato. O <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">comparativo entre ChatGPT, Claude e Gemini</a> ajuda a escolher entre eles, e o texto sobre <a href="/artigos/ia-gratis-ou-paga-o-que-vale-a-pena">IA grátis ou paga</a> mostra quando o plano gratuito basta. Modelo aberto compensa quando você precisa de controle sobre onde os dados ficam, quer ajustar o modelo para uma tarefa específica ou monta um produto próprio.</p>
    <p>Em dúvida sobre segurança de qualquer ferramenta nova, use o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher ferramenta de IA com segurança</a> antes de colocar um único dado de cliente nela.</p>

    <h2>O que acompanhar nas próximas semanas</h2>
    <p>Três pontos merecem atenção: testes independentes que confirmem ou desmintam as comparações da Meta, preços por API nos diferentes provedores e eventuais versões menores que caibam em máquinas comuns. O blog da Meta não menciona variantes menores até hoje. Enquanto isso, a Meta segue lançando modelos em ritmo acelerado, como mostra a notícia sobre o <a href="/noticias/meta-muse-wonder-primeiro-modelo-fronteira">Muse Wonder</a>, e outros laboratórios apostam em abertura, caso da <a href="/noticias/xiaomi-lanca-mimo-v2-6-modelo-aberto-treinado-3-milhoes">Xiaomi com o MiMo V2.6</a>.</p>
    <p>Meu conselho prático: não corra atrás de cada lançamento. Escolha uma tarefa que consome seu tempo, rode o teste de 20 minutos e decida com base no resultado. Para entender o que já existe dentro dos aplicativos da Meta, vale ler também o guia do <a href="/artigos/meta-ai-no-whatsapp-o-que-faz-privacidade-e-como-usar">Meta AI no WhatsApp</a>, e para ver o panorama completo de ferramentas, volte à categoria Ferramentas do Portal.</p>
  `,
  faq: [
    {
      question: "O Muse Spark Open é gratuito?",
      answer:
        "Os pesos podem ser baixados sem pagar, e a Meta diz que a licença deixa muitos desenvolvedores usarem o modelo de graça. Mas rodar exige máquinas caras, e usar por API de um provedor tem cobrança por uso. Empresas que vendem o modelo como serviço acima de US$ 20 milhões de receita anual precisam de acordo separado.",
    },
    {
      question: "Dá para rodar o Muse Spark Open no meu computador?",
      answer:
        "Em um computador comum, não. O cartão do modelo cita cerca de 700 GB de memória de vídeo na versão NVFP4 e cerca de 2 TB na BF16. A Meta menciona dois Mac Studio com chip M5 Ultra como configuração de desktop. Para a maioria das pessoas, o caminho é testar por API.",
    },
    {
      question: "O Muse Spark Open funciona bem em português?",
      answer:
        "O cartão do modelo diz que ele foi treinado com dados de mais de 100 idiomas, mas avisa que o desempenho pode cair fora do grupo de idiomas mais fortes e que nem todos foram avaliados. Como não há teste independente publicado, faça uma comparação com textos seus antes de decidir.",
    },
    {
      question: "Muse Spark Open é melhor que ChatGPT, Claude ou Gemini?",
      answer:
        "Ainda não há como afirmar. A Meta diz que ele supera modelos abertos populares, mas os números são da própria empresa e não foram confirmados por terceiros. Além disso, a comparação com assistentes fechados depende da tarefa. Teste três atividades suas nos dois lados e compare qualidade, tempo e custo.",
    },
    {
      question: "Onde posso testar o Muse Spark Open?",
      answer:
        "A Meta lista como provedores de API Baseten, Fireworks AI, Groq, Modal, Nebius, OpenRouter e Together AI. Os pesos também estão no Hugging Face e nos catálogos de SageMaker AI, Google Cloud Model Garden e Microsoft Foundry Models. Confira preço e disponibilidade no Brasil na página de cada um.",
    },
  ],
};
