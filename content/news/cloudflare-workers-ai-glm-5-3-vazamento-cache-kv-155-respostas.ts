import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "cloudflare-workers-ai-glm-5-3-vazamento-cache-kv-155-respostas",
  title: "Cloudflare admite que o GLM-5.3 vazou dados entre clientes em 155 respostas",
  summary:
    "Falha no Workers AI misturou trechos de prompts longos de clientes entre 27/8 e 9/9. A Cloudflare diz não ter achado exploração e publicou o relatório.",
  author: "Bruno Danello",
  sourceName: "Cloudflare",
  sourceUrl: "https://blog.cloudflare.com/kv-cache-exposure-remediation/",
  date: "2026-10-26",
  publishedAt: "2026-10-26T20:45:00-03:00",
  topic: "seguranca",
  imageQuery: "Cloudflare logo",
  content: `
    <p>A Cloudflare publicou nesta segunda-feira, 26 de outubro, o <a href="https://blog.cloudflare.com/kv-cache-exposure-remediation/" rel="noopener noreferrer nofollow" target="_blank">relatório de um incidente de isolamento entre clientes</a> no Workers AI, sua plataforma de inferência de modelos de IA. Entre 27 de agosto e 9 de setembro de 2026, um número pequeno de clientes que usavam o modelo GLM-5.3, da Z.ai, recebeu respostas com trechos de pedidos feitos por outras pessoas ao mesmo modelo pouco antes. No total, foram 155 respostas afetadas, todas a prompts com mais de 681.280 tokens.</p>

    <p>A empresa afirma que o problema só atingiu o GLM-5.3 e que nenhum outro modelo hospedado no Workers AI foi afetado. Depois de excluir os testes da própria Cloudflare e os do pesquisador que reportou a falha, os pedidos identificados têm horário e volume compatíveis com o uso normal de contexto longo, e não com alguém explorando a brecha de propósito. A conclusão da empresa é que não há evidência de exploração deliberada.</p>

    <h2>Como a falha foi descoberta e corrigida</h2>
    <p>O alerta chegou em 8 de setembro, por meio do programa de recompensas da Cloudflare no HackerOne, enviado pelo pesquisador Gadi Evron, da Knostic. Segundo a linha do tempo do relatório, a equipe de segurança reproduziu o vazamento no dia seguinte, com duas contas independentes, em cerca de 25 minutos, declarou o incidente e tirou o modelo do ar. As requisições passaram a receber erro HTTP 400. A causa raiz foi encontrada em pouco mais de uma hora, a configuração foi corrigida e o modelo voltou ao público às 19h40 UTC de 9 de setembro, com um patch no motor de inferência.</p>
    <p>A divulgação ficou para agora porque foi coordenada com o pesquisador e com a RadixArk, mantenedora do SGLang, o motor de código aberto que a Cloudflare usa para servir o modelo. O relatório da Cloudflare saiu junto com um texto do projeto SGLang sobre o mesmo bug.</p>

    <h2>Duas falhas que, juntas, vazaram dados</h2>
    <p>Segundo a Cloudflare, o vazamento nasceu da soma de dois problemas. O primeiro foi de configuração. O GLM-5.3 foi publicado com janela de contexto de 1.048.576 tokens, mas o espaço reservado na memória das GPUs de pré-processamento (o chamado cache KV, onde o modelo guarda o que já leu do prompt) comportava apenas 681.280 tokens. A equipe sabia da diferença antes do lançamento, mas os testes de contexto longo devolveram respostas com código de sucesso e ela presumiu que o motor recusaria com erro qualquer pedido grande demais. A própria empresa reconhece a lacuna: validou códigos HTTP e desempenho, mas não a coerência do texto gerado.</p>
    <p>O segundo problema foi um bug no SGLang no modo em que a etapa de leitura do prompt e a etapa de geração rodam em GPUs separadas. Quando um prompt não cabia, o motor o marcava como rejeitado e o trocava por um marcador de um único token, mas, em vez de abortar e devolver erro, seguia o fluxo normal. A etapa de geração reservava as páginas de memória para o tamanho real do prompt, recebia o aviso de transferência concluída e passava a gerar texto lendo páginas que ainda guardavam dados de pedidos anteriores de outros usuários. O cliente recebia HTTP 200, o número de tokens batia com o prompt enviado e a resposta parecia coerente, só que continha conteúdo alheio.</p>
    <p>O bug já havia sido relatado ao SGLang por outro usuário em 6 de julho, e a Cloudflare diz que o notou durante a investigação. O conserto veio nas versões v0.5.20 e v0.5.21 do motor, com ajustes na v0.5.22, lançada em 19 de outubro.</p>

    <h2>O que a Cloudflare mudou</h2>
    <p>Para fechar a brecha, a empresa ampliou o espaço de cache do GLM-5.3 para cerca de 2,04 milhões de tokens, o dobro da janela de contexto, de modo que todo pedido válido cabe. Também aplicou um patch para que pedidos rejeitados sejam encerrados na fila de admissão, com o erro original, antes de qualquer alocação ou transferência de memória. Além disso, passou a segurar as páginas de memória até a confirmação de que as escritas terminaram, limitou o tamanho dos lotes de transferência e mudou o balanceador de carga para que a desconexão de um cliente não aborte o pedido no meio do processo.</p>
    <p>Todo deploy de modelo com esse tipo de arquitetura agora passa por uma verificação que compara o tamanho do cache com o contexto anunciado, exige a liberação adiada de memória nas duas etapas e confere se os patches estão aplicados. A Cloudflare também trabalha com o SGLang em checagens de integridade que detectem, na hora da leitura, que um pedido está acessando memória que não é dele, e recomenda que todos os operadores do motor atualizem para a v0.5.22 ou superior.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você monta automações, atendentes de IA ou produtos próprios em cima de modelos hospedados, o caso mostra um risco pouco óbvio: em plataformas compartilhadas, o isolamento entre clientes depende de detalhes de configuração que você não vê. O problema só aparecia com prompts gigantes, algo cada vez mais comum quando se joga um repositório de código, um contrato longo ou meses de conversas de clientes no contexto de um agente.</p>
    <p>Na prática, três cuidados valem para pequenos negócios e autônomos. Primeiro, não envie dados pessoais ou sigilosos de clientes em prompts enormes se não precisar deles; resuma ou anonimize antes. Segundo, em produto que atende terceiros, a LGPD continua valendo mesmo quando a falha é do fornecedor de infraestrutura, então vale registrar quais fornecedores tratam esses dados e como você seria avisado de um incidente. Terceiro, desconfie de resposta que cite nomes, trechos ou informações que ninguém colocou no pedido: pode ser alucinação, mas pode ser sinal de contaminação e merece ser reportado ao provedor.</p>
    <p>Vale notar também a transparência do relatório: a Cloudflare detalha o que errou, inclusive ter testado só os códigos de resposta, e publica linha do tempo e correções. É o tipo de documento que você deveria procurar ao escolher onde hospedar um modelo.</p>
    <p>O Portal da AI já mostrou como <a href="/noticias/litellm-pypi-versao-comprometida-rouba-credenciais-ia">a versão comprometida do LiteLLM roubava credenciais de IA</a>, como <a href="/noticias/railway-invasao-chaves-api-ia-100-mil-workspaces">uma invasão à Railway buscava chaves de API</a> e o que a Anthropic apontou sobre os <a href="/noticias/anthropic-glm-5-3-zhipu-riscos-ciberseguranca">riscos de cibersegurança do GLM-5.3</a>. Para aplicar na prática, leia o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher uma ferramenta de IA com segurança</a>, o guia de <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">LGPD para pequeno negócio que usa IA</a> e o texto sobre <a href="/artigos/colar-dados-da-empresa-no-chatgpt-o-que-o-funcionario-pode-fazer">o que pode ou não ser colado em uma IA</a>.</p>
    <p>A fonte é a própria Cloudflare, que descreve o incidente do ponto de vista de quem o operou. As datas, números e versões citados aqui vêm do relatório, e a empresa afirma que não identificou nenhum cliente prejudicado por exploração deliberada, embora os 155 casos tenham de fato exposto dados entre usuários.</p>

    <div class="callout-box"><span class="callout-label">Fonte original</span>Relatório da <a href="https://blog.cloudflare.com/kv-cache-exposure-remediation/" rel="noopener noreferrer nofollow" target="_blank">Cloudflare</a>, publicado em 26 de outubro de 2026, em divulgação coordenada com o projeto SGLang.</div>
  `,
};
