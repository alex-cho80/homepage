import type { CtaContent } from "@/lib/detail-pages/types";

function externalProps(href: string) {
  return href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {};
}

export default function CtaSection({ section }: { section: CtaContent }) {
  return (
    <section id={section.id} className="border-t border-white/[0.08] bg-cx-bg-alt">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center sm:py-28">
        <h2 className="text-[32px] font-semibold leading-tight tracking-tight text-white sm:text-[40px]">
          {section.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[17px] leading-[1.6] text-cx-muted">
          {section.body}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={section.primaryHref}
            {...externalProps(section.primaryHref)}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-connectx-blue to-connectx-teal px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_4px_8px_rgba(0,82,255,0.25)] transition hover:opacity-90"
          >
            {section.primaryLabel}
          </a>
          {section.secondaryLabel && section.secondaryHref && (
            <a
              href={section.secondaryHref}
              {...externalProps(section.secondaryHref)}
              className="rounded-full border border-white/[0.12] px-7 py-3.5 text-[15px] font-medium text-cx-muted transition hover:border-white/25 hover:text-white"
            >
              {section.secondaryLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
