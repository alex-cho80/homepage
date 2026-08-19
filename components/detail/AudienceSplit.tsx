import Link from "next/link";
import type { AudienceSplitContent } from "@/lib/detail-pages/types";
import type { Tone } from "./DetailPage";

export default function AudienceSplit({
  section,
  tone,
}: {
  section: AudienceSplitContent;
  tone: Tone;
}) {
  return (
    <section id={section.id} className={tone === "bg-alt" ? "bg-cx-bg-alt" : "bg-cx-bg"}>
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-white">
          {section.heading}
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {section.columns.map((column) => (
            <div key={column.title} className="rounded-xl border border-cx-border bg-cx-card p-6">
              <p className="text-sm font-bold text-white">{column.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-cx-muted">{column.body}</p>
              {column.linkLabel && column.linkHref && (
                <Link
                  href={column.linkHref}
                  className="mt-4 inline-block text-xs font-semibold uppercase tracking-widest text-connectx-teal hover:opacity-80"
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
