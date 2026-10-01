import type { HeroContent } from "@/lib/detail-pages/types";
import { primaryCtaClass, secondaryCtaClass } from "./ctaButtonStyles";

function externalProps(href: string) {
  return href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {};
}

export default function Hero({ section }: { section: HeroContent }) {
  return (
    <section id={section.id} className="bg-cx-bg">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-24 sm:py-28 md:grid-cols-2 md:gap-20">
        <div className="text-left">
          <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-connectx-teal">
            {section.label}
          </p>
          <h1 className="mt-4 break-keep text-[40px] font-semibold leading-[1.1] tracking-tight text-white sm:text-[52px]">
            {section.title}
          </h1>
          {section.positionBadge && (
            <p className="mt-5 inline-block rounded-full border border-connectx-blue/20 bg-connectx-blue/[0.07] px-4 py-1.5 text-[13px] font-semibold tracking-wide text-connectx-teal">
              {section.positionBadge}
            </p>
          )}
          <p className="mt-6 break-keep text-[17px] leading-[1.6] text-cx-muted">
            {section.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            {section.ctas.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                {...externalProps(cta.href)}
                className={cta.variant === "primary" ? primaryCtaClass : secondaryCtaClass}
              >
                {cta.label}
              </a>
            ))}
          </div>
        </div>
        <img
          src={section.heroImage.src}
          alt={section.heroImage.alt}
          className="aspect-[4/3] w-full rounded-[24px] object-cover object-right shadow-[3px_5px_30px_rgba(0,0,0,0.35)]"
        />
      </div>
    </section>
  );
}
