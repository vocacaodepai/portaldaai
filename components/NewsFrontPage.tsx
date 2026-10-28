import Link from "next/link";
import { CoverImage } from "@/components/CoverImage";
import { newsImageSeed, type NewsItem } from "@/lib/news";
import { newsTopics } from "@/lib/types";
import { formatTime } from "@/lib/seo";

function topicLabel(item: NewsItem) {
  return newsTopics.find((t) => t.slug === item.topic)?.label ?? "Notícia";
}

function stamp(item: NewsItem) {
  const day = new Date(`${item.date}T12:00:00-03:00`).toLocaleDateString("pt-BR", {
    timeZone: "America/Sao_Paulo",
    day: "2-digit",
    month: "short",
  });
  const time = formatTime(item.publishedAt);
  return time ? `${day} · ${time}` : day;
}

function Kicker({ item }: { item: NewsItem }) {
  return (
    <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-accent">{topicLabel(item)}</p>
  );
}

function Cover({ item, className, priority = false }: { item: NewsItem; className: string; priority?: boolean }) {
  return (
    <Link href={`/noticias/${item.slug}`} className="block">
      <CoverImage
        override={item.coverImage}
        query={item.imageQuery ?? item.title}
        seed={newsImageSeed(item.slug)}
        alt=""
        showCredit={false}
        priority={priority}
        className={className}
      />
    </Link>
  );
}

/**
 * Primeira página de notícias da home, no estilo de jornal (referência: home
 * do El País): uma manchete grande com foto e resumo, uma coluna de
 * destaques com miniatura à direita e, embaixo, uma fileira de chamadas só
 * de texto separadas por filetes finos. Hierarquia feita por tipografia e
 * filete, não por caixas. Sem `imageQuery` a chamada fica só em texto.
 */
export function NewsFrontPage({ items }: { items: NewsItem[] }) {
  const lead = items.find((n) => n.imageQuery) ?? items[0];
  if (!lead) return null;
  const rest = items.filter((n) => n.slug !== lead.slug);
  const secondary = rest.slice(0, 3);
  const briefs = rest.slice(3, 7);

  return (
    <div className="border-t-2 border-foreground pt-6">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <article className="group lg:col-span-7">
          {lead.imageQuery && (
            <Cover item={lead} priority className="aspect-[16/9] w-full rounded-sm" />
          )}
          <div className={lead.imageQuery ? "mt-4" : ""}>
            <Kicker item={lead} />
            <h3 className="mt-1.5 font-display text-2xl font-bold leading-[1.15] tracking-tight sm:text-[32px]">
              <Link href={`/noticias/${lead.slug}`} className="transition group-hover:text-accent">
                {lead.title}
              </Link>
            </h3>
            <p className="mt-3 max-w-[60ch] text-[15px] leading-relaxed text-muted">{lead.summary}</p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-muted">{stamp(lead)}</p>
          </div>
        </article>

        <div className="divide-y divide-border border-t border-border lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-8">
          {secondary.map((item) => (
            <article key={item.slug} className="group flex gap-4 py-4 first:pt-0 lg:first:pt-0">
              <div className="min-w-0 flex-1">
                <Kicker item={item} />
                <h3 className="mt-1 font-display text-[18px] font-bold leading-snug">
                  <Link href={`/noticias/${item.slug}`} className="transition group-hover:text-accent">
                    {item.title}
                  </Link>
                </h3>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-muted">{stamp(item)}</p>
              </div>
              {item.imageQuery && <Cover item={item} className="h-20 w-28 shrink-0 rounded-sm" />}
            </article>
          ))}
        </div>
      </div>

      {briefs.length > 0 && (
        <div className="mt-8 grid gap-x-8 border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {briefs.map((item, i) => (
            <article
              key={item.slug}
              className={`group border-b border-border py-4 sm:border-b-0 ${i > 0 ? "lg:border-l lg:pl-8" : ""}`}
            >
              <Kicker item={item} />
              <h3 className="mt-1 font-display text-[16px] font-bold leading-snug">
                <Link href={`/noticias/${item.slug}`} className="transition group-hover:text-accent">
                  {item.title}
                </Link>
              </h3>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-muted">{stamp(item)}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
