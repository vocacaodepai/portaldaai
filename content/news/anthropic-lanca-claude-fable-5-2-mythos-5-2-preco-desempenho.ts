import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-lanca-claude-fable-5-2-mythos-5-2-preco-desempenho",
  title: "Anthropic lança Claude Fable 5.2, mais rápido e com menos bloqueios",
  summary:
    "Novo modelo de topo da Anthropic supera Opus 5.5 e GPT-6 Astra em programação e trabalho de escritório, custa US$ 8 por milhão de tokens e bloqueia menos.",
  author: "Bruno Danello",
  sourceName: "Anthropic",
  sourceUrl: "https://www.anthropic.com/claude-fable-and-mythos-5-2",
  date: "2026-11-09",
  publishedAt: "2026-11-09T17:23:00-03:00",
  topic: "lancamentos",
  imageQuery: "Anthropic logo",
  content: `
    <p>A Anthropic lançou nesta segunda-feira, 9 de novembro, o Claude Fable 5.2 e o Claude Mythos 5.2, a nova versão da sua linha de modelos mais poderosos. Os dois nomes são, na prática, o mesmo modelo por baixo: o Fable 5.2 é a versão aberta a todos os usuários, com travas de segurança que barram pedidos de alto risco em cibersegurança e biologia, e o Mythos 5.2 é a versão sem essas travas, liberada só para organizações aprovadas em programas de verificação da empresa. O anúncio chega pouco mais de dois meses depois do <a href="/noticias/anthropic-lanca-claude-fable-5-1-mythos-5-1">lançamento do Fable 5.1 e do Mythos 5.1</a>, no começo de setembro.</p>

    <p>O Fable 5.2 já está disponível em todas as plataformas da Anthropic e também na Amazon Web Services, no Google Cloud e no Microsoft Azure. Para quem usa pela API, o identificador do modelo é claude-fable-5-2. O preço padrão é de US$ 8 por milhão de tokens de entrada e US$ 40 por milhão de tokens de saída. Há ainda um modo rápido opcional, que custa o dobro (US$ 16 e US$ 80) e, segundo a empresa, gera texto até 2,5 vezes mais depressa.</p>

    <h2>O que melhorou em relação ao Fable 5.1</h2>
    <p>A Anthropic diz que o novo modelo responde até 30% mais rápido que a geração anterior, mesmo sem o modo rápido. Nos testes divulgados pela própria empresa, o salto aparece com mais força em tarefas longas de agente, aquelas em que a IA trabalha sozinha por várias etapas até entregar um resultado.</p>
    <p>Em programação, o Fable 5.2 marcou 69,9% no FrontierSWE v2, contra 56,3% do Fable 5.1, 62,3% do Claude Opus 5.5 e 65,5% do GPT-6 Astra, da OpenAI. No FrontierCode 2.0, outro teste de código com agentes, foram 49,1%, contra 32,4% da versão anterior. Em uso de computador (o modelo operando telas, cliques e programas como uma pessoa faria), o resultado no OSWorld 2.1 subiu de 83,5% para 89,3%.</p>
    <p>O ganho mais chamativo está no Remote Labor Index, que mede se a IA consegue entregar trabalhos de escritório reais feitos hoje por profissionais remotos. O Fable 5.2 chegou a 41,3%, mais que o dobro dos 17,9% do Fable 5.1 e bem acima dos 21,3% do Opus 5.5 e dos 20,8% do GPT-6 Astra. Em automação de fluxos de trabalho de empresas (AutomationBench), o salto foi de 31,4% para 51,4%, embora aqui o Gemini 4 Carbon, do Google, ainda apareça um pouco à frente, com 53,9%.</p>

    <div class="callout-box">
      <span class="callout-label">Números de benchmark são da própria empresa</span>
      <p>Todos os resultados citados nesta notícia foram divulgados pela Anthropic no anúncio do modelo. Testes independentes costumam aparecer nas semanas seguintes e podem mostrar diferenças menores entre os concorrentes, principalmente porque cada empresa escolhe quais testes e quais configurações destacar.</p>
    </div>

    <h2>Mais barato do que parece: o esforço ajustável</h2>
    <p>Um ponto importante para quem paga a conta é o controle de esforço, que define quanto o modelo "pensa" antes de responder. A Anthropic mostrou que o Fable 5.2, num nível de esforço mais baixo, chega perto ou iguala o Opus 5.5 gastando bem menos. No FrontierCode, com esforço alto, o Fable 5.2 marcou cerca de 45,3%, praticamente o mesmo que os 45,5% do Opus 5.5, por mais ou menos metade do custo por tarefa. No Humanity's Last Exam, uma prova de perguntas difíceis de várias áreas, o modelo em esforço baixo igualou a melhor nota do Opus 5.5 por menos de um décimo do custo.</p>
    <p>Mesmo assim, a recomendação da própria Anthropic é começar pelo Claude Opus 5.5 na maior parte do trabalho de programação e de escritório, e subir para o Fable ou o Mythos só nas tarefas mais ambiciosas. Para trabalhos simples e repetitivos, a empresa aponta o Sonnet 5.5 e o Haiku 5.5. Já explicamos aqui <a href="/artigos/modelo-pequeno-ou-grande-de-ia-velocidade-custo-e-qualidade-para-quem-usa">quando vale usar um modelo pequeno ou grande</a> e <a href="/artigos/claude-haiku-5-5-quando-o-modelo-pequeno-basta-preco-e-limites">em que casos o Haiku 5.5 dá conta</a>. O Fable 5.2 também pode atuar como orientador ou coordenador de outros modelos mais baratos, distribuindo tarefas entre eles.</p>

    <h2>Menos bloqueios em perguntas legítimas</h2>
    <p>As travas de segurança da linha Fable também acabam barrando parte das perguntas inofensivas de segurança digital e de biologia, e essa foi uma das frentes de ajuste. Segundo a Anthropic, o Fable 5.2 bloqueia cerca de 55% menos que o Fable 5.1 no geral, com queda de aproximadamente 60% nos bloqueios de cibersegurança e de 40% nos de biologia. Quando um pedido é barrado, a resposta não some: perguntas de segurança digital passam a ser atendidas pelo Claude Opus 4.8, e as de biologia pelo Claude Opus 5, modelos que a empresa considera de menor risco para esses temas.</p>
    <p>A versão sem travas, o Mythos 5.2, continua restrita. Profissionais de segurança podem pedir acesso pelo Programa de Verificação Cibernética, e pesquisadores de ciências da vida pelo programa equivalente da área. Clientes do Claude Enterprise acessam o Mythos 5.2 por meio do Claude Security. No teste de redescoberta de 1.829 falhas conhecidas (CVEs), o Mythos 5.2 encontrou 10,2% mais vulnerabilidades que o Opus 5.5 e 14,4% mais que o Mythos 5.1. A Mozilla, que já usava o modelo anterior em varreduras do Firefox, disse que a nova versão praticamente dobrou os números de descoberta de falhas. É uma disputa direta com o <a href="/noticias/openai-lanca-gpt-6-cyber-81-falhas-firefox-948-exploits-linux">GPT-6 Cyber, que a OpenAI lançou dias antes</a>.</p>

    <h2>Os exemplos que a Anthropic escolheu mostrar</h2>
    <p>Além dos testes padronizados, a empresa listou resultados práticos. Segundo a Anthropic, mais de 90% das mudanças incorporadas ao código principal da própria empresa hoje são escritas pelo Claude. Um serviço crítico em produção foi migrado de Python para Rust e passou a iniciar cerca de 26 vezes mais rápido. Um engenheiro coordenou mais de mil subagentes durante oito dias para montar um protótipo de sistema operacional que inicializa num notebook.</p>
    <p>Na matemática, uma equipe de mil agentes do Fable 5.2 formalizou o Último Teorema de Fermat em 30 horas, contra 11 dias de um esforço anterior, com uma prova sete vezes mais curta. Na engenharia, o modelo projetou três aparelhos eletrônicos que funcionam, entre eles uma central de assistente de voz e um viva-voz USB, em parceria com o fabricante Diode. Em física de materiais, deixou o código de cálculo de fônons do Quantum ESPRESSO cerca de 36 vezes mais rápido em média.</p>

    <h2>Segurança e limites impostos pela própria empresa</h2>
    <p>No lado de alinhamento, a Anthropic diz que o Mythos 5.2 teve a melhor nota da casa numa auditoria automática de comportamento com cerca de 1.900 cenários. Em mais de 1.800 testes de "fuga do ambiente de testes", o modelo usou credenciais ou arquivos de fora do permitido em 3,1% dos casos, contra 21% do Mythos 5.1 e 39% do Mythos 5. Os modelos foram avaliados também por testadores externos, como o Instituto de Segurança de IA do Reino Unido e a organização METR.</p>
    <p>Um detalhe chama atenção: a empresa afirma ter limitado de propósito o desempenho do modelo em tarefas de pesquisa de IA, como otimização de código para chips aceleradores e pesquisa de arquitetura de modelos de linguagem, mantendo esse nível perto do Opus 5.5. A trava conversa com a preocupação, já expressa pela própria Anthropic, com IA que acelera a construção da própria IA. A empresa também disse ter reduzido entre 90% e 99% os dados que terceiros conseguem colher para copiar o modelo, prática conhecida como <a href="/artigos/destilacao-de-modelos-de-ia-o-que-e-como-funciona-e-por-que-gera-briga">destilação</a>.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para quem assina o Claude, a mudança mais imediata está no uso incluído nos planos. Segundo a Anthropic, nos planos Pro e nos assentos padrão do Team o Fable pode ocupar até 50% do uso semanal, e assinantes elegíveis ganham de uma a três "recargas" do Fable, conforme o tempo de assinatura. Ou seja, quem paga o plano individual passa a ter acesso real ao modelo de topo, não só uma amostra.</p>
    <p>Para empresas e desenvolvedores no Brasil que usam a API, o recado é fazer conta antes de trocar de modelo. O Fable 5.2 é o modelo de topo da linha, mas, segundo os testes da empresa, com o esforço ajustado para baixo ele pode entregar resultado parecido com o do Opus 5.5 gastando menos por tarefa difícil. O caminho prudente é testar o modelo nos seus próprios casos de uso (atendimento, análise de documentos, código, automações) e comparar custo por tarefa concluída, não preço por milhão de tokens.</p>
    <p>Quem trabalha com segurança digital também ganha uma ferramenta nova, mas o acesso ao Mythos 5.2 depende de aprovação. E para quem ainda está escolhendo entre os assistentes do mercado, nosso comparativo <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini: qual IA escolher</a> ajuda a pensar no que cada um faz melhor. Os números divulgados mostram o Fable 5.2 à frente na maioria dos testes, mas a concorrência com OpenAI e Google segue apertada, e novos lançamentos devem vir nas próximas semanas.</p>
  `,
};
