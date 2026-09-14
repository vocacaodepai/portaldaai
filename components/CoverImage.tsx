import { getPexelsImage } from "@/lib/pexels";
import { getPixabayImage } from "@/lib/pixabay";

// Tons neutros, no espírito de fotografia de produto (Apple/Samsung):
// gradiente suave em cinza-claro com um único ponto de luz em azul discreto.
const TONES = [
  { base: "#e4e4e7", glow: "#0071e3" },
  { base: "#e9e9eb", glow: "#0071e3" },
  { base: "#dedee1", glow: "#3d8bff" },
  { base: "#e6e6e8", glow: "#1d1d1f" },
  { base: "#e2e2e5", glow: "#0071e3" },
  { base: "#eaeaec", glow: "#3d8bff" },
];

function FallbackCover({ seed, className }: { seed: number; className?: string }) {
  const { base, glow } = TONES[seed % TONES.length];
  const id = `cover-${seed}`;
  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <svg
        viewBox="0 0 400 240"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id={id} cx="72%" cy="28%" r="75%">
            <stop offset="0%" stopColor={glow} stopOpacity="0.16" />
            <stop offset="45%" stopColor={base} stopOpacity="0" />
            <stop offset="100%" stopColor={base} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="240" fill={base} />
        <rect width="400" height="240" fill={`url(#${id})`} />
      </svg>
    </div>
  );
}

export async function CoverImage({
  query,
  seed,
  alt,
  className,
  priority = false,
}: {
  query: string;
  seed: number;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  const photo = (await getPexelsImage(query, seed)) ?? (await getPixabayImage(query, seed));

  if (!photo) {
    return <FallbackCover seed={seed} className={className} />;
  }

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photo.url}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className="h-full w-full object-cover"
      />
      <a
        href={photo.photographerUrl}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="absolute bottom-1.5 right-2 rounded bg-black/40 px-1.5 py-0.5 text-[10px] text-white/70 backdrop-blur-sm transition hover:text-white"
      >
        Foto: {photo.photographer} / {photo.source}
      </a>
    </div>
  );
}
