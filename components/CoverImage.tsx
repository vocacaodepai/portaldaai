import { getPexelsImage } from "@/lib/pexels";

const GRADIENTS = [
  ["#7c5cff", "#22d3ee"],
  ["#ff5c8a", "#7c5cff"],
  ["#22d3ee", "#22c55e"],
  ["#f59e0b", "#7c5cff"],
  ["#22d3ee", "#6366f1"],
  ["#7c5cff", "#ec4899"],
];

function FallbackCover({ seed, className }: { seed: number; className?: string }) {
  const [from, to] = GRADIENTS[seed % GRADIENTS.length];
  const gradId = `g-${seed}`;
  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <svg
        viewBox="0 0 400 240"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>
        <rect width="400" height="240" fill="#0f1117" />
        <rect width="400" height="240" fill={`url(#${gradId})`} opacity="0.22" />
        <g stroke={from} strokeOpacity="0.5" strokeWidth="1">
          <circle cx="80" cy="60" r="3" fill={to} />
          <circle cx="180" cy="40" r="3" fill={from} />
          <circle cx="300" cy="90" r="3" fill={to} />
          <circle cx="340" cy="180" r="3" fill={from} />
          <circle cx="120" cy="180" r="3" fill={to} />
          <line x1="80" y1="60" x2="180" y2="40" />
          <line x1="180" y1="40" x2="300" y2="90" />
          <line x1="300" y1="90" x2="340" y2="180" />
          <line x1="120" y1="180" x2="300" y2="90" />
          <line x1="80" y1="60" x2="120" y2="180" />
        </g>
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
  const photo = await getPexelsImage(query, seed);

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
        Foto: {photo.photographer} / Pexels
      </a>
    </div>
  );
}
