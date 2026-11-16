import type { FaqItem } from "@/lib/types";

type Offer = { "@type": "Offer"; price: string; priceCurrency: string };
type AggregateOffer = { "@type": "AggregateOffer"; lowPrice: string; highPrice: string; priceCurrency: string };

const NUMBER = String.raw`(\d{1,3}(?:\.\d{3})*(?:,\d{1,2})?|\d+(?:\.\d{1,2})?)`;

function toNumber(raw: string): number {
  const normalized = /,\d{1,2}$/.test(raw) ? raw.replace(/\./g, "").replace(",", ".") : raw.replace(/\.(?=\d{3}\b)/g, "");
  return Number(normalized);
}

function currencyOf(price: string): string | null {
  if (/US\$|USD/i.test(price)) return "USD";
  if (/R\$|BRL/i.test(price)) return "BRL";
  if (/€|EUR/i.test(price)) return "EUR";
  if (/£|GBP/i.test(price)) return "GBP";
  return null;
}

/**
 * Oferta para o JSON-LD a partir do preço em texto.
 * - Faixa ("costuma variar de R$ 30 a R$ 45", padrão da AI Indica): vira
 *   AggregateOffer com lowPrice/highPrice, em vez de anunciar o piso da
 *   faixa como se fosse o preço exato.
 * - Valor único ("US$ 20/mês", "R$ 97/mês"): Offer com price.
 * Sem número ou sem moeda reconhecível, devolve null e a página omite offers.
 */
export function parseOffer(price: string): Offer | AggregateOffer | null {
  const currency = currencyOf(price);
  if (!currency) return null;
  const range = new RegExp(`${NUMBER}\\s*(?:a|até|-|–)\\s*(?:R\\$|US\\$|€|£)?\\s*${NUMBER}`, "i").exec(price);
  if (range) {
    const low = toNumber(range[1]);
    const high = toNumber(range[2]);
    if (Number.isFinite(low) && Number.isFinite(high) && high >= low) {
      return { "@type": "AggregateOffer", lowPrice: low.toFixed(2), highPrice: high.toFixed(2), priceCurrency: currency };
    }
  }
  const m = new RegExp(NUMBER).exec(price);
  if (!m) return null;
  const value = toNumber(m[1]);
  if (!Number.isFinite(value)) return null;
  return { "@type": "Offer", price: value.toFixed(2), priceCurrency: currency };
}

/** FAQPage a partir da lista de perguntas; null quando não há perguntas. */
export function faqJsonLd(faq?: FaqItem[]) {
  if (!faq || faq.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
