import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "microsoft-mai-dxo-ia-diagnostico-supera-medicos-science",
  title: "IA da Microsoft acerta 83% de casos médicos difíceis, contra 36%",
  summary:
    "Estudo na Science mostra o MAI-DxO, junta de agentes de IA, diagnosticando 83% de casos complexos, ante 36% de clínicos sozinhos. Há ressalvas importantes.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl:
    "https://techcrunch.com/2026/10/22/microsofts-mustafa-suleyman-says-its-ai-outperforms-doctors-on-hard-cases-as-he-chases-medical-superintelligence/",
  date: "2026-10-22",
  publishedAt: "2026-10-22T23:24:00-03:00",
  topic: "lancamentos",
  imageQuery: "Mustafa Suleyman portrait",
  content: `
    <p>A Microsoft publicou nesta quinta-feira (22), na revista científica Science, um estudo sobre o MAI-DxO, sistema de IA que simula uma junta de médicos para fechar diagnósticos. Em casos complexos do New England Journal of Medicine, o sistema acertou 83% das vezes, enquanto clínicos gerais e internistas trabalhando sozinhos, com material de consulta, acertaram 36%. Os dados foram detalhados em reportagem do <a href="https://techcrunch.com/2026/10/22/microsofts-mustafa-suleyman-says-its-ai-outperforms-doctors-on-hard-cases-as-he-chases-medical-superintelligence/" rel="noopener noreferrer nofollow">TechCrunch</a>, que ouviu Mustafa Suleyman, CEO da Microsoft AI, e é a base desta matéria.</p>
    <p>O número impressiona, mas vem com ressalvas importantes que o próprio texto original destaca. A comparação foi feita em simulação, e não com pacientes reais. Além disso, casos tão complexos normalmente são conduzidos por especialistas ou equipes de médicos, e esse grupo não entrou na comparação. Ou seja: o estudo mostra que a IA supera o médico generalista isolado em quebra-cabeças difíceis, não que ela substitua o sistema de saúde.</p>

    <h2>Como o MAI-DxO funciona</h2>
    <p>O MAI-DxO, chamado de DxO pela Microsoft, não é um modelo único. Ele orquestra vários agentes de IA que se comportam como uma mesa de especialistas: um interroga o paciente, outro decide quais exames pedir, outros debatem as hipóteses até chegar a um diagnóstico. Na prática, é uma camada de coordenação colocada por cima de modelos de linguagem já existentes.</p>
    <p>Os pesquisadores testaram a camada com modelos da OpenAI, do Google, da Anthropic, da Meta e da DeepSeek. Os melhores resultados vieram com o GPT-5 e o GPT-5.5, este lançado em abril de 2026. Com o GPT-5 sozinho, usando um prompt curto e básico, a taxa em casos complexos foi de 78,9%, a um custo de cerca de US$ 8.400 por caso. Com o DxO, o custo caiu cerca de US$ 3.000, mas a precisão subiu só uns quatro pontos percentuais.</p>

    <h2>O que os números dizem de verdade</h2>
    <p>Com o GPT-5.5, o DxO elevou a precisão em casos complexos de 72% para quase 87%, com custo um pouco menor. Já nos casos de pronto-socorro, o ganho foi pequeno tanto em acerto quanto em economia: as duas configurações do GPT-5.5 ficaram em torno de 85%.</p>
    <p>Em modelos mais fracos, o efeito da camada é maior. O Gemini 2.5 Flash subiu de 46,4% sozinho para quase 69% com o DxO. Mesmo assim, a diferença entre modelos fortes e fracos continuou maior do que o impulso dado pela orquestração. Segundo a reportagem, a própria Microsoft reconhece que os ganhos encolhem à medida que os modelos se aproximam do teto teórico. Em outras palavras, boa parte da melhora vem do modelo de base, e a camada de agentes soma por cima.</p>

    <h2>Próximos passos e a ideia de superinteligência médica</h2>
    <p>Suleyman, que cofundou a DeepMind e lidera a divisão de IA da Microsoft desde 2024, usa o resultado para defender o que a empresa chama de superinteligência médica: a capacidade de superar os melhores sistemas de saúde conduzidos por humanos em raciocínio clínico, incluindo a coordenação do cuidado. Ele espera que os modelos de saúde fiquem muito mais capazes em 24 a 36 meses.</p>
    <p>A empresa afirma que vai testar o DxO com o Beth Israel Deaconess Medical Center, em Boston. Pacientes que consentirem receberão as recomendações do sistema junto do atendimento padrão, e essas sugestões serão comparadas com as decisões dos médicos. A Microsoft também trabalha com a Mayo Clinic num modelo de base para saúde, previsto para 2027. Outro movimento do setor: o Google publicou neste mês, na The Lancet, um estudo com o mesmo hospital sobre o sistema AMIE em atendimento de urgência real.</p>
    <p>A Microsoft já vende ferramentas de ditado e de radiologia a profissionais de saúde e vê o DxO como extensão desse portfólio. Para acompanhar como a empresa tem tratado a segurança dos próprios modelos, vale ler também a cobertura do Portal da AI sobre os <a href="/noticias/microsoft-guardian-agents-modelos-fronteira-nao-confiaveis">Guardian Agents para modelos de fronteira não confiáveis</a>, tema relevante quando a IA passa a opinar em decisões de saúde.</p>

    <h2>Por que isso importa para você</h2>
    <p>Mesmo quem não trabalha com saúde sente o efeito. Primeiro, o estudo reforça uma tendência: vários agentes coordenados, cada um com um papel, tendem a render mais do que um chatbot respondendo sozinho. A lógica vale para quem monta automações no próprio negócio, seja atendimento, análise de contratos ou pesquisa de mercado. Se você ainda está escolhendo ferramentas, o guia <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini: qual IA escolher</a> ajuda a entender onde cada modelo se encaixa.</p>
    <p>Segundo, o resultado mostra que o modelo de base importa muito. A orquestração melhora o desempenho, mas um modelo fraco com uma boa camada ainda perde para um modelo forte. Na hora de pagar por uma assinatura ou por API, vale testar o mesmo trabalho em mais de um modelo antes de decidir, em vez de assumir que a ferramenta mais cara é sempre a melhor para a sua tarefa.</p>
    <p>Terceiro, quem usa IA para saúde no dia a dia, como muita gente que pergunta sintomas a um chatbot, precisa manter os pés no chão. O estudo é uma simulação com casos publicados, a comparação deixou de fora os especialistas e o próprio sistema ainda vai passar por testes com pacientes reais. Use essas ferramentas como apoio para organizar dúvidas e levar perguntas melhores à consulta, nunca como substituto de avaliação médica. A discussão sobre medir a qualidade de IA em temas sensíveis também apareceu no <a href="/noticias/openai-lanca-mentalhealthbench-avaliar-ia-saude-mental">MentalHealthBench da OpenAI</a>, que avalia respostas de IA em saúde mental.</p>
    <p>Por fim, há uma oportunidade para quem empreende no Brasil. Saúde é um setor em que a demanda por organização de dados, triagem e acompanhamento de pacientes é enorme, e os grandes laboratórios estão mirando esse mercado. O <a href="/noticias/philips-future-health-index-2026-ia-saude-brasil">Future Health Index 2026 da Philips</a> mostra como profissionais brasileiros enxergam a IA na saúde, e o <a href="/noticias/healthleap-capta-38-milhoes-ia-pacientes-hospitalares-risco">caso da HealthLeap</a>, que captou US$ 38 milhões para identificar pacientes hospitalares em risco, indica que investidores já financiam produtos nessa direção.</p>

    <h2>O que observar daqui para a frente</h2>
    <p>O teste decisivo será o piloto em Boston. Se as recomendações do DxO forem comparadas com decisões reais e o desempenho se mantiver, o argumento da Microsoft ganha força. Se o resultado ficar abaixo do que apareceu na simulação, o caso servirá de lembrete de que benchmark não é consultório. Também vale acompanhar se haverá avaliação com equipes de especialistas, que é o ponto fraco da comparação atual, e se a empresa abrirá o acesso ao sistema fora dos Estados Unidos.</p>
    <p>Até lá, a leitura mais honesta é a que o próprio estudo sugere: a IA já é muito boa em raciocinar sobre casos difíceis quando tem acesso a boas informações, mas a distância entre acertar um caso de revista científica e cuidar de um paciente de verdade continua grande. O ritmo de avanço, porém, explica por que as big techs tratam saúde como uma das próximas grandes frentes da IA.</p>

    <div class="callout-box">
      <span class="callout-label">Fonte original</span>
      <p>Reportagem de Rebecca Bellan no <a href="https://techcrunch.com/2026/10/22/microsofts-mustafa-suleyman-says-its-ai-outperforms-doctors-on-hard-cases-as-he-chases-medical-superintelligence/" rel="noopener noreferrer nofollow">TechCrunch</a>, publicada em 22 de outubro de 2026, a partir do estudo publicado na Science.</p>
    </div>
  `,
};
