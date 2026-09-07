/**
 * Espaço reservado para anúncios do Google AdSense.
 * Depois de aprovado no AdSense, substitua o conteúdo interno pelo
 * bloco <ins class="adsbygoogle"> gerado no seu painel do AdSense
 * e ative o script em app/layout.tsx (ver comentário lá).
 */
export function AdSlot({ label = "Publicidade" }: { label?: string }) {
  return (
    <div className="flex min-h-[100px] w-full items-center justify-center rounded-xl border border-dashed border-border bg-surface/50 text-xs uppercase tracking-wide text-muted">
      {label}
    </div>
  );
}
