import type { FaqContent } from "@/lib/detail-pages/types";

export default function FaqSection({ section }: { section: FaqContent }) {
  return (
    <section id={section.id} className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-connectx-navy">
          {section.heading}
        </h2>
        <dl className="mt-10 space-y-6">
          {section.items.map((item) => (
            <div key={item.question} className="rounded-md border border-slate-200 bg-white p-5">
              <dt className="text-sm font-semibold text-connectx-navy">Q. {item.question}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-slate-600">A. {item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
