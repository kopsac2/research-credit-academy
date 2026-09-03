import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-teal-600 to-slate-800 text-sm font-bold text-white shadow-sm">
            RC
          </span>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight text-slate-900 group-hover:text-teal-800">
              Research Credit Academy
            </div>
            <div className="text-xs text-slate-500">Associate training</div>
          </div>
        </Link>
        <nav className="flex items-center gap-1 text-sm sm:gap-2">
          <Link
            href="/"
            className="rounded-md px-3 py-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
          >
            Curriculum
          </Link>
          <Link
            href="/module-1"
            className="rounded-md px-3 py-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
          >
            Module 1
          </Link>
          <Link
            href="/module-1/interview"
            className="hidden rounded-md bg-teal-700 px-3 py-2 font-medium text-white shadow-sm hover:bg-teal-800 sm:inline-block"
          >
            Mock Interview
          </Link>
        </nav>
      </div>
    </header>
  );
}
