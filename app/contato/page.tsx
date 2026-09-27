import type { Metadata } from "next";
import Link from "next/link";
import { InstitutionalPage, institutionalMetadata } from "@/components/InstitutionalPage";
import { site } from "@/lib/articles";
import { author } from "@/lib/author";

const PATH = "/contato";
const TITLE = "Contato";
const DESCRIPTION =
  "Fale com o editor do Portal da AI por e-mail: correções, sugestões de pauta, parcerias, imprensa e pedidos sobre dados pessoais (LGPD). Resposta em até 5 dias úteis.";

const REASONS = [
  {
    id: "correcoes",
    subject: "Correção",
    title: "Correções",
    text: "Achou um dado errado, um link quebrado ou uma afirmação que não se sustenta? Mande o link da página e o trecho. Erros confirmados são corrigidos e o texto ganha a marcação de atualização.",
  },
  {
    id: "sugestoes-de-pauta",
    subject: "Sugestão de pauta",
    title: "Sugestões de pauta",
    text: "Uma dúvida que ninguém explica direito, uma ferramenta que merece review, um assunto que faltou. Quanto mais específico o pedido, maior a chance de virar artigo.",
  },
  {
    id: "parcerias",
    subject: "Parceria",
    title: "Parcerias e publicidade",
    text: "Propostas de anúncio, afiliação ou conteúdo em conjunto. Vale ler antes as regras em publicidade e afiliados: conteúdo pago nunca é publicado como artigo ou review.",
  },
  {
    id: "imprensa",
    subject: "Imprensa",
    title: "Imprensa",
    text: "Pedidos de entrevista, comentário ou uso de trechos do site em outras publicações. Informe o veículo e o prazo.",
  },
  {
    id: "dados-pessoais-lgpd",
    subject: "Dados pessoais (LGPD)",
    title: "Dados pessoais (LGPD)",
    text: "Pedidos de acesso, correção, exclusão ou informação sobre dados pessoais, como prevê a Lei Geral de Proteção de Dados. O encarregado é o próprio editor e a resposta sai em até 15 dias.",
  },
] as const;

function mailto(subject: string): string {
  return `mailto:${author.email}?subject=${encodeURIComponent(`[${site.name}] ${subject}`)}`;
}

function ContactCard() {
  return (
    <section aria-labelledby="canal-de-contato" className="rounded-xl border border-border bg-surface p-5">
      <h2 id="canal-de-contato" className="label-mono text-muted">
        Canal único
      </h2>
      <a
        href={`mailto:${author.email}`}
        className="mt-3 block break-all font-display text-lg font-bold tracking-tight text-accent hover:underline"
      >
        {author.email}
      </a>
      <dl className="mt-4 space-y-3 text-sm">
        <div>
          <dt className="label-mono text-muted">Quem responde</dt>
          <dd className="mt-1">
            <Link href={author.url} className="font-medium hover:text-accent">
              {author.name}
            </Link>
            , editor do site
          </dd>
        </div>
        <div>
          <dt className="label-mono text-muted">Prazo</dt>
          <dd className="mt-1">Até 5 dias úteis (pedidos LGPD: até 15 dias)</dd>
        </div>
        <div>
          <dt className="label-mono text-muted">Idioma</dt>
          <dd className="mt-1">Português</dd>
        </div>
      </dl>
    </section>
  );
}

export const metadata: Metadata = institutionalMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

export default function ContatoPage() {
  return (
    <InstitutionalPage
      label="Institucional"
      title={TITLE}
      lead="O Portal da AI não tem formulário nem central de atendimento: tem um e-mail, lido pelo editor. Escreva e você recebe resposta em até 5 dias úteis."
      path={PATH}
      type="ContactPage"
      aside={<ContactCard />}
    >
      <p>
        O único canal de contato do site é o e-mail{" "}
        <a href={`mailto:${author.email}`}>
          <strong>{author.email}</strong>
        </a>
        . Não há telefone, WhatsApp nem perfis em redes sociais oficiais do {site.name}. Se alguém
        falar em nome do site por outro canal, desconfie.
      </p>
      <p>
        Respondo em até 5 dias úteis. Mensagens de correção e pedidos sobre dados pessoais têm
        prioridade. Para agilizar, use um dos assuntos abaixo (o link já abre o e-mail preenchido).
      </p>

      <h2 id="para-que-serve">Para que serve este e-mail</h2>
      {REASONS.map((r) => (
        <section key={r.id} aria-labelledby={r.id}>
          <h3 id={r.id}>{r.title}</h3>
          <p>{r.text}</p>
          <p>
            <a href={mailto(r.subject)}>Escrever com o assunto &quot;{r.subject}&quot;</a>
          </p>
        </section>
      ))}

      <h2 id="o-que-nao-e-respondido">O que não é respondido</h2>
      <ul>
        <li>Pedidos de troca de links ou de publicação de guest post genérico.</li>
        <li>Ofertas de &quot;conteúdo patrocinado sem aviso&quot; ou de nota comprada em review.</li>
        <li>Suporte técnico de ferramentas de terceiros (ChatGPT, Gemini, Canva etc.): cada uma tem o seu.</li>
      </ul>

      <h2 id="antes-de-escrever">Antes de escrever</h2>
      <p>
        Muitas dúvidas já estão respondidas em <Link href="/sobre">sobre o site</Link>, na{" "}
        <Link href="/politica-editorial">política editorial</Link>, em{" "}
        <Link href="/publicidade-e-afiliados">publicidade e afiliados</Link> e na{" "}
        <Link href="/politica-de-privacidade">política de privacidade</Link>. Para achar um artigo
        específico, use a <Link href="/busca">busca</Link>.
      </p>
    </InstitutionalPage>
  );
}
