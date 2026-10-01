import type { CtaContent } from "@/lib/detail-pages/types";
import { primaryCtaClass, secondaryCtaClass } from "./ctaButtonStyles";

function externalProps(href: string) {
  return href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {};
}

export default function CtaSection({ section }: { section: CtaContent }) {
  return (
    <section id={section.id} className="border-t border-white/[0.08] bg-cx-bg-alt">
      <div className="mx-auto max-w-3xl px-6 py-24 text-left sm:py-28">
        <h2
          className={
            section.headingClassName ??
            "break-keep text-[32px] font-semibold leading-tight tracking-tight text-white sm:text-[40px]"
          }
        >
          {section.heading}
        </h2>
        <p className="mt-5 max-w-xl whitespace-pre-line break-keep text-[17px] leading-[1.6] text-cx-muted">
          {section.body}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={section.primaryHref}
            {...externalProps(section.primaryHref)}
            className={primaryCtaClass}
          >
            {section.primaryLabel}
          </a>
          {section.secondaryLabel && section.secondaryHref && (
            <a
              href={section.secondaryHref}
              {...externalProps(section.secondaryHref)}
              className={secondaryCtaClass}
            >
              {section.secondaryLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
