import Link from "next/link";
import type { AudienceSplitContent } from "@/lib/detail-pages/types";
import type { Tone } from "./DetailPage";
import SectionHeading from "./SectionHeading";

export default function AudienceSplit({
  section,
  tone,
}: {
  section: AudienceSplitContent;
  tone: Tone;
}) {
  return (
    <section id={section.id} className={tone === "bg-alt" ? "bg-cx-bg-alt" : "bg-cx-bg"}>
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-28">
        <SectionHeading>{section.heading}</SectionHeading>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {section.columns.map((column) => (
            <div key={column.title} className="rounded-2xl border border-white/[0.08] bg-cx-card p-8">
              <p className="text-[15px] font-semibold text-white">{column.title}</p>
              <p className="mt-3 text-[15px] leading-[1.6] text-cx-muted">{column.body}</p>
              {column.linkLabel && column.linkHref && (
                <Link
                  href={column.linkHref}
                  className="mt-5 inline-block text-[13px] font-semibold uppercase tracking-[0.06em] text-connectx-teal hover:opacity-80"
                >
                  {column.linkLabel}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
