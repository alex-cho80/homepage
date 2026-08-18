import type { TrustContent } from "@/lib/detail-pages/types";

export default function TrustPoints({ section }: { section: TrustContent }) {
  return (
    <section id={section.id} className="border-t border-slate-200">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-connectx-navy">
          {section.heading}
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {section.points.map((point) => (
            <li
              key={point}
              className="rounded-md border-l-2 border-connectx-blue bg-slate-50 p-5 text-sm leading-relaxed text-slate-600"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
