import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "ncsc-reino-unido-ransomware-ia-infraestrutura-2028-relatorio",
  title: "Reino Unido prevê ransomware com IA contra infraestrutura até 2028",
  summary:
    "Relatório anual do NCSC vê como muito provável um ransomware com malware de IA contra a infraestrutura britânica até 2028 e alerta para empresas menores.",
  author: "Bruno Danello",
  sourceName: "NCSC, The Register, The Next Web",
  sourceUrl: "https://www.ncsc.gov.uk/collection/annual-review-2026",
  date: "2026-11-04",
  publishedAt: "2026-11-04T06:25:00-03:00",
  imageQuery: "GCHQ National Cyber Security Centre London",
  topic: "seguranca",
  content: `
    <p>O National Cyber Security Centre (NCSC), o braço de cibersegurança do GCHQ, a agência de inteligência de sinais do Reino Unido, publicou nesta terça-feira (3) a sua revisão anual de 2026 com um alerta direto sobre inteligência artificial: a agência considera "muito provável" que, até 2028, um malware movido a IA seja usado num ataque de ransomware contra a infraestrutura nacional crítica do país, como energia, água, saúde e transporte. O documento cobre o período de setembro de 2025 a agosto de 2026 e marca os dez anos do centro.</p>

    <p>No mesmo dia, o ministro britânico de inteligência artificial, Kanishka Narayan, disse num evento da Bloomberg em Londres que uma invasão grave é "extremamente provável" tanto no setor público quanto no privado, e que nenhum dos dois está pronto. A fala foi registrada pela Bloomberg e repercutida pelo site The Next Web. O relatório do NCSC foi destrinchado pelo The Register, que também cruzou os números com o orçamento de defesa cibernética anunciado pelo governo na semana anterior.</p>

    <h2>O que o NCSC diz sobre IA e ataques</h2>
    <p>O relatório tem um capítulo inteiro sobre o impacto da IA nas ameaças digitais, e o tom é mais pé no chão do que alarmista. A avaliação central é que a IA funciona como um multiplicador de força: ela não cria um tipo novo de ataque, mas deixa os ataques que já existem mais rápidos, mais baratos e acessíveis a mais gente. Reconhecimento de alvos, engenharia social (golpes que exploram a confiança das pessoas), descoberta de falhas e escrita de código de exploração são as etapas em que a agência já vê ganho para os criminosos.</p>

    <p>A agência também diz que operadores humanos continuam essenciais. Segundo o texto, quanto mais experiente é quem dirige o modelo, maior o ganho de eficiência, e perder o controle de um agente de IA no meio da operação tende a atrapalhar o próprio atacante. Na prática, o maior risco no curto prazo não é um robô hacker autônomo, e sim criminosos competentes trabalhando muito mais rápido.</p>

    <p>Outro ponto que chama atenção é a corrida das correções. Modelos de IA já encontram falhas em bases de código enormes que passaram anos despercebidas, e o NCSC prevê que empresas e mantenedores de software vão precisar encurtar muito o tempo entre a descoberta de uma falha e a instalação do patch. O The Register lembrou que isso já aparece nos números: a atualização mensal da Microsoft de setembro de 2026 trouxe 974 falhas catalogadas, um recorde.</p>

    <p>Sobre o ransomware, a agência afirma que ferramentas de IA de código aberto criadas para ajudar pesquisadores de segurança devem ser reaproveitadas por criminosos para orquestrar e automatizar os ataques, baixando o custo da operação e aumentando o volume de investidas contra alvos menos preparados. O Portal da AI já noticiou um caso assim: a plataforma chinesa ARTEX, usada em <a href="/noticias/hackers-chineses-artex-ia-connectwise-2250-tenants-microsoft">ataques contra 2.250 ambientes Microsoft 365</a> e, nesta semana, na <a href="/noticias/workos-invadida-artex-ia-app-de-vendas-clientes-openai-anthropic">invasão da WorkOS</a>, empresa que cuida do login de clientes como OpenAI e Anthropic.</p>

    <h2>O cenário pessimista de 2028</h2>
    <p>O relatório traz ainda uma seção chamada "A era do ataque autônomo", que descreve um futuro possível, não uma previsão, caso a defesa não acompanhe a tecnologia. Nesse cenário, em 2028 a IA de ponta está ao alcance de todo mundo, de Estados a hackers iniciantes, os ataques crescem em frequência e sofisticação e fica cada vez mais difícil saber quem está por trás de cada um. A China aparece como a principal desenvolvedora de capacidade ofensiva com IA e provável fonte de disseminação dessas ferramentas.</p>

    <p>O trecho mais forte fala de um "ator cibernético automatizado" que já não está sob controle de quem o criou. O NCSC trata como "possibilidade realista" que algo assim se replique e ataque sem motivação clara, o que complicaria disputas entre países e daria a governos uma desculpa conveniente para negar responsabilidade. A agência também cita o risco de ataques com efeito no mundo físico, por causa de robôs controlados por IA e infraestrutura gerida pela nuvem.</p>

    <h2>Os números do ano e a resposta do governo</h2>
    <p>Fora da parte de IA, o relatório mostra que o básico ainda decide a maioria dos casos. A equipe de incidentes recebeu 1.831 relatos de ataques, dos quais 337 exigiram apoio do NCSC e 80 foram classificados como de importância nacional. Nas grandes organizações, 88% dos incidentes começaram por quatro portas: aplicações expostas na internet, phishing, uso indevido de contas válidas e serviços de acesso remoto. A equipe já vê criminosos usando IA, mas diz que nenhum desses usos criou uma classe nova de ataque.</p>

    <p>Na defesa, o governo britânico aposta em IA contra IA. O Projeto DROMOS, criado em 2026 pelo centro de coordenação cibernética do governo com o AI Security Institute, usou modelos de ponta para revisar código de sistemas públicos e encontrou centenas de possíveis problemas, incluindo falhas críticas, sempre com revisão humana. Já o Cyber Shield, tocado pelo NCSC e pelo departamento de cultura, mídia e esporte (DCMS), quer montar em cinco anos uma rede nacional de agentes de defesa que recebem dados da agência e devolvem sinais do que veem nas empresas. Segundo o The Register, o pacote anunciado no orçamento inclui 60 milhões de libras para a defesa cibernética com IA, 70 milhões para um centro de monitoramento de vulnerabilidades e 40 milhões para uma unidade dedicada a incidentes com agentes de IA fora de controle.</p>

    <p>O diretor-executivo do NCSC, Richard Horne, escreveu na abertura do relatório que as ferramentas e padrões capazes de proteger o país de ataques comuns e de ataques com IA já existem, e que o desafio agora é aplicá-los em escala e com urgência. O governo também passou a oferecer desconto de 75% na primeira certificação Cyber Essentials, o selo básico de segurança do NCSC, para micro, pequenas e médias empresas.</p>

    <h2>Por que isso importa para você</h2>
    <p>O alerta é britânico, mas o diagnóstico vale para qualquer país, inclusive o Brasil. O próprio NCSC diz que vai se abrir uma distância entre as organizações que conseguem usar IA na defesa e as que não conseguem, e que as mais frágeis, com sistemas antigos e pouco orçamento, viram alvo preferido tanto de Estados quanto de criminosos. Para uma pequena empresa, isso significa que "ninguém vai atacar a gente" deixa de ser uma aposta razoável: com IA, atacar um alvo pequeno ficou mais barato.</p>

    <p>A boa notícia é que a lista de defesa continua a mesma de sempre: manter sistemas atualizados, trocar senhas por <a href="/artigos/chave-de-acesso-passkey-como-ativar-e-proteger-sua-conta-de-golpes">chaves de acesso (passkeys)</a>, revisar o que fica exposto na internet e treinar a equipe contra golpes. O relatório também chama atenção para a "IA paralela", quando funcionários levam dados da empresa para ferramentas de IA pessoais sem controle. Vale combinar regras claras sobre isso, como explicamos no guia sobre <a href="/artigos/colar-dados-da-empresa-no-chatgpt-o-que-o-funcionario-pode-fazer">o que o funcionário pode colar no ChatGPT</a>. E, se a sua empresa usa chaves de API de IA, o risco de roubo dessas credenciais já é real, como mostrou o caso de <a href="/noticias/google-mandiant-llmjacking-chaves-api-ia-roubadas-1-milhao">LLMjacking relatado pelo Google</a>.</p>

    <p>Para quem pensa em carreira, o recado é igualmente claro: governos e empresas vão precisar de gente capaz de operar defesa com IA e de revisar o que os agentes encontram. A nossa trilha de <a href="/artigos/carreira-em-ciberseguranca-com-ia-vagas-trilha-e-habilidades">carreira em cibersegurança com IA</a> mostra por onde começar. As probabilidades citadas são avaliações da própria agência britânica, que usa uma escala padrão de inteligência, e não estatísticas de ataques já ocorridos.</p>
  `,
};
