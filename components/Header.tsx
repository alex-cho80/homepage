import Link from "next/link";
import { brandUnits } from "@/lib/brand-units";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-connectx-navy"
        >
          ConnectX
        </Link>
        <nav className="flex gap-8 text-xs font-semibold uppercase tracking-wider text-slate-500">
          {brandUnits.map((unit) => (
            <Link
              key={unit.slug}
              href={`/${unit.slug}`}
              className="border-b border-transparent pb-1 transition hover:border-connectx-accent hover:text-connectx-navy"
            >
              {unit.name.replace("ConnectX ", "")}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
