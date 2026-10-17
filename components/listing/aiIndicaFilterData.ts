import { productCategories, productSubcategories, type Article } from "@/lib/articles";
import type { AiIndicaFilterData } from "@/components/AiIndicaFilter";

/** Categorias/subcategorias de produto presentes em cada tipo de review da AI Indica. */
export function buildAiIndicaFilterData(articles: Article[]): AiIndicaFilterData {
  const forKind = (kind: "review" | "guia") => {
    const list = articles.filter((a) => a.category === "ai-indica" && (kind === "review" ? a.kind === "review" : a.kind !== "review"));
    return {
      categories: productCategories.filter((c) => list.some((a) => a.productCategory === c.slug)),
      subcategories: productSubcategories.filter((s) => list.some((a) => a.productSubcategory === s.slug)),
    };
  };
  return { review: forKind("review"), guia: forKind("guia") };
}
