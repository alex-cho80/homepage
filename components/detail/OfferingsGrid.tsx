import type { OfferingsContent } from "@/lib/detail-pages/types";
import type { Tone } from "./DetailPage";
import SectionHeading from "./SectionHeading";

export default function OfferingsGrid({
  section,
  tone,
}: {
  section: OfferingsContent;
  tone: Tone;
}) {
  return (
    <section id={section.id} className={tone === "bg-alt" ? "bg-cx-bg-alt" : "bg-cx-bg"}>
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
        <SectionHeading>{section.heading}</SectionHeading>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {section.items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/[0.08] bg-cx-card p-7">
              <p className="text-[15px] font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-sm leading-[1.6] text-cx-muted">{item.body}</p>
            </div>
          ))}
        </div>
        {section.note && (
          <p className="mt-8 text-center text-xs leading-relaxed text-cx-dim">{section.note}</p>
        )}
      </div>
    </section>
  );
}
