import type { Metadata } from "next";
import { CategoriaPage, categoriaMetadata } from "@/components/listing/CategoriaPage";
import { subParams } from "@/components/listing/categoriaViews";

// /categoria/ai-indica/<categoria-de-produto>/<tipo-de-produto>. Só existem as combinações com artigo.
export const dynamicParams = false;

type Params = Promise<{ slug: string; filtro: string; sub: string }>;

export function generateStaticParams() {
  return subParams();
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug, filtro, sub } = await params;
  return categoriaMetadata(slug, 1, filtro, sub);
}

export default async function Page({ params }: { params: Params }) {
  const { slug, filtro, sub } = await params;
  return <CategoriaPage slug={slug} page={1} filtro={filtro} sub={sub} />;
}
