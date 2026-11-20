import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "carreira-em-ciberseguranca-com-ia-vagas-trilha-e-habilidades",
  title: "Carreira em cibersegurança com IA: vagas, trilha e habilidades",
  seoTitle: "Carreira em cibersegurança com IA: vagas e trilha de estudo",
  excerpt:
    "Carreira em cibersegurança com IA: veja o que os dados de vagas mostram, quais cargos crescem, uma trilha de 6 meses com prompts e como montar portfólio sem prometer salário.",
  metaDescription:
    "Quer entrar em cibersegurança com IA? Veja o que dizem os dados de vagas de 2026, quais funções crescem ou caem, as habilidades pedidas e uma trilha de estudo de 6 meses.",
  category: "carreira",
  articleSubcategory: "desenvolvimento-de-habilidades",
  date: "2026-10-19",
  readTime: 9,
  imageQuery: "security analyst monitors screens network",
  seed: 468,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Um relatório de vagas dos Estados Unidos mostra que, de janeiro a setembro de 2026, os anúncios de cibersegurança caíram 26,4%, enquanto o cargo de engenheiro de segurança de IA cresceu 268,3%.",
    "Os dados são americanos e descrevem o que mudou, não o motivo, então servem como pista de direção para quem está no Brasil e não como promessa de emprego.",
    "A trilha mais segura combina base de redes e sistemas, prática em laboratórios, uso de IA como apoio de estudo e um portfólio com projetos que você consegue explicar.",
  ],
  content: `
    <p>Uma carreira em cibersegurança com IA é possível para quem aprende a base técnica e usa a IA como ferramenta, mas o mercado está mudando: dados de vagas dos Estados Unidos mostram queda geral nos anúncios e alta em funções ligadas a segurança de IA. Não há atalho nem salário garantido, e a trilha realista leva meses de estudo e prática.</p>

    <p>Este guia reúne o que os números dizem (com a ressalva de que são dados americanos), quais habilidades aparecem nas pesquisas do setor, uma trilha de 6 meses como exemplo, prompts para estudar sem trapacear e como mostrar competência a um recrutador. Se você ainda está decidindo se muda de área, vale ler antes <a href="/artigos/como-migrar-de-carreira-para-area-de-ia">como migrar de carreira para a área de IA</a>.</p>

    <h2>O que os dados de vagas mostram em 2026</h2>
    <p>Segundo o relatório da CyberSN, publicado pelo <a href="https://www.securityweek.com/us-cybersecurity-job-postings-fall-26-as-ai-security-engineer-demand-soars/" target="_blank" rel="noopener noreferrer">SecurityWeek em 18 de outubro de 2026</a>, as vagas de cibersegurança nos Estados Unidos somaram 235.786 anúncios de janeiro a setembro de 2026, queda de 26,4% sobre os 320.210 do mesmo período de 2025, o menor nível em quatro anos. Os dados vêm de uma base agregada de anúncios, sem duplicados, organizada em 45 funções.</p>
    <p>Dentro do total, os movimentos são muito diferentes. O cargo de engenheiro de segurança de IA cresceu 268,3%, e o de cientista de dados de cibersegurança, 203,5%. Entre as quedas, o relatório cita analista de ameaças internas (menos 55,6%), analista de risco (menos 51,5%), pentester (menos 45,9%) e líder de cibersegurança (menos 41,0%). Cerca de 15% dos anúncios mencionam IA, quase igual ao ano anterior, com pico de 20% em setembro de 2026. O próprio relatório descreve o que mudou, e não por quê, então não use esses números para afirmar que a IA "acabou" com alguma função.</p>
    <div class="callout-box callout-warn"><span class="callout-label">Leitura com cuidado</span><p>Os dados são dos Estados Unidos e contam anúncios, não contratações. Para o Brasil, procure vagas reais em portais e perfis de recrutadores antes de decidir. A <a href="/noticias/ciberseguranca-vagas-caem-26-engenheiro-seguranca-ia-sobe-268">notícia do Portal da AI sobre o relatório</a> traz o resumo.</p></div>

    <h2>O que a pesquisa do setor diz sobre habilidades</h2>
    <p>O estudo de força de trabalho de 2024 da ISC2, associação internacional de profissionais de segurança, ouviu 15.852 pessoas e <a href="https://www.isc2.org/Insights/2024/10/ISC2-2024-Cybersecurity-Workforce-Study" target="_blank" rel="noopener noreferrer">publicou os resultados em 31 de outubro de 2024</a>. Cerca de 59% dos respondentes disseram que lacunas de habilidades afetaram de forma substancial a capacidade de proteger suas organizações, e 51% esperam que habilidades não técnicas pesem mais em um mundo guiado por IA. Gestores de contratação citaram resolução de problemas, trabalho em equipe, colaboração, curiosidade e comunicação acima de habilidades técnicas como segurança em nuvem.</p>
    <p>O mesmo estudo aponta que 80% dos profissionais acreditam que suas habilidades de segurança ficarão mais importantes em um mundo de IA, e que 48% estavam aprendendo habilidades ligadas a IA. O dado de uma "lacuna de 4,76 milhões de profissionais", também da ISC2, mede a diferença entre a equipe que as organizações dizem precisar e a que têm, e a própria entidade esclarece que não é um número de vagas abertas. Esse estudo é de 2024, então trate-o como contexto, não como retrato de hoje.</p>
    <p>Para quem começa, o recado é prático: base técnica sólida, curiosidade e comunicação clara. Essa combinação conversa com o que o texto sobre <a href="/artigos/habilidades-humanas-que-a-ia-nao-substitui-no-trabalho">habilidades humanas que a IA não substitui</a> defende.</p>

    <h2>Funções que crescem e funções em transformação</h2>
    <p>Sem prometer o futuro, os dados sugerem onde olhar. Segurança de IA aparece em alta, e isso inclui riscos que já têm nome: injeção de comandos em assistentes que leem páginas e e-mails (<a href="/artigos/prompt-injection-risco-de-ia-que-le-paginas-e-emails">prompt injection</a>), segurança de conectores entre agentes e sistemas (<a href="/artigos/mcp-model-context-protocol-o-que-e-e-como-conecta-agentes-de-ia">MCP</a>) e vazamento de dados em ferramentas públicas (<a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a>). O relatório também mostra que funções de pesquisa, ofensiva e governança são as que mais mencionam IA nos anúncios.</p>
    <table>
      <thead><tr><th>Direção</th><th>Função (dados dos EUA, jan a set/2026)</th><th>Variação</th></tr></thead>
      <tbody>
        <tr><td>Alta</td><td>Engenheiro de segurança de IA</td><td>+268,3%</td></tr>
        <tr><td>Alta</td><td>Cientista de dados de cibersegurança</td><td>+203,5%</td></tr>
        <tr><td>Queda</td><td>Analista de risco</td><td>-51,5%</td></tr>
        <tr><td>Queda</td><td>Pentester</td><td>-45,9%</td></tr>
        <tr><td>Queda</td><td>Líder de cibersegurança</td><td>-41,0%</td></tr>
      </tbody>
    </table>
    <p>Quedas de anúncios não significam que a função desapareceu: o relatório nota, por exemplo, que o número de vagas de CISO vem depois de um 2025 muito forte. O que serve de lição é a diversificação: quem tem base e também entende IA tem mais caminhos.</p>

    <h2>Trilha de 6 meses para quem começa</h2>
    <p>Este é um exemplo de organização, não um programa oficial. Considere 8 a 10 horas por semana e ajuste ao seu tempo.</p>
    <h3>Meses 1 e 2: base</h3>
    <p>Redes (IP, DNS, portas), sistemas (Linux e Windows), noções de criptografia e senhas. Faça anotações com as próprias palavras. Se você nunca programou, o roteiro de <a href="/artigos/aprender-python-com-ia-roteiro-de-30-dias-para-iniciantes">Python com IA em 30 dias</a> ajuda com automação simples.</p>
    <h3>Meses 3 e 4: prática</h3>
    <p>Laboratórios práticos em ambientes de treino legais e feitos para isso, nunca em sistemas de terceiros sem autorização. Registre cada exercício: objetivo, passos, o que deu errado, o que aprendeu. Use a IA para explicar conceitos, mas execute você mesmo.</p>
    <h3>Mês 5: especialização leve</h3>
    <p>Escolha uma direção para aprofundar: defesa e monitoramento, governança e conformidade, ou segurança de aplicações com IA. Para decidir, leia <a href="/artigos/especialista-em-nicho-de-ia-ou-generalista-o-que-vale-mais">especialista em nicho ou generalista</a>.</p>
    <h3>Mês 6: portfólio e candidatura</h3>
    <p>Reúna 2 a 3 projetos documentados e ajuste o currículo, conforme o roteiro de <a href="/artigos/como-colocar-habilidades-de-ia-no-curriculo">habilidades de IA no currículo</a>. Sobre certificações, o artigo <a href="/artigos/certificacoes-de-ia-que-valem-a-pena-para-a-carreira">certificações que valem a pena</a> mostra como avaliar custo e retorno, e vale conferir o que as vagas que você quer realmente pedem antes de pagar por prova.</p>

    <h2>Como usar IA para estudar cibersegurança sem trapacear</h2>
    <p>A IA é boa tutora de conceitos, e ruim como fonte final. Peça explicações em camadas, exemplos defensivos e perguntas de revisão, e confirme em documentação oficial. Não peça nem use a IA para atacar sistemas de outras pessoas: além de ilegal, não ensina nada.</p>
    <pre><code>Explique como funciona [conceito, por exemplo DNS ou phishing] para quem está começando em cibersegurança. Use um exemplo do dia a dia, depois descreva como um defensor detectaria o problema. Termine com 5 perguntas de revisão sem resposta.</code></pre>
    <pre><code>Estou montando um laboratório de estudo em máquina virtual própria. Sugira 5 exercícios defensivos de nível iniciante, com o objetivo de cada um e o que devo registrar no meu caderno de laboratório. Não sugira nada que envolva sistemas de terceiros.</code></pre>
    <pre><code>Revise este resumo que escrevi sobre [tema] e liste os erros técnicos que encontrar, com a explicação de cada um. Marque o que você não tem certeza para eu confirmar na documentação.</code></pre>
    <p>O guia de <a href="/artigos/como-usar-ia-para-identificar-fechar-lacunas-de-habilidades">como identificar e fechar lacunas de habilidades com IA</a> mostra como transformar esses resultados em plano de estudo.</p>

    <h2>Portfólio e candidatura: como provar o que você sabe</h2>
    <p>Em segurança, a prova é o que você mostra que fez. Um portfólio simples pode ter um caderno de laboratório com 5 a 8 exercícios documentados, um relatório de análise de um incidente público (com as fontes citadas) e um guia de segurança escrito para leigos, por exemplo para pequenos negócios. O texto sobre <a href="/artigos/como-montar-portfolio-de-habilidades-de-ia-para-recrutadores">portfólio de habilidades de IA para recrutadores</a> traz o formato, e o de <a href="/artigos/curriculo-e-triagem-com-ia-como-recrutadores-filtram-candidatos">currículo e triagem com IA</a> explica como o seu documento é lido antes de chegar a uma pessoa.</p>
    <p>Exemplo prático: alguém de suporte técnico que quer migrar escreve um guia de 4 páginas, <a href="/artigos/como-usar-ia-para-checar-mensagem-suspeita-e-evitar-golpes">como checar mensagem suspeita e evitar golpes</a> para clientes, com base no que já vê no atendimento. É um projeto pequeno, útil, que mostra comunicação clara. Para entrevistas técnicas, o roteiro de <a href="/artigos/como-se-preparar-para-entrevistas-de-emprego-usando-ia">preparação para entrevistas com IA</a> serve de treino. Vagas de IA no mercado podem ser vistas em <a href="/artigos/vagas-de-ia-no-brasil-quais-cargos-contratando-2026">vagas de IA no Brasil</a>.</p>

    <h2>Erros comuns de quem quer entrar na área</h2>
    <ul class="checklist">
      <li>Pular a base de redes e sistemas e ir direto para ferramentas.</li>
      <li>Comprar vários cursos sem produzir nada.</li>
      <li>Testar técnicas em sistemas que não são seus.</li>
      <li>Confiar em respostas de IA sem conferir a documentação oficial.</li>
      <li>Ignorar comunicação: relatório claro vale tanto quanto achado técnico.</li>
      <li>Esperar que um relatório de vagas dos EUA descreva o mercado brasileiro.</li>
    </ul>

    <h2>Seu próximo passo</h2>
    <p>Defina as 8 a 10 horas semanais, escolha o primeiro conceito de rede e abra um caderno de laboratório hoje. Em um mês, você terá a primeira página de portfólio. Para decidir o rumo mais amplo, use o <a href="/artigos/plano-de-carreira-com-ia-metas-de-90-dias">plano de carreira com IA</a> e siga a categoria de carreira do Portal da AI.</p>
  `,
  faq: [
    {
      question: "Vale a pena entrar em cibersegurança em 2026?",
      answer:
        "Depende do seu perfil e do mercado local. Dados dos Estados Unidos mostram queda nos anúncios gerais e alta em funções de segurança de IA, mas são dados de outro país. Pesquise vagas brasileiras, teste a área com cursos gratuitos e laboratórios antes de investir pesado.",
    },
    {
      question: "A IA vai acabar com as vagas de cibersegurança?",
      answer:
        "Nenhuma fonte consultada afirma isso. O relatório da CyberSN descreve quedas em algumas funções e altas em outras, sem estabelecer causa. Na prática, a IA muda tarefas e cria funções novas, como segurança de IA, então aprender a usá-la como apoio é parte de se manter competitivo.",
    },
    {
      question: "Preciso saber programar para trabalhar com cibersegurança?",
      answer:
        "Nem sempre, mas ajuda. Funções de governança e conformidade pedem menos código, e funções de defesa e pesquisa pedem mais. Noções de Python e de linha de comando facilitam a automação de tarefas repetitivas. Comece pela base de redes e sistemas e avance conforme a função escolhida.",
    },
    {
      question: "Quanto tempo leva para começar na área?",
      answer:
        "Não há prazo garantido. Uma trilha organizada de seis meses, com 8 a 10 horas por semana, pode dar base e portfólio inicial, mas a primeira vaga depende de mercado, experiência prévia e rede de contatos. Quem vem de TI ou suporte costuma ter caminho mais curto.",
    },
    {
      question: "Posso usar a IA para estudar hacking?",
      answer:
        "Pode usá-la para explicar conceitos e criar exercícios defensivos, em laboratório próprio e com autorização. Testar técnicas em sistemas de terceiros sem permissão é crime e não ensina o que um empregador procura. Use ambientes de treino feitos para isso e documente o que aprendeu.",
    },
  ],
};
