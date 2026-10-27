import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "brave-leo-chat-ia-criptografado-ponta-a-ponta-tee",
  title: "Brave lança chat de IA criptografado que nem a empresa consegue ler",
  summary:
    "O assistente Leo, do navegador Brave, passa a cifrar prompts no aparelho e só um ambiente de hardware verificado consegue ler a conversa com o GLM 5.3 Flash.",
  author: "Bruno Danello",
  sourceName: "Brave / The Register",
  sourceUrl: "https://brave.com/blog/browser-ai-e2ee/",
  date: "2026-10-19",
  publishedAt: "2026-10-19T03:30:00-03:00",
  topic: "seguranca",
  imageQuery: "Brave browser logo",
  content: `
    <p>A Brave anunciou na quinta-feira (15) que as conversas com o Leo, o assistente de IA embutido no navegador, agora podem ser criptografadas de ponta a ponta quando o usuário escolhe o modelo aberto GLM 5.3 Flash, da Z.ai. Segundo o <a href="https://brave.com/blog/browser-ai-e2ee/" target="_blank" rel="noopener noreferrer nofollow">comunicado oficial da Brave</a>, o navegador cifra cada mensagem no próprio aparelho, e só um ambiente de execução confiável (TEE, na sigla em inglês) que passe por uma verificação de hardware consegue ler o conteúdo. A empresa afirma que nem a Brave nem a NEAR AI, que opera os servidores, mantêm uma cópia legível das conversas. O recurso está disponível nas versões Release, Beta e Nightly do navegador, sem necessidade de conta ou login.</p>

    <p>A novidade foi detalhada também pela <a href="https://www.theregister.com/ai-and-ml/2026/10/16/want-your-ai-chats-to-stay-private-brave-tees-up-end-to-end-encryption/5303462" target="_blank" rel="noopener noreferrer nofollow">The Register</a>, em reportagem de Thomas Claburn publicada na sexta-feira (16). O texto lembra que Apple, AWS, Google, Nvidia e Microsoft já oferecem alguma forma de computação privada para IA, mas aponta uma diferença: promessas de "retenção zero de dados" dependem de confiança no fornecedor, enquanto um sistema com atestação permite que o usuário verifique, de forma técnica, o que está rodando do outro lado.</p>

    <h2>Como a criptografia funciona na prática</h2>
    <p>O desenho tem quatro etapas, segundo a Brave. Primeiro, um verificador de código aberto confere se o TEE usa processadores Intel TDX e GPUs Nvidia genuínas, se o código da NEAR AI corresponde ao publicado e se o modelo é o que foi pedido. A chave de criptografia só é liberada depois dessas checagens. Segundo, o navegador cifra cada requisição com Oblivious HTTP, padrão da IETF, combinado com HPKE e AES-128-GCM, e a conversa inteira é recifrada a cada turno. As respostas voltam cifradas também.</p>
    <p>Terceiro, a Brave separa identidade de conteúdo. O gateway de IA da empresa funciona como retransmissor: ele enxerga o endereço IP de quem pergunta, mas não a mensagem. Já o TEE enxerga a mensagem, mas não o IP. Quarto, o modelo roda dentro do ambiente protegido e pode consultar a API de busca da Brave a partir de dentro dele, de modo que a pesquisa na web também não fica atrelada ao IP do usuário, com política de retenção zero. O histórico fica apenas no dispositivo.</p>
    <p>Isso é um passo além do que a Brave lançou em novembro de 2025, quando o processamento já ocorria em hardware protegido, mas os pedidos ainda passavam pelos servidores da empresa, apenas com salvaguardas de política. Agora a proteção não depende só de uma promessa corporativa.</p>

    <h2>O que ainda não está coberto</h2>
    <p>A própria Brave lista limitações, e vale lê-las antes de tratar o recurso como blindagem total. A proteção vale apenas para o GLM 5.3 Flash, um modelo de pesos abertos com licença MIT. Os demais modelos disponíveis no Leo, como Qwen, DeepSeek, Kimi, Mistral e Nemotron, da Nvidia, são hospedados pela Brave e não entram nesse modo. Hoje, a verificação da atestação ainda é feita pelo gateway da Brave, e a empresa diz estar trabalhando para levar essa checagem para dentro do navegador e publicar um registro das chaves do TEE.</p>
    <p>Há ainda uma cadeia de confiança que continua existindo: Intel, Nvidia, Sigstore, GitHub, Hugging Face e o DNS público fazem parte do processo de verificação. O ambiente de execução do modelo, de terceiros, não é reconstruído a partir do código-fonte, e sim fixado por um registro de implantação atestado pelo hardware. Comentaristas em fóruns de privacidade também argumentam que isso não equivale a criptografia de ponta a ponta no sentido clássico, já que o usuário continua dependendo da atestação e da infraestrutura. A Brave diz ainda que pretende atestar os pesos exatos carregados na memória e levar mais recursos do Leo para esse modo privado.</p>

    <h2>Por que isso importa para quem usa IA no trabalho</h2>
    <p>No Brasil, a pergunta sobre onde vão parar os dados digitados em um chat de IA deixou de ser teórica. Quem cola contrato, planilha de clientes ou rascunho de proposta em um assistente está entregando informação que, em muitos serviços, pode ser usada para treinar modelos, ser exigida em processo judicial ou vazar em uma falha. Esse é o ponto central do <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">guia sobre o que você entrega sem perceber ao usar IA</a>, e a iniciativa da Brave mostra uma direção técnica para reduzir esse risco: em vez de pedir confiança, oferecer verificação.</p>
    <p>Para o pequeno negócio, a lição prática não é migrar tudo para o Leo. O GLM 5.3 Flash é um modelo leve, pensado para velocidade, e dificilmente substitui as ferramentas de ponta em tarefas pesadas. Mas ele serve bem para consultas que envolvem dados sensíveis de clientes, rascunhos internos e perguntas que você não gostaria de ver guardadas em um servidor alheio. Se a sua empresa lida com dados pessoais, vale cruzar o tema com o <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">checklist de LGPD para quem usa IA com dados de clientes</a> e com o texto sobre <a href="/artigos/colar-dados-da-empresa-no-chatgpt-o-que-o-funcionario-pode-fazer">o que o funcionário pode ou não colar no ChatGPT</a>, e definir uma regra clara de quais informações entram em qual ferramenta.</p>
    <p>O movimento também conversa com outras notícias recentes sobre agentes que ganham acesso ao que o usuário faz no computador, como a <a href="/noticias/openai-extensao-chatgpt-chrome-abas-abertas">extensão do ChatGPT no Chrome com acesso às abas abertas</a>. Quanto mais a IA entra no navegador e no fluxo de trabalho, mais relevante fica saber quem consegue ler o que você escreve. Na hora de escolher uma ferramenta, o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher IA com segurança</a> continua sendo um bom ponto de partida, e a existência de atestação verificável pode virar mais um critério de comparação.</p>

    <h2>O que observar daqui para frente</h2>
    <p>O ponto a acompanhar é se a verificação sair do gateway e passar a ser feita pelo próprio navegador, como a Brave promete, e se outros fornecedores adotarem modelos semelhantes de atestação pública em vez de depender apenas de termos de uso. Também será importante ver se o modo privado chega a modelos maiores, já que hoje a privacidade verificável vem acompanhada de um modelo mais modesto. Para o usuário brasileiro, o recurso é gratuito e fácil de testar: basta escolher o GLM 5.3 Flash dentro do Leo. Como em qualquer tecnologia de segurança, o recomendável é entender o que ela promete e o que ela não cobre, e não tratar o selo de privacidade como substituto de bom senso sobre quais dados devem ser digitados em qualquer chat.</p>

    <div class="callout-box">
      <span class="callout-label">Resumo rápido</span>
      <p>A Brave passou a cifrar no navegador as conversas do Leo com o modelo aberto GLM 5.3 Flash, que só podem ser lidas dentro de um ambiente de hardware verificado operado pela NEAR AI. Segundo a empresa, nem ela nem a NEAR AI veem o conteúdo. A proteção vale só para esse modelo, e a verificação ainda depende do gateway da Brave.</p>
    </div>
  `,
  faq: [
    {
      question: "A criptografia do Leo vale para todos os modelos de IA do navegador Brave?",
      answer:
        "Não. Segundo a Brave, apenas as conversas com o GLM 5.3 Flash têm essa proteção. Os outros modelos do Leo são hospedados pela Brave e não entram no modo criptografado.",
    },
    {
      question: "Preciso de conta ou pagamento para usar o chat privado do Leo?",
      answer:
        "A Brave informa que não é preciso conta nem login. Basta usar uma versão Release, Beta ou Nightly do navegador e selecionar o modelo GLM 5.3 Flash no Leo.",
    },
  ],
};
