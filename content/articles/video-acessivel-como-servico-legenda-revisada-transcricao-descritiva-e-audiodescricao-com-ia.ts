import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "video-acessivel-como-servico-legenda-revisada-transcricao-descritiva-e-audiodescricao-com-ia",
  title: "Vídeo acessível como serviço: legenda revisada e audiodescrição",
  seoTitle: "Vídeo acessível como serviço: legenda e audiodescrição",
  excerpt:
    "Vídeo acessível como serviço: monte um pacote de legenda revisada, transcrição descritiva e audiodescrição com IA para pequenos negócios, com roteiro, escopo e preço.",
  metaDescription:
    "Como vender vídeo acessível como serviço: legenda revisada por humano, transcrição descritiva e audiodescrição com apoio de IA, com checklist de entrega e exemplo de preço.",
  category: "monetizacao",
  articleSubcategory: "conteudo-e-midia",
  date: "2026-10-31",
  readTime: 6,
  imageQuery: "video editor captions timeline monitor",
  seed: 984,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Vídeo acessível como serviço combina legenda revisada, transcrição e audiodescrição, e a IA acelera o rascunho, mas a revisão humana é o que justifica o preço.",
    "Segundo o W3C, legendas atendem pessoas surdas ou com perda auditiva, e a audiodescrição atende quem não enxerga bem o vídeo; a transcrição descritiva cobre as duas condições ao mesmo tempo.",
    "O YouTube gera legendas automáticas só no idioma padrão do vídeo e não recomenda a sincronização automática para vídeos acima de 1 hora ou com áudio ruim, o que cria espaço para um serviço de revisão.",
  ],
  content: `
    <p>Vídeo acessível como serviço é a oferta de entregar, para empresas e criadores, vídeos com legenda revisada, transcrição e audiodescrição prontas para publicar. A IA gera o rascunho em minutos; o que o cliente paga é a revisão humana, que corrige nomes, termos técnicos e o que a máquina não percebe. É um serviço de entrada baixa, que dá para testar com poucos clientes.</p>

    <p>Muita empresa já grava vídeo para redes, treinamento ou institucional, mas publica sem legenda confiável. Este guia mostra o que cada entrega significa segundo o W3C, como montar o fluxo de trabalho, quanto tempo cada etapa toma, como definir escopo e o que combinar por escrito. Não há promessa de renda aqui: o ganho depende de volume, nicho e da qualidade da sua revisão.</p>

    <h2>O que é legenda, transcrição e audiodescrição?</h2>
    <p>São três entregas diferentes, e o cliente costuma confundi-las. A página do W3C sobre <a href="https://www.w3.org/WAI/media/av/" target="_blank" rel="noopener noreferrer">mídia acessível</a> define as legendas como a versão em texto da fala e dos sons importantes, voltada a pessoas surdas ou com perda auditiva. A transcrição é o texto completo da fala e dos sons. A audiodescrição narra o que aparece na tela para quem não enxerga o vídeo bem.</p>
    <p>O W3C recomenda ainda a transcrição descritiva, que também descreve as informações visuais, e afirma que ela é necessária para tornar o vídeo acessível a pessoas ao mesmo tempo surdas e cegas. Outro conselho da página: planejar a acessibilidade desde o início, escrevendo a descrição já no roteiro, é mais fácil e eficaz do que remendar depois.</p>

    <table>
      <thead>
        <tr><th>Entrega</th><th>Para quem</th><th>Onde a IA ajuda</th><th>O que o humano revisa</th></tr>
      </thead>
      <tbody>
        <tr><td>Legenda</td><td>Surdos, quem assiste sem som</td><td>Transcrição e tempo</td><td>Nomes, siglas, quebras de linha</td></tr>
        <tr><td>Transcrição descritiva</td><td>Surdocegos, leitura em texto</td><td>Rascunho do texto</td><td>Descrição do que se vê</td></tr>
        <tr><td>Audiodescrição</td><td>Cegos e baixa visão</td><td>Descrição inicial das cenas</td><td>Precisão, tom e encaixe nas pausas</td></tr>
      </tbody>
    </table>

    <p>Quem quer o lado mais amplo de transcrição como negócio pode ler o guia de <a href="/artigos/como-ganhar-dinheiro-com-transcricao-e-legendagem-usando-ia">como ganhar dinheiro com transcrição e legendagem</a>. Este texto foca no pacote de acessibilidade para empresas.</p>

    <h2>Por que ainda há espaço para revisão humana?</h2>
    <p>As legendas automáticas existem, mas têm limites oficiais. Segundo a <a href="https://support.google.com/youtube/answer/2734796" target="_blank" rel="noopener noreferrer">ajuda do YouTube</a>, as legendas automáticas ficam disponíveis apenas no idioma padrão do vídeo, e a opção de sincronizar automaticamente um texto pronto não é recomendada para vídeos com mais de uma hora ou com áudio de má qualidade. A própria página orienta incluir indicações de som, como [aplausos], para que o espectador entenda o que acontece.</p>
    <p>Na prática, o rascunho automático costuma errar nome de pessoa, marca, termo médico ou jurídico e sotaque forte. Quem revisa precisa conhecer o assunto ou ter um glossário do cliente. Esse é o seu produto: o texto que o cliente publica sem vergonha. Uma comparação de ferramentas para o rascunho está em <a href="/artigos/melhores-ias-para-transcrever-audio-e-video-em-portugues">melhores IAs para transcrever áudio e vídeo em português</a>.</p>

    <h2>Fluxo de trabalho em 6 etapas</h2>
    <ol>
      <li>Receba o vídeo e um glossário com nomes, marcas e siglas do cliente.</li>
      <li>Gere o rascunho de transcrição com a ferramenta de sua escolha.</li>
      <li>Revise ouvindo o vídeo inteiro, corrigindo palavras e marcando sons relevantes entre colchetes.</li>
      <li>Divida em legendas curtas, de no máximo duas linhas, com tempo de leitura confortável.</li>
      <li>Escreva a descrição do que aparece na tela, quando houver informação visual que a fala não cobre.</li>
      <li>Entregue os arquivos de legenda e o texto, e mostre como publicá-los.</li>
    </ol>
    <p>Um prompt útil para o passo 5, usando uma descrição do vídeo que você mesmo escreveu:</p>
    <pre><code>Com base nesta lista de cenas que eu descrevi, escreva a audiodescrição
em português do Brasil, em frases curtas e neutras, sem interpretar emoções
nem inventar detalhes. Marque onde cabe cada trecho entre as falas.
Cenas: [cole aqui as suas anotações]</code></pre>
    <p>A IA não vê o vídeo por você nesse prompt; ela só organiza o que você anotou. Isso evita descrições inventadas. Os recursos de acessibilidade já embutidos no celular, como o <a href="/artigos/acessibilidade-com-ia-no-celular-lookout-legenda-ao-vivo-e-be-my-eyes">Lookout, a legenda ao vivo e o Be My Eyes</a>, mostram o que o público já usa no dia a dia.</p>

    <h2>Como definir escopo e preço sem prometer demais</h2>
    <p>Cobre por minuto de vídeo finalizado ou por pacote, e nunca por hora de ferramenta. Os valores abaixo são ilustrativos e servem só para mostrar a conta; pesquise o mercado da sua região antes de fixar o seu.</p>
    <ul>
      <li>Legenda revisada: R$ 12 a R$ 25 por minuto de vídeo.</li>
      <li>Transcrição descritiva: R$ 15 a R$ 30 por minuto.</li>
      <li>Audiodescrição: sob orçamento, porque exige roteiro e, às vezes, locução.</li>
    </ul>
    <p>Exemplo: um consultório de fisioterapia em Campinas tem 12 vídeos de exercícios, cada um com 3 minutos. São 36 minutos. Com a legenda a R$ 20 por minuto, o pacote fecha em R$ 720. Se você leva cerca de 4 minutos de trabalho por minuto de vídeo, são aproximadamente 2,4 horas de revisão, o que dá uma noção do valor da sua hora. Para montar o pacote, o roteiro de <a href="/artigos/briefing-e-escopo-para-freelancer-com-ia-evite-retrabalho-e-cliente-que-pede-mais">briefing e escopo para freelancer</a> evita retrabalho, e o guia de <a href="/artigos/como-precificar-servicos-usando-ia-no-trabalho">como precificar serviços</a> ajuda a fechar a conta.</p>

    <h2>Onde encontrar clientes e como apresentar o serviço</h2>
    <p>Comece por quem já publica vídeo: clínicas, escolas de idiomas, lojas com vídeo de produto, criadores de curso e prefeituras pequenas. Mostre um antes e depois de 30 segundos, com o consentimento do dono do vídeo, e ofereça uma entrega de teste curta. O argumento comercial honesto é alcance: legenda ajuda quem assiste sem som, e transcrição ajuda quem prefere ler. Evite prometer ganho de vendas ou de posição no Google, porque você não controla isso.</p>
    <p>Quem já oferece edição pode somar o pacote a serviços como os de <a href="/artigos/videos-curtos-para-negocio-local-como-servico-pacote-roteiro-com-ia-e-musica-sem-problema">vídeos curtos para negócio local</a> e os <a href="/artigos/cortes-de-podcast-e-lives-em-shorts-servico-para-criadores-preco-direitos-e-monetizacao">cortes de podcast e lives em Shorts</a>. Para criadores com público de vários idiomas, vale conhecer a <a href="/artigos/dublagem-automatica-do-youtube-ativar-revisar-e-oferecer-como-servico">dublagem automática do YouTube</a>.</p>

    <h2>Cuidados com dados e responsabilidade</h2>
    <p>Vídeo de clínica, de aula com crianças ou de reunião interna carrega dados pessoais. Antes de subir o arquivo numa ferramenta, confirme com o cliente, combine por escrito onde o material será processado e apague os arquivos ao fim. O <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">checklist de LGPD para pequeno negócio</a> serve de base, e o texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a> mostra o que evitar enviar.</p>
    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Não prometa conformidade legal nem certificação de acessibilidade. Seu serviço é produzir texto e descrição de boa qualidade; exigências legais específicas do cliente devem ser verificadas por quem entende da norma aplicável.</p></div>

    <h2>Erros comuns</h2>
    <ul>
      <li>Entregar o texto automático sem ouvir o vídeo inteiro.</li>
      <li>Esquecer sons importantes, como risadas, alertas ou música que muda o sentido.</li>
      <li>Legendas longas demais, que passam rápido e cansam a leitura.</li>
      <li>Audiodescrição que inventa detalhes que o vídeo não mostra.</li>
      <li>Cobrar barato por vídeo de 1 hora com áudio ruim, que dá muito mais trabalho.</li>
      <li>Usar a conta pessoal da ferramenta com material confidencial do cliente.</li>
    </ul>
    <p>Se o cliente também precisa de registro de reuniões, vale conhecer o fluxo de <a href="/artigos/ia-para-reunioes-transcricao-resumo-ata-automatica">transcrição e ata automática</a>. E se você atende como MEI, confira como emitir a nota no guia de <a href="/artigos/nota-fiscal-de-servico-para-mei-nfs-e-nacional-com-ajuda-de-ia">nota fiscal de serviço para MEI</a>.</p>

    <p>Para começar esta semana, escolha três vídeos publicados de empresas da sua cidade, faça uma amostra de 30 segundos com legenda revisada e envie como proposta. A categoria de monetização do Portal da AI reúne outros serviços que você pode somar a esse pacote.</p>
  `,
  faq: [
    {
      question: "Qual a diferença entre legenda e audiodescrição?",
      answer:
        "Segundo o W3C, legenda é o texto da fala e dos sons, voltada a pessoas surdas ou com perda auditiva. Audiodescrição é a narração do que aparece na tela, para quem não enxerga bem o vídeo. São entregas diferentes e podem ser vendidas separadas ou em pacote.",
    },
    {
      question: "A legenda automática do YouTube basta?",
      answer:
        "Depende do vídeo. Segundo a ajuda do YouTube, ela só existe no idioma padrão do vídeo, e a sincronização automática não é recomendada para vídeos longos ou com áudio ruim. Erros em nomes e termos técnicos são comuns, por isso a revisão humana segue necessária.",
    },
    {
      question: "Quanto cobrar por minuto de legenda revisada?",
      answer:
        "Não existe tabela oficial. Os valores do artigo são ilustrativos. Pesquise o mercado da sua região, considere a qualidade do áudio e o assunto, e cobre pelo vídeo finalizado em vez de pela hora de ferramenta. Vídeos com áudio ruim ou jargão merecem preço maior.",
    },
    {
      question: "Preciso de certificação para vender esse serviço?",
      answer:
        "Para legendas e transcrições, não há exigência geral de certificação, mas o cliente pode ter regras próprias. Não prometa conformidade com norma específica sem conferir. Combine por escrito o que será entregue e o formato dos arquivos.",
    },
    {
      question: "A IA pode fazer a audiodescrição sozinha?",
      answer:
        "Pode gerar um rascunho, mas a descrição precisa ser conferida por uma pessoa que viu o vídeo, para não inventar detalhes e para encaixar o texto nas pausas da fala. O W3C recomenda planejar a descrição desde o roteiro sempre que possível.",
    },
  ],
};
