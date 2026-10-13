import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "reclamar-de-empresa-com-ia-consumidor-gov-br-passo-a-passo",
  title: "Reclamar de empresa com IA: carta e Consumidor.gov.br",
  seoTitle: "Reclamar de empresa com IA: passo a passo e modelos",
  excerpt:
    "Reclamar de empresa com IA fica mais rápido: veja como montar o relato, escrever a carta e registrar no Consumidor.gov.br sem perder prazo nem inventar fato.",
  metaDescription:
    "Reclamar de empresa com IA: monte a linha do tempo, peça um texto objetivo, confira prazos do CDC e registre a queixa no Consumidor.gov.br com prompts.",
  category: "iniciantes",
  articleSubcategory: "vida-pratica",
  date: "2026-10-13",
  readTime: 7,
  imageQuery: "customer complaint laptop papers desk",
  seed: 230,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "A IA ajuda a organizar a linha do tempo do problema e a escrever uma reclamação curta, educada e com o pedido claro, mas os fatos e os documentos têm de ser seus.",
    "O Consumidor.gov.br é gratuito, exige conta gov.br prata ou ouro e dá à empresa 10 dias para responder; ele não substitui Procon nem Juizado Especial.",
    "Antes de enviar, confira datas, protocolos e valores no texto gerado: a IA pode errar ou inventar detalhes, e uma queixa com dado falso perde força.",
  ],
  content: `
    <p>Reclamar de empresa com IA significa usar um assistente como ChatGPT ou Gemini para organizar o que aconteceu, escrever uma reclamação objetiva e separar o que precisa de prova. Você continua responsável pelos fatos: a ferramenta só poupa tempo de redação e ajuda a não esquecer nada importante.</p>

    <p>Quem já tentou resolver cobrança indevida, produto com defeito ou serviço que não foi entregue sabe como é: três ligações, dois protocolos perdidos e um texto raivoso que ninguém lê. Este guia mostra como transformar esse caos em um relato claro, qual canal usar primeiro, como registrar no Consumidor.gov.br e quais cuidados tomar para a IA não atrapalhar.</p>

    <h2>Por onde começar: reúna as provas antes de pedir o texto</h2>

    <p>A reclamação boa nasce de documentos, não de adjetivos. Antes de abrir qualquer chat, junte nota fiscal ou comprovante de pagamento, prints de conversa, e-mails, números de protocolo e fotos do defeito. Salve tudo numa pasta com nomes simples, como "01-nota-fiscal" e "02-print-chat". Se a bagunça de arquivos for um problema, o guia de <a href="/artigos/ia-para-organizar-fotos-arquivos-menos-bagunca-digital">organização de fotos e arquivos com IA</a> ajuda a montar essa pasta em uma tarde.</p>

    <p>Depois, escreva em tópicos, do seu jeito, o que aconteceu: data da compra, valor pago, o que foi prometido, o que chegou, quando você reclamou e o que a empresa respondeu. Não precisa de português bonito. Essa lista é a matéria-prima que a IA vai transformar em texto.</p>

    <ul class="checklist">
      <li>Nota fiscal, contrato ou comprovante de pagamento</li>
      <li>Prints de anúncio, conversa e e-mails com data visível</li>
      <li>Números de protocolo de cada contato (ligação, chat, loja)</li>
      <li>Fotos ou vídeos do defeito, quando houver</li>
      <li>Linha do tempo em tópicos, com datas e valores em R$</li>
    </ul>

    <h2>Cuidados com dados pessoais ao usar a IA</h2>

    <p>Para pedir ajuda ao assistente, você não precisa colar CPF, número de cartão, endereço completo nem senha. Troque esses dados por marcadores como "[CPF]" e "[PEDIDO 12345]" e preencha à mão depois. O texto <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">sobre privacidade em IA</a> explica o que costuma ficar guardado nas conversas e como desligar o uso delas para treino.</p>

    <p>Outro cuidado é com a veracidade. Modelos de linguagem às vezes inventam artigo de lei, valor ou data para deixar o texto mais convincente. Peça sempre que usem só as informações que você deu, e releia tudo. O guia sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a> traz um método simples de conferência.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Nunca peça para a IA "dar uma incrementada" nos fatos. Reclamação com dado exagerado vira argumento para a empresa e pode custar sua credibilidade na Justiça.</p></div>

    <h2>Prompts prontos para organizar e escrever a reclamação</h2>

    <p>O primeiro prompt organiza a linha do tempo. Cole seus tópicos já sem dados sensíveis:</p>

    <pre><code>Você vai me ajudar a organizar uma reclamação de consumidor no Brasil. Use SOMENTE os fatos abaixo, sem inventar datas, valores ou leis. Monte uma linha do tempo em ordem cronológica e liste o que ainda falta comprovar.

Fatos:
- [cole seus tópicos aqui]</code></pre>

    <p>O segundo prompt escreve o texto final. Defina o limite de tamanho, porque os formulários de reclamação costumam ter campo curto:</p>

    <pre><code>Com base na linha do tempo acima, escreva uma reclamação em português, tom firme e educado, com no máximo 1.500 caracteres. Estrutura: o que comprei e quando, qual foi o problema, o que já tentei resolver (com protocolos), e o que eu peço (reembolso de R$ [valor] em até [prazo]). Não use ameaças nem adjetivos fortes.</code></pre>

    <p>O terceiro serve para revisar. Peça que o assistente aponte frases vagas e informações que faltam, em vez de reescrever tudo. Quem quer treinar esse tipo de comando encontra bons exemplos no guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">como escrever comandos que funcionam</a>.</p>

    <h2>Qual canal usar primeiro</h2>

    <p>A ordem mais comum é tentar o SAC da empresa e guardar o protocolo, depois subir para um canal público. A tabela resume as opções.</p>

    <table>
      <thead>
        <tr><th>Canal</th><th>Custo</th><th>Quando usar</th></tr>
      </thead>
      <tbody>
        <tr><td>SAC da empresa</td><td>Gratuito</td><td>Primeiro contato; gera protocolo</td></tr>
        <tr><td>Consumidor.gov.br</td><td>Gratuito</td><td>Empresa cadastrada não resolveu pelo SAC</td></tr>
        <tr><td>Procon</td><td>Em geral gratuito</td><td>Empresa não participa do Consumidor.gov.br ou o caso exige audiência</td></tr>
        <tr><td>Juizado Especial Cível</td><td>Varia conforme o valor e o estado</td><td>Quando os canais anteriores falharam</td></tr>
      </tbody>
    </table>

    <p>Segundo a <a href="https://www.consumidor.gov.br/pages/conteudo/publico/1" target="_blank" rel="noopener noreferrer">página oficial do Consumidor.gov.br</a>, o serviço é público e gratuito, mas só recebe reclamações contra empresas que aderiram à plataforma, e não substitui Procons, Defensorias nem Juizados.</p>

    <h2>Como registrar no Consumidor.gov.br</h2>

    <p>Segundo a mesma página, o fluxo tem quatro passos. Primeiro, confira se a empresa está na lista de participantes. Segundo, entre com sua conta gov.br, que precisa ser nível prata ou ouro. Terceiro, registre a reclamação com o texto e os anexos. Quarto, aguarde: a empresa tem 10 dias para analisar e responder.</p>

    <ol>
      <li>Busque a empresa em "Empresas participantes".</li>
      <li>Escolha o assunto e o problema mais próximo do seu caso.</li>
      <li>Cole o texto revisado, anexe nota e prints e anote o número da reclamação.</li>
      <li>Depois da resposta, você tem 20 dias para marcar como resolvida ou não resolvida, dar uma nota de 1 a 5 e comentar.</li>
    </ol>

    <p>Se a resposta não resolver, a avaliação "não resolvida" fica registrada e você pode levar o caso ao Procon ou ao Juizado com todo o histórico. O texto produzido com a IA pode ser reaproveitado, com ajustes, nessas etapas.</p>

    <h2>Exemplo prático: fone com defeito comprado online</h2>

    <p>Imagine um fone de R$ 280 comprado numa loja virtual. Chegou com um lado sem som, a loja pediu para esperar 15 dias e depois parou de responder. Você tem nota fiscal, o print do anúncio e dois protocolos. A linha do tempo vira uma reclamação de poucas linhas, com o pedido de reembolso de R$ 280.</p>

    <p>Sobre prazos, o Procon de Santa Catarina resume em um <a href="https://www.procon.sc.gov.br/veja-10-direitos-basicos-que-todo-consumidor-deve-saber/" target="_blank" rel="noopener noreferrer">texto de direitos básicos</a> que o prazo para reclamar de vício é de 30 dias para produto não durável e 90 dias para durável, e que a compra online dá direito de desistência em até 7 dias após o recebimento. Confira sempre o seu caso no texto do Código de Defesa do Consumidor ou pergunte ao Procon da sua cidade.</p>

    <h2>Erros comuns ao reclamar com ajuda da IA</h2>

    <ul>
      <li><strong>Texto longo demais:</strong> ninguém lê cinco parágrafos de desabafo. Peça versão curta.</li>
      <li><strong>Não dizer o que você quer:</strong> reembolso, troca ou conserto? Escreva o pedido e o prazo.</li>
      <li><strong>Deixar a IA citar lei sozinha:</strong> se aparecer artigo que você não conhece, confira ou apague.</li>
      <li><strong>Esquecer protocolos:</strong> sem número, a empresa nega que houve contato.</li>
      <li><strong>Enviar dados sensíveis ao chat:</strong> use marcadores e preencha depois.</li>
      <li><strong>Perder prazo:</strong> anote a data de recebimento do produto no dia em que chegar.</li>
    </ul>

    <p>Para quem vai comprar algo parecido de novo, vale ler o guia para <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">escolher ferramenta de IA com segurança</a> e o de <a href="/artigos/como-usar-ia-para-checar-mensagem-suspeita-e-evitar-golpes">checar mensagem suspeita</a>, porque golpe de falso atendimento também aparece depois de uma reclamação pública. E se você mexe com contratos, o texto de <a href="/artigos/ia-para-contratos-revisar-documentos-juridicos-mais-rapido">revisão de documentos com IA</a> complementa este.</p>

    <h2>Depois da resposta: como negociar a solução</h2>

    <p>Quando a empresa responde, leia com calma e compare com o seu pedido. Se ela oferece parte do que você quer, como um crédito no lugar do reembolso, decida se aceita antes de marcar a queixa como resolvida. Depois de avaliada, a reclamação fica finalizada e não pode ser alterada, segundo a página oficial.</p>

    <p>Se precisar responder a uma proposta, peça à IA para comparar a oferta com o que você pediu e listar o que falta. As técnicas de <a href="/artigos/como-usar-ia-para-negociar-melhor-com-fornecedores">negociação com fornecedores usando IA</a> valem aqui também: preparar a conversa, definir o mínimo aceitável e manter o tom calmo. Registre tudo por escrito, inclusive acordos feitos por telefone, e guarde as respostas até o problema ser resolvido de fato. Se o assistente que você usa for gratuito, o texto sobre <a href="/artigos/ia-gratis-ou-paga-o-que-vale-a-pena">IA grátis ou paga</a> mostra que, para essa tarefa, a versão gratuita costuma dar conta.</p>

    <h2>Quando não usar IA para reclamar</h2>

    <p>Casos com dano à saúde, golpe financeiro, negativação indevida de valor alto ou perda de emprego pedem orientação de um advogado ou da Defensoria Pública. A IA serve de rascunho, não de parecer jurídico. Também evite usá-la para falar em nome de outra pessoa sem autorização.</p>

    <p>Pronto para a próxima etapa? Monte a pasta de provas hoje, rode os três prompts e registre a queixa. Para ganhar mais produtividade nas tarefas de rotina, comece pelo <a href="/artigos/o-que-e-inteligencia-artificial-guia-completo">guia completo de inteligência artificial</a> e pelo texto sobre <a href="/artigos/5-erros-comuns-de-quem-esta-comecando-a-usar-ia">erros de quem começa a usar IA</a>.</p>
  `,
  faq: [
    {
      question: "Posso usar o ChatGPT para escrever uma reclamação?",
      answer:
        "Pode, desde que você forneça os fatos reais e revise o resultado. A ferramenta organiza e dá tom ao texto, mas pode inventar datas, valores ou artigos de lei. Evite colar CPF e dados de cartão no chat, use marcadores e preencha depois.",
    },
    {
      question: "O Consumidor.gov.br é gratuito?",
      answer:
        "Sim. Segundo a página oficial do serviço, ele é público e gratuito. Você precisa de uma conta gov.br de nível prata ou ouro e a empresa precisa ter aderido à plataforma. A empresa tem 10 dias para responder à reclamação.",
    },
    {
      question: "Quanto tempo a empresa tem para responder?",
      answer:
        "No Consumidor.gov.br, a empresa tem 10 dias para analisar e responder. Depois da resposta, o consumidor tem 20 dias para avaliar e marcar a queixa como resolvida ou não resolvida, com nota de satisfação de 1 a 5.",
    },
    {
      question: "Reclamar no Consumidor.gov.br substitui o Procon?",
      answer:
        "Não. O próprio serviço informa que não substitui o SAC, o Procon, a Defensoria Pública nem o Juizado Especial Cível. Se a reclamação não for resolvida, esses órgãos continuam disponíveis e você pode levar o histórico como prova.",
    },
    {
      question: "Qual o prazo para reclamar de produto com defeito?",
      answer:
        "Para vício aparente, o prazo é de 30 dias para produtos não duráveis e 90 dias para duráveis, segundo materiais de Procons estaduais. Em compra online, há direito de desistência em até 7 dias após o recebimento. Confira seu caso no Procon.",
    },
  ],
};
