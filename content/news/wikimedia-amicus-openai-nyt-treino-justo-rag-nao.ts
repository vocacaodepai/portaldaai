import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "wikimedia-amicus-openai-nyt-treino-justo-rag-nao",
  title: "Wikimedia diz à Justiça: treinar IA é uso justo, chatbot copiar site não",
  summary:
    "No processo do Times contra a OpenAI, a Wikimedia defende que treinar IA é provavelmente uso justo, mas que o chatbot copiar sites para responder (RAG) não é.",
  author: "Bruno Danello",
  sourceName: "The Next Web",
  sourceUrl:
    "https://thenextweb.com/news/wikimedia-amicus-brief-openai-new-york-times-fair-use-rag",
  date: "2026-10-30",
  publishedAt: "2026-10-30T08:34:00-03:00",
  topic: "regulacao",
  imageQuery: "Wikimedia Foundation logo",
  content: `
    <p>A Wikimedia Foundation, organização que mantém a Wikipédia, pediu à Justiça dos Estados Unidos para entrar como "amiga da corte" (amicus curiae) no maior processo de direitos autorais contra a OpenAI. O pedido foi feito na quinta-feira (29) e o parecer foi divulgado nesta sexta-feira (30), segundo a reportagem do The Next Web. A tese é incomum porque não agrada totalmente nenhum dos dois lados: para a Wikimedia, treinar um modelo de IA é provavelmente uso justo, mas o chatbot que copia o texto de um site para montar uma resposta, não.</p>
    <p>O caso, chamado <em>In re: OpenAI, Inc. Copyright Infringement Litigation</em>, corre no Tribunal Distrital do Distrito Sul de Nova York e reúne 12 ações contra a OpenAI, entre elas a que o New York Times moveu em 2023 contra a empresa e a Microsoft. O juiz Sidney H. Stein vai decidir se usar conteúdo protegido para construir grandes modelos de linguagem se enquadra em uso justo (fair use). Ele ainda não decidiu essa questão nem se aceita o parecer da Wikimedia.</p>

    <h2>Nem a tese do Times, nem a da OpenAI</h2>
    <p>O Times sustenta que usar seu conteúdo para qualquer finalidade, inclusive treino, viola a lei. OpenAI e Microsoft respondem que treinar com dados públicos é uso justo. A Wikimedia diz que as duas leituras são "amplas e simplificadas demais" e pede que o tribunal analise cada uso separadamente, apoiando-se na decisão da Suprema Corte de 2023 no caso Warhol. Na visão da fundação, copiar um site, por si só, não é um "uso": o que importa é o que a empresa faz com as cópias depois.</p>
    <p>Aplicando esse critério, o parecer separa dois momentos. O primeiro é o treino de um modelo de propósito geral, que a Wikimedia considera "provavelmente justo", porque o modelo vira algo novo e não substitui as obras com as quais aprendeu. O segundo é a geração aumentada por recuperação, a técnica conhecida como RAG, em que o chatbot busca páginas na hora da pergunta, copia os trechos mais relevantes, entrega ao modelo e muitas vezes reproduz boa parte do original na resposta.</p>

    <h2>Onde a Wikimedia traça a linha</h2>
    <p>Para a fundação, o pré-treino do modelo geral do ChatGPT foi uso justo, mas o uso de cópias no recurso de RAG do produto não é. A conclusão prática do parecer é que empresas que usam RAG devem seguir os termos de licença de cada editor, e o mesmo vale para as novas técnicas de "grounding", que servem a um propósito parecido. É um recorte que conversa diretamente com o que acontece quando você pede ao ChatGPT ou a outro assistente para pesquisar algo na web e ele responde com o conteúdo de sites de terceiros.</p>
    <p>A Wikimedia lembra que o conteúdo da Wikipédia usa a licença Creative Commons CC BY-SA 4.0, que exige crédito aos autores originais e manter as adaptações sob a mesma licença. Quando chatbots aproveitam o material sem cumprir esses termos, diz a organização, as pessoas se sentem desestimuladas a contribuir. A Wikipédia tem mais de 67 milhões de artigos em 300 idiomas, escritos por voluntários com base em fontes confiáveis, incluindo reportagens de jornal.</p>

    <h2>Servidores, limites e o recado a quem raspa dados</h2>
    <p>O parecer também trata do custo técnico. A raspagem em massa sobrecarrega os servidores da fundação, que criou barreiras técnicas, e o documento admite que mal-intencionados costumam contorná-las. Uma nota de rodapé compara a situação a um parque público que continua aberto, mas pode barrar quem tenta passar com um caminhão de carga por ele. A Wikimedia quer que grandes usuários respeitem seus limites públicos de requisição ou paguem pelo serviço Enterprise.</p>
    <p>A CEO Bernadette Meehan disse que a fundação toma posição no caso para "defender o conhecimento humano livre e aberto de que a Wikipédia depende" e que ampliar o acesso ao conhecimento por meio da IA precisa respeitar as pessoas e comunidades que tornam o conhecimento confiável possível. O diretor jurídico Stephen LaPorte afirmou que a discussão sobre uso justo na era da IA não pode ficar restrita a organizações com fins lucrativos. Neste mês, a Wikimedia já havia dito que agentes da OpenAI editaram suas wikis sem aprovação, tema que o Portal da AI cobriu em <a href="/noticias/wikimedia-agentes-openai-edicoes-sem-aprovacao-wikidata">agentes da OpenAI e edições sem aprovação nas wikis</a>.</p>

    <h2>O contexto das batalhas judiciais</h2>
    <p>O parecer chega em meio a uma sequência de disputas. Em junho, quase 400 jornais locais processaram OpenAI e Microsoft. Em julho, o Times e outros veículos pediram ao juiz que sancionasse a OpenAI, acusada de esconder provas. Em setembro, o Departamento de Justiça dos EUA ficou do lado da OpenAI e disse a um tribunal de Nova York que treinar IA é uso justo. Antes disso, um tribunal de apelação já havia negado uso justo a uma IA treinada com dados da Westlaw, como mostra a cobertura de <a href="/noticias/justica-eua-ia-copyright-fair-use-westlaw">Tribunal dos EUA nega uso justo a IA treinada com dados da Westlaw</a>. Outras frentes seguem abertas, como o processo dos herdeiros de Elvis Presley contra a Anthropic, em <a href="/noticias/elvis-presley-herdeiros-processam-anthropic-274-musicas">274 músicas</a>.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você usa IA para pesquisar, escrever ou vender serviços, a distinção feita pela Wikimedia mexe com o produto que você paga. Muitos assistentes ganham utilidade justamente por ler sites em tempo real. Se a Justiça americana entender que essa leitura exige licença, as empresas podem passar a fechar acordos com editores, limitar o que citam ou repassar o custo aos planos pagos, algo que já aparece em reportagens como <a href="/noticias/openai-treinar-modelos-sem-internet-ao-vivo-copia-da-web">OpenAI vai treinar modelos sem internet ao vivo</a>.</p>
    <p>Para quem produz conteúdo no Brasil, seja blog, canal ou newsletter, o debate também define quem recebe crédito e tráfego quando um chatbot resume o seu texto. E para quem monta automações com agentes que buscam dados na web, vale ler os termos de uso de cada fonte antes de raspar páginas em escala. Se ainda está escolhendo ferramenta, o guia <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini: qual IA escolher</a> ajuda a comparar o que cada uma faz com a pesquisa na web.</p>

    <h2>O que acompanhar</h2>
    <p>O próximo passo é a decisão do juiz Stein sobre aceitar o parecer e, principalmente, sobre o mérito do uso justo. Como a tese da Wikimedia separa treino e RAG, ela pode influenciar um desfecho dividido: liberdade maior para treinar modelos e regras mais duras para respostas que reproduzem sites. Também vale observar se outras organizações que mantêm conteúdo aberto, como bibliotecas e comunidades de código, apresentam pareceres parecidos. Por enquanto, nada está decidido: o que existe é uma posição pública de peso, vinda de quem fornece boa parte do texto que alimenta os chatbots, e que deve entrar na conta de todos os lados.</p>
    <p>Fonte: The Next Web.</p>
  `,
};
