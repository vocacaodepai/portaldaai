export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  date: string; // ISO
  readTime: number; // minutos
  imageQuery: string;
  seed: number;
  content: string; // HTML
};

export const categories = [
  { slug: "iniciantes", label: "Para Iniciantes" },
  { slug: "monetizacao", label: "Monetização" },
  { slug: "negocios", label: "Negócios com IA" },
  { slug: "ferramentas", label: "Ferramentas" },
  { slug: "carreira", label: "Carreira" },
  { slug: "futuro", label: "Futuro do Trabalho" },
] as const;

export type Category = (typeof categories)[number]["slug"];

export const site = {
  name: "Portal da AI",
  tagline: "Inteligência Artificial de um jeito simples, prático e lucrativo",
  description:
    "O Portal da AI ensina pessoas comuns a entender, usar e monetizar a inteligência artificial no dia a dia — sem jargão técnico, com exemplos reais e passo a passo.",
  url: "https://portaldaai.com.br",
};

export const articles: Article[] = [
  {
    slug: "o-que-e-inteligencia-artificial-guia-completo",
    title: "O que é Inteligência Artificial? Guia Completo para Iniciantes",
    excerpt:
      "Entenda de forma simples o que é IA, como ela funciona no dia a dia e por que ela já está mudando a forma como trabalhamos, estudamos e ganhamos dinheiro.",
    category: "iniciantes",
    date: "2026-08-29",
    readTime: 7,
    imageQuery: "artificial intelligence technology brain",
    seed: 0,
    content: `
      <p>Se você chegou até aqui, provavelmente já ouviu falar de <strong>ChatGPT</strong>, <strong>Claude</strong> ou <strong>Gemini</strong> e ficou curioso — ou talvez até um pouco assustado — sobre o que realmente é a Inteligência Artificial. A boa notícia é que você não precisa ser programador nem entender de matemática avançada para compreender o essencial e começar a usar essa tecnologia a seu favor.</p>

      <h2>Afinal, o que é Inteligência Artificial?</h2>
      <p>De forma simples, Inteligência Artificial (IA) é a capacidade que um computador tem de realizar tarefas que, até pouco tempo atrás, só um ser humano conseguia fazer: escrever textos, reconhecer imagens, conversar, traduzir idiomas, compor músicas ou tomar decisões com base em dados.</p>
      <p>Isso é possível porque esses sistemas foram treinados com uma quantidade gigantesca de informação — textos, imagens, códigos — e aprenderam padrões dessa informação, da mesma forma que uma criança aprende a falar ouvindo milhares de frases ao longo dos anos.</p>

      <h2>Os tipos de IA que você já usa (mesmo sem saber)</h2>
      <ul>
        <li><strong>IA generativa:</strong> cria conteúdo novo — textos, imagens, vídeos e áudios. É o caso do ChatGPT, Claude, Midjourney e Sora.</li>
        <li><strong>Assistentes virtuais:</strong> Siri, Alexa e Google Assistente usam IA para entender comandos de voz.</li>
        <li><strong>Recomendação de conteúdo:</strong> Netflix, YouTube e Instagram usam IA para sugerir o que você provavelmente vai gostar.</li>
        <li><strong>IA em finanças:</strong> bancos usam IA para detectar fraudes e aprovar (ou negar) crédito em segundos.</li>
      </ul>

      <h2>Por que isso importa para você agora?</h2>
      <p>Estamos vivendo o que muitos especialistas chamam de a maior revolução tecnológica desde a internet. Empresas de todos os tamanhos já usam IA para reduzir custos, atender clientes e criar produtos mais rápido. Isso significa uma coisa muito prática: <strong>quem aprender a usar IA primeiro sai na frente</strong> — seja para conseguir um emprego melhor, prestar serviços ou criar o próprio negócio.</p>

      <h2>Como começar a usar IA hoje mesmo</h2>
      <ol>
        <li>Crie uma conta gratuita em uma ferramenta como ChatGPT ou Claude.</li>
        <li>Comece com tarefas simples: pedir um resumo, uma lista de ideias ou ajuda para escrever um e-mail.</li>
        <li>Aprenda a "conversar" melhor com a IA (isso se chama <em>prompt engineering</em> — vamos te ensinar em outro artigo aqui do Portal da AI).</li>
        <li>Explore ferramentas específicas para sua área: design, vídeo, planilhas, atendimento ao cliente.</li>
      </ol>

      <h2>O que vem por aí no Portal da AI</h2>
      <p>Nas próximas semanas vamos publicar conteúdo diário mostrando, na prática, como transformar esse conhecimento em resultado real: dinheiro, produtividade e novas oportunidades de negócio. Fique de olho — a inteligência artificial não é mais o futuro, ela é o presente, e quem entende isso primeiro sai na frente.</p>
    `,
  },
  {
    slug: "10-formas-de-ganhar-dinheiro-com-inteligencia-artificial",
    title: "10 Formas de Ganhar Dinheiro com Inteligência Artificial em 2026",
    excerpt:
      "De prestação de serviços a produtos digitais: conheça caminhos reais e acessíveis para transformar o conhecimento em IA em uma nova fonte de renda.",
    category: "monetizacao",
    date: "2026-08-30",
    readTime: 9,
    imageQuery: "money online business laptop",
    seed: 1,
    content: `
      <p>A inteligência artificial derrubou uma barreira enorme: hoje, uma pessoa sozinha, com um notebook e conexão à internet, consegue fazer o trabalho que antes exigia uma equipe inteira. Isso abriu um leque de oportunidades reais de renda. Veja 10 caminhos práticos para começar.</p>

      <h2>1. Prestação de serviços com IA</h2>
      <p>Ofereça criação de conteúdo, edição de vídeo, design ou copywriting usando ferramentas de IA para entregar mais rápido e cobrar por resultado, não por hora.</p>

      <h2>2. Consultoria de implementação de IA para pequenas empresas</h2>
      <p>Muitos donos de negócio local não sabem por onde começar. Ensine-os a usar IA para atendimento, marketing e organização — isso já é um serviço vendável.</p>

      <h2>3. Criação de agentes e automações</h2>
      <p>Ferramentas de automação combinadas com IA permitem criar fluxos que respondem clientes, organizam planilhas e disparam e-mails sozinhos. Empresas pagam bem por isso.</p>

      <h2>4. Produção de conteúdo em escala</h2>
      <p>Crie canais, blogs ou perfis usando IA para roteirizar, narrar e editar vídeos e textos, monetizando com anúncios, afiliados ou patrocínio.</p>

      <h2>5. Produtos digitais (ebooks, templates, cursos)</h2>
      <p>Use IA para acelerar a criação de materiais educativos e venda-os em plataformas de infoproduto.</p>

      <h2>6. Freelancer especializado em prompts</h2>
      <p>Empresas pagam por quem sabe extrair o máximo de ferramentas como ChatGPT e Claude para tarefas específicas do negócio delas.</p>

      <h2>7. E-commerce assistido por IA</h2>
      <p>Da criação de descrições de produto ao atendimento automatizado, a IA reduz custos operacionais de lojas online.</p>

      <h2>8. Tradução e localização de conteúdo</h2>
      <p>Com revisão humana de qualidade, é possível oferecer tradução rápida de vídeos, artigos e sites para múltiplos idiomas.</p>

      <h2>9. Design gráfico e artes com IA generativa</h2>
      <p>Logos, capas, artes para redes sociais e materiais de marketing podem ser produzidos com muito mais agilidade.</p>

      <h2>10. Ensino: venda o que você está aprendendo</h2>
      <p>Documente sua jornada aprendendo IA e transforme isso em aulas, mentorias ou uma comunidade paga.</p>

      <h2>O ponto em comum entre todos esses caminhos</h2>
      <p>Nenhum deles exige que você seja programador. O que exigem é <strong>constância</strong>, disposição para testar ferramentas e entender profundamente um problema real que outras pessoas têm. A IA é a alavanca — o negócio ainda depende de você.</p>
    `,
  },
  {
    slug: "como-criar-um-negocio-digital-usando-ia-do-zero",
    title: "Como Criar um Negócio Digital Usando IA do Zero",
    excerpt:
      "Um roteiro prático, passo a passo, para sair da ideia até o primeiro cliente pagante usando ferramentas de inteligência artificial acessíveis.",
    category: "negocios",
    date: "2026-08-31",
    readTime: 8,
    imageQuery: "startup entrepreneur planning business",
    seed: 2,
    content: `
      <p>Criar um negócio sempre exigiu tempo, dinheiro e uma equipe. Com IA, esse processo ficou mais rápido e mais barato — mas ainda exige método. Este é um roteiro simples para sair do zero.</p>

      <h2>Passo 1: Escolha um problema, não uma ideia</h2>
      <p>Negócios de sucesso resolvem uma dor específica. Pergunte-se: que tarefa chata, repetitiva ou cara alguém pagaria para não fazer? A IA é ótima em automatizar exatamente esse tipo de tarefa.</p>

      <h2>Passo 2: Valide antes de construir</h2>
      <p>Use a IA para simular conversas com seu público-alvo, gerar pesquisas rápidas e analisar concorrentes. Você pode ter uma pesquisa de mercado inicial em poucas horas, não semanas.</p>

      <h2>Passo 3: Monte o produto mínimo viável (MPV)</h2>
      <p>Você não precisa de um sistema perfeito no primeiro dia. Ferramentas de IA ajudam a criar landing pages, roteiros de vendas, protótipos visuais e até primeiras versões de site sem depender de uma equipe técnica grande.</p>

      <h2>Passo 4: Automatize o operacional desde o início</h2>
      <p>Atendimento ao cliente, resposta a dúvidas frequentes, organização financeira simples e agendamento podem ser parcialmente automatizados com IA desde o primeiro cliente — isso libera seu tempo para vender.</p>

      <h2>Passo 5: Use IA para vender, não só para produzir</h2>
      <p>Crie roteiros de vídeo, anúncios, e-mails de venda e posts para redes sociais com apoio da IA, sempre revisando com sua própria voz e experiência — é isso que gera confiança.</p>

      <h2>Passo 6: Meça, ajuste, repita</h2>
      <p>Peça à IA para te ajudar a interpretar métricas simples (vendas, cliques, taxa de resposta) e sugerir os próximos ajustes. Negócios que vencem são os que iteram rápido.</p>

      <h2>Um exemplo prático</h2>
      <p>Imagine alguém que percebeu que pequenos escritórios de contabilidade perdem tempo respondendo as mesmas dúvidas de clientes. Essa pessoa cria um assistente simples de IA treinado nas perguntas mais comuns, oferece como serviço mensal e já tem receita recorrente com poucos clientes.</p>

      <h2>O que realmente separa quem consegue de quem não consegue</h2>
      <p>Não é acesso à tecnologia — hoje ela está disponível para praticamente todo mundo. É a disposição de começar pequeno, aprender rápido com os erros e manter consistência. A IA acelera o caminho, mas não substitui a execução.</p>
    `,
  },
  {
    slug: "chatgpt-claude-gemini-qual-ia-escolher",
    title: "ChatGPT, Claude, Gemini: Qual IA Escolher e Para Quê",
    excerpt:
      "Um comparativo direto e sem enrolação entre as principais inteligências artificiais do mercado, para você escolher a ferramenta certa para cada tarefa.",
    category: "ferramentas",
    date: "2026-09-01",
    readTime: 7,
    imageQuery: "computer screen chatbot conversation",
    seed: 3,
    content: `
      <p>Com tantas opções de IA disponíveis, é normal se sentir perdido sobre qual usar. A verdade é que não existe "a melhor de todas" — existe a ferramenta mais adequada para cada tipo de tarefa. Veja um panorama direto.</p>

      <h2>ChatGPT (OpenAI)</h2>
      <p>É a ferramenta mais popular e versátil, com um ecossistema enorme de plugins e integrações. Boa opção para quem quer uma ferramenta all-in-one para escrita, pesquisa, geração de imagens e automações simples.</p>

      <h2>Claude (Anthropic)</h2>
      <p>Reconhecida pela qualidade da escrita, raciocínio cuidadoso e por lidar bem com documentos longos e tarefas que exigem mais precisão, como análise de contratos, código e conteúdo técnico. É uma ótima escolha para quem valoriza respostas mais ponderadas e menos "genéricas".</p>

      <h2>Gemini (Google)</h2>
      <p>Se destaca pela integração profunda com o ecossistema Google (Gmail, Docs, planilhas) e por buscas em tempo real. Boa opção para quem já vive dentro do Google Workspace no dia a dia.</p>

      <h2>Como escolher na prática</h2>
      <ul>
        <li><strong>Escrita e conteúdo com mais nuance:</strong> Claude costuma entregar textos mais naturais e menos robóticos.</li>
        <li><strong>Tarefas do dia a dia integradas ao Google:</strong> Gemini.</li>
        <li><strong>Ecossistema de plugins e uso geral:</strong> ChatGPT.</li>
      </ul>

      <h2>Você não precisa escolher só uma</h2>
      <p>Muitos profissionais usam mais de uma IA, dependendo da tarefa — assim como usamos navegadores ou aplicativos diferentes para finalidades diferentes. O importante é entender os pontos fortes de cada uma e testar na prática com o seu próprio trabalho.</p>

      <h2>Um erro comum</h2>
      <p>Trocar de ferramenta o tempo todo sem aprender a "conversar" bem com nenhuma delas. O resultado que você recebe depende muito de como você pergunta — e isso vale para qualquer IA que você escolher usar.</p>
    `,
  },
  {
    slug: "automacao-com-ia-economize-horas-de-trabalho",
    title: "Automação com IA: Como Economizar Horas de Trabalho Todos os Dias",
    excerpt:
      "Descubra tarefas simples do seu dia a dia que podem ser automatizadas com inteligência artificial, liberando tempo para o que realmente importa.",
    category: "ferramentas",
    date: "2026-09-02",
    readTime: 6,
    imageQuery: "productivity automation office workflow",
    seed: 4,
    content: `
      <p>Um dos maiores ganhos práticos da inteligência artificial não está em tarefas complexas, mas em pequenas tarefas repetitivas que consomem seu dia sem você perceber. Veja onde começar.</p>

      <h2>1. E-mails e mensagens</h2>
      <p>Peça à IA para resumir e-mails longos, sugerir respostas ou organizar sua caixa de entrada por prioridade.</p>

      <h2>2. Organização de tarefas</h2>
      <p>Transforme uma reunião bagunçada em uma lista de tarefas clara, com prazos e responsáveis, em segundos.</p>

      <h2>3. Criação de conteúdo recorrente</h2>
      <p>Relatórios semanais, posts de redes sociais e resumos de reuniões podem ter um primeiro rascunho gerado por IA e apenas revisado por você.</p>

      <h2>4. Atendimento ao cliente</h2>
      <p>Perguntas frequentes podem ser respondidas automaticamente por um assistente treinado no seu negócio, reduzindo o tempo de resposta.</p>

      <h2>5. Planilhas e dados</h2>
      <p>Peça à IA para organizar, limpar e interpretar planilhas — tarefa que normalmente tomaria horas de trabalho manual.</p>

      <h2>Como começar sem complicar</h2>
      <ol>
        <li>Escolha apenas uma tarefa repetitiva da sua rotina esta semana.</li>
        <li>Teste uma ferramenta de IA para resolvê-la.</li>
        <li>Ajuste o processo até ficar confortável.</li>
        <li>Só então automatize a próxima tarefa.</li>
      </ol>

      <h2>O ganho real não é só tempo</h2>
      <p>Automatizar o operacional libera espaço mental para pensar estrategicamente — seja no seu emprego, seja no seu próprio negócio. Esse é o verdadeiro diferencial competitivo da IA no dia a dia.</p>
    `,
  },
  {
    slug: "prompt-engineering-como-escrever-comandos-que-funcionam",
    title: "Prompt Engineering: Como Escrever Comandos que Realmente Funcionam",
    excerpt:
      "A diferença entre uma resposta genérica e uma resposta excelente da IA está em como você pergunta. Aprenda a estrutura de um bom prompt.",
    category: "ferramentas",
    date: "2026-09-03",
    readTime: 7,
    imageQuery: "typing keyboard writing text",
    seed: 5,
    content: `
      <p>"Prompt engineering" é só um nome bonito para uma habilidade simples: saber pedir as coisas de um jeito que a IA entenda exatamente o que você precisa. É, hoje, uma das habilidades mais valiosas do mercado.</p>

      <h2>A estrutura de um bom prompt</h2>
      <ul>
        <li><strong>Contexto:</strong> quem você é e qual é a situação.</li>
        <li><strong>Tarefa:</strong> o que exatamente você quer que a IA faça.</li>
        <li><strong>Formato:</strong> como você quer receber a resposta (lista, tabela, texto corrido, tamanho).</li>
        <li><strong>Restrições:</strong> o que evitar (tom, palavras, tamanho máximo).</li>
      </ul>

      <h2>Exemplo de prompt fraco</h2>
      <p><em>"Escreva um post sobre marketing."</em></p>
      <p>Resposta: genérica, sem direção, provavelmente inútil.</p>

      <h2>Exemplo de prompt forte</h2>
      <p><em>"Você é um especialista em marketing para pequenos negócios locais. Escreva um post de Instagram (máximo 5 linhas, tom leve e direto) para uma padaria de bairro anunciar um novo pão artesanal, com uma chamada para ação no final."</em></p>
      <p>Resposta: específica, pronta para usar, alinhada ao objetivo real.</p>

      <h2>Técnicas que fazem diferença</h2>
      <ol>
        <li><strong>Peça exemplos:</strong> "me dê 3 versões diferentes" gera opções melhores que uma única resposta.</li>
        <li><strong>Peça para a IA fazer perguntas:</strong> "antes de responder, me pergunte o que faltar entender" melhora muito a precisão.</li>
        <li><strong>Refine em etapas:</strong> peça uma primeira versão, depois ajuste o que não gostou, em vez de tentar acertar tudo de uma vez.</li>
        <li><strong>Dê exemplos do seu estilo:</strong> cole um texto seu como referência de tom de voz.</li>
      </ol>

      <h2>Por que isso vale dinheiro</h2>
      <p>Quem domina prompt engineering entrega mais qualidade em menos tempo — e isso é literalmente vendável como serviço, além de tornar qualquer profissional mais produtivo no próprio trabalho.</p>
    `,
  },
  {
    slug: "freelancer-na-era-da-ia-como-se-tornar-insubstituivel",
    title: "Freelancer na Era da IA: Como se Tornar Insubstituível",
    excerpt:
      "A IA está mudando o mercado freelancer. Veja como se posicionar para trabalhar com a tecnologia a seu favor, em vez de competir contra ela.",
    category: "carreira",
    date: "2026-09-04",
    readTime: 6,
    imageQuery: "freelancer working remote laptop",
    seed: 6,
    content: `
      <p>É natural sentir insegurança quando uma tecnologia nova ameaça mudar as regras de uma profissão. Mas quem trabalha como freelancer tem uma vantagem enorme neste momento: agilidade para se adaptar antes das grandes empresas.</p>

      <h2>O que muda para o freelancer</h2>
      <p>Tarefas puramente operacionais — como escrever um texto genérico ou editar uma imagem simples — perdem valor porque a IA faz isso rápido e barato. O que ganha valor é o que a IA não faz sozinha: entender o cliente, ter bom gosto, curar resultado, assumir responsabilidade pelo entregável final.</p>

      <h2>Como se posicionar</h2>
      <ul>
        <li><strong>Venda resultado, não hora trabalhada.</strong> Se a IA te deixa mais rápido, isso é lucro seu, não motivo para cobrar menos.</li>
        <li><strong>Especialize-se em um nicho.</strong> Um freelancer genérico compete com IA; um especialista em um segmento específico compete com poucas pessoas.</li>
        <li><strong>Domine as ferramentas do seu setor.</strong> Editor de vídeo que usa IA para acelerar cortes entrega mais rápido que quem não usa — e ainda cobra pela qualidade da curadoria.</li>
        <li><strong>Vire referência de curadoria.</strong> Clientes vão pagar cada vez mais por alguém que filtra, corrige e dá direção ao que a IA produz.</li>
      </ul>

      <h2>Um mindset importante</h2>
      <p>Pense na IA como um estagiário extremamente rápido, mas sem experiência de vida, sem gosto refinado e sem responsabilidade sobre o resultado. Seu papel muda de "produtor" para "diretor" do trabalho.</p>

      <h2>O que fazer esta semana</h2>
      <ol>
        <li>Liste as 3 tarefas mais repetitivas do seu trabalho freelancer.</li>
        <li>Teste uma ferramenta de IA para acelerar cada uma delas.</li>
        <li>Use o tempo economizado para atender mais clientes ou entregar com mais qualidade.</li>
      </ol>
    `,
  },
  {
    slug: "ia-para-criadores-de-conteudo-videos-textos-e-artes",
    title: "IA para Criadores de Conteúdo: Vídeos, Textos e Artes em Minutos",
    excerpt:
      "Ferramentas de inteligência artificial estão permitindo que uma única pessoa produza no ritmo de uma equipe inteira. Veja como aplicar isso na criação de conteúdo.",
    category: "ferramentas",
    date: "2026-09-05",
    readTime: 7,
    imageQuery: "content creator video editing camera",
    seed: 7,
    content: `
      <p>Criar conteúdo com constância é um dos maiores desafios de quem trabalha com redes sociais, blogs ou vídeos. A IA não substitui a criatividade, mas elimina boa parte do trabalho braçal que impede a constância.</p>

      <h2>Roteirização</h2>
      <p>Use IA para transformar uma ideia solta em um roteiro estruturado, com gancho inicial, desenvolvimento e call to action — economizando a parte mais trabalhosa do processo criativo.</p>

      <h2>Produção de texto</h2>
      <p>Legendas, descrições, artigos e newsletters podem ter uma primeira versão gerada por IA e depois personalizada com sua voz e experiências reais — o toque humano continua sendo o que gera conexão.</p>

      <h2>Edição de vídeo e áudio</h2>
      <p>Ferramentas de IA já cortam silêncios, geram legendas automáticas, sugerem melhores trechos de um vídeo longo e até traduzem sua voz para outros idiomas.</p>

      <h2>Artes e capas</h2>
      <p>Geração de imagem por IA permite criar capas, thumbnails e artes para posts em minutos, sem depender de banco de imagens genérico.</p>

      <h2>O erro mais comum de quem começa</h2>
      <p>Publicar o conteúdo exatamente como a IA entregou, sem revisão nem personalidade. Isso deixa o resultado genérico e reduz a conexão com o público. A fórmula que funciona é: <strong>IA para velocidade + você para autenticidade</strong>.</p>

      <h2>Um fluxo simples para replicar</h2>
      <ol>
        <li>Gere 5 ideias de conteúdo com IA a partir do seu nicho.</li>
        <li>Escolha uma e peça um roteiro estruturado.</li>
        <li>Grave ou escreva com sua própria voz, usando o roteiro como guia.</li>
        <li>Use IA para editar, legendar e gerar a arte de capa.</li>
      </ol>
      <p>Esse fluxo, repetido diariamente, é exatamente como blogs e canais especializados — como este — conseguem manter constância de publicação sem perder qualidade.</p>
    `,
  },
  {
    slug: "empregos-que-a-ia-vai-transformar-como-se-preparar",
    title: "Os Empregos que a IA Vai Transformar (e Como se Preparar)",
    excerpt:
      "Nem toda profissão vai desaparecer, mas quase todas vão mudar. Entenda o que está em jogo e como se preparar para continuar relevante.",
    category: "futuro",
    date: "2026-09-06",
    readTime: 8,
    imageQuery: "future of work office people",
    seed: 8,
    content: `
      <p>É comum ouvir que "a IA vai roubar empregos". A realidade, segundo a maioria dos estudos sérios sobre o tema, é mais precisa: a IA não substitui profissões inteiras da noite para o dia — ela transforma tarefas dentro delas.</p>

      <h2>O que realmente está mudando</h2>
      <p>Tarefas repetitivas, previsíveis e baseadas em padrões (organizar dados, gerar relatórios simples, responder perguntas frequentes) são as mais afetadas. Tarefas que exigem julgamento humano, relacionamento, criatividade aplicada e responsabilidade sobre decisões continuam difíceis de automatizar por completo.</p>

      <h2>Áreas com mudanças mais visíveis</h2>
      <ul>
        <li><strong>Atendimento ao cliente:</strong> parte do volume já é absorvida por assistentes de IA, restando casos mais complexos para humanos.</li>
        <li><strong>Produção de conteúdo:</strong> a primeira versão de textos e artes é cada vez mais gerada com apoio de IA.</li>
        <li><strong>Administrativo e financeiro:</strong> tarefas de organização e conferência de dados são cada vez mais automatizadas.</li>
        <li><strong>Programação:</strong> IA já ajuda a escrever e revisar código, tornando desenvolvedores mais produtivos — não obrigatoriamente dispensáveis.</li>
      </ul>

      <h2>Como se preparar de verdade</h2>
      <ol>
        <li><strong>Aprenda a usar IA na sua área</strong>, mesmo que superficialmente. Isso já coloca você à frente da maioria.</li>
        <li><strong>Desenvolva habilidades difíceis de automatizar:</strong> negociação, liderança, resolução de problemas complexos, relacionamento com clientes.</li>
        <li><strong>Vire quem supervisiona a IA</strong>, não quem compete com ela. Empresas vão precisar cada vez mais de gente que sabe orientar e revisar o que a IA produz.</li>
        <li><strong>Fique confortável com mudança constante.</strong> A ferramenta que é referência hoje pode não ser em um ano — o hábito de aprender rápido é o que mais protege sua carreira.</li>
      </ol>

      <h2>Uma forma útil de pensar sobre isso</h2>
      <p>Historicamente, toda grande mudança tecnológica eliminou algumas profissões e criou outras que sequer existiam antes. Quem se atualiza cedo tende a estar do lado das novas oportunidades — quem espera demais tende a ser pego de surpresa.</p>
    `,
  },
  {
    slug: "agentes-de-ia-o-futuro-do-trabalho-autonomo-explicado",
    title: "Agentes de IA: O Futuro do Trabalho Autônomo Explicado de Forma Simples",
    excerpt:
      "Você já ouviu falar em 'agentes de IA' mas não entendeu direito o que isso significa na prática? Este artigo explica de um jeito simples.",
    category: "futuro",
    date: "2026-09-07",
    readTime: 7,
    imageQuery: "robot assistant technology future",
    seed: 9,
    content: `
      <p>Depois dos chatbots que respondem perguntas, a próxima onda da inteligência artificial são os <strong>agentes de IA</strong> — sistemas capazes de executar tarefas completas sozinhos, com pouca ou nenhuma supervisão humana a cada passo.</p>

      <h2>Qual a diferença entre um chatbot e um agente?</h2>
      <p>Um chatbot responde uma pergunta de cada vez. Um agente recebe um objetivo — por exemplo, "organize minha agenda da semana e responda esses três e-mails pendentes" — e executa uma sequência de ações sozinho para chegar ao resultado, usando ferramentas como navegador, planilhas, e-mail ou outros softwares.</p>

      <h2>Exemplos práticos que já existem</h2>
      <ul>
        <li>Agentes que pesquisam preços de produtos em vários sites e montam uma comparação automática.</li>
        <li>Agentes que respondem clientes, verificam pedidos em um sistema e resolvem problemas simples sem intervenção humana.</li>
        <li>Agentes que organizam informações de reuniões, atualizam planilhas e enviam resumos automaticamente.</li>
      </ul>

      <h2>Por que isso é uma oportunidade, não só uma ameaça</h2>
      <p>Assim como aconteceu com sites e aplicativos, vai surgir uma demanda enorme por pessoas e pequenas empresas que sabem <strong>configurar, treinar e vender</strong> agentes de IA para negócios que não têm tempo nem conhecimento técnico para fazer isso sozinhos. Esse é um dos mercados que mais deve crescer nos próximos anos.</p>

      <h2>Como começar a se preparar</h2>
      <ol>
        <li>Entenda bem o básico de IA generativa (veja nosso <a href="/artigos/o-que-e-inteligencia-artificial-guia-completo">guia para iniciantes</a>).</li>
        <li>Explore ferramentas de automação que já se conectam a IA para criar fluxos simples.</li>
        <li>Pratique montando um pequeno fluxo automatizado para uma tarefa real sua ou de alguém próximo.</li>
        <li>Documente o processo — esse conhecimento já é vendável como serviço hoje.</li>
      </ol>

      <h2>O que fica de aprendizado</h2>
      <p>Agentes de IA representam a transição de "ferramenta que ajuda" para "sistema que executa". Quem entender esse movimento cedo — mesmo sem ser da área técnica — vai estar em posição privilegiada para aproveitar a próxima onda de oportunidades. É exatamente esse tipo de conteúdo que o Portal da AI vai trazer todos os dias.</p>
    `,
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string) {
  return articles.filter((a) => a.category === category);
}

export function getRelatedArticles(current: Article, limit = 3) {
  return articles
    .filter((a) => a.slug !== current.slug)
    .sort((a, b) =>
      a.category === current.category ? -1 : b.category === current.category ? 1 : 0
    )
    .slice(0, limit);
}

export function sortedArticles() {
  return [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
