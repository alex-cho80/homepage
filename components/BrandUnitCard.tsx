import Link from "next/link";
import type { BrandUnit } from "@/lib/brand-units";

export default function BrandUnitCard({ unit }: { unit: BrandUnit }) {
  return (
    <Link
      href={`/${unit.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-md border border-slate-200 bg-white p-6 transition hover:border-connectx-navy/20 hover:shadow-md"
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-connectx-blue transition-transform duration-300 group-hover:scale-x-100"
      />
      <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
        {unit.description}
      </p>
      <h3 className="mt-3 text-xl font-bold tracking-tight text-connectx-navy">
        {unit.name}
      </h3>
      <p className="mt-2 text-sm text-slate-600">{unit.connectPhrase}</p>
    </Link>
  );
}
