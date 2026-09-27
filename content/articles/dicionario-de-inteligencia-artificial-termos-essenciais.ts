import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "dicionario-de-inteligencia-artificial-termos-essenciais",
  title: "Dicionário de Inteligência Artificial: os Termos que Todo Mundo Devia Saber",
  excerpt:
    "Prompt, token, alucinação, modelo, agente: entenda em linguagem simples os termos de IA que mais aparecem por aí, sem enrolação técnica.",
  category: "iniciantes",
  date: "2026-09-12",
  readTime: 6,
  imageQuery: "notebook definitions glossary writing desk",
  seed: 19,
  content: `
    <p>Uma das maiores barreiras para começar a usar inteligência artificial não é a tecnologia em si — é o vocabulário. Termos técnicos espantam quem só quer aprender a usar essas ferramentas no dia a dia. Este dicionário simples resolve isso.</p>

    <h2>Prompt</h2>
    <p>É o pedido que você faz para a IA — a pergunta, instrução ou comando digitado. Quanto mais claro e específico o prompt, melhor tende a ser a resposta (veja nosso <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">guia completo de prompt engineering</a>).</p>

    <h2>Modelo</h2>
    <p>É o "motor" por trás da IA — o sistema treinado com uma quantidade enorme de dados que gera as respostas. ChatGPT, Claude e Gemini são, na prática, interfaces para acessar modelos diferentes.</p>

    <h2>Token</h2>
    <p>Uma unidade de texto que a IA processa — geralmente um pedaço de palavra. É a forma como esses sistemas "leem" e "escrevem" por trás dos panos, e costuma definir o custo e o limite de tamanho de uma conversa.</p>

    <h2>Alucinação</h2>
    <p>Quando a IA apresenta uma informação errada com a mesma confiança de uma informação correta. É o motivo pelo qual sempre vale revisar dados, números e fatos importantes antes de usar uma resposta de IA publicamente.</p>

    <h2>Agente de IA</h2>
    <p>Um sistema que não só responde perguntas, mas executa tarefas completas sozinho, usando ferramentas como navegador, planilhas ou e-mail (explicamos em detalhe <a href="/artigos/agentes-de-ia-o-futuro-do-trabalho-autonomo-explicado">neste artigo sobre agentes de IA</a>).</p>

    <h2>IA generativa</h2>
    <p>O tipo de IA que cria conteúdo novo — textos, imagens, vídeos, áudios — em vez de apenas classificar ou organizar informação existente.</p>

    <h2>Contexto (ou janela de contexto)</h2>
    <p>A quantidade de informação que a IA consegue "lembrar" dentro de uma mesma conversa. Quanto maior o contexto, mais texto ou histórico ela consegue considerar antes de responder.</p>

    <h2>Fine-tuning (ajuste fino)</h2>
    <p>O processo de especializar um modelo já existente em uma tarefa ou área específica, usando exemplos adicionais — como ensinar um profissional experiente a atuar em um novo setor.</p>

    <h2>Por que vale a pena guardar esses termos</h2>
    <p>Entender esse vocabulário básico ajuda você a ler notícias, comparar ferramentas e conversar sobre IA com muito mais segurança — sem precisar decorar teoria, só reconhecer os termos quando eles aparecerem no seu caminho.</p>
  `,
};
