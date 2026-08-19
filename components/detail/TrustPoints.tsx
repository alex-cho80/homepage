import type { TrustContent } from "@/lib/detail-pages/types";
import type { Tone } from "./DetailPage";

export default function TrustPoints({
  section,
  tone,
}: {
  section: TrustContent;
  tone: Tone;
}) {
  return (
    <section id={section.id} className={tone === "bg-alt" ? "bg-cx-bg-alt" : "bg-cx-bg"}>
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-white">
          {section.heading}
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {section.points.map((point) => (
            <li
              key={point}
              className="rounded-xl border-l-2 border-connectx-blue bg-cx-card p-5 text-sm leading-relaxed text-cx-muted"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
