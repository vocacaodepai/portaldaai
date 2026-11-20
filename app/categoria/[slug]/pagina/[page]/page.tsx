import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoriaPagedPage, categoriaMetadata } from "@/components/listing/CategoriaPage";
import { categoriaParams, extraPageParams, resolveCategoriaView } from "@/components/listing/categoriaViews";
import { parsePage } from "@/components/listing/paginate";
import { isCategory } from "@/lib/articles";

type Params = Promise<{ slug: string; page: string }>;

export function generateStaticParams() {
  // Inclui a página 1 de cada categoria (vira redirect estático para a raiz), como antes.
  return categoriaParams().flatMap(({ slug }) => [
    { slug, page: "1" },
    ...extraPageParams(resolveCategoriaView(slug)).map(({ page }) => ({ slug, page })),
  ]);
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug, page: raw } = await params;
  const page = parsePage(raw);
  if (!page || page === 1 || !isCategory(slug)) return {};
  return categoriaMetadata(slug, page);
}

export default async function Page({ params }: { params: Params }) {
  const { slug, page } = await params;
  if (!isCategory(slug)) notFound();
  return <CategoriaPagedPage slug={slug} rawPage={page} />;
}
