import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "vibe-coding-para-nao-programadores-carreira-e-riscos",
  title: "Vibe coding para não programadores: carreira e riscos",
  seoTitle: "Vibe coding para não programadores: como começar",
  excerpt:
    "Vibe coding permite criar apps descrevendo o que você quer. Veja como começar sem programar, o que isso muda na carreira e os riscos de segurança e de custo.",
  metaDescription:
    "Vibe coding para quem não programa: o que é, ferramentas como AI Studio e Lovable, um projeto de 7 dias para o portfólio e os riscos que você precisa conhecer.",
  category: "carreira",
  articleSubcategory: "desenvolvimento-de-habilidades",
  date: "2026-10-13",
  readTime: 7,
  imageQuery: "person typing laptop code editor coffee",
  seed: 277,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Vibe coding é criar um app descrevendo o que se quer em linguagem natural e deixando a IA gerar o código, o que permite a profissionais de outras áreas prototipar ferramentas próprias.",
    "Para a carreira, o valor está em resolver um problema real do seu trabalho e mostrar o resultado, não em dizer que sabe programar.",
    "Os riscos são reais: o código gerado pode ter falhas, apps públicos podem gerar custo ou expor dados, e um protótipo não é um sistema pronto para clientes.",
  ],
  content: `
    <p>Vibe coding é criar um aplicativo descrevendo em linguagem natural o que você quer e deixando uma IA escrever o código, com visualização imediata do resultado. A própria documentação do Google AI Studio usa o termo para o seu modo de construção de apps. Para quem não programa, isso abre uma porta: dá para montar ferramentas simples para o seu trabalho, mas com limites e riscos que precisam ser conhecidos.</p>

    <p>Este guia é para profissionais que querem usar vibe coding como habilidade de carreira: você vai ver o que dá para fazer, as ferramentas, um projeto de sete dias para o portfólio, como mostrar isso no currículo e os cuidados de segurança, custo e honestidade. Não se trata de virar programador em uma semana, e sim de ganhar autonomia para testar ideias.</p>

    <h2>O que é vibe coding e o que ele não é</h2>

    <p>Na prática, você escreve algo como "crie um site em que eu cole as horas trabalhadas e ele calcule o valor a cobrar por cliente", e a ferramenta gera a tela, a lógica e o visual. Você testa, pede ajustes ("deixe o botão maior", "salve o histórico") e repete até ficar bom. Segundo a <a href="https://ai.google.dev/gemini-api/docs/aistudio-build-mode" target="_blank" rel="noopener noreferrer">documentação do Google AI Studio</a>, o modo Build cria aplicativos web ou Android a partir de instruções em texto, com visualização ao vivo enquanto o código é gerado.</p>

    <p>O que ele não é: um atalho para sistemas críticos, como cobrança, saúde ou dados de muita gente. O código gerado funciona em muitos casos, mas pode ter erros, falhas de segurança e comportamentos que você não entende. Para o debate maior sobre a profissão de quem programa, vale ler <a href="/artigos/ia-vai-substituir-programadores-o-que-muda-ate-2030">se a IA vai substituir programadores</a>, que mostra o outro lado dessa mesma tecnologia.</p>

    <h2>Que ferramentas existem e quanto custam</h2>

    <p>Há várias plataformas, e os planos mudam rápido. O modo Build do AI Studio permite começar com um texto, remixar um projeto da galeria ou importar código do GitHub. Ainda segundo a documentação, os aplicativos web usam React com servidor Node.js, podem ser publicados no Cloud Run com um endereço público (o que pode gerar custo no Google Cloud), e quem compartilha um app consome os próprios limites de uso da API.</p>

    <p>A <a href="https://lovable.dev/pricing" target="_blank" rel="noopener noreferrer">página de preços do Lovable</a>, outra plataforma do tipo, informava em 13/10/2026 um plano gratuito com concessão diária de 5 créditos de construção, limitada a 30 por mês, mais 20 créditos de nuvem. Os valores dos planos pagos não apareciam na captura da página, então consulte o site. Teste primeiro as versões gratuitas e só pague quando tiver um projeto que justifique.</p>

    <table>
      <thead>
        <tr><th>Critério</th><th>O que olhar antes de escolher</th></tr>
      </thead>
      <tbody>
        <tr><td>Custo</td><td>Plano gratuito, créditos por mês e o que acontece quando acabam</td></tr>
        <tr><td>Publicação</td><td>Se gera um endereço público e quem paga a hospedagem</td></tr>
        <tr><td>Saída do código</td><td>Se você consegue exportar e levar o projeto para outro lugar</td></tr>
        <tr><td>Dados</td><td>Onde ficam guardadas as informações e quem tem acesso</td></tr>
      </tbody>
    </table>

    <h2>Projeto de 7 dias para colocar no portfólio</h2>

    <p>Escolha um problema do seu trabalho atual ou anterior, de preferência algo que você já resolve com planilha. Quem trabalha com finanças pode fazer um simulador; quem trabalha com RH, um gerador de checklist de onboarding; quem vende, uma calculadora de comissão. O objetivo é mostrar iniciativa e resultado. Para decidir o tema, o texto sobre <a href="/artigos/como-usar-ia-para-identificar-fechar-lacunas-de-habilidades">identificar e fechar lacunas de habilidades</a> pode ajudar.</p>

    <ol>
      <li><strong>Dia 1:</strong> escreva em 5 linhas o problema, quem usa e como seria o sucesso.</li>
      <li><strong>Dia 2:</strong> peça a primeira versão com o prompt abaixo e teste com dados fictícios.</li>
      <li><strong>Dia 3:</strong> liste o que está errado ou feio e peça ajustes, um de cada vez.</li>
      <li><strong>Dia 4:</strong> teste casos extremos (campo vazio, número negativo, texto longo).</li>
      <li><strong>Dia 5:</strong> peça a um colega do trabalho para usar e anote onde ele se perdeu.</li>
      <li><strong>Dia 6:</strong> escreva uma página explicando o problema, a solução e o que você aprendeu.</li>
      <li><strong>Dia 7:</strong> publique o resultado (sem dados reais) e inclua no portfólio.</li>
    </ol>

    <pre><code>Quero criar um app web simples em português do Brasil. Problema: [DESCREVA]. Quem vai usar: [PERFIL]. Telas: [LISTE]. Regras de cálculo ou lógica: [EXPLIQUE COM EXEMPLO NUMÉRICO]. Use um visual limpo, botões grandes e mensagens de erro claras. Não peça nem guarde dados pessoais. Antes de gerar, me faça até 5 perguntas para esclarecer o que faltou.</code></pre>

    <p>A frase final do prompt, pedindo perguntas, evita que a ferramenta adivinhe o que você não explicou. Mais dicas de estrutura estão no guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">comandos que funcionam</a>.</p>

    <h2>Como transformar isso em argumento na carreira</h2>

    <p>Dizer "sei fazer vibe coding" pesa pouco. Mostrar "criei uma calculadora que reduziu de 40 para 10 minutos a montagem da proposta semanal" pesa muito, desde que o número seja verdadeiro e você consiga explicar como mediu. Use o projeto para provar que identifica problemas, define requisitos e entrega algo que funciona. Para organizar a apresentação, veja <a href="/artigos/como-montar-portfolio-de-habilidades-de-ia-para-recrutadores">como montar um portfólio de habilidades de IA para recrutadores</a> e <a href="/artigos/como-colocar-habilidades-de-ia-no-curriculo">como colocar habilidades de IA no currículo</a>.</p>

    <p>Seja claro sobre o seu papel: você definiu o problema, orientou a IA, testou e decidiu. Não diga que "programou" o que não escreveu. Em entrevista, uma resposta honesta (usei IA para gerar o código, validei os resultados e sei os limites) transmite maturidade. Quem quer ir além na empresa pode combinar isso com o caminho descrito em <a href="/artigos/como-se-tornar-referencia-em-ia-na-empresa-sem-ser-do-ti">como se tornar referência em IA na empresa sem ser do TI</a>.</p>

    <p>Por fim, guarde registros do processo: as instruções que você deu, as versões que descartou e os testes que fez. Esse histórico prova que houve método e não sorte, e ajuda a explicar o projeto em uma entrevista. Se alguém perguntar como você garantiu que os cálculos estavam certos, a resposta deve ser concreta: comparei com a planilha antiga em 20 casos e corrigi as diferenças.</p>

    <h2>Riscos que você precisa conhecer antes de publicar</h2>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Não coloque dados reais de clientes, senhas ou chaves de acesso em um app gerado por IA sem revisão de alguém da área técnica. Um protótipo não é um sistema seguro.</p></div>

    <ul>
      <li><strong>Segurança:</strong> o código pode ter falhas que você não percebe. Chaves de API não devem ficar à vista no código nem em páginas públicas.</li>
      <li><strong>Custo:</strong> a documentação do AI Studio avisa que apps compartilhados usam seus limites de API e que a publicação pode gerar cobrança na nuvem. Acompanhe o consumo.</li>
      <li><strong>Privacidade:</strong> o que você cola no chat vai para um serviço externo. Veja <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">o que você entrega sem perceber</a>.</li>
      <li><strong>Ataques por texto:</strong> apps que leem conteúdo externo podem sofrer prompt injection, explicado em <a href="/artigos/prompt-injection-risco-de-ia-que-le-paginas-e-emails">prompt injection e o risco de IA que lê páginas e e-mails</a>.</li>
      <li><strong>Manutenção:</strong> quem cria precisa cuidar. Se o app quebrar numa atualização, alguém precisa consertar.</li>
      <li><strong>Regras da empresa:</strong> usar dados do trabalho em ferramentas externas pode violar políticas internas. Pergunte antes.</li>
    </ul>

    <h2>Para quem funciona e para quem não funciona</h2>

    <p>Funciona bem para quem tem um problema concreto, paciência para testar e disposição para aprender o básico do que foi gerado. É útil em planilhas e relatórios, como mostra o texto sobre <a href="/artigos/ia-para-planilhas-automatizar-relatorios-excel-sheets">automatizar relatórios no Excel e no Sheets</a>, e para prototipar ideias, como em <a href="/artigos/ia-para-design-de-produto-prototipar-ideia-rapidamente">prototipar uma ideia de produto</a>. Para páginas simples, o guia de <a href="/artigos/como-criar-landing-pages-e-sites-simples-com-ia">landing pages e sites com IA</a> é um caminho mais leve.</p>

    <p>Não funciona bem para quem espera um sistema pronto sem esforço, nem para quem quer vender software a clientes sem entender o que está entregando. Sobre vender produtos digitais com pouca programação, o texto sobre <a href="/artigos/micro-saas-com-ia-ganhar-dinheiro-sem-programar">micro SaaS com IA</a> discute oportunidades e limites. Para decidir se vale aprofundar em tecnologia ou ficar em outra área, veja <a href="/artigos/como-migrar-de-carreira-para-area-de-ia">como migrar de carreira para a área de IA</a> e <a href="/artigos/habilidades-humanas-que-a-ia-nao-substitui-no-trabalho">habilidades humanas que a IA não substitui</a>.</p>

    <p>O próximo passo é pequeno: escolha o problema do seu trabalho que mais se repete, escreva as 5 linhas do dia 1 e abra uma ferramenta gratuita ainda hoje. Se o resultado ajudar, você terá uma história concreta para contar.</p>
  `,
  faq: [
    {
      question: "O que é vibe coding?",
      answer:
        "É criar um aplicativo descrevendo o que você quer em linguagem natural e deixando a IA gerar o código. A documentação do Google AI Studio usa o termo para o modo Build, em que o app aparece em tela ao vivo enquanto é gerado.",
    },
    {
      question: "Preciso saber programar para fazer vibe coding?",
      answer:
        "Não para começar, mas entender o básico do que foi gerado ajuda muito a testar, corrigir e perceber riscos. Comece com projetos pequenos, sem dados reais, e peça à própria IA que explique o código em linguagem simples.",
    },
    {
      question: "Vibe coding é de graça?",
      answer:
        "Algumas plataformas têm plano gratuito com limites, como o Lovable, que informava créditos diários limitados em 13/10/2026. Publicar um app pode gerar custo de hospedagem e de uso de API. Confira os preços de cada serviço antes de publicar.",
    },
    {
      question: "Vibe coding pode virar emprego ou renda?",
      answer:
        "Pode ajudar a mostrar iniciativa e a resolver problemas no trabalho, e há quem ofereça protótipos como serviço. Não há garantia de renda. O que conta é o resultado verificável e a clareza sobre o que foi feito por você e o que foi feito pela IA.",
    },
    {
      question: "É seguro colocar um app feito por IA no ar?",
      answer:
        "Só com cuidado. O código pode ter falhas, e chaves e dados não devem ficar expostos. Para protótipos, use dados fictícios. Para algo que lide com informações de clientes, peça revisão a uma pessoa da área técnica antes de publicar.",
    },
  ],
};
