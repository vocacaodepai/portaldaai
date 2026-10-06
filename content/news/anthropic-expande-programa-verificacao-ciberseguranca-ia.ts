import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-expande-programa-verificacao-ciberseguranca-ia",
  title: "Anthropic expande o Cyber Verification Program para achar falhas com IA",
  summary:
    "O Cyber Verification Program junta dois programas anteriores e já encontrou mais de 134 mil vulnerabilidades, 33 mil delas críticas ou graves, liberando capacidades de ataque normalmente bloqueadas para equipes qualificadas de defesa.",
  author: "Bruno Danello",
  sourceName: "Anthropic",
  sourceUrl: "https://www.anthropic.com/news/cyber-verification-program",
  date: "2026-10-06",
  publishedAt: "2026-10-06T19:40:00-03:00",
  topic: "seguranca",
  imageQuery: "cybersecurity server room",
  content: `
    <p>A Anthropic anunciou nesta terça-feira (6 de outubro) a expansão do Cyber Verification Program (CVP), um programa que libera capacidades avançadas de segurança do Claude, normalmente bloqueadas por padrão, para profissionais qualificados de cibersegurança. Segundo o <a href="https://www.anthropic.com/news/cyber-verification-program" rel="noopener noreferrer nofollow">anúncio oficial da empresa</a>, a novidade consolida dois programas que rodavam separados até agora, o Project Glasswing e a versão original do CVP, em uma única oferta com três níveis de acesso.</p>
    <p>A mudança nasce de um problema conhecido como "dual-use": uma ferramenta de IA capaz de encontrar uma falha crítica em um servidor para ajudar quem defende esse servidor é, na prática, a mesma ferramenta capaz de explorar essa falha para quem ataca. Por isso, os modelos de uso geral da própria Anthropic, como o <a href="/noticias/anthropic-lanca-claude-opus-5-5-mais-barato-rapido">Claude Opus 5.5 e o Claude Sonnet 5.5</a>, trazem bloqueios conservadores contra esse tipo de capacidade. O CVP existe para abrir uma exceção verificada, com identidade confirmada e escopo de uso definido, em vez de deixar essa capacidade de todo fechada ou de todo aberta.</p>

    <h2>Três níveis de acesso, do SOC ao pentest em infraestrutura crítica</h2>
    <p>O programa expandido divide o acesso em três camadas. O "Defense Access" é voltado a trabalho defensivo, como operação de centro de segurança (SOC), resposta a incidentes e engenharia reversa de malware, com promessa de resposta em poucos dias. O "Red Team Access" libera testes de invasão autorizados (pentest), com revisão que leva semanas e é restrita a organizações, nunca a pesquisadores individuais agindo por conta própria. Já o "Specialized Access" é o nível mais restrito, reservado a testes em sistemas de infraestrutura crítica, como aviação, energia e telecomunicações, feito em colaboração direta com o governo dos Estados Unidos.</p>
    <p>Os números acumulados pelos dois programas que deram origem ao CVP expandido mostram a escala do que já foi encontrado. Só o Project Glasswing, entre abril e julho de 2026, identificou 129 mil vulnerabilidades verificadas. A Anthropic soma a isso mais 5.500 falhas adicionais achadas entre abril e outubro deste ano, totalizando mais de 134 mil vulnerabilidades, das quais mais de 33 mil classificadas como críticas ou de alta severidade. Booz Allen e Comcast aparecem entre os parceiros citados pela empresa no uso do programa.</p>
    <p>O momento não é isolado. Há poucos dias, cobrimos como a própria Anthropic teve um de seus modelos restritos ao Glasswing, o Mythos, usado para <a href="/noticias/anthropic-mythos-vulnerabilidade-rejetto-hfs-exploracao">achar uma falha crítica no software Rejetto HFS que hackers exploraram em menos de 24 horas</a> depois de tornada pública. Em setembro, a empresa também havia publicado um <a href="/noticias/anthropic-relatorio-ameacas-setembro-2026">relatório detalhando casos de uso malicioso do Claude</a>, incluindo campanhas de espionagem estatal. A expansão do CVP é, em parte, uma resposta a esse padrão: dar a quem defende acesso à mesma capacidade mais rápido do que quem ataca consegue abusar dela.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para quem lidera segurança da informação em uma empresa brasileira, pequena ou grande, o CVP é um sinal de para onde o mercado de ferramentas de defesa está indo: acesso a capacidades de IA mais potentes, porém verificado e sob termos de uso restritos, em vez de simplesmente liberado a qualquer assinante pagante. Isso tem um efeito direto: equipes de segurança que hoje dependem de ferramentas tradicionais de varredura de vulnerabilidades (scanners) passam a competir, em algum grau, com empresas de defesa que já têm acesso a modelos de IA treinados especificamente para achar falhas antes do ataque acontecer.</p>
    <p>Também existe uma lição prática para quem contrata ferramentas de IA para qualquer tarefa sensível, não só segurança: o fato de a própria Anthropic bloquear por padrão essas capacidades em seus modelos de uso geral, e só liberá-las sob verificação de identidade e escopo restrito, mostra como fornecedores sérios de IA já tratam certas capacidades como perigosas o suficiente para exigir controle de acesso. Isso reforça o que já recomendamos neste <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist de segurança para escolher ferramenta de IA</a>: perguntar sempre que capacidade exatamente uma ferramenta de IA tem acesso, e desconfiar de qualquer produto que prometa recursos avançados sem nenhum tipo de verificação ou controle.</p>

    <h2>Um mercado de IA ofensiva e defensiva que cresce dos dois lados</h2>
    <p>A expansão do CVP acontece num momento em que o mercado de cibersegurança baseada em IA cresce tanto do lado defensivo quanto do ofensivo. Cobrimos recentemente como a <a href="/noticias/armadin-ia-ofensiva-cibersegurana-255-milhoes">startup Armadin, fundada pelo criador da Mandiant, captou US$ 255 milhões</a> para treinar enxames de agentes de IA que tentam invadir redes de empresas de propósito, num modelo de teste de penetração totalmente automatizado. A diferença central entre esse tipo de produto comercial e o CVP da Anthropic é o controle de acesso: a Armadin vende um serviço de ataque simulado contratado diretamente pela empresa-alvo, enquanto o CVP concede acesso a uma capacidade do próprio modelo de linguagem, sob verificação da Anthropic, para quem já atua profissionalmente na área.</p>
    <p>Esse crescimento duplo, de ferramentas de ataque simulado e de modelos com capacidades liberadas sob controle, tende a elevar o padrão mínimo esperado de uma equipe de segurança madura. Empresas que ainda dependem só de revisão manual de código e varredura tradicional correm o risco de ficar atrás de atacantes que, mesmo sem acesso a programas como o CVP, já usam modelos de IA de uso geral para automatizar partes do processo de descoberta de falhas, como mostrou o próprio relatório de ameaças da Anthropic em setembro.</p>

    <h2>O que observar nos próximos meses</h2>
    <p>Vale acompanhar três pontos a partir de agora. O primeiro é se outras empresas de IA de fronteira, como OpenAI e Google, vão lançar programas equivalentes ao CVP, com acesso verificado a capacidades hoje bloqueadas em seus próprios modelos, ou se vão preferir manter esse tipo de capacidade inteiramente restrita. O segundo é se o número de vulnerabilidades críticas encontradas via CVP continua subindo no próximo trimestre, o que indicaria que o programa está, de fato, achando falhas que passariam despercebidas por ferramentas tradicionais. O terceiro é se o nível "Specialized Access", voltado a infraestrutura crítica em parceria com o governo americano, se expande para outros países, o que poderia abrir caminho para que órgãos de infraestrutura crítica brasileiros, como os que cuidam de energia e telecomunicações, também busquem esse tipo de verificação.</p>
  `,
  faq: [
    {
      question: "O que é o Cyber Verification Program da Anthropic?",
      answer:
        "É um programa que libera capacidades avançadas de segurança do Claude, bloqueadas por padrão nos modelos de uso geral, para profissionais qualificados de cibersegurança, dividido em três níveis: Defense Access (trabalho defensivo), Red Team Access (testes de invasão autorizados) e Specialized Access (infraestrutura crítica, com o governo dos EUA).",
    },
    {
      question: "Quantas vulnerabilidades o programa já encontrou?",
      answer:
        "Mais de 134 mil vulnerabilidades verificadas no total, somando o Project Glasswing (129 mil, entre abril e julho de 2026) e o CVP original (mais de 5.500 adicionais, entre abril e outubro de 2026), das quais mais de 33 mil foram classificadas como críticas ou de alta severidade.",
    },
    {
      question: "Qualquer pessoa pode pedir acesso ao CVP?",
      answer:
        "Não. O Defense Access é voltado a profissionais de segurança em atividades defensivas, mas o Red Team Access, para testes de invasão autorizados, é restrito a organizações, nunca a pesquisadores individuais agindo por conta própria.",
    },
  ],
};
