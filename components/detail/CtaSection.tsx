import type { CtaContent } from "@/lib/detail-pages/types";

function externalProps(href: string) {
  return href.startsWith("http")
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
}

export default function CtaSection({ section }: { section: CtaContent }) {
  return (
    <section id={section.id} className="border-t border-slate-200">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-connectx-navy">{section.heading}</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-600">{section.body}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={section.primaryHref}
            {...externalProps(section.primaryHref)}
            className="rounded-md bg-connectx-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-connectx-navy/90"
          >
            {section.primaryLabel}
          </a>
          {section.secondaryLabel && section.secondaryHref && (
            <a
              href={section.secondaryHref}
              {...externalProps(section.secondaryHref)}
              className="rounded-md border border-connectx-navy/20 px-6 py-3 text-sm font-semibold text-connectx-navy transition hover:border-connectx-accent hover:text-connectx-accent"
            >
              {section.secondaryLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
