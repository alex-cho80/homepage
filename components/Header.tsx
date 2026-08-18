import Link from "next/link";
import { brandUnits } from "@/lib/brand-units";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-y-2 px-6 py-4 sm:py-5">
        <Link href="/" className="flex shrink-0 items-center">
          <img src="/logo.png" alt="ConnectX" className="h-7 w-auto object-contain sm:h-9" />
        </Link>
        <nav className="flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-wider text-slate-500 sm:gap-8">
          {brandUnits.map((unit) => (
            <Link
              key={unit.slug}
              href={`/${unit.slug}`}
              className="border-b border-transparent pb-1 transition hover:border-connectx-blue hover:text-connectx-navy"
            >
              {unit.name.replace("ConnectX ", "")}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
