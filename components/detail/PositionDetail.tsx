import type { PositionDetailContent } from "@/lib/detail-pages/types";
import type { Tone } from "./DetailPage";

export default function PositionDetail({
  section,
  tone,
}: {
  section: PositionDetailContent;
  tone: Tone;
}) {
  return (
    <section id={section.id} className={tone === "bg-alt" ? "bg-cx-bg-alt" : "bg-cx-bg"}>
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-white">
          {section.heading}
        </h2>
        <div className="mt-8 space-y-4">
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-sm leading-relaxed text-cx-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
