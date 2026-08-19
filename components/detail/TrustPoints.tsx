import type { TrustContent } from "@/lib/detail-pages/types";
import type { Tone } from "./DetailPage";
import SectionHeading from "./SectionHeading";

export default function TrustPoints({
  section,
  tone,
}: {
  section: TrustContent;
  tone: Tone;
}) {
  return (
    <section id={section.id} className={tone === "bg-alt" ? "bg-cx-bg-alt" : "bg-cx-bg"}>
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-28">
        <SectionHeading>{section.heading}</SectionHeading>
        <ul className="mt-14 grid gap-6 sm:grid-cols-3">
          {section.points.map((point) => (
            <li
              key={point}
              className="rounded-2xl border border-white/[0.08] bg-cx-card p-7 text-[15px] leading-[1.6] text-cx-muted"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
