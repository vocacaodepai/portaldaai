import Link from "next/link";
import {
  LOGO_BOWL,
  LOGO_DOT,
  LOGO_GRADIENT,
  LOGO_NODE,
  LOGO_STEM,
  LOGO_VIEWBOX,
} from "@/lib/logo";

/** Ícone da marca (o "P" de circuito). Herda a cor do texto; os nós usam o gradiente. */
export function LogoIcon({
  size = 28,
  className = "",
  mono = false,
  id = "pdai",
}: {
  size?: number;
  className?: string;
  mono?: boolean;
  /** Prefixo único quando houver mais de um ícone na página (gradiente por id). */
  id?: string;
}) {
  const gradientId = `${id}-logo-gradient`;
  const nodeFill = mono ? "currentColor" : `url(#${gradientId})`;
  return (
    <svg
      width={size}
      height={size}
      viewBox={LOGO_VIEWBOX}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {!mono && (
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={LOGO_GRADIENT.from} />
            <stop offset="1" stopColor={LOGO_GRADIENT.to} />
          </linearGradient>
        </defs>
      )}
      <path d={LOGO_STEM} stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" fill="none" />
      <path
        d={LOGO_BOWL}
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx={LOGO_NODE.cx} cy={LOGO_NODE.cy} r={LOGO_NODE.r} fill={nodeFill} />
      <circle cx={LOGO_DOT.cx} cy={LOGO_DOT.cy} r={LOGO_DOT.r} fill={nodeFill} />
    </svg>
  );
}

/** Marca horizontal: ícone + "Portal da AI" (com "AI" em gradiente). */
export function Logo({
  size = 28,
  className = "",
  href = "/",
  mono = false,
  id = "pdai",
  priority = false,
}: {
  size?: number;
  className?: string;
  href?: string | null;
  mono?: boolean;
  id?: string;
  /** Usa <h1>-like peso visual no header; só estilo, não muda a semântica. */
  priority?: boolean;
}) {
  const inner = (
    <>
      <LogoIcon size={size} mono={mono} id={id} className="shrink-0" />
      <span
        className={`font-display font-bold tracking-tight ${priority ? "text-[20px]" : "text-[18px]"}`}
      >
        Portal da{" "}
        <span className={mono ? "" : "text-gradient"}>AI</span>
      </span>
    </>
  );
  const cls = `inline-flex items-center gap-2 text-foreground ${className}`;
  if (href === null) return <span className={cls}>{inner}</span>;
  return (
    <Link href={href} className={cls} aria-label="Portal da AI, página inicial">
      {inner}
    </Link>
  );
}
