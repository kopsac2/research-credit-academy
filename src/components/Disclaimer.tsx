export function Disclaimer({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`rounded-lg border border-amber-200 bg-amber-50 text-amber-950 ${
        compact ? "px-3 py-2 text-xs" : "px-4 py-3 text-sm"
      }`}
    >
      <span className="font-semibold">Educational demo only.</span> Not legal,
      tax, or accounting advice. Apply firm methodology and primary authority.
    </div>
  );
}
