import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "doj-questiona-compra-hugging-face-nvidia-12-9-bilhoes",
  title: "Governo dos EUA questiona a compra da Hugging Face pela Nvidia",
  summary:
    "O Departamento de Justiça dos EUA pergunta se a compra da Hugging Face por US$ 12,9 bi daria à Nvidia controle de um ponto-chave da IA aberta, diz a Reuters.",
  author: "Bruno Danello",
  sourceName: "The Next Web, The Decoder, Reuters",
  sourceUrl: "https://thenextweb.com/news/doj-nvidia-hugging-face-deal-antitrust-inquiry",
  date: "2026-10-30",
  publishedAt: "2026-10-30T06:35:00-03:00",
  topic: "regulacao",
  imageQuery: "Jensen Huang Nvidia portrait",
  content: `
    <p>O Departamento de Justiça dos Estados Unidos (DOJ) começou a fazer perguntas sobre a compra da Hugging Face pela Nvidia, negócio de cerca de US$ 12,9 bilhões acertado em setembro de 2026. A informação é de uma exclusiva da agência Reuters publicada na noite de quarta-feira, 28 de outubro, que cita pessoas a par do assunto, e foi repercutida por The Next Web e The Decoder. O que existe até agora é uma consulta, não um processo: nenhuma ação formal foi aberta, e a própria agência de notícias não aponta conclusão alguma.</p>

    <p>Este texto é análise nossa a partir dessas reportagens. Como o fato depende de fontes anônimas citadas pela Reuters, vale tratar a notícia como sinal de que o negócio vai ser examinado de perto, e não como veto ou ameaça de bloqueio.</p>

    <h2>O que o governo quer saber</h2>
    <p>Segundo o relato, os investigadores perguntam como a aquisição afetaria a concorrência em inteligência artificial. Duas dúvidas aparecem. A primeira é se a compra permitiria à Nvidia "capturar um ponto fundamental de distribuição da IA". A segunda é se a empresa poderia usar a plataforma para prejudicar rivais. O foco, portanto, não é o tamanho do cheque, e sim o papel da Hugging Face como o lugar onde desenvolvedores do mundo todo publicam, baixam e comparam modelos e conjuntos de dados abertos.</p>

    <p>O DOJ se recusou a comentar, citando a política de não falar sobre investigações em andamento. A Nvidia também não comentou, e a Hugging Face não respondeu aos pedidos de manifestação. Em reportagens complementares, um porta-voz do governo teria dito que investigações não são prova de irregularidade, o que reforça que se trata de uma etapa preliminar.</p>

    <h2>Os termos do negócio</h2>
    <p>A Nvidia anunciou o acordo em setembro e prometeu manter a plataforma aberta. A previsão é fechar a compra no primeiro semestre de 2027. A Nvidia afirmou na ocasião que a Hugging Face continuaria apoiando parcerias com diversos fornecedores de chips, nuvens e empresas de IA, ou seja, que não passaria a favorecer só o hardware da própria Nvidia. Já mostramos nos bastidores da disputa que a OpenAI também tentou entrar na empresa, como contamos em <a href="/noticias/openai-huggingface-oferta-100-milhoes-nvidia">OpenAI tentou investir na Hugging Face antes da compra pela Nvidia</a>.</p>

    <h2>Uma investigação maior ao fundo</h2>
    <p>A consulta sobre a Hugging Face não aparece sozinha. Ela corre ao lado de uma investigação antitruste sobre a Nvidia que, segundo a Reuters, começou no governo de Joe Biden e continuou com Donald Trump. Esse inquérito olha aquisições, investimentos e práticas de venda da fabricante de chips, incluindo se a empresa pressiona clientes. Segundo as reportagens, entre os negócios examinados estão a compra da SchedMD e o acordo de licenciamento e contratação de executivos da Groq, avaliado em cerca de US$ 20 bilhões. No caso da Groq, a dúvida levantada em setembro era se a Nvidia teria estruturado a operação como licença, em vez de compra, para evitar uma revisão formal de fusão.</p>

    <p>O Decoder acrescenta que autoridades verificam se a Nvidia teria oferecido a clientes mais chips de IA caso comprassem também equipamentos de rede e processadores da Groq. Esse tipo de pacote casado é uma preocupação clássica de órgãos de concorrência, embora a reportagem não use esse termo e não apresente prova. Na França, a autoridade de concorrência também investiga a Nvidia. Entre as preocupações citadas estão a dependência do setor do software CUDA e as participações da empresa em nuvens como a CoreWeave.</p>

    <h2>Por que a Hugging Face é tão sensível</h2>
    <p>Para quem não acompanha o setor, a Hugging Face funciona como uma espécie de GitHub dos modelos de IA. É ali que laboratórios publicam pesos abertos, que pesquisadores dividem conjuntos de dados e que milhares de empresas buscam modelos prontos para rodar por conta própria. Lançamentos recentes mostram o tamanho disso. Quando a Mistral abriu os pesos do seu modelo de um trilhão de parâmetros, o endereço escolhido foi a Hugging Face, como relatamos em <a href="/noticias/mistral-large-4-pesos-abertos-hugging-face-terminal-bench">Mistral libera os pesos do Large 4</a>.</p>

    <p>É por isso que a pergunta do DOJ faz sentido do ponto de vista concorrencial, mesmo sem evidência de má conduta. Quem controla o principal ponto de distribuição de modelos abertos pode, em tese, dar mais visibilidade a uns do que a outros, otimizar o desempenho para os próprios chips ou impor condições a quem hospeda ali. A Nvidia promete que nada disso vai acontecer, e é justamente essa promessa que reguladores costumam testar antes de liberar uma compra.</p>

    <h2>O cenário político e o que vem agora</h2>
    <p>O contexto americano também pesa. O governo Trump trata a IA como prioridade estratégica, e o DOJ disse, segundo o relato, que continuará priorizando o avanço da chamada superinteligência. Ao mesmo tempo, a Nvidia é a empresa mais valiosa do mundo e vem usando o domínio em chips para avançar em software e modelos. A empresa também estaria em conversa com a Reflection AI, fabricante de modelos abertos que já apoia, sobre uma compra ou um investimento maior. Qualquer movimento nessa direção tende a ser examinado sob a mesma lente.</p>

    <p>Os próximos passos possíveis são conhecidos, mas não datados: o DOJ pode encerrar a consulta sem ação, pedir informações adicionais, exigir compromissos da Nvidia ou abrir uma revisão mais profunda. Como o fechamento está previsto só para o primeiro semestre de 2027, há tempo para qualquer um desses caminhos. Também vale lembrar que o assunto coincide com outras frentes regulatórias que mapeamos, como a investigação da FTC sobre agentes de IA, em <a href="/noticias/ftc-investiga-openai-anthropic-agentes-ia">FTC investiga OpenAI e Anthropic</a>.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Para guardar</span>
      <p>Até agora é uma consulta baseada em fontes anônimas, sem processo, sem decisão e sem posição pública da Nvidia. Nada muda hoje no uso da Hugging Face.</p>
    </div>

    <h2>Por que isso importa para você</h2>
    <p>Mesmo que você nunca tenha aberto a Hugging Face, boa parte das ferramentas abertas de IA que empreendedores e profissionais brasileiros usam passa por ela, direta ou indiretamente. Uma mudança de regras ali afetaria custo, acesso e variedade de modelos. Alguns pontos práticos:</p>
    <ul>
      <li>Se você roda modelos abertos em projetos próprios ou para clientes, mantenha cópias locais dos pesos de que depende e não trate uma única plataforma como único ponto de acesso.</li>
      <li>Se o seu serviço depende de chips ou nuvem de um único fornecedor, desenhe a automação de forma modular para poder trocar de provedor se condições ou preços mudarem.</li>
      <li>Acompanhe o desfecho como indicador de quão rígidos serão os reguladores com a concentração em IA: isso influencia o preço e a oferta de modelos nos próximos anos.</li>
      <li>Desconfie de manchetes que tratem a consulta como bloqueio. Por ora é só uma etapa de apuração.</li>
    </ul>

    <p>Para entender como a disputa por infraestrutura chega ao seu bolso, vale ler também <a href="/noticias/nvidia-recompra-150-bilhoes-acoes-recorde">Nvidia recompra US$ 150 bilhões em ações</a>, <a href="/noticias/amazon-torchneuron-pytorch-trainium-desafia-nvidia">o movimento da Amazon para desafiar a Nvidia com o Trainium</a> e o guia sobre <a href="/artigos/creditos-de-api-do-claude-nos-planos-max-e-team-como-resgatar-o-que-cobrem-e-limites">créditos de API do Claude nos planos Max e Team</a>.</p>

    <p>Por fim, uma observação de método: o fato central vem de uma exclusiva da Reuters, com fontes não identificadas, e os detalhes do contexto vêm do resumo do The Next Web e do The Decoder. É uma notícia apoiada em fonte secundária, que atualizaremos quando houver manifestação oficial do DOJ, da Nvidia ou da Hugging Face.</p>
  `,
};
