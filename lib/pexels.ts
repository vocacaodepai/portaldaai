export type PexelsPhoto = {
  url: string;
  width: number;
  height: number;
  alt: string;
  photographer: string;
  photographerUrl: string;
  avgColor: string;
};

const PEXELS_API = "https://api.pexels.com/v1/search";

/**
 * Busca uma imagem no Pexels usando a chave de API do usuário (PEXELS_API_KEY).
 * Se a chave não estiver configurada ou a busca falhar, retorna null e o
 * componente de capa cai para um gradiente de fallback (ver components/CoverImage.tsx).
 */
export async function getPexelsImage(
  query: string,
  seed = 0
): Promise<PexelsPhoto | null> {
  const apiKey = process.env.PEXELS_API_KEY;
  if (!apiKey) return null;

  try {
    const params = new URLSearchParams({
      query,
      per_page: "5",
      orientation: "landscape",
    });
    const res = await fetch(`${PEXELS_API}?${params.toString()}`, {
      headers: { Authorization: apiKey },
      next: { revalidate: 60 * 60 * 24 * 7 },
    });

    if (!res.ok) return null;

    const data = await res.json();
    const photos = data?.photos as
      | Array<{
          src: { large2x: string; large: string };
          width: number;
          height: number;
          alt: string;
          photographer: string;
          photographer_url: string;
          avg_color: string;
        }>
      | undefined;

    if (!photos || photos.length === 0) return null;

    const photo = photos[seed % photos.length];

    return {
      url: photo.src.large2x || photo.src.large,
      width: photo.width,
      height: photo.height,
      alt: photo.alt || query,
      photographer: photo.photographer,
      photographerUrl: photo.photographer_url,
      avgColor: photo.avg_color || "#111827",
    };
  } catch {
    return null;
  }
}
