import type { ProcessContent } from "@/lib/detail-pages/types";
import type { Tone } from "./DetailPage";
import SectionHeading from "./SectionHeading";

export default function ProcessSteps({
  section,
  tone,
}: {
  section: ProcessContent;
  tone: Tone;
}) {
  return (
    <section id={section.id} className={tone === "bg-alt" ? "bg-cx-bg-alt" : "bg-cx-bg"}>
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
        <SectionHeading>{section.heading}</SectionHeading>
        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {section.steps.map((step, i) => (
            <li key={step.label} className="rounded-2xl border border-white/[0.08] bg-cx-card p-7">
              <span className="text-[28px] font-semibold text-connectx-teal">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-[15px] font-semibold text-white">{step.label}</p>
              <p className="mt-2 text-sm leading-[1.6] text-cx-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
