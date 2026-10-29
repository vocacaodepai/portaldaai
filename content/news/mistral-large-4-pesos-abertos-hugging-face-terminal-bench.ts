import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "mistral-large-4-pesos-abertos-hugging-face-terminal-bench",
  title: "Mistral libera os pesos do Large 4, aberto e com 1 trilhão de parâmetros",
  summary:
    "A Mistral publicou no Hugging Face os pesos do Large 4, três semanas após a prévia: 1 trilhão de parâmetros, 52 bilhões ativos e 41% no Terminal-Bench 4.0.",
  author: "Bruno Danello",
  sourceName: "The Next Web",
  sourceUrl: "https://thenextweb.com/news/mistral-large-4-open-weights-release",
  date: "2026-10-29",
  publishedAt: "2026-10-29T11:50:00-03:00",
  topic: "lancamentos",
  imageQuery: "Mistral AI logo",
  content: `
    <p>A Mistral AI liberou nesta quinta-feira, 29 de outubro de 2026, os pesos do Mistral Large 4, o modelo de 1 trilhão de parâmetros que a empresa francesa havia mostrado em versão prévia três semanas antes. Os arquivos estão no Hugging Face, e o modelo também segue disponível pela API da Mistral e para alguns usuários do Vibe, o ambiente de código da empresa. A informação vem de reportagem do The Next Web publicada na mesma data, que reúne declarações do vice-presidente de ciência da Mistral, Pierre Stock, e números de benchmarks divulgados pela própria empresa. Para quem trabalha com IA, o ponto central é simples: um modelo desse porte agora pode ser baixado e rodado por qualquer organização com hardware suficiente.</p>

    <h2>O que mudou desde a prévia</h2>
    <p>Na apresentação de 6 de outubro, que já <a href="/noticias/mistral-lanca-large-4-le-chonk-trilhao-parametros">cobrimos aqui no Portal da AI</a>, o Large 4, apelidado de "Le Chonk", era um modelo multimodal com acesso restrito. Agora a Mistral diz ter dado mais três semanas de aprendizado por reforço guiado por feedback de clientes, e o resultado aparece em números. O modelo tem 1 trilhão de parâmetros no total, mas só 52 bilhões ficam ativos a cada tarefa, o que é a lógica de uma arquitetura de especialistas: o modelo é enorme em capacidade armazenada, porém usa apenas uma fração dele por resposta. Ele aceita texto e imagens como entrada e devolve texto e código.</p>

    <p>Outra mudança está nos modos de raciocínio. Antes havia o modo alto; agora existem também os modos baixo e médio, para tarefas que não precisam de tanto processamento. Segundo a Mistral, o modo alto ficou 50% mais eficiente do que na prévia, ou seja, gasta menos tokens para chegar a respostas equivalentes. Esse tipo de ajuste pesa direto na conta de quem paga por token.</p>

    <h2>Os números de benchmark</h2>
    <p>No Terminal-Bench 4.0, teste que mede como um agente se sai em tarefas de programação feitas num terminal, e que faz parte do Coding Agent Index da Artificial Analysis, o Large 4 marcou 41%, contra 28% na prévia. Pelos gráficos citados na reportagem, o GLM-5.3 aparece com 40%, o DeepSeek V4.1 Flash com 31% e o Kimi K3 com 21%. No índice completo de agentes de código, a Mistral afirma que o modelo rivaliza com o GLM-5.3 gastando em média 47% menos tokens por tarefa.</p>

    <p>Em segurança, o CyberGym-E2E, que avalia a capacidade de encontrar, reproduzir e corrigir falhas de memória em projetos abertos escritos em C e C++, deu 79% ao Large 4, empatando com o MiMo-V2.6-Pro e superando o DeepSeek V4.1 Flash, que fez 76%. Segundo a reportagem, alguns clientes já usam o modelo em testes de invasão automatizados, com agentes especializados. Vale o aviso de sempre: os resultados foram divulgados pela Mistral e reproduzidos em gráficos com créditos à empresa e à Artificial Analysis, então comparações independentes ainda vão aparecer nos próximos dias.</p>

    <h2>Quanto hardware é preciso</h2>
    <p>Mesmo com 52 bilhões de parâmetros ativos, guardar 1 trilhão de parâmetros exige máquinas pesadas. De acordo com o The Next Web, uma versão quantizada, isto é, comprimida para ocupar menos memória, roda em quatro GPUs Nvidia B200 ou B300. Isso é pouco para um data center, mas está longe de um computador de mesa. A Mistral promete versões menores, destiladas, entre elas uma que roda em notebook, nos próximos meses, sem compromisso de data.</p>

    <p>O preço da API ainda não foi publicado. Stock argumentou que comparar valor por token engana quando um modelo precisa de menos tokens para concluir o mesmo trabalho, o que reforça o discurso de eficiência da empresa. A reportagem também não informa qual licença acompanha os pesos, detalhe importante para quem pensa em usar o modelo em produto comercial: antes de qualquer decisão, leia os termos na página do Hugging Face.</p>

    <h2>Treinado com menos recursos, diz a empresa</h2>
    <p>A Mistral afirma que treinou o Large 4 em 3.800 GPUs Nvidia Grace Blackwell na Europa, e que a etapa de aprendizado por reforço rodou em computação própria, na França, com consumo na casa de 10 megawatts. O CEO Arthur Mensch disse que, em três anos, a empresa levantou cerca de US$ 6 bilhões, enquanto outros laboratórios captaram centenas de bilhões para chegar a capacidades parecidas. O próprio texto observa que a comparação é difícil de verificar, porque laboratórios chineses divulgam pouco sobre custos de treinamento.</p>

    <p>Stock também enquadrou a abertura dos pesos como questão de continuidade. Na visão dele, a IA vai funcionar como eletricidade, e nenhuma empresa deveria depender de um fornecedor capaz de cortar seu acesso: depois que os pesos circulam, o acesso não pode mais ser retirado. Ele ainda argumentou que laboratórios chineses não garantem que vão continuar publicando pesos e oferecem menos transparência. Rivais sustentam o oposto, que modelos abertos carregam mais risco, e esse debate ganhou força depois que a <a href="/noticias/safa-padrao-seguranca-ia-openai-anthropic-google">indústria discutiu padrões de segurança para IA</a>. O objetivo declarado de Stock é "criar a cadência da fronteira", e não apenas alcançá-la uma vez.</p>

    <h2>O quadro dos modelos abertos</h2>
    <p>O Large 4 chega num momento de oferta farta de modelos abertos. Nas últimas semanas, o Portal da AI registrou o <a href="/noticias/xiaomi-lanca-mimo-v2-6-modelo-aberto-treinado-3-milhoes">MiMo-V2.6 da Xiaomi</a>, o <a href="/noticias/reflection-ai-lanca-beam-modelo-aberto">Beam da Reflection AI</a>, o <a href="/noticias/runway-praxis-1-modelo-aberto-robos">Praxis-1 da Runway</a>, a <a href="/noticias/deepseek-v4-1-flash-mantem-v4-pro">linha V4.1 da DeepSeek</a> e o <a href="/noticias/nvidia-nemotron-3-5-transcribe-modelo-aberto-40-idiomas">Nemotron 3.5 Transcribe da Nvidia</a>. A diferença é o tamanho: poucos pesos abertos chegam à casa do trilhão de parâmetros, e a Mistral é a principal aposta ocidental fora dos Estados Unidos nessa faixa.</p>

    <h2>Por que isso importa para você</h2>
    <p>Mesmo que você nunca vá baixar 1 trilhão de parâmetros, o movimento afeta o seu trabalho de algumas formas:</p>
    <ul>
      <li>Modelos abertos competitivos pressionam o preço das APIs fechadas. Quem cria produtos com IA ganha poder de negociação e mais opções de fornecedor.</li>
      <li>Empresas com exigências de privacidade ou de residência de dados podem rodar o modelo na própria infraestrutura, algo cada vez mais pedido por clientes corporativos, inclusive no Brasil.</li>
      <li>O desempenho em programação e segurança, as duas áreas em que a Mistral concentrou os números, indica que agentes de código baseados em pesos abertos estão chegando perto dos fechados.</li>
      <li>As versões menores prometidas, incluindo uma para notebook, devem ser as mais úteis para freelancers e pequenos negócios, mas ainda não têm data.</li>
      <li>Antes de apostar no modelo, confira licença, preço da API e testes independentes. Até agora, quase todos os números vêm da própria Mistral.</li>
    </ul>

    <p>Se você usa IA para programar, automatizar tarefas ou montar serviços, vale acompanhar os próximos dias: avaliações de terceiros, o preço da API e os termos de licença vão dizer se o Large 4 é opção real para o seu fluxo de trabalho ou apenas mais um marco da disputa entre laboratórios. A Mistral ainda não informou quando as versões destiladas chegam nem se o Large 4 será acessível por provedores de nuvem que atendem o Brasil.</p>
  `,
};
