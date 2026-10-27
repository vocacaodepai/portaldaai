import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "nvidia-nemotron-3-5-super-vl-bolt-modelos-abertos-agentes",
  title: "Nvidia lança Nemotron 3.5, modelos abertos para rodar agentes de IA",
  summary:
    "A Nvidia liberou o Super VL, de 120 bilhões de parâmetros, e o Bolt, que cabe em 24 GB, com pesos abertos para empresas rodarem agentes na própria máquina.",
  author: "Bruno Danello",
  sourceName: "Blog da Nvidia",
  sourceUrl: "https://blogs.nvidia.com/blog/nemotron-3-5-super-vl/",
  date: "2026-10-18",
  publishedAt: "2026-10-18T21:25:00-03:00",
  topic: "lancamentos",
  imageQuery: "Nvidia headquarters",
  content: `
    <p>A Nvidia apresentou em 15 de outubro a nova leva da família Nemotron 3.5, três modelos de IA com pesos abertos pensados para rodar agentes em data centers, em estações de trabalho e em dispositivos de borda. Segundo o <a href="https://blogs.nvidia.com/blog/nemotron-3-5-super-vl/" target="_blank" rel="noopener noreferrer nofollow">blog oficial da Nvidia</a>, assinado por Kari Briski, o grupo reúne o Nemotron 3.5 Super VL, o Bolt 74B-A9B e o Bolt E4B. A empresa, mais conhecida por vender chips, tenta ocupar também o espaço dos modelos que ficam sob controle de quem os usa.</p>

    <p>Para quem trabalha com IA ou empreende no Brasil, o ponto central é a possibilidade de rodar agentes sem depender só de uma API de terceiros. Isso muda custo, privacidade dos dados e liberdade de customização, embora exija hardware e algum conhecimento técnico.</p>

    <h2>Os três modelos e o que cada um faz</h2>
    <p>O maior deles é o Nemotron 3.5 Super VL, um modelo multimodal aberto de 120 bilhões de parâmetros, desenvolvido com a chamada Nemotron Coalition. A Nvidia afirma que ele é comparável ao seu maior modelo de raciocínio em tarefas agênticas multimodais, usando cerca de um quinto dos parâmetros, e o descreve como o modelo aberto mais rápido da categoria, com velocidade "5x maior que o segundo colocado". Ele foi treinado com cerca de 26 trilhões de tokens e depois refinado com aproximadamente 3,8 milhões de amostras, por aprendizado por reforço em dezenas de ambientes.</p>
    <p>O Nemotron 3.5 Bolt 74B-A9B 24GB mira o desenvolvimento local de agentes em placas RTX e no DGX Spark. Ele usa quantização nativa de 2 bits para caber em 24 GB de memória. Segundo a Nvidia, é o primeiro entre os modelos abertos da sua classe no PinchBench e o segundo no BrowseComp. O terceiro, o Bolt E4B 4GB, é voltado a agentes conversacionais rápidos em GeForce RTX, Jetson e Spark, com foco no que a empresa chama de inteligência por gigabyte. Ele só chega em 23 de outubro.</p>
    <p>A família ainda inclui o Lightning, lançado em agosto, e o Ultra, conforme o texto da Nvidia.</p>

    <h2>Onde baixar e como usar</h2>
    <p>O Super VL já está disponível no Hugging Face, no OpenRouter, no ModelScope e como NIM, o formato de contêiner da Nvidia para colocar modelos em produção. O Bolt 74B-A9B está no Hugging Face, com suporte a ferramentas conhecidas de quem roda modelos em casa: llama.cpp, Ollama, LM Studio, Unsloth e vLLM. A empresa diz que ele foi feito para os notebooks RTX Spark, que chegam em 16 de outubro.</p>
    <p>A Nvidia também abriu os conjuntos de dados no Hugging Face e os ambientes de aprendizado por reforço no NeMo Gym. A página fala em pesos, dados e receitas de treinamento abertos, mas não cita o nome de uma licença nem o tamanho da janela de contexto. Antes de usar em um produto comercial, é preciso ler os termos de cada modelo no repositório.</p>

    <h2>Quem já está adaptando</h2>
    <p>Segundo a <a href="https://techstrong.ai/articles/nvidia-launches-three-open-ai-models-to-power-enterprise-agents" target="_blank" rel="noopener noreferrer nofollow">Techstrong.ai</a>, a CrowdStrike está customizando o Super VL para operações de cibersegurança, a Atlassian estuda usá-lo na busca com IA entre Jira e Confluence e a Salesforce o adapta para automação de fluxos de trabalho de governo. O blog da Nvidia lista ainda integrações com Dassault Systèmes, Perplexity e Synopsys, e parceiros de pós-treinamento como Scale AI, Mercor, AI21 e Ramp.</p>
    <p>O movimento reforça a tendência de agentes fora do navegador do fornecedor. O Portal da AI já mostrou, por exemplo, a <a href="/noticias/nvidia-lanca-plataforma-seguranca-agentes-ia">plataforma de segurança para agentes de IA da Nvidia</a> e a <a href="/noticias/digitalocean-lanca-managed-agents-infraestrutura-agentes-ia">infraestrutura gerenciada para agentes da DigitalOcean</a>. Modelos abertos de bom tamanho completam esse cenário, porque dão ao desenvolvedor a opção de hospedar o agente onde quiser.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Na prática</span>
      <p>Se você só usa ChatGPT, Claude ou Gemini no navegador, nada muda hoje. A novidade interessa a quem desenvolve automações, atende clientes com agentes ou lida com dados sensíveis e quer testar um modelo local antes de gastar com API.</p>
    </div>

    <h2>Desempenho: números da Nvidia e o que é medição independente</h2>
    <p>As comparações de velocidade e de ranking vêm da própria Nvidia, o que pede cautela. Segundo o <a href="https://techstrong.ai/articles/nvidia-launches-three-open-ai-models-to-power-enterprise-agents" target="_blank" rel="noopener noreferrer nofollow">texto da Techstrong.ai</a>, o analista Mitch Ashley, do Futurum Group, avalia que rodar modelos em hardware que a empresa já possui faz da escolha do modelo uma decisão de construção que o diretor de TI controla "atrás do próprio firewall". Ele também alerta que agentes locais podem escapar dos gateways de nuvem usados pelas áreas de TI para medir e auditar o uso de IA, e recomenda estender o controle até o dispositivo antes de levar esses agentes à produção.</p>
    <p>Esse segundo ponto vale para qualquer negócio pequeno. Um agente rodando na máquina de um funcionário é um agente sem o registro central que as plataformas de nuvem costumam oferecer. Para entender a diferença entre um agente de verdade e um chatbot ou uma automação simples, vale ler a explicação sobre <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">agente de IA, chatbot ou automação</a>.</p>

    <h2>O que muda para quem empreende ou trabalha com IA no Brasil</h2>
    <p>Modelos abertos que cabem em uma placa de consumo ampliam o que um profissional autônomo consegue montar sem pagar por token. Quem presta serviço de automação pode hospedar um agente para um cliente que não quer enviar documentos para fora, e quem desenvolve produtos pode testar protótipos localmente antes de decidir qual API contratar. O custo, nesse caso, vira hardware e energia em vez de assinatura, uma conta que só fecha para quem usa o modelo com frequência.</p>
    <p>Vale lembrar o limite: uma placa com 24 GB de memória ainda custa caro no Brasil e o Super VL, de 120 bilhões de parâmetros, é pensado para servidores. O caminho mais acessível para a maioria é testar pelo OpenRouter ou em nuvem antes de comprar equipamento. Para quem quer transformar o conhecimento em renda, o texto sobre <a href="/artigos/como-ganhar-dinheiro-criando-e-vendendo-agentes-de-ia-personalizados">como ganhar dinheiro criando e vendendo agentes de IA personalizados</a> mostra os modelos de serviço, e o guia de <a href="/artigos/automacao-com-ia-economize-horas-de-trabalho">automação com IA para economizar horas de trabalho</a> ajuda a escolher o primeiro processo a automatizar.</p>
    <p>A disputa também se liga ao mercado de modelos abertos em geral, que o Portal da AI acompanha em notícias como a da <a href="/noticias/reflection-ai-modelo-aberto-nvidia-deepseek">Reflection AI e seu modelo aberto apoiado pela Nvidia</a>. Para quem compara preços de modelos fechados, a cobertura do <a href="/noticias/google-gemini-4-argon-lancamento-preco">lançamento e preço do Gemini 4 Argon</a> dá uma referência do que as grandes empresas cobram por API.</p>

    <h2>Cuidados antes de adotar</h2>
    <p>Pesos abertos não significam ausência de regras. Confirme a licença de cada modelo, teste com seus próprios dados antes de confiar nos rankings e planeje segurança: um agente local com acesso a arquivos e sistemas precisa de permissões mínimas e de registro do que ele faz. Os números de velocidade e de classificação são alegações de vendedor até que testes independentes os confirmem em condições parecidas com as suas.</p>

    <h2>O que acompanhar</h2>
    <p>O Bolt E4B chega em 23 de outubro, e a Nvidia tem a palestra de abertura da GTC Berlim marcada para 21 de outubro, onde podem surgir mais detalhes de licença, preços e parcerias. Também vale observar como a comunidade de Ollama e LM Studio avalia a qualidade real do Bolt em tarefas do dia a dia, já que esses testes costumam sair poucos dias depois do lançamento.</p>
  `,
};
