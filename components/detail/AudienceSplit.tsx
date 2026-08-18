import Link from "next/link";
import type { AudienceSplitContent } from "@/lib/detail-pages/types";

export default function AudienceSplit({ section }: { section: AudienceSplitContent }) {
  return (
    <section id={section.id} className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-connectx-navy">
          {section.heading}
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {section.columns.map((column) => (
            <div key={column.title} className="rounded-md border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold text-connectx-navy">{column.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{column.body}</p>
              {column.linkLabel && column.linkHref && (
                <Link
                  href={column.linkHref}
                  className="mt-4 inline-block text-xs font-semibold uppercase tracking-widest text-connectx-blue hover:underline"
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
