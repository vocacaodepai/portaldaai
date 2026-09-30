import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "openai-chatgpt-space-pages-office",
  title: "OpenAI lança Space e Pages, sua versão do Google Docs no ChatGPT",
  summary:
    "Na DevDay 2026, a OpenAI apresentou Space, área de trabalho compartilhada, e Pages, documento colaborativo entre pessoas e agentes dentro do ChatGPT.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/09/29/openai-takes-on-microsoft-with-the-launch-of-what-feels-a-whole-lot-like-chatgpts-own-office-suite/",
  date: "2026-09-29",
  content: `
    <p>A OpenAI anunciou nesta terça-feira, 29 de setembro, durante a DevDay 2026 em San Francisco, dois recursos que colocam o ChatGPT em concorrência direta com o pacote de produtividade da Microsoft: o Space, uma área de trabalho compartilhada dentro do ChatGPT, e o Pages, um documento colaborativo pensado para pessoas e agentes de IA trabalharem juntos. Segundo reportagem do <a href="https://techcrunch.com/2026/09/29/openai-takes-on-microsoft-with-the-launch-of-what-feels-a-whole-lot-like-chatgpts-own-office-suite/" rel="noopener noreferrer nofollow">TechCrunch</a>, o Space funciona como uma pasta viva onde colegas de equipe guardam páginas e arquivos junto com os dots, os agentes sempre ativos da OpenAI, para tocar tarefas em conjunto.</p>
    <p>"Suas páginas e arquivos moram juntos no Space, como fariam num drive. Mas os spaces parecem vivos", disse o CEO Sam Altman durante a apresentação, segundo o TechCrunch. Ele explicou que é possível dar instruções específicas a uma página, como checar um canal de equipe e atualizar o conteúdo com o que for encontrado. Já o Pages é descrito pela própria OpenAI como "um novo tipo de documento, construído para colaboração entre humanos e agentes", em que várias pessoas com acesso de edição podem trabalhar ao mesmo tempo, cada uma usando seu próprio ChatGPT contra o mesmo documento comum.</p>

    <h2>O que Space e Pages fazem na prática</h2>
    <p>Dentro do Pages, o usuário pode escrever, pesquisar, gerar gráficos, criar imagens e visualizar informações, tudo dentro do mesmo documento que outras pessoas da equipe também editam. A OpenAI também anunciou o que chama de slides colaborativos, apresentações criadas apenas conversando com o ChatGPT sobre o conteúdo desejado, com exportação para PowerPoint e Google Slides prevista para as próximas semanas, não disponível no lançamento inicial. O recurso ainda não tem data de chegada fechada, mas a empresa confirmou que vai liberá-lo em breve para quem já usa Space e Pages.</p>
    <p>O Space chega primeiro para assinantes dos planos Pro, Business e Enterprise, começando pelo aplicativo de desktop e pela versão web antes de alcançar o celular, segundo a reportagem. A lógica de acesso escalonado é a mesma usada no lançamento do <a href="/noticias/openai-lanca-dots-agentes-sempre-ativos-gpt-6-1-sol">dots, o agente sempre ativo da OpenAI</a>, anunciado na mesma DevDay: primeiro para quem paga mais, depois expansão gradual. Isso significa que, por enquanto, quem usa o plano Plus ou a versão gratuita do ChatGPT fica de fora dos dois recursos.</p>

    <h2>Contexto: da parceria com a Microsoft à concorrência direta</h2>
    <p>A OpenAI sempre teve a Microsoft como parceira e principal investidora, mas o lançamento do Space e do Pages marca uma aproximação cada vez mais direta com o território que a Microsoft domina há décadas: software de produtividade para escritório, com Word, Excel, PowerPoint e Teams. A movimentação também acontece na mesma semana em que a OpenAI reabriu o <a href="/noticias/openai-pro-500-corta-api-credits">plano ChatGPT Pro e lançou o tier Pro 500</a>, sinal de que a empresa está tentando capturar mais receita recorrente de empresas, não só de desenvolvedores que pagam pela API.</p>
    <p>O movimento espelha o que rivais como Google já fazem há anos com o Google Workspace, que combina Gmail, Docs, Sheets e Slides com a IA do Gemini integrada nativamente, como mostra nossa análise sobre as <a href="/artigos/gemini-3-vale-a-pena-novidades-precos-comparacao-chatgpt">novidades e preços do Gemini 3 frente ao ChatGPT</a>. A diferença central da aposta da OpenAI é colocar agentes autônomos, os dots, como colaboradores dentro do próprio documento, e não apenas como assistente de texto que sugere frases. Segundo o TechCrunch, a OpenAI ainda prepara perfis compartilháveis onde usuários poderão exibir aplicativos e plugins que criaram para outras pessoas testarem, ampliando o ecossistema em torno do Space.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se sua empresa já paga por Google Workspace ou Microsoft 365 e também assina o ChatGPT separadamente, o Space é um convite direto para consolidar as duas coisas em um único lugar, com o risco real de trocar uma ferramenta madura, testada há anos, por uma versão inicial que ainda vai amadurecer nos próximos meses. Vale testar o recurso dentro da equipe antes de migrar processos críticos, já que documentos compartilhados costumam guardar histórico de versões, permissões finas e integrações que o Pages ainda não detalhou completamente.</p>
    <p>Para quem usa IA para ganhar dinheiro com freelas de conteúdo, planilhas ou apresentações, a vantagem prática do Pages é reduzir o número de ferramentas abertas ao mesmo tempo: hoje é comum pedir um texto ao ChatGPT, copiar para o Google Docs, formatar e só depois compartilhar com o cliente. Ter o agente editando dentro do próprio documento final, com colegas vendo a mudança em tempo real, corta uma etapa manual que hoje consome tempo em quase todo fluxo de trabalho que já usa IA no dia a dia, como o descrito em nosso guia de <a href="/artigos/notion-zapier-e-ia-automatize-seu-negocio-sem-programar">automação de negócio com Notion, Zapier e IA</a>.</p>

    <h2>O que observar daqui para frente</h2>
    <p>A OpenAI ainda não divulgou preço específico para o Space e o Pages além do que já está incluído nos planos Pro, Business e Enterprise, nem confirmou quando o recurso chega para assinantes do plano Plus, mais barato e mais popular entre usuários individuais no Brasil. Também não ficou claro como funciona a exportação de documentos do Pages para formatos abertos como .docx ou .pdf fora do fluxo de slides, um detalhe importante para quem precisa entregar arquivos para clientes que não usam ChatGPT.</p>
    <p>Outro ponto a acompanhar é a segurança dos agentes dentro de documentos compartilhados. A OpenAI já divulgou, em setembro, uma série de <a href="/noticias/openai-divulga-seis-incidentes-agentes-desalinhados">incidentes de comportamento desalinhado em seus próprios agentes</a>, e colocar um dot com permissão de editar um documento de trabalho, checar canais internos e atualizar conteúdo sozinho levanta a mesma pergunta feita sobre o dots: quem revisa o que o agente mudou enquanto ninguém estava olhando. Para uso em equipe, especialmente com dados sensíveis de clientes ou informação financeira, faz sentido esperar as primeiras avaliações de segurança antes de conectar o Space a sistemas críticos do negócio.</p>
    <div class="callout-box">
      <span class="callout-label">Resumo rápido</span>
      Space é uma área de trabalho compartilhada dentro do ChatGPT, e Pages é um documento colaborativo entre humanos e agentes, ambos anunciados na DevDay 2026. Chegam primeiro para planos Pro, Business e Enterprise, no desktop e na web.
    </div>
  `,
  faq: [
    {
      question: "O Space e o Pages já estão disponíveis para todo mundo?",
      answer:
        "Não. Por enquanto os dois recursos chegam apenas para assinantes dos planos Pro, Business e Enterprise do ChatGPT, começando pelo aplicativo de desktop e pela versão web, antes de expandir para celular e outros planos.",
    },
    {
      question: "O Pages substitui o Google Docs ou o Word?",
      answer:
        "A OpenAI descreve o Pages como sua resposta ao Google Docs e ao Microsoft Word, com a diferença de permitir que agentes de IA, os dots, editem o documento junto com pessoas em tempo real. Ainda não há confirmação sobre exportação completa para formatos como .docx.",
    },
  ],
};
