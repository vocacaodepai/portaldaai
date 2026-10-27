import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "litellm-ataque-comecou-chave-mestra-exposta-posmortem",
  title: "LiteLLM: ataque ao PyPI começou numa chave mestra exposta em maio",
  summary:
    "Pós-mortem da LiteLLM diz que a versão 1.107.0 maliciosa nasceu de uma chave esquecida no GitHub em maio e de um token de dono da organização sem escopo limitado.",
  author: "Bruno Danello",
  sourceName: "LiteLLM",
  sourceUrl: "https://docs.litellm.ai/blog/security-incident-oct-21-2026-attack-chain",
  date: "2026-10-26",
  publishedAt: "2026-10-26T19:45:00-03:00",
  topic: "seguranca",
  imageQuery: "GitHub logo",
  content: `
    <p>A LiteLLM, biblioteca de código aberto muito usada para conectar aplicações a vários modelos de IA com uma única interface, publicou o relatório final sobre o ataque que, em 21 de outubro, colocou no ar uma versão maliciosa do pacote (1.107.0) no PyPI e nos registros de contêineres. O <a href="https://docs.litellm.ai/blog/security-incident-oct-21-2026-attack-chain" rel="noopener noreferrer nofollow" target="_blank">pós-mortem</a>, datado de 23 de outubro, conta que tudo começou com uma chave mestra commitada por engano em um repositório público em maio e nunca revogada. O caso também foi resumido pelo <a href="https://www.theregister.com/security/2026/10/26/litellm-supply-chain-attack-started-with-an-exposed-master-key/5305544" rel="noopener noreferrer nofollow" target="_blank">The Register</a>. O episódio do pacote comprometido já havia sido noticiado pelo Portal da AI; agora a empresa explica como o invasor chegou até ele.</p>

    <h2>A cadeia do ataque, passo a passo</h2>
    <p>Em 27 de maio de 2026, um arquivo de configuração com a chave mestra de uma implantação da LiteLLM Agent Platform, ferramenta experimental usada internamente para orquestrar agentes, foi enviado ao repositório público LiteLLM-Labs/lite-harness. O erro foi percebido rápido e o commit foi sobrescrito, mas, segundo a empresa, a chave mestra não foi revogada.</p>
    <p>Em 10 de outubro, o invasor usou essa chave para entrar na plataforma de agentes e extrair um token OAuth do GitHub CLI. O problema é que o token não era de uma conta de serviço nem tinha escopo reduzido: pertencia ao dono da organização no GitHub. Com isso, o atacante passou a ter acesso de proprietário a todos os repositórios. Tokens do GitHub CLI são emitidos depois da verificação em dois fatores e não disparam as novas confirmações que o GitHub exige em ações sensíveis, o que tornou a invasão ainda mais silenciosa.</p>

    <h2>De um token a toda a esteira de publicação</h2>
    <p>Com esse acesso, o invasor criou commits em ramos de repositórios internos para rodar fluxos de trabalho que roubam segredos disponíveis na integração contínua. Assim obteve tokens parecidos de dois engenheiros mantenedores e de vários outros sistemas internos. A atividade mostrava foco em chaves de API de inferência de provedores de IA.</p>
    <p>Depois tentou alterar o repositório responsável pelos lançamentos para puxar o pacote de um repositório malicioso. Como a aprovação do merge era restrita, ele usou o token do dono para desativar as restrições e empurrar a mudança. A LiteLLM explica ainda que, para publicar uma versão, normalmente era preciso que um engenheiro autorizado iniciasse o processo e que uma conta especial, presa a um dispositivo físico no escritório, aprovasse. Essa exigência havia sido flexibilizada naquela semana para acelerar lançamentos e correções, permitindo que quaisquer dois engenheiros iniciassem e aprovassem uma versão. O invasor usou dois tokens roubados para fazer as duas etapas, o que, na avaliação da empresa, serviu para evitar rastros chamativos nos registros de auditoria.</p>

    <h2>Linha do tempo e danos</h2>
    <p>As versões maliciosas foram publicadas por volta das 4h40 no horário do Pacífico (11h40 UTC) de 21 de outubro. A LiteLLM percebeu pouco antes das 6h (13h UTC) e congelou os lançamentos no PyPI às 6h23; as imagens Docker foram removidas só às 7h20, porque foi preciso acordar as pessoas com acesso ao registro. Segundo a análise da Wiz citada pelo The Register, a versão ficou disponível por menos de duas horas e recebeu cerca de 49 mil downloads. Ela continha um ladrão de credenciais e um trojan de acesso remoto, capazes de levar senhas e cookies de navegadores, credenciais da AWS, do Google Cloud e do Azure, além de chaves de API da OpenAI, da Anthropic, da Cohere e de outros provedores.</p>
    <p>Quem instalou e executou a 1.107.0 deve presumir que qualquer credencial acessível naquele sistema foi roubada, investigar as máquinas, trocar senhas e rotacionar as chaves. A própria LiteLLM passou a operar assumindo que todo token, chave ou autenticador da organização foi exfiltrado e revogou tudo, de sistemas internos a plataformas de fornecedores. Como medidas imediatas, bloqueou os registros públicos e removeu todos os membros da organização no GitHub, exceto uma conta temporariamente promovida a dona e considerada segura. A empresa também disse que a nova versão limpa traria a remoção de uma autoridade certificadora da lista de confiança do pacote.</p>

    <h2>As lições que a própria empresa admite</h2>
    <p>A conclusão do relatório é direta: o incidente é uma ilustração forte dos riscos de não rotacionar uma chave possivelmente exposta. O texto aponta três falhas encadeadas: a chave que ficou válida, um token de dono usado numa ferramenta experimental sem escopo mínimo e a flexibilização temporária da regra de dupla aprovação para lançamentos. Nenhuma delas, sozinha, teria bastado.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você desenvolve ou vende automações com IA, o caso é um roteiro de higiene básica. Chave que apareceu em repositório público, mesmo por minutos, precisa ser revogada na hora, e não apenas apagada do histórico. Tokens de automação devem ficar em contas de serviço com o menor acesso possível, e regras de aprovação de publicação não devem ser afrouxadas por pressa. Para quem usa pacotes de terceiros, vale fixar versões, esperar algumas horas antes de atualizar bibliotecas críticas e checar se alguma máquina instalou a 1.107.0.</p>
    <p>O Portal da AI já mostrou como a <a href="/noticias/litellm-pypi-versao-comprometida-rouba-credenciais-ia">versão comprometida do LiteLLM roubava credenciais de IA</a>, como uma <a href="/noticias/railway-invasao-chaves-api-ia-100-mil-workspaces">invasão à Railway buscava chaves de API de IA</a> e como um <a href="/noticias/agente-atacante-modo-skynet-sequestra-modelos-expostos-symantec">agente atacante sequestra modelos expostos</a>. Para se organizar, leia o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher uma ferramenta de IA com segurança</a> e o guia de <a href="/artigos/gerenciador-de-senhas-como-escolher-comecar-e-usar-com-seguranca">gerenciador de senhas</a>. Quem trabalha com <a href="/artigos/carreira-em-ciberseguranca-com-ia-vagas-trilha-e-habilidades">carreira em cibersegurança com IA</a> encontra aqui um estudo de caso completo de ataque à cadeia de suprimentos de software.</p>
    <p>Vale lembrar que o relato é da própria LiteLLM, que reconhece que atualizações anteriores durante a investigação continham suposições depois corrigidas, e por isso o pós-mortem é tratado por ela como a fonte definitiva.</p>

    <div class="callout-box"><span class="callout-label">Fonte original</span>Pós-mortem da <a href="https://docs.litellm.ai/blog/security-incident-oct-21-2026-attack-chain" rel="noopener noreferrer nofollow" target="_blank">LiteLLM</a>, de 23 de outubro de 2026, com cobertura complementar do The Register.</div>
  `,
};
