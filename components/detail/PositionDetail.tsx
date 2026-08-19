import type { PositionDetailContent } from "@/lib/detail-pages/types";
import type { Tone } from "./DetailPage";
import SectionHeading from "./SectionHeading";

export default function PositionDetail({
  section,
  tone,
}: {
  section: PositionDetailContent;
  tone: Tone;
}) {
  return (
    <section id={section.id} className={tone === "bg-alt" ? "bg-cx-bg-alt" : "bg-cx-bg"}>
      <div className="mx-auto max-w-3xl px-6 py-24 sm:py-28">
        <SectionHeading>{section.heading}</SectionHeading>
        <div className="mt-10 space-y-5">
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-[17px] leading-[1.6] text-cx-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
