import type { ProblemContent } from "@/lib/detail-pages/types";
import type { Tone } from "./DetailPage";

export default function ProblemStatement({
  section,
  tone,
}: {
  section: ProblemContent;
  tone: Tone;
}) {
  return (
    <section id={section.id} className={tone === "bg-alt" ? "bg-cx-bg-alt" : "bg-cx-bg"}>
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-white">
          {section.heading}
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {section.items.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-cx-border bg-cx-card p-5 text-sm leading-relaxed text-cx-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
