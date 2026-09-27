import { getPexelsImage } from "@/lib/pexels";
import { getPixabayImage } from "@/lib/pixabay";

// Fallback quando não há foto: gradiente escuro com um brilho da marca,
// coerente com o tema (funciona no claro e no escuro).
const GLOWS = ["#2457FF", "#7C3AED", "#2457FF", "#0EA5E9", "#7C3AED", "#6366F1"];

function FallbackCover({
  seed,
  className,
  label,
}: {
  seed: number;
  className?: string;
  label?: string;
}) {
  const glow = GLOWS[seed % GLOWS.length];
  const id = `cover-${seed}`;
  return (
    <div className={`relative overflow-hidden bg-ink ${className ?? ""}`} aria-hidden="true">
      <svg viewBox="0 0 400 240" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id={id} cx="75%" cy="20%" r="80%">
            <stop offset="0%" stopColor={glow} stopOpacity="0.55" />
            <stop offset="60%" stopColor={glow} stopOpacity="0.08" />
            <stop offset="100%" stopColor="#0B0F17" stopOpacity="0" />
          </radialGradient>
          <pattern id={`${id}-grid`} width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M24 0H0V24" fill="none" stroke="#ffffff" strokeOpacity="0.06" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="400" height="240" fill="#0B0F17" />
        <rect width="400" height="240" fill={`url(#${id}-grid)`} />
        <rect width="400" height="240" fill={`url(#${id})`} />
        {label && (
          <text
            x="20"
            y="212"
            fill="#ffffff"
            fillOpacity="0.55"
            fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
            fontSize="11"
            letterSpacing="1.5"
          >
            {label.toUpperCase()}
          </text>
        )}
      </svg>
    </div>
  );
}

/**
 * Capa do artigo: Pexels → Pixabay → gradiente. Sempre com width/height
 * (evita CLS) e crédito visível da foto (licença). `priority` marca a imagem
 * principal da página (LCP).
 */
export async function CoverImage({
  query,
  seed,
  alt,
  className,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  showCredit = true,
  label,
}: {
  query: string;
  seed: number;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  showCredit?: boolean;
  /** Texto pequeno impresso no fallback (ex.: categoria). */
  label?: string;
}) {
  const photo = (await getPexelsImage(query, seed)) ?? (await getPixabayImage(query, seed));

  if (!photo) {
    return <FallbackCover seed={seed} className={className} label={label} />;
  }

  return (
    <div className={`relative overflow-hidden bg-surface-2 ${className ?? ""}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photo.url}
        alt={alt}
        width={photo.width}
        height={photo.height}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding={priority ? "sync" : "async"}
        className="h-full w-full object-cover"
      />
      {showCredit && (
        <a
          href={photo.photographerUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="absolute bottom-1.5 right-2 rounded bg-ink/60 px-1.5 py-0.5 font-mono text-[10px] text-white/75 backdrop-blur-sm transition hover:text-white"
        >
          Foto: {photo.photographer} / {photo.source}
        </a>
      )}
    </div>
  );
}

/** Só a URL da foto (para JSON-LD e Open Graph), sem renderizar nada. */
export async function getCoverPhoto(query: string, seed: number) {
  return (await getPexelsImage(query, seed)) ?? (await getPixabayImage(query, seed));
}
