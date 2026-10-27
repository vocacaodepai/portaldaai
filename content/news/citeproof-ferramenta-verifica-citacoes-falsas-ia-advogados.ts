import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "citeproof-ferramenta-verifica-citacoes-falsas-ia-advogados",
  title: "CiteProof checa citações falsas de IA em petições antes do juiz ver",
  summary:
    "Nova ferramenta online confere casos e citações em peças jurídicas sem usar IA e cobra de US$ 49 por petição a US$ 499 por mês, após série de erros de advogados.",
  author: "Bruno Danello",
  sourceName: "The Register",
  sourceUrl: "https://www.theregister.com/ai-and-ml/2026/10/16/new-online-tool-will-check-lawyers-sloppy-ai-written-briefs-since-they-cant-seem-to-be-bothered/5303589",
  date: "2026-10-19",
  publishedAt: "2026-10-19T17:34:00-03:00",
  topic: "mercado-trabalho",
  imageQuery: "tribunal martelo juiz documentos",
  content: `
    <p>Uma nova ferramenta online chamada CiteProof promete conferir petições e documentos jurídicos em busca de citações de casos inventados e trechos de decisões citados errado, antes que o erro cause multa, sanção ou uma bronca pública de juiz. A novidade foi descrita pelo <a href="https://www.theregister.com/ai-and-ml/2026/10/16/new-online-tool-will-check-lawyers-sloppy-ai-written-briefs-since-they-cant-seem-to-be-bothered/5303589" target="_blank" rel="noopener noreferrer nofollow">The Register</a>, em texto de Brandon Vigliarolo publicado na sexta-feira, 16 de outubro. A matéria usa um tom irônico ao dizer que o produto existe porque advogados não parecem conseguir conferir o próprio trabalho, mas o ponto de fundo é sério: o uso de IA generativa em peças jurídicas já gerou uma sequência de erros públicos.</p>

    <h2>O que a CiteProof faz</h2>
    <p>A ferramenta, disponível em getciteproof.com, varre peças e petições para localizar citações fabricadas e transcrições erradas de decisões. Ela verifica citações e trechos, mas não avalia se o argumento jurídico é bom, ou seja, não substitui a leitura de um advogado. O The Register não identifica a empresa por trás do produto, apenas cita comentários de um porta-voz e diz que a plataforma foi feita por uma operação pequena, com algum uso de vibe coding, a prática de programar com ajuda de IA descrevendo o que se quer em linguagem natural.</p>
    <p>O detalhe mais curioso está na forma de funcionar. Segundo a empresa, a CiteProof não usa modelos de linguagem nem métodos probabilísticos. Ela faz buscas determinísticas em registros públicos de tribunais. Os únicos dados que saem dos servidores são trechos extraídos das citações, enviados ao CourtListener, um banco público de decisões judiciais dos Estados Unidos, para checar se o caso existe. A empresa afirma que tudo roda em território americano e que nada é armazenado ou enviado a uma IA. Um porta-voz resumiu a lógica assim: não dá para pegar de forma confiável alucinações de IA com mais palpite de IA.</p>

    <h2>Preços e planos</h2>
    <p>Há um plano gratuito para verificações individuais de citações ou de leis. Para varreduras mais completas, com relatórios detalhados de verificação, conferência de trechos citados e análise em lote, os valores informados são:</p>
    <ul>
      <li>US$ 49 por petição, sem o plano gratuito;</li>
      <li>US$ 199 por um pacote de cinco petições;</li>
      <li>US$ 499 por mês para até 200 revisões de petições, voltado a escritórios.</li>
    </ul>
    <p>Os preços estão em dólar e se referem ao mercado americano. A ferramenta consulta um banco de decisões dos Estados Unidos, portanto não serve, como está, para conferir jurisprudência brasileira. O interesse para o leitor daqui está mais no que ela revela sobre o problema e sobre a solução.</p>

    <h2>O histórico de erros que explica o produto</h2>
    <p>O The Register lembra que advogados usam IA há alguns anos com resultados ruins. O GPT-4 passou em um exame da ordem americana em 2023 e, mesmo assim, inventou jurisprudência. Em 2025, uma ordem judicial na Geórgia foi anulada depois de se descobrir que continha citações fictícias. Também em 2025, os advogados da Anthropic, que defendiam a empresa em um processo de direitos autorais movido por editoras de música, deixaram passar duas citações no formato do Claude que apontavam para registros indevidos numa declaração de um cientista de dados da empresa, e culparam o próprio Claude. A reportagem não traz estatísticas sobre quantas peças com citações alucinadas chegam aos tribunais.</p>
    <p>No Brasil, o tema também já chegou ao Judiciário: o ministro Alexandre de Moraes multou um advogado por esconder um comando oculto de IA em uma petição ao STF. O assunto da confiabilidade das respostas, aliás, é o centro do guia <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA: como checar se a resposta está certa</a>.</p>

    <blockquote>"Não dá para pegar alucinações de IA de forma confiável com mais palpite de IA", disse um porta-voz da CiteProof ao The Register, ao explicar por que a ferramenta usa buscas determinísticas.</blockquote>

    <h2>Por que isso importa para você</h2>
    <p>Mesmo que você não seja advogado, a lição vale para qualquer trabalho em que a IA entrega um texto com fontes, números ou citações. O erro mais caro da IA generativa não é o texto mal escrito, e sim a informação falsa apresentada com segurança. Se você escreve relatórios, propostas, artigos, pareceres ou materiais para clientes, a checagem de cada dado verificável precisa fazer parte do processo. A CiteProof ilustra uma forma útil de pensar: separar o que a IA faz bem, que é rascunhar, resumir e organizar, do que precisa ser conferido por um método que não depende de IA, como consultar a fonte original.</p>
    <p>Para quem trabalha com documentos, o guia <a href="/artigos/ia-para-contratos-revisar-documentos-juridicos-mais-rapido">IA para contratos: como revisar documentos jurídicos mais rápido</a> mostra como ganhar tempo mantendo a revisão humana. E para profissionais do direito, o estudo que cobrimos em <a href="/noticias/google-estudo-advogados-ia-experiencia-juniores-seniores">Google: estudo sobre advogados e IA, experiência de juniores e seniores</a> indica que o efeito da IA no trabalho muda conforme o nível de experiência, o que reforça a necessidade de revisão por quem sabe o que procurar.</p>
    <p>Há também uma oportunidade de renda. Serviços de verificação, revisão e auditoria de conteúdo gerado por IA estão virando um nicho: quem consegue vender conferência de fatos, de fontes e de citações para escritórios, agências e criadores resolve uma dor que a própria IA criou. Quem quiser explorar esse caminho encontra ideias no guia <a href="/artigos/como-ganhar-dinheiro-testando-e-avaliando-ferramentas-de-ia">como ganhar dinheiro testando e avaliando ferramentas de IA</a>.</p>

    <h2>Limites e cuidados</h2>
    <p>Um conferidor de citações resolve uma parte do risco, não todo. Ele não garante que a decisão citada diga o que a petição afirma que ela diz em termos de interpretação, e não avalia se o caso é aplicável. Também depende de a base consultada estar completa. Além disso, enviar trechos de uma peça a qualquer serviço externo pede atenção ao sigilo profissional e à proteção de dados do cliente. A empresa diz que só envia trechos de citações ao CourtListener e que nada é guardado, mas essa é uma declaração do fornecedor, sem auditoria independente apresentada na reportagem.</p>
    <p>Na prática, quem usa IA em qualquer tarefa com exigência de precisão deveria adotar uma rotina simples: pedir à IA as fontes, abrir cada uma, confirmar que existe, ler o trecho relevante e só então usar. Parece lento, mas é muito mais barato do que corrigir uma multa, perder um cliente ou ter a reputação marcada por um erro que poderia ter sido evitado em cinco minutos de conferência.</p>
    <p>O surgimento de ferramentas como a CiteProof mostra que o mercado já trata a alucinação como um problema permanente, que exige processos e produtos próprios. Para o profissional que usa IA, a mensagem é objetiva: quanto mais a IA entra no fluxo de trabalho, mais valor ganha quem sabe verificar o que ela entrega.</p>
  `,
  faq: [
    {
      question: "O que é a CiteProof?",
      answer:
        "É uma ferramenta online que confere petições e documentos jurídicos em busca de citações de casos inventados e trechos de decisões citados de forma errada, segundo o The Register.",
    },
    {
      question: "A CiteProof usa inteligência artificial?",
      answer:
        "Não, segundo a empresa. Ela faz buscas determinísticas em registros públicos de tribunais e envia só trechos das citações ao CourtListener para confirmar se os casos existem.",
    },
    {
      question: "Quanto custa e serve para o direito brasileiro?",
      answer:
        "Há plano gratuito para checagens individuais e planos pagos de US$ 49 por petição, US$ 199 por cinco ou US$ 499 por mês. A base consultada é americana, então não cobre jurisprudência brasileira.",
    },
  ],
};
