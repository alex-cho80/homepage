import type { ProblemContent } from "@/lib/detail-pages/types";

export default function ProblemStatement({ section }: { section: ProblemContent }) {
  return (
    <section id={section.id} className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-center text-2xl font-bold tracking-tight text-connectx-navy">
        {section.heading}
      </h2>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {section.items.map((item) => (
          <li
            key={item}
            className="rounded-md border border-slate-200 bg-white p-5 text-sm leading-relaxed text-slate-600"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
