import type { HeroContent } from "@/lib/detail-pages/types";
import HeroIllustration from "@/components/illustrations/HeroIllustration";

export default function Hero({ section }: { section: HeroContent }) {
  return (
    <section id={section.id} className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:gap-16">
        <div className="text-center md:text-left">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
            {section.label}
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-connectx-navy sm:text-5xl">
            {section.title}
          </h1>
          {section.positionBadge && (
            <p className="mt-4 inline-block rounded-full border border-connectx-blue/30 bg-white px-4 py-1.5 font-mono text-xs font-semibold tracking-wide text-connectx-blue">
              {section.positionBadge}
            </p>
          )}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 md:mx-0">
            {section.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            {section.ctas.map((cta, i) => (
              <a
                key={cta.label}
                href={cta.href}
                className={
                  i === 0
                    ? "rounded-md bg-connectx-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-connectx-navy/90"
                    : "rounded-md border border-connectx-navy/20 px-5 py-2.5 text-sm font-semibold text-connectx-navy transition hover:border-connectx-blue hover:text-connectx-blue"
                }
              >
                {cta.label}
              </a>
            ))}
          </div>
        </div>
        <HeroIllustration
          variant={section.illustration}
          className="mx-auto h-56 w-56 md:h-64 md:w-64"
        />
      </div>
    </section>
  );
}
