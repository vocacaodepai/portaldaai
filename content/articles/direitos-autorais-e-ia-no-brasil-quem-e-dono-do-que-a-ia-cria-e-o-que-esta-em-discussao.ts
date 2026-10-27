import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "direitos-autorais-e-ia-no-brasil-quem-e-dono-do-que-a-ia-cria-e-o-que-esta-em-discussao",
  title: "Direitos autorais e IA no Brasil: quem é dono do que a IA cria",
  seoTitle: "Direitos autorais e IA no Brasil: quem é o dono",
  excerpt:
    "Texto, imagem ou música feitos com IA têm dono? Veja o que a lei brasileira diz, o que o PL 2338 e os projetos apensados discutem e como se proteger ao publicar.",
  metaDescription:
    "Direitos autorais e IA no Brasil: o que vale hoje para textos e imagens gerados por IA, o que está em debate na Câmara e um checklist prático para criadores e empresas.",
  category: "futuro",
  articleSubcategory: "regulacao-e-etica",
  date: "2026-10-26",
  readTime: 7,
  imageQuery: "gavel law books copyright desk",
  seed: 724,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "A Lei de Direitos Autorais brasileira (Lei 9.610/1998) foi escrita para obras de pessoas, e não há hoje uma regra específica que diga quem é dono de um resultado gerado só por IA.",
    "Na Câmara, o PL 2338/2023 tramita em comissão especial com projetos apensados que propõem mudar a Lei 9.610 para tratar de autoria, registro e responsabilidade por obras com IA.",
    "Quem publica ou vende conteúdo feito com IA deve guardar o histórico de criação, revisar o que sai da ferramenta, ler os termos de uso e evitar copiar estilo e obra de terceiros.",
  ],
  content: `
    <p>Direitos autorais e IA é a pergunta de quem usa uma ferramenta para criar texto, imagem ou música: o resultado tem dono? No Brasil, a lei de direitos autorais foi pensada para criações de pessoas e ainda não traz uma regra específica para o que é gerado só por inteligência artificial. Por isso, o caminho seguro é tratar o conteúdo de IA como algo que você precisa revisar, personalizar e documentar, em vez de supor que ele já nasce protegido.</p>

    <p>O assunto está em movimento: projetos de lei na Câmara discutem autoria, registro e responsabilidade, e tribunais em outros países já analisam o treinamento de modelos. Este guia separa o que é regra vigente, o que é proposta e o que ainda é dúvida, e termina com um checklist para criadores, freelancers e donos de pequenos negócios que publicam material feito com IA.</p>

    <h2>O que a lei brasileira diz hoje sobre autoria</h2>

    <p>A Lei 9.610/1998, a Lei de Direitos Autorais, protege obras intelectuais criadas por uma pessoa. A ideia central é a de autor como ser humano que cria. Ela não foi escrita para uma máquina que produz imagens e textos a partir de comandos, e por isso não existe, no texto em vigor, um artigo que responda sozinho à pergunta de quem é o dono de uma imagem gerada por IA.</p>

    <p>Na prática, isso gera três situações. Quando a pessoa escreve, edita e decide cada escolha criativa e usa a IA como apoio, a obra tende a ser tratada como dela. Quando a ferramenta produz tudo a partir de um comando curto, a autoria humana é frágil e a proteção é incerta. No meio fica o conteúdo com muita edição humana, onde o que conta é demonstrar a sua contribuição.</p>

    <p>Esse raciocínio é uma leitura de como a lei funciona, não uma decisão de tribunal brasileiro específica. Para um caso concreto, como contrato com cliente ou disputa sobre uma arte, a orientação de um advogado que atue com propriedade intelectual faz diferença.</p>

    <h2>O que está em discussão na Câmara</h2>

    <p>O projeto mais conhecido é o PL 2338/2023, que dispõe sobre o desenvolvimento, o fomento e o uso ético e responsável da inteligência artificial. Ele foi aprovado pelo Senado e tramita na Câmara dos Deputados em uma comissão especial. Na <a href="https://www.camara.leg.br/proposicoesWeb/fichadetramitacao?idProposicao=2487262" target="_blank" rel="noopener noreferrer">ficha de tramitação da Câmara</a>, consultada em 26/10/2026, a situação aparecia como aguardando parecer do relator, com o deputado Aguinaldo Ribeiro designado na função e movimentações recentes de apensação de outros projetos, a mais nova de 02/09/2026.</p>

    <p>Entre os projetos apensados há propostas sobre direitos autorais. A própria ficha lista o PL 1685/2025 e o PL 1969/2025, que propõem incluir na Lei 9.610/1998 regras sobre titularidade, autoria, registro e responsabilidade civil por obras geradas por IA, e o PL 6172/2025, sobre proteção de autores de obras criadas com IA. Também há registro de pedido de audiência pública sobre o tema, o que mostra que o assunto está em debate, não decidido.</p>

    <p>Nada disso é lei ainda. Até uma votação e uma sanção, vale a regra geral atual. Quem quiser acompanhar o contexto político pode ler a notícia sobre o <a href="/noticias/marco-legal-ia-congresso-trump-xi-descarta-regulacao">marco legal de IA no Congresso</a> e o guia de <a href="/artigos/decisao-automatizada-lgpd-como-pedir-revisao-de-uma-ia">decisão automatizada e LGPD</a>, que trata de outro lado da regulação.</p>

    <h2>O que outros países estão decidindo</h2>

    <p>O debate lá fora ajuda a entender para onde a conversa pode ir, sem valer como lei no Brasil. O Escritório de Direitos Autorais dos Estados Unidos mantém uma <a href="https://www.copyright.gov/ai/" target="_blank" rel="noopener noreferrer">página sobre direitos autorais e inteligência artificial</a> com um relatório em partes: a Parte 1 sobre réplicas digitais (julho de 2024), a Parte 2 sobre a possibilidade de proteger resultados gerados com IA (janeiro de 2025) e a Parte 3 sobre o treinamento de modelos com obras protegidas (maio de 2025, em versão preliminar).</p>

    <p>Esse recorte já mostra a divisão em dois problemas. O primeiro é o da saída: o que a IA entrega pode ser protegido e por quem. O segundo é o da entrada: se treinar um modelo com livros, fotos e músicas de terceiros exige licença. Os dois estão em disputa, e os processos aparecem em várias frentes, como mostram as notícias sobre o <a href="/noticias/justica-eua-ia-copyright-fair-use-westlaw">tribunal dos EUA que negou uso justo a uma IA treinada com dados da Westlaw</a> e o <a href="/noticias/sony-warner-processam-anthropic-direitos-autorais">processo de gravadoras contra uma empresa de IA</a>.</p>

    <p>Para o criador brasileiro, a lição é que o terreno ainda muda. O que vale hoje pode ter outra regra em um ou dois anos, e quem guarda registros do próprio processo criativo fica melhor posicionado em qualquer cenário.</p>

    <h2>Tabela: situações comuns e o nível de risco</h2>

    <table>
      <thead>
        <tr><th>Situação</th><th>Risco para quem publica</th><th>O que fazer</th></tr>
      </thead>
      <tbody>
        <tr><td>Texto próprio, IA só para revisar</td><td>Baixo</td><td>Guardar rascunhos e versões</td></tr>
        <tr><td>Imagem gerada por comando curto, sem edição</td><td>Médio: autoria humana frágil</td><td>Editar, compor e documentar suas escolhas</td></tr>
        <tr><td>Pedir a imagem no estilo de um artista vivo</td><td>Alto: pode lembrar obra de terceiro</td><td>Evitar e descrever o resultado, não o artista</td></tr>
        <tr><td>Colar texto de outra pessoa e pedir reescrita</td><td>Alto: pode ser plágio ou derivação</td><td>Usar só material seu ou com licença</td></tr>
        <tr><td>Vender arte feita com IA</td><td>Médio: depende dos termos da ferramenta</td><td>Ler a licença do plano e avisar o cliente</td></tr>
      </tbody>
    </table>

    <h2>Exemplo: designer freelancer entrega logo feito com IA</h2>

    <p>Uma designer cobra R$ 600 por uma identidade visual para uma cafeteria. Ela gera 40 variações com IA, escolhe duas, redesenha o símbolo à mão, define as cores e a tipografia e entrega o manual de marca. O cliente depois pergunta se pode registrar o logo e se a designer garante que ninguém tem direito sobre ele.</p>

    <p>A resposta honesta é que ela não pode garantir exclusividade absoluta. Pode, porém, mostrar o que fez: os arquivos de rascunho, as versões, as escolhas manuais, e uma busca de semelhança. No contrato, ela descreve que a IA foi usada como ferramenta de apoio, que a cessão cobre o que é de autoria dela e que o cliente deve fazer a busca de marca antes do registro. O texto sobre <a href="/artigos/nome-e-marca-do-pequeno-negocio-busca-no-inpi-dominio-e-ia">nome e marca no INPI</a> mostra como fazer essa checagem, e o guia <a href="/artigos/como-vender-artes-e-fotos-criadas-com-ia-generativa">como vender artes e fotos criadas com IA</a> detalha a parte comercial.</p>

    <h2>Checklist para publicar com IA sem se complicar</h2>

    <ul class="checklist">
      <li>Guarde o comando usado, as versões geradas e as edições que você fez.</li>
      <li>Leia os termos de uso do plano da ferramenta: eles dizem quem pode usar o resultado e se uso comercial é permitido.</li>
      <li>Não peça cópia de obra, personagem ou voz de alguém identificável.</li>
      <li>Revise o resultado: IA pode reproduzir trechos parecidos com material existente.</li>
      <li>Em trabalho para cliente, escreva no contrato que IA foi usada e o que a cessão cobre.</li>
      <li>Rotule conteúdo sintético quando a plataforma ou o contexto exigirem; o texto sobre <a href="/artigos/content-credentials-c2pa-como-saber-se-imagem-foi-feita-por-ia">Content Credentials</a> mostra uma forma de marcar a origem.</li>
    </ul>

    <p>Para texto, um prompt que ajuda a reduzir risco é pedir ideias e estrutura em vez de trechos prontos:</p>

    <pre><code>Quero escrever um texto original sobre [tema]. Não copie trechos de nenhuma fonte. Sugira 3 estruturas de roteiro e 5 perguntas que o leitor faria. Eu escrevo o texto com as minhas palavras e depois peço a sua revisão de clareza.</code></pre>

    <h2>Erros comuns de quem publica conteúdo de IA</h2>

    <p>O primeiro erro é presumir que tudo que a IA entrega é livre. O segundo é prometer exclusividade ao cliente sem ter como garantir. O terceiro é usar voz, rosto ou estilo reconhecível de uma pessoa sem autorização, o que pode abrir discussão sobre direito de imagem e voz, além de autoria. Sobre <a href="/artigos/ganhar-dinheiro-com-clonagem-de-voz-usando-ia">clonagem de voz</a> e <a href="/artigos/deepfakes-ia-identificar-conteudo-falso-proteger-reputacao">deepfakes</a>, há riscos próprios.</p>

    <p>O quarto erro é ignorar o contexto de dados. Colar material de cliente em uma ferramenta pode violar sigilo e a LGPD, tema do <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">checklist de LGPD</a> e do texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">o que você entrega sem perceber</a>. Já para contratos, o guia de <a href="/artigos/ia-para-contratos-revisar-documentos-juridicos-mais-rapido">IA para revisar contratos</a> mostra o que a IA ajuda e o que exige advogado.</p>

    <h2>Como acompanhar a regra sem virar especialista</h2>

    <p>Defina um hábito simples: uma vez por mês, abra a ficha do projeto na Câmara, leia as últimas movimentações e veja se a situação mudou. Se o PL 2338 for votado, as regras sobre direitos autorais podem mudar o que está neste texto, e a data de consulta indicada acima é a referência do que foi lido.</p>

    <p>Enquanto isso, trate IA como ferramenta, não como autora. Quem cria com critério, documenta o processo e respeita a obra alheia está no lado seguro da conversa. Para ver outros temas de regra e ética, passe pela <a href="/categoria/futuro">categoria Futuro</a> e pelo guia sobre <a href="/artigos/eca-digital-e-ia-o-que-muda-para-pais-criancas-chatbots-e-apps">ECA Digital e IA</a>.</p>
  `,
  faq: [
    {
      question: "Imagem feita por IA tem direito autoral no Brasil?",
      answer:
        "A Lei 9.610/1998 protege obras de pessoas e não tem regra específica para saídas geradas só por IA. Se há contribuição humana criativa clara, como edição e composição, a proteção da parte humana é mais defensável. Para uso comercial importante, consulte um advogado de propriedade intelectual.",
    },
    {
      question: "Posso vender texto ou arte gerados por IA?",
      answer:
        "Em geral sim, desde que os termos da ferramenta permitam uso comercial no seu plano e o material não copie obra de terceiros. Informe o cliente de que houve uso de IA, não prometa exclusividade absoluta e guarde o histórico de criação para mostrar sua contribuição.",
    },
    {
      question: "O PL 2338 já é lei?",
      answer:
        "Não. Na ficha de tramitação da Câmara consultada em 26/10/2026, o projeto estava em comissão especial, aguardando parecer do relator, com outros projetos apensados. Só vira lei depois de votação nas duas Casas e sanção, então confira a ficha antes de citar.",
    },
    {
      question: "A IA pode copiar o estilo de um artista?",
      answer:
        "Estilo em si costuma ser tratado de forma diferente de obra, mas reproduzir elementos reconhecíveis de uma obra ou usar o nome de um artista vivo no comando aumenta o risco de disputa. O caminho mais seguro é descrever o resultado desejado, não o artista.",
    },
    {
      question: "Quem responde se a IA gerar algo que viola direito de terceiro?",
      answer:
        "A regra específica ainda está em debate. Quem publica o conteúdo costuma ser quem responde perante o titular do direito, e os termos de cada ferramenta podem limitar a responsabilidade dela. Revisar antes de publicar e manter registros reduz o risco.",
    },
  ],
};
