import type { CtaContent } from "@/lib/detail-pages/types";

function externalProps(href: string) {
  return href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {};
}

export default function CtaSection({ section }: { section: CtaContent }) {
  return (
    <section id={section.id} className="border-t border-cx-border bg-cx-bg-alt">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {section.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-cx-muted">
          {section.body}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={section.primaryHref}
            {...externalProps(section.primaryHref)}
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-connectx-blue to-connectx-teal px-6 py-3 text-sm font-bold text-white shadow-[0_4px_8px_rgba(0,82,255,0.25)] transition hover:opacity-90"
          >
            {section.primaryLabel}
          </a>
          {section.secondaryLabel && section.secondaryHref && (
            <a
              href={section.secondaryHref}
              {...externalProps(section.secondaryHref)}
              className="rounded-lg border border-cx-border bg-cx-bg px-6 py-3 text-sm font-semibold text-cx-muted transition hover:text-white"
            >
              {section.secondaryLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
