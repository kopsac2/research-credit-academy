import { academyMeta } from "@/content/curriculum";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <p className="text-sm font-medium text-slate-800">{academyMeta.name}</p>
        <p className="mt-2 max-w-3xl text-xs leading-relaxed text-slate-500">
          {academyMeta.disclaimer} Citations to IRC §41 and Treas. Reg. §1.41-4
          are for training illustration and may be simplified.
        </p>
      </div>
    </footer>
  );
}
