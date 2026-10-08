import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "ia-e-direitos-autorais-o-que-criadores-precisam-saber",
  title: "IA e direitos autorais: o que criadores precisam saber",
  seoTitle: "IA e direitos autorais: guia para criadores",
  excerpt:
    "IA e direitos autorais no Brasil: veja o que a Lei 9.610 diz, como fica o treino de modelos, o uso comercial de textos e imagens e o que declarar ao cliente.",
  metaDescription:
    "IA e direitos autorais para criadores brasileiros: Lei 9.610, treino de modelos, uso comercial de imagens e textos gerados por IA e o que declarar ao cliente.",
  category: "futuro",
  articleSubcategory: "regulacao-e-etica",
  date: "2026-10-08",
  readTime: 9,
  imageQuery: "copyright law books desk",
  seed: 180,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "A Lei 9.610 protege criações do espírito feitas por pessoas, e não há regra brasileira específica dizendo quem é o autor de uma imagem ou texto gerado só por IA.",
    "O treino de modelos com obras protegidas segue em disputa judicial no mundo e em projetos de lei no Brasil, então o criador deve proteger o que publica e escolher ferramentas com termos claros.",
    "Para usar IA com segurança em trabalho comercial, vale registrar o processo, editar de forma humana relevante, ler os termos da ferramenta e avisar o cliente por escrito.",
  ],
  content: `
    <p>IA e direitos autorais é o assunto que todo criador brasileiro que usa ChatGPT, Midjourney ou Claude acaba encontrando: quem é o dono do que a IA gerou, o que pode ser vendido e o que precisa ser avisado ao cliente. A resposta curta é que a Lei 9.610 protege a criação humana, e o resto ainda depende de contrato, termos de uso e decisões que estão sendo tomadas agora.</p>
    <p>Este guia organiza o que já é claro e o que ainda está em aberto, com um exemplo de freelancer e um checklist de declaração. Quem já produz com IA, seja <a href="/artigos/ia-para-criadores-de-conteudo-videos-textos-e-artes">vídeos, textos e artes</a> ou material para vender, encontra aqui o que ajustar na rotina.</p>
    <div class="callout-box callout-warn"><span class="callout-label">Aviso</span><p>Este texto é informativo e não substitui aconselhamento jurídico. Para um caso concreto, contrato grande ou disputa, consulte um advogado especializado em propriedade intelectual.</p></div>

    <h2>O que a Lei 9.610 protege quando entra a IA</h2>
    <p>A Lei de Direitos Autorais brasileira (Lei 9.610/1998) protege as criações do espírito, expressão que, na prática, aponta para uma obra com autoria humana: texto, desenho, foto, música, programa. Ela dá ao autor direitos morais (ser reconhecido como autor e impedir deformações da obra) e direitos patrimoniais (decidir quem pode copiar, distribuir ou adaptar, e em quais condições). Para usar a obra de outra pessoa, a regra geral é pedir autorização prévia e expressa.</p>
    <p>O ponto delicado é que a lei foi escrita em 1998 e não menciona inteligência artificial. Não existe artigo dizendo que um texto gerado por um modelo pertence a quem digitou o prompt, nem que não pertence a ninguém. Na ausência de regra específica, juristas costumam olhar para o grau de contribuição humana: escolhas criativas, seleção, edição e arranjo contam, apertar um botão e aceitar o primeiro resultado conta pouco.</p>
    <p>Na prática, isso significa tratar o conteúdo de IA como material de partida. Quanto mais você transforma, organiza e assina com decisões próprias, mais forte fica a sua posição como autor. Se você ainda está montando a base, o <a href="/artigos/o-que-e-inteligencia-artificial-guia-completo">guia completo sobre o que é inteligência artificial</a> ajuda a entender como esses modelos geram o que geram.</p>

    <h2>Quem é o autor de uma imagem ou texto gerado por IA</h2>
    <p>Sem regra brasileira específica, o debate olha para fora. O U.S. Copyright Office, órgão americano de registro de direitos autorais, dedica uma série de relatórios ao tema, e a Parte 2, publicada em 29 de janeiro de 2025, trata justamente da proteção de resultados criados com IA generativa, conforme a página <a href="https://www.copyright.gov/ai/" target="_blank" rel="noopener noreferrer">Copyright and Artificial Intelligence</a> do órgão. O critério que aparece nessa discussão é a autoria humana: sem ela, o registro fica difícil.</p>
    <p>Para o criador brasileiro, o aprendizado é prático. Um prompt curto, por si só, dificilmente demonstra criação própria. Já um trabalho em que você escreve o roteiro, escolhe entre dezenas de variações, retoca a imagem à mão e monta a peça final deixa rastro de decisão humana. Um bom <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">prompt bem construído</a> ajuda, mas o que sustenta a autoria é o que você faz depois dele.</p>
    <p>Duas consequências aparecem. Primeiro, outra pessoa pode copiar uma imagem 100% gerada por IA sem que você tenha uma base forte para reclamar. Segundo, o cliente que paga por um logotipo gerado por IA pode ter dificuldade de impedir que um concorrente use algo parecido. Quem vende <a href="/artigos/ia-para-design-de-logotipo-marca-simples-profissional">logotipo e identidade visual feitos com IA</a> precisa explicar essa limitação antes de fechar o preço.</p>

    <h2>Treino de modelos com obras protegidas: onde está a disputa</h2>
    <p>O treino é a outra metade da conversa: empresas de IA usam enormes volumes de textos, imagens e músicas para ensinar seus modelos, e autores questionam se isso exige licença. Nos Estados Unidos, a discussão gira em torno do uso justo (fair use). Uma decisão recente negou esse argumento a uma IA treinada com dados da Westlaw, como mostra a <a href="/noticias/justica-eua-ia-copyright-fair-use-westlaw">notícia sobre o caso Westlaw</a>, mas cada processo tem fatos próprios e não vira regra geral automaticamente.</p>
    <p>No setor musical, o movimento é de acordo e de litígio ao mesmo tempo. A Sony e a Warner Chappell <a href="/noticias/sony-warner-processam-anthropic-direitos-autorais">processam a Anthropic por violação de direitos autorais</a>, enquanto a Universal firmou parceria com a ElevenLabs para uma <a href="/noticias/universal-music-elevenlabs-plataforma-ia-musical-licenciada">plataforma de IA musical construída com catálogo licenciado</a>. O recado do mercado é que licenciar passou a ser um caminho viável.</p>
    <p>No Brasil, a página de tramitação do PL 2338/2023 na <a href="https://www.camara.leg.br/proposicoesWeb/fichadetramitacao?idProposicao=2487262" target="_blank" rel="noopener noreferrer">Câmara dos Deputados</a> mostra o projeto aguardando parecer do relator, com projetos apensados que propõem alterar a Lei 9.610 para tratar de obras geradas por IA, como o PL 1685/2025 e o PL 1969/2025. Ou seja, a regra pode mudar. O panorama geral das regras em discussão está no guia sobre a <a href="/artigos/lei-de-ia-no-brasil-o-que-muda-para-quem-usa">lei da IA no Brasil</a>.</p>

    <h2>Uso comercial: o que olhar antes de vender</h2>
    <p>Vender algo feito com IA envolve três camadas de risco, e cada uma pede uma checagem diferente. A tabela resume o que conferir antes de publicar ou entregar ao cliente.</p>
    <table>
      <thead>
        <tr><th>Camada</th><th>Pergunta</th><th>O que fazer</th></tr>
      </thead>
      <tbody>
        <tr><td>Ferramenta</td><td>O plano permite uso comercial?</td><td>Ler os termos do plano contratado e guardar uma cópia na data da compra</td></tr>
        <tr><td>Resultado</td><td>O resultado lembra obra, marca ou pessoa real?</td><td>Evitar prompts com nome de artista vivo, personagem ou marca; revisar o resultado</td></tr>
        <tr><td>Entrega</td><td>O cliente sabe que houve IA?</td><td>Declarar por escrito no contrato ou na proposta</td></tr>
        <tr><td>Insumos</td><td>Você enviou material de terceiros para a IA?</td><td>Ter autorização para usar e dados pessoais protegidos</td></tr>
      </tbody>
    </table>
    <p>O uso de imagem e voz de pessoas reais merece atenção separada: além do direito autoral, existem direito de imagem e proteção de dados. O guia sobre <a href="/artigos/deepfakes-ia-identificar-conteudo-falso-proteger-reputacao">deepfakes e reputação</a> detalha os riscos, e quem trabalha com <a href="/artigos/ganhar-dinheiro-dublando-videos-com-ia-vozes-sinteticas">dublagem com vozes sintéticas</a> deve ter autorização por escrito de quem cedeu a voz.</p>
    <p>Se você pretende monetizar, o caminho de <a href="/artigos/como-vender-artes-e-fotos-criadas-com-ia-generativa">vender artes e fotos criadas com IA</a> ou de <a href="/artigos/como-vender-ebooks-e-guias-criados-com-ia">vender ebooks e guias</a> segue a mesma lógica: licença da ferramenta, edição humana relevante e transparência com quem compra.</p>

    <h2>Exemplo: designer em Recife e um pacote de identidade visual</h2>
    <p>Considere um caso hipotético, só para mostrar a conta. Uma designer freelancer de Recife cobra R$ 1.800 por uma identidade visual simples para uma confeitaria. Ela usa uma ferramenta de imagem para gerar 40 variações de símbolo, escolhe três, redesenha o preferido em vetor, define cores e tipografia e monta um manual de uso de duas páginas.</p>
    <p>Antes de enviar a proposta, ela confere o plano pago da ferramenta, que autoriza uso comercial, e salva uma captura dos termos com a data. Na proposta, inclui uma cláusula informando que o símbolo partiu de geração por IA, que houve redesenho manual e que a proteção como marca depende de registro no INPI, que é um processo à parte. O cliente aprova em um dia, sem surpresa.</p>
    <p>Repare no que protege as duas partes: o rastro do processo (as 40 variações e o redesenho), a leitura dos termos e a declaração escrita. Sem isso, se a confeitaria descobrisse meses depois que o símbolo é parecido com o de outra marca, a discussão viraria um problema para a designer. Para estruturar esse tipo de documento, o artigo sobre <a href="/artigos/ia-para-contratos-revisar-documentos-juridicos-mais-rapido">IA para revisar contratos</a> mostra como usar a IA como apoio, sem trocar o advogado.</p>

    <h2>O que declarar e como registrar seu processo</h2>
    <p>Não existe, hoje, uma obrigação geral na lei brasileira de rotular tudo que a IA ajudou a fazer, mas plataformas, clientes e contratos podem exigir. Declarar por conta própria é a forma mais barata de evitar conflito. O checklist abaixo cabe em uma página e vale para freelancer, agência ou criador de conteúdo.</p>
    <ul class="checklist">
      <li>Nome da ferramenta, plano e data em que os termos de uso comercial foram lidos.</li>
      <li>Prompts principais e versões intermediárias guardados em uma pasta do projeto.</li>
      <li>Lista do que foi feito por humano: roteiro, edição, retoque, diagramação, revisão.</li>
      <li>Cláusula no contrato dizendo se houve uso de IA e quem responde por semelhança com obras de terceiros.</li>
      <li>Autorização escrita para qualquer foto, voz ou texto de terceiros usado como insumo.</li>
      <li>Aviso nas redes quando a plataforma pedir rótulo de conteúdo sintético, como ocorre em parte das <a href="/artigos/ia-para-redes-sociais-criar-agendar-analisar-posts">publicações agendadas nas redes sociais</a>.</li>
    </ul>
    <p>Dados pessoais também entram na conta. Colar contrato, e-mail ou lista de clientes em uma ferramenta pública pode violar a LGPD e o sigilo do cliente, tema do artigo sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">privacidade e IA</a>. Uma organização internacional como a <a href="https://www.wipo.int/about-ip/en/artificial_intelligence/" target="_blank" rel="noopener noreferrer">WIPO</a> mantém uma página sobre propriedade intelectual e IA para acompanhar o debate fora do Brasil.</p>

    <h2>Erros comuns de criadores que usam IA</h2>
    <p>O primeiro erro é presumir que tudo que a IA gera é livre para uso. Os termos da ferramenta mudam, e alguns planos gratuitos restringem uso comercial. O segundo é pedir ao modelo imagens "no estilo de" um artista vivo ou com personagem conhecido e vender o resultado: mesmo que a lei de estilo seja discutível, o risco de reclamação e de remoção da plataforma é real.</p>
    <p>O terceiro erro é prometer exclusividade que ninguém pode garantir. Dizer ao cliente que ele terá a "propriedade total" de uma arte gerada por IA, sem ressalva, cria uma expectativa que a lei brasileira não confirma. Escreva o que de fato é entregue: arquivos, direitos de uso, limites e quem faz o registro de marca.</p>
    <p>O quarto é ignorar a música. Trilhas geradas por IA podem soar originais e ainda assim reproduzir trechos reconhecíveis. Quem produz com ferramentas como as da lista de <a href="/artigos/melhor-ia-para-criar-musica-com-letra-em-portugues">IA para criar música com letra em português</a> deve conferir os termos de uso comercial e evitar publicar sem escuta atenta.</p>
    <p>Por fim, não registrar nada. Guardar prompts, versões e arquivos de edição custa minutos e é a prova mais simples de que houve criação humana.</p>

    <h2>Como se proteger daqui para frente</h2>
    <p>Do lado de quem publica, nenhuma ferramenta impede 100% de cópia ou de uso para treino. O que o criador consegue fazer é reduzir exposição: publicar versões em resolução menor, incluir aviso de direitos no site, ler as opções de exclusão (opt-out) que algumas plataformas oferecem e registrar obras relevantes onde isso fizer sentido. A regra pode mudar com a tramitação dos projetos na Câmara, então vale rever esse pacote a cada semestre.</p>
    <p>Do lado de quem usa IA, a postura mais segura é tratar a ferramenta como assistente e a decisão final como sua. Isso protege o cliente, a sua reputação e o seu portfólio. Se quiser continuar o assunto, comece pelo guia da <a href="/artigos/lei-de-ia-no-brasil-o-que-muda-para-quem-usa">lei da IA no Brasil</a> e depois monte seu checklist de declaração usando o modelo desta página, adaptando-o com ajuda de um profissional de direito antes de aplicar em contratos de valor alto.</p>
  `,
  faq: [
    {
      question: "Quem é o dono de uma imagem gerada por IA no Brasil?",
      answer:
        "A Lei 9.610 não trata de IA e protege criações com autoria humana. Por isso, não há resposta única: quanto maior a sua contribuição criativa (roteiro, seleção, edição, retoque), mais forte a sua posição como autor. Os termos da ferramenta e o contrato com o cliente completam a resposta.",
    },
    {
      question: "Posso vender textos e imagens feitos com IA?",
      answer:
        "Em geral sim, desde que o plano da ferramenta permita uso comercial, o resultado não copie obra ou marca de terceiros e o cliente saiba do uso de IA. Leia os termos na data da compra, guarde uma cópia e registre o seu processo de edição como prova de trabalho humano.",
    },
    {
      question: "É legal treinar IA com obras protegidas por direitos autorais?",
      answer:
        "Ainda não há resposta definitiva. Nos Estados Unidos, tribunais analisam caso a caso o argumento de uso justo, e no Brasil projetos apensados ao PL 2338/2023 propõem mudar a Lei 9.610. Até a regra ficar clara, o risco é da empresa que treina e de quem usa suas ferramentas.",
    },
    {
      question: "Preciso avisar o cliente que usei IA?",
      answer:
        "A lei brasileira não impõe um aviso geral, mas contratos e plataformas podem exigir, e avisar evita conflito. O ideal é escrever na proposta qual ferramenta foi usada, o que foi feito por humano e quem responde por eventual semelhança com obras de terceiros.",
    },
    {
      question: "Posso registrar marca ou obra criada com IA?",
      answer:
        "Marca é registrada no INPI e exige distintividade, não só autoria, então um símbolo gerado por IA pode ser registrado se atender aos requisitos. Já a proteção autoral de algo criado só por IA é incerta. Consulte um advogado de propriedade intelectual antes de investir no registro.",
    },
  ],
};
