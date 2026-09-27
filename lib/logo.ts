/**
 * Geometria da marca "Nó de Portal": um P construído como circuito, com o bojo
 * aberto terminando em um nó de conexão. viewBox 0 0 32 32.
 * Usada pelo componente <Logo/>, pelo favicon e pela imagem Open Graph.
 */
export const LOGO_VIEWBOX = "0 0 32 32";
export const LOGO_STEM = "M9 6.4V25.6";
export const LOGO_BOWL = "M9 8H16A5 5 0 0 1 16 18H13.6";
export const LOGO_NODE = { cx: 13.4, cy: 18, r: 2.4 };
export const LOGO_DOT = { cx: 16, cy: 13, r: 1.7 };
export const LOGO_GRADIENT = { from: "#2457FF", to: "#7C3AED" };

/**
 * SVG da marca como string (para favicon, OG image e arquivos em public/).
 * `mono` desliga o gradiente; `background` desenha o quadrado arredondado atrás.
 */
export function logoIconSvg({
  size = 32,
  color = "#0B1220",
  mono = false,
  background,
}: {
  size?: number;
  color?: string;
  mono?: boolean;
  background?: string;
} = {}): string {
  const nodeFill = mono ? color : "url(#pdai-g)";
  const defs = mono
    ? ""
    : `<defs><linearGradient id="pdai-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${LOGO_GRADIENT.from}"/><stop offset="1" stop-color="${LOGO_GRADIENT.to}"/></linearGradient></defs>`;
  const bg = background
    ? `<rect width="32" height="32" rx="7" fill="${background}"/>`
    : "";
  const inner = background
    ? `<g transform="translate(3.2 3.2) scale(0.8)">`
    : "<g>";
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="${LOGO_VIEWBOX}" role="img" aria-label="Portal da AI">${defs}${bg}${inner}<path d="${LOGO_STEM}" stroke="${color}" stroke-width="3.2" stroke-linecap="round" fill="none"/><path d="${LOGO_BOWL}" stroke="${color}" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/><circle cx="${LOGO_NODE.cx}" cy="${LOGO_NODE.cy}" r="${LOGO_NODE.r}" fill="${nodeFill}"/><circle cx="${LOGO_DOT.cx}" cy="${LOGO_DOT.cy}" r="${LOGO_DOT.r}" fill="${nodeFill}"/></g></svg>`;
}
