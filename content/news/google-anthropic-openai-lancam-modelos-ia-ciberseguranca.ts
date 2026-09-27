import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "google-anthropic-openai-lancam-modelos-ia-ciberseguranca",
  title: "Google, Anthropic e OpenAI lançam modelos e salvaguardas de IA voltados à cibersegurança",
  author: "Bruno Danello",
  summary:
    "As três empresas anunciaram no mesmo período novidades focadas em segurança digital: o Google lançou o Gemini 3.8 Flash Cyber com acesso antecipado para defensores por meio do Fairwind Program, a Anthropic criou o Enterprise Frontier Safeguards para empresas, e a OpenAI alertou sobre falsos positivos nas salvaguardas do Astra.",
  sourceName: "The Hacker News",
  sourceUrl: "https://thehackernews.com/2026/09/google-anthropic-and-openai-unveil.html",
  date: "2026-09-22",
  content: `
    <p>Google, Anthropic e OpenAI anunciaram, em rápida sucessão, uma leva de novidades voltadas especificamente a cibersegurança, num sinal de que a corrida entre as três empresas também está migrando para quem oferece a IA mais confiável para times de defesa digital. O Google apresentou o Gemini 3.8 Flash Cyber, descrito como seu modelo mais capaz até hoje para tarefas de segurança, e abriu acesso antecipado a defensores prioritários — como governos, hospitais e operadoras de telecomunicações — através de um novo programa chamado Fairwind, já em parceria com mais de 650 organizações, incluindo CrowdStrike, Datadog, Palo Alto Networks e Snowflake.</p>

    <p>A Anthropic, por sua vez, anunciou o Enterprise Frontier Safeguards (EFS), uma solução que combina retenção zero de dados (ZDR) com salvaguardas para detectar uso indevido dos modelos, dando às empresas controle total sobre como seus dados são revisados e armazenados. A empresa também passou a permitir que o Claude Fable 5.1 seja usado para identificar vulnerabilidades de software, embora tarefas mais sensíveis — como testes de invasão e geração de exploits — continuem restritas aos modelos Opus.</p>

    <div class="callout-box callout-warn">
      <span class="callout-label">Falsos positivos ainda são um problema</span>
      <p>A OpenAI alertou que as salvaguardas do GPT-6 Astra podem sinalizar erroneamente atividades legítimas como uso indevido ou comportamento não autorizado — um lembrete de que ferramentas de segurança baseadas em IA ainda cometem erros, mesmo quando o objetivo é proteger, não atacar.</p>
    </div>

    <h2>Segurança como nova frente de disputa</h2>
    <p>O movimento das três empresas reforça uma tendência que já vínhamos acompanhando: à medida que modelos de IA ficam mais capazes de encontrar e explorar falhas de segurança, as próprias empresas por trás deles correm para provar que também são as melhores ferramentas para defender sistemas contra esse tipo de ataque. Para quem avalia qual ferramenta de IA usar com mais segurança no dia a dia, vale revisitar nosso <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher uma ferramenta de IA com segurança</a>.</p>
  `,
};
