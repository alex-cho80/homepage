import type { OfferingsContent } from "@/lib/detail-pages/types";
import type { Tone } from "./DetailPage";

export default function OfferingsGrid({
  section,
  tone,
}: {
  section: OfferingsContent;
  tone: Tone;
}) {
  return (
    <section id={section.id} className={tone === "bg-alt" ? "bg-cx-bg-alt" : "bg-cx-bg"}>
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-white">
          {section.heading}
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {section.items.map((item) => (
            <div key={item.title} className="rounded-xl border border-cx-border bg-cx-card p-5">
              <p className="text-sm font-bold text-white">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-cx-muted">{item.body}</p>
            </div>
          ))}
        </div>
        {section.note && (
          <p className="mt-6 text-center text-xs leading-relaxed text-cx-dim">{section.note}</p>
        )}
      </div>
    </section>
  );
}
