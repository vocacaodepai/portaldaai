import type { Metadata } from "next";
import { CategoriaPagedPage, categoriaMetadata } from "@/components/listing/CategoriaPage";
import { extraPageParams, resolveCategoriaView, subParams } from "@/components/listing/categoriaViews";
import { parsePage } from "@/components/listing/paginate";

type Params = Promise<{ slug: string; filtro: string; sub: string; page: string }>;

export function generateStaticParams() {
  return subParams().flatMap(({ slug, filtro, sub }) =>
    extraPageParams(resolveCategoriaView(slug, filtro, sub)).map(({ page }) => ({ slug, filtro, sub, page }))
  );
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug, filtro, sub, page: raw } = await params;
  const page = parsePage(raw);
  if (!page || page === 1) return {};
  return categoriaMetadata(slug, page, filtro, sub);
}

export default async function Page({ params }: { params: Params }) {
  const { slug, filtro, sub, page } = await params;
  return <CategoriaPagedPage slug={slug} rawPage={page} filtro={filtro} sub={sub} />;
}
