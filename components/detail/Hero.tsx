import type { HeroContent } from "@/lib/detail-pages/types";

export default function Hero({ section }: { section: HeroContent }) {
  return (
    <section id={section.id} className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
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
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600">
          {section.subtitle}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
    </section>
  );
}
