import type { ProcessContent } from "@/lib/detail-pages/types";

export default function ProcessSteps({ section }: { section: ProcessContent }) {
  return (
    <section id={section.id} className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-connectx-navy">
          {section.heading}
        </h2>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {section.steps.map((step, i) => (
            <li key={step.label} className="rounded-md border border-connectx-navy/15 bg-slate-50 p-5">
              <span className="font-mono text-xs tracking-widest text-connectx-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 text-sm font-semibold text-connectx-navy">{step.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
