import Link from "next/link";
import { brandUnits } from "@/lib/brand-units";

export default function Header() {
  return (
    <header className="border-b border-slate-200">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          ConnectX
        </Link>
        <nav className="flex gap-6 text-sm font-medium text-slate-600">
          {brandUnits.map((unit) => (
            <Link
              key={unit.slug}
              href={`/${unit.slug}`}
              className="hover:text-connectx-accent"
            >
              {unit.name.replace("ConnectX ", "")}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
