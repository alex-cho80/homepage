import type { ProcessContent } from "@/lib/detail-pages/types";
import type { Tone } from "./DetailPage";

export default function ProcessSteps({
  section,
  tone,
}: {
  section: ProcessContent;
  tone: Tone;
}) {
  return (
    <section id={section.id} className={tone === "bg-alt" ? "bg-cx-bg-alt" : "bg-cx-bg"}>
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-white">
          {section.heading}
        </h2>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {section.steps.map((step, i) => (
            <li key={step.label} className="rounded-2xl border border-cx-border bg-cx-card p-5">
              <span className="text-2xl font-extrabold text-connectx-teal">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 text-sm font-bold text-white">{step.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-cx-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
