import type { BrandUnit } from "@/lib/brand-units";

export default function ComingSoon({ unit }: { unit: BrandUnit }) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 text-center">
      <p className="text-sm font-medium text-slate-500">{unit.description}</p>
      <h1 className="mt-2 text-3xl font-bold text-connectx-navy">
        {unit.name}
      </h1>
      <p className="mt-4 text-slate-600">({unit.connectPhrase})</p>
      <p className="mt-12 text-sm text-slate-400">페이지 준비 중입니다.</p>
    </main>
  );
}
