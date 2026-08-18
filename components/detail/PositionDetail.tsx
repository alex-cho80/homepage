import type { PositionDetailContent } from "@/lib/detail-pages/types";

export default function PositionDetail({ section }: { section: PositionDetailContent }) {
  return (
    <section id={section.id} className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-center text-2xl font-bold tracking-tight text-connectx-navy">
        {section.heading}
      </h2>
      <div className="mt-8 space-y-4">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-sm leading-relaxed text-slate-600">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
