import type { OfferingsContent } from "@/lib/detail-pages/types";

export default function OfferingsGrid({ section }: { section: OfferingsContent }) {
  return (
    <section id={section.id} className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-center text-2xl font-bold tracking-tight text-connectx-navy">
        {section.heading}
      </h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {section.items.map((item) => (
          <div key={item.title} className="rounded-md border border-slate-200 bg-white p-5">
            <p className="text-sm font-semibold text-connectx-navy">{item.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
          </div>
        ))}
      </div>
      {section.note && (
        <p className="mt-6 text-center text-xs leading-relaxed text-slate-400">{section.note}</p>
      )}
    </section>
  );
}
